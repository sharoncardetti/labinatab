// Asserts guide prose can only name controls that exist on screen at that level.
import fs from 'node:fs';
const src=fs.readFileSync('index.html','utf8');
const grab=(s,e)=>{const a=src.indexOf(s),b=src.indexOf(e,a);return src.slice(a,b+e.length);};
const LAB=new Function(grab('const SIM_LABELS={','\n};')+'\nreturn SIM_LABELS;')();
const G=new Function(grab('const SIM_GUIDE={','}; // end SIM_GUIDE')+'\nreturn SIM_GUIDE;')();
const fill=(t,l)=>String(t).replace(/\[\[(\w+)\]\]/g,(m,k)=>l&&l[k]?l[k]:m);
let bad=0,texts=0,tok=0;
for(const id of Object.keys(G)){
  if(!LAB[id]){console.log('X no SIM_LABELS for',id);bad++;continue;}
  for(const lvl of ['junior','student','scholar']){
    const lab=LAB[id][lvl];
    if(!lab){console.log('X no labels',id,lvl);bad++;continue;}
    if(!G[id][lvl]){console.log('X no guide',id,lvl);bad++;continue;}
    for(const part of ['legend','try','notice']){
      const raw=G[id][lvl][part];
      if(!raw){console.log('X missing',id,lvl,part);bad++;continue;}
      texts++;
      for(const m of raw.matchAll(/\[\[(\w+)\]\]/g)){tok++;
        if(!lab[m[1]]){console.log('X unresolved',m[0],'in',id,lvl,part);bad++;}}
      let out=fill(raw,lab);
      for(const k of Object.keys(lab)) out=out.split(lab[k]).join('@@');
      for(const other of Object.keys(LAB[id])){ if(other===lvl)continue;
        for(const k of Object.keys(LAB[id][other])){
          const wrong=LAB[id][other][k];
          if(wrong===lab[k])continue;
          if(out.includes(wrong)){console.log('X',id,lvl,part,'names "'+wrong+'" but screen shows "'+lab[k]+'"');bad++;}}}
      const b4=(raw.match(/\\?(sqrt|frac|text|mathcal|tfrac|langle)\{/g)||[]).length;
      const af=(out.match(/\\?(sqrt|frac|text|mathcal|tfrac|langle)\{/g)||[]).length;
      if(b4!==af){console.log('X LaTeX damaged',id,lvl,part);bad++;}
    }
  }
}
// every label must actually exist in that sim's source
// topic id -> sim function name, read from the buildSim map so this can never go stale
const FN=Object.fromEntries([...grab('function buildSim(','if(map[id])').matchAll(/(\w+)\s*:\s*(sim\w+)/g)].map(m=>[m[1],m[2]]));
function body(fn){const i=src.indexOf('function '+fn+'(');let d=0,st=false,j=i;
  for(;j<src.length;j++){const c=src[j];if(c==='{'){d++;st=true;}else if(c==='}'){d--;if(st&&d===0){j++;break;}}}return src.slice(i,j);}
for(const id of Object.keys(LAB)){
  const b=body(FN[id]);
  const usesMap=b.includes("simLabels('"+id+"'");
  for(const lvl of Object.keys(LAB[id])) for(const [k,v] of Object.entries(LAB[id][lvl])){
    if(usesMap) continue;                       // sim reads labels from the map
    if(!b.includes("'"+v+"'")&&!b.includes('"'+v+'"')){
      console.log('X label "'+v+'" ('+id+'.'+k+') not found in '+FN[id]+' source');bad++;}
  }
}
console.log('--- sims covered: '+Object.keys(G).length+'/32   texts: '+texts+'   tokens: '+tok+'   PROBLEMS: '+bad);
