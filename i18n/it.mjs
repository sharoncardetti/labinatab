// Italian overlay. build-pages.mjs merges this over the English `S` (EN fallback
// per field). A topic appears under /it/ ONLY if it has an entry in `t` below.
export default {
  code: 'it', name: 'Italiano', flag: '<svg class="flag" viewBox="0 0 3 2" aria-hidden="true"><rect width="3" height="2" fill="#fff"/><rect width="1" height="2" fill="#009246"/><rect x="2" width="1" height="2" fill="#ce2b37"/></svg>', htmlLang: 'it', locale: 'it_IT', prefix: 'it/',
  // Unified UI schema — mirrors `const UI` in index.html. Injected verbatim as the
  // SPA clone's UI, and read by the per-topic static pages. Pure data (no functions).
  ui: {
    levelBar:{junior:'🌱 Base',student:'🔬 Studente',scholar:'🎓 Esperto'},
    levelShort:{junior:'Base 🌱',student:'Studente 🔬',scholar:'Esperto 🎓'},
    levelName:{junior:'Base',student:'Studente',scholar:'Esperto'},
    htag:'✨ L\'esperienza scientifica interattiva',
    h1:'Scopri il mondo<br>con <em>curiosità</em>',
    heroSub:{
      junior:'Scegli un argomento che ti appassiona: ogni scheda apre un mondo di simulazioni interattive e spiegazioni pensate per te.',
      student:'Esplora la scienza con equazioni reali, simulazioni interattive e spiegazioni approfondite. Clicca una scheda per iniziare!',
      scholar:'Derivazioni rigorose, notazione matematica precisa e profondità completa. Ogni argomento dai primi principi.'
    },
    hint:{
      junior:'Stai esplorando come <strong>Base</strong> 🌱 - tocca una scheda per iniziare!',
      student:'Stai esplorando come <strong>Studente</strong> 🔬 - equazioni e teoria ti aspettano!',
      scholar:'Stai esplorando come <strong>Esperto</strong> 🎓 - massima profondità matematica!'
    },
    searchPlaceholder:'Cerca esperimenti…',
    all:'Tutti',
    countAll:'{n} esperimenti',
    countSome:'{shown} di {total}',
    noResults:'Nessun esperimento corrisponde alla ricerca. Prova un\'altra parola o azzera i filtri.',
    subjects:{'⚛️ Physics':'Fisica','🔢 Mathematics':'Matematica','🧬 Biology':'Biologia','💻 Computer Science':'Informatica','⚗️ Chemistry':'Chimica','🌍 Earth Science':'Scienze della Terra','🌌 Astronomy':'Astronomia','🧠 Neuroscience':'Neuroscienze'},
    tabs:{discover:'Scopri',simulate:'Simula',deeper:'Approfondisci'},
    keyFormulas:'Formule chiave',
    tryThis:'Prova',
    simHint:'🕹️ Simulazione interattiva - usa i controlli qui sotto per esplorare',
    whatSeeing:'Cosa stai vedendo',
    whatNotice:'Cosa notare',
    footer:{
      about:'Simulazioni scientifiche pratiche in nove ambiti, ognuna scritta per tre livelli: da un curioso decenne a uno studente universitario. Gratis, senza account, senza tracciamento.',
      exploreBySubject:'Esplora per materia',
      allExperiments:'Tutti gli esperimenti',
      madeFor:'fatto per menti curiose',
      contact:'Contatti',
      attrib:'Concetti da Wikipedia e risorse educative aperte',
      ai:'Le spiegazioni di questo sito sono redatte con l\'aiuto di IA generativa.',
      aiLink:'Come usiamo l\'IA'
    },
    deeper:{
      keepExploring:'📚 Continua a esplorare',
      explored:'Hai esplorato <strong>{title}</strong> al livello <strong>{level}</strong>.',
      switchTo:'Passa a <strong>{next}</strong> (in cima alla pagina) per sbloccare spiegazioni più approfondite e matematica più avanzata.',
      deepest:'Hai raggiunto il livello più profondo - la frontiera matematica completa! 🏔️',
      sources:'🔗 Fonti affidabili',
      wiki:'Articolo completo su Wikipedia ↗',wikiNote:'il riferimento enciclopedico per questo argomento.',
      youtube:'Spiegazioni video su YouTube ↗',youtubeNote:'una ricerca dal vivo per «{title}».',
      scholar:'Articoli su Google Scholar ↗',scholarNote:'la letteratura primaria.',
      experiment:'🧪 Sperimenta tu stesso',
      experimentBody:'Torna alla scheda <strong>Simula</strong> e porta ogni cursore agli estremi. Nota cosa cambia e cosa resta costante. La scienza è fare domande «e se?» - la simulazione è il tuo laboratorio!'
    },
    themeToggle:'Attiva/disattiva tema scuro',language:'Lingua',
    levels:{junior:{label:'Base',blurb:'linguaggio semplice, senza matematica'},student:{label:'Studente',blurb:'le equazioni principali'},scholar:{label:'Esperto',blurb:'profondità matematica completa'}},
    levelNote:'Livello {label} — {blurb}',
    worthKnowing:'Da sapere',
    sources:'Fonti',
    wikiLink:'Articolo completo su Wikipedia ↗',
    moreIn:'Altro in',
    runSim:'▶ Avvia la simulazione interattiva',
    explainedSimulated:'Spiegato e simulato'
  },
  slugs: { seriesparallel: 'circuiti-serie-parallelo', respiration: 'respirazione-cellulare', watercycle: 'ciclo-dell-acqua', energy: 'energia-conservazione', gaslaws: 'leggi-dei-gas', moonphases: 'fasi-lunari', protein: 'sintesi-proteica', pendulum: 'pendolo-moto-armonico', optics: 'ottica-luce-lenti', memory: 'come-funziona-la-memoria', sleep: 'sonno-coscienza', neuro: 'cervello-neuroni', neuron: 'cervello-elettrico', astro: 'stelle-universo', cosmology: 'cosmologia-big-bang', organic: 'chimica-organica-molecole-vita', acids: 'acidi-basi-ph', periodic: 'tavola-periodica', balancing: 'bilanciare-equazioni-chimiche', chem: 'atomi-legami-chimici', electrochem: 'elettrochimica-batterie', kinetics: 'cinetica-equilibrio', volcano: 'vulcanologia', seasons: 'perche-abbiamo-le-stagioni', climate: 'clima-atmosfera', tectonics: 'tettonica-a-placche-terremoti', ocean: 'oceanografia-correnti-oceaniche', sorting: 'algoritmi-di-ordinamento', ml: 'machine-learning-reti-neurali', crypto: 'crittografia-sicurezza', complexity: 'computazione-complessita', ecosystem: 'ecosistemi-reti-alimentari', cell: 'cellula-osmosi-diffusione', mitosis: 'mitosi-meiosi', punnett: 'quadrati-di-punnett-genetica', life: 'regole-della-vita', dna: 'dna-genetica', evolution: 'evoluzione-selezione-naturale', graphs: 'teoria-dei-grafi-reti', trig: 'trigonometria-cerchio-unitario', prob: 'probabilita-curva-a-campana', fractal: 'frattali-infinito', calculus: 'calcolo-cambiamento', circuits: 'legge-di-ohm-circuiti', states: 'stati-della-materia', thermo: 'calore-termodinamica', particles: 'modello-standard', newton: 'leggi-del-moto-di-newton', gravity: 'gravita-orbite', projectile: 'moto-dei-proiettili', waves: 'onde-interferenza', photosynthesis: 'fotosintesi', eclipse: 'eclissi', meteors: 'stelle-cadenti', blackholes: 'buchi-neri', solarsystem: 'sistema-solare' },
  t: {
    seriesparallel: {
      title: 'Circuiti in serie e in parallelo',
      teaser: `Collega due lampadine una dopo l'altra e si affievoliscono entrambe; collegale affiancate e brillano entrambe. Stessi componenti, comportamento opposto — ed è esattamente perché casa tua è cablata così com'è.`,
      chips: ['Circuiti', 'Resistenza', 'Corrente'],
      lvls: {
        junior: {
          title: `Due modi di cablare, due risultati molto diversi`,
          body: `<p>Prendi una batteria e due lampadine identiche. Ci sono due modi di collegarle, e si comportano in modi sorprendentemente opposti. Cabla le lampadine una dopo l'altra, in un unico anello, e hai un <strong>circuito in serie</strong>. Cabla ogni lampadina sul proprio ramo separato, affiancate, e hai un <strong>circuito in parallelo</strong>. Stessa batteria, stesse lampadine — risultati completamente diversi.</p>
<p>In <strong>serie</strong>, la stessa corrente deve infilarsi attraverso entrambe le lampadine, prima una poi l'altra, come perline su un solo filo. Poiché le due lampadine si dividono la spinta di una batteria, ciascuna ne riceve solo metà, così brillano entrambe fioche. Peggio, se una lampadina si fulmina, l'anello è interrotto ed <em>entrambe</em> si spengono — è esattamente come le vecchie luci di Natale facevano infuriare tutti: una sola guasta uccideva l'intera fila.</p>
<p>In <strong>parallelo</strong>, ogni lampadina ha il proprio percorso dritto alla batteria, così ognuna sente la spinta piena della batteria e splende luminosa. Svitane una e l'altra continua a brillare, perché il suo percorso è intatto. Ecco perché casa tua è cablata in parallelo: ogni lampada ed elettrodomestico riceve la tensione piena, e spegnere il bollitore non piomba tutta la casa nel buio. Nella simulazione qui sotto, alterna tra i due e guarda le lampadine.</p>`,
          facts: [
            { e: '🎄', t: `Le vecchie luci di Natale erano cablate in serie, così una singola lampadina bruciata spegneva l'intera fila — quelle moderne usano trucchi astuti simili al parallelo per evitarlo.` },
            { e: '🏠', t: `Ogni casa è cablata in parallelo: ecco perché ogni presa eroga i 230 (o 120) volt pieni, e perché il guasto di un elettrodomestico non uccide tutti gli altri.` },
            { e: '🔦', t: `Una torcia con due batterie in serie raddoppia la tensione per spingere più forte; metterle in parallelo invece manterrebbe la tensione ma farebbe durare le batterie il doppio.` },
          ],
          formula: null, sim: 'seriesparallel',
        },
        student: {
          title: `Sommare le resistenze, e come si dividono corrente e tensione`,
          body: `<p>I due cablaggi obbediscono a regole speculari. In <strong>serie</strong>, c'è un solo percorso, così la stessa corrente \\(I\\) scorre ovunque, e le resistenze semplicemente si sommano: \\(R_{\\text{serie}} = R_1 + R_2\\). La tensione della batteria si divide tra i componenti in proporzione alla loro resistenza. Due lampadine da \\(10\\ \\Omega\\) su una batteria da \\(6\\ \\text{V}\\) danno \\(20\\ \\Omega\\) totali e una corrente di appena \\(0.3\\ \\text{A}\\), con \\(3\\ \\text{V}\\) caduti su ciascuna lampadina.</p>
<p>In <strong>parallelo</strong>, ogni ramo sente la tensione <em>piena</em> della batteria, e sono le correnti a sommarsi. Le resistenze si combinano in modo reciproco: \\(\\dfrac{1}{R_{\\text{par}}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}\\), che dà sempre un totale <em>più piccolo</em> di ciascun ramo. Quelle stesse due lampadine da \\(10\\ \\Omega\\) ora fanno appena \\(5\\ \\Omega\\), tirando \\(1.2\\ \\text{A}\\) dalla batteria — quattro volte la corrente in serie — con ogni lampadina che riceve i \\(6\\ \\text{V}\\) pieni e brilla molto più luminosa.</p>
<p>La luminosità segue la <strong>potenza</strong>, \\(P = VI = I^2R\\). In serie ogni lampadina dissipa \\(I^2R = 0.3^2\\times10 \\approx 0.9\\ \\text{W}\\); in parallelo ognuna brucia \\(0.6^2\\times10 = 3.6\\ \\text{W}\\), quattro volte tanto. Quel fattore quattro è esattamente ciò che vedi come salto di luminosità. Avverte anche perché i rami in parallelo possono sovraccaricare un'alimentazione: aggiungine altri e la corrente totale continua a salire, ed è ciò che fa scattare il salvavita di casa.</p>`,
          facts: [
            { e: '⚡', t: `La resistenza in parallelo è sempre minore del ramo più piccolo: aggiungi una seconda resistenza identica e il totale si dimezza, perché hai aperto una seconda corsia per la corrente.` },
            { e: '🔌', t: `Aggiungere elettrodomestici in parallelo aumenta la corrente totale prelevata — collegane troppi a un circuito e il filo si surriscalda, ed è esattamente ciò che un fusibile o un salvavita è lì a fermare.` },
            { e: '🔋', t: `Le batterie in serie sommano le loro tensioni (due celle da 1,5 V → 3 V); in parallelo mantengono la tensione ma si dividono il carico, durando di più e fornendo più corrente.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Resistenza in serie', e: 'R_s = R_1 + R_2', c: 'stessa corrente I' },
            { n: 'Resistenza in parallelo', e: '\\dfrac{1}{R_p} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}', c: 'stessa tensione V' },
            { sep: 1 },
            { n: 'Legge di Ohm', e: 'V = IR' },
            { n: 'Potenza', e: 'P = VI = I^2 R' },
            { sep: 1 },
            { n: 'La serie divide V', e: 'V_1:V_2 = R_1:R_2' },
            { n: 'Il parallelo divide I', e: 'I_1:I_2 = R_2:R_1' },
          ] }, sim: 'seriesparallel',
        },
        scholar: {
          title: `Le leggi di Kirchhoff, sorgenti reali e riduzione di reti`,
          body: `<h4><span class="hn">01</span>Le due leggi di conservazione dietro ogni circuito</h4>
<p>Serie e parallelo sono solo casi particolari di due regole più profonde. La <strong>legge delle correnti di Kirchhoff</strong> dice che la carica si conserva a ogni nodo — correnti entranti uguali a correnti uscenti, \\(\\sum I = 0\\) — ed è il <em>perché</em> le correnti dei rami in parallelo si sommano. La <strong>legge delle tensioni di Kirchhoff</strong> dice che l'energia si conserva lungo ogni anello — le salite e cadute di tensione sommano a zero, \\(\\sum V = 0\\) — ed è il <em>perché</em> le tensioni in serie si dividono. Ogni analisi di circuito, per quanto aggrovigliata, si riduce ad applicare queste due affermazioni.</p>
<h4><span class="hn">02</span>Collassare una rete</h4>
<p>Con quelle leggi puoi rimpicciolire qualsiasi rete di resistori fondendo ripetutamente gruppi in serie e in parallelo in equivalenti, finché non resta una sola resistenza. I circuiti che resistono a questo — il classico <em>ponte di Wheatstone</em> — richiedono le equazioni simultanee complete (analisi ai nodi o alle maglie), che è in realtà solo le leggi di Kirchhoff scritte come algebra lineare. Il ponte non è una curiosità: bilanciato, misura una resistenza incognita con precisione squisita, ed è alla base di estensimetri e innumerevoli sensori.</p>
<h4><span class="hn">03</span>Nessuna batteria è ideale</h4>
<p>Le sorgenti reali hanno una <strong>resistenza interna</strong> \\(r\\), così la tensione che ottieni davvero cede sotto carico: \\(V_{\\text{morsetti}} = \\varepsilon - Ir\\). Ecco perché i fari di un'auto si affievoliscono per un istante quando il motorino d'avviamento — un carico enorme a bassa resistenza — tira centinaia di ampere, e perché una batteria quasi scarica (la cui \\(r\\) è salita) può leggere una tensione sana eppure collassare nel momento in cui le chiedi corrente. La batteria ideale degli schemi è sempre un'approssimazione.</p>
<h4><span class="hn">04</span>Massima potenza, e il suo costo</h4>
<p>Quanto carico estrae la massima potenza da una sorgente reale? Il <strong>teorema del massimo trasferimento di potenza</strong> dice che la potenza erogata culmina quando la resistenza di carico eguaglia la resistenza interna della sorgente, \\(R_L = r\\). Ma a quel match solo <em>metà</em> dell'energia raggiunge il carico; il resto è sprecato a scaldare la sorgente. L'elettronica di potenza evita quindi deliberatamente la condizione di match — la rete elettrica gira \\(R_L \\gg r\\) per efficienza — mentre gli ingegneri radio e audio abbracciano il match, dove trasferire il segnale conta più che sprecare un po' di potenza.</p>
<h4><span class="hn">05</span>Quando i componenti ricordano: i transitori</h4>
<p>Aggiungi un condensatore o un induttore e il circuito acquista memoria del tempo. Un circuito <em>RC</em> si carica e scarica su una scala temporale \\(\\tau = RC\\), seguendo \\(V(t) = V_0(1 - e^{-t/\\tau})\\); un circuito <em>RL</em> fa la cosa analoga con \\(\\tau = L/R\\). Questi transitori esponenziali fissano quanto in fretta un circuito può commutare, filtrano quali frequenze passano e — concatenati insieme — diventano gli elementi di temporizzazione e i filtri al cuore di ogni dispositivo elettronico.</p>
<h4><span class="hn">06</span>Oltre gli elementi concentrati</h4>
<p>Tutto questo assume componenti <em>concentrati</em> uniti da fili senza resistenza — un'approssimazione che regge finché il circuito è molto più piccolo della lunghezza d'onda del segnale. Spingi ad alte frequenze e i fili stessi diventano linee di trasmissione con la propria impedenza, i segnali si riflettono sui disadattamenti, e le ordinate leggi di Kirchhoff cedono il passo alle equazioni di Maxwell. L'umile distinzione serie-parallelo è il primo gradino di una scala che sale fino all'ingegneria delle microonde e alla progettazione di ogni chip digitale veloce.</p>`,
          facts: [
            { e: '🌉', t: `Il ponte di Wheatstone, non riducibile con semplice riduzione serie-parallelo, misura resistenze incognite con alta precisione ed è la base degli estensimetri in bilance e sensori di carico.` },
            { e: '🚗', t: `La resistenza interna spiega perché i fari si affievoliscono quando aziona il motorino d'avviamento: l'enorme corrente dell'avviamento abbassa la tensione ai morsetti attraverso la resistenza stessa della batteria.` },
            { e: '⏱️', t: `La costante di tempo τ = RC di un circuito RC fissa la velocità di tutto, dai flash delle macchine fotografiche alla temporizzazione del clock dentro i microprocessori — la carica esponenziale è ovunque.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Corrente di Kirchhoff', e: '\\textstyle\\sum I_{\\text{in}} = \\sum I_{\\text{out}}' },
            { n: 'Tensione di Kirchhoff', e: '\\textstyle\\sum_{\\text{anello}} V = 0' },
            { sep: 1 },
            { n: 'Tensione ai morsetti', e: 'V = \\varepsilon - Ir', c: 'resistenza interna r' },
            { n: 'Max trasferimento potenza', e: 'R_L = r', c: 'solo 50% efficiente' },
            { sep: 1 },
            { n: 'Transitorio RC', e: 'V(t) = V_0(1 - e^{-t/RC})' },
            { n: 'Costante di tempo', e: '\\tau = RC' },
          ] }, sim: 'seriesparallel',
        },
      },
    },
    respiration: {
      title: 'La respirazione cellulare',
      teaser: `Ogni cellula del tuo corpo brucia zucchero con l'ossigeno per fare ATP, il carburante universale della vita — un fuoco lento e squisitamente controllato che alimenta tutto ciò che fai.`,
      chips: ['ATP', 'Mitocondri', 'Metabolismo'],
      lvls: {
        junior: {
          title: `Come le tue cellule trasformano il cibo in energia`,
          body: `<p>Mangi cibo per ottenere energia — ma il tuo corpo non può bruciare un panino in una grande fiammata. Invece, ognuna dei tuoi migliaia di miliardi di cellule fa girare una versione lenta, attenta e controllata della combustione chiamata <strong>respirazione cellulare</strong>. Prende lo zucchero dal tuo cibo, lo combina con l'ossigeno che respiri e rilascia l'energia immagazzinata poco a poco, in sicurezza, esattamente dove e quando la cellula ne ha bisogno.</p>
<p>L'energia non esce come una fiamma — esce come una minuscola molecola-batteria ricaricabile chiamata <strong>ATP</strong>. Pensa all'ATP come alla valuta energetica universale della vita: ogni volta che una cellula deve fare qualcosa — flettere un muscolo, far scattare un nervo, costruire una proteina — spende ATP. L'intero compito della respirazione è continuare a fabbricare ATP fresco, e lo fa a un ritmo stupefacente.</p>
<p>La maggior parte di questo avviene dentro minuscole strutture a forma di fagiolo chiamate <strong>mitocondri</strong>, le centrali elettriche della cellula. Entrano glucosio e ossigeno; escono anidride carbonica, acqua e tanto ATP. Quell'anidride carbonica è esattamente ciò che espiri — così ogni espirazione è le tue cellule che finiscono il lavoro. Nella simulazione qui sotto, dai a un mitocondrio glucosio e ossigeno e guarda l'ATP sgorgare.</p>`,
          facts: [
            { e: '🔋', t: `Il tuo corpo fabbrica e spende ogni singolo giorno il proprio peso in ATP — ma ne trattieni solo una quantità minuscola alla volta, riciclando ogni molecola migliaia di volte al giorno.` },
            { e: '🫁', t: `L'anidride carbonica che espiri viene dritta dalle tue cellule che bruciano zucchero — ogni espirazione è lo scarico della respirazione cellulare.` },
            { e: '🏃', t: `Quando scatti più forte di quanto i polmoni possano fornire ossigeno, i muscoli passano a un rapido rimedio senza ossigeno che produce molta meno energia e lascia dietro di sé l'acido lattico che ti fa indolenzire.` },
          ],
          formula: null, sim: 'respiration',
        },
        student: {
          title: `Glicolisi, ciclo di Krebs e catena di trasporto degli elettroni`,
          body: `<p>La respirazione cellulare estrae energia dal glucosio in tre stadi collegati, riassunti da un'equazione ingannevolmente semplice: \\(C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + \\text{ATP}\\). Prima viene la <strong>glicolisi</strong>, nel citoplasma: il glucosio è scisso in due molecole di piruvato, con una piccola resa netta di 2 ATP e un po' di NADH portatore di elettroni. Fatto cruciale, la glicolisi non ha bisogno di ossigeno — è il nucleo antico che tutta la vita condivide.</p>
<p>Se l'ossigeno è presente, il piruvato entra nel mitocondrio per il <strong>ciclo di Krebs</strong> (ciclo dell'acido citrico), che lo smonta, rilasciando \\(CO_2\\) e caricando altri portatori di elettroni — NADH e FADH₂. Questi portatori sono il vero premio: traghettano elettroni ad alta energia al terzo stadio, la <strong>catena di trasporto degli elettroni</strong>, costellata sulla membrana interna del mitocondrio, dove il grosso dell'ATP è finalmente fatto.</p>
<p>Il conteggio è sbilanciato. Glicolisi e ciclo di Krebs fanno solo una manciata di ATP direttamente; la catena di trasporto degli elettroni, usando l'ossigeno come accettore finale di elettroni, produce l'altro ~90% — circa 30–32 ATP per glucosio in totale. Togli l'ossigeno e può girare solo la glicolisi: le cellule ripiegano sulla <strong>fermentazione</strong>, recuperando appena 2 ATP e producendo lattato (nei tuoi muscoli) o etanolo e \\(CO_2\\) (nel lievito). L'ossigeno vale grosso modo un aumento di quindici volte in energia.</p>`,
          facts: [
            { e: '🧬', t: `La glicolisi è così antica e universale che gira in quasi ogni essere vivente, dai batteri a te — si è evoluta prima che l'atmosfera terrestre avesse persino ossigeno.` },
            { e: '🍞', t: `La fermentazione del lievito fa lievitare il pane e fermentare la birra: privo di ossigeno, il lievito trasforma lo zucchero in etanolo e CO₂ — la stessa via che usano i tuoi muscoli affamati di ossigeno, solo con un prodotto finale diverso.` },
            { e: '⚡', t: `La respirazione aerobica rende ~15× più ATP per glucosio della fermentazione. Quell'efficienza è perché la vita complessa e affamata di energia poté fiorire solo dopo che l'ossigeno riempì l'aria.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Reazione complessiva', e: 'C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O' },
            { sep: 1 },
            { n: 'Glicolisi', e: '\\text{glucosio} \\to 2\\,\\text{piruvato} + 2\\,\\text{ATP}', c: 'senza ossigeno' },
            { n: 'Ciclo di Krebs', e: '\\to CO_2 + \\text{NADH} + \\text{FADH}_2' },
            { n: 'Trasporto elettroni', e: '\\text{NADH} + O_2 \\to \\text{ATP} + H_2O' },
            { sep: 1 },
            { n: 'Resa aerobica', e: '\\approx 30\\text{–}32\\ \\text{ATP/glucosio}' },
            { n: 'Fermentazione', e: '2\\ \\text{ATP/glucosio}', c: 'anaerobica' },
          ] }, sim: 'respiration',
        },
        scholar: {
          title: `Chemiosmosi, forza proton-motrice e l'origine dei mitocondri`,
          body: `<h4><span class="hn">01</span>L'idea che sembrava impossibile</h4>
<p>Per decenni i biochimici cercarono un intermedio chimico che portasse l'energia dal cibo all'ATP, e non lo trovarono mai. L'<strong>ipotesi chemiosmotica</strong> di Peter Mitchell (1961) spiegò perché: non ce n'è uno. La catena di trasporto degli elettroni pompa invece protoni attraverso la membrana interna del mitocondrio, immagazzinando energia non in una molecola ma in un <em>gradiente</em> — una batteria elettrochimica di \\(H^+\\). L'idea era così eterodossa da essere ridicolizzata per anni prima di vincere il premio Nobel 1978.</p>
<h4><span class="hn">02</span>La forza proton-motrice</h4>
<p>Quel gradiente è la <strong>forza proton-motrice</strong>, e ha due parti: una differenza di concentrazione di \\(H^+\\) (un gradiente di pH) e una differenza di carica (una tensione di membrana di circa \\(-150\\ \\text{mV}\\)), combinate come \\(\\Delta p = \\Delta\\psi - \\tfrac{2.3RT}{F}\\Delta\\text{pH}\\). Gli elettroni che scendono a cascata lungo la catena da NADH all'ossigeno rilasciano energia a gradini, e ogni complesso principale la usa per spingere protoni in salita, fuori dalla matrice — caricando la membrana come un condensatore.</p>
<h4><span class="hn">03</span>Un motore rotante fatto di proteina</h4>
<p>L'energia immagazzinata è riscossa dall'<strong>ATP sintasi</strong>, una delle macchine più stupefacenti della biologia: una turbina molecolare. I protoni che rifluiscono giù per il loro gradiente attraverso l'enzima fanno fisicamente <em>ruotare</em> un rotore fino a cento giri al secondo, e quella rotazione forza meccanicamente ADP e fosfato insieme in ATP. È un motore rotante di pochi nanometri, alimentato da una corrente di protoni — conferma diretta e visibile del gradiente di Mitchell, poiché la rotazione dell'albero è stata filmata.</p>
<h4><span class="hn">04</span>Perché l'ossigeno, e perché conta</h4>
<p>Il ruolo dell'ossigeno è sottile ma decisivo: è semplicemente l'<em>accettore finale di elettroni</em>, seduto alla fine della catena a raccogliere gli elettroni esausti e formare acqua. Eppure senza di esso l'intera catena si ingorga — i portatori restano ridotti, il pompaggio di protoni si ferma, e la sintesi di ATP tramite fosforilazione ossidativa si arresta in pochi secondi. L'eccezionale affinità elettronica dell'ossigeno è ciò che rende l'intera cascata così energeticamente ripida, e quindi così produttiva; è la ragione termodinamica per cui la vita aerobica surclassa in potenza tutto ciò che è anaerobico.</p>
<h4><span class="hn">05</span>Ospiti diventati organi</h4>
<p>I mitocondri hanno il proprio DNA circolare, i propri ribosomi e doppie membrane — perché un tempo erano batteri a vita libera. La <strong>teoria endosimbiotica</strong> (Lynn Margulis) sostiene che circa due miliardi di anni fa una cellula inghiottì un batterio aerobico e, invece di digerirlo, lo tenne come centrale elettrica. Ogni mitocondrio nel tuo corpo è un discendente di quell'antico prigioniero, e li erediti tutti da tua madre — ed è così che il DNA mitocondriale traccia le linee materne indietro attraverso la storia umana.</p>
<h4><span class="hn">06</span>Il doppio taglio della catena</h4>
<p>La stessa macchina che ti alimenta ti mette anche in pericolo. Gli elettroni occasionalmente sfuggono dalla catena e riducono l'ossigeno solo in parte, producendo <strong>specie reattive dell'ossigeno</strong> — radicali liberi implicati nell'invecchiamento e nella malattia. Le cellule sfruttano deliberatamente anche fughe controllate: le <em>proteine disaccoppianti</em> lasciano rifluire i protoni senza fare ATP, dissipando il gradiente come puro calore, ed è così che il grasso bruno scalda i neonati e gli animali in letargo. La respirazione non è solo una fonte di energia ma una manopola finemente regolata tra fare ATP e fare calore.</p>`,
          facts: [
            { e: '🔄', t: `L'ATP sintasi è un motore rotante: i protoni che vi scorrono attraverso fanno girare un albero proteico fino a 100 volte al secondo, forgiando meccanicamente ATP — una turbina larga appena 10 nanometri.` },
            { e: '🧬', t: `I mitocondri portano il proprio DNA ed erano un tempo batteri a vita libera (teoria endosimbiotica). Li erediti solo da tua madre, rendendo il DNA mitocondriale un tracciante dell'ascendenza materna.` },
            { e: '🔥', t: `Il grasso bruno "disaccoppia" deliberatamente la respirazione — lasciando rifluire i protoni senza fare ATP — per bruciare carburante puramente come calore, tenendo caldi neonati e animali in letargo.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Forza proton-motrice', e: '\\Delta p = \\Delta\\psi - \\tfrac{2.3RT}{F}\\Delta\\text{pH}' },
            { n: 'Potenziale di membrana', e: '\\Delta\\psi \\approx -150\\ \\text{mV}' },
            { sep: 1 },
            { n: 'ATP sintasi', e: '\\text{ADP} + P_i + H^+_{\\text{out}} \\to \\text{ATP}' },
            { n: 'Stechiometria', e: '\\approx 4\\,H^+\\ \\text{per ATP}' },
            { sep: 1 },
            { n: 'Salto redox', e: '\\text{NADH}\\to O_2:\\ \\Delta E \\approx 1.14\\ \\text{V}' },
            { n: 'Energia libera ATP', e: '\\Delta G \\approx -30.5\\ \\text{kJ/mol}', c: 'idrolisi' },
          ] }, sim: 'respiration',
        },
      },
    },
    watercycle: {
      title: `Il ciclo dell'acqua`,
      teaser: `La Terra ha quasi esattamente la stessa acqua di quattro miliardi di anni fa — usata, pulita e riusata senza fine. Il Sole la solleva, le nuvole la trasportano, la pioggia la restituisce.`,
      chips: ['Evaporazione', 'Nuvole', 'Precipitazioni'],
      lvls: {
        junior: {
          title: `L'infinita macchina di riciclo dell'acqua della Terra`,
          body: `<p>Ecco un pensiero strano: l'acqua nel tuo bicchiere è <em>vecchia</em>. Le stesse identiche molecole d'acqua sono in giro da miliardi di anni, bevute dai dinosauri, congelate in antichi ghiacciai, piovute sulle strade romane — usate, pulite e riusate senza fine. La Terra non fabbrica mai acqua nuova e non ne perde mai; si limita a spostare la stessa scorta in un gigantesco anello chiamato <strong>ciclo dell'acqua</strong>.</p>
<p>Il motore è il <strong>Sole</strong>. Il suo calore solleva l'acqua da oceani, laghi e fiumi come un gas invisibile — il <strong>vapore acqueo</strong> — in un processo detto <strong>evaporazione</strong>. Il vapore galleggia verso l'alto, e in alto nel cielo dove l'aria è fredda si raffredda e si aggruma di nuovo in minuscole goccioline, radunandosi in <strong>nuvole</strong>. È la <strong>condensazione</strong>: la stessa cosa che appanna una finestra fredda o imperla una bibita ghiacciata.</p>
<p>Quando le goccioline di una nuvola diventano abbastanza pesanti, cadono — come pioggia, neve o grandine — ed è la <strong>precipitazione</strong>. Un po' filtra nel terreno diventando acqua sotterranea, un po' scorre a valle in ruscelli e fiumi, e tutta alla fine torna al mare, pronta a risalire. Giro e giro, per sempre. Nella simulazione qui sotto, scalda il Sole e guarda l'acqua evaporare, formare nuvole e ripiovere.</p>`,
          facts: [
            { e: '🦕', t: `L'acqua che hai bevuto oggi è stata riciclata per oltre 4 miliardi di anni — alcune di quelle molecole erano quasi certamente un tempo dentro un dinosauro.` },
            { e: '☁️', t: `Una singola nuvola può contenere centinaia di tonnellate d'acqua, eppure galleggia perché quell'acqua è distribuita in miliardi di goccioline troppo piccole e leggere per cadere.` },
            { e: '🌊', t: `Circa il 90% dell'acqua che evapora viene dagli oceani — e una molecola d'acqua passa in media solo circa nove giorni in aria prima di ricadere.` },
          ],
          formula: null, sim: 'watercycle',
        },
        student: {
          title: `Cambiamenti di stato, calore latente e il bilancio idrico globale`,
          body: `<p>Il ciclo dell'acqua è in realtà una storia di <strong>cambiamenti di stato</strong> e dell'energia che portano. Per trasformare l'acqua liquida in vapore devi fornire il suo <strong>calore latente di vaporizzazione</strong>, ben \\(2.26\\ \\text{MJ/kg}\\) — energia assorbita dall'ambiente (ed è esattamente per questo che sudare ti raffredda). Quando quel vapore condensa poi in una nuvola, tutto quel calore viene rilasciato di nuovo, scaldando l'atmosfera. L'evaporazione sposta silenziosamente enormi quantità di energia dalla superficie al cielo.</p>
<p>Quanto vapore l'aria può contenere sale ripidamente con la temperatura: l'aria più calda è più assetata. Una volta che l'aria è satura (umidità relativa 100%), qualsiasi ulteriore raffreddamento forza la condensazione. È per questo che le nuvole si formano quando l'aria umida sale e si raffredda, perché la rugiada appare nelle mattine fredde, e perché la temperatura a cui inizia la condensazione — il <strong>punto di rugiada</strong> — è un numero meteorologico così utile.</p>
<p>Globalmente i conti devono tornare. Ogni anno circa \\(5\\times10^{5}\\ \\text{km}^3\\) d'acqua evapora e la stessa quantità cade come precipitazione. Gli oceani perdono per evaporazione un po' più di quanto riottengono come pioggia, e quel deficit è colmato dai <strong>fiumi</strong> che portano l'acqua giù dalla terraferma — il tratto di ritorno che chiude l'anello. Una molecola d'acqua resta in aria circa nove giorni, ma può stare in una falda profonda o in una calotta di ghiaccio per migliaia di anni.</p>`,
          facts: [
            { e: '🔥', t: `Far evaporare un chilogrammo d'acqua assorbe circa 2,26 milioni di joule — abbastanza per sollevare un'auto piccola di due metri. Ecco perché il raffreddamento evaporativo (sudore, raffrescatori) funziona così bene.` },
            { e: '💨', t: `L'aria calda contiene molta più umidità di quella fredda: l'aria a 30°C può portare circa quattro volte il vapore acqueo dell'aria a 10°C, ed è per questo che le tempeste tropicali sono così piovose.` },
            { e: '🏔️', t: `L'acqua può saltare del tutto lo stadio liquido: neve e ghiaccio possono passare direttamente a vapore per sublimazione, ed è così che i ghiacciai si riducono anche quando non sale mai sopra lo zero.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Calore latente (vaporizzazione)', e: 'L_v \\approx 2.26\\ \\text{MJ/kg}' },
            { n: 'Calore latente (fusione)', e: 'L_f \\approx 0.334\\ \\text{MJ/kg}' },
            { sep: 1 },
            { n: 'Umidità relativa', e: '\\text{UR} = \\dfrac{e}{e_s(T)}\\times100\\%' },
            { n: 'Saturazione (Clausius-Clapeyron)', e: '\\dfrac{de_s}{dT} = \\dfrac{L_v\\,e_s}{R_v T^2}' },
            { sep: 1 },
            { n: 'Flusso globale', e: '\\approx 5\\times10^{5}\\ \\text{km}^3/\\text{anno}', c: 'evaporazione = precipitazione' },
          ] }, sim: 'watercycle',
        },
        scholar: {
          title: `Clausius-Clapeyron, umidità atmosferica e un ciclo che si intensifica`,
          body: `<h4><span class="hn">01</span>La legge esponenziale dietro ogni nuvola</h4>
<p>Quasi tutto sull'umidità atmosferica scaturisce da una relazione. Integrando l'equazione di Clausius-Clapeyron si ottiene la pressione di vapore saturo \\(e_s(T) \\approx e_0\\exp\\!\\left[\\dfrac{L_v}{R_v}\\left(\\dfrac{1}{T_0}-\\dfrac{1}{T}\\right)\\right]\\) — una salita <em>esponenziale</em> con la temperatura. La regola pratica è che la capacità dell'aria di trattenere acqua sale di circa il <strong>7% per grado</strong> Celsius. Quel singolo numero governa rugiada, nebbia, altezza della base delle nuvole e l'umidità disponibile per ogni tempesta.</p>
<h4><span class="hn">02</span>Il calore latente come condotto di carburante dell'atmosfera</h4>
<p>L'evaporazione è un oleodotto energetico nascosto. Circa metà dell'energia solare assorbita alla superficie terrestre la lascia non come radiazione o conduzione ma come <em>calore latente</em> rinchiuso nel vapore acqueo, rilasciato in quota quando il vapore condensa. È la sorgente di potenza dominante di temporali e uragani: un grande uragano rilascia calore latente a un ritmo equivalente a centinaia di volte l'intera produzione elettrica dell'umanità, ed è per questo che i mari caldi li nutrono e i mari freddi li affamano.</p>
<h4><span class="hn">03</span>Tempo di residenza e la forma del serbatoio</h4>
<p>Il ciclo è un insieme di serbatoi dal ricambio follemente diverso. L'atmosfera ne contiene solo circa \\(1.3\\times10^{4}\\ \\text{km}^3\\) in ogni istante — un tempo medio di residenza di ~9 giorni — eppure elabora l'intero flusso globale molte volte l'anno. Contrasta con l'acqua sotterranea profonda o le grandi calotte, dove una molecola può indugiare per migliaia o centinaia di migliaia di anni. Il tempo di residenza \\(\\tau = V/F\\) (volume su flusso) è il singolo numero che ti dice quanto in fretta ogni bacino risponde al cambiamento.</p>
<h4><span class="hn">04</span>Gli isotopi che identificano il ciclo</h4>
<p>Le molecole d'acqua non sono identiche: quelle costruite con gli isotopi più pesanti \\(^{18}\\text{O}\\) e il deuterio evaporano un po' meno prontamente e condensano un po' prima. Ogni cambiamento di stato quindi le <em>fraziona</em>, e i rapporti conservati in pioggia, carote di ghiaccio e stalagmiti diventano un termometro del passato. Leggere il \\(\\delta^{18}\\text{O}\\) lungo una carota di ghiaccio ricostruisce decine di migliaia di anni di temperatura — il ciclo dell'acqua che scrive la propria storia.</p>
<h4><span class="hn">05</span>Un ciclo che viene avvolto più stretto</h4>
<p>Poiché la capacità scala con la legge di Clausius-Clapeyron, un'atmosfera più calda trattiene più acqua, e l'intero ciclo <em>si intensifica</em>. Osservazioni e modelli concordano sullo schema riassunto come "il bagnato diventa più bagnato, il secco più secco": gli estremi di precipitazione intensa scalano con l'aumento di umidità di ~7%/K (a volte più in fretta nella convezione intensa), mentre le zone secche subtropicali si espandono. Un mondo più caldo non ha semplicemente più acqua in aria — la ridistribuisce più violentemente.</p>
<h4><span class="hn">06</span>Osservare l'intero anello dall'orbita</h4>
<p>Il ciclo moderno si misura dallo spazio. I satelliti GRACE pesano acque sotterranee e calotte percependo minuscoli cambiamenti nella gravità terrestre; missioni come GPM mappano la pioggia globale ogni poche ore; e gli scatterometri seguono l'umidità del suolo e l'evaporazione oceanica. Insieme trasformano un diagramma da manuale in un sistema monitorato e quantitativo — e rivelano che l'uso umano dell'acqua, la costruzione di dighe e lo svuotamento delle falde sono diventati essi stessi termini misurabili nel bilancio idrico del pianeta.</p>`,
          facts: [
            { e: '🛰️', t: `I satelliti GRACE rilevano la perdita di acque sotterranee misurando i cambiamenti nel campo gravitazionale terrestre — abbastanza precisi da pesare l'acqua pompata dalle falde attraverso interi continenti.` },
            { e: '📈', t: `La capacità dell'aria di trattenere acqua sale di ~7% per °C di riscaldamento (Clausius-Clapeyron), intensificando direttamente gli acquazzoni più forti — la fisica dietro alluvioni più estreme.` },
            { e: '🧊', t: `I rapporti degli isotopi dell'ossigeno (δ¹⁸O) nelle carote di ghiaccio fanno da paleotermometro, ricostruendo le temperature indietro di oltre 800.000 anni dal registro stesso del ciclo dell'acqua.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Pressione di saturazione', e: 'e_s(T) = e_0\\exp\\!\\left[\\tfrac{L_v}{R_v}\\left(\\tfrac{1}{T_0}-\\tfrac{1}{T}\\right)\\right]' },
            { n: 'Sensibilità C-C', e: '\\dfrac{1}{e_s}\\dfrac{de_s}{dT} \\approx 7\\%\\ \\text{per °C}' },
            { sep: 1 },
            { n: 'Tempo di residenza', e: '\\tau = V/F', c: 'atmosfera ≈ 9 giorni' },
            { n: 'Riserva atmosferica', e: 'V_{\\text{atm}} \\approx 1.3\\times10^{4}\\ \\text{km}^3' },
            { sep: 1 },
            { n: 'Bilancio energetico superficie', e: 'R_n = H + LE + G', c: 'LE = flusso di calore latente' },
          ] }, sim: 'watercycle',
        },
      },
    },
    energy: {
      title: 'Energia e conservazione',
      teaser: `L'energia non è mai creata né distrutta — solo scambiata tra forme. Una pallina che rotola baratta altezza con velocità e viceversa, e i conti tornano sempre.`,
      chips: ['Cinetica', 'Potenziale', 'Conservazione'],
      lvls: {
        junior: {
          title: `L'unica regola che l'universo non infrange mai`,
          body: `<p>Di tutte le leggi della fisica, una spicca per non essere mai, mai infranta: <strong>l'energia non può essere creata né distrutta</strong>. Puoi spostarla e cambiare la forma che assume, ma non puoi mai farne una sola goccia dal nulla, e non puoi mai farne sparire un po'. È la <strong>conservazione dell'energia</strong>, e vale ovunque, da una lucciola a una supernova.</p>
<p>L'energia indossa solo costumi diversi. Una pallina tenuta in alto ha <strong>energia potenziale</strong> — energia immagazzinata di posizione, in attesa di essere usata. Lasciala andare e quell'energia immagazzinata si trasforma in <strong>energia cinetica</strong>, l'energia del movimento, mentre la pallina accelera scendendo. In fondo è tutta movimento; in cima era tutta immagazzinata. Il totale non cambia mai — la pallina si limita a barattare un tipo con l'altro.</p>
<p>Puoi vedere questo baratto ovunque: uno skater che pompa su e giù per una rampa, un'altalena che arca avanti e indietro, un ottovolante che scavalca una collina e si tuffa dall'altra parte. Allora perché tutto alla fine si ferma? Perché un terzo costume, l'<strong>attrito</strong>, ruba silenziosamente un po' di energia a ogni ciclo e la trasforma in <em>calore</em>. L'energia non è sparita — è solo sparpagliata come tepore, troppo dispersa per essere usata. Nella simulazione qui sotto, lascia cadere una pallina in una ciotola e guarda l'altezza diventare velocità e la velocità diventare altezza.</p>`,
          facts: [
            { e: '🎢', t: `Un ottovolante non ha bisogno di motore dopo la prima collina — baratta solo altezza con velocità e viceversa, ed è per questo che ogni discesa è più bassa della precedente (l'attrito si prende la sua parte).` },
            { e: '🔥', t: `Sfrega le mani e si scaldano: stai convertendo l'energia cinetica del movimento direttamente in calore, la forma più dispersa che l'energia possa assumere.` },
            { e: '🌱', t: `L'energia chimica del tuo pranzo risale fino alla luce solare catturata dalle piante — energia passata di forma in forma lungo una lunga catena per arrivare a te.` },
          ],
          formula: null, sim: 'energy',
        },
        student: {
          title: `Energia cinetica, energia potenziale e conservazione meccanica`,
          body: `<p>Due grandezze fanno la maggior parte del lavoro in meccanica. L'<strong>energia cinetica</strong>, l'energia del movimento, è \\(KE = \\tfrac{1}{2}mv^2\\) — nota il \\(v^2\\): raddoppiare la velocità <em>quadruplica</em> l'energia, ed è esattamente perché gli spazi di frenata esplodono ad alta velocità. L'<strong>energia potenziale gravitazionale</strong>, l'energia dell'altezza, è \\(PE = mgh\\). In qualsiasi sistema dove solo la gravità compie lavoro, la loro somma è fissa: \\(\\tfrac{1}{2}mv^2 + mgh = \\text{costante}\\).</p>
<p>Quella singola equazione risolve una vasta gamma di problemi senza mai seguire i dettagli disordinati del moto. Lascia cadere la pallina da altezza \\(h\\) e tutto il suo \\(mgh\\) si converte in \\(\\tfrac{1}{2}mv^2\\), dando una velocità d'impatto \\(v = \\sqrt{2gh}\\) — indipendente dalla massa, lo stesso risultato che trovò Galileo. Un pendolo, un ottovolante, un salto con gli sci: ciascuno è solo energia potenziale ed energia cinetica che si scambiano di posto mentre il loro totale resta fermo.</p>
<p>L'energia si collega anche alla forza tramite il <strong>lavoro</strong>, \\(W = Fd\\), e al tempo tramite la <strong>potenza</strong>, \\(P = W/t\\) — il <em>ritmo</em> di trasferimento dell'energia, misurato in watt. I sistemi reali, però, non sono mai perfettamente conservativi: <strong>attrito</strong> e resistenza dell'aria compiono lavoro negativo e convertono l'energia meccanica in calore. L'energia è comunque conservata nel complesso — ha solo lasciato l'ordinato registro meccanico per quello disordinato termico, ed è per questo che i pendoli reali si smorzano.</p>`,
          facts: [
            { e: '🚗', t: `Poiché KE ∝ v², un'auto a 100 km/h porta quattro volte l'energia che ha a 50 km/h — e serve circa quattro volte la distanza per fermarsi. La velocità è ingannevolmente pericolosa.` },
            { e: '⚡', t: `Un watt è un joule al secondo. Una lampadina da 100 watt converte 100 joule di energia elettrica ogni secondo; anche un umano a riposo "gira" a circa 100 watt.` },
            { e: '🎯', t: `La velocità d'impatto da un'altezza dipende solo dall'altezza, non dalla massa: v = √(2gh). Una palla da bowling e una biglia lasciate cadere insieme toccano terra alla stessa velocità (ignorando l'aria).` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Energia cinetica', e: 'KE = \\tfrac{1}{2}mv^2' },
            { n: 'Energia potenziale', e: 'PE = mgh' },
            { sep: 1 },
            { n: 'Conservazione', e: '\\tfrac{1}{2}mv^2 + mgh = \\text{cost}' },
            { n: `Velocità d'impatto`, e: 'v = \\sqrt{2gh}', c: 'indipendente dalla massa' },
            { sep: 1 },
            { n: 'Lavoro', e: 'W = Fd' },
            { n: 'Potenza', e: 'P = W/t\\ \\ [\\text{watt}]' },
          ] }, sim: 'energy',
        },
        scholar: {
          title: `Il teorema dell'energia-lavoro, i potenziali e perché l'energia si conserva`,
          body: `<h4><span class="hn">01</span>Il lavoro come ponte dalla forza all'energia</h4>
<p>L'energia non è un postulato separato bullonato su Newton — segue dalla sua seconda legge. Integra \\(F = ma\\) lungo un percorso e ottieni il <strong>teorema dell'energia-lavoro</strong>, \\(W_{\\text{net}} = \\int \\vec{F}\\cdot d\\vec{r} = \\Delta KE\\): il lavoro netto compiuto su un corpo eguaglia il suo cambiamento di energia cinetica. L'energia cinetica \\(\\tfrac{1}{2}mv^2\\) non è una definizione tirata fuori dal nulla; è precisamente la grandezza che questo integrale di forza-per-distanza cambia.</p>
<h4><span class="hn">02</span>Forze conservative e la nascita dell'energia potenziale</h4>
<p>Alcune forze — gravità, molle, elettrostatica — compiono un lavoro che dipende solo dai punti di partenza e arrivo, mai dal percorso preso. Tali <strong>forze conservative</strong> hanno \\(\\nabla\\times\\vec{F} = 0\\), il che ci permette di definire un'<em>energia potenziale</em> \\(U\\) con \\(\\vec{F} = -\\nabla U\\). L'energia potenziale è la contabilità del lavoro che una forza conservativa <em>compirebbe</em>, e per esattamente questa classe di forze il totale \\(E = KE + U\\) è costante. L'attrito non supera il test — il suo lavoro dipende dalla lunghezza del percorso — quindi non ha potenziale e drena energia meccanica.</p>
<h4><span class="hn">03</span>La ragione più profonda: la simmetria</h4>
<p>Perché l'energia si conserva del tutto? La risposta profonda è il <strong>teorema di Noether</strong> (1918): ogni simmetria continua delle leggi di un sistema produce una grandezza conservata, e la simmetria dietro l'energia è l'<em>invarianza per traslazione temporale</em> — il fatto che le leggi della fisica siano le stesse oggi e domani. La conservazione dell'energia non è un incidente della meccanica; è l'ombra proiettata dall'uniformità del tempo stesso. La conservazione della quantità di moto segue identicamente dall'uniformità dello spazio.</p>
<h4><span class="hn">04</span>Quando l'energia sembra sparire</h4>
<p>Le apparenti violazioni sono sempre contabilità incompleta. Una pallina lasciata cadere nel miele non conserva l'energia <em>meccanica</em>, ma segui il calore e i conti tornano — la prima legge della termodinamica, \\(\\Delta U = Q - W\\), allarga semplicemente i libri per includere l'energia interna. Storicamente ogni "perdita" costrinse il concetto a crescere: energia chimica, poi l'equivalenza di calore e lavoro (Joule), poi \\(E = mc^2\\), che rivelò la massa stessa come energia concentrata e chiuse l'ultimo apparente divario nelle reazioni nucleari.</p>
<h4><span class="hn">05</span>Il caso sottile di un universo in espansione</h4>
<p>C'è un luogo dove la legge ordinata diventa scivolosa. Nella relatività generale, la conservazione dell'energia è rigorosamente locale; globalmente, in un universo in espansione, non c'è simmetria per traslazione temporale, quindi l'energia totale non è conservata in modo diretto. I fotoni del fondo cosmico a microonde perdono energia mentre lo spazio si stira (le loro lunghezze d'onda arrossano) senza nulla di ovvio a raccoglierla. Lungi dall'infrangere il teorema di Noether, questo è il suo carattere in piccolo: niente simmetria temporale, niente legge di conservazione globale.</p>
<h4><span class="hn">06</span>L'energia libera: la valuta che scorre davvero</h4>
<p>Per i processi reali, l'energia grezza è la contabilità sbagliata. La seconda legge dice che l'energia utilizzabile si degrada: ciò che conta è l'<strong>energia libera</strong>, \\(G = H - TS\\), la porzione effettivamente disponibile a compiere lavoro una volta pagata l'entropia. Ogni motore, batteria, muscolo e cellula vivente commercia in energia libera, non in energia, e il suo inesorabile declino — energia conservata ma sempre più disordinata — è ciò che dà al tempo la sua direzione e in ultima analisi punta verso la morte termica dell'universo.</p>`,
          facts: [
            { e: '🔗', t: `Il teorema di Noether lega ogni legge di conservazione a una simmetria: energia ↔ tempo, quantità di moto ↔ spazio, momento angolare ↔ rotazione. È uno dei risultati più belli di tutta la fisica.` },
            { e: '☀️', t: `E = mc² significa che il Sole perde circa 4 milioni di tonnellate di massa ogni secondo, convertite nell'energia della luce solare — massa ed energia sono la stessa valuta.` },
            { e: '🌡️', t: `L'energia è sempre conservata, ma l'energia utilizzabile (libera) no — la seconda legge garantisce che si degradi verso il disordine, ed è per questo che nessun motore può essere efficiente al 100%.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Teorema energia-lavoro', e: 'W_{\\text{net}} = \\int \\vec{F}\\cdot d\\vec{r} = \\Delta KE' },
            { n: 'Forza conservativa', e: '\\vec{F} = -\\nabla U,\\quad \\nabla\\times\\vec{F} = 0' },
            { sep: 1 },
            { n: 'Energia meccanica', e: 'E = KE + U = \\text{cost}' },
            { n: 'Prima legge', e: '\\Delta U = Q - W' },
            { sep: 1 },
            { n: 'Massa-energia', e: 'E = mc^2' },
            { n: 'Energia libera', e: 'G = H - TS', c: 'lavoro disponibile' },
          ] }, sim: 'energy',
        },
      },
    },
    gaslaws: {
      title: 'Le leggi dei gas',
      teaser: `Comprimi un gas e ti spinge indietro; scaldalo e si sforza di fuggire. Tre leggi semplici — e una sola equazione — catturano come pressione, volume e temperatura danzano insieme.`,
      chips: ['Pressione', 'Gas ideale', 'Teoria cinetica'],
      lvls: {
        junior: {
          title: `Perché i gas spingono, si comprimono e si gonfiano`,
          body: `<p>Un gas non ha una forma propria — si spande a riempire qualunque contenitore ci metti, che sia un palloncino, una gomma o un'intera stanza. Questo perché un gas è in realtà uno sciame di particelle inimmaginabilmente minuscole, che sfrecciano a centinaia di metri al secondo e rimbalzano su tutto ciò che colpiscono. Ogni volta che una di quelle particelle sbatte contro una parete dà una minuscola spinta, e il tamburellare costante di miliardi di esse è ciò che sentiamo come <strong>pressione</strong>.</p>
<p>Ora gioca con lo sciame. Comprimi il contenitore <em>più piccolo</em> e le stesse particelle sono stipate in meno spazio, quindi colpiscono le pareti più spesso — la pressione schizza in alto. Ecco perché una pompa da bici diventa più dura da spingere man mano che scendi. <strong>Scalda</strong> invece il gas e le particelle accelerano, sbattendo contro le pareti più forte e più spesso — la pressione sale di nuovo, ed è per questo che una lattina sigillata gettata sul fuoco alla fine scoppia.</p>
<p>Queste regole semplici governano una sorprendente fetta del mondo: gonfiano i tuoi polmoni, sollevano le mongolfiere, accendono i motori delle auto e fanno saltare un sacchetto di popcorn. Nella simulazione qui sotto, cambia la temperatura e la dimensione della scatola e guarda le particelle — e la pressione — rispondere.</p>`,
          facts: [
            { e: '🎈', t: `Un palloncino di elio si restringe al freddo e si gonfia al caldo: raffredda il gas e le sue particelle rallentano e si stringono, scaldalo e si spandono.` },
            { e: '👂', t: `Le orecchie si "stappano" in aereo perché la pressione dell'aria fuori cala con la quota mentre l'aria intrappolata dietro il timpano resta ferma — finché non fugge con un click.` },
            { e: '🍿', t: `I popcorn esplodono perché l'acqua dentro ogni chicco diventa vapore e la sua pressione cresce finché il guscio non regge più — una legge dei gas nella tua cucina.` },
          ],
          formula: null, sim: 'gaslaws',
        },
        student: {
          title: `La legge dei gas ideali e da dove viene`,
          body: `<p>Tre secoli di esperimenti hanno distillato il comportamento dei gas in una manciata di relazioni. <strong>Legge di Boyle</strong>: a temperatura fissa, pressione e volume sono inversamente legati, \\(P \\propto 1/V\\) — dimezza il volume, raddoppia la pressione. <strong>Legge di Charles</strong>: a pressione fissa, il volume cresce con la temperatura assoluta, \\(V \\propto T\\). <strong>Legge di Gay-Lussac</strong>: a volume fisso, la pressione cresce con la temperatura, \\(P \\propto T\\). Punto cruciale, la \\(T\\) qui è misurata dallo <em>zero assoluto</em> — la scala Kelvin — perché è lì che la pressione di un gas, in linea di principio, svanirebbe.</p>
<p>Cuci insieme queste con l'intuizione di Avogadro — volumi uguali di qualsiasi gas contengono numeri uguali di particelle — e collassano in un'unica affermazione pulita, la <strong>legge dei gas ideali</strong> \\(PV = nRT\\). Qui \\(n\\) è la quantità in moli e \\(R\\) è la costante universale dei gas, \\(8.314\\ \\text{J mol}^{-1}\\text{K}^{-1}\\). Ogni legge precedente è solo questa equazione con una variabile tenuta ferma.</p>
<p>Da dove viene? Dalle particelle stesse. La <strong>teoria cinetica dei gas</strong> raffigura la pressione come il rinculo collettivo di innumerevoli impatti molecolari sulle pareti, e lega la temperatura direttamente a quanto veloci si muovono: l'energia cinetica media di una particella è \\(\\tfrac{3}{2}k_B T\\). La temperatura, in altre parole, <em>è</em> moto molecolare — scalda un gas e stai letteralmente accelerando le sue particelle.</p>`,
          facts: [
            { e: '🌡️', t: `Lo zero assoluto è −273,15°C: estrapola il volume calante di un gas lungo una retta della legge di Charles e colpirebbe lo zero esattamente lì — la cosa più fredda che possa esistere.` },
            { e: '⚗️', t: `Una mole di qualsiasi gas ideale riempie 22,4 litri a 0°C e 1 atm — lo stesso volume che sia idrogeno o anidride carbonica, perché conta solo il numero di particelle.` },
            { e: '🫁', t: `Respiri per la legge di Boyle: il diaframma allarga il torace, abbassando la pressione dentro i polmoni sotto quella dell'aria esterna, che allora entra di corsa.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Legge di Boyle`, e: 'P \\propto 1/V', c: 'T costante' },
            { n: `Legge di Charles`, e: 'V \\propto T', c: 'P costante' },
            { n: `Gay-Lussac`, e: 'P \\propto T', c: 'V costante' },
            { sep: 1 },
            { n: 'Legge dei gas ideali', e: 'PV = nRT', c: 'R = 8.314 J mol⁻¹K⁻¹' },
            { n: 'Legge combinata', e: '\\dfrac{P_1V_1}{T_1} = \\dfrac{P_2V_2}{T_2}' },
            { sep: 1 },
            { n: 'Energia cinetica media', e: '\\langle E_k\\rangle = \\tfrac{3}{2}k_B T' },
          ] }, sim: 'gaslaws',
        },
        scholar: {
          title: `Teoria cinetica, distribuzioni e gas reali`,
          body: `<h4><span class="hn">01</span>La pressione, derivata dai primi principi</h4>
<p>La legge dei gas ideali non è un assioma — cade fuori dalla meccanica. Tratta il gas come particelle puntiformi in moto elastico e casuale e conta la quantità di moto che consegnano a una parete: la pressione risulta \\(P = \\tfrac{1}{3}\\dfrac{N}{V}m\\langle v^2\\rangle\\). Confrontala con \\(PV = Nk_B T\\) e sei costretto a identificare \\(\\tfrac{1}{2}m\\langle v^2\\rangle = \\tfrac{3}{2}k_B T\\). La temperatura emerge come nient'altro che l'energia cinetica traslazionale media per particella — un ponte dalle leggi di Newton dritto alla termodinamica.</p>
<h4><span class="hn">02</span>Non una velocità ma uno spettro</h4>
<p>Le particelle non condividono un'unica velocità; seguono la <strong>distribuzione di Maxwell-Boltzmann</strong>, \\(f(v) \\propto v^2 e^{-mv^2/2k_B T}\\), una curva asimmetrica con una lunga coda veloce. Fornisce tre distinte velocità "medie" — più probabile, media e quadratica media — e la curva si allarga e si sposta a destra man mano che \\(T\\) sale. Quella coda ad alta velocità conta enormemente: sono le rare molecole veloci a superare le barriere di reazione, quindi sta alla base della dipendenza esponenziale dalla temperatura della chimica stessa.</p>
<h4><span class="hn">03</span>Energia distribuita: l'equipartizione</h4>
<p>Perché \\(\\tfrac{3}{2}k_B T\\)? Il <strong>teorema di equipartizione</strong> assegna a ogni grado di libertà quadratico esattamente \\(\\tfrac{1}{2}k_B T\\) di energia. Un gas monoatomico ne ha tre (moto in x, y, z), dando \\(C_V = \\tfrac{3}{2}R\\); un gas biatomico aggiunge due modi rotazionali per \\(\\tfrac{5}{2}R\\). La parte sorprendente è che i modi vibrazionali restano silenti finché il gas non è abbastanza caldo — un effetto puramente quantistico che la fisica classica non poté mai spiegare, e una prima crepa nel mondo classico.</p>
<h4><span class="hn">04</span>Quando i gas reali si comportano male</h4>
<p>La legge ideale assume che le particelle siano punti che non si attraggono mai — falso su entrambi i conti. Le molecole reali occupano spazio e sentono deboli attrazioni a lungo raggio, così <strong>van der Waals</strong> rattoppò l'equazione, \\(\\left(P + \\dfrac{an^2}{V^2}\\right)(V - nb) = nRT\\): il termine \\(a\\) corregge per l'attrazione, il termine \\(b\\) per la dimensione finita. Questa singola correzione predice qualcosa che la legge ideale non poté mai — che un gas può condensare in un liquido, completo di un punto critico oltre il quale i due stati diventano indistinguibili.</p>
<h4><span class="hn">05</span>Quanto lontano, quanto veloce: il trasporto</h4>
<p>Tra una collisione e l'altra una molecola percorre un <em>libero cammino medio</em> \\(\\lambda = 1/(\\sqrt{2}\\,n\\sigma)\\) — a pressione ambiente solo circa 70 nanometri, quindi una molecola collide miliardi di volte al secondo. Questo zig-zag microscopico fissa la viscosità del gas, la conducibilità termica e la velocità di diffusione, e spiega la <strong>legge di Graham</strong>: le molecole più leggere si muovono più veloci ed effondono più rapidamente, esattamente il principio un tempo usato per separare gli isotopi dell'uranio per le prime bombe atomiche.</p>
<h4><span class="hn">06</span>I limiti dell'immagine</h4>
<p>Raffredda un gas abbastanza e persino van der Waals fallisce, perché la statistica quantistica prende il sopravvento. Una volta che la lunghezza d'onda termica di de Broglie rivaleggia con la spaziatura tra particelle, particelle identiche non possono più essere trattate come indipendenti: i bosoni si affollano in un singolo stato a formare un <em>condensato di Bose-Einstein</em>, mentre i fermioni sono forzati a separarsi dal principio di Pauli, sostenendo nane bianche e stelle di neutroni contro la gravità. Le umili leggi dei gas sono l'angolo ad alta temperatura e bassa densità di un paesaggio quantistico ben più strano.</p>`,
          facts: [
            { e: '🥶', t: `Nel 1995 i fisici raffreddarono un gas a meno di un milionesimo di grado sopra lo zero assoluto, formando un condensato di Bose-Einstein — migliaia di atomi che condividono un unico stato quantistico (premio Nobel 2001).` },
            { e: '☢️', t: `La legge di effusione di Graham separò l'uranio-235 dall'uranio-238 per le prime armi nucleari: l'isotopo più leggero diffonde di pochissimo più in fretta attraverso una barriera porosa.` },
            { e: '💨', t: `A temperatura ambiente le molecole d'aria viaggiano in media a ~500 m/s — più veloci di un jet — eppure un profumo attraversa una stanza lentamente perché ogni molecola collide miliardi di volte al secondo.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Pressione cinetica', e: 'P = \\tfrac{1}{3}\\dfrac{N}{V}m\\langle v^2\\rangle' },
            { n: 'Legame con la temperatura', e: '\\tfrac{1}{2}m\\langle v^2\\rangle = \\tfrac{3}{2}k_B T' },
            { sep: 1 },
            { n: 'Maxwell-Boltzmann', e: 'f(v) \\propto v^2 e^{-mv^2/2k_B T}' },
            { n: 'Velocità quadratica media', e: 'v_{\\text{rms}} = \\sqrt{3k_B T/m}' },
            { sep: 1 },
            { n: 'Van der Waals', e: '\\left(P + \\dfrac{an^2}{V^2}\\right)(V - nb) = nRT' },
            { n: 'Libero cammino medio', e: '\\lambda = \\dfrac{1}{\\sqrt{2}\\,n\\sigma}' },
          ] }, sim: 'gaslaws',
        },
      },
    },
    moonphases: {
      title: 'Le fasi lunari',
      teaser: `La Luna non produce luce propria — allora perché cresce da una falce a un disco pieno e ritorno ogni mese? È tutto nell'angolo da cui la guardi.`,
      chips: ['Luna', 'Fasi', 'Orbite'],
      lvls: {
        junior: {
          title: `Perché la Luna cambia forma ogni notte`,
          body: `<p>Guarda la Luna nell'arco di un mese e sembra crescere e restringersi — una falce sottile, una metà, un disco grasso, un cerchio pieno, poi di nuovo indietro. Ma la Luna non cambia mai davvero forma. Il segreto è che la Luna <em>non produce luce propria</em>. Come una palla gigante appesa nello spazio, semplicemente cattura la luce del Sole e ce la riflette — e il Sole può illuminare sempre e solo <strong>una metà</strong> di essa alla volta, la metà che per caso è rivolta verso il Sole.</p>
<p>Mentre la Luna gira attorno alla Terra una volta al mese, ci capita di guardare quella metà illuminata da angoli diversi. Quando la Luna sta tra noi e il Sole, il suo lato illuminato è rivolto lontano da noi e vediamo buio — una <strong>luna nuova</strong>. Quando è sul lato opposto, l'intera faccia illuminata si volge verso di noi — una <strong>luna piena</strong>. In mezzo la cogliamo di taglio e vediamo solo una fetta: una falce o una metà. La forma che vedi è semplicemente quanta parte della metà illuminata dal Sole punta verso di te.</p>
<p>Il ciclo completo — da nuova, a piena, e di nuovo a nuova — richiede circa <strong>29 giorni e mezzo</strong>, che è più o meno da dove viene l'idea di "mese". Ed ecco una simpatica stranezza: la Luna tiene sempre la <em>stessa faccia</em> rivolta alla Terra, quindi da casa non vediamo mai il suo lato nascosto. Nella simulazione qui sotto, muovi la Luna lungo la sua orbita e guarda cambiare la sua fase.</p>`,
          facts: [
            { e: '🌑', t: `Non puoi mai vedere una "luna nuova" — il suo lato illuminato è rivolto interamente lontano dalla Terra, quindi sta nel cielo diurno, invisibile contro il bagliore del Sole.` },
            { e: '🔄', t: `La Luna tiene la stessa faccia verso la Terra perché ruota esattamente una volta per orbita — un equilibrio chiamato blocco mareale. Il "lato nascosto" restò invisibile a chiunque finché una sonda sovietica non lo fotografò nel 1959.` },
            { e: '📅', t: `Il ciclo di ~29,5 giorni delle fasi è l'origine della parola "mese" — e regola ancora oggi i calendari islamico, ebraico e cinese.` },
          ],
          formula: null, sim: 'moonphases',
        },
        student: {
          title: `La geometria delle fasi, e perché le eclissi sono rare`,
          body: `<p>Una fase lunare è pura geometria. La luce solare illumina sempre esattamente metà della Luna; ciò che cambia è l'<em>angolo tra Sole, Terra e Luna</em>. Chiamalo angolo di fase: a 0° la Luna è grosso modo tra noi e il Sole (nuova), a 180° è opposta al Sole (piena), e la frazione illuminata che vediamo segue \\(k = \\tfrac{1}{2}(1 - \\cos\\theta)\\). La metà crescente del ciclo e la metà calante sono immagini speculari, illuminate su lati opposti.</p>
<p>C'è una sottigliezza nei tempi. La Luna impiega 27,3 giorni per completare un'orbita rispetto alle stelle di sfondo — il <em>mese siderale</em> — ma 29,5 giorni per tornare alla stessa fase — il <em>mese sinodico</em>. Il divario esiste perché nel frattempo la Terra si è mossa lungo la propria orbita, quindi la Luna deve oscillare un po' più in là per riallinearsi col Sole. Il ciclo delle fasi che vediamo davvero è quello sinodico.</p>
<p>Allora perché non c'è un'eclissi a ogni luna nuova e piena? Perché l'orbita della Luna è inclinata di circa <strong>5°</strong> rispetto al piano dell'orbita terrestre. La maggior parte dei mesi la Luna passa un po' sopra o sotto la linea diretta Sole-Terra, e la sua ombra manca il bersaglio. Solo quando una luna nuova o piena cade vicino ai due punti dove le orbite si incrociano — i <em>nodi</em> — otteniamo un'eclissi solare o lunare. Quell'inclinazione è il motivo per cui le eclissi sono rari doni occasionali, non eventi mensili.</p>`,
          facts: [
            { e: '🌗', t: `Il mese sinodico (29,5 giorni, da fase a fase) è più lungo del mese siderale (27,3 giorni, da orbita a orbita) perché la Terra continua a muoversi attorno al Sole — la Luna deve rincorrere.` },
            { e: '🌍', t: `Poiché l'orbita della Luna è leggermente ellittica, sembra dondolare e annuire — un'oscillazione chiamata librazione che ci fa intravedere circa il 59% della sua superficie nel tempo, non solo il 50%.` },
            { e: '🌘', t: `Su una falce sottile puoi spesso vedere l'intero disco scuro brillare debolmente — la "luce cinerea", luce solare riflessa dalla Terra sulla Luna e di ritorno, spiegata già da Leonardo da Vinci.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Frazione illuminata', e: 'k = \\tfrac{1}{2}(1 - \\cos\\theta)', c: 'θ = angolo di fase' },
            { sep: 1 },
            { n: 'Mese siderale', e: 'T_{\\text{sid}} \\approx 27.3\\ \\text{giorni}', c: 'orbita vs stelle' },
            { n: 'Mese sinodico', e: 'T_{\\text{syn}} \\approx 29.5\\ \\text{giorni}', c: 'da fase a fase' },
            { sep: 1 },
            { n: 'Relazione sinodica', e: '\\dfrac{1}{T_{\\text{syn}}} = \\dfrac{1}{T_{\\text{sid}}} - \\dfrac{1}{T_{\\text{anno}}}' },
            { n: 'Inclinazione orbitale', e: 'i \\approx 5.14°', c: 'perché le eclissi sono rare' },
          ] }, sim: 'moonphases',
        },
        scholar: {
          title: `Blocco mareale, recessione orbitale e cicli lunghi`,
          body: `<h4><span class="hn">01</span>Perché una faccia è nascosta per sempre</h4>
<p>Il periodo di rotazione della Luna eguaglia esattamente il suo periodo orbitale, quindi è in <strong>blocco mareale</strong>. Non è un caso: la gravità terrestre solleva un leggero rigonfiamento sulla Luna, e qualsiasi disallineamento tra rotazione e orbita trascina su quel rigonfiamento, applicando una coppia che frena la rotazione finché i due ritmi non coincidono. Quasi ogni grande luna del Sistema Solare è arrivata alla stessa risonanza spin-orbita 1:1 per la stessa via — la rotazione sincrona è il punto d'arrivo naturale dell'attrito mareale.</p>
<h4><span class="hn">02</span>Le maree rubano l'orbita della Luna verso l'esterno</h4>
<p>L'accoppiamento mareale funziona in entrambi i sensi. La Luna solleva rigonfiamenti oceanici sulla Terra, e la rotazione più rapida della Terra li trascina davanti alla linea Terra-Luna; il loro strattone gravitazionale aggiunge momento angolare all'orbita della Luna, spingendola <em>verso l'esterno</em> di circa \\(3.8\\ \\text{cm}\\) all'anno — un tasso ora misurato al millimetro rimbalzando laser sui riflettori lasciati dagli astronauti dell'Apollo. Lo stesso trasferimento rallenta la rotazione terrestre, allungando il giorno di circa 1,7 millisecondi al secolo.</p>
<h4><span class="hn">03</span>La contabilità della conservazione</h4>
<p>Tutto ciò è un'unica quantità conservata che viene rimescolata. Il momento angolare totale del sistema Terra-Luna è fisso, quindi mentre la quota rotazionale della Terra si dissangua, la quota orbitale della Luna deve crescere — ed è precisamente per questo che una Luna che si allontana e un giorno che si allunga vanno di pari passo. Fai avanzare l'orologio e il processo finisce solo quando il giorno terrestre e il mese lunare si stirano allo stesso valore, un mutuo blocco mareale a decine di miliardi di anni di distanza.</p>
<h4><span class="hn">04</span>L'orbita inclinata e ruotante</h4>
<p>L'inclinazione di 5,14° non è fissa nello spazio: la linea dei nodi dove l'orbita della Luna incrocia l'eclittica <em>precede</em> tutt'attorno in 18,6 anni, e l'asse maggiore dell'orbita precede in 8,85 anni. Queste lente oscillazioni modulano quando e dove possono avvenire le eclissi e le infilano nel famoso <strong>ciclo di Saros</strong> di 18 anni e 11 giorni e ⅓, dopo il quale la geometria Sole-Terra-Luna quasi si ripete e ritorna un'eclissi quasi gemella.</p>
<h4><span class="hn">05</span>Leggere una fase quantitativamente</h4>
<p>La frazione illuminata \\(k = \\tfrac{1}{2}(1+\\cos\\alpha)\\), scritta in termini dell'<em>elongazione</em> Sole-Luna, è solo lo scheletro geometrico. La Luna è uno specchio sorprendentemente scadente — il suo albedo è circa 0,12, più scuro dell'asfalto consumato — e la sua luminosità non scala linearmente con l'area illuminata. Vicino alla luna piena aumenta in modo sproporzionato, l'<em>impennata di opposizione</em>, mentre le ombre superficiali svaniscono e le perle vetrose nella regolite retrodiffondono la luce solare dritta verso la sorgente.</p>
<h4><span class="hn">06</span>Un calendario che non combacia mai del tutto</h4>
<p>Il mese sinodico non è un numero intero di giorni, né un numero intero di essi entra in un anno solare — dodici mesi sinodici cadono circa 11 giorni corti. Ogni calendario lunare della storia si è battuto con questo disaccordo, dal <em>ciclo metonico</em> di 19 anni che riallinea Luna e Sole (la base per calcolare la Pasqua) ai mesi intercalari dei calendari ebraico e cinese. Il ritmo dall'aria ordinata della Luna è, in fondo, gloriosamente incommensurabile con l'anno.</p>`,
          facts: [
            { e: '📡', t: `Il laser ranging sui retroriflettori dell'era Apollo misura la distanza Terra-Luna al millimetro, confermando che la Luna si allontana di 3,8 cm all'anno — circa la velocità con cui crescono le unghie.` },
            { e: '🔁', t: `Il ciclo di Saros (18 anni, 11 giorni e ⅓) permette di prevedere le eclissi secoli in anticipo: dopo un Saros la geometria Sole-Terra-Luna quasi si ripete, producendo un'eclissi quasi identica spostata di 120° in longitudine.` },
            { e: '🌑', t: `L'albedo della Luna è solo ~0,12 — riflette appena il 12% della luce solare, circa come l'asfalto vecchio. La luna piena "brillante" è in realtà un oggetto grigio molto scuro illuminato da un Sole molto brillante.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Frazione illuminata', e: 'k = \\tfrac{1}{2}(1 + \\cos\\alpha)', c: 'α = elongazione' },
            { sep: 1 },
            { n: 'Recessione orbitale', e: '\\dot r \\approx 3.8\\ \\text{cm/anno}' },
            { n: 'Allungamento del giorno', e: '\\approx 1.7\\ \\text{ms/secolo}' },
            { sep: 1 },
            { n: 'Precessione dei nodi', e: 'T_{\\text{nodo}} \\approx 18.6\\ \\text{anni}' },
            { n: 'Ciclo di Saros', e: '\\approx 6585.3\\ \\text{giorni}', c: 'ripetizione eclissi' },
          ] }, sim: 'moonphases',
        },
      },
    },
    protein: {
      title: 'La sintesi proteica',
      teaser: `Il tuo DNA è solo una biblioteca di ricette. Come fa una cellula a leggere quelle ricette e costruire le macchine vere — le proteine — che ti fanno funzionare?`,
      chips: ['DNA', 'Ribosoma', 'Codice genetico'],
      lvls: {
        junior: {
          title: `Come il tuo corpo legge il DNA per costruire sé stesso`,
          body: `<p>Ogni cellula del tuo corpo porta una copia completa del tuo <strong>DNA</strong> — un colossale manuale di istruzioni scritto in appena quattro "lettere" chimiche. Ma il DNA non <em>fa</em> nulla da solo. È una biblioteca di ricette, e le cose che quelle ricette costruiscono sono le <strong>proteine</strong>: le minuscole macchine molecolari che digeriscono il cibo, portano l'ossigeno nel sangue, combattono i germi e tengono insieme tutto il tuo corpo.</p>
<p>Per cucinare una proteina, la cellula lavora in due passi. Prima fa una copia usa-e-getta della sola ricetta che le serve, scritta in una molecola affine chiamata <strong>mRNA</strong> — un po' come fotocopiare una singola pagina così l'originale prezioso non lascia mai la biblioteca. Quella copia viaggia poi verso un'officina molecolare chiamata <strong>ribosoma</strong>.</p>
<p>Il ribosoma legge l'mRNA <em>tre lettere alla volta</em>. Ogni piccola parola di tre lettere, chiamata <strong>codone</strong>, nomina un <strong>amminoacido</strong> — e gli amminoacidi sono le perline che si infilano insieme per fare una proteina. Il ribosoma avanza, chiamando codone dopo codone, e una catena crescente di amminoacidi scatta al suo posto. Quando la catena è completa si ripiega in una forma tridimensionale precisa, ed è quella forma a permettere alla proteina finita di fare il suo lavoro. Guardalo accadere nella simulazione qui sotto.</p>`,
          facts: [
            { e: '📖', t: `Se leggessi il tuo DNA a voce alta a una lettera al secondo, ti servirebbero quasi cent'anni per finire — 3 miliardi di lettere in ogni cellula.` },
            { e: '⚡', t: `Un ribosoma aggiunge circa 10–20 amminoacidi al secondo, e una singola cellula può far girare milioni di ribosomi in una volta, sfornando proteine senza sosta.` },
            { e: '🧩', t: `Ci sono solo 20 amminoacidi diversi, eppure infilati insieme in ordini diversi costruiscono ognuna delle ~100.000 specie di proteina del tuo corpo.` },
          ],
          formula: null, sim: 'protein',
        },
        student: {
          title: `Il dogma centrale: trascrizione e traduzione`,
          body: `<p>Il flusso dell'informazione genetica segue il <strong>dogma centrale</strong>: DNA → RNA → proteina. Nella <strong>trascrizione</strong>, un enzima chiamato RNA polimerasi apre una porzione di DNA e costruisce un filamento corrispondente di RNA messaggero, scambiando la base timina (T) con l'uracile (U). Questo mRNA porta il messaggio fuori dal nucleo verso i ribosomi nel citoplasma.</p>
<p>Il messaggio è scritto nel <strong>codice genetico</strong>: ogni <em>codone</em> di tre basi specifica un amminoacido. Con quattro basi ci sono \\(4^3 = 64\\) codoni possibili ma solo 20 amminoacidi, quindi il codice è <em>ridondante</em> — la maggior parte degli amminoacidi ha più codoni. Un codone, AUG, fa anche da segnale di "inizio" (e codifica la metionina); altri tre (UAA, UAG, UGA) sono segnali di "stop" che terminano la catena.</p>
<p>Nella <strong>traduzione</strong>, il ribosoma si aggancia all'mRNA e lo legge codone per codone. Per ogni codone un <strong>tRNA</strong> corrispondente — che porta l'amminoacido giusto e un <em>anticodone</em> complementare di tre basi — si aggancia, e il ribosoma collega il suo amminoacido alla catena crescente, poi avanza a scatti. Raggiunto un codone di stop, il polipeptide finito è rilasciato a ripiegarsi in una proteina funzionante. È una catena di montaggio molecolare di velocità e fedeltà stupefacenti.</p>`,
          facts: [
            { e: '🔡', t: `Il codice genetico è quasi universale — gli stessi codoni significano gli stessi amminoacidi in un batterio, in una banana e in un umano, prova che tutta la vita condivide un unico antenato.` },
            { e: '🧬', t: `Le molecole di tRNA sono gli "adattatori" che Francis Crick predisse prima che fossero trovati: un'estremità legge il codone, l'altra porta l'amminoacido corrispondente.` },
            { e: '💉', t: `I vaccini a mRNA funzionano consegnando un mRNA fatto in laboratorio che i tuoi stessi ribosomi traducono in una proteina virale, allenando il sistema immunitario senza alcun virus vivo.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Dogma centrale', e: '\\text{DNA} \\to \\text{RNA} \\to \\text{proteina}' },
            { sep: 1 },
            { n: 'Dimensione del codone', e: '4^3 = 64\\ \\text{codoni}', c: 'per 20 amminoacidi' },
            { n: 'Codone di inizio', e: '\\text{AUG}', c: 'codifica anche Met' },
            { n: 'Codoni di stop', e: '\\text{UAA, UAG, UGA}' },
            { sep: 1 },
            { n: 'Appaiamento di basi', e: '\\text{A–U},\\ \\text{G–C}', c: "l'RNA usa U non T" },
          ] }, sim: 'protein',
        },
        scholar: {
          title: `Il codice, la fedeltà, il ripiegamento e la regolazione`,
          body: `<h4><span class="hn">01</span>Perché il codice è degenere — e robusto</h4>
<p>La mappatura 64-a-20 non è casuale. I codoni per lo stesso amminoacido di solito differiscono solo nella loro <em>terza</em> base, e l'<strong>ipotesi del vacillamento</strong> (wobble) di Crick spiega perché: l'appaiamento in terza posizione è lasco, così un singolo tRNA può leggere più codoni sinonimi. Il risultato è un codice tamponato contro l'errore — molte mutazioni puntiformi sono <em>silenti</em>, e persino gli errori di traduzione tendono a inserire un amminoacido chimicamente simile. Il codice genetico appare ottimizzato per minimizzare il danno degli sbagli.</p>
<h4><span class="hn">02</span>Farlo bene: la fedeltà traduzionale</h4>
<p>Il ribosoma commette un errore solo circa una volta ogni \\(10^{4}\\) codoni, ben meglio di quanto le sole energie di legame codone-anticodone permetterebbero. Compra quell'accuratezza attraverso il <em>proofreading cinetico</em>: un tRNA corretto è controllato due volte, con un passo irreversibile e che brucia energia in mezzo, che dà ai tRNA sbagliati più occasioni di staccarsi prima che il legame sia sigillato. La fedeltà, qui, si paga in GTP — l'accuratezza costa energia.</p>
<h4><span class="hn">03</span>Il ribosoma è un ribozima</h4>
<p>Per decenni si assunse che il ribosoma fosse un enzima proteico. Le strutture cristallografiche del 2000 rivelarono l'opposto: il nucleo catalitico che forma il legame peptidico è costruito interamente di <strong>RNA</strong>, senza alcuna proteina a portata della reazione. Il ribosoma è un <em>ribozima</em>. Questo è un fossile molecolare del <em>mondo a RNA</em> — un tempo prima del DNA e delle proteine in cui l'RNA sia immagazzinava informazione sia faceva chimica — e vinse il premio Nobel per la Chimica 2009.</p>
<h4><span class="hn">04</span>Il ripiegamento, e il ripiegamento andato storto</h4>
<p>La funzione di una proteina vive nel suo ripiegamento tridimensionale, e gran parte di quel ripiegamento inizia <em>co-traduzionalmente</em>, mentre la catena sta ancora emergendo dal ribosoma. Le proteine <em>chaperone</em> accompagnano il processo e schermano gli intermedi appiccicosi. Quando il ripiegamento fallisce, i detriti possono aggregarsi — la radice molecolare dell'Alzheimer, del Parkinson e delle malattie da prioni. Prevedere il ripiegamento dalla sola sequenza sconcertò la biologia per cinquant'anni finché AlphaFold non lo risolse nel 2021.</p>
<h4><span class="hn">05</span>Un gene, molte proteine</h4>
<p>Negli eucarioti il percorso DNA-a-proteina è pesantemente editato. L'RNA appena fatto subisce lo <em>splicing</em>: gli introni sono tagliati via e gli esoni cuciti insieme, e lo <strong>splicing alternativo</strong> lascia che un singolo gene renda dozzine di proteine diverse da diverse combinazioni di esoni — ed è così che ~20.000 geni umani specificano un proteoma ben più grande. Aggiungi il capping, la coda e le modifiche chimiche delle basi e lo slogan "un gene, una proteina" crolla del tutto.</p>
<h4><span class="hn">06</span>Alzare e abbassare il volume</h4>
<p>Le cellule controllano non solo <em>cosa</em> traducono ma <em>quanto</em> e <em>quando</em>. I <em>microRNA</em> silenziano specifici mRNA, i riboswitch percepiscono metaboliti e si ripiegano per regolare la propria traduzione, e i ribosomi possono stallare, cambiare frame o reiniziare sotto stress. Questo strato regolatorio è dove la biologia sintetica ora interviene — ingegnerizzando mRNA, riscrivendo codoni, persino aggiungendo amminoacidi del tutto nuovi al codice — trasformando la lettura dei geni in qualcosa che possiamo deliberatamente programmare.</p>`,
          facts: [
            { e: '🏆', t: `Determinare la struttura atomica del ribosoma — e provare che il suo cuore catalitico è RNA, non proteina — vinse il premio Nobel per la Chimica 2009, confermandolo come reliquia del mondo a RNA.` },
            { e: '🤖', t: `AlphaFold (2021) risolse il problema del ripiegamento proteico vecchio di 50 anni, prevedendo strutture 3-D dalla sequenza amminoacidica con accuratezza quasi sperimentale per oltre 200 milioni di proteine.` },
            { e: '🧬', t: `Lo splicing alternativo permette a un gene di fare molte proteine: il gene umano Dscam può, in linea di principio, essere spliced in oltre 38.000 varianti proteiche distinte.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Tasso di errore', e: '\\sim 10^{-4}\\ \\text{per codone}', c: 'via proofreading cinetico' },
            { n: 'Appaiamento wobble', e: '\\text{3ª base a incastro lasco}' },
            { sep: 1 },
            { n: 'Legame peptidico', e: '\\text{-COOH} + \\text{H}_2\\text{N-} \\to \\text{ammide} + \\text{H}_2\\text{O}' },
            { n: 'Catalisi', e: '\\text{rRNA (un ribozima)}' },
            { sep: 1 },
            { n: 'Splicing', e: '\\text{introni fuori, esoni uniti}' },
            { n: 'Espansione del proteoma', e: '\\sim\\!20{,}000\\ \\text{geni} \\to 10^5\\ \\text{proteine}' },
          ] }, sim: 'protein',
        },
      },
    },
    pendulum: {
      title: 'Pendoli e moto armonico semplice',
      teaser: `Un peso che oscilla tiene il tempo quasi alla perfezione — e non gli importa quanto sia pesante o quanto ampio sia il suo arco. Perché lo stesso ritmo muove orologi, molle, atomi e ponti?`,
      chips: ['Oscillazione', 'Periodo', 'Risonanza'],
      lvls: {
        junior: {
          title: `L'oscillazione costante che tiene il tempo`,
          body: `<p>Lega un peso a uno spago, tiralo da un lato e lascialo andare: oscilla di là, indietro, di là, indietro — più e più volte, in un ritmo così regolare che potresti regolarci un orologio. La gente ha fatto esattamente questo per trecento anni. Quel peso che oscilla è un <strong>pendolo</strong>, e la costanza del suo battito è una delle meraviglie silenziose della fisica.</p>
<p>La parte sorprendente è da cosa dipende quel ritmo — e da cosa no. Rendi il peso più pesante: il tempo non cambia. Tiralo più in là così oscilla più ampio: viaggia più veloce ma impiega lo <em>stesso tempo</em> a tornare, quindi anche il ritmo cambia appena. L'unica cosa che conta davvero è la <strong>lunghezza</strong> dello spago. Spago corto, battiti rapidi e frenetici; spago lungo, oscillazioni lente e pigre. La leggenda vuole che Galileo lo notò da ragazzo, cronometrando una lampada oscillante in una cattedrale contro il proprio polso.</p>
<p>Quell'affidabilità rese il pendolo il cuore degli orologi più precisi del mondo per secoli. E lo stesso ritmo avanti-e-indietro è ovunque, una volta che lo cerchi: un bambino sull'altalena, una corda di chitarra che vibra, una molla che rimbalza, persino un grattacielo che ondeggia nel vento. Nella simulazione qui sotto, cambia la lunghezza e l'ampiezza dell'oscillazione e guarda cosa succede al battito.</p>`,
          facts: [
            { e: '⛪', t: `Galileo cronometrò una lampada oscillante in una cattedrale contro il proprio polso intorno al 1583 e capì che il periodo cambia appena con l'ampiezza — la scoperta dietro l'orologio a pendolo.` },
            { e: '🌍', t: `Un pendolo oscilla più lentamente sulla Luna: con un sesto della gravità terrestre, lo stesso pendolo impiega circa 2,5 volte più tempo per oscillazione.` },
            { e: '🏢', t: `I grattacieli ospitano giganteschi "smorzatori a massa accordata" — pendoli che pesano centinaia di tonnellate — che oscillano in opposizione all'edificio per annullare il dondolio nel vento.` },
          ],
          formula: null, sim: 'pendulum',
        },
        student: {
          title: `Il moto armonico semplice e il periodo del pendolo`,
          body: `<p>Sposta un pendolo dal centro e la gravità lo richiama indietro — e, punto cruciale, per piccole oscillazioni la forza di richiamo è quasi esattamente <em>proporzionale allo spostamento</em>, \\(F \\approx -kx\\). Qualsiasi sistema che obbedisce a questa sola regola compie un <strong>moto armonico semplice</strong>: la posizione traccia un'onda sinusoidale perfetta nel tempo, \\(x(t) = A\\cos(\\omega t)\\), con frequenza angolare \\(\\omega = \\sqrt{k/m}\\). La stessa equazione governa una massa su una molla, una boa galleggiante e la vibrazione di una molecola.</p>
<p>Per un pendolo la matematica consegna il celebre risultato \\(T = 2\\pi\\sqrt{L/g}\\): il periodo cresce con la radice quadrata della lunghezza e si accorcia in gravità più forte — e non contiene <em>né la massa né l'ampiezza</em>. Questo è l'<strong>isocronismo</strong> del pendolo: quadruplica la lunghezza per raddoppiare il periodo; sostituisci la massa con una due volte più pesante e non cambia nulla. La frequenza è semplicemente \\(f = 1/T\\), il numero di oscillazioni al secondo.</p>
<p>L'energia è ciò che lo tiene in moto. Agli estremi dell'oscillazione tutta l'energia è <em>potenziale</em> (la massa è più in alto, momentaneamente ferma); in fondo è tutta <em>cinetica</em> (più in basso e più veloce), e il totale \\(E = \\tfrac{1}{2}kA^2\\) resta fisso mentre si travasa senza fine tra le due. A rigore, tutto questo vale solo per piccoli angoli — oscilla troppo ampio e la forza di richiamo smette di essere perfettamente lineare, e il periodo si allunga un poco.</p>`,
          facts: [
            { e: '⏱️', t: `Un pendolo lungo esattamente 1 metro (con piccola oscillazione) ha un periodo molto vicino a 2 secondi sulla Terra — un secondo per lato, la base del "pendolo dei secondi".` },
            { e: '🎸', t: `Una corda di chitarra, la sospensione di un'auto e il quarzo in un orologio sono tutti oscillatori armonici semplici — stesso moto sinusoidale, frequenze enormemente diverse.` },
            { e: '🌀', t: `Il pendolo di Foucault oscilla su un piano fisso mentre la Terra gira sotto di esso — un pendolo gigante che prova visibilmente la rotazione del pianeta.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Forza di richiamo', e: 'F = -kx', c: 'piccolo spostamento' },
            { n: 'Soluzione MAS', e: 'x(t) = A\\cos(\\omega t)' },
            { sep: 1 },
            { n: 'Frequenza angolare', e: '\\omega = \\sqrt{k/m}' },
            { n: 'Periodo del pendolo', e: 'T = 2\\pi\\sqrt{L/g}', c: 'niente massa, niente ampiezza' },
            { sep: 1 },
            { n: 'Frequenza', e: 'f = 1/T = \\omega/2\\pi' },
            { n: 'Energia totale', e: 'E = \\tfrac{1}{2}kA^2', c: 'KE + PE conservata' },
          ] }, sim: 'pendulum',
        },
        scholar: {
          title: `Non linearità, smorzamento, risonanza e caos`,
          body: `<h4><span class="hn">01</span>Perché il trucco dei piccoli angoli funziona</h4>
<p>La vera equazione di un pendolo è non lineare: \\(\\ddot\\theta + (g/L)\\sin\\theta = 0\\). Non ha soluzione in funzioni elementari. La via di fuga è l'approssimazione \\(\\sin\\theta \\approx \\theta\\), valida entro l'1% fino a circa 14°, che linearizza l'equazione nell'oscillatore armonico \\(\\ddot\\theta + \\omega^2\\theta = 0\\) con \\(\\omega = \\sqrt{g/L}\\). Quasi tutto il moto armonico "semplice" è in realtà questa silenziosa decisione di buttare via i termini superiori di un seno.</p>
<h4><span class="hn">02</span>Quanto costa l'approssimazione</h4>
<p>Tieni il \\(\\sin\\theta\\) completo e il periodo smette di essere costante — si allunga con l'ampiezza, esattamente, come un <em>integrale ellittico</em> completo \\(T = 4\\sqrt{L/g}\\,K(\\sin\\tfrac{\\theta_0}{2})\\). Espanso, \\(T \\approx T_0\\left(1 + \\tfrac{1}{16}\\theta_0^2 + \\cdots\\right)\\): un'oscillazione di 30° va circa l'1,7% più lenta, una di 90° quasi il 18%. L'isocronismo è una finzione dei piccoli angoli — i veri orologi a pendolo sono progettati per tenere l'ampiezza minuscola e costante proprio per questo.</p>
<h4><span class="hn">03</span>Aggiungere attrito: l'oscillatore smorzato</h4>
<p>La realtà drena energia. Una forza resistiva proporzionale alla velocità dà \\(\\ddot x + 2\\gamma\\dot x + \\omega_0^2 x = 0\\), il cui comportamento si divide in tre secondo il rapporto di smorzamento \\(\\zeta\\): <em>sottosmorzato</em> (\\(\\zeta<1\\)) si spegne con un inviluppo decrescente \\(e^{-\\gamma t}\\); <em>criticamente smorzato</em> (\\(\\zeta=1\\)) torna a riposo più in fretta senza sorpasso — l'obiettivo per una sospensione d'auto o un chiudiporta; <em>sovrasmorzato</em> (\\(\\zeta>1\\)) striscia indietro lentamente.</p>
<h4><span class="hn">04</span>Spingere al momento giusto: la risonanza</h4>
<p>Guida un oscillatore con una forza periodica e la sua risposta stazionaria picca bruscamente quando la frequenza di guida si avvicina a quella naturale \\(\\omega_0\\) — la <strong>risonanza</strong>, ampiezza \\(A(\\omega) = F_0/m\\big/\\sqrt{(\\omega_0^2-\\omega^2)^2 + 4\\gamma^2\\omega^2}\\). Spingi un'altalena a tempo e sale sempre più in alto con minuscole spinte. Lo stesso effetto frantuma un bicchiere di vino con una nota cantata, ed è perché i soldati rompono il passo attraversando un ponte.</p>
<h4><span class="hn">05</span>Quanto è affilato il picco: il fattore Q</h4>
<p>Il <em>fattore di qualità</em> \\(Q = \\omega_0/2\\gamma\\) misura quanto leggermente è smorzato un oscillatore — il numero di radianti che percorre prima che la sua energia cali di \\(1/e\\), e l'affilatezza della sua risonanza. Una sospensione d'auto ha \\(Q \\sim 1\\); un cristallo di quarzo da orologio raggiunge \\(10^4\\text{–}10^6\\); gli specchi del rivelatore di onde gravitazionali LIGO sono progettati verso \\(Q \\sim 10^7\\), ed è ciò che permette loro di registrare un cambiamento di lunghezza di \\(10^{-18}\\) m.</p>
<h4><span class="hn">06</span>Due aste, nessuna previsione: il caos</h4>
<p>Appendi un pendolo all'estremità di un altro e il mondo ordinato crolla. Il <strong>doppio pendolo</strong> è pienamente deterministico eppure <em>caotico</em>: il suo moto dipende così sensibilmente dall'angolo di partenza che due rilasci diversi per un capello divergono completamente in pochi secondi, un esponente di Lyapunov positivo in azione. La sua traiettoria nello spazio delle fasi riempie una regione strana e ripiegata invece di chiudersi in un anello ordinato — la stessa matematica che rende il meteo imprevedibile oltre un paio di settimane.</p>`,
          facts: [
            { e: '📡', t: `Il fattore Q delle masse di prova degli specchi di LIGO supera i 10 milioni — così leggermente smorzate che una singola spinta risuonerebbe per ore, essenziale per rilevare le onde gravitazionali.` },
            { e: '🌉', t: `Il ponte di Tacoma Narrows si smembrò nel 1940 quando il vento lo spinse vicino a una frequenza naturale — una lezione da manuale sulla risonanza (anche se il vero meccanismo fu il flutter aeroelastico).` },
            { e: '🎲', t: `Un doppio pendolo è l'esempio da aula di caos deterministico: rilasci apparentemente identici producono moti enormemente diversi, rendendo il suo percorso a lungo termine impossibile da prevedere.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Pendolo non lineare', e: '\\ddot\\theta + \\tfrac{g}{L}\\sin\\theta = 0' },
            { n: 'Periodo esatto', e: 'T = 4\\sqrt{L/g}\\,K\\!\\left(\\sin\\tfrac{\\theta_0}{2}\\right)' },
            { sep: 1 },
            { n: 'Correzione di ampiezza', e: 'T \\approx T_0\\left(1 + \\tfrac{1}{16}\\theta_0^2\\right)' },
            { n: 'Oscillatore smorzato', e: '\\ddot x + 2\\gamma\\dot x + \\omega_0^2 x = 0' },
            { sep: 1 },
            { n: 'Risonanza', e: 'A(\\omega) = \\dfrac{F_0/m}{\\sqrt{(\\omega_0^2-\\omega^2)^2 + 4\\gamma^2\\omega^2}}' },
            { n: 'Fattore di qualità', e: 'Q = \\omega_0/2\\gamma' },
          ] }, sim: 'pendulum',
        },
      },
    },
    optics: {
      title: 'Ottica: luce, lenti e rifrazione',
      teaser: `Perché una lente capovolge il mondo, e una cannuccia sembra spezzata in un bicchiere d'acqua? La luce si piega — e quella piega costruisce ogni occhio, macchina fotografica e telescopio.`,
      chips: ['Lenti', 'Rifrazione', 'Ottica'],
      lvls: {
        junior: {
          title: `Come la luce si piega per formare immagini`,
          body: `<p>La luce viaggia quasi sempre in linee perfettamente dritte — ecco perché ottieni ombre nette e perché non puoi vedere dietro gli angoli. Ma nell'istante in cui la luce passa da un materiale trasparente a un altro, dall'aria all'acqua o al vetro, si <strong>piega</strong>. Questa piega si chiama <strong>rifrazione</strong>, ed è il motivo per cui una cannuccia in un bicchiere d'acqua sembra spezzata a metà, e perché una moneta sul fondo di una piscina appare più in alto di quanto sia davvero.</p>
<p>Modella un pezzo di vetro nel modo giusto e puoi guidare quella piega di proposito — questa è una <strong>lente</strong>. Una lente d'ingrandimento è più spessa al centro, così raccoglie i raggi di luce sparsi e li convoglia a incontrarsi in un unico punto. Tienila alla distanza giusta e quei raggi si incrociano e ricostruiscono un'immagine di ciò da cui provengono — spesso capovolta. Quell'incrocio è esattamente il motivo per cui una macchina fotografica, un telescopio e il tuo stesso occhio possono prendere la luce che rimbalza dal mondo e piegarla in un'immagine nitida.</p>
<p>Il tuo occhio lo fa con una lente morbida e vivente che i muscoli comprimono per cambiarne la forma, mettendo a fuoco prima da vicino poi da lontano in una frazione di secondo. Una macchina fotografica fa lo stesso lavoro con una lente di vetro scorrevole. Nella simulazione qui sotto, sposta l'oggetto e rimodella la lente, e guarda i raggi incrociarsi per costruire l'immagine — reale, capovolta e ridimensionata.</p>`,
          facts: [
            { e: '👁️', t: `La lente del tuo occhio capovolge ogni immagine prima che colpisca la retina — il tuo cervello rimette silenziosamente tutto il mondo dritto.` },
            { e: '🌈', t: `Un arcobaleno è la rifrazione in azione: la luce solare si piega entrando in ogni goccia di pioggia, scomponendosi nei colori perché ciascun colore si piega di una quantità leggermente diversa.` },
            { e: '🔭', t: `La lente di un grande telescopio può essere larga oltre un metro — più larga è la lente, più luce stellare raccoglie, e più deboli sono le cose che riesce a vedere.` },
          ],
          formula: null, sim: 'optics',
        },
        student: {
          title: `La legge di Snell e l'equazione delle lenti sottili`,
          body: `<p>La rifrazione avviene perché la luce viaggia a velocità diverse in materiali diversi, e ogni materiale è caratterizzato dal suo <strong>indice di rifrazione</strong> \\(n = c/v\\) — quante volte più lentamente va la luce al suo interno rispetto al vuoto (l'acqua è 1,33, il vetro circa 1,5). A un confine il raggio si piega esattamente della quantità che mantiene i suoi fronti d'onda in fase, catturata dalla <strong>legge di Snell</strong> \\(n_1\\sin\\theta_1 = n_2\\sin\\theta_2\\). Entrando in un mezzo più denso il raggio si piega verso la normale; uscendo si piega via da essa.</p>
<p>Spingi quell'angolo di uscita abbastanza e succede qualcosa di drammatico: oltre l'<em>angolo critico</em> \\(\\theta_c = \\arcsin(n_2/n_1)\\) il raggio non può più fuggire e si riflette interamente all'interno — la <strong>riflessione totale interna</strong>, il trucco che convoglia la luce lungo una fibra ottica per migliaia di chilometri con quasi nessuna perdita. Una lente non fa altro che rifrangere un raggio due volte, una a ciascuna superficie curva, e il suo potere di messa a fuoco è fissato dall'<em>equazione dei costruttori di lenti</em> a partire da quelle curvature e dall'indice del vetro.</p>
<p>Dove una lente forma la sua immagine segue la bellissima e semplice <strong>equazione delle lenti sottili</strong> \\(\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}\\), che lega la lunghezza focale \\(f\\), la distanza dell'oggetto \\(d_o\\) e la distanza dell'immagine \\(d_i\\). La dimensione e l'orientamento dell'immagine vengono dall'ingrandimento \\(m = -d_i/d_o\\): un \\(m\\) negativo significa capovolta. Metti l'oggetto oltre \\(f\\) e ottieni un'immagine <em>reale</em>, capovolta, che puoi raccogliere su uno schermo (una macchina fotografica); portalo dentro \\(f\\) e l'immagine diventa <em>virtuale</em>, dritta e ingrandita (una lente d'ingrandimento).</p>`,
          facts: [
            { e: '💎', t: `L'indice di rifrazione del diamante è un enorme 2,42, che gli dà un minuscolo angolo critico di 24° — la luce rimbalza all'interno a lungo prima di fuggire, ed è per questo che i diamanti tagliati brillano così intensamente.` },
            { e: '📡', t: `Una singola fibra ottica si affida alla riflessione totale interna per trasportare la luce — i cavi moderni muovono oltre 100 terabit al secondo, la spina dorsale di tutto internet.` },
            { e: '👓', t: `Gli occhiali correggono la vista aggiungendo esattamente la lunghezza focale giusta: lenti convergenti per l'ipermetropia, lenti divergenti (f negativa) per la miopia.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Indice di rifrazione', e: 'n = c/v', c: 'acqua 1,33, vetro ~1,5' },
            { n: `Legge di Snell`, e: 'n_1\\sin\\theta_1 = n_2\\sin\\theta_2' },
            { sep: 1 },
            { n: 'Angolo critico', e: '\\theta_c = \\arcsin(n_2/n_1)', c: 'riflessione totale interna' },
            { n: 'Equazione lenti sottili', e: '\\dfrac{1}{f} = \\dfrac{1}{d_o} + \\dfrac{1}{d_i}' },
            { sep: 1 },
            { n: 'Ingrandimento', e: 'm = -\\dfrac{d_i}{d_o}', c: 'm<0 = capovolta' },
            { n: `Costruttori di lenti`, e: '\\dfrac{1}{f} = (n-1)\\left(\\dfrac{1}{R_1} - \\dfrac{1}{R_2}\\right)' },
          ] }, sim: 'optics',
        },
        scholar: {
          title: `Ottica ondulatoria, aberrazioni e il limite di diffrazione`,
          body: `<h4><span class="hn">01</span>I raggi sono scorciatoie; la luce è un'onda</h4>
<p>L'ottica geometrica — linee dritte che si piegano alle superfici — è un'approssimazione superba, ma è solo il limite di piccola lunghezza d'onda di qualcosa di più profondo. Il <strong>principio di Fermat</strong> riformula ogni percorso che la luce prende come quello di <em>cammino ottico stazionario</em>, \\(\\delta\\!\\int n\\,ds = 0\\). La legge di Snell, la legge della riflessione, l'esistenza stessa dei punti focali cadono tutte fuori da questa singola affermazione variazionale — la luce si comporta come se fiutasse la via estremale. È la stessa matematica che ricompare come principio di minima azione in meccanica.</p>
<h4><span class="hn">02</span>La rifrazione come fronti d'onda che cambiano marcia</h4>
<p>Perché un raggio si piega verso la normale nel vetro? Immagina il fronte d'onda come una fila in marcia: quando un'estremità entra per prima nel mezzo più lento, resta indietro mentre l'altra estremità mantiene il passo, e l'intero fronte ruota — la costruzione di Huygens resa letterale. Velocità e lunghezza d'onda calano del fattore \\(n\\) mentre la frequenza si conserva, quindi \\(\\lambda_{\\text{mezzo}} = \\lambda_0/n\\). L'immagine a raggi e l'immagine ondulatoria concordano esattamente, ma solo quella ondulatoria sopravvive quando la lente diventa piccola.</p>
<h4><span class="hn">03</span>Perché nessuna lente è mai perfetta: le aberrazioni</h4>
<p>L'ordinata equazione delle lenti sottili assume che i raggi restino vicini all'asse. Le lenti reali la violano. L'<em>aberrazione sferica</em> mette a fuoco i raggi di bordo e quelli centrali in punti diversi perché una sfera non è la forma ideale; l'<em>aberrazione cromatica</em> sbava il colore perché \\(n(\\lambda)\\) significa che la luce blu si piega più del rosso, quindi una lente ha una lunghezza focale diversa per ogni colore. I progettisti reagiscono cementando vetri crown e flint in <em>doppietti acromatici</em> e molando superfici <em>asferiche</em> — un'intera arte dedicata a disfare le imperfezioni della sfera.</p>
<h4><span class="hn">04</span>Il muro che non puoi scalare: la diffrazione</h4>
<p>Persino una lente impeccabile non può mettere a fuoco la luce in un punto. Poiché la luce è un'onda che passa attraverso un'apertura finita, si sparge in un <strong>disco di Airy</strong>, e due punti si confondono insieme una volta che sono più vicini del <em>criterio di Rayleigh</em> \\(\\theta_{\\min} = 1.22\\,\\lambda/D\\). La risoluzione è fissata dall'<em>apertura numerica</em>, \\(d_{\\min} = 0.61\\,\\lambda/\\text{NA}\\): la cosa più piccola che un microscopio può separare nettamente è circa mezza lunghezza d'onda, qualche centinaio di nanometri. Questo è un limite della fisica, non dell'ingegneria.</p>
<h4><span class="hn">05</span>Una lente calcola una trasformata di Fourier</h4>
<p>C'è un'identità sorprendente nel cuore dell'ottica: il campo luminoso nel piano focale posteriore di una lente è la <strong>trasformata di Fourier spaziale</strong> del campo nel suo piano focale anteriore. Il dettaglio fine dell'oggetto diventa alta frequenza spaziale lontano dall'asse, quindi un'apertura che taglia quei raggi è letteralmente un filtro passa-basso. Questa è la base dell'<em>ottica di Fourier</em>, del filtraggio spaziale, e della funzione di trasferimento di modulazione che quantifica esattamente quanto contrasto una lente preserva a ogni livello di dettaglio.</p>
<h4><span class="hn">06</span>Imbrogliare il limite di diffrazione</h4>
<p>Per un secolo il limite di Rayleigh è sembrato assoluto — e poi la microscopia gli è semplicemente girata attorno. Lo <em>STED</em> restringe il punto luminoso con una ciambella di luce di deplezione; la <em>PALM/STORM</em> accende e spegne singole molecole e localizza ciascuna molto più precisamente di quanto sbavi, vincendo il premio Nobel per la Chimica 2014. Nel frattempo i <em>metamateriali</em> e le sonde di campo vicino sfruttano le onde evanescenti che le lenti ordinarie buttano via. Il limite di diffrazione vale ancora per la luce propagante in campo lontano — ma l'astuzia su <em>quale</em> luce usare ha spinto l'imaging ottico fino alla scala delle singole molecole.</p>`,
          facts: [
            { e: '🏆', t: `La microscopia a super-risoluzione (STED, PALM/STORM) ha infranto il limite di diffrazione e vinto il premio Nobel per la Chimica 2014, immaginando strutture larghe ~20 nm — dieci volte più fini di quanto la luce "dovrebbe" permettere.` },
            { e: '🔭', t: `Lo specchio da 6,5 m del James Webb Space Telescope gli dà una risoluzione limitata dalla diffrazione di ~0,1 arcosecondi nell'infrarosso — abbastanza netta da risolvere una moneta da ~40 km di distanza.` },
            { e: '🌀', t: `Una lente esegue una trasformata di Fourier ottica alla velocità della luce con zero consumo di energia — un'idea ora riscoperta per il calcolo analogico e ottico ultra-veloce.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Principio di Fermat`, e: '\\delta\\!\\int n\\,ds = 0' },
            { n: `Lunghezza d'onda nel mezzo`, e: '\\lambda_{\\text{mezzo}} = \\lambda_0/n' },
            { sep: 1 },
            { n: 'Criterio di Rayleigh', e: '\\theta_{\\min} = 1.22\\,\\dfrac{\\lambda}{D}' },
            { n: 'Risoluzione', e: 'd_{\\min} = 0.61\\,\\dfrac{\\lambda}{\\text{NA}}', c: 'NA = n\\sin\\theta' },
            { sep: 1 },
            { n: 'Costruttori di lenti', e: '\\dfrac{1}{f} = (n-1)\\left(\\dfrac{1}{R_1} - \\dfrac{1}{R_2}\\right)' },
            { n: 'Dispersione', e: 'n = n(\\lambda)', c: 'aberrazione cromatica' },
          ] }, sim: 'optics',
        },
      },
    },
    memory: {
      title: 'Come funziona la memoria',
      teaser: 'Come fa il tuo cervello a immagazzinare 2,5 petabyte di ricordi — e perché alcuni durano per sempre mentre altri svaniscono in una notte?',
      chips: ['Memoria', 'LTP', 'Plasticità'],
      lvls: {
        junior: {
          title: `Il tuo cervello si ricabla quando impari!`,
          body: `<p>Ti sei mai chiesto come hai imparato ad andare in bici? All'inizio era difficile — il tuo cervello non l'aveva mai fatto. Ma con la pratica accadde qualcosa di notevole: il tuo cervello letteralmente <em>si è ricablato</em>. I neuroni che gestiscono l'equilibrio e la pedalata cominciarono a parlarsi più efficientemente, forgiando connessioni più forti, finché un giorno l'abilità si eseguì da sola e potevi farla senza pensarci. Quel cambiamento fisico nel cervello è ciò che una <strong>memoria</strong> è davvero.</p>
<p>Gli scienziati lo riassumono in una bella frase: <em>"i neuroni che scaricano insieme, si cablano insieme."</em> Ogni volta che due neuroni si illuminano nello stesso istante, la sinapsi fra loro cresce un filo più forte. Ripeti l'esperienza abbastanza — esercitati al piano, ripassa per un test, riproduci un pomeriggio felice nella tua testa — e la connessione diventa solida come la roccia. È la <strong>plasticità sinaptica</strong>.</p>
<p>Non tutta la memoria è uguale. La <strong>memoria a breve termine</strong> afferra un frammento di informazione per secondi o minuti, come un numero di telefono che hai appena guardato. La <strong>memoria a lungo termine</strong> può durare una vita. Per spostare un ricordo dall'una all'altra, il tuo cervello lo riproduce — soprattutto durante il <strong>sonno</strong>, quando l'ippocampo riesegue gli eventi della giornata e lentamente li consegna alla corteccia per la custodia permanente.</p>`,
          facts: [
            { e: '💾', t: `Il cervello umano può immagazzinare una stima di 2,5 petabyte — equivalenti a circa 3 milioni di ore di TV. Non esauriresti mai lo spazio.` },
            { e: '😴', t: `Il sonno è essenziale per la memoria. Gli studenti che dormono dopo aver studiato trattengono fino al 40% in più di chi resta sveglio tutta la notte a ripassare.` },
            { e: '🏆', t: `I campioni di memoria che memorizzano centinaia di cifre casuali usano il "metodo dei loci" — immaginare di camminare in un luogo familiare. Sfrutta i circuiti della memoria spaziale nell'ippocampo.` },
          ],
          formula: null, sim: 'memory',
        },
        student: {
          title: `Il potenziamento a lungo termine e la sinapsi hebbiana`,
          body: `<p>Il <strong>potenziamento a lungo termine</strong> — LTP — è l'atto cellulare del ricordare. Bliss e Lømo scoprirono nel 1973 che una raffica di stimolazione ad alta frequenza lascia una sinapsi durevolmente più forte, e la molecola al suo cuore è il <strong>recettore NMDA</strong>. Funziona da rilevatore di coincidenze: si apre solo quando due cose accadono insieme — il neurone in arrivo rilascia glutammato <em>e</em> il neurone ricevente è già depolarizzato abbastanza da sbalzare uno ione magnesio bloccante fuori dall'imboccatura del canale.</p>
<p>Quando entrambe le condizioni coincidono, il calcio si riversa nella cellula ricevente e mette in moto una cascata. Le chinasi — soprattutto la CaMKII — potenziano i recettori AMPA esistenti e ne traghettano di nuovi alla sinapsi, aumentandone la forza in pochi minuti. Spingi la stimolazione più forte e il cambiamento diventa permanente: i geni si accendono, nuove proteine vengono costruite, e la spina dendritica si gonfia fisicamente. Tutto si mappa ordinatamente sulla regola di Hebb, \\(\\Delta w_{ij} = \\eta\\, x_i x_j\\) — l'attività congiunta rafforza il collegamento.</p>
<p>Dove questi cambiamenti contano di più è l'<strong>ippocampo</strong>, il portale del cervello per fatti ed eventi. La prova più netta venne dal paziente H.M., a cui l'ippocampo fu rimosso chirurgicamente nel 1953: mantenne i vecchi ricordi e le abilità, ma non poté mai più fissare un nuovo fatto o esperienza. Durante il sonno l'ippocampo riproduce la giornata in raffiche compresse chiamate <em>onde acute a increspatura</em> (sharp-wave ripples), spedendo gradualmente ogni ricordo alla corteccia per la custodia a lungo termine — una lenta migrazione nota come consolidamento di sistema.</p>`,
          facts: [
            { e: '🧠', t: `Il paziente H.M. (Henry Molaison) perse l'ippocampo nel 1953. Non poté formare alcun nuovo ricordo dichiarativo fino alla sua morte 55 anni dopo, facendo avanzare la nostra comprensione della memoria più di ogni altro caso.` },
            { e: '🌙', t: `Durante il sonno, le onde acute a increspatura ippocampali riproducono gli eventi della giornata fino a 20 volte più velocemente del tempo reale, consolidando i ricordi nella corteccia.` },
            { e: '🎵', t: `Suonare uno strumento musicale ristruttura le cortecce motorie e uditive del cervello — un pianista di 10 anni ha materia grigia misurabilmente più spessa di un non musicista.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Regola hebbiana', e: '\\Delta w_{ij} = \\eta\\, x_i x_j', c: 'la co-attivazione rafforza' },
            { sep: 1 },
            { n: 'Coincidenza NMDA', e: '\\text{glutammato} \\;\\wedge\\; \\Delta V > 0 \\;\\Rightarrow\\; \\text{Ca}^{2+}\\ \\text{influsso}' },
            { n: 'Induzione del LTP', e: '[\\text{Ca}^{2+}]_i \\uparrow \\;\\to\\; \\text{CaMKII} \\;\\to\\; \\text{inserimento AMPA}' },
            { sep: 1 },
            { n: 'STDP', e: '\\Delta t < 0 \\Rightarrow \\text{LTP};\\quad \\Delta t > 0 \\Rightarrow \\text{LTD}', c: 'Δt = t_pre − t_post' },
          ] }, sim: 'memory',
        },
        scholar: {
          title: `Regole di plasticità sinaptica, engrammi e consolidamento di sistema`,
          body: `<h4><span class="hn">01</span>La tempistica è tutto: la STDP</h4>
<p>La regola di Hebb dice che i neuroni co-attivi rafforzano il loro collegamento, ma gli esperimenti rivelarono qualcosa di più netto: l'esatto <em>ordine</em> di scarica conta, fino ai millisecondi. Nella <strong>plasticità dipendente dalla tempistica degli spike</strong>, una sinapsi è rafforzata quando lo spike presinaptico arriva appena <em>prima</em> di quello postsinaptico — plausibilmente causale — e indebolita quando arriva appena dopo, entro una stretta finestra di \\(\\pm 40\\) ms, \\(\\Delta W = A^+ e^{\\Delta t/\\tau^+}\\) per il potenziamento e \\(-A^- e^{-\\Delta t/\\tau^-}\\) per la depressione. Il cervello, in effetti, premia le sinapsi che hanno aiutato a prevedere lo spike successivo.</p>
<h4><span class="hn">02</span>Mantenere stabile la plasticità: la soglia scorrevole</h4>
<p>Il puro rafforzamento hebbiano è instabile — le sinapsi forti crescerebbero solo più forti senza limite. La teoria BCM lo corregge con una <em>soglia scorrevole</em> \\(\\theta_M\\) che essa stessa segue l'attività recente: un neurone che ha scaricato molto alza l'asticella per il potenziamento, così la plasticità si autoregola. Il calcio è la lettura fisica — un grande influsso guida l'LTP, uno moderato l'LTD, e questa risposta graduata e autoregolante impedisce a una vita di apprendimento di saturare la rete.</p>
<h4><span class="hn">03</span>L'engramma: cogliere un ricordo sul fatto</h4>
<p>La traccia fisica di un ricordo specifico — l'<strong>engramma</strong> — si rivela essere un insieme rado, solo ~5–10% dei neuroni in una regione, legati insieme da sinapsi potenziate. Fu speculazione per un secolo finché l'optogenetica permise ai ricercatori di etichettare le cellule esatte attive durante un'esperienza e poi riaccenderle con la luce. Riattivare un engramma fa comportare un animale come se rievocasse l'evento; silenziarlo blocca il richiamo. Il ricordo vive davvero in quell'insieme identificabile di cellule.</p>
<h4><span class="hn">04</span>Scrivere e cancellare ricordi con la luce</h4>
<p>Una volta che puoi indirizzare un engramma, puoi modificarlo. In un esperimento fondamentale del 2013, i ricercatori impiantarono un ricordo <em>falso</em> in un topo co-attivando artificialmente un engramma per un luogo con una scossa avversiva, così che l'animale in seguito temeva una posizione dove non era successo nulla di male. E in topi resi amnesici bloccando la sintesi proteica, riattivare direttamente l'engramma ripristinò il ricordo "perso" — mostrando che la traccia era immagazzinata ma solo inaccessibile. La memoria divenne qualcosa che non solo si poteva osservare ma manipolare.</p>
<h4><span class="hn">05</span>Immagazzinamento più fine della cellula</h4>
<p>Notevolmente, l'unità di immagazzinamento è più piccola di un neurone. Una singola <em>spina dendritica</em> può essere potenziata o depressa indipendentemente dalle vicine a pochi micron di distanza sullo stesso ramo, così una cellula può contenere migliaia di elementi di memoria quasi indipendenti. Ciò moltiplica enormemente la capacità del cervello e spiega come ~86 miliardi di neuroni immagazzinino una stima di petabyte di esperienza — il vero bit è la sinapsi, non la cellula.</p>
<h4><span class="hn">06</span>Il dialogo del sonno che fa durare i ricordi</h4>
<p>Il <strong>consolidamento di sistema</strong> è la lenta consegna di un ricordo dall'ippocampo che apprende in fretta all'immagazzinamento neocorticale durevole, e avviene in gran parte nel sonno attraverso una conversazione temporizzata in modo squisito fra i ritmi cerebrali. Le onde acute a increspatura ippocampali, i fusi del sonno corticali e le oscillazioni lente si annidano l'una dentro l'altra in una gerarchia precisa, e si pensa che questa coordinazione riproduca le tracce della giornata alla corteccia proprio quando è pronta a riceverle — incorporando gradualmente un'esperienza fugace nel tessuto distribuito della memoria a lungo termine.</p>`,
          facts: [
            { e: '💡', t: `L'optogenetica — controllare i neuroni con la luce — permise ai ricercatori di impiantare un ricordo falso in un topo nel 2013 (Ramirez et al., Science), testando direttamente la teoria dell'engramma.` },
            { e: '🔬', t: `Una singola spina dendritica può potenziarsi o deprimersi indipendentemente dalle vicine sullo stesso dendrite — l'unità di immagazzinamento di base è più fine del neurone stesso.` },
            { e: '🧬', t: `BDNF Val66Met, una comune variante genetica (~30% della popolazione), compromette la secrezione di BDNF attività-dipendente ed è associata a un ridotto consolidamento della memoria ippocampale.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'STDP (potenziamento)', e: '\\Delta W = A^+ e^{\\Delta t/\\tau^+}', c: 'Δt < 0' },
            { n: 'STDP (depressione)', e: '\\Delta W = -A^- e^{-\\Delta t/\\tau^-}', c: 'Δt > 0' },
            { sep: 1 },
            { n: 'Regola BCM', e: '\\dfrac{dw}{dt} = \\phi(v_{\\text{post}}, \\theta_M)\\,v_{\\text{pre}}' },
            { n: 'Soglia scorrevole', e: '\\tau\\,\\dfrac{d\\theta_M}{dt} = v_{\\text{post}}^2 - \\theta_M' },
            { sep: 1 },
            { n: 'Controllo del calcio', e: '[\\text{Ca}^{2+}] > \\theta_{\\text{high}} \\Rightarrow \\text{LTP}' },
            { n: 'Engramma', e: 'S = \\{\\, n_i : w_{ij} \\gg \\text{baseline} \\,\\}', c: 'insieme rado' },
          ] }, sim: 'memory',
        },
      },
    },
    sleep: {
      title: 'Sonno e coscienza',
      teaser: 'Perché perdiamo ore della nostra vita ogni notte — e cosa succede dentro il cervello mentre lo facciamo?',
      chips: ['Sonno', 'Coscienza', 'Oscillazioni'],
      lvls: {
        junior: {
          title: `Perché il tuo cervello deve andare offline ogni notte!`,
          body: `<p>Ti sei mai chiesto cosa combina davvero il tuo cervello mentre dormi? Si scopre che il sonno non è affatto "non fare nulla" — il tuo cervello è <em>indaffaratissimo</em>. Mentre il tuo corpo riposa, si pulisce, riproduce i ricordi, riequilibra la sua chimica ed esegue riparazioni essenziali che semplicemente non si possono fare da svegli.</p>
<p>Il sonno scorre in cicli di circa 90 minuti. Ognuno attraversa il <strong>sonno leggero</strong>, poi il <strong>sonno profondo</strong> (dove il cervello dispiega grandi onde lente), e infine il <strong>sonno REM</strong> — la fase dei sogni. Durante il REM il tuo cervello è attivo quasi quanto da sveglio, eppure i tuoi muscoli si afflosciano così da non poter mettere in scena i sogni, mentre i tuoi occhi guizzano avanti e indietro sotto le palpebre (è il "movimento rapido degli occhi").</p>
<p>Il sonno profondo è quando avviene la pulizia. Una rete di canali si apre e il liquido cerebrospinale lava attraverso il cervello, sciacquando via i rifiuti tossici — inclusa la beta-amiloide, la stessa proteina che si aggruma in placche nella malattia di Alzheimer. Questo <strong>sistema glinfatico</strong> di pulizia funziona perlopiù di notte. Pensa al sonno come alla lavastoviglie notturna del tuo cervello: saltala per qualche notte e la sporcizia comincia ad accumularsi.</p>`,
          facts: [
            { e: '🧽', t: `Durante il sonno il sistema glinfatico del cervello elimina ~60% in più di rifiuti metabolici — inclusa la beta-amiloide, la proteina che si accumula nell'Alzheimer.` },
            { e: '😴', t: `Dopo 17–19 ore senza sonno, le prestazioni cognitive scendono all'equivalente di un tasso alcolemico dello 0,05% — legalmente ubriaco nella maggior parte dei paesi.` },
            { e: '🐬', t: `Delfini e balene dormono con solo metà del cervello alla volta (sonno a onde lente uniemisferico), tenendo un occhio aperto per sorvegliare i predatori.` },
          ],
          formula: null, sim: 'sleep',
        },
        student: {
          title: `Architettura del sonno, oscillazioni EEG e il sistema glinfatico`,
          body: `<p>Il sonno non è uno stato ma un tour strutturato di parecchi, ognuno con la propria firma EEG. Il <strong>NREM</strong> scende dal leggero N1 nell'N2 — costellato di <em>fusi del sonno</em> a 12–15 Hz — e giù fino all'N3, il profondo sonno a onde lente, dove grandi onde delta sotto i 2 Hz spazzano la corteccia. Poi arriva il <strong>REM</strong>, il cui EEG quasi da sveglio smentisce un corpo tenuto in una paralisi quasi totale. Una notte scorre da quattro a sei di questi cicli di ~90 minuti, caricati davanti col sonno profondo e dietro col REM — ed è per questo che i tuoi sogni più lunghi e vividi arrivano appena prima di svegliarti.</p>
<p>Due orologi decidono quando dormi. Una <strong>pressione omeostatica</strong> (Processo S) si accumula più a lungo resti sveglio man mano che la molecola <em>adenosina</em> si accumula nel cervello — la sensazione fisica della stanchezza. Sopra ci cavalca il <strong>ritmo circadiano</strong> (Processo C), un ciclo di ~24 ore tenuto da un orologio principale nell'ipotalamo e resettato ogni giorno dalla luce che colpisce l'occhio. La tua vigilanza è grosso modo il braccio di ferro fra loro, \\(W(t) = C(t) - S(t)\\). La caffeina funziona impersonando l'adenosina al suo recettore senza accenderlo — non abbassa la tua pressione del sonno, si limita a mascherare il segnale, ed è per questo che la stanchezza torna a fiotti nel momento in cui svanisce.</p>
<p>La scoperta più sorprendente è il <em>perché</em> il sonno profondo è non negoziabile. Il <strong>sistema glinfatico</strong> (Nedergaard, 2013) è una rete idraulica in cui il liquido cerebrospinale scorre lungo i vasi sanguigni e sciacqua attraverso il tessuto cerebrale, portando via i rifiuti metabolici — incluse le proteine beta-amiloide e tau legate alla demenza. Quel lavaggio funziona circa il 60% più forte nel sonno NREM che da svegli, guidato dai lenti impulsi arteriosi del sonno profondo. Una singola brutta notte alza in modo misurabile la beta-amiloide nel cervello umano — un indizio che fa riflettere sul perché la perdita cronica di sonno e l'Alzheimer viaggino insieme.</p>`,
          facts: [
            { e: '☕', t: `La caffeina funziona bloccando i recettori dell'adenosina — non riduce la pressione del sonno, nasconde solo il segnale. Quando svanisce, l'adenosina si riversa dentro e la fatica torna all'improvviso.` },
            { e: '🧹', t: `Una notte di privazione di sonno aumenta i livelli di beta-amiloide nel cervello umano di ~5%, misurato con la PET (Shokri-Kojori et al., 2018).` },
            { e: '🌡️', t: `La temperatura corporea centrale deve scendere di ~0,5°C per avviare il sonno — è perché una camera fresca ti aiuta ad addormentarti più in fretta, e perché un bagno caldo paradossalmente funziona anch'esso (abbassa la temperatura centrale tirando il calore verso la pelle).` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Pressione omeostatica', e: 'S(t) \\propto [\\text{adenosina}]', c: 'sale da svegli, cala nel sonno' },
            { n: 'Processo circadiano', e: 'C(t):\\ \\sim\\!24\\text{-h oscillatore}' },
            { sep: 1 },
            { n: 'Vigilanza', e: 'W(t) = C(t) - S(t)' },
            { n: 'Caffeina', e: '\\text{blocca i recettori dell\'adenosina}', c: 'nasconde la pressione del sonno' },
            { sep: 1 },
            { n: 'Flusso glinfatico', e: 'J_{\\text{CSF}} \\propto \\text{AQP4} \\times \\text{ampiezza dell\'impulso}' },
            { n: 'Pulizia NREM', e: '\\Delta[\\text{A}\\beta] \\approx -60\\%', c: 'vs svegli; Xie et al. 2013' },
          ] }, sim: 'sleep',
        },
        scholar: {
          title: `Oscillazioni talamocorticali, teoria dell'informazione integrata e i correlati neurali della coscienza`,
          body: `<h4><span class="hn">01</span>Dove nascono i ritmi del sonno</h4>
<p>Le onde caratteristiche del sonno sono generate da un anello fra la corteccia e il talamo. In N2/N3 il nucleo reticolare talamico scandisce i <strong>fusi del sonno</strong> — raffiche a 12–15 Hz che crescono e calano — attraverso inibizione alternata e raffiche di calcio di rimbalzo nei neuroni di relè. Sotto di essi corre l'<strong>oscillazione lenta</strong> corticale sotto 1 Hz, l'intera corteccia che rintocca fra <em>stati up</em> di attività quasi da sveglio e <em>stati down</em> di silenzio collettivo. Il sonno, lungi dall'essere spento, è il cervello che suona un piccolo insieme di ritmi squisitamente coordinati.</p>
<h4><span class="hn">02</span>Perché forse dormiamo: l'omeostasi sinaptica</h4>
<p>Quelle oscillazioni lente potrebbero risolvere un problema che la veglia crea. L'<em>ipotesi dell'omeostasi sinaptica</em> (Tononi e Cirelli) sostiene che imparare tutto il giorno guida un rafforzamento netto delle sinapsi che non può continuare indefinitamente — costa energia e spazio e satura la rete. Il sonno profondo, in questa visione, <em>riduce di scala</em> delicatamente le sinapsi a tutto campo, preservando lo schema relativo appreso mentre ripristina la capacità. Significativamente, la quantità di attività a onde lente in una data notte scala con quanto hai imparato quel giorno.</p>
<h4><span class="hn">03</span>L'interruttore del tronco encefalico dietro il sogno</h4>
<p>Il sonno REM è orchestrato dal tronco encefalico. I nuclei colinergici lì accendono il talamo e la corteccia, producendo un EEG quasi indistinguibile dalla veglia, anche mentre i circuiti glutamatergici guidano un'inibizione spinale che lascia il corpo atonico — paralizzato, così non metti in atto i tuoi sogni. Quando quella salvaguardia fallisce, nel disturbo comportamentale del sonno REM, le persone mettono fisicamente in scena i loro sogni, una vivida dimostrazione di quanto sottile sia davvero la linea fra sognare e fare.</p>
<h4><span class="hn">04</span>L'appiglio del problema difficile: i correlati neurali</h4>
<p>Il sonno e l'anestesia contano per la domanda più profonda della neuroscienza perché accendono e spengono la coscienza, offrendo una presa sui <strong>correlati neurali della coscienza</strong> — il macchinario minimo sufficiente per l'esperienza. Cosa c'è in una corteccia attiva nella veglia o nel REM che produce esperienza sentita, mentre la stessissima corteccia nel sonno profondo no, nonostante molta scarica neurale? Isolare quella differenza è la via empirica in un problema a lungo ritenuto puramente filosofico.</p>
<h4><span class="hn">05</span>Due teorie in guerra</h4>
<p>Due quadri dominano. La <em>teoria dello spazio di lavoro globale</em> sostiene che uno stimolo diventa cosciente quando è trasmesso ampiamente attraverso le reti fronto-parietali — un'"accensione" tutto-o-niente che rende l'informazione globalmente disponibile. La <em>teoria dell'informazione integrata</em> prende la direzione opposta, definendo la coscienza come \\(\\Phi\\), la quantità di informazione integrata <em>irriducibile</em> che un sistema genera, e fa l'affermazione provocatoria che qualsiasi sistema con \\(\\Phi > 0\\) ha qualche barlume di esperienza — mentre una rete puramente feedforward, per quanto vasta, essenzialmente nessuno.</p>
<h4><span class="hn">06</span>Mettere un numero sulla consapevolezza</h4>
<p>In modo sorprendente, questo è diventato misurabile al letto del paziente. Colpisci la corteccia con un impulso magnetico e registra l'eco: un cervello cosciente risponde con una risposta complessa e ampiamente riverberante, uno incosciente con un semplice sussulto locale. Comprimere quell'eco produce l'<em>indice di complessità perturbazionale</em>, che segue la coscienza attraverso sonno, anestesia e lesione cerebrale più affidabilmente di qualsiasi comportamento. Ora può segnalare la consapevolezza in pazienti non responsivi, "vegetativi", che non possono muoversi o parlare — un rudimentale misuratore di coscienza, nato dallo studio del sonno.</p>`,
          facts: [
            { e: '📡', t: `L'indice di complessità perturbazionale TMS-EEG (PCI) può determinare con ~90% di accuratezza se un paziente in stato locked-in o vegetativo sia consapevolmente cosciente — senza alcuna risposta comportamentale.` },
            { e: '🔢', t: `La IIT prevede che una semplice rete neurale feedforward, per quanto grande, abbia Φ ≈ 0 e non sia quindi cosciente — un'affermazione che sfida direttamente i modelli della mente basati sul deep learning.` },
            { e: '🌊', t: `Omeostasi del sonno a onde lente: l'attività EEG a onde lente (SWA) dopo la privazione di sonno è precisamente proporzionale alla quantità di apprendimento fatto da svegli — una firma della riduzione di scala sinaptica.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Informazione integrata', e: '\\Phi = \\min_{\\text{partition}} \\text{KL}\\!\\left(p \\,\\|\\, p_{\\text{part}}\\right)' },
            { n: 'Cosciente se', e: '\\Phi > 0 \\text{ e irriducibile}' },
            { sep: 1 },
            { n: 'Accensione globale', e: '\\text{attivazione fronto-parietale tardiva } (>300\\,\\text{ms})' },
            { n: 'Indice di complessità', e: '\\text{PCI} = \\dfrac{\\text{complessità LZ}(\\text{TMS-EEG})}{\\text{entropia del segnale}}' },
            { sep: 1 },
            { n: 'Frequenza dei fusi', e: 'f_{\\text{spindle}} \\approx 12\\text{–}15\\ \\text{Hz}' },
            { n: 'Omeostasi sinaptica', e: '\\text{SWA} \\propto \\textstyle\\sum w_{ij}', c: 'Tononi e Cirelli' },
          ] }, sim: 'sleep',
        },
      },
    },
    neuro: {
      title: 'Il cervello e i neuroni',
      teaser: '86 miliardi di neuroni, 100 mila miliardi di connessioni — come fa il rumore elettrochimico a diventare pensiero, memoria e coscienza?',
      chips: ['Neuroni', 'Sinapsi', 'Cognizione'],
      lvls: {
        junior: {
          title: `Il tuo cervello: il computer più straordinario dell'universo!`,
          body: `<p>Dentro il tuo cranio siede l'oggetto più complesso dell'universo conosciuto: il tuo <strong>cervello</strong>. Pesa circa 1,4 kg, eppure vi stipa qualcosa come <em>86 miliardi</em> di cellule nervose chiamate <strong>neuroni</strong>. Ognuno può collegarsi a migliaia di altri, arrivando a circa 100 mila miliardi di connessioni — più di quante stelle ci siano nella Via Lattea.</p>
<p>I neuroni parlano scaricando minuscoli impulsi elettrici chiamati <strong>potenziali d'azione</strong>. Tocca qualcosa di caldo e i neuroni della tua mano lampeggiano la notizia al cervello in millisecondi; pensa a una parola e milioni di loro scaricano insieme in uno schema preciso. Ed ecco la parte bella: quando impari qualcosa di nuovo — andare in bici, poniamo — le connessioni fra particolari neuroni si rafforzano fisicamente. Quel rafforzamento, quite letteralmente, <em>è</em> la memoria.</p>
<p>Il tuo cervello non si spegne mai davvero. Anche mentre dormi ripassa la giornata, cementa le memorie che vale la pena tenere, elimina i rifiuti e ti prepara per domani — i sogni potrebbero benissimo essere parte di quella pulizia notturna. Nella simulazione qui sotto, guarda i neuroni scaricare e passare segnali lungo una piccola rete, proprio come nella realtà.</p>`,
          facts: [
            { e: '⚡', t: `Un singolo neurone può scaricare fino a 1.000 volte al secondo — inviando segnali elettrici fino a 120 metri al secondo lungo le fibre più veloci.` },
            { e: '💤', t: `Durante il sonno profondo, il cervello elimina i rifiuti tossici attraverso il sistema glinfatico — una sorta di lavaggio notturno del cervello.` },
            { e: '🎸', t: `Suonare uno strumento musicale usa più cervello simultaneamente di quasi ogni altra attività — come un allenamento total-body per i neuroni.` },
          ],
          formula: null, sim: 'neuro',
        },
        student: {
          title: `Potenziali d'azione, trasmissione sinaptica e codifica neurale`,
          body: `<p>Un neurone a riposo tiene il suo interno a circa \\(-70\\) mV, una tensione che la pompa Na⁺/K⁺ lavora costantemente per mantenere. Spingilo oltre una soglia vicino a \\(-55\\) mV e scarica un <strong>potenziale d'azione</strong>: i canali del sodio voltaggio-dipendenti scattano aperti e l'interno schizza a \\(+40\\) mV, poi sbattono chiusi mentre i canali del potassio si aprono per resettare la cellula. Cosa cruciale è <em>tutto-o-niente</em> — ogni spike ha la stessa dimensione — quindi il cervello non può codificare nulla nell'altezza di uno spike. Codifica invece l'informazione nel <em>ritmo</em> e nella precisa <em>tempistica</em> della scarica.</p>
<p>Dove un neurone incontra il successivo, alla <strong>sinapsi</strong>, lo spike in arrivo apre i canali del calcio, e quel calcio innesca le vescicole a scaricare neurotrasmettitore — glutammato per eccitare, GABA per inibire — attraverso un divario largo appena 20 nanometri. Sull'altro lato, alcuni recettori sono semplici canali ionici che si aprono al contatto, mentre altri lanciano più lente cascate chimiche. Uno spicca: il <strong>recettore NMDA</strong> si apre solo quando la cellula sta <em>sia</em> ricevendo glutammato <em>sia</em> è già depolarizzata, rendendolo un rilevatore di coincidenze incorporato.</p>
<p>Quel rilevamento di coincidenze è la radice fisica dell'apprendimento. Quando due neuroni scaricano insieme, il calcio si riversa attraverso i recettori NMDA e innesca una cascata (tramite l'enzima CaMKII) che costella la sinapsi di più recettori, rafforzandola permanentemente — il <strong>potenziamento a lungo termine</strong>. Lo slogan di Hebb lo inchioda: "i neuroni che scaricano insieme, si cablano insieme". Una memoria non è immagazzinata dentro una cellula ma nelle forze regolate delle connessioni fra loro.</p>`,
          facts: [
            { e: '🔵', t: `Il recettore NMDA è chiamato "rilevatore di coincidenze" — si apre solo quando la cellula presinaptica scarica E la cellula postsinaptica è già attiva.` },
            { e: '🌿', t: `La neurogenesi — la nascita di nuovi neuroni — avviene nell'ippocampo adulto ed è potenziata da esercizio, sonno e novità.` },
            { e: '🎯', t: `La dopamina non segnala direttamente il "piacere" — segnala l'errore di previsione: la differenza fra ricompensa attesa ed effettiva.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Potenziale di Nernst', e: 'E_{\\text{ion}} = \\dfrac{RT}{zF}\\ln\\dfrac{[X]_{\\text{out}}}{[X]_{\\text{in}}}' },
            { n: 'Potenziale di riposo', e: 'V_{\\text{rest}} \\approx -70\\ \\text{mV}' },
            { sep: 1 },
            { n: 'Equazione di Goldman', e: 'V_m = \\dfrac{RT}{F}\\ln\\dfrac{P_K[K^+]_o + P_{Na}[Na^+]_o}{P_K[K^+]_i + P_{Na}[Na^+]_i}' },
            { n: 'Soglia', e: 'V_{\\text{thr}} \\approx -55\\ \\text{mV}' },
            { sep: 1 },
            { n: 'Regola di Hebb', e: '\\text{scaricano insieme} \\to \\text{si cablano insieme}' },
            { n: 'Induzione del LTP', e: '\\text{NMDA } \\text{Ca}^{2+} \\to \\text{CaMKII} \\to \\text{AMPA}' },
          ] }, sim: 'neuro',
        },
        scholar: {
          title: `Neuroscienza computazionale: Hodgkin-Huxley, teoria dei campi neurali e connettoma`,
          body: `<h4><span class="hn">01</span>Le equazioni che catturarono uno spike</h4>
<p>Nel 1952, da misurazioni meticolose sull'assone gigante di un calamaro, Hodgkin e Huxley scrissero un insieme di equazioni differenziali non lineari accoppiate che riproducono il potenziale d'azione in dettaglio quantitativo — la sua forma, la sua soglia, la sua pausa refrattaria. La membrana è un condensatore caricato e scaricato da conduttanze ioniche voltaggio-dipendenti, \\(C_m \\dfrac{dV}{dt} = -g_{Na}m^3h(V-E_{Na}) - g_K n^4(V-E_K) - g_L(V-E_L) + I\\), con variabili di gating che si aprono e chiudono al variare della tensione. Valse il premio Nobel del 1963 e resta il basamento di ogni modello biofisico di neurone.</p>
<h4><span class="hn">02</span>Ridurlo all'osso</h4>
<p>Quattro equazioni accoppiate per neurone sono ingombranti per una rete di miliardi, così i teorici costruirono delle riduzioni. Il modello FitzHugh–Nagumo tiene solo due variabili ma preserva l'essenziale geometria del piano delle fasi — la soglia eccitabile e la scarica a ciclo limite — mentre il neurone ancora più semplice <em>integra-e-scarica</em> scarta del tutto la forma dello spike e si limita a sommare l'input finché non supera la soglia. Queste caricature sacrificano il dettaglio biofisico per rendere possibili la simulazione su larga scala e l'analisi matematica.</p>
<h4><span class="hn">03</span>Dalle singole cellule ai campi di tessuto</h4>
<p>Allarga lo sguardo dai singoli neuroni a un foglio di corteccia e puoi trattare l'attività come un campo continuo. La <strong>teoria dei campi neurali</strong> modella l'attività media \\(u(x,t)\\) con un'equazione integro-differenziale, \\(\\tau\\,\\partial_t u = -u + \\int w(x-y)\\,F[u(y,t)]\\,dy + I\\), dove il nucleo di connessione \\(w\\) è tipicamente un "cappello messicano" — i neuroni vicini eccitano, quelli lontani inibiscono. È un modo notevolmente compatto per descrivere onde, protuberanze e schemi che rotolano sulla superficie corticale.</p>
<h4><span class="hn">04</span>Anche il cervello fa i motivi di Turing</h4>
<p>Quell'accoppiamento a cappello messicano ha una conseguenza familiare. Proprio come nella chimica di reazione-diffusione, l'eccitazione locale con inibizione a lungo raggio può spezzare spontaneamente l'uniformità in uno schema periodico — un'<em>instabilità di tipo Turing</em>, innescata quando il nucleo favorisce una particolare lunghezza d'onda spaziale. La stessa matematica che macchia un leopardo è invocata per spiegare le colonne corticali, le stabili "protuberanze" di attività che tengono un elemento nella memoria di lavoro, e la sbalorditiva griglia esagonale delle cellule di navigazione della corteccia entorinale.</p>
<h4><span class="hn">05</span>Mappare ogni filo: il connettoma</h4>
<p>Sotto la dinamica sta il diagramma di cablaggio — il <strong>connettoma</strong> — e mapparlo è brutale. L'unico <em>completo</em> appartiene al verme C. elegans: 302 neuroni, ~7.000 sinapsi, finito nel 1986. Per gli umani la scala è sbalorditiva; affettare e riprendere un singolo millimetro cubo di corteccia con la microscopia elettronica genera oltre 100 terabyte di dati (il dataset H01). Ricostruire un intero cervello umano resta ben fuori portata, ma i frammenti stanno già rimodellando come pensiamo all'organizzazione neurale.</p>
<h4><span class="hn">06</span>La forma di una rete sana</h4>
<p>Dove i connettomi esistono, la teoria dei grafi rivela un'architettura coerente: topologia a <em>piccolo mondo</em>, con denso clustering locale e brevi percorsi globali, più un "rich club" di regioni-hub fortemente interconnesse e una gerarchia di moduli. È un cablaggio efficiente sotto stretti budget metabolici e spaziali — e, significativamente, queste stesse firme di rete sono misurabilmente disturbate nell'Alzheimer, nella schizofrenia e nell'autismo, suggerendo che alcuni disturbi cerebrali siano, in fondo, malattie della connettività.</p>`,
          facts: [
            { e: '🔬', t: `Un cubo di 1 mm³ di corteccia umana contiene ~57.000 cellule, ~230 mm di vasi sanguigni e ~1,5 km di assoni — tutto in un volume più piccolo di un granello di sabbia.` },
            { e: '🌐', t: `Il cervello umano opera a circa 20 W — equivalente a una lampadina fioca — eppure supera qualsiasi computer esistente nei compiti di riconoscimento di schemi.` },
            { e: '💡', t: `La plasticità hebbiana, la plasticità dipendente dalla tempistica degli spike (STDP) e l'algoritmo di retropropagazione nel deep learning sono tutti formalmente equivalenti in certe condizioni.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Hodgkin–Huxley', e: 'C_m \\dfrac{dV}{dt} = -g_{Na}m^3h(V\\!-\\!E_{Na}) - g_K n^4(V\\!-\\!E_K) - g_L(V\\!-\\!E_L) + I' },
            { n: 'Variabile di gating', e: '\\dfrac{dm}{dt} = \\alpha_m(V)(1-m) - \\beta_m(V)\\,m' },
            { sep: 1 },
            { n: 'Campo neurale', e: '\\tau\\,\\partial_t u = -u + \\int w(x-y)F[u(y)]\\,dy + I' },
            { n: 'Instabilità di Turing', e: '\\hat{w}(k^*) > 0 \\text{ per qualche } k^* \\ne 0' },
            { sep: 1 },
            { n: 'Integra-e-scarica', e: 'C\\dfrac{dV}{dt} = -\\dfrac{V-V_{\\text{rest}}}{R} + I', c: 'scarica a V ≥ V_thr' },
          ] }, sim: 'neuro',
        },
      },
    },
    neuron: {
      title: 'Il cervello elettrico',
      teaser: 'Come fa una singola cellula cerebrale a scaricare 200 scintille elettriche al secondo — e a cablare i tuoi pensieri?',
      chips: ['Neuroni', 'Elettricità', 'Sinapsi'],
      lvls: {
        junior: {
          title: `Il tuo cervello funziona a minuscole scintille!`,
          body: `<p>Dentro il tuo cranio, proprio ora, qualcosa come <strong>86 miliardi di neuroni</strong> lampeggiano come minuscoli fulmini, scagliando messaggi fino a 120 metri al secondo. Quelle scintille sono il modo in cui stai leggendo questa frase, in cui riesci a immaginare il volto di un amico, e in cui la tua mano si ritrae da qualcosa di caldo prima ancora che tu abbia deciso di muoverti.</p>
<p>Un neurone è una cellula specializzata sagomata un po' come un albero. I suoi <strong>dendriti</strong> ramificati sono le radici, che raccolgono i segnali in arrivo dai vicini, e la sua lunga coda, l'<strong>assone</strong>, è il tronco che porta il segnale avanti. Quando abbastanza segnali in arrivo si accumulano, il neurone "scarica", lanciando un breve impulso elettrico che corre lungo l'assone verso la cellula successiva in fila.</p>
<p>Fra due neuroni sta uno stretto divario, la <strong>sinapsi</strong>, e qui il segnale cambia forma. Invece di saltare dall'altra parte come elettricità, l'impulso in arrivo rilascia piccoli messaggeri chimici — <strong>neurotrasmettitori</strong> come dopamina e serotonina — che derivano oltre il divario e dicono al neurone successivo se scaricare o restare fermo. Ogni pensiero, sensazione, memoria e movimento che tu abbia mai avuto è stato portato da catene di queste scintille che saltellano attraverso miliardi di sinapsi.</p>`,
          facts: [
            { e: '⚡', t: `I neuroni possono scaricare fino a 200 volte al secondo. È più veloce di qualsiasi batterista professionista — e ne hai 86 miliardi!` },
            { e: '🔗', t: `Il tuo cervello ha grosso modo 100 mila miliardi di sinapsi — più di tutte le stelle della Via Lattea e di Andromeda messe insieme.` },
            { e: '🐢', t: `Non tutti i segnali sono uguali: le veloci fibre mielinizzate portano il dolore a 120 m/s, mentre le lente fibre nude portano un dolore sordo a soli 0,5 m/s.` },
          ],
          formula: null, sim: 'neuron',
        },
        student: {
          title: `Il potenziale d'azione di Hodgkin-Huxley`,
          body: `<p>Un neurone a riposo tiene un <strong>potenziale di membrana</strong> di circa \\(-70\\) mV — il suo interno mantenuto più negativo dell'esterno dalla pompa Na⁺/K⁺, che instancabilmente espelle tre ioni sodio per ogni due potassio che tira dentro. Depolarizza la membrana oltre una soglia vicino a \\(-55\\) mV e i canali del sodio voltaggio-dipendenti esplodono aperti, lasciando il sodio inondare dentro e spingendo la tensione fino a \\(+40\\) mV in meno di un millisecondo.</p>
<p>Quel fulmineo capovolgimento è il <strong>potenziale d'azione</strong>, ed è rigorosamente <em>tutto-o-niente</em>: una volta scattato, raggiunge sempre grosso modo lo stesso picco per quanto forte sia stato spinto. Quindi un neurone segnala l'intensità in base a quanto <em>spesso</em> scarica, non a quanto è grande ogni spike. Entro un millisecondo i canali del sodio si inattivano e i più lenti canali del potassio riportano giù la tensione, superandola brevemente in una tregua <em>refrattaria</em> in cui nessuno spike fresco può scaricare — un tetto rigido su quanto in fretta un neurone può parlare.</p>
<p>Poi lo spike viaggia: ogni chiazza di membrana depolarizzata spinge la vicina oltre la soglia, e l'impulso marcia lungo l'assone senza svanire. La natura ci ha imbullonato un turbocompressore — l'isolamento grasso di <strong>mielina</strong> costringe il segnale a saltare fra spazi nudi chiamati <em>nodi di Ranvier</em> (conduzione saltatoria), spingendo la velocità verso 120 m/s mentre taglia il conto energetico. Hodgkin e Huxley mapparono tutta questa cascata nel 1952, dalle correnti ioniche allo spike, e ne presero il premio Nobel del 1963.</p>`,
          facts: [
            { e: '🏆', t: `Hodgkin e Huxley ricavarono le loro equazioni per il potenziale d'azione misurando le correnti negli assoni giganti di calamaro — larghi 1 mm, visibili a occhio nudo!` },
            { e: '💊', t: `Gli anestetici locali come la lidocaina bloccano i canali Na⁺ voltaggio-dipendenti, silenziando i segnali di dolore prima ancora che raggiungano il cervello.` },
            { e: '🌊', t: `La sclerosi multipla distrugge la guaina mielinica, rallentando o bloccando la conduzione — causando debolezza, intorpidimento e problemi di vista.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Potenziale di riposo', e: 'V_{\\text{rest}} \\approx -70\\ \\text{mV}', c: 'pompa Na⁺/K⁺' },
            { n: 'Soglia', e: 'V_{\\text{thr}} \\approx -55\\ \\text{mV}', c: 'tutto-o-niente' },
            { sep: 1 },
            { n: 'Potenziale di Nernst', e: 'E_{\\text{ion}} = \\dfrac{RT}{zF}\\ln\\dfrac{[X]_{\\text{out}}}{[X]_{\\text{in}}}' },
            { n: 'Equilibrio del Na⁺', e: 'E_{Na} \\approx +60\\ \\text{mV}' },
            { n: 'Equilibrio del K⁺', e: 'E_K \\approx -88\\ \\text{mV}' },
            { sep: 1 },
            { n: 'Equazione di Goldman', e: 'V_m = \\dfrac{RT}{F}\\ln\\dfrac{P_K[K^+]_o + P_{Na}[Na^+]_o}{P_K[K^+]_i + P_{Na}[Na^+]_i}' },
          ] }, sim: 'neuron',
        },
        scholar: {
          title: `Equazioni di Hodgkin-Huxley, modelli di conduttanza e codifica neurale`,
          body: `<h4><span class="hn">01</span>Lo spike come circuito</h4>
<p>Il genio di Hodgkin e Huxley fu trattare la membrana come un circuito elettrico: un condensatore in parallelo con resistori voltaggio-controllati per ciascun ione. La conservazione della corrente dà \\(C_m \\dfrac{dV}{dt} = -g_{Na}m^3h(V-E_{Na}) - g_K n^4(V-E_K) - g_L(V-E_L) + I\\). Ogni termine è un percorso ionico, ogni batteria \\(E\\) il potenziale di Nernst dello ione. Risolvilo e un potenziale d'azione completo appare, non richiesto — prova che lo spike non è uno speciale trucco biologico ma una conseguenza di una manciata di canali voltaggio-dipendenti che obbediscono alla legge di Ohm.</p>
<h4><span class="hn">02</span>Canali che si aprono e chiudono nel tempo</h4>
<p>La non linearità vive nelle <em>variabili di gating</em> \\(m, h, n\\), ciascuna la frazione di canali in una configurazione aperta e ciascuna che si rilassa verso un obiettivo voltaggio-dipendente, \\(\\dfrac{dx}{dt} = \\alpha_x(V)(1-x) - \\beta_x(V)x\\). Il sodio si attiva veloce (\\(m\\)) ma poi si inattiva (\\(h\\)); il potassio si attiva lentamente (\\(n\\)). Quella tempistica sfalsata — dentro rapido, fuori ritardato — è ciò che fa superare e recuperare la tensione anziché limitarsi a rilassarsi, trasformando un attraversamento di soglia in un impulso stereotipato.</p>
<h4><span class="hn">03</span>Ridurre quattro equazioni a due</h4>
<p>Quattro variabili accoppiate sono difficili da immaginare, così FitzHugh e Nagumo raggrupparono la coppia veloce e la coppia lenta in appena due, \\(\\dot v = v - v^3/3 - w + I\\) e \\(\\dot w = \\varepsilon(v + a - bw)\\). Ora l'intera storia sta su un <em>piano delle fasi</em> 2-D, dove il potenziale d'azione è semplicemente un grande anello che lo stato compie quando uno stimolo lo spinge oltre una curva di soglia — sotto la curva scivola tranquillo a casa, sopra prende la grande escursione.</p>
<h4><span class="hn">04</span>Due sapori di eccitabilità</h4>
<p>Quella visione geometrica classifica i neuroni reali. Se la scarica si accende attraverso una biforcazione <em>sella-nodo</em>, la cellula è di Tipo I — può scaricare arbitrariamente lenta, aumentando il suo ritmo dolcemente con l'input. Se si accende attraverso una biforcazione di <em>Hopf</em>, è di Tipo II — la scarica appare bruscamente a una frequenza finita. Non è oziosa tassonomia: se un neurone integri gli input o risuoni con essi plasma come un intero circuito calcola.</p>
<h4><span class="hn">05</span>Come si diffondono i segnali: la teoria del cavo</h4>
<p>Un dendrite è un cavo elettrico che perde, e quanto lontano un segnale passivo arriva prima di affievolirsi è fissato dalla <em>costante di spazio</em> \\(\\lambda = \\sqrt{r_m/r_a}\\) — l'equilibrio fra perdita di membrana e resistenza assiale. È per questo che le sinapsi lontane si sentono solo debolmente al soma, perché la mielina (che alza \\(r_m\\)) lascia i segnali viaggiare più lontano fra i nodi, e perché l'architettura ramificata di un neurone è essa stessa una forma di computazione, non mera idraulica.</p>
<h4><span class="hn">06</span>Cosa significano davvero gli spike</h4>
<p>Infine, cosa <em>codificano</em> questi impulsi? La risposta predefinita è la <em>codifica di ritmo</em> — informazione nella frequenza di scarica — ma anche la tempistica conta chiaramente: il sistema uditivo inchioda la direzione del suono da differenze di spike di microsecondi, e le cellule di posizione ippocampali segnalano la posizione attraverso l'esatta <em>fase</em> in cui scaricano. La corteccia si appoggia alla codifica <em>sparsa</em>, con solo ~1% dei neuroni attivi in una volta, spremendo la massima rappresentazione dalla minima spesa metabolica — la stessa logica di efficienza che ora guida i chip neuromorfici "a spike" costruiti per calcolare come un cervello.</p>`,
          facts: [
            { e: '🧮', t: `Il modello HH usa 4 EDO accoppiate. I moderni modelli compartimentali di un singolo neurone possono avere migliaia di compartimenti e decine di migliaia di equazioni.` },
            { e: '🗺️', t: `Le cellule di posizione ippocampali scaricano solo quando un animale è in una posizione specifica — codificano letteralmente una "mappa cognitiva" dello spazio nella tempistica degli spike.` },
            { e: '🤖', t: `Le reti neurali a spike (SNN) imitano la dinamica HH nel silicio; il chip Loihi di Intel ha 128 core neuromorfici che elaborano l'informazione 1000 volte più efficientemente delle GPU.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Membrana HH', e: 'C_m\\dfrac{dV}{dt} = -g_{Na}m^3h(V\\!-\\!E_{Na}) - g_K n^4(V\\!-\\!E_K) - g_L(V\\!-\\!E_L) + I' },
            { n: 'Cinetica di gating', e: '\\dfrac{dx}{dt} = \\alpha_x(V)(1-x) - \\beta_x(V)x', c: 'x ∈ {m,h,n}' },
            { sep: 1 },
            { n: 'FitzHugh–Nagumo', e: '\\dot v = v - \\tfrac{v^3}{3} - w + I,\\quad \\dot w = \\varepsilon(v + a - bw)' },
            { sep: 1 },
            { n: 'Equazione del cavo', e: '\\lambda^2\\dfrac{\\partial^2 V}{\\partial x^2} = \\tau\\dfrac{\\partial V}{\\partial t} + V' },
            { n: 'Costante di spazio', e: '\\lambda = \\sqrt{r_m/r_a}', c: 'r_m membrana, r_a assiale' },
          ] }, sim: 'neuron',
        },
      },
    },
    astro: {
      title: 'Stelle e universo',
      teaser: 'Una stella è una fornace nucleare larga 700.000 km. Come nascono, e cosa succede quando muoiono?',
      chips: ['Stelle', 'Big Bang', 'Spaziotempo'],
      lvls: {
        junior: {
          title: `Soli, supernove e la storia di ogni cosa!`,
          body: `<p>Alza lo sguardo al cielo notturno: ogni stella che vedi è un sole — una colossale palla di gas incandescente, tenuta insieme dalla propria gravità e ardente di fusione nucleare nel suo nucleo. Il nostro Sole è così vasto che un milione di Terre ci starebbe dentro, e nonostante ciò è una stella perfettamente ordinaria.</p>
<p>Le stelle nascono dentro enormi nubi di gas e polvere chiamate <strong>nebulose</strong>. La gravità stringe una tale nube sempre più forte finché il suo cuore diventa abbastanza caldo perché gli atomi si fondano insieme — e la stella si accende. È la stessa reazione di una bomba a idrogeno, tranne che condotta in modo stabile per miliardi di anni invece che in un unico istante accecante.</p>
<p>Ogni stella prima o poi esaurisce il carburante. Una modesta come il nostro Sole si gonfierà in una <strong>gigante rossa</strong>, poi soffierà via delicatamente i suoi strati esterni come un guscio incandescente, lasciando dietro una minuscola e densa nana bianca. I pesi massimi se ne vanno in modo spettacolare, in una <strong>supernova</strong> abbastanza luminosa da eclissare un'intera galassia per settimane. E quell'esplosione è generosa: scaglia gli atomi forgiati dentro la stella — il ferro nel tuo sangue, il calcio nelle tue ossa — attraverso lo spazio per costruire nuovi mondi. Sei, letteralmente, fatto di polvere di stelle.</p>`,
          facts: [
            { e: '☀️', t: `Il nostro Sole fonde 620 milioni di tonnellate di idrogeno ogni secondo — e ha carburante per altri 5 miliardi di anni.` },
            { e: '💥', t: `Una supernova rilascia in pochi secondi più energia di quanta il Sole ne emetterà nell'intera sua vita di 10 miliardi di anni.` },
            { e: '⭐', t: `La stella più vicina (Proxima Centauri) è a 4,24 anni luce — alla velocità della luce ci arriveresti in 4,24 anni!` },
          ],
          formula: null, sim: 'astro',
        },
        student: {
          title: `Struttura stellare, il diagramma H-R e la nucleosintesi`,
          body: `<p>Una stella passa tutta la vita in un braccio di ferro chiamato <strong>equilibrio idrostatico</strong>: la spinta verso l'esterno del gas caldo e della radiazione che bilancia esattamente la stretta verso l'interno della sua stessa gravità. Sbilancia quell'equilibrio e la stella si gonfia o si restringe finché non regge di nuovo. La massa è il destino qui — la luminosità sale ripidamente come \\(L \\propto M^4\\), quindi una stella di massa doppia del Sole splende circa 16 volte di più e si consuma otto volte più in fretta. Il nostro Sole ha ~10 miliardi di anni nella sequenza principale; una gigante di 10 masse solari, appena 30 milioni.</p>
<p>Traccia le stelle per luminosità contro temperatura superficiale e si rifiutano di sparpagliarsi a caso — cadono sul <strong>diagramma di Hertzsprung–Russell</strong>, la maggior parte allineate lungo una "sequenza principale" diagonale dalle fredde nane rosse alle ardenti giganti blu. Il colore di una stella tradisce la sua temperatura tramite la legge di Wien, \\(\\lambda_{\\max} = b/T\\): più caldo brucia, più blu risplende. Giganti rosse, nane bianche e supergiganti siedono nei loro quartieri distinti fuori dalla striscia principale, ognuno un capitolo diverso della vita stellare.</p>
<p>Le stelle sono anche le fucine dell'universo. Il Big Bang lasciò dietro quasi nient'altro che idrogeno ed elio; ogni atomo più pesante fu cotto dentro una stella. Nella sequenza principale fondono idrogeno in elio; nei nuclei che invecchiano il processo tre-alfa fonde \\(3\\,{}^4\\text{He} \\to {}^{12}\\text{C}\\), e le stelle più massicce salgono la tavola periodica fino al ferro. Lì la scala finisce — il nucleo del ferro è il più strettamente legato, quindi fonderlo <em>costa</em> energia, il nucleo collassa su sé stesso, e la stella detona come <strong>supernova</strong>. Tutto ciò che è oltre il ferro — il tuo oro, il tuo platino — è martellato insieme in quelle esplosioni e nelle collisioni di stelle di neutroni.</p>`,
          facts: [
            { e: '🪙', t: `Oro e platino sulla Terra furono fatti in collisioni di stelle di neutroni — confermato dall'evento di onde gravitazionali GW170817 (2017).` },
            { e: '🔵', t: `La stella più massiccia conosciuta, R136a1, è ~300 masse solari — così luminosa da spingere contro il limite di Eddington.` },
            { e: '🌀', t: `Le stelle di neutroni sono larghe ~20 km ma pesano 1,4 masse solari — un cucchiaino di materia di stella di neutroni peserebbe un miliardo di tonnellate.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Equilibrio idrostatico', e: '\\dfrac{dP}{dr} = -\\dfrac{G M(r)\\,\\rho}{r^2}' },
            { n: 'Massa–luminosità', e: '\\dfrac{L}{L_\\odot} \\approx \\left(\\dfrac{M}{M_\\odot}\\right)^{4}' },
            { sep: 1 },
            { n: 'Legge di Wien', e: '\\lambda_{\\max} = \\dfrac{b}{T},\\quad b = 2.898\\times10^{-3}\\ \\text{m·K}' },
            { n: 'Stefan–Boltzmann', e: 'L = 4\\pi R^2 \\sigma T^4' },
            { sep: 1 },
            { n: 'Tre-alfa', e: '3\\,{}^4\\text{He} \\to {}^{12}\\text{C} + \\gamma' },
            { n: 'Vita nella sequenza principale', e: '\\tau \\approx M/L \\propto M^{-3}' },
          ] }, sim: 'astro',
        },
        scholar: {
          title: `Relatività generale, buchi neri e la struttura su larga scala dell'universo`,
          body: `<h4><span class="hn">01</span>Il punto di non ritorno</h4>
<p>Quando un nucleo stellare più pesante di circa 3 masse solari collassa, nulla di conosciuto può fermarlo. Lo spaziotempo si arriccia così strettamente che si forma una superficie di non ritorno — l'<strong>orizzonte degli eventi</strong> al raggio di Schwarzschild \\(r_S = 2GM/c^2\\). Attraversalo e la geometria stessa inclina ogni futuro possibile verso l'interno: sfuggire significherebbe viaggiare più veloce della luce, cosa non tanto difficile quanto causalmente proibita. Al centro, la relatività generale prevede il proprio crollo, una singolarità di curvatura infinita.</p>
<h4><span class="hn">02</span>Buchi neri che risplendono</h4>
<p>Non sono del tutto neri, però. Hawking mostrò nel 1974 che i campi quantistici vicino all'orizzonte costringono un buco nero a irradiare debolmente, come un corpo caldo, alla temperatura \\(T_H = \\dfrac{\\hbar c^3}{8\\pi G M k_B}\\). I buchi più piccoli sono <em>più caldi</em>, quindi un buco nero evapora lentamente e — nel corso di ere inimmaginabili — svanisce. Ciò pone l'enigma più profondo della materia: se evapora in radiazione termica senza tratti distintivi, cosa è successo all'informazione su tutto ciò che vi è caduto dentro? Il <em>paradosso dell'informazione</em> resta irrisolto.</p>
<h4><span class="hn">03</span>L'universo in espansione</h4>
<p>Allarga lo sguardo all'intero cosmo e la stessa teoria dà il <strong>modello ΛCDM</strong>: uno spaziotempo piatto e in espansione governato dall'equazione di Friedmann \\(H^2 = \\dfrac{8\\pi G}{3}\\rho - \\dfrac{k}{a^2} + \\dfrac{\\Lambda}{3}\\). Ogni ingrediente si diluisce in modo diverso man mano che lo spazio si stira — la radiazione più in fretta, la materia più lentamente, l'energia oscura per niente — quindi la storia dell'universo è un passaggio di consegne fra ere, e la sua attuale accelerazione è il momento in cui l'energia oscura ha preso il volante.</p>
<h4><span class="hn">04</span>Un universo fatto perlopiù di ignoto</h4>
<p>La contabilità è umiliante. Gli atomi ordinari costituiscono solo ~5% del bilancio energetico cosmico; ~27% è <em>materia oscura</em>, la cui gravità vediamo chiaramente ma la cui particella nessuno ha mai catturato, e ~68% è <em>energia oscura</em>, un inquilino ancora più strano che spinge l'espansione ad allargarsi. Ben il 95% dell'universo è roba che non riusciamo a identificare — una coda che fa riflettere dopo quattro secoli di astronomia.</p>
<h4><span class="hn">05</span>Una crepa nel modello: la tensione di Hubble</h4>
<p>Il ΛCDM si adatta a un'enorme gamma di dati, eppure un numero non si riconcilia. Il tasso di espansione \\(H_0\\) dedotto dalla CMB dell'universo primordiale viene fuori vicino a 67 km/s/Mpc; misurato direttamente da stelle e supernove vicine, è circa 73. Il divario è ormai troppo grande e troppo ostinato per darne la colpa all'errore — potrebbe essere il primo solido indizio di fisica oltre il modello cosmologico standard.</p>
<h4><span class="hn">06</span>La luce più antica in esistenza</h4>
<p>La nostra finestra più nitida su tutto ciò è il <strong>fondo cosmico a microonde</strong> (CMB), luce liberata 380.000 anni dopo il Big Bang quando l'universo in raffreddamento divenne per la prima volta trasparente. La sua temperatura è uniforme a una parte su 100.000, e quelle minuscole increspature \\(\\delta T/T \\sim 10^{-5}\\) sono i semi di ogni galassia, congelati sul posto. Leggere lo schema di macchie calde e fredde — i picchi acustici misurati da Planck — inchioda l'età, la geometria e i contenuti dell'intero universo in un colpo solo.</p>`,
          facts: [
            { e: '🌑', t: `La prima immagine di un buco nero (M87*, 2019) corrispose precisamente alle previsioni della relatività generale — confermando l'anello di fotoni e la dimensione dell'ombra.` },
            { e: '🔭', t: `Il JWST ha osservato galassie a z > 13, corrispondenti a luce emessa appena 320 milioni di anni dopo il Big Bang.` },
            { e: '🌌', t: `La materia oscura (27% dell'energia dell'universo) non è mai stata rilevata direttamente come particella, nonostante prove gravitazionali schiaccianti.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Raggio di Schwarzschild', e: 'r_S = \\dfrac{2GM}{c^2}', c: 'orizzonte degli eventi' },
            { n: 'Temperatura di Hawking', e: 'T_H = \\dfrac{\\hbar c^3}{8\\pi G M k_B}' },
            { sep: 1 },
            { n: 'Equazione di Friedmann', e: 'H^2 = \\dfrac{8\\pi G}{3}\\rho - \\dfrac{k}{a^2} + \\dfrac{\\Lambda}{3}' },
            { n: 'Legge di Hubble', e: 'v = H_0\\,d', c: 'H_0 ≈ 70 km/s/Mpc' },
            { sep: 1 },
            { n: 'Temperatura della CMB', e: 'T_0 = 2.725\\ \\text{K}' },
            { n: 'Ultima diffusione', e: 'z_* \\approx 1100,\\;\\; t_* \\approx 380{,}000\\ \\text{anni}' },
          ] }, sim: 'astro',
        },
      },
    },
    cosmology: {
      title: 'Cosmologia e Big Bang',
      teaser: '13,8 miliardi di anni fa, tutta la materia, l\'energia, lo spazio e il tempo dell\'universo esplosero da un punto più piccolo di un atomo. Come lo sappiamo — e cosa c\'era prima?',
      chips: ['Big Bang', 'Energia oscura', 'CMB'],
      lvls: {
        junior: {
          title: `L'universo ha avuto un inizio — e possiamo ancora vederne il bagliore!`,
          body: `<p>Tutto ciò che tu abbia mai visto — ogni stella, galassia, pianeta e atomo — un tempo era stipato in uno spazio inimmaginabilmente più piccolo del punto che chiude questa frase. Circa <strong>13,8 miliardi di anni fa</strong> quel punto impossibilmente caldo e denso cominciò a espandersi in un evento che chiamiamo <strong>Big Bang</strong>. Ed ecco la sottigliezza: non era materia che volava via nello spazio vuoto — era <em>lo spazio stesso</em> a espandersi, e lo fa da allora.</p>
<p>Per i primi minuti l'universo era abbastanza caldo da fondere protoni e neutroni in idrogeno ed elio, ma troppo caldo perché atomi interi reggessero insieme — era una nebbia incandescente di plasma, opaca come l'interno di una stella. Poi, 380.000 anni dopo, si raffreddò quel tanto che bastava perché gli elettroni si posassero sui nuclei, e la nebbia si diradò. La luce si riversò liberamente attraverso il cosmo per la primissima volta — e, notevolmente, <strong>possiamo ancora catturare quell'antica luce oggi</strong>. Bagna l'intero cielo come un debole sibilo di microonde, il <strong>fondo cosmico a microonde</strong>.</p>
<p>La CMB non è niente meno che una foto da neonato dell'universo a 380.000 anni d'età. È quasi perfettamente liscia in ogni direzione — ma non del tutto. Deboli increspature di temperatura, appena una parte su 100.000, sono i semi di ogni cosa: la gravità passò miliardi di anni ad amplificare quei minuscoli grumi in stelle, galassie e la vasta ragnatela cosmica in cui viviamo. Nella simulazione qui sotto, guarda l'universo espandersi dal Big Bang a oggi.</p>`,
          facts: [
            { e: '📡', t: `La CMB fu scoperta per caso nel 1964 da Penzias e Wilson, che pensavano che il misterioso rumore nella loro antenna radio fosse escrementi di piccione. Valse loro il premio Nobel nel 1978.` },
            { e: '🌌', t: `L'universo osservabile è largo 93 miliardi di anni luce — anche se ha solo 13,8 miliardi di anni. L'espansione dello spazio stesso porta le regioni lontane oltre ciò che la luce potrebbe raggiungere.` },
            { e: '🔭', t: `Il James Webb Space Telescope ha osservato galassie in formazione appena 320 milioni di anni dopo il Big Bang — prima di quanto la maggior parte dei modelli prevedesse, sfidando la nostra comprensione della formazione precoce delle galassie.` },
          ],
          formula: null, sim: 'cosmology',
        },
        student: {
          title: `Le equazioni di Friedmann, l'inflazione e l'energia oscura`,
          body: `<p>L'espansione dell'universo è scritta nelle <strong>equazioni di Friedmann</strong>, che saltano fuori dalla relatività generale nel momento in cui assumi che il cosmo appaia lo stesso ovunque e in ogni direzione. La prima di esse, \\(H^2 = \\dfrac{8\\pi G}{3}\\rho - \\dfrac{kc^2}{a^2} + \\dfrac{\\Lambda c^2}{3}\\), lega il tasso di espansione \\(H\\) a ciò che l'universo contiene: materia e radiazione \\(\\rho\\), la sua curvatura \\(k\\) e la costante cosmologica \\(\\Lambda\\). Leggere il cielo restituisce un inventario sbalorditivo — lo spazio è piatto (\\(k \\approx 0\\)) e fatto di appena ~5% di materia ordinaria, ~27% di materia oscura e ~68% di energia oscura.</p>
<p>L'<strong>inflazione cosmica</strong> (Guth, 1981) propone che nella prima scheggia di secondo l'universo si sia gonfiato esponenzialmente, \\(a \\propto e^{Ht}\\), crescendo di un fattore \\(10^{26}\\) in circa \\(10^{-32}\\) s. Quell'unico folle scatto di crescita risolve tre enigmi assillanti in un colpo: perché la CMB è uniforme fra regioni che non avrebbero mai potuto scambiarsi un segnale (il problema dell'orizzonte), perché lo spazio è così squisitamente piatto (il problema della piattezza), e perché non vediamo reliquie esotiche. Meglio ancora, i tremolii quantistici stirati durante l'inflazione divennero le increspature di densità nella CMB — l'origine di tutta la struttura cosmica, piantata dalla meccanica quantistica.</p>
<p>La scoperta più inquietante è che l'espansione sta <em>accelerando</em>, svelata nel 1998 dalla sorprendente fiochezza di supernove lontane (Nobel 2011). Qualcosa con pressione negativa — l'<strong>energia oscura</strong>, equazione di stato \\(w = p/\\rho c^2 \\approx -1\\) — sta allargando l'universo sempre più in fretta. Ed è comparsa una vera crepa: il tasso di espansione \\(H_0\\) misurato dalla CMB primordiale (67 km/s/Mpc) si rifiuta ostinatamente di corrispondere al valore letto dalle supernove vicine (73), una <strong>tensione di Hubble</strong> a cinque sigma che potrebbe essere il primo segno di fisica oltre il modello standard della cosmologia.</p>`,
          facts: [
            { e: '🔭', t: `Le supernove di tipo Ia sono "candele standard" perché esplodono tutte con luminosità di picco quasi identica — la loro luminosità apparente rivela la loro distanza, provando che l'universo accelera.` },
            { e: '🌡️', t: `La temperatura della CMB oggi è 2,7255 K — lo spettro di corpo nero più precisamente misurato in natura, con deviazioni inferiori a 1 parte su 100.000.` },
            { e: '⚛️', t: `La nucleosintesi del Big Bang nei primi 3 minuti produsse 75% di idrogeno e 25% di elio in massa — corrispondendo esattamente alle abbondanze primordiali osservate, una sbalorditiva conferma del modello.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Equazione di Friedmann', e: 'H^2 = \\dfrac{8\\pi G}{3}\\rho - \\dfrac{kc^2}{a^2} + \\dfrac{\\Lambda c^2}{3}' },
            { n: 'Parametro di Hubble', e: 'H(z) = H_0\\sqrt{\\Omega_m(1+z)^3 + \\Omega_r(1+z)^4 + \\Omega_\\Lambda}' },
            { sep: 1 },
            { n: 'Crescita inflazionaria', e: 'a(t) \\propto e^{Ht}', c: 'in accelerazione' },
            { n: 'Equazione di stato dell\'energia oscura', e: 'w = \\dfrac{p}{\\rho c^2} \\approx -1' },
            { sep: 1 },
            { n: 'Temperatura della CMB', e: 'T_{\\text{CMB}} = 2.7255\\ \\text{K}' },
            { n: 'E-fold dell\'inflazione', e: 'N = \\int H\\,dt \\gtrsim 60' },
          ] }, sim: 'cosmology',
        },
        scholar: {
          title: `Anisotropie della CMB, struttura su larga scala e gravità quantistica`,
          body: `<h4><span class="hn">01</span>Leggere la luce più antica</h4>
<p>Le minuscole increspature di temperatura della CMB \\(\\delta T/T \\sim 10^{-5}\\) sono il dataset più ricco della cosmologia, e il modo di sfruttarle è espandere l'intero cielo in armoniche sferiche, \\(\\delta T/T(\\hat{n}) = \\sum_{\\ell m} a_{\\ell m} Y_{\\ell m}(\\hat{n})\\). Mediando si ottiene lo spettro di potenza angolare \\(C_\\ell = \\langle |a_{\\ell m}|^2\\rangle\\) — un grafico di quanta struttura esista a ogni scala angolare, e di fatto un'impronta digitale dell'intero universo primordiale compressa in un'unica curva.</p>
<h4><span class="hn">02</span>I picchi acustici</h4>
<p>Prima che la nebbia si diradasse, fotoni e barioni erano un unico fluido che risuonava di onde sonore, e quelle oscillazioni sono congelate nello spettro di potenza come una serie di <strong>picchi acustici</strong>. Le loro posizioni e altezze sono oro puro: la scala angolare del primo picco, vicino a \\(\\ell \\approx 220\\), inchioda la geometria dello spazio (confermando la piattezza), le altezze dei picchi pesano la materia ordinaria, e la loro spaziatura aiuta a fissare il tasso di espansione. Una manciata di gobbe in un grafico fissa quasi ogni parametro cosmologico in una volta.</p>
<h4><span class="hn">03</span>Polarizzazione e l'eco dell'inflazione</h4>
<p>La CMB è anche debolmente polarizzata, e la polarizzazione si divide in due schemi. I <em>modi E</em> vengono da onde di densità ordinarie e sono saldamente osservati. Il premio sono i <em>modi B</em>: uno schema a vortice che solo le onde gravitazionali primordiali dell'inflazione avrebbero potuto creare, la cui intensità — il rapporto tensore-scalare \\(r\\) — leggerebbe la scala di energia dell'inflazione stessa. Rilevarli sarebbe uno sguardo diretto sulla fisica a \\(10^{16}\\) GeV, e la caccia è una delle grandi corse della cosmologia.</p>
<h4><span class="hn">04</span>La ragnatela cosmica e il suo righello standard</h4>
<p>Le stesse increspature primordiali crebbero, sotto la gravità, nella <strong>ragnatela cosmica</strong> di galassie, e la sua statistica porta un proprio fossile delle antiche onde sonore: le <strong>oscillazioni acustiche barioniche</strong>, una separazione preferita fra galassie di circa 150 Mpc impressa sull'intero cielo. Poiché quella lunghezza è nota dai primi principi, agisce come un <em>righello</em> cosmico — misura la sua dimensione apparente a distanze diverse e mappi l'espansione attraverso miliardi di anni. Survey come DESI ora fanno esattamente questo, tracciando se l'energia oscura sia rimasta davvero costante.</p>
<h4><span class="hn">05</span>La frontiera della gravità quantistica</h4>
<p>Riavvolgi abbastanza indietro e la teoria stessa fallisce: alla singolarità del Big Bang, la relatività generale prevede densità infinita e passa il problema a una <strong>teoria quantistica della gravità</strong> che ancora non abbiamo. Le idee candidate sostituiscono il bang con qualcosa di più gentile — la cosmologia quantistica a loop lo scambia con un <em>rimbalzo</em> da una densità massima, mentre la teoria delle stringhe immagina il nostro universo come una bolla in un multiverso eternamente inflazionante, il che potrebbe rendere l'inquietante messa a punto delle costanti fisiche un effetto di selezione anziché un mistero.</p>
<h4><span class="hn">06</span>Un avvertimento dalla palude</h4>
<p>Non ogni universo apparentemente ragionevole può essere costruito da una teoria coerente di gravità quantistica — quelli che non possono si dice che giacciano nella <em>palude</em> (swampland). In modo provocatorio, alcune congetture della palude suggeriscono che un universo stabile e in accelerazione positiva come il nostro possa essere difficile o impossibile da realizzare nella teoria delle stringhe, mettendo la teoria in diretta tensione con l'energia oscura che effettivamente osserviamo. Se quella tensione rompa la teoria delle stringhe, la nostra comprensione dell'energia oscura, o le congetture stesse è del tutto aperto — ed è dove la fisica fondamentale e la cosmologia ora si incontrano frontalmente.</p>`,
          facts: [
            { e: '🔬', t: `La misura BAO di DESI del 2024 su 6 milioni di galassie mostra indizi che l'energia oscura possa non essere costante — w potrebbe evolvere nel tempo, ribaltando potenzialmente l'interpretazione a costante cosmologica.` },
            { e: '🌌', t: `L'universo osservabile contiene ~2 mila miliardi di galassie (rivisto al rialzo dai 200 miliardi del 2016), ognuna con centinaia di miliardi di stelle — eppure la materia ordinaria è solo il 5% del bilancio energetico totale.` },
            { e: '⚡', t: `La lunghezza di Planck (10⁻³⁵ m) e il tempo di Planck (10⁻⁴³ s) rappresentano la scala a cui gli effetti gravitazionali quantistici diventano dominanti — 20 ordini di grandezza oltre la portata di qualsiasi acceleratore di particelle concepibile.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Decomposizione della CMB', e: '\\dfrac{\\delta T}{T}(\\hat{n}) = \\sum_{\\ell m} a_{\\ell m} Y_{\\ell m}(\\hat{n})' },
            { n: 'Spettro di potenza', e: 'C_\\ell = \\langle |a_{\\ell m}|^2\\rangle', c: 'picchi a ℓ~220, 540…' },
            { sep: 1 },
            { n: 'Spettro primordiale', e: 'P(k) \\propto k^{n_s},\\quad n_s \\approx 0.965' },
            { n: 'Scala BAO', e: 'r_s \\approx 147\\ \\text{Mpc}', c: 'righello standard' },
            { sep: 1 },
            { n: 'Densità di Planck', e: '\\rho_{\\text{Pl}} = \\dfrac{c^5}{\\hbar G^2} \\approx 5.2\\times10^{96}\\ \\text{kg/m}^3' },
            { n: 'Tensore-scalare', e: 'r = \\dfrac{P_t}{P_s}', c: 'misura la scala dell\'inflazione' },
          ] }, sim: 'cosmology',
        },
      },
    },
    organic: {
      title: 'Chimica organica e molecole della vita',
      teaser: 'Il carbonio è l\'atomo più versatile dell\'universo. Con un solo elemento e poche regole, la natura costruisce tutto, dall\'aspirina al DNA, dalla seta al veleno di ragno.',
      chips: ['Carbonio', 'Biomolecole', 'Sintesi'],
      lvls: {
        junior: {
          title: `Il carbonio — il mastro costruttore della vita!`,
          body: `<p>Dei 118 elementi della tavola periodica, uno è l'indiscusso mastro costruttore: il <strong>carbonio</strong>. Un singolo atomo di carbonio può tenere quattro forti legami contemporaneamente — ad altri carboni, a idrogeno, ossigeno, azoto e altro — così si collega in catene, anelli, ramificazioni e gabbie di complessità quasi sconfinata. Si conoscono oltre dieci milioni di composti del carbonio, più di tutti gli altri elementi messi insieme, e il loro studio è la <strong>chimica organica</strong>.</p>
<p>La vita scelse il carbonio esattamente per questo motivo. Le proteine dei tuoi muscoli, il DNA che porta i tuoi geni, gli zuccheri che alimentano le tue cellule, i grassi che avvolgono i tuoi nervi — ognuno è una molecola a base di carbonio di sbalorditiva complessità, costruita ripetendo semplici regole milioni di volte. Una singola proteina può infilare migliaia di atomi di carbonio in un'unica precisa forma tridimensionale, e quella forma è ciò che le dice cosa fare.</p>
<p>La stessissima chimica del carbonio che ronza dentro le tue cellule funziona anche sul banco di un chimico. L'aspirina fu prodotta per la prima volta nel 1897 da un composto della corteccia di salice; la struttura della penicillina fu decifrata nel 1945. Oggi i chimici progettano e assemblano molecole che non sono mai esistite in natura — medicine, plastiche, coloranti, profumi, materiali con strani nuovi poteri. La chimica organica è l'arte di costruire con l'atomo più versatile dell'universo. Nella simulazione qui sotto, guarda gli atomi di carbonio collegarsi in catene e anelli.</p>`,
          facts: [
            { e: '💊', t: `Oltre il 90% di tutti i farmaci contiene carbonio — la chimica organica è letteralmente la scienza che ti tiene in salute.` },
            { e: '🕷️', t: `La seta di ragno è più forte dell'acciaio a parità di peso: il suo segreto è una proteina con uno scheletro di carbonio ripiegato con precisione che si allunga prima di rompersi, assorbendo enorme energia.` },
            { e: '🌈', t: `I colori di fiori, frutti e foglie autunnali sono tutti molecole organiche — strutture ad anelli di carbonio chiamate pigmenti che assorbono lunghezze d'onda specifiche della luce.` },
          ],
          formula: null, sim: 'organic',
        },
        student: {
          title: `Gruppi funzionali, meccanismi di reazione e stereochimica`,
          body: `<p>Le molecole organiche sono ordinate per i loro <strong>gruppi funzionali</strong> — piccoli agglomerati ricorrenti di atomi che dettano la reattività: alcoli (−OH), aldeidi e chetoni (C=O), acidi carbossilici (−COOH), ammine (−NH₂), esteri e alcheni (C=C). L'eleganza è che un gruppo funzionale si comporta più o meno allo stesso modo su qualunque molecola sia imbullonato, il che permette ai chimici di pianificare lunghe sintesi come mosse a scacchi. La star dello spettacolo è il <strong>carbonile</strong> C=O: gli elettroni si affollano verso l'ossigeno, lasciando il carbonio povero di elettroni (\\(\\delta^+\\)) e l'ossigeno ricco di elettroni (\\(\\delta^-\\)), così i nucleofili puntano su quel carbonio — il cuore reattivo di gran parte della biochimica.</p>
<p>Le reazioni sono raccontate come storie di elettroni che si muovono, disegnate con frecce curve, e una manciata di archetipi copre un'enorme quantità di terreno. La <em>SN2</em> è un attacco dorsale in un solo passo che rovescia la molecola all'inverso e va a velocità \\(k[\\text{substrate}][\\text{Nu}]\\); la <em>SN1</em> si ferma a un carbocatione piatto e così mescola la geometria, la sua velocità \\(k[\\text{substrate}]\\) soltanto; l'eliminazione <em>E2</em> ha bisogno del suo gruppo uscente e di un idrogeno vicino allineati proprio così prima di sputare fuori un alchene; e l'addizione elettrofila agli alcheni è guidata dalla <em>regola di Markovnikov</em> verso l'intermedio più stabile.</p>
<p>Poi arriva la dimensione a cui la biologia tiene di più: la <strong>stereochimica</strong>, la lateralità tridimensionale di una molecola. Un carbonio legato a quattro gruppi diversi è <em>chirale</em>, esistente come due <em>enantiomeri</em> immagini speculari — identici in ogni proprietà di massa, eppure un recettore vivente li distingue in un istante. La tragedia della <strong>talidomide</strong> portò a casa la posta in gioco: un'immagine speculare leniva la nausea mattutina mentre la sua gemella causava devastanti difetti congeniti. Da allora, costruire un singolo enantiomero puro — tramite la catalisi asimmetrica (Noyori, Sharpless; Nobel 2001) — è stato al centro della progettazione di farmaci.</p>`,
          facts: [
            { e: '🔬', t: `La sintesi totale della vitamina B₁₂ (Woodward ed Eschenmoser, 1972) richiese 72 passi e 11 anni — una pietra miliare del risultato intellettuale umano.` },
            { e: '🧬', t: `Tutti gli amminoacidi nelle proteine (tranne la glicina) sono chirali, e la vita usa esclusivamente la forma L — una miscela 50/50 di forme L e D non può ripiegarsi in proteine funzionali.` },
            { e: '💊', t: `L'ibuprofene è venduto come miscela 50/50 di enantiomeri — solo la forma S è attiva. Produrre la forma S pura dimezzerebbe la dose necessaria ma è attualmente troppo costoso su larga scala.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Polarità del carbonile', e: '\\text{C}\\!=\\!\\text{O}:\\;\\; \\delta^+\\text{ su C},\\;\\; \\delta^-\\text{ su O}' },
            { n: 'Markovnikov', e: '\\text{H} \\to \\text{C meno sostituito}', c: 'carbocatione più stabile' },
            { sep: 1 },
            { n: 'Velocità SN2', e: 'r = k[\\text{substrate}][\\text{Nu}]', c: 'inversione' },
            { n: 'Velocità SN1', e: 'r = k[\\text{substrate}]', c: 'racemizzazione' },
            { sep: 1 },
            { n: 'Geometria E2', e: '\\text{H, GU anti-periplanari} \\to \\text{alchene trans}' },
            { n: 'Centro chirale', e: '\\text{C sp}^3\\text{, 4 gruppi diversi} \\to R/S' },
          ] }, sim: 'organic',
        },
        scholar: {
          title: `Reazioni pericicliche, sintesi totale e chimica computazionale`,
          body: `<h4><span class="hn">01</span>Reazioni coreografate dalla simmetria degli orbitali</h4>
<p>Le <strong>reazioni pericicliche</strong> creano e rompono più legami in una volta, in un unico vortice concertato attraverso uno stato di transizione ciclico — nessun intermedio, nessuna freccia da inseguire una alla volta. Ciò che stupì i chimici è che se una reazione del genere sia <em>permessa</em> o <em>proibita</em> dipende puramente dalla simmetria degli orbitali partecipanti, codificata nelle regole di Woodward–Hoffmann (1965; Nobel 1981). Una reazione che va liscia col calore può essere morta all'arrivo, la sua cugina a simmetria speculare che prende vita solo sotto la luce. La geometria, non l'energia sola, decide.</p>
<h4><span class="hn">02</span>Il gioiello della corona Diels–Alder</h4>
<p>La più celebrata è la reazione di <strong>Diels–Alder</strong>, una cicloaddizione \\([4+2]\\) in cui un diene e un dienofilo si stringono in un anello a sei membri in un solo passo. È termicamente permessa (la sua sorella \\([2+2]\\) non lo è), stereospecifica, e può forgiare fino a quattro stereocentri simultaneamente con prevedibile selettività endo/exo — un'efficienza che la rende la singola mossa più potente per costruire anelli nell'arsenale sintetico. Un'unica reazione, fatta bene, può assemblare lo scheletro e fissare la forma 3-D allo stesso tempo.</p>
<h4><span class="hn">03</span>Pensare all'indietro: la retrosintesi</h4>
<p>Costruire una molecola complessa da zero esige una strategia, e l'<strong>analisi retrosintetica</strong> di Corey (Nobel 1990) fornì la logica: parti dal bersaglio e mentalmente <em>disconnettilo</em>, legame per legame, in pezzi sempre più semplici finché raggiungi cose che puoi comprare. L'arte è individuare i pochi legami strategici la cui disconnessione fa collassare di più il problema. Trasformò la sintesi totale da improvvisazione ispirata in qualcosa di più vicino a una disciplina formale e insegnabile.</p>
<h4><span class="hn">04</span>La sintesi totale come arte elevata</h4>
<p>Il risultato è sbalorditivo. I chimici hanno costruito molecole come la palitossina — 64 stereocentri, cioè \\(2^{64}\\) possibili stereoisomeri, di cui la sintesi deve colpirne esattamente uno — orchestrando decine di reazioni ciascuna chemio-, regio- e stereoselettiva per tutto il tragitto, con gruppi protettori che schermano i gruppi funzionali sbagliati nei momenti sbagliati. Queste campagne richiedono anni e si leggono come imprese di ingegneria, dimostrando che essenzialmente qualsiasi molecola la natura sappia fare, anche la chimica umana la sa fare.</p>
<h4><span class="hn">05</span>Calcolare lo stato di transizione</h4>
<p>Sempre più la pianificazione avviene prima su un computer. La <strong>chimica organica computazionale</strong> usa la teoria del funzionale densità per mappare le geometrie degli stati di transizione e le barriere di attivazione prima di toccare una beuta. Il modello <em>distorsione–interazione</em> di Houk scompone ogni barriera nell'energia per piegare i reagenti nella forma dello stato di transizione più la sovrapposizione stabilizzante una volta lì — una scomposizione che effettivamente <em>spiega</em> perché un prodotto vince su un altro, anziché limitarsi a riprodurlo.</p>
<h4><span class="hn">06</span>Il machine learning entra in laboratorio</h4>
<p>Il cambiamento più recente è verso l'IA. I campi di forza appresi dalla macchina ora eseguono dinamica molecolare su molecole grandi come farmaci a precisione quasi quantistica ma a una frazione del costo, e i modelli transformer — la stessa architettura dietro l'IA linguistica — prevedono i prodotti di reazione e propongono rotte retrosintetiche con oltre il 90% di accuratezza su insiemi di riferimento. Il software che una volta si limitava a controllare il piano di un chimico comincia a scriverne uno proprio, comprimendo settimane di ragionamento esperto in secondi.</p>`,
          facts: [
            { e: '🔬', t: `La palitossina — una tossina naturale del corallo — ha MW 2.680 g/mol, 64 stereocentri (2⁶⁴ possibili stereoisomeri), e la sua sintesi totale richiese 20 anni e un controllo di selettività senza precedenti.` },
            { e: '🤖', t: `Gli strumenti di retrosintesi guidati dall'IA (ASKCOS, IBM RXN) possono ora proporre rotte di sintesi praticabili per molecole complesse in secondi — comprimendo ciò che un tempo richiedeva settimane ai chimici esperti.` },
            { e: '⚡', t: `La spettroscopia laser al femtosecondo può ora osservare direttamente la rottura dei legami nelle reazioni organiche — guardando lo stato di transizione in tempo reale per la prima volta nella storia chimica.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Diels–Alder', e: '\\text{diene}\\,(4\\pi) + \\text{dienofilo}\\,(2\\pi) \\to \\text{cicloesene}', c: '[4+2]' },
            { n: 'Woodward–Hoffmann', e: '[4n+2]\\text{ termica }\\checkmark,\\;\\; [4n]\\text{ termica }\\times', c: 'soprafacciale' },
            { sep: 1 },
            { n: 'Distorsione–interazione', e: '\\Delta E^{\\ddagger} = \\Delta E_{\\text{dist}} + \\Delta E_{\\text{int}}' },
            { n: 'Criterio FMO', e: '\\text{HOMO}_{\\text{diene}} \\leftrightarrow \\text{LUMO}_{\\text{dienofilo}}' },
            { sep: 1 },
            { n: 'Energia DFT', e: 'E[\\rho] = T_s[\\rho] + V_{ne}[\\rho] + J[\\rho] + E_{xc}[\\rho]' },
            { n: 'Attivazione (Eyring)', e: 'k = \\dfrac{k_B T}{h}\\,e^{-\\Delta G^{\\ddagger}/RT}' },
          ] }, sim: 'organic',
        },
      },
    },
    acids: {
      title: 'Acidi, basi e pH',
      teaser: 'Dal succo di limone al disgorgante — un\'unica scala da 0 a 14 li classifica tutti, e funziona su un singolo ione.',
      chips: ['pH', 'Acidi', 'Titolazione'],
      lvls: {
        junior: {
          title: `Dal succo di limone al sapone: la scala del pH`,
          body: `<p>Alcune cose sono <strong>acidi</strong> — succo di limone, aceto, la frizzantezza della cola, l'acido che ribolle nel tuo stomaco. I loro opposti sono le <strong>basi</strong> (o alcali) — sapone, bicarbonato, candeggina, sgrassatore per forni. La <strong>scala del pH</strong> è solo un righello da 0 a 14 che dice quanto acida o quanto basica sia una cosa. I numeri bassi (0-6) sono acidi, 7 è neutro (acqua pura), e i numeri alti (8-14) sono basi. L'acido delle batterie sta vicino a 0, il disgorgante vicino a 14, e la maggior parte delle cose di tutti i giorni cade da qualche parte in mezzo.</p>
<p>Il modo furbo per distinguerli è con un <strong>indicatore</strong> — un colorante che cambia colore col pH. L'indicatore universale attraversa un intero arcobaleno: rosso per un acido forte, passando per arancione e giallo, verde al neutro, poi blu e viola per le basi. La cartina di tornasole è la versione semplice — rossa in acido, blu in base — e il succo di cavolo rosso fa lo stessissimo trucco nella tua cucina.</p>
<p>Mescola un acido e una base e si cancellano a vicenda, una reazione chiamata <strong>neutralizzazione</strong>. La base doma l'acido e l'acido doma la base, incontrandosi vicino al mezzo al neutro e di solito lasciando dietro acqua e un sale. È per questo che una pastiglia antiacido lenisce uno stomaco acido, perché i giardinieri aggiungono calce al suolo troppo acido, e perché un tocco di bicarbonato toglie il bruciore da una puntura acida di vespa.</p>`,
          facts: [
            { e: '🍋', t: `Il succo di limone ha un pH attorno a 2 — più o meno lo stesso dell'acido dello stomaco, abbastanza forte da dissolvere il metallo.` },
            { e: '🧼', t: `Il sapone è basico (pH ~9-10). Quella sensazione scivolosa è la base che reagisce con gli oli naturali sulla tua pelle.` },
            { e: '🥬', t: `Il succo di cavolo rosso è un indicatore di pH naturale: rosa in acido, verde-giallo in una base — un classico della chimica in cucina.` },
          ],
          formula: null, sim: 'acids',
        },
        student: {
          title: `Il pH, il logaritmo dell'acidità`,
          body: `<p>L'acidità si riduce a un singolo ione: lo ione idrogeno \\(H^+\\) (in realtà l'idronio \\(H_3O^+\\)). Più \\(H^+\\) galleggia in una soluzione, più è acida. Ma quelle concentrazioni spaziano un intervallo enorme — da circa \\(1\\) mol/L giù fino a \\(10^{-14}\\) — quindi le comprimiamo con un logaritmo: \\(\\text{pH} = -\\log_{10}[H^+]\\). Ogni passo intero è quindi un cambiamento di dieci volte in \\(H^+\\): pH 3 è dieci volte più acido di pH 4 e cento volte più di pH 5.</p>
<p>L'acqua stessa si divide in silenzio in \\(H^+\\) e \\(OH^-\\), e il loro prodotto è fisso: \\([H^+][OH^-] = 10^{-14}\\) a 25 °C. Nell'acqua pura i due sono uguali a \\(10^{-7}\\), dando pH 7 — neutro. Aggiungi acido e \\(H^+\\) sale mentre \\(OH^-\\) cala per mantenere costante il prodotto; aggiungi base e accade il contrario. È per questo che le scale acida e basica sono due metà di un unico righello: \\(\\text{pH} + \\text{pOH} = 14\\).</p>
<p>Gli acidi forti (HCl, \\(H_2SO_4\\)) si dissociano completamente, quindi il loro pH segue dritto dalla concentrazione. Gli acidi deboli (acetico, carbonico) si ionizzano solo in parte, governati da una costante di equilibrio \\(K_a\\), quindi stanno a un pH più alto di un acido forte della stessa concentrazione. La neutralizzazione, \\(H^+ + OH^- \\to H_2O\\), è la base della <strong>titolazione</strong>: aggiungere base misurata a un acido fino al punto di equivalenza, dove il pH balza attraverso il neutro in un unico passo netto.</p>`,
          facts: [
            { e: '📉', t: `La scala del pH è logaritmica: un'unità significa dieci volte più acido. L'acido dello stomaco (pH 1,5) è un milione di volte più acido del sangue (pH 7,4).` },
            { e: '🩸', t: `Il tuo sangue è tenuto fra pH 7,35 e 7,45 dai tamponi. Deriva fuori da quella minuscola finestra e diventa pericoloso per la vita.` },
            { e: '🌊', t: `L'oceano ha assorbito così tanta CO₂ che il suo pH è calato di ~0,1 unità dal 1850 — un aumento del 30% dell'acidità, che dissolve gusci e barriere coralline.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Definizione di pH', e: '\\text{pH} = -\\log_{10}[H^+]' },
            { n: 'Definizione di pOH', e: '\\text{pOH} = -\\log_{10}[OH^-]' },
            { sep: 1 },
            { n: 'Autoionizzazione dell\'acqua', e: 'K_w = [H^+][OH^-] = 10^{-14}', c: 'a 25 °C' },
            { n: 'Le due scale', e: '\\text{pH} + \\text{pOH} = 14' },
            { n: 'Neutralizzazione', e: 'H^+ + OH^- \\to H_2O' },
          ] }, sim: 'acids',
        },
        scholar: {
          title: `Equilibri, tamponi e curve di titolazione`,
          body: `<h4><span class="hn">01</span>Brønsted-Lowry e oltre</h4>
<p>Un acido è un donatore di protoni e una base un accettore di protoni, e ogni acido ha una <em>base coniugata</em> lasciata indietro quando cede il suo protone. Il quadro di Lewis generalizza ancora oltre, a donatori e accettori di coppie di elettroni. La forza è catturata dalla costante di dissociazione acida \\(K_a\\), e i chimici classificano gli acidi per \\(pK_a = -\\log_{10} K_a\\): più piccolo il \\(pK_a\\), più forte l'acido.</p>
<h4><span class="hn">02</span>L'equazione di Henderson-Hasselbalch</h4>
<p>Per un acido debole mescolato con la sua base coniugata, il pH è \\(\\text{pH} = pK_a + \\log_{10}\\dfrac{[A^-]}{[HA]}\\). Quando i due sono uguali — il punto di semineutralizzazione — il logaritmo svanisce e \\(\\text{pH} = pK_a\\) esattamente. Questo è sia il centro piatto e ben tamponato di una curva di titolazione sia il modo standard per <em>misurare</em> la forza di un acido debole.</p>
<h4><span class="hn">03</span>Tamponi</h4>
<p>Una miscela di un acido debole e della sua base coniugata resiste ai cambiamenti di pH: qualsiasi \\(H^+\\) o \\(OH^-\\) aggiunto viene assorbito dalla coppia. Il tampone bicarbonato del sangue, \\(H_2CO_3/HCO_3^-\\), è perché il pH arterioso si smuove a malapena nonostante l'acido che il tuo metabolismo vi riversa. Un tampone funziona meglio vicino a \\(\\text{pH} = pK_a\\), dove i due partner sono in equilibrio.</p>
<h4><span class="hn">04</span>Curve di titolazione</h4>
<p>Traccia il pH contro il titolante aggiunto e ottieni la caratteristica curva a S: un tratto tamponato gentile, un salto quasi verticale al punto di equivalenza, poi un plateau. Per un acido forte con una base forte il punto di equivalenza cade a pH 7; per un acido debole si sposta sopra 7, perché la base coniugata del sale idrolizza. La <em>ripidità</em> di quel salto è esattamente ciò che permette a un indicatore a colore singolo di segnare il punto finale.</p>
<h4><span class="hn">05</span>Cosa significa davvero "neutro"</h4>
<p>Neutro significa \\([H^+] = [OH^-]\\), non necessariamente pH 7. Poiché \\(K_w\\) cresce con la temperatura, l'acqua si autoionizza di più quando è calda: l'acqua neutra a 50 °C ha pH ≈ 6,6 — ancora perfettamente neutra, perché \\(OH^-\\) è salito a corrispondere. pH 7 è il punto neutro solo a 25 °C.</p>`,
          facts: [
            { e: '🧪', t: `Al punto di semiequivalenza di una titolazione, pH = pKₐ esattamente — il modo più rapido per leggere la forza di un acido debole.` },
            { e: '🩸', t: `Il tampone bicarbonato tiene il sangue vicino a pH 7,4; polmoni e reni lo mettono a punto regolando CO₂ e HCO₃⁻.` },
            { e: '🌡️', t: `"Neutro" significa [H⁺]=[OH⁻], non pH 7. L'acqua calda è neutra sotto pH 7 perché si autoionizza di più man mano che si scalda.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Costante acida', e: 'K_a = \\dfrac{[H^+][A^-]}{[HA]}, \\quad pK_a = -\\log_{10}K_a' },
            { n: 'Henderson-Hasselbalch', e: '\\text{pH} = pK_a + \\log_{10}\\dfrac{[A^-]}{[HA]}' },
            { sep: 1 },
            { n: 'Semiequivalenza', e: '[HA] = [A^-] \\;\\Rightarrow\\; \\text{pH} = pK_a' },
            { n: 'Temperatura', e: 'K_w(T)\\ \\text{sale con } T,\\ \\text{quindi pH neutro} < 7\\ \\text{a caldo}' },
          ] }, sim: 'acids',
        },
      },
    },
    periodic: {
      title: 'La tavola periodica',
      teaser: 'Allinea ogni elemento per un solo numero e uno schema nascosto di famiglie e tendenze salta agli occhi.',
      chips: ['Elementi', 'Tendenze', 'Atomi'],
      lvls: {
        junior: {
          title: `La lista degli ingredienti dell'universo, ordinata`,
          body: `<p>Tutto ciò che ti circonda — il tuo corpo, l'aria, questo schermo, le stelle lontane — è costruito da circa 90 ingredienti naturali chiamati <strong>elementi</strong>. La tavola periodica è semplicemente la loro lista, ma disposta così astutamente che la sua stessa forma ti dice come ciascuno si comporta. Ogni casella è un elemento: il suo simbolo (O per ossigeno, Fe per ferro) e il suo <strong>numero atomico</strong>, il conteggio dei protoni che lo rende quell'elemento e nient'altro.</p>
<p>Il genio, di Dmitrij Mendeleev nel 1869, fu l'ordinamento. Leggi da sinistra a destra e gli elementi cambiano gradualmente; scendi alla riga successiva e lo schema ricomincia — che è esattamente perché si chiama "periodica". Gli elementi che condividono una colonna (un <strong>gruppo</strong>) sono cugini chimici che si comportano allo stesso modo: i metalli morbidi ed esplosivi della prima colonna, i gas colorati e inerti dell'ultima colonna. Ogni famiglia ha una personalità che puoi prevedere solo da dove si trova.</p>
<p>Quella prevedibilità è il superpotere della tavola. Mendeleev lasciò persino spazi vuoti per elementi non ancora scoperti e ne descrisse le proprietà in anticipo — e quando saltarono fuori, aveva ragione. I metalli affollano la sinistra e il centro, i non metalli l'angolo in alto a destra, e una scala di intermedi scende lungo il centro. Impara la mappa e puoi indovinare come si comporterà una sostanza prima ancora di toccarla.</p>`,
          facts: [
            { e: '🧊', t: `Solo circa 90 elementi esistono in natura; il resto è fatto in laboratorio e svanisce in frazioni di secondo.` },
            { e: '💥', t: `I metalli alcalini (colonna 1) sono così reattivi che il cesio esplode a contatto con l'acqua — non si trovano mai puri in natura.` },
            { e: '🎈', t: `I gas nobili (ultima colonna) reagiscono a malapena con qualsiasi cosa, ed è per questo che l'elio è sicuro nei palloncini e il neon brilla tranquillo nelle insegne.` },
          ],
          formula: null, sim: 'periodic',
        },
        student: {
          title: `Struttura, gruppi, periodi e tendenze periodiche`,
          body: `<p>La disposizione della tavola è un'immagine della struttura atomica. Ogni riga (un <strong>periodo</strong>) riempie un nuovo guscio elettronico; ogni colonna (un <strong>gruppo</strong>) condivide lo stesso numero di elettroni esterni, o di valenza — e sono quegli elettroni esterni a fare la chimica. È per questo che il gruppo 1 (un elettrone di valenza, ansioso di cederlo) e il gruppo 17 (uno in meno di un guscio pieno, disperato di afferrarne uno) sono i metalli e i non metalli più reattivi, mentre il gruppo 18 (gusci pieni) reagisce a malapena.</p>
<p>Poiché il comportamento segue la disposizione degli elettroni, le proprietà si spostano dolcemente attraverso la tavola — le <strong>tendenze periodiche</strong>. Il raggio atomico si restringe da sinistra a destra (più protoni tirano lo stesso guscio più stretto) e cresce scendendo un gruppo (ogni periodo aggiunge un guscio). L'elettronegatività, l'attrazione di un atomo sugli elettroni condivisi, fa l'opposto: sale verso l'angolo in alto a destra, culminando al fluoro. L'energia di ionizzazione, il costo per rimuovere un elettrone, segue da vicino l'elettronegatività.</p>
<p>La tavola si ordina anche in <strong>blocchi</strong> in base a quale orbitale si sta riempiendo: il blocco s (gruppi 1-2), il blocco p (13-18), i metalli di transizione del blocco d nel mezzo, e i lantanidi e attinidi del blocco f tirati fuori sotto. I metalli (sinistra e centro) perdono elettroni e conducono; i non metalli (alto a destra) li afferrano o li condividono; i metalloidi tracciano la scala nel mezzo e agiscono come entrambi — che è precisamente perché silicio e germanio fanno i semiconduttori.</p>`,
          facts: [
            { e: '🔋', t: `Il numero di gruppo spesso è uguale agli elettroni di valenza, ed è per questo che gli elementi in una colonna formano composti simili — es. tutti i metalli del gruppo 1 fanno sali X-cloruro.` },
            { e: '⚛️', t: `Il fluoro (alto a destra) è l'elemento più elettronegativo; cesio e francio (basso a sinistra) i meno — i due estremi della tendenza.` },
            { e: '💻', t: `Il silicio sta sulla scala dei metalloidi, comportandosi né come un buon metallo né come un buon isolante — la proprietà che rende possibile l'intera industria dei semiconduttori.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Numero atomico', e: 'Z = \\#\\,\\text{protoni}' },
            { sep: 1 },
            { n: 'Raggio atomico', e: 'r:\\ \\text{più piccolo} \\rightarrow,\\ \\text{più grande} \\downarrow' },
            { n: 'Elettronegatività', e: '\\chi:\\ \\text{più grande} \\rightarrow,\\ \\text{più piccola} \\downarrow' },
            { n: 'Energia di ionizzazione', e: '\\text{segue } \\chi:\\ \\text{più grande} \\rightarrow,\\ \\text{più piccola} \\downarrow' },
          ] }, sim: 'periodic',
        },
        scholar: {
          title: `Origini quantistiche: perché la tavola ha la forma che ha`,
          body: `<h4><span class="hn">01</span>La tavola è la spettroscopia resa visibile</h4>
<p>I periodi e i blocchi sono una lettura diretta della meccanica quantistica. Gli elettroni occupano orbitali etichettati da numeri quantici, riempiendosi grosso modo in ordine di energia (il principio di Aufbau e la regola \\(n+\\ell\\) di Madelung), al più due per orbitale per il principio di esclusione di Pauli. Il sottoguscio s contiene 2 elettroni, p ne contiene 6, d ne contiene 10, f ne contiene 14 — che è esattamente perché i blocchi della tavola sono larghi 2, 6, 10 e 14 colonne.</p>
<h4><span class="hn">02</span>Carica nucleare efficace e schermatura</h4>
<p>Un elettrone esterno non sente mai la piena carica nucleare \\(Z\\); gli elettroni interni la schermano, lasciando una carica <em>efficace</em> \\(Z_{\\text{eff}} = Z - S\\). Attraverso un periodo \\(Z_{\\text{eff}}\\) sale — si aggiungono protoni mentre gli elettroni dello stesso guscio schermano male — così l'atomo si stringe e l'elettronegatività sale. Scendendo un gruppo il guscio appena aggiunto supera l'attrazione in più, così gli atomi si gonfiano. Quasi ogni tendenza è un'ombra di \\(Z_{\\text{eff}}\\).</p>
<h4><span class="hn">03</span>L'energia di ionizzazione e il suo zig-zag</h4>
<p>L'energia per strappare un elettrone segue \\(E \\sim 13.6\\,Z_{\\text{eff}}^2/n^2\\) eV, ma con cali rivelatori — il boro sotto il berillio, l'ossigeno sotto l'azoto — dove un sottoguscio appena iniziato o una prima repulsione fra coppie di elettroni abbassa il costo. Quelle pieghe sono il modello orbitale che si conferma nei dati.</p>
<h4><span class="hn">04</span>La relatività in fondo</h4>
<p>Negli atomi più pesanti gli elettroni interni si muovono a una frazione seria della velocità della luce, e la risultante contrazione relativistica degli orbitali s ha conseguenze visibili: è perché l'oro è giallo anziché argenteo, perché il mercurio è liquido, e perché la batteria al piombo-acido della tua auto eroga la tensione che eroga. Le ordinate tendenze si piegano precisamente dove la relatività comincia a mordere.</p>
<h4><span class="hn">05</span>I bordi incompiuti</h4>
<p>La tavola si sta ancora scrivendo: gli elementi superpesanti sono sintetizzati un atomo alla volta, ora fino all'oganesson (118), e i fisici inseguono una prevista "isola di stabilità" di isotopi più longevi oltre di esso. Se la periodicità stessa sopravviva nel settimo periodo — dove la relatività scombina l'ordinamento degli orbitali — è una domanda genuinamente aperta.</p>`,
          facts: [
            { e: '🥇', t: `L'oro è giallo per via della relatività: i suoi veloci elettroni interni contraggono gli orbitali, spostando nel blu la luce che assorbe.` },
            { e: '🌡️', t: `Il mercurio è liquido a temperatura ambiente per lo stesso motivo relativistico — i suoi atomi si legano troppo debolmente per restare solidi.` },
            { e: '🏝️', t: `I fisici danno la caccia a un'"isola di stabilità": elementi superpesanti i cui speciali conteggi di protoni e neutroni potrebbero sopravvivere molto più a lungo degli isotopi da millisecondi di oggi.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Ordine di riempimento', e: '\\text{Aufbau: prima il } (n+\\ell) \\text{ più basso}' },
            { n: 'Carica efficace', e: 'Z_{\\text{eff}} = Z - S' },
            { sep: 1 },
            { n: 'Energia di ionizzazione', e: 'E \\sim 13.6\\,\\dfrac{Z_{\\text{eff}}^2}{n^2}\\ \\text{eV}' },
            { n: 'Larghezza dei blocchi', e: 's,p,d,f = 2,\\,6,\\,10,\\,14', c: 'capacità degli orbitali' },
          ] }, sim: 'periodic',
        },
      },
    },
    balancing: {
      title: 'Bilanciare le equazioni chimiche',
      teaser: 'Gli atomi non si perdono mai, solo si riorganizzano — quindi entrambi i lati della freccia devono quadrare. Ecco il rompicapo.',
      chips: ['Reazioni', 'Conservazione', 'Moli'],
      lvls: {
        junior: {
          title: `Il rompicapo del conteggio degli atomi in chimica`,
          body: `<p>In una reazione chimica, gli atomi non vengono mai creati o distrutti — si riorganizzano solo in nuove combinazioni. Brucia il metano e i suoi atomi di carbonio e idrogeno non svaniscono; si ricombinano con l'ossigeno per fare anidride carbonica e acqua. Quindi qualunque atomo tu abbia all'inizio a sinistra, devi finire con gli stessi identici atomi a destra. Un'equazione chimica è "corretta" — <strong>bilanciata</strong> — solo quando entrambi i lati portano lo stesso conteggio di ogni tipo di atomo.</p>
<p>Il trucco è che non puoi cambiare le molecole stesse (l'acqua è sempre \\(H_2O\\), mai \\(H_3O\\)), quindi l'unica cosa che ti è permesso regolare è <em>quante</em> molecole di ciascuna ce ne sono — i numeri grandi scritti davanti, chiamati <strong>coefficienti</strong>. Bilanciare un'equazione è il rompicapo di trovare i coefficienti che fanno quadrare il conteggio di ogni atomo su entrambi i lati. È davvero solo conteggio attento.</p>
<p>Questo conta ben oltre l'aula. Azzecca il bilanciamento e sai esattamente quanto di ogni ingrediente serve a una reazione e quanto ne produce: quanto ossigeno per bruciare completamente un combustibile, quanto prodotto renderà una reazione, quanta \\(CO_2\\) emette un processo. Bilanciare è la versione chimica di un contabile che controlla i libri — niente appare dal nulla, niente scompare.</p>`,
          facts: [
            { e: '⚖️', t: `Gli atomi si conservano: un'equazione bilanciata ha lo stesso numero di ogni elemento su entrambi i lati. È la legge di conservazione della massa.` },
            { e: '🚫', t: `Puoi cambiare solo i numeri grandi davanti (coefficienti), mai i piccoli pedici dentro una formula — ciò la renderebbe una sostanza diversa.` },
            { e: '🔥', t: `Il bilanciamento dà agli ingegneri l'esatto rapporto aria-combustibile per la combustione completa — troppo poco ossigeno e ottieni monossido di carbonio velenoso.` },
          ],
          formula: null, sim: 'balancing',
        },
        student: {
          title: `Coefficienti, conservazione della massa e la mole`,
          body: `<p>Un'equazione bilanciata obbedisce alla <strong>legge di conservazione della massa</strong> (Lavoisier, 1789): la materia non è né creata né distrutta, quindi ogni atomo sul lato dei reagenti deve riapparire fra i prodotti. Bilanci ponendo <strong>coefficienti</strong> davanti a ciascuna formula, mai alterando i pedici — i pedici definiscono la sostanza stessa. La combustione del metano si bilancia come \\(CH_4 + 2O_2 \\to CO_2 + 2H_2O\\): un carbonio, quattro idrogeni e quattro ossigeni su ciascun lato.</p>
<p>I coefficienti non sono solo conteggi di atomi — sono rapporti di <em>quantità</em>, ed è qui che entra la <strong>mole</strong>. Quella stessa equazione si legge "1 molecola di metano reagisce con 2 di ossigeno", ma ugualmente "1 mole reagisce con 2 moli". Una mole è solo un numero fisso ed enorme di particelle (il numero di Avogadro, \\(6.022\\times10^{23}\\)) — la "dozzina" del chimico — che ci permette di scalare da singole molecole su fino a grammi che puoi pesare.</p>
<p>Con il bilanciamento in mano puoi fare <strong>stechiometria</strong>: prevedere le quantità. I coefficienti danno i rapporti in moli, e dalle moli ottieni masse (via massa molare) o volumi di gas. Questo rivela il <em>reagente limitante</em> — quale ingrediente finisce per primo e limita la resa — e la resa teorica del prodotto. È l'aritmetica dietro ogni ricetta in un laboratorio di chimica o in una fabbrica.</p>`,
          facts: [
            { e: '⚗️', t: `I coefficienti sono anche rapporti in moli: CH₄ + 2O₂ → CO₂ + 2H₂O significa che una mole di metano ha bisogno di due moli di ossigeno.` },
            { e: '🧮', t: `Il reagente limitante è quello che finisce per primo — fissa il massimo prodotto che puoi fare, per quanto degli altri tu ne abbia.` },
            { e: '📏', t: `Una mole (6,022×10²³) collega il mondo invisibile degli atomi ai grammi che puoi pesare — il ponte che rende quantitativa la chimica.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Conservazione della massa', e: '\\text{atomi}_{\\text{left}} = \\text{atomi}_{\\text{right}}' },
            { n: 'Combustione del metano', e: 'CH_4 + 2O_2 \\to CO_2 + 2H_2O' },
            { sep: 1 },
            { n: 'La mole', e: '1\\ \\text{mol} = 6.022\\times10^{23}\\ \\text{particelle}' },
            { n: 'Rapporto in moli', e: '\\text{coefficienti} = \\text{rapporto di moli}' },
          ] }, sim: 'balancing',
        },
        scholar: {
          title: `Redox, bilanciamento algebrico e ciò che il bilanciamento non può dirti`,
          body: `<h4><span class="hn">01</span>Oltre l'ispezione: il bilanciamento algebrico</h4>
<p>Per equazioni scomode, dai a ogni coefficiente una variabile e risolvi il sistema lineare costruito conservando ciascun elemento. C'è sempre una soluzione a meno di un fattore complessivo — prendi il più piccolo insieme di numeri interi. Le reazioni semplici hanno uno spazio di soluzioni unidimensionale; quelle genuinamente ingarbugliate richiedono questo metodo sistematico anziché tentativi ed errori.</p>
<h4><span class="hn">02</span>Redox e semireazioni</h4>
<p>Le reazioni che trasferiscono elettroni (ossidoriduzione) si bilanciano dividendole in due semireazioni, bilanciando gli atomi e poi la <em>carica</em> con gli elettroni, e combinando così che gli elettroni si cancellino. Questo è il macchinario dietro batterie, corrosione e respirazione cellulare — e qui la carica, non solo gli atomi, deve bilanciarsi.</p>
<h4><span class="hn">03</span>Ciò che il bilanciamento non ti dice</h4>
<p>Un'equazione bilanciata non dice nulla su se una reazione accada davvero, quanto in fretta, o in quale verso favorisca. Quello è il dominio della termodinamica (la variazione di energia libera \\(\\Delta G\\)) e della cinetica (l'energia di attivazione). Il bilanciamento è contabilità necessaria — non una previsione di spontaneità.</p>
<h4><span class="hn">04</span>La stechiometria nel mondo reale</h4>
<p>Le reazioni reali raramente raggiungono il 100% — la <em>resa percentuale</em> confronta ciò che hai davvero ottenuto col massimo teorico. Le equazioni bilanciate sono alla base dell'ingegneria della combustione, della sintesi farmaceutica e della contabilità del carbonio della scienza climatica: ogni tonnellata di \\(CO_2\\) addebitata alla combustione di combustibile è una conseguenza stechiometrica di un'equazione bilanciata.</p>`,
          facts: [
            { e: '🔋', t: `Le reazioni redox si bilanciano con semireazioni che bilanciano anche la carica usando gli elettroni — esattamente il flusso di elettroni che una batteria trasforma in corrente.` },
            { e: '⚖️', t: `Un'equazione bilanciata non dice nulla su se una reazione avverrà davvero — quella è la termodinamica (ΔG), una domanda del tutto separata.` },
            { e: '🌍', t: `Ogni tonnellata di CO₂ attribuita alla combustione di combustibile è un calcolo stechiometrico da un'equazione di combustione bilanciata.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Conservazione (massa e carica)', e: '\\text{atomi, carica: left} = \\text{right}' },
            { n: 'Combustione generale', e: 'C_xH_y + \\left(x+\\tfrac{y}{4}\\right)O_2 \\to xCO_2 + \\tfrac{y}{2}H_2O' },
            { sep: 1 },
            { n: 'Resa percentuale', e: '\\text{resa} = \\dfrac{\\text{effettiva}}{\\text{teorica}}\\times100\\%' },
          ] }, sim: 'balancing',
        },
      },
    },
    chem: {
      title: 'Atomi e legami chimici',
      teaser: 'Perché l\'acqua scioglie il sale ma non l\'olio? Tutto si riduce a come gli atomi condividono gli elettroni.',
      chips: ['Atomi', 'Legami', 'Reazioni'],
      lvls: {
        junior: {
          title: `I minuscoli mattoni di ogni cosa!`,
          body: `<p>Tutto ciò che ti circonda — l'aria che respiri, il cibo che mangi, l'acqua che bevi — è costruito da particelle inimmaginabilmente minuscole chiamate <strong>atomi</strong>. Sono così piccole che una singola goccia d'acqua contiene più atomi di quanti granelli di sabbia ci siano su tutte le spiagge della Terra messe insieme.</p>
<p>Gli atomi sono uniti. Si agganciano l'uno all'altro per formare <strong>molecole</strong>, tenute insieme da un <strong>legame chimico</strong> — pensalo come una coppia di minuscole mani invisibili che stringono forte. Due atomi di idrogeno stringono un atomo di ossigeno e ottieni l'acqua, H₂O; un atomo di sodio afferra un atomo di cloro e ottieni il sale da cucina, NaCl.</p>
<p>La vera magia è che gli <em>stessi</em> atomi, disposti in modo diverso, diventano cose selvaggiamente differenti. Il carbonio puro è la grafite morbida e scivolosa della tua matita — oppure, legato in un altro modo, il diamante, il materiale naturale più duro che ci sia. Nulla è cambiato tranne lo schema dei legami. Nella simulazione qui sotto, guarda gli atomi rimbalzare, attrarsi e scattare insieme in molecole.</p>`,
          facts: [
            { e: '💧', t: `Un bicchiere d'acqua contiene all'incirca 8.000.000.000.000.000.000.000.000 di molecole — sono 8 quadrilioni!` },
            { e: '💎', t: `Diamante e grafite sono entrambi carbonio puro. La differenza? Solo come sono disposti gli atomi!` },
            { e: '🌬️', t: `L'aria è 78% azoto (N₂) e 21% ossigeno (O₂) — due molecole completamente diverse fatte di appena due elementi.` },
          ],
          formula: null, sim: 'chem',
        },
        student: {
          title: `Legami covalenti e ionici: condivisione contro trasferimento di elettroni`,
          body: `<p>Gli atomi si legano per un motivo: abbassa la loro energia. La maggior parte brama un guscio esterno pieno di elettroni — la <strong>regola dell'ottetto</strong> — e come ci arrivano dipende da quanto avidamente ciascun atomo tira gli elettroni, una proprietà chiamata <em>elettronegatività</em> \\(\\chi\\). Il divario \\(\\Delta\\chi\\) fra due atomi fissa l'intero carattere del legame che formano.</p>
<p>Quando il divario è piccolo, gli atomi <strong>condividono</strong>. Un legame <em>covalente</em> sono due atomi che mettono in comune una coppia di elettroni nello spazio fra loro: in H₂ ogni idrogeno mette un elettrone, la coppia condivisa si assesta nel mezzo, e la molecola perde ~436 kJ/mol nel processo. Metti in comune due coppie e ottieni un doppio legame, tre un triplo — ciascuno più corto e più forte del precedente. Quando il divario è grande, un atomo semplicemente <strong>prende</strong>. In NaCl il cloro strappa via un elettrone dal sodio, e i risultanti \\(\\text{Na}^+\\) e \\(\\text{Cl}^-\\) si aggrappano poi per pura attrazione elettrostatica, \\(U = -\\dfrac{k\\,Q_1 Q_2}{r}\\), impilandosi in un reticolo cristallino.</p>
<p>È questo il segreto dietro "il simile scioglie il simile". L'acqua è piegata e sbilanciata, portando un momento di dipolo \\(\\mu = 1.85\\ \\text{D}\\), quindi circonda avidamente gli ioni e altre molecole polari — ma lascia in pace l'olio, che non ha alcuna carica del genere da afferrare. E per quanto tortuosa sia la via che una reazione prende, il suo calore è fissato in anticipo: la legge di Hess dice che \\(\\Delta H\\) dipende solo dagli stati iniziale e finale, \\(\\Delta H_{\\text{rxn}} = \\sum \\Delta H_f(\\text{prodotti}) - \\sum \\Delta H_f(\\text{reagenti})\\), mai dal percorso in mezzo.</p>`,
          facts: [
            { e: '🔋', t: `Elettronegatività (scala di Pauling): da 0,7 (Cs) a 4,0 (F). Più alta la differenza fra gli atomi, più ionico il legame.` },
            { e: '🫧', t: `Il sapone funziona perché un'estremità è polare (ama l'acqua) e l'altra non polare (ama l'olio) — facendo da ponte fra i due mondi.` },
            { e: '🌡️', t: `Rompere legami assorbe sempre energia; formare legami la rilascia sempre. Le reazioni esotermiche ne rilasciano complessivamente più di quanta ne assorbano.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Coulomb (ionico)', e: 'U = \\dfrac{k\\,Q_1 Q_2}{r}', c: 'k = 8.99×10⁹ N·m²·C⁻²' },
            { sep: 1 },
            { n: 'Energie di legame', e: '\\text{C–C: 347},\\;\\text{C=C: 614},\\;\\text{C}\\!\\equiv\\!\\text{C: 839}', c: 'kJ/mol' },
            { n: 'Legge di Hess', e: '\\Delta H_{\\text{rxn}} = \\sum \\Delta H_f^{\\,\\text{prod}} - \\sum \\Delta H_f^{\\,\\text{react}}' },
            { sep: 1 },
            { n: 'Momento di dipolo', e: '\\mu = q\\,d', c: 'debye, D' },
            { n: 'Acqua', e: '\\mu(\\text{H}_2\\text{O}) = 1.85\\ \\text{D}', c: 'fortemente polare' },
          ] }, sim: 'chem',
        },
        scholar: {
          title: `Meccanica quantistica del legame: teoria degli orbitali molecolari e dinamica di reazione`,
          body: `<h4><span class="hn">01</span>Un legame è onde che interferiscono</h4>
<p>In fondo, un legame chimico è uno schema di interferenza quantistica. La <strong>teoria degli orbitali molecolari</strong> costruisce le onde elettroniche di una molecola sommando quelle atomiche — la ricetta LCAO, \\(\\psi = c_A \\phi_A + c_B \\phi_B\\). Avvicina due orbitali 1s dell'idrogeno e possono sommarsi in fase o in controfase, e quale dei due occupano gli elettroni è tutta la differenza fra una molecola e due atomi separati. Il legame non è una metafora sulla condivisione; è letteralmente interferenza costruttiva di onde di materia.</p>
<h4><span class="hn">02</span>Legante e antilegante</h4>
<p>Le due combinazioni si dividono in energia. La somma in fase \\(\\sigma = (\\phi_A + \\phi_B)/\\sqrt{2+2S}\\) ammucchia densità elettronica <em>fra</em> i nuclei, schermando la loro repulsione e abbassando l'energia — un orbitale legante. La differenza in controfase scava un nodo fra loro e alza l'energia — antilegante, contrassegnato con un asterisco. Riempi il livello legante e salta quello antilegante e gli atomi si attaccano; il conteggio netto, \\(\\text{BO} = (N_b - N_a)/2\\), è esattamente il motivo per cui He₂ non esiste mentre H₂ sì.</p>
<h4><span class="hn">03</span>Congelare i nuclei: superfici di energia potenziale</h4>
<p>Gli elettroni sono migliaia di volte più leggeri dei nuclei e si muovono di conseguenza più in fretta, il che permette all'<strong>approssimazione di Born–Oppenheimer</strong> di inchiodare i nuclei al loro posto e risolvere per gli elettroni a ogni geometria fissata. Fallo ovunque e tracci una <em>superficie di energia potenziale</em> — un paesaggio di valli (molecole stabili) e passi fra loro. La chimica diventa topografia: una reazione è una traiettoria attraverso questa superficie da una valle a un'altra.</p>
<h4><span class="hn">04</span>Oltre il passo: stati di transizione e Arrhenius</h4>
<p>Fra le valli dei reagenti e dei prodotti sta un passo di montagna — lo <strong>stato di transizione</strong>, un punto di sella della superficie — e la sua altezza è l'energia di attivazione \\(E_a\\). Solo le molecole con abbastanza energia termica lo valicano, e poiché la frazione che ci riesce sale ripidamente con la temperatura, la velocità segue Arrhenius, \\(k = A\\,e^{-E_a/RT}\\). Lo stato di transizione stesso balena all'esistenza per appena \\(10^{-13}\\) s, eppure i laser al femtosecondo possono ora fotografare una molecola a metà del valico.</p>
<h4><span class="hn">05</span>La funzione d'onda troppo grande da immagazzinare</h4>
<p>Il sogno di risolvere l'equazione di Schrödinger per una molecola reale si arena sulla scala: la funzione d'onda di \\(N\\) elettroni vive in \\(3N\\) dimensioni, e il suo costo esplode esponenzialmente — qualche decina di atomi e nessun computer che esisterà mai potrebbe immagazzinarla. Per gran parte del XX secolo, la chimica quantistica quantitativa fu bloccata contro questo muro. La via d'uscita fu smettere del tutto di seguire la funzione d'onda.</p>
<h4><span class="hn">06</span>DFT: la densità invece della funzione d'onda</h4>
<p>La <strong>teoria del funzionale densità</strong> rese l'impossibile di routine. I teoremi di Hohenberg–Kohn dimostrano che l'umile densità elettronica \\(\\rho(r)\\) — una funzione di appena 3 coordinate — determina segretamente ogni proprietà dello stato fondamentale, così non ti serve mai la mostruosa funzione d'onda a \\(3N\\) dimensioni. Le equazioni di Kohn–Sham trasformano lo sciame interagente in trattabili problemi a un elettrone, nascondendo la difficile fisica a molti corpi dentro un funzionale di scambio-correlazione. La DFT è ora il cavallo da tiro dietro la progettazione di catalizzatori, i materiali per batterie e la scoperta di farmaci — la meccanica quantistica, resa accessibile.</p>`,
          facts: [
            { e: '💻', t: `La DFT può prevedere il punto di fusione di nuovi materiali prima che siano sintetizzati — accelerando la scoperta da decenni a mesi.` },
            { e: '🧬', t: `Tutte le moderne simulazioni di legame farmaco-recettore usano metodi quanto-meccanici / meccanico-molecolari (QM/MM) derivati dalla teoria degli orbitali molecolari.` },
            { e: '⚡', t: `Lo stato di transizione esiste per ~10⁻¹³ secondi — troppo veloce per osservarlo direttamente, ma rilevabile dalla femtochimica (premio Nobel 1999).` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Orbitale legante LCAO', e: '\\psi_b = \\dfrac{\\phi_A + \\phi_B}{\\sqrt{2 + 2S}}', c: 'S = integrale di sovrapposizione' },
            { n: 'Ordine di legame', e: '\\text{BO} = \\dfrac{N_b - N_a}{2}' },
            { sep: 1 },
            { n: 'Velocità di Arrhenius', e: 'k = A\\,e^{-E_a/RT}' },
            { sep: 1 },
            { n: 'Hohenberg–Kohn', e: 'E[\\rho] = T[\\rho] + V_{ne}[\\rho] + J[\\rho] + E_{xc}[\\rho]' },
            { n: 'Kohn–Sham', e: '\\left[-\\tfrac{1}{2}\\nabla^2 + v_{\\text{eff}}(r)\\right]\\psi_i = \\varepsilon_i \\psi_i' },
          ] }, sim: 'chem',
        },
      },
    },
    electrochem: {
      title: 'Elettrochimica e batterie',
      teaser: 'Ogni volta che carichi il telefono, la chimica converte gli elettroni in energia immagazzinata. Le stesse reazioni che alimentano i tuoi dispositivi arrugginiscono il ferro, raffinano l\'alluminio e tengono in battito il tuo cuore.',
      chips: ['Redox', 'Batterie', 'Elettrolisi'],
      lvls: {
        junior: {
          title: `Elettricità dalla chimica — e chimica dall'elettricità!`,
          body: `<p>Metti due metalli diversi in un bicchiere d'acqua salata e uniscili con un filo, e accade qualcosa di straordinario: gli elettroni cominciano a fluire attraverso il filo da un metallo all'altro — una corrente elettrica, evocata dal nulla se non dalla chimica. È esattamente così che funzionò la prima batteria. Nel 1800 Alessandro Volta impilò dischi di zinco e rame separati da panno imbevuto di salamoia e produsse la prima corrente elettrica stabile della storia.</p>
<p>Il trucco è una reazione chiamata <strong>ossidoriduzione</strong>, o <strong>redox</strong>. Una sostanza perde elettroni (viene <em>ossidata</em>), un'altra li afferra (viene <em>ridotta</em>). Quando lo zinco incontra l'acido, i suoi atomi perdono elettroni e si dissolvono, e quegli elettroni sciolti vanno in cerca di un posto dove stare — giù per il filo. Quel flusso <em>è</em> l'elettricità.</p>
<p>Ogni batteria che possiedi funziona sulla stessa idea, dalla stilo del telecomando all'enorme pacco agli ioni di litio di un'auto elettrica. La batteria del tuo telefono immagazzina energia traghettando ioni di litio fra due materiali: usa il telefono e gli ioni derivano da una parte mentre gli elettroni girano nel circuito illuminando lo schermo; mettilo in carica e l'intera cosa va all'inverso, l'elettricità che rispinge indietro gli ioni. Nella simulazione qui sotto, guarda una batteria scaricarsi e ricaricarsi in tempo reale.</p>`,
          facts: [
            { e: '⚡', t: `Le batterie agli ioni di litio in una Tesla Model S contengono circa 7.000 celle individuali — ognuna una piccola reazione redox che avviene simultaneamente.` },
            { e: '🧠', t: `Il tuo cervello funziona a elettrochimica: i neuroni scaricano pompando ioni sodio e potassio attraverso le membrane, generando i segnali elettrici che sono ogni tuo pensiero.` },
            { e: '🌍', t: `L'elettrolisi del minerale di alluminio usa così tanta elettricità che le fonderie di alluminio consumano circa il 3,5% di tutta l'elettricità generata a livello globale — più della maggior parte dei paesi.` },
          ],
          formula: null, sim: 'electrochem',
        },
        student: {
          title: `Celle elettrochimiche, l'equazione di Nernst e le batterie agli ioni di litio`,
          body: `<p>Una cella elettrochimica trasforma la chimica in elettricità attraverso una reazione redox che <em>vuole</em> avvenire. La sua tensione motrice è il <strong>potenziale di cella</strong> \\(E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}\\), letto dritto da una tabella di potenziali standard di riduzione. Un valore positivo significa che la reazione avviene spontaneamente, e si collega direttamente alla termodinamica tramite \\(\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}\\), dove \\(n\\) è il numero di elettroni spostati e \\(F\\) è la costante di Faraday, la carica su una mole di essi. La tensione, in fondo, è solo energia libera per elettrone.</p>
<p>Le condizioni standard sono una comoda finzione, e l'<strong>equazione di Nernst</strong> corregge la tensione per il mondo reale: \\(E = E^\\circ - \\dfrac{RT}{nF}\\ln Q\\), con \\(Q\\) il rapporto fra prodotti e reagenti. Man mano che una batteria si scarica brucia i reagenti e ammucchia i prodotti, quindi \\(Q\\) sale e la tensione cede — che è esattamente perché una batteria stanca segna basso prima di mollare del tutto. Lascia che \\(Q\\) raggiunga l'equilibrio ed \\(E\\) scende a zero: la batteria è scarica.</p>
<p>Le celle agli <strong>ioni di litio</strong> sono un bellissimo sfruttamento di tutto ciò. Invece di dissolvere alcunché, fanno la spola di ioni \\(\\text{Li}^+\\) dentro e fuori i reticoli cristallini di due elettrodi — l'<em>intercalazione</em>. La carica spinge il litio nella grafite; la scarica lo lascia scivolare di nuovo in un catodo di ossido metallico, e l'elettrolita è scelto per trasportare liberamente \\(\\text{Li}^+\\) bloccando gli elettroni, costringendoli a deviare attraverso il tuo dispositivo. Le celle di oggi raggiungono ~250 Wh/kg, eppure un anodo di litio metallico puro potrebbe in linea di principio superare i 3.000 — proprio il premio che le batterie a stato solido inseguono.</p>`,
          facts: [
            { e: '🔬', t: `L'interfase elettrolita-solido (SEI) — un film spesso nanometri che si forma sull'anodo nel primo ciclo di carica — è cruciale per la longevità della batteria ed è ancora non del tutto compresa.` },
            { e: '🌡️', t: `Le batterie agli ioni di litio perdono ~20% di capacità in modo permanente se caricate sopra i 45°C o scaricate sotto i −10°C — ecco perché i telefoni rallentano col freddo.` },
            { e: '♻️', t: `Meno del 5% delle batterie agli ioni di litio è attualmente riciclato. Con la crescita dei veicoli elettrici, ciò rappresenta sia una sfida ambientale sia un'opportunità da migliaia di miliardi di dollari.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Potenziale di cella', e: 'E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}' },
            { n: 'Legame con l\'energia di Gibbs', e: '\\Delta G^\\circ = -nF E^\\circ_{\\text{cell}}' },
            { sep: 1 },
            { n: 'Equazione di Nernst', e: 'E = E^\\circ - \\dfrac{RT}{nF}\\ln Q' },
            { n: 'A 25°C', e: 'E = E^\\circ - \\dfrac{0.0592}{n}\\log Q' },
            { sep: 1 },
            { n: 'Legge di Faraday', e: 'm = \\dfrac{M I t}{nF}', c: 'massa depositata' },
            { n: 'Equilibrio', e: 'E^\\circ_{\\text{cell}} = \\dfrac{RT}{nF}\\ln K' },
          ] }, sim: 'electrochem',
        },
        scholar: {
          title: `Cinetica degli elettrodi, equazione di Butler-Volmer e oltre gli ioni di litio`,
          body: `<h4><span class="hn">01</span>Niente è gratis: la sovratensione</h4>
<p>La termodinamica ti dice quale <em>dovrebbe</em> essere la tensione di una cella, ma mai quanto in fretta la fornirà. Spingi un elettrodo reale a una corrente utile e pretende una tassa — una <strong>sovratensione</strong> \\(\\eta = E - E_{\\text{eq}}\\), una spinta oltre l'equilibrio per far andare la reazione a un ritmo finito. Quella tensione in più è sprecata come calore, e minimizzarla — con catalizzatori migliori e progettazione degli elettrodi — è gran parte di ciò che l'ingegneria delle batterie e delle celle a combustibile in realtà è.</p>
<h4><span class="hn">02</span>Butler–Volmer e la pendenza di Tafel</h4>
<p>La corrente che un elettrodo lascia passare risponde esponenzialmente a quella sovratensione, catturata dall'<strong>equazione di Butler–Volmer</strong> \\(j = j_0\\!\\left[e^{\\alpha F\\eta/RT} - e^{-(1-\\alpha)F\\eta/RT}\\right]\\). Il prefattore \\(j_0\\), la densità di corrente di scambio, misura quanto è intrinsecamente veloce un elettrodo — e spazia dieci ordini di grandezza fra i metalli, ed è per questo che il platino è così prezioso e così difficile da sostituire. Spingi \\(\\eta\\) forte e un esponenziale vince, collassando nella legge lineare di <strong>Tafel</strong> \\(\\eta = a + b\\log j\\), la cui pendenza tradisce lo stadio limitante della velocità.</p>
<h4><span class="hn">03</span>Teoria di Marcus: la geometria del trasferimento di elettroni</h4>
<p>Ingrandisci un singolo salto di elettrone e raggiungi la <strong>teoria di Marcus</strong>, che vinse il premio Nobel del 1992. La sua intuizione è che prima che un elettrone possa saltare, gli atomi e il solvente circostanti devono prima riorganizzarsi a una configurazione condivisa, a un costo energetico chiamato <em>energia di riorganizzazione</em> \\(\\lambda\\). La velocità dipende poi da forza motrice e \\(\\lambda\\) insieme, \\(k_{\\text{ET}} \\propto \\exp\\!\\left[-\\dfrac{(\\Delta G^\\circ + \\lambda)^2}{4\\lambda k_B T}\\right]\\) — una parabola, non la curva monotona che l'intuito si aspetta.</p>
<h4><span class="hn">04</span>La controintuitiva regione invertita</h4>
<p>Quella parabola fa una previsione sconcertante. Man mano che aumenti la forza motrice, la velocità prima sale, culmina quando \\(-\\Delta G^\\circ = \\lambda\\) — e poi <em>cala</em> di nuovo: rendi una reazione più favorevole e va <em>più lenta</em>. Questa <strong>regione invertita</strong> suonava assurda finché Miller non la confermò nel 1984, e non è una mera curiosità: è precisamente ciò che permette alla fotosintesi di tenere separata una carica abbastanza a lungo da usarla, facendo cadere la dispendiosa reazione inversa nella lenta zona invertita.</p>
<h4><span class="hn">05</span>Oltre il litio</h4>
<p>Gli ioni di litio non saranno l'ultima parola. I progetti a <strong>stato solido</strong> scambiano l'infiammabile elettrolita liquido con un conduttore ceramico o polimerico, sbloccando gli anodi di litio metallico; le celle a <strong>ioni sodio</strong> e <strong>potassio</strong> barattano un po' di prestazioni per metalli abbondanti ed economicissimi; le chimiche <strong>multivalenti</strong> (Mg²⁺, Al³⁺) portano più carica per ione ma si intercalano pigramente. Per la rete, le <strong>batterie a flusso</strong> immagazzinano energia in serbatoi di specie redox disciolte, disaccoppiando pulitamente quanta energia immagazzini da quanto in fretta puoi fornirla.</p>
<h4><span class="hn">06</span>Far girare la reazione all'indietro sulla CO₂</h4>
<p>La frontiera più ambiziosa inverte la combustione. La <strong>riduzione elettrochimica della CO₂</strong> usa elettricità rinnovabile per trasformare l'anidride carbonica catturata di nuovo in combustibili e materie prime — i catalizzatori al rame già la convertono in etilene a circa il 70% di efficienza. Se scala, la stessa elettrochimica che immagazzina la nostra energia potrebbe aiutare a chiudere il ciclo del carbonio, facendo girare all'inverso la reazione dei combustibili fossili e tirando carbonio fuori dall'aria invece di riversarcelo.</p>`,
          facts: [
            { e: '🔬', t: `La densità di corrente di scambio j₀ per la reazione di sviluppo dell'idrogeno varia di 10 ordini di grandezza fra i metalli — spiegando perché il platino è cataliticamente unico e perché trovare alternative più economiche è così difficile.` },
            { e: '⚡', t: `Le batterie a flusso al vanadio su scala di rete possono immagazzinare GWh di energia con oltre 20.000 cicli di vita — un secolo di cicli quotidiani — rendendole ideali per l'accumulo di energia rinnovabile a lunga durata.` },
            { e: '🧪', t: `La riduzione elettrochimica della CO₂ a etilene su catalizzatori al rame raggiunge ~70% di efficienza faradica — convertendo un gas serra direttamente in una preziosa materia prima industriale usando solo elettricità.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Butler–Volmer', e: 'j = j_0\\!\\left[e^{\\alpha F\\eta/RT} - e^{-(1-\\alpha)F\\eta/RT}\\right]' },
            { n: 'Equazione di Tafel', e: '\\eta = a + b\\log j,\\quad b = \\dfrac{2.303RT}{\\alpha F}' },
            { sep: 1 },
            { n: 'Velocità di Marcus', e: 'k_{\\text{ET}} \\propto \\exp\\!\\left[-\\dfrac{(\\Delta G^\\circ + \\lambda)^2}{4\\lambda k_B T}\\right]' },
            { n: 'Regione invertita', e: 'k_{\\text{ET}} \\downarrow \\text{ quando } |\\Delta G^\\circ| > \\lambda' },
            { sep: 1 },
            { n: 'Densità di energia', e: '\\mathcal{E} = \\dfrac{V_{\\text{cell}}\\,Q}{m}\\ \\text{[Wh/kg]}' },
            { n: 'Ioni di litio (teorico)', e: '\\text{LiCoO}_2/\\text{graphite} \\approx 370\\ \\text{Wh/kg}' },
          ] }, sim: 'electrochem',
        },
      },
    },
    kinetics: {
      title: 'Cinetica ed equilibrio',
      teaser: 'Perché il cibo marcisce più in fretta d\'estate? Perché alcune reazioni esplodono e altre richiedono secoli? Le risposte rivelano come la chimica controlli il tempo stesso.',
      chips: ['Velocità di reazione', 'Equilibrio', 'Catalisi'],
      lvls: {
        junior: {
          title: `Quanto in fretta avviene la chimica — e quando si ferma?`,
          body: `<p>Il latte in frigo si conserva una settimana; lasciato sul bancone in una giornata calda inacidisce in poche ore. Stessa chimica in entrambi i casi — batteri che scompongono gli zuccheri e le proteine del latte — ma la <strong>temperatura</strong> cambia tutto. Questa è la <strong>cinetica</strong> chimica: lo studio di quanto in fretta vanno le reazioni, e perché.</p>
<p>Perché una reazione qualsiasi avvenga, le molecole devono scontrarsi — e non solo sfiorarsi. Devono colpirsi abbastanza forte, e nel giusto orientamento, per rompere vecchi legami e forgiarne di nuovi. Quell'energia minima per un urto "buono" è l'<strong>energia di attivazione</strong>. Riscalda le cose e le molecole si muovono più in fretta, si urtano più spesso e con più forza, così la reazione sfreccia. Una comoda regola empirica: ogni 10°C in più all'incirca <em>raddoppia</em> la velocità.</p>
<p>Ma la maggior parte delle reazioni non corre semplicemente finché i reagenti sono finiti. Rallentano fino a un punto morto chiamato <strong>equilibrio chimico</strong>, dove la reazione diretta (reagenti → prodotti) e quella inversa (prodotti → reagenti) vanno esattamente allo stesso ritmo. Sembra finita, eppure entrambe le direzioni sono ancora in piena attività, cancellandosi perfettamente. Sposta la temperatura, la pressione o la concentrazione e sbilanci l'equilibrio — una leva che i chimici tirano di continuo per spremere più di qualunque cosa cerchino. Nella simulazione qui sotto, guarda le molecole reagire, raggiungere l'equilibrio e rispondere alle tue modifiche.</p>`,
          facts: [
            { e: '💎', t: `Il diamante è termodinamicamente instabile a temperatura e pressione ambiente — dovrebbe convertirsi spontaneamente in grafite. Ma l'energia di attivazione è così enorme che di fatto non accade mai.` },
            { e: '🧪', t: `Il processo Haber (fare ammoniaca per i fertilizzanti) usa un catalizzatore di ferro per abbassare l'energia di attivazione — senza, la reazione è troppo lenta per essere utile anche ad alta temperatura.` },
            { e: '🌡️', t: `Le reazioni chimiche nelle lucciole producono luce a quasi il 100% di efficienza — quasi nessun calore sprecato. Le lampadine umane sprecano ~90% dell'energia come calore.` },
          ],
          formula: null, sim: 'kinetics',
        },
        student: {
          title: `Leggi cinetiche, l'equazione di Arrhenius e il principio di Le Chatelier`,
          body: `<p>Una <strong>legge cinetica</strong> inchioda quanto in fretta va una reazione in funzione della concentrazione: per i reagenti A e B, \\(r = k[A]^m[B]^n\\), dove gli ordini \\(m, n\\) si trovano per esperimento (non si leggono dall'equazione bilanciata) e \\(k\\) è la costante di velocità. Integrala e impari come le concentrazioni calano nel tempo — la più famosa la legge del primo ordine \\(\\ln[A] = \\ln[A]_0 - kt\\), il cui tempo di dimezzamento \\(t_{1/2} = \\ln 2/k\\) è gloriosamente indipendente da quanto parti. Quella costanza è ciò che trasforma il decadimento del primo ordine in un orologio: il tempo di dimezzamento di 5.730 anni del carbonio-14 è l'intera base della datazione al radiocarbonio.</p>
<p>La presa della temperatura è catturata dall'<strong>equazione di Arrhenius</strong> \\(k = A\\,e^{-E_a/RT}\\): spingi \\(T\\) su e l'esponenziale lascia molte più molecole valicare la barriera di attivazione. Prendi i logaritmi, \\(\\ln k = \\ln A - E_a/RT\\), e un grafico di \\(\\ln k\\) contro \\(1/T\\) è una retta la cui pendenza ti consegna \\(E_a\\). La teoria dello stato di transizione affina il quadro con l'equazione di Eyring \\(k = \\dfrac{k_B T}{h}\\,e^{-\\Delta G^\\ddagger/RT}\\), scomponendo la barriera in entalpia ed entropia e rivelando se una reazione pigra sta combattendo l'energia o il disordine.</p>
<p>Dove una reazione <em>si ferma</em> è una domanda separata, fissata dalla <strong>costante di equilibrio</strong> \\(K\\) e dalla sua àncora termodinamica \\(\\Delta G^\\circ = -RT\\ln K\\). Il <strong>principio di Le Chatelier</strong> ti dice come spostare i pali: disturba un equilibrio e si sposta per smussare il disturbo — aggiungi reagente e spinge a destra, comprimi una reazione gassosa e scivola verso meno molecole, scaldala e pende verso l'endotermica. Il processo Haber per l'ammoniaca è Le Chatelier trasformato in strategia industriale: alza la pressione per favorire il prodotto, poi scendi a compromessi sulla temperatura e aggiungi un catalizzatore di ferro per tenere la velocità gestibile.</p>`,
          facts: [
            { e: '🧲', t: `Un enzima può accelerare una reazione di un fattore 10¹⁷ — equivalente a trasformare un processo che richiederebbe 3 miliardi di anni in uno che richiede un secondo.` },
            { e: '⚗️', t: `Il processo Haber-Bosch per fare fertilizzante di ammoniaca nutre grosso modo metà dell'umanità — e consuma circa l'1,5% della produzione energetica globale.` },
            { e: '🔬', t: `La femtochimica (Nobel 1999) usa impulsi laser da 10⁻¹⁵ secondi per fotografare le molecole allo stato di transizione — l'istante fugace in cui i legami sono mezzo rotti.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Legge cinetica', e: 'r = k[A]^m[B]^n' },
            { n: 'Arrhenius', e: 'k = A\\,e^{-E_a/RT}' },
            { sep: 1 },
            { n: 'Primo ordine', e: '\\ln[A] = \\ln[A]_0 - kt,\\quad t_{1/2} = \\dfrac{\\ln 2}{k}' },
            { n: 'Equazione di Eyring', e: 'k = \\dfrac{k_B T}{h}\\,e^{-\\Delta G^{\\ddagger}/RT}' },
            { sep: 1 },
            { n: 'Costante di equilibrio', e: 'K_c = \\dfrac{\\prod[\\text{prodotti}]^{\\nu}}{\\prod[\\text{reagenti}]^{\\nu}}' },
            { n: 'Legame termodinamico', e: '\\Delta G^\\circ = -RT\\ln K' },
          ] }, sim: 'kinetics',
        },
        scholar: {
          title: `Teoria dello stato di transizione, meccanismi di reazione e cinetica enzimatica`,
          body: `<h4><span class="hn">01</span>Il picco come quasi-equilibrio</h4>
<p>La <strong>teoria dello stato di transizione</strong> (Eyring, Evans e Polanyi, 1935) fece una mossa semplificatrice audace: trattare il fugace complesso attivato \\([AB]^\\ddagger\\) proprio in cima alla barriera energetica come se fosse in equilibrio con i reagenti. Da quell'unica ipotesi cade un'espressione universale della velocità, \\(k = \\kappa\\dfrac{k_B T}{h}\\,e^{\\Delta S^\\ddagger/R}\\,e^{-\\Delta H^\\ddagger/RT}\\), con il coefficiente di trasmissione \\(\\kappa\\) che raccoglie correzioni quantistiche come l'effetto tunnel. Le velocità della chimica, dice, sono governate dalla geometria di un passo di montagna che il sistema visita a malapena.</p>
<h4><span class="hn">02</span>Energia contro disordine alla barriera</h4>
<p>Scomporre la barriera in \\(\\Delta H^\\ddagger\\) e \\(\\Delta S^\\ddagger\\) è più che contabilità. Una reazione può essere lenta perché il suo stato di transizione è alto in <em>energia</em>, o perché raggiungerlo esige una disposizione improbabilmente ordinata — un ripido costo <em>entropico</em>, come quando due molecole devono incontrarsi in una precisa geometria. Arrhenius accorpa entrambi in un singolo \\(E_a\\); la forma di Eyring li separa, e il termine entropico è spesso ciò che un catalizzatore è davvero progettato per sistemare.</p>
<h4><span class="hn">03</span>Prevedere le velocità dalla termodinamica</h4>
<p>Attraverso una famiglia di reazioni simili, la barriera segue la termodinamica in modo sorprendentemente lineare — la <strong>relazione di Evans–Polanyi</strong> \\(E_a = E_a^0 + \\alpha\\,\\Delta H_{\\text{rxn}}\\), una reazione più favorevole tende ad avere una barriera più bassa. È il seme delle <em>relazioni lineari di energia libera</em> (Hammett, Marcus) che permettono ai chimici di prevedere la velocità di una reazione non misurata dai soli dati termodinamici economici — una delle grandi scorciatoie salva-lavoro del campo.</p>
<h4><span class="hn">04</span>Meccanismi e il trucco dello stato stazionario</h4>
<p>Una reazione complessiva è in realtà una sequenza di passi elementari, e il più lento — lo <em>stadio determinante la velocità</em> — fissa il ritmo. Il cavallo da tiro per districarli è l'<strong>approssimazione dello stato stazionario</strong>: assumi che qualsiasi intermedio reattivo sia consumato tanto in fretta quanto si forma, \\(d[\\text{I}]/dt \\approx 0\\), e lo si può eliminare algebricamente per ricavare la legge cinetica osservata. Il bilancio dettagliato sorveglia poi il risultato — all'equilibrio ogni passo deve bilanciarsi individualmente, escludendo meccanismi altrimenti allettanti.</p>
<h4><span class="hn">05</span>Enzimi: Michaelis–Menten</h4>
<p>Punta il macchinario sui catalizzatori della biologia e la stessa ipotesi dello stato stazionario produce l'equazione più famosa della biochimica. Per \\(E + S \\rightleftharpoons ES \\to E + P\\), la velocità è \\(v = \\dfrac{V_{\\max}[S]}{K_M + [S]}\\) — lineare nel substrato quando scarso, saturando a \\(V_{\\max}\\) quando l'enzima è sommerso. \\(K_M\\) è il livello di substrato a metà della velocità massima, un indicatore pratico di quanto strettamente l'enzima stringe il suo bersaglio.</p>
<h4><span class="hn">06</span>Cooperatività e il limite di velocità estremo</h4>
<p>Non tutti gli enzimi seguono quella curva ordinata. Quelli allosterici danno una risposta sigmoidale, da interruttore, adattata dall'equazione di Hill \\(v = \\dfrac{V_{\\max}[S]^n}{K_{0.5}^n + [S]^n}\\), dove \\(n > 1\\) segnala che legare un substrato aiuta il successivo — la cooperatività che permette all'emoglobina di caricare e scaricare l'ossigeno così nettamente. E c'è un tetto: i migliori enzimi raggiungono un'efficienza catalitica \\(k_{\\text{cat}}/K_M \\sim 10^{8}\\text{–}10^{9}\\ \\text{M}^{-1}\\text{s}^{-1}\\), la velocità a cui il substrato semplicemente diffonde nel sito attivo. Sono diventati così veloci che la chimica non li limita più — solo la velocità dell'incontro lo fa.</p>`,
          facts: [
            { e: '⚡', t: `L'anidrasi carbonica catalizza CO₂ + H₂O ⇌ H₂CO₃ a 10⁶ reazioni al secondo — uno degli enzimi più veloci conosciuti, che opera al limite di diffusione.` },
            { e: '🧬', t: `CRISPR-Cas9 è un enzima — il suo meccanismo implica una cinetica controllata con precisione: legare il DNA, srotolare l'elica, verificare la complementarità e tagliare solo quando tutti i criteri sono soddisfatti.` },
            { e: '🔬', t: `La cinetica a singola molecola (con la microscopia a fluorescenza) può ora osservare singole molecole di enzima catalizzare una reazione alla volta — rivelando un'eterogeneità nascosta invisibile alle misure di massa.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Eyring (completa)', e: 'k = \\kappa\\dfrac{k_B T}{h}\\,e^{\\Delta S^{\\ddagger}/R}\\,e^{-\\Delta H^{\\ddagger}/RT}' },
            { n: 'Evans–Polanyi', e: 'E_a = E_a^0 + \\alpha\\,\\Delta H_{\\text{rxn}}' },
            { sep: 1 },
            { n: 'Michaelis–Menten', e: 'v = \\dfrac{V_{\\max}[S]}{K_M + [S]}' },
            { n: 'Efficienza catalitica', e: '\\dfrac{k_{\\text{cat}}}{K_M} \\to 10^{8}\\text{–}10^{9}\\ \\text{M}^{-1}\\text{s}^{-1}', c: 'limite di diffusione' },
            { sep: 1 },
            { n: 'Equazione di Hill', e: 'v = \\dfrac{V_{\\max}[S]^n}{K_{0.5}^n + [S]^n}' },
            { n: 'Equazione di Hammett', e: '\\log(k/k_0) = \\rho\\,\\sigma', c: 'energia libera lineare' },
          ] }, sim: 'kinetics',
        },
      },
    },
    volcano: {
      title: 'Vulcanologia',
      teaser: 'Un vulcano è una finestra sull\'interno del nostro pianeta. Lo stesso processo che distrugge città ha costruito i continenti, creato gli oceani e formato l\'atmosfera che respiriamo.',
      chips: ['Magma', 'Eruzioni', 'Rischi geologici'],
      lvls: {
        junior: {
          title: `Montagne di fuoco — i costruttori più potenti della Terra!`,
          body: `<p>Un vulcano è una delle forze più terrificanti della natura — e una delle più creative. Nel profondo della Terra, la roccia fonde sotto calore e pressione feroci in <strong>magma</strong>, un liquido denso e incandescente più leggero della roccia solida attorno. Come una bolla che sale nel miele, il magma si fa strada verso l'alto attraverso le crepe nella crosta, e quando finalmente rompe la superficie erutta come <strong>lava</strong>, cenere e gas — costruendo nuova terra mentre procede.</p>
<p>I vulcani vengono in forme molto diverse. I <strong>vulcani a scudo</strong>, come quelli delle Hawaii, sono larghi e dolcemente inclinati, colando lava fluida che scorre per chilometri e raramente esplode. Gli <strong>stratovulcani</strong> come il Vesuvio o il Krakatoa sono i coni ripidi e perfetti da cartolina, costruiti strato su strato da cenere e lava viscosa — e possono esplodere con violenza catastrofica.</p>
<p>Con tutta la loro distruttività, i vulcani sono gran parte del motivo per cui siamo qui. Nel corso di miliardi di anni, le eruzioni eruttarono i gas che divennero la nostra atmosfera e riempirono gli oceani. L'anidride carbonica che le piante respirano, l'azoto che respiriamo, perfino l'acqua nel mare — quasi tutto un tempo uscì ruggendo da un vulcano. Senza di essi, la Terra sarebbe una roccia brulla, morta come la Luna. Nella simulazione qui sotto, guarda una camera magmatica pressurizzarsi ed esplodere.</p>`,
          facts: [
            { e: '🌍', t: `Ci sono circa 1.500 vulcani potenzialmente attivi sulla Terra — 500 hanno eruttato nella storia documentata, e 50–70 eruttano ogni anno.` },
            { e: '❄️', t: `L'eruzione del monte Tambora del 1815 iniettò così tanta cenere nell'atmosfera che il 1816 divenne "l'anno senza estate" — i raccolti fallirono a livello globale e 100.000 persone morirono di fame.` },
            { e: '🌊', t: `Il vulcano più grande della Terra è il Mauna Loa alle Hawaii — misurato dalla sua base sul fondale oceanico, è più alto del Monte Everest di oltre 1 chilometro.` },
          ],
          formula: null, sim: 'volcano',
        },
        student: {
          title: `Genesi del magma, stili eruttivi e rischi vulcanici`,
          body: `<p>Il magma non è semplicemente "roccia fusa" — si forma per <strong>fusione parziale</strong>, e ci sono tre modi per far superare il limite al mantello solido. <em>Decompressione</em>: il mantello che sale a una dorsale scende sotto la sua pressione di fusione e fonde risalendo. <em>Fusione per flusso</em>: l'acqua strizzata da una lastra in subduzione abbassa il punto di fusione del mantello sovrastante, preparando i magmi ricchi di silice degli archi vulcanici. <em>Trasferimento di calore</em>: magma caldo del mantello iniettato nella crosta la fonde dall'interno. Il prodotto va dal basalto fluido (~50% di silice) alla riolite rigida (~75%) — e quel contenuto di silice decide in silenzio quasi tutto ciò che segue.</p>
<p>Lo stile eruttivo è in realtà un braccio di ferro fra <strong>viscosità</strong> e gas disciolto. Man mano che il magma sale, la pressione che lo comprime si allenta e i volatili — acqua, CO₂, SO₂ — vengono fuori frizzando come bolle, esattamente come stappare una bottiglia agitata. Nel basalto fluido le bolle si liberano e il magma si limita a colare (un'eruzione <em>effusiva</em>). Nella riolite rigida restano intrappolate, la pressione si accumula dietro di esse, e l'intera cosa detona in una torreggiante colonna <em>pliniana</em>. La grandezza è registrata sull'<strong>indice di esplosività vulcanica</strong>, una scala logaritmica 0–8 dove ogni passo è all'incirca \\(10\\times\\) più materiale eruttato — e una "supereruzione" VEI 8 come Yellowstone scaglia oltre 1.000 km³.</p>
<p>I pericoli sono molti e ineguali. Le colate laviche sono lente e quasi inarrestabili ma raramente letali; i veri assassini sono le <strong>correnti piroclastiche</strong> — cocenti valanghe di gas e roccia a centinaia di gradi, che corrono in discesa a velocità autostradali. Aggiungi ricadute di cenere abbastanza pesanti da far crollare i tetti, i <em>lahar</em> (colate di fango vulcanico) che seppelliscono intere valli, e il gas invisibile — l'eruzione del Laki del 1783 esalò abbastanza zolfo da uccidere un quarto dell'Islanda. Oggi una rete di sismometri, GPS, sensori di gas e radar satellitari sorveglia i vulcani irrequieti per i tremori e il rigonfiamento che precorrono un'eruzione.</p>`,
          facts: [
            { e: '💨', t: `L'eruzione del Pinatubo del 1991 iniettò 20 milioni di tonnellate di SO₂ nella stratosfera, formando aerosol di solfato che raffreddarono la Terra di 0,5°C per due anni.` },
            { e: '🔥', t: `Le correnti piroclastiche del Vesuvio nel 79 d.C. raggiunsero Ercolano in 4 minuti a ~300°C — la morte fu istantanea per shock termico, non per asfissia come si pensava prima.` },
            { e: '📡', t: `La deformazione del suolo alla caldera di Yellowstone è monitorata da oltre 30 stazioni GPS; si gonfia e si sgonfia fino a 20 cm/anno mentre i fluidi idrotermali si muovono — ma non c'è segno di un'eruzione imminente.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Viscosità del magma', e: '\\eta = A\\,e^{E_a/RT}', c: 'sale con SiO₂, cala con T' },
            { n: 'Crescita delle bolle', e: '\\dfrac{dR}{dt} = \\dfrac{(P_b - P_\\infty)R}{4\\eta}' },
            { sep: 1 },
            { n: 'Indice di esplosività', e: '\\text{VEI} \\approx \\log_{10}(V_{\\text{ejecta}}) + 8', c: 'V in km³' },
            { n: 'Colonna pliniana', e: 'H \\approx 0.236\\,Q^{1/4}', c: 'Q = flusso di massa' },
            { sep: 1 },
            { n: 'Fusione per decompressione', e: '\\left.\\tfrac{dT}{dP}\\right|_{\\text{sol}} < \\left.\\tfrac{dT}{dP}\\right|_{\\text{adiabat}}' },
            { n: 'Forzante da SO₂', e: '\\Delta F \\approx -0.03\\,M_{\\text{SO}_2}\\ \\text{W/m}^2', c: 'per Tg' },
          ] }, sim: 'volcano',
        },
        scholar: {
          title: `Dinamica della camera magmatica, saturazione dei volatili e supereruzioni`,
          body: `<h4><span class="hn">01</span>Non una pozza di lava, ma una poltiglia</h4>
<p>La vignetta di una caverna fusa sotto un vulcano è sbagliata. I veri serbatoi di magma sono <strong>poltiglie di cristalli</strong> (crystal mush) — una spugnosa miscela di cristalli e fuso interstiziale, con frazione di fuso \\(\\phi\\) che va da quasi 1 (liquido) fino a ~0,4, sotto cui i cristalli si incastrano e l'intera massa si blocca come sabbia bagnata. Quella <strong>frazione critica di fuso</strong> \\(\\phi_c \\approx 0.4\\text{–}0.5\\) è il cardine reologico fra "eruttabile" e "bloccato", e la maggior parte della vita di un serbatoio è passata parcheggiata, fredda e ricca di cristalli, sul lato sbagliato di essa.</p>
<h4><span class="hn">02</span>Il fattore scatenante della ricarica</h4>
<p>Ciò che ribalta una poltiglia in stallo in un'eruzione è spesso un'iniezione di magma fresco e caldo dal mantello sottostante. La ricarica riscalda e rimobilita la pila di cristalli, comprime ed essolve i suoi volatili, e sovrappressurizza il serbatoio. La parte sbalorditiva è la scala temporale: la zonatura chimica congelata nei cristalli di plagioclasio e olivina registra il processo che richiede mere settimane o anni — un sistema geologico che passa millenni dormiente può armarsi in una stagione.</p>
<h4><span class="hn">03</span>I volatili e il frizzare</h4>
<p>Tutto ciò che è esplosivo risale al gas disciolto. La solubilità dell'acqua in un fuso silicico scala grosso modo come \\(X_{\\text{H}_2\\text{O}} \\propto P^{1/2}\\), così mentre il magma risale e la pressione cala, l'acqua è forzata fuori dalla soluzione e nelle bolle. Quanto violentemente dipende da quanto in fretta decomprime rispetto a quanto pigramente il fuso viscoso lascia crescere e drenare le bolle. Sbaglia quell'equilibrio — risali troppo in fretta in un fuso troppo rigido — e le bolle non tengono il passo, e la pressione non ha altra via d'uscita che fuori.</p>
<h4><span class="hn">04</span>Frammentazione: quando il magma si frantuma</h4>
<p>Il momento dell'esplosione è un cambiamento di fase nel comportamento. Quando il tasso di deformazione supera la capacità del fuso di scorrere — grossolanamente, \\(\\dot{\\varepsilon} > G/\\eta\\) — il magma smette di comportarsi come un liquido e si frantuma come vetro, frammentandosi in piroclasti lungo il <strong>fronte di frammentazione</strong>. Un liquido continuo diventa uno spruzzo ad alta velocità di cenere e gas in un istante. Tutto ciò che sta sopra quel fronte è una colonna eruttiva; tutto ciò che sta sotto è ancora magma. È l'unica soglia che separa una colata lavica da una catastrofe pliniana.</p>
<h4><span class="hn">05</span>Supereruzioni</h4>
<p>Le <strong>supereruzioni</strong> (VEI ≥ 8, oltre 1.000 km³) esigono la rapida mobilitazione di un enorme corpo di poltiglia — una rara confluenza di un grande serbatoio e di un fattore scatenante abbastanza forte. Yellowstone lo ha fatto tre volte, più di recente il Lava Creek Tuff di 640.000 anni fa, all'incirca 1.000 km³ di riolite. Queste non sono solo eruzioni più grandi; operano su una scala fisica diversa, svuotando un serbatoio così vasto che il suolo sopra sprofonda in una <em>caldera</em> larga decine di chilometri.</p>
<h4><span class="hn">06</span>Inverno vulcanico</h4>
<p>La minaccia globale dalle eruzioni più grandi è climatica, non locale. Lo zolfo iniettato nella stratosfera forma una foschia di aerosol di solfato che indugia per un anno o due, riflettendo la luce solare e raffreddando la superficie — un <em>inverno vulcanico</em>. La supereruzione di Toba ~74.000 anni fa potrebbe aver precipitato il mondo esattamente in questo, e alcuni leggono un corrispondente collo di bottiglia genetico nel DNA umano, come se la nostra specie fosse stata brevemente ridotta a qualche migliaio di sopravvissuti. Persino la modesta eruzione del Pinatubo del 1991 raffreddò in modo misurabile il pianeta di 0,5°C per due anni — prova di concetto, su piccola scala.</p>`,
          facts: [
            { e: '🧬', t: `Le prove genetiche suggeriscono che la supereruzione di Toba 74.000 anni fa possa aver ridotto la popolazione umana a meno di 10.000 coppie riproduttive — spiegando un collo di bottiglia visibile nel nostro DNA.` },
            { e: '🔬', t: `La cronometria per diffusione nei cristalli di olivina può misurare quanto a lungo il magma ha passato a temperatura di eruzione — a volte solo giorni o settimane prima di una grande eruzione.` },
            { e: '🌍', t: `I basalti alluvionali dei Trappi del Deccan (India, ~66 Ma) eruttarono 500.000 km³ di lava in ~1 milione di anni — coincidendo con l'estinzione K-Pg e forse contribuendovi accanto all'impatto di Chicxulub.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Solubilità dell\'H₂O', e: 'X_{\\text{H}_2\\text{O}} = a\\,P^{1/2}', c: 'a ≈ 3.07×10⁻⁴ (800°C)' },
            { n: 'Frammentazione', e: '\\dot{\\varepsilon} > G/\\eta', c: 'transizione fragile' },
            { sep: 1 },
            { n: 'Cristallizzazione di Avrami', e: '\\phi(t) = 1 - e^{-K t^{n}}' },
            { n: 'Frazione critica di fuso', e: '\\phi_c \\approx 0.4\\text{–}0.5', c: 'blocco reologico' },
            { sep: 1 },
            { n: 'Altezza della colonna', e: 'H = 0.236\\,Q^{1/4}', c: 'Q = flusso di massa' },
            { n: 'Forzante climatico', e: '\\Delta T \\approx -0.03\\,M_{\\text{SO}_2}', c: 'per Tg iniettato' },
          ] }, sim: 'volcano',
        },
      },
    },
    seasons: {
      title: 'Perché abbiamo le stagioni',
      teaser: 'L\'estate non è quando la Terra è più vicina al Sole — è un\'inclinazione di 23,5°, e questo cambia tutto.',
      chips: ['Inclinazione assiale', 'Solstizio', 'Luce solare'],
      lvls: {
        junior: {
          title: `Perché l'estate è calda (e non è ciò che pensi)`,
          body: `<p>La maggior parte della gente indovina che l'estate è calda perché la Terra è più vicina al Sole. È un'ipotesi ragionevole — ed è sbagliata. La distanza della Terra dal Sole cambia a malapena in tutto l'anno. Anzi, la Terra è <em>leggermente più vicina</em> al Sole all'inizio di gennaio, nel bel mezzo dell'inverno settentrionale! Quindi la distanza non può essere la risposta. Il vero motivo è un'<strong>inclinazione</strong>.</p>
<p>La Terra gira su un asse che non è dritto in verticale — è inclinato di circa <strong>23,5°</strong>, e continua a puntare nella stessa direzione tutto l'anno mentre gira attorno al Sole. Così per metà dell'anno la metà settentrionale del pianeta si inclina verso il Sole, e per l'altra metà si inclina lontano. Quando la tua metà si inclina verso il Sole, i suoi raggi ti colpiscono più direttamente e i giorni sono più lunghi — è l'estate. Quando si inclina lontano, la luce arriva a un angolo basso e sparpagliato e i giorni sono corti — è l'inverno.</p>
<p>È anche perché le stagioni sono opposte nelle due metà del mondo. Quando in Europa è estate e il nord si inclina verso il Sole, la metà meridionale — Australia, Argentina — si inclina lontano e ha l'inverno. Ed è perché l'equatore, che affronta sempre il Sole all'incirca allo stesso angolo, non ha nessuna vera estate o inverno, solo stagioni umide e secche. Una piccola inclinazione fa girare l'intero calendario del caldo.</p>`,
          facts: [
            { e: '🌍', t: `La Terra è in realtà più vicina al Sole all'inizio di gennaio — il cuore dell'inverno settentrionale. Non è la distanza a fare le stagioni.` },
            { e: '🔄', t: `Le stagioni sono opposte a nord e a sud: quando in Italia è estate in Australia è inverno, perché le due metà si inclinano in versi opposti.` },
            { e: '☀️', t: `Ai poli l'inclinazione è così estrema che il Sole non tramonta mai per mesi in estate — e non sorge mai per mesi in inverno.` },
          ],
          formula: null, sim: 'seasons',
        },
        student: {
          title: `Inclinazione assiale, angolo solare e lunghezza del giorno`,
          body: `<p>L'asse della Terra è inclinato di 23,5° rispetto alla perpendicolare della sua orbita e — cosa cruciale — punta in una <em>direzione fissa nello spazio</em> (verso la Stella Polare) tutto l'anno. Mentre la Terra orbita, ciò significa che ciascun emisfero si inclina alternativamente verso e lontano dal Sole. Ne seguono due cose, ed entrambe rendono calda l'estate: il Sole sale più alto nel cielo (i raggi colpiscono più direttamente, concentrando l'energia su meno terreno) e i giorni si allungano (più ore di riscaldamento).</p>
<p>L'orbita segna quattro punti di svolta. Al <strong>solstizio di giugno</strong> il polo nord si inclina al massimo verso il Sole — estate settentrionale, Sole più alto, giorni più lunghi. Al <strong>solstizio di dicembre</strong> è invertito. In mezzo stanno i due <strong>equinozi</strong> (marzo e settembre), quando l'inclinazione è di lato rispetto al Sole, giorno e notte sono uguali ovunque, e nessun emisfero è favorito. Il Sole sta direttamente sopra l'equatore agli equinozi e sopra i tropici (±23,5°) ai solstizi.</p>
<p>Perché un raggio diretto scaldi di più è pura geometria: un raggio basso e angolato sparpaglia la stessa energia su una chiazza di terreno più grande (e attraversa più atmosfera). È il coseno dell'angolo all'opera. E poiché oceani e terre impiegano settimane a scaldarsi e raffreddarsi, la parte più calda dell'estate è in ritardo di un mese o due rispetto al solstizio di giugno — il "ritardo stagionale".</p>`,
          facts: [
            { e: '📐', t: `L'intensità della luce solare segue il coseno dell'angolo del Sole rispetto allo zenit: un Sole basso invernale sparpaglia la sua energia sottilmente sul terreno.` },
            { e: '⏳', t: `Le settimane più calde sono in ritardo di un mese o due rispetto al solstizio di giugno, perché terra e mare impiegano tempo a scaldarsi — il "ritardo stagionale".` },
            { e: '🌐', t: `Agli equinozi (marzo e settembre) il Sole è sopra l'equatore e ogni luogo sulla Terra riceve circa 12 ore di luce.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Inclinazione assiale', e: '23.5°', c: 'dalla perpendicolare orbitale' },
            { n: 'Solstizi', e: '\\text{Giugno: N verso il Sole},\\ \\text{Dic: N lontano}' },
            { n: 'Equinozi', e: '\\text{Mar, Set: giorno e notte uguali}' },
            { sep: 1 },
            { n: 'Intensità del raggio', e: 'I \\propto \\cos\\theta', c: 'θ = angolo del Sole dalla verticale' },
          ] }, sim: 'seasons',
        },
        scholar: {
          title: `Geometria orbitale, insolazione e i lunghi cicli climatici`,
          body: `<h4><span class="hn">01</span>Insolazione e la legge del coseno</h4>
<p>La potenza che atterra su una chiazza di terreno è la costante solare per il coseno dell'angolo zenitale del Sole, integrata sulle ore di luce. Entrambi i fattori — angolo del raggio e lunghezza del giorno — culminano insieme in estate, ed è per questo che l'oscillazione stagionale dell'energia ricevuta è più grande di quanto darebbe ciascun effetto da solo.</p>
<h4><span class="hn">02</span>Obliquità contro eccentricità</h4>
<p>L'orbita della Terra è solo leggermente ellittica (eccentricità ≈ 0,017), quindi l'effetto della distanza è minuscolo — circa il 7% nell'energia ricevuta — e attualmente <em>ammorbidisce</em> gli inverni settentrionali. L'inclinazione (obliquità) domina le stagioni; la piccola eccentricità rende principalmente un po' più estreme le stagioni dell'emisfero australe.</p>
<h4><span class="hn">03</span>Cicli di Milankovitch</h4>
<p>Nel corso di decine di migliaia di anni l'obliquità annuisce (22,1°-24,5°, ~41.000 anni), l'eccentricità dell'orbita respira (~100.000 anni) e l'asse precede (~26.000 anni). Questi lenti spostamenti nel modo in cui la luce solare è distribuita fra latitudine e stagione sono ciò che scandisce le ere glaciali.</p>
<h4><span class="hn">04</span>Latitudine e gli estremi</h4>
<p>I tropici (±23,5°) sono gli unici luoghi in cui il Sole può stare direttamente allo zenit; oltre i circoli polari (±66,5°) l'inclinazione produce il Sole di mezzanotte e la notte polare. Le stagioni sono un'unica storia geometrica, semplicemente raccontata in modo diverso a ogni latitudine.</p>`,
          facts: [
            { e: '🧊', t: `I cicli di Milankovitch — lenti cambiamenti dell'inclinazione, della forma dell'orbita e dell'oscillazione assiale — scandiscono le ere glaciali nel corso di decine di migliaia di anni.` },
            { e: '🌡️', t: `L'orbita della Terra è quasi circolare (eccentricità 0,017), quindi la sua distanza dal Sole cambia solo circa il 3% nell'arco dell'anno.` },
            { e: '🪐', t: `Marte è inclinato quasi come la Terra (25°), quindi ha stagioni familiari — ma la sua orbita allungata le rende molto ineguali in lunghezza.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Insolazione', e: 'S = S_0 \\cos\\theta_z', c: 'θ_z = angolo zenitale' },
            { n: 'Obliquità', e: '\\varepsilon \\approx 23.44°' },
            { sep: 1 },
            { n: 'Ciclo dell\'obliquità', e: '22.1°\\text{-}24.5°,\\ \\sim\\!41{,}000\\ \\text{anni}' },
            { n: 'Precessione assiale', e: '\\sim\\!26{,}000\\ \\text{anni}' },
          ] }, sim: 'seasons',
        },
      },
    },
    climate: {
      title: 'Clima e atmosfera',
      teaser: 'Un aumento di 1°C della temperatura globale scatena uragani, siccità e innalzamento del livello del mare. Perché così sensibile?',
      chips: ['Effetto serra', 'CO₂', 'Clima'],
      lvls: {
        junior: {
          title: `La coperta invisibile della Terra`,
          body: `<p>La Terra sta alla giusta distanza dal Sole — non rovente come Venere, non congelata come Marte. Ma la distanza non è tutta la storia. Gran parte del merito va alla nostra atmosfera, una sottile pelle di gas avvolta attorno al pianeta. Toglila e la temperatura media della Terra precipiterebbe a circa −18°C, e ogni oceano gelerebbe del tutto.</p>
<p>Quell'atmosfera funziona come una <strong>coperta invisibile</strong>. La luce del sole la attraversa dritta e scalda il suolo, e il suolo caldo irradia quel calore di nuovo verso l'alto come infrarosso invisibile — lo stesso tremolio che vedi salire da una strada rovente. Certi gas, i <strong>gas serra</strong> (soprattutto anidride carbonica e vapore acqueo), assorbono quel calore che sale e ne rimbalzano indietro gran parte verso il basso. È l'<strong>effetto serra</strong>, e senza di esso saremmo una roccia congelata.</p>
<p>Ecco il guaio. Bruciando carbone, petrolio e gas, stiamo ammucchiando CO₂ in più nell'aria — ispessendo la coperta, intrappolando più calore, scaldando il pianeta. Anche un cambiamento che suona minuscolo, uno o due gradi, innesca conseguenze sproporzionate: le calotte glaciali fondono, i mari salgono, gli schemi meteo sbandano, le barriere coralline sbiancano e muoiono. L'atmosfera è una macchina finemente regolata, e la stiamo alterando più in fretta che in qualsiasi momento dell'ultimo milione di anni.</p>`,
          facts: [
            { e: '🌡️', t: `La temperatura media della Terra è salita di ~1,2°C dalla Rivoluzione Industriale. Piccolo suona grande — ma cambia tutto.` },
            { e: '🐻‍❄️', t: `Il ghiaccio marino artico in estate si è ridotto di ~40% da quando le misurazioni satellitari iniziarono nel 1979.` },
            { e: '🌊', t: `Il livello del mare è salito di ~20 cm dal 1900. Ora sale più in fretta a ogni decennio, per la fusione dei ghiacci e l'espansione termica dell'oceano.` },
          ],
          formula: null, sim: 'climate',
        },
        student: {
          title: `Forzante radiativo, ciclo del carbonio e sensibilità climatica`,
          body: `<p>Il clima è, in fondo, un problema di bilancio energetico: luce solare in entrata, infrarosso in uscita. Disturba quell'equilibrio — diciamo aggiungendo CO₂ — e il pianeta deve scaldarsi finché la radiazione uscente risale a pareggiare quella entrante. La grandezza del disturbo è il <strong>forzante radiativo</strong> \\(\\Delta F\\), la variazione del flusso energetico in cima all'atmosfera prima che alcunché abbia avuto modo di scaldarsi. Per la CO₂ cresce solo <em>logaritmicamente</em> con la concentrazione, \\(\\Delta F = 5.35\\,\\ln(C/C_0)\\); dai \\(C_0 \\approx 280\\) ppm preindustriali agli attuali ~420 ppm ciò equivale a circa \\(2\\ \\text{W/m}^2\\) — una piccola lucina notturna che brilla su ogni metro quadrato della Terra, senza sosta.</p>
<p>Trasforma il forzante in temperatura con \\(\\Delta T = \\lambda\\,\\Delta F\\), dove \\(\\lambda\\) è la sensibilità climatica. La fisica nuda dà un modesto \\(\\lambda_0 \\approx 0.3\\ \\text{K per W/m}^2\\) — ma il sistema risponde. Il riscaldamento evapora più vapore acqueo, esso stesso un gas serra; fonde il ghiaccio brillante per esporre l'oceano scuro e assorbente; e così via. Questi <em>feedback</em> positivi triplicano all'incirca la risposta, e il risultato finale è la <strong>sensibilità climatica all'equilibrio</strong>: circa 3°C di riscaldamento per ogni raddoppio della CO₂.</p>
<p>Dove va il carbonio conta quanto quanto ne emettiamo. Il <strong>ciclo del carbonio</strong> rimescola il carbonio fra l'atmosfera (~900 GtC), piante e suoli (~2000 GtC) e il vasto serbatoio oceanico (~38.000 GtC). Dei circa 10 GtC che gli umani rilasciano ogni anno, terra e oceano ne assorbono in silenzio circa il 30% ciascuno, lasciandone circa il 40% ad accumularsi nell'aria. Quel surplus è ciò che spinge la CO₂ verso l'alto di ~2,5 ppm all'anno — un ritmo senza precedenti in nessun punto del record delle carote di ghiaccio.</p>`,
          facts: [
            { e: '🌿', t: `L'oceano assorbe ~30% delle emissioni umane di CO₂, ma ciò causa l'acidificazione dell'oceano — il pH è sceso di 0,1 unità, dissolvendo i gusci degli organismi marini.` },
            { e: '🏔️', t: `Le calotte di Groenlandia e Antartide insieme contengono abbastanza acqua da alzare il livello del mare di ~65 metri se fondessero del tutto — un rischio a lunghissimo termine.` },
            { e: '💨', t: `Le particelle di aerosol da industria e vulcani in realtà raffreddano il clima di ~0,5°C, mascherando ancora più riscaldamento. Ridurre l'inquinamento atmosferico potrebbe causare un picco di temperatura a breve termine.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Forzante radiativo', e: '\\Delta F = 5.35\\,\\ln(C/C_0)\\ \\text{W/m}^2' },
            { n: 'Concentrazioni', e: 'C_0 \\approx 280\\text{ ppm},\\;\\; C_{\\text{now}} \\approx 420\\text{ ppm}' },
            { sep: 1 },
            { n: 'Risposta in temperatura', e: '\\Delta T = \\lambda\\,\\Delta F' },
            { n: 'Sensibilità senza feedback', e: '\\lambda_0 \\approx 0.3\\ \\text{K·m}^2/\\text{W}' },
            { n: 'Con feedback', e: '\\lambda \\approx 0.8\\text{–}1.2\\ \\text{K·m}^2/\\text{W}' },
            { sep: 1 },
            { n: 'Sensibilità climatica', e: '\\Delta T_{2\\times\\text{CO}_2} \\approx 3\\,°\\text{C}', c: 'IPCC AR6' },
          ] }, sim: 'climate',
        },
        scholar: {
          title: `Modelli di bilancio energetico, GCM e punti di non ritorno climatici`,
          body: `<h4><span class="hn">01</span>Il bilancio energetico nudo</h4>
<p>Al livello più semplice, la Terra deve irradiare via esattamente la luce solare che trattiene: solare assorbito uguale a onda lunga emessa, \\(\\dfrac{S_0(1-\\alpha)}{4} = \\sigma T_{\\text{eff}}^4\\). Risolvi per la temperatura radiativa effettiva e ottieni \\(T_{\\text{eff}} = \\left[\\dfrac{S_0(1-\\alpha)}{4\\sigma}\\right]^{1/4} \\approx 255\\ \\text{K}\\) — un gelido −18°C. Quella è la temperatura che la Terra <em>dovrebbe</em> avere, e questo modello da retro di busta spiega già perché albedo e output solare siano le manopole principali del pianeta.</p>
<h4><span class="hn">02</span>Il regalo di 33 gradi, e il suo surplus misurato</h4>
<p>Eppure la superficie sta vicino a 288 K, ben ~33 K più calda di quanto il bilancio nudo preveda. Quel divario <em>è</em> l'effetto serra naturale — i gas serra intercettano l'infrarosso uscente e ne re-irradiano gran parte verso il basso. Cosa cruciale, ora possiamo osservare dall'orbita l'aumento umano di esso: i satelliti misurano uno squilibrio energetico persistente di circa \\(+0.9\\ \\text{W/m}^2\\), il pianeta che assorbe più di quanto emette, un'impronta diretta del forzante antropogenico anziché un'inferenza da termometri di superficie.</p>
<h4><span class="hn">03</span>Feedback: il termostato e i suoi amplificatori</h4>
<p>Ciò che ferma il riscaldamento incontrollato è il <strong>feedback di Planck</strong>: per Stefan–Boltzmann, una superficie più calda irradia come \\(T^4\\), quindi l'emissione si irrigidisce con la temperatura, \\(\\lambda_P = -1/(4\\sigma T^3) \\approx -3.2\\ \\text{W·m}^{-2}\\text{K}^{-1}\\), una potente forza di richiamo. Sovrapposti ci sono amplificatori e smorzatori — vapore acqueo (+1,8), gradiente termico verticale (−0,6), albedo di superficie (+0,4) — e la sensibilità all'equilibrio è fissata dalla loro somma, \\(\\text{ECS} = -\\Delta F_{2\\times}/\\gamma\\). Il pianeta ha un termostato; i feedback decidono quanto è nervoso.</p>
<h4><span class="hn">04</span>Perché l'intervallo di sensibilità non si restringe: le nuvole</h4>
<p>Con tutti i progressi, la stima dell'ECS è rimasta ostinatamente vicino a 2,5–4°C per decenni, e il colpevole sono le nuvole. Il feedback delle nuvole spazia da −0,4 a +0,4 W·m⁻²K⁻¹ — può sia raffreddare il pianeta riflettendo la luce solare sia scaldarlo intrappolando il calore, a seconda del tipo di nuvola e dell'altitudine, e il segno netto è genuinamente incerto. Quel singolo termine domina la dispersione in ogni insieme di modelli, ed è per questo che l'ultimo tratto della questione della sensibilità è il più difficile.</p>
<h4><span class="hn">05</span>Simulare un intero pianeta</h4>
<p>Le proiezioni reali vengono dai <strong>modelli di circolazione generale</strong>, che risolvono le equazioni primitive — Navier–Stokes più termodinamica su una sfera rotante — accoppiando oceano e atmosfera su griglie di decine di chilometri. Qualsiasi cosa più piccola di una cella di griglia (un temporale in convezione, un vortice oceanico, una singola nuvola) va <em>parametrizzata</em>, approssimata da una regola empirica, ed è esattamente lì che i modelli divergono. I modelli di frontiera CMIP6 vi aggiungono cicli del carbonio interattivi, chimica degli aerosol e dinamica delle calotte glaciali.</p>
<h4><span class="hn">06</span>Punti di non ritorno e cascate</h4>
<p>La preoccupazione più grave sono i <strong>punti di non ritorno</strong> — soglie dove un feedback positivo diventa autosostenuto e il sistema sbanda in un nuovo stato che persiste anche se riporti indietro il forzante. Fra i candidati ci sono il collasso delle calotte glaciali dell'Antartide occidentale (+3 m di livello del mare) e della Groenlandia (+7 m), il deperimento dell'Amazzonia, l'arresto dell'AMOC e il rilascio di metano dal permafrost. Lavori recenti suggeriscono che diversi potrebbero essere attraversati già a 1,5–2°C, e peggio, possono interagire — un ribaltamento che spinge il successivo in una <em>cascata</em>, destabilizzando il sistema a temperature un tempo ritenute sicure.</p>`,
          facts: [
            { e: '💻', t: `I modelli climatici a più alta risoluzione girano su supercomputer petaflop per mesi per simulare decenni — eppure ancora non riescono a risolvere le singole nuvole.` },
            { e: '📡', t: `Gli strumenti satellitari CERES misurano lo squilibrio energetico della Terra a +0,87 ± 0,12 W/m² (NASA, 2022) — confermando il forzante serra direttamente dallo spazio.` },
            { e: '🌊', t: `L'AMOC si è indebolita di ~15% dalla metà del XX secolo (Caesar et al., Nature 2018) e potrebbe attraversare un punto di non ritorno fra 1,8°C e 4°C di riscaldamento globale.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Bilancio energetico TOA', e: '\\dfrac{S_0(1-\\alpha)}{4} = \\sigma T_{\\text{eff}}^4' },
            { n: 'Temperatura effettiva', e: 'T_{\\text{eff}} \\approx 255\\text{ K}', c: 'superficie: 288 K' },
            { sep: 1 },
            { n: 'Feedback di Planck', e: '\\lambda_P = -\\dfrac{1}{4\\sigma T^3} \\approx -3.2\\ \\text{W·m}^{-2}\\text{K}^{-1}' },
            { n: 'Sensibilità climatica', e: '\\text{ECS} = -\\Delta F_{2\\times}/\\gamma', c: 'γ = Σ feedback' },
            { sep: 1 },
            { n: 'Forzante della CO₂', e: '\\Delta F = 5.35\\,\\ln(C/C_0)\\ \\text{W/m}^2' },
            { n: 'Forzante attuale', e: '\\Delta F(420/280) \\approx 2.1\\ \\text{W/m}^2' },
          ] }, sim: 'climate',
        },
      },
    },
    tectonics: {
      title: 'Tettonica a placche e terremoti',
      teaser: 'Il suolo sotto i tuoi piedi si muove — lentamente ma inarrestabilmente. Ogni montagna, oceano e terremoto ne è una conseguenza.',
      chips: ['Placche', 'Terremoti', 'Sismologia'],
      lvls: {
        junior: {
          title: `La Terra è viva — e si muove!`,
          body: `<p>Il suolo sotto i tuoi piedi sembra solido come roccia e del tutto immobile. Ma accelera un filmato della Terra su milioni di anni e appare qualcosa di sbalorditivo: i continenti derivano sulla superficie come colossali tessere di un puzzle alla deriva su un lento fiume di roccia calda. È la <strong>tettonica a placche</strong>, il singolo processo più importante che plasma il volto del nostro pianeta.</p>
<p>Il guscio esterno della Terra è spaccato in una quindicina di grandi lastroni — le <strong>placche tettoniche</strong> — che strisciano all'incirca alla velocità con cui ti crescono le unghie, qualche centimetro all'anno. Banale nel quotidiano, sbalorditivo nel tempo profondo: 200 milioni di anni fa ogni continente era fuso in un unico supercontinente, la <strong>Pangea</strong>. L'India stava giù vicino all'Antartide, l'Oceano Atlantico non esisteva, e l'Himalaya — le montagne più alte della Terra — iniziò a sollevarsi solo 50 milioni di anni fa, quando l'India si schiantò contro l'Asia.</p>
<p>Quando le placche si sfregano insieme, scivolano l'una accanto all'altra o si allontanano, l'energia che si libera può essere catastrofica. I <strong>terremoti</strong> colpiscono quando due placche bloccate dall'attrito si liberano di colpo, scaricando secoli di deformazione accumulata in una manciata di secondi. Il terremoto del Giappone del 2011 fu così violento da spostare l'asse terrestre di 17 centimetri e da tagliare 1,8 microsecondi dalla lunghezza di un giorno. Nella simulazione qui sotto, muovi le placche e senti le conseguenze.</p>`,
          facts: [
            { e: '🏔️', t: `L'Himalaya cresce di circa 5 mm ogni anno — l'India si sta ancora schiantando contro l'Asia a 4,4 cm/anno, e la collisione iniziata 50 milioni di anni fa non è finita.` },
            { e: '🌊', t: `Il terremoto dell'Oceano Indiano del 2004 rilasciò energia equivalente a 23.000 bombe di Hiroshima e scatenò tsunami che uccisero 230.000 persone in 14 paesi.` },
            { e: '🧲', t: `Il campo magnetico terrestre — che ci protegge dalle radiazioni solari — è generato dal ferro liquido in movimento nel nucleo esterno, 2.900 km sotto la superficie.` },
          ],
          formula: null, sim: 'tectonics',
        },
        student: {
          title: `Margini di placca, onde sismiche e il ciclo di Wilson`,
          body: `<p>La Terra è stratificata come una cipolla: un nucleo interno solido di ferro, un nucleo esterno liquido in movimento che alimenta il campo magnetico, un mantello roccioso in lenta convezione e una sottile crosta fragile in cima. Le <strong>placche</strong> sono i rigidi ~100 km esterni — crosta più il mantello più freddo — che cavalcano sull'astenosfera più morbida sottostante. A guidarle non è un nastro trasportatore che spinge dal basso ma perlopiù la gravità: la <em>spinta della dorsale</em>, mentre la crosta neonata scivola giù dalle dorsali medio-oceaniche, e — dominante — il <em>tiro della placca in subduzione</em>, dove una lastra fredda e densa che sprofonda in una fossa trascina giù dietro di sé il resto della placca.</p>
<p>Le placche si incontrano in tre modi. Ai margini <strong>divergenti</strong> si allontanano e crosta fresca risale (dorsali medio-oceaniche, la Rift dell'Africa orientale); a quelli <strong>convergenti</strong> si scontrano, o subducendo per costruire archi vulcanici e fosse profonde o accartocciandosi in montagne di piega; ai margini <strong>trasformi</strong> si sfregano di lato l'una accanto all'altra (la San Andreas). Allarga lo sguardo a centinaia di milioni di anni e questi si intrecciano nel <strong>ciclo di Wilson</strong> — bacini oceanici che si aprono per rift, poi si chiudono per subduzione, ancora e ancora.</p>
<p>Un <strong>terremoto</strong> si rompe in un punto chiamato ipocentro e inonda la roccia di onde sismiche: veloci <em>onde P</em> che si comprimono attraverso solidi e liquidi, e più lente <em>onde S</em> che tagliano, e quindi passano solo attraverso i solidi. Poiché le P superano le S, il divario fra i loro arrivi a un sismometro misura la distanza, e tre stazioni inchiodano la posizione. La grandezza è riportata come <strong>magnitudo momento</strong> \\(M_w = \\tfrac{2}{3}\\log_{10} M_0 - 10.7\\), costruita dal momento sismico \\(M_0 = \\mu A d\\) (rigidità della roccia × area di rottura × scorrimento). Ogni passo intero su per la scala è all'incirca \\(32\\times\\) più energia — una magnitudo 8 supera una magnitudo 6 di mille volte.</p>`,
          facts: [
            { e: '🔍', t: `I sismologi scoprirono il nucleo esterno liquido della Terra nel 1906 notando che le onde S (che non possono attraversare i liquidi) spariscono sul lato opposto del pianeta.` },
            { e: '📡', t: `Le reti GPS ora rilevano il moto delle placche in tempo reale — la placca pacifica si muove verso nord-ovest a 7 cm/anno, misurabile con precisione millimetrica.` },
            { e: '⚡', t: `Il più grande terremoto mai registrato fu quello di Valdivia, Cile, del 1960 (M_w 9,5) — ruppe una faglia lunga 1.000 km e larga 200 km simultaneamente.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Magnitudo momento', e: 'M_w = \\tfrac{2}{3}\\log_{10} M_0 - 10.7' },
            { n: 'Momento sismico', e: 'M_0 = \\mu A d', c: 'rigidità × area × scorrimento' },
            { sep: 1 },
            { n: 'Scala dell\'energia', e: '\\Delta M_w = 1 \\;\\Rightarrow\\; \\sim\\!32\\times \\text{ energia}' },
            { n: 'Velocità onde P', e: 'V_P = \\sqrt{\\dfrac{K + \\tfrac{4}{3}G}{\\rho}}' },
            { sep: 1 },
            { n: 'Velocità onde S', e: 'V_S = \\sqrt{\\dfrac{G}{\\rho}}' },
            { n: 'Ritardo P–S', e: '\\Delta t = d\\!\\left(\\tfrac{1}{V_S} - \\tfrac{1}{V_P}\\right)', c: 'dà la distanza d' },
          ] }, sim: 'tectonics',
        },
        scholar: {
          title: `Convezione del mantello, geodinamica e tomografia sismica`,
          body: `<h4><span class="hn">01</span>Il mantello è un fluido — solo molto lento</h4>
<p>La roccia solida scorre, se aspetti. Su milioni di anni il mantello convette come una pentola di sciroppo, e il suo vigore è fissato dal <strong>numero di Rayleigh</strong> \\(Ra = \\dfrac{\\alpha g \\Delta T d^3}{\\kappa \\nu}\\), che oppone la spinta di galleggiamento a viscosità e diffusione. Il mantello terrestre gira a \\(Ra \\sim 10^7\\), migliaia di volte oltre la soglia in cui la convezione parte — quindi nonostante una viscosità di \\(10^{21}\\) Pa·s, l'intera cosa si rovescia, e la tettonica a placche è solo la cima di quella convezione che rompe la superficie in pezzi fragili.</p>
<h4><span class="hn">02</span>Come il pianeta disperde il suo calore</h4>
<p>La convezione è il sistema di raffreddamento del pianeta. Il <strong>numero di Nusselt</strong> \\(Nu \\sim Ra^{1/3}\\) dice quanto più calore trasporta la convezione rispetto alla semplice conduzione, e la Terra spurga circa 47 TW in totale — grosso modo il 70% attraverso l'incessante fabbricazione di nuova crosta oceanica alle dorsali medio-oceaniche. La tettonica non è incidentale nella storia termica della Terra; <em>è</em> il modo in cui un pianeta roccioso resta abbastanza caldo dentro per continuare.</p>
<h4><span class="hn">03</span>Una TAC della Terra profonda</h4>
<p>Non possiamo scavare fino al nucleo, ma le onde sismiche possono, e la <strong>tomografia sismica</strong> le trasforma in un'immagine 3-D. Inverti i tempi di arrivo di migliaia di terremoti e recuperi dove le onde accelerano o rallentano: le lastre fredde e rigide corrono veloci, i pennacchi caldi e galleggianti corrono lenti. È una TAC planetaria, che risolve la struttura a un paio di centinaia di chilometri a livello globale e più fine a livello regionale — abbastanza da osservare le lastre subdotte tuffarsi verso il nucleo e i pennacchi salire da esso.</p>
<h4><span class="hn">04</span>Le due macchie sul fondo del mondo</h4>
<p>La scoperta più sconcertante della tomografia siede al confine nucleo-mantello: due regioni grandi come continenti di roccia anomalmente lenta sotto l'Africa e il Pacifico, le <em>Large Low Shear Velocity Provinces</em>. Calde, dense e antiche, potrebbero essere cumuli primordiali rimasti dalla prima differenziazione della Terra — o, in un'audace idea recente, frammenti sepolti del corpo grande quanto Marte la cui collisione formò la Luna. In ogni caso, sembrano guidare dove sorgono i pennacchi profondi e i loro vulcani di superficie.</p>
<h4><span class="hn">05</span>La geodinamo</h4>
<p>Il campo magnetico terrestre è generato dalla convezione nel nucleo esterno di ferro liquido, e la sua evoluzione obbedisce all'equazione dell'induzione \\(\\partial_t B = \\nabla\\times(u\\times B) + \\eta \\nabla^2 B\\): il primo termine stira e amplifica il campo, il secondo lo lascia diffondere via. Chi vince è deciso dal numero di Reynolds magnetico \\(Rm = UL/\\eta \\sim 500\\) — comodamente a favore dell'amplificazione — così il nucleo in movimento sostiene un campo contro il decadimento ohmico, una dinamo autoeccitante che gira da miliardi di anni.</p>
<h4><span class="hn">06</span>Quando la bussola si capovolge</h4>
<p>Quella dinamo non è stabile. Il record magnetico congelato nelle rocce mostra che il campo ha invertito la polarità circa 170 volte negli ultimi 100 milioni di anni, a intervalli selvaggiamente irregolari da 0,1 a 50 milioni di anni, ogni capovolgimento della durata di qualche migliaio di anni. Perché il campo si destabilizza e si inverte resta solo in parte compreso — e col polo magnetico nord che attualmente scatta verso la Siberia, non è una questione puramente accademica.</p>`,
          facts: [
            { e: '🌐', t: `La tomografia sismica ha rivelato due "macchie" grandi come continenti alla base del mantello (LLSVP) — forse resti di un impattatore grande quanto Marte che formò la Luna 4,5 miliardi di anni fa.` },
            { e: '🧲', t: `Il polo nord magnetico terrestre si sta attualmente spostando verso la Siberia a ~55 km/anno — 10 volte più veloce che nel XIX secolo — suggerendo cambiamenti nella dinamica del flusso del nucleo.` },
            { e: '🔬', t: `Gli esperimenti con cella a incudine di diamante possono ricreare pressioni di 360 GPa e temperature di 6.000 K — riproducendo le condizioni del nucleo interno terrestre in laboratorio per misurare direttamente le proprietà del ferro.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Numero di Rayleigh', e: 'Ra = \\dfrac{\\alpha g \\Delta T d^3}{\\kappa \\nu}', c: "mantello: Ra ~ 10⁷" },
            { n: 'Numero di Nusselt', e: 'Nu \\sim Ra^{1/3}', c: 'calore convettivo / conduttivo' },
            { sep: 1 },
            { n: 'Equazione dell\'induzione', e: '\\partial_t B = \\nabla\\times(u\\times B) + \\eta \\nabla^2 B' },
            { n: 'Reynolds magnetico', e: 'Rm = UL/\\eta \\sim 500', c: 'domina l\'avvezione' },
            { sep: 1 },
            { n: 'Flusso di Stokes', e: '\\nabla P = \\eta \\nabla^2 u + \\rho g', c: 'inerzia trascurabile' },
            { n: 'Flusso di calore', e: 'Q = Nu\\,k\\,\\Delta T/d', c: '~47 TW totali' },
          ] }, sim: 'tectonics',
        },
      },
    },
    ocean: {
      title: 'Oceanografia e correnti oceaniche',
      teaser: 'L\'oceano è il motore climatico della Terra. Un fiume d\'acqua più largo del Rio delle Amazzoni e mille volte più profondo circonda l\'intero pianeta — tenendo calda l\'Europa e l\'ossigeno nell\'aria.',
      chips: ['Correnti', 'Termoalina', 'Oceano profondo'],
      lvls: {
        junior: {
          title: `L'oceano: la gigantesca macchina climatica della Terra!`,
          body: `<p>L'oceano ammanta il 71% della superficie terrestre e contiene il 97% della sua acqua — ma è molto più di una gigantesca pozzanghera. È una macchina vasta, irrequieta e viva che fa girare il clima, esala metà del nostro ossigeno e guida il meteo di ogni paese sulla mappa. Senza di esso la superficie oscillerebbe violentemente da −100°C di notte a +100°C di giorno; invece l'oceano assorbe calore d'estate e lo restituisce d'inverno, ammorbidendo l'intero pianeta.</p>
<p>E non sta mai fermo. In superficie, le <strong>correnti guidate dal vento</strong> spazzano l'acqua attorno al globo in enormi anelli chiamati <strong>vortici oceanici</strong> (gyre). La Corrente del Golfo è quella famosa: trascina l'acqua calda caraibica su per la costa orientale del Nord America e attraverso fino all'Europa, tenendo Londra e Dublino ben 5–10°C più miti di quanto la loro latitudine avrebbe diritto di essere. Spegnila e il nord Europa sembrerebbe il Canada.</p>
<p>Molto più in basso, gira un anello ancora più grandioso: la <strong>circolazione termoalina</strong>, il "nastro trasportatore oceanico". Vicino ai poli, l'acqua fredda e salata diventa densa e sprofonda fino al fondale, poi striscia nella profondità per mille anni prima di riaffiorare. Quel fiume nascosto traghetta calore, nutrienti e gas disciolti in ogni angolo del mare — e il timore che il cambiamento climatico possa fermarlo è uno dei più grandi dell'oceanografia.</p>`,
          facts: [
            { e: '🌡️', t: `La Corrente del Golfo trasporta 30 milioni di metri cubi d'acqua al secondo — 150 volte la portata combinata di tutti i fiumi della Terra.` },
            { e: '🐋', t: `Il punto più profondo dell'oceano — l'Abisso Challenger nella Fossa delle Marianne — è profondo 11.034 metri. Il Monte Everest ci starebbe dentro con 2 km di avanzo.` },
            { e: '💨', t: `L'oceano produce circa il 50% dell'ossigeno della Terra — perlopiù dal fitoplancton microscopico vicino alla superficie, non dalle foreste pluviali.` },
          ],
          formula: null, sim: 'ocean',
        },
        student: {
          title: `Flusso geostrofico, trasporto di Ekman e la circolazione termoalina`,
          body: `<p>Il vento che trascina sulla superficie del mare sembrerebbe solo spingere l'acqua sottovento — ma la Terra che ruota interviene. L'effetto <strong>Coriolis</strong> piega l'acqua in movimento verso destra a nord, verso sinistra a sud, e poiché quella piegatura si compone con la profondità (la <em>spirale di Ekman</em>), il trasporto netto di superficie finisce a pieni 90° di lato rispetto al vento, \\(M_E = \\dfrac{\\tau}{\\rho f}\\), con \\(f = 2\\Omega\\sin\\varphi\\) il parametro di Coriolis. Dove questi trasporti convergono, l'acqua si ammucchia in una gentile collina, e il gradiente di pressione che costruisce guida il <strong>flusso geostrofico</strong>: correnti che corrono <em>lungo</em> le linee di pressione anziché in discesa, esattamente come il vento che gira attorno a un sistema meteorologico.</p>
<p>Cuci tutto ciò attraverso un bacino e ottieni i grandi <strong>vortici oceanici</strong>, con il <em>bilancio di Sverdrup</em> \\(\\beta V = \\tfrac{1}{\\rho}(\\nabla\\times\\tau)\\) che lega il loro flusso interno al rotore del vento. Una stranezza della sfera rotante — la variazione verso i poli di \\(f\\) — spreme il flusso di ritorno in un nastro sottile e veloce sul lato occidentale, che è esattamente perché la Corrente del Golfo e la Kuroshio sono così strette e intense. Sotto tutto il trambusto guidato dal vento corre la <strong>circolazione termoalina</strong> guidata dalla densità: l'acqua fredda e salata del Nord Atlantico sprofonda per alimentare un rovesciamento globale di circa 18 sverdrup (1 Sv = un milione di metri cubi al secondo).</p>
<p>Verticalmente l'oceano è impilato per densità. Uno strato mescolato caldo e agitato dal vento di ~100 m galleggia sul <strong>termoclino</strong>, dove la temperatura scende ripidamente, sopra l'abisso freddo e quasi uniforme a circa 2°C. Quella stratificazione, misurata dalla frequenza di galleggiamento \\(N^2 = -\\tfrac{g}{\\rho}\\tfrac{d\\rho}{dz}\\), lotta per tenere separati gli strati. Ciò che mantiene viva la circolazione profonda contro di essa è il lento gocciolare del mescolamento dalle onde interne che si infrangono — il motore silenzioso che lascia girare il nastro trasportatore.</p>`,
          facts: [
            { e: '🌡️', t: `L'AMOC ha rallentato di ~15% dalla metà del XX secolo — se collassa, l'Europa nord-occidentale potrebbe raffreddarsi di 5–10°C nel giro di decenni, anche mentre le temperature globali salgono.` },
            { e: '🧪', t: `Una singola goccia d'acqua oceanica profonda vicino all'Antartide era in superficie l'ultima volta ~1.000 anni fa — la scala temporale di ventilazione dell'oceano profondo, misurata con la datazione al radiocarbonio.` },
            { e: '🌀', t: `I vortici di mesoscala (50–200 km di diametro) contengono ~80% dell'energia cinetica dell'oceano — mescolano calore, sale e nutrienti molto più efficacemente della circolazione media.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Parametro di Coriolis', e: 'f = 2\\Omega\\sin\\varphi' },
            { n: 'Trasporto di Ekman', e: 'M_E = \\dfrac{\\tau}{\\rho f}' },
            { sep: 1 },
            { n: 'Bilancio geostrofico', e: 'fv = \\tfrac{1}{\\rho}\\partial_x P,\\quad fu = -\\tfrac{1}{\\rho}\\partial_y P' },
            { n: 'Bilancio di Sverdrup', e: '\\beta V = \\tfrac{1}{\\rho}(\\nabla\\times\\tau)' },
            { sep: 1 },
            { n: 'Densità dell\'acqua di mare', e: '\\rho = \\rho(T,S,P) \\approx 1025\\ \\text{kg/m}^3' },
            { n: 'Frequenza di galleggiamento', e: 'N^2 = -\\dfrac{g}{\\rho}\\dfrac{d\\rho}{dz}' },
          ] }, sim: 'ocean',
        },
        scholar: {
          title: `Accoppiamento oceano-atmosfera, ENSO e mescolamento abissale`,
          body: `<h4><span class="hn">01</span>Un'interfaccia irrequieta</h4>
<p>Oceano e atmosfera sono bloccati in uno scambio costante di calore, umidità e quantità di moto attraverso la loro superficie condivisa. Il flusso è catturato dalle <strong>formule di bulk</strong>: calore sensibile \\(Q_S = \\rho_a c_p C_H U (T_s - T_a)\\), calore latente \\(Q_L = \\rho_a L_v C_E U (q_s - q_a)\\), più la radiazione. Ciò che rende questo un sistema <em>accoppiato</em> anziché due separati è che le anomalie risultanti di temperatura superficiale del mare retroagiscono dritte sui venti che le hanno prodotte — e quel ciclo di feedback è dove la presa dell'oceano sul clima si stringe davvero.</p>
<h4><span class="hn">02</span>ENSO: il battito più forte del pianeta</h4>
<p>Il modo accoppiato più forte di tutti è l'<strong>ENSO</strong>, l'oscillazione meridionale El Niño, e gira sul <em>feedback di Bjerknes</em>: l'acqua calda nel Pacifico orientale indebolisce gli alisei, i venti più deboli allentano la fredda risalita, e la risalita allentata scalda ulteriormente l'acqua — un ciclo autoamplificante. Ogni pochi anni fa oscillare il Pacifico fra stati caldi (El Niño) e freddi (La Niña), e da lì reindirizza pioggia, siccità e tempeste attraverso interi continenti. I modelli accoppiati ora lo prevedono da sei a nove mesi in anticipo.</p>
<h4><span class="hn">03</span>Il problema del mescolamento</h4>
<p>Ecco un paradosso al cuore dell'oceanografia fisica. Il rovesciamento profondo dipende dall'acqua abissale fredda che viene lentamente scaldata e sollevata di nuovo, il che richiede un mescolamento verticale dell'ordine di \\(\\kappa \\sim 10^{-4}\\ \\text{m}^2/\\text{s}\\) — mille volte più di quanto la diffusione molecolare potrebbe mai fornire. Qualcosa deve agitare l'oceano profondo molto più forte di quanto la conduzione del calore possa, o l'intero nastro trasportatore si arresta. Trovare <em>dove</em> avviene quel mescolamento, e quanto, è il vecchio "problema del mescolamento".</p>
<h4><span class="hn">04</span>Le onde interne fanno il mescolamento</h4>
<p>La risposta sono in gran parte le <strong>onde interne</strong>. Le maree che sciabordano sopra la ruvida topografia del fondale pompano circa un terawatt in onde che viaggiano lungo le superfici di densità dentro l'oceano, poi si irripidiscono e si infrangono, mescolando mentre procedono. Il campo di fondo di queste onde è così universale da avere una propria legge — lo spettro di Garrett–Munk — che si adatta alle osservazioni dall'Artico ai tropici. La circolazione profonda, in altre parole, è in ultima analisi alimentata dalla Luna, la sua energia riciclata attraverso le onde che si infrangono nel buio.</p>
<h4><span class="hn">05</span>Simulare il mare</h4>
<p>I modelli oceanici risolvono le <strong>equazioni primitive</strong> — Navier–Stokes su una sfera rotante sotto le approssimazioni di Boussinesq e idrostatica, \\(\\partial_z P = -\\rho g\\). Gli OGCM moderni girano attorno a 1/12° (~8 km), abbastanza fini da risolvere gli energetici vortici di mesoscala che portano gran parte dell'energia cinetica dell'oceano, pur parametrizzando ancora il mescolamento a scala più piccola. Accoppia questi ad atmosfera, ghiaccio marino e biogeochimica e hai i modelli del sistema Terra che sostengono la proiezione climatica.</p>
<h4><span class="hn">06</span>Il grande pozzo di calore del pianeta</h4>
<p>Tutto ciò conta urgentemente perché l'oceano ha inghiottito in silenzio grosso modo il 93% del calore in più intrappolato dai gas serra dagli anni '50 — senza quel tamponamento, la superficie terrestre starebbe già bruciando. La rivoluzione nell'osservarlo è stata <em>Argo</em>, una flotta di ~4.000 galleggianti robotici che si immergono e riaffiorano in ogni oceano, profilando temperatura e salinità fino a 2 km ogni dieci giorni. Per la prima volta possiamo misurare il lento immagazzinamento di calore su scala planetaria del mare in qualcosa di vicino al tempo reale.</p>`,
          facts: [
            { e: '⚡', t: `Le maree interne generate dove le correnti di marea scorrono sopra la Dorsale delle Hawaii portano ~20 GW di energia nel Pacifico aperto — una fonte importante di mescolamento abissale.` },
            { e: '🌍', t: `L'oceano ha assorbito ~93% del calore in eccesso dal forzante serra antropogenico dal 1955 — senza questo tamponamento, la superficie terrestre sarebbe ~36°C più calda oggi.` },
            { e: '🔬', t: `I galleggianti Argo — 4.000 robot profilatori autonomi che derivano in ogni oceano — misurano temperatura e salinità da 0 a 2000 m ogni 10 giorni, trasformando l'osservazione oceanica dal 2000.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Equazioni primitive', e: '\\dfrac{Du}{Dt} - fv = -\\tfrac{1}{\\rho}\\partial_x P + \\nu\\nabla^2 u' },
            { n: 'Bilancio idrostatico', e: '\\partial_z P = -\\rho g' },
            { sep: 1 },
            { n: 'Velocità onde di Rossby', e: 'c_R = -\\beta L_d^2', c: 'verso ovest' },
            { n: 'Raggio di deformazione', e: 'L_d = NH/f' },
            { sep: 1 },
            { n: 'Calore latente aria–mare', e: 'Q_L = \\rho_a L_v C_E U(q_s - q_a)' },
            { n: 'Mescolamento abissale', e: '\\kappa \\sim 10^{-4}\\ \\text{m}^2/\\text{s}', c: 'vs 10⁻⁷ molecolare' },
          ] }, sim: 'ocean',
        },
      },
    },
    sorting: {
      title: 'Algoritmi di ordinamento',
      teaser: 'Come fa un computer a ordinare un milione di numeri in millisecondi — e perché la strategia conta?',
      chips: ['Algoritmi', 'Big-O', 'Informatica'],
      lvls: {
        junior: {
          title: `Mettere le cose in ordine — nel modo furbo!`,
          body: `<p>Immagina un grosso mazzo di carte numerate, tutte mescolate, e il compito di metterle in ordine dalla più piccola alla più grande. Potresti scorrerle a mano, confrontando e infilando ciascuna al suo posto. Abbastanza facile con dieci carte. Con un milione, lo stesso paziente metodo ti terrebbe occupato per anni.</p>
<p>I computer incontrano questo identico problema tutto il giorno — ordinare le tue email per data, le foto per ora, i risultati di ricerca per pertinenza, i contatti dalla A alla Z. Un <strong>algoritmo di ordinamento</strong> è solo la precisa ricetta passo-passo che un computer segue per farlo. Ed ecco la cosa su cui vale la pena fermarsi: per lo stessissimo mazzo di carte, alcune ricette sono milioni di volte più veloci di altre.</p>
<p>Il più semplice, il <strong>Bubble Sort</strong>, percorre la lista confrontando i vicini, scambiando quelli fuori ordine, e ripete finché non resta nulla da scambiare. Funziona, ma è lento — sostanzialmente controlla ogni coppia. L'alternativa furba, il <strong>Merge Sort</strong>, gioca al divide-et-impera: taglia il mazzo a metà, ordina ciascuna metà, poi ricuce insieme le due metà ordinate. Dividi e fondi, dividi e fondi, e il milione di carte che avrebbe richiesto anni cade in ordine in un batter d'occhio. Stesso compito, strategia selvaggiamente diversa — è tutto qui il gioco.</p>`,
          facts: [
            { e: '📧', t: `La tua app di posta ordina migliaia di messaggi quasi all'istante usando varianti di Merge Sort e QuickSort.` },
            { e: '🗺️', t: `Google Maps trova il percorso più breve fra miliardi di segmenti stradali in meno di un secondo — usando algoritmi specializzati sui grafi.` },
            { e: '🎮', t: `I videogiochi ordinano migliaia di oggetti 3D per distanza a ogni fotogramma per renderizzarli nel corretto ordine di profondità!` },
          ],
          formula: null, sim: 'sorting',
        },
        student: {
          title: `Complessità Big-O: misurare l'efficienza di un algoritmo`,
          body: `<p>Quanto è buono un algoritmo di ordinamento si riduce a una domanda: man mano che l'input cresce fino a \\(n\\) elementi, quanto in fretta cresce il lavoro? La <strong>notazione Big-O</strong> cattura esattamente quel tasso di crescita, nel caso peggiore. Il trucco è che la velocità grezza dipende dal tuo hardware, ma il tasso di crescita è insito nell'algoritmo stesso — ed è il tasso di crescita a decidere chi vince su un milione di elementi.</p>
<p>Il <strong>Bubble Sort</strong> continua a spazzare la lista, facendo salire i valori grandi verso destra uno scambio alla volta. Per \\(n\\) elementi sono fino a \\(\\tfrac{n(n-1)}{2}\\) confronti — \\(O(n^2)\\). Raddoppia l'input e quadruplichi il lavoro. A \\(n = 10^6\\) sono circa 500 miliardi di confronti, all'incirca 8 minuti su una macchina che ne fa un miliardo al secondo.</p>
<p>Il <strong>Merge Sort</strong> prende la via del divide-et-impera: dimezza, ordina ricorsivamente ciascuna metà, poi fonde. Ogni fusione è lavoro \\(O(n)\\) e la ricorsione è profonda solo \\(\\log_2 n\\) livelli, quindi il totale è \\(O(n \\log n)\\). A \\(n = 10^6\\) sono circa 20 milioni di confronti — qualcosa come 25.000 volte più veloce del Bubble Sort. Il prezzo è la memoria: la fusione richiede \\(O(n)\\) spazio di appoggio.</p>
<p>Il <strong>QuickSort</strong> sceglie un pivot, divide l'array in "più piccoli" e "più grandi", e ricorre su ciascun lato. In media è \\(O(n \\log n)\\) con un comportamento della cache delizioso; il suo caso peggiore è \\(O(n^2)\\) su input già ordinato, domato scegliendo il pivot a caso. I linguaggi reali coprono le scommesse: Python e Java montano il <strong>TimSort</strong>, un ibrido Merge/Insertion che individua le sequenze già in ordine e sfreccia attraverso dati quasi ordinati in quasi \\(O(n)\\).</p>`,
          facts: [
            { e: '⚡', t: `Ordinare 1.000.000 di elementi: Bubble Sort ≈ 8 minuti; Merge Sort ≈ 0,02 secondi. Stesso problema, 25.000 volte più veloce — da pura strategia.` },
            { e: '🧮', t: `L'ordinamento basato su confronti ha un limite inferiore dimostrato di Ω(n log n) — nessun ordinamento a confronti può essere asintoticamente più veloce, mai.` },
            { e: '🔢', t: `Il Radix Sort aggira il limite inferiore dei confronti ordinando cifra per cifra, raggiungendo O(nk) per interi a k cifre.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Bubble Sort', e: 'T(n) = O(n^2)', c: 'stabile; lento per n grande' },
            { n: 'Merge Sort', e: 'T(n) = O(n \\log n)', c: 'stabile; O(n) spazio extra' },
            { n: 'QuickSort', e: 'T(n) = O(n \\log n)\\text{ medio},\\; O(n^2)\\text{ peggiore}', c: 'in loco; veloce in pratica' },
            { sep: 1 },
            { n: 'Limite inferiore dei confronti', e: '\\Omega(n \\log n)', c: 'ogni ordinamento a confronti' },
            { sep: 1 },
            { n: 'Ricorrenza del merge', e: 'T(n) = 2\\,T(n/2) + O(n)', c: 'Teorema Master → O(n log n)' },
          ] }, sim: 'sorting',
        },
        scholar: {
          title: `Complessità computazionale, il Teorema Master e le dimostrazioni di limite inferiore`,
          body: `<h4><span class="hn">01</span>Risolvere le ricorrenze: il Teorema Master</h4>
<p>Gli algoritmi divide-et-impera si descrivono con ricorrenze, e la maggior parte rientra in un unico modello: \\(T(n) = a\\,T(n/b) + f(n)\\) — \\(a\\) sottoproblemi di dimensione \\(n/b\\), più \\(f(n)\\) lavoro per dividere e ricombinare. Il <strong>Teorema Master</strong> legge la risposta confrontando \\(f(n)\\) con \\(n^{\\log_b a}\\): chi domina vince, e se pareggiano paghi un \\(\\log n\\) extra. Il Merge Sort ha \\(a=b=2\\) e \\(f(n)=\\Theta(n)\\), che è esattamente il caso di pareggio \\(n^{\\log_2 2} = n\\) — così ne esce \\(T(n) = \\Theta(n \\log n)\\), senza alcun giro di parole.</p>
<h4><span class="hn">02</span>Il limite inferiore che nessuno può battere</h4>
<p>Il Merge Sort è \\(O(n\\log n)\\) — ma qualcosa di più furbo potrebbe essere più veloce? Per qualsiasi ordinamento che funzioni confrontando elementi, la risposta è un netto no, e la dimostrazione è splendida. Modella l'algoritmo come un albero di decisione binario: ogni nodo interno pone un confronto, ogni foglia è una permutazione finita. Ordinare \\(n\\) elementi significa che l'albero deve avere almeno \\(n!\\) foglie per distinguere ogni ordinamento, e un albero binario di altezza \\(h\\) ne ha al più \\(2^h\\). Quindi \\(h \\ge \\log_2(n!)\\), e Stirling lo trasforma in \\(\\Omega(n \\log n)\\). Il limite è teorico-informativo — non gli importa quanto sei furbo, solo quanti esiti devi distinguere.</p>
<h4><span class="hn">03</span>Battere il limite barando (legalmente)</h4>
<p>Quel muro vale solo per gli ordinamenti che <em>confrontano</em>. Esci da lì e puoi andare più veloce sfruttando la struttura nei dati. Il <strong>Counting Sort</strong> conta gli interi in un intervallo noto \\([0,k]\\) in \\(O(n+k)\\); il <strong>Radix Sort</strong> lo concatena cifra per cifra per \\(O(d(n+k))\\); il <strong>Bucket Sort</strong> raggiunge un atteso \\(O(n)\\) su dati distribuiti uniformemente. Nessuno di questi contraddice il limite inferiore — fanno semplicemente aritmetica sulle chiavi invece di chiedere "quale è più grande?", e il teorema non ha mai promesso nulla al riguardo.</p>
<h4><span class="hn">04</span>Il caso medio del QuickSort</h4>
<p>Il caso peggiore del QuickSort è un brutto \\(O(n^2)\\), eppure è l'ordinamento a cui la maggior parte dei sistemi reali ricorre, perché in media non è solo \\(O(n\\log n)\\) ma \\(O(n\\log n)\\) con costanti minuscole e una superba località di cache. La media segue dal sommare le probabilità che due elementi qualsiasi vengano mai confrontati, che porta a \\(E[T(n)] = 2n H_n - 2n\\) con \\(H_n\\) il numero armonico — decisamente \\(O(n\\log n)\\). Randomizzare il pivot rende il caso cattivo astronomicamente improbabile anziché semplicemente raro.</p>
<h4><span class="hn">05</span>La macchina sotto il modello</h4>
<p>Il Big-O conta le operazioni, ma una CPU reale tiene enormemente alla località di memoria — un cache miss può costare centinaia di confronti "gratuiti". È per questo che un algoritmo \\(O(n\\log n)\\) che scorre la memoria in ordine spesso stracci uno teoricamente uguale che salta di qua e di là. Gli algoritmi <strong>cache-oblivious</strong> (Frigo et al., 1999) sfruttano la ricorsione per raggiungere il comportamento di cache ottimale a <em>ogni</em> dimensione di cache contemporaneamente, senza mai essere informati della dimensione — un promemoria che il modello asintotico è una mappa, non il territorio.</p>
<h4><span class="hn">06</span>Il posto dell'ordinamento nello zoo della complessità</h4>
<p>L'ordinamento sta comodamente in <strong>P</strong>, la classe dei problemi risolvibili in tempo polinomiale. Il suo vicino famoso è la domanda se \\(P = NP\\) — se ogni problema la cui soluzione è rapida da <em>verificare</em> sia anche rapida da <em>risolvere</em>. L'ordinamento è facile; il problema del commesso viaggiatore, che si limita a riordinare città, è NP-difficile e si crede richieda sforzo esponenziale. Un algoritmo ottimale veloce per esso farebbe collassare \\(P\\) in \\(NP\\) e porterebbe giù con sé la crittografia moderna. Che un compito tranquillo come mettere le cose in ordine confini con un problema che potrebbe riscrivere la matematica è il dramma silenzioso della teoria della complessità.</p>`,
          facts: [
            { e: '🔐', t: `La crittografia RSA si basa sulla difficoltà della fattorizzazione di interi (creduta NP-intermedia) — il miglior algoritmo noto gira in exp(O(n^{1/3})), non in tempo polinomiale.` },
            { e: '💾', t: `Gli algoritmi di ordinamento cache-oblivious (Frigo et al., 1999) raggiungono prestazioni di cache ottimali a tutte le dimensioni di cache simultaneamente usando una struttura ricorsiva.` },
            { e: '🧬', t: `La costruzione di suffix array in O(n log n) (o O(n) con SA-IS) è il cavallo da tiro dell'assemblaggio del genoma — ordinare i ~3 miliardi di suffissi del genoma umano.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Teorema Master', e: 'T(n) = a\\,T(n/b) + f(n)' },
            { n: 'Caso del Merge Sort', e: 'f(n)=\\Theta(n^{\\log_b a}) \\Rightarrow T=\\Theta(n^{\\log_b a}\\log n)' },
            { sep: 1 },
            { n: 'Limite inferiore dei confronti', e: 'h \\ge \\log_2(n!) = \\Omega(n \\log n)' },
            { n: 'Stirling', e: '\\log(n!) = n \\log n - n + O(\\log n)' },
            { sep: 1 },
            { n: 'QuickSort medio', e: 'E[T(n)] = 2n H_n - 2n = O(n \\log n)', c: 'H_n = n-esimo numero armonico' },
            { n: 'Radix Sort', e: 'T(n) = O(d(n+k))', c: 'd cifre, base k' },
          ] }, sim: 'sorting',
        },
      },
    },
    ml: {
      title: 'Machine learning e reti neurali',
      teaser: 'Come fa un computer a imparare a riconoscere il tuo volto, tradurre lingue e battere i campioni del mondo a scacchi — senza mai essere programmato esplicitamente?',
      chips: ['Reti neurali', 'Discesa del gradiente', 'IA'],
      lvls: {
        junior: {
          title: `Computer che imparano dall'esperienza!`,
          body: `<p>Pensa a insegnare a un cane a sedersi. Non gli consegni un regolamento — glielo mostri, lo premi quando ci arriva, lo correggi gentilmente quando non ci riesce, e dopo abbastanza tentativi semplicemente <em>lo sa</em>. Il <strong>machine learning</strong> funziona quasi esattamente così, tranne che il "cane" è un programma e i "premietti" sono numeri — punteggi che salgono quando ha ragione e scendono quando ha torto.</p>
<p>La programmazione ordinaria significa dettare a mano ogni regola: "se l'email dice 'lotteria', chiamala spam." Ma lo spam che schiva la parola passa dritto. Un sistema di machine learning prende l'approccio opposto — dagli in pasto migliaia di spam veri ed email vere e va a caccia di schemi che nessun umano penserebbe mai a scrivere, poi costruisce le proprie regole da zero.</p>
<p>La versione più potente di oggi impila <strong>reti neurali</strong> — strati di minuscole unità matematiche vagamente modellate sulle cellule del cervello. Ognuna riceve numeri, li moltiplica per pesi che ha imparato, e passa il risultato lungo la catena. Collega milioni di queste insieme, addestrale su miliardi di esempi, e ottieni la cosa che sblocca il tuo telefono col tuo volto, traduce cento lingue al volo e dipinge quadri da una frase. Nella simulazione qui sotto, guarda una piccola rete imparare a distinguere due tipi di puntini, dal vivo.</p>`,
          facts: [
            { e: '👁️', t: `La rete neurale dietro il riconoscimento facciale moderno raggiunge il 99,7% di accuratezza — superando il punteggio umano medio del 97,5% sullo stesso benchmark.` },
            { e: '♟️', t: `AlphaZero imparò gli scacchi da zero in 9 ore senza alcuna conoscenza umana tranne le regole — poi sconfisse in modo convincente il miglior motore scacchistico del mondo.` },
            { e: '🌡️', t: `DeepMind di Google ridusse del 40% l'energia usata per raffreddare i suoi data center con una rete neurale — risparmiando la stessa energia che si otterrebbe togliendo 100.000 auto dalla strada.` },
          ],
          formula: null, sim: 'ml',
        },
        student: {
          title: `Discesa del gradiente, retropropagazione e il teorema di approssimazione universale`,
          body: `<p>Una rete di \\(L\\) strati è solo una grande funzione annidata, \\(f(x) = W_L\\,\\sigma(W_{L-1}\\,\\sigma(\\cdots \\sigma(W_1 x + b_1)\\cdots) + b_{L-1}) + b_L\\), dove ogni \\(\\sigma\\) è una non linearità — ReLU \\(\\sigma(z)=\\max(0,z)\\) o sigmoide \\(\\sigma(z)=1/(1+e^{-z})\\) — e i pesi \\(W_i\\) e i bias \\(b_i\\) sono ciò che la rete impara. Senza le \\(\\sigma\\) l'intera pila collasserebbe in un'unica mappa lineare; è la non linearità a permettere alla profondità di comprarti qualcosa. Addestrare significa regolare \\(\\theta=\\{W_i,b_i\\}\\) per ridurre una perdita, diciamo la cross-entropy \\(L = -\\sum_i y_i \\log \\hat{y}_i\\).</p>
<p>La <strong>discesa del gradiente</strong> spinge ogni parametro in discesa su quella perdita: \\(\\theta \\leftarrow \\theta - \\eta\\,\\nabla_\\theta L\\), con \\(\\eta\\) il tasso di apprendimento. Il trucco che la rende fattibile su miliardi di parametri è la <strong>retropropagazione</strong> — la regola della catena eseguita all'indietro attraverso la rete, riusando il lavoro di ogni strato così che un solo passaggio calcola tutti i gradienti. In pratica stimi \\(\\nabla_\\theta L\\) su piccoli <em>mini-batch</em> casuali (discesa del gradiente stocastica), rumorosa ma economica, e ottimizzatori adattivi come Adam mantengono un passo separato per parametro per convergere più in fretta.</p>
<p>Perché mai dovrebbe funzionare? Il <strong>teorema di approssimazione universale</strong> (Cybenko 1989, Hornik 1991) dimostra che un singolo strato nascosto, dati abbastanza neuroni, può imitare <em>qualsiasi</em> funzione continua con la precisione che vuoi. Ma "abbastanza" può essere un numero astronomico; è la profondità a renderlo pratico, rappresentando in modo compatto ciò per cui una rete poco profonda avrebbe bisogno di esponenzialmente più neuroni. La vera lotta non è adattarsi ai dati di addestramento — è <strong>generalizzare</strong> a dati nuovi, e strumenti come dropout, weight decay e batch normalization esistono per impedire a una rete di limitarsi a memorizzare i suoi esempi.</p>`,
          facts: [
            { e: '📊', t: `GPT-4 ha una stima di 1,8 mila miliardi di parametri su 120 strati — addestrato su ~13 mila miliardi di token di testo usando circa 25.000 GPU A100 per 90 giorni.` },
            { e: '🎨', t: `Le reti neurali convoluzionali (CNN) imparano automaticamente feature gerarchiche: i primi strati rilevano bordi, quelli intermedi forme, quelli profondi volti o oggetti.` },
            { e: '⚠️', t: `I gradienti che svaniscono afflissero le reti profonde fino al 2015: i gradienti si restringono esponenzialmente con la profondità, impedendo l'apprendimento. Le attivazioni ReLU e le connessioni residue (ResNet) lo risolsero.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Passaggio in avanti', e: 'a^{(l)} = \\sigma\\!\\left(W^{(l)} a^{(l-1)} + b^{(l)}\\right)' },
            { n: 'Perdita cross-entropy', e: 'L = -\\sum_i y_i \\log \\hat{y}_i' },
            { sep: 1 },
            { n: 'Discesa del gradiente', e: '\\theta \\leftarrow \\theta - \\eta\\,\\nabla_\\theta L' },
            { n: 'Retropropagazione (regola della catena)', e: '\\dfrac{\\partial L}{\\partial W^{(k)}} = \\delta^{(k)} \\left(a^{(k-1)}\\right)^{\\!\\top}' },
            { sep: 1 },
            { n: 'Attivazione ReLU', e: '\\sigma(z) = \\max(0, z)' },
            { n: 'Approssimazione universale', e: '\\forall\\varepsilon>0,\\; \\exists f_\\theta:\\; \\|f - f_\\theta\\|_\\infty < \\varepsilon', c: 'Cybenko 1989' },
          ] }, sim: 'ml',
        },
        scholar: {
          title: `Paesaggio di ottimizzazione, teoria della generalizzazione e Transformer`,
          body: `<h4><span class="hn">01</span>Il paesaggio della perdita non è la trappola che temevamo</h4>
<p>La perdita \\(L(\\theta)\\) di una rete profonda è selvaggiamente non convessa in milioni di dimensioni, e per anni si temette che la discesa del gradiente restasse bloccata in cattivi minimi locali. Le alte dimensioni si rivelarono più gentili del previsto. Quasi ogni punto critico è una <em>sella</em>, non un minimo — per essere un vero minimo, tutti gli oltre un milione di autovalori dell'hessiana devono capitare positivi, il che è enormemente improbabile — e i minimi locali che esistono siedono perlopiù vicino a quello globale (Dauphin et al., 2014). L'ottimizzatore scivola giù dalle selle anziché annegare nelle trappole.</p>
<h4><span class="hn">02</span>I minimi piatti generalizzano; quelli aguzzi no</h4>
<p>Non tutti i minimi sono uguali. La ripidità di una soluzione — il più grande autovalore dell'hessiana \\(\\lambda_{\\max}(\\partial^2 L/\\partial\\theta^2)\\) — traccia quanto bene generalizza: i bacini ampi e piatti perdonano le piccole perturbazioni e tendono a trasferirsi a dati nuovi, mentre le punte aguzze fanno overfitting. La Sharpness-Aware Minimization lo rende esplicito, ottimizzando la perdita peggiore in un intorno, \\(\\min_\\theta \\max_{\\|\\varepsilon\\|\\le\\rho} L(\\theta+\\varepsilon)\\), e alzando in modo affidabile l'accuratezza sul test. Vuoi la valle più ampia, non semplicemente il punto più basso.</p>
<h4><span class="hn">03</span>L'enigma della sovraparametrizzazione</h4>
<p>La teoria classica dell'apprendimento dice che un modello con molti più parametri che punti dati dovrebbe fare overfitting in modo catastrofico. Le reti profonde fanno l'opposto — adattano perfettamente il set di addestramento e generalizzano comunque, uno stato ora chiamato <em>overfitting benigno</em>. Limiti PAC-Bayes come \\(L(f) \\le \\hat{L}(f) + \\sqrt{\\tfrac{\\mathrm{KL}(Q\\|P) + \\ln(n/\\delta)}{2n}}\\) possono restare non vacui anche qui quando la prior è scelta bene, ma il riassunto onesto è che abbiamo una teoria funzionante solo a pezzi. Una delle tecnologie di maggior successo del campo non è ancora del tutto spiegata.</p>
<h4><span class="hn">04</span>Doppia discesa e il bias della SGD</h4>
<p>Spingi oltre il punto in cui un modello può memorizzare esattamente i dati — la soglia di interpolazione — e accade qualcosa di strano: l'errore sul test, dopo aver toccato un picco, <em>cala di nuovo</em>. Questa curva a <strong>doppia discesa</strong> ribalta in silenzio la vecchia storia bias-varianza. Parte della risposta è che la discesa del gradiente stocastica ha un <em>bias implicito</em>: fra le infinite configurazioni di parametri che adattano i dati, deriva verso quelle a norma bassa, "semplici". Il regolarizzatore si nascondeva nell'ottimizzatore da sempre.</p>
<h4><span class="hn">05</span>Il Transformer e la self-attention</h4>
<p>Quasi tutti i modelli di frontiera di oggi sono <strong>Transformer</strong> (Vaswani et al., 2017), che buttarono via la ricorrenza in favore della <em>self-attention</em>: \\(\\mathrm{Attention}(Q,K,V) = \\mathrm{softmax}\\!\\left(\\tfrac{QK^\\top}{\\sqrt{d_k}}\\right)V\\). Ogni token si confronta con ogni altro e tira dentro una miscela pesata dei loro valori — costo quadratico \\(O(n^2)\\), ma solo \\(O(1)\\) di profondità sequenziale, così si parallelizza su un'intera sequenza in un colpo. Impila molte di queste teste, ognuna che impara uno schema di relazioni diverso, aggiungi codifiche posizionali per l'ordine, e hai il motore dietro i moderni modelli linguistici.</p>
<h4><span class="hn">06</span>Leggi di scala: intelligenza che puoi mettere a budget</h4>
<p>Il fatto empirico più strano del deep learning è quanto sia <em>prevedibile</em> su larga scala. La perdita sul test cala come una pulita legge di potenza in dimensione del modello, dati e calcolo attraverso sette ordini di grandezza. L'analisi Chinchilla (Hoffmann et al., 2022) inchiodò la ricetta ottimale: per un budget di calcolo \\(C\\), fai crescere parametri e token di addestramento insieme, all'incirca \\(N \\propto C^{0.5}\\) e \\(D \\propto C^{0.5}\\). Che la capacità si possa alzare spendendo di più — anziché aspettare una nuova idea — è esattamente ciò che trasformò il deep learning da curiosità di ricerca a industria.</p>`,
          facts: [
            { e: '🔢', t: `Il fenomeno del "grokking": le reti possono saltare improvvisamente dalla memorizzazione alla vera generalizzazione milioni di passi di addestramento dopo aver raggiunto il 100% di accuratezza sull'addestramento.` },
            { e: '🌐', t: `L'attenzione dei Transformer equivale a un singolo passo di discesa del gradiente su una memoria associativa (rete di Hopfield) — collegando i moderni LLM ai modelli di memoria degli anni '80.` },
            { e: '📉', t: `Le leggi di scala neurali sono leggi di potenza notevolmente precise: la perdita diminuisce come L ∝ N^{-0,076} con i parametri N, mantenendosi attraverso 7 ordini di grandezza di dimensione del modello.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Self-attention', e: '\\mathrm{Attention}(Q,K,V) = \\mathrm{softmax}\\!\\left(\\dfrac{QK^\\top}{\\sqrt{d_k}}\\right)V' },
            { n: 'Multi-testa', e: '\\mathrm{MHA} = \\mathrm{concat}(h_1,\\dots,h_h)\\,W^O' },
            { sep: 1 },
            { n: 'Limite PAC-Bayes', e: 'L(f) \\le \\hat{L}(f) + \\sqrt{\\dfrac{\\mathrm{KL}(Q\\|P) + \\ln(n/\\delta)}{2n}}' },
            { n: 'Obiettivo SAM', e: '\\min_\\theta \\max_{\\|\\varepsilon\\|\\le\\rho} L(\\theta + \\varepsilon)' },
            { sep: 1 },
            { n: 'Scala Chinchilla', e: 'N_{\\text{opt}} \\propto C^{0.5},\\quad D_{\\text{opt}} \\propto C^{0.5}', c: 'token ∝ parametri' },
          ] }, sim: 'ml',
        },
      },
    },
    crypto: {
      title: 'Crittografia e sicurezza',
      teaser: 'Ogni volta che compri qualcosa online, la matematica scherma i tuoi dati dall\'intero internet. Come fa un segreto a restare segreto in pubblico?',
      chips: ['Cifratura', 'RSA', 'Quantistica'],
      lvls: {
        junior: {
          title: `Messaggi segreti e lucchetti inviolabili!`,
          body: `<p>Diciamo che vuoi passare un biglietto a un amico attraverso una stanza affollata dove tutti adorerebbero leggerlo. Ricorri a un <strong>cifrario</strong> — un codice segreto. Il trucco più antico del manuale, usato da Giulio Cesare duemila anni fa, sposta semplicemente ogni lettera di una quantità fissa: A diventa D, B diventa E, e così via. Il tuo amico, che conosce lo spostamento, lo legge all'istante; tutti gli altri vedono un'assurdità.</p>
<p>Ma c'è un intoppo che ha tormentato i creatori di codici per millenni: come dici al tuo amico lo spostamento in primo luogo senza che qualcuno origli? La risposta, trovata solo negli anni '70, sembra un gioco di prestigio — la <strong>crittografia a chiave pubblica</strong>. Immagina un lucchetto che chiunque può far scattare chiuso ma di cui solo tu hai la chiave per aprirlo. Spedisci quel lucchetto aperto al mondo intero; chiunque può chiudervi dentro un messaggio e rispedirlo, e solo tu puoi aprirlo, anche se non hai mai condiviso un segreto.</p>
<p>È così che funziona ogni sito sicuro. Quando il lucchettino compare nel tuo browser, il tuo computer e il server stanno evocando un segreto condiviso allo scoperto — proprio sotto il naso di qualsiasi origliatore, che se ne va comunque con nulla. Nella simulazione qui sotto, guarda quello scambio di chiavi dispiegarsi un passo alla volta.</p>`,
          facts: [
            { e: '🌐', t: `L'HTTPS cifra oggi oltre il 95% del traffico web. La matematica che protegge le tue password era sostanzialmente inesistente prima del 1976.` },
            { e: '🏦', t: `L'algoritmo RSA, inventato nel 1977, deriva la sua sicurezza dal fatto che moltiplicare due grandi primi richiede millisecondi, ma fattorizzare il risultato richiede più tempo dell'età dell'universo.` },
            { e: '⚛️', t: `I computer quantistici potrebbero rompere la cifratura RSA — ed è per questo che i governi di tutto il mondo stanno già passando a standard di crittografia "post-quantistica".` },
          ],
          formula: null, sim: 'crypto',
        },
        student: {
          title: `RSA, Diffie-Hellman e la matematica delle funzioni a senso unico`,
          body: `<p>L'<strong>RSA</strong> (Rivest–Shamir–Adleman, 1977) poggia su una bella asimmetria: moltiplicare due grandi primi è istantaneo, ma smoltiplicare il risultato — fattorizzarlo — si crede sia praticamente impossibile. Scegli i primi \\(p, q\\), poni \\(n = pq\\) e \\(\\varphi(n) = (p-1)(q-1)\\), scegli un esponente pubblico \\(e\\), e calcola il privato \\(d \\equiv e^{-1} \\pmod{\\varphi(n)}\\). Poi cifratura e decifratura sono solo potenze modulari: \\(c = m^e \\bmod n\\) e \\(m = c^d \\bmod n\\). Si annullano a vicenda perché il teorema di Eulero garantisce \\(m^{\\varphi(n)} \\equiv 1 \\pmod n\\), quindi \\(m^{ed} \\equiv m\\). Recuperare \\(d\\) dalla coppia pubblica \\((e, n)\\) si crede sia difficile quanto fattorizzare \\(n\\) — non dimostrato, ma sicuro a 2048 bit.</p>
<p>Il <strong>Diffie–Hellman</strong> (1976) è il trucco che permette a due sconosciuti di concordare un segreto in piena vista di tutti. Alice e Bob fissano pubblicamente un primo \\(p\\) e un generatore \\(g\\); Alice tiene un segreto \\(a\\) e invia \\(g^a \\bmod p\\), Bob tiene \\(b\\) e invia \\(g^b \\bmod p\\). Ciascuno eleva ciò che ha ricevuto al proprio segreto, ed entrambi atterrano sulla stessa chiave \\(K = g^{ab} \\bmod p\\). Un origliatore vede \\(g, p, g^a, g^b\\) e ancora non può ottenere \\(K\\) senza risolvere il problema del logaritmo discreto — facile da calcolare in avanti, creduto irrealizzabile da invertire.</p>
<p>La matematica a chiave pubblica è lenta, quindi si usa con parsimonia. Le connessioni reali fanno un approccio <strong>ibrido</strong>: Diffie–Hellman (o il suo cugino a curve ellittiche) concorda una chiave, poi un veloce <strong>cifrario simmetrico</strong> come AES cifra il traffico effettivo. A tenere tutto insieme ci sono le <strong>funzioni di hash</strong> (SHA-256, SHA-3), che schiacciano qualsiasi input in un'impronta di dimensione fissa che è a senso unico, resistente alle collisioni e selvaggiamente sensibile — capovolgi un bit di input e circa metà dei bit di output cambiano. Quelle impronte sono ciò che rende possibili firme digitali, certificati e blockchain.</p>`,
          facts: [
            { e: '🔢', t: `La chiave di cifratura RSA-2048 ha 617 cifre decimali. Fattorizzarla col miglior algoritmo noto su tutti i computer attuali richiederebbe più tempo dell'età dell'universo.` },
            { e: '📱', t: `La connessione HTTPS del tuo telefono usa Elliptic Curve Diffie-Hellman (ECDH) — fornendo sicurezza equivalente a RSA con chiavi 20 volte più piccole, grazie alla difficoltà del logaritmo discreto su curve ellittiche.` },
            { e: '🏛️', t: `Il NIST standardizzò i suoi primi algoritmi di crittografia post-quantistica nel 2024 — CRYSTALS-Kyber per lo scambio di chiavi e CRYSTALS-Dilithium per le firme — entrambi basati su problemi reticolari.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Cifratura RSA', e: 'c = m^e \\bmod n' },
            { n: 'Decifratura RSA', e: 'm = c^d \\bmod n,\\quad d \\equiv e^{-1}\\!\\!\\pmod{\\varphi(n)}' },
            { sep: 1 },
            { n: 'Teorema di Eulero', e: 'm^{\\varphi(n)} \\equiv 1 \\pmod n \\;\\Rightarrow\\; m^{ed} \\equiv m' },
            { n: 'Segreto condiviso DH', e: 'K = g^{ab} \\bmod p' },
            { sep: 1 },
            { n: 'Funzione di hash', e: 'H:\\{0,1\\}^{*} \\to \\{0,1\\}^{256}', c: 'a senso unico, resistente alle collisioni' },
            { n: 'Limite del compleanno', e: '\\text{collisione dopo } \\sim\\!\\sqrt{2^{256}} = 2^{128} \\text{ query}' },
          ] }, sim: 'crypto',
        },
        scholar: {
          title: `Sicurezza teorico-informativa, crittografia reticolare e prove a conoscenza zero`,
          body: `<h4><span class="hn">01</span>La segretezza perfetta e il suo prezzo impossibile</h4>
<p>Shannon (1949) fissò il soffitto teorico: un cifrario è <strong>perfettamente segreto</strong> quando il testo cifrato non tradisce assolutamente nulla sul messaggio, \\(P(M=m \\mid C=c) = P(M=m)\\) per ogni \\(m, c\\). Il <strong>cifrario a blocco monouso</strong> (one-time pad) — XOR del messaggio con una chiave davvero casuale usata esattamente una volta, \\(c = m \\oplus k\\) — lo raggiunge, e Shannon dimostrò che è essenzialmente l'<em>unica</em> cosa che lo fa. La stangata è nel requisito: la chiave deve essere lunga quanto il messaggio e mai riusata, quindi per inviare segretamente un gigabyte devi aver già condiviso segretamente un gigabyte. La segretezza perfetta è reale, e quasi inutile.</p>
<h4><span class="hn">02</span>Barattare la perfezione con la praticità</h4>
<p>Tutto ciò che è usabile scende quindi alla <strong>sicurezza computazionale</strong>: un cifrario è "sicuro" se nessun avversario limitato al tempo polinomiale può fare meglio che trascurabilmente meglio del tirare a indovinare. Questo rilocalizza in silenzio tutta la crittografia su terreno non dimostrato — l'RSA si appoggia sulla difficoltà della fattorizzazione, il Diffie–Hellman sui logaritmi discreti, e nessuno di questi è dimostrato intrattabile; una dimostrazione risolverebbe \\(P\\) contro \\(NP\\). Stiamo, in effetti, scommettendo internet su congetture che hanno semplicemente resistito a ogni attacco finora.</p>
<h4><span class="hn">03</span>La minaccia quantistica e la risposta reticolare</h4>
<p>Quella scommessa ha una data di scadenza nota. L'algoritmo di Shor permette a un grande computer quantistico di fattorizzare e prendere logaritmi discreti in tempo polinomiale, demolendo in silenzio l'RSA e il Diffie–Hellman classico. Il rimpiazzo di punta è la <strong>crittografia reticolare</strong>, costruita su <em>Learning With Errors</em>: dati molti campioni rumorosi \\(b_i = \\langle a_i, s\\rangle + e_i \\bmod q\\), recuperare il segreto \\(s\\) appare difficile persino per una macchina quantistica. I primi standard post-quantistici del NIST (2024) sono schemi reticolari, e la migrazione è già in corso.</p>
<h4><span class="hn">04</span>Calcolare su dati che non puoi leggere</h4>
<p>I reticoli sbloccarono qualcosa un tempo ritenuto impossibile: la <strong>cifratura completamente omomorfa</strong> (Gentry, 2009), dove un server calcola direttamente sul testo cifrato, \\(f(\\mathrm{Enc}(x)) = \\mathrm{Enc}(f(x))\\), e restituisce una risposta cifrata che non ha mai effettivamente visto. Puoi eseguire una ricerca, addestrare un modello o interrogare un database con i dati che restano sigillati per tutto il tempo. La prima FHE era un milione di volte troppo lenta; gli schemi moderni l'hanno riportata verso qualche centinaio di volte, spostandola da esperimento mentale verso il dispiegamento.</p>
<h4><span class="hn">05</span>Dimostrare di conoscere un segreto senza rivelarlo</h4>
<p>Le <strong>prove a conoscenza zero</strong> (Goldwasser–Micali–Rackoff, 1985) realizzano un vero paradosso: un dimostratore convince un verificatore che un'affermazione è vera pur rivelando nulla oltre la sua verità. Le tre richieste sono completezza (le prove oneste convincono sempre), solidità (le affermazioni false quasi mai passano) e conoscenza zero (il verificatore non impara nulla che non avrebbe potuto inventarsi da solo). Puoi dimostrare di conoscere una password senza pronunciarla, o che una transazione è valida senza svelarne l'importo.</p>
<h4><span class="hn">06</span>Prove succinte e dove sta andando tutto ciò</h4>
<p>I cavalli da tiro moderni sono le <strong>zk-SNARK</strong> — prove che sono sia non interattive sia sorprendentemente compatte, una costante \\(O(1)\\) in dimensione e verificabili in millisecondi per quanto vasto sia il calcolo che attestano. Già alimentano valute che preservano la privacy, credenziali anonime e calcolo esternalizzato verificabile, e stanno strisciando verso il dimostrare che uno specifico modello di IA ha prodotto uno specifico output senza esporre il modello o l'input. Una curiosità un tempo liquidata come pura teoria si sta trasformando in infrastruttura fondamentale.</p>`,
          facts: [
            { e: '🔮', t: `Una prova zk-SNARK che una rete neurale ha prodotto uno specifico output può essere generata e verificata — senza rivelare i pesi del modello o i dati di input.` },
            { e: '🧮', t: `Il problema LWE è così difficile che persino un computer quantistico che esegue l'algoritmo di Shor (che rompe RSA) non può risolverlo — non si conosce alcuna accelerazione quantistica.` },
            { e: '🏆', t: `Il premio Turing 2012 andò a Silvio Micali e Shafi Goldwasser per aver inventato le prove a conoscenza zero — originariamente considerate una curiosità puramente teorica.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Segretezza perfetta', e: 'P(M=m \\mid C=c) = P(M=m)\\quad \\forall\\, m,c' },
            { n: 'Cifrario a blocco monouso', e: 'c = m \\oplus k,\\quad |k| = |m|', c: 'k uniforme, usata una volta' },
            { sep: 1 },
            { n: 'Campione LWE', e: 'b_i = \\langle a_i, s\\rangle + e_i \\pmod q', c: 'e_i piccolo rumore' },
            { n: 'Proprietà omomorfa', e: 'f(\\mathrm{Enc}(x)) = \\mathrm{Enc}(f(x))' },
            { sep: 1 },
            { n: 'Garanzie ZKP', e: '\\text{completezza} + \\text{solidità} + \\text{conoscenza zero}' },
            { n: 'Dimensione prova zk-SNARK', e: '|\\pi| = O(1)', c: 'indipendente dalla dimensione del circuito' },
          ] }, sim: 'crypto',
        },
      },
    },
    complexity: {
      title: 'Computazione e complessità',
      teaser: 'Alcuni problemi sono facili. Alcuni sono difficili. E alcuni sono dimostrabilmente impossibili — per quanto veloce diventi il tuo computer. Perché?',
      chips: ['Turing', 'P vs NP', 'Decidibilità'],
      lvls: {
        junior: {
          title: `Cosa possono davvero fare i computer — e cosa no?`,
          body: `<p>I computer sembrano inarrestabili — fanno atterrare razzi, stracciano i grandi maestri a scacchi, dipingono scene fotorealistiche da una frase. Ed ecco una vera scossa: ci sono problemi che <em>nessun</em> computer, per quanto veloce o enorme o astutamente programmato, risolverà mai. Non perché non abbiamo ancora costruito la macchina giusta, ma perché è <strong>matematicamente impossibile</strong>, punto.</p>
<p>Alan Turing lo dimostrò nel 1936 — prima ancora che esistessero i computer veri. Non si può scrivere alcun programma che decida in modo affidabile se un dato programma finirà prima o poi o girerà per sempre. Si chiama <strong>problema della fermata</strong>, ed è dimostrabilmente irrisolvibile. Il trucco di Turing fu pura logica: se un tale verificatore esistesse, potresti puntarlo su sé stesso e fabbricare una contraddizione, esattamente come la frase "Questa affermazione è falsa."</p>
<p>Oltre ciò che è impossibile sta la domanda di ciò che è semplicemente <em>difficile</em>. Ordinare una lista richiede millisecondi; trovare il tour più breve attraverso 1.000 città sembra esigere di provare un numero sbalorditivo di combinazioni, senza speranza persino per un supercomputer. La più grande domanda aperta dell'informatica — e uno dei grandi problemi irrisolti di tutta la matematica — è se quei problemi difficili siano davvero difficili, o se siamo semplicemente stati troppo lenti a scorgere una scorciatoia. È <strong>P vs NP</strong>, e c'è un premio da 1.000.000 di dollari ad aspettare chi lo risolverà.</p>`,
          facts: [
            { e: '💰', t: `Il Clay Mathematics Institute offre 1.000.000 di dollari per risolvere P vs NP — è aperto dal 1971 e la maggior parte degli esperti crede che P ≠ NP, ma nessuno riesce a dimostrarlo.` },
            { e: '🔐', t: `Tutta la sicurezza internet moderna assume P ≠ NP. Se P = NP, la cifratura potrebbe essere rotta all'istante e l'intero sistema finanziario collasserebbe.` },
            { e: '♟️', t: `Gli scacchi sono "risolti" in linea di principio — esiste il gioco perfetto — ma calcolarlo richiederebbe più operazioni di quanti atomi ci siano nell'universo osservabile.` },
          ],
          formula: null, sim: 'complexity',
        },
        student: {
          title: `Macchine di Turing, decidibilità e lo zoo della complessità`,
          body: `<p>Una <strong>macchina di Turing</strong> è la computazione ridotta all'osso: un nastro infinito, una testina che legge e scrive una casella, e una manciata di stati con regole \\(\\delta(\\text{stato}, \\text{simbolo}) \\to (\\text{stato}', \\text{simbolo}', \\text{movimento})\\). Sembra assurdamente primitiva, eppure la tesi di Church–Turing sostiene che qualsiasi cosa sia calcolabile è calcolabile da una di queste. E una singola <strong>macchina di Turing universale</strong>, ricevuta la descrizione di qualsiasi altra, può imitarla perfettamente — il seme teorico di ogni computer general-purpose che tu abbia mai usato.</p>
<p>Il <strong>problema della fermata</strong> di Turing salta fuori per <em>diagonalizzazione</em>. Supponi che un decisore \\(H(M, w)\\) sappia sempre dire se la macchina \\(M\\) si ferma sull'input \\(w\\). Costruisci un guastafeste \\(D(M)\\) che esegue \\(H(M, M)\\) e poi fa l'opposto — gira all'infinito se \\(H\\) dice "si ferma", si ferma se \\(H\\) dice "gira all'infinito". Ora dai a \\(D\\) la propria descrizione: \\(D(D)\\) si ferma esattamente quando non lo fa. Contraddizione, quindi \\(H\\) non può esistere. Il teorema di Rice generalizza il danno: <em>ogni</em> domanda non banale su cosa fa un programma è indecidibile, ed è per questo che il controllo automatico perfetto dei bug è fuori discussione.</p>
<p>Fra i problemi che <em>sono</em> risolvibili, ordiniamo per costo. <strong>P</strong> è tutto ciò che è decidibile in tempo polinomiale; <strong>NP</strong> è tutto ciò la cui risposta, una volta indovinata, può essere <em>verificata</em> in tempo polinomiale — Sudoku, colorazione di grafi, fattorizzazione. Un problema è <strong>NP-completo</strong> se è in NP e ogni altro problema NP si riduce a esso, quindi è difficile quanto l'intera classe in un colpo. Cook e Levin (1971) dimostrarono che la soddisfacibilità booleana (SAT) è uno di questi, e migliaia di problemi quotidiani si sono da allora uniti a esso. Risolvine uno solo efficientemente e hai dimostrato \\(P = NP\\) — e li hai risolti tutti.</p>`,
          facts: [
            { e: '🗺️', t: `Il problema del commesso viaggiatore (TSP) è NP-difficile: i migliori algoritmi esatti per 1.000 città richiedono ancora tempo astronomico — eppure il TSP guida la logistica reale di FedEx e UPS.` },
            { e: '🧬', t: `Il ripiegamento delle proteine fu a lungo ritenuto computazionalmente intrattabile — un problema PSPACE. AlphaFold di DeepMind lo risolse euristicamente col deep learning, vincendo il Nobel per la Chimica 2024.` },
            { e: '🎮', t: `Molti videogiochi classici sono NP-difficili: Super Mario Bros., Tetris, Campo Minato e Candy Crush sono tutti dimostrabilmente difficili quanto SAT nel caso generale.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Transizione della MT', e: '\\delta: Q \\times \\Gamma \\to Q \\times \\Gamma \\times \\{L, R\\}' },
            { n: 'Tesi di Church–Turing', e: '\\text{calcolabile} \\iff \\text{MT-calcolabile}', c: 'congettura' },
            { sep: 1 },
            { n: 'Classe P', e: '\\text{decidibile in tempo } O(n^k)' },
            { n: 'Classe NP', e: '\\text{certificato verificabile in tempo poly}' },
            { sep: 1 },
            { n: 'NP-completezza', e: "L \\in NP \\;\\wedge\\; \\forall L' \\in NP:\\, L' \\le_p L" },
            { n: 'Cook–Levin', e: '\\text{SAT è NP-completo}', c: '1971' },
          ] }, sim: 'complexity',
        },
        scholar: {
          title: `Complessità dei circuiti, computazione randomizzata e i limiti della dimostrazione`,
          body: `<h4><span class="hn">01</span>P vs NP come domanda sulla dimensione dei circuiti</h4>
<p>Un angolo promettente su \\(P\\) vs \\(NP\\) lo riformula in hardware. Qualsiasi computazione può essere disposta come un <strong>circuito</strong> booleano — un grafo di porte AND, OR e NOT — e il suo costo è il numero di porte. Tutto ciò che è in \\(P\\) ha circuiti di dimensione polinomiale, quindi se potessi dimostrare che qualche problema \\(NP\\) richiede <em>superpolinomialmente</em> tante porte, avresti separato le classi. Il piano è pulito; l'esecuzione si è rivelata brutale.</p>
<h4><span class="hn">02</span>Le funzioni difficili esistono — solo che non riusciamo a indicarne una</h4>
<p>Curiosamente, sappiamo che le funzioni difficili sono ovunque. Un semplice argomento di conteggio (Shannon) mostra che quasi ogni funzione booleana su \\(n\\) bit richiede un circuito di dimensione \\(\\Omega(2^n/n)\\) — astronomicamente grande — quindi la stragrande maggioranza delle funzioni è difficile. L'intoppo è che l'argomento è non costruttivo: dimostra che le funzioni difficili abbondano senza nominarne una sola. Per funzioni esplicite in \\(NP\\), i migliori limiti inferiori che qualcuno abbia dimostrato restano vicini a \\(\\Omega(n \\log n)\\), una distanza risibile dall'esponenziale. Siamo circondati da problemi difficili e non riusciamo a dimostrarne difficile quasi nessuno.</p>
<h4><span class="hn">03</span>La barriera delle prove naturali</h4>
<p>Peggio, ci sono prove che le strategie ovvie <em>non possano</em> funzionare. Razborov e Rudich (1994) mostrarono che qualsiasi prova "naturale" — costruttiva e applicabile alla maggior parte delle funzioni, come lo sono quasi tutti gli argomenti sui circuiti — se dimostrasse forti limiti inferiori, ti consegnerebbe anche un algoritmo per rompere i generatori pseudocasuali crittografici. Così una prova naturale di \\(P \\ne NP\\) distruggerebbe le stesse funzioni a senso unico che la crittografia moderna assume esistano. Gli strumenti che sembrano ovvi sono dimostrabilmente troppo grossolani.</p>
<h4><span class="hn">04</span>Le altre mura: relativizzazione e algebrizzazione</h4>
<p>Altre due barriere cingono il campo. La maggior parte delle tecniche classiche <em>relativizza</em> — funzionerebbe ancora se ogni macchina avesse un oracolo magico — eppure esistono mondi con oracolo dove \\(P = NP\\) e altri dove \\(P \\ne NP\\), quindi nessuna prova che relativizza può deciderlo. I metodi algebrici che risolsero \\(IP = PSPACE\\) schivano quello ma colpiscono la successiva barriera dell'<em>algebrizzazione</em>. Fra loro, tre barriere escludono essenzialmente ogni metodo che abbiamo attualmente — ed è per questo che una risoluzione richiederebbe un'idea genuinamente nuova, non una versione più affilata di una vecchia.</p>
<h4><span class="hn">05</span>La casualità è davvero necessaria?</h4>
<p>Un filo diverso chiede se il lancio di monete aggiunga vera potenza. <strong>BPP</strong> è ciò che puoi risolvere in tempo polinomiale ammettendo un piccolo errore a due code, e per decenni sembrò strettamente più ricco di \\(P\\). La sorpresa (Impagliazzo–Wigderson, 1997) è che probabilmente non lo è: <em>se</em> esistono funzioni sufficientemente difficili, allora \\(BPP = P\\) e ogni algoritmo randomizzato può essere derandomizzato. La difficoltà, il cattivo della storia P-vs-NP, si rivela esattamente ciò che servirebbe per rendere la casualità superflua.</p>
<h4><span class="hn">06</span>Prove interattive e uno shock dal 2020</h4>
<p>Lascia che un verificatore interroghi un dimostratore e la portata della computazione si espande in modo sbalorditivo. Shamir dimostrò \\(IP = PSPACE\\): qualsiasi cosa risolvibile in memoria polinomiale può essere <em>verificata</em> tramite conversazione. Aggiungi più dimostratori che condividono entanglement quantistico ed esplode fino a \\(MIP^* = RE\\) (Ji et al., 2020) — l'intera classe dei problemi ricorsivamente enumerabili, inclusi quelli indecidibili. Quel risultato non solo sbalordì i teorici della complessità; risolse la congettura di immersione di Connes nell'algebra degli operatori pura, un promemoria che la teoria della computazione ora si spinge negli angoli remoti della matematica.</p>`,
          facts: [
            { e: '🎲', t: `Il lemma di Schwartz-Zippel sta alla base del test di identità dei polinomi — il miglior algoritmo noto è randomizzato, e derandomizzarlo implicherebbe limiti inferiori sui circuiti che separano P da NP.` },
            { e: '🌀', t: `MIP* = RE (2020) significa che dimostratori quantisticamente entangled possono convincere un verificatore di fatti indecidibili — il risultato più sorprendente della teoria della complessità in decenni.` },
            { e: '🔬', t: `La barriera dell'algebrizzazione mostra che le tecniche che usano metodi algebrici — che dimostrarono IP=PSPACE — non possono da sole risolvere P vs NP, restringendo lo spazio delle possibili strategie di dimostrazione.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Limite inferiore sui circuiti', e: '\\exists f \\in NP:\\; \\text{size}(f) = \\Omega(2^n/n)', c: 'conteggio di Shannon' },
            { n: 'Miglior limite esplicito', e: '\\text{size}(f) \\ge \\Omega(n \\log n)', c: 'lontano dall\'esponenziale' },
            { sep: 1 },
            { n: 'Classe randomizzata', e: 'BPP:\\; \\text{tempo poly, errore} \\le \\tfrac{1}{3}' },
            { n: 'Derandomizzazione', e: '\\text{esistono funzioni difficili} \\Rightarrow BPP = P' },
            { sep: 1 },
            { n: 'Prove interattive', e: 'IP = PSPACE', c: 'Shamir 1992' },
            { n: 'Dimostratori quantistici', e: 'MIP^{*} = RE', c: 'Ji et al. 2020' },
          ] }, sim: 'complexity',
        },
      },
    },
    ecosystem: {
      title: 'Ecosistemi e reti alimentari',
      teaser: 'Rimuovi una specie da una foresta e l\'intero sistema può collassare. Ogni essere vivente è connesso in una rete di energia e dipendenza.',
      chips: ['Reti alimentari', 'Energia', 'Biodiversità'],
      lvls: {
        junior: {
          title: `La rete della natura — tutto mangia tutto!`,
          body: `<p>Immagina un prato d'estate. L'erba beve la luce del sole e cresce; una cavalletta mangia l'erba; una rana mangia la cavalletta; un serpente mangia la rana; un falco mangia il serpente. Ogni anello si appoggia a quelli sotto di sé per cibo ed energia. Quella catena del mangiare ed essere mangiati è una <strong>catena alimentare</strong> — e un ecosistema reale ne cuce insieme centinaia in un'aggrovigliata <strong>rete alimentare</strong>.</p>
<p>Ogni briciola di quell'energia risale al Sole. Piante e alghe catturano la luce solare con la <strong>fotosintesi</strong> e la mettono in banca come zucchero — i <strong>produttori</strong>. Gli animali che mangiano piante sono consumatori primari, quelli che mangiano loro sono consumatori secondari, e così su lungo la catena. Ma ecco la regola che plasma tutto: a ogni passo, circa il <strong>90% dell'energia si disperde come calore</strong>. È per questo che ci sono sempre molte più piante che erbivori, e molti più erbivori che cacciatori. Semplicemente non puoi avere più leoni che gnu.</p>
<p>Togli una specie e l'intera rete può sbandare in modi che nessuno vede arrivare. Quando i lupi furono sterminati da Yellowstone, i wapiti si moltiplicarono e spogliarono le rive dei fiumi; i fiumi si erosero e cambiarono corso, e i pesci crollarono — un intero paesaggio che si disfaceva perché mancava un predatore. Riporta i lupi, come fecero i ranger nel 1995, e il sistema si ricuce lentamente. Gli ecologi chiamano tali animali <strong>specie chiave</strong>: la loro presa sull'ecosistema è selvaggiamente sproporzionata rispetto al loro numero.</p>`,
          facts: [
            { e: '🌳', t: `Una singola grande quercia può sostenere oltre 500 specie di insetti, uccelli e funghi — un ecosistema-albero dentro un ecosistema.` },
            { e: '🐺', t: `Dopo il ritorno dei lupi a Yellowstone nel 1995, innescarono una "cascata trofica" che cambiò il corso dei fiumi — il loro effetto si propagò per l'intera rete alimentare.` },
            { e: '🌊', t: `Il fitoplancton negli oceani produce circa il 50% di tutto l'ossigeno della Terra — più di tutte le foreste pluviali del mondo messe insieme.` },
          ],
          formula: null, sim: 'ecosystem',
        },
        student: {
          title: `Flusso di energia, dinamiche trofiche e le equazioni di Lotka-Volterra`,
          body: `<p>Un ecosistema è un sistema termodinamico aperto: l'energia entra a fiotti come luce solare, sale attraverso i livelli trofici e fuoriesce come calore. La <strong>regola del 10%</strong> di Lindeman (1942) nomina la perdita — solo circa un decimo dell'energia a un livello arriva alla biomassa del successivo, il resto speso in respirazione, rifiuti e decomposizione. Quella tassa brutale è il motivo per cui le catene alimentari raramente superano i quattro o cinque anelli: semplicemente non resta nulla per nutrire un sesto. Tutto poggia sulla <strong>produzione primaria netta</strong>, i circa 120 petagrammi di carbonio che i produttori fissano nel mondo ogni anno.</p>
<p>Riduci predatore e preda all'essenziale e ottieni le <strong>equazioni di Lotka–Volterra</strong> (1925–26): le prede \\(N\\) si riproducono al tasso \\(r\\) ma vengono mangiate in proporzione agli incontri \\(aNP\\), mentre i predatori \\(P\\) crescono su ciò che catturano e muoiono di fame al tasso \\(d\\) — \\(\\dfrac{dN}{dt} = rN - aNP\\) e \\(\\dfrac{dP}{dt} = eaNP - dP\\). I due girano attorno a un equilibrio condiviso \\(N^{*} = d/ea\\), \\(P^{*} = r/a\\) in un'oscillazione infinita e sfasata — esattamente il ciclo lince–lepre di ~10 anni che i registri delle pellicce della Hudson's Bay hanno conservato per novant'anni.</p>
<p>Allarga lo sguardo all'intera rete e subentra la matematica delle reti. La sua <em>connettanza</em> \\(C = L/S^2\\) — collegamenti realizzati su tutti quelli possibili — governa la stabilità, e il risultato di May del 1972 fu controintuitivo: una comunità cablata a caso regge solo se \\(\\sqrt{SC}\\,\\sigma < 1\\), quindi reti più grandi e più connesse sono <em>più difficili</em> da stabilizzare, non più facili. Gli ecosistemi reali sfuggono a questo paradosso diversità–stabilità con interazioni perlopiù <em>deboli</em> e una struttura <em>modulare</em> che impedisce a un collasso locale di propagarsi. Le specie chiave sono l'eccezione lampante — poche di numero ma forti d'influenza, ed è per questo che perderne una pesa così tanto.</p>`,
          facts: [
            { e: '🎣', t: `Il collasso della pesca del merluzzo dei Grand Banks nel 1992 rimosse ~99% della popolazione di merluzzo in pochi decenni — nonostante la storia evolutiva di 200 milioni di anni del pesce in quelle acque.` },
            { e: '🌺', t: `Le reti fungine micorriziche collegano gli alberi in una foresta, trasferendo carbonio e nutrienti fra individui — il "Wood Wide Web" permette agli alberi-madre di nutrire le piantine.` },
            { e: '🦈', t: `Rimuovere gli squali da un ecosistema innesca una cascata trofica: le loro prede (le razze) esplodono di numero e devastano le popolazioni di capesante — come documentato al largo della costa orientale degli USA.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Lotka–Volterra (preda)', e: '\\dfrac{dN}{dt} = rN - aNP' },
            { n: 'Lotka–Volterra (predatore)', e: '\\dfrac{dP}{dt} = eaNP - dP' },
            { sep: 1 },
            { n: 'Equilibrio', e: 'N^{*} = \\dfrac{d}{ea},\\quad P^{*} = \\dfrac{r}{a}' },
            { n: 'Regola del 10% (Lindeman)', e: '\\text{PPN}_{n+1} \\approx 0.1 \\times \\text{PPN}_n' },
            { sep: 1 },
            { n: 'Connettanza', e: 'C = L/S^2' },
            { n: 'Criterio di May', e: '\\sqrt{SC}\\,\\sigma < 1', c: 'per la stabilità' },
          ] }, sim: 'ecosystem',
        },
        scholar: {
          title: `Teoria metabolica dell'ecologia, biodiversità e punti di non ritorno`,
          body: `<h4><span class="hn">01</span>L'ecologia a partire dal metabolismo</h4>
<p>La <strong>teoria metabolica dell'ecologia</strong> (Brown et al., 2004) è una scommessa audace: che gran parte dell'ecologia discenda dalla fisica del metabolismo. Il tasso metabolico di un individuo obbedisce a \\(B = b_0\\, M^{3/4}\\, e^{-E/kT}\\), legandolo alla massa corporea \\(M\\) e alla temperatura \\(T\\), con \\(E \\approx 0.65\\ \\text{eV}\\) l'energia di attivazione tipica delle reazioni biochimiche. Da quest'unica espressione la teoria predice come densità di popolazione, durata della vita, tasso di crescita e persino tasso di mutazione scalano con dimensione e calore — e vale attraverso ben 27 ordini di grandezza di massa corporea.</p>
<h4><span class="hn">02</span>La legge dei tre quarti di Kleiber</h4>
<p>Lo strano esponente al suo cuore è la legge di Kleiber, \\(B \\propto M^{3/4}\\) — non il \\(2/3\\) che ingenuamente ti aspetteresti dal raffreddamento per superficie. West, Brown ed Enquist (1997) lo ricondussero alla geometria: la vita distribuisce le risorse attraverso reti ramificate, riempi-spazio, simili a frattali — vasi sanguigni, xilema delle piante, trachee — e ottimizzare il flusso attraverso una rete del genere impone la potenza \\(3/4\\). È perché il cuore di un topo corre e quello di un elefante arranca, e perché, grammo per grammo, gli animali grandi sono molto più parsimoniosi dei piccoli.</p>
<h4><span class="hn">03</span>Quante specie può ospitare un'isola</h4>
<p>La biodiversità ha le sue leggi quantitative. La <strong>relazione specie–area</strong> \\(S = cA^z\\) (con \\(z \\approx 0.25\\text{–}0.35\\)) dice che la ricchezza sale come una potenza fissa dell'area, e la <strong>biogeografia insulare</strong> di MacArthur e Wilson (1967) spiega perché: il numero di specie si assesta su un equilibrio dinamico in cui il tasso di immigrazione (che cala con la distanza dalla terraferma) incrocia il tasso di estinzione (che cala con la dimensione dell'isola). La ricchezza non è un conteggio statico ma un equilibrio corrente fra arrivo e perdita.</p>
<h4><span class="hn">04</span>Frammentazione e progettazione delle riserve</h4>
<p>Quella teoria porta un risvolto pratico duro. Ritagliare un habitat continuo in frammenti trasforma una terraferma in un arcipelago di piccole "isole", ciascuna condannata a perdere specie lungo la propria curva specie–area — che è esattamente perché la frammentazione erode la biodiversità in modo così prevedibile. Inquadrò anche il lungo dibattito SLOSS — una riserva singola grande o diverse piccole? — e dà alla pianificazione della conservazione una spina dorsale quantitativa anziché una sensazione istintiva.</p>
<h4><span class="hn">05</span>Stati stabili alternativi e punti di non ritorno</h4>
<p>Gli ecosistemi non cambiano sempre in modo liscio. Molti hanno <em>stati stabili alternativi</em>, e una spinta lenta può cacciarli oltre una biforcazione in un regime bruscamente diverso che resiste a tornare indietro. Un lago limpido si ribalta in verde torbido man mano che sale il fosforo; una barriera corallina si ribalta ad alghe; l'Amazzonia, oltre una soglia di deforestazione, potrebbe smettere di fare la propria pioggia e scivolare verso la savana. Questi sono veri <strong>punti di non ritorno</strong> — economici da attraversare, brutalmente costosi da invertire.</p>
<h4><span class="hn">06</span>Sentire l'allarme prima del crollo</h4>
<p>La svolta speranzosa è che i sistemi vicini a un punto di non ritorno possano trasmettere un avvertimento. Man mano che una biforcazione si avvicina, un sistema si riprende sempre più fiaccamente dai piccoli colpi — <em>rallentamento critico</em> — che si manifesta come varianza e autocorrelazione crescenti nelle sue fluttuazioni. In linea di principio, osservare quelle statistiche permette di rilevare un collasso imminente prima che accada, una frontiera di ricerca in rapido movimento con poste urgenti per laghi, pesca, barriere coralline e il clima stesso.</p>`,
          facts: [
            { e: '🐘', t: `Il tasso metabolico scala come M^{3/4} attraverso 27 ordini di grandezza di dimensione corporea — dai batteri alle balenottere azzurre — una delle leggi più precise e universali dell'ecologia.` },
            { e: '🌳', t: `La deforestazione dell'Amazzonia oltre ~20–25% potrebbe innescare un deperimento autoalimentato — la foresta smette di generare la propria pioggia e si converte a savana. La deforestazione attuale è ~17%.` },
            { e: '🐠', t: `Le barriere coralline occupano <1% del fondale oceanico ma ospitano ~25% di tutte le specie marine — la più alta densità di biodiversità di qualsiasi ecosistema, mantenuta da una complessa rete di mutualismi.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Tasso metabolico', e: 'B = b_0\\, M^{3/4}\\, e^{-E/kT}', c: 'E ≈ 0.65 eV' },
            { n: 'Legge di Kleiber', e: 'B \\propto M^{3/4}', c: 'attraverso tutta la vita' },
            { sep: 1 },
            { n: 'Specie–area', e: 'S = c\\,A^z,\\quad z \\approx 0.25\\text{–}0.35' },
            { n: 'Equilibrio insulare', e: '\\hat{S}:\\; \\text{immigrazione} = \\text{estinzione}' },
            { sep: 1 },
            { n: 'Rallentamento critico', e: '\\text{tempo di recupero} \\sim 1/\\lambda_1 \\to \\infty', c: 'vicino alla biforcazione' },
            { n: 'Dinamica di comunità', e: '\\dfrac{dx_i}{dt} = x_i\\!\\left(r_i + \\sum_j \\alpha_{ij} x_j\\right)' },
          ] }, sim: 'ecosystem',
        },
      },
    },
    cell: {
      title: 'La cellula: osmosi e diffusione',
      teaser: 'Una cellula è un sacchetto con una pelle intelligente. Come entrano ed escono le cose — e perché il sale fa raggrinzire una lumaca?',
      chips: ['Membrana', 'Osmosi', 'Diffusione'],
      lvls: {
        junior: {
          title: `Come le cose entrano ed escono da una cellula`,
          body: `<p>Ogni essere vivente è costruito da <strong>cellule</strong>, e ogni cellula è avvolta in una pelle sottile — la <strong>membrana cellulare</strong> — che decide cosa entra ed esce. Non è un muro solido; è più come una recinzione di sicurezza con dei cancelli. Le cose piccole passano liberamente; quelle grandi o pericolose vengono bloccate o accompagnate attraverso porte speciali. Sbaglia questo traffico e la cellula muore, quindi la membrana è letteralmente il confine fra una cellula e il resto del mondo.</p>
<p>Il modo più semplice in cui le cose si muovono è la <strong>diffusione</strong>: le particelle si spargono da dove sono affollate a dove sono rade, puramente per urti casuali, finché non sono mescolate uniformemente. Una goccia di colorante che si srotola nell'acqua, o l'odore del caffè che riempie una stanza, è diffusione. L'ossigeno entra nelle tue cellule e l'anidride carbonica ne esce allo stesso modo — ciascuno che scende lungo il proprio gradiente di affollamento, senza bisogno di alcuna energia.</p>
<p>L'acqua ha la sua versione, chiamata <strong>osmosi</strong>: l'acqua si sposta attraverso la membrana verso il lato più salato o più dolce — il lato più affollato di roba — cercando di pareggiare le cose. È perché una pianta appassita si riprende quando la annaffi, perché le dita si raggrinziscono in un lungo bagno, e perché una lumaca si raggrinzisce se le cospargi del sale (per favore non farlo!). Una cellula gestisce continuamente questo flusso per evitare sia di scoppiare sia di rimpicciolirsi.</p>`,
          facts: [
            { e: '🥒', t: `Sala un cetriolo e piange acqua: l'osmosi tira l'acqua fuori dalle cellule verso la superficie salata, e le fette diventano flosce.` },
            { e: '🫧', t: `La diffusione non ha bisogno di energia — è solo moto casuale che si media. I tuoi polmoni ci contano per spostare l'ossigeno nel sangue.` },
            { e: '🌱', t: `Una pianta appassita si rialza dopo l'annaffiatura perché l'osmosi riempie di nuovo le sue cellule, irrigidendole come palloncini che si gonfiano.` },
          ],
          formula: null, sim: 'cell',
        },
        student: {
          title: `Diffusione, osmosi e tonicità`,
          body: `<p>Le molecole non sono mai ferme; si agitano con energia termica, e quel moto casuale ha un effetto netto: la <strong>diffusione</strong>, il movimento di una sostanza da alta a bassa concentrazione lungo il suo gradiente, finché le concentrazioni si pareggiano. Non richiede alcun apporto di energia — è guidata puramente dalla statistica (l'entropia). Attraverso una membrana, piccole molecole non polari (\\(O_2\\), \\(CO_2\\)) diffondono dritte attraverso il doppio strato lipidico, mentre ioni e molecole polari più grandi hanno bisogno di canali proteici — la diffusione facilitata.</p>
<p>L'<strong>osmosi</strong> è la diffusione dell'acqua nello specifico, attraverso una membrana semipermeabile che lascia passare l'acqua ma non il soluto disciolto. L'acqua si sposta verso la concentrazione di soluto più alta (la concentrazione d'acqua più bassa), perché il soluto non può muoversi per bilanciare le cose da sé. La pressione che questo può generare — la pressione osmotica — è \\(\\Pi = iMRT\\) (van 't Hoff): sale con quanto è concentrato e quanto è dissociato il soluto.</p>
<p>Per una cellula, ciò che conta è la <strong>tonicità</strong> — la concentrazione di soluto fuori rispetto a dentro. In una soluzione <em>isotonica</em> la cellula resta stabile. In una <em>ipotonica</em> (diluita), l'acqua irrompe dentro e una cellula animale può gonfiarsi e scoppiare — una cellula vegetale è salvata dalla sua parete rigida. In una <em>ipertonica</em> (concentrata), l'acqua schizza fuori e la cellula si raggrinzisce. È perché una flebo deve essere accuratamente isotonica, e perché i pesci d'acqua dolce e d'acqua salata affrontano battaglie esattamente opposte.</p>`,
          facts: [
            { e: '💉', t: `Le flebo devono essere isotoniche (~0,9% di soluzione salina). Acqua pura in una vena farebbe gonfiare e scoppiare i globuli rossi per osmosi.` },
            { e: '🐟', t: `I pesci d'acqua dolce svuotano di continuo l'acqua che irrompe per osmosi; quelli d'acqua salata fanno il contrario, bevendo per combattere la perdita d'acqua.` },
            { e: '🧅', t: `Le pareti cellulari lasciano stare le cellule vegetali in acqua pura senza scoppiare: si gonfiano finché la parete spinge indietro (turgore), tenendo dritti gli steli.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Diffusione (legge di Fick)', e: 'J = -D\\,\\dfrac{dC}{dx}' },
            { n: 'Pressione osmotica', e: '\\Pi = iMRT', c: "van 't Hoff" },
            { sep: 1 },
            { n: 'Ipotonica', e: 'C_{\\text{out}} < C_{\\text{in}} \\Rightarrow \\text{acqua dentro (si gonfia)}' },
            { n: 'Ipertonica', e: 'C_{\\text{out}} > C_{\\text{in}} \\Rightarrow \\text{acqua fuori (si restringe)}' },
          ] }, sim: 'cell',
        },
        scholar: {
          title: `Trasporto di membrana, dai gradienti passivi alle pompe attive`,
          body: `<h4><span class="hn">01</span>La membrana a mosaico fluido</h4>
<p>La membrana è un doppio strato fosfolipidico — un nucleo idrofobico stretto fra teste idrofile — costellato di proteine che vi derivano lateralmente (il modello di Singer-Nicolson, 1972). Il doppio strato stesso è la barriera; le proteine incastonate sono i cancelli, i trasportatori e le pompe che lo rendono selettivo.</p>
<h4><span class="hn">02</span>Trasporto passivo e legge di Fick</h4>
<p>La diffusione porta un flusso \\(J = -D\\,dC/dx\\), proporzionale al gradiente di concentrazione e al coefficiente di diffusione \\(D\\). Non si spende ATP — il gradiente è il carburante. La diffusione facilitata aggiunge semplicemente canali o trasportatori che alzano il \\(D\\) effettivo per soluti specifici, ma il flusso corre ancora in discesa.</p>
<h4><span class="hn">03</span>Osmosi e potenziale idrico</h4>
<p>La fisiologia vegetale inquadra l'osmosi tramite il potenziale idrico \\(\\Psi = \\Psi_s + \\Psi_p\\) (un termine di soluto più un termine di pressione); l'acqua scorre da \\(\\Psi\\) alto a \\(\\Psi\\) basso. Turgore, appassimento e apertura degli stomi sono tutti \\(\\Psi\\) all'opera, e la pressione osmotica \\(\\Pi = iMRT\\) è precisamente la sua componente di soluto.</p>
<h4><span class="hn">04</span>Trasporto attivo e gradienti elettrochimici</h4>
<p>Pompe come la Na⁺/K⁺-ATPasi bruciano ATP per spingere gli ioni <em>contro</em> i loro gradienti, costruendo i gradienti elettrochimici che alimentano gli impulsi nervosi e il trasporto secondario — il cotrasporto del glucosio, per esempio, cavalca il gradiente del sodio di nuovo in discesa. All'incirca un quinto del tuo bilancio energetico a riposo è speso a far funzionare queste pompe.</p>
<h4><span class="hn">05</span>Trasporto in massa</h4>
<p>Le molecole troppo grandi per qualsiasi canale entrano per endocitosi, con la membrana che le ingloba in una vescicola, ed escono per esocitosi. È così che le cellule importano il colesterolo, come le cellule immunitarie inghiottono i patogeni e come i neuroni rilasciano i loro trasmettitori — il traffico di membrana come logistica cellulare.</p>`,
          facts: [
            { e: '🔋', t: `La pompa Na⁺/K⁺ usa circa il 20-25% della tua energia a riposo, spostando 3 Na⁺ fuori e 2 K⁺ dentro per ogni ATP per tenere le cellule cariche.` },
            { e: '🧠', t: `Ogni impulso nervoso spende il gradiente elettrochimico costruito dalle pompe ioniche — pensare è, in fondo, diffusione ionica controllata.` },
            { e: '🍬', t: `Il tuo intestino assorbe il glucosio per cotrasporto, agganciandolo al sodio che scorre lungo il gradiente mantenuto dalla pompa Na⁺/K⁺.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Flusso di diffusione', e: 'J = -D\\,\\dfrac{dC}{dx}', c: 'prima legge di Fick' },
            { n: 'Potenziale idrico', e: '\\Psi = \\Psi_s + \\Psi_p' },
            { sep: 1 },
            { n: 'Pressione osmotica', e: '\\Pi = iMRT' },
            { n: 'Pompa Na⁺/K⁺', e: '3\\,Na^+_{\\text{out}} + 2\\,K^+_{\\text{in}} \\ \\text{per ATP}' },
          ] }, sim: 'cell',
        },
      },
    },
    mitosis: {
      title: 'Mitosi e meiosi',
      teaser: 'Una cellula diventa due — o quattro. Come la vita si copia, ripara un corpo e mescola la generazione successiva.',
      chips: ['Divisione cellulare', 'Cromosomi', 'DNA'],
      lvls: {
        junior: {
          title: `Come una cellula diventa due`,
          body: `<p>Sei cominciato come una singola cellula. Ora sei fatto di decine di migliaia di miliardi — e ognuna è venuta da quella prima cellula che si è divisa, più e più volte. Questa copiatura si chiama <strong>divisione cellulare</strong>, e sta accadendo in te proprio ora: guarisce un taglio, sostituisce la pelle consumata e il rivestimento dell'intestino, fa crescere capelli e unghie. La versione di tutti i giorni, che fa due copie identiche, si chiama <strong>mitosi</strong>.</p>
<p>La parte difficile sono le istruzioni. Ogni cellula porta un set completo di DNA, impacchettato in <strong>cromosomi</strong>, e prima di dividersi deve copiarne ognuno perfettamente — poi distribuire le copie così che ogni nuova cellula finisca con un set completo, né più né meno. La mitosi è la danza attentamente coreografata che allinea le copie e le separa uniformemente. Sbagliala e le cellule finiscono con troppi o troppo pochi cromosomi.</p>
<p>C'è un secondo tipo di divisione, la <strong>meiosi</strong>, riservata a fare ovuli e spermatozoi. Invece di due cellule identiche ne fa quattro, ciascuna con metà del DNA e mescolata in combinazioni nuove — ed è per questo che assomigli ai tuoi genitori ma non sei il clone di nessuno dei due. La mitosi costruisce e ripara un corpo; la meiosi fa le cellule che passano la vita alla generazione successiva.</p>`,
          facts: [
            { e: '✂️', t: `Perdi e sostituisci decine di migliaia di cellule della pelle ogni minuto — tutte fatte dalla mitosi che copia cellule esistenti.` },
            { e: '🧬', t: `Prima di dividersi, una cellula umana copia tutti i 2 metri di DNA impacchettati nei suoi 46 cromosomi — con sorprendentemente pochi errori.` },
            { e: '👶', t: `La meiosi mescola i geni dei tuoi genitori in nuove combinazioni, ed è per questo che i fratelli differiscono — non sei una copia di nessuno dei due genitori.` },
          ],
          formula: null, sim: 'mitosis',
        },
        student: {
          title: `Le fasi della mitosi, e come la meiosi differisce`,
          body: `<p>Una cellula che si divide esegue un ciclo: cresce e copia il suo DNA durante l'<em>interfase</em>, poi si divide nella fase mitotica. La mitosi stessa ha quattro stadi coreografati. <strong>Profase</strong>: i cromosomi copiati si condensano in visibili forme a X — due cromatidi fratelli identici uniti a un centromero — e si assembla un fuso di microtubuli. <strong>Metafase</strong>: i cromosomi si allineano in fila indiana lungo l'equatore della cellula. <strong>Anafase</strong>: il fuso trascina i cromatidi fratelli a poli opposti. <strong>Telofase</strong>: i nuclei si riformano attorno a ciascun set, e la cellula si strozza in due (citochinesi).</p>
<p>L'esito sono due cellule figlie diploidi geneticamente identiche, ciascuna con il numero completo di cromosomi (46 negli umani). Dei checkpoint sorvegliano l'intero processo — la cellula non procede a meno che il suo DNA sia integro e ogni cromosoma sia correttamente attaccato. Quando quei freni cedono, le cellule si dividono senza controllo, che è l'essenza del cancro.</p>
<p>La <strong>meiosi</strong>, che fa i gameti, esegue il macchinario due volte con una svolta. Comincia appaiando cromosomi omologhi (uno da ciascun genitore) e scambiando segmenti fra loro — il <em>crossing over</em> — poi separa gli omologhi nella meiosi I e i cromatidi fratelli nella meiosi II. Il risultato sono quattro cellule aploidi, ciascuna con metà dei cromosomi (23) e un rimescolamento unico di geni. Quel mescolamento, insieme all'assortimento casuale dei cromosomi, è il motore della varietà genetica.</p>`,
          facts: [
            { e: '🔬', t: `La mitosi produce due cellule geneticamente identiche; la meiosi ne produce quattro geneticamente uniche, ciascuna con metà del DNA.` },
            { e: '🎗️', t: `Il cancro è mitosi incontrollata: cellule che ignorano i checkpoint pensati per fermare una divisione danneggiata o indesiderata.` },
            { e: '🔀', t: `Il crossing over scambia DNA fra cromosomi appaiati nella meiosi, mescolando i geni dei tuoi genitori in combinazioni del tutto nuove.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Prodotto della mitosi', e: '2n \\to 2n + 2n', c: 'due cellule diploidi identiche' },
            { n: 'Prodotto della meiosi', e: '2n \\to n + n + n + n', c: 'quattro cellule aploidi uniche' },
            { sep: 1 },
            { n: 'Cromosomi umani', e: '2n = 46,\\quad n = 23' },
          ] }, sim: 'mitosis',
        },
        scholar: {
          title: `Meccanica dei cromosomi, ciclo cellulare, variazione e cancro`,
          body: `<h4><span class="hn">01</span>Il ciclo cellulare e i suoi checkpoint</h4>
<p>La divisione è uno stadio di un ciclo: \\(G_1 \\to S\\) (replicazione del DNA) \\(\\to G_2 \\to M\\), guidato da cicline e chinasi ciclina-dipendenti. I checkpoint (G1/S, G2/M e il checkpoint di assemblaggio del fuso) fermano il ciclo finché le condizioni non sono giuste, e p53 — "il guardiano del genoma" — innesca la riparazione o la morte programmata quando il DNA è danneggiato.</p>
<h4><span class="hn">02</span>Il fuso e la segregazione dei cromosomi</h4>
<p>Un cinetocoro su ciascun centromero cattura i microtubuli del fuso, e il checkpoint di assemblaggio del fuso blocca l'anafase finché ogni cromosoma non è bi-orientato, attaccato a entrambi i poli. Solo allora la coesina che tiene insieme i fratelli viene tagliata, e questi si separano di scatto. Gli errori qui producono <em>aneuploidia</em> — il numero sbagliato di cromosomi.</p>
<h4><span class="hn">03</span>La meiosi e le fonti di variazione</h4>
<p>La meiosi I è <em>riduzionale</em> — gli omologhi si separano, dimezzando il conteggio; la meiosi II è <em>equazionale</em> — i fratelli si separano, come nella mitosi. Due mescolatori indipendenti creano la varietà: il crossing over ricombina gli omologhi, e il solo assortimento indipendente delle 23 coppie dà \\(2^{23} \\approx 8.4\\) milioni di combinazioni per gamete, prima ancora di contare la ricombinazione.</p>
<h4><span class="hn">04</span>Quando la divisione va storta</h4>
<p>Il cancro è fondamentalmente una malattia del ciclo cellulare: mutazioni negli oncogeni (gli acceleratori) e negli oncosoppressori (i freni, come p53 e RB) lasciano che le cellule si dividano senza permesso e ignorino i loro checkpoint. L'aneuploidia da errata segregazione — la trisomia 21, per esempio — mostra il costo ripido anche di un solo cromosoma in più.</p>
<h4><span class="hn">05</span>Oltre il manuale</h4>
<p>Le cellule possono anche morire apposta (apoptosi), smettere di dividersi per sempre (senescenza, legata all'accorciamento dei telomeri a ogni divisione) e riadattare lo stesso macchinario per la rigenerazione. L'equilibrio fra dividersi e trattenersi è esattamente ciò che impedisce a un corpo di mille miliardi di cellule sia di consumarsi sia di impazzire.</p>`,
          facts: [
            { e: '🧬', t: `Il solo assortimento indipendente dà 2²³ ≈ 8,4 milioni di combinazioni di cromosomi per gamete umano — prima che il crossing over ne aggiunga ancora di più.` },
            { e: '🛡️', t: `p53, il "guardiano del genoma", ferma la divisione per riparare il DNA o innesca il suicidio cellulare. È mutato in circa metà di tutti i tumori.` },
            { e: '⏳', t: `Ogni divisione accorcia i cappucci telomerici sui tuoi cromosomi; quando si esauriscono la cellula smette di dividersi — un limite incorporato legato all'invecchiamento.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Il ciclo cellulare', e: 'G_1 \\to S \\to G_2 \\to M' },
            { sep: 1 },
            { n: 'Mitosi contro meiosi', e: '2n \\to 2n\\ (\\times 2) \\quad\\text{vs}\\quad 2n \\to n\\ (\\times 4)' },
            { n: 'Assortimento indipendente', e: '2^{n} = 2^{23} \\approx 8.4\\times10^{6}', c: 'combinazioni per gamete' },
          ] }, sim: 'mitosis',
        },
      },
    },
    punnett: {
      title: 'Quadrati di Punnett e genetica',
      teaser: 'Incrocia due genitori e prevedi i figli — la piccola griglia che Mendel costruì da un giardino di piselli.',
      chips: ['Genetica', 'Alleli', 'Ereditarietà'],
      lvls: {
        junior: {
          title: `Prevedere l'aspetto della prole`,
          body: `<p>Perché hai il colore degli occhi che hai? Hai ereditato istruzioni — i <strong>geni</strong> — da entrambi i genitori, una copia da ciascuno. Per molti tratti, una versione di un gene è <strong>dominante</strong> (si manifesta se ne hai anche solo una copia) e l'altra è <strong>recessiva</strong> (si manifesta solo se ne hai due). Un <strong>quadrato di Punnett</strong> è una semplice griglia che prevede le probabilità di ciò che un figlio erediterà — e Gregor Mendel dedusse tutto questo negli anni 1860 allevando migliaia di piante di pisello.</p>
<p>Diciamo che un gene viene in una versione dominante "A" e una recessiva "a". Ogni genitore porta due copie e ne passa una, a caso, al figlio. Il quadrato di Punnett elenca le due opzioni di un genitore lungo il lato superiore e quelle dell'altro genitore lungo il lato, poi riempie ogni combinazione possibile. All'improvviso puoi vedere tutti i figli possibili, e quanto è probabile ciascuno.</p>
<p>Il risultato classico: incrocia due genitori che portano ciascuno un gene dominante e uno recessivo (Aa × Aa) e i loro figli escono, in media, <strong>3 che mostrano il tratto dominante contro 1 che mostra il recessivo</strong> — il famoso rapporto 3:1. Non ti dice esattamente cosa sarà un singolo figlio (quella è fortuna), ma su molti figli il rapporto regge, proprio come lanciare monete.</p>`,
          facts: [
            { e: '🌱', t: `Gregor Mendel trovò le regole dell'ereditarietà negli anni 1860 allevando ~28.000 piante di pisello — decenni prima che qualcuno sapesse dell'esistenza del DNA.` },
            { e: '🎲', t: `Un quadrato di Punnett dà probabilità, non certezze: un rapporto 3:1 è la media su molti figli, come lanci di moneta, non una promessa per un singolo figlio.` },
            { e: '👁️', t: `Un tratto recessivo può saltare generazioni, nascondendosi nei portatori con una copia, per poi riapparire quando due portatori hanno un figlio.` },
          ],
          formula: null, sim: 'punnett',
        },
        student: {
          title: `Alleli, genotipo, fenotipo e il quadrato`,
          body: `<p>Prima il vocabolario. Un gene può esistere in versioni diverse chiamate <strong>alleli</strong>, e ne porti due di ciascuno (uno per genitore). Il tuo <strong>genotipo</strong> è la coppia che hai (AA, Aa o aa); il tuo <strong>fenotipo</strong> è il tratto che effettivamente si manifesta. Un allele dominante (A) maschera uno recessivo (a), quindi sia AA sia Aa mostrano il fenotipo dominante, mentre solo aa mostra il recessivo. AA e aa sono <em>omozigoti</em>; Aa è <em>eterozigote</em> — un portatore.</p>
<p>La meiosi divide la coppia, quindi ogni genitore passa un solo allele, scelto a caso — la <strong>legge della segregazione</strong> di Mendel. Il quadrato di Punnett è semplicemente una tabella di quella casualità: i due alleli di un genitore come colonne, quelli dell'altro come righe, e ciascuna delle quattro celle un genotipo della prole ugualmente probabile. Contali per i rapporti previsti.</p>
<p>Gli incroci emblematici: Aa × Aa dà un rapporto genotipico <strong>1:2:1</strong> (AA:Aa:aa) e un rapporto fenotipico <strong>3:1</strong> (dominante:recessivo). Un testcross contro un recessivo (Aa × aa) dà 1:1 — che è come riveli se un individuo dall'aspetto dominante è AA o Aa. I tratti su due geni diversi si assortiscono indipendentemente (seconda legge di Mendel), dando il famoso 9:3:3:1 di un incrocio diibrido.</p>`,
          facts: [
            { e: '🔬', t: `AA e Aa hanno lo stesso aspetto (entrambi mostrano il tratto dominante). Un testcross con aa li distingue — un risultato 1:1 significa che il genitore era Aa.` },
            { e: '🧬', t: `Le due leggi di Mendel: gli alleli si segregano (uno per gamete), e geni diversi si assortiscono indipendentemente — entrambe spiegate poi dalla meiosi.` },
            { e: '🌸', t: `Il classico incrocio Aa × Aa dà un rapporto fenotipico 3:1 ma un rapporto genotipico 1:2:1 — le stesse quattro celle, contate in due modi.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Genotipi', e: 'AA,\\ Aa,\\ aa' },
            { n: 'Fenotipo', e: 'A\\_ \\to \\text{dominante},\\quad aa \\to \\text{recessivo}' },
            { sep: 1 },
            { n: 'Aa × Aa', e: '1\\,AA : 2\\,Aa : 1\\,aa \\;\\Rightarrow\\; 3:1' },
            { n: 'Testcross', e: 'Aa \\times aa \\to 1:1' },
          ] }, sim: 'punnett',
        },
        scholar: {
          title: `Oltre la dominanza semplice`,
          body: `<h4><span class="hn">01</span>Quando un gene non è tutta la storia</h4>
<p>La dominanza incompleta (l'eterozigote è una miscela, come un fiore rosa), la codominanza (entrambi gli alleli si manifestano insieme, come il gruppo sanguigno AB) e gli alleli multipli (il gene ABO ne ha tre nella popolazione) rompono tutti il quadro netto dominante/recessivo — pur obbedendo alla stessa segregazione degli alleli nei gameti.</p>
<h4><span class="hn">02</span>Associazione e ricombinazione</h4>
<p>I geni che stanno vicini sullo stesso cromosoma tendono a essere ereditati insieme — <em>associati</em> — violando l'assortimento indipendente, a meno che il crossing over li separi. Quanto spesso avviene quella separazione misura la distanza fra i geni, che è esattamente come furono disegnate le prime mappe genetiche.</p>
<h4><span class="hn">03</span>Associazione al sesso e alberi genealogici</h4>
<p>I geni sul cromosoma X (daltonismo, emofilia) mostrano schemi diversi in maschi e femmine, perché i maschi hanno una sola X. L'analisi degli alberi genealogici applica la stessa logica di Punnett attraverso un albero familiare per tracciare, e prevedere, le condizioni ereditarie.</p>
<h4><span class="hn">04</span>Dai rapporti alle popolazioni</h4>
<p>Il <strong>principio di Hardy-Weinberg</strong> scala Mendel da un incrocio a un'intera popolazione, prevedendo le frequenze alleliche e genotipiche tramite \\(p^2 + 2pq + q^2 = 1\\). È la linea di base del "niente sta cambiando" contro cui si rileva la vera evoluzione — selezione, deriva, migrazione.</p>`,
          facts: [
            { e: '🩸', t: `Il gruppo sanguigno ABO mostra codominanza e alleli multipli: A e B sono entrambi espressi nel tipo AB, e tre alleli circolano nella popolazione.` },
            { e: '🗺️', t: `Quanto spesso due geni vengono separati dal crossing over misura la distanza fra loro — il principio dietro le prime mappe geniche.` },
            { e: '📊', t: `L'equazione di Hardy-Weinberg predice le frequenze genotipiche in una popolazione che non evolve — la linea di base che rende misurabile l'evoluzione.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Monoibrido (Aa × Aa)', e: '3:1\\ \\text{fenotipo},\\quad 1:2:1\\ \\text{genotipo}' },
            { n: 'Incrocio diibrido', e: '9:3:3:1' },
            { sep: 1 },
            { n: 'Hardy-Weinberg', e: 'p^2 + 2pq + q^2 = 1' },
          ] }, sim: 'punnett',
        },
      },
    },
    life: {
      title: 'Le regole della vita',
      teaser: 'Come fanno 37 mila miliardi di cellule a coordinarsi perfettamente — senza nessuno che dà ordini?',
      chips: ['Cellule', 'Emergenza', 'Evoluzione'],
      lvls: {
        junior: {
          title: `Cellule minuscole che costruiscono grande vita!`,
          body: `<p>Ogni parte di te — cervello, mani, cuore — è costruita da minuscoli mattoncini viventi chiamati <strong>cellule</strong>, troppo piccole per vederle senza un microscopio. Mettile in fila e un singolo capello umano è largo solo una decina di cellule. Proprio ora, all'incirca <em>37 mila miliardi</em> di esse stanno lavorando insieme, in questo preciso istante, per tenerti a respirare, pensare, sentire e muoverti.</p>
<p>Ed ecco la cosa sbalorditiva: nessuna di quelle cellule comanda. Ognuna segue semplicemente poche regole chimiche basate su ciò che stanno facendo i suoi vicini immediati — eppure, insieme, costruiscono un cuore che batte per un secolo, un cervello che sogna, un sistema immunitario che ricorda ogni malattia che tu abbia mai avuto. Quando semplici regole locali si accumulano in una sconcertante complessità collettiva, la chiamiamo <strong>emergenza</strong>, ed è uno degli enigmi più profondi di tutta la scienza.</p>
<p>Nella simulazione qui sotto, ogni quadratino colorato rappresenta una semplice cellula che obbedisce ad appena quattro regole sui suoi vicini. Guarda gli <em>alianti</em> strisciare sulla griglia e i lampeggiatori accendersi e spegnersi — niente di pianificato, tutto sgorgato da quelle quattro regole soltanto. Poi immagina cosa succede con migliaia di miliardi di veri tipi cellulari, ciascuno che destreggia migliaia di segnali chimici insieme.</p>`,
          facts: [
            { e: '🔴', t: `Il tuo corpo produce 2 milioni di nuovi globuli rossi al secondo per sostituire quelli vecchi — sono 170 miliardi al giorno!` },
            { e: '🧠', t: `Il tuo cervello ha 86 miliardi di neuroni e circa 100 mila miliardi di connessioni — più di tutte le stelle della Via Lattea.` },
            { e: '🦠', t: `I batteri nel tuo intestino superano di numero le tue cellule umane di circa 1,3 a 1. Sei letteralmente più microbo che umano, per conteggio cellulare!` },
          ],
          formula: null, sim: 'life',
        },
        student: {
          title: `Il Gioco della vita di Conway e la complessità emergente`,
          body: `<p>Un automa cellulare è una griglia di celle che si aggiornano tutte insieme, passo dopo passo, ognuna obbedendo alla stessa regola locale. Il <strong>Gioco della vita</strong> di John Conway (1970) è quello famoso, e il suo intero regolamento è di quattro righe che si limitano a contare quanti degli otto vicini di una cella sono vivi:</p>
<ul>
<li><strong>Sottopopolazione:</strong> una cella viva con meno di 2 vicini vivi muore</li>
<li><strong>Sopravvivenza:</strong> una cella viva con 2 o 3 vicini vivi continua a vivere</li>
<li><strong>Sovrappopolazione:</strong> una cella viva con più di 3 vicini vivi muore</li>
<li><strong>Riproduzione:</strong> una cella morta con esattamente 3 vicini vivi prende vita</li>
</ul>
<p>Da quelle quattro righe erompe un intero bestiario. Gli <strong>alianti</strong> passeggiano in diagonale per sempre, gli <strong>oscillatori</strong> pulsano sul posto, i <strong>cannoni di alianti</strong> ne sparano un flusso infinito. La vera bomba scoppiò nel 2000, quando Paul Rendell costruì una macchina di Turing universale funzionante <em>dentro</em> la griglia — il che significa che qualunque cosa il tuo portatile sappia calcolare, la sa calcolare anche uno schema di quadratini che lampeggiano. Un computer completo, in funzione dentro un giocattolo fatto di puntini.</p>
<p>Vale una pausa. Se il calcolo universale può ribollire da quattro regole banali su una scacchiera, allora forse la vertiginosa complessità degli esseri viventi — cellule, corpi, interi ecosistemi — non ha bisogno di alcuna scintilla segreta o essenza vitale. Potrebbe essere solo il risultato quasi inevitabile di semplici regole locali, chimiche anziché digitali, che si dispiegano su una scala abbastanza grande.</p>`,
          facts: [
            { e: '🐝', t: `Gli sciami di api scelgono collettivamente una nuova casa senza alcun leader centrale — le esploratrici danzano l'"otto" per pubblicizzare i siti, e un quorum emerge naturalmente.` },
            { e: '🐚', t: `I motivi sulle conchiglie (strisce, macchie, spirali) nascono da una reazione-diffusione simile a un automa cellulare 1D nel tessuto del mantello.` },
            { e: '⚗️', t: `La reazione di Belousov-Zhabotinsky produce onde chimiche a spirale in una capsula — un automa cellulare continuo del mondo reale.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Sopravvivenza', e: '2 \\text{ o } 3 \\text{ vicini vivi} \\to \\text{vive}', c: 'altrimenti muore' },
            { n: 'Nascita', e: '\\text{esattamente } 3 \\text{ vicini vivi} \\to \\text{nasce}', c: 'altrimenti resta morta' },
            { sep: 1 },
            { n: 'Completezza di Turing', e: '\\text{Gioco della vita} \\equiv \\text{Macchina di Turing universale}', c: 'Rendell, 2000' },
            { n: 'Regola 110 (1D)', e: '\\text{Regola 110} \\equiv \\text{MTU}', c: 'la più semplice Turing-completa nota' },
          ] }, sim: 'life',
        },
        scholar: {
          title: `Motivi di Turing, sistemi di reazione-diffusione e morfogenesi`,
          body: `<h4><span class="hn">01</span>L'altra grande idea di Turing: come il leopardo ottiene le sue macchie</h4>
<p>Lo stesso Alan Turing che fondò l'informatica passò i suoi ultimi anni sulla biologia, e nel 1952 propose qualcosa di audace: che i motivi sugli animali — strisce, macchie, spirali — non hanno bisogno di alcun progetto, solo di chimica. Il suo meccanismo usa due <em>morfogeni</em> che diffondono, un <strong>attivatore</strong> \\(u\\) che alimenta sé stesso e un <strong>inibitore</strong> \\(v\\) che a sua volta sopprime \\(u\\). La svolta cruciale è una discrepanza di velocità: l'inibitore deve diffondere molto più velocemente dell'attivatore, \\(D_v \\gg D_u\\). "Attivazione locale, inibizione a lungo raggio" è tutto il segreto.</p>
<h4><span class="hn">02</span>Le equazioni di reazione-diffusione</h4>
<p>Messo per iscritto, è una coppia di equazioni differenziali alle derivate parziali accoppiate: \\(\\partial_t u = D_u \\nabla^2 u + f(u,v)\\) e \\(\\partial_t v = D_v \\nabla^2 v + g(u,v)\\), dove i termini \\(\\nabla^2\\) spargono ciascuna sostanza e \\(f, g\\) codificano come reagiscono. Niente di esotico — diffusione più una reazione chimica, i due processi più ordinari in una cellula. La magia sta interamente in come interagiscono.</p>
<h4><span class="hn">03</span>Il paradosso: una diffusione che <em>crea</em> struttura</h4>
<p>Ecco cosa lo rende controintuitivo. La diffusione normalmente spalma <em>via</em> le differenze — versa inchiostro nell'acqua e sfuma in un grigio uniforme. Eppure uno stato stazionario uniforme \\((u_0, v_0)\\) perfettamente stabile per conto suo può essere ribaltato in motivi aggiungendo la diffusione. È l'<strong>instabilità di Turing</strong>. Perturbala con un'onda \\(\\propto e^{\\sigma t + ikx}\\), linearizza, e alcuni numeri d'onda \\(k\\) acquistano \\(\\mathrm{Re}(\\sigma) > 0\\) — crescono invece di svanire. La diffusione, la grande omogeneizzatrice, diventa il motore della struttura.</p>
<h4><span class="hn">04</span>La lunghezza d'onda cotta nella chimica</h4>
<p>Non tutte le onde crescono allo stesso modo; un numero d'onda dominante \\(k^*\\) supera tutti gli altri e imprime la propria scala sul tessuto, fissando una lunghezza d'onda caratteristica del motivo \\(\\lambda^* = 2\\pi/k^*\\). Quell'unico numero è il motivo per cui macchie e strisce vengono in una dimensione preferita anziché in una qualsiasi, e perché il rapporto fra i tassi di diffusione — non un piano regolatore — detta se un animale finisce macchiato o striato.</p>
<h4><span class="hn">05</span>La natura colta sul fatto</h4>
<p>Per decenni questa fu un'elegante speculazione; poi arrivarono le prove molecolari. Si dimostrò che le strisce del pesce zebra seguono un meccanismo di Turing (Nakamasu et al., 2009), la spaziatura delle dita del topo fu ricondotta a un sistema di reazione-diffusione BMP–recettore (Sheth et al., 2012), e knock-in che alterano la diffusività dei morfogeni trasformano macchie in strisce esattamente come prevede la matematica. Il meccanismo affiora ora nella spaziatura dei follicoli piliferi, nelle creste del palato e nella pigmentazione delle piume. Turing descrisse la chimica diciassette anni prima che sapessimo cosa fosse un morfogeno.</p>
<h4><span class="hn">06</span>Discreto e continuo, entrambi sull'orlo del caos</h4>
<p>Il Gioco della vita di Conway e la chimica di Turing sono la stessa idea in due costumi: la Vita è fatta di celle discrete in tempo discreto, i sistemi di Turing sono concentrazioni lisce in spazio continuo, ed entrambi sono <em>mezzi eccitabili</em> dove regole locali generano forma globale. Le quattro classi di automi cellulari di Wolfram — che si assestano, ciclano, caotici e complessi — li mettono su un'unica mappa, e si congettura che i sistemi complessi di "Classe IV" come la Vita siano genericamente Turing-completi. L'indizio ricorrente è che il calcolo ricco e il motivo ricco vivono allo stesso indirizzo: l'orlo del caos.</p>`,
          facts: [
            { e: '🐆', t: `La dimensione delle macchie del leopardo è regolata dal rapporto di diffusione di Turing — in topi knock-in con diffusività dei morfogeni alterata, le macchie cambiano in strisce in modo prevedibile.` },
            { e: '🤖', t: `Un computer Game-of-Life pienamente funzionante (capace di eseguire qualsiasi programma) è stato costruito dentro la simulazione ed è documentato sulla LifeWiki.` },
            { e: '🔬', t: `Il knockout CRISPR di specifici recettori dei morfogeni produce le esatte transizioni striscia-macchia previste dai modelli di Turing nel pesce zebra.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'EDP dell\'attivatore', e: '\\partial_t u = D_u \\nabla^2 u + f(u,v)' },
            { n: 'EDP dell\'inibitore', e: '\\partial_t v = D_v \\nabla^2 v + g(u,v)' },
            { sep: 1 },
            { n: 'Instabilità di Turing', e: '\\det(J - k^2 D) = 0 \\text{ per qualche } k \\ne 0' },
            { n: 'Condizione necessaria', e: 'D_v / D_u \\gg 1', c: 'inibitore veloce' },
            { sep: 1 },
            { n: 'Lunghezza d\'onda del motivo', e: '\\lambda^* = 2\\pi / k^*', c: 'k* = argmax σ(k)' },
            { n: 'Relazione di dispersione', e: '\\sigma(k) = \\tfrac{1}{2}\\!\\left[\\mathrm{tr}(J) - (D_u+D_v)k^2 \\pm \\sqrt{\\Delta}\\right]' },
          ] }, sim: 'life',
        },
      },
    },
    dna: {
      title: 'DNA e genetica',
      teaser: 'Ogni cellula del tuo corpo porta un manuale di istruzioni lungo 2 metri, scritto in un alfabeto di 4 lettere, che ti rende unicamente te.',
      chips: ['DNA', 'Geni', 'Ereditarietà'],
      lvls: {
        junior: {
          title: `Il manuale di istruzioni dentro ogni cellula!`,
          body: `<p>Rannicchiato dentro quasi ognuna dei tuoi 37 mila miliardi di cellule c'è un set completo di istruzioni per costruire e far funzionare un intero essere umano. Sono scritte su una molecola attorcigliata, a forma di scala, chiamata <strong>DNA</strong>. Srotola il DNA da una singola cellula e si estende per circa <strong>due metri</strong> — eppure è così incredibilmente sottile da ripiegarsi in uno spazio più piccolo del punto che chiude questa frase.</p>
<p>L'intero manuale è scritto in un alfabeto di appena <strong>quattro lettere</strong> — A, T, C e G — e il tuo arriva a circa 3,2 miliardi di esse. Tratti significativi di quel testo si chiamano <strong>geni</strong>, e la maggior parte dei geni è la ricetta per una proteina. Le proteine sono la forza lavoro del corpo: costruiscono i tuoi muscoli, trasportano l'ossigeno nel sangue, digeriscono il pranzo e combattono le malattie.</p>
<p>La parte più folle è la copiatura. Ogni volta che una cellula si divide, tutti i 3,2 miliardi di lettere vengono trascritti — accuratamente — in poche ore, con solo circa un errore per miliardo di lettere. È come copiare a mano tremila libri e fare un totale di tre refusi. Nella simulazione qui sotto, guarda la doppia elica aprirsi come una cerniera e replicarsi in tempo reale.</p>`,
          facts: [
            { e: '📏', t: `Tutto il DNA del tuo corpo, disteso in fila, si estenderebbe dalla Terra a Plutone e ritorno — due volte. Porti con te circa 70 miliardi di chilometri di DNA.` },
            { e: '👯', t: `Condividi il 99,9% del tuo DNA con ogni altro essere umano sulla Terra. Lo 0,1% di differenza — circa 3 milioni di lettere — è ciò che ti rende unico.` },
            { e: '🍌', t: `Condividi il 60% del tuo DNA con una banana. La vita sulla Terra è sorprendentemente imparentata — tutti gli organismi usano lo stesso codice del DNA a 4 lettere.` },
          ],
          formula: null, sim: 'dna',
        },
        student: {
          title: `Replicazione, trascrizione, traduzione del DNA e genetica mendeliana`,
          body: `<p>La <strong>doppia elica</strong> del DNA (Watson e Crick, 1953) è formata da due filamenti antiparalleli chiusi come una cerniera da basi complementari: A con T (due legami a idrogeno), C con G (tre). Ogni filamento corre \\(5'\\!\\to\\!3'\\), e quell'appaiamento è tutto il trucco della copiatura — ogni filamento è uno stampo per ricostruire l'altro. La <strong>replicazione</strong> è semiconservativa: l'elicasi srotola la scala, la primasi posa gli inneschi, e la DNA polimerasi costruisce il nuovo filamento \\(5'\\!\\to\\!3'\\), dando un filamento guida liscio e uno in ritardo cucito a pezzi. La fedeltà raggiunge \\(\\sim\\!10^{-9}\\) errori per base, perché la polimerasi rilegge il proprio lavoro e la riparazione dei disappaiamenti raccoglie il resto.</p>
<p>Il <strong>dogma centrale</strong> (Crick, 1958) fissa il flusso dell'informazione: \\(\\text{DNA} \\to \\text{RNA} \\to \\text{proteina}\\). Nella <em>trascrizione</em>, la RNA polimerasi legge un gene in RNA messaggero, gli introni vengono rimossi, e il messaggio è dotato di cappuccio e coda. Nella <em>traduzione</em>, i ribosomi strisciano lungo l'mRNA leggendo <strong>codoni</strong> di tre lettere, ciascuno dei quali richiama un particolare amminoacido tramite il codice genetico — 64 codoni che coprono 20 amminoacidi più tre segnali di "stop" — mentre i tRNA fanno la spola portando i mattoni.</p>
<p>Molto prima che si conoscesse tutto questo macchinario molecolare, <strong>Mendel</strong> (1866) dedusse la logica dalle sole piante di pisello. I geni vengono in due copie (<em>alleli</em>), una da ciascun genitore, e gli alleli dominanti nascondono quelli recessivi. Incrocia due portatori, \\(Aa \\times Aa\\), e la prole cade in \\(1\\!:\\!2\\!:\\!1\\) per genotipo e \\(3\\!:\\!1\\) per aspetto — rapporti che puoi verificare contro conteggi reali con una statistica chi-quadro \\(\\chi^2 = \\sum (O-E)^2/E\\). L'ereditarietà reale ammucchia poi le complicazioni che i piselli convenientemente nascondevano: codominanza, mescolamento e tratti spinti da centinaia di geni insieme.</p>`,
          facts: [
            { e: '✂️', t: `CRISPR-Cas9 può modificare una sequenza specifica fra 3,2 miliardi di paia di basi con la precisione di trovare e cambiare una parola in una biblioteca di 1.000 libri.` },
            { e: '👴', t: `I telomeri — cappucci protettivi alle estremità dei cromosomi — si accorciano a ogni divisione cellulare. La loro lunghezza è un orologio molecolare dell'invecchiamento.` },
            { e: '🎨', t: `Colore degli occhi, altezza e QI sono tutti poligenici — influenzati da centinaia di geni simultaneamente, non da una singola coppia dominante/recessiva.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Appaiamento delle basi', e: 'A\\!=\\!T \\;(2\\text{ legami H}),\\quad G\\!\\equiv\\!C \\;(3\\text{ legami H})' },
            { n: 'Filamenti antiparalleli', e: "\\text{5'-ATCG-3'} \\;\\leftrightarrow\\; \\text{3'-TAGC-5'}" },
            { sep: 1 },
            { n: 'Fedeltà di replicazione', e: '\\sim 1 \\text{ errore} / 10^{9} \\text{ bp}', c: 'con rilettura' },
            { n: 'Dogma centrale', e: '\\text{DNA} \\to \\text{mRNA} \\to \\text{proteina}' },
            { sep: 1 },
            { n: 'Codice genetico', e: '64 \\text{ codoni} \\to 20 \\text{ amminoacidi} + 3 \\text{ stop}' },
            { n: 'Rapporto F₂ di Mendel', e: 'Aa \\times Aa \\to 1\\,AA : 2\\,Aa : 1\\,aa', c: 'fenotipo 3:1' },
          ] }, sim: 'dna',
        },
        scholar: {
          title: `Genetica di popolazione, equilibrio di Hardy-Weinberg ed evoluzione molecolare`,
          body: `<h4><span class="hn">01</span>Hardy–Weinberg: l'ipotesi nulla dell'evoluzione</h4>
<p>La genetica di popolazione comincia chiedendosi cosa succede quando <em>non</em> succede niente. In una popolazione idealizzata — infinita, con accoppiamento casuale, senza selezione, mutazione o migrazione — le frequenze alleliche \\(p\\) e \\(q = 1-p\\) si assestano in frequenze genotipiche \\(p^2 : 2pq : q^2\\) e restano ferme per sempre. È l'equilibrio di <strong>Hardy–Weinberg</strong>, e il suo vero valore è come linea di base: qualsiasi popolazione che se ne <em>discosta</em> è spinta da una forza evolutiva, quindi la deviazione stessa diventa la misura.</p>
<h4><span class="hn">02</span>Misurare quanto le popolazioni si sono allontanate</h4>
<p>Dividi una specie in sottopopolazioni e divergono. L'<strong>indice di fissazione</strong> \\(F_{ST} = (H_T - H_S)/H_T\\) cattura quanto, confrontando la diversità genetica interna ai gruppi con quella dell'insieme: \\(F_{ST} = 0\\) significa che tutti si incrociano liberamente, \\(F_{ST} = 1\\) significa isolamento completo. È il metro standard per domande dall'ascendenza umana alla genetica della conservazione — e, notevolmente, l'\\(F_{ST}\\) umano è sorprendentemente piccolo, un'eco genetica di quanto recentemente e a fondo la nostra specie si sia mescolata.</p>
<h4><span class="hn">03</span>La teoria neutrale: la maggior parte del cambiamento è solo rumore</h4>
<p>La <strong>teoria neutrale</strong> di Kimura (1968) fece un'affermazione sorprendente: a livello molecolare, la maggior parte delle varianti che si diffondono lo fa non perché aiuti, ma perché è invisibile alla selezione e sale per puro caso — la deriva genetica. Il suo risultato più pulito è che il tasso di fissazione delle mutazioni neutrali è uguale al tasso di mutazione stesso, \\(k = \\mu\\), indipendente dalla dimensione della popolazione. L'adattamento è reale, ma contro un vasto sfondo di brusio molecolare che non significa nulla, la spiegazione predefinita del cambiamento divenne "deriva", non "vantaggio".</p>
<h4><span class="hn">04</span>Leggere la selezione nel codice</h4>
<p>Puoi cogliere la selezione con le mani nel sacco confrontando due tipi di cambiamento del DNA: le sostituzioni <em>sinonime</em> che lasciano intatta la proteina, e quelle <em>non sinonime</em> che la alterano. Il loro rapporto \\(\\omega = dN/dS\\) è un verdetto: \\(\\omega < 1\\) significa che la selezione purificante sta eliminando i cambiamenti dannosi, \\(\\omega > 1\\) significa che la selezione positiva li sta attivamente guidando, e \\(\\omega \\approx 1\\) significa deriva soltanto. E poiché i cambiamenti neutrali procedono a un ritmo grosso modo costante, fanno anche da <strong>orologio molecolare</strong> per datare quando due lignaggi hanno condiviso un antenato per l'ultima volta.</p>
<h4><span class="hn">05</span>Scomporre un tratto nelle sue cause</h4>
<p>Per i tratti plasmati da molti geni, la <strong>genetica quantitativa</strong> partiziona la variazione totale: \\(V_P = V_A + V_D + V_I + V_E\\), separando gli effetti genetici additivi da dominanza, epistasi e ambiente. Il rapporto che conta per l'evoluzione è l'<strong>ereditabilità</strong> in senso stretto \\(h^2 = V_A/V_P\\) — solo la parte additiva \\(V_A\\) è ciò su cui la selezione può agire in modo affidabile, ed è per questo che \\(h^2\\), non la più vaga nozione di "genetico", predice quanto in fretta una popolazione risponde alla selezione o all'allevamento.</p>
<h4><span class="hn">06</span>L'enigma dell'ereditabilità mancante</h4>
<p>I moderni studi di associazione sull'intero genoma scandagliano milioni di marcatori del DNA su coorti enormi, e per tratti complessi come l'altezza trovano centinaia di riscontri reali — che insieme spiegano solo una frazione dell'ereditabilità che gli studi sui gemelli dicono esserci. Questa <em>ereditabilità mancante</em> è uno degli enigmi vivi del campo, imputato a varianti rare che le scansioni non colgono, a intricate interazioni gene-ambiente e a un'epistasi troppo complessa perché i modelli additivi la vedano. Ora possiamo leggere l'intero genoma; ancora non riusciamo a leggere del tutto una persona da esso.</p>`,
          facts: [
            { e: '🌍', t: `Il collo di bottiglia dell'uscita dall'Africa ~70.000 anni fa ridusse la diversità genetica umana così gravemente che gli scimpanzé di una singola foresta mostrano più variazione genetica di tutti gli 8 miliardi di umani.` },
            { e: '🔬', t: `Il primo genoma umano completo (HGP, 2003) costò 2,7 miliardi di dollari e richiese 13 anni. Oggi un genoma costa ~200 dollari e richiede un giorno.` },
            { e: '⚡', t: `Gli elementi trasponibili ("geni saltatori") costituiscono ~45% del genoma umano — più dei geni codificanti proteine (solo ~1,5%).` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Hardy–Weinberg', e: 'p^2 + 2pq + q^2 = 1,\\quad p + q = 1' },
            { n: 'Indice di fissazione', e: 'F_{ST} = \\dfrac{H_T - H_S}{H_T}' },
            { sep: 1 },
            { n: 'Tasso di fissazione neutrale', e: 'k = \\mu', c: 'Kimura, 1968' },
            { n: 'Test di selezione', e: '\\omega = dN/dS', c: '<1 purificante, >1 positiva' },
            { sep: 1 },
            { n: 'Varianza fenotipica', e: 'V_P = V_A + V_D + V_I + V_E' },
            { n: 'Ereditabilità in senso stretto', e: 'h^2 = V_A / V_P' },
          ] }, sim: 'dna',
        },
      },
    },
    evolution: {
      title: 'Evoluzione e selezione naturale',
      teaser: 'Ogni essere vivente sulla Terra condivide un antenato comune. Quattro miliardi di anni di tentativi ed errori, guidati da una semplice regola.',
      chips: ['Selezione', 'Adattamento', 'Speciazione'],
      lvls: {
        junior: {
          title: `Come cambia la vita — una generazione alla volta!`,
          body: `<p>Immagina una colonia di coleotteri che vive su terreno bruno. La maggior parte è bruna, ma ogni tanto una mutazione fa spuntare un individuo verde brillante. Un uccello affamato in alto individua a colpo d'occhio i coleotteri verdi e manca quelli bruni — così i coleotteri bruni vivono, si riproducono e tramandano il loro colore bruno. Generazione dopo generazione, il verde svanisce e la colonia diventa quasi interamente bruna. È la <strong>selezione naturale</strong>, l'idea più potente di tutta la biologia.</p>
<p>Charles Darwin capì nel 1859 che quest'unico semplice processo plasma tutto ciò che è vivo: chi porta tratti che lo aiutano a sopravvivere e riprodursi lascia più prole, che eredita quei tratti. Accumula tutto ciò su milioni di anni e sboccia in una varietà sconcertante — dai batteri alle balenottere azzurre, dai funghi agli aceri. Ogni creatura su cui tu abbia mai posato gli occhi siede alla fine di una catena ininterrotta di sopravvissuti che si allunga indietro di circa <strong>3,8 miliardi di anni</strong>, fino alla primissima cellula.</p>
<p>Le prove arrivano a fiotti da ogni direzione: i fossili registrano il lento rimodellamento dei corpi nel tempo, il DNA rivela esattamente quanto strettamente due specie sono imparentate, e i batteri resistenti agli antibiotici e gli insetti a prova di pesticida sono l'evoluzione che si dispiega proprio ora, in tempo reale. Nella simulazione qui sotto, guarda una popolazione rimodellarsi davanti ai tuoi occhi mentre la pressione selettiva cambia.</p>`,
          facts: [
            { e: '🦠', t: `I batteri possono evolvere resistenza agli antibiotici in appena 11 giorni — l'evoluzione non è un processo lento quando le generazioni sono brevi.` },
            { e: '🐋', t: `Le balene si sono evolute da mammiferi terrestri circa 50 milioni di anni fa. I loro antenati erano creature a quattro zampe, simili a cervi, che si addentravano nei fiumi per nutrirsi.` },
            { e: '👁️', t: `L'occhio si è evoluto indipendentemente almeno 40 volte separate in diversi lignaggi animali — la stessa soluzione utile, scoperta più e più volte dalla selezione naturale.` },
          ],
          formula: null, sim: 'evolution',
        },
        student: {
          title: `Genetica di popolazione della selezione, della deriva e della speciazione`,
          body: `<p>Riduci l'evoluzione alla sua definizione ed è solo <strong>cambiamento delle frequenze alleliche nel tempo</strong>, guidato da quattro forze: la <em>selezione naturale</em>, la <em>deriva genetica</em> (campionamento casuale in popolazioni finite), la <em>mutazione</em> (variazione nuova) e il <em>flusso genico</em> (migrazione). La selezione a un locus con frequenze alleliche \\(p\\) e \\(q = 1-p\\) e fitness \\(w_{11}, w_{12}, w_{22}\\) sposta \\(p\\) a ogni generazione di \\(\\Delta p = \\dfrac{pq\\,[\\,p(w_{11}-w_{12}) + q(w_{12}-w_{22})\\,]}{\\bar{w}}\\), scalato dalla fitness media \\(\\bar{w}\\). Il <strong>teorema fondamentale</strong> di Fisher rende inevitabile la direzione: la fitness media sale a un tasso pari alla varianza genetica additiva nella fitness. L'evoluzione macina in salita.</p>
<p>La salita non è però tutta la storia, perché anche il caso ha voce in capitolo. La <strong>deriva genetica</strong> scuote le frequenze alleliche puramente per la fortuna di chi capita di riprodursi, con varianza \\(p(1-p)/2N\\) per generazione. In una popolazione piccola quel rumore può soffocare il segnale: una volta che il vantaggio di una variante \\(s\\) scende sotto \\(1/2N\\), la deriva prevale sulla selezione, e persino mutazioni leggermente dannose possono derivare fino alla fissazione. Le popolazioni piccole, in effetti, evolvono in parte a caso.</p>
<p>Lascia che due popolazioni smettano di scambiarsi geni e derivano e si adattano allontanandosi finché non possono più incrociarsi — la <strong>speciazione</strong>. La via usuale è <em>allopatrica</em>: sorge una catena montuosa o dilaga un mare, spezza una popolazione, e l'isolamento finisce il lavoro. La speciazione <em>simpatrica</em>, che si divide senza alcuna barriera fisica, richiede una selezione disgregante insolitamente feroce. Il <strong>concetto biologico di specie</strong> di Mayr traccia la linea all'isolamento riproduttivo — anche se fa fatica sui microbi asessuati e sui fossili, ed è esattamente per questo che ecologi e filogenetisti tengono definizioni rivali in tasca.</p>`,
          facts: [
            { e: '🐟', t: `Le oltre 500 specie di ciclidi del lago Vittoria si sono evolute da un antenato comune in appena 15.000 anni — uno degli eventi di speciazione più rapidi mai documentati.` },
            { e: '🌺', t: `I fringuelli di Darwin sulle Galápagos mostrano un'evoluzione del becco misurabile nell'arco di una singola vita umana — Peter e Rosemary Grant la documentarono in 40 anni di lavoro sul campo.` },
            { e: '🦠', t: `L'esperimento di Lenski traccia l'evoluzione di E. coli in tempo reale dal 1988 — oltre 80.000 generazioni, osservando innovazioni chiave inclusa la capacità di consumare citrato in aerobiosi.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Selezione (Δp)', e: '\\Delta p = \\dfrac{pq\\,[\\,p(w_{11}-w_{12}) + q(w_{12}-w_{22})\\,]}{\\bar{w}}' },
            { n: 'Fitness media', e: '\\bar{w} = p^2 w_{11} + 2pq\\,w_{12} + q^2 w_{22}' },
            { sep: 1 },
            { n: 'Teorema di Fisher', e: '\\Delta\\bar{w} = V_A(w)/\\bar{w} \\ge 0' },
            { n: 'Varianza della deriva', e: '\\mathrm{Var}(\\Delta p) = \\dfrac{p(1-p)}{2N}' },
            { sep: 1 },
            { n: 'Tempo di fissazione neutrale', e: '\\bar{t}_{\\text{fix}} = -4N[\\,p\\ln p + (1-p)\\ln(1-p)\\,]' },
            { n: 'Selezione contro deriva', e: 's \\gg 1/2N', c: 'domina la selezione' },
          ] }, sim: 'evolution',
        },
        scholar: {
          title: `Filogenetica, la sintesi moderna ed evo-devo`,
          body: `<h4><span class="hn">01</span>La sintesi moderna</h4>
<p>Per decenni la selezione di Darwin e la genetica di Mendel stettero fianco a fianco con disagio — una continua, l'altra discreta. La <strong>sintesi moderna</strong> (anni '30–'50; Fisher, Wright, Haldane, Dobzhansky, Mayr) le saldò insieme, mostrando che la variazione liscia e continua è semplicemente ciò che ottieni da molti geni mendeliani che spingono ciascuno un tratto di poco. Trasformò l'evoluzione da narrazione avvincente a scienza quantitativa, con la genetica di popolazione a fornire le equazioni di come gli alleli salgono e scendono.</p>
<h4><span class="hn">02</span>Il coalescente: far scorrere il film all'indietro</h4>
<p>Uno spostamento potente fu smettere di chiedersi come i geni si diffondono <em>in avanti</em> e tracciare invece l'ascendenza di un campione <em>all'indietro</em>. Il <strong>coalescente</strong> di Kingman (1982) fa esattamente questo: segui un qualsiasi insieme di copie geniche indietro nel tempo e si fondono, coppia per coppia, finché tutte raggiungono un singolo <em>antenato comune più recente</em>, su una scala temporale di circa \\(4N_e\\) generazioni per i diploidi. Questa visione genealogica è il modello nullo di lavoro della genetica di popolazione moderna, trasformando schemi nel DNA odierno in inferenze su dimensione, struttura e storia della popolazione.</p>
<h4><span class="hn">03</span>Ricostruire l'albero della vita</h4>
<p>Date le sequenze di molte specie, la <strong>filogenetica</strong> cerca l'albero che le spiega meglio. I metodi a massima verosimiglianza scelgono la topologia e le lunghezze dei rami che massimizzano \\(P(\\text{dati} \\mid T, \\text{modello})\\), tipicamente sotto un modello di sostituzione GTR con variazione dei tassi tra siti distribuita secondo una gamma. Gli approcci bayesiani (MrBayes, BEAST) vanno oltre, campionando l'intera distribuzione a posteriori \\(P(T \\mid \\text{dati})\\) via MCMC e restituendo un'onesta incertezza sia sull'ordine di ramificazione sia sui tempi.</p>
<h4><span class="hn">04</span>L'orologio molecolare e il tempo profondo</h4>
<p>Poiché le sostituzioni neutrali si accumulano a un ritmo grosso modo costante, la distanza genetica fa anche da tempo trascorso — un <strong>orologio molecolare</strong>. I modelli a orologio rilassato, che lasciano variare il tasso tra i lignaggi, calibrati contro i fossili, spingono le date ben oltre ciò che le ossa da sole consentono: eucarioti circa 2 miliardi di anni fa, animali attorno ai 750 milioni, tetrapodi circa 375 milioni. Il DNA ci permette di leggere una data approssimativa da eventi che non hanno lasciato alcun fossile.</p>
<h4><span class="hn">05</span>Evo-devo: è la regolazione, non i geni</h4>
<p>La sorpresa più grande dell'era del genoma fu quanto <em>pochi</em> geni separino una mosca da un umano, e quanto della differenza stia nel <em>quando e dove</em> i geni si accendono. La <strong>biologia evolutiva dello sviluppo</strong> mostrò che la diversità morfologica sgorga perlopiù da cambiamenti nella regolazione genica, non nel contenuto genico. I <em>geni Hox</em>, un gruppo conservato che imprime l'identità lungo l'asse del corpo, sono condivisi da tutti i bilateri; sposta i confini della loro espressione e un segmento fa crescere una zampa invece di un'antenna, senza toccare i geni stessi.</p>
<h4><span class="hn">06</span>Un'unica cassetta degli attrezzi, riusata all'infinito</h4>
<p>L'evoluzione si rivela una riutilizzatrice implacabile di parti. Gli stessi interruttori principali ricorrono in lignaggi selvaggiamente separati — <em>Pax6</em> che orchestra gli occhi, <em>Dlx</em> gli arti, <em>Nkx2.5</em> i cuori — una <em>cassetta degli attrezzi dello sviluppo</em> condivisa, spiegata più e più volte in nuovi contesti. Spiega perché occhi, arti e cuori si sono evoluti per convergenza così tante volte: la natura non li reinventava da zero ogni volta, ma ricomponeva un antico set di controlli genetici. L'unità della vita è scritta non solo nei geni condivisi, ma nei modi condivisi di usarli.</p>`,
          facts: [
            { e: '🧬', t: `I geni Hox sono così conservati che un gene Hox di topo trapiantato in un moscerino della frutta può salvare lo sviluppo del moscerino — separati da 600 milioni di anni di evoluzione.` },
            { e: '🌳', t: `L'ultimo antenato comune universale (LUCA) di tutta la vita visse ~3,8 miliardi di anni fa. Aveva già ribosomi, replicazione del DNA e un codice genetico — il che implica una lunga evoluzione precedente che ancora non possiamo vedere.` },
            { e: '🔬', t: `Il DNA antico da ossa di Neanderthal sequenziato nel 2010 mostra che tutti gli umani non africani portano l'1–4% di DNA neandertaliano — prova di incroci ~50.000 anni fa.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Tempo del coalescente', e: 'E[T_{\\text{MRCA}}] \\approx 4 N_e \\text{ generazioni}', c: 'diploide' },
            { n: 'θ di Watterson', e: '\\theta_W = \\dfrac{S}{a_n},\\quad a_n = \\sum_{i=1}^{n-1}\\tfrac{1}{i}' },
            { sep: 1 },
            { n: 'Albero ML', e: 'T^{*} = \\arg\\max_T\\, P(\\text{dati} \\mid T, \\text{modello})' },
            { n: 'Sostituzione GTR', e: 'Q_{ij} = \\pi_j\\, r_{ij}\\;(i \\ne j)' },
            { sep: 1 },
            { n: 'Rapporto dN/dS', e: '\\omega < 1\\text{ purificante},\\; =1\\text{ neutrale},\\; >1\\text{ positiva}' },
            { n: 'D di Tajima', e: 'D = (\\pi - \\theta_W)/\\mathrm{SD}', c: 'testa la neutralità' },
          ] }, sim: 'evolution',
        },
      },
    },
    graphs: {
      title: 'Teoria dei grafi e reti',
      teaser: 'Sei strette di mano separano due persone qualsiasi sulla Terra. Internet, il tuo cervello e un\'epidemia obbediscono tutti alla stessa matematica nascosta.',
      chips: ['Reti', 'Topologia', 'Connessioni'],
      lvls: {
        junior: {
          title: `Tutto è connesso — ma come?`,
          body: `<p>Supponi di voler far arrivare un messaggio a un famoso sconosciuto che non hai mai incontrato — un capo di Stato, una star del cinema. Lo dici a un amico, che lo dice a un suo amico, che lo dice a uno dei suoi. Quanti passaggi prima di raggiungere <em>chiunque</em> sul pianeta? Nel 1967 Stanley Milgram fece l'esperimento con lettere spedite e ottenne una risposta sorprendente: circa <strong>sei</strong>. Sei gradi di separazione, fra te e chiunque sia vivo.</p>
<p>È il potere silenzioso delle <strong>reti</strong>. Una rete — i matematici la chiamano <strong>grafo</strong> — non è altro che un insieme di <em>nodi</em> (le cose) uniti da <em>archi</em> (i collegamenti). Le tue amicizie sono un grafo. Lo sono le città collegate da strade, le pagine web cucite insieme da collegamenti ipertestuali, i neuroni intrecciati nel tuo cervello, le proteine che reagiscono dentro una cellula. Stesso scheletro, carne selvaggiamente diversa.</p>
<p>La grande sorpresa degli ultimi cinquant'anni è che queste reti del tutto diverse condividono la stessa architettura nascosta. Decifra quell'architettura e puoi prevedere come si diffonde un'epidemia, come un blackout dilaga in una rete elettrica, come un solo aeroporto chiuso ingarbuglia i viaggi globali, come una voce diventa virale. Nella simulazione qui sotto, guarda l'informazione propagarsi in una rete — e nota come un singolo <strong>hub</strong> ben collegato possa cambiare tutto.</p>`,
          facts: [
            { e: '🌐', t: `L'intero World Wide Web ha una lunghezza media dei percorsi di appena 19 clic fra due pagine qualsiasi — su miliardi di percorsi possibili.` },
            { e: '🦠', t: `Il COVID-19 si diffuse così in fretta in parte perché i viaggi aerei creano una rete "a piccolo mondo" — un singolo evento superdiffusore in una città raggiunge ogni continente in pochi giorni.` },
            { e: '⚡', t: `Il blackout del Nord-Est del 2003 dilagò dal guasto di una sola linea elettrica in Ohio fino a togliere corrente a 55 milioni di persone in 8 stati — pura vulnerabilità di rete.` },
          ],
          formula: null, sim: 'graphs',
        },
        student: {
          title: `Piccoli mondi, reti a invarianza di scala e i ponti di Eulero`,
          body: `<p>La teoria dei grafi nacque nel 1736, quando Leonhard Euler affrontò i <strong>ponti di Königsberg</strong>: potevi passeggiare per la città attraversando ciascuno dei suoi sette ponti esattamente una volta? Euler dimostrò che non potevi — e il suo ragionamento buttò via del tutto la mappa, tenendo solo ciò che collega a cosa. Una passeggiata del genere esiste precisamente quando il grafo ha 0 o 2 vertici di grado dispari, e nient'altro conta. Scartare la geometria e tenere la pura connettività fondò un intero ramo della matematica.</p>
<p>Un grafo \\(G = (V, E)\\) è solo un insieme di vertici \\(V\\) e archi \\(E\\). Il <strong>grado</strong> \\(d(v)\\) conta i vicini di un vertice, e la <strong>distribuzione dei gradi</strong> \\(P(k)\\) — la probabilità che un nodo a caso abbia \\(k\\) collegamenti — si rivela l'impronta digitale della rete. Sparpaglia archi a caso (il modello di Erdős–Rényi) e ottieni un'ordinata distribuzione di Poisson e una netta <em>transizione di fase</em>: supera \\(p = 1/n\\) e una componente connessa gigante scatta in essere. Ma le reti reali non somigliano affatto a quelle casuali. Sono <strong>piccoli mondi</strong> — strettamente aggregate eppure a pochi passi di distanza (Watts–Strogatz, 1998) — e <strong>a invarianza di scala</strong>, con una \\(P(k) \\sim k^{-\\gamma}\\) a coda pesante (Barabási–Albert, 1999) che emerge ogni volta che i nuovi arrivati preferiscono collegarsi ai già popolari.</p>
<p>Quella forma a invarianza di scala porta con sé un sorprendente doppio taglio. Queste reti sono <strong>robuste al guasto casuale</strong> — quasi ogni nodo è secondario, così un knockout casuale raramente tocca un hub — eppure <strong>fragili a un colpo mirato</strong>: rimuovi la manciata di hub più grandi e l'intera cosa si frantuma. È perché internet si scrolla di dosso i crash dei router ma teme un attacco coordinato, e perché vaccinare i pochi super-connettori ferma un'epidemia molto più efficacemente che vaccinare persone a caso.</p>`,
          facts: [
            { e: '🧬', t: `La rete di interazione proteica del lievito è a invarianza di scala con γ ≈ 2,4 — rimuovere l'1% delle proteine-hub uccide la cellula; rimuovere il 99% dei non-hub no.` },
            { e: '🔗', t: `La rete di collegamenti di Wikipedia ha una lunghezza media dei percorsi ~3,5 — puoi raggiungere quasi ogni articolo da qualsiasi altro in 4 clic.` },
            { e: '📊', t: `Il modello di attaccamento preferenziale di Barabási-Albert genera reti a invarianza di scala con γ = 3 — coincidente con l'esponente misurato nel World Wide Web.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Lemma delle strette di mano', e: '\\sum_v d(v) = 2|E|' },
            { n: 'Cammino euleriano', e: '\\text{esiste} \\iff 0 \\text{ o } 2 \\text{ vertici di grado dispari}' },
            { sep: 1 },
            { n: 'Coefficiente di clustering', e: 'C(v) = \\dfrac{2\\,e_v}{d(v)\\,(d(v)-1)}', c: 'e_v = archi fra i vicini' },
            { n: 'Lunghezza media dei percorsi', e: 'L = \\dfrac{1}{n^2}\\sum_{u,v} d(u,v)' },
            { sep: 1 },
            { n: 'Gradi a invarianza di scala', e: 'P(k) \\sim k^{-\\gamma},\\quad 2 < \\gamma < 3' },
            { n: 'Transizione di fase ER', e: 'p_c = \\dfrac{1}{n}', c: 'emerge la componente gigante' },
          ] }, sim: 'graphs',
        },
        scholar: {
          title: `Teoria spettrale dei grafi, camminate aleatorie ed epidemie di rete`,
          body: `<h4><span class="hn">01</span>Il laplaciano: una matrice che ricorda la forma</h4>
<p>Riduci una rete a numeri e tutta la sua struttura vive nel <strong>laplaciano del grafo</strong> \\(L = D - A\\), costruito dalla matrice dei gradi \\(D\\) e dalla matrice di adiacenza \\(A\\). Diagonalizzalo e gli autovalori \\(0 = \\lambda_1 \\le \\lambda_2 \\le \\dots \\le \\lambda_n\\) leggono la geometria della rete senza che tu la disegni mai. Il numero di autovalori nulli conta i pezzi connessi; i divari fra gli altri codificano colli di bottiglia, simmetrie e come il calore o una voce diffonderebbero nel grafo. La teoria spettrale dei grafi è la sorprendente affermazione che puoi davvero ascoltare la forma di una rete.</p>
<h4><span class="hn">02</span>Il valore di Fiedler: quanto connessa, davvero?</h4>
<p>Il secondo autovalore \\(\\lambda_2\\) — la <em>connettività algebrica</em> di Fiedler — è quello da tenere d'occhio. Sta appena sopra lo zero quando un grafo è a malapena tenuto insieme e sale man mano che il grafo si intreccia più stretto. La disuguaglianza di Cheeger rende esatta quell'intuizione, intrappolando il vero collo di bottiglia \\(h(G)\\) (il taglio più economico rispetto alla sua dimensione) fra due funzioni dello spettro: \\(\\dfrac{\\lambda_2}{2} \\le h(G) \\le \\sqrt{2\\lambda_2}\\). Un \\(\\lambda_2\\) piccolo garantisce che esista un taglio rado; uno grande certifica che la rete non ha una cucitura debole lungo cui strapparsi.</p>
<h4><span class="hn">03</span>Clustering spettrale: trovare le comunità</h4>
<p>Quello stesso autovettore di Fiedler si guadagna da vivere in pratica. Ordina i nodi per il segno della loro voce in esso e il grafo tende a dividersi lungo la sua cucitura più naturale — il cuore del <strong>clustering spettrale</strong>, l'algoritmo dietro gran parte del rilevamento moderno di comunità, della segmentazione di immagini e delle raccomandazioni. Ciò che sembra un astratto problema agli autovalori si rivela il modo più pulito che si conosca per chiedere: "quali parti di questa rete appartengono davvero insieme?"</p>
<h4><span class="hn">04</span>Camminate aleatorie, mescolamento e PageRank</h4>
<p>Metti un gettone a vagare nel grafo, saltando a un vicino a caso a ogni passo — una <strong>camminata aleatoria</strong> con matrice di transizione \\(P = D^{-1}A\\). Si assesta in una distribuzione stazionaria \\(\\pi(v) = d(v)/2|E|\\), puramente proporzionale al grado, e il tempo che le serve per dimenticare da dove è partita — il <em>tempo di mescolamento</em> — scala come \\(\\tau_{\\text{mix}} \\sim \\log n / \\lambda_2\\): i grafi "expander" ben intrecciati si mescolano in un batter d'occhio, quelli con colli di bottiglia arrancano. Aggiungi una piccola possibilità di teletrasportarti ovunque e hai <strong>PageRank</strong>, la camminata aleatoria la cui distribuzione stazionaria Google usò per prima per classificare il web.</p>
<h4><span class="hn">05</span>Epidemie sulle reti: la soglia che svanisce</h4>
<p>Fai girare un contagio <strong>SIR</strong> — suscettibile, infetto, guarito — su un grafo e compare una soglia netta: l'epidemia attecchisce solo quando \\(\\beta/\\mu > 1/\\lambda_{\\max}(A)\\), governata dal più grande autovalore della matrice di adiacenza. Qui la topologia a invarianza di scala tira fuori il suo trucco più cattivo. Per \\(\\gamma \\le 3\\), \\(\\lambda_{\\max}\\) cresce senza limite man mano che la rete cresce, così la soglia scivola fino a <em>zero</em>: su una grande rete a invarianza di scala un'epidemia si diffonde per quanto debole sia la trasmissione. È il motivo profondo per cui i virus informatici e la disinformazione online sono così ostinati — gli hub offrono loro un punto d'appoggio gratis.</p>
<h4><span class="hn">06</span>I problemi difficili nascosti nei grafi più semplici</h4>
<p>Con tutta questa eleganza, alcune delle domande sui grafi dall'aria più semplice sono tra le più difficili conosciute. Chiedere se un grafo abbia un <em>cammino hamiltoniano</em> — un percorso che visita ogni nodo esattamente una volta — è NP-completo, e un algoritmo efficiente per esso rovescerebbe migliaia di altri problemi in un colpo e risolverebbe <strong>P contro NP</strong>, la domanda aperta più profonda dell'informatica. I grafi sono il punto in cui la connettività astratta sbatte contro il muro della difficoltà computazionale — che è la stanza accanto.</p>`,
          facts: [
            { e: '🔢', t: `Il divario spettrale λ₂ del grafo di Petersen è uguale a 2 — è il più piccolo expander 3-regolare, ed è per questo che compare in così tanti risultati di teoria estremale dei grafi.` },
            { e: '🌍', t: `La soglia epidemica su internet (a invarianza di scala, γ≈2,1) è di fatto zero — il che spiega perché i virus informatici persistano indefinitamente a qualsiasi tasso di trasmissione.` },
            { e: '🏆', t: `Il problema P contro NP equivale a chiedere se il problema del cammino hamiltoniano (un grafo ha un percorso che visita ogni nodo una volta?) possa essere risolto efficientemente — ancora irrisolto.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Laplaciano del grafo', e: 'L = D - A' },
            { n: 'Spettro', e: '0 = \\lambda_1 \\le \\lambda_2 \\le \\dots \\le \\lambda_n' },
            { sep: 1 },
            { n: 'Disuguaglianza di Cheeger', e: '\\dfrac{\\lambda_2}{2} \\le h(G) \\le \\sqrt{2\\lambda_2}' },
            { n: 'Mescolamento della camminata', e: '\\tau_{\\text{mix}} \\sim \\dfrac{\\log n}{\\lambda_2}' },
            { sep: 1 },
            { n: 'Soglia epidemica SIR', e: '\\dfrac{\\beta}{\\mu} > \\dfrac{1}{\\lambda_{\\max}(A)}' },
            { n: 'Limite a invarianza di scala', e: '\\lambda_{\\max}(A) \\to \\infty \\;(\\gamma \\le 3) \\;\\Rightarrow\\; \\text{soglia} \\to 0' },
          ] }, sim: 'graphs',
        },
      },
    },
    trig: {
      title: 'Trigonometria e il cerchio unitario',
      teaser: 'Un punto che ruota su un cerchio disegna un\'onda — e quell\'onda fa girare la musica, le maree e ogni schermo che possiedi.',
      chips: ['Seno', 'Coseno', 'Angoli'],
      lvls: {
        junior: {
          title: `Il cerchio che disegna un'onda`,
          body: `<p>Disegna un cerchio e segna un punto sul suo bordo. Ora fai girare lentamente il punto tutto intorno, e osserva solo la sua <em>altezza</em> — quanto sta sopra o sotto il centro. Appare qualcosa di magico: mentre il punto gira e rigira, la sua altezza traccia un'onda morbida che si ripete all'infinito. Quell'onda ha un nome, l'<strong>onda sinusoidale</strong>, ed era nascosta dentro l'umile cerchio da sempre.</p>
<p>I due numeri che inchiodano il punto sono i mattoni della <strong>trigonometria</strong>. La sua altezza è il <strong>seno</strong> dell'angolo; quanto sta a sinistra o a destra è il <strong>coseno</strong>. Mentre l'angolo cresce da 0° fino a 360° e ricomincia, seno e coseno scivolano dolcemente fra +1 e -1. È tutto qui ciò che sono davvero: la posizione verticale e orizzontale di un punto che gira attorno a un cerchio di raggio 1 — il <strong>cerchio unitario</strong>.</p>
<p>Non è solo curiosità da lezione di matematica. Quello stesso schema cerchio-in-onda sta dietro quasi tutto ciò che si ripete: il suono di una nota musicale, l'oscillazione di un pendolo, le maree, la corrente alternata nei muri di casa, il dondolio di una barca. Qualsiasi cosa che cicla può essere scritta con seni e coseni — ed è per questo che questa piccola immagine spunta ovunque guardi, nella fisica, nell'ingegneria, nella musica e nella grafica al computer.</p>`,
          facts: [
            { e: '🎵', t: `Una nota musicale pura è letteralmente un'onda sinusoidale nell'aria — la nota La è 440 di quelle onde ogni secondo.` },
            { e: '🎡', t: `Sali su una ruota panoramica e traccia la tua altezza nel tempo e disegni un'onda sinusoidale perfetta: alta in cima, bassa in fondo.` },
            { e: '🌊', t: `Seno e coseno sono la stessa onda, solo sfasata — il coseno è semplicemente il seno partito un quarto di giro prima.` },
          ],
          formula: null, sim: 'trig',
        },
        student: {
          title: `Il cerchio unitario, e seno, coseno e tangente`,
          body: `<p>Metti un cerchio di raggio 1 nell'origine e prendi un punto su di esso all'angolo \\(\\theta\\) (misurato in senso antiorario dal semiasse x positivo). Per definizione le coordinate di quel punto sono \\((\\cos\\theta,\\ \\sin\\theta)\\). Quindi il coseno è la coordinata x e il seno è la coordinata y — punto. Tutto il resto della trigonometria si dispiega da lì. E poiché il raggio è 1, Pitagora dà all'istante l'identità \\(\\sin^2\\theta + \\cos^2\\theta = 1\\).</p>
<p>In un triangolo rettangolo le stesse funzioni sono rapporti di lati: seno = opposto/ipotenusa, coseno = adiacente/ipotenusa, tangente = opposto/adiacente = \\(\\sin\\theta/\\cos\\theta\\). Il cerchio unitario e il triangolo sono la stessa idea — il triangolo è solo il piccolo triangolo rettangolo formato dal punto, dal centro e dall'asse x. La tangente misura la pendenza della retta del raggio, e schizza all'infinito a 90°, dove quella retta è verticale.</p>
<p>Poiché il punto torna al punto di partenza a ogni giro completo, tutte e tre le funzioni sono <strong>periodiche</strong>, ripetendosi ogni 360° (o \\(2\\pi\\) radianti). I radianti, dove un cerchio intero è \\(2\\pi\\), sono l'unità naturale: l'angolo in radianti è letteralmente la lunghezza dell'arco attorno a un cerchio unitario. Accelera la rotazione e cambi la frequenza dell'onda; scala il cerchio e cambi la sua ampiezza — le due manopole dietro ogni onda in natura.</p>`,
          facts: [
            { e: '📐', t: `sin²θ + cos²θ = 1 per ogni angolo — è solo Pitagora applicato al raggio di 1 del cerchio unitario.` },
            { e: '♾️', t: `tan 90° è indefinita: lì la retta del raggio è verticale, quindi la sua "pendenza" schizza all'infinito.` },
            { e: '🔄', t: `I radianti misurano l'angolo come lunghezza dell'arco, quindi un cerchio intero è 2π radianti — perché la sua circonferenza è 2π × raggio.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Punto sul cerchio', e: '(\\cos\\theta,\\ \\sin\\theta)' },
            { n: 'Identità pitagorica', e: '\\sin^2\\theta + \\cos^2\\theta = 1' },
            { n: 'Tangente', e: '\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}' },
            { sep: 1 },
            { n: 'SOH-CAH-TOA', e: '\\sin=\\tfrac{opp}{hyp},\\ \\cos=\\tfrac{adj}{hyp},\\ \\tan=\\tfrac{opp}{adj}' },
            { n: 'Radianti', e: '360° = 2\\pi\\ \\text{rad}' },
          ] }, sim: 'trig',
        },
        scholar: {
          title: `Dai triangoli alle serie di Taylor, alle onde e alle rotazioni`,
          body: `<h4><span class="hn">01</span>Radianti e calcolo</h4>
<p>Seno e coseno diventano puliti solo in radianti: \\(\\tfrac{d}{dx}\\sin x = \\cos x\\) e \\(\\tfrac{d}{dx}\\cos x = -\\sin x\\). Ciascuno è la derivata dell'altro (a meno di un segno), quindi insieme soddisfano \\(y'' = -y\\) — l'equazione differenziale di ogni oscillazione, da una molla a un circuito LC.</p>
<h4><span class="hn">02</span>Serie di Taylor e formula di Eulero</h4>
<p>Entrambi hanno sviluppi polinomiali (di Taylor) infiniti, e questi si intrecciano con l'esponenziale tramite la <strong>formula di Eulero</strong> \\(e^{i\\theta} = \\cos\\theta + i\\sin\\theta\\). Poni \\(\\theta = \\pi\\) e ottieni \\(e^{i\\pi} + 1 = 0\\), cinque costanti fondamentali in una sola riga. Gli esponenziali complessi sono il travestimento preferito dei fisici per le onde.</p>
<h4><span class="hn">03</span>Fourier: tutto è seni</h4>
<p>Qualsiasi segnale che si ripete, per quanto frastagliato, è una somma di seni e coseni di frequenze diverse — una <em>serie di Fourier</em>. È per questo che il cerchio unitario sottende in silenzio la compressione audio, i formati di immagine, l'elaborazione dei segnali e la matematica della meccanica quantistica.</p>
<h4><span class="hn">04</span>Rotazioni e oltre</h4>
<p>Seno e coseno sono le voci della matrice di rotazione 2D, quindi guidano tutta la grafica al computer, la robotica e la meccanica orbitale. La stessa coppia si generalizza alle iperboliche \\(\\sinh\\) e \\(\\cosh\\) — dove il cerchio diventa un'iperbole — che descrivono i cavi appesi e la geometria della relatività ristretta.</p>`,
          facts: [
            { e: '🌀', t: `L'identità di Eulero e^{iπ}+1=0 lega cinque dei numeri più importanti della matematica — spesso votata come l'equazione più bella della matematica.` },
            { e: '🎼', t: `Fourier dimostrò che ogni segnale che si ripete è una somma di onde sinusoidali — la matematica che permette a MP3 e JPEG di comprimere suoni e immagini.` },
            { e: '🤖', t: `Ogni rotazione nella grafica al computer e nella robotica è costruita da seni e coseni disposti in una matrice di rotazione.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Derivate', e: '\\tfrac{d}{dx}\\sin x = \\cos x,\\quad \\tfrac{d}{dx}\\cos x = -\\sin x' },
            { n: 'Formula di Eulero', e: 'e^{i\\theta} = \\cos\\theta + i\\sin\\theta' },
            { n: 'Identità di Eulero', e: 'e^{i\\pi} + 1 = 0' },
            { sep: 1 },
            { n: 'Matrice di rotazione', e: '\\begin{pmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix}' },
          ] }, sim: 'trig',
        },
      },
    },
    prob: {
      title: 'Probabilità e la curva a campana',
      teaser: 'Perché tutto si raggruppa al centro? L\'universo ha una forma preferita.',
      chips: ['Statistica', 'Probabilità', 'Distribuzione normale'],
      lvls: {
        junior: {
          title: `Perché il centro vince sempre!`,
          body: `<p>Immagina una tavola tempestata di file di chiodini disposti a triangolo. Lascia cadere una pallina in cima, e a ogni chiodino rimbalza a sinistra o a destra a caso — un lancio di moneta equo, ogni volta. Dopo essere ruzzolata fino in fondo, dove finisce?</p>
<p>Quasi sempre <strong>da qualche parte vicino al centro</strong> — e c'è un motivo delizioso. Per finire all'estrema destra, la pallina dovrebbe rimbalzare a destra a <em>ogni singolo chiodino</em> di fila, come ottenere dieci teste di seguito: possibile, ma raro. Per finire vicino al centro le basta più o meno lo stesso numero di sinistre e destre, e ci sono migliaia di diverse combinazioni sinistra-destra che ce la portano. Il centro vince non perché qualcosa guidi la pallina, ma semplicemente perché ci sono molti più modi per raggiungerlo.</p>
<p>Lascia cadere abbastanza palline e si ammucchiano in un dolce cumulo — alto al centro, che digrada in modo uniforme su entrambi i lati. Quella è la <strong>curva a campana</strong>, e una volta che l'hai conosciuta comincerai a vederla ovunque: le altezze delle persone, le temperature giornaliere, i voti degli esami, i minuscoli errori di ogni misurazione. La ricetta non cambia mai. Ogni volta che un esito è la somma di tanti piccoli spintoni indipendenti, il centro è dove più spesso si cancellano — ed è dove più spesso atterri.</p>`,
          facts: [
            { e: '📏', t: `La maggior parte degli adulti è alta attorno ai 170 cm. Pochissimi superano i 2 m o restano sotto 1,4 m — la curva a campana all'opera nella biologia umana!` },
            { e: '🎯', t: `Lanciare una moneta 100 volte dà quasi sempre tra 40 e 60 teste. Ottenerne meno di 30 o più di 70 sarebbe straordinario.` },
            { e: '🌡️', t: `Gli errori di temperatura giornalieri nelle previsioni del tempo seguono una curva a campana — i meteorologi la usano per calcolare gli intervalli di confidenza.` },
          ],
          formula: null, sim: 'prob',
        },
        student: {
          title: `La distribuzione binomiale e il limite normale`,
          body: `<p>La macchina dei chiodini ha un nome — la <strong>macchina di Galton</strong>, costruita da Francis Galton nel 1887. Con \\(n\\) file, una pallina fa \\(n\\) scelte indipendenti sinistra/destra, ciascuna un lancio di moneta equo, e la casella in cui finisce conta semplicemente quante volte è andata a destra, \\(k\\). Quei conteggi seguono la <strong>distribuzione binomiale</strong> \\(P(k) = \\binom{n}{k}(0.5)^n\\).</p>
<p>Quel \\(\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}\\) non è altro che un conteggio di quanti percorsi distinti raggiungono la casella \\(k\\) — ed è tutta la storia. Con 7 file ci sono \\(2^7 = 128\\) percorsi ugualmente probabili in tutto; la casella centrale è alimentata da \\(\\binom{7}{3} = 35\\) di essi, mentre ogni bordo estremo ne ha esattamente uno. Più percorsi, più probabilità. Ora spingi su \\(n\\) e la binomiale frastagliata si liscia nella <strong>distribuzione normale (gaussiana)</strong>, con media \\(\\mu = np\\) e dispersione \\(\\sigma = \\sqrt{np(1-p)}\\). Non è un caso fortunato; è imposto dal teorema del limite centrale.</p>
<p>Una volta che una quantità è normale, la <strong>regola 68–95–99,7</strong> ti dice quasi tutto a colpo d'occhio: circa il 68% dei valori cade entro \\(1\\sigma\\) dalla media, il 95% entro \\(2\\sigma\\) e il 99,7% entro \\(3\\sigma\\). È perché i fisici insistono sui "5 sigma" prima di festeggiare: un picco a cinque sigma ha meno di una probabilità su 3,5 milioni di essere un caso, e quella è l'asticella che una vera scoperta di particelle deve superare.</p>`,
          facts: [
            { e: '📈', t: `Altezze, pressione sanguigna, punteggi del QI e la maggior parte delle misure biologiche sono distribuite approssimativamente in modo normale, perché risultano da molti fattori genetici e ambientali indipendenti.` },
            { e: '🎰', t: `I casinò guadagnano perché il vantaggio del banco, applicato su milioni di scommesse, converge a un profitto medio affidabile per la legge dei grandi numeri.` },
            { e: '🏅', t: `Galton usò la tavola per dimostrare la "regressione verso la media": genitori alti tendono ad avere figli leggermente più bassi di loro — i valori estremi regrediscono verso la media nel corso delle generazioni.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Probabilità binomiale', e: 'P(k;n,p) = \\binom{n}{k} p^k (1-p)^{n-k}' },
            { n: 'Media', e: '\\mu = np' },
            { n: 'Deviazione standard', e: '\\sigma = \\sqrt{np(1-p)}' },
            { sep: 1 },
            { n: 'Densità gaussiana', e: 'f(x) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-(x-\\mu)^2/2\\sigma^2}' },
            { sep: 1 },
            { n: 'Regola 68–95–99,7', e: 'P(|X-\\mu| < \\sigma) \\approx 0.6827', c: '0.9545 a 2σ, 0.9973 a 3σ' },
          ] }, sim: 'prob',
        },
        scholar: {
          title: `Il teorema del limite centrale, Berry–Esséen e l'universalità della statistica gaussiana`,
          body: `<h4><span class="hn">01</span>Il teorema dietro la portata della curva a campana</h4>
<p>Il <strong>teorema del limite centrale</strong> è il motivo per cui un'unica curva infesta tutta la scienza. Prendi variabili indipendenti e identicamente distribuite \\(X_1,\\dots,X_n\\) con media \\(\\mu\\) e varianza finita \\(\\sigma^2\\) — e non conta davvero cosa siano, dadi o redditi o conteggi di fotoni — poi standardizza la loro media: \\(Z_n = \\dfrac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}}\\). Quando \\(n\\to\\infty\\), \\(Z_n\\) converge in distribuzione alla normale standard \\(N(0,1)\\). Gli ingredienti sono dimenticati; sopravvive solo la campana. Quella cancellazione dei dettagli è la cosa più profonda al suo riguardo.</p>
<h4><span class="hn">02</span>Perché è vero: l'impronta di Fourier</h4>
<p>La dimostrazione più pulita passa per le <strong>funzioni caratteristiche</strong> — trasformate di Fourier delle distribuzioni, \\(\\varphi_X(t) = \\mathbb{E}[e^{itX}]\\) — che trasformano la scomoda convoluzione della somma di variabili in un'ordinaria moltiplicazione. Prendi i logaritmi, sviluppa in Taylor attorno all'origine, e i primi due termini sono esattamente la media e la varianza; tutto ciò che è più alto è soffocato da potenze di \\(1/\\sqrt{n}\\). Ciò che resta è \\(\\log\\varphi_{Z_n}(t) \\to -t^2/2\\), ed \\(e^{-t^2/2}\\) è la firma inconfondibile della gaussiana. La curva a campana è semplicemente ciò che ottieni quando sopravvivono solo i primi due momenti.</p>
<h4><span class="hn">03</span>Quanto in fretta: il limite di Berry–Esséen</h4>
<p>La convergenza è una cosa; la convergenza che puoi effettivamente <em>usare</em> è un'altra. Il <strong>teorema di Berry–Esséen</strong> inchioda l'errore. Con \\(\\rho = \\mathbb{E}[|X-\\mu|^3]\\) il terzo momento assoluto, il divario nel caso peggiore fra la distribuzione di \\(Z_n\\) e la vera normale obbedisce a \\(\\sup_x |F_n(x) - \\Phi(x)| \\le \\dfrac{C\\rho}{\\sigma^3\\sqrt{n}}\\), con \\(C \\le 0.4748\\). Il tasso \\(1/\\sqrt{n}\\) è ottimale — quadruplica il campione per dimezzare l'errore — e le distribuzioni asimmetriche, che portano un \\(\\rho\\) grande, strisciano verso la campana più lentamente di quelle simmetriche.</p>
<h4><span class="hn">04</span>Quando la campana si rompe: code pesanti</h4>
<p>C'è un prezzo d'ingresso: la varianza finita. Rompi quella condizione e la gaussiana perde del tutto la presa. La <strong>distribuzione di Cauchy</strong> — il rapporto di due normali — ha code così grasse che la sua varianza, e persino la sua media, semplicemente non esistono; media un milione di estrazioni di Cauchy e non stai meglio che con una. Somme del genere convergono invece alle <strong>distribuzioni stabili di Lévy</strong>, una famiglia più ampia con code \\(P(X>x)\\sim x^{-\\alpha}\\) per \\(0<\\alpha\\le 2\\), di cui la gaussiana (\\(\\alpha=2\\)) è solo il caso speciale docile. Mercati, terremoti e valanghe vivono qui fuori — ed è per questo che gli "eventi centennali" continuano a presentarsi in anticipo.</p>
<h4><span class="hn">05</span>Oltre l'indipendenza</h4>
<p>I dati reali sono raramente così ben educati, e il teorema si allunga per raggiungerli. Ci sono versioni per variabili debolmente dipendenti, per array triangolari sotto la condizione di Lindeberg e per somme dove a nessun singolo termine è permesso dominare. Le dinamiche gaussiane correlate hanno i loro cavalli da tiro: il <strong>processo di Ornstein–Uhlenbeck</strong> e il suo cugino discreto, il modello AR(1), descrivono un rumore che torna verso la media, affiorando ovunque, dai tassi d'interesse alle tensioni di membrana dei neuroni alle oscillazioni climatiche.</p>
<h4><span class="hn">06</span>Perché la natura continua a scegliere la gaussiana</h4>
<p>Cucito insieme, il TLC spiega perché la campana è l'impostazione predefinita dell'universo. Qualsiasi cosa tu possa misurare che sia costruita da una folla di piccoli contributi grosso modo indipendenti — un'altezza da migliaia di geni e pasti, il rumore termico da innumerevoli elettroni che si spintonano, un errore da molte minuscole imperfezioni — deriva verso la stessa forma. Sottoscrive anche in silenzio la statistica classica: test t, intervalli di confidenza e barre d'errore si appoggiano tutti alla normalità per campioni grandi. La curva a campana non è la forma preferita della natura per gusto. È la forma che resta una volta che ai dettagli è permesso cancellarsi.</p>`,
          facts: [
            { e: '🔬', t: `La distribuzione t di Student è corretta per campioni piccoli (n < 30) e converge alla normale quando n → ∞ — diretta conseguenza del TLC.` },
            { e: '💹', t: `Il pricing delle opzioni di Black-Scholes assume rendimenti logaritmici distribuiti normalmente — un'approssimazione del TLC che crolla durante i crolli di mercato (code grasse).` },
            { e: '🎲', t: `La distribuzione di Cauchy (rapporto di due normali) ha media indefinita e varianza infinita — il suo TLC fallisce, e la media campionaria NON converge.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Teorema del limite centrale', e: 'Z_n = \\dfrac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}} \\;\\xrightarrow{d}\\; N(0,1)' },
            { sep: 1 },
            { n: 'Funzione caratteristica', e: '\\varphi_X(t) = \\mathbb{E}\\!\\left[e^{itX}\\right]' },
            { n: 'Limite gaussiano', e: '\\log\\varphi_{Z_n}(t) \\to -\\dfrac{t^2}{2}' },
            { sep: 1 },
            { n: 'Berry–Esséen', e: '\\sup_x |F_n(x) - \\Phi(x)| \\le \\dfrac{C\\rho}{\\sigma^3\\sqrt{n}}', c: 'C ≤ 0.4748' },
            { n: 'Coda stabile di Lévy', e: 'P(X > x) \\sim x^{-\\alpha},\\quad 0 < \\alpha \\le 2' },
          ] }, sim: 'prob',
        },
      },
    },
    fractal: {
      title: 'Frattali e infinito',
      teaser: 'Una costa ha lunghezza infinita. Un fiocco di neve contiene sé stesso per sempre. Com\'è possibile?',
      chips: ['Geometria', 'Autosomiglianza', 'Caos'],
      lvls: {
        junior: {
          title: `Forme che contengono sé stesse!`,
          body: `<p>Guarda da vicino una felce. Ora ingrandisci uno dei suoi rametti laterali — è praticamente una piccola felce. Ingrandisci di nuovo un ramo di <em>quel</em> ramo, ed ecco un'altra piccola felce. Una forma che continua a somigliare a sé stessa per quanto ingrandisci ha un nome: è <strong>autosomigliante</strong>, e le forme che riescono in questo trucco si chiamano <strong>frattali</strong>.</p>
<p>La natura ne è piena. Fiocchi di neve, coste, creste montuose e fulmini sono tutti frattali — e lo è anche la tua cena. Taglia una testa di broccolo romanesco e troverai una spirale fatta di spirali più piccole fatte di spirali ancora più piccole. Perfino i tuoi polmoni giocano allo stesso gioco: le loro ramificazioni che si biforcano all'infinito stipano nel tuo petto una superficie grande come un campo da tennis, solo per farti respirare.</p>
<p>La superstar della famiglia è l'<strong>insieme di Mandelbrot</strong>, una forma evocata da un'unica minuscola regola ripetuta più e più volte. Da lontano il suo contorno sembra quasi semplice, ma tuffati nel suo bordo e il dettaglio semplicemente non finisce mai — spirali vorticose, code di cavalluccio marino arricciate, copie in miniatura dell'intera forma, e poi altro dettaglio nascosto dentro quelle, all'infinito. Potrebbe essere l'oggetto più intricato di tutta la matematica, e cresce da una delle regole più semplici che tu possa mai scrivere.</p>`,
          facts: [
            { e: '🌿', t: `Il broccolo romanesco è un frattale naturale quasi perfetto — ogni fioretto è una versione in miniatura dell'intera testa!` },
            { e: '🌊', t: `La costa della Gran Bretagna diventa più lunga quanto più precisamente la misuri. Non c'è un'unica risposta "corretta" — è frattale!` },
            { e: '🫁', t: `La ramificazione frattale dei tuoi polmoni crea ~70 m² di superficie — abbastanza da coprire un campo da tennis, stipata nel tuo petto!` },
          ],
          formula: null, sim: 'fractal',
        },
        student: {
          title: `Dimensione frattale e l'insieme di Mandelbrot`,
          body: `<p>La geometria ordinaria tratta dimensioni intere: un punto è 0, una linea 1, un quadrato 2, un cubo 3. I frattali infrangono in silenzio quella regola — vivono a <strong>dimensioni frazionarie</strong>, la <em>dimensione di Hausdorff</em>. L'idea è chiedersi come si moltiplica il dettaglio quando ingrandisci. Scala una linea di 3 e ottieni 3 copie; scala un quadrato di 3 e ottieni \\(9 = 3^2\\); un cubo, \\(27 = 3^3\\). Leggi l'esponente e hai la dimensione. Per una forma fatta di \\(N\\) copie, ciascuna rimpicciolita di \\(1/s\\), è \\(D = \\dfrac{\\log N}{\\log s}\\).</p>
<p>Dai in pasto il <strong>fiocco di neve di Koch</strong> a quella formula — ogni segmento sostituito da una gobba di 4 pezzi, ciascuno lungo un terzo, quindi \\(N=4\\) e \\(s=3\\) — e ne esce \\(D = \\dfrac{\\log 4}{\\log 3} \\approx 1.26\\): più di una linea, meno di un piano. La parte inquietante è che il suo perimetro è <em>infinito</em>, \\(L_n = (4/3)^n L_0 \\to \\infty\\), mentre l'area che racchiude resta finita. È esattamente per questo che una costa non ha un'unica lunghezza — misurala con un righello più fine e continui a scoprire altre insenature.</p>
<p>L'<strong>insieme di Mandelbrot</strong> cresce da una ricetta quasi offensivamente semplice: itera \\(z_{n+1} = z_n^2 + c\\) partendo da \\(z_0 = 0\\). Un numero complesso \\(c\\) appartiene all'insieme se quella successione non scappa mai verso l'infinito. I punti appena fuori sfuggono a velocità diverse, e colorarli in base a quanto in fretta fuggono dipinge quei famosi aloni psichedelici. Il bordo stesso è senza fondo: ingrandisci un punto qualsiasi sul bordo e continuano a sbocciare strutture fresche — spirali, valli a cavalluccio marino, minuscole copie perfette dell'intero insieme — senza fine.</p>`,
          facts: [
            { e: '🌀', t: `Il bordo dell'insieme di Mandelbrot ha dimensione di Hausdorff esattamente 2 — infinitamente increspato. Ingrandire rivela sempre nuovi mini-insiemi di Mandelbrot!` },
            { e: '📡', t: `Le antenne frattali (usate negli smartphone moderni) ricevono più frequenze perché la loro struttura autosomigliante risuona a più scale simultaneamente.` },
            { e: '🩺', t: `I tumori maligni hanno una dimensione frattale misurabilmente più alta del tessuto sano — uno strumento diagnostico quantitativo per il cancro.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Iterazione di Mandelbrot', e: 'z_{n+1} = z_n^2 + c,\\quad z_0 = 0' },
            { n: 'Insieme di Mandelbrot', e: 'M = \\{\\, c \\in \\mathbb{C} : \\sup_n |z_n| < \\infty \\,\\}' },
            { sep: 1 },
            { n: 'Dimensione di Hausdorff', e: 'D = \\dfrac{\\log N}{\\log s}' },
            { n: 'Fiocco di neve di Koch', e: 'D = \\dfrac{\\log 4}{\\log 3} \\approx 1.2619' },
            { sep: 1 },
            { n: 'Perimetro di Koch', e: 'L_n = \\left(\\tfrac{4}{3}\\right)^{n} L_0 \\to \\infty', c: 'area finita, perimetro infinito' },
          ] }, sim: 'fractal',
        },
        scholar: {
          title: `Dinamica complessa, insiemi di Julia e connessioni con la teoria del caos`,
          body: `<h4><span class="hn">01</span>Insiemi di Julia: la frontiera caotica</h4>
<p>Fissa un numero complesso \\(c\\) e itera \\(f_c(z) = z^2 + c\\). Alcuni punti di partenza corrono via verso l'infinito; altri restano limitati per sempre. L'<strong>insieme di Julia</strong> \\(J_c\\) è il filo del rasoio fra i due — il bordo della regione che fugge, e un luogo di caos genuino, dove due vicini che sembrano identici possono finire in destini del tutto diversi. L'insieme di Julia <em>pieno</em> \\(K_c\\) raccoglie ogni punto che non sfugge mai. Sposta \\(c\\) e \\(J_c\\) si trasforma selvaggiamente: un cerchio liscio a \\(c=0\\), una dendrite ramificata un po' più in là, uno spruzzo di polvere sconnessa oltre.</p>
<h4><span class="hn">02</span>L'insieme di Mandelbrot come atlante degli insiemi di Julia</h4>
<p>Ecco il ponte che solleva l'insieme di Mandelbrot oltre la mera decorazione. <strong>\\(c\\) sta in \\(M\\) precisamente quando il suo insieme di Julia \\(J_c\\) è connesso</strong>; nell'istante in cui \\(c\\) lascia \\(M\\), \\(J_c\\) si frantuma in polvere di Cantor totalmente sconnessa — e non c'è nulla nel mezzo. Douady e Hubbard dimostrarono questa netta dicotomia nel 1982, riformulando \\(M\\) come un unico catalogo di ogni insieme di Julia quadratico insieme. Ogni punto dell'insieme di Mandelbrot è, in effetti, una cartolina da un diverso mondo caotico.</p>
<h4><span class="hn">03</span>Uniformizzazione e la grande questione aperta</h4>
<p>Andarono oltre, costruendo una mappa conforme esplicita dall'esterno di \\(M\\) sull'esterno del disco unitario tramite la <em>coordinata di Böttcher</em> \\(\\varphi_c(z) = \\lim_{n\\to\\infty} [f_c^{\\,n}(z)]^{2^{-n}}\\). Un vantaggio: \\(M\\) è connesso — tutt'altro che ovvio nelle immagini, dove "isole" sparse si rivelano legate alla terraferma da filamenti troppo sottili per essere visti. Se \\(M\\) sia anche <em>localmente</em> connesso — la <strong>congettura MLC</strong> — è il problema aperto centrale della materia. Una dimostrazione fisserebbe l'intera struttura combinatoria di \\(M\\) in una sola mossa; ha resistito per quarant'anni.</p>
<h4><span class="hn">04</span>Dove i frattali incontrano il caos</h4>
<p>Taglia l'insieme di Mandelbrot lungo l'asse reale e ti imbatti in qualcosa di un angolo del tutto diverso della matematica: la <strong>mappa logistica</strong> \\(x_{n+1} = r\\,x_n(1-x_n)\\), il modello da manuale del caos. Spingi \\(r\\) da 1 verso 4 e una popolazione stabile prima si assesta, poi si divide oscillando fra due valori, poi quattro, poi otto — una <em>cascata di raddoppio del periodo</em> — prima di collassare nel caos pieno. La vera spina dorsale dell'insieme di Mandelbrot è letteralmente questo diagramma di biforcazione travestito.</p>
<h4><span class="hn">05</span>La sorprendente costante di Feigenbaum</h4>
<p>Misura quanto in fretta si accumulano quelle divisioni e gli intervalli si restringono di un rapporto che converge alla <strong>costante di Feigenbaum</strong> \\(\\delta \\approx 4.6692\\). La meraviglia è la sua universalità: lo stessissimo numero scandisce la strada verso il caos in rubinetti che gocciolano, circuiti oscillanti e fluidi in convezione — sistemi che non condividono alcuna fisica, solo la forma di un'unica gobba. Feigenbaum lo risolse negli anni '70 con idee di gruppo di rinormalizzazione prese di peso dalla fisica statistica, svelando un ordine nascosto che scorre sotto il caos stesso.</p>
<h4><span class="hn">06</span>Una curva ruvida come un piano</h4>
<p>Quanto increspato può diventare un bordo? Per l'insieme di Mandelbrot, la risposta è: al massimo. Shishikura dimostrò nel 1998, con delicata chirurgia quasi-conforme, che la dimensione di Hausdorff di \\(\\partial M\\) è esattamente <strong>2</strong> — il massimo che una curva planare possa raggiungere. Pur tracciando un contorno unidimensionale, si increspa così violentemente che, al limite, si comporta come qualcosa che riempie area a tutti gli effetti. Ruvidità infinita, spremuta da \\(z^2 + c\\), la più semplice regola non lineare che ci sia.</p>`,
          facts: [
            { e: '🔢', t: `La congettura MLC (Mandelbrot localmente connesso?) implicherebbe che la descrizione combinatoria di M è completa — ha resistito alla dimostrazione per 40 anni.` },
            { e: '📐', t: `La costante di Feigenbaum δ ≈ 4,6692 compare nelle cascate di raddoppio del periodo di rubinetti gocciolanti, circuiti elettronici e convezione di Rayleigh-Bénard — sempre lo stesso numero!` },
            { e: '🌊', t: `Il flusso turbolento di un fluido esibisce struttura multifrattale — regioni diverse dello spazio scalano con esponenti di Hölder locali diversi, descritti dallo spettro multifrattale f(α).` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Mappa quadratica', e: 'f_c(z) = z^2 + c,\\quad z_0 = 0' },
            { n: 'Insieme di Mandelbrot', e: 'M = \\{\\, c \\in \\mathbb{C} : \\sup_n |f_c^{\\,n}(0)| < \\infty \\,\\}' },
            { sep: 1 },
            { n: 'Insieme di Julia', e: 'J_c = \\partial\\{\\, z : f_c^{\\,n}(z) \\to \\infty \\,\\}', c: 'connesso ⟺ c ∈ M' },
            { n: 'Coordinata di Böttcher', e: '\\varphi_c(z) = \\lim_{n\\to\\infty} [f_c^{\\,n}(z)]^{2^{-n}}' },
            { sep: 1 },
            { n: 'Mappa logistica', e: 'x_{n+1} = r\\,x_n(1 - x_n)' },
            { n: 'Costante di Feigenbaum', e: '\\delta \\approx 4.6692', c: 'dim_H(∂M) = 2 (Shishikura 1998)' },
          ] }, sim: 'fractal',
        },
      },
    },
    calculus: {
      title: 'Calcolo e cambiamento',
      teaser: 'Come misuriamo la velocità di qualcosa che non si muove mai a velocità costante? La risposta ha cambiato la scienza per sempre.',
      chips: ['Derivate', 'Integrali', 'Infinito'],
      lvls: {
        junior: {
          title: `Misurare il cambiamento — la matematica del movimento!`,
          body: `<p>Lancia una palla dritta in aria. Sale veloce, poi più lentamente, resta sospesa per un battito di cuore in cima, poi cade sempre più in fretta. Ecco una domanda subdola che ha lasciato perplessa la gente per secoli: quanto velocemente si muove in un <em>esatto</em> istante — non in un secondo, nemmeno in un millesimo di secondo, ma in un singolo momento congelato? Ferma del tutto il tempo e la palla non si è mossa affatto, quindi il solito "distanza diviso tempo" ti consegna uno sconcertante zero su zero.</p>
<p>Newton e Leibniz lo risolsero nel Seicento, lavorando separatamente, e la loro idea è splendidamente semplice: ingrandisci una curva liscia qualsiasi abbastanza da vicino e comincia a sembrare una linea retta. La pendenza di quella linea è la velocità in quell'istante — e, più in generale, la <strong>derivata</strong>, il tasso a cui qualcosa sta cambiando proprio ora. La ripidità diventa velocità.</p>
<p>Fai girare la stessa macchina all'indietro — somma infinitamente tante fette infinitamente sottili — e ottieni l'<strong>integrale</strong>, che ti consegna aree, volumi, distanze e grandi totali. Derivate e integrali sono due facce della stessa medaglia, e insieme sono forse gli strumenti più potenti che la matematica abbia mai prodotto, facendo girare in silenzio la fisica, l'ingegneria, la medicina, l'economia e quasi ogni scienza che esista.</p>`,
          facts: [
            { e: '🚀', t: `I calcoli di traiettoria della NASA per ogni missione spaziale usano il calcolo — nello specifico equazioni differenziali dalle leggi di Newton.` },
            { e: '💊', t: `La farmacocinetica (come i farmaci si muovono nel tuo corpo) è governata da equazioni differenziali — il calcolo dice ai medici ogni quanto prescrivere.` },
            { e: '📱', t: `Ogni animazione sul tuo telefono usa il calcolo per calcolare curve morbide, percorsi di movimento e simulazioni fisiche in tempo reale.` },
          ],
          formula: null, sim: 'calculus',
        },
        student: {
          title: `Derivate, integrali e il teorema fondamentale del calcolo`,
          body: `<p>La <strong>derivata</strong> è costruita da un limite che fissa negli occhi il problema dello "zero su zero" e lo batte: \\(f'(x) = \\lim_{h\\to 0} \\dfrac{f(x+h) - f(x)}{h}\\). Geometricamente è la pendenza della retta tangente; fisicamente, se \\(f(t)\\) è la posizione allora \\(f'(t)\\) è la velocità e \\(f''(t)\\) l'accelerazione. Due regole reggono gran parte del lavoro: la regola della potenza \\(\\dfrac{d}{dx}x^n = n x^{n-1}\\) e la regola della catena \\(\\dfrac{d}{dx}f(g(x)) = f'(g(x))\\,g'(x)\\) per sbucciare funzioni annidate.</p>
<p>L'<strong>integrale definito</strong> \\(\\int_a^b f(x)\\,dx\\) è l'area con segno sotto una curva, definita come il limite di rettangoli sempre più fini — una somma di Riemann \\(\\lim_{n\\to\\infty}\\sum_i f(x_i)\\,\\Delta x\\). Poi arriva la battuta finale che lega insieme l'intera materia, il <strong>teorema fondamentale del calcolo</strong>: se \\(F' = f\\), allora \\(\\int_a^b f(x)\\,dx = F(b) - F(a)\\). Derivazione e integrazione sembrano lavori del tutto diversi — trovare pendenze contro trovare aree — eppure sono inversi esatti. Quell'unico fatto è il cardine su cui gira tutta la materia.</p>
<p>Punta il calcolo sul <em>tempo</em> e ottieni le <strong>equazioni differenziali</strong>, il linguaggio che la natura usa per enunciare le sue leggi. La più semplice, \\(\\dfrac{dy}{dt} = ky\\), cattura tutto ciò la cui crescita tiene il passo con la propria dimensione — popolazioni, interesse composto, decadimento radioattivo — e si risolve elegantemente in \\(y(t) = y_0 e^{kt}\\). Aggiungi un po' di complessità e lo stesso meccanismo consegna la seconda legge di Newton, l'equazione delle onde e l'equazione del calore, le equazioni differenziali che fanno girare essenzialmente tutta la fisica e l'ingegneria.</p>`,
          facts: [
            { e: '💹', t: `L'interesse composto A = Pe^{rt} è la soluzione di dA/dt = rA — la crescita esponenziale in finanza è letteralmente calcolo.` },
            { e: '⚡', t: `Le quattro equazioni differenziali di Maxwell descrivono tutto l'elettromagnetismo — dalle onde radio alla luce — usando la notazione del calcolo vettoriale.` },
            { e: '🌡️', t: `L'equazione del calore ∂u/∂t = α∇²u fu risolta da Fourier usando la serie che ora porta il suo nome.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Derivata (definizione)', e: 'f\'(x) = \\lim_{h\\to 0} \\dfrac{f(x+h) - f(x)}{h}' },
            { n: 'Regola della potenza', e: '\\dfrac{d}{dx}x^n = n x^{n-1}' },
            { sep: 1 },
            { n: 'TFC, parte I', e: '\\dfrac{d}{dx}\\int_a^x f(t)\\,dt = f(x)' },
            { n: 'TFC, parte II', e: '\\int_a^b f(x)\\,dx = F(b) - F(a)' },
            { sep: 1 },
            { n: 'Crescita esponenziale', e: '\\dfrac{dy}{dt} = ky \\;\\Rightarrow\\; y(t) = y_0 e^{kt}' },
            { n: 'Serie di Taylor', e: 'f(x) = \\sum_{n=0}^{\\infty} \\dfrac{f^{(n)}(a)}{n!}(x-a)^n' },
          ] }, sim: 'calculus',
        },
        scholar: {
          title: `Analisi reale, teoria della misura e l'integrale di Lebesgue`,
          body: `<h4><span class="hn">01</span>Dove Riemann si esaurisce</h4>
<p>L'integrale che incontri per primo — quello di Riemann — spezza l'asse orizzontale in strisce sottili e ne somma le aree. Funziona splendidamente per le funzioni lisce della fisica, ma si strozza su qualsiasi cosa troppo frastagliata. L'orrore classico è la funzione di Dirichlet, uguale a 1 sui razionali e 0 sugli irrazionali: fra due punti qualsiasi salta infinite volte, nessuna striscia si assesta mai, e l'integrale di Riemann si rifiuta categoricamente di esistere. Per fare analisi onestamente — per scambiare limiti e integrali senza incrociare le dita — serve una definizione più robusta.</p>
<h4><span class="hn">02</span>L'idea di Lebesgue: affetta il codominio, non il dominio</h4>
<p>La mossa di Lebesgue (1902) fu di girare l'immagine su un fianco. Invece di partizionare l'input, partiziona l'<em>output</em>: chiedi quanto del dominio cade in ciascuna sottile banda orizzontale di valori, e pesa per quella quantità — \\(\\int f\\,d\\mu = \\sup \\sum_i y_i\\,\\mu\\!\\left(f^{-1}[y_i, y_{i+1}]\\right)\\). La funzione di Dirichlet diventa all'istante banale: i razionali, dove vale 1, formano un insieme di <em>misura nulla</em>, quindi non contribuiscono nulla e l'integrale è semplicemente 0. Lo spazio \\(L^1(\\mu)\\) delle funzioni integrabili diventa uno spazio di Banach completo — una casa adeguata per l'analisi.</p>
<h4><span class="hn">03</span>La misura, e le cose che non puoi misurare</h4>
<p>Sotto tutto sta la <strong>teoria della misura</strong>, l'arte di assegnare in modo coerente una "dimensione" agli insiemi — lunghezza sulla retta, area nel piano, probabilità in uno spazio campionario — che sopravvive alle unioni numerabili. È abbastanza generale da dimensionare stranezze come l'insieme di Cantor, eppure ha un limite netto: concedendo l'assioma della scelta, puoi costruire insiemi così patologici che nessuna misura coerente esiste per essi. Il paradosso di Banach–Tarski si annida qui, affettando una sfera in pochi frammenti non misurabili e riassemblandoli in due sfere identiche alla prima. La teoria della misura è precisamente il linguaggio che spiega perché ciò dovrebbe sembrare impossibile.</p>
<h4><span class="hn">04</span>I teoremi di convergenza — il vero premio</h4>
<p>Gli analisti non cambiarono per eleganza; cambiarono per potenza. L'integrale di Lebesgue arriva con teoremi per scambiare un limite e un integrale — il passo che i fisici fanno di continuo, di solito senza pensarci due volte. Il <strong>teorema della convergenza dominata</strong> è il cavallo da tiro: se \\(f_n \\to f\\) puntualmente e sono tutte limitate da un'unica \\(g\\) integrabile, con \\(|f_n| \\le g\\), allora \\(\\lim \\int f_n\\,d\\mu = \\int f\\,d\\mu\\). Riemann non offre una garanzia così pulita, e quasi ogni scambio di somma, limite e integrale nella fisica moderna si appoggia in silenzio a questo risultato.</p>
<h4><span class="hn">05</span>L² e Fourier: le funzioni come geometria</h4>
<p>Le funzioni a quadrato integrabile \\(L^2\\) formano uno <em>spazio di Hilbert</em> — una geometria a dimensione infinita dotata di lunghezze e angoli, in cui gli esponenziali complessi \\(\\{e^{inx}/\\sqrt{2\\pi}\\}\\) fungono da assi perpendicolari. Sviluppare una funzione in essi è solo calare delle perpendicolari, e l'identità di Parseval \\(\\|f\\|^2 = \\sum_n |\\hat{c}_n|^2\\) è Pitagora travestito: l'energia di un segnale è uguale all'energia del suo spettro. La versione continua, la <strong>trasformata di Fourier</strong> \\(\\hat{f}(\\xi) = \\int f(x)\\,e^{-2\\pi i \\xi x}\\,dx\\), porta la stessa geometria sull'intera retta reale.</p>
<h4><span class="hn">06</span>Dove tutto atterra</h4>
<p>Nulla di questo è ornamentale — è il pavimento su cui poggia la scienza moderna. La meccanica quantistica è lo studio dei vettori di stato in uno spazio di Hilbert, con \\(|\\hat{\\psi}(p)|^2\\) la densità di probabilità della quantità di moto e operatori al posto delle osservabili. La teoria della probabilità è la teoria della misura sotto un altro nome, e il teorema del limite centrale ne discende pulitamente tramite le funzioni caratteristiche. Ogni MP3, JPEG e risonanza magnetica è analisi di Fourier incassata nel silicio. Gli "infinitesimi" traballanti di Newton e Leibniz impiegarono due secoli a essere resi rigorosi — e quel rigore si rivelò il basamento della fisica del Novecento.</p>`,
          facts: [
            { e: '🎵', t: `La compressione MP3 e JPEG si basa entrambe su trasformate di Fourier / del coseno — eliminando le frequenze che gli umani non percepiscono per comprimere i file.` },
            { e: '🔬', t: `Le macchine per la risonanza magnetica ricostruiscono immagini 3D del corpo antitrasformando con Fourier i segnali di risonanza magnetica nucleare da milioni di voxel.` },
            { e: '🌐', t: `Il paradosso di Banach-Tarski: usando l'assioma della scelta, una sfera può essere decomposta e riassemblata in due sfere identiche — la teoria della misura è il motivo per cui ciò è paradossale.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Integrale di Lebesgue', e: '\\int f\\,d\\mu = \\sup \\sum_i y_i\\,\\mu\\!\\left(f^{-1}[y_i, y_{i+1}]\\right)' },
            { n: 'Convergenza dominata', e: '|f_n| \\le g \\in L^1 \\;\\Rightarrow\\; \\lim\\!\\int f_n = \\int \\lim f_n' },
            { sep: 1 },
            { n: 'Trasformata di Fourier', e: '\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x)\\,e^{-2\\pi i \\xi x}\\,dx' },
            { n: 'Identità di Parseval', e: '\\|f\\|^2 = \\sum_n |\\hat{c}_n|^2' },
            { sep: 1 },
            { n: 'Norma di Sobolev', e: '\\|f\\|_{H^k}^2 = \\sum_{|\\alpha|\\le k} \\|\\partial^\\alpha f\\|_{L^2}^2' },
          ] }, sim: 'calculus',
        },
      },
    },
    circuits: {
      title: 'Legge di Ohm e circuiti',
      teaser: 'La tensione spinge, la resistenza resiste, la corrente scorre — l\'unica equazione dietro ogni aggeggio che possiedi.',
      chips: ['Corrente', 'Tensione', 'Legge di Ohm'],
      lvls: {
        junior: {
          title: `La tensione spinge, la resistenza resiste, la corrente scorre`,
          body: `<p>L'elettricità in un filo si comporta molto come l'acqua in un tubo. La batteria è una pompa: fornisce la spinta — la <strong>tensione</strong> — che guida una <strong>corrente</strong> di carica elettrica lungo l'anello. Più grande la spinta, più grande il flusso. Collega una lampadina e quella carica in movimento scalda un sottile filamento finché diventa incandescente. Interrompi l'anello in un punto qualsiasi e tutto si ferma all'istante, perché la carica non ha più dove andare.</p>
<p>Ma il filo e la lampadina contrastano un po' anche il flusso, e quell'opposizione è la <strong>resistenza</strong>. Un filo sottile, lungo o cattivo conduttore resiste di più, proprio come un tubo stretto strozza l'acqua. Più resistenza significa meno corrente per la stessa spinta. Quindi la corrente è in realtà l'esito di un braccio di ferro: la tensione che cerca di spingere la carica in giro, la resistenza che cerca di trattenerla.</p>
<p>Georg Ohm scoprì che la regola che le collega è meravigliosamente semplice: <strong>corrente = tensione ÷ resistenza</strong>. Raddoppia la tensione della batteria e raddoppi la corrente. Raddoppia la resistenza e la dimezzi. Quell'unica relazione, imparabile in un pomeriggio, spiega perché una manopola dimmer abbassa una lampada, perché i cavi spessi trasportano più potenza e perché il caricabatterie del tuo telefono è così pignolo sulla tensione.</p>`,
          facts: [
            { e: '🔋', t: `Una batteria non immagazzina elettricità — immagazzina energia chimica e la spende spingendo la carica lungo un circuito. "Scarica" significa che la chimica è esaurita.` },
            { e: '💡', t: `Una vecchia lampadina a filamento trasforma in luce solo circa il 5% della sua energia; il resto diventa calore. I LED ribaltano quel rapporto, ed è per questo che restano freddi.` },
            { e: '⚡', t: `Gli elettroni derivano stupefacentemente lenti — millimetri al secondo — eppure il segnale elettrico che li mette in moto corre lungo il filo a quasi la velocità della luce.` },
          ],
          formula: null, sim: 'circuits',
        },
        student: {
          title: `La legge di Ohm, la potenza e cos'è davvero la corrente`,
          body: `<p>Una <strong>corrente</strong> \\(I\\) è il tasso a cui la carica scorre oltre un punto, misurato in ampere (coulomb al secondo). Per guidarla serve una differenza di potenziale — una <strong>tensione</strong> \\(V\\), in volt — qui fornita dalla batteria. Ogni conduttore reale si oppone al flusso con una <strong>resistenza</strong> \\(R\\), in ohm. La legge di Ohm lega tutti e tre: \\(V = IR\\), o equivalentemente \\(I = V/R\\). È meno una legge di natura che una proprietà dei materiali "ohmici", ma per i metalli tenuti a temperatura fissa vale notevolmente bene.</p>
<p>Riordinata come \\(I = V/R\\) racconta tutta la storia di un circuito semplice: alza la tensione della batteria e la corrente sale in proporzione; aggiungi resistenza e la corrente cala. Collega i resistori in <em>serie</em> e le loro resistenze si sommano, \\(R = R_1 + R_2 + \\dots\\); collegali in <em>parallelo</em> e a sommarsi sono i reciproci, \\(\\tfrac{1}{R} = \\tfrac{1}{R_1} + \\tfrac{1}{R_2}\\), così i percorsi in parallelo trasportano sempre più corrente totale di uno solo.</p>
<p>La corrente compie anche lavoro, e il tasso di quel lavoro è la <strong>potenza</strong>: \\(P = VI\\), che per la legge di Ohm è anche \\(P = I^2R = V^2/R\\). Quel termine \\(I^2R\\) è il motivo per cui la resistenza scalda le cose — tostapane, bollitori, lampadine a filamento e il mattone caldo del caricabatterie del portatile incassano tutti l'energia elettrica come calore. È anche perché la rete trasporta l'elettricità a tensioni enormi: per una data potenza, un \\(V\\) più alto significa un \\(I\\) più piccolo, e un \\(I\\) più piccolo significa molta meno energia sprecata a scaldare le linee.</p>`,
          facts: [
            { e: '🔌', t: `La tensione di rete è alta (≈120-230 V) ma gli elettrodomestici assorbono corrente modesta. Le centrali trasmettono a centinaia di migliaia di volt per abbattere le perdite.` },
            { e: '🌡️', t: `La resistenza di una lampadina sale mentre si scalda, quindi non obbedisce a V=IR con un valore fisso — la sua resistenza dipende dalla temperatura.` },
            { e: '🔗', t: `Le lucine in serie muoiono tutte quando una lampadina si guasta, perché interrompere l'unico anello ferma la corrente ovunque. Le stringhe in parallelo restano accese.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Legge di Ohm', e: 'V = IR' },
            { n: 'Corrente', e: 'I = \\dfrac{V}{R}' },
            { sep: 1 },
            { n: 'Potenza', e: 'P = VI = I^2R = \\dfrac{V^2}{R}' },
            { n: 'Serie', e: 'R = R_1 + R_2 + \\dots' },
            { n: 'Parallelo', e: '\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dots' },
          ] }, sim: 'circuits',
        },
        scholar: {
          title: `Dalla legge di Ohm alla teoria dei circuiti e alla sua origine microscopica`,
          body: `<h4><span class="hn">01</span>Le leggi di Kirchhoff chiudono il sistema</h4>
<p>La legge di Ohm da sola non può risolvere una rete — mette in relazione tensione e corrente di un elemento, ma non dice nulla su come gli elementi si collegano. Le due regole di Kirchhoff forniscono il resto. La <strong>legge delle correnti</strong> (conservazione della carica a un nodo: \\(\\sum I_{\\text{in}} = \\sum I_{\\text{out}}\\)) e la <strong>legge delle tensioni</strong> (conservazione dell'energia lungo un anello qualsiasi: \\(\\sum V = 0\\)) trasformano qualsiasi rete di resistori in un insieme risolvibile di equazioni lineari.</p>
<h4><span class="hn">02</span>Il quadro microscopico</h4>
<p>Dentro un metallo, gli elettroni di conduzione derivano sotto un campo applicato \\(E\\), diffondendosi di continuo contro il reticolo vibrante. Mediata su quel caos, \\(\\mathbf{J} = \\sigma \\mathbf{E}\\) — la vera forma locale della legge di Ohm, con \\(\\sigma\\) la conducibilità. Integrala lungo un filo uniforme e recuperi \\(V = IR\\) con \\(R = \\rho L/A\\). La resistenza è quindi geometria (\\(L/A\\)) moltiplicata per materiale (la resistività \\(\\rho\\)).</p>
<h4><span class="hn">03</span>Velocità di deriva contro velocità del segnale</h4>
<p>La velocità di deriva degli elettroni è minuscola — attorno a 0,1 mm/s — eppure una lampada si accende nell'istante in cui premi l'interruttore. La soluzione: il campo elettrico stesso si propaga lungo il conduttore a una frazione consistente di \\(c\\). Gli elettroni erano già distribuiti in tutto il filo; il campo si limita a dire loro di iniziare a spostarsi tutti insieme.</p>
<h4><span class="hn">04</span>Corrente alternata, impedenza e la rete</h4>
<p>Con la corrente alternata, condensatori e induttori aggiungono un'opposizione dipendente dalla frequenza chiamata reattanza, e la resistenza si generalizza a un'<em>impedenza</em> complessa \\(Z\\). La perdita \\(P = I^2R\\) è ciò che decise la "guerra delle correnti" dell'Ottocento: la corrente alternata vinse perché i trasformatori possono scambiare tensione con corrente a piacere, e la trasmissione ad alta tensione taglia il calore \\(I^2R\\) sprecato sulle lunghe distanze a una frazione.</p>
<h4><span class="hn">05</span>Quando la legge di Ohm fallisce</h4>
<p>Diodi, transistor, lampadine a filamento, elettroliti e plasmi sono tutti <em>non-ohmici</em>: le loro curve corrente-tensione si piegano invece di correre dritte. La legge di Ohm è l'approssimazione lineare a una relazione in generale non lineare — la retta tangente che capita di essere quasi esatta per un metallo freddo, e il motivo per cui è il punto da cui inizia ogni corso di elettronica.</p>`,
          facts: [
            { e: '🔥', t: `Le linee di trasmissione perdono potenza come calore I²R. Raddoppiare la tensione (e dimezzare la corrente) a parità di potenza taglia quelle perdite a un quarto.` },
            { e: '🧲', t: `La corrente alternata batté la continua per la rete perché i trasformatori alzano la tensione per la trasmissione e la abbassano per l'uso — cosa non facile da fare con la continua.` },
            { e: '💎', t: `I superconduttori hanno resistenza esattamente nulla sotto una temperatura critica: una corrente avviata in un anello superconduttore può circolare per anni senza alcuna batteria.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Legge di Ohm locale', e: '\\mathbf{J} = \\sigma \\mathbf{E}' },
            { n: 'Resistenza', e: 'R = \\rho \\dfrac{L}{A}' },
            { sep: 1 },
            { n: 'Corrente di Kirchhoff', e: '\\sum I_{\\text{in}} = \\sum I_{\\text{out}}' },
            { n: 'Tensione di Kirchhoff', e: '\\sum_{\\text{loop}} V = 0' },
            { n: 'Dissipazione', e: 'P = I^2R' },
          ] }, sim: 'circuits',
        },
      },
    },
    states: {
      title: 'Stati della materia',
      teaser: 'Ghiaccio, acqua, vapore — la stessa sostanza in tre travestimenti, e il calore è l\'unica differenza.',
      chips: ['Solido', 'Liquido', 'Gas'],
      lvls: {
        junior: {
          title: `Solido, liquido, gas — è tutta questione di quanto veloci si muovono le particelle`,
          body: `<p>Ghiaccio, acqua, vapore — tre cose completamente diverse, eppure sono tutte esattamente la stessa sostanza: \\(H_2O\\). L'unica differenza è quanta energia hanno le minuscole particelle e quanto strettamente si tengono l'una all'altra. Aggiungi calore e non cambi <em>cosa</em> sono le particelle, le fai solo agitare più velocemente. È tutto qui il segreto dei tre <strong>stati della materia</strong>.</p>
<p>In un <strong>solido</strong> le particelle sono impacchettate in uno schema ordinato e fisso, vibrando solo sul posto — così un solido mantiene la sua forma. Aggiungi calore e vibrano più forte finché si liberano dalle loro file e cominciano a scivolare l'una accanto all'altra: ora è un <strong>liquido</strong>, che scorre e prende la forma del suo contenitore ma mantiene lo stesso volume. Scaldalo ancora e le particelle si strappano completamente l'una dall'altra e volano libere, rimbalzando sulle pareti — un <strong>gas</strong>, che si spande a riempire qualsiasi spazio gli venga dato.</p>
<p>I salti fra gli stati hanno dei nomi: fusione e solidificazione (solido ↔ liquido), ebollizione e condensazione (liquido ↔ gas). Ecco una sorpresa: mentre qualcosa fonde o bolle, la sua temperatura non sale affatto, anche se continui a scaldarlo. Tutta quell'energia va a rompere i legami tra le particelle, non ad accelerarle. È per questo che una pentola d'acqua che bolle resta bloccata a 100 °C per quanto tu alzi il fornello.</p>`,
          facts: [
            { e: '🧊', t: `L'acqua è insolita: il ghiaccio galleggia sul proprio liquido, perché l'acqua solida è meno densa di quella liquida. Quasi tutto il resto affonda nel proprio fuso.` },
            { e: '🌡️', t: `Mentre il ghiaccio fonde o l'acqua bolle, la temperatura resta stabile — il calore va a rompere i legami, non ad alzare la temperatura.` },
            { e: '💨', t: `C'è un quarto stato, il plasma — gas surriscaldato privato degli elettroni. Stelle, fulmini e insegne al neon sono plasma, lo stato più comune nell'universo.` },
          ],
          formula: null, sim: 'states',
        },
        student: {
          title: `Moto delle particelle, cambiamenti di stato e calore latente`,
          body: `<p>La <strong>teoria cinetica</strong> dice che la materia è fatta di particelle in moto costante, e la temperatura è semplicemente una misura della loro <em>energia cinetica media</em>. Lo stato dipende da un braccio di ferro fra quel moto (che sparpaglia le particelle) e le forze attrattive fra loro (che le tengono insieme). Solido: vincono le forze, particelle bloccate in un reticolo, solo vibranti. Liquido: quasi pareggio, particelle a contatto ma mobili. Gas: vince il moto, particelle lontane e indipendenti.</p>
<p>Scaldare un solido segue una <strong>curva di riscaldamento</strong>: la temperatura sale costantemente, si appiattisce al punto di fusione, sale attraverso il liquido, si appiattisce al punto di ebollizione, poi sale attraverso il gas. I tratti piatti sono i cambiamenti di stato, e lì l'energia aggiunta — il <strong>calore latente</strong> — va interamente a vincere le forze intermolecolari, non ad alzare la temperatura. È perché le ustioni da vapore sono così gravi: il vapore che condensa scarica un grande calore latente dritto sulla tua pelle.</p>
<p>Conta anche la pressione, non solo la temperatura. Comprimi un gas abbastanza forte e liquefà; abbassa la pressione e un liquido bolle a una temperatura più bassa (ed è per questo che l'acqua bolle sotto i 100 °C in montagna). Un <strong>diagramma di fase</strong> mappa quale stato esiste a ogni pressione e temperatura, incluso il punto triplo (tutti e tre coesistono) e il punto critico (oltre il quale liquido e gas diventano una cosa sola).</p>`,
          facts: [
            { e: '🔥', t: `Il vapore a 100 °C ustiona molto peggio dell'acqua a 100 °C: mentre condensa rilascia il suo calore latente dritto nella tua pelle.` },
            { e: '🏔️', t: `L'acqua bolle sotto i 100 °C in montagna, dove la pressione dell'aria è più bassa — ed è per questo che cucinare richiede più tempo in quota.` },
            { e: '❄️', t: `Il ghiaccio secco (CO₂ solida) salta del tutto lo stato liquido: sublima direttamente da solido a gas a pressione ordinaria.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Temperatura', e: 'T \\propto \\overline{KE}', c: 'energia cinetica media' },
            { n: 'Calore latente', e: 'Q = mL', c: 'energia per un cambiamento di stato' },
            { sep: 1 },
            { n: 'Le transizioni', e: '\\text{solido} \\xrightarrow{T_m} \\text{liquido} \\xrightarrow{T_b} \\text{gas}' },
          ] }, sim: 'states',
        },
        scholar: {
          title: `Teoria cinetica, diagrammi di fase e gli stati oltre i tre principali`,
          body: `<h4><span class="hn">01</span>Teoria cinetico-molecolare</h4>
<p>Le particelle sono in moto incessante con una distribuzione di velocità di <em>Maxwell-Boltzmann</em>; la temperatura fissa la media, ma c'è sempre una dispersione. Quella dispersione è il motivo per cui l'evaporazione avviene ben sotto l'ebollizione: le molecole più veloci sfuggono dalla superficie, portando via energia e raffreddando ciò che resta — esattamente come il sudore ti raffredda.</p>
<h4><span class="hn">02</span>Le forze intermolecolari fissano le transizioni</h4>
<p>I punti di fusione ed ebollizione riflettono la forza dei legami fra le particelle — van der Waals < dipolo < legame a idrogeno < ionico o metallico. Il punto di ebollizione dell'acqua è sorprendentemente alto per una molecola così piccola a causa del legame a idrogeno, lo stesso legame che distanzia le molecole nel ghiaccio e lo fa galleggiare.</p>
<h4><span class="hn">03</span>Il diagramma di fase</h4>
<p>Una mappa pressione-temperatura divide solido, liquido e gas con linee di coesistenza. Due punti sono speciali: il <strong>punto triplo</strong>, l'unica P e T in cui tutti e tre coesistono, e il <strong>punto critico</strong>, oltre il quale la distinzione liquido-gas si dissolve in un unico fluido supercritico. I calori latenti sono le energie necessarie per attraversare ciascuna linea.</p>
<h4><span class="hn">04</span>Oltre i tre principali</h4>
<p>C'è il plasma — gas ionizzato, e lo stato più comune nell'universo visibile — e, vicino allo zero assoluto, stati genuinamente quantistici: i condensati di Bose-Einstein, in cui gli atomi si fondono in un unico stato quantistico condiviso, e i superfluidi e i superconduttori che scorrono o conducono con resistenza nulla. "Stato della materia" è un'idea assai più ricca dei tre che incontriamo per primi.</p>`,
          facts: [
            { e: '🥶', t: `Vicino allo zero assoluto, gli atomi possono fondersi in un condensato di Bose-Einstein — tutti a condividere un unico stato quantistico e a comportarsi come un singolo "super-atomo".` },
            { e: '💧', t: `Il punto triplo dell'acqua (0,01 °C, 611 Pa) è così riproducibile da essere stato usato per aiutare a definire la scala di temperatura kelvin.` },
            { e: '🌊', t: `Sopra il suo punto critico (374 °C, 218 atm) l'acqua diventa un fluido supercritico — né liquido né gas, e un solvente potente.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Energia cinetica media', e: '\\overline{KE} = \\tfrac{3}{2}k_BT' },
            { n: 'Calore latente', e: 'Q = mL' },
            { sep: 1 },
            { n: 'Clausius-Clapeyron', e: '\\dfrac{dP}{dT} = \\dfrac{L}{T\\,\\Delta V}', c: 'pendenza di un confine di fase' },
          ] }, sim: 'states',
        },
      },
    },
    thermo: {
      title: 'Calore e termodinamica',
      teaser: 'Perché il ghiaccio si scioglie sempre e il caffè si raffredda sempre? L\'universo ha una direzione.',
      chips: ['Entropia', 'Energia', 'Calore'],
      lvls: {
        junior: {
          title: `Il calore fluisce sempre dal caldo al freddo — mai all'indietro`,
          body: `<p>Lascia una cioccolata calda sul tavolo e torna più tardi: si è raffreddata. Ora nota la cosa che <em>non</em> accade mai — una bevanda fredda non si riscalda all'improvviso da sola tirando fuori il calore dalla stanza. Il calore viaggia sempre e solo in una direzione, dal caldo al freddo. Quella strada a senso unico sembra ovvia, ma si rivela una delle regole più profonde di tutta la fisica.</p>
<p>Ingrandisci abbastanza e ogni cosa — l'aria, la tua mano, questo schermo — è uno sciame di atomi che si agitano. "Caldo" significa solo che si agitano velocemente; "freddo" che si agitano lentamente. Quando la tua tazza tiepida incontra l'aria più fresca, gli atomi veloci urtano quelli lenti e condividono il loro movimento, come una folla che si spintona finché tutti si muovono allo stesso ritmo. La bevanda si raffredda, l'aria si scalda un poco, e si assestano a metà. Quello stato assestato e condiviso ha un nome: <strong>equilibrio</strong>.</p>
<p>Dietro la strada a senso unico si nasconde un'unica idea — l'<strong>entropia</strong>, grosso modo una misura di quanto le cose siano sparpagliate e confuse. Lasciato a sé stesso, il mondo va sempre alla deriva verso <em>più</em> confusione, mai meno. La tua stanza si mette in disordine da sola; non si riordina mai da sé. Una goccia d'inchiostro si srotola nell'acqua e non si raccoglie mai di nuovo in una goccia. Quella deriva implacabile è il motivo per cui un motore perfetto è impossibile, perché ricordi il passato ma non il futuro e — spinta al limite — come l'intero universo si spegnerà lentamente. Una tazza di caffè che si raffredda è l'universo che ti mostra in silenzio in che direzione scorre il tempo.</p>`,
          facts: [
            { e: '🧊', t: `Il ghiaccio assorbe calore mentre si scioglie ma resta a 0°C per tutto il tempo — tutta quell'energia rompe legami molecolari, non alza la temperatura.` },
            { e: '🌡️', t: `La temperatura più fredda possibile è −273,15°C (lo zero assoluto, 0 K). A quel punto gli atomi hanno il minimo movimento possibile — la meccanica quantistica impedisce loro di fermarsi del tutto.` },
            { e: '🚀', t: `I razzi funzionano grazie alla termodinamica: bruciando il carburante si crea gas estremamente caldo, che si espande rapidamente ed esce dal retro, generando spinta per la terza legge di Newton.` },
          ],
          formula: null, sim: 'thermo',
        },
        student: {
          title: `Le quattro leggi della termodinamica`,
          body: `<p>Quattro leggi reggono tutta la termodinamica, e insieme spiegano perché i motori sprecano carburante, perché le macchine a moto perpetuo sono una chimera e perché il tempo scorre in un'unica direzione. Furono scoperte fuori ordine — ed è per questo che la prima si chiama <em>zeresima</em>.</p>
<p>La <strong>legge zeresima</strong> è quella che nessuno si è preoccupato di scrivere finché non si è capito che tutti la davano per scontata: se A è in equilibrio termico con B, e B con C, allora anche A e C sono d'accordo. Quella transitività dall'aria banale è ciò che permette a un termometro di significare qualcosa — è perché un numero su un tubo di vetro può stare al posto di "quanto è caldo".</p>
<p>La <strong>prima legge</strong> è contabilità dell'energia, niente di più: \\(\\Delta U = Q - W\\). Qualunque calore \\(Q\\) versi dentro, meno il lavoro \\(W\\) che il sistema compie sul mondo esterno, è ciò che resta come energia interna. Nulla si crea o si distrugge, solo si scambia — chimica in calore in un motore, chimica in elettrica in una batteria, nucleare in luce solare in una stella. I conti tornano sempre.</p>
<p>La <strong>seconda legge</strong> è quella che morde: l'entropia di un sistema isolato non cala mai. Ogni cambiamento spontaneo la spinge verso l'alto, e quella deriva verso l'alto <em>è</em> la freccia del tempo — un bicchiere va in frantumi ma non si ricompone mai. Mette anche un tetto a ogni motore mai costruito. Carnot mostrò che persino uno perfetto, che fa la spola di calore fra un serbatoio caldo a \\(T_h\\) e uno freddo a \\(T_c\\), non può fare meglio di \\(\\eta = 1 - T_c/T_h\\). Finché \\(T_c > 0\\), l'efficienza perfetta è semplicemente fuori discussione — non per mancanza di ingegno, ma perché l'universo lo vieta.</p>
<p>La <strong>terza legge</strong> chiude il fondo della scala: quando \\(T \\to 0\\), l'entropia si assesta su un minimo costante (zero per un cristallo perfetto). Una curiosa conseguenza è che lo zero assoluto è irraggiungibile — puoi avvicinarti sempre di più, ma ogni passo ti rende meno, e non arrivi mai del tutto.</p>`,
          facts: [
            { e: '🏎️', t: `Un motore d'auto è tipicamente efficiente solo al 25–35%. Il resto dell'energia chimica del carburante è sprecato come calore — diretta conseguenza della seconda legge.` },
            { e: '❄️', t: `Un frigorifero sposta il calore dal freddo (interno) al caldo (stanza) — e questo richiede lavoro esterno (elettricità), coerentemente con la seconda legge.` },
            { e: '🔥', t: `Il Sole converte ~4 milioni di tonnellate di massa in energia al secondo tramite E = mc². Lo fa da 4,6 miliardi di anni e ha carburante per altri ~5 miliardi.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Prima legge', e: '\\Delta U = Q - W', c: 'conservazione dell\'energia' },
            { n: 'Variazione di entropia', e: '\\Delta S = \\dfrac{Q_{\\text{rev}}}{T}', c: 'processo reversibile' },
            { sep: 1 },
            { n: 'Legge dei gas ideali', e: 'PV = nRT', c: 'R = 8.314 J·mol⁻¹·K⁻¹' },
            { n: 'Efficienza di Carnot', e: '\\eta_{\\max} = 1 - \\dfrac{T_c}{T_h}' },
            { sep: 1 },
            { n: 'Costante di Boltzmann', e: 'k_B = 1.381\\times10^{-23}\\ \\text{J·K}^{-1}' },
          ] }, sim: 'thermo',
        },
        scholar: {
          title: `Meccanica statistica: dai microstati all'entropia dei buchi neri`,
          body: `<h4><span class="hn">01</span>Microstati, macrostati e il postulato statistico</h4>
<p>La termodinamica sembra una scienza di macchine a vapore e leggi dei gas, ma sotto è in realtà probabilità applicata. Tutto discende da un'ipotesi ingannevolmente modesta — il <em>postulato fondamentale</em>: un sistema isolato all'equilibrio ha uguale probabilità di trovarsi in uno qualsiasi dei suoi microstati accessibili. Conta quei microstati e hai fatto la fisica. Se \\(\\Omega(E,V,N)\\) è il numero di disposizioni microscopiche compatibili con l'energia, il volume e il numero di particelle macroscopici, allora \\(S = k_B \\ln \\Omega\\) di Boltzmann <em>è</em> l'entropia — non un vago "disordine", ma il logaritmo di un conteggio. Temperatura, pressione e potenziale chimico sono semplicemente come quel conteggio reagisce quando spingi su \\(E\\), \\(V\\) o \\(N\\): \\(\\tfrac{1}{T} = \\left(\\tfrac{\\partial S}{\\partial E}\\right)_{V,N}\\), e così via. Perché un gas si spande a riempire la sua scatola? Non perché qualcosa spinga via le molecole, ma perché le disposizioni sparpagliate superano quelle ordinate così assurdamente che aspetteresti circa \\(10^{10^{23}}\\) anni per cogliere ogni molecola raggomitolata in un angolo. L'equilibrio non è una legge di forza. È il banco che vince sempre.</p>
<h4><span class="hn">02</span>L'insieme canonico e la funzione di partizione</h4>
<p>I sistemi reali sono raramente isolati; stanno a contatto con un ambiente a una certa temperatura \\(T\\). Affida la contabilità dell'energia a un bagno termico e massimizza l'entropia \\(S = -k_B \\sum_i P_i \\ln P_i\\) a energia <em>media</em> fissa, e le probabilità saltano fuori come pesi di Boltzmann, \\(P_i = e^{-\\beta E_i}/Z\\) con \\(\\beta = 1/k_B T\\). Il normalizzatore \\(Z = \\sum_i e^{-\\beta E_i}\\) — la <strong>funzione di partizione</strong> — sembra un'umile somma, eppure racchiude in silenzio tutta la termodinamica. Differenzia il suo logaritmo e il resto viene giù: \\(U = -\\partial_\\beta \\ln Z\\), l'energia libera \\(F = -k_B T \\ln Z\\), l'entropia \\(S = -\\partial F/\\partial T\\), la pressione, la capacità termica. Lascia che anche le particelle vadano e vengano e passi all'insieme gran canonico, dove una fugacità \\(z = e^{\\beta\\mu}\\) tiene i conti. La parte rassicurante: una volta che \\(N\\) è grande, la scelta dell'insieme smette di contare — concordano tutti — così scegli quello che rende l'algebra più gentile.</p>
<h4><span class="hn">03</span>Potenziali, trasformate di Legendre e relazioni di Maxwell</h4>
<p>L'energia interna è il potenziale naturale quando controlli entropia e volume — ma chi controlla l'entropia in un laboratorio? In pratica fissi la temperatura, o la pressione, o entrambe, e ogni scelta richiede il proprio potenziale. Il ponte fra loro è la <strong>trasformata di Legendre</strong>, che scambia una variabile con la sua pendenza coniugata: Helmholtz \\(F = U - TS\\) a \\(T\\) fissa, entalpia \\(H = U + PV\\) a \\(P\\) fissa, Gibbs \\(G = U - TS + PV\\) per entrambe, il gran potenziale \\(\\Omega = F - \\mu N\\) quando il numero di particelle fluttua. Qualunque tu scelga, l'equilibrio lo <em>minimizza</em>. E poiché questi potenziali sono funzioni ben educate, l'ordine delle derivate seconde miste non può contare — quell'unico fatto ti consegna le <strong>relazioni di Maxwell</strong>, come \\(\\left(\\tfrac{\\partial S}{\\partial V}\\right)_T = \\left(\\tfrac{\\partial P}{\\partial T}\\right)_V\\), che barattano qualcosa che non puoi misurare con qualcosa che puoi. Esigi che i potenziali curvino nel verso giusto e ne segue la stabilità: capacità termiche positive, comprimibilità positive.</p>
<h4><span class="hn">04</span>Fluttuazioni e il teorema fluttuazione–dissipazione</h4>
<p>Le medie sono solo metà della storia; la meccanica statistica dice anche quanto le cose tremolano. Un sistema in un bagno termico non ha un'energia fissa — fluttua, e la dimensione della fluttuazione è agganciata a una quantità che già conosci: \\(\\langle \\Delta E^2 \\rangle = k_B T^2 C_V\\). Osserva la scala. L'oscillazione <em>relativa</em> si restringe come \\(1/\\sqrt{N}\\), ed è per questo che una tazza di caffè ha una temperatura perfettamente netta mentre una singola proteina no. Questo ponte da una fluttuazione spontanea a una risposta misurabile è il primo indizio del <strong>teorema fluttuazione–dissipazione</strong>: pungola gentilmente un sistema e la sua reazione è dettata dal rumore che già fa a riposo. Einstein trovò il caso più pulito nel 1905 — \\(D = \\mu\\, k_B T\\), che lega la diffusione all'attrito — e Perrin lo trasformò in una bilancia, fissando il numero di Avogadro osservando i granelli barcollare nell'acqua.</p>
<h4><span class="hn">05</span>Irreversibilità: il teorema H e i suoi paradossi</h4>
<p>Ecco l'enigma che quasi spezzò Boltzmann. Il suo <strong>teorema H</strong> mostra una quantità \\(H = \\int f \\ln f \\, d^3v\\) che scivola solo in discesa mentre un gas si rilassa — che è solo l'entropia che sale, la seconda legge spremuta dagli urti. Bellissimo, se non che quegli urti obbediscono alle leggi di Newton, e le leggi di Newton funzionano altrettanto bene all'indietro. Inverti ogni velocità e l'entropia dovrebbe <em>calare</em> (obiezione di Loschmidt); aspetta abbastanza a lungo e Poincaré garantisce che il gas ritorni quasi esattamente al suo raggomitolamento iniziale (quella di Zermelo). Entrambe le obiezioni sono corrette, ed entrambe mancano il punto. La freccia del tempo non vive nella dinamica; vive nella contabilità. La derivazione di Boltzmann assume in silenzio che le molecole siano scorrelate <em>prima</em> di un urto ma non dopo — lo <em>Stosszahlansatz</em> — ed è lì che si insinua l'asimmetria. Le ricorrenze sono reali, ma richiedono un tempo dell'ordine di \\(e^{N}\\), che nanizza la vita dell'universo. Alla fine la freccia risale a un unico fatto brutale: l'universo iniziò in uno stato di entropia sbalorditivamente bassa, e da allora scivoliamo in discesa.</p>
<h4><span class="hn">06</span>Statistiche quantistiche e il crollo del quadro classico</h4>
<p>Il conteggio classico crolla nel momento in cui le particelle diventano genuinamente identiche, perché "particella 1 qui, particella 2 là" non si distingue più dal proprio scambio. La meccanica quantistica allora divide il mondo in due tribù. I <strong>bosoni</strong> sono gregari: \\(\\langle n \\rangle = \\dfrac{1}{e^{\\beta(\\varepsilon-\\mu)} - 1}\\) lascia che un numero qualsiasi si ammucchi in un solo stato, e quando lo fanno ottieni superfluidi, laser e condensati di Bose–Einstein. I <strong>fermioni</strong> sono solitari: \\(\\langle n \\rangle = \\dfrac{1}{e^{\\beta(\\varepsilon-\\mu)} + 1}\\) limita ogni stato a uno, e quel testardo rifiuto di essere compressi — la pressione di degenerazione — è ciò che regge una nana bianca contro la sua stessa gravità. Entrambi si fondono nella familiare curva di Maxwell–Boltzmann quando il gas è caldo e rarefatto. Lo stesso conteggio quantistico salvò la fisica dalla <strong>catastrofe ultravioletta</strong>: tratta ogni modo di radiazione classicamente e l'equipartizione gli assegna \\(\\tfrac{1}{2}k_B T\\), sommando fino a un fuoco infinitamente brillante. L'ipotesi di Planck che l'energia arrivi a grumi, \\(E = n\\hbar\\omega\\), affama i modi ad alta frequenza, doma lo spettro e — quasi per caso — aprì il secolo quantistico.</p>
<h4><span class="hn">07</span>Transizioni di fase, criticità e il gruppo di rinormalizzazione</h4>
<p>Fai bollire l'acqua e accade qualcosa di matematicamente violento: l'energia libera sviluppa uno spigolo. Transizioni di fase nette esistono solo nel limite di infinite particelle, dove appaiono come <em>non-analiticità</em>. Vicino a una transizione continua il sistema dimentica la propria dimensione, e le quantità divergono come leggi di potenza fissate da pochi <strong>esponenti critici</strong>. Lo shock, compreso solo negli anni '60 e '70, è che quegli esponenti sono <em>universali</em>: un magnete che muore al suo punto di Curie, un fluido al suo punto critico e una lega che si smescola condividono tutti gli stessi numeri — sensibili alla dimensionalità e alla simmetria, ma ciechi a ogni dettaglio microscopico. Kadanoff e Wilson spiegarono perché con il <strong>gruppo di rinormalizzazione</strong>: allarga lo sguardo, media sul piccolo, ripeti, e guarda il sistema fluire verso un punto fisso che spazza via l'irrilevante e tiene solo ciò che conta. Valse a Wilson il Nobel del 1982 e riorganizzò in silenzio il modo di pensare dei fisici, dai superconduttori alla teoria quantistica dei campi.</p>
<h4><span class="hn">08</span>Frontiere: teoremi sul lavoro, informazione e gravità</h4>
<p>Per un secolo la seconda legge sembrò una strada a senso unico senza scorciatoie; poi arrivarono le sorprese. L'<strong>uguaglianza di Jarzynski</strong> \\(\\langle e^{-\\beta W} \\rangle = e^{-\\beta \\Delta F}\\) e la sua cugina più affilata, il teorema di Crooks, dicono che se trascini un sistema fuori equilibrio in modo rozzo quanto vuoi e medi nel modo giusto su molti tentativi, recuperi la differenza di energia libera <em>di equilibrio</em> esattamente — ora un trucco standard per leggere le energie di ripiegamento da singole molecole stirate con pinzette ottiche. Il <strong>principio di Landauer</strong> catturò infine il demone di Maxwell: il demone sembra imbrogliare la seconda legge finché non ricordi che deve prima o poi cancellare la sua memoria, e cancellare un bit costa almeno \\(k_B T \\ln 2\\) di calore. Termodinamica e informazione si rivelano lo stesso argomento in abiti diversi. La svolta più strana è gravitazionale. Un buco nero porta un'entropia \\(S = \\dfrac{k_B c^3 A}{4 G \\hbar}\\) fissata dall'<em>area</em> del suo orizzonte, non dal volume all'interno, e risplende alla temperatura di Hawking \\(T = \\dfrac{\\hbar c^3}{8\\pi G k_B M}\\). Che quell'entropia debba vivere su una superficie è il seme del principio olografico — e molto probabilmente un indizio verso qualsiasi teoria che infine sposi la gravità con il quanto.</p>`,
          facts: [
            { e: '🕳️', t: `Un buco nero è l'oggetto più entropico conosciuto: un buco nero di massa solare contiene ~10⁷⁷ k_B di entropia — circa 10²⁰ volte l'entropia termodinamica del Sole. Quasi tutta l'entropia dell'universo osservabile sta dietro gli orizzonti degli eventi.` },
            { e: '🧬', t: `I teoremi di Jarzynski e Crooks sono stati verificati srotolando meccanicamente singole molecole di RNA/DNA con pinzette ottiche (Collin et al., Nature 2005), recuperando energie libere di equilibrio da tiri irreversibili.` },
            { e: '🌡️', t: `Sistemi con uno spettro di energia limitato (spin nucleari, atomi freddi in reticoli ottici) possono raggiungere temperature assolute negative — più calde dell'infinito, poiché il calore fluisce sempre da essi verso qualsiasi sistema a T > 0 (Braun et al., Science 2013).` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Entropia di Boltzmann', e: 'S = k_B \\ln \\Omega' },
            { n: 'Temperatura', e: '\\dfrac{1}{T} = \\left(\\dfrac{\\partial S}{\\partial E}\\right)_{V,N}' },
            { sep: 1 },
            { n: 'Pesi di Boltzmann', e: 'P_i = \\dfrac{e^{-\\beta E_i}}{Z}, \\quad \\beta = \\dfrac{1}{k_B T}' },
            { n: 'Funzione di partizione', e: 'Z = \\sum_i e^{-\\beta E_i}' },
            { n: 'Energia libera', e: 'F = -k_B T \\ln Z = U - TS' },
            { n: 'Gran funzione di partizione', e: '\\Xi = \\sum_N e^{\\beta \\mu N}\\, Z_N' },
            { sep: 1 },
            { n: 'Relazione di Maxwell', e: '\\left(\\dfrac{\\partial S}{\\partial V}\\right)_T = \\left(\\dfrac{\\partial P}{\\partial T}\\right)_V' },
            { n: 'Fluttuazioni di energia', e: '\\langle \\Delta E^2 \\rangle = k_B T^2 C_V' },
            { sep: 1 },
            { n: 'Bose–Einstein', e: '\\langle n \\rangle = \\dfrac{1}{e^{\\beta(\\varepsilon-\\mu)} - 1}' },
            { n: 'Fermi–Dirac', e: '\\langle n \\rangle = \\dfrac{1}{e^{\\beta(\\varepsilon-\\mu)} + 1}' },
            { sep: 1 },
            { n: 'Uguaglianza di Jarzynski', e: '\\langle e^{-\\beta W} \\rangle = e^{-\\beta \\Delta F}' },
            { n: 'Bekenstein–Hawking', e: 'S_{BH} = \\dfrac{k_B c^3 A}{4 G \\hbar}' },
          ] }, sim: 'thermo',
        },
      },
    },
    particles: {
      title: 'Il Modello Standard',
      teaser: 'Tutto ciò che vedi è fatto di appena 17 particelle fondamentali. Quali sono — e cosa le tiene insieme?',
      chips: ['Quark', 'Forze', 'Higgs'],
      lvls: {
        junior: {
          title: `I mattoncini LEGO più piccoli dell'universo!`,
          body: `<p>Sai già che tutto è fatto di atomi. Il colpo di scena è che gli atomi non sono il capolinea — sono costruiti a partire da cose ancora più piccole. Ogni atomo ha un minuscolo e denso <strong>nucleo</strong> di protoni e neutroni con elettroni che gli svolazzano attorno. Per molto tempo si è pensato che protoni e neutroni fossero i pezzi finali e indivisibili. Non lo erano.</p>
<p>Negli anni '60 e '70 i fisici scoprirono che protoni e neutroni sono a loro volta fatti di granelli ancora più minuscoli chiamati <strong>quark</strong>, legati insieme dall'aptamente battezzata <strong>forza forte</strong>. Quella colla è così feroce che nessuno è mai riuscito a staccare un singolo quark: prova a separarne due e riversi così tanta energia che nuovi quark saltano fuori dal nulla per riempire il vuoto. I quark si rifiutano semplicemente di stare da soli.</p>
<p>Fai la somma di tutto e il <strong>Modello Standard</strong> è la lista dei pezzi della natura — 6 tipi di quark, 6 tipi di leptone (l'elettrone è uno di loro) e una manciata di portatori di forza. Appena 17 particelle fondamentali, e da esse è assemblato tutto ciò che tu abbia mai visto. L'ultimo pezzo mancante, il <strong>bosone di Higgs</strong>, fu infine messo all'angolo al CERN nel 2012, confermando un'intuizione pubblicata per la prima volta 48 anni prima — la fine di una delle grandi cacce al tesoro della scienza.</p>`,
          facts: [
            { e: '🎯', t: `Il Large Hadron Collider (LHC) accelera i protoni al 99,9999991% della velocità della luce prima di farli scontrare.` },
            { e: '🌌', t: `L'antimateria è reale — ogni particella ha un gemello di antimateria. Quando materia e antimateria si incontrano, si annichilano in un lampo di pura energia.` },
            { e: '👻', t: `I neutrini sono così fantasmatici che migliaia di miliardi attraversano il tuo corpo ogni secondo senza interagire con un solo atomo.` },
          ],
          formula: null, sim: 'particles',
        },
        student: {
          title: `Quark, leptoni, bosoni di gauge e le quattro forze fondamentali`,
          body: `<p>Il Modello Standard ordina ogni particella fondamentale in base al suo spin. I <strong>fermioni</strong> (spin \\(\\tfrac{1}{2}\\)) sono la materia: sei <em>quark</em> (up, down, charm, strange, top, bottom — ciascuno con uno di tre "colori") e sei <em>leptoni</em> (l'elettrone, il muone, il tau e i loro tre neutrini). Il <strong>principio di esclusione di Pauli</strong> vieta a due fermioni identici di condividere uno stato quantistico, e quell'unico rifiuto è il motivo per cui la materia è solida e gli atomi hanno una struttura.</p>
<p>I <strong>bosoni</strong> (spin intero) sono i messaggeri che trasportano le forze. Il <strong>fotone</strong> porta l'elettromagnetismo; i massicci <strong>W\\(^{\\pm}\\)</strong> e <strong>Z\\(^0\\)</strong> portano la forza debole dietro il decadimento radioattivo; otto <strong>gluoni</strong> portano la forza forte; e un ipotetico <em>gravitone</em> porterebbe la gravità, se solo sapessimo come farcelo entrare. Ogni forza nasce da una simmetria locale — \\(U(1)\\) per l'elettromagnetismo, \\(SU(2)\\) per la forza debole, \\(SU(3)\\) per la forte — raccolte nel gruppo di gauge \\(U(1)\\times SU(2)\\times SU(3)\\).</p>
<p>Quel quadro ordinato aveva un difetto lampante: la simmetria esige che i portatori di forza siano privi di massa, eppure la W e la Z sono pesi massimi. Il soccorso è il <strong>meccanismo di Higgs</strong>. Un campo con un potenziale a "cappello messicano" si assesta su un valore non nullo ovunque — un valore di aspettazione del vuoto \\(\\langle\\phi\\rangle \\approx 246\\ \\text{GeV}\\) — e le particelle che lo attraversano guadagnano massa in proporzione a quanto fortemente vi si accoppiano. La sua increspatura residua, il <strong>bosone di Higgs</strong> a \\(125\\ \\text{GeV}/c^2\\), emerse al CERN nel 2012, mezzo secolo dopo essere stato previsto.</p>`,
          facts: [
            { e: '🔴', t: `I quark sono confinati permanentemente — l'energia potenziale della forza forte V(r) ~ kr cresce con la distanza, quindi separare i quark crea nuove coppie quark-antiquark.` },
            { e: '⏱️', t: `Il quark top ha una vita di ~5×10⁻²⁵ s — decade prima di poter adronizzare, rendendolo l'unico quark le cui proprietà nude si possono misurare.` },
            { e: '🌊', t: `Le oscillazioni dei neutrini (Nobel 1998, 2002) provano che i neutrini hanno massa — l'unica fisica confermata oltre il Modello Standard.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Lagrangiana della QED', e: '\\mathcal{L} = \\bar{\\psi}(i\\gamma^\\mu D_\\mu - m)\\psi - \\tfrac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu}' },
            { n: 'Derivata covariante', e: 'D_\\mu = \\partial_\\mu + ieA_\\mu', c: 'accoppiamento minimale' },
            { sep: 1 },
            { n: 'Potenziale di Higgs', e: 'V(\\phi) = -\\mu^2|\\phi|^2 + \\lambda|\\phi|^4' },
            { n: 'Valore di aspettazione del vuoto', e: '\\langle\\phi\\rangle = \\sqrt{\\dfrac{\\mu^2}{2\\lambda}} \\approx 246\\ \\text{GeV}' },
            { sep: 1 },
            { n: 'Gruppo di gauge', e: 'U(1)_Y \\times SU(2)_L \\times SU(3)_c' },
            { n: 'Massa del bosone di Higgs', e: 'm_H = 125.25 \\pm 0.17\\ \\text{GeV}/c^2' },
          ] }, sim: 'particles',
        },
        scholar: {
          title: `Teoria quantistica dei campi, rinormalizzazione e fisica oltre il Modello Standard`,
          body: `<h4><span class="hn">01</span>Campi, integrali sui cammini e diagrammi di Feynman</h4>
<p>Il Modello Standard è una teoria quantistica dei campi: i veri attori sono campi che riempiono tutto lo spazio, e le particelle sono le loro increspature quantizzate. Tutto ciò che potresti mai misurare — ogni tasso di scattering, ogni decadimento — è ripiegato in un unico oggetto, l'integrale sui cammini \\(Z[J] = \\int \\mathcal{D}\\phi\\,\\exp\\!\\left(i\\!\\int (\\mathcal{L} + J\\phi)\\,d^4x\\right)\\), che somma su <em>ogni</em> storia possibile del campo, ciascuna pesata da una fase. Differenzialo e le ampiezze saltano fuori; espandilo nel piccolo accoppiamento e ogni termine diventa un diagramma di Feynman — uno scarabocchio che è anche un integrale preciso. Il momento magnetico dell'elettrone calcolato così coincide con l'esperimento a dodici cifre, la previsione più accurata che chiunque abbia mai fatto.</p>
<h4><span class="hn">02</span>Rinormalizzazione e l'arte di domare gli infiniti</h4>
<p>Quei diagrammi a loop sono crivellati di infiniti, e per un po' quasi affondarono l'intero progetto. La <strong>rinormalizzazione</strong> è la cura: assorbi le divergenze in una ridefinizione di pochi parametri fisici — carica, massa — e restano numeri finiti e verificabili. Wilson trasformò poi quello che sembrava un trucco da contabile in qualcosa di profondo. Il Modello Standard è una teoria <em>efficace</em>, valida solo sotto un certo cutoff \\(\\Lambda\\), e allargare lo sguardo (il gruppo di rinormalizzazione) fa disaccoppiare la sconosciuta fisica ad alta energia, lasciando solo una debole impronta. È questo il vero motivo per cui possiamo calcolare qualcosa senza prima conoscere la teoria finale del tutto.</p>
<h4><span class="hn">03</span>QCD: libertà asintotica e confinamento</h4>
<p>La forza forte ha una doppia personalità. Il suo accoppiamento <em>si indebolisce</em> ad alta energia — la <strong>libertà asintotica</strong>, \\(\\alpha_s(\\mu) = \\dfrac{12\\pi}{(33 - 2n_f)\\ln(\\mu^2/\\Lambda_{\\text{QCD}}^2)}\\) — così i quark sferragliano quasi liberamente dentro un urto violento, che è l'unico motivo per cui i calcoli ad alta energia funzionano (e valse un Nobel nel 2004). A bassa energia l'accoppiamento esplode: prova a separare due cariche di colore e il campo collassa in un teso tubo di flusso la cui energia sale senza limite, così i quark sono <strong>confinati</strong>, sigillati per sempre dentro gli adroni. Dove carta e penna cedono, la QCD su reticolo simula la teoria su una griglia di spaziotempo e riproduce le masse degli adroni con circa l'uno per cento di precisione.</p>
<h4><span class="hn">04</span>Unificazione elettrodebole e l'Higgs</h4>
<p>Alle energie di tutti i giorni elettromagnetismo e forza debole non si somigliano affatto — uno raggiunge l'altro lato della stanza, l'altro a malapena attraversa un nucleo. Glashow, Salam e Weinberg mostrarono che sono due facce di un'unica forza <em>elettrodebole</em>, separate dal campo di Higgs che si congela nel vuoto. La separazione è fissata dall'angolo di mescolamento debole, \\(\\sin^2\\theta_W = 1 - M_W^2/M_Z^2 \\approx 0.231\\), e la teoria inchiodò le masse dei bosoni W e Z prima che l'uno o l'altro fossero visti. L'Higgs che fa la separazione è la chiave di volta: toglilo e l'intero arco perde in un colpo solo la sua massa e la sua coerenza matematica.</p>
<h4><span class="hn">05</span>Le crepe in una teoria quasi perfetta</h4>
<p>Con tutti i suoi trionfi, il Modello Standard è chiaramente incompiuto. Il <em>problema della gerarchia</em> chiede perché correzioni quantistiche dell'ordine di \\(\\delta m_H^2 \\sim g^2\\Lambda^2/16\\pi^2\\) non trascinino la massa dell'Higgs fino alla scala di Planck — una cancellazione calibrata a una parte su \\(10^{34}\\) senza un motivo che qualcuno sappia nominare. Non dice nulla sulla <strong>materia oscura</strong>, la cui gravità è innegabile ma la cui particella è semplicemente assente dall'elenco. Assegna ai neutrini massa nulla, eppure oscillano, quindi devono averne una. E la sua violazione di CP è troppo debole per spiegare perché il cosmo sia fatto di materia anziché di nulla.</p>
<h4><span class="hn">06</span>Oltre il Modello Standard</h4>
<p>I teorici hanno affrontato queste crepe con proposte audaci — la supersimmetria che accoppia ogni particella a un gemello più pesante, dimensioni spaziali extra, nuove simmetrie, la sicurezza asintotica — ciascuna elegante, nessuna ancora confermata. Il fatto più difficile da digerire è il quasi-silenzio dell'LHC: dopo aver fatto scontrare protoni centinaia di milioni di volte al secondo per oltre un decennio, ha consegnato l'Higgs e, finora, nulla oltre. La mappa della fisica ha un bordo netto marcato "qui ci sono i draghi", e la domanda aperta è se il prossimo indizio attenda in un futuro collisore, in un rivelatore di neutrini, nel cielo oscuro — o solo quando teoria quantistica e gravità saranno infine riconciliate.</p>`,
          facts: [
            { e: '🔬', t: `Il momento magnetico anomalo dell'elettrone (g−2) è la previsione più precisamente verificata di tutta la scienza: teoria ed esperimento concordano a 12 cifre significative.` },
            { e: '🌑', t: `La materia oscura non è nel Modello Standard. I suoi effetti gravitazionali sono indiscutibili, ma la sua natura di particella resta del tutto ignota dopo 50 anni di ricerche.` },
            { e: '💥', t: `L'LHC genera 600 milioni di collisioni di protoni al secondo; solo ~1 su 10¹² produce un bosone di Higgs — richiedendo ~15 petabyte di dati all'anno.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Integrale sui cammini', e: 'Z[J] = \\int \\mathcal{D}\\phi\\,\\exp\\!\\left(i\\!\\int [\\mathcal{L} + J\\phi]\\,d^4x\\right)' },
            { n: 'Accoppiamento variabile (QCD)', e: '\\alpha_s(\\mu) = \\dfrac{12\\pi}{(33 - 2n_f)\\ln(\\mu^2/\\Lambda^2)}' },
            { sep: 1 },
            { n: 'Mescolamento elettrodebole', e: '\\sin^2\\theta_W = 1 - \\dfrac{M_W^2}{M_Z^2} \\approx 0.231' },
            { n: 'Valore di vuoto dell\'Higgs', e: '\\langle\\phi\\rangle = v \\approx 246\\ \\text{GeV}' },
            { sep: 1 },
            { n: 'Problema della gerarchia', e: '\\delta m_H^2 \\sim \\dfrac{g^2\\Lambda^2}{16\\pi^2} \\gg m_H^2', c: 'per Λ ~ scala di Planck' },
          ] }, sim: 'particles',
        },
      },
    },
    newton: {
      title: 'Le leggi del moto di Newton',
      teaser: 'Tre brevi regole che spiegano ogni spinta, urto, razzo e mela che cade nell\'universo.',
      chips: ['Forze', 'F = ma', 'Inerzia'],
      lvls: {
        junior: {
          title: `Niente si muove, si ferma o gira senza una forza`,
          body: `<p>Newton ridusse tutto il moto a tre regole, e la prima è la meno ovvia: le cose continuano a fare ciò che già stanno facendo. Una palla su un pavimento liscio rotola finché qualcosa — l'attrito, un muro, il tuo piede — la ferma. Un disco da hockey sul ghiaccio scivola per un'eternità. <em>Pensiamo</em> che gli oggetti rallentino naturalmente solo perché sulla Terra c'è sempre l'attrito che spinge in silenzio all'indietro. Togli l'attrito e il moto semplicemente continua. Questa riluttanza a cambiare si chiama <strong>inerzia</strong>.</p>
<p>La seconda regola è quella che senti ogni giorno: spingi qualcosa e accelera; spingi più forte e accelera di più; spingi qualcosa di più pesante e a malapena si muove. È \\(F = ma\\) messo in parole — la forza che applichi è uguale alla massa per l'accelerazione che ottieni. Un carrello della spesa lo dimostra perfettamente: vuoto, una spinta gentile lo mette in moto; carico di mattoni, la stessissima spinta lo muove appena.</p>
<p>La terza regola è quella sorprendente: ogni spinta viene con una spinta uguale all'indietro. Appoggiati a un muro e il muro spinge su di te con la stessa forza, ed è esattamente per questo che non lo attraversi cadendo. Un razzo scaglia gas caldo verso il basso e il gas scaglia il razzo verso l'alto. Un nuotatore spinge l'acqua all'indietro e l'acqua spinge il nuotatore in avanti. Le forze arrivano sempre in coppie, puntate in versi opposti — non puoi mai toccare senza essere toccato a tua volta.</p>`,
          facts: [
            { e: '🚀', t: `Un razzo non spinge contro l'aria — spinge contro il gas che scaglia dal retro, ed è per questo che i razzi funzionano nel vuoto dello spazio.` },
            { e: '🧊', t: `Su ghiaccio senza attrito una spinta gentile ti terrebbe a scivolare per sempre. È l'attrito, non la natura, a fermare le cose.` },
            { e: '🎈', t: `Lascia andare un palloncino non annodato e sfreccia per la stanza: l'aria esce da un lato, il palloncino è spinto dall'altro — la terza legge di Newton nel tuo soggiorno.` },
          ],
          formula: null, sim: 'newton',
        },
        student: {
          title: `Le tre leggi, rese quantitative`,
          body: `<p>Le tre leggi di Newton, pubblicate nei <em>Principia</em> nel 1687, sono il fondamento di tutta la meccanica. <strong>Prima:</strong> un oggetto resta fermo, o in moto rettilineo a velocità costante, a meno che una forza esterna netta agisca su di esso — il principio d'inerzia. <strong>Seconda,</strong> il cavallo da tiro: la forza netta è uguale alla massa per l'accelerazione, \\(\\mathbf{F}_{\\text{net}} = m\\mathbf{a}\\), un'equazione vettoriale che applichi un asse alla volta. <strong>Terza:</strong> per ogni forza ce n'è una uguale e opposta, \\(\\mathbf{F}_{AB} = -\\mathbf{F}_{BA}\\), e cosa cruciale le due agiscono su corpi <em>diversi</em>.</p>
<p>Il trucco per usarle è il <strong>diagramma di corpo libero</strong>: disegna l'oggetto, segna ogni forza su di esso — la gravità \\(mg\\) che tira giù, la forza normale \\(N\\) di una superficie che spinge su, ogni spinta applicata e l'attrito — poi sommale come vettori. L'attrito resiste al moto fino a un limite \\(f \\le \\mu N\\); sotto quel limite un oggetto fermo semplicemente non si muove, perché le forze si bilanciano e \\(\\mathbf{a} = 0\\). Spingi oltre il limite e accelera a \\(a = F_{\\text{net}}/m\\).</p>
<p>Due conseguenze vale la pena imprimersi in mente. L'accelerazione è <em>inversamente</em> proporzionale alla massa — raddoppia la massa e la stessa forza fornisce metà dell'accelerazione. E il peso non è la stessa cosa della massa: il peso è semplicemente la forza della gravità su di te, \\(W = mg\\). Vola sulla Luna e la tua massa resta invariata, eppure il tuo peso scende di sei volte, perché lo fa \\(g\\).</p>`,
          facts: [
            { e: '⚖️', t: `Massa e peso differiscono: la massa (kg) è quanta materia sei; il peso (newton) è la forza che la gravità esercita su di essa, W = mg.` },
            { e: '🚗', t: `Le cinture di sicurezza combattono l'inerzia: in un urto l'auto si ferma ma il tuo corpo continua a muoversi a velocità — la cintura fornisce la forza che ti ferma con essa.` },
            { e: '🪶', t: `Nel vuoto una piuma e un martello cadono insieme: la gravità dà a entrambi la stessa accelerazione, perché a = F/m e F = mg cancellano esattamente la massa.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Prima legge', e: '\\mathbf{F}_{\\text{net}} = 0 \\;\\Rightarrow\\; \\mathbf{a} = 0', c: 'inerzia' },
            { n: 'Seconda legge', e: '\\mathbf{F}_{\\text{net}} = m\\mathbf{a}' },
            { n: 'Terza legge', e: '\\mathbf{F}_{AB} = -\\mathbf{F}_{BA}' },
            { sep: 1 },
            { n: 'Peso', e: 'W = mg' },
            { n: 'Limite di attrito', e: 'f \\le \\mu N' },
            { n: 'Accelerazione', e: 'a = \\dfrac{F_{\\text{net}}}{m}' },
          ] }, sim: 'newton',
        },
        scholar: {
          title: `Dalle tre leggi alla quantità di moto, ai sistemi di riferimento e ai loro limiti`,
          body: `<h4><span class="hn">01</span>La seconda legge riguarda in realtà la quantità di moto</h4>
<p>Newton non scrisse \\(F = ma\\); scrisse \\(\\mathbf{F} = \\dfrac{d\\mathbf{p}}{dt}\\), il tasso di variazione della quantità di moto \\(\\mathbf{p} = m\\mathbf{v}\\). Per massa costante questo collassa in \\(m\\mathbf{a}\\), ma la forma con la quantità di moto è quella onesta: gestisce i razzi e altri sistemi a massa variabile, dove la massa viene espulsa, ed è la versione che sopravvive — opportunamente modificata — nella relatività.</p>
<h4><span class="hn">02</span>La terza legge è la conservazione della quantità di moto</h4>
<p>Poiché le forze interne si cancellano in coppie uguali e opposte, la quantità di moto totale di un sistema isolato non cambia mai: \\(\\sum \\mathbf{p} = \\text{const}\\). Questo è probabilmente più profondo dell'enunciato sulle forze stesso. Per il teorema di Noether discende dalla <em>simmetria traslazionale dello spazio</em> — il fatto che la fisica sia la stessa qui e altrove — e vale anche dove il quadro ingenuo azione-reazione fa fatica, come quando i campi elettromagnetici portano in silenzio quantità di moto propria.</p>
<h4><span class="hn">03</span>Sistemi inerziali e relatività galileiana</h4>
<p>Le leggi valgono solo nei sistemi di riferimento <strong>inerziali</strong> (non accelerati). Entra in un sistema accelerato e devi inventare forze <em>fittizie</em> — centrifuga, Coriolis — per tenere in ordine la contabilità di \\(F = ma\\). Eppure tutti i sistemi inerziali sono equivalenti: nessun esperimento meccanico può individuare uno stato di quiete assoluta. Quel principio di relatività, già presente in Galileo e Newton, è il seme che Einstein fece crescere nella relatività ristretta.</p>
<h4><span class="hn">04</span>Dove Newton crolla</h4>
<p>La meccanica newtoniana è un limite spettacolarmente accurato — basse velocità, gravità debole, dimensioni macroscopiche — non la legge finale. Avvicinati alla velocità della luce e la quantità di moto diventa \\(\\mathbf{p} = \\gamma m\\mathbf{v}\\), così la forza non corre più parallela all'accelerazione. Rimpicciolisci a scale atomiche e la traiettoria netta si dissolve nella probabilità quantistica. Alza la gravità e la "forza" si rivela essere la curvatura dello spaziotempo. Le tre leggi sono il primo, superbamente utile capitolo della dinamica — e sapere esattamente dove falliscono è parte del capire perché funzionano così bene ovunque altro.</p>`,
          facts: [
            { e: '🎯', t: `Newton enunciò la sua seconda legge come F = dp/dt (tasso di variazione della quantità di moto). F = ma è solo il caso speciale di massa costante.` },
            { e: '🌀', t: `La "forza" di Coriolis che arriccia gli uragani non è una forza reale — è la correzione che aggiungi per far funzionare F = ma nel sistema rotante e non inerziale della Terra.` },
            { e: '⚡', t: `La conservazione della quantità di moto è più fondamentale delle leggi di Newton: discende dalla simmetria dello spazio stesso e si trasferisce nella fisica quantistica e relativistica.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Seconda legge (generale)', e: '\\mathbf{F} = \\dfrac{d\\mathbf{p}}{dt}' },
            { n: 'Quantità di moto', e: '\\mathbf{p} = m\\mathbf{v}' },
            { sep: 1 },
            { n: 'Conservazione', e: '\\sum \\mathbf{p} = \\text{const}', c: 'sistema isolato' },
            { n: 'Quantità di moto relativistica', e: '\\mathbf{p} = \\gamma m\\mathbf{v}', c: '\\gamma = 1/\\sqrt{1-v^2/c^2}' },
          ] }, sim: 'newton',
        },
      },
    },
    gravity: {
      title: 'Gravità e orbite',
      teaser: 'Perché tutto cade — e perché i pianeti non precipitano mai sul Sole?',
      chips: ['Gravità', 'Orbite', 'Spazio'],
      lvls: {
        junior: {
          title: `La colla invisibile dell'universo`,
          body: `<p>Tieni una penna in mano e lasciala andare. Cade — ogni volta, senza eccezioni. Quel richiamo ostinato e invisibile è la <strong>gravità</strong>, e non è una cosa solo terrestre. Ogni oggetto dotato di massa attira ogni altro oggetto, ovunque, sempre: tu sulla sedia, la Luna sugli oceani, il Sole su tutti e otto i pianeti insieme. È una delle quattro forze fondamentali che governano l'universo — e la più debole tra loro — eppure plasma ogni cosa, da una penna che cade all'intero cielo notturno.</p>
<p>La regola che vi sta dietro è meravigliosamente semplice: più un oggetto è massiccio, più forte attira. La Terra è così enorme che la sua presa trattiene gli oceani, l'aria che respiri e te. Mettiti sulla Luna, che ha molta meno massa, e quelle stesse gambe ti lancerebbero a tre metri d'altezza. L'attrazione non si spegne mai — diventa solo più gentile man mano che ti allontani.</p>
<p>Ecco l'enigma che ha lasciato perplessa la gente per secoli: se il Sole continua ad attirare la Terra, perché la Terra non ci precipita semplicemente dentro? Immagina di far roteare una pallina legata a uno spago. Lo spago tira la pallina verso l'interno, ma la pallina continua a sfrecciare di lato, così gira intorno alla tua mano invece di colpirla. I pianeti fanno esattamente questo. La Terra sta perennemente cadendo verso il Sole — e perennemente lo manca, perché corre anche di lato a una velocità fantastica. Quel continuo "cadere ma mancare il bersaglio" è ciò che chiamiamo <strong>orbita</strong>.</p>
<p>Newton trovò un modo splendido per immaginarlo. Pensa di sparare una palla di cannone dalla cima di una montagna incredibilmente alta. Sparala piano e disegna un arco che atterra poco lontano. Sparala più forte e atterra più in là. Sparala abbastanza forte — circa 28.000 km/h — e il suolo si incurva sotto di essa esattamente alla stessa velocità con cui la palla cade. Ora non atterra più: è in orbita. È lo stesso trucco che usa la Stazione Spaziale Internazionale per girarci intorno ogni novanta minuti. Non è sfuggita alla gravità — sta solo cadendo per sempre, e per sempre manca la Terra.</p>`,
          facts: [
            { e: '🌙', t: `Sulla Luna pesi 6 volte di meno e potresti saltare oltre 3 metri di altezza — stessi muscoli, gravità molto più debole!` },
            { e: '🏋️', t: `Su Giove peseresti 2,5 volte di più — alzarsi dal letto sarebbe come avere una seconda persona sulla schiena.` },
            { e: '🌍', t: `La gravità tiene al suo posto la nostra atmosfera. Senza, tutta la nostra aria fuggirebbe nello spazio e la Terra sarebbe come Marte.` },
          ],
          formula: null, sim: 'orbit',
        },
        student: {
          title: `La legge di gravitazione universale di Newton`,
          body: `<p>Il colpo di genio di Newton fu capire che la mela e la Luna obbediscono alla <em>stessa</em> legge. Due masse qualsiasi si attraggono con una forza \\(F = \\dfrac{GMm}{r^2}\\) — proporzionale a entrambe le masse, e che svanisce con il quadrato della distanza fra loro. La espose nei <em>Principia</em> nel 1687, e rimase incontrastata per due secoli.</p>
<p>Quel piccolo \\(r^2\\) al denominatore fa un lavoro enorme. Raddoppia la distanza da un pianeta e la gravità scende a un quarto; triplicala e sei a un nono. L'attrazione si indebolisce in fretta — ma non raggiunge mai del tutto lo zero, ed è per questo che il Sole può tenere al guinzaglio Nettuno lungo 4,5 miliardi di chilometri, e perché le galassie restano unite attraverso il buio.</p>
<p>Un'orbita è in realtà un braccio di ferro. La gravità tira un pianeta verso l'interno mentre il suo moto laterale continua a portarlo oltre; azzecca esattamente la velocità e i due si assestano in un'ellisse chiusa. Troppo lento e spiraleggia verso l'interno, troppo veloce e sfugge per sempre. La velocità di equilibrio a distanza \\(r\\) da una stella di massa \\(M\\) è \\(v = \\sqrt{GM/r}\\), e porta con sé una previsione elegante: i pianeti interni devono muoversi più velocemente di quelli esterni. Mercurio scatta davvero, mentre Nettuno arranca.</p>
<p>Mezza vita prima di Newton, Keplero aveva già spremuto tre schemi dalla montagna di misurazioni a occhio nudo di Tycho Brahe — il più sorprendente \\(T^2 \\propto a^3\\), l'anno di un pianeta fissato dal cubo della dimensione della sua orbita. Keplero trovò lo schema ma non seppe dire <em>perché</em> valesse. L'unica legge di Newton riprodusse tutte e tre le regole di Keplero in un colpo solo, dimostrando che la mela che cade e i pianeti che ruotano seguono la stessa identica matematica. Fu la prima volta che la fisica si spinse oltre il cielo.</p>`,
          facts: [
            { e: '🛰️', t: `La ISS orbita a 7,66 km/s, completando un giro completo della Terra ogni 92 minuti — vede 16 albe al giorno!` },
            { e: '⚖️', t: `Peso = mg. Sulla Terra g ≈ 9,81 m/s². Su Marte g ≈ 3,72 m/s², ed è per questo che i rover possono fare lunghi balzi.` },
            { e: '🌊', t: `Le maree nascono perché la Luna attira il lato vicino della Terra più forte di quello lontano, stirando l'oceano in due rigonfiamenti.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Forza gravitazionale', e: 'F = \\dfrac{GMm}{r^2}', c: 'Newton, 1687' },
            { sep: 1 },
            { n: 'Costante gravitazionale', e: 'G = 6.674\\times10^{-11}\\ \\text{N·m}^2\\text{kg}^{-2}' },
            { n: 'Velocità orbitale', e: 'v = \\sqrt{\\dfrac{GM}{r}}' },
            { n: 'Terza legge di Keplero', e: 'T^2 = \\dfrac{4\\pi^2}{GM}\\,a^3' },
          ] }, sim: 'orbit',
        },
        scholar: {
          title: `Da Newton a Einstein: spaziotempo curvo e la geometria della gravità`,
          body: `<h4><span class="hn">01</span>Il principio di equivalenza: il pensiero più felice di Einstein</h4>
<p>La legge di Newton è favolosamente precisa, eppure nasconde un imbarazzo: fa arrivare la gravità attraverso il cosmo istantaneamente, senza alcun meccanismo e senza ritardo. La via d'uscita di Einstein iniziò con un'osservazione che in seguito definì il pensiero più felice della sua vita — una persona in caduta libera non sente affatto la gravità. Scendi da un cornicione, o orbita attorno alla Terra in una stazione, e galleggi; l'attrazione semplicemente svanisce. Il <strong>principio di equivalenza</strong> trasforma tutto ciò in legge: localmente, gravità e accelerazione sono indistinguibili. E se la gravità si può spegnere solo scegliendo di cadere, allora non può essere davvero una forza. Deve avere a che fare con il palcoscenico su cui si svolge il moto.</p>
<h4><span class="hn">02</span>Spaziotempo, la metrica e le geodetiche</h4>
<p>Quel palcoscenico è lo <strong>spaziotempo</strong> quadridimensionale, e la sua forma vive nella <em>metrica</em> \\(g_{\\mu\\nu}\\), che fissa l'intervallo — la distanza o il tempo proprio trascorso — fra eventi vicini. Lontano da ogni massa la metrica è piatta; vicino a una massa si deforma. Una particella libera non sente alcuna forza; scivola semplicemente lungo il percorso più diritto che la geometria consente, una <strong>geodetica</strong>, obbedendo a \\(\\ddot{x}^\\mu + \\Gamma^\\mu_{\\alpha\\beta}\\,\\dot{x}^\\alpha \\dot{x}^\\beta = 0\\). I simboli di Christoffel \\(\\Gamma\\) svolgono il compito che Newton affidava al campo gravitazionale. Wheeler condensò l'intera teoria in una riga: la materia dice allo spaziotempo come curvarsi, e lo spaziotempo curvo dice alla materia come muoversi.</p>
<h4><span class="hn">03</span>Le equazioni di campo di Einstein</h4>
<p>Il ponte fra queste due frasi è \\(G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\dfrac{8\\pi G}{c^4} T_{\\mu\\nu}\\). Il lato sinistro è pura geometria — il tensore di Einstein \\(G_{\\mu\\nu}\\), distillato dalla curvatura dello spaziotempo — e il lato destro è tutto ciò che porta energia e quantità di moto, raccolto nel tensore energia-impulso \\(T_{\\mu\\nu}\\). Sono dieci equazioni differenziali alle derivate parziali accoppiate e non lineari, e quella non linearità è tutta la personalità della teoria: la gravità stessa porta energia, quindi gravita, e le equazioni si ripiegano su sé stesse in un modo che quelle di Newton non potevano. Il solitario termine extra \\(\\Lambda\\) fu, per stessa ammissione di Einstein, il suo "più grande errore" — ed è ora la nostra spiegazione principale dell'<strong>energia oscura</strong> che sta spingendo l'universo a espandersi.</p>
<h4><span class="hn">04</span>La soluzione di Schwarzschild e i buchi neri</h4>
<p>A pochi mesi dalle equazioni di campo — e da una trincea della Prima guerra mondiale — Schwarzschild ne trovò la prima soluzione esatta: la geometria attorno a una massa sferica. Nasconde una superficie a senso unico al <strong>raggio di Schwarzschild</strong> \\(r_s = 2GM/c^2\\), l'orizzonte degli eventi, oltre il quale nemmeno la luce può risalire. Comprimi il Sole entro 3 km, o la Terra entro 9 mm, e hai un buco nero. Per decenni sembrarono patologie della matematica; ora sappiamo che sono reali e ovunque, dalle stelle collassate ai mostri supermassicci che ancorano intere galassie.</p>
<h4><span class="hn">05</span>Le prove classiche</h4>
<p>Una teoria è convincente solo quanto i rischi a cui sopravvive, e la relatività generale ne affrontò parecchi. L'orbita di Mercurio ruota lentamente su sé stessa — precede di 43 secondi d'arco per secolo più di quanto Newton permetta — e la relatività generale prevede quel valore esattamente, senza nulla da aggiustare. La luce delle stelle si piega mentre sfiora il Sole, cosa che Eddington confermò all'eclissi del 1919 e che rese Einstein famoso in una notte. Gli orologi più in fondo a una buca gravitazionale rallentano, di \\(d\\tau/dt = \\sqrt{1 - r_s/r}\\); il tuo telefono lo dimostra ogni secondo, perché gli orologi dei satelliti GPS ticchettano circa \\(38\\ \\mu\\text{s}\\) al giorno più veloci dei nostri, e ignorarlo sballerebbe la navigazione di una decina di km in un giorno.</p>
<h4><span class="hn">06</span>Increspature nello spaziotempo</h4>
<p>Se lo spaziotempo può curvarsi, può anche vibrare. Masse in accelerazione emettono <strong>onde gravitazionali</strong> — increspature nella metrica che corrono verso l'esterno a \\(c\\) — ma sono esasperatamente deboli. Ci volle un secolo e due interferometri laser da 4 km (LIGO) per sentirne una: il 14 settembre 2015 la fusione di due buchi neri a 1,3 miliardi di anni luce stirò e compresse ogni braccio di meno di un millesimo della larghezza di un protone. Da un giorno all'altro guadagnammo un senso nuovo, capace di udire cataclismi che non emettono alcuna luce.</p>
<h4><span class="hn">07</span>Rotazione, cosmologia e la teoria incompiuta</h4>
<p>I buchi neri reali ruotano, e la soluzione di Kerr (1963) li descrive: un buco rotante trascina lo spaziotempo con sé e avvolge un'<em>ergosfera</em> attorno all'orizzonte, una regione da cui in linea di principio si può estrarre energia. Scalate all'intero cielo, le stesse equazioni danno alla cosmologia moderna il suo universo in espansione dominato da \\(\\Lambda\\), e l'Event Horizon Telescope ha ormai fotografato le ombre di M87* (2019) e del nostro Sgr A* (2022), ciascuna esattamente della dimensione che la relatività generale impone. Eppure la teoria è incompiuta: in una singolarità prevede il proprio collasso, e sposare la sua geometria liscia con la meccanica quantistica resta il problema aperto più profondo della fisica.</p>`,
          facts: [
            { e: '⌛', t: `Gli orologi GPS guadagnano ~45μs/giorno per la gravità più debole (relatività generale) e ne perdono ~7μs/giorno per la velocità orbitale (relatività ristretta). Senza correzione, il GPS andrebbe alla deriva di ~10 km al giorno.` },
            { e: '🌀', t: `Le onde gravitazionali furono rilevate per la prima volta da LIGO il 14 settembre 2015, da due buchi neri che si fondevano a 1,3 miliardi di anni luce.` },
            { e: '🔭', t: `L'Event Horizon Telescope ha risolto un'ombra di 40 μas attorno a M87* — equivalente a leggere un giornale a New York stando a Parigi.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Equazioni di campo di Einstein', e: 'G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\dfrac{8\\pi G}{c^4} T_{\\mu\\nu}' },
            { n: 'Equazione della geodetica', e: '\\ddot{x}^\\mu + \\Gamma^\\mu_{\\alpha\\beta}\\,\\dot{x}^\\alpha \\dot{x}^\\beta = 0' },
            { sep: 1 },
            { n: 'Raggio di Schwarzschild', e: 'r_s = \\dfrac{2GM}{c^2}' },
            { n: 'Precessione del perielio', e: '\\Delta\\varphi = \\dfrac{6\\pi GM}{c^2 a (1-e^2)}', c: 'per orbita' },
            { n: 'Dilatazione gravitazionale del tempo', e: '\\dfrac{d\\tau}{dt} = \\sqrt{1 - \\dfrac{r_s}{r}}', c: 'metrica di Schwarzschild' },
          ] }, sim: 'orbit',
        },
      },
    },
    projectile: {
      title: 'Moto dei proiettili',
      teaser: 'Lancia qualsiasi cosa e la gravità disegna lo stesso arco — e c\'è un angolo che vince sempre.',
      chips: ['Cinematica', 'Gravità', 'Traiettoria'],
      lvls: {
        junior: {
          title: `Ogni lancio traccia lo stesso arco elegante`,
          body: `<p>Lancia una palla a un amico e osserva il suo percorso. Non schizza in avanti in linea retta per poi cadere di colpo come un personaggio dei cartoni che è corso oltre il bordo di un dirupo — si incurva per tutto il tragitto, tracciando un arco morbido. Due cose accadono contemporaneamente, e non si intralciano a vicenda: la palla continua a scivolare <em>in avanti</em> a ritmo costante, mentre la gravità la trascina <em>verso il basso</em>, prima delicatamente e poi sempre più in fretta. Aggiungi uno scorrimento laterale costante a una caduta sempre più rapida e ottieni quella curva — la stessa forma per una chiave lanciata, una fontanella, un saltatore in lungo o una palla di cannone.</p>
<p>Ecco la parte che frega tutti: l'andare-avanti e il cadere-giù sono completamente separati. Spara un proiettile perfettamente orizzontale e, nello stesso identico istante, lasciane cadere un altro dalla mano — trascurando l'aria, toccano terra <strong>insieme</strong>. Il proiettile sparato può attraversare un intero campo mentre quello lasciato cadere scende di un metro, ma la gravità tira su entrambi esattamente allo stesso ritmo. Più velocità laterale ti compra distanza, mai un attimo in più di tempo in volo.</p>
<p>Allora come lanci qualcosa il più lontano possibile? Punta troppo piatto e sbatte a terra prima di aver percorso molto. Punta troppo ripido e si innalza in modo impressionante ma atterra quasi ai tuoi piedi. Il punto giusto è proprio nel mezzo — <strong>45°</strong> — che divide equamente il tuo sforzo fra "in fuori" e "in su". Lancia a 45° e ottieni il tiro più lungo possibile. I costruttori di catapulte e i lanciatori del peso sfruttano in silenzio questo fatto da secoli, molto prima che qualcuno sapesse scrivere il perché.</p>`,
          facts: [
            { e: '🎯', t: `Spara un proiettile in orizzontale e lasciane cadere uno dalla stessa altezza nello stesso momento — trascurando l'aria, atterrano esattamente nello stesso istante.` },
            { e: '💧', t: `L'arco di una fontanella è una parabola. Lo sono anche il volo di un pallone da basket, il salto di un saltatore con gli sci e l'acqua di una canna da giardino.` },
            { e: '🏰', t: `Gli artiglieri d'assedio medievali miravano per angolo, imparando che intorno ai 45° la pietra veniva scagliata più lontano — secoli prima che l'equazione esistesse.` },
          ],
          formula: null, sim: 'projectile',
        },
        student: {
          title: `Due moti ad angolo retto, e l'equazione della gittata`,
          body: `<p>Il segreto di ogni proiettile è scomporre la sua velocità in due pezzi che si ignorano a vicenda. Lancia a velocità \\(v_0\\) e angolo \\(\\theta\\): la parte orizzontale \\(v_0\\cos\\theta\\) non cambia mai, perché nulla spinge la palla di lato, mentre la parte verticale parte da \\(v_0\\sin\\theta\\) e viene costantemente erosa dalla gravità a \\(g \\approx 9.8\\ \\text{m/s}^2\\). Così orizzontalmente la palla scivola e basta, \\(x = v_0\\cos\\theta\\,t\\), e verticalmente è in pura caduta libera, \\(y = v_0\\sin\\theta\\,t - \\tfrac{1}{2}g t^2\\). Due moti umili, cuciti insieme in un arco.</p>
<p>Poni \\(y = 0\\) per chiederti quando atterra, e il volo dura \\(T = \\dfrac{2v_0\\sin\\theta}{g}\\). Moltiplicalo per la velocità orizzontale e ottieni quanto va lontano — la <strong>gittata</strong> \\(R = \\dfrac{v_0^2\\sin 2\\theta}{g}\\). Quella formula elegante nasconde due doni. Primo, \\(\\sin 2\\theta\\) è massimo quando \\(2\\theta = 90°\\), cioè \\(\\theta = 45°\\): la prova concreta che 45° lancia più lontano. Secondo, \\(\\sin 2\\theta\\) è simmetrico attorno ai 45°, quindi angoli <em>complementari</em> — 30° e 60°, oppure 20° e 70° — atterrano esattamente nello stesso punto, uno su un arco basso e veloce, l'altro alto e lento.</p>
<p>La cima del volo arriva a metà percorso, dove la velocità verso l'alto si è azzerata; la sua altezza è \\(H = \\dfrac{(v_0\\sin\\theta)^2}{2g}\\). E nota cosa manca da ogni riga di tutto questo: la <strong>massa</strong>. Una palla di cannone e una biglia lanciate allo stesso modo tracciano lo stesso percorso — la grande intuizione di Galileo, che la gravità accelera tutto allo stesso modo, ora messa in scena in due dimensioni contemporaneamente.</p>`,
          facts: [
            { e: '⚽', t: `Angoli complementari condividono la gittata: una palla lanciata a 30° e a 60° con la stessa velocità atterra nello stesso posto.` },
            { e: '🎾', t: `La gittata cresce con il quadrato della velocità, quindi raddoppiare la velocità di lancio fa volare un proiettile quattro volte più lontano.` },
            { e: '🌙', t: `Sulla Luna, dove g è 6 volte più debole, lo stesso lancio arriva 6 volte più lontano — un tiro di golf ha percorso davvero chilometri.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Velocità orizzontale', e: 'v_x = v_0\\cos\\theta', c: 'costante' },
            { n: 'Velocità verticale', e: 'v_y = v_0\\sin\\theta - g t' },
            { sep: 1 },
            { n: 'Posizione', e: 'x = v_0\\cos\\theta\\,t,\\quad y = v_0\\sin\\theta\\,t - \\tfrac{1}{2}g t^2' },
            { n: 'Tempo di volo', e: 'T = \\dfrac{2 v_0 \\sin\\theta}{g}' },
            { n: 'Gittata', e: 'R = \\dfrac{v_0^2 \\sin 2\\theta}{g}' },
            { n: 'Altezza massima', e: 'H = \\dfrac{(v_0\\sin\\theta)^2}{2g}' },
            { n: 'Angolo di massima gittata', e: '\\theta = 45°', c: 'terreno piano' },
          ] }, sim: 'projectile',
        },
        scholar: {
          title: `L'equazione della traiettoria, gli angoli ottimali e dove la parabola si rompe`,
          body: `<h4><span class="hn">01</span>L'intero percorso in un'unica equazione</h4>
<p>Elimina il tempo e l'arco si rivela. Da \\(x = v_0\\cos\\theta\\,t\\) abbiamo \\(t = x/(v_0\\cos\\theta)\\); sostituisci nell'equazione verticale e \\[y = x\\tan\\theta - \\dfrac{g}{2 v_0^2 \\cos^2\\theta}\\,x^2.\\] È quadratica in \\(x\\) con coefficiente principale negativo — una <strong>parabola</strong> con la concavità verso il basso. Ogni traiettoria idealizzata, da una briciola schizzata a un missile balistico, è una fetta di questa singola famiglia di curve.</p>
<h4><span class="hn">02</span>Vettori e il punto di vista dell'energia</h4>
<p>Ridotto ai vettori il moto è banale: l'accelerazione è una costante \\(\\mathbf{a} = -g\\,\\hat{\\jmath}\\), quindi integri due volte e hai finito. Poiché la gravità è conservativa e la velocità orizzontale non viene mai toccata, \\(\\tfrac{1}{2}mv^2 + mgy\\) resta fissa per tutto il tragitto. Quell'unico fatto impone la simmetria speculare della parabola: il proiettile ritorna alla quota di lancio portando esattamente la sua velocità di lancio, e la discesa è la salita percorsa all'indietro.</p>
<h4><span class="hn">03</span>Quando il punto di lancio è rialzato</h4>
<p>I lanci reali lasciano la mano sopra il suolo, e questo sposta silenziosamente l'ottimo. Risolvendo per la massima gittata da un'altezza iniziale \\(h\\) si ottiene \\[\\theta^\\ast = \\arctan\\!\\dfrac{v_0}{\\sqrt{v_0^2 + 2gh}},\\] che è 45° solo quando \\(h = 0\\) e scivola costantemente sotto quel valore man mano che il lancio si alza. Un lanciatore del peso che rilascia da circa due metri d'altezza tira più lontano vicino ai 42° per pura fisica — e più vicino ai 37° una volta considerata la biomeccanica dell'atleta, che favorisce rilasci più piatti e veloci.</p>
<h4><span class="hn">04</span>La resistenza dell'aria, l'onesto guastafeste</h4>
<p>La parabola pulita è una finzione nel vuoto. Una vera forza di resistenza \\(F_d \\approx \\tfrac{1}{2}\\rho C_d A v^2\\) si oppone alla velocità e cresce con il suo quadrato, così salita e discesa smettono di essere immagini speculari: il percorso si inclina in avanti, la discesa si fa più ripida e la gittata resta ben al di sotto del valore da manuale. Non esiste più una gittata in forma chiusa — integri numericamente le equazioni accoppiate. Per una palla da baseball colpita l'ottimo scende a circa 30-35°, e una pallina da golf, sollevata dalla forza di Magnus del backspin, sfugge al problema semplice ed entra nell'aerodinamica vera e propria.</p>
<h4><span class="hn">05</span>Oltre il terreno piatto e fermo</h4>
<p>Sparare in salita o in discesa lungo un pendio, la curvatura di Magnus indotta dalla rotazione e — su decine di chilometri — la deflessione di Coriolis dovuta alla rotazione terrestre allontanano tutte la balistica reale dalla parabola ordinata. Il modello nel vuoto è solo il primo termine di uno sviluppo assai più ricco. Ma è il <em>giusto</em> primo termine: analitico, esatto e indipendente dalla massa, ed è esattamente per questo che 45° è la risposta con cui si apre ogni corso di meccanica.</p>`,
          facts: [
            { e: '🥎', t: `Con la resistenza dell'aria l'angolo di lancio ideale di una palla da baseball scende a circa 30-35°, e arriva appena a metà della distanza che il vuoto prevederebbe.` },
            { e: '🏋️', t: `I lanciatori del peso d'élite rilasciano vicino ai 37°, non a 45° — il peso lascia la mano ~2 m sopra il punto in cui atterra, e la biomeccanica favorisce un tiro più piatto.` },
            { e: '🌍', t: `Sulle lunghe distanze, l'artiglieria deve correggere per l'effetto Coriolis: la rotazione terrestre devia un proiettile di lato in modo misurabile durante il volo.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Traiettoria', e: 'y = x\\tan\\theta - \\dfrac{g}{2 v_0^2 \\cos^2\\theta}\\,x^2' },
            { sep: 1 },
            { n: 'Gittata (piano)', e: 'R = \\dfrac{v_0^2 \\sin 2\\theta}{g}' },
            { n: 'Gittata massima', e: 'R_{\\max} = \\dfrac{v_0^2}{g}', c: 'a \\theta = 45°' },
            { n: 'Angolo ottimale da altezza h', e: '\\theta^\\ast = \\arctan\\dfrac{v_0}{\\sqrt{v_0^2 + 2gh}}' },
            { n: 'Resistenza quadratica', e: 'F_d = \\tfrac{1}{2}\\rho C_d A v^2', c: 'nessuna gittata in forma chiusa' },
          ] }, sim: 'projectile',
        },
      },
    },
    waves: {
      title: 'Onde e interferenza',
      teaser: 'Musica, Wi-Fi, arcobaleni e raggi X — sono tutti lo stesso fenomeno a scale diverse.',
      chips: ['Suono', 'Luce', 'Ottica'],
      lvls: {
        junior: {
          title: `Le onde sono energia in movimento!`,
          body: `<p>Lascia cadere un sasso in uno stagno calmo e osserva gli anelli correre verso l'esterno. Quella è un'onda — una perturbazione che viaggia mentre la roba attraverso cui viaggia resta perlopiù ferma. Ecco la sorpresa: l'acqua non si sposta davvero insieme all'anello. Fai galleggiare una foglia sulla superficie e questa si limita a ondeggiare su e giù sul posto mentre l'onda le scivola sotto. Ciò che viaggia non è l'acqua — è lo <em>schema</em>, e con esso l'<strong>energia</strong>.</p>
<p>Il suono è lo stesso identico trucco giocato nell'aria. Batti le mani e comprimi l'aria in un rapido impulso di pressione che si increspa verso l'esterno, raggiunge un timpano e lo fa vibrare — e quella vibrazione è ciò che qualcuno sente. Niente aria, niente increspatura, niente suono: ed è esattamente per questo che lo spazio è del tutto silenzioso, e perché ogni esplosione fragorosa in un film di fantascienza è, in verità, una piccola bugia.</p>
<p>La vera magia accade quando due onde si incrociano. Non rimbalzano l'una sull'altra — si sommano. Due picchi che si incontrano nello stesso punto si accumulano in un picco più grande (<strong>interferenza costruttiva</strong>); un picco che incontra una valle si annulla nel nulla piatto (<strong>interferenza distruttiva</strong>). Quell'annullamento non è solo una curiosità — è così che funzionano le cuffie con cancellazione del rumore. Ascoltano il mondo rumoroso attorno a te, ne costruiscono la copia esattamente capovolta e lasciano che le due onde si cancellino a vicenda prima ancora che raggiungano il tuo orecchio.</p>`,
          facts: [
            { e: '🎸', t: `Una corda di chitarra che vibra a 440 Hz produce la nota "La" — compie 440 cicli completi avanti e indietro ogni singolo secondo!` },
            { e: '🌈', t: `La luce bianca del sole contiene tutti i colori. Una goccia di pioggia piega ogni colore di un angolo leggermente diverso, sparpagliandoli in un arcobaleno.` },
            { e: '🦇', t: `I pipistrelli si orientano nel buio totale emettendo impulsi di ultrasuoni e ascoltando gli echi — il loro cervello costruisce una mappa 3D dai tempi di ritorno.` },
          ],
          formula: null, sim: 'waves',
        },
        student: {
          title: `Sovrapposizione, onde stazionarie e la doppia fenditura di Young`,
          body: `<p>Riduci un'onda alla sua matematica ed è solo una sinusoide viaggiante: \\(y(x,t) = A\\sin(kx - \\omega t + \\varphi)\\). L'ampiezza \\(A\\) fissa quanto è alta, il numero d'onda \\(k = 2\\pi/\\lambda\\) conta quanto è fittamente stipata nello spazio, la frequenza angolare \\(\\omega = 2\\pi f\\) quanto rapidamente cicla nel tempo, e la fase \\(\\varphi\\) dice solo a che punto della sua oscillazione comincia. Intreccia il tutto e una cresta veleggia a velocità \\(v = \\omega/k = f\\lambda\\).</p>
<p>Ciò che fa comportare le onde come onde è il <strong>principio di sovrapposizione</strong>: ovunque due di esse si sovrappongano, sommi semplicemente i loro spostamenti. Le palle da biliardo si scontrano; le onde si attraversano scivolando l'una nell'altra ed emergono immutate. Sommale in fase — differenza di fase \\(\\Delta\\varphi = 0, 2\\pi, 4\\pi,\\dots\\) — e si rinforzano fino ad ampiezza \\(2A\\); sommale esattamente in controfase — \\(\\Delta\\varphi = \\pi, 3\\pi,\\dots\\) — e si cancellano del tutto.</p>
<p>Thomas Young trasformò questo nell'esperimento che ribaltò in silenzio Newton. Nel <strong>1801</strong> fece passare la luce attraverso due fenditure strette a distanza \\(d\\) l'una dall'altra e raccolse su uno schermo strisce di bande chiare e scure — un'intensità \\(I(\\theta) = 4I_0\\cos^2\\!\\left(\\dfrac{\\pi d \\sin\\theta}{\\lambda}\\right)\\) che solo le onde sanno dipingere. La luce sembrava assestata come onda. Il seguito inquietante arrivò un secolo dopo: spara lo stesso apparato un fotone, o un elettrone, alla volta, e le bande si assemblano comunque punto per punto. Ogni particella, impossibilmente, interferisce con sé stessa.</p>
<p>Manda due onde identiche in direzioni opposte lungo una corda e si incastrano in un'<strong>onda stazionaria</strong> — una forma che non viaggia affatto, inchiodata da <em>nodi</em> immobili e <em>ventri</em> che oscillano selvaggiamente. È la fisica di ogni corda di chitarra, canna d'organo e forno a microonde, dove possono risuonare solo le lunghezze d'onda che entrano esattamente nei bordi.</p>`,
          facts: [
            { e: '🎧', t: `Le cuffie a cancellazione di rumore campionano il suono ambientale 1000 volte al secondo e producono la forma d'onda esattamente invertita — interferenza distruttiva in azione.` },
            { e: '💡', t: `Onde radio, microonde, luce visibile, UV, raggi X e raggi gamma sono tutte onde elettromagnetiche — stessa fisica, frequenza diversa.` },
            { e: '🌊', t: `Gli tsunami viaggiano a 800 km/h nell'oceano profondo con lunghezze d'onda di 500 km. Nell'acqua costiera bassa rallentano e la loro altezza cresce in modo esplosivo.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Funzione d\'onda', e: 'y(x,t) = A\\sin(kx - \\omega t + \\varphi)' },
            { sep: 1 },
            { n: 'Numero d\'onda', e: 'k = \\dfrac{2\\pi}{\\lambda}' },
            { n: 'Frequenza angolare', e: '\\omega = 2\\pi f' },
            { n: 'Velocità dell\'onda', e: 'v = f\\lambda = \\dfrac{\\omega}{k}' },
            { sep: 1 },
            { n: 'Sovrapposizione', e: 'y_{\\text{tot}} = y_1 + y_2' },
            { n: 'Costruttiva', e: '\\Delta\\varphi = 0,\\,2\\pi,\\,4\\pi,\\dots \\;\\Rightarrow\\; A_{\\text{tot}} = 2A' },
            { n: 'Distruttiva', e: '\\Delta\\varphi = \\pi,\\,3\\pi,\\,5\\pi,\\dots \\;\\Rightarrow\\; A_{\\text{tot}} = 0' },
            { n: 'Intensità doppia fenditura', e: 'I(\\theta) = 4I_0\\cos^2\\!\\left(\\dfrac{\\pi d \\sin\\theta}{\\lambda}\\right)' },
          ] }, sim: 'waves',
        },
        scholar: {
          title: `Analisi di Fourier, pacchetti d'onda e dualità quantistica`,
          body: `<h4><span class="hn">01</span>Fourier: ogni segnale è un accordo di toni puri</h4>
<p>Dietro tutta la fisica delle onde sta un fatto matematico di portata sorprendente: qualsiasi segnale, per quanto frastagliato, è una somma di onde sinusoidali pure. La <strong>trasformata di Fourier</strong> \\(\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x)\\,e^{-2\\pi i x\\xi}\\,dx\\) è la macchina che riscrive una forma nello spazio o nel tempo come la sua ricetta di frequenze — e la inverte senza perdere nulla. È probabilmente lo strumento più utile della matematica applicata: comprime la tua musica e le tue foto, trasporta ogni canale radio e ricostruisce una fetta di risonanza magnetica. La sua versione veloce, la FFT (Cooley–Tukey, 1965), gira in \\(O(n\\log n)\\) ed è tra gli algoritmi più influenti mai scritti.</p>
<h4><span class="hn">02</span>Pacchetti d'onda, velocità di fase e di gruppo</h4>
<p>Una singola sinusoide pura si estende all'infinito e non localizza nulla. Per costruire un impulso localizzato — un <em>pacchetto d'onda</em> — sovrapponi una banda di frequenze, e Fourier ti presenta il conto in anticipo: un pacchetto stretto nello spazio richiede un'ampia distribuzione di numeri d'onda. Un pacchetto così porta due velocità. Le increspature al suo interno scivolano alla <em>velocità di fase</em> \\(v_p = \\omega/k\\), mentre l'inviluppo — che porta davvero l'energia e il messaggio — viaggia alla <em>velocità di gruppo</em> \\(v_g = d\\omega/dk\\). Quando il mezzo è <em>dispersivo</em> e le due non concordano, il pacchetto si spalma mentre procede, ed è per questo che un impulso nitido lungo una fibra lunga arriva sfocato.</p>
<h4><span class="hn">03</span>Sovrapposizione quantistica e auto-interferenza</h4>
<p>Nella meccanica quantistica la sovrapposizione è promossa da proprietà delle onde a regola fondamentale. Una particella è trasportata da una funzione d'onda complessa \\(\\psi\\); le possibilità che si sovrappongono si sommano come ampiezze, \\(\\psi = \\psi_1 + \\psi_2\\), e l'osservabile è la densità di probabilità \\(|\\psi|^2 = |\\psi_1 + \\psi_2|^2\\). Sviluppa quel quadrato e compare un termine incrociato — l'interferenza — senza alcun cugino classico. Fai la doppia fenditura un elettrone alla volta e lo schermo si riempie comunque, su migliaia di arrivi solitari, con \\(I(\\theta) = 4I_0\\cos^2(\\pi d\\sin\\theta/\\lambda)\\). L'unica lettura onesta è che ogni elettrone attraversa entrambe le fenditure come ampiezza distribuita e interferisce con sé stesso.</p>
<h4><span class="hn">04</span>Il principio di indeterminazione, diretto da Fourier</h4>
<p>La \\(\\Delta x\\,\\Delta p \\ge \\hbar/2\\) di Heisenberg viene di solito raccontata come una storia sulla misurazione maldestra, ma è in realtà il compromesso di Fourier travestito da fisica. Le funzioni d'onda di posizione e quantità di moto sono trasformate di Fourier l'una dell'altra, e nessuna funzione può essere nitida in entrambi i domini contemporaneamente. Localizza una particella strettamente e la sua quantità di moto deve allargarsi a ventaglio — il limite è insito in qualunque cosa sia ondulatoria, non un difetto dei nostri strumenti. La stessa matematica dà la relazione energia-tempo \\(\\Delta E\\,\\Delta t \\ge \\hbar/2\\), che fissa la larghezza naturale di ogni riga spettrale e permette a stati fugaci di "prendere in prestito" energia per un istante.</p>
<h4><span class="hn">05</span>Informazione sul percorso e la gomma quantistica</h4>
<p>L'interferenza si rivela fragile in un modo profondamente rivelatore. Metti su un rivelatore che registra da quale fenditura è passato l'elettrone e le bande evaporano — la particella si comporta da particella nel momento in cui il suo percorso diventa conoscibile, anche solo in linea di principio. Ancora più strana è la <em>gomma quantistica</em>: mescola di nuovo quell'informazione sul percorso, anche dopo che l'elettrone ha già colpito lo schermo, e l'interferenza riappare nelle correlazioni. Ciò che conta non è se qualcuno abbia davvero guardato, ma se l'informazione sopravviva da qualche parte. L'interferenza è l'impronta digitale di alternative genuinamente indistinguibili.</p>
<h4><span class="hn">06</span>La teoria quantistica dei campi: la dualità si dissolve</h4>
<p>La stanca domanda — onda o particella? — si dissolve infine nella <strong>teoria quantistica dei campi</strong>. Non ci sono palline né onde classiche, solo campi che riempiono ogni punto dello spazio, con le particelle come loro increspature quantizzate. Un fotone è un quanto del campo elettromagnetico; un elettrone, un quanto del campo elettronico. L'ampiezza del campo obbedisce alla sovrapposizione (quindi interferisce), le rilevazioni arrivano in grumi discreti (quindi vediamo particelle), e la probabilità di uno scatto va come l'ampiezza al quadrato. Cuci tutto questo con la relatività ristretta e ottieni il Modello Standard — la teoria più precisamente verificata che gli esseri umani abbiano mai costruito.</p>`,
          facts: [
            { e: '💻', t: `Il JPEG usa la trasformata discreta del coseno (strettamente imparentata con la trasformata di Fourier) per comprimere le immagini scartando i dettagli ad alta frequenza che l'occhio non riesce a risolvere.` },
            { e: '⚛️', t: `In un esperimento di gomma quantistica, ripristinare l'informazione sul "percorso" distrugge la figura di interferenza, anche se questa informazione è disponibile solo retroattivamente.` },
            { e: '🔬', t: `La risonanza magnetica usa impulsi a radiofrequenza per eccitare i nuclei di idrogeno; i segnali risultanti sono decodificati con una trasformata di Fourier 3D per produrre immagini anatomiche.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Trasformata di Fourier', e: '\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x)\\,e^{-2\\pi i x\\xi}\\,dx' },
            { n: 'Velocità di gruppo', e: 'v_g = \\dfrac{d\\omega}{dk}' },
            { sep: 1 },
            { n: 'Probabilità in MQ', e: 'I \\propto |\\psi|^2 = |\\psi_1 + \\psi_2|^2' },
            { n: 'Doppia fenditura', e: 'I(\\theta) = 4I_0\\cos^2\\!\\left(\\dfrac{\\pi d \\sin\\theta}{\\lambda}\\right)' },
            { sep: 1 },
            { n: 'Heisenberg', e: '\\Delta x\\,\\Delta p \\ge \\dfrac{\\hbar}{2}' },
            { n: 'Energia–tempo', e: '\\Delta E\\,\\Delta t \\ge \\dfrac{\\hbar}{2}' },
            { n: 'de Broglie', e: '\\lambda = \\dfrac{h}{p} = \\dfrac{h}{mv}', c: 'dualità onda–particella' },
          ] }, sim: 'waves',
        },
      },
    },
    blackholes: {
      title: 'Buchi neri e relatività',
      teaser: `Una regione dello spazio dove la gravità è così estrema che nemmeno la luce può sfuggire. Einstein li predisse nel 1915. Ne abbiamo fotografato uno nel 2019.`,
      chips: ['Relatività generale', 'Orizzonte degli eventi', 'Spaziotempo'],
      lvls: {
        junior: {
          title: `La trappola definitiva dell'universo - non sfugge nulla!`,
          body: `<p>Immagina di schiacciare l'intero Sole in una palla di appena sei chilometri. La sua gravità diventerebbe così travolgente, così assoluta, che nulla - né un razzo, né un laser, né la luce stessa - potrebbe più risalire. Questo è un <strong>buco nero</strong>: non un buco nello spazio, ma un oggetto così incredibilmente denso da deformare il tessuto stesso dello spazio e del tempo attorno a sé.</p>
<p>I buchi neri nascono quando una stella gigante - almeno venti volte la massa del Sole - esaurisce il suo carburante nucleare. Senza più nulla a spingere verso l'esterno, il suo nucleo collassa in meno di un secondo, sparando via una supernova e schiacciando ciò che resta in una <strong>singolarità</strong>, un punto dove la nostra fisica semplicemente si arrende. Attorno c'è l'<strong>orizzonte degli eventi</strong>, una linea invisibile di non ritorno. Attraversala e non tornerai mai più - mai.</p>
<p>Per quasi un secolo i buchi neri furono pura teoria. Poi, nell'aprile 2019, l'Event Horizon Telescope - una rete di antenne radio sparse su tutto il pianeta, unite in un unico occhio grande quanto la Terra - catturò la primissima immagine dell'ombra di un buco nero. Il suo bersaglio, M87*, è un mostro di 6,5 miliardi di volte la massa del Sole, a 55 milioni di anni luce, e l'immagine corrispose alle previsioni di Einstein del 1915 con una precisione sorprendente.</p>`,
          facts: [
            { e: '📸', t: `La prima immagine di un buco nero (M87*, 2019) richiese un telescopio grande quanto la Terra - otto osservatori radio su quattro continenti collegati da orologi atomici.` },
            { e: '⏱️', t: `Il tempo scorre più lento vicino a un buco nero. All'orizzonte degli eventi di un buco nero di massa stellare, un'ora equivarrebbe a migliaia di anni per un osservatore lontano.` },
            { e: '🌌', t: `La Via Lattea contiene un buco nero supermassiccio - Sagittarius A* - di 4 milioni di masse solari, a 26.000 anni luce dalla Terra. La sua ombra è stata fotografata nel 2022.` },
          ],
          formula: null, sim: 'blackholes',
        },
        student: {
          title: `Relatività generale, metrica di Schwarzschild e onde gravitazionali`,
          body: `<p>La <strong>relatività generale</strong> di Einstein (1915) buttò via la forza di gravità di Newton e la sostituì con la geometria: massa ed energia curvano lo spaziotempo, e gli oggetti seguono le traiettorie più dritte disponibili tra le curve. Tutta la teoria sta nelle equazioni di campo di Einstein \\(G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\dfrac{8\\pi G}{c^4}T_{\\mu\\nu}\\) - la geometria a sinistra, la materia a destra. Per una massa isolata e non rotante la soluzione esatta è la <strong>metrica di Schwarzschild</strong>, che nasconde una superficie critica a \\(r_S = 2GM/c^2\\), l'orizzonte degli eventi.</p>
<p>Le conseguenze vicino a quella superficie sono strane e del tutto reali. Il tempo stesso rallenta per chi è in fondo alla buca - un orologio a raggio \\(r\\) batte a \\(d\\tau = \\sqrt{1 - r_S/r}\\,dt\\), fermandosi quasi del tutto all'orizzonte visto da lontano - e la luce che lotta per uscire viene stirata verso il rosso, \\(z = (1 - r_S/r)^{-1/2} - 1\\). Nemmeno la materia può cadere dritta dentro: spiraleggia in un disco di accrescimento, scaldato dall'attrito a milioni di gradi finché brilla nei raggi X. È quel bagliore a farci trovare buchi neri che non potremo mai vedere direttamente.</p>
<p>La relatività generale predisse anche le <strong>onde gravitazionali</strong> - vere increspature nello spaziotempo - e nel 2015 LIGO ne colse finalmente una. Due buchi neri di 36 e 29 masse solari spiraleggiarono insieme a 1,3 miliardi di anni luce e, in due decimi di secondo, convertirono tre interi Soli di massa in radiazione gravitazionale, irradiando per un istante più di tutte le stelle dell'universo visibile. Le onde stirarono i bracci da 4 km di LIGO di \\(10^{-18}\\) m - un millesimo della larghezza di un protone - e le sentimmo.</p>`,
          facts: [
            { e: '🔬', t: `La sensibilità di LIGO è così estrema che le fluttuazioni quantistiche dei singoli fotoni ne limitano la precisione - si usa la luce "compressa" (una tecnica di ottica quantistica) per spingersi sotto questo limite.` },
            { e: '🌊', t: `Il segnale GW170817 (due stelle di neutroni che si fondono, 2017) fu rilevato contemporaneamente in onde gravitazionali, raggi gamma, raggi X, ottico e radio - la nascita dell'astronomia multimessaggera.` },
            { e: '⚫', t: `Sagittarius A* ha una massa di 4,15 milioni di Soli compressa in una regione più piccola del nostro Sistema Solare - eppure è sorprendentemente quieto, accresce a solo 10⁻⁸ del suo tasso massimo teorico.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Equazioni di campo di Einstein', e: 'G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\dfrac{8\\pi G}{c^4}T_{\\mu\\nu}' },
            { n: 'Raggio di Schwarzschild', e: 'r_S = \\dfrac{2GM}{c^2}', c: 'orizzonte degli eventi' },
            { sep: 1 },
            { n: 'Metrica di Schwarzschild', e: 'ds^2 = -\\!\\left(1-\\tfrac{r_S}{r}\\right)\\!c^2dt^2 + \\left(1-\\tfrac{r_S}{r}\\right)^{-1}\\!dr^2 + r^2 d\\Omega^2' },
            { n: 'Dilatazione del tempo', e: 'd\\tau = \\sqrt{1 - r_S/r}\\;dt' },
            { sep: 1 },
            { n: 'Redshift gravitazionale', e: 'z = (1 - r_S/r)^{-1/2} - 1' },
            { n: 'ISCO', e: 'r_{\\text{ISCO}} = 3r_S = 6GM/c^2' },
          ] }, sim: 'blackholes',
        },
        scholar: {
          title: `Metrica di Kerr, radiazione di Hawking e il paradosso dell'informazione`,
          body: `<h4><span class="hn">01</span>I buchi neri reali ruotano</h4>
<p>L'ordinata soluzione di Schwarzschild è un'idealizzazione; quasi ogni buco nero reale ruota, e la rotazione cambia tutto. La <strong>metrica di Kerr</strong> (Roy Kerr, 1963) descrive un buco rotante di massa \\(M\\) e momento angolare \\(J = aMc\\), con lo spin \\(a\\) limitato a \\(GM/c^2\\) - oltre, l'orizzonte svanirebbe ed esporrebbe una singolarità "nuda" che la natura sembra vietare. La scoperta di Kerr impiegò quasi mezzo secolo per essere trovata in cielo, ma ora descrive i motori al centro delle galassie.</p>
<h4><span class="hn">02</span>Trascinamento dei riferimenti ed ergosfera</h4>
<p>Una massa rotante non curva soltanto lo spaziotempo, lo <em>trascina</em> con sé come l'acqua che gira in uno scarico. Abbastanza vicino, questo trascinamento diventa così violento che dentro una regione chiamata <strong>ergosfera</strong> - fuori dall'orizzonte, quindi ancora sfuggibile - nulla può restare fermo rispetto alle stelle lontane. Restare immobili non è più un'opzione: sei costretto a co-ruotare col buco che tu lo voglia o no.</p>
<h4><span class="hn">03</span>Estrarre energia da un buco nero: il processo di Penrose</h4>
<p>Quel trascinamento è sfruttabile. Nello schema di Penrose, un oggetto che entra nell'ergosfera si spezza in due; un pezzo viene scagliato lungo una traiettoria a energia negativa dentro il buco mentre l'altro sfugge portando <em>più</em> energia di quanta ne avesse la coppia in ingresso - il surplus succhiato direttamente dallo spin del buco, fino a circa il 29% della sua massa-energia. La natura sembra farlo esattamente su grande scala, attingendo alla rotazione dei buchi neri per lanciare i getti relativistici lunghi anni luce delle galassie attive.</p>
<h4><span class="hn">04</span>I buchi neri non sono neri: la radiazione di Hawking</h4>
<p>La bomba di Hawking del 1974 fu che la meccanica quantistica fa brillare un buco nero. Vicino all'orizzonte le inquiete fluttuazioni del vuoto vengono divise, un partner cade dentro mentre l'altro sfugge come vera radiazione termica a \\(T_H = \\dfrac{\\hbar c^3}{8\\pi G M k_B}\\). La temperatura è minuscola per un buco di massa stellare, ma attenzione al segno: più piccolo significa più <em>caldo</em>, così mentre irradia un buco si rimpicciolisce, si scalda e irradia più in fretta, evaporando in una fuga che finisce - dopo forse \\(10^{64}\\) anni - in un lampo finale.</p>
<h4><span class="hn">05</span>Il paradosso dell'informazione</h4>
<p>Quell'evaporazione apre la ferita più profonda della fisica teorica. Se la radiazione uscente è davvero termica - puro caso - allora tutto ciò che è mai caduto dentro viene cancellato quando il buco scompare, cosa che la meccanica quantistica vieta categoricamente: l'informazione deve conservarsi. Per cinquant'anni la dolcezza della relatività e l'unitarietà della teoria quantistica si sono fatte guerra su un buco nero che evapora, e non c'è ancora una pace del tutto condivisa.</p>
<h4><span class="hn">06</span>Olografia e la curva di Page</h4>
<p>L'indizio più stuzzicante è che l'entropia di un buco nero scala con l'<em>area</em> del suo orizzonte, non con il volume - \\(S_{BH} = \\dfrac{k_B A}{4 l_P^2}\\) - suggerendo che tutto ciò che è dentro sia in qualche modo codificato sulla superficie, il seme del <strong>principio olografico</strong>. Calcoli recenti della "curva di Page", con strane configurazioni gravitazionali dette wormhole di replica, suggeriscono che l'informazione dopotutto sfugga e l'unitarietà sopravviva. Come esattamente resta una delle domande più vive nella ricerca di una gravità quantistica.</p>`,
          facts: [
            { e: '🔬', t: `Il calcolo della curva di Page (2019) usò i wormhole di replica - punti di sella nell'integrale sui cammini gravitazionale che collegano diverse repliche del sistema - per mostrare che l'unitarietà si conserva, sommando su geometrie dello spaziotempo topologicamente non banali.` },
            { e: '🌌', t: `M87* ruota a ~90% dello spin massimo possibile (a ≈ 0,9 GM/c²), dedotto dall'asimmetria della sua immagine del 2019 - trascinamento dei riferimenti a ritmo quasi massimo, che alimenta un getto relativistico di 5.000 anni luce.` },
            { e: '🎯', t: `L'Event Horizon Telescope raggiunge una risoluzione angolare di 20 microarcosecondi - equivalente a leggere un giornale a New York da un caffè a Parigi.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Temperatura di Hawking', e: 'T_H = \\dfrac{\\hbar c^3}{8\\pi G M k_B}', c: '~10⁻⁸ K per 1 M_☉' },
            { n: 'Tempo di evaporazione', e: '\\tau = \\dfrac{5120\\pi G^2 M^3}{\\hbar c^4}', c: '~10⁶⁴ anni per 1 M_☉' },
            { sep: 1 },
            { n: 'Bekenstein–Hawking', e: 'S_{BH} = \\dfrac{k_B A}{4 l_P^2}', c: 'l_P = √(ℏG/c³)' },
            { n: 'Processo di Penrose', e: '\\Delta E \\le \\left(1 - \\tfrac{1}{\\sqrt{2}}\\right)Mc^2 \\approx 29\\%' },
            { sep: 1 },
            { n: 'Limite di spin di Kerr', e: '0 \\le a \\le GM/c^2', c: `estremale all'uguaglianza` },
            { n: 'Ergosfera', e: 'r_{\\text{ergo}} = \\tfrac{r_S}{2} + \\sqrt{\\tfrac{r_S^2}{4} - a^2\\cos^2\\theta}' },
          ] }, sim: 'blackholes',
        },
      },
    },
    solarsystem: {
      title: 'Il Sistema Solare',
      teaser: `Otto pianeti, oltre 200 lune, milioni di asteroidi e una stella che contiene il 99,86% di tutta la massa. Il nostro vicinato cosmico è molto più strano di quanto sembri.`,
      chips: ['Pianeti', 'Orbite', 'Lune'],
      lvls: {
        junior: {
          title: `Il nostro vicinato cosmico - otto mondi e oltre!`,
          body: `<p>Il nostro Sistema Solare è una famiglia di mondi che gira attorno a una sola stella, il nostro Sole. Comprende <strong>otto pianeti</strong>, più di 200 lune, milioni di asteroidi, miliardi di comete e una vasta nube di detriti ghiacciati ai bordi. Ogni suo pezzo si condensò dallo stesso disco vorticoso di gas e polvere circa 4,6 miliardi di anni fa - polvere che una stella vicina, esplodendo, aveva arricchito con gli elementi pesanti di cui sei fatto tu stesso.</p>
<p>I quattro pianeti interni - Mercurio, Venere, Terra e Marte - sono piccoli mondi rocciosi. I quattro esterni - Giove, Saturno, Urano e Nettuno - sono giganti palle di gas e ghiaccio. Giove da solo è così vasto che ogni altro pianeta ci starebbe dentro con spazio d'avanzo. E i famosi anelli di Saturno? Miliardi di frammenti di ghiaccio e roccia, dal granello di sabbia alle dimensioni di una casa, che sfrecciano in un disco spesso appena decine di metri.</p>
<p>Alcuni dei posti più emozionanti là fuori non sono affatto i pianeti, ma le loro lune. Sotto il guscio ghiacciato di <strong>Europa</strong>, luna di Giove, c'è un oceano globale di acqua liquida, tenuto dal congelamento dal riscaldamento mareale - una delle scommesse migliori di tutto il Sistema Solare per trovare la vita. <strong>Titano</strong>, luna di Saturno, indossa una spessa atmosfera arancione e ha laghi in superficie, con pioggia, fiumi e un ciclo meteo stranamente simile a quello terrestre - solo che va a metano liquido invece che ad acqua.</p>`,
          facts: [
            { e: '🪐', t: `Gli anelli di Saturno si estendono per 282.000 km - abbastanza da mettere in fila 22 Terre - eppure in certi punti sono spessi solo una decina di metri. Ridotti a un foglio di carta, sarebbero più sottili della carta stessa.` },
            { e: '🌋', t: `Io, luna di Giove, è il corpo più vulcanicamente attivo del Sistema Solare - con centinaia di vulcani attivi alimentati dalla spremitura mareale dell'immensa gravità di Giove.` },
            { e: '🌊', t: `L'oceano sotto la superficie di Europa contiene più acqua liquida di tutti gli oceani terrestri messi insieme - tenuto caldo dalla flessione mareale, con un fondale roccioso che potrebbe ospitare camini idrotermali.` },
          ],
          formula: null, sim: 'solarsystem',
        },
        student: {
          title: `Meccanica orbitale, leggi di Keplero e formazione planetaria`,
          body: `<p>Le <strong>tre leggi di Keplero</strong>, estratte dai dati a occhio nudo di Tycho Brahe e poi derivate con eleganza da Newton, governano ancora ogni orbita. I pianeti tracciano <em>ellissi</em> con il Sole in un fuoco; una linea dal Sole al pianeta spazza aree uguali in tempi uguali, così un mondo corre al punto più vicino e indugia in quello più lontano; e i periodi obbediscono a \\(T^2 = \\dfrac{4\\pi^2}{GM_\\odot}a^3\\), il quadrato dell'anno fissato dal cubo delle dimensioni dell'orbita. Quest'ultima relazione è la fettuccia da geometra del Sistema Solare, che trasforma un periodo misurato direttamente in una distanza.</p>
<p>Il sistema si costruì dal basso. Nel giovane <em>disco protoplanetario</em>, la polvere si aggregò in planetesimi di chilometri, che si scontrarono e si fusero in protopianeti nell'arco di decine di milioni di anni. Oltre la <em>linea della neve</em> - attorno a 2,7 UA, dove l'acqua congela - i nuclei crebbero abbastanza da catturare idrogeno ed elio in massa, gonfiandosi nei giganti gassosi. Più tardi gli stessi giganti rimescolarono le loro orbite, e una tale migrazione (il modello di Nizza) avrebbe scagliato verso l'interno una gragnuola di detriti: l'Intenso Bombardamento Tardivo che segnò la giovane Luna.</p>
<p>Poiché la gravità si indebolisce con la distanza, un corpo grande sente un tiro più forte sul lato vicino che su quello lontano - una <strong>forza mareale</strong> che stira, \\(a_{\\text{tidal}} \\approx \\dfrac{2GMd}{r^3}\\). Col tempo le maree bloccano la maggior parte delle grandi lune così che una sola faccia punti per sempre verso l'interno, e dove sopraffanno la gravità propria di un corpo - dentro il <strong>limite di Roche</strong> \\(d_{\\text{Roche}} = a\\left(\\dfrac{2M_{\\text{planet}}}{M_{\\text{sat}}}\\right)^{1/3}\\) - nessuna luna può tenersi insieme. È esattamente perché i pianeti portano anelli invece di una luna in più: i detriti orbitano troppo vicino per coalescere.</p>`,
          facts: [
            { e: '🔭', t: `La sonda Voyager 1, lanciata nel 1977, è ora a 23 miliardi di km dal Sole - l'oggetto costruito dall'uomo più lontano - e trasmette ancora dati con una radio da 22 watt (come la lampadina di un frigo).` },
            { e: '💥', t: `La Luna si formò quando un corpo grande come Marte (Theia) colpì la giovane Terra ~4,5 miliardi di anni fa, espellendo materiale che coalescé nella Luna - confermato dai rapporti isotopici delle rocce lunari, identici a quelli del mantello terrestre.` },
            { e: '🌀', t: `La Grande Macchia Rossa di Giove è una tempesta più larga della Terra che infuria senza sosta da almeno 350 anni - anche se si sta restringendo ed è ora solo 1,3 volte il diametro terrestre.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Terza legge di Keplero', e: 'T^2 = \\dfrac{4\\pi^2}{GM_\\odot}\\,a^3' },
            { n: 'Velocità orbitale', e: 'v_{\\text{orb}} = \\sqrt{\\dfrac{GM_\\odot}{r}}' },
            { sep: 1 },
            { n: 'Accelerazione mareale', e: 'a_{\\text{tidal}} \\approx \\dfrac{2GMd}{r^3}' },
            { n: 'Limite di Roche', e: 'd_{\\text{Roche}} = a\\left(\\dfrac{2M_{\\text{planet}}}{M_{\\text{sat}}}\\right)^{1/3}' },
            { sep: 1 },
            { n: 'Velocità di fuga', e: 'v_{\\text{esc}} = \\sqrt{\\dfrac{2GM}{r}}' },
            { n: 'Sfera di Hill', e: 'r_H = a(1-e)\\left(\\dfrac{m}{3M}\\right)^{1/3}' },
          ] }, sim: 'solarsystem',
        },
        scholar: {
          title: `Dinamica a N corpi, risonanze e abitabilità planetaria`,
          body: `<h4><span class="hn">01</span>Il problema senza formula</h4>
<p>Due corpi che si attraggono orbitano in ellissi perfette e risolvibili. Aggiungine un terzo e la matematica ordinata crolla: Poincaré dimostrò nel 1890 che il <strong>problema degli N corpi</strong> generale non ha soluzione in forma chiusa per \\(N \\ge 3\\). Il meglio che possiamo fare è macinare il futuro numericamente, un minuscolo passo alla volta - il che significa che il maestoso orologio dei cieli è, in fondo, un problema che sulla carta non sappiamo davvero risolvere.</p>
<h4><span class="hn">02</span>Un Sistema Solare quietamente caotico</h4>
<p>Peggio, il Sistema Solare è <em>caotico</em>. Il suo tempo di Lyapunov è di soli ~5 milioni di anni, così qualsiasi incertezza nelle posizioni dei pianeti esplode esponenzialmente e la loro configurazione esatta diventa davvero imprevedibile oltre i ~100 milioni di anni. Mercurio è la mina vagante: lunghe simulazioni (Laskar & Gastineau, 2009) trovano una probabilità di circa l'1% che la sua orbita diventi abbastanza eccentrica, nel tempo che resta al Sole, da scontrarsi con Venere o la Terra. Il teorema KAM salva un po' d'ordine, garantendo isole di orbite stabili e quasi periodiche in mezzo al caos - ed è per questo che il sistema è durato così a lungo.</p>
<h4><span class="hn">03</span>Risonanze che costruiscono mondi e alimentano vulcani</h4>
<p>Quando i periodi orbitali si incastrano in rapporti semplici si ha una <strong>risonanza di moto medio</strong>, e i suoi effetti sono drammatici. Le lune interne di Giove Io, Europa e Ganimede sono intrappolate in una risonanza di Laplace 1:2:4 che tiene le loro orbite leggermente ellittiche, così la gravità di Giove impasta Io a ogni giro. Quella incessante flessione mareale scarica ~2 W/m² nell'interno di Io - trenta volte il flusso geotermico terrestre - rendendolo il corpo vulcanicamente più violento del Sistema Solare. È la risonanza, non la radioattività, ad alimentare quelle eruzioni.</p>
<h4><span class="hn">04</span>Risonanze che scavano vuoti</h4>
<p>Le risonanze possono anche distruggere. Nella fascia degli asteroidi, le <strong>lacune di Kirkwood</strong> - corsie vuote ai rapporti di periodo 3:1, 5:2 e 2:1 con Giove - segnano dove ripetuti calci risonanti pompano l'eccentricità di un asteroide finché non è scagliato su un'orbita che incrocia i pianeti. Quelle risonanze svuotate agiscono come un lento gocciolìo che alimenta la popolazione di oggetti near-Earth, il che significa che la stessa fisica che scolpisce la fascia ci consegna anche i nostri occasionali impattatori.</p>
<h4><span class="hn">05</span>Cosa rende un pianeta abitabile</h4>
<p>La classica <strong>zona abitabile</strong> - il guscio attorno a una stella dove l'acqua liquida può persistere, all'incirca 0,95–1,67 UA per il Sole - è solo il biglietto d'ingresso. L'abitabilità reale sembra richiedere anche massa sufficiente a trattenere un'atmosfera e a guidare la tettonica a placche, un campo magnetico per respingere il vento stellare, un ciclo carbonato–silicato che faccia da termostato al clima per ere, e forse una grande luna a stabilizzare l'inclinazione del pianeta. La Terra le soddisfa tutte in silenzio, tutte insieme.</p>
<h4><span class="hn">06</span>Zoom indietro: il vicinato fortunato</h4>
<p>L'abitabilità scala anche verso l'alto. Esiste probabilmente una zona abitabile <em>galattica</em>: troppo vicino all'affollato centro galattico e abbondano radiazioni sterilizzanti e incontri distruttivi; troppo fuori e non ci sono abbastanza elementi pesanti per costruire pianeti rocciosi o chimica complessa. E dentro il nostro sistema, Giove sembra fare da scudo gravitazionale, deviando o espellendo comete che altrimenti martellerebbero i pianeti interni molto più spesso. Che esistiamo affatto poggia su una catena di simili quiete fortune.</p>`,
          facts: [
            { e: '🔬', t: `Il James Webb Space Telescope ha rilevato CO₂, SO₂ e possibile dimetilsolfuro (una potenziale biofirma) nell'atmosfera di K2-18b - un sub-Nettuno nella zona abitabile - anche se l'interpretazione resta dibattuta.` },
            { e: '💫', t: `Le simulazioni numeriche mostrano che senza Giove come scudo gravitazionale la Terra subirebbe 1.000 volte più impatti di asteroidi - Giove devia o espelle la maggior parte dei potenziali impattatori prima che raggiungano il Sistema Solare interno.` },
            { e: '🌍', t: `L'inclinazione assiale della Terra (23,5°) è stabilizzata dalla Luna entro ~±1,3° su milioni di anni. Senza la Luna, variazioni caotiche dell'obliquità di 0°–85° causerebbero sbalzi climatici estremi, forse impedendo la vita complessa.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Tempo di Lyapunov', e: '\\tau_L \\sim 5\\ \\text{Myr}', c: 'Mercurio il più instabile' },
            { n: 'Dissipazione mareale', e: 'P_{\\text{tidal}} = \\tfrac{21}{2}\\dfrac{k_2}{Q}\\dfrac{GM^2 R^5}{a^6}e^2' },
            { sep: 1 },
            { n: 'Zona abitabile', e: 'r_{\\text{HZ}} = \\sqrt{L/L_\\odot}\\,\\times(0.95\\text{–}1.67)\\ \\text{UA}' },
            { n: 'Condizione di risonanza', e: '\\dfrac{n_1}{n_2} = \\dfrac{p}{p+q},\\quad p,q \\in \\mathbb{Z}' },
            { sep: 1 },
            { n: 'Velocità di fuga', e: 'v_{\\text{esc}} = \\sqrt{2GM/r}' },
            { n: 'Sfera di Hill', e: 'r_H = a\\left(\\dfrac{m}{3M}\\right)^{1/3}' },
          ] }, sim: 'solarsystem',
        },
      },
    },
    eclipse: {
      title: 'Eclissi',
      teaser: `Quando il Sole si oscura di giorno o la Luna diventa rosso sangue - e perché non succede ogni mese.`,
      chips: ['Eclissi solare', 'Eclissi lunare', 'Ombre'],
      lvls: {
        junior: {
          title: `Quando il Sole o la Luna si oscurano`,
          body: `<p>Ogni tanto il cielo fa qualcosa di spettacolare: il Sole viene cancellato in pieno giorno, oppure la Luna piena diventa di un rosso ramato intenso. Sono le <strong>eclissi</strong>, e succedono perché tre sfere nello spazio - il Sole, la Terra e la Luna - si allineano per un attimo in fila, così che una getti la sua ombra su un'altra. Il <strong>12 agosto 2026</strong> un'eclissi solare totale attraverserà l'Islanda e il nord della Spagna, la prima visibile dall'Europa continentale dal 1999.</p>
<p>Un'<strong>eclissi solare</strong> avviene con la Luna nuova, quando la Luna si infila esattamente tra noi e il Sole e lascia cadere la sua ombra sulla Terra. Chi si trova dentro quell'ombra vede la Luna coprire del tutto il Sole per un paio di minuti - il giorno diventa crepuscolo, spuntano le stelle e la spettrale atmosfera esterna del Sole brilla attorno a un disco nero. Un'<strong>eclissi lunare</strong> è l'immagine speculare: con la Luna piena la Terra si mette tra Sole e Luna, e la nostra ombra cade sulla Luna, tingendola di rosso.</p>
<p>Ma perché non c'è un'eclissi ogni singolo mese, a ogni Luna nuova e piena? Perché l'orbita della Luna è inclinata di qualche grado, così per la maggior parte dei mesi la sua ombra passa appena sopra o sotto la Terra e manca del tutto. Solo quando l'allineamento è quasi perfetto - poche volte l'anno - un'ombra colpisce davvero. È proprio quel mancare quasi sempre a rendere un'eclissi così speciale.</p>`,
          facts: [
            { e: '🌘', t: `L'eclissi solare totale del 12 agosto 2026 è la prima visibile dall'Europa continentale dal 1999, attraversa Islanda e nord della Spagna.` },
            { e: '🔴', t: `Una "luna di sangue" è solo un'eclissi lunare: la Luna brilla di rosso perché illuminata solo dalla luce solare piegata dall'atmosfera terrestre - tutte le albe e i tramonti insieme.` },
            { e: '🎯', t: `Per pura coincidenza il Sole è ~400 volte più largo della Luna e ~400 volte più lontano, così in cielo sembrano della stessa dimensione - ed è per questo che le eclissi totali sono possibili.` },
          ],
          formula: null, sim: 'eclipse',
        },
        student: {
          title: `La geometria delle eclissi, e perché sono rare`,
          body: `<p>Le eclissi sono un gioco di ombre con regole precise. Un'eclissi solare richiede la Luna <em>nuova</em> (Luna tra Terra e Sole); un'eclissi lunare richiede la Luna <em>piena</em> (Terra tra Sole e Luna). Le ombre hanno due parti: l'<strong>ombra</strong> centrale e scura, dove la sorgente di luce è del tutto bloccata, e la <strong>penombra</strong> più chiara attorno, dove è nascosta solo in parte. Nell'ombra vedi un'eclissi solare totale; nella penombra, solo parziale.</p>
<p>Se la Luna orbitasse sullo stesso piano su cui la Terra orbita attorno al Sole - l'eclittica - avremmo un'eclissi solare e una lunare ogni singolo mese. Ma l'orbita della Luna è inclinata di circa 5°, così di solito passa sopra o sotto la linea Sole-Terra. Le eclissi possono avvenire solo quando la Luna attraversa quella linea - in uno dei suoi due <strong>nodi</strong> - nello stesso istante della Luna nuova o piena. Questi allineamenti si raggruppano in due "stagioni delle eclissi" all'anno.</p>
<p>La coincidenza tra le dimensioni di Sole e Luna rende la Terra straordinariamente fortunata. Poiché la dimensione apparente della Luna corrisponde quasi a quella del Sole, riesce appena a coprirne il disco e a rivelare la corona. Quando la Luna è un po' più lontana nella sua orbita leggermente ellittica, resta corta e lascia un anello luminoso - un'eclissi <strong>anulare</strong>. La totalità è breve (un paio di minuti) perché la punta dell'ombra è piccola e sfreccia sul terreno a oltre 1.500 km/h.</p>`,
          facts: [
            { e: '🌗', t: `Nell'ombra vedi la totalità; nella penombra, più ampia, solo un'eclissi parziale. Per questo solo una stretta striscia di Terra vede un'eclissi solare totale.` },
            { e: '💍', t: `Quando la Luna è vicina al punto più lontano della sua orbita sembra troppo piccola per coprire il Sole, e lascia un "anello di fuoco" - un'eclissi anulare.` },
            { e: '📅', t: `Le eclissi arrivano in "stagioni" circa due volte l'anno, quando l'orbita inclinata della Luna attraversa il piano Terra-Sole vicino a una Luna nuova o piena.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Eclissi solare', e: '\\text{Luna nuova} + \\text{vicino a un nodo}' },
            { n: 'Eclissi lunare', e: '\\text{Luna piena} + \\text{vicino a un nodo}' },
            { sep: 1 },
            { n: 'Inclinazione orbitale', e: 'i \\approx 5.14°', c: 'perché non ogni mese' },
            { n: 'Ciclo di Saros', e: '\\approx 18\\text{ anni } 11\\text{ g}', c: 'le eclissi si ripetono' },
          ] }, sim: 'eclipse',
        },
        scholar: {
          title: `Nodi, ciclo di Saros e previsione delle eclissi`,
          body: `<h4><span class="hn">01</span>La linea dei nodi</h4>
<p>L'orbita della Luna interseca l'eclittica in due punti, i <strong>nodi</strong>. Un'eclissi richiede la sizigia - Sole, Terra e Luna allineati - entro pochi gradi da un nodo, i "limiti eclittici". Poiché la linea dei nodi regredisce (precede) una volta ogni 18,6 anni, le stagioni delle eclissi anticipano di circa 19 giorni ogni anno, invece di restare fisse sul calendario.</p>
<h4><span class="hn">02</span>Ombra, penombra e antiombra</h4>
<p>Il cono d'ombra della Luna raggiunge a malapena la Terra; quando la Luna è vicina all'apogeo la punta resta corta, tocca terra l'<em>antiombra</em> e l'eclissi è anulare. Il percorso della totalità è largo solo ~100-270 km, e la sua durata - limitata a circa 7,5 minuti - dipende dalle dimensioni dell'ombra rispetto al moto relativo di Luna e osservatore.</p>
<h4><span class="hn">03</span>Il Saros</h4>
<p>Dopo 223 mesi sinodici - 6.585,3 giorni, ovvero 18 anni 11 giorni e 8 ore - Sole, Luna e nodi tornano quasi alla stessa geometria, così si ripete un'eclissi quasi identica. Le 8 ore in più ruotano l'evento successivo di circa 120° verso ovest in longitudine; i membri successivi del Saros scivolano anche in latitudine, così una serie nasce vicino a un polo, attraversa il globo in ~1.200-1.500 anni e muore all'altro.</p>
<h4><span class="hn">04</span>Una coincidenza con una data di scadenza</h4>
<p>I diametri angolari di Sole e Luna sono entrambi circa 0,5°, ed è questo a rendere possibile la totalità (invece di un anello permanente). Ma la Luna si allontana di ~3,8 cm l'anno, così tra circa 600 milioni di anni il suo disco resterà sempre corto e le eclissi solari totali cesseranno per sempre. Ci troviamo a vivere nell'epoca in cui avvengono.</p>
<h4><span class="hn">05</span>Le eclissi come laboratorio</h4>
<p>La totalità ha fatto avanzare più volte la fisica: l'eclissi del 1919 permise a Eddington di misurare la deviazione della luce stellare attorno al Sole e confermare la relatività generale; l'elio fu identificato per la prima volta nello spettro del Sole durante l'eclissi del 1868; e la corona e la cromosfera si studiano ancora meglio quando l'accecante fotosfera è nascosta. Le eclissi registrate ancorano persino la cronologia del mondo antico.</p>`,
          facts: [
            { e: '🔭', t: `L'eclissi totale del 1919 permise a Eddington di misurare la deviazione della luce stellare attorno al Sole, confermando la relatività generale di Einstein.` },
            { e: '🌞', t: `L'elio fu scoperto nello spettro del Sole durante l'eclissi del 1868 - 27 anni prima di essere trovato sulla Terra.` },
            { e: '📉', t: `La Luna si allontana di ~3,8 cm l'anno; tra ~600 milioni di anni sarà troppo piccola per causare un'eclissi solare totale.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Mese sinodico', e: '29.531\\ \\text{giorni}', c: 'da Luna nuova a Luna nuova' },
            { n: 'Mese draconico', e: '27.212\\ \\text{giorni}', c: 'da nodo a nodo' },
            { sep: 1 },
            { n: 'Periodo di Saros', e: '223\\ \\text{sinodici} \\approx 18\\text{a }11\\text{g}' },
            { n: 'Limite eclittico solare', e: '|\\beta| \\lesssim 1.5°' },
          ] }, sim: 'eclipse',
        },
      },
    },
    meteors: {
      title: 'Stelle cadenti e sciami meteorici',
      teaser: `Perché le stelle cadenti arrivano secondo un calendario - e perché le Perseidi del 2026 saranno spettacolari.`,
      chips: ['Perseidi', 'Comete', 'Stelle cadenti'],
      lvls: {
        junior: {
          title: `Perché le stelle cadenti arrivano a sciami`,
          body: `<p>Una "stella cadente" non è affatto una stella - è un granello di polvere spaziale, spesso non più grande di un granello di sabbia, che si schianta contro la sommità della nostra atmosfera a decine di chilometri al secondo. Va così veloce da scaldare l'aria attorno a sé fino al bianco incandescente, e quella scia luminosa è ciò che vedi. La polvere stessa brucia in un secondo o due, molto in alto sopra il suolo.</p>
<p>In una notte buia qualsiasi ne puoi cogliere qualcuna a caso. Ma poche volte l'anno il cielo offre un vero spettacolo - uno <strong>sciame meteorico</strong> - con decine di meteore all'ora, che sembrano partire tutte dallo stesso punto. Succede quando la Terra attraversa una scia di polvere lasciata da una <strong>cometa</strong>. La cometa perde briciole lungo la sua orbita, e una volta l'anno il nostro pianeta ci passa dentro dritto, come un'auto in uno sciame di moscerini.</p>
<p>Le più famose sono le <strong>Perseidi</strong>, che culminano ogni agosto - e il 2026 è un'ottima annata, senza Luna luminosa a cancellarle, nella stessa notte straordinaria (12 agosto) di un'eclissi solare totale sull'Europa. Le meteore sembrano irradiarsi dalla costellazione di Perseo, quindi quello è il "radiante" - ma non devi fissarlo. Sdraiati, lascia adattare gli occhi al buio e guarda tutto il cielo.</p>`,
          facts: [
            { e: '☄️', t: `Gli sciami meteorici avvengono quando la Terra attraversa la scia di polvere lasciata da una cometa. Le Perseidi vengono dalla cometa Swift-Tuttle.` },
            { e: '🔥', t: `La maggior parte delle meteore non è più grande di un granello di sabbia - la scia brillante è aria surriscaldata, non il granello che brucia.` },
            { e: '🌑', t: `Le Perseidi culminano il 12-13 agosto 2026 con la Luna nuova, così un cielo buio potrebbe mostrare fino a 100 meteore all'ora.` },
          ],
          formula: null, sim: 'meteors',
        },
        student: {
          title: `Detriti di cometa, radianti e perché gli sciami sono annuali`,
          body: `<p>Un <strong>meteoroide</strong> è un piccolo frammento di roccia o polvere nello spazio; quando colpisce l'atmosfera (a ~100 km di quota) e si accende è una <strong>meteora</strong>; ciò che sopravvive fino al suolo è una <strong>meteorite</strong>. Le meteore degli sciami sono briciole di cometa. Quando una cometa passa vicino al Sole, il suo ghiaccio sublima e libera polvere che si distribuisce lungo l'orbita della cometa, formando un flusso di detriti. Ogni volta che l'orbita della Terra interseca quel flusso - alla stessa data ogni anno - abbiamo uno sciame.</p>
<p>Tutte le meteore di uno sciame viaggiano su traiettorie parallele (condividono l'orbita della cometa), così la prospettiva le fa sembrare divergere da un unico punto in cielo - il <strong>radiante</strong> - proprio come binari paralleli sembrano incontrarsi all'orizzonte. Gli sciami prendono il nome dalla costellazione in cui si trova il radiante: Perseidi (Perseo), Geminidi (Gemelli), Leonidi (Leone). L'attività si misura con il <em>Tasso Orario Zenitale</em>, il numero che vedresti con cielo perfettamente buio e radiante allo zenit.</p>
<p>Il tasso sale e scende nell'arco di giorni man mano che la Terra entra ed esce dalla parte più densa del flusso, con il picco quando ne attraversa il cuore. Il guastafeste è la luce lunare: una Luna luminosa cancella le più deboli, ed è per questo che i previsori si entusiasmano quando un picco cade su una Luna nuova - come fanno le Perseidi nel 2026. Le meteore colpiscono l'aria tra 11 e 72 km/s; le Perseidi sono veloci, circa 59 km/s.</p>`,
          facts: [
            { e: '🚆', t: `Le meteore di uno sciame corrono parallele ma sembrano irradiarsi da un punto - il "radiante" - lo stesso trucco prospettico dei binari che si incontrano all'orizzonte.` },
            { e: '🌠', t: `Le Perseidi colpiscono l'aria a ~59 km/s. Le tranquille Draconidi arrancano a ~20 km/s; le Leonidi sfrecciano a ~71 km/s.` },
            { e: '🌙', t: `La vera prova di uno sciame è la Luna: anche uno sciame forte delude con una Luna luminosa, per questo un picco con Luna nuova come quello delle Perseidi 2026 è prezioso.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Meteoroide → meteora → meteorite', e: '\\text{nello spazio} \\to \\text{brilla in aria} \\to \\text{al suolo}' },
            { sep: 1 },
            { n: 'Tasso Orario Zenitale', e: '\\text{ZHR} = \\text{meteore/ora, cielo ideale}' },
            { n: 'Velocità delle Perseidi', e: 'v \\approx 59\\ \\text{km/s}' },
          ] }, sim: 'meteors',
        },
        scholar: {
          title: `Flussi, ZHR e la vita di un meteoroide`,
          body: `<h4><span class="hn">01</span>Dinamica del flusso</h4>
<p>La polvere persa da una cometa si distribuisce lungo l'orbita e si disperde nei secoli per effetto delle forze di radiazione (effetto Poynting-Robertson) e delle perturbazioni planetarie. Filamenti giovani e densi producono picchi improvvisi e persino tempeste - le Leonidi diedero migliaia di meteore all'ora nel 1833 e nel 1966 - quando la Terra taglia materiale appena deposto invece del flusso di fondo spalmato.</p>
<h4><span class="hn">02</span>Il radiante e la geometria</h4>
<p>Il radiante indica la direzione della velocità della Terra rispetto al flusso; la sua posizione in cielo e la velocità d'ingresso derivano dalla sottrazione vettoriale della velocità orbitale terrestre da quella dei meteoroidi. I conteggi osservati dipendono molto da quanto è alto il radiante, così i tassi si correggono al <strong>tasso orario zenitale</strong> - il conteggio per un radiante allo zenit con magnitudine limite 6,5.</p>
<h4><span class="hn">03</span>Fisica dell'ablazione</h4>
<p>Un meteoroide che entra a decine di km/s subisce l'<em>ablazione</em>: gli urti con le molecole d'aria lo scaldano oltre la vaporizzazione, e la scia visibile è aria e atomi metallici eccitati e ionizzati, non fiamma. La luminosità cresce ripidamente con la massa e all'incirca con il cubo della velocità, così gli sciami più veloci lanciano meteore abbaglianti da granelli sorprendentemente piccoli.</p>
<h4><span class="hn">04</span>Dalla polvere alla meteorite</h4>
<p>Solo corpi più grandi, più lenti e strutturalmente resistenti sopravvivono all'ablazione e atterrano come meteoriti; i meteoroidi degli sciami sono troppo piccoli e fragili e non raggiungono mai il suolo. Anzi, gran parte della massa che la Terra raccoglie - circa 40.000 tonnellate l'anno - arriva come polvere sporadica (non da sciame) più che negli sciami che aspettiamo.</p>
<h4><span class="hn">05</span>Previsione e pericolo</h4>
<p>I modelli moderni tracciano i singoli filamenti di polvere per prevedere i picchi con la precisione dell'ora - utile perché anche un meteoroide grande come un granello di sabbia è pericoloso per un veicolo spaziale a velocità orbitale. La cometa madre delle Perseidi, la 109P/Swift-Tuttle, è un nucleo di 26 km su un'orbita di 133 anni - il più grande oggetto noto a fare ripetuti passaggi ravvicinati alla Terra.</p>`,
          facts: [
            { e: '☄️', t: `La cometa madre delle Perseidi, la Swift-Tuttle (26 km), è il più grande oggetto che passa ripetutamente vicino alla Terra - vista l'ultima volta nel 1992, di ritorno nel 2126.` },
            { e: '🌍', t: `La Terra raccoglie ~40.000 tonnellate di materiale meteorico l'anno, ma quasi tutto è polvere sporadica, non meteore da sciame.` },
            { e: '⚡', t: `La luminosità cresce all'incirca con il cubo della velocità, così le veloci Leonidi (71 km/s) divampano come bolidi da granelli minuscoli.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Energia cinetica', e: 'E = \\tfrac{1}{2}mv^2', c: 'perché le meteore veloci brillano' },
            { n: 'Tasso orario zenitale', e: '\\text{ZHR} \\propto \\dfrac{N}{\\sin h_R}', c: 'corretto allo zenit' },
            { sep: 1 },
            { n: 'Cometa madre delle Perseidi', e: '\\text{109P/Swift-Tuttle}', c: 'orbita di 133 anni' },
          ] }, sim: 'meteors',
        },
      },
    },
    photosynthesis: {
      title: 'Fotosintesi',
      teaser: 'Le piante mangiano la luce del sole - trasformano aria, acqua e luce in cibo e nell\'ossigeno del tuo prossimo respiro.',
      chips: ['Clorofilla', 'Luce', 'Carbonio'],
      lvls: {
        junior: {
          title: 'Come le piante mangiano la luce del sole',
          body: `<p>Le piante riescono a fare qualcosa che nessun animale sa fare: si costruiscono il cibo da sole, partendo da aria e luce. Punta una foglia verso il Sole e, al suo interno, tutto il giorno gira una chimica straordinaria. La foglia assorbe l'anidride carbonica dall'aria e l'acqua dalle radici, cattura la luce del sole con un pigmento verde chiamato <strong>clorofilla</strong> e ricostruisce quegli ingredienti semplici in zucchero - il suo cibo - liberando ossigeno come scarto. Quello scarto è proprio l'aria che respiri.</p>
<p>Il verde di quasi ogni pianta <em>è</em> la clorofilla, la molecola che cattura la luce. Assorbe le parti rosse e blu della luce solare e rimanda indietro il verde ai tuoi occhi - ed è esattamente per questo che le foglie sembrano verdi. L'energia che afferra alimenta l'intera ricostruzione, trasformando ingredienti a bassa energia (anidride carbonica e acqua) nello zucchero ad alta energia che la pianta può bruciare più tardi o usare per costruire radici, fusti e frutti.</p>
<p>Questa singola reazione fa funzionare in silenzio tutto il mondo vivente. Quasi tutto il cibo sulla Terra risale a essa: l'erba che mangia una mucca, il grano del tuo pane, il plancton che nutre gli oceani. E quasi tutto l'ossigeno dell'atmosfera è stato espirato da piante e alghe che fanno fotosintesi da miliardi di anni. Ogni respiro che fai è, in un senso molto concreto, preso in prestito da una foglia.</p>`,
          facts: [
            { e: '🌍', t: 'Quasi tutto l\'ossigeno nell\'aria è stato prodotto dalla fotosintesi. Per il tuo prossimo respiro, ringrazia una pianta - o un po\' di alghe oceaniche.' },
            { e: '🌿', t: 'Le foglie sembrano verdi perché la clorofilla assorbe la luce rossa e blu per l\'energia e riflette il verde, che non riesce a usare.' },
            { e: '🌊', t: 'La maggior parte della fotosintesi avviene in mare: il fitoplancton microscopico produce circa metà dell\'ossigeno del mondo.' },
          ],
          formula: null, sim: 'photosynthesis',
        },
        student: {
          title: 'Le reazioni alla luce e al buio, e i fattori limitanti',
          body: `<p>L'equazione complessiva sembra ingannevolmente ordinata: \\(6CO_2 + 6H_2O \\xrightarrow{\\text{luce}} C_6H_{12}O_6 + 6O_2\\) - sei anidridi carboniche e sei acque diventano un glucosio e sei ossigeni, alimentati dalla luce. Ma nasconde due fasi collegate, entrambe dentro il cloroplasto.</p>
<p>Prima, le <strong>reazioni dipendenti dalla luce</strong> nelle membrane dei tilacoidi: la clorofilla assorbe i fotoni, che eccitano gli elettroni e scindono l'acqua - da qui viene l'\\(O_2\\) - mettendo da parte l'energia come ATP e NADPH. Poi, il <strong>ciclo di Calvin indipendente dalla luce</strong> nello stroma spende quell'ATP e NADPH per fissare la \\(CO_2\\) in zucchero, cucendo il carbonio dell'aria su una molecola esistente con l'enzima rubisco, la proteina più abbondante sulla Terra.</p>
<p>La velocità complessiva è fissata da ciò che scarseggia di più - un <strong>fattore limitante</strong>. Con poca luce, aggiungere luce accelera tutto; con luce intensa la velocità raggiunge un plateau e diventa collo di bottiglia qualcos'altro (la concentrazione di CO₂ o la temperatura). I coltivatori lo sfruttano con precisione: si pompa CO₂ in più in una serra e, finché luce e calore lo permettono, le piante crescono più in fretta. Spingi un solo fattore e la velocità sale solo finché non finisce il successivo.</p>`,
          facts: [
            { e: '🏭', t: 'Le serre commerciali pompano CO₂ in più (fino a ~1000 ppm) per aumentare la crescita - prova diretta che la CO₂ è spesso il fattore limitante con luce intensa.' },
            { e: '🧬', t: 'Il rubisco, l\'enzima che afferra la CO₂, è la proteina più abbondante sulla Terra - e sorprendentemente lento, fissa solo poche molecole al secondo.' },
            { e: '☀️', t: 'Fotosintesi e respirazione sono quasi immagini speculari: una immagazzina l\'energia solare nello zucchero, l\'altra la spende. Le piante fanno entrambe.' },
          ],
          formula: { tex: 1, rows: [
            { n: 'Reazione complessiva', e: '6CO_2 + 6H_2O \\xrightarrow{\\text{luce}} C_6H_{12}O_6 + 6O_2' },
            { sep: 1 },
            { n: 'Reazioni alla luce', e: '2H_2O \\to O_2 + 4H^+ + 4e^-', c: 'nel tilacoide; produce ATP, NADPH' },
            { n: 'Ciclo di Calvin', e: 'CO_2 + \\text{ATP} + \\text{NADPH} \\to \\text{zucchero}', c: 'nello stroma' },
            { n: 'Fattore limitante', e: '\\text{velocità} = \\min(\\text{luce},\\ CO_2,\\ \\text{temp})' },
          ] }, sim: 'photosynthesis',
        },
        scholar: {
          title: 'Dai fotoni allo zucchero: la macchina e i suoi limiti',
          body: `<h4><span class="hn">01</span>Due fotosistemi e lo schema a Z</h4>
<p>La luce colpisce in serie il Fotosistema II e il Fotosistema I. Il PSII (il suo centro di reazione, P680) diventa un ossidante abbastanza forte da scindere l'acqua, \\(2H_2O \\to O_2 + 4H^+ + 4e^-\\); gli elettroni scorrono lungo una catena di trasporto - lo "schema a Z" - pompando protoni, e vengono poi ri-energizzati al PSI (P700) per ridurre il NADP⁺ a NADPH. L'acqua è la sorgente di elettroni e l'\\(O_2\\) è il suo sottoprodotto.</p>
<h4><span class="hn">02</span>La chemiosmosi produce l'ATP</h4>
<p>Il gradiente protonico costruito attraverso la membrana del tilacoide muove l'ATP sintasi, esattamente come nei mitocondri della respirazione - lo stesso enzima rotante, lo stesso trucco, su un tipo di membrana opposto. Qui è la luce a caricare il gradiente; nella respirazione lo fa l'ossidazione del cibo.</p>
<h4><span class="hn">03</span>Il ciclo di Calvin e il difetto del rubisco</h4>
<p>Nello stroma il rubisco fissa la \\(CO_2\\) sul ribulosio-1,5-bisfosfato; tre giri producono un G3P e sei giri (18 ATP, 12 NADPH) danno un glucosio. Ma il rubisco è impreciso: afferra anche l'\\(O_2\\), innescando la <em>fotorespirazione</em>, uno spreco. Questa ambiguità costosa - un residuo dell'aver evoluto quando l'aria era quasi priva di ossigeno - limita l'efficienza della maggior parte delle piante.</p>
<h4><span class="hn">04</span>C4 e CAM: ingegneria attorno al difetto</h4>
<p>I climi caldi e secchi peggiorano la fotorespirazione, così alcune piante concentrano la \\(CO_2\\) attorno al rubisco per sopprimerla. Le piante C4 (mais, canna da zucchero) separano cattura e fissazione del carbonio in cellule diverse; le piante CAM (cactus, ananas) le separano nel tempo, aprendo gli stomi solo di notte. Sono soluzioni evolutive indipendenti allo stesso identico problema.</p>
<h4><span class="hn">05</span>Efficienza e bilancio planetario</h4>
<p>La fotosintesi converte solo l'1-2% circa della luce che arriva su una foglia in biomassa, eppure su scala planetaria fissa circa 120 gigatonnellate di carbonio all'anno e, in miliardi di anni, ha riempito il cielo di ossigeno - la Grande Ossidazione di ~2,4 miliardi di anni fa. Resta la fonte di energia ultima per quasi tutta la vita sulla Terra.</p>`,
          facts: [
            { e: '🌬️', t: 'La Grande Ossidazione (~2,4 miliardi di anni fa), quando i microbi fotosintetici inondarono l\'aria di ossigeno, fu uno dei più grandi cambiamenti mai visti sulla Terra.' },
            { e: '🌽', t: 'Le piante C4 come mais e canna da zucchero concentrano la CO₂ per battere la fotorespirazione, ed è per questo che prosperano nei climi caldi e luminosi.' },
            { e: '⚡', t: 'La fotosintesi è efficiente solo all\'1-2% nel catturare la luce, eppure fissa circa 120 miliardi di tonnellate di carbonio ogni anno.' },
          ],
          formula: { tex: 1, rows: [
            { n: 'Reazione complessiva', e: '6CO_2 + 6H_2O \\to C_6H_{12}O_6 + 6O_2' },
            { n: 'Scissione dell\'acqua (PSII)', e: '2H_2O \\to O_2 + 4H^+ + 4e^-' },
            { sep: 1 },
            { n: 'Costo del ciclo di Calvin', e: '6\\,CO_2 + 18\\,\\text{ATP} + 12\\,\\text{NADPH} \\to C_6H_{12}O_6' },
            { n: 'Efficienza', e: '\\eta \\approx 1\\text{-}2\\%', c: 'da luce a biomassa' },
          ] }, sim: 'photosynthesis',
        },
      },
    },
  },
  guide: {
    astro: {
      junior: {
        legend: `Una singola stella che vive la sua intera vita, accelerata enormemente. [[age]] segue quanto è avanzata e [[stage]] nomina cosa è diventata. Il colore e la dimensione cambiano man mano che invecchia — e come finisce dipende da una sola cosa che controlli.`,
        try: `Metti [[mass]] a 1 (una stella come il nostro Sole) e premi [[reset]], poi guarda fino alla fine. Ora metti [[mass]] a 20 e guarda di nuovo.`,
        notice: `<b>La stella di taglia solare si gonfia, soffia via i suoi strati esterni e lascia una minuscola nana bianca. Quella pesante esplode come supernova e lascia un buco nero.</b> L'intero destino di una stella è fissato alla nascita dalla sua massa — nient'altro. E quelle grandi muoiono assurdamente in fretta: le stelle più pesanti bruciano il loro carburante così sfrenatamente che una stella di 20 masse solari vive pochi milioni di anni mentre il Sole ne fa dieci miliardi. Essere più grandi ti dà più carburante e una vita molto più corta.`,
      },
      student: {
        legend: `Evoluzione stellare guidata dalla sola [[mass]]. [[stage]] scorre tra sequenza principale, gigante rossa, e poi un punto finale dipendente dalla massa: nebulosa planetaria e nana bianca sotto ~8 M☉, o supergigante, supernova e una stella di neutroni o buco nero sopra.`,
        try: `Confronta i punti finali a [[mass]] = 1, 10 e 20, e nota quanto tempo ciascuna passa sulla sequenza principale. Trova la [[mass]] dove l'esito passa da nana bianca a supernova.`,
        notice: `<b>Il bivio sta vicino a 8 M☉, e la durata di vita crolla come circa \\(1/M^3\\) — dieci miliardi di anni per il Sole, dieci milioni per una stella da 10 M☉.</b> La luminosità scala ripidamente con la massa (\\(L \\propto M^{3.5}\\)) mentre la scorta di carburante scala solo come \\(M\\), quindi la durata \\(\\propto M/L \\sim M^{-2.5}\\). Sotto il bivio, la pressione di degenerazione degli elettroni arresta il collasso al <b>limite di Chandrasekhar</b> di 1,4 M☉ e una nana bianca sopravvive; sopra, il nucleo supera ciò che la degenerazione può sostenere e collassa catastroficamente. Ogni elemento più pesante del ferro nel tuo corpo fu forgiato nel secondo tipo di morte.`,
      },
      scholar: {
        legend: `Evoluzione schematica di stella singola parametrizzata dalla [[mass]] iniziale, con durata di vita in sequenza principale che scala come \\(\\propto M^{-3}\\) in questo modello. Metallicità, perdita di massa, rotazione e binarietà non sono rappresentate.`,
        try: `Localizza il confine nana-bianca / supernova del modello e il suo confine stella-di-neutroni / buco nero. Considera quanto fortemente ciascuna delle variabili omesse sposterebbe quelle soglie in una popolazione reale.`,
        notice: `<b>Le soglie sono molto meno nette di quanto qualsiasi modello a parametro singolo implichi — perdita di massa e metallicità le spostano di parecchie masse solari.</b> La relazione osservata è \\(L \\propto M^{3.5}\\) dando \\(\\tau \\propto M^{-2.5}\\); il collasso del nucleo richiede di superare la massa di Chandrasekhar \\(M_{Ch} = 1.44\\,(\\mu_e/2)^{-2}\\) M☉, e la divisione stella-di-neutroni/buco-nero dipende dall'equazione di stato nucleare mal vincolata (limite di Tolman–Oppenheimer–Volkoff, ~2,2–2,9 M☉). Le stelle a bassa metallicità trattengono molta più massa e collassano direttamente senza una supernova brillante, e poiché la maggior parte delle stelle massicce è in binarie interagenti, le tracce di stella singola descrivono una minoranza dei casi reali. I cataloghi di onde gravitazionali ora forniscono le statistiche di popolazione che i soli modelli stellari non potevano.`,
      },
    },
    cosmology: {
      junior: {
        legend: `L'intero universo in espansione, con le galassie portate via man mano che lo spazio stesso si stira. [[age]] conta i miliardi di anni dal Big Bang. Due ingredienti competono: la <b>materia</b>, la cui gravità tira tutto insieme, e l'<b>energia oscura</b>, che lo spinge via.`,
        try: `Trascina [[lam]] fino a 0 così la gravità non ha avversario, e guarda cosa succede all'espansione. Poi rimettila su a 69 e guarda la differenza.`,
        notice: `<b>Senza energia oscura l'espansione rallenta; con essa, l'espansione accelera — lo spazio vola via sempre più in fretta.</b> Gli astronomi si aspettavano la prima e trovarono la seconda nel 1998, notando che le supernove lontane erano più deboli di quanto dovessero. Circa il 69% di tutto è questa energia oscura, e nessuno sa cosa sia. L'ingrediente più grande dell'universo è un mistero completo, ed è stato scoperto per caso.`,
      },
      student: {
        legend: `Un universo FLRW in espansione con [[mat]] e [[lam]] come parametri di densità. [[h]] è il parametro di Hubble al redshift attuale, che segue \\(H(z) = H_0\\sqrt{\\Omega_m(1+z)^3 + \\Omega_\\Lambda}\\), e [[age]] il tempo cosmico trascorso.`,
        try: `Metti [[lam]] = 0 con [[mat]] = 100 e nota il comportamento dell'espansione e [[age]]. Poi usa i valori standard (31 e 69). Quale combinazione dà un universo più vecchio, e perché conta osservativamente?`,
        notice: `<b>Un universo di sola materia è più giovane delle stelle più vecchie conosciute — la contraddizione che rese inevitabile l'energia oscura.</b> La densità di materia si diluisce come \\((1+z)^3\\) mentre \\(\\Omega_\\Lambda\\) resta costante, quindi la gravità dominò presto (decelerando) e l'energia oscura prese il sopravvento attorno a \\(z \\approx 0.7\\), commutando l'espansione ad accelerazione. Con \\(H_0 = 70\\) e sola materia, l'età è \\(\\tfrac{2}{3}H_0^{-1} \\approx 9.3\\) Gyr, più giovane degli ammassi globulari di 12 Gyr. Aggiungere \\(\\Lambda\\) la stira a 13,8 Gyr e risolve il paradosso — una di varie linee indipendenti che convergono sulla stessa conclusione.`,
      },
      scholar: {
        legend: `Cosmologia FLRW piatta con \\(H(z) = H_0\\sqrt{\\Omega_m(1+z)^3+\\Omega_\\Lambda}\\), \\(H_0 = 70\\) km/s/Mpc. [[mat]] e [[lam]] sono impostati indipendentemente qui, quindi il modello non impone \\(\\Omega_m + \\Omega_\\Lambda = 1\\).`,
        try: `Imposta combinazioni che violano la planarità e nota che il modello calcola comunque una risposta. Poi considera cosa \\(\\Omega_{\\text{total}} \\ne 1\\) implicherebbe fisicamente, e perché la planarità quasi perfetta osservata è essa stessa un problema che esige spiegazione.`,
        notice: `<b>La planarità è instabile: qualsiasi deviazione da \\(\\Omega = 1\\) cresce col tempo, quindi la planarità odierna entro lo 0,4% esige un assurdo regolaggio fine all'era di Planck — circa 1 parte su \\(10^{60}\\).</b> È il problema della planarità, e insieme al problema dell'orizzonte motivò l'<b>inflazione</b>, che spinge \\(\\Omega \\to 1\\) esponenzialmente e semina la struttura da fluttuazioni quantistiche. Il punto di stress attuale del quadro è la <b>tensione di Hubble</b>: l'inferenza dall'universo primitivo dal CMB dà \\(H_0 \\approx 67.4\\), le misure locali della scala delle distanze danno \\(\\approx 73\\), e la discrepanza a \\(\\sim5\\sigma\\) ha resistito a ogni sistematica proposta. Intanto \\(\\Lambda\\) stessa resta inspiegata — l'energia del vuoto della QFT supera il valore osservato fino a 120 ordini di grandezza.`,
      },
    },
    neuro: {
      junior: {
        legend: `Una piccola rete di <b>neuroni</b> — cellule cerebrali — uniti dalle loro connessioni. Quando uno accumula abbastanza carica si attiva, mandando un impulso a correre verso i suoi vicini, che possono allora attivarsi anch'essi. [[rate]] conta le attivazioni al secondo e [[pot]] mostra la carica dentro una cellula.`,
        try: `Metti [[stim]] a 0 e premi [[fire]] una volta, guardando quanto lontano viaggia l'impulso. Ora metti [[stim]] a 10 e guarda la rete per un po'.`,
        notice: `<b>Una spintarella manda un singolo impulso che svanisce; un input forte e costante fa chiacchierare l'intera rete di continuo.</b> Nessun singolo neurone decide nulla — ciascuno somma solo ciò che riceve e si attiva se il totale è abbastanza grande. Pensiero, memoria e movimento sono tutti costruiti da questo unico trucco ripetuto su 86 miliardi di cellule. Il tuo cervello fa girare l'intera operazione su circa 20 watt, più o meno una lampadina fioca.`,
      },
      student: {
        legend: `Una rete a picchi semplificata. Ogni nodo integra l'input dai suoi vicini e si attiva quando attraversa la soglia, propagando l'attività lungo le sue connessioni. [[stim]] è la spinta esterna, [[rate]] il tasso di attivazione della popolazione e [[pot]] il potenziale di membrana di una cellula.`,
        try: `Aumenta [[stim]] gradualmente da 0 e guarda [[rate]]. L'attività cresce in modo liscio in proporzione, o c'è un punto in cui il comportamento della rete cambia carattere?`,
        notice: `<b>L'attività resta vicino a zero fino a una spinta critica, poi la rete commuta in un'attivazione sostenuta auto-propagante — una soglia, non una pendenza.</b> È l'<em>eccitazione ricorrente</em>: una volta che abbastanza neuroni si attivano, il loro input reciproco sostiene l'attività senza ulteriore spinta esterna, ed è così che la memoria di lavoro tiene l'informazione per secondi. La stessa proprietà è pericolosa, poiché l'eccitazione ricorrente incontrollata è precisamente ciò che è una crisi epilettica. La corteccia reale si tiene appena sotto quel punto con potenti interneuroni inibitori — solo ~20% delle cellule, ma abbastanza da tenere l'equilibrio.`,
      },
      scholar: {
        legend: `Unità integra-e-tira su un grafo ricorrente sparso, con [[stim]] come spinta esterna tonica. [[rate]] riporta l'attività della popolazione; il modello è puramente eccitatorio, senza popolazione inibitoria.`,
        try: `Caratterizza la transizione in [[rate]] man mano che [[stim]] aumenta. Considera cosa implica l'assenza di inibizione per la stabilità dello stato ad alta attività, e cosa cambierebbe con una popolazione inibitoria bilanciata.`,
        notice: `<b>Una rete ricorrente puramente eccitatoria ha solo due stati stabili — silente o saturo — ed è l'omissione centrale del modello.</b> La corteccia reale opera nello <b>stato bilanciato</b>, dove grandi correnti eccitatorie e inibitorie quasi si annullano, lasciando una piccola spinta netta fluttuante. Ciò produce l'attivazione irregolare, simile a Poisson, osservata in vivo, dà rapida reattività (l'equilibrio può essere rotto più in fretta di qualsiasi costante di tempo di membrana), e rende una curva \\(f\\)–\\(I\\) approssimativamente lineare invece di un gradino. Il regime bilanciato sta anche vicino alla criticità, dove le valanghe neuronali seguono una legge di potenza con esponente \\(-3/2\\) — una configurazione che massimizza la gamma dinamica e la trasmissione dell'informazione, e che questo modello non può raggiungere.`,
      },
    },
    neuron: {
      junior: {
        legend: `Una cellula cerebrale, con la traccia che mostra la tensione al suo interno momento per momento. La linea tratteggiata è la <b>soglia</b>. [[v]] è la tensione attuale, [[state]] dice se è a riposo o in attivazione, e [[spikes]] conta gli impulsi.`,
        try: `Alza [[cur]] molto lentamente da 0, una tacca alla volta, guardando [[v]] e [[state]]. Trova il punto esatto dove la cellula inizia ad attivarsi — poi vai una tacca oltre.`,
        notice: `<b>Sotto la soglia, non succede assolutamente nulla. Attraversala e la cellula tira un picco a grandezza piena — e spingere più forte non rende il picco più grande.</b> È l'attivazione <b>tutto-o-niente</b>: un neurone non ha modo di inviare un "mezzo" segnale. Poiché ogni picco è identico, il messaggio non può stare nella loro dimensione — deve stare in quanto <em>spesso</em> arrivano. Un tocco delicato e una pressione forte si percepiscono diversi per il tasso di picchi, non per la forza del picco.`,
      },
      student: {
        legend: `Un neurone di FitzHugh–Nagumo: una variabile veloce di tensione e una lenta di recupero, il sistema minimo che riproduce l'eccitabilità. La traccia è il potenziale di membrana contro il tempo, con la soglia di attivazione segnata. [[cur]] inietta corrente costante; [[spikes]] conta gli eventi.`,
        try: `Porta [[cur]] su lentamente e localizza il valore dove l'attivazione inizia. Poi confronta l'<em>ampiezza</em> del picco appena sopra soglia con l'ampiezza a [[cur]] = 20, e confronta la <em>frequenza</em> di attivazione alle stesse due impostazioni.`,
        notice: `<b>L'ampiezza è essenzialmente identica a entrambe le correnti; cambia solo la frequenza — la cellula codifica l'intensità nel tasso, non nella dimensione.</b> L'esordio è una <b>biforcazione di Hopf</b>: il punto fisso di riposo perde stabilità e appare un ciclo limite, quindi l'oscillazione inizia a frequenza non nulla. La variabile di recupero è ciò che rende il picco auto-terminante e impone il periodo refrattario, che limita l'attivazione vicino a 1 kHz e rende la propagazione unidirezionale. Il modello del 1952 di Hodgkin e Huxley derivò tutto questo da conduttanze reali di sodio e potassio; FitzHugh–Nagumo lo spoglia a due equazioni mantenendo intatto il comportamento qualitativo.`,
      },
      scholar: {
        legend: `Dinamica di FitzHugh–Nagumo, \\(\\dot v = v - v^3/3 - w + I\\), \\(\\dot w = \\epsilon(v + a - bw)\\), una riduzione planare di Hodgkin–Huxley che separa la tensione veloce dal recupero lento. [[cur]] è la corrente iniettata \\(I\\).`,
        try: `Localizza l'\\(I\\) critica alla quale inizia l'attivazione ripetitiva ed esamina la frequenza immediatamente sopra di essa. Determina se la frequenza di esordio è zero o finita, e identifica quale classe di biforcazione ciò implica.`,
        notice: `<b>L'attivazione inizia a una frequenza finita, identificando una biforcazione di Hopf subcritica — un neurone di Classe II nella classificazione di Hodgkin.</b> Le cellule di Classe II hanno una curva \\(f\\)–\\(I\\) discontinua e agiscono da risonatori, rispondendo preferenzialmente a input vicino alla loro frequenza intrinseca; le cellule di Classe I nascono invece via un nodo-sella su un cerchio invariante (SNIC), si attivano arbitrariamente lentamente all'esordio, e si comportano da integratori. La distinzione non è accademica: determina le curve di risposta di fase, e quindi se una popolazione si sincronizza o desincronizza sotto input condiviso — il substrato matematico delle oscillazioni corticali e della sincronia patologica nella malattia di Parkinson e nell'epilessia.`,
      },
    },
    memory: {
      junior: {
        legend: `Due neuroni che si incontrano a una <b>sinapsi</b>, la giunzione dove uno passa segnali all'altro. [[w]] è quanto forte è quella giunzione al momento — una forte passa i messaggi facilmente, una debole a malapena. [[last]] riporta cosa le è appena successo.`,
        try: `Premi [[ltp]] più volte e guarda [[w]] salire. Ora premi [[ltd]] più volte e guardala scendere. I due pulsanti attivano le stesse due cellule — l'unica differenza è quale va per prima.`,
        notice: `<b>Attivare il mittente <em>appena prima</em> del ricevente rafforza la connessione; attivarlo appena dopo la indebolisce. Stesse cellule, stessi segnali — è cambiato solo l'ordine.</b> Quella minuscola asimmetria è come i cervelli imparano causa ed effetto: se A accade regolarmente prima di B, il legame A→B cresce, perché A potrebbe star causando B. Inverti l'ordine e il cervello conclude che A è irrilevante e pota il legame. L'apprendimento, in fondo, è contabilità su scala millimetrica su cosa è venuto prima.`,
      },
      student: {
        legend: `Una singola sinapsi sotto <b>plasticità dipendente dal tempo dei picchi</b>. [[ltp]] attiva il presinaptico prima del postsinaptico (\\(\\Delta t < 0\\)) e [[ltd]] inverte l'ordine. [[w]] segue il peso sinaptico e [[last]] riporta il segno e la magnitudo dell'ultimo cambiamento.`,
        try: `Porta [[w]] più in alto che puoi con [[ltp]] ripetuto, poi prova a spingerlo ancora più su. Poi varia [[rate]] e verifica se la dimensione di ogni cambiamento dipende da quanto frequentemente stimoli.`,
        notice: `<b>Il peso satura — non può crescere senza limite, e ogni accoppiamento vicino al tetto compra meno del precedente.</b> Senza un tale limite, l'apprendimento hebbiano è instabile: le sinapsi forti guidano più attivazione, che le rafforza ulteriormente, finché un input domina tutto. Le sinapsi reali combinano la saturazione con meccanismi <em>omeostatici</em> come lo scaling sinaptico, che rinormalizza moltiplicativamente tutti gli input di un neurone in ore, preservando i pesi relativi mentre tiene costante la spinta totale. L'asimmetria temporale della STDP segue dai recettori NMDA, che richiedono sia il legame del glutammato sia la depolarizzazione postsinaptica per espellere il loro blocco Mg²⁺ — un rilevatore di coincidenza molecolare con una finestra di ~20 ms.`,
      },
      scholar: {
        legend: `STDP basata su coppie a una singola sinapsi: \\(\\Delta w = A_+e^{\\Delta t/\\tau_+}\\) per \\(\\Delta t<0\\) e \\(-A_-e^{-\\Delta t/\\tau_-}\\) per \\(\\Delta t>0\\), con un limite di saturazione su [[w]]. [[rate]] fissa la frequenza di accoppiamento.`,
        try: `Considera cosa questa regola basata su coppie predice per l'accoppiamento ad alta frequenza, e confrontalo con la scoperta sperimentale che la potenziazione a 50 Hz avviene indipendentemente dall'ordine dei picchi. Chiediti cosa alla regola deve mancare.`,
        notice: `<b>La STDP basata su coppie fallisce sopra ~30 Hz: sperimentalmente, l'accoppiamento ad alta frequenza potenzia qualunque sia l'ordine, cosa che la regola non può produrre.</b> I modelli a triplette e basati sulla tensione (Pfister–Gerstner; Clopath) correggono questo e in più recuperano la soglia scorrevole di Bienenstock–Cooper–Munro, in cui il confine LTP/LTD si sposta con l'attività postsinaptica recente. La questione più profonda è che la STDP non è un unico meccanismo: il suo segno, la finestra e la dipendenza dalla frequenza variano per tipo di sinapsi, posizione dendritica e stato neuromodulatorio, e la dopamina può regolare se una traccia di eleggibilità sia consolidata affatto — è così che una regola biologicamente locale può implementare l'assegnazione del credito dipendente dalla ricompensa e temporalmente distale.`,
      },
    },
    sleep: {
      junior: {
        legend: `Una notte di sonno in avanti veloce. La traccia ondulata è vera attività cerebrale misurata da un EEG. [[stage]] nomina in quale fase sei, [[freq]] mostra quanto veloci sono le onde, e [[ad]] è la sostanza chimica che si accumula mentre sei sveglio e ti fa venire sonno.`,
        try: `Premi [[next]] per scorrere ogni fase a turno, da Sveglio a REM. Guarda la forma dell'onda in N3 (profondo), poi in REM — e confronta ciascuna con Sveglio.`,
        notice: `<b>Il sonno profondo ha enormi onde lente, ma il REM sembra quasi esattamente lo stato di veglia — veloce e piccolo — anche se sei profondamente addormentato e stai sognando.</b> È perché il REM è chiamato sonno <em>paradosso</em>: dalla sola attività elettrica del cervello non potresti distinguerlo dalla veglia. Il tuo corpo è paralizzato durante di esso, il che è un bene, perché ti impedisce di mimare i tuoi sogni.`,
      },
      student: {
        legend: `Architettura del sonno idealizzata che cicla tra veglia, N1, N2, N3 e REM, con firme EEG caratteristiche — [[freq]] mostra la frequenza dominante di ciascuna. [[ad]] segue l'adenosina, il segnale omeostatico di pressione del sonno.`,
        try: `Scorri le fasi con [[next]] e registra [[freq]] per ciascuna. Nota che N3 ha la frequenza più bassa ma l'ampiezza più grande, mentre la frequenza del REM quasi eguaglia la veglia. Poi guarda [[ad]] su un ciclo completo.`,
        notice: `<b>Frequenza e ampiezza EEG si muovono in direzioni opposte — le onde lente sono grandi precisamente <em>perché</em> sono lente.</b> I ritmi veloci della veglia riflettono neuroni che si attivano indipendentemente, quindi i loro contributi in parte si annullano sul cuoio capelluto; in N3 l'intera corteccia rintocca insieme tra stati sincronizzati alto e basso, e il segnale sommato è enorme. Il sonno è regolato da due processi interagenti: la pressione omeostatica dall'adenosina, che la caffeina maschera bloccandone i recettori senza rimuovere la pressione, e un oscillatore circadiano indipendente da quanto a lungo sei stato sveglio.`,
      },
      scholar: {
        legend: `Ipnogramma schematico con firme spettrali canoniche per fase. [[freq]] riporta la banda EEG dominante; [[ad]] rappresenta il Processo S. Il modello omette lo spostamento ciclo-per-ciclo nella proporzione REM/NREM lungo una notte reale.`,
        try: `Nota che questo modello cicla le fasi con durate fisse. Considera come una notte reale differisce nella distribuzione di N3 e REM lungo cicli successivi, e quale resoconto funzionale spiega quell'asimmetria.`,
        notice: `<b>Le notti reali caricano N3 all'inizio e il REM alla fine — i cicli iniziali sono dominati dalle onde lente, quelli successivi dal REM — cosa che nessun ciclo a durata fissa può catturare.</b> Segue dal modello a due processi: il Processo S si dissipa esponenzialmente lungo la notte, quindi l'attività a onde lente (il suo indice diretto) è concentrata all'inizio, mentre la propensione al REM cavalca il Processo C circadiano e culmina vicino al minimo della temperatura corporea. Funzionalmente l'asimmetria conta: l'ipotesi dell'omeostasi sinaptica sostiene che la SWA declassa le sinapsi potenziate durante la veglia, e la sua magnitudo scala con l'apprendimento del giorno prima. Anche la clearance glinfatica dell'amiloide-β sale ~60% in NREM — ed è perché la privazione di sonno è ora trattata come un candidato fattore causale nella neurodegenerazione invece che un mero sintomo.`,
      },
    },
    chem: {
      junior: {
        legend: `Le palline colorate sono <b>atomi</b> che volano in giro. Quando due lenti si avvicinano abbastanza possono attaccarsi e formare una <b>molecola</b>, disegnata con una linea che li unisce. [[mols]] conta quanti si sono accoppiati.`,
        try: `Metti [[temp]] a 10 e guarda per un po' — conta quante molecole si formano. Ora trascina [[temp]] fino a 1 e guarda di nuovo.`,
        notice: `<b>Gli atomi caldi non si legano quasi mai; quelli freddi si accoppiano in fretta e [[mols]] sale.</b> Il legame richiede che i due atomi indugino abbastanza vicini da agganciarsi, e gli atomi veloci semplicemente rimbalzano via prima che ciò possa accadere. È la stessa ragione per cui scaldare le cose le scompone — cuocere, fondere, bruciare — mentre raffreddare lascia formare le strutture. I fiocchi di neve esistono perché le molecole d'acqua si muovono abbastanza lentamente da incastrarsi.`,
      },
      student: {
        legend: `Atomi in una scatola 2D con velocità fissate da [[temp]]. La formazione dei legami è probabilistica e permessa solo sotto una soglia di energia cinetica; [[mols]] conta le coppie legate. Gli atomi legati sono tenuti a una separazione di equilibrio, imitando una lunghezza di legame covalente.`,
        try: `Tieni [[temp]] a 10 e lascia girare, poi abbassala a 1 senza reimpostare. Guarda se i legami esistenti sopravvivono al cambiamento, e quanto in fretta [[mols]] risponde in ciascuna direzione.`,
        notice: `<b>I legami si formano prontamente da freddi e sostanzialmente smettono di formarsi da caldi — la soglia è netta, non graduale.</b> È la competizione centrale della chimica: il legame abbassa l'energia potenziale del sistema, mentre il moto termico fornisce l'energia cinetica per liberarsene. Se un legame persista dipende dal rapporto tra energia di legame e \\(k_BT\\), ed è perché ogni sostanza ha una temperatura a cui si decompone, e perché la stessa reazione può andare avanti o indietro dipendendo solo da quanto la scaldi.`,
      },
      scholar: {
        legend: `Modello cinetico di associazione in 2D: la formazione di coppie è regolata da una soglia di velocità relativa con un tasso stocastico, e le coppie legate sono vincolate a una separazione di equilibrio. [[temp]] scala la distribuzione delle velocità; [[mols]] è la frazione legata istantanea.`,
        try: `Stabilisci una popolazione legata a [[temp]] bassa, poi alzala e osserva se il sistema torna al suo stato precedente quando la riabbassi. Considera cosa il modello rappresenta di \\(\\Delta G = \\Delta H - T\\Delta S\\), e cosa tralascia.`,
        notice: `<b>Il modello cattura il termine di entalpia ma non ha alcun termine di entropia — ed è l'omissione interessante.</b> L'associazione è entalpicamente favorevole (\\(\\Delta H < 0\\)) ma costosa entropicamente, poiché due particelle libere che diventano una coppia legata riducono i microstati traslazionali. L'equilibrio reale è fissato da \\(\\Delta G = \\Delta H - T\\Delta S\\), quindi alzare \\(T\\) sposta l'equilibrio verso la dissociazione non solo fornendo energia cinetica ma amplificando la penalità entropica — il contenuto molecolare del principio di Le Chatelier. La stessa competizione spiega l'assemblaggio idrofobico e il ripiegamento delle proteine, dove l'entropia delle molecole di <em>solvente</em>, non del soluto, domina il segno di \\(\\Delta G\\).`,
      },
    },
    electrochem: {
      junior: {
        legend: `Questa è una batteria tagliata a metà. I puntini sono particelle cariche che fanno la spola tra le due estremità attraverso il liquido nel mezzo — quel flusso è ciò che accende la lampadina. [[soc]] è quanto è piena la batteria, e [[volts]] è la spinta che eroga.`,
        try: `Premi [[discharge]] e guarda [[soc]] scendere dal 100% fino a 0. Tieni d'occhio [[volts]] per tutto il tempo — di quanto cala?`,
        notice: `<b>La batteria si svuota del tutto ma la tensione si muove appena — da circa 3,9 V giù a solo 3,6 V.</b> È perché il tuo telefono non può capire quanto è piena solo misurando la tensione, e perché la percentuale della batteria a volte mente o salta. I telefoni invece contano la carica che entra ed esce, come un contatore dell'acqua. Una tensione piatta è in realtà un pregio: il tuo dispositivo riceve la stessa potenza costante che la batteria sia piena o quasi vuota.`,
      },
      student: {
        legend: `Una cella con trasporto di ioni tra gli elettrodi. [[load]] fissa la corrente di scarica, [[soc]] lo stato di carica, e [[volts]] segue una relazione in stile Nernst \\(E = E^0 - \\frac{0.059}{n}\\log_{10}\\frac{1-\\text{soc}}{\\text{soc}}\\), limitata a una finestra Li-ion realistica.`,
        try: `Scarica del tutto e registra [[volts]] a [[soc]] = 100%, 50% e 10%. Poi ricarica. La tensione ripercorre lo stesso cammino, e potresti usarla per dedurre [[soc]] in modo affidabile?`,
        notice: `<b>La tensione spazia appena 0,3 V sull'intera capacità — troppo piatta per fare da indicatore di carburante.</b> L'equazione di Nernst è logaritmica nel rapporto tra specie ossidate e ridotte, quindi è ripida solo agli estremi e quasi piatta nel mezzo. I veri sistemi di gestione della batteria usano perciò il conteggio dei coulomb (integrando la corrente) con ricalibrazione periodica della tensione agli estremi. Questa piattezza è precisamente ciò che rende la chimica del litio così utile — un binario di alimentazione stabile — e allo stesso tempo ciò che rende la stima dello stato di carica un problema ingegneristico genuinamente difficile.`,
      },
      scholar: {
        legend: `Cella idealizzata con un potenziale a circuito aperto nernstiano in [[soc]]; [[load]] scala il tasso di scarica. Sovratensioni, limitazione da diffusione e isteresi non sono modellate.`,
        try: `Nota che [[volts]] qui dipende solo da [[soc]], mai da [[load]]. Identifica quali effetti fisici questa indipendenza elimina, e come ciascuno altererebbe la curva osservata sotto un carico pesante.`,
        notice: `<b>Fare della tensione una funzione della sola carica rimuove ogni meccanismo di perdita che conta in pratica.</b> La tensione ai morsetti è \\(E_{\\text{cell}} = E^0 - \\eta_{\\text{act}} - \\eta_{\\text{conc}} - IR_{\\Omega}\\): la sovratensione di attivazione segue la cinetica di Butler–Volmer, la sovratensione di concentrazione nasce da strati di diffusione impoveriti, e la caduta ohmica scala con la corrente. Insieme significano che la capacità reale <em>cala</em> al crescere del tasso di scarica — l'effetto Peukert — e producono l'isteresi carica/scarica che sconfigge il conteggio ingenuo dei coulomb. Aggiungi la crescita dell'interfase elettrolita-solido e la placcatura del litio e hai l'intera degradazione della batteria, nulla della quale un modello puramente termodinamico può esprimere.`,
      },
    },
    kinetics: {
      junior: {
        legend: `La curva nel pannello inferiore è una collina che le molecole devono scalare prima di poter reagire — quell'altezza è l'<b>energia di attivazione</b>. Solo le molecole con abbastanza energia la superano. [[react]] è quanto materiale di partenza resta, [[prod]] quanto è stato convertito, e [[rate]] quanto in fretta procede.`,
        try: `Metti [[temp]] a 400 e nota [[rate]]. Ora alzala a 500 — solo 100 gradi più caldo — e rileggi [[rate]].`,
        notice: `<b>Solo 100 gradi più caldo e la reazione va circa 20 volte più veloce.</b> Il calore non spinge le molecole oltre la collina; allarga la piccola frazione che aveva già abbastanza energia per scalarla, e quella frazione cresce esplosivamente con la temperatura. È perché un frigo conserva il cibo per settimane mentre lo stesso cibo va a male in un giorno sul bancone, e perché la cottura al forno ha temperature così precise. Ora premi [[cat]] e guarda la collina stessa rimpicciolirsi.`,
      },
      student: {
        legend: `Un diagramma di coordinata di reazione con l'altezza della barriera fissata da [[ea]]. Le molecole reagiscono alla collisione se superano la barriera; la costante di velocità segue Arrhenius, \\(k = A e^{-E_a/RT}\\). [[react]] e [[prod]] seguono le concentrazioni e [[rate]] la velocità istantanea.`,
        try: `Registra [[rate]] a [[temp]] = 400 e 500 con [[ea]] a 50. Poi torna a 400 e invece abbassa [[ea]] a 25. Quale cambiamento ti ha comprato più velocità?`,
        notice: `<b>+100 K moltiplica la velocità di circa 20 volte, ma dimezzare la barriera vale molto di più — l'esponenziale è molto più sensibile a \\(E_a\\) che a \\(T\\).</b> Quell'asimmetria è perché la catalisi domina la chimica industriale: non puoi sempre scaldare una reazione (i prodotti si decompongono, l'energia costa), ma abbassare \\(E_a\\) offrendo un percorso alternativo raggiunge lo stesso fine a temperatura ambiente. Un catalizzatore non cambia né \\(\\Delta G\\) né la posizione di equilibrio — accelera ugualmente reazione diretta e inversa, e si rigenera immutato.`,
      },
      scholar: {
        legend: `Cinetica di Arrhenius con \\(k = A\\exp(-E_a/RT)\\), \\(A = 10^6\\); il percorso del catalizzatore riduce \\(E_a\\) del 55%. Nota che la [[rate]] mostrata è limitata a un massimo, quindi le combinazioni più estreme di [[temp]] alta e [[ea]] bassa sono troncate invece che riportate fedelmente.`,
        try: `Verifica la forma di Arrhenius controllando che \\(\\ln k\\) sia lineare in \\(1/T\\), campionando [[temp]] dove la velocità è ben sotto il suo tetto. Poi stima \\(E_a\\) dalla tua pendenza e confronta con l'impostazione [[ea]].`,
        notice: `<b>Un grafico di Arrhenius di \\(\\ln k\\) contro \\(1/T\\) dà una retta di pendenza \\(-E_a/R\\) — è così che le energie di attivazione sono davvero misurate.</b> L'interpretazione si approfondisce con la teoria dello stato di transizione: \\(k = \\frac{k_BT}{h}e^{-\\Delta G^\\ddagger/RT}\\) scinde la barriera in parti entalpica ed entropica, quindi un "fattore pre-esponenziale" è in realtà \\(e^{\\Delta S^\\ddagger/R}\\) — un requisito di orientamento, non un conteggio di collisioni. È perché gli enzimi raggiungono aumenti di velocità di \\(10^{17}\\): pagano in anticipo il costo entropico dell'allineamento legando il substrato, invece di abbassare il solo \\(\\Delta H^\\ddagger\\).`,
      },
    },
    organic: {
      junior: {
        legend: `Una molecola disegnata in 3D che ruota lentamente. Le palline grigie sono <b>carbonio</b>, le rosse <b>idrogeno</b>, le blu <b>ossigeno</b> e le viola <b>azoto</b>; i bastoncini sono i legami che li tengono insieme. [[sel]] alterna tra sei diverse molecole reali.`,
        try: `Porta [[sel]] attraverso tutte e sei, da 1 a 6, e guarda specificamente gli atomi grigi di carbonio. Conta quanti bastoncini escono da ogni pallina grigia.`,
        notice: `<b>Ogni carbonio ha esattamente quattro legami, in tutte e sei le molecole — gas naturale, alcol, zucchero, aspirina e caffeina allo stesso modo.</b> Quel singolo fatto è perché la vita è costruita dal carbonio. Quattro legami lasciano al carbonio formare catene, ramificazioni e anelli di qualsiasi lunghezza pur avendo ancora spazio per attaccare altri atomi, quindi una manciata di elementi può essere arrangiata in milioni di sostanze distinte. Carburante, zucchero e medicina differiscono solo per come gli stessi pochi tipi di atomo sono collegati.`,
      },
      student: {
        legend: `Modelli a palline e bastoncini con ombreggiatura di profondità: carbonio (grigio), idrogeno (rosso), ossigeno (blu), azoto (viola). [[sel]] seleziona tra metano, etanolo, benzene, glucosio, aspirina e caffeina; [[atoms]] conta gli atomi e [[type]] classifica il composto.`,
        try: `Confronta il benzene (3) con il glucosio (4) — entrambi anelli a sei membri. Guarda come gli atomi stanno l'uno rispetto all'altro in ciascuno, e conta i legami tra i carboni dell'anello.`,
        notice: `<b>L'anello del benzene è piatto e i suoi carboni sono identici; l'anello del glucosio si increspa e ogni carbonio differisce.</b> I sei elettroni \\(\\pi\\) del benzene sono delocalizzati attorno all'anello, dando legami di lunghezza uguale intermedia tra singolo e doppio, più la stabilità extra chiamata <b>aromaticità</b> — ed è perché il benzene resiste alle reazioni di addizione che un normale alchene subisce prontamente. Il glucosio è completamente saturo, quindi il suo anello adotta una conformazione a sedia increspata per alleviare la tensione, e i suoi quattro stereocentri distinti fanno sì che le forme speculari il tuo corpo non possa metabolizzarle in modo intercambiabile.`,
      },
      scholar: {
        legend: `Geometrie statiche a palline e bastoncini per sei organici rappresentativi. Nota che lunghezze e angoli di legame sono schematici invece che ottimizzati, e le raffigurazioni sono conformazionalmente congelate.`,
        try: `Considera l'aspirina (5) e la caffeina (6). Identifica i gruppi funzionali in ciascuna, e ragiona su quali caratteristiche strutturali rendono l'aspirina un inibitore irreversibile mentre la caffeina agisce da antagonista competitivo.`,
        notice: `<b>La distinzione è chimica, non basata sulla forma: l'aspirina porta un gruppo acetile che può <em>trasferire</em>, la caffeina non ne porta nessuno.</b> L'aspirina acetila covalentemente la Ser530 della COX-1, quindi l'inibizione persiste per la vita dell'enzima — ed è perché una singola dose bassa sopprime il trombossano piastrinico per giorni, essendo le piastrine anucleate e incapaci di risintetizzare l'enzima. La caffeina occupa semplicemente i recettori dell'adenosina in modo reversibile, quindi il suo effetto segue la concentrazione e si smaltisce con un'emivita di ~5 ore. Entrambe illustrano perché la progettazione di farmaci basata sulla struttura è così esigente: la farmacologia segue da un singolo sostituente reattivo, non dalla forma molecolare grossolana, e nessuno dei due è deducibile dalla sola immagine a palline e bastoncini.`,
      },
    },
    acids: {
      junior: {
        legend: `Il becher a sinistra mostra la tua soluzione, colorata da un indicatore universale — rosso e arancione per gli acidi, verde per il neutro, blu e viola per le basi. La curva traccia il pH man mano che aggiungi base, e il punto segna dove sei ora.`,
        try: `Parti con [[base]] a 0 e leggi il [[ph]]. Ora trascina lentamente [[base]] verso l'alto per aggiungere base, e guarda il colore e il pH salire. Cosa succede proprio attorno alla metà?`,
        notice: `<b>Il pH si muove appena all'inizio, poi balza di colpo attraverso il neutro.</b> Ogni po' di base è silenziosamente assorbito finché non raggiungi la quantità esattamente corrispondente — il punto di equivalenza — dove la goccia successiva manda il pH a schizzare in su in un salto, dall'acido dritto alla base.`,
      },
      student: {
        legend: `Una titolazione: 25 mL di acido 0,1 M, con base 0,1 M aggiunta lungo l'asse x e il pH sull'asse y. Le bande di sfondo sono la scala dell'indicatore universale, e il becher rispecchia il pH attuale. \\([H^+]\\) fissa \\(\\text{pH} = -\\log_{10}[H^+]\\).`,
        try: `Tieni [[pka]] al minimo (un acido forte) e aggiungi [[base]] fino a 25 mL. Poi alza [[pka]] per fare un acido debole e titola di nuovo — come cambia la forma della curva?`,
        notice: `<b>Il punto di equivalenza sta a 25 mL, dove le moli di base eguagliano le moli di acido.</b> Per un acido forte atterra a pH 7; per un acido debole il salto è più piccolo, parte più in alto, e il punto di equivalenza sale sopra 7 perché il sale formato è esso stesso leggermente basico. Il tratto piatto prima del salto è la regione tampone.`,
      },
      scholar: {
        legend: `Una titolazione monoprotica forte/debole di 25 mL di acido 0,1 M con base 0,1 M. Il pH è calcolato a tratti — regione tampone via Henderson–Hasselbalch, equivalenza via idrolisi del coniugato, oltre essa via eccesso di base forte — e le bande dell'indicatore tassellano l'asse del pH.`,
        try: `Metti [[pka]] a un valore debole e trova il punto di semi-equivalenza a 12,5 mL: leggi [[ph]] lì e confrontalo con [[pka]]. Poi conferma che il salto di equivalenza si restringe man mano che l'acido si indebolisce.`,
        notice: `<b>Alla semi-equivalenza, \\(\\text{pH} = pK_a\\) esattamente.</b> Lì \\([HA] = [A^-]\\), quindi Henderson–Hasselbalch \\(\\text{pH} = pK_a + \\log_{10}([A^-]/[HA])\\) collassa a \\(\\text{pH} = pK_a\\) — il modo standard di leggere la forza di un acido debole dalla sua curva. Il salto verticale si restringe al crescere di \\(pK_a\\), perché la base coniugata tamponante lo smorza.`,
      },
    },
    periodic: {
      junior: {
        legend: `L'intera tavola periodica, un quadrato per elemento, colorata per famiglia chimica — rossi e arancioni sono metalli reattivi a sinistra, blu e viola sono non-metalli e gas nobili a destra. Clicca un quadrato per vedere cos'è.`,
        try: `Clicca alcuni quadrati lungo la stessa colonna, poi alcuni lungo la riga in alto. Poi premi "Raggio atomico" ed "Elettronegatività" e guarda i colori scorrere attraverso la tavola.`,
        notice: `<b>Gli elementi nella stessa colonna si comportano allo stesso modo, e le proprietà cambiano con continuità attraverso la tavola.</b> La dimensione atomica cresce verso sinistra e verso il basso; l'attrazione sugli elettroni cresce verso l'alto a destra. La forma della tavola non è decorazione — è una mappa di come si comporta ogni elemento.`,
      },
      student: {
        legend: `Elementi disposti per numero atomico in periodi (righe = gusci elettronici) e gruppi (colonne = elettroni di valenza), colorati per famiglia. I pulsanti di tendenza ri-ombreggiano la tavola per una proprietà periodica; clicca una casella per ispezionarla.`,
        try: `Passa a "Raggio atomico", poi "Elettronegatività", e guarda il gradiente invertire direzione. Poi clicca il fluoro (alto a destra) e il cesio (basso a sinistra) — i due estremi.`,
        notice: `<b>Il raggio atomico aumenta verso il basso e a sinistra; l'elettronegatività aumenta verso l'alto e a destra.</b> Entrambi scaturiscono da una causa: attraverso un periodo la carica nucleare crescente tira gli elettroni più stretti, mentre giù per un gruppo ogni nuovo guscio spinge gli elettroni esterni più fuori.`,
      },
      scholar: {
        legend: `La tavola a 118 elementi colorata per famiglia, con sovrapposizioni di proprietà. Le ombreggiature di raggio ed elettronegatività codificano le tendenze periodiche qualitative che seguono dalla carica nucleare effettiva; l'ispezione della casella riporta \\(Z\\) e categoria.`,
        try: `Confronta il gradiente di elettronegatività con la struttura a blocchi: nota come i metalli di transizione del blocco d variano molto meno dei blocchi s e p, e come il blocco f sta quasi uniforme.`,
        notice: `<b>Le tendenze sono una mappa della carica nucleare effettiva \\(Z_{\\text{eff}}\\).</b> I blocchi sono larghi 2, 6, 10 e 14 perché gli orbitali s, p, d e f contengono quel numero di elettroni. La variazione attenuata attraverso i metalli di transizione e di transizione interna riflette gli elettroni che riempiono i gusci d ed f interni, che schermano gli elettroni più esterni e appiattiscono le tendenze.`,
      },
    },
    balancing: {
      junior: {
        legend: `Una reazione chimica disegnata come molecole. I cursori impostano quante ce ne sono di ciascuna molecola. Fai combaciare i conteggi di atomi a sinistra con quelli a destra per bilanciarla.`,
        try: `Usa i cursori per cambiare i numeri davanti a ogni molecola finché ogni conteggio di atomi non combacia su entrambi i lati. [[bal]] passa a Sì?`,
        notice: `<b>Gli atomi non sono mai persi — solo riarrangiati.</b> Non puoi cambiare le molecole, solo quante ce ne sono, finché entrambi i lati non portano lo stesso conteggio di ogni atomo. È un'equazione bilanciata, ed è in realtà solo conteggio attento.`,
      },
      student: {
        legend: `Reagenti → prodotti disegnati come molecole, con un cursore di coefficiente per specie. [[check]] conta ogni elemento su entrambi i lati, e [[bal]] conferma quando combaciano tutti.`,
        try: `Bilancia la combustione del metano: regola i coefficienti finché carbonio, idrogeno e ossigeno non combaciano tutti. Poi premi [[next]] per una reazione diversa.`,
        notice: `<b>Solo i coefficienti possono cambiare, mai gli indici.</b> Il bilanciamento impone la conservazione della massa — gli stessi atomi in uscita che in entrata. I coefficienti che trovi sono anche i rapporti molari: CH₄ + 2O₂ → CO₂ + 2H₂O significa che una mole di metano ha bisogno di due di ossigeno.`,
      },
      scholar: {
        legend: `Un bilanciatore a conservazione degli atomi: ogni coefficiente scala una specie, e i conteggi degli elementi devono equivalersi attraverso la freccia. Sono disponibili diverse reazioni.`,
        try: `Trova i coefficienti interi più piccoli per ciascuna reazione, e nota che l'insieme bilanciato è unico a meno di un multiplo comune.`,
        notice: `<b>Bilanciare è risolvere un sistema lineare costruito dalla conservazione di ciascun elemento.</b> C'è sempre una soluzione a meno di un fattore comune — l'insieme di interi più piccolo. Le equazioni redox aggiungono un secondo vincolo, che anche la carica deve bilanciarsi, gestito con le semireazioni elettroniche.`,
      },
    },
    climate: {
      junior: {
        legend: `Le frecce gialle sono calore in arrivo dal Sole, e quelle che salgono dal suolo sono calore che cerca di sfuggire di nuovo nello spazio. La fascia sfumata è il <b>gas serra</b> nell'aria: più ce n'è, più calore in fuga viene rimbalzato di nuovo giù. Il cielo e il suolo arrossano man mano che il pianeta si scalda.`,
        try: `Premi [[pre]] per tornare all'anno 1750 e nota [[dt]]. Ora premi [[now]] per l'aria di oggi. Poi trascina [[co2]] a 560 — il doppio della quantità del 1750.`,
        notice: `<b>Raddoppiare la CO₂ da 280 a 560 scalda il pianeta di circa 3°C — e i 420 di oggi ci hanno già impegnato a circa 1,7°C.</b> Tre gradi sembrano pochi accanto al tempo che cambia di 10° tra mattina e pomeriggio. Ma questo è l'<em>intero pianeta, ogni giorno, permanentemente</em>: la differenza tra oggi e l'ultima era glaciale, quando il Canada giaceva sotto un chilometro di ghiaccio, era solo di circa 5°C. Piccoli numeri globali muovono cose molto grandi.`,
      },
      student: {
        legend: `Un cartone del bilancio radiativo: onde corte solari in arrivo, infrarosso uscente, e uno strato serra assorbente la cui opacità scala con [[co2]]. [[forcing]] è il forzante radiativo in W/m² e [[dt]] il conseguente riscaldamento all'equilibrio.`,
        try: `Registra [[forcing]] a [[co2]] = 280, 560 e poi 800. Il salto da 280→560 è della stessa dimensione di 560→800? Calcola quale [[co2]] servirebbe per raddoppiare il forzante che ottieni a 560.`,
        notice: `<b>Ogni <em>raddoppio</em> aggiunge gli stessi 3,7 W/m² — 280→560 e 400→800 danno incrementi identici.</b> Il forzante è logaritmico, \\(\\Delta F = 5.35\\ln(C/C_0)\\), perché le bande di assorbimento più forti sono già sature e solo i bordi delle bande continuano ad assorbire. Ciò taglia in entrambi i sensi: il danno per ppm in più cala, ma anche il beneficio di ogni ppm che eviti, e la relazione non si appiattisce mai a zero. Moltiplicare per la sensibilità \\(\\lambda \\approx 0.8\\ \\text{K/(W/m²)}\\) dà ~3°C per raddoppio — il numero attorno a cui la politica climatica ruota da quarant'anni.`,
      },
      scholar: {
        legend: `Rappresentazione di bilancio energetico a zero dimensioni. [[forcing]] implementa l'approssimazione di Myhre et al. (1998) \\(\\Delta F = 5.35\\ln(C/C_0)\\) con \\(C_0 = 280\\) ppm; [[dt]] applica un parametro di sensibilità fisso \\(\\lambda = 0.8\\) K/(W/m²), cioè risposta d'equilibrio invece che transitoria.`,
        try: `Conferma la forma logaritmica verificando che rapporti uguali di [[co2]] diano incrementi uguali di [[forcing]]. Poi considera cosa questo modello necessariamente omette, e in quale direzione ogni omissione distorce [[dt]].`,
        notice: `<b>Il modello dà \\(\\Delta T \\approx 3\\)°C per raddoppio — ma è solo d'equilibrio, e ciò nasconde quasi tutta l'incertezza reale.</b> \\(\\lambda\\) non è una costante: aggrega la risposta di Planck con le retroazioni di vapore acqueo, gradiente termico verticale, albedo e nubi, e le sole nubi tengono l'intervallo probabile dell'IPCC a 2,5–4°C. L'inerzia termica dell'oceano significa che la risposta <em>transitoria</em> è solo il 50–70% dell'equilibrio, quindi il riscaldamento osservato è in ritardo su quello impegnato. E il quadro è lineare nel forzante, quindi non può rappresentare gli elementi di bascula — collasso delle calotte, arresto dell'AMOC, carbonio del pergelisol — dove la risposta è isteretica e la nozione di un singolo \\(\\lambda\\) crolla del tutto.`,
      },
    },
    tectonics: {
      junior: {
        legend: `Due lastre della crosta terrestre si incontrano al centro, e i punti sono roccia trascinata con esse. La barra in alto a sinistra è [[stress]] — la tensione che si accumula dove sono incastrate insieme. Quando si riempie del tutto, la roccia si spezza.`,
        try: `Metti [[speed]] a 1 e guarda quanto ci mette [[stress]] a riempirsi. Ora mettila a 10 e guarda di nuovo.`,
        notice: `<b>Placche più veloci riempiono la barra di tensione molto più in fretta, quindi i terremoti tornano molto più spesso — ma ognuno aspetta comunque che la barra sia piena.</b> Le placche non scivolano mai davvero in modo liscio; l'attrito le incastra, la tensione si accumula per decenni o secoli, e poi si rilascia in secondi. È perché i terremoti sembrano improvvisi anche se la causa è angosciosamente lenta: le tue unghie crescono più o meno alla velocità con cui si muovono i continenti. Prova [[quake]] per rilasciare la tensione in anticipo e guarda la barra scendere.`,
      },
      student: {
        legend: `Un margine di placca in sezione. [[type]] alterna tra geometria divergente, trasforme e convergente; [[speed]] fissa la velocità relativa delle placche. [[stress]] è la tensione elastica accumulata, rilasciata come evento quando satura, con la magnitudo riportata in [[event]].`,
        try: `Cronometra quanto ci mette [[stress]] a saturare a [[speed]] = 2 contro 8. Poi usa [[quake]] per rilasciare la tensione in anticipo, ripetutamente, e confronta le magnitudo in [[event]] con quelle da saturazione naturale.`,
        notice: `<b>La tensione si accumula linearmente e si rilascia istantaneamente — il modello di <b>rimbalzo elastico</b> che Reid dedusse dalla rottura di San Francisco del 1906.</b> L'intervallo di ricorrenza scala inversamente con la velocità della placca, ed è perché il margine Nazca–Sud America (~7 cm/anno) si rompe molto più spesso dei contesti intraplacca. Rilasciare in anticipo dà eventi più piccoli, ed è il nocciolo di verità dietro "i piccoli sismi scaricano la tensione" — ma la verità è sottile: la magnitudo è logaritmica nell'energia, quindi servono circa 32 piccoli M5 per rilasciare l'energia di un M6, e circa un milione di M2 per sostituire un M6.`,
      },
      scholar: {
        legend: `Margine stick-slip idealizzato con accumulo lineare di tensione \\(\\dot\\sigma \\propto v_{\\text{plate}}\\) e caduta completa dello sforzo a una soglia di rottura fissa — un modello a terremoto caratteristico. [[type]] seleziona la cinematica del margine; [[event]] riporta la magnitudo di momento.`,
        try: `Esamina le statistiche di ricorrenza che questo modello produce a [[speed]] fissa. Confronta la sua distribuzione di magnitudo con la legge di Gutenberg–Richter \\(\\log_{10}N = a - bM\\) con \\(b \\approx 1\\), e identifica cosa il modello non può riprodurre.`,
        notice: `<b>Questo modello è deliberatamente periodico; la sismicità reale no, e quel divario è perché la previsione è fallita.</b> Terremoti perfettamente caratteristici sarebbero prevedibili, eppure i cataloghi osservati seguono Gutenberg–Richter con \\(b\\approx1\\) — invariante di scala, senza dimensione caratteristica — e gli intervalli di ricorrenza su faglie ben studiate variano di fattori di parecchie unità (il ciclo "di 22 anni" di Parkfield notoriamente durò 38). L'attrito rate-and-state e la criticità auto-organizzata implicano entrambi la stessa conclusione: le piccole rotture cascano in grandi senza alcun precursore distintivo, quindi la dimensione di un evento potrebbe essere indeterminata alla nucleazione. Il rischio sismico è perciò quotato in modo probabilistico; la previsione deterministica non è attualmente considerata raggiungibile.`,
      },
    },
    ocean: {
      junior: {
        legend: `Questo è l'Atlantico visto di lato, con i tropici a sinistra e l'estremo nord a destra. I punti in movimento sono acqua: l'acqua calda scorre a nord lungo la cima, si raffredda, diventa pesante e sprofonda, poi torna strisciando a sud lungo il fondo. [[amoc]] mostra quanto forte gira quel giro.`,
        try: `Guarda lo sprofondamento a destra a [[warm]] = 0. Ora trascina [[warm]] fino a 10 e continua a guardare sia lo sprofondamento che [[amoc]].`,
        notice: `<b>Scaldare l'oceano fa rallentare e fermare il nastro trasportatore — [[amoc]] scende dal 100% al 20%.</b> Il giro funziona perché l'acqua fredda e salata è abbastanza pesante da sprofondare; scaldala e resta a galla, così tutta la cinghia balbetta. Quella cinghia è ciò che porta il calore tropicale all'Europa, ed è perché la Gran Bretagna è molto più mite del Canada alla stessa latitudine. Scaldare il pianeta potrebbe, paradossalmente, rendere l'Europa del nord considerevolmente più fredda.`,
      },
      student: {
        legend: `Sezione meridionale della circolazione di rovesciamento atlantica. Il flusso superficiale è guidato da [[wind]]; la formazione di acqua profonda a nord dipende dalla densità, che [[warm]] riduce. [[flow]] riporta il trasporto in sverdrup (1 Sv = 10⁶ m³/s) e [[amoc]] la forza del rovesciamento.`,
        try: `Tieni [[wind]] fisso e porta [[warm]] da 0 a 10, registrando [[amoc]] a ogni passo. La risposta è lineare? Poi varia [[wind]] da solo e vedi se può compensare un [[amoc]] indebolito.`,
        notice: `<b>[[amoc]] cala linearmente qui (8% per unità di riscaldamento) e il vento non può salvarlo — i due motori non sono intercambiabili.</b> Il rovesciamento è guidato dalla densità, quindi sia l'addolcimento che il riscaldamento lo sopprimono mentre il vento mescola solo la superficie. L'AMOC trasporta ~1,3 PW verso nord, circa un quarto del flusso totale di calore verso i poli del pianeta, e le osservazioni dal 2004 (array RAPID) suggeriscono una tendenza all'indebolimento contro alta variabilità. Il pericolo del sistema reale è ciò che questo modello lineare omette: una retroazione di avvezione del sale che può rendere il collasso auto-rinforzante invece che graduale.`,
      },
      scholar: {
        legend: `AMOC schematica con trasporto superficiale guidato dal vento e formazione di acqua profonda controllata dalla galleggiabilità; [[warm]] agisce come un forzante di galleggiabilità che sopprime la convezione. [[amoc]] è un surrogato lineare della forza del rovesciamento.`,
        try: `Nota che [[amoc]] qui risponde linearmente e reversibilmente a [[warm]]. Considera quale osservabile distinguerebbe questo comportamento da un sistema dotato di bistabilità, e cosa implica per l'allerta precoce.`,
        notice: `<b>La linearità è la falsità chiave del modello: l'analisi a due scatole di Stommel mostra che l'AMOC è plausibilmente <em>bistabile</em>, con una biforcazione nodo-sella e isteresi.</b> Il meccanismo è la retroazione di avvezione del sale — un rovesciamento più debole importa meno sale verso nord, riducendo ulteriormente la densità e indebolendolo di nuovo — che ammette uno stato "spento" che persiste anche se il forzante è rimosso. Le prove paleo (eventi di Dansgaard–Oeschger, l'evento di 8,2 ka) mostrano riorganizzazioni brusche su scale temporali decennali. Poiché la transizione è una biforcazione invece che una soglia nel forzante, la speranza pratica sta negli indicatori di rallentamento critico: varianza e autocorrelazione in aumento nelle impronte di SST, che varie analisi ora affermano di rilevare, anche se il caso statistico resta contestato.`,
      },
    },
    volcano: {
      junior: {
        legend: `Sotto la montagna c'è una camera di roccia fusa. Magma fresco continua ad arrivare dal basso, quindi [[pres]] sale costantemente; quando la camera non ne può prendere più, il vulcano erutta. [[phase]] ti dice in che stadio è, e [[vei]] valuta quanto violenta è stata l'eruzione.`,
        try: `Metti [[visc]] a 1 — fluido, come alle Hawaii — e premi [[erupt]], notando [[vei]]. Ora mettila a 10, il tipo appiccicoso, ed erutta di nuovo.`,
        notice: `<b>Il magma fluido dà un'esplosione dolce di circa 1; il magma appiccicoso dà un 7 — centinaia di volte più violenta, dalla stessissima pressione.</b> La differenza è se il gas riesce a uscire. Nel magma fluido le bolle scappano facilmente e la lava semplicemente si versa, quindi puoi camminare vicino a un'eruzione hawaiana. Nel magma appiccicoso il gas è intrappolato finché il tutto non scoppia in una volta, come scuotere una bibita gassata e aprirla di colpo. Stessa pressione, giornata del tutto diversa.`,
      },
      student: {
        legend: `Una camera magmatica e un condotto. [[recharge]] fissa il tasso di apporto di magma, quindi [[pres]] sale fino alla rottura; [[visc]] spazia da composizione basaltica (1) a riolitica (10). [[vei]] è l'Indice di Esplosività Vulcanica dell'eruzione risultante.`,
        try: `Erutta a [[visc]] = 1, 5 e 10 da piena pressione, registrando [[vei]] ogni volta. Poi cambia [[recharge]] e verifica se altera [[vei]] o solo il tempo di attesa.`,
        notice: `<b>La viscosità fissa la violenza, la ricarica fissa solo la frequenza — [[vei]] va da 1 a 7 lungo l'intervallo di viscosità a pressione identica.</b> La viscosità è governata principalmente dal contenuto di silice: il basalto (~50% SiO₂) è abbastanza fluido perché le bolle scappino di continuo, mentre la riolite (~70%) polimerizza in un fuso così rigido che i volatili restano disciolti fino alla frammentazione. Poiché il VEI è logaritmico nel volume eruttato, quello spazio da 1 a 7 è circa un milione di volte di differenza in materiale. È anche perché i vulcani pericolosi sono quelli tranquilli: i lunghi intervalli di riposo lasciano accumulare magma evoluto, ricco di gas e viscoso.`,
      },
      scholar: {
        legend: `Sistema camera–condotto con ricarica volumetrica e una soglia di rottura. [[visc]] parametrizza la composizione del fuso; la frammentazione esplosiva è innescata sopra una soglia di viscosità. [[vei]] scala sia con la sovrapressione immagazzinata che con la viscosità.`,
        try: `Mappa [[vei]] sul piano ([[visc]], [[pres]]) forzando eruzioni a pressioni diverse. Considera quale variabile fisica il modello omette vistosamente, e se la sua assenza rende il modello ottimista o pessimista.`,
        notice: `<b>L'omissione è il contenuto di volatili disciolti — il vero motore dell'esplosività, di cui la viscosità qui è solo un surrogato.</b> La frammentazione avviene quando la sovrapressione delle bolle supera la resistenza a trazione del fuso, governata dal tasso di decompressione e dalla solubilità di \\(\\mathrm{H_2O}\\)/\\(\\mathrm{CO_2}\\) (legge di Henry: \\(\\sim\\)4–6 wt% H₂O alle profondità riolitiche di camera). Viscosità e contenuto di volatili correlano tramite la silice, quindi il surrogato regge statisticamente pur mancando il meccanismo. Due conseguenze che il modello non può mostrare: la transizione pliniana–effusiva può ribaltarsi entro una <em>singola</em> eruzione man mano che le condizioni del condotto evolvono (Mount St. Helens 1980), e il VEI, essendo basato sul volume, sottostima sistematicamente l'impatto climatico di eruzioni ricche di zolfo ma piccole — i 20 Mt di SO₂ del Pinatubo raffreddarono il pianeta di 0,5°C nonostante un VEI di soli 6.`,
      },
    },
    seasons: {
      junior: {
        legend: `La Terra (con la sua inclinazione) che orbita il Sole. Muoviti tra i mesi e guarda quale metà della Terra si inclina verso il Sole — quella metà sta avendo l'estate.`,
        try: `Trascina [[month]] su un anno intero. Quando la metà nord si inclina verso il Sole, cosa dice [[nh]] — e cosa sta facendo [[sh]] nello stesso momento?`,
        notice: `<b>È l'inclinazione, non la distanza.</b> La distanza della Terra dal Sole cambia appena; ciò che cambia è quale metà si inclina verso il Sole. Quella metà riceve luce più diretta e giorni più lunghi — estate — mentre l'altra ha l'inverno. È perché i due emisferi sono sempre in stagioni opposte.`,
      },
      student: {
        legend: `La Terra che orbita il Sole con un'inclinazione assiale fissa di 23,5°. L'emisfero illuminato e le etichette delle stagioni si aggiornano col mese; l'orbita è disegnata quasi circolare di proposito.`,
        try: `Porta [[month]] ai solstizi di giugno e dicembre (asse inclinato al massimo verso o lontano dal Sole) e agli equinozi nel mezzo, guardando [[nh]] ciclare estate → autunno → inverno → primavera.`,
        notice: `<b>L'inclinazione resta fissa nello spazio, quindi ogni emisfero si inclina alternativamente verso e lontano dal Sole.</b> Inclinarsi verso dà un Sole più alto e giorni più lunghi — più riscaldamento — che è l'estate. L'orbita quasi circolare è tutto il punto: la distanza è quasi costante, quindi non può essere la causa.`,
      },
      scholar: {
        legend: `Uno schema dell'orbita terrestre con obliquità fissa. La stagione segue l'emisfero sub-solare; l'orbita è disegnata quasi circolare per riflettere la minuscola eccentricità.`,
        try: `Localizza i solstizi e gli equinozi, e nota che la stagione è fissata dalla geometria asse-Sole, indipendente dai piccoli cambiamenti nella distanza orbitale.`,
        notice: `<b>L'insolazione va come la costante solare per il coseno dell'angolo zenitale del Sole, per la durata del giorno — e l'inclinazione guida entrambi.</b> L'eccentricità (0,017) cambia la distanza solo di ~3%, una modulazione minore. Su tempi lunghi la lenta deriva di inclinazione, eccentricità e precessione — i cicli di Milankovitch — rimescola questa geometria e ritma le ere glaciali.`,
      },
    },
    sorting: {
      junior: {
        legend: `Ogni barra è un numero in attesa di essere messo in ordine — barre corte sono piccole, barre alte sono grandi. Premere un pulsante di ordinamento fa riordinare al computer, passo dopo passo. [[comps]] conta quante volte ha confrontato due barre, e [[swaps]] quante volte le ha spostate.`,
        try: `Trascina [[size]] a 80. Premi [[bubble]] e lascialo finire — nota [[comps]]. Ora premi [[merge]] sulla stessa dimensione e confronta.`,
        notice: `<b>Il Bubble Sort ha bisogno di circa 3.160 confronti; il Merge Sort di circa 400 — quasi otto volte meno, per esattamente lo stesso risultato.</b> Il Bubble Sort confronta i vicini più e più volte, quindi il lavoro cresce col quadrato della lista. Il Merge Sort divide il mucchio a metà, ordina ogni metà, poi fonde — e dividere ripetutamente è enormemente più economico. La strategia che scegli conta più della velocità del tuo computer: su un milione di elementi questo divario diventa giorni contro secondi.`,
      },
      student: {
        legend: `Un visualizzatore live di ordinamenti per confronto. L'altezza della barra è il valore; [[comps]] e [[swaps]] sono contati mentre l'algoritmo gira. [[algo]] nomina il metodo in esecuzione e la sua classe asintotica.`,
        try: `Fai girare [[bubble]] a [[size]] = 20, 40 e 80, notando [[comps]] ogni volta. Il conteggio raddoppia quando la dimensione raddoppia, o fa qualcosa di più drammatico? Poi ripeti con [[merge]].`,
        notice: `<b>Il conteggio del Bubble quadruplica circa quando raddoppi la dimensione; quello del Merge poco più che raddoppia.</b> È la differenza tra \\(\\Theta(n^2)\\) — esattamente \\(n(n-1)/2 = 3160\\) confronti a \\(n=80\\) — e \\(\\Theta(n\\log n)\\), circa \\(n\\log_2 n \\approx 506\\). Il divario si allarga senza limite: a un milione di elementi è \\(5\\times10^{11}\\) contro \\(2\\times10^{7}\\), circa 25.000 volte. Ecco perché la complessità algoritmica, non la velocità di clock, fissa ciò che è computazionalmente possibile.`,
      },
      scholar: {
        legend: `Ordinamenti per confronto strumentati su una permutazione casuale uniforme. [[comps]] è il conteggio esatto dei confronti, [[swaps]] il conteggio delle scritture — misure di costo distinte che hardware diversi pesano diversamente.`,
        try: `Adatta la crescita di [[comps]] contro [[size]] per entrambi gli algoritmi. Poi considera: un qualsiasi algoritmo basato su confronti potrebbe battere il tasso di crescita del Merge Sort, e cosa richiederebbe?`,
        notice: `<b>Nessun ordinamento per confronto può fare meglio — \\(\\Omega(n\\log n)\\) è un limite inferiore dimostrato, e il Merge Sort lo raggiunge.</b> L'argomento è teorico-informazionale: un confronto rende un bit, ci sono \\(n!\\) ordinamenti possibili, quindi qualsiasi albero di decisione ha bisogno di profondità \\(\\ge \\log_2(n!) = \\Theta(n\\log n)\\) per Stirling. Ordinare più in fretta richiede quindi di abbandonare del tutto i confronti — radix e counting sort raggiungono \\(O(n)\\) sfruttando la struttura delle chiavi. Nota anche che [[comps]] e [[swaps]] divergono nettamente: su hardware moderno, il comportamento della cache e la predizione dei salti contano spesso più di entrambi i conteggi.`,
      },
    },
    ml: {
      junior: {
        legend: `I quattro gruppi di punti sono due tipi di cosa che il computer deve imparare a distinguere — guarda bene, lo stesso tipo sta in angoli <em>opposti</em>. Lo sfondo colorato è l'ipotesi attuale del computer per ogni punto della mappa. A destra c'è il suo piccolo cervello: ingressi, [[hid]] nel mezzo, una risposta. [[loss]] mostra quanto ancora sbaglia.`,
        try: `Prova a separare i due tipi con una sola linea retta — non ci riesci. Ora metti [[hid]] a 2, premi [[reset]] e guarda [[acc]]. Poi metti [[hid]] a 10, premi [[reset]] e guarda di nuovo.`,
        notice: `<b>Una sola linea retta non può mai funzionare qui, ma con abbastanza unità nascoste il computer piega il confine nella forma giusta e [[acc]] sale verso il 100%.</b> Nessuno gli ha detto che forma disegnare. È partito da ipotesi casuali e le ha semplicemente aggiustate, più e più volte, in qualsiasi direzione rendesse [[loss]] più piccolo. Quell'aggiustamento paziente — milioni di piccole correzioni — è tutto ciò che "imparare" significa per una macchina.`,
      },
      student: {
        legend: `Una rete feed-forward 2-[[hid]]-1 con attivazioni sigmoidi, addestrata per retropropagazione su un dataset <b>simile a XOR</b>: le due classi occupano angoli diagonalmente opposti. La heatmap è la superficie di decisione attuale, [[loss]] è l'errore RMS e [[acc]] il tasso di classificazione.`,
        try: `Metti [[hid]] a 2 e premi [[reset]] alcune volte, notando dove [[acc]] si stabilizza a ogni giro. Poi metti [[hid]] a 10 e ripeti. La stessa architettura raggiunge sempre la stessa risposta?`,
        notice: `<b>Con 2 unità nascoste l'esito è incoerente — alcuni giri lo risolvono, altri si bloccano vicino al 75% — mentre 10 unità riescono quasi ogni volta.</b> XOR è il problema canonico <em>non linearmente separabile</em>: nessun singolo iperpiano divide queste classi, ed è esattamente il limite che Minsky e Papert usarono nel 1969 per mostrare che i percettroni erano fondamentalmente ristretti, congelando il campo per oltre un decennio. Due unità nascoste sono teoricamente sufficienti ma lasciano quasi nessun margine d'errore, quindi la discesa del gradiente atterra spesso in un cattivo minimo locale. Le unità extra non aggiungono potenza quanto aggiungono <em>vie</em> alla soluzione.`,
      },
      scholar: {
        legend: `MLP a due strati, \\(2 \\to H \\to 1\\), sigmoide ovunque, addestrato per discesa del gradiente full-batch con tasso di apprendimento \\(\\propto\\) [[lr]]. Il dataset è quattro cluster gaussiani in configurazione XOR; la heatmap rende \\(\\sigma(W_2^\\top\\sigma(W_1x+b_1)+b_2)\\).`,
        try: `Tieni [[hid]] a 2 e ri-[[reset]] ripetutamente, registrando la distribuzione della [[acc]] finale. Poi aumenta [[hid]] e osserva come cambia quella distribuzione. Considera cosa implica sul paesaggio della perdita più che sulla capacità rappresentativa.`,
        notice: `<b>La capacità non è il vincolo stringente — lo è l'ottimizzazione. Due unità nascoste possono rappresentare XOR esattamente, eppure spesso non riescono a trovarlo.</b> I fallimenti sono cattivi minimi locali e punti di sella in un paesaggio non convesso. Allargare la rete non aumenta l'espressività qui; rende il paesaggio più benigno, e nel limite sovraparametrizzato quasi tutti i minimi locali si avvicinano al valore globale. È perché la pratica moderna favorisce reti ben più grandi di quanto il compito richieda, e perché ciò nonostante generalizzano — un'apparente contraddizione del ragionamento classico bias–varianza che motivò la letteratura sulla doppia discesa.`,
      },
    },
    crypto: {
      junior: {
        legend: `Alice a sinistra e Bob a destra vogliono un numero segreto condiviso. L'occhio in alto è un <b>intercettatore</b> che vede assolutamente tutto ciò che inviano. Guarda i numeri viaggiare attraverso, e tieni d'occhio [[key]] alla fine.`,
        try: `Premi [[run]] e segui ogni numero che attraversa il centro. Poi chiediti: la [[key]] finale è mai stata uno di loro?`,
        notice: `<b>No — la chiave condivisa non ha mai attraversato il filo, eppure Alice e Bob sono finiti entrambi con lo stesso numero.</b> Ciascuno ha tenuto per sé un numero segreto e ha inviato solo una miscela mescolata. Per come funziona il mescolamento, combinare il proprio segreto con la miscela dell'altra persona dà la stessa risposta in entrambi i sensi. L'intercettatore ha visto ogni messaggio e ancora non può riprodurla — che è più o meno ciò che protegge i dati della tua carta ogni volta che compri qualcosa online.`,
      },
      student: {
        legend: `<b>Scambio di chiavi Diffie–Hellman</b> con parametri pubblici \\(p=23\\), \\(g=5\\). Alice e Bob scelgono ciascuno un esponente privato, pubblicano \\(g^a \\bmod p\\) e \\(g^b \\bmod p\\), poi elevano il valore dell'altro al proprio esponente. [[step]] percorre il protocollo; [[key]] è il segreto concordato.`,
        try: `Premi [[run]] e annota ogni valore pubblico che attraversa. Usando solo quelli e i pubblici \\(p\\) e \\(g\\), prova a ricavare uno dei due esponenti privati — poi controlla la tua risposta contro [[key]].`,
        notice: `<b>Entrambe le parti calcolano \\((g^a)^b = (g^b)^a = g^{ab} \\bmod p\\), un valore mai trasmesso.</b> Recuperare \\(a\\) da \\(g^a \\bmod p\\) è il <b>problema del logaritmo discreto</b>. Con \\(p=23\\) puoi risolverlo a forza bruta in 23 tentativi; con un primo di 2048 bit la stessa ricerca è computazionalmente senza speranza. L'asimmetria è tutto: l'elevamento a potenza è economico, invertirlo no. Nota che questo stabilisce un segreto condiviso tra estranei ma <em>non</em> li autentica — il DH puro è del tutto aperto a un attacco man-in-the-middle.`,
      },
      scholar: {
        legend: `DH su \\(\\mathbb{Z}_p^*\\) con \\(p=23\\), \\(g=5\\) un generatore. La sicurezza poggia sull'assunzione <b>Diffie–Hellman computazionale</b>; l'avversario passivo osserva \\((g, p, g^a, g^b)\\) e deve produrre \\(g^{ab}\\).`,
        try: `Nota che \\(p=23\\) rende il log discreto banalmente violabile per ricerca esaustiva. Stima la dimensione del gruppo necessaria a resistere all'index calculus, e contrastala con la dimensione di chiave che un gruppo a curva ellittica richiederebbe per sicurezza equivalente.`,
        notice: `<b>Il DH su campi finiti ha bisogno di ~2048–3072 bit per ~112–128 bit di sicurezza; una curva ellittica ne serve solo ~256.</b> Il divario esiste perché \\(\\mathbb{Z}_p^*\\) ammette l'index calculus sub-esponenziale, \\(L_p[1/3, 1.923]\\), mentre le curve ellittiche generali ammettono solo attacchi generici \\(O(\\sqrt{n})\\). La sicurezza esige anche un sottogruppo di ordine primo — Logjam (2015) mostrò che primi condivisi da 512 bit più un downgrade a grado export ruppero il vero TLS su scala. Tutto ciò cade a un computer quantistico abbastanza grande via l'algoritmo di Shor, ed è perché l'accordo di chiavi post-quantistico è passato a costruzioni su reticoli come ML-KEM.`,
      },
    },
    complexity: {
      junior: {
        legend: `Ogni curva mostra quanto <b>lavoro</b> serve a un diverso tipo di algoritmo man mano che il problema cresce. Quelle piatte lo notano appena; quella ripida schizza fuori dalla cima del grafico. [[ops]] è il lavoro necessario per la dimensione attuale, e [[cls]] nomina il metodo selezionato.`,
        try: `Metti [[algo]] a 5 — il tipo più ripido. Ora trascina [[n]] lentamente da 2 fino a 22, guardando [[ops]] per tutto il tempo.`,
        notice: `<b>Il lavoro esplode da 4 a oltre quattro milioni — per un problema che è cresciuto solo da 2 elementi a 22.</b> Ogni elemento in più <em>raddoppia</em> il lavoro, quindi non importa quanto veloce sia il tuo computer: aggiungi altri trenta elementi e nessuna macchina che esisterà mai potrebbe finire. Alcuni problemi non sono difficili perché non abbiamo ancora trovato il trucco astuto; sono difficili per come cresce il lavoro. Riporta [[algo]] a 1 e guarda lo stesso problema diventare banale.`,
      },
      student: {
        legend: `Curve di crescita per cinque classi di complessità, da \\(O(\\log n)\\) a \\(O(2^n)\\), tracciate contro la dimensione dell'input. [[n]] muove il punto di valutazione, [[algo]] seleziona una classe, e [[ops]] riporta il conteggio delle operazioni all'\\(n\\) attuale.`,
        try: `A [[n]] = 22, porta [[algo]] da 1 a 5 e registra [[ops]] ogni volta. Poi calcola quanto più a lungo impiegherebbe \\(O(2^n)\\) a \\(n = 60\\), assumendo un miliardo di operazioni al secondo.`,
        notice: `<b>A \\(n=22\\) le classi spaziano da 5 operazioni a 4.194.304 — e a \\(n=60\\), \\(2^n\\) è \\(1,15\\times10^{18}\\) operazioni, circa 36 anni a un miliardo al secondo.</b> È perché le classi di complessità dominano il calcolo pratico: i guadagni hardware moltiplicano la tua velocità per una costante, ma un'esponenziale ingoia intera qualsiasi costante. Raddoppiare la velocità della CPU compra esattamente <em>un</em> elemento di input in più su un algoritmo \\(O(2^n)\\). Nota il rovescio — per \\(n\\) piccolo, un algoritmo esponenziale con una costante minuscola può battere davvero uno "migliore".`,
      },
      scholar: {
        legend: `Crescita asintotica di \\(\\log n\\), \\(n\\), \\(n\\log n\\), \\(n^2\\) e \\(2^n\\). [[ops]] valuta la classe selezionata a [[n]]; le intersezioni illustrano che la dominanza asintotica non dice nulla sul comportamento a piccoli \\(n\\).`,
        try: `Identifica dove le curve \\(n^2\\) e \\(2^n\\) si intersecano, e nota quale è più economica sotto quel punto. Poi considera: un algoritmo \\(O(n^{100})\\) appartiene alla stessa categoria pratica di \\(O(n\\log n)\\), dato che entrambi sono polinomiali?`,
        notice: `<b>\\(n^2\\) batte \\(2^n\\) solo fino a \\(n \\approx 4\\); eppure \\(O(n^{100})\\) è "efficiente" secondo la definizione formale e del tutto inutile in pratica.</b> La linea polinomiale/esponenziale è la <b>tesi di Cobham–Edmonds</b> — un confine teorico robusto (chiuso per composizione, indipendente dal modello di macchina) che è ciò nonostante un cattivo surrogato della fattibilità. Se \\(\\text{P} = \\text{NP}\\) chiede se verifica e scoperta siano ugualmente difficili, e resta aperto. In pratica le istanze difficili sono spesso rare: i risolutori SAT sbrigano di routine problemi industriali con milioni di variabili, perché la complessità del caso peggiore descrive un avversario, non gli input che incontri davvero.`,
      },
    },
    life: {
      junior: {
        legend: `Ogni quadretto è una <b>cellula</b> viva o morta. A ogni generazione, tutte le cellule guardano i loro otto vicini e seguono la stessa minuscola regola: troppo pochi vicini e una cellula muore di solitudine, troppi e muore di sovraffollamento, esattamente giusti e ne nasce una nuova. [[gen]] conta i turni.`,
        try: `Premi [[random]] per spargere cellule vive dappertutto, poi guarda [[alive]] per un minuto senza toccare nulla.`,
        notice: `<b>Il caos si assesta da solo in forme ordinate e ripetute — blocchi fermi, piccoli motivi che lampeggiano per sempre, e piccoli alianti che camminano sullo schermo.</b> Nessuno ha programmato un blocco o un aliante; cadono semplicemente fuori dall'unica regola sui vicini. Premi [[clear]] e poi [[glider]] per guardarne uno singolo marciare via da solo. L'ordine che emerge da regole molto semplici senza nessuno al comando si chiama <b>emergenza</b>, ed è così che colonie di formiche, stormi e le tue stesse cellule si organizzano.`,
      },
      student: {
        legend: `Il <b>Game of Life</b> di Conway su una griglia che si avvolge (toroidale). La regola è B3/S23: una cellula morta con esattamente 3 vicini vivi nasce, una viva sopravvive con 2 o 3, tutto il resto muore. [[gen]] è il conteggio dei passi, [[alive]] la popolazione di cellule vive. Clicca un quadretto per commutarlo.`,
        try: `Premi [[random]] e segui [[alive]] per un paio di centinaia di generazioni. Si assesta, e all'incirca quale frazione della popolazione iniziale sopravvive? Poi [[clear]] e piazza un singolo [[glider]].`,
        notice: `<b>Una zuppa casuale collassa in una popolazione bassa e quasi costante di nature morte e oscillatori, tipicamente solo qualche percento della griglia.</b> Eppure la stessa regola sostiene un aliante che viaggia di una cella in diagonale ogni quattro generazioni. Life è <b>Turing-completo</b>: gli alianti possono codificare segnali, e le collisioni tra loro costruiscono porte logiche, quindi qualsiasi calcolo può in linea di principio girare dentro questa griglia. Due stati e una regola sui vicini bastano per il calcolo universale.`,
      },
      scholar: {
        legend: `Automa cellulare a due stati, esterno-totalistico B3/S23 su \\(\\mathbb{Z}^2\\) con condizioni al contorno periodiche e intorno di Moore. [[gen]] indicizza l'aggiornamento parallelo; [[alive]] è la popolazione.`,
        try: `Confronta il comportamento di assestamento e la densità finale da semi [[random]] ripetuti. Considera cosa dovresti osservare per prevedere in anticipo se una data configurazione si estingua mai.`,
        notice: `<b>Non potresti prevederlo — la domanda è formalmente indecidibile.</b> Life è Turing-completo (Berlekamp–Conway–Guy; seguirono costruttori universali espliciti), quindi chiedere se una configurazione arbitraria alla fine si stabilizzi equivale al problema dell'arresto. Le zuppe casuali convergono affidabilmente a una densità vicina a 0,029 con una cenere di nature morte e blinker, eppure nessuna scorciatoia esiste per il caso generale: l'automa è <em>computazionalmente irriducibile</em>, e simularlo passo dopo passo è il modo più veloce per conoscere il suo futuro. Una regola dichiarata in una frase contiene un comportamento che nessuna teoria può comprimere.`,
      },
    },
    dna: {
      junior: {
        legend: `La scala attorcigliata è una <b>molecola di DNA</b>. I suoi gradini sono coppie di lettere — A si unisce sempre a T, e C sempre a G. La forcella che viaggia lungo il centro la apre come una cerniera, e lettere fresche scattano su ogni metà per costruire due copie complete. Il viola segna un <b>errore</b> di copiatura.`,
        try: `Premi [[reset]] e guarda scorrere una copia completa, tenendo d'occhio le lettere che appaiono sui nuovi filamenti. Riesci a prevedere ogni nuova lettera prima che atterri?`,
        notice: `<b>Sì — ogni nuova lettera è forzata. A può accoppiarsi solo con T, C solo con G, quindi ogni metà della scala tiene istruzioni complete per ricostruire l'altra.</b> È tutto qui il segreto dell'ereditarietà: dividi la molecola e hai automaticamente due copie. Guarda però [[errors]] — di tanto in tanto la lettera sbagliata s'infila. Quei rari errori sono <b>mutazioni</b>, e senza di essi l'evoluzione non avrebbe nulla su cui lavorare.`,
      },
      student: {
        legend: `Una forcella di replicazione che apre una doppia elica. Le basi si accoppiano per complementarità (A–T, C–G) quindi ogni filamento parentale fa da stampo per uno nuovo — replicazione <b>semiconservativa</b>. [[speed]] fissa la velocità della forcella, [[pairs]] conta le basi copiate ed [[errors]] conta gli errori di incorporazione, evidenziati in viola.`,
        try: `Fai girare una replicazione completa e confronta [[errors]] con [[pairs]] per stimare il tasso d'errore di questa simulazione. Poi cambia [[speed]] e ripeti — andare più veloce la rende meno accurata qui?`,
        notice: `<b>Il tasso d'errore resta attorno al 4% per quanto veloce corra la forcella — e il 4% è circa cento milioni di volte peggio della realtà.</b> L'esagerazione è deliberata, così gli errori sono visibili. La vera DNA polimerasi incorpora male circa 1 base su \\(10^4\\)–\\(10^5\\), poi corregge con un'esonucleasi 3′→5′ e passa gli avanzi alla riparazione dei mismatch, dando un tasso finale vicino a 1 su \\(10^9\\). Copia 3,2 miliardi di basi al 4% e distruggeresti il genoma in una singola divisione; è la fedeltà, non la copiatura, il vero problema ingegneristico.`,
      },
      scholar: {
        legend: `Replicazione semiconservativa schematica a una singola forcella. L'accoppiamento di Watson–Crick (A–T due legami idrogeno, G–C tre) rende ogni filamento uno stampo; [[pairs]] segue l'incorporazione ed [[errors]] segnala i mismatch. L'asimmetria filamento guida/in ritardo e i frammenti di Okazaki non sono raffigurati.`,
        try: `Stima il tasso d'errore per base da [[errors]]/[[pairs]], poi calcola il numero atteso di mutazioni per duplicazione del genoma umano a quel tasso, e confronta con l'osservato ~1–2 per divisione.`,
        notice: `<b>Al tasso di questa simulazione accumuleresti ~10⁸ errori per copia del genoma; il valore reale è uno o due.</b> Il divario è chiuso in modo moltiplicativo: la fedeltà di selezione della base (~10⁻⁵), il proofreading 3′→5′ (~10²×), e la riparazione dei mismatch (~10²–10³×) si compongono a ~10⁻⁹–10⁻¹⁰ per base. Eppure il tasso non è minimizzato — è <em>sintonizzato</em>. Zero mutazione significa zero adattamento, e le linee con riparazione dei mismatch disattivata (tumori MMR-deficienti, batteri ipermutatori) mostrano che l'ottimo sta a un valore non nullo fissato dall'equilibrio tra carico deleterio e apporto adattativo.`,
      },
    },
    evolution: {
      junior: {
        legend: `Ogni punto è un <b>animale</b>, e il suo colore è il tratto che ha ereditato. Lo sfondo è l'ambiente in cui deve mimetizzarsi, e deriva lentamente verso un colore diverso col tempo. Gli animali ben mimetizzati sono disegnati più grandi — sono quelli con più probabilità di avere figli. [[fit]] mostra quanto bene il gruppo si adatta all'ambiente circostante.`,
        try: `Trascina [[mut]] fino a 0 e lascia girare per cento generazioni. Guarda [[div]], poi continua a guardare [[fit]] mentre il colore dello sfondo continua a derivare.`,
        notice: `<b>Senza mutazione la popolazione diventa tutta di un colore — [[div]] scende a quasi zero — e poi, mentre lo sfondo si allontana, [[fit]] crolla e non può riprendersi.</b> La selezione da sola può solo scegliere dalla varietà che già esiste; una volta esaurita, non resta nulla da cui scegliere. È per questo che la mutazione conta: l'errore casuale di oggi è l'unica occasione di domani di sopravvivere a un mondo cambiato. Rialza [[mut]] e guarda la popolazione arrampicarsi indietro.`,
      },
      student: {
        legend: `60 individui portano un singolo tratto continuo (tinta). La fitness cala con la distanza dall'ottimo dell'ambiente, che deriva col tempo. La riproduzione è un campionamento pesato per fitness scalato da [[sel]], con la prole perturbata da [[mut]]. [[div]] è la deviazione standard del tratto nella popolazione.`,
        try: `Metti [[mut]] a 0 e fai girare: guarda [[div]] collassare e poi [[fit]] decadere mentre l'ottimo deriva. Poi metti [[sel]] a 0 con [[mut]] alta, e vedi se [[fit]] sale mai.`,
        notice: `<b>Nessuna manopola da sola funziona: senza mutazione la popolazione esaurisce la variazione, senza selezione non si concentra mai sull'ottimo.</b> L'evoluzione ha bisogno di entrambe — una sorgente di variazione e un filtro. È la sostanza del <b>teorema fondamentale di Fisher</b>: il tasso di aumento della fitness media eguaglia la varianza genetica additiva in fitness, quindi una popolazione con varianza zero non può adattarsi a nessuna velocità. Nota anche che [[sel]] alta non è semplicemente meglio: spoglia la variazione più in fretta, lasciando la popolazione fragile quando l'ambiente si muove.`,
      },
      scholar: {
        legend: `Riproduzione proporzionale alla fitness su un tratto continuo unidimensionale con un ottimo che deriva. [[sel]] scala l'intensità della selezione, [[mut]] la varianza mutazionale per generazione, e [[div]] riporta la deviazione standard del tratto della popolazione — un surrogato della varianza genetica additiva.`,
        try: `Esplora il piano \\(([[sel]], [[mut]])\\) e trova dove la [[fit]] sostenuta è massimizzata contro l'ottimo che deriva. Verifica se l'impostazione migliore è la selezione più alta disponibile, e identifica dove la popolazione si estingue in termini di fitness.`,
        notice: `<b>L'ottimo è intermedio in entrambi i parametri — la selezione massima è attivamente dannosa.</b> È il classico equilibrio mutazione–selezione: la varianza d'equilibrio scala come \\(\\sigma^2 \\approx V_m/s\\), quindi la selezione dura erode la varianza stessa che l'adattamento richiede. Con un ottimo in movimento la popolazione resta indietro di \\(\\propto k/s\\) per un tasso di deriva \\(k\\), e il teorema di Fisher limita il tasso di inseguimento raggiungibile con la varianza additiva. Troppa mutazione, intanto, attraversa la <b>soglia d'errore di Eigen</b>, dove la selezione non può più mantenere l'informazione contro il carico mutazionale e la popolazione si scioglie via dal picco del tutto.`,
      },
    },
    ecosystem: {
      junior: {
        legend: `I punti verdi sono <b>piante</b>, quelli arancioni sono <b>conigli</b> che le mangiano, e quelli rossi sono <b>volpi</b> che mangiano i conigli. Tutto ha bisogno di cibo per restare vivo e riprodursi. I tre contatori seguono quanti di ciascuno sono vivi in questo momento.`,
        try: `Guarda i tre numeri per un po' — non stanno mai fermi. Ora trascina [[pred]] fino a 10 e continua a guardare [[herb]] e poi [[preds]].`,
        notice: `<b>Volpi super-efficienti mangiano quasi tutti i conigli — e poi anche le volpi muoiono di fame.</b> I predatori si distruggono da soli essendo troppo bravi a cacciare. Nota anche che i numeri salgono e scendono a <em>turni</em>: tanti conigli, poi tante volpi, poi pochi conigli, poi poche volpi, ancora e ancora. Nulla coordina questo — cade fuori da chi mangia chi. Tira un filo in una rete alimentare e tutto il resto si muove.`,
      },
      student: {
        legend: `Una catena alimentare basata su agenti: le piante ricrescono a un tasso fissato da [[growth]], gli erbivori foraggiano e si riproducono quando la loro energia è abbastanza alta, i predatori cacciano gli erbivori con un successo scalato da [[pred]]. Ogni agente porta un budget energetico e muore di fame senza cibo.`,
        try: `Lascia i valori predefiniti e guarda i tre contatori per qualche minuto, notando quale culmina per primo. Poi spingi [[pred]] a 10 e guarda cosa succede a [[herb]] e [[preds]] a turno.`,
        notice: `<b>Le popolazioni oscillano con i predatori che culminano <em>dopo</em> le prede, e i predatori troppo efficienti innescano un crollo che li porta giù col loro cibo.</b> È la dinamica di <b>Lotka–Volterra</b>: le prede crescono, i predatori seguono, le prede collassano, i predatori seguono di nuovo — il ritardo è ciò che la fa ciclare invece di assestarsi. La lezione si generalizza male per la conservazione: un predatore che massimizza il tasso di cattura a breve termine può guidare la propria estinzione, ed è esattamente perché le coppie predatore–preda reali persistono solo con rifugi, e perché rimuovere un predatore apicale può scatenare una cascata giù per un'intera rete.`,
      },
      scholar: {
        legend: `Sistema tri-trofico basato su individui con budget energetici espliciti. L'apporto di risorse è fissato da [[growth]], la risposta funzionale da [[pred]]; la demografia emerge da incontri locali invece che da un'equazione di campo medio.`,
        try: `Mappa l'esito attraverso il piano \\(([[growth]], [[pred]])\\). Cerca in particolare se <em>alzare</em> [[growth]] destabilizzi mai il sistema invece di sostenere più vita, e nota dove i cicli si trasformano in estinzioni.`,
        notice: `<b>Arricchire il sistema può destabilizzarlo: più crescita delle piante guida oscillazioni più selvagge i cui minimi toccano lo zero, spazzando via il livello superiore.</b> È il <b>paradosso dell'arricchimento</b> (Rosenzweig, 1971) — aggiungere risorse alza l'equilibrio ma lo destabilizza, poiché l'ampiezza del ciclo limite cresce finché un minimo stocastico causa l'estinzione. Essendo basato su individui, il modello mostra anche ciò che il Lotka–Volterra di campo medio non può: la stocasticità demografica a piccole dimensioni di popolazione significa che l'estinzione è un evento <em>probabilistico</em> ben prima che l'equilibrio deterministico raggiunga lo zero.`,
      },
    },
    cell: {
      junior: {
        legend: `Due camere d'acqua unite da una membrana nel mezzo. Il lato destro ha <b>sale</b> (punti arancioni) che non può attraversare; l'acqua sì. Guarda in che direzione si muove il livello dell'acqua.`,
        try: `Aggiungi [[salt]] al lato destro e guarda l'acqua. In che direzione si muove — e continua per sempre?`,
        notice: `<b>L'acqua si muove verso il lato salato.</b> Sta cercando di diluire il sale che non può raggiungere, quindi scorre attraverso la membrana finché il livello che sale non spinge indietro abbastanza forte da fermarla. Quel punto di equilibrio è l'osmosi in azione — nessun pompaggio, solo l'acqua che pareggia le cose.`,
      },
      student: {
        legend: `Una membrana semipermeabile che separa acqua pura (sinistra) da una soluzione (destra). Il soluto (arancione) non può attraversare; l'acqua sì. I livelli si spostano finché il richiamo osmotico non bilancia la differenza di pressione che si accumula.`,
        try: `Alza [[salt]] e guarda [[right]] salire mentre [[left]] scende, poi assestarsi. Spingi [[salt]] ancora più su — la differenza di livello finale cresce?`,
        notice: `<b>L'acqua scorre verso la concentrazione di soluto più alta e si ferma quando la pressione bilancia il richiamo osmotico.</b> Un carico di soluto più grande spinge più acqua attraverso e costruisce una differenza di livello più grande — un'immagine diretta della pressione osmotica, \\(\\Pi = iMRT\\). La membrana non lascia mai pareggiare il soluto, quindi è l'acqua a fare il bilanciamento.`,
      },
      scholar: {
        legend: `Un modello di osmosi a due compartimenti: il flusso netto d'acqua è proporzionale a \\((\\Delta\\text{concentrazione}) - k(\\Delta\\text{livello})\\), quindi il sistema si rilassa a uno stato stazionario dove il gradiente osmotico è bilanciato da un battente idrostatico.`,
        try: `Varia [[salt]] e registra il divario di livello all'equilibrio; verifica che scali con il carico di soluto, rispecchiando \\(\\Pi = iMRT\\).`,
        notice: `<b>L'equilibrio qui non è concentrazione uguale — è potenziale idrico bilanciato.</b> Poiché il soluto è intrappolato su un lato, l'acqua si muove finché il termine di pressione (la differenza di livello) non compensa il termine di soluto. È il potenziale idrico \\(\\Psi = \\Psi_s + \\Psi_p\\) che raggiunge l'uguaglianza, e il divario di livello residuo è la pressione osmotica resa visibile.`,
      },
    },
    mitosis: {
      junior: {
        legend: `Una cellula che si divide. Trascina il cursore per muoverti tra le fasi, o premi Play. Le forme a X colorate sono i <b>cromosomi</b> — la cellula li copia, li allinea, e li separa in due cellule nuove.`,
        try: `Trascina [[stage]] lentamente dall'inizio alla fine, guardando i cromosomi allinearsi al centro e poi dividersi verso le estremità. Con quante cellule finisci?`,
        notice: `<b>Una cellula diventa due, ciascuna con un corredo completo e identico di cromosomi.</b> Le copie si allineano lungo il centro, vengono tirate a estremità opposte, e la cellula si strozza a metà. Passa a Meiosi e lo stesso inizio finisce in <i>quattro</i> cellule con metà dei cromosomi invece.`,
      },
      student: {
        legend: `Le fasi della divisione. Trascina [[stage]] per scorrere tra profase, metafase, anafase e telofase; [[phase]] nomina dove sei e [[cells]] conta le cellule. Il pulsante modalità alterna tra mitosi e meiosi.`,
        try: `Scorri fino alla metafase e nota i cromosomi allineati sull'equatore, poi all'anafase per guardare le sorelle separarsi. Poi passa a Meiosi e lasciala fare due divisioni.`,
        notice: `<b>La mitosi finisce in 2 cellule diploidi identiche; la meiosi finisce in 4 cellule aploidi uniche.</b> Metafase (allineamento) e anafase (separazione) sono il nodo. La meiosi aggiunge una seconda divisione e prima accoppia i cromosomi omologhi, il che dimezza il numero di cromosomi e rimescola i geni.`,
      },
      scholar: {
        legend: `Uno schema della segregazione cromosomica. [[stage]] scorre la linea temporale, [[phase]] etichetta la fase e [[cells]] il conteggio dei prodotti. La modalità Meiosi mostra la divisione riduzionale (I) seguita dalla divisione equazionale (II).`,
        try: `Confronta le due modalità ai loro punti medi: nella mitosi i cromatidi fratelli si separano una volta; nella meiosi I si separano prima gli omologhi, e solo nella meiosi II i fratelli si dividono.`,
        notice: `<b>La differenza distintiva è la meiosi I: si separano gli omologhi, non i cromatidi fratelli — ed è ciò che dimezza il numero di cromosomi.</b> La separazione dei fratelli (mitosi, e meiosi II) preserva la ploidia; la separazione degli omologhi la riduce. Lo schema omette il crossing over, l'altra grande fonte di variazione, che ricombina gli omologhi prima che si separino.`,
      },
    },
    punnett: {
      junior: {
        legend: `Due genitori, ciascuno con due copie del gene. La griglia mostra ogni combinazione che il loro figlio potrebbe ereditare; le celle colorate mostrano come apparirebbe il figlio.`,
        try: `Imposta entrambi i genitori a Aa (uno dominante, uno recessivo) con i pulsanti, poi guarda le quattro celle. Quante mostrano il colore dominante, e quante il recessivo?`,
        notice: `<b>Aa × Aa dà un rapporto 3-a-1.</b> Tre dei quattro figli possibili mostrano il tratto dominante, uno mostra il recessivo. Sono probabilità, non certezza — come lanci di moneta — ma su molti figli il 3:1 tiene.`,
      },
      student: {
        legend: `Un quadrato di Punnett: i due alleli di ciascun genitore intestano righe e colonne, e ogni cella è un genotipo di prole ugualmente probabile, colorato per fenotipo. [[pheno]] e [[geno]] danno i rapporti.`,
        try: `Confronta Aa × Aa (entrambi eterozigoti) con un testcross, Aa × aa. Come differiscono i rapporti [[pheno]] e [[geno]]?`,
        notice: `<b>Aa × Aa → fenotipo 3:1 ma genotipo 1:2:1; Aa × aa → 1:1.</b> Ogni genitore passa un allele a caso (segregazione), quindi le quattro celle sono ugualmente probabili. Il testcross contro un recessivo è esattamente come distingui un AA da un Aa.`,
      },
      scholar: {
        legend: `Un quadrato di Punnett monoibrido, con i rapporti genotipici e fenotipici calcolati dalle quattro combinazioni gametiche ugualmente probabili.`,
        try: `Lavora attraverso ogni incrocio (AA, Aa, aa in ciascun genitore) e prevedi i rapporti prima di rivelarli; nota quali incroci non possono mai produrre un figlio recessivo.`,
        notice: `<b>La griglia è la legge della segregazione di Mendel resa visiva.</b> Assume una dominanza completa semplice; l'ereditarietà reale aggiunge dominanza incompleta, codominanza, alleli multipli, associazione e associazione al sesso — e scala a intere popolazioni attraverso Hardy-Weinberg, la linea di base \\(p^2 + 2pq + q^2\\) per rilevare l'evoluzione.`,
      },
    },
    prob: {
      junior: {
        legend: `Le palline cadono dall'alto in un triangolo di <b>pioli</b>. A ogni piolo una pallina rimbalza a sinistra o a destra per puro caso — come lanciare una moneta. Si accumulano nelle <b>caselle</b> in fondo. La linea bianca tratteggiata e le barre tenui dietro mostrano la forma che la matematica dice che dovresti ottenere.`,
        try: `Premi [[drop]] e fermati dopo circa 20 palline. La forma è ordinata? Ora premi [[reset]], lascia andare oltre le 200, e confronta le barre con la linea tratteggiata.`,
        notice: `<b>Con 20 palline il mucchio sembra irregolare; con 200 cresce sempre nella stessa gobba al centro — la curva a campana.</b> Nessuno può dire dove atterrerà una <i>singola</i> pallina, perché ciascuna è pura fortuna. Eppure centinaia insieme sono notevolmente prevedibili. Guarda [[mean]] vagare all'inizio, poi assestarsi vicino al centro e restarci.`,
      },
      student: {
        legend: `Ogni piolo è un ramo equo 50/50, quindi la casella finale di una pallina conta quante volte è capitato che andasse a destra — un esito <b>binomiale</b>. Barre luminose = i conteggi che hai davvero ottenuto, barre tenui e la curva tratteggiata = la forma a campana prevista. [[mean]] è l'indice medio corrente della casella.`,
        try: `Fai andare oltre le 300 palline con [[rows]] a 7 e guarda dove si assesta [[mean]]. Poi metti [[rows]] a 10 e rilancia — dove sta ora la media, e cosa succede alla larghezza del mucchio?`,
        notice: `<b>La media si assesta a \\(n/2\\) — 3,5 per 7 file, 5 per 10 — e il mucchio si allarga come \\(\\sqrt{n}\\).</b> Con \\(n\\) file il risultato è \\(\\text{Binomiale}(n, \\tfrac12)\\), la cui deviazione standard è \\(\\sqrt{n}/2\\), quindi la dispersione cresce mentre il picco si affina rispetto al totale. Nulla qui è stato progettato per fare una campana: cade fuori da lanci di moneta ripetuti da sé.`,
      },
      scholar: {
        legend: `Il tabellone realizza una somma di \\(n\\) variabili i.i.d. \\(\\text{Bernoulli}(\\tfrac12)\\); l'indice della casella è il conteggio dei rami a destra. Barre luminose = la distribuzione empirica, curva tratteggiata = l'approssimazione normale \\(\\mathcal{N}(n/2,\\, n/4)\\) sovrapposta dalla simulazione. [[mean]] è la media campionaria corrente.`,
        try: `Confronta la dispersione empirica a [[rows]] = 4 e [[rows]] = 10 e verifica se la larghezza scala come \\(\\sqrt{n}\\). Poi guarda come [[mean]] si stabilizza man mano che le palline si accumulano — la sua fluttuazione dovrebbe ridursi come \\(1/\\sqrt{N}\\) nel numero \\(N\\) lasciato cadere.`,
        notice: `<b>La dispersione scala come \\(\\sqrt{n}\\) e la media campionaria converge come \\(1/\\sqrt{N}\\).</b> È il <b>teorema di de Moivre–Laplace</b> in miniatura: \\(\\text{Binomiale}(n,\\tfrac12) \\to \\mathcal{N}(n/2,\\, n/4)\\) al crescere di \\(n\\) — storicamente il primo caso particolare del teorema del limite centrale. La parte notevole è l'universalità: il limite è normale quasi indipendentemente dalla forma stessa della distribuzione del ramo, purché la sua varianza sia finita. Ecco perché la stessa curva governa errore di misura, rumore termico e diffusione allo stesso modo.`,
      },
    },
    fractal: {
      junior: {
        legend: `Questo è l'<b>insieme di Mandelbrot</b>. Il centro scuro è l'insieme stesso; i colori luminosi attorno al bordo mostrano quanto in fretta i punti vicini fuggono all'infinito. Ogni click ti zooma 2,2× più a fondo nell'immagine.`,
        try: `Clicca sulla parte più frastagliata del bordo. Poi clicca di nuovo. E ancora — cinque o sei volte, guardando [[zoom]] salire. Finisci mai il dettaglio?`,
        notice: `<b>No — il dettaglio non finisce mai. Zooma quanto vuoi e nuove forme continuano a dispiegarsi per sempre.</b> Ancora più strano, continui a incontrare minuscole copie dell'intera forma sepolte in fondo al suo stesso bordo. Tutto questo viene da una regola assurdamente corta, applicata più e più volte: eleva al quadrato il numero, aggiungi il punto di partenza, ripeti. Complessità senza fine da quasi nessuna istruzione — è questo un <b>frattale</b>.`,
      },
      student: {
        legend: `Per ogni pixel \\(c\\), la successione \\(z_{n+1} = z_n^2 + c\\) è iterata da \\(z_0=0\\). Scuro = la successione resta limitata (\\(c\\) è nell'insieme); colore = quanti passi ci ha messo a fuggire, quindi le bande sono curve di livello del tempo di fuga. [[detail]] limita il numero di iterazioni e [[zoom]] segue l'ingrandimento.`,
        try: `Zooma più volte nel bordo, poi trascina [[detail]] da 20 fino a 240 e indietro. Guarda cosa succede alla regione nera ad alto ingrandimento.`,
        notice: `<b>Alzare [[detail]] fa sbocciare le aree nere in filigrana — la regione "piena" era un artefatto del fermarsi troppo presto.</b> I punti vicino al bordo fuggono solo dopo moltissime iterazioni, quindi un limite basso li classifica erroneamente come interni. Il bordo stesso ha <b>dimensione di Hausdorff 2</b> (dimostrato da Shishikura, 1998) pur avendo area zero: è così increspato da riempire di fatto il piano. L'insieme è anche connesso — ognuno di quei mini-Mandelbrot dall'aria isolata è unito al corpo principale da filamenti troppo sottili da disegnare.`,
      },
      scholar: {
        legend: `Rendering per tempo di fuga di \\(M = \\{c \\in \\mathbb{C} : (z_{n+1}=z_n^2+c,\\, z_0=0) \\not\\to \\infty\\}\\), con colorazione a iterazione liscia (continua) \\(\\nu = n + 1 - \\log_2\\log_2|z_n|\\) per rimuovere il banding. [[detail]] fissa il taglio del tempo di fuga.`,
        try: `Zooma sul bordo di un mini-Mandelbrot e varia [[detail]]. Stima come cresce il numero di iterazioni richiesto con l'ingrandimento, e considera cosa implica sul decidere l'appartenenza a \\(M\\) algoritmicamente.`,
        notice: `<b>Il numero di iterazioni necessarie cresce senza limite man mano che ti avvicini al bordo — l'appartenenza non è decidibile in tempo finito con questo metodo.</b> \\(M\\) è compatto e connesso (Douady–Hubbard), eppure il suo bordo ha dimensione di Hausdorff esattamente 2 pur portando misura di Lebesgue zero. Se \\(M\\) sia <em>localmente connesso</em> — la congettura MLC — resta aperto, e implicherebbe una classificazione combinatoria completa dell'insieme. Sotto il modello di calcolo reale di Blum–Shub–Smale \\(M\\) non è decidibile, rendendo questa immagine un oggetto genuinamente non calcolabile reso per approssimazione.`,
      },
    },
    calculus: {
      junior: {
        legend: `La curva è una funzione. La linea tratteggiata arancione la tocca in un punto e mostra quanto ripidamente sta salendo lì — quella è [[deriv]]. I rettangoli ombreggiati sotto la curva sommano l'area, mostrata come [[integ]]; il blu conta come positivo, il rosso come negativo.`,
        try: `Metti [[rects]] a 2 e nota [[integ]]. Ora trascinalo fino a 40 e guarda sia l'immagine che il numero.`,
        notice: `<b>I rettangoli si incastrano stretti contro la curva e [[integ]] smette di oscillare — si assesta sull'area vera.</b> Una forma curva non ha una formula d'area facile, quindi il trucco è coprirla con rettangoli che <em>puoi</em> misurare, poi usarne di più e più sottili finché l'errore svanisce. Ora fai scorrere [[x]] e guarda [[deriv]]: dove la curva sale ripida la pendenza è grande, e in cima a una gobba passa per zero.`,
      },
      student: {
        legend: `\\(f(x) = \\sin x + 0.4x\\). La linea tratteggiata arancione è la tangente in [[x]], la cui pendenza è [[deriv]]. I blocchi ombreggiati sono una <b>somma di Riemann</b> col punto medio da \\(-3\\) a [[x]], riportata come [[integ]]; con segno, quindi i blocchi sotto l'asse sottraggono.`,
        try: `Fissa [[x]] a 0 e porta [[rects]] attraverso 2, 8 e 40, registrando [[integ]] ogni volta. Poi tieni [[rects]] a 40 e spazza [[x]], confrontando [[deriv]] con quanto in fretta cambia [[integ]].`,
        notice: `<b>[[integ]] converge a −3,790, e il suo tasso di variazione mentre fai scorrere [[x]] è esattamente [[deriv]].</b> Quella seconda osservazione è il <b>teorema fondamentale del calcolo</b>: se \\(A(x) = \\int_{-3}^{x} f(t)\\,dt\\) allora \\(A'(x) = f(x)\\) — derivazione e integrazione si annullano a vicenda. La regola del punto medio converge come \\(O(h^2)\\), ed è perché il salto da 2 a 8 rettangoli compra molta più accuratezza che da 8 a 40.`,
      },
      scholar: {
        legend: `\\(f(x)=\\sin x + 0.4x\\) con tangente di pendenza \\(f'(x) = \\cos x + 0.4\\) in [[x]]. I blocchi mostrano la quadratura del punto medio \\(\\sum f(x_i + h/2)\\,h\\) che approssima \\(\\int_{-3}^{x} f\\), con segno.`,
        try: `Stima l'ordine di convergenza empiricamente: registra [[integ]] a [[rects]] = 5, 10, 20 per [[x]] fisso, e verifica se l'errore si divide per quattro ogni volta che raddoppi il conteggio. Poi verifica \\(\\frac{d}{dx}\\!\\int_{-3}^{x} f = f(x)\\) in un punto dove \\(f\\) cambia segno.`,
        notice: `<b>L'errore cala di un fattore quattro per raddoppio — convergenza del secondo ordine, \\(O(h^2)\\).</b> Il termine d'errore della regola del punto medio è \\(\\frac{(b-a)h^2}{24}f''(\\xi)\\), quindi è esatta per integrandi lineari e batte la regola dei trapezi di un fattore due pur usando una valutazione per intervallo. Il legame tangente-area è il primo teorema fondamentale, \\(\\frac{d}{dx}\\int_a^x f = f(x)\\) per \\(f\\) continua; la sua potenza è che converte un processo di limite infinito in antiderivazione, ed è perché il calcolo divenne calcolabile.`,
      },
    },
    graphs: {
      junior: {
        legend: `Ogni punto è una <b>persona</b> e ogni linea una connessione tra due di esse. Alcuni punti hanno molte più linee del resto — quelli sono gli <b>hub</b>, contati in [[hubcount]]. Premere [[spread]] avvia un segnale da un hub e lo lascia viaggiare lungo le linee.`,
        try: `Metti [[hubs]] a 1, premi [[reset]], poi [[spread]] e nota [[steps]]. Ora metti [[hubs]] a 6, premi [[reset]] e propaga di nuovo.`,
        notice: `<b>Con più connessioni hub il segnale raggiunge tutti in molti meno passi — spesso solo tre o quattro.</b> La rete non è tessuta in modo uniforme: la maggior parte dei punti ha un paio di collegamenti mentre una manciata ne ha dozzine, e quei pochi hub fanno da scorciatoie attraverso l'intera popolazione. È perché due persone qualsiasi sulla Terra sono a circa sei strette di mano di distanza, e perché una diceria — o un virus — che raggiunge una persona ben connessa si diffonde così allarmantemente in fretta.`,
      },
      student: {
        legend: `Una <b>rete scale-free</b> cresciuta per attaccamento preferenziale: ogni nuovo nodo preferisce collegarsi a nodi già popolari. [[hubs]] fissa quanti collegamenti fa ogni nuovo arrivato, [[hubcount]] conta il 15% più connesso, e [[spread]] fa girare una cascata in stile epidemia innescata da un hub. [[reached]] e [[steps]] seguono la cascata.`,
        try: `Confronta [[steps]] per raggiungere tutti a [[hubs]] = 1 contro 6, tenendo [[nodes]] fisso. Poi alza [[nodes]] da 10 a 40 e vedi di quanto cresce [[steps]] in risposta.`,
        notice: `<b>Quadruplicare il numero di nodi cambia appena il numero di passi.</b> È la proprietà <b>piccolo-mondo</b>: la lunghezza dei percorsi cresce come \\(\\log N\\), non \\(N\\). L'attaccamento preferenziale produce una distribuzione dei gradi \\(P(k) \\sim k^{-\\gamma}\\) con \\(\\gamma \\approx 3\\) — una legge di potenza senza scala tipica, quindi hub di grado enorme non sono gli eventi anomali che una campana predirebbe. Tali reti resistono benissimo al guasto casuale eppure crollano se i loro hub vengono rimossi deliberatamente.`,
      },
      scholar: {
        legend: `Crescita di Barabási–Albert: i nodi arrivano in sequenza e si attaccano con probabilità proporzionale al grado esistente, \\(\\Pi(k_i) = k_i/\\sum_j k_j\\), dando \\(P(k)\\sim k^{-3}\\). [[spread]] innesca una cascata di tipo SIR a un vertice di alto grado; [[reached]] e [[steps]] ne riportano il progresso.`,
        try: `Misura come [[steps]] scala mentre [[nodes]] va 10 → 20 → 40 a [[hubs]] fisso, e confronta con \\(\\log N\\) e \\(\\sqrt{N}\\). Poi considera cosa farebbe a [[reached]] rimuovere i pochi hub principali.`,
        notice: `<b>La lunghezza dei percorsi segue \\(\\log N\\); nei grafi scale-free puri è persino più corta, \\(\\ell \\sim \\log\\log N\\) — "ultrapiccola".</b> La conseguenza profonda è epidemiologica: per \\(\\gamma \\le 3\\) il secondo momento \\(\\langle k^2\\rangle\\) diverge quando \\(N\\to\\infty\\), e poiché la soglia epidemica scala come \\(\\lambda_c = \\langle k\\rangle/\\langle k^2\\rangle\\), essa svanisce. <b>Una rete scale-free non ha alcuna soglia epidemica</b>: qualsiasi infezione trasmissibile, per quanto debole, può persistere. È precisamente perché l'immunizzazione mirata degli hub supera enormemente la vaccinazione casuale.`,
      },
    },
    trig: {
      junior: {
        legend: `Un punto gira su un cerchio a sinistra. La sua <b>altezza</b> è disegnata come un'onda a destra — quell'onda è il seno.`,
        try: `Premi [[play]] (o trascina [[angle]]) e guarda il punto girare mentre l'onda si disegna da sola. Quanto vale [[sin]] quando il punto è proprio in cima?`,
        notice: `<b>Il cerchio disegna l'onda.</b> L'altezza del punto è il seno, e mentre gira, quell'altezza traccia un'onda liscia e ripetuta — +1 in cima, −1 in fondo, 0 ai lati. Ogni cosa ripetuta in natura, dal suono alle maree, è costruita da questo.`,
      },
      student: {
        legend: `Il cerchio unitario (raggio 1): il punto all'angolo θ sta a (cos θ, sin θ). Il pannello destro traccia sin θ e cos θ man mano che θ avanza; [[sin]] e [[cos]] leggono i valori in tempo reale.`,
        try: `Metti [[angle]] a 90° e leggi [[sin]] e [[cos]]; poi 0°, poi 45°. Conferma che sin² + cos² fa sempre 1.`,
        notice: `<b>Il coseno è la coordinata x, il seno la coordinata y di un punto sul cerchio unitario.</b> Scivolano tra +1 e −1 e si ripetono ogni 360°. Poiché il raggio è 1, Pitagora dà sin²θ + cos²θ = 1 a ogni angolo — l'identità che hai appena verificato.`,
      },
      scholar: {
        legend: `La definizione di seno e coseno tramite il cerchio unitario, con le loro forme d'onda generate mentre θ spazza. Il collegamento tratteggiato mostra la proiezione che diventa l'altezza dell'onda.`,
        try: `Traccia un giro completo e nota lo sfasamento di un quarto di giro tra coseno e seno, e dove tan = sin/cos esplode (θ = 90°, 270°).`,
        notice: `<b>Seno e coseno sono la stessa onda a un quarto di giro di distanza, e ciascuno è la derivata dell'altro.</b> Quella relazione, \\(y'' = -y\\), è perché descrivono ogni oscillazione, e attraverso la formula di Eulero \\(e^{i\\theta} = \\cos\\theta + i\\sin\\theta\\) diventano il linguaggio naturale di onde, rotazioni e analisi di Fourier.`,
      },
    },
    gravity: {
      junior: {
        legend: `La palla ambra al centro è la <b>stella</b>. La palla colorata è un <b>pianeta</b> che le gira attorno. Il cerchio tenue è il percorso che segue, la scia luminosa è dove è appena passato, e la corta linea ambra è la <b>gravità</b> — punta sempre dritta alla stella.`,
        try: `Trascina [[radius]] fino a 40 e leggi [[period]]. Ora portalo a 80 — esattamente il doppio. Anche [[period]] raddoppia?`,
        notice: `<b>No — raddoppiare la distanza non raddoppia l'anno. Lo triplica quasi.</b> [[period]] passa da circa 37s a circa 106s, e il pianeta viaggia anche più lentamente più lontano si trova. Ecco perché Nettuno impiega 165 anni terrestri per un singolo giro del Sole, mentre la Terra ne impiega uno.`,
      },
      student: {
        legend: `Sfera ambra = la <b>stella</b> (il suo raggio disegnato cresce con la massa che imposti). Punto colorato = un <b>pianeta</b> su un'orbita circolare. Anello tenue = il percorso orbitale, scia sfumata = traiettoria recente, corto vettore ambra = la <b>forza gravitazionale</b>, sempre diretta alla stella.`,
        try: `Raddoppia [[radius]] da 40 a 80 e confronta le due letture di [[period]]. Poi tieni fisso il raggio e spingi [[mass]] da 0,5 a 5, guardando [[speed]].`,
        notice: `<b>Raddoppiare \\(r\\) non raddoppia \\(T\\) — lo moltiplica per circa 2,8.</b> È la terza legge di Keplero, \\(T^2 \\propto r^3\\). La velocità orbitale obbedisce a \\(v = \\sqrt{GM/r}\\), quindi cala man mano che l'orbita si allarga e sale con la massa della stella. Nota anche che la gravità punta alla stella tutto il tempo, eppure il pianeta non ci cade mai dentro — continua a muoversi di lato abbastanza in fretta da mancarla sempre.`,
      },
      scholar: {
        legend: `Sfera ambra = massa centrale \\(M\\) (disegnata in scala, non in dimensione). Punto colorato = una particella test su un'orbita circolare di raggio \\(r\\). Anello tenue = l'orbita, scia sfumata = percorso recente, vettore ambra = l'accelerazione gravitazionale centripeta \\(GM/r^2\\).`,
        try: `Campiona [[period]] a \\(r = 40, 80, 120\\) con [[mass]] fissa, e stima la pendenza di \\(\\log T\\) contro \\(\\log r\\). Poi varia [[mass]] a raggio fisso e verifica se \\(T \\propto M^{-1/2}\\).`,
        notice: `<b>La pendenza log-log è esattamente \\(3/2\\), quindi raddoppiare \\(r\\) moltiplica \\(T\\) per \\(2^{3/2} \\approx 2,83\\).</b> Eguagliando accelerazione gravitazionale e centripeta, \\(GM/r^2 = v^2/r\\), si ottiene \\(v = \\sqrt{GM/r}\\) e quindi \\[T = \\frac{2\\pi r}{v} = \\frac{2\\pi r^{3/2}}{\\sqrt{GM}},\\] così \\(T^2 = (4\\pi^2/GM)\\,r^3\\) e \\(T \\propto M^{-1/2}\\), come conferma il secondo test. La simulazione integra questa relazione direttamente, quindi [[mass]] riscala la costante kepleriana \\(4\\pi^2/GM\\).`,
      },
    },
    projectile: {
      junior: {
        legend: `La palla colorata è lanciata da sinistra. La linea tratteggiata mostra il percorso che seguirà, e il piccolo marcatore a terra è dove atterra. Sale mentre la gravità rallenta la sua salita, poi ricade — sempre un arco morbido.`,
        try: `Tieni [[speed]] uguale e metti [[angle]] a 45. Nota [[range]]. Ora prova 20, poi 70. Quale angolo la lancia più lontano?`,
        notice: `<b>45° vince ogni volta.</b> Mira troppo basso (20°) e tocca terra presto; mira troppo ripido (70°) e va alto ma non lontano. Esattamente a metà — 45° — divide il lancio equamente tra "avanti" e "su", e questo raggiunge la massima distanza.`,
      },
      student: {
        legend: `La velocità di lancio si divide in una parte orizzontale costante \\(v_0\\cos\\theta\\) e una parte verticale \\(v_0\\sin\\theta\\) che la gravità erode a \\(g\\). Curva tratteggiata = la parabola prevista, marcatore a terra = la gittata \\(R\\). Le pill leggono \\(R\\), l'altezza dell'apice \\(H\\) e il tempo di volo \\(T\\).`,
        try: `Tieni [[speed]] fissa e lancia a [[angle]] = 30°; leggi [[range]]. Ora lancia a 60° e confronta le due gittate.`,
        notice: `<b>30° e 60° danno la gittata identica.</b> Poiché \\(R = v_0^2\\sin 2\\theta/g\\) e \\(\\sin 2\\theta\\) è simmetrico attorno a \\(\\theta = 45°\\), ogni coppia di angoli complementari \\((\\theta,\\,90°-\\theta)\\) atterra nello stesso punto — uno su un arco piatto e veloce, l'altro alto e lento. \\(\\sin 2\\theta\\) culmina a \\(2\\theta = 90°\\), ed è esattamente perché 45° è il singolo angolo più lontano.`,
      },
      scholar: {
        legend: `Un'accelerazione costante verso il basso \\(g\\) che agisce sulla velocità iniziale \\((v_0\\cos\\theta,\\,v_0\\sin\\theta)\\). Eliminando il tempo si ottiene la parabola tratteggiata \\(y = x\\tan\\theta - gx^2/(2v_0^2\\cos^2\\theta)\\); il marcatore a terra sta alla gittata \\(R\\).`,
        try: `Conferma la simmetria degli angoli complementari campionando [[range]] a [[angle]] = 30° e 60° a [[speed]] fissa, poi scansiona [[angle]] attorno a 45° per localizzare dove [[range]] culmina.`,
        notice: `<b>Il massimo sta esattamente a 45° — ma solo perché qui le quote di lancio e atterraggio sono uguali.</b> La gittata \\(R = (v_0^2/g)\\sin 2\\theta\\) è simmetrica attorno a 45° e massima lì. Alza il punto di lancio e l'ottimo scivola sotto i 45° a \\(\\arctan(v_0/\\sqrt{v_0^2+2gh})\\); aggiungi resistenza dell'aria quadratica e scende ancora — le vere palline da baseball battute vanno più lontano vicino a 30–35°, e nessuna gittata in forma chiusa sopravvive.`,
      },
    },
    newton: {
      junior: {
        legend: `Un blocco sta su una pista. La freccia verde è la <b>spinta</b> che applichi; la freccia rossa è l'<b>attrito</b> che spinge indietro. Il blocco accelera mentre la spinta vince, poi torna all'inizio e riparte.`,
        try: `Fai [[mass]] piccola e [[force]] grande, e guarda [[accel]]. Ora raddoppia [[mass]] con la stessa [[force]]. Cosa succede a quanto in fretta accelera?`,
        notice: `<b>Raddoppiare la massa dimezza l'accelerazione.</b> La stessa spinta muove un blocco pesante più lentamente — è \\(F = ma\\). E se alzi [[fric]] abbastanza, il blocco non si muove affatto: l'attrito annulla la tua spinta, le forze si bilanciano, e la prima legge di Newton lo tiene fermo.`,
      },
      student: {
        legend: `Un diagramma di corpo libero su una pista: verde = forza applicata, rosso = attrito cinetico \\(f = \\mu m g\\). La forza netta \\(F_{\\text{net}} = F - f\\) dà l'accelerazione \\(a = F_{\\text{net}}/m\\); le pill leggono forza netta, accelerazione e velocità in tempo reale.`,
        try: `Tieni [[force]] fissa e porta [[mass]] da bassa ad alta, leggendo [[accel]] ogni volta. Poi alza [[fric]] finché il blocco rifiuta di muoversi.`,
        notice: `<b>L'accelerazione è proporzionale alla forza e inversamente proporzionale alla massa — esattamente \\(a = F_{\\text{net}}/m\\).</b> Quando la forza applicata scende sotto il limite d'attrito \\(\\mu m g\\), la forza netta è zero e il blocco resta fermo: una dimostrazione della prima legge a forze bilanciate.`,
      },
      scholar: {
        legend: `Una pista che mostra il netto tra la forza applicata e l'attrito di Coulomb. L'accelerazione è integrata da \\(a = F_{\\text{net}}/m\\) e la velocità da \\(a\\); il blocco si reimposta per correre ad accelerazione costante a ogni ciclo.`,
        try: `Verifica \\(a \\propto 1/m\\) dimezzando e raddoppiando [[mass]] a [[force]] fissa, poi localizza la soglia d'attrito dove il moto cessa e confrontala con \\(\\mu m g\\).`,
        notice: `<b>Il moto inizia esattamente a \\(F = \\mu m g\\), e l'accelerazione scala come \\(1/m\\).</b> È l'angolo a forza-costante, massa-costante di \\(\\mathbf{F} = d\\mathbf{p}/dt\\). La sim usa un singolo \\(\\mu\\) cinetico; le superfici reali hanno un coefficiente <i>statico</i> più grande, quindi la vera forza di distacco è un po' più alta del valore disegnato qui.`,
      },
    },
    circuits: {
      junior: {
        legend: `Una batteria a sinistra spinge una <b>corrente</b> di carica lungo l'anello per accendere la lampadina a destra. I puntini in movimento sono la carica — più corrono veloci, più grande è la corrente. Alza la batteria e accelerano; aggiungi resistenza e rallentano.`,
        try: `Alza [[volt]] e guarda i puntini e la lampadina. Ora alza [[res]] invece. Quale rende la corrente più grande, e quale più piccola?`,
        notice: `<b>Più tensione significa più corrente; più resistenza significa meno.</b> È la legge di Ohm, corrente = tensione ÷ resistenza. La luminosità della lampadina segue la <i>potenza</i>, quindi raddoppiare la tensione la rende molto più del doppio luminosa.`,
      },
      student: {
        legend: `Un unico anello: una sorgente di f.e.m. (batteria) e una lampadina resistiva. I puntini si muovono a una velocità fissata dalla corrente \\(I = V/R\\), e il bagliore della lampadina segue la potenza \\(P = VI\\). Le pill leggono corrente e potenza.`,
        try: `Fissa [[res]] e raddoppia [[volt]] — verifica che [[cur]] raddoppi. Poi tieni [[volt]] e raddoppia [[res]]; conferma che [[cur]] si dimezzi.`,
        notice: `<b>La corrente è esattamente \\(V/R\\): lineare nella tensione, inversamente proporzionale alla resistenza.</b> La potenza, però, va come \\(P = VI = V^2/R\\), quindi raddoppiare la tensione <i>quadruplica</i> la potenza — ed è perché la lampadina si illumina così drasticamente.`,
      },
      scholar: {
        legend: `Un circuito ohmico a singolo anello idealizzato. La velocità dei portatori di carica è disegnata proporzionale a \\(I = V/R\\) e la luminanza della lampadina a \\(P = V^2/R\\); il modello assume una resistenza costante (nessun riscaldamento).`,
        try: `Traccia la retta \\(I\\)–\\(V\\) variando [[volt]] a [[res]] fissa, poi cambia [[res]] per vedere cambiare la pendenza \\(1/R\\). Guarda come [[pow]] segue \\(V^2/R\\), non \\(V\\).`,
        notice: `<b>La corrente segue una retta per l'origine con pendenza \\(1/R\\) — la firma di un elemento ohmico.</b> Un filamento reale si scalda man mano che \\(P\\) sale, la sua resistenza cresce, e la retta si piega. La sim mostra il caso idealizzato a \\(R\\) costante: la tangente che solo un metallo freddo obbedisce esattamente.`,
      },
    },
    states: {
      junior: {
        legend: `Una scatola di particelle. Il cursore è la <b>temperatura</b>. Fredde e si bloccano in un solido ordinato; più calde e scivolano come un liquido; caldissime e volano via come un gas. La barra a destra segna i punti di fusione ed ebollizione.`,
        try: `Parti freddo e alza lentamente [[temp]]. Guarda le particelle passare da griglia fissa, a fluenti, a libere in volo. In quali punti cambia lo [[state]]?`,
        notice: `<b>Stesse particelle — solo più energia.</b> Nulla è aggiunto o rimosso; scaldare fa solo muovere le particelle più in fretta finché non si liberano l'una dall'altra. È tutta qui la differenza tra ghiaccio, acqua e vapore: non di cosa sono fatti, ma quanto in fretta si muovono.`,
      },
      student: {
        legend: `Teoria cinetica in azione: la temperatura fissa la velocità media delle particelle, e l'equilibrio tra il loro moto e la loro attrazione reciproca fissa lo stato. La barra laterale segna i punti di fusione ed ebollizione.`,
        try: `Alza [[temp]] lentamente attraverso il punto di fusione, poi quello di ebollizione, guardando l'arrangiamento cambiare da reticolo → fluente → libero.`,
        notice: `<b>La temperatura è energia cinetica media, e lo stato è un braccio di ferro.</b> Sotto la fusione, vince l'attrazione (un reticolo rigido); sopra l'ebollizione, vince il moto (un gas libero); tra le due, un quasi-pareggio (un liquido mobile). Le sostanze reali fanno anche una pausa a ogni transizione mentre il calore latente rompe i legami.`,
      },
      scholar: {
        legend: `Uno schema cinetico-molecolare: la velocità delle particelle scala con T, e l'arrangiamento riflette se dominano le forze intermolecolari o il moto termico.`,
        try: `Spazza [[temp]] attraverso entrambe le transizioni e nota che il cambiamento qualitativo — reticolo, liquido, gas — è brusco, non graduale: la firma di una transizione di fase.`,
        notice: `<b>I cambiamenti di stato sono transizioni collettive, quasi-discontinue.</b> A pressione fissa lo stato scatta a punti netti di fusione ed ebollizione, e attraversarli costa calore latente senza aumento di temperatura. Cambia la pressione e quei punti si spostano — il resoconto completo è il diagramma di fase, con i suoi punti triplo e critico.`,
      },
    },
    waves: {
      junior: {
        legend: `Le due onde tenui — una blu, una viola — sono due <b>onde</b> separate che viaggiano. La linea spessa e luminosa è ciò che vedresti e sentiresti davvero: le due sommate, cresta per cresta.`,
        try: `Lascia [[freq]] a 1 così le due onde coincidono. Ora trascina [[phase]] lentamente da 0 fino a circa 3,14 e guarda la linea spessa.`,
        notice: `<b>L'onda spessa si riduce a una linea piatta — due onde sommate danno nulla.</b> Quando sposti un'onda di mezzo passo, le sue creste cadono esattamente sui ventri dell'altra e si annullano. Somma suono a suono e ottieni silenzio: è esattamente come funzionano le cuffie a cancellazione di rumore. Spingi [[phase]] fino a 6,28 (un passo intero) e l'onda torna ruggente.`,
      },
      student: {
        legend: `Blu tenue e viola tenue = le due <b>onde sorgente</b>. La curva spessa e luminosa è la loro <b>sovrapposizione</b>, la somma punto per punto. [[type]] riporta se il risultato rinforza o annulla, e [[amp]] dà l'altezza di picco come multiplo di quella di una singola onda.`,
        try: `Con [[freq]] a 1, metti [[phase]] a 0 e leggi [[amp]]. Poi porta [[phase]] a \\(\\pi \\approx 3.14\\) e rileggilo. Infine metti [[freq]] a 2 e guarda la forma cambiare carattere.`,
        notice: `<b>[[amp]] va da 2,00× giù a 0,00× — rinforzo totale a cancellazione totale — senza cambiare l'energia che immetti.</b> Le onde si sovrappongono linearmente: \\(y = A\\sin(kx-\\omega t) + A\\sin(kx-\\omega t+\\phi)\\), che somma a \\(2A\\cos(\\phi/2)\\sin(kx-\\omega t+\\phi/2)\\). Il fattore di ampiezza \\(2A\\cos(\\phi/2)\\) svanisce a \\(\\phi=\\pi\\). Con frequenze diverse non ottieni più un'unica onda pulita ma un motivo di <em>battimento</em> ripetuto.`,
      },
      scholar: {
        legend: `Due termini sorgente armonici di uguale ampiezza \\(A\\), il secondo con rapporto di frequenza [[freq]] e fase relativa [[phase]]. La curva spessa è la loro sovrapposizione lineare; [[amp]] riporta \\(\\max|y|/A\\).`,
        try: `Tieni [[freq]] a 1 e spazza [[phase]] su \\([0, 2\\pi]\\), confrontando [[amp]] con \\(2|\\cos(\\phi/2)|\\). Poi metti [[freq]] a un valore non intero come 1,5 e osserva che l'inviluppo non si chiude più in un unico periodo.`,
        notice: `<b>[[amp]] traccia \\(2|\\cos(\\phi/2)|\\) esattamente, e i rapporti di frequenza irrazionali non si ripetono mai.</b> La sovrapposizione segue dalla linearità dell'equazione delle onde \\(\\partial_t^2 y = c^2 \\partial_x^2 y\\): somme di soluzioni sono soluzioni, ed è ciò che rende possibile l'analisi di Fourier. Per \\(f_2/f_1 = p/q\\) razionale il motivo è periodico con periodo \\(q\\) cicli; i rapporti irrazionali sono quasi-periodici e non si ripetono mai esattamente. Nota che la cancellazione ridistribuisce l'energia, non la distrugge — l'energia soppressa qui riappare altrove nel campo.`,
      },
    },
    thermo: {
      junior: {
        legend: `La scatola tiene <b>particelle</b> di gas che rimbalzano, colorate da quanto vanno veloci — blu è lento, rosso è veloce. Il termometro a destra mostra la temperatura. Il grafico sotto conta quante particelle hanno ciascuna velocità.`,
        try: `Guarda il grafico a [[temp]] = 300. Ora trascina [[temp]] fino a 1200 e confronta: dove si è spostata la gobba, e cosa è successo a [[press]]?`,
        notice: `<b>Scaldare non dà a ogni particella la stessa velocità — sposta l'intera gobba a destra e la spalma più larga.</b> Anche in un gas rovente alcune particelle strisciano e alcune corrono. La temperatura non è la velocità di una particella; è la <em>media</em> su miliardi. Le particelle più veloci colpiscono anche le pareti più forte e più spesso, ed è esattamente ciò che [[press]] misura — il motivo per cui una lattina sigillata esplode nel fuoco.`,
      },
      student: {
        legend: `Un gas ideale 2D con collisioni elastiche. Il colore delle particelle codifica la velocità (blu lento → rosso veloce), il termometro segue [[temp]], e il grafico in basso è la <b>distribuzione delle velocità</b> in tempo reale con il suo inviluppo. [[hits]], [[speed]] e [[press]] sono misurati dalle particelle stesse, non assunti.`,
        try: `Registra [[speed]] e [[press]] a [[temp]] = 300, poi a 1200 — un fattore 4. Anche la velocità sale di 4? Poi torna a 300 e invece raddoppia [[num]].`,
        notice: `<b>Quadruplicare la temperatura raddoppia solo la velocità media, ma raddoppiare il numero di particelle raddoppia la pressione.</b> È \\(v_{\\text{rms}} \\propto \\sqrt{T}\\) — l'energia cinetica, non la velocità, è ciò che scala con \\(T\\), via \\(\\tfrac12 m v^2 = \\tfrac{d}{2} k_B T\\). La pressione intanto segue \\(PV = Nk_BT\\), lineare sia in \\(N\\) che in \\(T\\). La distribuzione che vedi è la legge di <b>Maxwell–Boltzmann</b>: ha un pavimento rigido a velocità zero ma una coda illimitata, quindi è fondamentalmente asimmetrica.`,
      },
      scholar: {
        legend: `Gas di dischi rigidi a volume fisso con collisioni elastiche a due corpi; le velocità sono inizializzate e riscalate come \\(v \\propto \\sqrt{T}\\). L'istogramma è la densità empirica istantanea delle velocità, e [[press]] è accumulata dall'impulso misurato sulle pareti per unità di tempo.`,
        try: `Verifica lo scaling \\(v_{\\text{rms}} \\propto \\sqrt{T}\\) su [[temp]] = 300, 600, 1200, poi tieni \\(T\\) fisso e varia [[num]] per confermare \\(P \\propto N\\). Guarda quanto in fretta l'istogramma si ri-equilibra nel suo inviluppo dopo un salto improvviso di temperatura.`,
        notice: `<b>La distribuzione si riforma entro pochi tempi di collisione, comunque tu la disturbi.</b> In 2D la legge di equilibrio è \\(f(v) \\propto v\\,e^{-mv^2/2k_BT}\\) (la Maxwell–Boltzmann 3D porta \\(v^2\\)), e l'equipartizione dà \\(\\langle E\\rangle = \\tfrac{d}{2}k_BT\\) per particella. La parte notevole è la velocità dell'avvicinamento: il <b>teorema H di Boltzmann</b> mostra che il caos molecolare guida qualsiasi distribuzione iniziale monotonamente verso questa. La dinamica microscopica è perfettamente reversibile nel tempo, eppure il rilassamento macroscopico no — l'origine della freccia del tempo.`,
      },
    },
    particles: {
      junior: {
        legend: `Questa è la vista dall'interno di un rivelatore di particelle — gli anelli blu sono i suoi strati. Premi [[collide]] e due protoni corrono dai lati e si schiantano al centro. Le scintille con le lettere che volano fuori sono le <b>nuove particelle</b> create dallo schianto; la <b>H</b> rosa è un bosone di Higgs.`,
        try: `Metti [[energy]] al minimo, 0,5, e premi [[collide]] alcune volte. Conta all'incirca quante scintille volano fuori. Ora metti [[energy]] a 14 e collidi di nuovo.`,
        notice: `<b>Più energia fa più particelle — lo schianto crea materia che prima non c'era.</b> I protoni non si frantumano in pezzi più piccoli come un piatto caduto; la loro energia di movimento si trasforma in particelle nuove di zecca, perché energia e massa sono la stessa cosa (\\(E = mc^2\\)). Ecco perché i fisici costruiscono acceleratori sempre più grandi: per fare particelle più pesanti, serve più energia, e nient'altro va bene.`,
      },
      student: {
        legend: `Una sezione schematica del rivelatore: gli anelli concentrici sono strati di tracciamento, e ogni punto etichettato è un prodotto di decadimento — quark (u, d, s), gluoni (g), elettroni, fotoni, neutrini e l'Higgs (H). [[count]] conta le collisioni; [[energy]] è l'energia del fascio per protone.`,
        try: `Confronta il numero e la varietà dei prodotti a [[energy]] = 0,5 contro 14. Guarda in particolare quanto spesso appare la <b>H</b> rosa a ciascuna impostazione.`,
        notice: `<b>La molteplicità dei prodotti sale con l'energia del fascio, e le particelle pesanti appaiono solo quando c'è energia per pagarle.</b> Una collisione converte energia cinetica in massa a riposo via \\(E = mc^2\\), quindi produrre un Higgs (125 GeV/c²) richiede un'energia di collisione ben sopra quella soglia. Ecco perché l'LHC gira a 13–14 TeV invece che a qualcosa di più economico: l'Higgs era semplicemente inaccessibile a energie più basse, e la particella fu trovata nel 2012 solo quando la macchina poté raggiungerla.`,
      },
      scholar: {
        legend: `Schema di un evento di collisore di adroni: strati di tracciamento concentrici, con prodotti nello stato finale presi dallo spettro del Modello Standard. La molteplicità scala con \\(\\sqrt{s}\\) in questo modello; il marcatore H denota un candidato Higgs.`,
        try: `Porta [[energy]] su tutto il suo intervallo e nota come cresce la molteplicità. Considera quale frazione di eventi dovrebbe contenere un H per una rivendicazione di scoperta, dato che la vera sezione d'urto di produzione dell'Higgs è \\(\\sim\\!10^{-10}\\) del tasso inelastico totale.`,
        notice: `<b>Il tasso qui è follemente generoso — un Higgs reale appare in circa una collisione su \\(10^{10}\\).</b> La scoperta è quindi un problema di statistica, non di rivelazione: l'LHC produce ~600 milioni di collisioni al secondo e i fisici cacciano una manciata di eventi contro un travolgente fondo di QCD, esigendo \\(5\\sigma\\) (una probabilità di falso allarme di \\(3\\times10^{-7}\\)) prima di rivendicare un segnale. I 17 campi del Modello Standard rendono conto di ogni particella vista qui, e predicono il momento magnetico dell'elettrone a 12 cifre significative — eppure non contengono alcun candidato per la materia oscura e nessuna gravità.`,
      },
    },
    seriesparallel: {
      junior: {
        legend: `A sinistra c'è la <b>batteria</b>; i due cerchi luminosi sono <b>lampadine</b>. I puntini gialli sono la <b>corrente elettrica</b> che scorre nei fili. Il pulsante alterna il cablaggio tra <b>serie</b> (un anello) e <b>parallelo</b> (due rami).`,
        try: `Parti in serie e nota quanto sono luminose le lampadine. Premi il pulsante [[mode]] per passare a parallelo. Le lampadine diventano più luminose o più fioche? Guarda cambiare anche [[cur]].`,
        notice: `<b>In parallelo le lampadine brillano; in serie sono fioche — stessa batteria, stesse lampadine.</b> In serie le due lampadine si dividono la spinta di una batteria, così ciascuna ne riceve metà. In parallelo ogni lampadina riceve la spinta piena sul proprio ramo, così brillano entrambe e la batteria eroga molta più corrente. Ecco perché casa tua è cablata in parallelo.`,
      },
      student: {
        legend: `Due lampadine da \\(10\\,\\Omega\\) su una batteria che imposti con [[volt]]. Il pulsante [[mode]] alterna tra serie (\\(R=R_1+R_2\\), corrente condivisa) e parallelo (\\(1/R=1/R_1+1/R_2\\), tensione condivisa). Le pill leggono resistenza totale, corrente totale e potenza per lampadina.`,
        try: `Fissa [[volt]] e leggi [[rtot]] e [[cur]] in serie, poi passa a parallelo. Di che fattore salta [[cur]], e come si confronta [[bulb]]?`,
        notice: `<b>La serie dà \\(20\\,\\Omega\\); il parallelo dà \\(5\\,\\Omega\\) — quattro volte la corrente, e quattro volte la potenza per lampadina.</b> Le resistenze si sommano in serie ma si combinano in modo reciproco in parallelo, scendendo sempre sotto il ramo più piccolo. Poiché \\(P=I^2R\\), le lampadine in parallelo dissipano \\(4\\times\\) la potenza e brillano molto di più — il guadagno visibile della scelta di cablaggio.`,
      },
      scholar: {
        legend: `Una rete a due resistori alternata tra serie e parallelo da [[mode]], alimentata a tensione [[volt]]. Le riduzioni \\(R_s=R_1+R_2\\) e \\(R_p^{-1}=R_1^{-1}+R_2^{-1}\\) sono casi particolari delle leggi di Kirchhoff; la sorgente qui è trattata come ideale (nessuna resistenza interna).`,
        try: `Confronta [[rtot]] e [[cur]] attraverso l'alternanza e conferma che il totale in parallelo sta sotto entrambi i rami. Poi considera come una resistenza interna reale \\(r\\) limiterebbe la corrente in parallelo che il modello lascia crescere liberamente.`,
        notice: `<b>Serie e parallelo sono solo le leggi delle correnti e delle tensioni di Kirchhoff applicate a un anello o a un nodo.</b> Ogni rete di resistori si riduce così — tranne le topologie a ponte, che richiedono l'analisi completa ai nodi/maglie. Questa sorgente idealizzata non ha resistenza interna, così la corrente in parallelo sale senza limite; una batteria reale cederebbe come \\(V=\\varepsilon-Ir\\), l'effetto che affievolisce i fari quando l'avviamento tira centinaia di ampere.`,
      },
    },
    respiration: {
      junior: {
        legend: `La grande forma è un <b>mitocondrio</b>, la centrale elettrica della tua cellula. Il <b>glucosio</b> rosso (zucchero) entra da sinistra e l'<b>ossigeno</b> blu dall'alto; escono gettoni d'energia <b>ATP</b> dorati e <b>CO₂</b> grigia. Fai scorrere [[o2]] per cambiare quanto ossigeno è disponibile.`,
        try: `Alza [[o2]] in alto e guarda l'ATP sgorgare. Ora abbassalo del tutto. Cosa succede a [[atp]] e alla [[mode]] quando l'ossigeno si esaurisce?`,
        notice: `<b>Con tanto ossigeno la cellula fa circa 15 volte più energia che senza.</b> L'ossigeno permette al mitocondrio di finire di bruciare lo zucchero fino in fondo, rilasciando tanto ATP ed espirando CO₂. Privalo di ossigeno e la cellula ripiega su un rimedio rapido e fiacco che fa a malapena ATP — la modalità "anaerobica" che i tuoi muscoli raggiungono in uno scatto intenso.`,
      },
      student: {
        legend: `Un mitocondrio che fa girare \\(C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + \\text{ATP}\\). Glucosio e O₂ (impostati da [[o2]]) entrano; ATP e CO₂ escono. Le pill leggono ATP per glucosio, CO₂ per glucosio e se la via è aerobica o anaerobica.`,
        try: `Alza [[o2]] al massimo e leggi [[atp]] e [[co2]]; poi abbassalo vicino a zero e guarda [[mode]] passare ad anaerobica. Nota come la resa di ATP crolla.`,
        notice: `<b>La respirazione aerobica rende ~30–32 ATP per glucosio; la fermentazione anaerobica ne recupera appena 2.</b> La glicolisi (2 ATP) non ha bisogno di ossigeno, ma il grande guadagno viene dal ciclo di Krebs e dalla catena di trasporto degli elettroni, che hanno bisogno di O₂ come accettore finale di elettroni. Toglilo e gira solo la glicolisi — una perdita di ~15 volte, e il perché l'ossigeno fu la chiave della vita complessa affamata di energia.`,
      },
      scholar: {
        legend: `Metabolismo ossidativo schematico: il flusso di substrato (glucosio) e la disponibilità di O₂ ([[o2]]) fissano la resa di ATP e l'emissione di CO₂. L'operazione aerobica sta al posto dell'intera catena — glicolisi, ciclo di Krebs e la catena di trasporto degli elettroni che pompa protoni — condensata in ingressi e uscite.`,
        try: `Spazza [[o2]] e nota il calo brusco di [[atp]] quando la via attraversa in territorio anaerobico — un surrogato dello stallo della catena di trasporto degli elettroni quando il suo accettore terminale è sparito.`,
        notice: `<b>Il vantaggio aerobico di ~15× risale alla chemiosmosi: la catena pompa protoni per costruire un gradiente, e l'ATP sintasi lo riscuote.</b> Il ruolo dell'ossigeno è solo quello di accettore finale di elettroni, eppure senza di esso i portatori restano ridotti, il pompaggio di protoni si ferma e la fosforilazione ossidativa si arresta in pochi secondi. La forza proton-motrice \\(\\Delta p\\) è il vero deposito d'energia; l'ATP sintasi è un motore rotante che gira su quella corrente di protoni.`,
      },
    },
    watercycle: {
      junior: {
        legend: `Il blu in basso è l'<b>oceano</b>, la palla gialla è il <b>Sole</b>. L'acqua calda sale come goccioline (<b>evaporazione</b>), si raduna in una <b>nuvola</b> in alto, e quando la nuvola si riempie <b>piove</b> di nuovo verso il mare. Giro e giro.`,
        try: `Abbassa [[temp]] al minimo e guarda quanto in fretta si riempie la nuvola. Ora alzalo al massimo. La nuvola si riempie e piove prima?`,
        notice: `<b>Più Sole significa evaporazione più rapida, così la nuvola si riempie e piove prima — l'intero ciclo accelera.</b> Il Sole è il motore del ciclo dell'acqua: il suo calore solleva l'acqua nel cielo, e la gravità la riporta giù come pioggia. Non si fabbrica mai acqua nuova — le stesse goccioline girano e rigirano.`,
      },
      student: {
        legend: `Il Sole guida l'<b>evaporazione</b> dall'oceano; il vapore sale, si raffredda e <b>condensa</b> nella nuvola; una volta satura cade come <b>precipitazione</b> e torna al mare. Le pill leggono il livello di evaporazione, il riempimento della nuvola e se sta piovendo.`,
        try: `Metti [[temp]] basso e nota il tasso di riempimento di [[cloud]], poi mettilo alto. Guarda come [[rain]] passa da "Building" a "Raining" più in fretta con più calore.`,
        notice: `<b>L'aria più calda evapora l'acqua più in fretta e ne può contenere di più — così il calore accelera l'intero ciclo.</b> L'evaporazione assorbe calore latente (2,26 MJ/kg) e la condensazione lo rilascia in quota, spostando silenziosamente enormi quantità di energia verso l'alto. Globalmente evaporazione e precipitazione devono bilanciarsi, con i fiumi a restituire il lieve deficit dell'oceano.`,
      },
      scholar: {
        legend: `Un modello schematico a serbatoi e flussi: il flusso di evaporazione scala con [[temp]], il vapore condensa alla nuvola, e la precipitazione chiude l'anello. La nuvola è un tampone che si svuota al raggiungimento della capacità.`,
        try: `Spazza [[temp]] e osserva che il tasso di riempimento della nuvola e la frequenza della pioggia salgono entrambi con esso — un surrogato dello scaling di Clausius-Clapeyron dell'umidità con la temperatura.`,
        notice: `<b>La capacità dell'aria di trattenere acqua sale esponenzialmente con la temperatura (~7% per °C), ed è per questo che un clima più caldo intensifica il ciclo.</b> Il calore latente rende l'evaporazione il principale oleodotto energetico dell'atmosfera (alimenta gli uragani), il tempo di residenza \\(\\tau=V/F\\) fissa quanto in fretta ogni serbatoio risponde, e il frazionamento isotopico a ogni cambiamento di stato permette alle carote di ghiaccio di registrare le temperature passate.`,
      },
    },
    energy: {
      junior: {
        legend: `La pallina rotola in una <b>ciotola</b>. In alto sul fianco ha <b>energia d'altezza</b> immagazzinata; in fondo è tutta <b>energia di movimento</b>. Le due barre a destra mostrano ogni tipo — guardale scambiarsi mentre la pallina rotola.`,
        try: `Metti [[fric]] a 0 e lascia cadere la pallina. Le barre continuano a scambiarsi per sempre? Ora aggiungi un po' di [[fric]] e guarda cosa succede al <b>Totale</b>.`,
        notice: `<b>Senza attrito il totale non cambia mai — energia d'altezza ed energia di movimento si scambiano avanti e indietro per sempre.</b> È la conservazione dell'energia. Aggiungi attrito e un po' di energia sfugge come calore a ogni oscillazione, così la pallina risale un po' più in basso ogni volta finché non si ferma. L'energia non è distrutta — è diventata tepore.`,
      },
      student: {
        legend: `Una pallina in una ciotola parabolica. Energia potenziale \\(PE=mgh\\) (barra blu) ed energia cinetica \\(KE=\\tfrac{1}{2}mv^2\\) (barra rossa) si scambiano mentre si muove; la pill "Total" è la loro somma. [[fric]] rimuove energia meccanica come calore.`,
        try: `Con [[fric]] = 0, verifica che \\(KE+PE\\) (il Totale) resti costante mentre KE e PE oscillano. Poi alza [[fric]] e guarda il Totale decadere.`,
        notice: `<b>Ad attrito zero \\(\\tfrac{1}{2}mv^2 + mgh\\) è costante — ogni joule di altezza diventa un joule di movimento e viceversa.</b> Questo dà la velocità d'impatto \\(v=\\sqrt{2gh}\\), indipendente dalla massa. L'attrito compie lavoro negativo, convertendo energia meccanica in calore, così il Totale cala e la pallina si assesta — energia comunque conservata, solo spostata al registro termico.`,
      },
      scholar: {
        legend: `Buca parabolica, quindi il moto è armonico semplice e \\(E=KE+PE\\propto A^2\\) con ampiezza \\(A\\). [[drop]] fissa \\(A\\); [[fric]] applica un decadimento esponenziale dell'ampiezza. Le barre mostrano \\(KE\\) (rosso) e \\(PE\\) (blu), la pill la loro somma.`,
        try: `Metti [[fric]]=0 e conferma che il Totale è invariante mentre \\(KE\\) e \\(PE\\) si scambiano. Poi aggiungi attrito e nota il decadimento quasi-esponenziale del Totale — la firma di una forza non conservativa.`,
        notice: `<b>La conservazione segue dal teorema dell'energia-lavoro più una forza conservativa \\(\\vec F=-\\nabla U\\); l'attrito non supera quel test e dissipa.</b> Più in profondità, il teorema di Noether lega la conservazione dell'energia alla simmetria per traslazione temporale. Allarga i libri con \\(\\Delta U=Q-W\\) e persino l'energia "persa" è contabilizzata — conservata nel complesso, ma degradata verso il disordine.`,
      },
    },
    gaslaws: {
      junior: {
        legend: `I puntini che rimbalzano dentro la scatola sono <b>particelle di gas</b>. La parete destra è un <b>pistone</b> che puoi far scorrere per cambiare la dimensione del contenitore. Ogni volta che un puntino colpisce una parete spinge — e tutte quelle spinte insieme sono la <b>pressione</b> mostrata nella pill.`,
        try: `Tieni [[temp]] uguale e fai scorrere [[vol]] per rimpicciolire la scatola. Guarda [[pres]]. Poi rifai grande la scatola e alza invece [[temp]].`,
        notice: `<b>Comprimi la scatola e la pressione sale; scalda il gas e sale anche.</b> Meno spazio significa che le stesse particelle colpiscono le pareti più spesso; temperatura più alta significa che volano più veloci e colpiscono più forte. Nota che "Pressione × dimensione" resta circa costante quando cambi solo la dimensione — è la legge di Boyle.`,
      },
      student: {
        legend: `Particelle in moto elastico casuale; la loro velocità scala con \\(\\sqrt{T}\\) e il pistone destro fissa il volume \\(V\\). Le pill leggono la pressione \\(P\\) e il prodotto \\(P\\times V\\). Il gas obbedisce a \\(PV = nRT\\).`,
        try: `Tieni [[temp]] fisso e dimezza [[vol]] — [[pres]] raddoppia mentre \\(P\\times V\\) resta fermo? Poi tieni [[vol]] e alza [[temp]], guardando \\(P\\) salire di pari passo.`,
        notice: `<b>A \\(T\\) fisso, \\(P\\times V\\) è costante (Boyle); a \\(V\\) fisso, \\(P\\propto T\\) (Gay-Lussac).</b> Entrambe sono facce di \\(PV=nRT\\). La simulazione calcola \\(P = nRT/V\\) direttamente, e le velocità delle particelle seguono \\(\\sqrt{T}\\) — una visualizzazione della teoria cinetica in cui la temperatura <em>è</em> energia cinetica media.`,
      },
      scholar: {
        legend: `Un gas ideale: \\(P = nRT/V\\), velocità delle particelle \\(\\propto\\sqrt{T}\\) come nell'immagine di Maxwell-Boltzmann. Il pistone fissa \\(V\\); le pill leggono \\(P\\) e \\(PV\\). Le deviazioni dei gas reali richiederebbero la correzione di van der Waals.`,
        try: `Traccia un'isoterma: fissa [[temp]] e campiona coppie \\((P,V)\\) su tutto l'intervallo, verificando se \\(PV\\) resta costante. Poi traccia un'isocora: fissa [[vol]] e varia [[temp]].`,
        notice: `<b>L'isoterma dà \\(PV=\\text{cost}\\); l'isocora dà \\(P\\propto T\\) — la legge dei gas ideali sezionata.</b> Questa idealizzazione assume particelle puntiformi senza attrazioni. I gas reali deviano al crescere della densità: dimensione finita (il termine \\(b\\)) e attrazione intermolecolare (il termine \\(a\\)) piegano le isoterme e, sotto un punto critico, permettono la condensazione che la legge ideale non può mai mostrare.`,
      },
    },
    moonphases: {
      junior: {
        legend: `Il disco luminoso a sinistra è il <b>Sole</b>, che illumina tutto da quel lato. La palla blu è la <b>Terra</b>, e la palla grigia che le gira attorno è la <b>Luna</b> — sempre illuminata a metà sul lato del Sole. Il piccolo disco a destra mostra la <b>fase che vedresti dalla Terra</b>.`,
        try: `Fai scorrere [[day]] lentamente per tutto il mese. Guarda il disco "dalla Terra" a destra, e leggi [[phase]] e [[lit]].`,
        notice: `<b>La forma della Luna non cambia — stai solo vedendo la sua metà illuminata da angoli diversi.</b> Quando la Luna è tra Terra e Sole il suo lato scuro è rivolto a noi (luna nuova); quando è sul lato opposto vediamo l'intera faccia illuminata (luna piena). Un giro completo dura circa 29,5 giorni.`,
      },
      student: {
        legend: `Vista dall'alto: direzione illuminata dal Sole da sinistra, Terra al centro, Luna sulla sua orbita. La metà rivolta al Sole è sempre illuminata; il disco inserito ricostruisce la vista dalla Terra. Le pill leggono il nome della fase e la frazione illuminata \\(k=\\tfrac{1}{2}(1-\\cos\\theta)\\).`,
        try: `Porta [[day]] a 0, ~7, ~15 e ~22 e nomina ogni [[phase]]. Guarda come [[lit]] segue l'angolo di fase invece di saltare.`,
        notice: `<b>L'illuminazione varia con continuità come \\(k=\\tfrac{1}{2}(1-\\cos\\theta)\\): 0% nuova, 50% ai quarti, 100% piena.</b> La fase che seguiamo si ripete ogni mese sinodico (29,5 g), più lungo dell'orbita di 27,3 giorni perché nel frattempo la Terra si muove attorno al Sole. E poiché l'orbita è inclinata di ~5°, la maggior parte dei mesi la Luna manca la linea Sole-Terra, quindi le eclissi sono rare.`,
      },
      scholar: {
        legend: `Direzione del Sole fissa a sinistra; Terra al centro; Luna su orbita circolare con l'emisfero solare illuminato. Inserto = aspetto geocentrico. Frazione illuminata \\(k=\\tfrac{1}{2}(1-\\cos\\theta)\\) con \\(\\theta\\) l'angolo di fase Sole-Terra-Luna.`,
        try: `Spazza [[day]] e conferma la sequenza delle fasi e la simmetria tra crescente e calante. Nota che il modello mostra solo la fase geometrica — non l'impennata di luminosità in opposizione né la librazione.`,
        notice: `<b>La geometria è esatta, ma la luminosità lunare reale non è lineare in \\(k\\).</b> L'albedo della Luna è ~0,12 e vicino alla piena aumenta più di quanto la sola area preveda (l'effetto di opposizione). Sovrapponi la precessione dei nodi di 18,6 anni e l'eccentricità dell'orbita (librazione) e hai l'intero apparato dietro la previsione delle eclissi e il ciclo di Saros.`,
      },
    },
    protein: {
      junior: {
        legend: `La riga di lettere è l'<b>mRNA</b> — la ricetta. La forma arrotondata che scorre lungo di essa è il <b>ribosoma</b>, che legge tre lettere (un <b>codone</b>) alla volta. Ogni codone aggiunge una perlina colorata — un <b>amminoacido</b> — alla catena crescente sotto. Quella catena è la proteina.`,
        try: `Premi [[play]] e guarda muoversi il ribosoma. Leggi ogni codone di tre lettere e la perlina che aggiunge. Quale codone speciale lo fa fermare?`,
        notice: `<b>Tre lettere nominano una perlina, e la catena cresce di una perlina per codone finché un codone di STOP non la termina.</b> Solo quattro lettere, lette a tre a tre, compitano ogni proteina che il tuo corpo costruisce — lo stesso codice semplice in ogni essere vivente sulla Terra.`,
      },
      student: {
        legend: `L'mRNA è letto 5'→3' in <em>codoni</em> non sovrapposti. Il ribosoma (forma arrotondata) traduce ogni codone in un amminoacido tramite un tRNA corrispondente; la catena sotto è il polipeptide crescente. Le pill nominano il codone corrente → amminoacido e la lunghezza della catena.`,
        try: `Premi [[play]] e segui [[codon]] mentre la traduzione procede dall'inizio AUG al codone di stop. Conta come [[len]] cresce di un residuo per codone.`,
        notice: `<b>Ogni codone mappa esattamente un amminoacido; AUG inizia, e UAA/UAG/UGA fermano.</b> Con \\(4^3=64\\) codoni per 20 amminoacidi il codice è ridondante, così più codoni condividono un amminoacido. Questa è la traduzione — la seconda metà del dogma centrale, DNA → RNA → proteina.`,
      },
      scholar: {
        legend: `Traduzione codone per codone di un mRNA. La decodifica si basa sull'appaiamento codone-anticodone, con il <em>vacillamento</em> (wobble) della terza base che permette a un tRNA di leggere codoni sinonimi. Le pill mostrano codone → amminoacido e lunghezza della catena; l'allungamento procede finché un fattore di rilascio non legge un codone di stop.`,
        try: `Fai girare [[play]] e nota dove codoni sinonimi darebbero lo stesso amminoacido, e come il frame di lettura è fissato dall'inizio AUG — uno spostamento di una base scombinerebbe tutto a valle.`,
        notice: `<b>Il frame fissato ad AUG è tutto: la traduzione è rigorosamente a triplette e non sovrapposta, così un'inserzione o delezione causa uno slittamento di frame.</b> La fedeltà (~1 errore su 10⁴) viene dal proofreading cinetico, e il legame peptidico è forgiato dall'RNA ribosomiale — il ribosoma è un ribozima, una reliquia del mondo a RNA.`,
      },
    },
    pendulum: {
      junior: {
        legend: `Il punto appeso al filo è il <b>pendolo</b>. Oscilla da un lato all'altro, e l'arco tenue mostra il percorso che spazza. La pill conta il <b>tempo per un'oscillazione completa</b> — di là e ritorno.`,
        try: `Metti [[amp]] ampia e leggi [[per]]. Ora trascina [[amp]] molto più piccola. Il tempo per oscillazione cambia molto? Poi raddoppia [[len]] e guarda [[per]].`,
        notice: `<b>Cambiare quanto oscilla non cambia quasi il tempo — ma allungare il filo lo rallenta chiaramente.</b> È il segreto del pendolo: il ritmo è fissato quasi solo dalla <em>lunghezza</em>, non da quanto ampia è l'oscillazione né da quanto pesa il peso. Filo più lungo, oscillazione più lenta.`,
      },
      student: {
        legend: `Pendolo di lunghezza \\(L\\) che oscilla con ampiezza \\(\\theta_0\\). L'arco è il suo percorso; le pill leggono il periodo \\(T\\) e la frequenza \\(f\\). Il moto è (quasi-)armonico semplice, \\(\\theta(t)=\\theta_0\\cos(\\omega t)\\).`,
        try: `Tieni [[amp]] piccola e quadruplica [[len]] da 0,5 a 2,0 — [[per]] raddoppia esattamente? Poi tieni [[len]] e spingi [[amp]] fino a 70°, guardando [[per]] salire.`,
        notice: `<b>Quadruplicare \\(L\\) raddoppia \\(T\\), perché \\(T = 2\\pi\\sqrt{L/g}\\) — la radice quadrata.</b> Massa e ampiezza sono assenti da quella formula, ed è per questo che le piccole oscillazioni sono isocrone. Spingi però l'ampiezza in grande e l'approssimazione dei piccoli angoli si sfilaccia: \\(T\\) cresce di circa \\(\\theta_0^2/16\\), la correzione che puoi vedere comparire.`,
      },
      scholar: {
        legend: `Lunghezza \\(L\\), ampiezza \\(\\theta_0\\). Il peso obbedisce a \\(\\ddot\\theta + (g/L)\\sin\\theta = 0\\); la simulazione usa il periodo corretto per l'ampiezza \\(T = T_0(1+\\theta_0^2/16)\\) con \\(T_0 = 2\\pi\\sqrt{L/g}\\). Le pill leggono \\(T\\) e \\(f = 1/T\\).`,
        try: `Registra [[per]] contro [[len]] a [[amp]] piccola fissa e controlla la pendenza di \\(\\log T\\) contro \\(\\log L\\). Poi fissa [[len]] e spazza [[amp]] da 10° a 80°, seguendo quanto \\(T\\) si scosta da \\(T_0\\).`,
        notice: `<b>La pendenza log-log è \\(1/2\\) (quindi \\(T\\propto\\sqrt L\\)), e \\(T\\) sale sopra \\(T_0\\) al crescere dell'ampiezza.</b> Il periodo esatto è l'integrale ellittico \\(T = 4\\sqrt{L/g}\\,K(\\sin\\tfrac{\\theta_0}{2})\\); il primo termine della sua espansione, \\(\\theta_0^2/16\\), è ciò che la simulazione applica — 1,7% a 30°, ~18% a 90°. L'isocronismo è rigorosamente un limite di piccolo angolo.`,
      },
    },
    optics: {
      junior: {
        legend: `La freccia blu a sinistra è l'<b>oggetto</b>. La forma alta al centro è una <b>lente</b>. Le linee colorate sono <b>raggi di luce</b> che escono dalla cima dell'oggetto; dove si incrociano di nuovo a destra, la lente ricostruisce l'immagine — quella è l'<b>immagine</b> (disegnata in arancione).`,
        try: `Fai scorrere [[obj]] così l'oggetto è lontano dalla lente e guarda l'immagine arancione. Ora trascinalo lentamente più vicino. Cosa succede all'immagine nell'istante in cui l'oggetto si avvicina molto alla lente?`,
        notice: `<b>Lontano, l'immagine è piccola e capovolta; da vicino, si raddrizza e diventa enorme.</b> Quel passaggio è esattamente la differenza tra una macchina fotografica (oggetto lontano, immagine piccola e rovesciata) e una lente d'ingrandimento (oggetto vicino, immagine grande e dritta). La lente fa entrambe — dipende solo da quanto vicino la tieni.`,
      },
      student: {
        legend: `Freccia blu = oggetto a distanza \\(d_o\\). Lente verticale con i fuochi segnati a \\(\\pm f\\). Tre raggi principali partono dalla punta dell'oggetto: parallelo-poi-per-il-fuoco, dritto-per-il-centro, e per-il-fuoco-vicino-poi-parallelo. Si incontrano nell'immagine, distanza \\(d_i\\); le pill leggono \\(d_i\\), \\(m\\) e se l'immagine è reale o virtuale.`,
        try: `Metti [[foc]] a circa 60 e spazza [[obj]] da 300 giù a 40. Guarda [[img]] e [[mag]] mentre l'oggetto attraversa \\(d_o = f\\).`,
        notice: `<b>Quando \\(d_o \\to f\\), l'immagine schizza all'infinito e \\(m\\) esplode.</b> L'equazione delle lenti sottili \\(1/f = 1/d_o + 1/d_i\\) fa divergere \\(d_i\\) quando \\(d_o = f\\), così i raggi lasciano la lente paralleli e non formano immagine finita. Attraversa dentro \\(f\\) e \\(d_i\\) diventa negativo: l'immagine diventa <em>virtuale</em>, dritta e ingrandita — il regime della lente d'ingrandimento.`,
      },
      scholar: {
        legend: `Oggetto a \\(d_o\\); lente convergente sottile di lunghezza focale \\(f\\) con fuochi a \\(\\pm f\\). I tre raggi principali costruiscono l'immagine a \\(d_i\\) data da \\(1/f = 1/d_o + 1/d_i\\), con ingrandimento trasversale \\(m = -d_i/d_o\\). Le immagini reali (\\(d_i>0\\)) appaiono a destra della lente; le virtuali (\\(d_i<0\\)) a sinistra, tratteggiate.`,
        try: `Fissa [[foc]] e registra coppie \\((d_o, d_i)\\) su tutto l'intervallo, poi verifica se \\(1/d_o + 1/d_i\\) resta costante. Nota il segno di [[mag]] quando [[obj]] passa per \\(f\\) e per \\(2f\\).`,
        notice: `<b>\\(1/d_o + 1/d_i = 1/f\\) vale esattamente, e \\(m = -d_i/d_o\\) segue la geometria.</b> A \\(d_o = 2f\\), \\(m=-1\\) (stessa dimensione, rovesciata); per \\(f<d_o<2f\\) l'immagine reale è ingrandita (proiettore); per \\(d_o<f\\), \\(d_i<0\\) dà un'immagine virtuale dritta. La simulazione risolve \\(d_i = d_o f/(d_o-f)\\) a ogni frame — il polo a \\(d_o=f\\) è l'immagine divergente che hai appena visto.`,
      },
    },
    blackholes: {
      junior: {
        legend: `Il disco nero è l'<b>orizzonte degli eventi</b> — attraversalo e nulla, nemmeno la luce, può tornare indietro. Il punto in orbita è un orologio che osserviamo da lontano. [[dilat]] dice quanto in fretta batte rispetto al tuo, e [[z]] mostra quanto la sua luce viene stirata uscendo.`,
        try: `Metti [[dist]] a 20 (lontano) e leggi [[dilat]]. Ora abbassalo a 2, proprio contro l'orizzonte, e rileggilo.`,
        notice: `<b>Lontano l'orologio batte quasi come il tuo (0,975×); vicino rallenta a 0,707× — perde quasi un terzo di ogni secondo.</b> Il tempo stesso scorre più lento vicino alle cose pesanti. Non è un trucco della luce né un orologio rotto: chi cade dentro invecchia davvero meno di te. Nulla nella vita quotidiana ti prepara a questo, eppure il navigatore del tuo telefono corregge esattamente questo effetto ogni secondo, o ti manderebbe fuori strada di chilometri.`,
      },
      student: {
        legend: `Un buco nero di Schwarzschild di massa [[mass]]. [[dist]] posiziona una particella test in unità del raggio di Schwarzschild \\(r_S\\); [[dilat]] dà \\(\\sqrt{1-r_S/r}\\) e [[z]] il redshift gravitazionale \\((1-r_S/r)^{-1/2}-1\\).`,
        try: `Registra [[dilat]] e [[z]] a [[dist]] = 20, 6 e 2. Poi ragiona su cosa fanno entrambe le grandezze quando [[dist]] si avvicina a 1, e verifica se [[mass]] le cambia a [[dist]] fisso.`,
        notice: `<b>Entrambe divergono a \\(r = r_S\\): la dilatazione del tempo va a zero e il redshift a infinito — eppure nessuna dipende dalla massa del buco a \\(r/r_S\\) fisso.</b> L'orizzonte non è un luogo dove la fisica si rompe; è dove la velocità di fuga raggiunge \\(c\\), e un osservatore in caduta libera non nota nulla di speciale attraversandolo. La divergenza è un artefatto di coordinate del sistema dell'osservatore lontano. Nota che \\(r_S = 2GM/c^2\\) è <em>lineare</em> nella massa, così un buco supermassiccio ha un orizzonte dolce: le forze mareali a \\(r_S\\) scalano come \\(M^{-2}\\), e attraverseresti l'orizzonte di Sagittarius A* del tutto intatto.`,
      },
      scholar: {
        legend: `Geometria di Schwarzschild, \\(ds^2 = -(1-r_S/r)c^2dt^2 + (1-r_S/r)^{-1}dr^2 + r^2d\\Omega^2\\). [[dilat]] è il rapporto tra tempo proprio e coordinato per un osservatore statico; [[z]] il corrispondente redshift gravitazionale. L'ISCO a \\(3r_S\\) non è segnato.`,
        try: `Esamina il comportamento quando [[dist]] si avvicina a 1 e chiediti se la divergenza sia fisica. Poi ricava dove un'orbita circolare smette di essere stabile e confronta quel raggio con l'orizzonte.`,
        notice: `<b>La divergenza è puramente una patologia di coordinate — gli invarianti di curvatura restano finiti a \\(r_S\\) ed esplodono solo a \\(r=0\\).</b> Le coordinate di Kruskal–Szekeres la rimuovono del tutto, e l'osservatore in caduta attraversa in tempo proprio finito. Il raggio fisicamente rilevante per l'accrescimento è l'<b>ISCO</b> a \\(3r_S\\) (Schwarzschild), entro cui non esiste orbita circolare stabile — questo fissa l'efficienza del disco di accrescimento al 5,7%, che sale al 42% per un buco di Kerr in rotazione massima, ed è perché i quasar surclassano le galassie che li ospitano. Il vero problema aperto sta all'orizzonte: la radiazione di Hawking è termica, \\(T_H = \\hbar c^3/8\\pi GMk_B\\), il che sembra distruggere l'informazione, e il paradosso che ne deriva resta irrisolto.`,
      },
    },
    solarsystem: {
      junior: {
        legend: `Il nostro Sistema Solare visto dall'alto, con il Sole al centro e gli otto pianeti che girano. Clicca un pianeta per selezionarlo: [[sel]] lo nomina, [[dist]] dà la sua distanza dal Sole e [[period]] quanto dura il suo anno. Le distanze sono compresse così i pianeti interni non si accavallano.`,
        try: `Clicca Mercurio e annota [[dist]] e [[period]]. Ora clicca Nettuno e fai lo stesso. Nettuno è circa 77 volte più lontano — il suo anno è 77 volte più lungo?`,
        notice: `<b>No — è circa 690 volte più lungo. Mercurio impiega 0,24 anni, Nettuno 165.</b> I pianeti lontani hanno più strada da fare <em>e</em> si muovono più lentamente, così i loro anni si allungano molto più in fretta di quanto la sola distanza suggerirebbe. La stessa regola governa ogni cosa in orbita, da questi pianeti alle lune di Giove ai satelliti sopra di noi. Guarda i pianeti muoversi: gli interni sfrecciano mentre gli esterni arrancano appena.`,
      },
      student: {
        legend: `Gli otto pianeti su una scala radiale compressa logaritmicamente (così le dimensioni orbitali non sono in scala). [[dist]] è il semiasse maggiore in UA e [[period]] il periodo orbitale in anni; [[speed]] controlla la velocità dell'animazione.`,
        try: `Raccogli [[dist]] e [[period]] per quattro pianeti, poi verifica \\(T^2/a^3\\) per ciascuno. Il rapporto resta costante in tutto il sistema?`,
        notice: `<b>\\(T^2/a^3 = 1\\) per ogni pianeta, da Mercurio a Nettuno — una costante su un intervallo di distanze di 77 volte.</b> È la <b>terza legge di Keplero</b>, e Newton mostrò poi che segue direttamente da una gravità inversa al quadrato: \\(T^2 = \\frac{4\\pi^2}{GM_\\odot}a^3\\). Poiché la costante dipende solo dalla massa del Sole, misurare l'orbita di un pianeta qualsiasi pesa il Sole. La stessa relazione applicata alle stelle che orbitano il centro galattico rivela Sagittarius A*, e applicata alle galassie ha svelato la massa mancante che chiamiamo materia oscura.`,
      },
      scholar: {
        legend: `Orbite kepleriane con semiassi maggiori e periodi osservati, disegnate su una scala radiale compressa e come cerchi complanari — eccentricità e inclinazione sono soppresse.`,
        try: `Verifica \\(T^2 \\propto a^3\\) tra i pianeti, poi considera con quanta precisione vale. Stima cosa dovrebbe essere vero perché i residui rivelino qualcosa che il modello non può mostrare.`,
        notice: `<b>La legge di Keplero è esatta solo per il problema a due corpi; i residui sono dove la fisica vive davvero.</b> Le perturbazioni pianeta–pianeta richiesero correzioni newtoniane che portarono direttamente alla previsione di Nettuno nel 1846, e i 43″/secolo residui nell'avanzamento del perielio di Mercurio — inspiegabili nella gravità newtoniana — divennero la prima conferma della relatività generale. Oltre i tre corpi non c'è alcuna soluzione in forma chiusa, e le integrazioni di Laskar mostrano che il Sistema Solare interno è caotico con un tempo di Lyapunov vicino a 5 milioni di anni: le posizioni diventano imprevedibili oltre i ~100 milioni di anni, e c'è una probabilità piccola ma non nulla che l'orbita di Mercurio si destabilizzi prima che il Sole lasci la sequenza principale.`,
      },
    },
    eclipse: {
      junior: {
        legend: `Vista dall'alto del Sole (a sinistra), della Terra e della Luna sulla sua orbita. I coni grigi sono le ombre. Sposta la Luna e allinea la sua orbita per far cadere un'ombra dove causa un'eclissi.`,
        try: `Metti [[moon]] nel punto di Luna nuova (tra la Terra e il Sole). Ora cambia [[node]] finché l'ombra colpisce la Terra. Cosa dice [[ecl]]?`,
        notice: `<b>Ottieni un'eclissi solo quando l'allineamento è quasi perfetto.</b> La maggior parte delle posizioni di [[node]] manda l'ombra della Luna sopra o sotto la Terra — un buco. Quella piccola inclinazione è esattamente il motivo per cui non abbiamo un'eclissi ogni mese, anche se ogni mese c'è la Luna nuova.`,
      },
      student: {
        legend: `Vista laterale lungo la linea Sole-Terra. Un'eclissi solare è l'ombra della Luna che colpisce la Terra con la Luna nuova; un'eclissi lunare è la Luna che entra nell'ombra della Terra con la Luna piena. [[node]] regola quanto l'orbita inclinata della Luna attraversa l'eclittica.`,
        try: `Metti [[moon]] su Luna nuova e scorri [[node]] per trovare la stretta finestra in cui [[ecl]] passa a "Solar eclipse". Poi metti [[moon]] su Luna piena e fai lo stesso per un'eclissi lunare.`,
        notice: `<b>Un'eclissi richiede la sizigia E l'attraversamento di un nodo allo stesso tempo.</b> L'inclinazione di ~5° della Luna fa sì che per la maggior parte delle posizioni del nodo l'ombra manchi del tutto. Solo vicino a un nodo — un paio di volte l'anno, le "stagioni delle eclissi" — una Luna nuova dà un'eclissi solare e una Luna piena una lunare.`,
      },
      scholar: {
        legend: `Uno schema della geometria Sole-Terra-Luna con i coni d'ombra. L'altezza della Luna sopra l'eclittica segue la sua inclinazione di ~5°; l'allineamento è possibile solo entro i limiti eclittici di un nodo.`,
        try: `Traccia la condizione di eclissi: tieni [[moon]] su Luna nuova e varia [[node]] per delimitare il limite eclittico in cui la totalità diventa possibile, poi ripeti su Luna piena per il limite lunare, più ampio.`,
        notice: `<b>La finestra è il limite eclittico — solo pochi gradi di longitudine del nodo.</b> Poiché la linea dei nodi regredisce in 18,6 anni, le stagioni delle eclissi anticipano di ~19 giorni l'anno, e dopo un Saros (223 mesi sinodici) l'intera geometria si ripete. La corrispondenza tra le dimensioni angolari di Sole e Luna è ciò che permette la totalità invece di un anello anulare permanente.`,
      },
    },
    meteors: {
      junior: {
        legend: `Il cielo notturno, con le stelle cadenti che sfrecciano da un punto — il radiante. Il piccolo schema mostra la Terra che attraversa la scia di polvere di una cometa: più a fondo nella scia, più meteore.`,
        try: `Trascina [[pos]] lentamente lungo l'anno e guarda le scie passare da un filo a un diluvio e viceversa. Quando [[rate]] è più alto?`,
        notice: `<b>Lo spettacolo culmina quando la Terra è più a fondo nella scia di polvere della cometa.</b> Fuori da quella finestra il cielo è tranquillo — solo qualche meteora casuale. Per questo uno sciame come le Perseidi arriva alle stesse date ogni anno: è quando la nostra orbita attraversa la scia.`,
      },
      student: {
        legend: `Un cielo notturno con meteore che si irradiano dal radiante, più un inserto orbitale che mostra la Terra attraversare il flusso di detriti di una cometa. [[rate]] è il numero di meteore all'ora; [[dens]] regola quanto è ricca la scia.`,
        try: `Sposta [[pos]] attraverso il picco e guarda [[rate]] salire e scendere a campana. Poi alza [[dens]] per vedere come una scia più ricca — un filamento fresco — alza tutto il picco.`,
        notice: `<b>Il tasso sale e scende man mano che la Terra entra ed esce dal cuore più denso del flusso, con il picco al centro.</b> Tutte le meteore condividono l'orbita della cometa, così sembrano aprirsi a ventaglio da un unico radiante. Una scia più densa, o un filamento giovane, produce i picchi e le tempeste che rendono certe annate molto migliori di altre.`,
      },
      scholar: {
        legend: `Un modello di sciame meteorico: l'attività segue l'attraversamento da parte della Terra di un flusso di detriti cometari (un profilo di densità a campana), con scie disegnate dal radiante. [[dens]] scala la densità spaziale del flusso.`,
        try: `Mappa il profilo di attività muovendo [[pos]] a gradini attraverso il picco, poi alza [[dens]] per simulare la Terra che incontra una scia di polvere giovane e compatta invece del flusso di fondo disperso.`,
        notice: `<b>Il profilo a campana è la Terra che taglia un flusso la cui densità cala dal cuore.</b> I flussi reali hanno sottostruttura — filamenti distinti persi in diversi ritorni della cometa — ed è per questo che i modelli che tracciano i singoli filamenti possono prevedere i picchi con precisione oraria. I conteggi osservati vanno comunque corretti al tasso orario zenitale per altezza del radiante e oscurità del cielo.`,
      },
    },
    photosynthesis: {
      junior: {
        legend: `Una pianta acquatica al sole. La luminosità del Sole è la luce che imposti, e le bolle che salgono dalla pianta sono l'<b>ossigeno</b> che produce. Più fotosintesi significa più bolle.`,
        try: `Alza al massimo la [[light]] ma tieni bassa la [[co2]]. Tante bolle? Ora alza anche la [[co2]]. Cosa fa la [[rate]]?`,
        notice: `<b>La luce da sola non basta - alla pianta serve anche l'anidride carbonica.</b> Alzane una tenendo bassa l'altra e la velocità si blocca: comanda ciò che scarseggia di più. Quell'ingrediente più scarso è il fattore limitante, mostrato in [[limit]].`,
      },
      student: {
        legend: `La velocità di fotosintesi di un'elodea, mostrata dalle bolle di ossigeno che rilascia. [[rate]] è la velocità modellata; [[limit]] indica quale ingrediente la sta limitando (la velocità segue il minimo dei fattori).`,
        try: `Tieni bassa la [[co2]] e alza la [[light]] da 0 a 100 - guarda la [[rate]] salire e poi appiattirsi. Poi alza la [[co2]] e vedi salire il tetto.`,
        notice: `<b>La velocità sale con un fattore finché un altro diventa limitante, poi va in plateau.</b> Con poca luce limita la luce; con molta luce subentra la CO₂ (o la temperatura). È proprio per questo che le serre pompano CO₂: diventa il fattore limitante quando la luce è abbondante.`,
      },
      scholar: {
        legend: `Un modello a fattori limitanti della velocità fotosintetica, \\(\\text{velocità} \\propto \\min(f_{\\text{luce}}, f_{CO_2})\\) con risposta saturante a ciascun ingresso. Le bolle visualizzano lo sviluppo di \\(O_2\\); [[limit]] segnala il vincolo dominante.`,
        try: `Traccia la curva di risposta alla luce: tieni fissa la [[co2]] e alza la [[light]] a gradini, notando dove la [[rate]] satura. Poi ripeti con [[co2]] più alta e confronta i due plateau.`,
        notice: `<b>Ogni fattore dà una risposta saturante (tipo Michaelis) e la velocità complessiva segue il più piccolo.</b> Sotto saturazione le reazioni alla luce limitano l'apporto di ATP/NADPH; sopra, la fissazione della CO₂ nel ciclo di Calvin (rubisco) limita la resa. Il modello omette temperatura e fotorespirazione, che nelle foglie reali piegano e infine abbassano il plateau ad alta luce.`,
      },
    },
  },
  labels: {
    gravity: {
      junior:  { radius: 'Distanza dalla stella', mass: 'Massa stella',     period: 'Durata anno', speed: 'Velocità' },
      student: { radius: 'Raggio orbita',         mass: 'Massa stella',     period: 'Periodo (T)', speed: 'Velocità orbitale (v)' },
      scholar: { radius: 'Raggio orbita (r)',     mass: 'Massa stella (M)', period: 'Periodo (T)', speed: 'Velocità orbitale (v)' },
    },
    projectile: {
      junior:  { angle: 'Angolo di lancio', speed: 'Velocità di lancio',    launch: 'Lancia di nuovo', range: 'Dove atterra', peak: 'Punto più alto',  time: 'Tempo in aria' },
      student: { angle: 'Angolo (θ)',       speed: 'Velocità (v₀)',         launch: 'Lancia',          range: 'Gittata (R)',  peak: 'Altezza max (H)', time: 'Tempo di volo (T)' },
      scholar: { angle: 'Angolo (θ)',       speed: 'Velocità iniziale (v₀)',launch: 'Lancia',          range: 'Gittata (R)',  peak: 'Altezza apice (H)',time: 'Tempo di volo (T)' },
    },
    newton: {
      junior:  { force: 'Forza di spinta',    mass: 'Massa',      fric: 'Attrito',     net: 'Spinta totale',        accel: 'Quanto accelera',   vel: 'Velocità' },
      student: { force: 'Forza applicata (N)',mass: 'Massa (kg)', fric: 'Attrito (μ)', net: 'Forza netta',          accel: 'Accelerazione (a)', vel: 'Velocità (v)' },
      scholar: { force: 'Forza applicata (N)',mass: 'Massa (kg)', fric: 'Attrito (μ)', net: 'Forza netta (F net)',  accel: 'Accelerazione (a)', vel: 'Velocità (v)' },
    },
    circuits: {
      junior:  { volt: 'Tensione batteria', res: 'Resistenza',     cur: 'Corrente (flusso)', pow: 'Luminosità (potenza)' },
      student: { volt: 'Tensione (V)',      res: 'Resistenza (R)', cur: 'Corrente (I)',      pow: 'Potenza (P)' },
      scholar: { volt: 'Tensione (V)',      res: 'Resistenza (R)', cur: 'Corrente (I)',      pow: 'Potenza (P)' },
    },
    states: {
      junior:  { temp: 'Temperatura', state: 'Stato della materia', tval: 'Come si percepisce' },
      student: { temp: 'Temperatura', state: 'Stato',               tval: 'Come si percepisce' },
      scholar: { temp: 'Temperatura', state: 'Stato',               tval: 'Come si percepisce' },
    },
    waves: {
      junior:  { freq: 'Frequenza 2', phase: 'Sfasamento', type: 'Interferenza', amp: 'Altezza onda' },
      student: { freq: 'Frequenza 2', phase: 'Sfasamento', type: 'Interferenza', amp: 'Ampiezza max' },
      scholar: { freq: 'Frequenza 2', phase: 'Sfasamento', type: 'Interferenza', amp: 'Ampiezza max' },
    },
    thermo: {
      junior:  { temp: 'Temperatura (K)', num: 'Particelle', hits: 'Urti/s sulle pareti', speed: 'Velocità media', press: 'Pressione' },
      student: { temp: 'Temperatura (K)', num: 'Particelle', hits: 'Urti/s sulle pareti', speed: 'Velocità media', press: 'Pressione' },
      scholar: { temp: 'Temperatura (K)', num: 'Particelle', hits: 'Urti/s sulle pareti', speed: 'Velocità media', press: 'Pressione' },
    },
    particles: {
      junior:  { energy: 'Energia fascio (TeV)', collide: 'Collidi!', count: 'Collisioni', e: 'Energia' },
      student: { energy: 'Energia fascio (TeV)', collide: 'Collidi!', count: 'Collisioni', e: 'Energia' },
      scholar: { energy: 'Energia fascio (TeV)', collide: 'Collidi!', count: 'Collisioni', e: 'Energia' },
    },
    prob: {
      junior:  { drop: 'Lascia cadere palline', reset: 'Reset', rows: 'File di pioli', total: 'Palline cadute',          mean: 'Casella media' },
      student: { drop: 'Lascia cadere palline', reset: 'Reset', rows: 'File di pioli', total: 'Dimensione campione (N)', mean: 'Indice casella media' },
      scholar: { drop: 'Lascia cadere palline', reset: 'Reset', rows: 'File di pioli', total: 'Dimensione campione (N)', mean: 'Indice casella media' },
    },
    fractal: {
      junior:  { detail: 'Dettaglio (iterazioni)', zoom: 'Livello di zoom', reset: 'Reimposta vista' },
      student: { detail: 'Dettaglio (iterazioni)', zoom: 'Livello di zoom', reset: 'Reimposta vista' },
      scholar: { detail: 'Dettaglio (iterazioni)', zoom: 'Livello di zoom', reset: 'Reimposta vista' },
    },
    calculus: {
      junior:  { x: 'posizione x', rects: 'Rettangoli di Riemann', deriv: 'Pendenza qui', integ: 'Area finora' },
      student: { x: 'posizione x', rects: 'Rettangoli di Riemann', deriv: 'f′(x)',        integ: '∫f dx (−3→x)' },
      scholar: { x: 'posizione x', rects: 'Rettangoli di Riemann', deriv: 'f′(x)',        integ: '∫ da −3 a x' },
    },
    graphs: {
      junior:  { nodes: 'Nodi', hubs: 'Connessioni hub', spread: 'Propaga segnale', reset: 'Nuovo grafo', reached: 'Raggiunti', steps: 'Passi', hubcount: 'Hub' },
      student: { nodes: 'Nodi', hubs: 'Connessioni hub', spread: 'Propaga segnale', reset: 'Nuovo grafo', reached: 'Raggiunti', steps: 'Passi', hubcount: 'Hub' },
      scholar: { nodes: 'Nodi', hubs: 'Connessioni hub', spread: 'Propaga segnale', reset: 'Nuovo grafo', reached: 'Raggiunti', steps: 'Passi', hubcount: 'Hub' },
    },
    trig: {
      junior:  { angle: 'Angolo',   play: 'Play', sin: 'Altezza (sin)', cos: 'Orizzontale (cos)' },
      student: { angle: 'Angolo θ', play: 'Play', sin: 'sin θ',         cos: 'cos θ' },
      scholar: { angle: 'Angolo θ', play: 'Play', sin: 'sin θ',         cos: 'cos θ' },
    },
    life: {
      junior:  { pause: 'Pausa', clear: 'Pulisci', random: 'Casuale', glider: 'Aliante', gen: 'Generazione', alive: 'Cellule vive' },
      student: { pause: 'Pausa', clear: 'Pulisci', random: 'Casuale', glider: 'Aliante', gen: 'Generazione', alive: 'Cellule vive' },
      scholar: { pause: 'Pausa', clear: 'Pulisci', random: 'Casuale', glider: 'Aliante', gen: 'Generazione', alive: 'Cellule vive' },
    },
    dna: {
      junior:  { speed: 'Velocità replicazione', reset: 'Reset', pairs: 'Coppie di basi copiate', errors: 'Mutazioni' },
      student: { speed: 'Velocità replicazione', reset: 'Reset', pairs: 'Coppie di basi copiate', errors: 'Mutazioni' },
      scholar: { speed: 'Velocità replicazione', reset: 'Reset', pairs: 'Coppie di basi copiate', errors: 'Mutazioni' },
    },
    evolution: {
      junior:  { sel: 'Pressione selettiva', mut: 'Tasso di mutazione', reset: 'Reset', gen: 'Generazione', fit: 'Fitness media', div: 'Diversità' },
      student: { sel: 'Pressione selettiva', mut: 'Tasso di mutazione', reset: 'Reset', gen: 'Generazione', fit: 'Fitness media', div: 'Diversità' },
      scholar: { sel: 'Pressione selettiva', mut: 'Tasso di mutazione', reset: 'Reset', gen: 'Generazione', fit: 'Fitness media', div: 'Diversità' },
    },
    ecosystem: {
      junior:  { growth: 'Tasso di crescita piante', pred: 'Efficienza predatori', reset: 'Reset', plants: '🌿 Piante', herb: '🐇 Erbivori', preds: '🦊 Predatori' },
      student: { growth: 'Tasso di crescita piante', pred: 'Efficienza predatori', reset: 'Reset', plants: '🌿 Piante', herb: '🐇 Erbivori', preds: '🦊 Predatori' },
      scholar: { growth: 'Tasso di crescita piante', pred: 'Efficienza predatori', reset: 'Reset', plants: '🌿 Piante', herb: '🐇 Erbivori', preds: '🦊 Predatori' },
    },
    cell: {
      junior:  { salt: 'Sale a destra',            reset: 'Reset', left: 'Acqua a sinistra',  right: 'Acqua a destra' },
      student: { salt: 'Soluto aggiunto (destra)', reset: 'Reset', left: 'Acqua (sinistra)',  right: 'Acqua (destra)' },
      scholar: { salt: 'Soluto aggiunto (destra)', reset: 'Reset', left: 'Acqua (sinistra)',  right: 'Acqua (destra)' },
    },
    mitosis: {
      junior:  { stage: 'Trascina tra le fasi', play: 'Play', phase: 'Fase', cells: 'Cellule' },
      student: { stage: 'Fase',                 play: 'Play', phase: 'Fase', cells: 'Cellule' },
      scholar: { stage: 'Fase',                 play: 'Play', phase: 'Fase', cells: 'Cellule' },
    },
    punnett: {
      junior:  { p1: 'Genitore 1',          p2: 'Genitore 2',          pheno: 'Aspetto (fenotipo)',  geno: 'Geni (genotipo)' },
      student: { p1: 'Genotipo genitore 1', p2: 'Genotipo genitore 2', pheno: 'Rapporto fenotipico', geno: 'Rapporto genotipico' },
      scholar: { p1: 'Genotipo genitore 1', p2: 'Genotipo genitore 2', pheno: 'Rapporto fenotipico', geno: 'Rapporto genotipico' },
    },
    sorting: {
      junior:  { size: 'Dimensione array', bubble: 'Bubble Sort', merge: 'Merge Sort', shuffle: 'Mescola', algo: 'Algoritmo', comps: 'Confronti', swaps: 'Scambi' },
      student: { size: 'Dimensione array', bubble: 'Bubble Sort', merge: 'Merge Sort', shuffle: 'Mescola', algo: 'Algoritmo', comps: 'Confronti', swaps: 'Scambi' },
      scholar: { size: 'Dimensione array', bubble: 'Bubble Sort', merge: 'Merge Sort', shuffle: 'Mescola', algo: 'Algoritmo', comps: 'Confronti', swaps: 'Scambi' },
    },
    ml: {
      junior:  { lr: 'Tasso di apprendimento', hid: 'Unità nascoste', reset: 'Reset', epoch: 'Epoca', loss: 'Errore',  acc: 'Accuratezza' },
      student: { lr: 'Tasso di apprendimento', hid: 'Unità nascoste', reset: 'Reset', epoch: 'Epoca', loss: 'Perdita', acc: 'Accuratezza' },
      scholar: { lr: 'Tasso di apprendimento', hid: 'Unità nascoste', reset: 'Reset', epoch: 'Epoca', loss: 'Perdita', acc: 'Accuratezza' },
    },
    crypto: {
      junior:  { run: 'Esegui lo scambio', reset: 'Reset', step: 'Passo', key: 'Chiave condivisa' },
      student: { run: 'Esegui scambio DH', reset: 'Reset', step: 'Passo', key: 'Chiave condivisa' },
      scholar: { run: 'Esegui scambio DH', reset: 'Reset', step: 'Passo', key: 'Chiave condivisa' },
    },
    complexity: {
      junior:  { n: 'Dimensione input n', algo: 'Algoritmo (1=O(log n) … 5=O(2ⁿ))', run: 'Esegui', ops: 'Operazioni', cls: 'Classe', nval: 'n' },
      student: { n: 'Dimensione input n', algo: 'Algoritmo (1=O(log n) … 5=O(2ⁿ))', run: 'Esegui', ops: 'Operazioni', cls: 'Classe', nval: 'n' },
      scholar: { n: 'Dimensione input n', algo: 'Algoritmo (1=O(log n) … 5=O(2ⁿ))', run: 'Esegui', ops: 'Operazioni', cls: 'Classe', nval: 'n' },
    },
    climate: {
      junior:  { co2: 'Concentrazione CO₂ (ppm)', pre: 'Preindustriale (280)', now: 'Imposta al 2024 (420)', c: 'CO₂', forcing: 'Calore extra intrappolato', dt: 'Aumento di temperatura' },
      student: { co2: 'Concentrazione CO₂ (ppm)', pre: 'Preindustriale (280)', now: 'Imposta al 2024 (420)', c: 'CO₂', forcing: 'Forzante',                    dt: 'ΔT' },
      scholar: { co2: 'Concentrazione CO₂ (ppm)', pre: 'Preindustriale (280)', now: 'Imposta al 2024 (420)', c: 'CO₂', forcing: 'Forzante',                    dt: 'ΔT' },
    },
    tectonics: {
      junior:  { speed: 'Velocità placca', type: 'Tipo di margine (1=divergente 2=trasforme 3=convergente)', quake: 'Innesca sisma', stress: 'Sforzo', time: 'Milioni di anni', event: 'Ultimo evento' },
      student: { speed: 'Velocità placca', type: 'Tipo di margine (1=divergente 2=trasforme 3=convergente)', quake: 'Innesca sisma', stress: 'Sforzo', time: 'Myr',             event: 'Ultimo evento' },
      scholar: { speed: 'Velocità placca', type: 'Tipo di margine (1=divergente 2=trasforme 3=convergente)', quake: 'Innesca sisma', stress: 'Sforzo', time: 'Myr',             event: 'Ultimo evento' },
    },
    ocean: {
      junior:  { wind: 'Forza del vento', warm: 'Riscaldamento oceano', flow: 'Portata', temp: 'Temp. superf.', amoc: 'Nastro trasportatore oceanico' },
      student: { wind: 'Forza del vento', warm: 'Riscaldamento oceano', flow: 'Portata', temp: 'Temp. superf.', amoc: 'AMOC' },
      scholar: { wind: 'Forza del vento', warm: 'Riscaldamento oceano', flow: 'Portata', temp: 'Temp. superf.', amoc: 'AMOC' },
    },
    volcano: {
      junior:  { visc: 'Viscosità del magma (1=basalto 10=riolite)', recharge: 'Tasso di ricarica magma', erupt: 'Forza eruzione', pres: 'Pressione camera', vei: 'Dimensione esplosione', phase: 'Fase' },
      student: { visc: 'Viscosità del magma (1=basalto 10=riolite)', recharge: 'Tasso di ricarica magma', erupt: 'Forza eruzione', pres: 'Pressione camera', vei: 'VEI',                   phase: 'Fase' },
      scholar: { visc: 'Viscosità del magma (1=basalto 10=riolite)', recharge: 'Tasso di ricarica magma', erupt: 'Forza eruzione', pres: 'Pressione camera', vei: 'VEI',                   phase: 'Fase' },
    },
    seasons: {
      junior:  { month: 'Mese',           nh: 'Metà nord',    sh: 'Metà sud' },
      student: { month: "Mese dell'anno", nh: 'Emisfero nord', sh: 'Emisfero sud' },
      scholar: { month: "Mese dell'anno", nh: 'Emisfero nord', sh: 'Emisfero sud' },
    },
    chem: {
      junior:  { temp: 'Temperatura', reset: 'Reset', mols: 'Molecole', t: 'Temp' },
      student: { temp: 'Temperatura', reset: 'Reset', mols: 'Molecole', t: 'Temp' },
      scholar: { temp: 'Temperatura', reset: 'Reset', mols: 'Molecole', t: 'Temp' },
    },
    electrochem: {
      junior:  { load: 'Carico (velocità scarica)', discharge: 'Scarica', charge: 'Carica', reset: 'Reset', volts: 'Tensione', soc: 'Livello batteria',   mode: 'Modalità' },
      student: { load: 'Carico (velocità scarica)', discharge: 'Scarica', charge: 'Carica', reset: 'Reset', volts: 'Tensione', soc: 'Livello di carica',  mode: 'Modalità' },
      scholar: { load: 'Carico (velocità scarica)', discharge: 'Scarica', charge: 'Carica', reset: 'Reset', volts: 'Tensione', soc: 'Stato di carica',    mode: 'Modalità' },
    },
    kinetics: {
      junior:  { temp: 'Temperatura (K)', ea: 'Energia di attivazione (kJ/mol)', cat: 'Aggiungi catalizzatore', reset: 'Reset', react: 'Reagente rimasto', prod: 'Prodotto formato', rate: 'Velocità' },
      student: { temp: 'Temperatura (K)', ea: 'Energia di attivazione (kJ/mol)', cat: 'Aggiungi catalizzatore', reset: 'Reset', react: '[Reagente]',       prod: '[Prodotto]',       rate: 'Velocità' },
      scholar: { temp: 'Temperatura (K)', ea: 'Energia di attivazione (kJ/mol)', cat: 'Aggiungi catalizzatore', reset: 'Reset', react: '[Reagente]',       prod: '[Prodotto]',       rate: 'Velocità' },
    },
    organic: {
      junior:  { sel: 'Selettore molecola', mol: 'Molecola', atoms: 'Atomi', type: 'Tipo' },
      student: { sel: 'Selettore molecola', mol: 'Molecola', atoms: 'Atomi', type: 'Tipo' },
      scholar: { sel: 'Selettore molecola', mol: 'Molecola', atoms: 'Atomi', type: 'Tipo' },
    },
    acids: {
      junior:  { base: 'Base aggiunta',       pka: "Forza dell'acido", ph: 'pH', state: 'Acido o base?' },
      student: { base: 'Base aggiunta (mL)',   pka: 'pKₐ acido',        ph: 'pH', state: 'Natura' },
      scholar: { base: 'Titolante aggiunto (mL)', pka: 'pKₐ acido',     ph: 'pH', state: 'Regione' },
    },
    periodic: {
      junior:  { el: 'Elemento', trend: 'Cosa stai vedendo' },
      student: { el: 'Elemento', trend: 'Vista' },
      scholar: { el: 'Elemento', trend: 'Vista' },
    },
    balancing: {
      junior:  { next: 'Reazione successiva', bal: 'Bilanciata?', check: 'Conta atomi' },
      student: { next: 'Reazione successiva', bal: 'Bilanciata?', check: 'Conta atomi' },
      scholar: { next: 'Reazione successiva', bal: 'Bilanciata?', check: 'Conta atomi' },
    },
    astro: {
      junior:  { mass: 'Massa stella (masse solari)', reset: 'Reimposta stella', age: 'Età', stage: 'Stadio' },
      student: { mass: 'Massa stella (masse solari)', reset: 'Reimposta stella', age: 'Età', stage: 'Stadio' },
      scholar: { mass: 'Massa stella (masse solari)', reset: 'Reimposta stella', age: 'Età', stage: 'Stadio' },
    },
    cosmology: {
      junior:  { lam: 'Energia oscura Ω_Λ', mat: 'Materia Ω_m (%)', reset: 'Reset', age: 'Età (Gyr)', h: 'Tasso di espansione', z: 'Redshift z' },
      student: { lam: 'Energia oscura Ω_Λ', mat: 'Materia Ω_m (%)', reset: 'Reset', age: 'Età (Gyr)', h: 'H(z)',                 z: 'Redshift z' },
      scholar: { lam: 'Energia oscura Ω_Λ', mat: 'Materia Ω_m (%)', reset: 'Reset', age: 'Età (Gyr)', h: 'H(z)',                 z: 'Redshift z' },
    },
    neuro: {
      junior:  { stim: 'Forza dello stimolo', fire: 'Attiva neurone', rate: 'Frequenza di scarica', pot: 'Potenziale' },
      student: { stim: 'Forza dello stimolo', fire: 'Attiva neurone', rate: 'Frequenza di scarica', pot: 'Potenziale' },
      scholar: { stim: 'Forza dello stimolo', fire: 'Attiva neurone', rate: 'Frequenza di scarica', pot: 'Potenziale' },
    },
    neuron: {
      junior:  { cur: 'Forza dello stimolo',    pulse: 'Impulso singolo', reset: 'Reset', v: 'Tensione interna', state: 'Stato', spikes: 'Picchi' },
      student: { cur: 'Corrente di stimolo (I)', pulse: 'Impulso singolo', reset: 'Reset', v: 'V di membrana',    state: 'Stato', spikes: 'Picchi' },
      scholar: { cur: 'Corrente di stimolo (I)', pulse: 'Impulso singolo', reset: 'Reset', v: 'V di membrana',    state: 'Stato', spikes: 'Picchi' },
    },
    memory: {
      junior:  { rate: 'Frequenza di stimolazione (Hz)', ltp: 'Rafforza (LTP)', ltd: 'Indebolisci (LTD)', reset: 'Reset', w: 'Forza sinaptica', last: 'Ultimo evento', events: 'Eventi' },
      student: { rate: 'Frequenza di stimolazione (Hz)', ltp: 'Accoppia (LTP)', ltd: 'Inverti (LTD)',     reset: 'Reset', w: 'Forza sinaptica', last: 'Ultimo evento', events: 'Eventi' },
      scholar: { rate: 'Frequenza di stimolazione (Hz)', ltp: 'Accoppia (LTP)', ltd: 'Inverti (LTD)',     reset: 'Reset', w: 'Forza sinaptica', last: 'Ultimo evento', events: 'Eventi' },
    },
    sleep: {
      junior:  { speed: 'Velocità ciclo del sonno', next: 'Fase successiva', wake: 'Sveglia', stage: 'Fase del sonno', freq: 'Velocità onde cerebrali', ad: 'Pressione del sonno' },
      student: { speed: 'Velocità ciclo del sonno', next: 'Fase successiva', wake: 'Sveglia', stage: 'Fase del sonno', freq: 'Freq. EEG',               ad: 'Adenosina' },
      scholar: { speed: 'Velocità ciclo del sonno', next: 'Fase successiva', wake: 'Sveglia', stage: 'Fase del sonno', freq: 'Freq. EEG',               ad: 'Adenosina' },
    },
    seriesparallel: {
      junior:  { mode: 'Serie / Parallelo', volt: 'Batteria',     rtot: 'Resistenza totale', cur: 'Corrente',        bulb: 'Luminosità lampadina' },
      student: { mode: 'Serie / Parallelo', volt: 'Tensione (V)', rtot: 'Resistenza totale', cur: 'Corrente totale', bulb: 'Potenza per lampadina' },
      scholar: { mode: 'Serie / Parallelo', volt: 'Tensione (V)', rtot: 'Resistenza totale', cur: 'Corrente totale', bulb: 'Potenza per lampadina' },
    },
    respiration: {
      junior:  { o2: 'Ossigeno',           atp: 'Energia (ATP)',    co2: 'CO₂ in uscita',    mode: 'Modalità' },
      student: { o2: 'Livello di ossigeno', atp: 'ATP per glucosio', co2: 'CO₂ per glucosio', mode: 'Via metabolica' },
      scholar: { o2: 'Livello di ossigeno', atp: 'ATP per glucosio', co2: 'CO₂ per glucosio', mode: 'Via metabolica' },
    },
    watercycle: {
      junior:  { temp: 'Calore del Sole', evap: 'Evaporazione', cloud: 'Nuvola',          rain: 'Pioggia' },
      student: { temp: 'Temperatura',     evap: 'Evaporazione', cloud: 'Acqua in nuvola', rain: 'Precipitazione' },
      scholar: { temp: 'Temperatura',     evap: 'Evaporazione', cloud: 'Acqua in nuvola', rain: 'Precipitazione' },
    },
    energy: {
      junior:  { drop: 'Altezza di caduta',  fric: 'Attrito', ke: 'Energia di movimento', pe: 'Energia di altezza',  tot: 'Totale' },
      student: { drop: 'Altezza iniziale (h)', fric: 'Attrito', ke: 'Cinetica (KE)',        pe: 'Potenziale (PE)',     tot: 'Energia totale' },
      scholar: { drop: 'Altezza iniziale (h)', fric: 'Attrito', ke: 'Cinetica (KE)',        pe: 'Potenziale (PE)',     tot: 'Energia totale' },
    },
    gaslaws: {
      junior:  { temp: 'Temperatura',     vol: 'Dimensione contenitore', pres: 'Pressione',     pv: 'Pressione × dimensione' },
      student: { temp: 'Temperatura (T)',  vol: 'Volume (V)',             pres: 'Pressione (P)', pv: 'P × V' },
      scholar: { temp: 'Temperatura (T)',  vol: 'Volume (V)',             pres: 'Pressione (P)', pv: 'P × V' },
    },
    moonphases: {
      junior:  { day: 'Giorno del mese', phase: 'Fase', lit: 'Quanto è illuminata' },
      student: { day: 'Giorno (su 29,5)', phase: 'Fase', lit: 'Illuminata' },
      scholar: { day: 'Giorno (su 29,5)', phase: 'Fase', lit: 'Illuminata' },
    },
    protein: {
      junior:  { play: 'Costruisci', codon: 'Lettura',              len: 'Perline finora' },
      student: { play: 'Traduci',    codon: 'Codone → amminoacido', len: 'Lunghezza catena' },
      scholar: { play: 'Traduci',    codon: 'Codone → amminoacido', len: 'Lunghezza catena' },
    },
    pendulum: {
      junior:  { len: 'Lunghezza',     amp: 'Quanto oscilla', per: 'Tempo per oscillazione', freq: 'Oscillazioni al secondo' },
      student: { len: 'Lunghezza (L)', amp: 'Ampiezza (θ₀)',  per: 'Periodo (T)',            freq: 'Frequenza (f)' },
      scholar: { len: 'Lunghezza (L)', amp: 'Ampiezza (θ₀)',  per: 'Periodo (T)',            freq: 'Frequenza (f)' },
    },
    optics: {
      junior:  { obj: 'Distanza oggetto',      foc: 'Forza della lente',    img: 'Dov\'è l\'immagine',      mag: 'Quanto grande',      type: 'Immagine' },
      student: { obj: 'Distanza oggetto (dₒ)', foc: 'Lunghezza focale (f)', img: 'Distanza immagine (dᵢ)', mag: 'Ingrandimento (m)',  type: 'Immagine' },
      scholar: { obj: 'Distanza oggetto (dₒ)', foc: 'Lunghezza focale (f)', img: 'Distanza immagine (dᵢ)', mag: 'Ingrandimento (m)',  type: 'Immagine' },
    },
    blackholes: {
      junior:  { mass: 'Massa del buco nero (M☉)', dist: 'Distanza dal buco',            wave: 'Onda gravitazionale', km: 'Distanza', dilat: 'Dilatazione del tempo', z: 'Stiramento della luce' },
      student: { mass: 'Massa del buco nero (M☉)', dist: 'Distanza particella test (r_S)', wave: 'Onda gravitazionale', km: 'Distanza', dilat: 'Dilatazione del tempo', z: 'Redshift' },
      scholar: { mass: 'Massa del buco nero (M☉)', dist: 'Distanza particella test (r_S)', wave: 'Onda gravitazionale', km: 'Distanza', dilat: 'Dilatazione del tempo', z: 'Redshift' },
    },
    solarsystem: {
      junior:  { speed: 'Velocità tempo', zoom: 'Zoom', sel: 'Selezionato', period: 'Periodo', dist: 'Distanza' },
      student: { speed: 'Velocità tempo', zoom: 'Zoom', sel: 'Selezionato', period: 'Periodo', dist: 'Distanza' },
      scholar: { speed: 'Velocità tempo', zoom: 'Zoom', sel: 'Selezionato', period: 'Periodo', dist: 'Distanza' },
    },
    eclipse: {
      junior:  { moon: 'Sposta la Luna',   node: 'Allinea l\'orbita',   phase: 'Fase lunare', ecl: 'Eclissi?' },
      student: { moon: 'Posizione Luna',    node: 'Allineamento nodo',   phase: 'Fase lunare', ecl: 'Eclissi' },
      scholar: { moon: 'Posizione Luna',    node: 'Allineamento nodo',   phase: 'Fase lunare', ecl: 'Eclissi' },
    },
    meteors: {
      junior:  { pos: 'Periodo dell\'anno',    dens: 'Polvere nella scia', rate: 'Stelle cadenti/ora', status: 'Il cielo ora' },
      student: { pos: 'Posizione della Terra', dens: 'Densità detriti',    rate: 'Meteore/ora',        status: 'Attività' },
      scholar: { pos: 'Posizione della Terra', dens: 'Densità del flusso', rate: 'Meteore/ora',        status: 'Attività' },
    },
    photosynthesis: {
      junior:  { light: 'Luce solare',      co2: 'Anidride carbonica', rate: 'Ossigeno prodotto',      limit: 'Cosa limita?' },
      student: { light: 'Intensità luminosa', co2: 'Livello di CO₂',     rate: 'Velocità di fotosintesi', limit: 'Fattore limitante' },
      scholar: { light: 'Intensità luminosa', co2: 'Livello di CO₂',     rate: 'Velocità di fotosintesi', limit: 'Fattore limitante' },
    },
  },
};
