// French overlay. See i18n/it.mjs for the shape. EN fallback per field; a topic
// appears under /fr/ only if listed in `t`.
export default {
  code: 'fr', name: 'Français', flag: '<svg class="flag" viewBox="0 0 3 2" aria-hidden="true"><rect width="3" height="2" fill="#fff"/><rect width="1" height="2" fill="#0055a4"/><rect x="2" width="1" height="2" fill="#ef4135"/></svg>', htmlLang: 'fr', locale: 'fr_FR', prefix: 'fr/',
  // Unified UI schema — mirrors `const UI` in index.html. Pure data.
  ui: {
    levelBar:{junior:'🌱 Débutant',student:'🔬 Élève',scholar:'🎓 Expert'},
    levelShort:{junior:'Débutant 🌱',student:'Élève 🔬',scholar:'Expert 🎓'},
    levelName:{junior:'Débutant',student:'Élève',scholar:'Expert'},
    htag:'✨ L\'expérience scientifique interactive',
    h1:'Découvre le monde<br>avec <em>curiosité</em>',
    heroSub:{
      junior:'Choisis un sujet qui te passionne : chaque carte ouvre un monde de simulations interactives et d\'explications pensées pour toi.',
      student:'Explore la science avec de vraies équations, des simulations interactives et des explications approfondies. Clique sur une carte pour plonger !',
      scholar:'Dérivations rigoureuses, notation mathématique précise et profondeur complète. Chaque sujet à partir des premiers principes.'
    },
    hint:{
      junior:'Tu explores en <strong>Débutant</strong> 🌱 - touche une carte pour commencer !',
      student:'Tu explores en <strong>Élève</strong> 🔬 - équations et théorie t\'attendent !',
      scholar:'Tu explores en <strong>Expert</strong> 🎓 - profondeur mathématique complète !'
    },
    searchPlaceholder:'Rechercher des expériences…',
    all:'Toutes',
    countAll:'{n} expériences',
    countSome:'{shown} sur {total}',
    noResults:'Aucune expérience ne correspond à ta recherche. Essaie un autre mot ou efface les filtres.',
    subjects:{'⚛️ Physics':'Physique','🔢 Mathematics':'Mathématiques','🧬 Biology':'Biologie','💻 Computer Science':'Informatique','⚗️ Chemistry':'Chimie','🌍 Earth Science':'Sciences de la Terre','🌌 Astronomy':'Astronomie','🧠 Neuroscience':'Neurosciences'},
    tabs:{discover:'Découvrir',simulate:'Simuler',deeper:'Approfondir'},
    keyFormulas:'Formules clés',
    tryThis:'Essaie',
    simHint:'🕹️ Simulation interactive - utilise les commandes ci-dessous pour explorer',
    whatSeeing:'Ce que tu vois',
    whatNotice:'À remarquer',
    footer:{
      about:'Simulations scientifiques pratiques dans neuf domaines, chacune écrite pour trois niveaux : d\'un enfant curieux de dix ans à un étudiant diplômé. Gratuit, sans compte, sans suivi.',
      exploreBySubject:'Explorer par matière',
      allExperiments:'Toutes les expériences',
      madeFor:'fait pour les esprits curieux',
      contact:'Contact',
      attrib:'Concepts issus de Wikipédia et de ressources éducatives ouvertes',
      ai:'Les explications de ce site sont rédigées avec l\'aide d\'une IA générative.',
      aiLink:'Comment nous utilisons l\'IA'
    },
    deeper:{
      keepExploring:'📚 Continue à explorer',
      explored:'Tu as exploré <strong>{title}</strong> au niveau <strong>{level}</strong>.',
      switchTo:'Passe à <strong>{next}</strong> (en haut de la page) pour débloquer des explications plus approfondies et des mathématiques plus avancées.',
      deepest:'Tu as atteint le niveau le plus profond - la frontière mathématique complète ! 🏔️',
      sources:'🔗 Sources fiables',
      wiki:'Article complet sur Wikipédia ↗',wikiNote:'la référence encyclopédique pour ce sujet.',
      youtube:'Explications vidéo sur YouTube ↗',youtubeNote:'une recherche en direct pour « {title} ».',
      scholar:'Articles sur Google Scholar ↗',scholarNote:'la littérature primaire.',
      experiment:'🧪 Expérimente toi-même',
      experimentBody:'Retourne à l\'onglet <strong>Simuler</strong> et pousse chaque curseur à l\'extrême. Note ce qui change et ce qui reste constant. La science, c\'est se demander « et si ? » - la simulation est ton laboratoire !'
    },
    themeToggle:'Basculer le mode sombre',language:'Langue',
    levels:{junior:{label:'Débutant',blurb:'langage simple, sans maths'},student:{label:'Élève',blurb:'les équations essentielles'},scholar:{label:'Expert',blurb:'profondeur mathématique complète'}},
    levelNote:'Niveau {label} — {blurb}',
    worthKnowing:'Bon à savoir',
    sources:'Sources',
    wikiLink:'Article complet sur Wikipédia ↗',
    moreIn:'Plus en',
    runSim:'▶ Lancer la simulation interactive',
    explainedSimulated:'Expliqué et simulé'
  },
  slugs: { energy: 'conservation-de-l-energie', seriesparallel: 'circuits-serie-parallele', respiration: 'respiration-cellulaire', moonphases: 'phases-de-la-lune', protein: 'synthese-des-proteines', watercycle: 'cycle-de-l-eau', optics: 'optique-lumiere-lentilles', pendulum: 'pendule-mouvement-harmonique', gaslaws: 'lois-des-gaz', astro: 'etoiles-univers', cosmology: 'cosmologie-big-bang', neuro: 'cerveau-neurones', neuron: 'cerveau-electrique', memory: 'comment-fonctionne-la-memoire', sleep: 'sommeil-conscience', chem: 'atomes-liaisons-chimiques', electrochem: 'electrochimie-batteries', kinetics: 'cinetique-equilibre', organic: 'chimie-organique-molecules-du-vivant', acids: 'acides-bases-ph', periodic: 'tableau-periodique', balancing: 'equilibrer-equations-chimiques', climate: 'climat-atmosphere', tectonics: 'tectonique-des-plaques-seismes', ocean: 'oceanographie-courants-marins', volcano: 'volcanologie', seasons: 'pourquoi-nous-avons-des-saisons', sorting: 'algorithmes-de-tri', ml: 'apprentissage-automatique-reseaux-neurones', crypto: 'cryptographie-securite', complexity: 'calcul-complexite', ecosystem: 'ecosystemes-reseaux-trophiques', cell: 'cellule-osmose-diffusion', mitosis: 'mitose-meiose', punnett: 'echiquiers-de-punnett-genetique', life: 'regles-de-la-vie', dna: 'adn-genetique', evolution: 'evolution-selection-naturelle', graphs: 'theorie-des-graphes-reseaux', trig: 'trigonometrie-cercle-unite', prob: 'probabilites-courbe-en-cloche', fractal: 'fractales-infini', calculus: 'calcul-changement', circuits: 'loi-d-ohm-circuits', states: 'etats-de-la-matiere', thermo: 'chaleur-thermodynamique', particles: 'modele-standard', newton: 'lois-du-mouvement-de-newton', gravity: 'gravite-orbites', projectile: 'mouvement-des-projectiles', waves: 'ondes-interferences', photosynthesis: 'photosynthese', eclipse: 'eclipses', meteors: 'etoiles-filantes', blackholes: 'trous-noirs', solarsystem: 'systeme-solaire' },
  t: {
    energy: {
      title: `La conservation de l'énergie`,
      teaser: `L'énergie ne peut ni être créée ni détruite — seulement transformée d'une forme à l'autre. Un pendule échange hauteur contre vitesse, à jamais, gardant le même total.`,
      chips: ['Énergie cinétique', 'Énergie potentielle', 'Conservation'],
      lvls: {
        junior: {
          title: `L'énergie ne disparaît jamais — elle change juste de forme`,
          body: `<p>Lance une balle en l'air et regarde-la ralentir, s'arrêter, puis retomber en accélérant. Quelque chose se transmet d'avant en arrière. En montant la balle échange sa vitesse contre de la <strong>hauteur</strong> ; en redescendant elle réechange cette hauteur contre de la <strong>vitesse</strong>. Rien ne se perd vraiment — c'est juste de l'<strong>énergie</strong> qui passe d'une forme à une autre.</p>
<p>Les physiciens donnent des noms à ces formes. L'énergie du <em>mouvement</em> s'appelle <strong>énergie cinétique</strong> — plus une chose va vite, plus elle en a. L'énergie stockée de la <em>position</em>, comme une balle tenue haut ou un ressort comprimé, s'appelle <strong>énergie potentielle</strong> — prête à se libérer. Tandis que la balle vole, l'énergie coule sans cesse entre ces deux réservoirs, mais l'addition des deux reste la même à chaque instant.</p>
<p>C'est l'une des règles les plus profondes de toute la physique : l'énergie ne peut être <em>ni créée ni détruite</em>, seulement changée d'une forme à l'autre. Une montagne russe l'échange entre hauteur et vitesse. Une plante la stocke depuis la lumière solaire. Ton corps la brûle depuis la nourriture. Dans la simulation ci-dessous, regarde une balle rouler dans un bol et vois l'énergie cinétique et potentielle se transformer l'une en l'autre — leur somme tenant ferme.</p>`,
          facts: [
            { e: '🎢', t: `Au sommet d'une montagne russe le wagon est tout énergie potentielle stockée ; en bas c'est tout énergie cinétique de mouvement. Le total est le même — c'est pourquoi aucune bosse ne peut être plus haute que la première.` },
            { e: '🔋', t: `L'énergie change de forme sans cesse : chimique dans une pile → électrique dans les fils → lumière et chaleur dans une ampoule. À chaque étape le total est conservé.` },
            { e: '🌞', t: `Presque toute l'énergie sur Terre a démarré dans le Soleil — stockée dans la nourriture, le bois, le charbon et le pétrole, pour être relâchée à nouveau bien plus tard.` },
          ],
          formula: null, sim: 'energy',
        },
        student: {
          title: `Énergie cinétique, potentielle et le théorème de l'énergie mécanique`,
          body: `<p>Deux formes dominent la mécanique. L'<strong>énergie cinétique</strong> \\(KE = \\tfrac{1}{2}mv^2\\) croît avec le <em>carré</em> de la vitesse — double la vitesse et tu quadruples l'énergie, ce qui est pourquoi les accidents à haute vitesse sont si démesurément dangereux. L'<strong>énergie potentielle gravitationnelle</strong> \\(PE = mgh\\) croît linéairement avec la hauteur. Un ressort en stocke une autre variété, \\(PE = \\tfrac{1}{2}kx^2\\), dans son étirement ou sa compression.</p>
<p>En l'absence de frottement leur somme, l'<strong>énergie mécanique</strong> \\(E = KE + PE\\), est <em>conservée</em> : constante à chaque instant. Un pendule au sommet de son balancement est tout PE et zéro vitesse ; au fond il est tout KE à vitesse maximale ; partout entre les deux le total est identique. C'est ce qui te laisse résoudre pour la vitesse sans jamais toucher au temps : égale simplement l'énergie au départ et à l'arrivée et résous.</p>
<p>Le pont vers les forces est le <strong>théorème de l'énergie cinétique</strong> : le travail net fait sur un objet égale son changement d'énergie cinétique, \\(W = \\Delta KE\\), où le travail est force fois déplacement \\(W = Fd\\). Le frottement ne <em>détruit</em> pas l'énergie — il la convertit en <strong>chaleur</strong>, énergie cinétique désordonnée dans d'innombrables molécules. Compte cette chaleur et le total tient toujours parfaitement ; c'est simplement passé sous une forme dont tu ne peux plus facilement te resservir.</p>`,
          facts: [
            { e: '🚗', t: `L'énergie cinétique varie comme la vitesse au carré : une voiture à 100 km/h a quatre fois l'énergie de la même voiture à 50 km/h — et met quatre fois la distance pour s'arrêter.` },
            { e: '🎯', t: `La conservation de l'énergie te laisse prédire des vitesses sans connaître le temps ni la trajectoire : seules les hauteurs de départ et d'arrivée comptent, pas le chemin suivi.` },
            { e: '🔥', t: `Le frottement ne « perd » pas l'énergie — il la transforme en chaleur. Frotte tes mains : le travail mécanique devient énergie thermique, et le grand livre s'équilibre toujours exactement.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Énergie cinétique', e: 'KE = \\tfrac{1}{2}mv^2', c: '∝ vitesse au carré' },
            { n: 'Énergie potentielle gravit.', e: 'PE = mgh' },
            { n: 'Énergie potentielle élastique', e: 'PE = \\tfrac{1}{2}kx^2' },
            { sep: 1 },
            { n: 'Énergie mécanique', e: 'E = KE + PE', c: 'conservée sans frottement' },
            { n: 'Théorème énergie-travail', e: 'W = \\Delta KE = Fd' },
            { sep: 1 },
            { n: 'Puissance', e: 'P = \\dfrac{W}{t} = Fv', c: "taux de transfert d'énergie" },
          ] }, sim: 'energy',
        },
        scholar: {
          title: `Symétries, potentiels et pourquoi l'énergie se conserve`,
          body: `<h4><span class="hn">01</span>La loi profonde : le théorème de Noether</h4>
<p>Pourquoi l'énergie se conserve-t-elle un tant soit peu ? La réponse, prouvée par Emmy Noether en 1918, est l'une des plus belles de la physique : <strong>chaque symétrie continue engendre une loi de conservation</strong>. La conservation de l'énergie est la conséquence directe de l'<em>invariance par translation dans le temps</em> — le fait que les lois de la physique sont les mêmes aujourd'hui que demain. La conservation de la quantité de mouvement vient de la même façon de la symétrie spatiale, et celle du moment cinétique de la symétrie de rotation. La conservation n'est pas un hasard ; c'est la symétrie déguisée.</p>
<h4><span class="hn">02</span>Forces conservatives et potentiels</h4>
<p>Une force est <em>conservative</em> si le travail qu'elle fait est indépendant du chemin — nul sur toute boucle fermée. Précisément quand cela tient, on peut définir une énergie potentielle \\(U\\) avec \\(\\mathbf{F} = -\\nabla U\\) : la force pointe en descente sur le paysage d'énergie potentielle. La gravité et les forces de ressort sont conservatives ; le frottement ne l'est pas, parce que le travail qu'il fait dépend du trajet parcouru. C'est la ligne de partage propre entre l'énergie que tu peux récupérer et l'énergie que tu ne peux pas.</p>
<h4><span class="hn">03</span>Le formalisme qui remplace les forces</h4>
<p>Toute la mécanique se reformule autour de l'énergie plutôt que des forces. Le <em>lagrangien</em> \\(L = T - V\\) (cinétique moins potentielle) alimente les équations d'Euler-Lagrange, qui reproduisent les lois de Newton sans jamais dessiner un vecteur force. Passe à l'<em>hamiltonien</em> \\(H = T + V\\) et tu obtiens l'énergie totale comme générateur de l'évolution temporelle même. Ces cadres, non les forces, sont ce qui se porte tout entier dans la relativité et la mécanique quantique.</p>
<h4><span class="hn">04</span>L'énergie dans un univers relativiste</h4>
<p>Einstein élargit le bilan : masse et énergie sont la même chose, \\(E^2 = (pc)^2 + (mc^2)^2\\), et au repos cela se réduit au célèbre \\(E = mc^2\\). La masse est de l'énergie extraordinairement concentrée — un seul gramme en contient l'équivalent d'environ 20 kilotonnes de TNT. Les réactions nucléaires et l'annihilation matière-antimatière ne créent pas d'énergie ; elles convertissent la masse en d'autres formes, et la quantité conservée est l'énergie totale masse-plus-énergie.</p>
<h4><span class="hn">05</span>Le quantum : l'énergie vient en paquets</h4>
<p>À l'échelle atomique l'énergie cesse d'être continue. Un système lié ne peut occuper que des <em>niveaux d'énergie</em> discrets, et il ne saute entre eux qu'en absorbant ou émettant un quantum exact \\(E = hf\\). C'est pourquoi les atomes n'émettent que des couleurs précises, pourquoi les lasers existent, et pourquoi le monde quantique est granuleux. Même le vide « vide » porte une énergie de point zéro irréductible que le principe d'incertitude interdit d'annuler.</p>
<h4><span class="hn">06</span>Le grand livre cosmique et la flèche du temps</h4>
<p>Deux subtilités bornent l'image. D'abord, l'énergie est toujours conservée mais devient sans cesse <em>moins utile</em> : la deuxième loi de la thermodynamique dit que l'entropie croît, dégradant l'énergie concentrée en chaleur diffuse — c'est la vraie flèche du temps. Ensuite, à l'échelle cosmique la conservation de l'énergie se complique, car dans un espace-temps en expansion la symétrie de translation temporelle qui protège l'énergie ne tient plus globalement. Les photons perdent de l'énergie en s'étirant avec l'univers, et il n'existe aucune énergie totale universellement acceptée pour le cosmos entier.</p>`,
          facts: [
            { e: '💥', t: `E = mc² signifie que la masse est de l'énergie ultra-concentrée : convertir un seul gramme entièrement en énergie libérerait environ l'équivalent de la bombe d'Hiroshima.` },
            { e: '🎭', t: `Le théorème de Noether (1918) prouva que la conservation de l'énergie découle de l'invariance des lois de la physique dans le temps — chaque loi de conservation est cachée derrière une symétrie.` },
            { e: '🌡️', t: `L'énergie est toujours conservée mais se dégrade : la deuxième loi dit qu'à chaque conversion une part devient chaleur inutilisable. Tu ne peux jamais casser sa quantité, seulement gaspiller sa qualité.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Force ⇄ potentiel', e: '\\mathbf{F} = -\\nabla U' },
            { n: 'Lagrangien', e: 'L = T - V' },
            { n: 'Hamiltonien', e: 'H = T + V', c: 'énergie totale' },
            { sep: 1 },
            { n: 'Masse-énergie', e: 'E^2 = (pc)^2 + (mc^2)^2' },
            { n: `Quantum d'énergie`, e: 'E = hf' },
            { sep: 1 },
            { n: 'Première loi (thermo)', e: '\\Delta U = Q - W' },
            { n: 'Noether', e: '\\text{symétrie} \\Rightarrow \\text{conservation}' },
          ] }, sim: 'energy',
        },
      },
    },
    seriesparallel: {
      title: 'Circuits série et parallèle',
      teaser: `Deux ampoules, une pile — mais câble-les en chaîne ou côte à côte et tout change : luminosité, courant et ce qui arrive quand l'une grille.`,
      chips: ['Circuits', 'Résistance', 'Courant'],
      lvls: {
        junior: {
          title: `Deux façons de câbler, deux résultats très différents`,
          body: `<p>Prends une pile et deux ampoules. Il y a deux façons de les brancher, et elles se comportent d'une manière étonnamment différente. Câble-les en une seule boucle, l'une après l'autre, et tu as un circuit <strong>série</strong>. Donne à chaque ampoule son propre chemin séparé de retour vers la pile, et tu as un circuit <strong>parallèle</strong>.</p>
<p>Dans un circuit <strong>série</strong> le courant électrique n'a qu'une seule route, il doit donc passer <em>à travers chaque ampoule à tour de rôle</em>. Cela crée un piège célèbre : si une ampoule grille, la boucle est brisée et <em>les deux</em> s'éteignent — exactement le tracas des vieilles guirlandes de Noël où une lampe morte assombrissait tout le fil. Ajoute plus d'ampoules en série et chacune reçoit une part du courant, donc toutes s'affaiblissent.</p>
<p>Dans un circuit <strong>parallèle</strong> chaque ampoule a son propre chemin, elles brillent donc à pleine luminosité et fonctionnent indépendamment — dévisses-en une et l'autre continue de briller joyeusement. C'est pourquoi ta maison est câblée en parallèle : tu veux pouvoir éteindre une lampe sans plonger toute la pièce dans le noir. Dans la simulation ci-dessous, bascule entre série et parallèle et regarde le courant et la luminosité changer.</p>`,
          facts: [
            { e: '🎄', t: `Les vieilles guirlandes de Noël étaient câblées en série — une seule ampoule grillée brisait la boucle et toutes s'éteignaient, menant à la frustrante chasse à la lampe morte.` },
            { e: '🏠', t: `Ta maison est câblée en parallèle, si bien que chaque prise et lampe reçoit la pleine tension et fonctionne indépendamment — éteins-en une et le reste continue.` },
            { e: '🔦', t: `Empile deux piles en série dans une lampe torche et tu doubles la tension pour une lumière plus vive ; place-les en parallèle et la tension reste la même mais elles durent deux fois plus longtemps.` },
          ],
          formula: null, sim: 'seriesparallel',
        },
        student: {
          title: `La loi d'Ohm et la combinaison des résistances`,
          body: `<p>Tout circuit obéit à la <strong>loi d'Ohm</strong> \\(V = IR\\), liant tension, courant et résistance. La clé pour analyser n'importe quel réseau est de savoir comment les résistances se combinent, et série contre parallèle sont les deux règles opposées. <strong>En série</strong> les résistances s'additionnent simplement : \\(R_{\\text{tot}} = R_1 + R_2 + \\cdots\\). Le même courant traverse toutes, tandis que la tension se <em>répartit</em> entre elles.</p>
<p><strong>En parallèle</strong> les inverses s'additionnent : \\(\\frac{1}{R_{\\text{tot}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots\\), donnant toujours une résistance <em>plus petite</em> que la moindre branche — parce que tu as ouvert plus de chemins au courant. Ici chaque branche voit la <em>même</em> tension, tandis que le courant se <em>répartit</em> entre elles. Ces deux comportements — courant partagé contre tension partagée — sont la clé entière de la lecture d'un circuit.</p>
<p>Derrière tout cela il y a les <strong>lois de Kirchhoff</strong>, deux énoncés de conservation. La loi des nœuds (le courant qui entre dans un nœud égale le courant qui en sort) est la conservation de la charge ; la loi des mailles (les tensions autour de toute boucle s'annulent) est la conservation de l'énergie. La puissance dissipée dans un élément est \\(P = IV = I^2R\\), ce qui est pourquoi une ampoule en série — recevant moins de courant — brille plus faiblement que la même ampoule en parallèle.</p>`,
          facts: [
            { e: '⚡', t: `Les résistances en parallèle donnent toujours moins de résistance que la plus petite branche seule — ajouter des chemins facilite toujours l'écoulement du courant, jamais l'inverse.` },
            { e: '🔌', t: `Les lois de Kirchhoff ne sont que la conservation déguisée : la loi des nœuds est la conservation de la charge, la loi des mailles la conservation de l'énergie. Toute l'analyse de circuit en découle.` },
            { e: '💡', t: `La puissance varie comme le carré du courant (P = I²R) : c'est pourquoi les lignes à haute tension transportent l'électricité à tension élevée et courant faible — pour minimiser la puissance gaspillée en chaleur dans les câbles.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Loi d'Ohm`, e: 'V = IR' },
            { sep: 1 },
            { n: 'Série', e: 'R_{\\text{tot}} = R_1 + R_2 + \\cdots', c: 'même courant' },
            { n: 'Parallèle', e: '\\dfrac{1}{R_{\\text{tot}}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}', c: 'même tension' },
            { sep: 1 },
            { n: 'Loi des nœuds', e: '\\sum I_{\\text{entrant}} = \\sum I_{\\text{sortant}}' },
            { n: 'Loi des mailles', e: '\\sum V = 0', c: "autour d'une boucle" },
            { n: 'Puissance', e: 'P = IV = I^2R' },
          ] }, sim: 'seriesparallel',
        },
        scholar: {
          title: `Régimes transitoires, impédance et réseaux réels`,
          body: `<h4><span class="hn">01</span>Au-delà des résistances : condensateurs et bobines</h4>
<p>Les résistances dissipent l'énergie ; deux autres éléments la <em>stockent</em>. Un <strong>condensateur</strong> stocke de l'énergie dans un champ électrique, \\(Q = CV\\), et résiste aux changements de tension ; une <strong>bobine</strong> stocke de l'énergie dans un champ magnétique, \\(V = L\\,dI/dt\\), et résiste aux changements de courant. Contrairement aux résistances leur comportement dépend de la <em>vitesse</em> à laquelle les choses changent, ce qui rend les circuits qui les contiennent dynamiques plutôt que statiques.</p>
<h4><span class="hn">02</span>La montée et la descente : les transitoires RC</h4>
<p>Relie une résistance et un condensateur et le circuit acquiert une mémoire du temps. La tension se charge ou se décharge exponentiellement, \\(V(t) = V_0\\,e^{-t/RC}\\), avec une <em>constante de temps</em> \\(\\tau = RC\\) qui fixe la vitesse. Ce simple comportement est partout : il cadence les clignotants, débruite les signaux, met en forme les ondes audio et définit combien de fois par seconde une puce numérique peut basculer proprement.</p>
<h4><span class="hn">03</span>Le courant alternatif et l'impédance</h4>
<p>Excite un circuit avec du courant alternatif et la résistance se généralise en <strong>impédance</strong> \\(Z\\), un nombre complexe qui capte à la fois combien un élément s'oppose au courant et de combien il déphase tension et courant. Les condensateurs et les bobines ont des réactances qui dépendent de la fréquence, \\(X_C = 1/\\omega C\\) et \\(X_L = \\omega L\\), donc un circuit répond différemment à chaque fréquence — le fondement de tout filtre, égaliseur et étage de syntonisation.</p>
<h4><span class="hn">04</span>La résonance dans les circuits</h4>
<p>Un circuit avec inductance et capacité a une <em>fréquence de résonance</em> \\(\\omega_0 = 1/\\sqrt{LC}\\) où leurs réactances opposées s'annulent. À cette fréquence la réponse culmine brusquement — exactement l'oscillateur harmonique de la mécanique, désormais en tension et courant. C'est ainsi qu'une radio sélectionne une seule station sur la multitude : accorde \\(LC\\) pour que la fréquence désirée résonne et toutes les autres soient étouffées.</p>
<h4><span class="hn">05</span>Résoudre les grands réseaux</h4>
<p>Les vrais circuits ont trop de nœuds pour la réduction série-parallèle à la main. Les lois de Kirchhoff deviennent un système linéaire, résolu systématiquement par l'<em>analyse nodale</em> ou l'<em>analyse des mailles</em> — la même algèbre matricielle qu'un simulateur comme SPICE exécute des millions de fois pour vérifier une puce. Les théorèmes de <em>Thévenin</em> et <em>Norton</em> ajoutent une élégance de paresseux : tout réseau linéaire complexe, vu de deux bornes, se réduit à une seule source équivalente et une seule résistance.</p>
<h4><span class="hn">06</span>Quand le modèle simple s'effondre</h4>
<p>L'idée que les fils sont parfaits et que le courant est instantané n'est qu'une approximation basse fréquence. À hautes fréquences chaque fil a inductance et capacité, les signaux voyagent comme des <em>ondes</em> à vitesse finie, et les pistes doivent être traitées comme des <em>lignes de transmission</em> avec adaptation d'impédance pour éviter les réflexions. Descends encore et le courant se quantifie en électrons individuels ; l'électronique moderne vit à la frontière où la théorie des circuits soignée cède la place à l'électromagnétisme et à la physique quantique.</p>`,
          facts: [
            { e: '📻', t: `Une radio choisit une station par résonance : accorder un circuit LC à ω₀ = 1/√(LC) fait culminer une seule fréquence tandis que toutes les autres sont supprimées — le même pic que la résonance mécanique.` },
            { e: '⏱️', t: `La constante de temps RC (τ = RC) cadence d'innombrables dispositifs, des clignotants aux horloges numériques — le circuit fondamental de « charge puis déclenche » de l'électronique.` },
            { e: '🖥️', t: `Les concepteurs de puces ne câblent pas des millions de composants à la main — ils résolvent les lois de Kirchhoff numériquement avec SPICE, la même analyse nodale et de mailles enseignée pour les circuits à deux résistances.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Condensateur', e: 'Q = CV', c: 'stocke un champ E' },
            { n: 'Bobine', e: 'V = L\\,dI/dt', c: 'stocke un champ B' },
            { sep: 1 },
            { n: 'Constante de temps RC', e: '\\tau = RC', c: 'V(t) = V_0 e^{-t/RC}' },
            { n: 'Réactances', e: 'X_C = \\dfrac{1}{\\omega C},\\ X_L = \\omega L' },
            { sep: 1 },
            { n: 'Résonance', e: '\\omega_0 = \\dfrac{1}{\\sqrt{LC}}' },
            { n: 'Impédance', e: 'Z = R + jX', c: 'l\'AC généralise R' },
          ] }, sim: 'seriesparallel',
        },
      },
    },
    respiration: {
      title: 'La respiration cellulaire',
      teaser: `Comment ta nourriture devient-elle réellement énergie ? Chaque cellule brûle lentement le sucre avec l'oxygène, capturant la puissance libérée dans la monnaie universelle de la vie : l'ATP.`,
      chips: ['ATP', 'Mitochondries', 'Métabolisme'],
      lvls: {
        junior: {
          title: `Comment tes cellules transforment la nourriture en énergie`,
          body: `<p>Tu manges pour obtenir de l'énergie — mais tu ne peux pas alimenter tes muscles avec un sandwich directement. Ta nourriture doit d'abord être transformée en une sorte d'énergie que tes cellules peuvent réellement utiliser. Ce processus s'appelle la <strong>respiration cellulaire</strong>, et il se produit à l'intérieur de chacune des billions de cellules de ton corps, en ce moment même.</p>
<p>L'idée de base est étonnamment simple : les cellules <em>brûlent du sucre avec de l'oxygène</em>, un peu comme un feu — mais si lentement et sous tant de contrôle qu'au lieu d'une flamme tu obtiens une libération d'énergie soignée et pas à pas. C'est exactement pourquoi tu dois respirer : l'<strong>oxygène</strong> que tu inspires est utilisé pour décomposer le sucre de ta nourriture, et le <strong>dioxyde de carbone</strong> que tu expires est le déchet qui en résulte.</p>
<p>L'énergie libérée est empaquetée dans une petite molécule appelée <strong>ATP</strong> — pense à elle comme à une batterie rechargeable que tes cellules utilisent pour tout : bouger, penser, grandir et se réparer. La plupart de ce travail se fait dans de minuscules structures en forme de haricot appelées <strong>mitochondries</strong>, les « centrales électriques » de la cellule. Dans la simulation ci-dessous, envoie du sucre et de l'oxygène dans une mitochondrie et regarde-la pomper de l'ATP.</p>`,
          facts: [
            { e: '🔋', t: `Ton corps fabrique et dépense environ ton propre poids en ATP chaque jour — non parce que tu en stockes autant, mais parce que chaque molécule est recyclée des milliers de fois par jour.` },
            { e: '🫁', t: `C'est pourquoi tu respires : l'oxygène que tu inspires brûle le sucre de ta nourriture, et le dioxyde de carbone que tu expires est le déchet — chaque expiration est littéralement ton métabolisme sortant.` },
            { e: '🦠', t: `Les mitochondries furent jadis des bactéries libres, avalées par une cellule ancestrale il y a des milliards d'années. Elles ont encore leur propre ADN et se dupliquent seules à l'intérieur de tes cellules.` },
          ],
          formula: null, sim: 'respiration',
        },
        student: {
          title: `Glycolyse, cycle de Krebs et la chaîne de transport d'électrons`,
          body: `<p>La respiration cellulaire brûle le glucose en trois étapes couplées. D'abord vient la <strong>glycolyse</strong> dans le cytoplasme : une molécule de glucose à six carbones est fendue en deux molécules de pyruvate à trois carbones, avec un gain net modeste de 2 ATP et quelques transporteurs d'électrons NADH. Cette étape ancienne ne requiert aucun oxygène du tout.</p>
<p>Si l'oxygène est présent, le pyruvate entre dans une mitochondrie pour le <strong>cycle de Krebs</strong> (l'acide citrique), qui l'oxyde complètement en \\(CO_2\\), récoltant plus d'ATP et — surtout — chargeant beaucoup de transporteurs d'électrons NADH et FADH₂. Ces transporteurs sont le vrai butin : ils portent des électrons de haute énergie vers l'étape finale et la plus productive.</p>
<p>Cette étape finale est la <strong>chaîne de transport d'électrons</strong> sur la membrane interne de la mitochondrie. Les électrons cascadent le long d'une série de protéines, libérant de l'énergie qui pompe des protons pour bâtir un gradient — et le flux de ces protons de retour à travers l'enzyme ATP synthase forge le gros de l'ATP. L'oxygène joue le rôle vital d'<em>accepteur final d'électrons</em>, se combinant avec électrons et protons pour former l'eau. Le décompte total : environ \\(30\\text{–}38\\) ATP par molécule de glucose, résumé par \\(C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O\\).</p>`,
          facts: [
            { e: '⚡', t: `La chaîne de transport d'électrons produit la grande majorité de ton ATP — la glycolyse et le cycle de Krebs n'en font directement que quelques-uns chacun, mais chargent les transporteurs qui alimentent l'étape finale.` },
            { e: '💪', t: `Quand l'oxygène manque, tes muscles se rabattent sur la fermentation — un gain rapide mais maigre de 2 ATP, produisant l'acide lactique qui brûle pendant l'effort intense.` },
            { e: '🌍', t: `La respiration cellulaire est presque exactement l'inverse de la photosynthèse : l'une brûle le sucre avec l'oxygène pour libérer l'énergie, l'autre utilise l'énergie solaire pour refabriquer sucre et oxygène.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Réaction globale', e: 'C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O' },
            { sep: 1 },
            { n: 'Glycolyse', e: '\\text{glucose} \\to 2\\ \\text{pyruvate}', c: '+2 ATP, sans O₂' },
            { n: 'Cycle de Krebs', e: '\\text{pyruvate} \\to CO_2', c: 'charge NADH, FADH₂' },
            { n: 'Chaîne de transport', e: '\\text{NADH} \\to O_2', c: "le gros de l'ATP" },
            { sep: 1 },
            { n: 'Rendement total', e: '\\approx 30\\text{–}38\\ \\text{ATP / glucose}' },
          ] }, sim: 'respiration',
        },
        scholar: {
          title: `Chimiosmose, rendement et l'origine symbiotique des mitochondries`,
          body: `<h4><span class="hn">01</span>La grande idée : la chimiosmose</h4>
<p>La perspicacité qui valut à Peter Mitchell le Nobel 1978 fut contre-intuitive : l'ATP n'est pas fabriqué directement par les réactions chimiques de la chaîne d'électrons. À la place, la chaîne pompe des protons à travers la membrane interne pour bâtir un gradient électrochimique — la <strong>force protonmotrice</strong> — et cette énergie stockée entraîne ensuite séparément la synthèse d'ATP. L'énergie est momentanément détenue non dans une liaison chimique mais comme une <em>batterie</em> à travers une membrane, exactement comme l'eau retenue derrière un barrage.</p>
<h4><span class="hn">02</span>La turbine moléculaire</h4>
<p>Les protons retournent à travers l'<strong>ATP synthase</strong>, l'une des machines les plus remarquables de la biologie : un authentique moteur rotatif. Le flux de protons fait tourner physiquement un rotor à plus de 100 tours par seconde, et chaque rotation force des changements de conformation qui pressent ADP et phosphate en ATP. C'est une turbine hydroélectrique rétrécie à l'échelle nanométrique, et virtuellement toute vie sur Terre — animaux, plantes, bactéries — l'emploie.</p>
<h4><span class="hn">03</span>Compter la vraie facture énergétique</h4>
<p>Le chiffre manuel de 38 ATP est un plafond idéalisé. En réalité le rendement est plus proche de <em>30-32 ATP</em> par glucose, car le gradient de protons fuit, transporter le NADH cytoplasmique dans la mitochondrie coûte de l'énergie, et le rapport protons-par-ATP n'est pas un entier propre. Même ainsi, la respiration aérobie capture environ 34% de l'énergie disponible du glucose comme ATP — nettement plus efficace que la plupart des moteurs à combustion, le reste apparaissant comme chaleur qui te garde au chaud.</p>
<h4><span class="hn">04</span>Quand l'oxygène manque</h4>
<p>Sans oxygène pour accepter les électrons au bout de la chaîne, tout se bloque en amont — le NADH ne peut se décharger et la glycolyse elle-même caterait. La <em>fermentation</em> résout cela en réoxydant le NADH, produisant du lactate (dans tes muscles) ou de l'éthanol et du \\(CO_2\\) (dans la levure). Cela ne rend que les 2 ATP maigres de la glycolyse mais reste en marche instantanément et sans oxygène — un compromis ancien entre vitesse et rendement que ton corps engage encore lors d'un sprint.</p>
<h4><span class="hn">05</span>Les mitochondries : autrefois des êtres à part entière</h4>
<p>La <strong>théorie endosymbiotique</strong>, jadis radicale et désormais bien établie, soutient que les mitochondries descendent de bactéries libres englouties par une cellule ancestrale il y a environ 1,5 à 2 milliards d'années. Les preuves sont convaincantes : elles gardent leur propre ADN circulaire, se divisent indépendamment par fission, ont une double membrane et fabriquent leurs propres ribosomes de type bactérien. Ta mitochondrie est le descendant apprivoisé d'un microbe qui n'a jamais tout à fait cessé d'être lui-même.</p>
<h4><span class="hn">06</span>Bien plus que des batteries</h4>
<p>Les mitochondries font bien plus que fabriquer de l'ATP. Elles déclenchent l'<em>apoptose</em> (la mort cellulaire programmée) en libérant du cytochrome c, tamponnent le calcium cellulaire, synthétisent des groupes clés, et leur fuite d'électrons est une source majeure des espèces réactives de l'oxygène liées au vieillissement. Comme l'ADN mitochondrial se transmet presque uniquement par la mère, il trace des lignées maternelles à travers des millénaires — jusqu'à l'« Ève mitochondriale ». Les défaillances de la fonction mitochondriale sous-tendent un large spectre de maladies métaboliques et neurodégénératives.</p>`,
          facts: [
            { e: '🏆', t: `Peter Mitchell remporta le Nobel 1978 pour la chimiosmose — l'idée choquante que l'ATP est alimenté par un gradient de protons à travers une membrane, non fabriqué directement par des réactions chimiques.` },
            { e: '⚙️', t: `L'ATP synthase est un authentique moteur rotatif qui tourne à plus de 100 fois par seconde, entraîné par le flux de protons — une turbine hydroélectrique nanométrique que presque toute vie partage.` },
            { e: '👩', t: `L'ADN mitochondrial ne se transmet que par la mère, permettant de retracer les lignées maternelles jusqu'à l'« Ève mitochondriale », une femme ayant vécu il y a environ 150 000 ans.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Force protonmotrice', e: '\\Delta p = \\Delta\\psi - \\tfrac{2.3RT}{F}\\Delta\\text{pH}' },
            { n: `Synthèse d'ATP`, e: '\\text{ADP} + P_i \\to \\text{ATP}', c: 'via ATP synthase' },
            { sep: 1 },
            { n: `Hydrolyse de l'ATP`, e: '\\Delta G \\approx -30.5\\ \\text{kJ/mol}' },
            { n: 'Rendement réel', e: '\\approx 30\\text{–}32\\ \\text{ATP / glucose}' },
            { sep: 1 },
            { n: 'Fermentation', e: '\\text{glucose} \\to 2\\ \\text{lactate} + 2\\ \\text{ATP}' },
            { n: 'Efficacité', e: '\\approx 34\\%', c: 'du glucose disponible' },
          ] }, sim: 'respiration',
        },
      },
    },
    moonphases: {
      title: 'Les phases de la Lune',
      teaser: `La Lune ne produit aucune lumière propre — alors pourquoi croît-elle d'un croissant à un disque plein et retour chaque mois ? Tout est dans l'angle d'où tu la regardes.`,
      chips: ['Lune', 'Phases', 'Orbites'],
      lvls: {
        junior: {
          title: `Pourquoi la Lune change de forme chaque nuit`,
          body: `<p>Regarde la Lune au fil d'un mois et elle semble croître et rétrécir — un mince croissant, une moitié, un disque bombé, un cercle plein, puis de nouveau. Mais la Lune ne change jamais vraiment de forme. Le secret est que la Lune ne produit <em>aucune lumière propre</em>. Comme une balle géante suspendue dans l'espace, elle attrape simplement la lumière du soleil et nous la renvoie — et le Soleil ne peut jamais éclairer qu'<strong>une moitié</strong> d'elle à la fois, la moitié qui se trouve face au Soleil.</p>
<p>Tandis que la Lune tourne autour de la Terre une fois par mois, nous regardons cette moitié éclairée sous des angles différents. Quand la Lune est entre nous et le Soleil, son côté éclairé est tourné loin de nous et nous voyons l'obscurité — une <strong>nouvelle lune</strong>. Quand elle est de l'autre côté, toute la face éclairée se tourne vers nous — une <strong>pleine lune</strong>. Entre les deux nous la saisissons de côté et ne voyons qu'une tranche : un croissant ou une moitié. La forme que tu vois est simplement quelle part de la moitié éclairée pointe vers toi.</p>
<p>Le cycle complet — de nouvelle, à pleine, et retour à nouvelle — prend environ <strong>29 jours et demi</strong>, ce qui est à peu près d'où vient l'idée de « mois ». Et voici une jolie bizarrerie : la Lune garde toujours la <em>même face</em> tournée vers la Terre, donc de chez nous nous ne voyons jamais sa face cachée. Dans la simulation ci-dessous, déplace la Lune sur son orbite et regarde sa phase changer.</p>`,
          facts: [
            { e: '🌑', t: `Tu ne peux jamais voir une « nouvelle lune » — son côté éclairé est tourné entièrement loin de la Terre, donc elle est dans le ciel diurne, invisible contre l'éclat du Soleil.` },
            { e: '🔄', t: `La Lune garde la même face vers la Terre parce qu'elle tourne exactement une fois par orbite — un équilibre appelé verrouillage par effet de marée. La « face cachée » resta invisible à quiconque jusqu'à ce qu'une sonde soviétique la photographie en 1959.` },
            { e: '📅', t: `Le cycle de ~29,5 jours des phases est à l'origine du mot « mois » — et règle encore aujourd'hui les calendriers islamique, hébraïque et chinois.` },
          ],
          formula: null, sim: 'moonphases',
        },
        student: {
          title: `La géométrie des phases, et pourquoi les éclipses sont rares`,
          body: `<p>Une phase lunaire est de la pure géométrie. La lumière solaire éclaire toujours exactement la moitié de la Lune ; ce qui change est l'<em>angle entre le Soleil, la Terre et la Lune</em>. Appelle-le l'angle de phase : à 0° la Lune est grosso modo entre nous et le Soleil (nouvelle), à 180° elle est opposée au Soleil (pleine), et la fraction éclairée que nous voyons suit \\(k = \\tfrac{1}{2}(1 - \\cos\\theta)\\). La moitié croissante du cycle et la moitié décroissante sont des images miroir, éclairées sur des côtés opposés.</p>
<p>Il y a une subtilité dans le timing. La Lune met 27,3 jours pour compléter une orbite par rapport aux étoiles de fond — le <em>mois sidéral</em> — mais 29,5 jours pour revenir à la même phase — le <em>mois synodique</em>. L'écart existe parce que la Terre s'est entretemps déplacée sur sa propre orbite, donc la Lune doit osciller un peu plus loin pour se réaligner avec le Soleil. Le cycle des phases que nous voyons réellement est le synodique.</p>
<p>Alors pourquoi n'y a-t-il pas d'éclipse à chaque nouvelle et pleine lune ? Parce que l'orbite de la Lune est inclinée d'environ <strong>5°</strong> par rapport au plan de l'orbite terrestre. La plupart des mois la Lune passe un peu au-dessus ou au-dessous de la ligne directe Soleil-Terre, et son ombre manque la cible. Ce n'est que lorsqu'une nouvelle ou pleine lune tombe près des deux points où les orbites se croisent — les <em>nœuds</em> — que nous obtenons une éclipse solaire ou lunaire. Cette inclinaison est la raison pour laquelle les éclipses sont des cadeaux occasionnels rares, non des événements mensuels.</p>`,
          facts: [
            { e: '🌗', t: `Le mois synodique (29,5 jours, de phase à phase) est plus long que le mois sidéral (27,3 jours, d'orbite à orbite) parce que la Terre continue de se déplacer autour du Soleil — la Lune doit rattraper.` },
            { e: '🌍', t: `Comme l'orbite de la Lune est légèrement elliptique, elle semble tanguer et hocher — une oscillation appelée libration qui nous laisse entrevoir environ 59% de sa surface au fil du temps, non seulement 50%.` },
            { e: '🌘', t: `Sur un mince croissant tu peux souvent voir tout le disque sombre briller faiblement — la « lumière cendrée », lumière solaire réfléchie par la Terre sur la Lune et de retour, expliquée dès Léonard de Vinci.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Fraction éclairée', e: 'k = \\tfrac{1}{2}(1 - \\cos\\theta)', c: 'θ = angle de phase' },
            { sep: 1 },
            { n: 'Mois sidéral', e: 'T_{\\text{sid}} \\approx 27.3\\ \\text{jours}', c: 'orbite vs étoiles' },
            { n: 'Mois synodique', e: 'T_{\\text{syn}} \\approx 29.5\\ \\text{jours}', c: 'de phase à phase' },
            { sep: 1 },
            { n: 'Relation synodique', e: '\\dfrac{1}{T_{\\text{syn}}} = \\dfrac{1}{T_{\\text{sid}}} - \\dfrac{1}{T_{\\text{an}}}' },
            { n: 'Inclinaison orbitale', e: 'i \\approx 5.14°', c: 'pourquoi les éclipses sont rares' },
          ] }, sim: 'moonphases',
        },
        scholar: {
          title: `Verrouillage par effet de marée, récession orbitale et longs cycles`,
          body: `<h4><span class="hn">01</span>Pourquoi une face est cachée à jamais</h4>
<p>La période de rotation de la Lune égale exactement sa période orbitale, elle est donc <strong>verrouillée par effet de marée</strong>. Ce n'est pas un hasard : la gravité terrestre soulève un léger renflement sur la Lune, et tout décalage entre rotation et orbite tire sur ce renflement, appliquant un couple qui freine la rotation jusqu'à ce que les deux rythmes coïncident. Presque chaque grande lune du Système solaire est arrivée à la même résonance spin-orbite 1:1 par la même voie — la rotation synchrone est le point d'arrivée naturel de la friction de marée.</p>
<h4><span class="hn">02</span>Les marées volent l'orbite de la Lune vers l'extérieur</h4>
<p>Le couplage de marée va dans les deux sens. La Lune soulève des renflements océaniques sur la Terre, et la rotation plus rapide de la Terre les traîne en avant de la ligne Terre-Lune ; leur attraction gravitationnelle ajoute du moment cinétique à l'orbite de la Lune, la poussant <em>vers l'extérieur</em> d'environ \\(3.8\\ \\text{cm}\\) par an — un taux désormais mesuré au millimètre en faisant rebondir des lasers sur les réflecteurs laissés par les astronautes d'Apollo. Le même transfert ralentit la rotation terrestre, allongeant le jour d'environ 1,7 milliseconde par siècle.</p>
<h4><span class="hn">03</span>La comptabilité de la conservation</h4>
<p>Tout cela n'est qu'une seule quantité conservée remaniée. Le moment cinétique total du système Terre-Lune est fixe, donc à mesure que la part rotationnelle de la Terre se vide, la part orbitale de la Lune doit croître — ce qui est précisément pourquoi une Lune qui s'éloigne et un jour qui s'allonge vont de pair. Fais avancer l'horloge et le processus ne finit que lorsque le jour terrestre et le mois lunaire s'étirent à la même valeur, un verrouillage mutuel par effet de marée à des dizaines de milliards d'années.</p>
<h4><span class="hn">04</span>L'orbite inclinée et tournante</h4>
<p>L'inclinaison de 5,14° n'est pas fixe dans l'espace : la ligne des nœuds où l'orbite de la Lune croise l'écliptique <em>précesse</em> tout autour en 18,6 ans, et le grand axe de l'orbite précesse en 8,85 ans. Ces lentes oscillations modulent quand et où les éclipses peuvent se produire et les enfilent dans le fameux <strong>cycle de Saros</strong> de 18 ans et 11 jours et ⅓, après lequel la géométrie Soleil-Terre-Lune se répète presque et une éclipse quasi jumelle revient.</p>
<h4><span class="hn">05</span>Lire une phase quantitativement</h4>
<p>La fraction éclairée \\(k = \\tfrac{1}{2}(1+\\cos\\alpha)\\), écrite en termes d'<em>élongation</em> Soleil-Lune, n'est que le squelette géométrique. La Lune est un miroir étonnamment médiocre — son albédo est d'environ 0,12, plus sombre que l'asphalte usé — et sa luminosité ne varie pas linéairement avec l'aire éclairée. Près de la pleine lune elle surgit démesurément brillante, la <em>poussée d'opposition</em>, tandis que les ombres de surface s'évanouissent et que les billes vitreuses du régolithe rétrodiffusent la lumière solaire droit vers la source.</p>
<h4><span class="hn">06</span>Un calendrier qui ne colle jamais tout à fait</h4>
<p>Le mois synodique n'est pas un nombre entier de jours, ni un nombre entier d'entre eux ne tient dans une année solaire — douze mois synodiques tombent environ 11 jours courts. Chaque calendrier lunaire de l'histoire s'est débattu avec ce désaccord, du <em>cycle métonique</em> de 19 ans qui réaligne Lune et Soleil (la base du calcul de Pâques) aux mois intercalaires des calendriers hébraïque et chinois. Le rythme d'apparence soignée de la Lune est, au fond, glorieusement incommensurable avec l'année.</p>`,
          facts: [
            { e: '📡', t: `La télémétrie laser sur les rétroréflecteurs de l'ère Apollo mesure la distance Terre-Lune au millimètre, confirmant que la Lune s'éloigne de 3,8 cm par an — à peu près la vitesse à laquelle poussent les ongles.` },
            { e: '🔁', t: `Le cycle de Saros (18 ans, 11 jours et ⅓) permet de prévoir les éclipses des siècles à l'avance : après un Saros la géométrie Soleil-Terre-Lune se répète presque, produisant une éclipse quasi identique décalée de 120° en longitude.` },
            { e: '🌑', t: `L'albédo de la Lune n'est que ~0,12 — elle ne réfléchit qu'à peine 12% de la lumière solaire, à peu près comme le vieil asphalte. La pleine lune « brillante » est en réalité un objet gris très sombre éclairé par un Soleil très brillant.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Fraction éclairée', e: 'k = \\tfrac{1}{2}(1 + \\cos\\alpha)', c: 'α = élongation' },
            { sep: 1 },
            { n: 'Récession orbitale', e: '\\dot r \\approx 3.8\\ \\text{cm/an}' },
            { n: 'Allongement du jour', e: '\\approx 1.7\\ \\text{ms/siècle}' },
            { sep: 1 },
            { n: 'Précession des nœuds', e: 'T_{\\text{nœud}} \\approx 18.6\\ \\text{ans}' },
            { n: 'Cycle de Saros', e: '\\approx 6585.3\\ \\text{jours}', c: 'répétition des éclipses' },
          ] }, sim: 'moonphases',
        },
      },
    },
    protein: {
      title: 'La synthèse des protéines',
      teaser: `Ton ADN n'est qu'une bibliothèque de recettes. Comment une cellule lit-elle ces recettes et construit-elle les vraies machines — les protéines — qui te font fonctionner ?`,
      chips: ['ADN', 'Ribosome', 'Code génétique'],
      lvls: {
        junior: {
          title: `Comment ton corps lit l'ADN pour se construire`,
          body: `<p>Chaque cellule de ton corps porte une copie complète de ton <strong>ADN</strong> — un colossal manuel d'instructions écrit avec seulement quatre « lettres » chimiques. Mais l'ADN ne <em>fait</em> rien tout seul. C'est une bibliothèque de recettes, et les choses que ces recettes construisent sont les <strong>protéines</strong> : les minuscules machines moléculaires qui digèrent ta nourriture, transportent l'oxygène dans ton sang, combattent les germes et tiennent tout ton corps ensemble.</p>
<p>Pour cuisiner une protéine, la cellule travaille en deux étapes. D'abord elle fait une copie jetable de la seule recette dont elle a besoin, écrite dans une molécule apparentée appelée <strong>ARNm</strong> — un peu comme photocopier une seule page pour que l'original précieux ne quitte jamais la bibliothèque. Cette copie voyage ensuite vers un atelier moléculaire appelé <strong>ribosome</strong>.</p>
<p>Le ribosome lit l'ARNm <em>trois lettres à la fois</em>. Chaque petit mot de trois lettres, appelé <strong>codon</strong>, nomme un <strong>acide aminé</strong> — et les acides aminés sont les perles qu'on enfile ensemble pour faire une protéine. Le ribosome avance, appelant codon après codon, et une chaîne croissante d'acides aminés s'emboîte. Quand la chaîne est complète elle se replie en une forme tridimensionnelle précise, et c'est cette forme qui lui dit quoi faire. Regarde-le se produire dans la simulation ci-dessous.</p>`,
          facts: [
            { e: '📖', t: `Si tu lisais ton ADN à voix haute à une lettre par seconde, il te faudrait près de cent ans pour finir — 3 milliards de lettres dans chaque cellule.` },
            { e: '⚡', t: `Un ribosome ajoute environ 10 à 20 acides aminés par seconde, et une seule cellule peut faire tourner des millions de ribosomes à la fois, produisant des protéines sans arrêt.` },
            { e: '🧩', t: `Il n'y a que 20 acides aminés différents, et pourtant enfilés ensemble dans des ordres différents ils construisent chacune des ~100 000 sortes de protéines de ton corps.` },
          ],
          formula: null, sim: 'protein',
        },
        student: {
          title: `Le dogme central : transcription et traduction`,
          body: `<p>Le flux de l'information génétique suit le <strong>dogme central</strong> : ADN → ARN → protéine. Dans la <strong>transcription</strong>, une enzyme appelée ARN polymérase ouvre une portion d'ADN et construit un brin correspondant d'ARN messager, échangeant la base thymine (T) contre l'uracile (U). Cet ARNm porte le message hors du noyau vers les ribosomes dans le cytoplasme.</p>
<p>Le message est écrit dans le <strong>code génétique</strong> : chaque <em>codon</em> de trois bases spécifie un acide aminé. Avec quatre bases il y a \\(4^3 = 64\\) codons possibles mais seulement 20 acides aminés, donc le code est <em>redondant</em> — la plupart des acides aminés ont plusieurs codons. Un codon, AUG, sert aussi de signal de « départ » (et code la méthionine) ; trois autres (UAA, UAG, UGA) sont des signaux d'« arrêt » qui terminent la chaîne.</p>
<p>Dans la <strong>traduction</strong>, le ribosome se referme sur l'ARNm et le lit codon par codon. Pour chaque codon un <strong>ARNt</strong> correspondant — portant le bon acide aminé et un <em>anticodon</em> complémentaire de trois bases — vient s'ancrer, et le ribosome relie son acide aminé à la chaîne croissante, puis avance à cliquet. Atteint un codon d'arrêt, le polypeptide fini est libéré pour se replier en une protéine fonctionnelle. C'est une chaîne de montage moléculaire d'une vitesse et d'une fidélité stupéfiantes.</p>`,
          facts: [
            { e: '🔡', t: `Le code génétique est presque universel — les mêmes codons signifient les mêmes acides aminés chez une bactérie, une banane et un humain, preuve que toute la vie partage un ancêtre unique.` },
            { e: '🧬', t: `Les molécules d'ARNt sont les « adaptateurs » que Francis Crick prédit avant qu'on ne les trouve : une extrémité lit le codon, l'autre porte l'acide aminé correspondant.` },
            { e: '💉', t: `Les vaccins à ARNm fonctionnent en livrant un ARNm fabriqué en laboratoire que tes propres ribosomes traduisent en une protéine virale, entraînant ton système immunitaire sans aucun virus vivant.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Dogme central', e: '\\text{ADN} \\to \\text{ARN} \\to \\text{protéine}' },
            { sep: 1 },
            { n: 'Taille du codon', e: '4^3 = 64\\ \\text{codons}', c: 'pour 20 acides aminés' },
            { n: 'Codon de départ', e: '\\text{AUG}', c: 'code aussi Met' },
            { n: `Codons d'arrêt`, e: '\\text{UAA, UAG, UGA}' },
            { sep: 1 },
            { n: 'Appariement des bases', e: '\\text{A–U},\\ \\text{G–C}', c: "l'ARN utilise U pas T" },
          ] }, sim: 'protein',
        },
        scholar: {
          title: `Le code, la fidélité, le repliement et la régulation`,
          body: `<h4><span class="hn">01</span>Pourquoi le code est dégénéré — et robuste</h4>
<p>La correspondance 64-vers-20 n'est pas aléatoire. Les codons d'un même acide aminé ne diffèrent d'ordinaire que par leur <em>troisième</em> base, et l'<strong>hypothèse du flottement</strong> (wobble) de Crick explique pourquoi : l'appariement en troisième position est lâche, donc un seul ARNt peut lire plusieurs codons synonymes. Le résultat est un code tamponné contre l'erreur — beaucoup de mutations ponctuelles sont <em>silencieuses</em>, et même les erreurs de traduction tendent à insérer un acide aminé chimiquement semblable. Le code génétique paraît optimisé pour minimiser le dommage des fautes.</p>
<h4><span class="hn">02</span>Bien faire : la fidélité traductionnelle</h4>
<p>Le ribosome ne commet une erreur qu'environ une fois tous les \\(10^{4}\\) codons, bien mieux que ne le permettraient les seules énergies de liaison codon-anticodon. Il achète cette précision par la <em>relecture cinétique</em> : un ARNt correct est vérifié deux fois, avec une étape irréversible et énergivore entre les deux qui donne aux mauvais ARNt plus de chances de tomber avant que la liaison ne soit scellée. La fidélité, ici, se paie en GTP — la précision coûte de l'énergie.</p>
<h4><span class="hn">03</span>Le ribosome est un ribozyme</h4>
<p>Pendant des décennies on supposa que le ribosome était une enzyme protéique. Les structures cristallines de 2000 révélèrent le contraire : le cœur catalytique qui forme la liaison peptidique est bâti entièrement d'<strong>ARN</strong>, sans aucune protéine à portée de la réaction. Le ribosome est un <em>ribozyme</em>. C'est un fossile moléculaire du <em>monde à ARN</em> — une époque avant l'ADN et les protéines où l'ARN à la fois stockait l'information et faisait la chimie — et cela remporta le prix Nobel de Chimie 2009.</p>
<h4><span class="hn">04</span>Le repliement, et le repliement qui tourne mal</h4>
<p>La fonction d'une protéine vit dans son repliement tridimensionnel, et une grande partie de ce repliement commence <em>co-traductionnellement</em>, tandis que la chaîne émerge encore du ribosome. Les protéines <em>chaperonnes</em> accompagnent le processus et protègent les intermédiaires collants. Quand le repliement échoue, les débris peuvent s'agréger — la racine moléculaire de l'Alzheimer, du Parkinson et des maladies à prions. Prédire le repliement à partir de la seule séquence dérouta la biologie pendant cinquante ans jusqu'à ce qu'AlphaFold le résolve en 2021.</p>
<h4><span class="hn">05</span>Un gène, beaucoup de protéines</h4>
<p>Chez les eucaryotes le chemin ADN-vers-protéine est lourdement édité. L'ARN fraîchement fait subit l'<em>épissage</em> : les introns sont coupés et les exons cousus ensemble, et l'<strong>épissage alternatif</strong> laisse un seul gène rendre des dizaines de protéines différentes à partir de combinaisons d'exons différentes — c'est ainsi que ~20 000 gènes humains spécifient un protéome bien plus grand. Ajoute le coiffage, la queue et les modifications chimiques des bases et le slogan « un gène, une protéine » s'effondre complètement.</p>
<h4><span class="hn">06</span>Monter et baisser le volume</h4>
<p>Les cellules contrôlent non seulement <em>ce qu'</em>elles traduisent mais <em>combien</em> et <em>quand</em>. Les <em>microARN</em> réduisent au silence des ARNm spécifiques, les riborégulateurs perçoivent des métabolites et se replient pour verrouiller leur propre traduction, et les ribosomes peuvent caler, changer de cadre ou réinitier sous stress. Cette couche régulatrice est là où la biologie synthétique intervient désormais — ingénierant des ARNm, réécrivant des codons, ajoutant même de tout nouveaux acides aminés au code — transformant la lecture des gènes en quelque chose que nous pouvons délibérément programmer.</p>`,
          facts: [
            { e: '🏆', t: `Déterminer la structure atomique du ribosome — et prouver que son cœur catalytique est de l'ARN, non une protéine — remporta le prix Nobel de Chimie 2009, le confirmant comme relique du monde à ARN.` },
            { e: '🤖', t: `AlphaFold (2021) résolut le problème du repliement des protéines vieux de 50 ans, prédisant des structures 3-D à partir de la séquence d'acides aminés avec une précision quasi expérimentale pour plus de 200 millions de protéines.` },
            { e: '🧬', t: `L'épissage alternatif laisse un gène faire beaucoup de protéines : le gène humain Dscam peut, en principe, être épissé en plus de 38 000 variantes protéiques distinctes.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Taux d'erreur de traduction`, e: '\\sim 10^{-4}\\ \\text{par codon}', c: 'via relecture cinétique' },
            { n: 'Appariement wobble', e: '\\text{3e base à liaison lâche}' },
            { sep: 1 },
            { n: 'Liaison peptidique', e: '\\text{-COOH} + \\text{H}_2\\text{N-} \\to \\text{amide} + \\text{H}_2\\text{O}' },
            { n: 'Catalyse', e: '\\text{ARNr (un ribozyme)}' },
            { sep: 1 },
            { n: 'Épissage', e: '\\text{introns dehors, exons joints}' },
            { n: 'Expansion du protéome', e: '\\sim\\!20{,}000\\ \\text{gènes} \\to 10^5\\ \\text{protéines}' },
          ] }, sim: 'protein',
        },
      },
    },
    watercycle: {
      title: `Le cycle de l'eau`,
      teaser: `La Terre a presque exactement la même eau qu'il y a quatre milliards d'années — utilisée, nettoyée et réutilisée sans fin. Le Soleil la soulève, les nuages la portent, la pluie la restitue.`,
      chips: ['Évaporation', 'Nuages', 'Précipitations'],
      lvls: {
        junior: {
          title: `L'infinie machine de recyclage de l'eau de la Terre`,
          body: `<p>Voici une pensée étrange : l'eau dans ton verre est <em>vieille</em>. Les mêmes molécules d'eau sont là depuis des milliards d'années, bues par des dinosaures, gelées dans d'anciens glaciers, tombées en pluie sur des routes romaines — sans fin utilisées, nettoyées et réutilisées. La Terre ne fabrique jamais d'eau nouvelle et n'en perd jamais ; elle ne fait que déplacer la même réserve dans une boucle géante appelée le <strong>cycle de l'eau</strong>.</p>
<p>Le moteur est le <strong>Soleil</strong>. Sa chaleur soulève l'eau des océans, des lacs et des rivières sous forme d'un gaz invisible — la <strong>vapeur d'eau</strong> — dans un processus appelé <strong>évaporation</strong>. La vapeur flotte vers le haut, et haut dans le ciel où l'air est froid elle se refroidit et se regroupe de nouveau en minuscules gouttelettes, se rassemblant en <strong>nuages</strong>. C'est la <strong>condensation</strong> : la même chose qui embue une fenêtre froide ou perle sur une boisson glacée.</p>
<p>Quand les gouttelettes d'un nuage deviennent assez lourdes, elles tombent — en pluie, neige ou grêle — c'est la <strong>précipitation</strong>. Une partie s'infiltre dans le sol pour devenir eau souterraine, une partie coule en aval dans ruisseaux et rivières, et toute finit par retourner à la mer, prête à remonter. Encore et encore, à jamais. Dans la simulation ci-dessous, chauffe le Soleil et regarde l'eau s'évaporer, former des nuages et repleuvoir.</p>`,
          facts: [
            { e: '🦕', t: `L'eau que tu as bue aujourd'hui est recyclée depuis plus de 4 milliards d'années — certaines de ces molécules étaient presque certainement un jour à l'intérieur d'un dinosaure.` },
            { e: '☁️', t: `Un seul nuage peut contenir des centaines de tonnes d'eau, et pourtant il flotte parce que cette eau est répartie en milliards de gouttelettes bien trop petites et légères pour tomber.` },
            { e: '🌊', t: `Environ 90% de l'eau qui s'évapore vient des océans — et une molécule d'eau passe, en moyenne, seulement environ neuf jours dans l'air avant de retomber.` },
          ],
          formula: null, sim: 'watercycle',
        },
        student: {
          title: `Changements d'état, chaleur latente et le bilan hydrique global`,
          body: `<p>Le cycle de l'eau est en réalité une histoire de <strong>changements d'état</strong> et de l'énergie qu'ils portent. Pour transformer l'eau liquide en vapeur tu dois fournir sa <strong>chaleur latente de vaporisation</strong>, un solide \\(2.26\\ \\text{MJ/kg}\\) — énergie absorbée de l'environnement (c'est exactement pourquoi transpirer te refroidit). Quand cette vapeur se condense plus tard dans un nuage, toute cette chaleur est relâchée de nouveau, réchauffant l'atmosphère. L'évaporation déplace silencieusement d'énormes quantités d'énergie de la surface vers le ciel.</p>
<p>Combien de vapeur l'air peut contenir monte abruptement avec la température : l'air plus chaud est plus assoiffé. Une fois l'air saturé (humidité relative 100%), tout refroidissement supplémentaire force la condensation. C'est pourquoi les nuages se forment quand l'air humide monte et se refroidit, pourquoi la rosée apparaît par matins froids, et pourquoi la température à laquelle la condensation commence — le <strong>point de rosée</strong> — est un nombre météorologique si utile.</p>
<p>Globalement les comptes doivent s'équilibrer. Chaque année environ \\(5\\times10^{5}\\ \\text{km}^3\\) d'eau s'évapore et la même quantité tombe en précipitation. Les océans perdent un peu plus par évaporation qu'ils ne récupèrent en pluie, et ce déficit est comblé par les <strong>rivières</strong> qui portent l'eau depuis les terres — le trajet de retour qui ferme la boucle. Une molécule d'eau reste dans l'air environ neuf jours, mais peut siéger dans un aquifère profond ou une calotte glaciaire des milliers d'années.</p>`,
          facts: [
            { e: '🔥', t: `Évaporer un kilogramme d'eau absorbe environ 2,26 millions de joules — assez pour soulever une petite voiture de deux mètres. C'est pourquoi le refroidissement par évaporation (sueur, rafraîchisseurs) marche si bien.` },
            { e: '💨', t: `L'air chaud contient bien plus d'humidité que le froid : l'air à 30°C peut porter environ quatre fois la vapeur d'eau de l'air à 10°C, ce qui est pourquoi les tempêtes tropicales sont si pluvieuses.` },
            { e: '🏔️', t: `L'eau peut sauter entièrement l'étape liquide : neige et glace peuvent passer directement à la vapeur par sublimation, et c'est ainsi que les glaciers rétrécissent même quand il ne monte jamais au-dessus de zéro.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Chaleur latente (vaporisation)', e: 'L_v \\approx 2.26\\ \\text{MJ/kg}' },
            { n: 'Chaleur latente (fusion)', e: 'L_f \\approx 0.334\\ \\text{MJ/kg}' },
            { sep: 1 },
            { n: 'Humidité relative', e: '\\text{HR} = \\dfrac{e}{e_s(T)}\\times100\\%' },
            { n: 'Saturation (Clausius-Clapeyron)', e: '\\dfrac{de_s}{dT} = \\dfrac{L_v\\,e_s}{R_v T^2}' },
            { sep: 1 },
            { n: 'Flux global', e: '\\approx 5\\times10^{5}\\ \\text{km}^3/\\text{an}', c: 'évaporation = précipitation' },
          ] }, sim: 'watercycle',
        },
        scholar: {
          title: `Clausius-Clapeyron, humidité atmosphérique et un cycle qui s'intensifie`,
          body: `<h4><span class="hn">01</span>La loi exponentielle derrière chaque nuage</h4>
<p>Presque tout sur l'humidité atmosphérique découle d'une relation. Intégrer l'équation de Clausius-Clapeyron donne la pression de vapeur saturante \\(e_s(T) \\approx e_0\\exp\\!\\left[\\dfrac{L_v}{R_v}\\left(\\dfrac{1}{T_0}-\\dfrac{1}{T}\\right)\\right]\\) — une montée <em>exponentielle</em> avec la température. La règle pratique est que la capacité de l'air à retenir l'eau monte d'environ <strong>7% par degré</strong> Celsius. Ce seul nombre gouverne la rosée, le brouillard, la hauteur de la base des nuages et l'humidité disponible pour chaque tempête.</p>
<h4><span class="hn">02</span>La chaleur latente comme conduite de carburant de l'atmosphère</h4>
<p>L'évaporation est un oléoduc énergétique caché. Environ la moitié de l'énergie solaire absorbée à la surface de la Terre la quitte non comme rayonnement ou conduction mais comme <em>chaleur latente</em> enfermée dans la vapeur d'eau, libérée en altitude quand la vapeur se condense. C'est la source de puissance dominante des orages et des ouragans : un grand ouragan libère de la chaleur latente à un rythme équivalent à des centaines de fois toute la production électrique de l'humanité, ce qui est pourquoi les mers chaudes les nourrissent et les mers froides les affament.</p>
<h4><span class="hn">03</span>Temps de résidence et la forme du réservoir</h4>
<p>Le cycle est un ensemble de réservoirs au renouvellement follement différent. L'atmosphère n'en contient qu'environ \\(1.3\\times10^{4}\\ \\text{km}^3\\) à tout instant — un temps de résidence moyen de ~9 jours — et pourtant elle traite le flux global entier plusieurs fois par an. Contraste avec l'eau souterraine profonde ou les grandes calottes, où une molécule peut s'attarder des milliers à des centaines de milliers d'années. Le temps de résidence \\(\\tau = V/F\\) (volume sur flux) est le seul nombre qui te dit à quelle vitesse chaque bassin répond au changement.</p>
<h4><span class="hn">04</span>Les isotopes qui identifient le cycle</h4>
<p>Les molécules d'eau ne sont pas identiques : celles bâties avec les isotopes plus lourds \\(^{18}\\text{O}\\) et le deutérium s'évaporent un peu moins volontiers et se condensent un peu plus tôt. Chaque changement d'état les <em>fractionne</em> donc, et les rapports conservés dans la pluie, les carottes de glace et les stalagmites deviennent un thermomètre du passé. Lire le \\(\\delta^{18}\\text{O}\\) le long d'une carotte de glace reconstruit des dizaines de milliers d'années de température — le cycle de l'eau écrivant sa propre histoire.</p>
<h4><span class="hn">05</span>Un cycle qu'on resserre</h4>
<p>Comme la capacité varie avec la loi de Clausius-Clapeyron, une atmosphère plus chaude retient plus d'eau, et tout le cycle <em>s'intensifie</em>. Observations et modèles s'accordent sur le schéma résumé par « le mouillé devient plus mouillé, le sec plus sec » : les extrêmes de précipitation intense varient avec l'augmentation d'humidité de ~7%/K (parfois plus vite dans la convection intense), tandis que les zones sèches subtropicales s'étendent. Un monde plus chaud n'a pas simplement plus d'eau dans l'air — il la redistribue plus violemment.</p>
<h4><span class="hn">06</span>Observer toute la boucle depuis l'orbite</h4>
<p>Le cycle moderne se mesure depuis l'espace. Les satellites GRACE pèsent les eaux souterraines et les calottes en percevant de minuscules changements de la gravité terrestre ; des missions comme GPM cartographient la pluie globale toutes les quelques heures ; et les diffusomètres suivent l'humidité du sol et l'évaporation océanique. Ensemble ils transforment un schéma de manuel en un système surveillé et quantitatif — et révèlent que l'usage humain de l'eau, la construction de barrages et l'épuisement des aquifères sont eux-mêmes devenus des termes mesurables dans le bilan hydrique de la planète.</p>`,
          facts: [
            { e: '🛰️', t: `Les satellites GRACE détectent la perte d'eaux souterraines en mesurant les changements du champ gravitationnel terrestre — assez précis pour peser l'eau pompée des aquifères à travers des continents entiers.` },
            { e: '📈', t: `La capacité de l'air à retenir l'eau monte de ~7% par °C de réchauffement (Clausius-Clapeyron), intensifiant directement les averses les plus fortes — la physique derrière des inondations plus extrêmes.` },
            { e: '🧊', t: `Les rapports des isotopes de l'oxygène (δ¹⁸O) dans les carottes de glace font office de paléothermomètre, reconstruisant les températures sur plus de 800 000 ans à partir du registre même du cycle de l'eau.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Pression de saturation', e: 'e_s(T) = e_0\\exp\\!\\left[\\tfrac{L_v}{R_v}\\left(\\tfrac{1}{T_0}-\\tfrac{1}{T}\\right)\\right]' },
            { n: 'Sensibilité C-C', e: '\\dfrac{1}{e_s}\\dfrac{de_s}{dT} \\approx 7\\%\\ \\text{par °C}' },
            { sep: 1 },
            { n: 'Temps de résidence', e: '\\tau = V/F', c: 'atmosphère ≈ 9 jours' },
            { n: 'Réserve atmosphérique', e: 'V_{\\text{atm}} \\approx 1.3\\times10^{4}\\ \\text{km}^3' },
            { sep: 1 },
            { n: 'Bilan énergétique de surface', e: 'R_n = H + LE + G', c: 'LE = flux de chaleur latente' },
          ] }, sim: 'watercycle',
        },
      },
    },
    optics: {
      title: 'Optique : lumière, lentilles et réfraction',
      teaser: `Pourquoi une lentille retourne-t-elle le monde à l'envers, et une paille paraît-elle brisée dans un verre d'eau ? La lumière se courbe — et cette courbure bâtit chaque œil, appareil photo et télescope.`,
      chips: ['Lentilles', 'Réfraction', 'Optique'],
      lvls: {
        junior: {
          title: `Comment la lumière se courbe pour faire des images`,
          body: `<p>La lumière voyage presque toujours en lignes parfaitement droites — c'est pourquoi tu obtiens des ombres nettes et pourquoi tu ne peux pas voir au coin d'un mur. Mais à l'instant où la lumière passe d'un matériau transparent à un autre, de l'air à l'eau ou au verre, elle se <strong>courbe</strong>. Cette courbure s'appelle la <strong>réfraction</strong>, et c'est la raison pour laquelle une paille dans un verre d'eau paraît cassée en deux, et pourquoi une pièce au fond d'une piscine semble plus haute qu'elle ne l'est.</p>
<p>Façonne un morceau de verre juste comme il faut et tu peux diriger cette courbure exprès — c'est une <strong>lentille</strong>. Une loupe se bombe au milieu, donc elle rassemble les rayons épars de lumière et les canalise pour qu'ils se rejoignent en un seul point. Tiens-la à la bonne distance et ces rayons se croisent et reconstruisent une image de ce d'où ils venaient — souvent retournée à l'envers. Ce croisement est exactement pourquoi un appareil photo, un télescope et ton propre œil peuvent tous prendre la lumière qui rebondit sur le monde et la plier en une image nette.</p>
<p>Ton œil le fait avec une lentille souple et vivante que des muscles pressent pour changer sa forme, faisant la mise au point de près puis de loin en une fraction de seconde. Un appareil photo fait le même travail avec une lentille de verre coulissante. Dans la simulation ci-dessous, déplace l'objet et remodèle la lentille, et regarde les rayons se croiser pour bâtir l'image — réelle, retournée et redimensionnée.</p>`,
          facts: [
            { e: '👁️', t: `La lentille de ton œil retourne chaque image à l'envers avant qu'elle n'atteigne la rétine — ton cerveau remet discrètement le monde entier à l'endroit.` },
            { e: '🌈', t: `Un arc-en-ciel est la réfraction en action : la lumière du soleil se courbe en entrant dans chaque goutte de pluie, se séparant en couleurs parce que chaque couleur se courbe d'une quantité légèrement différente.` },
            { e: '🔭', t: `La lentille d'un grand télescope peut faire plus d'un mètre de large — plus la lentille est large, plus elle recueille de lumière stellaire, et plus les choses qu'elle peut voir sont faibles.` },
          ],
          formula: null, sim: 'optics',
        },
        student: {
          title: `La loi de Snell et l'équation des lentilles minces`,
          body: `<p>La réfraction se produit parce que la lumière voyage à des vitesses différentes dans différents matériaux, et chaque matériau est noté par son <strong>indice de réfraction</strong> \\(n = c/v\\) — combien de fois plus lentement la lumière y va que dans le vide (l'eau vaut 1,33, le verre environ 1,5). À une frontière le rayon se courbe exactement de la quantité qui garde ses fronts d'onde en phase, capturée par la <strong>loi de Snell</strong> \\(n_1\\sin\\theta_1 = n_2\\sin\\theta_2\\). Entrer dans un milieu plus dense courbe le rayon vers la normale ; en sortir le courbe à l'opposé.</p>
<p>Pousse cet angle de sortie assez loin et quelque chose de spectaculaire arrive : au-delà de l'<em>angle critique</em> \\(\\theta_c = \\arcsin(n_2/n_1)\\) le rayon ne peut plus s'échapper du tout et se réfléchit entièrement à l'intérieur — la <strong>réflexion totale interne</strong>, l'astuce qui canalise la lumière dans une fibre optique sur des milliers de kilomètres avec à peine de perte. Une lentille réfracte simplement un rayon deux fois, une fois à chaque surface courbe, et sa puissance de focalisation est fixée par l'<em>équation des lentilleurs</em> à partir de ces courbures et de l'indice du verre.</p>
<p>Là où une lentille forme son image suit la magnifiquement simple <strong>équation des lentilles minces</strong> \\(\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}\\), liant la distance focale \\(f\\), la distance objet \\(d_o\\) et la distance image \\(d_i\\). La taille et l'orientation de l'image viennent du grandissement \\(m = -d_i/d_o\\) : un \\(m\\) négatif signifie renversée. Place l'objet au-delà de \\(f\\) et tu obtiens une image <em>réelle</em>, retournée, que tu peux capter sur un écran (un appareil photo) ; amène-le en deçà de \\(f\\) et l'image devient <em>virtuelle</em>, droite et agrandie (une loupe).</p>`,
          facts: [
            { e: '💎', t: `L'indice de réfraction du diamant est un énorme 2,42, lui donnant un minuscule angle critique de 24° — la lumière rebondit à l'intérieur pendant des lustres avant de s'échapper, ce qui est pourquoi les diamants taillés scintillent si férocement.` },
            { e: '📡', t: `Une seule fibre optique repose sur la réflexion totale interne pour porter la lumière — les câbles modernes déplacent plus de 100 térabits par seconde, l'épine dorsale de tout l'internet.` },
            { e: '👓', t: `Les lunettes corrigent la vue en ajoutant juste la bonne distance focale : lentilles convergentes pour l'hypermétropie, lentilles divergentes (f négatif) pour la myopie.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Indice de réfraction`, e: 'n = c/v', c: 'eau 1,33, verre ~1,5' },
            { n: `Loi de Snell`, e: 'n_1\\sin\\theta_1 = n_2\\sin\\theta_2' },
            { sep: 1 },
            { n: `Angle critique`, e: '\\theta_c = \\arcsin(n_2/n_1)', c: 'réflexion totale interne' },
            { n: `Équation des lentilles minces`, e: '\\dfrac{1}{f} = \\dfrac{1}{d_o} + \\dfrac{1}{d_i}' },
            { sep: 1 },
            { n: `Grandissement`, e: 'm = -\\dfrac{d_i}{d_o}', c: 'm<0 = renversée' },
            { n: `Lentilleurs`, e: '\\dfrac{1}{f} = (n-1)\\left(\\dfrac{1}{R_1} - \\dfrac{1}{R_2}\\right)' },
          ] }, sim: 'optics',
        },
        scholar: {
          title: `Optique ondulatoire, aberrations et limite de diffraction`,
          body: `<h4><span class="hn">01</span>Les rayons sont des raccourcis ; la lumière est une onde</h4>
<p>L'optique géométrique — des lignes droites qui se courbent aux surfaces — est une superbe approximation, mais elle n'est que la limite à courte longueur d'onde de quelque chose de plus profond. Le <strong>principe de Fermat</strong> reformule chaque chemin que prend la lumière comme celui de <em>longueur de chemin optique stationnaire</em>, \\(\\delta\\!\\int n\\,ds = 0\\). La loi de Snell, la loi de la réflexion, l'existence même des points focaux découlent tous de ce seul énoncé variationnel — la lumière se comporte comme si elle flairait la route extrémale. C'est la même mathématique qui réapparaît comme principe de moindre action en mécanique.</p>
<h4><span class="hn">02</span>La réfraction : des fronts d'onde qui changent de vitesse</h4>
<p>Pourquoi un rayon se courbe-t-il vers la normale dans le verre ? Imagine le front d'onde comme une rangée en marche : quand une extrémité entre la première dans le milieu plus lent, elle traîne tandis que l'autre garde l'allure, et tout le front pivote — la construction de Huygens rendue littérale. La vitesse et la longueur d'onde chutent du facteur \\(n\\) tandis que la fréquence est conservée, donc \\(\\lambda_{\\text{milieu}} = \\lambda_0/n\\). L'image des rayons et celle des ondes s'accordent exactement, mais seule l'image ondulatoire survit quand la lentille devient petite.</p>
<h4><span class="hn">03</span>Pourquoi aucune lentille n'est parfaite : les aberrations</h4>
<p>L'équation soignée des lentilles minces suppose que les rayons rasent l'axe. Les vraies lentilles la violent. L'<em>aberration sphérique</em> focalise les rayons de bord et les rayons centraux en des points différents parce qu'une sphère n'est pas la forme idéale ; l'<em>aberration chromatique</em> étale la couleur parce que \\(n(\\lambda)\\) signifie que la lumière bleue se courbe plus que la rouge, donc une lentille a une distance focale différente pour chaque couleur. Les concepteurs ripostent en cimentant verres crown et flint en <em>doublets achromatiques</em> et en polissant des surfaces <em>asphériques</em> — tout un artisanat voué à défaire les imperfections de la sphère.</p>
<h4><span class="hn">04</span>Le mur qu'on ne peut escalader : la diffraction</h4>
<p>Même une lentille sans défaut ne peut focaliser la lumière en un point. Parce que la lumière est une onde traversant une ouverture finie, elle s'étale en une <strong>tache d'Airy</strong>, et deux points se brouillent ensemble dès qu'ils sont plus proches que le <em>critère de Rayleigh</em> \\(\\theta_{\\min} = 1.22\\,\\lambda/D\\). La résolution est fixée par l'<em>ouverture numérique</em>, \\(d_{\\min} = 0.61\\,\\lambda/\\text{NA}\\) : la plus petite chose qu'un microscope peut séparer proprement est à peu près une demi-longueur d'onde, quelques centaines de nanomètres. C'est une limite de la physique, non de l'ingénierie.</p>
<h4><span class="hn">05</span>Une lentille calcule une transformée de Fourier</h4>
<p>Il y a une identité saisissante au cœur de l'optique : le champ lumineux dans le plan focal arrière d'une lentille est la <strong>transformée de Fourier spatiale</strong> du champ dans son plan focal avant. Le détail fin de l'objet devient une haute fréquence spatiale loin de l'axe, donc une ouverture qui coupe ces rayons est littéralement un filtre passe-bas. C'est le fondement de l'<em>optique de Fourier</em>, du filtrage spatial, et de la fonction de transfert de modulation qui quantifie exactement combien de contraste une lentille préserve à chaque niveau de détail.</p>
<h4><span class="hn">06</span>Tricher avec la limite de diffraction</h4>
<p>Pendant un siècle la limite de Rayleigh parut absolue — puis la microscopie l'a simplement contournée. Le <em>STED</em> rétrécit la tache brillante avec un beignet de lumière de déplétion ; le <em>PALM/STORM</em> allume et éteint des molécules uniques et localise chacune bien plus précisément qu'elle ne se brouille, remportant le prix Nobel de Chimie 2014. Pendant ce temps les <em>métamatériaux</em> et les sondes de champ proche exploitent les ondes évanescentes que les lentilles ordinaires jettent. La limite de diffraction tient toujours pour la lumière propagative en champ lointain — mais l'astuce sur <em>quelle</em> lumière on utilise a poussé l'imagerie optique jusqu'à l'échelle des molécules individuelles.</p>`,
          facts: [
            { e: '🏆', t: `La microscopie à super-résolution (STED, PALM/STORM) a brisé la limite de diffraction et remporté le prix Nobel de Chimie 2014, imageant des structures de ~20 nm — dix fois plus fines que la lumière « devrait » permettre.` },
            { e: '🔭', t: `Le miroir de 6,5 m du télescope spatial James Webb lui donne une résolution limitée par la diffraction de ~0,1 seconde d'arc dans l'infrarouge — assez nette pour distinguer une pièce à ~40 km.` },
            { e: '🌀', t: `Une lentille effectue une transformée de Fourier optique à la vitesse de la lumière sans consommation d'énergie — une idée aujourd'hui ravivée pour le calcul analogique et optique ultra-rapide.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Principe de Fermat`, e: '\\delta\\!\\int n\\,ds = 0' },
            { n: `Longueur d'onde dans le milieu`, e: '\\lambda_{\\text{med}} = \\lambda_0/n' },
            { sep: 1 },
            { n: `Critère de Rayleigh`, e: '\\theta_{\\min} = 1.22\\,\\dfrac{\\lambda}{D}' },
            { n: `Résolution`, e: 'd_{\\min} = 0.61\\,\\dfrac{\\lambda}{\\text{NA}}', c: 'NA = n\\sin\\theta' },
            { sep: 1 },
            { n: `Lentilleurs`, e: '\\dfrac{1}{f} = (n-1)\\left(\\dfrac{1}{R_1} - \\dfrac{1}{R_2}\\right)' },
            { n: `Dispersion`, e: 'n = n(\\lambda)', c: 'aberration chromatique' },
          ] }, sim: 'optics',
        },
      },
    },
    pendulum: {
      title: 'Pendules et mouvement harmonique simple',
      teaser: `Un poids qui oscille garde un temps presque parfait — et il se moque de son poids ou de l'amplitude de son balancement. Pourquoi le même rythme fait-il tourner horloges, ressorts, atomes et ponts ?`,
      chips: ['Oscillation', 'Période', 'Résonance'],
      lvls: {
        junior: {
          title: `Le balancement régulier qui donne l'heure`,
          body: `<p>Attache un poids à une ficelle, tire-le d'un côté et lâche : il balaie, revient, balaie, revient — encore et encore, dans un rythme si régulier que tu pourrais régler une horloge dessus. Les gens ont fait exactement cela pendant trois cents ans. Ce poids qui oscille est un <strong>pendule</strong>, et la régularité de son battement est l'une des merveilles tranquilles de la physique.</p>
<p>Le surprenant est ce dont dépend le rythme — et ce dont il ne dépend pas. Rends le poids plus lourd : le tempo ne change pas. Tire-le plus loin pour qu'il balaie plus large : il voyage plus vite mais met le <em>même temps</em> pour revenir, donc le tempo ne change guère non plus. La seule chose qui compte vraiment est la <strong>longueur</strong> de la ficelle. Ficelle courte, tics rapides et pressés ; ficelle longue, balancements lents et paresseux. La légende dit que Galilée le remarqua enfant, chronométrant une lampe oscillante dans une cathédrale contre son propre pouls.</p>
<p>Cette fiabilité fit du pendule le cœur des horloges les plus précises du monde pendant des siècles. Et le même rythme de va-et-vient est partout dès qu'on regarde : un enfant sur une balançoire, une corde de guitare qui vibre, un ressort qui rebondit, même un gratte-ciel qui oscille au vent. Dans la simulation ci-dessous, change la longueur et l'amplitude et regarde ce qui arrive au battement.</p>`,
          facts: [
            { e: '⛪', t: `Galilée chronométra une lampe de cathédrale oscillante contre son propre pouls vers 1583 et réalisa que la période change à peine avec l'amplitude — la découverte derrière l'horloge à pendule.` },
            { e: '🌍', t: `Un pendule oscille plus lentement sur la Lune : avec un sixième de la gravité terrestre, le même pendule met environ 2,5 fois plus de temps par balancement.` },
            { e: '🏢', t: `Les gratte-ciel suspendent de géants « amortisseurs à masse accordée » — des pendules pesant des centaines de tonnes — qui oscillent à l'opposé du bâtiment pour annuler le balancement dans le vent.` },
          ],
          formula: null, sim: 'pendulum',
        },
        student: {
          title: `Le mouvement harmonique simple et la période du pendule`,
          body: `<p>Écarte un pendule du centre et la gravité le rappelle — et fait crucial, pour de petits balancements le rappel est très proche de <em>proportionnel au déplacement</em>, \\(F \\approx -kx\\). Tout système obéissant à cette seule règle exécute un <strong>mouvement harmonique simple</strong> : la position trace une parfaite sinusoïde dans le temps, \\(x(t) = A\\cos(\\omega t)\\), avec la pulsation \\(\\omega = \\sqrt{k/m}\\). La même équation gouverne une masse sur un ressort, une bouée flottante et la vibration d'une molécule.</p>
<p>Pour un pendule la mathématique livre le célèbre résultat \\(T = 2\\pi\\sqrt{L/g}\\) : la période croît avec la racine carrée de la longueur et rétrécit dans une gravité plus forte — et ne contient <em>ni la masse ni l'amplitude</em>. C'est l'<strong>isochronisme</strong> du pendule : quadruple la longueur pour doubler la période ; échange le lest contre un deux fois plus lourd et rien ne change. La fréquence est juste \\(f = 1/T\\), le nombre de balancements par seconde.</p>
<p>L'énergie est ce qui l'entretient. Aux extrémités du balancement toute l'énergie est <em>potentielle</em> (le lest est au plus haut, momentanément immobile) ; en bas elle est toute <em>cinétique</em> (au plus bas et au plus vite), et le total \\(E = \\tfrac{1}{2}kA^2\\) reste fixe tandis qu'il ballotte sans fin entre les deux. Rigoureusement, tout cela ne tient que pour de petits angles — balaie trop large et le rappel cesse d'être parfaitement linéaire, et la période s'allonge un peu.</p>`,
          facts: [
            { e: '⏱️', t: `Un pendule d'exactement 1 mètre de long (avec un petit balancement) a une période très proche de 2 secondes sur Terre — une seconde par côté, la base du « pendule à secondes ».` },
            { e: '🎸', t: `Une corde de guitare, une suspension de voiture et le quartz d'une montre sont tous des oscillateurs harmoniques simples — même mouvement sinusoïdal, fréquences follement différentes.` },
            { e: '🌀', t: `Le pendule de Foucault oscille dans un plan fixe tandis que la Terre tourne dessous — un géant pendule qui prouve visiblement que la planète tourne.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Force de rappel`, e: 'F = -kx', c: 'petit déplacement' },
            { n: `Solution du MHS`, e: 'x(t) = A\\cos(\\omega t)' },
            { sep: 1 },
            { n: `Pulsation`, e: '\\omega = \\sqrt{k/m}' },
            { n: `Période du pendule`, e: 'T = 2\\pi\\sqrt{L/g}', c: 'ni masse ni amplitude' },
            { sep: 1 },
            { n: `Fréquence`, e: 'f = 1/T = \\omega/2\\pi' },
            { n: `Énergie totale`, e: 'E = \\tfrac{1}{2}kA^2', c: 'EC + EP conservées' },
          ] }, sim: 'pendulum',
        },
        scholar: {
          title: `Non-linéarité, amortissement, résonance et chaos`,
          body: `<h4><span class="hn">01</span>Pourquoi l'astuce des petits angles fonctionne</h4>
<p>La vraie équation d'un pendule est non linéaire : \\(\\ddot\\theta + (g/L)\\sin\\theta = 0\\). Elle n'a pas de solution en fonctions élémentaires. L'échappatoire est l'approximation \\(\\sin\\theta \\approx \\theta\\), valable à 1% près jusqu'à environ 14°, qui linéarise l'équation en l'oscillateur harmonique \\(\\ddot\\theta + \\omega^2\\theta = 0\\) avec \\(\\omega = \\sqrt{g/L}\\). Presque tout le mouvement harmonique « simple » n'est en réalité que cette décision tranquille de jeter les termes supérieurs d'un sinus.</p>
<h4><span class="hn">02</span>Ce que coûte l'approximation</h4>
<p>Garde le \\(\\sin\\theta\\) complet et la période cesse d'être constante — elle s'allonge avec l'amplitude, exactement, comme une <em>intégrale elliptique</em> complète \\(T = 4\\sqrt{L/g}\\,K(\\sin\\tfrac{\\theta_0}{2})\\). Développée, \\(T \\approx T_0\\left(1 + \\tfrac{1}{16}\\theta_0^2 + \\cdots\\right)\\) : un balancement de 30° tourne environ 1,7% lent, un de 90° presque 18%. L'isochronisme est une fiction de petit angle — les vraies horloges à pendule sont conçues pour garder l'amplitude minuscule et constante pour exactement cette raison.</p>
<h4><span class="hn">03</span>Ajouter le frottement : l'oscillateur amorti</h4>
<p>La réalité draine l'énergie. Une force résistive proportionnelle à la vitesse donne \\(\\ddot x + 2\\gamma\\dot x + \\omega_0^2 x = 0\\), dont le comportement se scinde en trois selon le taux d'amortissement \\(\\zeta\\) : <em>sous-amorti</em> (\\(\\zeta<1\\)) s'éteint en oscillant sous une enveloppe décroissante \\(e^{-\\gamma t}\\) ; <em>amortissement critique</em> (\\(\\zeta=1\\)) revient au repos le plus vite sans dépassement — la cible d'une suspension de voiture ou d'un ferme-porte ; <em>suramorti</em> (\\(\\zeta>1\\)) rampe en arrière avec lenteur.</p>
<h4><span class="hn">04</span>Pousser au bon moment : la résonance</h4>
<p>Excite un oscillateur avec une force périodique et sa réponse permanente culmine brusquement quand la fréquence d'excitation approche la naturelle \\(\\omega_0\\) — la <strong>résonance</strong>, amplitude \\(A(\\omega) = F_0/m\\big/\\sqrt{(\\omega_0^2-\\omega^2)^2 + 4\\gamma^2\\omega^2}\\). Pousse une balançoire en cadence et elle grimpe de plus en plus haut sur de minuscules poussées. Le même effet brise un verre à vin avec une note chantée, et c'est pourquoi les soldats rompent le pas en traversant un pont.</p>
<h4><span class="hn">05</span>À quel point le pic est aigu : le facteur Q</h4>
<p>Le <em>facteur de qualité</em> \\(Q = \\omega_0/2\\gamma\\) mesure combien un oscillateur est faiblement amorti — le nombre de radians qu'il parcourt en oscillant avant que son énergie ne chute de \\(1/e\\), et l'acuité de sa résonance. Une suspension de voiture a \\(Q \\sim 1\\) ; un cristal de quartz de montre atteint \\(10^4\\text{–}10^6\\) ; les miroirs du détecteur d'ondes gravitationnelles LIGO sont conçus vers \\(Q \\sim 10^7\\), ce qui leur permet d'enregistrer un changement de longueur de \\(10^{-18}\\) m.</p>
<h4><span class="hn">06</span>Deux tiges, aucune prédiction : le chaos</h4>
<p>Suspends un pendule au bout d'un autre et le monde ordonné s'effondre. Le <strong>double pendule</strong> est pleinement déterministe et pourtant <em>chaotique</em> : son mouvement dépend si sensiblement de l'angle de départ que deux lâchers différant d'un cheveu divergent complètement en quelques secondes, un exposant de Lyapunov positif en action. Sa trajectoire dans l'espace des phases remplit une région étrange et repliée plutôt que de se refermer en une boucle nette — la même mathématique qui rend la météo imprévisible au-delà de quelques semaines.</p>`,
          facts: [
            { e: '📡', t: `Le facteur Q des masses d'essai des miroirs de LIGO dépasse 10 millions — si faiblement amorties qu'une seule poussée résonnerait pendant des heures, essentiel pour détecter les ondes gravitationnelles.` },
            { e: '🌉', t: `Le pont de Tacoma Narrows se déchira en 1940 quand le vent le poussa près d'une fréquence naturelle — une leçon de manuel sur la résonance (bien que le vrai mécanisme fût un flottement aéroélastique).` },
            { e: '🎲', t: `Un double pendule est un exemple de classe de chaos déterministe : des lâchers d'apparence identique produisent des mouvements follement différents, rendant sa trajectoire à long terme impossible à prévoir.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Pendule non linéaire`, e: '\\ddot\\theta + \\tfrac{g}{L}\\sin\\theta = 0' },
            { n: `Période exacte`, e: 'T = 4\\sqrt{L/g}\\,K\\!\\left(\\sin\\tfrac{\\theta_0}{2}\\right)' },
            { sep: 1 },
            { n: `Correction d'amplitude`, e: 'T \\approx T_0\\left(1 + \\tfrac{1}{16}\\theta_0^2\\right)' },
            { n: `Oscillateur amorti`, e: '\\ddot x + 2\\gamma\\dot x + \\omega_0^2 x = 0' },
            { sep: 1 },
            { n: `Résonance`, e: 'A(\\omega) = \\dfrac{F_0/m}{\\sqrt{(\\omega_0^2-\\omega^2)^2 + 4\\gamma^2\\omega^2}}' },
            { n: `Facteur de qualité`, e: 'Q = \\omega_0/2\\gamma' },
          ] }, sim: 'pendulum',
        },
      },
    },
    gaslaws: {
      title: 'Les lois des gaz',
      teaser: `Comprime un gaz et il repousse ; chauffe-le et il s'efforce de s'échapper. Trois lois simples — et une équation — capturent comment pression, volume et température dansent ensemble.`,
      chips: ['Pression', 'Gaz parfait', 'Théorie cinétique'],
      lvls: {
        junior: {
          title: `Pourquoi les gaz poussent, se compriment et gonflent`,
          body: `<p>Un gaz n'a pas de forme propre — il s'étale pour remplir n'importe quel récipient où tu le mets, ballon, pneu ou pièce entière. C'est parce qu'un gaz est en réalité un essaim de particules inimaginablement minuscules, filant à des centaines de mètres par seconde et rebondissant sur tout ce qu'elles heurtent. Chaque fois qu'une de ces particules cogne une paroi elle donne une minuscule poussée, et le tambourinement constant de milliards d'entre elles est ce que nous ressentons comme la <strong>pression</strong>.</p>
<p>Maintenant joue avec l'essaim. Comprime le récipient <em>plus petit</em> et les mêmes particules sont entassées dans moins d'espace, donc elles frappent les parois plus souvent — la pression bondit. C'est pourquoi une pompe à vélo devient plus dure à pousser à mesure que tu descends. <strong>Chauffe</strong> plutôt le gaz et les particules accélèrent, percutant les parois plus fort et plus souvent — la pression remonte, et c'est pourquoi une canette scellée jetée au feu finit par éclater.</p>
<p>Ces règles simples gouvernent une part surprenante du monde : elles gonflent tes poumons, soulèvent les montgolfières, allument les moteurs des voitures et font éclater un sachet de pop-corn. Dans la simulation ci-dessous, change la température et la taille de la boîte et regarde les particules — et la pression — répondre.</p>`,
          facts: [
            { e: '🎈', t: `Un ballon d'hélium rétrécit au froid et gonfle à la chaleur : refroidis le gaz et ses particules ralentissent et se serrent, chauffe-le et elles s'étalent.` },
            { e: '👂', t: `Tes oreilles se « débouchent » en avion parce que la pression de l'air dehors chute avec l'altitude tandis que l'air piégé derrière ton tympan reste en place — jusqu'à ce qu'il s'échappe avec un clic.` },
            { e: '🍿', t: `Le pop-corn explose parce que l'eau dans chaque grain devient vapeur et sa pression monte jusqu'à ce que l'enveloppe ne tienne plus — une loi des gaz dans ta cuisine.` },
          ],
          formula: null, sim: 'gaslaws',
        },
        student: {
          title: `La loi des gaz parfaits et d'où elle vient`,
          body: `<p>Trois siècles d'expériences ont distillé le comportement des gaz en une poignée de relations. <strong>Loi de Boyle</strong> : à température fixe, pression et volume sont inversement liés, \\(P \\propto 1/V\\) — divise le volume par deux, double la pression. <strong>Loi de Charles</strong> : à pression fixe, le volume croît avec la température absolue, \\(V \\propto T\\). <strong>Loi de Gay-Lussac</strong> : à volume fixe, la pression croît avec la température, \\(P \\propto T\\). Fait crucial, le \\(T\\) ici est mesuré depuis le <em>zéro absolu</em> — l'échelle Kelvin — car c'est là que la pression d'un gaz, en principe, s'évanouirait.</p>
<p>Assemble-les avec l'intuition d'Avogadro — des volumes égaux de n'importe quel gaz contiennent des nombres égaux de particules — et elles s'effondrent en un seul énoncé propre, la <strong>loi des gaz parfaits</strong> \\(PV = nRT\\). Ici \\(n\\) est la quantité en moles et \\(R\\) la constante universelle des gaz, \\(8.314\\ \\text{J mol}^{-1}\\text{K}^{-1}\\). Chaque loi antérieure n'est que cette équation avec une variable tenue immobile.</p>
<p>D'où vient-elle ? Des particules elles-mêmes. La <strong>théorie cinétique des gaz</strong> figure la pression comme le recul collectif d'innombrables impacts moléculaires sur les parois, et lie la température directement à leur vitesse : l'énergie cinétique moyenne d'une particule est \\(\\tfrac{3}{2}k_B T\\). La température, autrement dit, <em>est</em> le mouvement moléculaire — chauffe un gaz et tu accélères littéralement ses particules.</p>`,
          facts: [
            { e: '🌡️', t: `Le zéro absolu est −273,15°C : extrapole le volume décroissant d'un gaz le long d'une droite de la loi de Charles et il atteindrait zéro exactement là — la chose la plus froide qui puisse exister.` },
            { e: '⚗️', t: `Une mole de n'importe quel gaz parfait remplit 22,4 litres à 0°C et 1 atm — le même volume que ce soit de l'hydrogène ou du dioxyde de carbone, car seul le nombre de particules compte.` },
            { e: '🫁', t: `Tu respires par la loi de Boyle : ton diaphragme agrandit ta poitrine, abaissant la pression dans tes poumons sous celle de l'air extérieur, qui se rue alors à l'intérieur.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Loi de Boyle`, e: 'P \\propto 1/V', c: 'T constante' },
            { n: `Loi de Charles`, e: 'V \\propto T', c: 'P constante' },
            { n: `Gay-Lussac`, e: 'P \\propto T', c: 'V constant' },
            { sep: 1 },
            { n: 'Loi des gaz parfaits', e: 'PV = nRT', c: 'R = 8.314 J mol⁻¹K⁻¹' },
            { n: 'Loi combinée', e: '\\dfrac{P_1V_1}{T_1} = \\dfrac{P_2V_2}{T_2}' },
            { sep: 1 },
            { n: 'Énergie cinétique moyenne', e: '\\langle E_k\\rangle = \\tfrac{3}{2}k_B T' },
          ] }, sim: 'gaslaws',
        },
        scholar: {
          title: `Théorie cinétique, distributions et gaz réels`,
          body: `<h4><span class="hn">01</span>La pression, dérivée des premiers principes</h4>
<p>La loi des gaz parfaits n'est pas un axiome — elle tombe de la mécanique. Traite le gaz comme des particules ponctuelles en mouvement élastique et aléatoire et compte la quantité de mouvement qu'elles livrent à une paroi : la pression revient à \\(P = \\tfrac{1}{3}\\dfrac{N}{V}m\\langle v^2\\rangle\\). Compare avec \\(PV = Nk_B T\\) et tu es forcé d'identifier \\(\\tfrac{1}{2}m\\langle v^2\\rangle = \\tfrac{3}{2}k_B T\\). La température émerge comme rien d'autre que l'énergie cinétique translationnelle moyenne par particule — un pont des lois de Newton droit à la thermodynamique.</p>
<h4><span class="hn">02</span>Non une vitesse mais un spectre</h4>
<p>Les particules ne partagent pas une vitesse unique ; elles suivent la <strong>distribution de Maxwell-Boltzmann</strong>, \\(f(v) \\propto v^2 e^{-mv^2/2k_B T}\\), une courbe asymétrique à longue queue rapide. Elle donne trois vitesses « moyennes » distinctes — la plus probable, la moyenne et la quadratique moyenne — et la courbe s'élargit et se décale vers la droite à mesure que \\(T\\) monte. Cette queue à haute vitesse compte énormément : ce sont les rares molécules rapides qui franchissent les barrières de réaction, donc elle sous-tend la dépendance exponentielle en température de la chimie elle-même.</p>
<h4><span class="hn">03</span>Énergie répartie : l'équipartition</h4>
<p>Pourquoi \\(\\tfrac{3}{2}k_B T\\) ? Le <strong>théorème d'équipartition</strong> attribue à chaque degré de liberté quadratique exactement \\(\\tfrac{1}{2}k_B T\\) d'énergie. Un gaz monoatomique en a trois (mouvement en x, y, z), donnant \\(C_V = \\tfrac{3}{2}R\\) ; un gaz diatomique ajoute deux modes de rotation pour \\(\\tfrac{5}{2}R\\). La part surprenante est que les modes vibrationnels restent silencieux jusqu'à ce que le gaz soit assez chaud — un effet purement quantique que la physique classique ne put jamais expliquer, et une première fissure dans le monde classique.</p>
<h4><span class="hn">04</span>Quand les gaz réels se comportent mal</h4>
<p>La loi parfaite suppose que les particules sont des points qui ne s'attirent jamais — faux sur les deux plans. Les vraies molécules occupent de l'espace et sentent de faibles attractions à longue portée, donc <strong>van der Waals</strong> a rapiécé l'équation, \\(\\left(P + \\dfrac{an^2}{V^2}\\right)(V - nb) = nRT\\) : le terme \\(a\\) corrige l'attraction, le terme \\(b\\) la taille finie. Cette seule correction prédit quelque chose que la loi parfaite ne put jamais — qu'un gaz peut se condenser en liquide, avec un point critique au-delà duquel les deux états deviennent indistinguables.</p>
<h4><span class="hn">05</span>Jusqu'où, à quelle vitesse : le transport</h4>
<p>Entre deux collisions une molécule parcourt un <em>libre parcours moyen</em> \\(\\lambda = 1/(\\sqrt{2}\\,n\\sigma)\\) — à pression ambiante seulement environ 70 nanomètres, donc une molécule entre en collision des milliards de fois par seconde. Ce zigzag microscopique fixe la viscosité du gaz, la conductivité thermique et le taux de diffusion, et explique la <strong>loi de Graham</strong> : les molécules plus légères vont plus vite et effusent plus rapidement, exactement le principe jadis utilisé pour séparer les isotopes de l'uranium pour les premières bombes atomiques.</p>
<h4><span class="hn">06</span>Les limites de l'image</h4>
<p>Refroidis un gaz assez et même van der Waals échoue, car la statistique quantique prend le dessus. Une fois que la longueur d'onde thermique de de Broglie rivalise avec l'espacement entre particules, des particules identiques ne peuvent plus être traitées comme indépendantes : les bosons s'entassent dans un seul état pour former un <em>condensat de Bose-Einstein</em>, tandis que les fermions sont forcés de s'écarter par le principe de Pauli, soutenant naines blanches et étoiles à neutrons contre la gravité. Les humbles lois des gaz sont le coin à haute température et basse densité d'un paysage quantique bien plus étrange.</p>`,
          facts: [
            { e: '🥶', t: `En 1995 les physiciens refroidirent un gaz à moins d'un millionième de degré au-dessus du zéro absolu, formant un condensat de Bose-Einstein — des milliers d'atomes partageant un unique état quantique (prix Nobel 2001).` },
            { e: '☢️', t: `La loi d'effusion de Graham sépara l'uranium-235 de l'uranium-238 pour les premières armes nucléaires : l'isotope plus léger diffuse de très peu plus vite à travers une barrière poreuse.` },
            { e: '💨', t: `À température ambiante les molécules d'air vont en moyenne à ~500 m/s — plus vite qu'un jet — et pourtant un parfum traverse une pièce lentement car chaque molécule entre en collision des milliards de fois par seconde.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Pression cinétique', e: 'P = \\tfrac{1}{3}\\dfrac{N}{V}m\\langle v^2\\rangle' },
            { n: 'Lien avec la température', e: '\\tfrac{1}{2}m\\langle v^2\\rangle = \\tfrac{3}{2}k_B T' },
            { sep: 1 },
            { n: 'Maxwell-Boltzmann', e: 'f(v) \\propto v^2 e^{-mv^2/2k_B T}' },
            { n: 'Vitesse quadratique moyenne', e: 'v_{\\text{rms}} = \\sqrt{3k_B T/m}' },
            { sep: 1 },
            { n: 'Van der Waals', e: '\\left(P + \\dfrac{an^2}{V^2}\\right)(V - nb) = nRT' },
            { n: 'Libre parcours moyen', e: '\\lambda = \\dfrac{1}{\\sqrt{2}\\,n\\sigma}' },
          ] }, sim: 'gaslaws',
        },
      },
    },
    sorting: {
      title: 'Algorithmes de tri',
      teaser: 'Comment un ordinateur trie-t-il un million de nombres en millisecondes — et pourquoi la stratégie compte-t-elle ?',
      chips: ['Algorithmes', 'Big-O', 'Informatique'],
      lvls: {
        junior: {
          title: `Mettre les choses en ordre — la façon maligne !`,
          body: `<p>Imagine une grosse pile de cartes numérotées, toutes mélangées, et la tâche de les mettre en ordre de la plus petite à la plus grande. Tu pourrais les parcourir à la main, comparant et casant chacune à sa place. Assez facile avec dix cartes. Avec un million, la même méthode patiente t'occuperait des années.</p>
<p>Les ordinateurs rencontrent exactement ce problème toute la journée — trier tes e-mails par date, tes photos par heure, les résultats de recherche par pertinence, les contacts de A à Z. Un <strong>algorithme de tri</strong> n'est que la recette précise, étape par étape, qu'un ordinateur suit pour le faire. Et voici ce sur quoi il vaut la peine de s'arrêter : pour la même pile de cartes, certaines recettes sont des millions de fois plus rapides que d'autres.</p>
<p>Le plus simple, le <strong>Bubble Sort</strong>, parcourt la liste en comparant les voisins, échangeant ceux qui sont en désordre, et répète jusqu'à ce qu'il ne reste rien à échanger. Il marche, mais il est lent — il vérifie essentiellement chaque paire. L'alternative maligne, le <strong>Merge Sort</strong>, joue au diviser-pour-régner : coupe la pile en deux, trie chaque moitié, puis recoud les deux moitiés triées. Divise et fusionne, divise et fusionne, et le million de cartes qui aurait pris des années tombe en ordre en un clin d'œil. Même tâche, stratégie follement différente — c'est tout le jeu.</p>`,
          facts: [
            { e: '📧', t: `Ton appli de mail trie des milliers de messages presque instantanément en utilisant des variantes de Merge Sort et de QuickSort.` },
            { e: '🗺️', t: `Google Maps trouve le trajet le plus court parmi des milliards de segments de route en moins d'une seconde — en utilisant des algorithmes de graphes spécialisés.` },
            { e: '🎮', t: `Les jeux vidéo trient des milliers d'objets 3D par distance à chaque image pour les rendre dans le bon ordre de profondeur !` },
          ],
          formula: null, sim: 'sorting',
        },
        student: {
          title: `Complexité Big-O : mesurer l'efficacité d'un algorithme`,
          body: `<p>La qualité d'un algorithme de tri se ramène à une question : à mesure que l'entrée grandit jusqu'à \\(n\\) éléments, à quelle vitesse le travail grandit-il ? La <strong>notation Big-O</strong> capture exactement ce taux de croissance, dans le pire cas. Le truc est que la vitesse brute dépend de ton matériel, mais le taux de croissance est inscrit dans l'algorithme lui-même — et c'est le taux de croissance qui décide qui gagne sur un million d'éléments.</p>
<p>Le <strong>Bubble Sort</strong> ne cesse de balayer la liste, faisant remonter les grandes valeurs vers la droite un échange à la fois. Pour \\(n\\) éléments c'est jusqu'à \\(\\tfrac{n(n-1)}{2}\\) comparaisons — \\(O(n^2)\\). Double l'entrée et tu quadruples le travail. À \\(n = 10^6\\) c'est environ 500 milliards de comparaisons, à peu près 8 minutes sur une machine faisant un milliard par seconde.</p>
<p>Le <strong>Merge Sort</strong> prend la voie du diviser-pour-régner : divise en deux, trie récursivement chaque moitié, puis fusionne. Chaque fusion est un travail \\(O(n)\\) et la récursion n'a que \\(\\log_2 n\\) niveaux de profondeur, donc le total est \\(O(n \\log n)\\). À \\(n = 10^6\\) c'est environ 20 millions de comparaisons — quelque 25 000 fois plus rapide que le Bubble Sort. Le prix est la mémoire : la fusion nécessite \\(O(n)\\) d'espace de travail.</p>
<p>Le <strong>QuickSort</strong> choisit un pivot, divise le tableau en « plus petits » et « plus grands », et récurse de chaque côté. En moyenne il est \\(O(n \\log n)\\) avec un délicieux comportement de cache ; son pire cas est \\(O(n^2)\\) sur une entrée déjà triée, dompté en choisissant le pivot au hasard. Les vrais langages couvrent leurs paris : Python et Java embarquent le <strong>TimSort</strong>, un hybride Merge/Insertion qui repère les séquences déjà en ordre et fonce à travers des données presque triées en quasi \\(O(n)\\).</p>`,
          facts: [
            { e: '⚡', t: `Trier 1 000 000 d'éléments : Bubble Sort ≈ 8 minutes ; Merge Sort ≈ 0,02 seconde. Même problème, 25 000 fois plus rapide — par pure stratégie.` },
            { e: '🧮', t: `Le tri par comparaisons a une borne inférieure prouvée de Ω(n log n) — aucun tri par comparaisons ne peut être asymptotiquement plus rapide, jamais.` },
            { e: '🔢', t: `Le Radix Sort contourne la borne inférieure des comparaisons en triant chiffre par chiffre, atteignant O(nk) pour des entiers à k chiffres.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Bubble Sort', e: 'T(n) = O(n^2)', c: 'stable ; lent pour n grand' },
            { n: 'Merge Sort', e: 'T(n) = O(n \\log n)', c: 'stable ; O(n) espace en plus' },
            { n: 'QuickSort', e: 'T(n) = O(n \\log n)\\text{ moy},\\; O(n^2)\\text{ pire}', c: 'en place ; rapide en pratique' },
            { sep: 1 },
            { n: 'Borne inférieure des comparaisons', e: '\\Omega(n \\log n)', c: 'tout tri par comparaisons' },
            { sep: 1 },
            { n: 'Récurrence du merge', e: 'T(n) = 2\\,T(n/2) + O(n)', c: 'Théorème maître → O(n log n)' },
          ] }, sim: 'sorting',
        },
        scholar: {
          title: `Complexité computationnelle, le théorème maître et les preuves de borne inférieure`,
          body: `<h4><span class="hn">01</span>Résoudre les récurrences : le théorème maître</h4>
<p>Les algorithmes diviser-pour-régner se décrivent par des récurrences, et la plupart entrent dans un unique modèle : \\(T(n) = a\\,T(n/b) + f(n)\\) — \\(a\\) sous-problèmes de taille \\(n/b\\), plus \\(f(n)\\) de travail pour diviser et recombiner. Le <strong>théorème maître</strong> lit la réponse en comparant \\(f(n)\\) à \\(n^{\\log_b a}\\) : celui qui domine gagne, et s'ils font match nul tu payes un \\(\\log n\\) supplémentaire. Le Merge Sort a \\(a=b=2\\) et \\(f(n)=\\Theta(n)\\), ce qui est exactement le cas d'égalité \\(n^{\\log_2 2} = n\\) — d'où \\(T(n) = \\Theta(n \\log n)\\), sans aucun tour de passe-passe.</p>
<h4><span class="hn">02</span>La borne inférieure que personne ne peut battre</h4>
<p>Le Merge Sort est \\(O(n\\log n)\\) — mais quelque chose de plus malin pourrait-il être plus rapide ? Pour tout tri qui fonctionne en comparant des éléments, la réponse est un non catégorique, et la preuve est superbe. Modélise l'algorithme comme un arbre de décision binaire : chaque nœud interne pose une comparaison, chaque feuille est une permutation finie. Trier \\(n\\) éléments signifie que l'arbre doit avoir au moins \\(n!\\) feuilles pour distinguer chaque ordre, et un arbre binaire de hauteur \\(h\\) en a au plus \\(2^h\\). Donc \\(h \\ge \\log_2(n!)\\), et Stirling transforme cela en \\(\\Omega(n \\log n)\\). La borne est théorique-informationnelle — elle se moque de ta malice, seulement du nombre d'issues à distinguer.</p>
<h4><span class="hn">03</span>Battre la borne en trichant (légalement)</h4>
<p>Ce mur ne s'applique qu'aux tris qui <em>comparent</em>. Sors de là et tu peux aller plus vite en exploitant la structure des données. Le <strong>Counting Sort</strong> dénombre les entiers dans une plage connue \\([0,k]\\) en \\(O(n+k)\\) ; le <strong>Radix Sort</strong> enchaîne cela chiffre par chiffre pour \\(O(d(n+k))\\) ; le <strong>Bucket Sort</strong> atteint un \\(O(n)\\) espéré sur des données uniformément réparties. Aucun ne contredit la borne inférieure — ils font simplement de l'arithmétique sur les clés au lieu de demander « lequel est plus grand ? », et le théorème n'a jamais rien promis là-dessus.</p>
<h4><span class="hn">04</span>Le cas moyen du QuickSort</h4>
<p>Le pire cas du QuickSort est un vilain \\(O(n^2)\\), et pourtant c'est le tri vers lequel la plupart des systèmes réels se tournent, car en moyenne il n'est pas seulement \\(O(n\\log n)\\) mais \\(O(n\\log n)\\) avec de minuscules constantes et une superbe localité de cache. La moyenne découle de la somme des probabilités que deux éléments soient jamais comparés, qui aboutit à \\(E[T(n)] = 2n H_n - 2n\\) avec \\(H_n\\) le nombre harmonique — carrément \\(O(n\\log n)\\). Randomiser le pivot rend le mauvais cas astronomiquement improbable plutôt que simplement rare.</p>
<h4><span class="hn">05</span>La machine sous le modèle</h4>
<p>Le Big-O compte les opérations, mais un vrai processeur tient énormément à la localité mémoire — un défaut de cache peut coûter des centaines de comparaisons « gratuites ». C'est pourquoi un algorithme \\(O(n\\log n)\\) qui parcourt la mémoire dans l'ordre écrase souvent un algorithme théoriquement égal qui saute partout. Les algorithmes <strong>cache-oblivious</strong> (Frigo et al., 1999) exploitent la récursion pour atteindre un comportement de cache optimal à <em>toutes</em> les tailles de cache à la fois, sans jamais qu'on leur dise la taille — un rappel que le modèle asymptotique est une carte, pas le territoire.</p>
<h4><span class="hn">06</span>La place du tri dans le zoo de la complexité</h4>
<p>Le tri siège confortablement dans <strong>P</strong>, la classe des problèmes résolubles en temps polynomial. Son fameux voisin est la question de savoir si \\(P = NP\\) — si tout problème dont la solution est rapide à <em>vérifier</em> est aussi rapide à <em>résoudre</em>. Le tri est facile ; le problème du voyageur de commerce, qui se contente de réordonner des villes, est NP-difficile et l'on croit qu'il exige un effort exponentiel. Un algorithme optimal rapide pour lui ferait s'effondrer \\(P\\) dans \\(NP\\) et emporterait la cryptographie moderne avec lui. Qu'une tâche aussi tranquille que mettre les choses en ordre côtoie un problème qui pourrait réécrire les mathématiques est le drame silencieux de la théorie de la complexité.</p>`,
          facts: [
            { e: '🔐', t: `La cryptographie RSA repose sur la difficulté de la factorisation d'entiers (crue NP-intermédiaire) — le meilleur algorithme connu tourne en exp(O(n^{1/3})), pas en temps polynomial.` },
            { e: '💾', t: `Les algorithmes de tri cache-oblivious (Frigo et al., 1999) atteignent des performances de cache optimales à toutes les tailles de cache simultanément via une structure récursive.` },
            { e: '🧬', t: `La construction de tableaux de suffixes en O(n log n) (ou O(n) avec SA-IS) est le cheval de trait de l'assemblage de génomes — trier les ~3 milliards de suffixes du génome humain.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Théorème maître', e: 'T(n) = a\\,T(n/b) + f(n)' },
            { n: 'Cas du Merge Sort', e: 'f(n)=\\Theta(n^{\\log_b a}) \\Rightarrow T=\\Theta(n^{\\log_b a}\\log n)' },
            { sep: 1 },
            { n: 'Borne inférieure des comparaisons', e: 'h \\ge \\log_2(n!) = \\Omega(n \\log n)' },
            { n: 'Stirling', e: '\\log(n!) = n \\log n - n + O(\\log n)' },
            { sep: 1 },
            { n: 'QuickSort moyen', e: 'E[T(n)] = 2n H_n - 2n = O(n \\log n)', c: 'H_n = n-ième nombre harmonique' },
            { n: 'Radix Sort', e: 'T(n) = O(d(n+k))', c: 'd chiffres, base k' },
          ] }, sim: 'sorting',
        },
      },
    },
    ml: {
      title: 'Apprentissage automatique et réseaux de neurones',
      teaser: 'Comment un ordinateur apprend-il à reconnaître ton visage, traduire des langues et battre les champions du monde aux échecs — sans jamais être explicitement programmé ?',
      chips: ['Réseaux de neurones', 'Descente de gradient', 'IA'],
      lvls: {
        junior: {
          title: `Des ordinateurs qui apprennent de l'expérience !`,
          body: `<p>Pense à apprendre à un chien à s'asseoir. Tu ne lui tends pas un règlement — tu lui montres, tu le récompenses quand il y arrive, tu le corriges doucement quand il rate, et après assez d'essais il <em>sait</em>, tout simplement. L'<strong>apprentissage automatique</strong> fonctionne presque exactement comme ça, sauf que le « chien » est un programme et les « friandises » sont des nombres — des scores qui montent quand il a raison et descendent quand il a tort.</p>
<p>La programmation ordinaire signifie épeler chaque règle à la main : « si l'e-mail dit 'loterie', appelle-le spam. » Mais le spam qui esquive le mot passe tout droit. Un système d'apprentissage automatique prend l'approche opposée — donne-lui des milliers de vrais spams et de vrais e-mails et il traque des motifs qu'aucun humain ne penserait jamais à écrire, puis bâtit ses propres règles de zéro.</p>
<p>La version la plus puissante d'aujourd'hui empile des <strong>réseaux de neurones</strong> — des couches de minuscules unités mathématiques vaguement modelées sur les cellules du cerveau. Chacune reçoit des nombres, les multiplie par des poids qu'elle a appris, et passe le résultat plus loin. Relie des millions de ces unités, entraîne-les sur des milliards d'exemples, et tu obtiens ce qui déverrouille ton téléphone avec ton visage, traduit cent langues à la volée et peint des images à partir d'une phrase. Dans la simulation ci-dessous, regarde un petit réseau apprendre à distinguer deux sortes de points, en direct.</p>`,
          facts: [
            { e: '👁️', t: `Le réseau de neurones derrière la reconnaissance faciale moderne atteint 99,7% de précision — surpassant le score humain moyen de 97,5% sur le même benchmark.` },
            { e: '♟️', t: `AlphaZero apprit les échecs de zéro en 9 heures sans aucune connaissance humaine sauf les règles — puis vainquit de façon convaincante le meilleur moteur d'échecs du monde.` },
            { e: '🌡️', t: `DeepMind de Google réduisit de 40% l'énergie utilisée pour refroidir ses centres de données grâce à un réseau de neurones — économisant la même énergie que retirer 100 000 voitures de la route.` },
          ],
          formula: null, sim: 'ml',
        },
        student: {
          title: `Descente de gradient, rétropropagation et le théorème d'approximation universelle`,
          body: `<p>Un réseau de \\(L\\) couches n'est qu'une grande fonction imbriquée, \\(f(x) = W_L\\,\\sigma(W_{L-1}\\,\\sigma(\\cdots \\sigma(W_1 x + b_1)\\cdots) + b_{L-1}) + b_L\\), où chaque \\(\\sigma\\) est une non-linéarité — ReLU \\(\\sigma(z)=\\max(0,z)\\) ou sigmoïde \\(\\sigma(z)=1/(1+e^{-z})\\) — et les poids \\(W_i\\) et biais \\(b_i\\) sont ce que le réseau apprend. Sans les \\(\\sigma\\) toute la pile s'effondrerait en une seule application linéaire ; la non-linéarité est ce qui permet à la profondeur de t'apporter quoi que ce soit. Entraîner signifie régler \\(\\theta=\\{W_i,b_i\\}\\) pour réduire une perte, disons l'entropie croisée \\(L = -\\sum_i y_i \\log \\hat{y}_i\\).</p>
<p>La <strong>descente de gradient</strong> pousse chaque paramètre en descente sur cette perte : \\(\\theta \\leftarrow \\theta - \\eta\\,\\nabla_\\theta L\\), avec \\(\\eta\\) le taux d'apprentissage. Le truc qui la rend faisable sur des milliards de paramètres est la <strong>rétropropagation</strong> — la règle de la chaîne exécutée en arrière à travers le réseau, réutilisant le travail de chaque couche pour qu'un seul passage calcule tous les gradients. En pratique tu estimes \\(\\nabla_\\theta L\\) sur de petits <em>mini-lots</em> aléatoires (descente de gradient stochastique), bruyante mais bon marché, et des optimiseurs adaptatifs comme Adam gardent un pas séparé par paramètre pour converger plus vite.</p>
<p>Pourquoi cela devrait-il jamais marcher ? Le <strong>théorème d'approximation universelle</strong> (Cybenko 1989, Hornik 1991) prouve qu'une seule couche cachée, avec assez d'unités, peut imiter <em>n'importe quelle</em> fonction continue d'aussi près que tu veux. Mais « assez » peut être astronomiquement nombreux ; c'est la profondeur qui le rend pratique, représentant de façon compacte ce pour quoi un réseau peu profond aurait besoin d'exponentiellement plus de neurones. Le vrai combat n'est pas d'ajuster les données d'entraînement — c'est de <strong>généraliser</strong> à de nouvelles données, et des outils comme le dropout, la décroissance des poids et la batch normalization existent pour empêcher un réseau de simplement mémoriser ses exemples.</p>`,
          facts: [
            { e: '📊', t: `GPT-4 a une estimation de 1,8 billion de paramètres sur 120 couches — entraîné sur ~13 billions de tokens de texte via environ 25 000 GPU A100 pendant 90 jours.` },
            { e: '🎨', t: `Les réseaux de neurones convolutifs (CNN) apprennent automatiquement des caractéristiques hiérarchiques : les premières couches détectent des bords, celles du milieu des formes, celles profondes des visages ou des objets.` },
            { e: '⚠️', t: `Les gradients qui s'évanouissent affligèrent les réseaux profonds jusqu'en 2015 : les gradients rétrécissent exponentiellement avec la profondeur, empêchant l'apprentissage. Les activations ReLU et les connexions résiduelles (ResNets) le résolurent.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Passage avant', e: 'a^{(l)} = \\sigma\\!\\left(W^{(l)} a^{(l-1)} + b^{(l)}\\right)' },
            { n: 'Perte d\'entropie croisée', e: 'L = -\\sum_i y_i \\log \\hat{y}_i' },
            { sep: 1 },
            { n: 'Descente de gradient', e: '\\theta \\leftarrow \\theta - \\eta\\,\\nabla_\\theta L' },
            { n: 'Rétropropagation (règle de la chaîne)', e: '\\dfrac{\\partial L}{\\partial W^{(k)}} = \\delta^{(k)} \\left(a^{(k-1)}\\right)^{\\!\\top}' },
            { sep: 1 },
            { n: 'Activation ReLU', e: '\\sigma(z) = \\max(0, z)' },
            { n: 'Approximation universelle', e: '\\forall\\varepsilon>0,\\; \\exists f_\\theta:\\; \\|f - f_\\theta\\|_\\infty < \\varepsilon', c: 'Cybenko 1989' },
          ] }, sim: 'ml',
        },
        scholar: {
          title: `Paysage d'optimisation, théorie de la généralisation et Transformers`,
          body: `<h4><span class="hn">01</span>Le paysage de la perte n'est pas le piège qu'on craignait</h4>
<p>La perte \\(L(\\theta)\\) d'un réseau profond est follement non convexe en des millions de dimensions, et pendant des années on craignit que la descente de gradient reste coincée dans de mauvais minima locaux. Les hautes dimensions se révélèrent plus clémentes que prévu. Presque chaque point critique est un <em>col</em>, pas un minimum — pour être un vrai minimum, plus d'un million de valeurs propres de la hessienne doivent toutes se trouver positives, ce qui est infimement improbable — et les minima locaux qui existent siègent surtout près du global (Dauphin et al., 2014). L'optimiseur glisse hors des cols plutôt que de se noyer dans des pièges.</p>
<h4><span class="hn">02</span>Les minima plats généralisent ; les aigus non</h4>
<p>Tous les minima ne se valent pas. La netteté d'une solution — la plus grande valeur propre de la hessienne \\(\\lambda_{\\max}(\\partial^2 L/\\partial\\theta^2)\\) — suit sa capacité à généraliser : les bassins larges et plats pardonnent les petites perturbations et tendent à se transférer à de nouvelles données, tandis que les pics aigus surajustent. La Sharpness-Aware Minimization le rend explicite, optimisant la pire perte dans un voisinage, \\(\\min_\\theta \\max_{\\|\\varepsilon\\|\\le\\rho} L(\\theta+\\varepsilon)\\), et poussant de façon fiable la précision de test à la hausse. Tu veux la vallée la plus large, pas simplement le point le plus bas.</p>
<h4><span class="hn">03</span>L'énigme de la surparamétrisation</h4>
<p>La théorie classique de l'apprentissage dit qu'un modèle avec bien plus de paramètres que de points de données devrait surajuster de façon catastrophique. Les réseaux profonds font l'inverse — ils ajustent parfaitement l'ensemble d'entraînement et généralisent quand même, un état désormais appelé <em>surajustement bénin</em>. Des bornes PAC-Bayes comme \\(L(f) \\le \\hat{L}(f) + \\sqrt{\\tfrac{\\mathrm{KL}(Q\\|P) + \\ln(n/\\delta)}{2n}}\\) peuvent rester non vides même ici quand la prior est bien choisie, mais le résumé honnête est que nous n'avons une théorie fonctionnelle que par morceaux. L'une des technologies les plus réussies du domaine n'est pas encore pleinement expliquée.</p>
<h4><span class="hn">04</span>Double descente et le biais de la SGD</h4>
<p>Pousse au-delà du point où un modèle peut mémoriser exactement les données — le seuil d'interpolation — et quelque chose d'étrange se produit : l'erreur de test, après avoir culminé, <em>rebaisse</em>. Cette courbe de <strong>double descente</strong> renverse discrètement la vieille histoire biais-variance. Une partie de la réponse est que la descente de gradient stochastique a un <em>biais implicite</em> : parmi les infinis réglages de paramètres qui ajustent les données, elle dérive vers ceux de norme basse, « simples ». Le régularisateur se cachait dans l'optimiseur depuis le début.</p>
<h4><span class="hn">05</span>Le Transformer et la self-attention</h4>
<p>Presque tous les modèles de frontière d'aujourd'hui sont des <strong>Transformers</strong> (Vaswani et al., 2017), qui jetèrent la récurrence en faveur de la <em>self-attention</em> : \\(\\mathrm{Attention}(Q,K,V) = \\mathrm{softmax}\\!\\left(\\tfrac{QK^\\top}{\\sqrt{d_k}}\\right)V\\). Chaque token se compare à chaque autre et tire un mélange pondéré de leurs valeurs — coût quadratique \\(O(n^2)\\), mais seulement \\(O(1)\\) de profondeur séquentielle, donc il se parallélise sur une séquence entière d'un coup. Empile de nombreuses têtes de ce genre, chacune apprenant un motif de relations différent, ajoute des encodages positionnels pour l'ordre, et tu as le moteur derrière les modèles de langage modernes.</p>
<h4><span class="hn">06</span>Lois d'échelle : une intelligence que tu peux budgéter</h4>
<p>Le fait empirique le plus étrange sur l'apprentissage profond est à quel point il est <em>prévisible</em> à grande échelle. La perte de test baisse comme une propre loi de puissance en taille du modèle, données et calcul sur sept ordres de grandeur. L'analyse Chinchilla (Hoffmann et al., 2022) fixa la recette optimale : pour un budget de calcul \\(C\\), fais croître paramètres et tokens d'entraînement ensemble, à peu près \\(N \\propto C^{0.5}\\) et \\(D \\propto C^{0.5}\\). Que la capacité puisse être montée en dépensant plus — plutôt qu'en attendant une idée nouvelle — est exactement ce qui transforma l'apprentissage profond d'une curiosité de recherche en une industrie.</p>`,
          facts: [
            { e: '🔢', t: `Le phénomène du « grokking » : les réseaux peuvent soudain sauter de la mémorisation à la vraie généralisation des millions de pas d'entraînement après avoir atteint 100% de précision d'entraînement.` },
            { e: '🌐', t: `L'attention des Transformers équivaut à un seul pas de descente de gradient sur une mémoire associative (réseau de Hopfield) — reliant les LLM modernes aux modèles de mémoire des années 80.` },
            { e: '📉', t: `Les lois d'échelle neuronales sont des lois de puissance remarquablement précises : la perte décroît comme L ∝ N^{-0,076} avec les paramètres N, tenant sur 7 ordres de grandeur de taille de modèle.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Self-attention', e: '\\mathrm{Attention}(Q,K,V) = \\mathrm{softmax}\\!\\left(\\dfrac{QK^\\top}{\\sqrt{d_k}}\\right)V' },
            { n: 'Multi-tête', e: '\\mathrm{MHA} = \\mathrm{concat}(h_1,\\dots,h_h)\\,W^O' },
            { sep: 1 },
            { n: 'Borne PAC-Bayes', e: 'L(f) \\le \\hat{L}(f) + \\sqrt{\\dfrac{\\mathrm{KL}(Q\\|P) + \\ln(n/\\delta)}{2n}}' },
            { n: 'Objectif SAM', e: '\\min_\\theta \\max_{\\|\\varepsilon\\|\\le\\rho} L(\\theta + \\varepsilon)' },
            { sep: 1 },
            { n: 'Échelle Chinchilla', e: 'N_{\\text{opt}} \\propto C^{0.5},\\quad D_{\\text{opt}} \\propto C^{0.5}', c: 'tokens ∝ paramètres' },
          ] }, sim: 'ml',
        },
      },
    },
    crypto: {
      title: 'Cryptographie et sécurité',
      teaser: 'Chaque fois que tu achètes en ligne, les mathématiques protègent tes données de tout internet. Comment un secret reste-t-il secret en public ?',
      chips: ['Chiffrement', 'RSA', 'Quantique'],
      lvls: {
        junior: {
          title: `Messages secrets et cadenas inviolables !`,
          body: `<p>Disons que tu veux glisser un mot à un ami à travers une pièce bondée où tout le monde adorerait le lire. Tu recours à un <strong>chiffre</strong> — un code secret. Le plus vieux tour du manuel, utilisé par Jules César il y a deux mille ans, décale simplement chaque lettre d'une quantité fixe : A devient D, B devient E, et ainsi de suite. Ton ami, qui connaît le décalage, le lit à l'instant ; tous les autres voient un charabia.</p>
<p>Mais il y a un hic qui hanta les faiseurs de codes pendant des millénaires : comment dis-tu à ton ami le décalage en premier lieu sans que quelqu'un l'entende ? La réponse, trouvée seulement dans les années 1970, ressemble à un tour de magie — la <strong>cryptographie à clé publique</strong>. Imagine un cadenas que n'importe qui peut claquer fermé mais dont seul toi tiens la clé pour l'ouvrir. Poste ce cadenas ouvert au monde entier ; n'importe qui peut y enfermer un message et le renvoyer, et seul toi peux l'ouvrir, alors même que tu n'as jamais partagé de secret.</p>
<p>C'est ainsi que fonctionne chaque site sécurisé. Quand le petit cadenas apparaît dans ton navigateur, ton ordinateur et le serveur conjurent un secret partagé au grand jour — juste sous le nez de tout indiscret, qui repart quand même avec rien. Dans la simulation ci-dessous, regarde cet échange de clés se dérouler une étape à la fois.</p>`,
          facts: [
            { e: '🌐', t: `Le HTTPS chiffre aujourd'hui plus de 95% du trafic web. Les mathématiques protégeant tes mots de passe étaient essentiellement inexistantes avant 1976.` },
            { e: '🏦', t: `L'algorithme RSA, inventé en 1977, tire sa sécurité du fait que multiplier deux grands nombres premiers prend des millisecondes, mais factoriser le résultat prend plus de temps que l'âge de l'univers.` },
            { e: '⚛️', t: `Les ordinateurs quantiques pourraient casser le chiffrement RSA — c'est pourquoi les gouvernements du monde entier passent déjà à des standards de cryptographie « post-quantique ».` },
          ],
          formula: null, sim: 'crypto',
        },
        student: {
          title: `RSA, Diffie-Hellman et les mathématiques des fonctions à sens unique`,
          body: `<p>Le <strong>RSA</strong> (Rivest–Shamir–Adleman, 1977) repose sur une belle asymétrie : multiplier deux grands nombres premiers est instantané, mais dé-multiplier le résultat — le factoriser — est cru pratiquement impossible. Choisis des premiers \\(p, q\\), pose \\(n = pq\\) et \\(\\varphi(n) = (p-1)(q-1)\\), choisis un exposant public \\(e\\), et calcule le privé \\(d \\equiv e^{-1} \\pmod{\\varphi(n)}\\). Alors chiffrement et déchiffrement ne sont que des puissances modulaires : \\(c = m^e \\bmod n\\) et \\(m = c^d \\bmod n\\). Ils s'annulent car le théorème d'Euler garantit \\(m^{\\varphi(n)} \\equiv 1 \\pmod n\\), donc \\(m^{ed} \\equiv m\\). Récupérer \\(d\\) depuis le couple public \\((e, n)\\) est cru aussi difficile que factoriser \\(n\\) — non prouvé, mais sûr à 2048 bits.</p>
<p>Le <strong>Diffie-Hellman</strong> (1976) est le tour qui permet à deux inconnus de convenir d'un secret à la vue de tous. Alice et Bob fixent publiquement un premier \\(p\\) et un générateur \\(g\\) ; Alice garde un secret \\(a\\) et envoie \\(g^a \\bmod p\\), Bob garde \\(b\\) et envoie \\(g^b \\bmod p\\). Chacun élève ce qu'il a reçu à son propre secret, et tous deux atterrissent sur la même clé \\(K = g^{ab} \\bmod p\\). Un indiscret voit \\(g, p, g^a, g^b\\) et ne peut toujours pas obtenir \\(K\\) sans résoudre le problème du logarithme discret — facile à calculer en avant, cru irréalisable à inverser.</p>
<p>Les maths à clé publique sont lentes, donc on les utilise avec parcimonie. Les vraies connexions font un <strong>hybride</strong> : Diffie-Hellman (ou son cousin à courbes elliptiques) convient d'une clé, puis un rapide <strong>chiffre symétrique</strong> comme AES chiffre le trafic réel. Ce qui tient tout ensemble, ce sont les <strong>fonctions de hachage</strong> (SHA-256, SHA-3), qui écrasent toute entrée en une empreinte de taille fixe qui est à sens unique, résistante aux collisions et follement sensible — inverse un bit d'entrée et environ la moitié des bits de sortie changent. Ces empreintes sont ce qui rend possibles les signatures numériques, les certificats et les blockchains.</p>`,
          facts: [
            { e: '🔢', t: `La clé de chiffrement RSA-2048 a 617 chiffres décimaux. La factoriser avec le meilleur algorithme connu sur tous les ordinateurs actuels prendrait plus de temps que l'âge de l'univers.` },
            { e: '📱', t: `La connexion HTTPS de ton téléphone utilise l'Elliptic Curve Diffie-Hellman (ECDH) — offrant une sécurité équivalente à RSA avec des clés 20 fois plus petites, grâce à la difficulté du logarithme discret sur courbe elliptique.` },
            { e: '🏛️', t: `Le NIST standardisa ses premiers algorithmes de cryptographie post-quantique en 2024 — CRYSTALS-Kyber pour l'échange de clés et CRYSTALS-Dilithium pour les signatures — tous deux fondés sur des problèmes de réseaux.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Chiffrement RSA', e: 'c = m^e \\bmod n' },
            { n: 'Déchiffrement RSA', e: 'm = c^d \\bmod n,\\quad d \\equiv e^{-1}\\!\\!\\pmod{\\varphi(n)}' },
            { sep: 1 },
            { n: 'Théorème d\'Euler', e: 'm^{\\varphi(n)} \\equiv 1 \\pmod n \\;\\Rightarrow\\; m^{ed} \\equiv m' },
            { n: 'Secret partagé DH', e: 'K = g^{ab} \\bmod p' },
            { sep: 1 },
            { n: 'Fonction de hachage', e: 'H:\\{0,1\\}^{*} \\to \\{0,1\\}^{256}', c: 'à sens unique, résistante aux collisions' },
            { n: 'Borne des anniversaires', e: '\\text{collision après } \\sim\\!\\sqrt{2^{256}} = 2^{128} \\text{ requêtes}' },
          ] }, sim: 'crypto',
        },
        scholar: {
          title: `Sécurité théorique-informationnelle, cryptographie sur réseaux et preuves à divulgation nulle`,
          body: `<h4><span class="hn">01</span>Le secret parfait et son prix impossible</h4>
<p>Shannon (1949) fixa le plafond théorique : un chiffre est <strong>parfaitement secret</strong> quand le texte chiffré ne trahit absolument rien sur le message, \\(P(M=m \\mid C=c) = P(M=m)\\) pour tout \\(m, c\\). Le <strong>masque jetable</strong> (one-time pad) — XOR du message avec une clé vraiment aléatoire utilisée exactement une fois, \\(c = m \\oplus k\\) — l'atteint, et Shannon prouva que c'est essentiellement la <em>seule</em> chose qui le fait. Le hic est dans l'exigence : la clé doit être aussi longue que le message et jamais réutilisée, donc pour envoyer secrètement un gigaoctet tu dois déjà avoir partagé secrètement un gigaoctet. Le secret parfait est réel, et presque inutile.</p>
<h4><span class="hn">02</span>Troquer la perfection contre la praticité</h4>
<p>Tout ce qui est utilisable descend donc à la <strong>sécurité computationnelle</strong> : un chiffre est « sûr » si aucun adversaire borné au temps polynomial ne peut faire mieux que négligeablement mieux que deviner. Cela relocalise discrètement toute la cryptographie sur un terrain non prouvé — RSA s'appuie sur la difficulté de la factorisation, Diffie-Hellman sur les logarithmes discrets, et aucun n'est prouvé insoluble ; une preuve trancherait \\(P\\) contre \\(NP\\). Nous parions, en effet, internet sur des conjectures qui ont simplement résisté à chaque attaque jusqu'ici.</p>
<h4><span class="hn">03</span>La menace quantique et la réponse des réseaux</h4>
<p>Ce pari a une date d'expiration connue. L'algorithme de Shor permet à un grand ordinateur quantique de factoriser et de prendre des logarithmes discrets en temps polynomial, démolissant discrètement RSA et le Diffie-Hellman classique. Le remplaçant en tête est la <strong>cryptographie sur réseaux</strong>, bâtie sur <em>Learning With Errors</em> : étant donné de nombreux échantillons bruités \\(b_i = \\langle a_i, s\\rangle + e_i \\bmod q\\), récupérer le secret \\(s\\) paraît difficile même pour une machine quantique. Les premiers standards post-quantiques du NIST (2024) sont des schémas sur réseaux, et la migration est déjà en cours.</p>
<h4><span class="hn">04</span>Calculer sur des données que tu ne peux pas lire</h4>
<p>Les réseaux débloquèrent quelque chose autrefois jugé impossible : le <strong>chiffrement pleinement homomorphe</strong> (Gentry, 2009), où un serveur calcule directement sur le texte chiffré, \\(f(\\mathrm{Enc}(x)) = \\mathrm{Enc}(f(x))\\), et rend une réponse chiffrée qu'il n'a jamais réellement vue. Tu peux lancer une recherche, entraîner un modèle ou interroger une base de données, les données restant scellées tout du long. Le premier FHE était un million de fois trop lent ; les schémas modernes ont ramené cela vers quelques centaines de fois, le faisant passer d'expérience de pensée vers le déploiement.</p>
<h4><span class="hn">05</span>Prouver que tu connais un secret sans le révéler</h4>
<p>Les <strong>preuves à divulgation nulle de connaissance</strong> (Goldwasser–Micali–Rackoff, 1985) réussissent un vrai paradoxe : un prouveur convainc un vérifieur qu'un énoncé est vrai tout en ne révélant rien au-delà de sa vérité. Les trois exigences sont la complétude (les preuves honnêtes convainquent toujours), la solidité (les fausses affirmations ne passent presque jamais) et la divulgation nulle (le vérifieur n'apprend rien qu'il n'aurait pu inventer seul). Tu peux prouver que tu connais un mot de passe sans le prononcer, ou qu'une transaction est valide sans en divulguer le montant.</p>
<h4><span class="hn">06</span>Preuves succinctes et où cela mène</h4>
<p>Les chevaux de trait modernes sont les <strong>zk-SNARK</strong> — des preuves à la fois non interactives et étonnamment compactes, une constante \\(O(1)\\) en taille et vérifiables en millisecondes quelle que soit l'ampleur du calcul qu'elles attestent. Elles alimentent déjà des monnaies préservant la vie privée, des identifiants anonymes et du calcul externalisé vérifiable, et rampent vers le fait de prouver qu'un modèle d'IA spécifique a produit une sortie spécifique sans exposer le modèle ni l'entrée. Une curiosité autrefois écartée comme pure théorie devient une infrastructure fondamentale.</p>`,
          facts: [
            { e: '🔮', t: `Une preuve zk-SNARK qu'un réseau de neurones a produit une sortie spécifique peut être générée et vérifiée — sans révéler les poids du modèle ni les données d'entrée.` },
            { e: '🧮', t: `Le problème LWE est si difficile que même un ordinateur quantique exécutant l'algorithme de Shor (qui casse RSA) ne peut le résoudre — aucune accélération quantique n'est connue.` },
            { e: '🏆', t: `Le prix Turing 2012 revint à Silvio Micali et Shafi Goldwasser pour avoir inventé les preuves à divulgation nulle — originellement considérées comme une curiosité purement théorique.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Secret parfait', e: 'P(M=m \\mid C=c) = P(M=m)\\quad \\forall\\, m,c' },
            { n: 'Masque jetable', e: 'c = m \\oplus k,\\quad |k| = |m|', c: 'k uniforme, utilisée une fois' },
            { sep: 1 },
            { n: 'Échantillon LWE', e: 'b_i = \\langle a_i, s\\rangle + e_i \\pmod q', c: 'e_i petit bruit' },
            { n: 'Propriété homomorphe', e: 'f(\\mathrm{Enc}(x)) = \\mathrm{Enc}(f(x))' },
            { sep: 1 },
            { n: 'Garanties ZKP', e: '\\text{complétude} + \\text{solidité} + \\text{divulgation nulle}' },
            { n: 'Taille de preuve zk-SNARK', e: '|\\pi| = O(1)', c: 'indépendante de la taille du circuit' },
          ] }, sim: 'crypto',
        },
      },
    },
    complexity: {
      title: 'Calcul et complexité',
      teaser: 'Certains problèmes sont faciles. Certains sont difficiles. Et certains sont prouvablement impossibles — quelle que soit la vitesse de ton ordinateur. Pourquoi ?',
      chips: ['Turing', 'P vs NP', 'Décidabilité'],
      lvls: {
        junior: {
          title: `Que peuvent vraiment faire les ordinateurs — et que ne peuvent-ils pas ?`,
          body: `<p>Les ordinateurs paraissent inarrêtables — ils font atterrir des fusées, écrasent les grands maîtres aux échecs, peignent des scènes photoréalistes à partir d'une phrase. Voici donc une vraie secousse : il existe des problèmes qu'<em>aucun</em> ordinateur, si rapide, énorme ou astucieusement codé soit-il, ne résoudra jamais. Non parce que nous n'avons pas encore bâti la bonne machine, mais parce que c'est <strong>mathématiquement impossible</strong>, point.</p>
<p>Alan Turing le prouva en 1936 — avant même que les vrais ordinateurs existent. Aucun programme ne peut être écrit qui décide de façon fiable si un programme donné finira un jour ou tournera pour toujours. Cela s'appelle le <strong>problème de l'arrêt</strong>, et il est prouvablement insoluble. Le tour de Turing fut de la pure logique : si un tel vérificateur existait, tu pourrais le pointer sur lui-même et fabriquer une contradiction, exactement comme la phrase « Cet énoncé est faux. »</p>
<p>Au-delà de l'impossible se tient la question du simplement <em>difficile</em>. Trier une liste prend des millisecondes ; trouver le plus court circuit à travers 1 000 villes semble exiger d'essayer un nombre ahurissant de combinaisons, sans espoir même pour un superordinateur. La plus grande question ouverte de l'informatique — et l'un des grands problèmes non résolus de toutes les mathématiques — est de savoir si ces problèmes difficiles sont vraiment difficiles, ou si nous avons simplement été trop lents à repérer un raccourci. C'est <strong>P vs NP</strong>, et il y a un prix de 1 000 000 de dollars qui attend celui qui le tranchera.</p>`,
          facts: [
            { e: '💰', t: `Le Clay Mathematics Institute offre 1 000 000 de dollars pour résoudre P vs NP — il est ouvert depuis 1971 et la plupart des experts croient que P ≠ NP, mais personne ne peut le prouver.` },
            { e: '🔐', t: `Toute la sécurité internet moderne suppose P ≠ NP. Si P = NP, le chiffrement pourrait être cassé à l'instant et tout le système financier s'effondrerait.` },
            { e: '♟️', t: `Les échecs sont « résolus » en principe — le jeu parfait existe — mais le calculer nécessiterait plus d'opérations qu'il n'y a d'atomes dans l'univers observable.` },
          ],
          formula: null, sim: 'complexity',
        },
        student: {
          title: `Machines de Turing, décidabilité et le zoo de la complexité`,
          body: `<p>Une <strong>machine de Turing</strong> est le calcul réduit à l'os : un ruban infini, une tête qui lit et écrit une case, et une poignée d'états avec des règles \\(\\delta(\\text{état}, \\text{symbole}) \\to (\\text{état}', \\text{symbole}', \\text{mouvement})\\). Elle paraît absurdement primitive, et pourtant la thèse de Church-Turing soutient que tout ce qui est calculable est calculable par l'une d'elles. Et une seule <strong>machine de Turing universelle</strong>, à qui l'on donne la description de n'importe quelle autre, peut l'imiter parfaitement — la graine théorique de chaque ordinateur généraliste que tu aies jamais utilisé.</p>
<p>Le <strong>problème de l'arrêt</strong> de Turing tombe par <em>diagonalisation</em>. Suppose qu'un décideur \\(H(M, w)\\) puisse toujours dire si la machine \\(M\\) s'arrête sur l'entrée \\(w\\). Construis un trouble-fête \\(D(M)\\) qui exécute \\(H(M, M)\\) puis fait l'opposé — boucle si \\(H\\) dit « s'arrête », s'arrête si \\(H\\) dit « boucle ». Maintenant donne à \\(D\\) sa propre description : \\(D(D)\\) s'arrête exactement quand il ne le fait pas. Contradiction, donc \\(H\\) ne peut exister. Le théorème de Rice généralise les dégâts : <em>toute</em> question non triviale sur ce que fait un programme est indécidable, ce qui est pourquoi le contrôle de bugs automatique parfait est hors de portée.</p>
<p>Parmi les problèmes qui <em>sont</em> résolubles, on trie par coût. <strong>P</strong> est tout ce qui est décidable en temps polynomial ; <strong>NP</strong> est tout ce dont la réponse, une fois devinée, peut être <em>vérifiée</em> en temps polynomial — Sudoku, coloration de graphes, factorisation. Un problème est <strong>NP-complet</strong> s'il est dans NP et que tout autre problème NP s'y réduit, donc il est aussi difficile que toute la classe d'un coup. Cook et Levin (1971) prouvèrent que la satisfiabilité booléenne (SAT) est un tel problème, et des milliers de problèmes quotidiens l'ont depuis rejoint. Résous-en un seul efficacement et tu as prouvé \\(P = NP\\) — et tu les as tous résolus.</p>`,
          facts: [
            { e: '🗺️', t: `Le problème du voyageur de commerce (TSP) est NP-difficile : les meilleurs algorithmes exacts pour 1 000 villes exigent encore un temps astronomique — et pourtant le TSP pilote la logistique réelle de FedEx et UPS.` },
            { e: '🧬', t: `Le repliement des protéines fut longtemps jugé computationnellement insoluble — un problème PSPACE. AlphaFold de DeepMind le résolut heuristiquement par apprentissage profond, remportant le Nobel de Chimie 2024.` },
            { e: '🎮', t: `Beaucoup de jeux vidéo classiques sont NP-difficiles : Super Mario Bros., Tetris, Démineur et Candy Crush sont tous prouvablement aussi difficiles que SAT dans le cas général.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Transition de la MT', e: '\\delta: Q \\times \\Gamma \\to Q \\times \\Gamma \\times \\{L, R\\}' },
            { n: 'Thèse de Church-Turing', e: '\\text{calculable} \\iff \\text{MT-calculable}', c: 'conjecture' },
            { sep: 1 },
            { n: 'Classe P', e: '\\text{décidable en temps } O(n^k)' },
            { n: 'Classe NP', e: '\\text{certificat vérifiable en temps poly}' },
            { sep: 1 },
            { n: 'NP-complétude', e: "L \\in NP \\;\\wedge\\; \\forall L' \\in NP:\\, L' \\le_p L" },
            { n: 'Cook-Levin', e: '\\text{SAT est NP-complet}', c: '1971' },
          ] }, sim: 'complexity',
        },
        scholar: {
          title: `Complexité des circuits, calcul randomisé et les limites de la preuve`,
          body: `<h4><span class="hn">01</span>P vs NP comme question sur la taille des circuits</h4>
<p>Un angle prometteur sur \\(P\\) vs \\(NP\\) le reformule en matériel. Tout calcul peut être disposé comme un <strong>circuit</strong> booléen — un graphe de portes ET, OU et NON — et son coût est le nombre de portes. Tout ce qui est dans \\(P\\) a des circuits de taille polynomiale, donc si tu pouvais prouver qu'un problème \\(NP\\) nécessite <em>superpolynomialement</em> de portes, tu séparerais les classes. Le plan est propre ; l'exécution s'est révélée brutale.</p>
<h4><span class="hn">02</span>Les fonctions difficiles existent — on ne peut juste pas en désigner une</h4>
<p>Curieusement, nous savons que les fonctions difficiles sont partout. Un simple argument de dénombrement (Shannon) montre que presque toute fonction booléenne sur \\(n\\) bits nécessite un circuit de taille \\(\\Omega(2^n/n)\\) — astronomiquement grand — donc la vaste majorité des fonctions sont difficiles. Le hic est que l'argument est non constructif : il prouve que les fonctions difficiles abondent sans en nommer une seule. Pour des fonctions explicites dans \\(NP\\), les meilleures bornes inférieures que quiconque ait prouvées restent près de \\(\\Omega(n \\log n)\\), une distance risible de l'exponentiel. Nous sommes entourés de problèmes difficiles et ne pouvons en prouver difficile presque aucun.</p>
<h4><span class="hn">03</span>La barrière des preuves naturelles</h4>
<p>Pire, il y a des preuves que les stratégies évidentes <em>ne peuvent pas</em> marcher. Razborov et Rudich (1994) montrèrent que toute preuve « naturelle » — constructive et applicable à la plupart des fonctions, comme le sont presque tous les arguments sur les circuits — si elle prouvait de fortes bornes inférieures, te livrerait aussi un algorithme pour casser les générateurs pseudo-aléatoires cryptographiques. Ainsi une preuve naturelle de \\(P \\ne NP\\) détruirait les fonctions à sens unique mêmes que la cryptographie moderne suppose exister. Les outils qui semblent évidents sont prouvablement trop grossiers.</p>
<h4><span class="hn">04</span>Les autres murs : relativisation et algébrisation</h4>
<p>Deux barrières de plus enserrent le domaine. La plupart des techniques classiques <em>relativisent</em> — elles marcheraient encore si chaque machine avait un oracle magique — et pourtant il existe des mondes à oracle où \\(P = NP\\) et d'autres où \\(P \\ne NP\\), donc aucune preuve qui relativise ne peut trancher. Les méthodes algébriques qui résolurent \\(IP = PSPACE\\) esquivent cela mais heurtent la barrière ultérieure de l'<em>algébrisation</em>. Entre elles, trois barrières excluent essentiellement toute méthode que nous avons actuellement — ce qui est pourquoi une résolution nécessiterait une idée véritablement nouvelle, non une version plus affûtée d'une ancienne.</p>
<h4><span class="hn">05</span>Le hasard est-il vraiment nécessaire ?</h4>
<p>Un fil différent demande si les lancers de pièce ajoutent une vraie puissance. <strong>BPP</strong> est ce que tu peux résoudre en temps polynomial en autorisant une petite erreur bilatérale, et pendant des décennies il sembla strictement plus riche que \\(P\\). La surprise (Impagliazzo-Wigderson, 1997) est que ce n'est probablement pas le cas : <em>si</em> des fonctions suffisamment difficiles existent, alors \\(BPP = P\\) et tout algorithme randomisé peut être dérandomisé. La difficulté, le méchant de l'histoire P-vs-NP, se révèle exactement ce qu'il faudrait pour rendre le hasard superflu.</p>
<h4><span class="hn">06</span>Preuves interactives et un choc de 2020</h4>
<p>Laisse un vérifieur interroger un prouveur et la portée du calcul s'étend de façon stupéfiante. Shamir prouva \\(IP = PSPACE\\) : tout ce qui est résoluble en mémoire polynomiale peut être <em>vérifié</em> par conversation. Ajoute plusieurs prouveurs partageant un intrication quantique et cela explose jusqu'à \\(MIP^* = RE\\) (Ji et al., 2020) — toute la classe des problèmes récursivement énumérables, y compris les indécidables. Ce résultat n'a pas seulement sidéré les théoriciens de la complexité ; il trancha la conjecture d'immersion de Connes en algèbre des opérateurs pure, un rappel que la théorie du calcul atteint désormais les coins lointains des mathématiques.</p>`,
          facts: [
            { e: '🎲', t: `Le lemme de Schwartz-Zippel sous-tend le test d'identité de polynômes — le meilleur algorithme connu est randomisé, et le dérandomiser impliquerait des bornes inférieures sur les circuits séparant P de NP.` },
            { e: '🌀', t: `MIP* = RE (2020) signifie que des prouveurs quantiquement intriqués peuvent convaincre un vérifieur de faits indécidables — le résultat le plus surprenant de la théorie de la complexité depuis des décennies.` },
            { e: '🔬', t: `La barrière de l'algébrisation montre que les techniques utilisant des méthodes algébriques — qui prouvèrent IP=PSPACE — ne peuvent à elles seules résoudre P vs NP, réduisant l'espace des stratégies de preuve possibles.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Borne inférieure sur les circuits', e: '\\exists f \\in NP:\\; \\text{size}(f) = \\Omega(2^n/n)', c: 'dénombrement de Shannon' },
            { n: 'Meilleure borne explicite', e: '\\text{size}(f) \\ge \\Omega(n \\log n)', c: 'loin de l\'exponentiel' },
            { sep: 1 },
            { n: 'Classe randomisée', e: 'BPP:\\; \\text{temps poly, erreur} \\le \\tfrac{1}{3}' },
            { n: 'Dérandomisation', e: '\\text{des fonctions difficiles existent} \\Rightarrow BPP = P' },
            { sep: 1 },
            { n: 'Preuves interactives', e: 'IP = PSPACE', c: 'Shamir 1992' },
            { n: 'Prouveurs quantiques', e: 'MIP^{*} = RE', c: 'Ji et al. 2020' },
          ] }, sim: 'complexity',
        },
      },
    },
    climate: {
      title: `Le climat et l'atmosphère`,
      teaser: `Une hausse de 1 °C de la température mondiale déclenche ouragans, sécheresses et montée des mers. Pourquoi une telle sensibilité ?`,
      chips: ['Effet de serre', 'CO₂', 'Climat'],
      lvls: {
        junior: {
          title: `La couverture invisible de la Terre`,
          body: `<p>La Terre se trouve à juste la bonne distance du Soleil — ni brûlante comme Vénus, ni gelée comme Mars. Mais la distance n'est pas toute l'histoire. Une grande part du mérite revient à notre atmosphère, une fine pellicule de gaz enveloppant la planète. Ôte-la et la température moyenne de la Terre plongerait à environ −18 °C, et chaque océan gèlerait solidement.</p>
<p>Cette atmosphère agit comme une <strong>couverture invisible</strong>. La lumière du Soleil la traverse tout droit et réchauffe le sol, et le sol chaud renvoie cette chaleur vers le haut sous forme d'infrarouge invisible — le même miroitement que tu vois monter d'une route brûlante. Certains gaz, les <strong>gaz à effet de serre</strong> (surtout le dioxyde de carbone et la vapeur d'eau), absorbent cette chaleur montante et en renvoient une grande part vers le bas. C'est l'<strong>effet de serre</strong>, et sans lui nous serions un caillou gelé.</p>
<p>Voici le hic. En brûlant charbon, pétrole et gaz, nous entassons du CO₂ supplémentaire dans l'air — épaississant la couverture, piégeant plus de chaleur, réchauffant la planète. Même un changement qui paraît minuscule, un ou deux degrés, déclenche des conséquences démesurées : les calottes glaciaires fondent, les mers grimpent, les régimes météorologiques vacillent, les récifs coralliens blanchissent et meurent. L'atmosphère est une machine délicatement réglée, et nous la modifions plus vite qu'à aucun moment du dernier million d'années.</p>`,
          facts: [
            { e: '🌡️', t: `La température moyenne de la Terre a grimpé d'environ 1,2 °C depuis la révolution industrielle. Petit à l'oreille, énorme en réalité — cela change tout.` },
            { e: '🐻‍❄️', t: `La banquise arctique d'été a rétréci d'environ 40 % depuis le début des mesures satellitaires en 1979.` },
            { e: '🌊', t: `Le niveau des mers a monté d'environ 20 cm depuis 1900. Il monte désormais plus vite à chaque décennie, à cause de la fonte des glaces et de la dilatation thermique de l'océan.` },
          ],
          formula: null, sim: 'climate',
        },
        student: {
          title: `Forçage radiatif, cycle du carbone et sensibilité climatique`,
          body: `<p>Le climat est, au fond, un problème d'équilibre énergétique : la lumière solaire entre, l'infrarouge sort. Perturbe cet équilibre — disons en ajoutant du CO₂ — et la planète doit se réchauffer jusqu'à ce que le rayonnement sortant remonte pour égaler l'entrant. La taille de la perturbation est le <strong>forçage radiatif</strong> \\(\\Delta F\\), le changement de flux d'énergie au sommet de l'atmosphère avant que quoi que ce soit ait eu la chance de se réchauffer. Pour le CO₂ il croît seulement <em>logarithmiquement</em> avec la concentration, \\(\\Delta F = 5.35\\,\\ln(C/C_0)\\) ; du \\(C_0 \\approx 280\\) ppm préindustriel aux ~420 ppm d'aujourd'hui cela fait environ \\(2\\ \\text{W/m}^2\\) — une petite veilleuse brillant sur chaque mètre carré de la Terre, sans pause.</p>
<p>Transforme le forçage en température avec \\(\\Delta T = \\lambda\\,\\Delta F\\), où \\(\\lambda\\) est la sensibilité climatique. La physique nue donne un modeste \\(\\lambda_0 \\approx 0.3\\ \\text{K par W/m}^2\\) — mais le système réplique. Le réchauffement évapore plus de vapeur d'eau, elle-même un gaz à effet de serre ; il fait fondre la glace brillante pour exposer l'océan sombre et absorbant ; et ainsi de suite. Ces <em>rétroactions</em> positives triplent à peu près la réponse, et le résultat final est la <strong>sensibilité climatique d'équilibre</strong> : environ 3 °C de réchauffement pour chaque doublement du CO₂.</p>
<p>Où va le carbone importe autant que combien nous en émettons. Le <strong>cycle du carbone</strong> fait circuler le carbone entre l'atmosphère (~900 GtC), les plantes et les sols (~2000 GtC), et le vaste réservoir océanique (~38 000 GtC). Des quelque 10 GtC que les humains libèrent chaque année, les terres et l'océan en absorbent discrètement environ 30 % chacun, laissant quelque 40 % s'entasser dans l'air. Ce surplus est ce qui pousse le CO₂ vers le haut d'environ 2,5 ppm chaque année — un rythme sans précédent nulle part dans le registre des carottes de glace.</p>`,
          facts: [
            { e: '🌿', t: `L'océan absorbe environ 30 % des émissions humaines de CO₂, mais cela provoque l'acidification des océans — le pH a chuté de 0,1 unité, dissolvant les coquilles des organismes marins.` },
            { e: '🏔️', t: `Les calottes du Groenland et de l'Antarctique renferment ensemble assez d'eau pour élever le niveau des mers d'environ 65 mètres si elles fondaient entièrement — un risque à très long terme.` },
            { e: '💨', t: `Les particules d'aérosols de l'industrie et des volcans refroidissent en fait le climat d'environ 0,5 °C, masquant un réchauffement encore plus grand. Réduire la pollution de l'air pourrait provoquer un pic de température à court terme.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Forçage radiatif`, e: '\\Delta F = 5.35\\,\\ln(C/C_0)\\ \\text{W/m}^2' },
            { n: `Concentrations`, e: 'C_0 \\approx 280\\text{ ppm},\\;\\; C_{\\text{now}} \\approx 420\\text{ ppm}' },
            { sep: 1 },
            { n: `Réponse en température`, e: '\\Delta T = \\lambda\\,\\Delta F' },
            { n: `Sensibilité sans rétroaction`, e: '\\lambda_0 \\approx 0.3\\ \\text{K·m}^2/\\text{W}' },
            { n: `Avec rétroactions`, e: '\\lambda \\approx 0.8\\text{–}1.2\\ \\text{K·m}^2/\\text{W}' },
            { sep: 1 },
            { n: `Sensibilité climatique`, e: '\\Delta T_{2\\times\\text{CO}_2} \\approx 3\\,°\\text{C}', c: `GIEC AR6` },
          ] }, sim: 'climate',
        },
        scholar: {
          title: `Modèles de bilan énergétique, MCG et points de bascule climatiques`,
          body: `<h4><span class="hn">01</span>Le bilan énergétique nu</h4>
<p>Au niveau le plus simple, la Terre doit rayonner exactement la lumière solaire qu'elle garde : le solaire absorbé égale l'infrarouge émis, \\(\\dfrac{S_0(1-\\alpha)}{4} = \\sigma T_{\\text{eff}}^4\\). Résous pour la température effective de rayonnement et tu obtiens \\(T_{\\text{eff}} = \\left[\\dfrac{S_0(1-\\alpha)}{4\\sigma}\\right]^{1/4} \\approx 255\\ \\text{K}\\) — un glacial −18 °C. C'est la température que la Terre <em>devrait</em> avoir, et ce modèle de coin de table explique déjà pourquoi l'albédo et l'émission solaire sont les cadrans maîtres de la planète.</p>
<h4><span class="hn">02</span>Le cadeau de 33 degrés, et son surplus mesuré</h4>
<p>Pourtant la surface siège près de 288 K, un plein ~33 K plus chaud que ne le prédit le bilan nu. Cet écart <em>est</em> l'effet de serre naturel — les gaz à effet de serre interceptent l'infrarouge sortant et en re-rayonnent une grande part vers le bas. Fait crucial, nous pouvons désormais observer son renforcement humain depuis l'orbite : les satellites mesurent un déséquilibre énergétique persistant d'environ \\(+0.9\\ \\text{W/m}^2\\), la planète absorbant plus qu'elle n'émet, une empreinte directe du forçage anthropique plutôt qu'une déduction à partir des thermomètres de surface.</p>
<h4><span class="hn">03</span>Rétroactions : le thermostat et ses amplificateurs</h4>
<p>Ce qui arrête l'emballement, c'est la <strong>rétroaction de Planck</strong> : par Stefan–Boltzmann, une surface plus chaude rayonne en \\(T^4\\), donc l'émission se raidit avec la température, \\(\\lambda_P = -1/(4\\sigma T^3) \\approx -3.2\\ \\text{W·m}^{-2}\\text{K}^{-1}\\), une puissante force de rappel. Par-dessus se superposent amplificateurs et amortisseurs — vapeur d'eau (+1,8), gradient thermique vertical (−0,6), albédo de surface (+0,4) — et la sensibilité d'équilibre est fixée par leur somme, \\(\\text{ECS} = -\\Delta F_{2\\times}/\\gamma\\). La planète a un thermostat ; les rétroactions décident de sa nervosité.</p>
<h4><span class="hn">04</span>Pourquoi la fourchette de sensibilité ne rétrécira pas : les nuages</h4>
<p>Malgré tous les progrès, l'estimation de l'ECS est obstinément restée près de 2,5–4 °C depuis des décennies, et le coupable, ce sont les nuages. La rétroaction nuageuse s'étend n'importe où de −0,4 à +0,4 W·m⁻²K⁻¹ — elle peut soit refroidir la planète en réfléchissant la lumière solaire, soit la réchauffer en piégeant la chaleur, selon le type et l'altitude des nuages, et le signe net est véritablement incertain. Ce seul terme domine la dispersion dans chaque ensemble de modèles, et c'est pourquoi la dernière ligne droite de la question de la sensibilité est la plus dure.</p>
<h4><span class="hn">05</span>Simuler une planète entière</h4>
<p>Les vraies projections viennent des <strong>modèles de circulation générale</strong>, qui résolvent les équations primitives — Navier–Stokes plus la thermodynamique sur une sphère en rotation — couplant océan et atmosphère sur des grilles de dizaines de kilomètres. Tout ce qui est plus petit qu'une maille (un orage convectif, un tourbillon océanique, un nuage individuel) doit être <em>paramétré</em>, approximé par une règle empirique, et c'est exactement là que les modèles divergent. Les modèles de pointe CMIP6 y greffent des cycles du carbone interactifs, la chimie des aérosols et la dynamique des calottes glaciaires.</p>
<h4><span class="hn">06</span>Points de bascule et cascades</h4>
<p>La préoccupation la plus grave, ce sont les <strong>points de bascule</strong> — des seuils où une rétroaction positive devient auto-entretenue et le système bascule dans un nouvel état qui persiste même si tu retires le forçage. Parmi les candidats : l'effondrement des calottes de l'Antarctique occidental (+3 m de niveau marin) et du Groenland (+7 m), le dépérissement de l'Amazonie, l'arrêt de l'AMOC et la libération de méthane du pergélisol. Des travaux récents suggèrent que plusieurs pourraient être franchis dès 1,5–2 °C, et pire, ils peuvent interagir — une bascule en poussant une autre en <em>cascade</em>, déstabilisant le système à des températures autrefois jugées sûres.</p>`,
          facts: [
            { e: '💻', t: `Les modèles climatiques à plus haute résolution tournent sur des superordinateurs pétaflopiques pendant des mois pour simuler des décennies — et pourtant ne peuvent toujours pas résoudre les nuages individuels.` },
            { e: '📡', t: `Les instruments satellitaires CERES mesurent le déséquilibre énergétique de la Terre à +0,87 ± 0,12 W/m² (NASA, 2022) — confirmant directement depuis l'espace le forçage de serre.` },
            { e: '🌊', t: `L'AMOC s'est affaiblie d'environ 15 % depuis le milieu du XXe siècle (Caesar et al., Nature 2018) et pourrait franchir un point de bascule entre 1,8 °C et 4 °C de réchauffement mondial.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Bilan énergétique au sommet`, e: '\\dfrac{S_0(1-\\alpha)}{4} = \\sigma T_{\\text{eff}}^4' },
            { n: `Température effective`, e: 'T_{\\text{eff}} \\approx 255\\text{ K}', c: `surface : 288 K` },
            { sep: 1 },
            { n: `Rétroaction de Planck`, e: '\\lambda_P = -\\dfrac{1}{4\\sigma T^3} \\approx -3.2\\ \\text{W·m}^{-2}\\text{K}^{-1}' },
            { n: `Sensibilité climatique`, e: '\\text{ECS} = -\\Delta F_{2\\times}/\\gamma', c: `γ = Σ rétroactions` },
            { sep: 1 },
            { n: `Forçage du CO₂`, e: '\\Delta F = 5.35\\,\\ln(C/C_0)\\ \\text{W/m}^2' },
            { n: `Forçage actuel`, e: '\\Delta F(420/280) \\approx 2.1\\ \\text{W/m}^2' },
          ] }, sim: 'climate',
        },
      },
    },
    tectonics: {
      title: 'Tectonique des plaques et séismes',
      teaser: `Le sol sous tes pieds bouge — lentement mais inexorablement. Chaque montagne, océan et séisme en est la conséquence.`,
      chips: ['Plaques', 'Séismes', 'Sismologie'],
      lvls: {
        junior: {
          title: `La Terre est vivante — et en mouvement !`,
          body: `<p>Le sol sous tes pieds semble solide comme le roc et parfaitement immobile. Mais accélère un film de la Terre sur des millions d'années et quelque chose de stupéfiant apparaît : les continents dérivent à la surface comme de colossales pièces de puzzle à la dérive sur une lente rivière de roche brûlante. C'est la <strong>tectonique des plaques</strong>, le processus le plus important qui façonne le visage de notre planète.</p>
<p>L'enveloppe externe de la Terre est fissurée en une quinzaine de grandes dalles — les <strong>plaques tectoniques</strong> — rampant à peu près à la vitesse à laquelle poussent tes ongles, quelques centimètres par an. Dérisoire à l'échelle du jour, vertigineux à celle des temps profonds : il y a 200 millions d'années tous les continents étaient soudés en un seul supercontinent, la <strong>Pangée</strong>. L'Inde siégeait près de l'Antarctique, l'océan Atlantique n'existait pas, et l'Himalaya — les plus hautes montagnes de la Terre — n'a commencé à s'élever qu'il y a 50 millions d'années, quand l'Inde percuta l'Asie.</p>
<p>Quand les plaques s'entrechoquent, glissent l'une contre l'autre ou s'écartent, l'énergie qui se libère peut être catastrophique. Les <strong>séismes</strong> frappent quand deux plaques verrouillées par le frottement se libèrent soudain, déversant des siècles de contrainte accumulée en quelques secondes. Le séisme du Japon de 2011 fut si violent qu'il décala l'axe de la Terre de 17 centimètres et rogna 1,8 microseconde sur la durée d'un jour. Dans la simulation ci-dessous, déplace les plaques et ressens les conséquences.</p>`,
          facts: [
            { e: '🏔️', t: `L'Himalaya grandit d'environ 5 mm par an — l'Inde percute encore l'Asie à 4,4 cm/an, et la collision commencée il y a 50 millions d'années n'est pas terminée.` },
            { e: '🌊', t: `Le séisme de l'océan Indien de 2004 libéra une énergie équivalente à 23 000 bombes d'Hiroshima et déclencha des tsunamis qui tuèrent 230 000 personnes dans 14 pays.` },
            { e: '🧲', t: `Le champ magnétique terrestre — qui nous protège du rayonnement solaire — est engendré par le brassage du fer liquide dans le noyau externe, à 2 900 km sous la surface.` },
          ],
          formula: null, sim: 'tectonics',
        },
        student: {
          title: `Frontières de plaques, ondes sismiques et le cycle de Wilson`,
          body: `<p>La Terre est stratifiée comme un oignon : un noyau interne de fer solide, un noyau externe liquide en brassage qui met en marche le champ magnétique, un manteau rocheux en lente convection, et une mince croûte cassante par-dessus. Les <strong>plaques</strong> sont les ~100 km externes rigides — croûte plus le manteau le plus froid — chevauchant l'asthénosphère plus molle en dessous. Ce qui les meut n'est pas quelque tapis roulant poussant d'en bas mais surtout la gravité : la <em>poussée à la dorsale</em>, quand la croûte nouveau-née glisse hors des rides médio-océaniques, et — dominant — la <em>traction de la plaque plongeante</em>, où une dalle froide et dense s'enfonçant dans une fosse entraîne derrière elle le reste de la plaque.</p>
<p>Les plaques se rencontrent de trois façons. Aux frontières <strong>divergentes</strong> elles s'écartent et une croûte fraîche remonte (dorsales médio-océaniques, le rift est-africain) ; aux <strong>convergentes</strong> elles entrent en collision, soit en subduction pour bâtir des arcs volcaniques et de profondes fosses, soit en se froissant en montagnes plissées ; aux frontières <strong>transformantes</strong> elles glissent latéralement l'une contre l'autre (la faille de San Andreas). Prends du recul sur des centaines de millions d'années et tout cela se tricote en le <strong>cycle de Wilson</strong> — des bassins océaniques s'ouvrant par rift, puis se refermant par subduction, encore et encore.</p>
<p>Un <strong>séisme</strong> se rompt en un point appelé l'hypocentre et inonde la roche d'ondes sismiques : de rapides <em>ondes P</em> qui compriment à travers solide et liquide, et de plus lentes <em>ondes S</em> qui cisaillent, et ne passent donc qu'à travers les solides. Comme les P devancent les S, l'écart entre leurs arrivées à un sismomètre mesure la distance, et trois stations épinglent la localisation. La taille est reportée en <strong>magnitude de moment</strong> \\(M_w = \\tfrac{2}{3}\\log_{10} M_0 - 10.7\\), bâtie à partir du moment sismique \\(M_0 = \\mu A d\\) (rigidité de la roche × surface de rupture × glissement). Chaque pas entier sur l'échelle représente environ \\(32\\times\\) plus d'énergie — une magnitude 8 surpasse une magnitude 6 d'un facteur mille.</p>`,
          facts: [
            { e: '🔍', t: `Les sismologues découvrirent le noyau externe liquide de la Terre en 1906 en remarquant que les ondes S (qui ne peuvent traverser les liquides) disparaissent de l'autre côté de la planète.` },
            { e: '📡', t: `Les réseaux GPS peuvent désormais détecter le mouvement des plaques en temps réel — la plaque pacifique se déplace vers le nord-ouest à 7 cm/an, mesurable au millimètre près.` },
            { e: '⚡', t: `Le plus grand séisme jamais enregistré fut celui de Valdivia, Chili, en 1960 (M_w 9,5) — il rompit une faille de 1 000 km de long et 200 km de large simultanément.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Magnitude de moment`, e: 'M_w = \\tfrac{2}{3}\\log_{10} M_0 - 10.7' },
            { n: `Moment sismique`, e: 'M_0 = \\mu A d', c: `rigidité × surface × glissement` },
            { sep: 1 },
            { n: `Échelle d'énergie`, e: '\\Delta M_w = 1 \\;\\Rightarrow\\; \\sim\\!32\\times \\text{ énergie}' },
            { n: `Vitesse onde P`, e: 'V_P = \\sqrt{\\dfrac{K + \\tfrac{4}{3}G}{\\rho}}' },
            { sep: 1 },
            { n: `Vitesse onde S`, e: 'V_S = \\sqrt{\\dfrac{G}{\\rho}}' },
            { n: `Décalage P–S`, e: '\\Delta t = d\\!\\left(\\tfrac{1}{V_S} - \\tfrac{1}{V_P}\\right)', c: `donne la distance d` },
          ] }, sim: 'tectonics',
        },
        scholar: {
          title: `Convection mantellique, géodynamique et tomographie sismique`,
          body: `<h4><span class="hn">01</span>Le manteau est un fluide — juste très lent</h4>
<p>La roche solide s'écoule, si tu attends. Sur des millions d'années le manteau convecte comme une casserole de sirop, et sa vigueur est fixée par le <strong>nombre de Rayleigh</strong> \\(Ra = \\dfrac{\\alpha g \\Delta T d^3}{\\kappa \\nu}\\), opposant la flottabilité à la viscosité et à la diffusion. Le manteau terrestre tourne à \\(Ra \\sim 10^7\\), des milliers de fois au-delà du seuil où la convection s'amorce — donc malgré une viscosité de \\(10^{21}\\) Pa·s, l'ensemble se retourne, et la tectonique des plaques n'est que le sommet de cette convection brisant la surface en morceaux cassants.</p>
<h4><span class="hn">02</span>Comment la planète évacue sa chaleur</h4>
<p>La convection est le système de refroidissement de la planète. Le <strong>nombre de Nusselt</strong> \\(Nu \\sim Ra^{1/3}\\) dit combien de chaleur la convection transporte de plus que ne le ferait la simple conduction, et la Terre évacue environ 47 TW au total — à peu près 70 % à travers la fabrication incessante de nouvelle croûte océanique aux dorsales médio-océaniques. La tectonique n'est pas accessoire à l'histoire thermique de la Terre ; elle <em>est</em> la façon dont une planète rocheuse reste assez chaude à l'intérieur pour continuer.</p>
<h4><span class="hn">03</span>Un scanner de la Terre profonde</h4>
<p>Nous ne pouvons creuser jusqu'au noyau, mais les ondes sismiques le peuvent, et la <strong>tomographie sismique</strong> les transforme en une image 3-D. Inverse les temps d'arrivée de milliers de séismes et tu récupères où les ondes accélèrent ou ralentissent : les dalles froides et rigides vont vite, les panaches chauds et flottants vont lentement. C'est un scanner planétaire, résolvant la structure à quelques centaines de kilomètres à l'échelle globale et plus finement à l'échelle régionale — assez pour observer les dalles subduites plonger vers le noyau et les panaches en remonter.</p>
<h4><span class="hn">04</span>Les deux taches au fond du monde</h4>
<p>La trouvaille la plus saisissante de la tomographie siège à la frontière noyau-manteau : deux régions de la taille d'un continent, de roche anormalement lente, sous l'Afrique et le Pacifique, les <em>grandes provinces à faible vitesse de cisaillement</em>. Chaudes, denses et anciennes, elles pourraient être des amas primordiaux laissés par la différenciation précoce de la Terre — ou, selon une idée récente audacieuse, des fragments enfouis du corps de la taille de Mars dont la collision forma la Lune. Quoi qu'il en soit, elles semblent orienter là où naissent les panaches profonds et leurs volcans de surface.</p>
<h4><span class="hn">05</span>La géodynamo</h4>
<p>Le champ magnétique terrestre est engendré par la convection dans le noyau externe de fer liquide, et son évolution obéit à l'équation d'induction \\(\\partial_t B = \\nabla\\times(u\\times B) + \\eta \\nabla^2 B\\) : le premier terme étire et amplifie le champ, le second le laisse diffuser au loin. Lequel l'emporte se décide par le nombre de Reynolds magnétique \\(Rm = UL/\\eta \\sim 500\\) — confortablement en faveur de l'amplification — donc le noyau en brassage soutient un champ contre la décroissance ohmique, une dynamo auto-excitée qui tourne depuis des milliards d'années.</p>
<h4><span class="hn">06</span>Quand la boussole se retourne</h4>
<p>Cette dynamo n'est pas régulière. Le registre magnétique figé dans les roches montre que le champ a inversé sa polarité quelque 170 fois au cours des 100 derniers millions d'années, à des intervalles follement irréguliers de 0,1 à 50 Myr, chaque bascule prenant quelques milliers d'années. Pourquoi le champ se déstabilise et s'inverse reste seulement partiellement compris — et avec le pôle nord magnétique fonçant actuellement vers la Sibérie, ce n'est pas une question purement académique.</p>`,
          facts: [
            { e: '🌐', t: `La tomographie sismique a révélé deux « taches » de la taille d'un continent à la base du manteau (LLSVP) — peut-être les vestiges d'un impacteur de la taille de Mars qui forma la Lune il y a 4,5 milliards d'années.` },
            { e: '🧲', t: `Le pôle nord magnétique de la Terre se déplace actuellement vers la Sibérie à environ 55 km/an — 10 fois plus vite qu'au XIXe siècle — suggérant des changements dans la dynamique des flux du noyau.` },
            { e: '🔬', t: `Les expériences en cellule à enclumes de diamant peuvent recréer des pressions de 360 GPa et des températures de 6 000 K — reproduisant en laboratoire les conditions du noyau interne pour mesurer directement les propriétés du fer.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Nombre de Rayleigh`, e: 'Ra = \\dfrac{\\alpha g \\Delta T d^3}{\\kappa \\nu}', c: `manteau : Ra ~ 10⁷` },
            { n: `Nombre de Nusselt`, e: 'Nu \\sim Ra^{1/3}', c: `chaleur convective / conductive` },
            { sep: 1 },
            { n: `Équation d'induction`, e: '\\partial_t B = \\nabla\\times(u\\times B) + \\eta \\nabla^2 B' },
            { n: `Reynolds magnétique`, e: 'Rm = UL/\\eta \\sim 500', c: `l'advection domine` },
            { sep: 1 },
            { n: `Écoulement de Stokes`, e: '\\nabla P = \\eta \\nabla^2 u + \\rho g', c: `inertie négligeable` },
            { n: `Flux de chaleur`, e: 'Q = Nu\\,k\\,\\Delta T/d', c: `~47 TW au total` },
          ] }, sim: 'tectonics',
        },
      },
    },
    ocean: {
      title: 'Océanographie et courants marins',
      teaser: `L'océan est le moteur climatique de la Terre. Un fleuve d'eau plus large que l'Amazone et mille fois plus profond fait le tour de la planète entière — gardant l'Europe au chaud et l'oxygène dans l'air.`,
      chips: ['Courants', 'Thermohaline', 'Océan profond'],
      lvls: {
        junior: {
          title: `L'océan : la géante machine climatique de la Terre !`,
          body: `<p>L'océan drape 71 % de la surface de la Terre et détient 97 % de son eau — mais c'est bien plus qu'une flaque géante. C'est une vaste machine agitée et vivante qui fait tourner le climat, exhale la moitié de notre oxygène et pilote la météo de chaque pays de la carte. Sans lui la surface ferait le grand écart de −100 °C la nuit à +100 °C le jour ; au lieu de cela l'océan absorbe la chaleur en été et la redistribue en hiver, adoucissant la planète entière.</p>
<p>Et il ne reste jamais immobile. En surface, les <strong>courants entraînés par le vent</strong> balayent l'eau autour du globe en d'énormes boucles appelées <strong>gyres</strong>. Le Gulf Stream est le plus célèbre : il hisse l'eau chaude des Caraïbes le long de la côte est de l'Amérique du Nord et jusqu'en Europe, gardant Londres et Dublin 5 à 10 °C plus doux que leur latitude ne le mérite. Coupe-le et l'Europe du Nord aurait le climat du Canada.</p>
<p>Bien plus bas, une boucle encore plus grandiose tourne : la <strong>circulation thermohaline</strong>, le « tapis roulant océanique ». Près des pôles, l'eau froide et salée devient dense et plonge vers le fond marin, puis rampe dans les profondeurs pendant mille ans avant de refaire surface. Ce fleuve caché convoie chaleur, nutriments et gaz dissous vers chaque recoin de la mer — et la crainte que le changement climatique puisse le stopper est l'une des plus grandes de l'océanographie.</p>`,
          facts: [
            { e: '🌡️', t: `Le Gulf Stream transporte 30 millions de mètres cubes d'eau par seconde — 150 fois le débit combiné de tous les fleuves de la Terre.` },
            { e: '🐋', t: `Le point le plus profond de l'océan — la fosse Challenger, dans la fosse des Mariannes — atteint 11 034 mètres de profondeur. Le mont Everest y tiendrait avec 2 km de rab.` },
            { e: '💨', t: `L'océan produit environ 50 % de l'oxygène de la Terre — surtout à partir du phytoplancton microscopique près de la surface, non des forêts tropicales.` },
          ],
          formula: null, sim: 'ocean',
        },
        student: {
          title: `Écoulement géostrophique, transport d'Ekman et circulation thermohaline`,
          body: `<p>Le vent traînant sur la surface de la mer semblerait ne faire que pousser l'eau dans son sens — mais la Terre en rotation intervient. L'effet <strong>Coriolis</strong> courbe l'eau en mouvement vers la droite au nord, vers la gauche au sud, et parce que cette courbure se compose avec la profondeur (la <em>spirale d'Ekman</em>), le transport net de surface finit à un plein 90° sur le côté du vent, \\(M_E = \\dfrac{\\tau}{\\rho f}\\), avec \\(f = 2\\Omega\\sin\\varphi\\) le paramètre de Coriolis. Là où ces transports convergent, l'eau s'entasse en une douce colline, et le gradient de pression qu'elle bâtit entraîne l'<strong>écoulement géostrophique</strong> : des courants qui longent les contours de pression au lieu de descendre la pente, exactement comme le vent tournant autour d'un système météo.</p>
<p>Assemble cela à travers un bassin et tu obtiens les grands <strong>gyres</strong>, avec l'<em>équilibre de Sverdrup</em> \\(\\beta V = \\tfrac{1}{\\rho}(\\nabla\\times\\tau)\\) liant leur écoulement intérieur au rotationnel du vent. Une bizarrerie de la sphère en rotation — la variation de \\(f\\) vers les pôles — comprime l'écoulement de retour en un ruban mince et rapide du côté ouest, ce qui est exactement pourquoi le Gulf Stream et le Kuroshio sont si étroits et intenses. Sous toute cette agitation entraînée par le vent court la <strong>circulation thermohaline</strong> entraînée par la densité : l'eau froide et salée de l'Atlantique Nord plonge pour alimenter un retournement global de quelque 18 sverdrups (1 Sv = un million de mètres cubes par seconde).</p>
<p>Verticalement l'océan est empilé par densité. Une couche de mélange chaude et brassée par le vent d'environ 100 m flotte sur la <strong>thermocline</strong>, où la température chute abruptement, au-dessus de l'abysse froid et quasi uniforme à environ 2 °C. Cette stratification, jaugée par la fréquence de flottabilité \\(N^2 = -\\tfrac{g}{\\rho}\\tfrac{d\\rho}{dz}\\), lutte pour tenir les couches à part. Ce qui maintient la circulation profonde en vie contre elle, c'est le lent goutte-à-goutte du mélange par les ondes internes déferlantes — le moteur silencieux qui laisse le tapis roulant continuer de tourner.</p>`,
          facts: [
            { e: '🌡️', t: `L'AMOC a ralenti d'environ 15 % depuis le milieu du XXe siècle — si elle s'effondre, le nord-ouest de l'Europe pourrait se refroidir de 5 à 10 °C en quelques décennies, alors même que les températures mondiales montent.` },
            { e: '🧪', t: `Une seule goutte d'eau océanique profonde près de l'Antarctique était pour la dernière fois en surface il y a environ 1 000 ans — l'échelle de temps de ventilation de l'océan profond, mesurée par datation au radiocarbone.` },
            { e: '🌀', t: `Les tourbillons de méso-échelle (50–200 km de diamètre) contiennent environ 80 % de l'énergie cinétique de l'océan — ils mélangent chaleur, sel et nutriments bien plus efficacement que la circulation moyenne.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Paramètre de Coriolis`, e: 'f = 2\\Omega\\sin\\varphi' },
            { n: `Transport d'Ekman`, e: 'M_E = \\dfrac{\\tau}{\\rho f}' },
            { sep: 1 },
            { n: `Équilibre géostrophique`, e: 'fv = \\tfrac{1}{\\rho}\\partial_x P,\\quad fu = -\\tfrac{1}{\\rho}\\partial_y P' },
            { n: `Équilibre de Sverdrup`, e: '\\beta V = \\tfrac{1}{\\rho}(\\nabla\\times\\tau)' },
            { sep: 1 },
            { n: `Densité de l'eau de mer`, e: '\\rho = \\rho(T,S,P) \\approx 1025\\ \\text{kg/m}^3' },
            { n: `Fréquence de flottabilité`, e: 'N^2 = -\\dfrac{g}{\\rho}\\dfrac{d\\rho}{dz}' },
          ] }, sim: 'ocean',
        },
        scholar: {
          title: `Couplage océan-atmosphère, ENSO et mélange abyssal`,
          body: `<h4><span class="hn">01</span>Une interface agitée</h4>
<p>Océan et atmosphère sont verrouillés dans un échange constant de chaleur, d'humidité et de quantité de mouvement à travers leur surface commune. Le flux est capturé par les <strong>formules bulk</strong> : chaleur sensible \\(Q_S = \\rho_a c_p C_H U (T_s - T_a)\\), chaleur latente \\(Q_L = \\rho_a L_v C_E U (q_s - q_a)\\), plus le rayonnement. Ce qui fait de cela un système <em>couplé</em> plutôt que deux systèmes séparés, c'est que les anomalies de température de surface de la mer qui en résultent rétroagissent directement sur les vents qui les ont produites — et cette boucle de rétroaction est là où l'emprise de l'océan sur le climat se resserre vraiment.</p>
<h4><span class="hn">02</span>ENSO : le battement de cœur le plus fort de la planète</h4>
<p>Le mode couplé le plus fort de tous est l'<strong>ENSO</strong>, l'oscillation australe El Niño, et il tourne sur la <em>rétroaction de Bjerknes</em> : l'eau chaude du Pacifique oriental affaiblit les alizés, des vents plus faibles ralentissent la froide remontée d'eau, et la remontée ralentie réchauffe l'eau davantage — une boucle auto-amplificatrice. Tous les quelques ans elle fait osciller le Pacifique entre états chaud (El Niño) et froid (La Niña), et de là redirige pluies, sécheresses et tempêtes à travers des continents entiers. Les modèles couplés le prévoient désormais six à neuf mois à l'avance.</p>
<h4><span class="hn">03</span>Le problème du mélange</h4>
<p>Voici un paradoxe au cœur de l'océanographie physique. Le retournement profond dépend du lent réchauffement et de la remontée de l'eau abyssale froide, ce qui exige un mélange vertical de l'ordre de \\(\\kappa \\sim 10^{-4}\\ \\text{m}^2/\\text{s}\\) — mille fois plus que la diffusion moléculaire ne pourrait jamais fournir. Quelque chose doit brasser l'océan profond bien plus fort que la conduction de la chaleur ne le peut, sinon tout le tapis roulant s'arrête. Trouver <em>où</em> ce mélange se produit, et combien, est le « problème du mélange » de longue date.</p>
<h4><span class="hn">04</span>Les ondes internes font le brassage</h4>
<p>La réponse tient largement aux <strong>ondes internes</strong>. Les marées clapotant sur la rugueuse topographie du fond marin pompent environ un térawatt dans des ondes qui voyagent le long des surfaces de densité à l'intérieur de l'océan, puis se raidissent et déferlent, mélangeant au passage. Le champ de fond de ces ondes est si universel qu'il a sa propre loi — le spectre de Garrett–Munk — qui colle aux observations de l'Arctique aux tropiques. La circulation profonde, autrement dit, est ultimement alimentée par la Lune, son énergie blanchie à travers des ondes déferlantes dans le noir.</p>
<h4><span class="hn">05</span>Simuler la mer</h4>
<p>Les modèles océaniques résolvent les <strong>équations primitives</strong> — Navier–Stokes sur une sphère en rotation sous les approximations de Boussinesq et hydrostatique, \\(\\partial_z P = -\\rho g\\). Les OGCM modernes tournent à environ 1/12° (~8 km), assez fin pour résoudre les énergiques tourbillons de méso-échelle qui portent l'essentiel de l'énergie cinétique de l'océan, tout en paramétrant encore le mélange à plus petite échelle. Couple-les à l'atmosphère, à la banquise et à la biogéochimie et tu as les modèles du système terrestre qui sous-tendent la projection climatique.</p>
<h4><span class="hn">06</span>Le grand puits de chaleur de la planète</h4>
<p>Tout cela importe de façon urgente parce que l'océan a discrètement englouti environ 93 % de la chaleur supplémentaire piégée par les gaz à effet de serre depuis les années 1950 — sans ce tampon, la surface terrestre serait déjà brûlante. La révolution dans son observation a été <em>Argo</em>, une flotte d'environ 4 000 flotteurs robotisés qui plongent et remontent à travers chaque océan, profilant température et salinité jusqu'à 2 km tous les dix jours. Pour la première fois nous pouvons mesurer le lent stockage de chaleur de la mer à l'échelle planétaire en quelque chose de proche du temps réel.</p>`,
          facts: [
            { e: '⚡', t: `Les marées internes engendrées là où les courants de marée s'écoulent sur la dorsale hawaïenne emportent environ 20 GW d'énergie dans le Pacifique ouvert — une source majeure de mélange abyssal.` },
            { e: '🌍', t: `L'océan a absorbé environ 93 % de l'excès de chaleur du forçage de serre anthropique depuis 1955 — sans ce tampon, la surface de la Terre serait environ 36 °C plus chaude aujourd'hui.` },
            { e: '🔬', t: `Les flotteurs Argo — 4 000 robots profileurs autonomes dérivant dans chaque océan — mesurent température et salinité de 0 à 2 000 m tous les 10 jours, transformant l'observation océanique depuis 2000.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Équations primitives`, e: '\\dfrac{Du}{Dt} - fv = -\\tfrac{1}{\\rho}\\partial_x P + \\nu\\nabla^2 u' },
            { n: `Équilibre hydrostatique`, e: '\\partial_z P = -\\rho g' },
            { sep: 1 },
            { n: `Vitesse onde de Rossby`, e: 'c_R = -\\beta L_d^2', c: `vers l'ouest` },
            { n: `Rayon de déformation`, e: 'L_d = NH/f' },
            { sep: 1 },
            { n: `Chaleur latente air–mer`, e: 'Q_L = \\rho_a L_v C_E U(q_s - q_a)' },
            { n: `Mélange abyssal`, e: '\\kappa \\sim 10^{-4}\\ \\text{m}^2/\\text{s}', c: `contre 10⁻⁷ moléculaire` },
          ] }, sim: 'ocean',
        },
      },
    },
    volcano: {
      title: 'Volcanologie',
      teaser: `Un volcan est une fenêtre sur l'intérieur de notre planète. Le même processus qui détruit des villes a bâti les continents, créé les océans et fabriqué l'atmosphère que nous respirons.`,
      chips: ['Magma', 'Éruptions', 'Géorisques'],
      lvls: {
        junior: {
          title: `Montagnes de feu — les plus puissants bâtisseurs de la Terre !`,
          body: `<p>Un volcan est l'une des forces les plus terrifiantes de la nature — et l'une des plus créatrices. Au plus profond de la Terre, la roche fond sous une chaleur et une pression féroces en <strong>magma</strong>, un liquide épais et incandescent plus léger que la roche solide qui l'entoure. Comme une bulle montant à travers du miel, le magma se fraye un chemin vers le haut par les fissures de la croûte, et quand il perce enfin la surface il fait éruption en <strong>lave</strong>, cendres et gaz — bâtissant de nouvelles terres au passage.</p>
<p>Les volcans se présentent sous des formes très différentes. Les <strong>volcans boucliers</strong>, comme ceux d'Hawaï, sont larges et à pente douce, suintant une lave fluide qui coule sur des kilomètres et explose rarement. Les <strong>stratovolcans</strong> comme le Vésuve ou le Krakatoa sont les cônes escarpés et parfaits pour la carte postale, bâtis couche par couche de cendres et de lave collante — et ils peuvent partir avec une violence catastrophique.</p>
<p>Malgré toute leur puissance destructrice, les volcans sont une grande part de la raison même de notre présence ici. Sur des milliards d'années, les éruptions ont recraché les gaz qui devinrent notre atmosphère et remplirent les océans. Le dioxyde de carbone que les plantes respirent, l'azote que nous respirons, jusqu'à l'eau de la mer — presque tout est un jour sorti en rugissant d'un volcan. Sans eux, la Terre serait un caillou stérile, aussi mort que la Lune. Dans la simulation ci-dessous, regarde une chambre magmatique se mettre sous pression et exploser.</p>`,
          facts: [
            { e: '🌍', t: `Il y a environ 1 500 volcans potentiellement actifs sur Terre — 500 ont fait éruption dans l'histoire écrite, et 50 à 70 entrent en éruption chaque année.` },
            { e: '❄️', t: `L'éruption du mont Tambora en 1815 injecta tant de cendres dans l'atmosphère que 1816 devint « l'année sans été » — les récoltes échouèrent partout et 100 000 personnes moururent de faim.` },
            { e: '🌊', t: `Le plus grand volcan de la Terre est le Mauna Loa, à Hawaï — mesuré depuis sa base au fond de l'océan, il est plus haut que le mont Everest de plus d'un kilomètre.` },
          ],
          formula: null, sim: 'volcano',
        },
        student: {
          title: `Genèse du magma, styles d'éruption et risques volcaniques`,
          body: `<p>Le magma n'est pas simplement de la « roche fondue » — il se forme par <strong>fusion partielle</strong>, et il y a trois façons de faire basculer le manteau solide par-dessus bord. La <em>décompression</em> : le manteau remontant à une dorsale passe sous sa pression de fusion et fond en chemin. La <em>fusion par flux</em> : l'eau essorée d'une dalle en subduction abaisse le point de fusion du manteau au-dessus, brassant les magmas riches en silice des arcs volcaniques. Le <em>transfert de chaleur</em> : le magma mantellique chaud injecté dans la croûte la fond de l'intérieur. Le produit va du basalte fluide (~50 % de silice) à la rhyolite raide (~75 %) — et cette teneur en silice décide discrètement de presque tout ce qui suit.</p>
<p>Le style d'éruption est en réalité un bras de fer entre la <strong>viscosité</strong> et le gaz dissous. À mesure que le magma grimpe, la pression qui le comprime se relâche et les volatils — eau, CO₂, SO₂ — sortent en pétillant sous forme de bulles, exactement comme en ouvrant une bouteille secouée. Dans le basalte fluide les bulles s'échappent et le magma se contente de se déverser (une éruption <em>effusive</em>). Dans la rhyolite raide elles sont piégées, la pression s'accumule derrière elles, et le tout détonne en une colonne <em>plinienne</em> vertigineuse. La taille est consignée sur l'<strong>indice d'explosivité volcanique</strong>, une échelle logarithmique de 0 à 8 où chaque pas représente environ \\(10\\times\\) plus de matériaux éjectés — et une « supééruption » de VEI 8 comme Yellowstone projette plus de 1 000 km³.</p>
<p>Les dangers sont nombreux et inégaux. Les coulées de lave sont lentes et presque inarrêtables mais rarement mortelles ; les vrais tueurs sont les <strong>courants de densité pyroclastiques</strong> — des avalanches brûlantes de gaz et de roche à des centaines de degrés, dévalant les pentes à la vitesse d'une autoroute. Ajoute des chutes de cendres assez lourdes pour effondrer les toits, les <em>lahars</em> (coulées de boue volcanique) qui ensevelissent des vallées entières, et le gaz invisible — l'éruption du Laki de 1783 exhala assez de soufre pour tuer un quart de l'Islande. Aujourd'hui un maillage de sismomètres, de GPS, de capteurs de gaz et de radars satellitaires surveille les volcans agités pour les tremblements et le gonflement qui précèdent une éruption.</p>`,
          facts: [
            { e: '💨', t: `L'éruption du Pinatubo en 1991 injecta 20 millions de tonnes de SO₂ dans la stratosphère, formant des aérosols de sulfate qui refroidirent la Terre de 0,5 °C pendant deux ans.` },
            { e: '🔥', t: `Les coulées pyroclastiques du Vésuve en 79 apr. J.-C. atteignirent Herculanum en 4 minutes à environ 300 °C — la mort fut instantanée par choc thermique, non par asphyxie comme on le pensait auparavant.` },
            { e: '📡', t: `La déformation du sol à la caldeira de Yellowstone est surveillée par plus de 30 stations GPS ; elle se gonfle et se dégonfle jusqu'à 20 cm/an à mesure que les fluides hydrothermaux se déplacent — mais aucun signe d'une éruption imminente.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Viscosité du magma`, e: '\\eta = A\\,e^{E_a/RT}', c: `monte avec SiO₂, baisse avec T` },
            { n: `Croissance des bulles`, e: '\\dfrac{dR}{dt} = \\dfrac{(P_b - P_\\infty)R}{4\\eta}' },
            { sep: 1 },
            { n: `Indice d'explosivité`, e: '\\text{VEI} \\approx \\log_{10}(V_{\\text{ejecta}}) + 8', c: `V en km³` },
            { n: `Colonne plinienne`, e: 'H \\approx 0.236\\,Q^{1/4}', c: `Q = flux de masse` },
            { sep: 1 },
            { n: `Fusion par décompression`, e: '\\left.\\tfrac{dT}{dP}\\right|_{\\text{sol}} < \\left.\\tfrac{dT}{dP}\\right|_{\\text{adiabat}}' },
            { n: `Forçage du SO₂`, e: '\\Delta F \\approx -0.03\\,M_{\\text{SO}_2}\\ \\text{W/m}^2', c: `par Tg` },
          ] }, sim: 'volcano',
        },
        scholar: {
          title: `Dynamique des chambres magmatiques, saturation en volatils et supéréruptions`,
          body: `<h4><span class="hn">01</span>Non une mare de lave, mais une bouillie</h4>
<p>Le dessin d'une caverne en fusion sous un volcan est faux. Les vrais réservoirs de magma sont des <strong>bouillies cristallines</strong> — un mélange spongieux de cristaux et de liquide interstitiel, avec une fraction de liquide \\(\\phi\\) allant de près de 1 (liquide) jusqu'à ~0,4, en dessous de laquelle les cristaux s'enchevêtrent et toute la masse se bloque comme du sable mouillé. Cette <strong>fraction de liquide critique</strong> \\(\\phi_c \\approx 0.4\\text{–}0.5\\) est la charnière rhéologique entre « éruptible » et « bloqué », et l'essentiel de la vie d'un réservoir se passe stationné, froid et riche en cristaux, du mauvais côté d'elle.</p>
<h4><span class="hn">02</span>Le déclencheur de recharge</h4>
<p>Ce qui fait basculer une bouillie calée en éruption est souvent une injection de magma mantellique frais et chaud par en dessous. La recharge réchauffe et remobilise le tas de cristaux, comprime et exsolve ses volatils, et surpressurise le réservoir. Le plus étonnant est l'échelle de temps : le zonage chimique figé dans les cristaux de plagioclase et d'olivine enregistre le processus prenant de simples semaines à quelques années — un système géologique qui passe des millénaires en sommeil peut s'armer en une saison.</p>
<h4><span class="hn">03</span>Les volatils et le pétillement</h4>
<p>Tout ce qui est explosif remonte au gaz dissous. La solubilité de l'eau dans un liquide silicique évolue à peu près comme \\(X_{\\text{H}_2\\text{O}} \\propto P^{1/2}\\), donc à mesure que le magma monte et que la pression tombe, l'eau est forcée hors de la solution et dans les bulles. Avec quelle violence dépend de la vitesse de décompression par rapport à la lenteur avec laquelle le liquide visqueux laisse les bulles croître et se drainer. Rate cet équilibre — monte trop vite dans un liquide trop raide — et les bulles ne peuvent suivre, et la pression n'a d'autre issue que dehors.</p>
<h4><span class="hn">04</span>Fragmentation : quand le magma se brise</h4>
<p>Le moment de l'explosion est un changement de phase de comportement. Quand le taux de déformation dépasse la capacité du liquide à s'écouler — grossièrement, \\(\\dot{\\varepsilon} > G/\\eta\\) — le magma cesse de se comporter comme un liquide et se brise comme du verre, se fragmentant en pyroclastes le long du <strong>front de fragmentation</strong>. Un liquide continu devient un jet à grande vitesse de cendres et de gaz en un instant. Tout ce qui est au-dessus de ce front est une colonne éruptive ; tout ce qui est en dessous est encore du magma. C'est le seul seuil qui sépare une coulée de lave d'une catastrophe plinienne.</p>
<h4><span class="hn">05</span>Supéréruptions</h4>
<p>Les <strong>supéréruptions</strong> (VEI ≥ 8, plus de 1 000 km³) exigent la mobilisation rapide d'un énorme corps de bouillie — une rare conjonction d'un grand réservoir et d'un déclencheur assez puissant. Yellowstone l'a fait trois fois, la plus récente étant le tuf de Lava Creek, vieux de 640 000 ans, environ 1 000 km³ de rhyolite. Ce ne sont pas juste de plus grandes éruptions ; elles opèrent à une échelle physique différente, vidant un réservoir si grand que le sol au-dessus s'effondre en une <em>caldeira</em> de dizaines de kilomètres de large.</p>
<h4><span class="hn">06</span>Hiver volcanique</h4>
<p>La menace globale des plus grandes éruptions est climatique, non locale. Le soufre injecté dans la stratosphère forme une brume d'aérosols de sulfate qui s'attarde un an ou deux, réfléchissant la lumière solaire et refroidissant la surface — un <em>hiver volcanique</em>. La supéréruption de Toba il y a environ 74 000 ans a peut-être plongé le monde exactement dans cela, et certains lisent un goulot d'étranglement génétique correspondant dans l'ADN humain, comme si notre espèce avait été brièvement réduite à quelques milliers de survivants. Même la modeste éruption du Pinatubo de 1991 refroidit mesurablement la planète de 0,5 °C pendant deux ans — une preuve de concept, à petite échelle.</p>`,
          facts: [
            { e: '🧬', t: `Des preuves génétiques suggèrent que la supéréruption de Toba il y a 74 000 ans a peut-être réduit la population humaine à moins de 10 000 couples reproducteurs — expliquant un goulot d'étranglement visible dans notre ADN.` },
            { e: '🔬', t: `La chronométrie par diffusion dans les cristaux d'olivine peut mesurer combien de temps le magma a passé à température d'éruption — parfois seulement des jours à des semaines avant une éruption majeure.` },
            { e: '🌍', t: `Les trapps du Deccan (Inde, ~66 Ma) ont émis 500 000 km³ de lave sur ~1 Myr — coïncidant avec l'extinction K-Pg et contribuant peut-être aux côtés de l'impact de Chicxulub.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Solubilité H₂O`, e: 'X_{\\text{H}_2\\text{O}} = a\\,P^{1/2}', c: `a ≈ 3.07×10⁻⁴ (800 °C)` },
            { n: `Fragmentation`, e: '\\dot{\\varepsilon} > G/\\eta', c: `transition cassante` },
            { sep: 1 },
            { n: `Cristallisation d'Avrami`, e: '\\phi(t) = 1 - e^{-K t^{n}}' },
            { n: `Fraction de liquide critique`, e: '\\phi_c \\approx 0.4\\text{–}0.5', c: `blocage rhéologique` },
            { sep: 1 },
            { n: `Hauteur de colonne`, e: 'H = 0.236\\,Q^{1/4}', c: `Q = flux de masse` },
            { n: `Forçage climatique`, e: '\\Delta T \\approx -0.03\\,M_{\\text{SO}_2}', c: `par Tg injecté` },
          ] }, sim: 'volcano',
        },
      },
    },
    seasons: {
      title: 'Pourquoi nous avons des saisons',
      teaser: `L'été n'est pas le moment où la Terre est la plus proche du Soleil — c'est une inclinaison de 23,5°, et cela change tout.`,
      chips: ['Inclinaison axiale', 'Solstice', 'Lumière solaire'],
      lvls: {
        junior: {
          title: `Pourquoi l'été est chaud (et ce n'est pas ce que tu crois)`,
          body: `<p>La plupart des gens devinent que l'été est chaud parce que la Terre est plus proche du Soleil. C'est une supposition raisonnable — et elle est fausse. La distance de la Terre au Soleil change à peine sur toute l'année. En fait la Terre est <em>légèrement la plus proche</em> du Soleil début janvier, au milieu de l'hiver du nord ! Donc la distance ne peut être la réponse. La vraie raison est une <strong>inclinaison</strong>.</p>
<p>La Terre tourne sur un axe qui n'est pas droit vers le haut — il penche d'environ <strong>23,5°</strong>, et il continue de pointer dans la même direction toute l'année tandis qu'elle tourne autour du Soleil. Donc pendant la moitié de l'année la moitié nord de la planète penche vers le Soleil, et l'autre moitié elle penche à l'opposé. Quand ta moitié penche vers le Soleil, ses rayons te frappent plus directement et les jours sont plus longs — c'est l'été. Quand elle penche à l'opposé, la lumière arrive sous un angle rasant et étalé et les jours sont courts — c'est l'hiver.</p>
<p>C'est aussi pourquoi les saisons sont opposées dans les deux moitiés du monde. Quand c'est l'été en Europe et que le nord penche vers le Soleil, la moitié sud — l'Australie, l'Argentine — penche à l'opposé et vit l'hiver. Et c'est pourquoi l'équateur, qui fait toujours face au Soleil à peu près sous le même angle, n'a pas de véritable été ni hiver du tout, juste des saisons humide et sèche. Une petite inclinaison mène tout le calendrier de la chaleur.</p>`,
          facts: [
            { e: '🌍', t: `La Terre est en réalité la plus proche du Soleil début janvier — au cœur de l'hiver du nord. La distance n'est pas ce qui fait les saisons.` },
            { e: '🔄', t: `Les saisons sont opposées au nord et au sud : quand c'est l'été en Italie, c'est l'hiver en Australie, parce que les deux moitiés penchent en sens opposés.` },
            { e: '☀️', t: `Aux pôles l'inclinaison est si extrême que le Soleil ne se couche jamais pendant des mois en été — et ne se lève jamais pendant des mois en hiver.` },
          ],
          formula: null, sim: 'seasons',
        },
        student: {
          title: `Inclinaison axiale, angle solaire et durée du jour`,
          body: `<p>L'axe de la Terre est incliné de 23,5° par rapport à la perpendiculaire de son orbite et — fait crucial — il pointe dans une <em>direction fixe dans l'espace</em> (vers l'étoile Polaire) toute l'année. À mesure que la Terre orbite, cela signifie que chaque hémisphère penche tour à tour vers le Soleil et à l'opposé. Deux choses en découlent, et toutes deux rendent l'été chaud : le Soleil grimpe plus haut dans le ciel (les rayons frappent plus directement, concentrant l'énergie sur moins de sol) et les jours s'allongent (plus d'heures de chauffage).</p>
<p>L'orbite marque quatre points de bascule. Au <strong>solstice de juin</strong> le pôle nord penche au maximum vers le Soleil — été du nord, Soleil le plus haut, jours les plus longs. Au <strong>solstice de décembre</strong> c'est l'inverse. Entre les deux se trouvent les deux <strong>équinoxes</strong> (mars et septembre), quand l'inclinaison est de côté par rapport au Soleil, jour et nuit sont égaux partout, et aucun hémisphère n'est favorisé. Le Soleil se tient directement au-dessus de l'équateur aux équinoxes et au-dessus des tropiques (±23,5°) aux solstices.</p>
<p>Pourquoi un faisceau direct chauffe plus est de la pure géométrie : un faisceau rasant et incliné étale la même énergie sur une plus grande parcelle de sol (et traverse plus d'atmosphère). C'est le cosinus de l'angle à l'œuvre. Et parce que les océans et les terres mettent des semaines à se réchauffer et se refroidir, le plus fort de l'été retarde d'un mois ou deux sur le solstice de juin — le « décalage saisonnier ».</p>`,
          facts: [
            { e: '📐', t: `L'intensité de la lumière solaire suit le cosinus de l'angle du Soleil par rapport au zénith : un Soleil d'hiver bas étale son énergie mince sur le sol.` },
            { e: '⏳', t: `Les semaines les plus chaudes retardent d'un mois ou deux sur le solstice de juin, parce que terre et mer mettent du temps à se réchauffer — le « décalage saisonnier ».` },
            { e: '🌐', t: `Aux équinoxes (mars et septembre) le Soleil est au-dessus de l'équateur et chaque endroit de la Terre reçoit environ 12 heures de jour.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Inclinaison axiale`, e: '23.5°', c: `par rapport à la perpendiculaire orbitale` },
            { n: `Solstices`, e: "\\text{Juin : N vers le Soleil},\\ \\text{Déc : N à l'opposé}" },
            { n: `Équinoxes`, e: '\\text{Mars, Sep : jour et nuit égaux}' },
            { sep: 1 },
            { n: `Intensité du faisceau`, e: 'I \\propto \\cos\\theta', c: `θ = angle du Soleil par rapport à la verticale` },
          ] }, sim: 'seasons',
        },
        scholar: {
          title: `Géométrie orbitale, insolation et les longs cycles climatiques`,
          body: `<h4><span class="hn">01</span>Insolation et la loi du cosinus</h4>
<p>La puissance atterrissant sur une parcelle de sol est la constante solaire fois le cosinus de l'angle zénithal du Soleil, intégrée sur les heures de jour. Les deux facteurs — angle du faisceau et durée du jour — culminent ensemble en été, ce qui est pourquoi l'oscillation saisonnière de l'énergie reçue est plus grande que l'un ou l'autre effet seul ne le donnerait.</p>
<h4><span class="hn">02</span>Obliquité contre excentricité</h4>
<p>L'orbite de la Terre n'est que légèrement elliptique (excentricité ≈ 0,017), donc l'effet de distance est minuscule — environ 7 % de l'énergie reçue — et il <em>adoucit</em> actuellement les hivers du nord. L'inclinaison (obliquité) domine les saisons ; la faible excentricité rend surtout les saisons de l'hémisphère sud un brin plus extrêmes.</p>
<h4><span class="hn">03</span>Cycles de Milankovitch</h4>
<p>Sur des dizaines de milliers d'années l'obliquité hoche (22,1°–24,5°, ~41 000 ans), l'excentricité de l'orbite respire (~100 000 ans) et l'axe précesse (~26 000 ans). Ces lents décalages dans la façon dont la lumière solaire se répartit selon la latitude et la saison sont ce qui rythme les âges glaciaires.</p>
<h4><span class="hn">04</span>La latitude et les extrêmes</h4>
<p>Les tropiques (±23,5°) sont les seuls endroits où le Soleil peut se tenir directement au zénith ; au-delà des cercles polaires (±66,5°) l'inclinaison produit le Soleil de minuit et la nuit polaire. Les saisons sont une seule histoire géométrique, simplement racontée différemment à chaque latitude.</p>`,
          facts: [
            { e: '🧊', t: `Les cycles de Milankovitch — lents changements d'inclinaison, de forme d'orbite et d'oscillation axiale — rythment les âges glaciaires sur des dizaines de milliers d'années.` },
            { e: '🌡️', t: `L'orbite de la Terre est presque circulaire (excentricité 0,017), donc sa distance au Soleil ne change que d'environ 3 % sur l'année.` },
            { e: '🪐', t: `Mars est inclinée presque comme la Terre (25°), donc elle a des saisons familières — mais son orbite étirée les rend très inégales en durée.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Insolation`, e: 'S = S_0 \\cos\\theta_z', c: `θ_z = angle zénithal` },
            { n: `Obliquité`, e: '\\varepsilon \\approx 23.44°' },
            { sep: 1 },
            { n: `Cycle d'obliquité`, e: '22.1°\\text{-}24.5°,\\ \\sim\\!41{,}000\\ \\text{ans}' },
            { n: `Précession axiale`, e: '\\sim\\!26{,}000\\ \\text{ans}' },
          ] }, sim: 'seasons',
        },
      },
    },
    chem: {
      title: 'Atomes et liaisons chimiques',
      teaser: `Pourquoi l'eau dissout-elle le sel mais pas l'huile ? Tout se ramène à la façon dont les atomes partagent leurs électrons.`,
      chips: ['Atomes', 'Liaisons', 'Réactions'],
      lvls: {
        junior: {
          title: `Les minuscules briques de tout !`,
          body: `<p>Tout autour de toi — l'air que tu respires, la nourriture que tu manges, l'eau que tu bois — est bâti à partir de particules inimaginablement minuscules appelées <strong>atomes</strong>. Ils sont si petits qu'une seule goutte d'eau contient plus d'atomes qu'il n'y a de grains de sable sur toutes les plages de la Terre réunies.</p>
<p>Les atomes sont des assembleurs. Ils s'accrochent les uns aux autres pour faire des <strong>molécules</strong>, tenues ensemble par une <strong>liaison chimique</strong> — vois-la comme une paire de minuscules mains invisibles qui serrent fort. Deux atomes d'hydrogène agrippent un atome d'oxygène et tu obtiens de l'eau, H₂O ; un atome de sodium attrape un atome de chlore et tu obtiens le sel de table, NaCl.</p>
<p>La vraie magie est que les <em>mêmes</em> atomes, arrangés différemment, deviennent des choses radicalement différentes. Le carbone pur est le graphite mou et glissant de ton crayon — ou, lié autrement, le diamant, le matériau naturel le plus dur qui soit. Rien n'a changé sauf le motif des liaisons. Dans la simulation ci-dessous, regarde les atomes rebondir, s'attirer et s'emboîter en molécules.</p>`,
          facts: [
            { e: '💧', t: `Un verre d'eau contient environ 8 000 000 000 000 000 000 000 000 de molécules — soit 8 quadrillions !` },
            { e: '💎', t: `Le diamant et le graphite sont tous deux du carbone pur. La différence ? Seulement l'agencement des atomes !` },
            { e: '🌬️', t: `L'air est composé à 78 % d'azote (N₂) et à 21 % d'oxygène (O₂) — deux molécules totalement différentes faites de deux éléments seulement.` },
          ],
          formula: null, sim: 'chem',
        },
        student: {
          title: `Liaisons covalentes et ioniques : partage contre transfert d'électrons`,
          body: `<p>Les atomes se lient pour une raison : cela abaisse leur énergie. La plupart convoitent une couche externe pleine d'électrons — la <strong>règle de l'octet</strong> — et la façon dont ils y parviennent dépend de l'avidité avec laquelle chaque atome tire sur les électrons, une propriété appelée <em>électronégativité</em> \\(\\chi\\). L'écart \\(\\Delta\\chi\\) entre deux atomes fixe tout le caractère de la liaison qu'ils forment.</p>
<p>Quand l'écart est petit, les atomes <strong>partagent</strong>. Une liaison <em>covalente</em>, ce sont deux atomes mettant en commun une paire d'électrons dans l'espace entre eux : dans H₂ chaque hydrogène apporte un électron, la paire partagée se pose au milieu, et la molécule libère ~436 kJ/mol au passage. Mets deux paires en commun et tu obtiens une double liaison, trois une triple — chacune plus courte et plus forte que la précédente. Quand l'écart est grand, un atome se contente de <strong>prendre</strong>. Dans NaCl le chlore arrache net un électron au sodium, et les \\(\\text{Na}^+\\) et \\(\\text{Cl}^-\\) qui en résultent s'accrochent alors par pure attraction électrostatique, \\(U = -\\dfrac{k\\,Q_1 Q_2}{r}\\), s'empilant en un réseau cristallin.</p>
<p>C'est le secret derrière « qui se ressemble s'assemble ». L'eau est coudée et asymétrique, portant un moment dipolaire \\(\\mu = 1.85\\ \\text{D}\\), donc elle entoure avidement les ions et autres molécules polaires — mais laisse l'huile, qui n'a pas de telle charge à saisir, entièrement tranquille. Et quelque sinueux que soit le chemin d'une réaction, sa chaleur est fixée d'avance : la loi de Hess dit que \\(\\Delta H\\) ne dépend que des états de départ et d'arrivée, \\(\\Delta H_{\\text{rxn}} = \\sum \\Delta H_f(\\text{produits}) - \\sum \\Delta H_f(\\text{réactifs})\\), jamais du chemin entre les deux.</p>`,
          facts: [
            { e: '🔋', t: `Électronégativité (échelle de Pauling) : de 0,7 (Cs) à 4,0 (F). Plus la différence entre atomes est grande, plus la liaison est ionique.` },
            { e: '🫧', t: `Le savon fonctionne parce qu'une extrémité est polaire (aime l'eau) et l'autre non polaire (aime l'huile) — faisant le pont entre les deux mondes.` },
            { e: '🌡️', t: `Rompre des liaisons absorbe toujours de l'énergie ; en former en libère toujours. Les réactions exothermiques en libèrent plus qu'elles n'en absorbent au total.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Coulomb (ionique)`, e: 'U = \\dfrac{k\\,Q_1 Q_2}{r}', c: 'k = 8.99×10⁹ N·m²·C⁻²' },
            { sep: 1 },
            { n: `Énergies de liaison`, e: '\\text{C–C: 347},\\;\\text{C=C: 614},\\;\\text{C}\\!\\equiv\\!\\text{C: 839}', c: 'kJ/mol' },
            { n: `Loi de Hess`, e: '\\Delta H_{\\text{rxn}} = \\sum \\Delta H_f^{\\,\\text{prod}} - \\sum \\Delta H_f^{\\,\\text{react}}' },
            { sep: 1 },
            { n: `Moment dipolaire`, e: '\\mu = q\\,d', c: 'debye, D' },
            { n: `Eau`, e: '\\mu(\\text{H}_2\\text{O}) = 1.85\\ \\text{D}', c: `fortement polaire` },
          ] }, sim: 'chem',
        },
        scholar: {
          title: `Mécanique quantique de la liaison : théorie OM et dynamique réactionnelle`,
          body: `<h4><span class="hn">01</span>Une liaison, ce sont des ondes qui interfèrent</h4>
<p>Au fond, une liaison chimique est un motif d'interférence quantique. La <strong>théorie des orbitales moléculaires</strong> construit les ondes électroniques d'une molécule en additionnant celles des atomes — la recette LCAO, \\(\\psi = c_A \\phi_A + c_B \\phi_B\\). Rapproche deux orbitales 1s d'hydrogène et elles peuvent s'ajouter en phase ou en opposition de phase, et laquelle les électrons occupent fait toute la différence entre une molécule et deux atomes séparés. La liaison n'est pas une métaphore du partage ; c'est littéralement une interférence constructive d'ondes de matière.</p>
<h4><span class="hn">02</span>Liante et antiliante</h4>
<p>Les deux combinaisons se séparent en énergie. La somme en phase \\(\\sigma = (\\phi_A + \\phi_B)/\\sqrt{2+2S}\\) entasse la densité électronique <em>entre</em> les noyaux, écrantant leur répulsion et abaissant l'énergie — une orbitale liante. La différence en opposition de phase creuse un nœud entre eux et élève l'énergie — antiliante, marquée d'une étoile. Remplis le niveau liant et saute l'antiliant et les atomes tiennent ; le décompte net, \\(\\text{OL} = (N_b - N_a)/2\\), est exactement pourquoi He₂ n'existe pas alors que H₂ oui.</p>
<h4><span class="hn">03</span>Figer les noyaux : surfaces d'énergie potentielle</h4>
<p>Les électrons sont des milliers de fois plus légers que les noyaux et se déplacent d'autant plus vite, ce qui permet à l'<strong>approximation de Born–Oppenheimer</strong> de clouer les noyaux en place et de résoudre pour les électrons à chaque géométrie fixée. Fais cela partout et tu traces une <em>surface d'énergie potentielle</em> — un paysage de vallées (molécules stables) et de cols entre elles. La chimie devient topographie : une réaction est une trajectoire à travers cette surface d'une vallée à une autre.</p>
<h4><span class="hn">04</span>Par-dessus le col : états de transition et Arrhenius</h4>
<p>Entre les vallées des réactifs et des produits se trouve un col de montagne — l'<strong>état de transition</strong>, un point-selle de la surface — et sa hauteur est l'énergie d'activation \\(E_a\\). Seules les molécules ayant assez d'énergie thermique le franchissent, et comme la fraction qui le peut monte abruptement avec la température, la vitesse suit Arrhenius, \\(k = A\\,e^{-E_a/RT}\\). L'état de transition lui-même ne scintille à l'existence que pendant à peine \\(10^{-13}\\) s, et pourtant les lasers femtoseconde peuvent désormais photographier une molécule en plein passage du col.</p>
<h4><span class="hn">05</span>La fonction d'onde trop grande à stocker</h4>
<p>Le rêve de résoudre l'équation de Schrödinger pour une vraie molécule échoue sur l'échelle : la fonction d'onde de \\(N\\) électrons vit dans \\(3N\\) dimensions, et son coût explose exponentiellement — quelques douzaines d'atomes et aucun ordinateur qui existera jamais ne pourrait la stocker. Pendant l'essentiel du XXe siècle, la chimie quantique quantitative resta coincée contre ce mur. La voie de sortie fut de cesser complètement de suivre la fonction d'onde.</p>
<h4><span class="hn">06</span>DFT : la densité au lieu de la fonction d'onde</h4>
<p>La <strong>théorie de la fonctionnelle de la densité</strong> rendit l'impossible routinier. Les théorèmes de Hohenberg–Kohn prouvent que l'humble densité électronique \\(\\rho(r)\\) — une fonction de 3 coordonnées seulement — détermine secrètement toute propriété de l'état fondamental, donc tu n'as jamais besoin de la monstrueuse fonction d'onde à \\(3N\\) dimensions. Les équations de Kohn–Sham transforment l'essaim en interaction en des problèmes traitables à un électron, cachant la difficile physique à N corps dans une fonctionnelle d'échange-corrélation. La DFT est désormais le cheval de trait derrière la conception de catalyseurs, les matériaux de batteries et la découverte de médicaments — la mécanique quantique, rendue abordable.</p>`,
          facts: [
            { e: '💻', t: `La DFT peut prédire le point de fusion de nouveaux matériaux avant qu'ils ne soient synthétisés — accélérant la découverte de décennies à des mois.` },
            { e: '🧬', t: `Toutes les simulations modernes de liaison médicament-récepteur utilisent des méthodes de mécanique quantique / mécanique moléculaire (QM/MM) dérivées de la théorie OM.` },
            { e: '⚡', t: `L'état de transition n'existe que ~10⁻¹³ seconde — trop rapide à observer directement, mais détectable par femtochimie (prix Nobel 1999).` },
          ],
          formula: { tex: 1, rows: [
            { n: `OM liante LCAO`, e: '\\psi_b = \\dfrac{\\phi_A + \\phi_B}{\\sqrt{2 + 2S}}', c: 'S = intégrale de recouvrement' },
            { n: `Ordre de liaison`, e: '\\text{OL} = \\dfrac{N_b - N_a}{2}' },
            { sep: 1 },
            { n: `Vitesse d'Arrhenius`, e: 'k = A\\,e^{-E_a/RT}' },
            { sep: 1 },
            { n: `Hohenberg–Kohn`, e: 'E[\\rho] = T[\\rho] + V_{ne}[\\rho] + J[\\rho] + E_{xc}[\\rho]' },
            { n: `Kohn–Sham`, e: '\\left[-\\tfrac{1}{2}\\nabla^2 + v_{\\text{eff}}(r)\\right]\\psi_i = \\varepsilon_i \\psi_i' },
          ] }, sim: 'chem',
        },
      },
    },
    electrochem: {
      title: 'Électrochimie et batteries',
      teaser: `Chaque fois que tu recharges ton téléphone, la chimie convertit des électrons en énergie stockée. Les mêmes réactions qui alimentent tes appareils font aussi rouiller le fer, raffinent l'aluminium et font battre ton cœur.`,
      chips: ['Rédox', 'Batteries', 'Électrolyse'],
      lvls: {
        junior: {
          title: `De l'électricité à partir de la chimie — et de la chimie à partir de l'électricité !`,
          body: `<p>Plonge deux métaux différents dans un verre d'eau salée et relie-les par un fil, et quelque chose d'extraordinaire se produit : des électrons se mettent à ruisseler à travers le fil d'un métal à l'autre — un courant électrique, tiré de rien d'autre que de la chimie. C'est exactement ainsi que fonctionna la première batterie. En 1800 Alessandro Volta empila des disques de zinc et de cuivre séparés par du tissu imbibé de saumure et produisit le premier courant électrique continu de l'histoire.</p>
<p>L'astuce est une réaction appelée <strong>oxydoréduction</strong>, ou <strong>rédox</strong>. Une substance perd des électrons (elle est <em>oxydée</em>), une autre les attrape (elle est <em>réduite</em>). Quand le zinc rencontre l'acide, ses atomes larguent des électrons et se dissolvent, et ces électrons libres partent en quête d'un endroit où être — le long du fil. Ce flux <em>est</em> l'électricité.</p>
<p>Chaque batterie que tu possèdes tourne sur la même idée, de la pile AA de ta télécommande à l'énorme pack lithium-ion d'une voiture électrique. La batterie de ton téléphone stocke l'énergie en faisant la navette d'ions lithium entre deux matériaux : utilise le téléphone et les ions dérivent d'un côté tandis que les électrons bouclent par le circuit en allumant ton écran ; branche-le et le tout tourne à l'envers, l'électricité repoussant les ions. Dans la simulation ci-dessous, regarde une batterie se décharger et se recharger en temps réel.</p>`,
          facts: [
            { e: '⚡', t: `Les batteries lithium-ion d'une Tesla Model S contiennent environ 7 000 cellules individuelles — chacune une petite réaction rédox se produisant simultanément.` },
            { e: '🧠', t: `Ton cerveau tourne à l'électrochimie : les neurones s'activent en pompant des ions sodium et potassium à travers des membranes, engendrant les signaux électriques qui sont chacune de tes pensées.` },
            { e: '🌍', t: `L'électrolyse du minerai d'aluminium consomme tant d'électricité que les fonderies d'aluminium engloutissent environ 3,5 % de toute l'électricité produite mondialement — plus que la plupart des pays.` },
          ],
          formula: null, sim: 'electrochem',
        },
        student: {
          title: `Cellules électrochimiques, l'équation de Nernst et les batteries Li-ion`,
          body: `<p>Une cellule électrochimique transforme la chimie en électricité grâce à une réaction rédox qui <em>veut</em> se produire. Sa tension motrice est le <strong>potentiel de cellule</strong> \\(E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}\\), lu directement sur une table de potentiels standards de réduction. Une valeur positive signifie que la réaction tourne spontanément, et elle se branche directement à la thermodynamique via \\(\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}\\), où \\(n\\) est le nombre d'électrons déplacés et \\(F\\) la constante de Faraday, la charge d'une mole d'entre eux. La tension, au fond, n'est que l'énergie libre par électron.</p>
<p>Les conditions standards sont une fiction commode, et l'<strong>équation de Nernst</strong> corrige la tension pour le monde réel : \\(E = E^\\circ - \\dfrac{RT}{nF}\\ln Q\\), avec \\(Q\\) le rapport des produits aux réactifs. À mesure qu'une batterie se vide, elle brûle ses réactifs et empile des produits, donc \\(Q\\) grimpe et la tension fléchit — ce qui est exactement pourquoi une batterie fatiguée affiche bas avant de finalement lâcher. Laisse \\(Q\\) atteindre l'équilibre et \\(E\\) tombe à zéro : la batterie est à plat.</p>
<p>Les cellules <strong>lithium-ion</strong> sont une belle exploitation de tout cela. Au lieu de dissoudre quoi que ce soit, elles font la navette d'ions \\(\\text{Li}^+\\) à l'entrée et à la sortie des réseaux cristallins de deux électrodes — l'<em>intercalation</em>. La charge pousse le lithium dans le graphite ; la décharge le laisse reglisser dans une cathode d'oxyde métallique, et l'électrolyte est choisi pour porter librement \\(\\text{Li}^+\\) tout en bloquant les électrons, les forçant à faire un détour par ton appareil. Les cellules actuelles atteignent ~250 Wh/kg, et pourtant une anode de lithium métallique pur pourrait en principe dépasser 3 000 — le prix même que poursuivent les batteries à électrolyte solide.</p>`,
          facts: [
            { e: '🔬', t: `L'interphase électrolyte-solide (SEI) — un film nanométrique se formant sur l'anode au premier cycle de charge — est cruciale pour la longévité de la batterie et reste mal comprise.` },
            { e: '🌡️', t: `Les batteries lithium-ion perdent ~20 % de capacité de façon permanente si elles sont chargées au-dessus de 45 °C ou déchargées en dessous de −10 °C — pourquoi les téléphones ralentissent par temps froid.` },
            { e: '♻️', t: `Moins de 5 % des batteries lithium-ion sont actuellement recyclées. À mesure que l'adoption des VE croît, cela représente à la fois un défi environnemental et une opportunité à mille milliards de dollars.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Potentiel de cellule`, e: 'E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}' },
            { n: `Lien avec l'énergie de Gibbs`, e: '\\Delta G^\\circ = -nF E^\\circ_{\\text{cell}}' },
            { sep: 1 },
            { n: `Équation de Nernst`, e: 'E = E^\\circ - \\dfrac{RT}{nF}\\ln Q' },
            { n: `À 25 °C`, e: 'E = E^\\circ - \\dfrac{0.0592}{n}\\log Q' },
            { sep: 1 },
            { n: `Loi de Faraday`, e: 'm = \\dfrac{M I t}{nF}', c: `masse déposée` },
            { n: `Équilibre`, e: 'E^\\circ_{\\text{cell}} = \\dfrac{RT}{nF}\\ln K' },
          ] }, sim: 'electrochem',
        },
        scholar: {
          title: `Cinétique d'électrode, équation de Butler-Volmer et au-delà du Li-ion`,
          body: `<h4><span class="hn">01</span>Rien n'est gratuit : la surtension</h4>
<p>La thermodynamique te dit quelle <em>devrait</em> être la tension d'une cellule, mais jamais à quelle vitesse elle la délivrera. Fais fonctionner n'importe quelle vraie électrode à un courant utile et elle exige une taxe — une <strong>surtension</strong> \\(\\eta = E - E_{\\text{eq}}\\), une poussée au-delà de l'équilibre pour faire aller la réaction à une vitesse finie. Cette tension supplémentaire est gaspillée en chaleur, et la minimiser — par de meilleurs catalyseurs et une meilleure conception d'électrode — est une grande part de ce qu'est réellement l'ingénierie des batteries et des piles à combustible.</p>
<h4><span class="hn">02</span>Butler–Volmer et la pente de Tafel</h4>
<p>Le courant que passe une électrode répond exponentiellement à cette surtension, capturé par l'<strong>équation de Butler–Volmer</strong> \\(j = j_0\\!\\left[e^{\\alpha F\\eta/RT} - e^{-(1-\\alpha)F\\eta/RT}\\right]\\). Le préfacteur \\(j_0\\), la densité de courant d'échange, mesure la rapidité intrinsèque d'une électrode — et il s'étend sur dix ordres de grandeur entre métaux, ce qui est pourquoi le platine est si prisé et si dur à remplacer. Pousse \\(\\eta\\) fort et une exponentielle l'emporte, s'effondrant en la loi linéaire de <strong>Tafel</strong> \\(\\eta = a + b\\log j\\), dont la pente trahit l'étape limitante de la réaction.</p>
<h4><span class="hn">03</span>Théorie de Marcus : la géométrie du transfert d'électron</h4>
<p>Zoome sur un unique saut d'électron et tu atteins la <strong>théorie de Marcus</strong>, qui remporta le prix Nobel 1992. Son intuition est qu'avant qu'un électron puisse sauter, les atomes et le solvant environnants doivent d'abord se réarranger vers une configuration partagée, à un coût d'énergie appelé l'<em>énergie de réorganisation</em> \\(\\lambda\\). La vitesse dépend alors de la force motrice et de \\(\\lambda\\) ensemble, \\(k_{\\text{ET}} \\propto \\exp\\!\\left[-\\dfrac{(\\Delta G^\\circ + \\lambda)^2}{4\\lambda k_B T}\\right]\\) — une quadratique, non la courbe monotone que l'intuition attend.</p>
<h4><span class="hn">04</span>La contre-intuitive région inversée</h4>
<p>Cette quadratique fait une prédiction saisissante. À mesure que tu montes la force motrice, la vitesse d'abord grimpe, culmine quand \\(-\\Delta G^\\circ = \\lambda\\) — puis <em>retombe</em> : rends une réaction plus favorable et elle va <em>plus lentement</em>. Cette <strong>région inversée</strong> parut absurde jusqu'à ce que Miller la confirme en 1984, et ce n'est pas une simple curiosité : c'est précisément ce qui laisse la photosynthèse tenir une charge séparée à part assez longtemps pour l'utiliser, en faisant atterrir la réaction inverse gaspilleuse dans la lente zone inversée.</p>
<h4><span class="hn">05</span>Au-delà du lithium</h4>
<p>Le lithium-ion ne sera pas le dernier mot. Les conceptions <strong>à électrolyte solide</strong> échangent l'électrolyte liquide inflammable contre un conducteur céramique ou polymère, débloquant les anodes de lithium métallique ; les cellules <strong>sodium-</strong> et <strong>potassium-ion</strong> troquent des performances contre des métaux abondants et bon marché ; les chimies <strong>multivalentes</strong> (Mg²⁺, Al³⁺) portent plus de charge par ion mais s'intercalent avec lenteur. Pour le réseau, les <strong>batteries à circulation</strong> stockent l'énergie dans des réservoirs d'espèces rédox dissoutes, découplant proprement combien d'énergie tu stockes de la vitesse à laquelle tu peux la délivrer.</p>
<h4><span class="hn">06</span>Faire tourner la réaction à l'envers sur le CO₂</h4>
<p>La frontière la plus ambitieuse inverse la combustion. La <strong>réduction électrochimique du CO₂</strong> utilise de l'électricité renouvelable pour retransformer le dioxyde de carbone capturé en carburants et matières premières — des catalyseurs au cuivre le convertissent déjà en éthylène à environ 70 % d'efficacité. Si cela passe à l'échelle, la même électrochimie qui stocke notre énergie pourrait aider à boucler le cycle du carbone, faisant tourner la réaction des combustibles fossiles à l'envers et tirant le carbone hors de l'air au lieu de l'y déverser.</p>`,
          facts: [
            { e: '🔬', t: `La densité de courant d'échange j₀ pour la réaction de dégagement d'hydrogène varie de 10 ordres de grandeur entre métaux — expliquant pourquoi le platine est catalytiquement unique et pourquoi trouver des alternatives moins chères est si difficile.` },
            { e: '⚡', t: `Les batteries à circulation au vanadium à l'échelle du réseau peuvent stocker des GWh d'énergie avec plus de 20 000 cycles de durée de vie — un siècle de cyclage quotidien — les rendant idéales pour le stockage d'énergie renouvelable de longue durée.` },
            { e: '🧪', t: `La réduction électrochimique du CO₂ en éthylène sur catalyseurs au cuivre atteint ~70 % d'efficacité faradique — convertissant un gaz à effet de serre directement en une précieuse matière première industrielle en n'utilisant que de l'électricité.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Butler–Volmer`, e: 'j = j_0\\!\\left[e^{\\alpha F\\eta/RT} - e^{-(1-\\alpha)F\\eta/RT}\\right]' },
            { n: `Équation de Tafel`, e: '\\eta = a + b\\log j,\\quad b = \\dfrac{2.303RT}{\\alpha F}' },
            { sep: 1 },
            { n: `Vitesse de Marcus`, e: 'k_{\\text{ET}} \\propto \\exp\\!\\left[-\\dfrac{(\\Delta G^\\circ + \\lambda)^2}{4\\lambda k_B T}\\right]' },
            { n: `Région inversée`, e: 'k_{\\text{ET}} \\downarrow \\text{ quand } |\\Delta G^\\circ| > \\lambda' },
            { sep: 1 },
            { n: `Densité d'énergie`, e: '\\mathcal{E} = \\dfrac{V_{\\text{cell}}\\,Q}{m}\\ \\text{[Wh/kg]}' },
            { n: `Li-ion (théorique)`, e: '\\text{LiCoO}_2/\\text{graphite} \\approx 370\\ \\text{Wh/kg}' },
          ] }, sim: 'electrochem',
        },
      },
    },
    kinetics: {
      title: 'Cinétique et équilibre',
      teaser: `Pourquoi la nourriture pourrit-elle plus vite en été ? Pourquoi certaines réactions explosent-elles et d'autres prennent-elles des siècles ? Les réponses révèlent comment la chimie contrôle le temps lui-même.`,
      chips: ['Vitesses de réaction', 'Équilibre', 'Catalyse'],
      lvls: {
        junior: {
          title: `À quelle vitesse la chimie se produit-elle — et quand s'arrête-t-elle ?`,
          body: `<p>Le lait au frigo se garde une semaine ; laissé sur le comptoir un jour de chaleur il tourne en quelques heures. Même chimie les deux fois — des bactéries décomposant les sucres et protéines du lait — mais la <strong>température</strong> change tout. C'est la <strong>cinétique</strong> chimique : l'étude de la vitesse des réactions, et de son pourquoi.</p>
<p>Pour qu'une réaction se produise, les molécules doivent entrer en collision — et pas juste s'effleurer. Elles doivent se heurter assez fort, et dans la bonne orientation, pour rompre de vieilles liaisons et en forger de nouvelles. Cette énergie minimale pour une « bonne » collision est l'<strong>énergie d'activation</strong>. Réchauffe les choses et les molécules bougent plus vite, se cognent plus souvent et avec plus de punch, donc la réaction file. Une règle empirique pratique : chaque hausse de 10 °C <em>double</em> à peu près la vitesse.</p>
<p>Mais la plupart des réactions ne tournent pas juste jusqu'à épuisement des réactifs. Elles s'arrêtent en douceur à un état appelé <strong>équilibre chimique</strong>, où la réaction directe (réactifs → produits) et l'inverse (produits → réactifs) tournent exactement à la même allure. Cela semble terminé, et pourtant les deux directions vont toujours à plein régime, s'annulant parfaitement. Bouscule la température, la pression ou la concentration et tu fais pencher l'équilibre — un levier que les chimistes actionnent sans cesse pour soutirer davantage de ce qu'ils convoitent. Dans la simulation ci-dessous, regarde les molécules réagir, atteindre l'équilibre et répondre à tes changements.</p>`,
          facts: [
            { e: '💎', t: `Le diamant est thermodynamiquement instable à température et pression ambiantes — il devrait spontanément se convertir en graphite. Mais l'énergie d'activation est si énorme que cela n'arrive effectivement jamais.` },
            { e: '🧪', t: `Le procédé Haber (fabriquer l'ammoniac pour les engrais) utilise un catalyseur au fer pour abaisser l'énergie d'activation — sans lui, la réaction est trop lente pour être utile même à haute température.` },
            { e: '🌡️', t: `Les réactions chimiques chez les lucioles produisent de la lumière à près de 100 % d'efficacité — presque aucune chaleur gaspillée. Les ampoules humaines gaspillent ~90 % de l'énergie en chaleur.` },
          ],
          formula: null, sim: 'kinetics',
        },
        student: {
          title: `Lois de vitesse, l'équation d'Arrhenius et le principe de Le Chatelier`,
          body: `<p>Une <strong>loi de vitesse</strong> fixe la rapidité d'une réaction en fonction de la concentration : pour des réactifs A et B, \\(r = k[A]^m[B]^n\\), où les ordres \\(m, n\\) se trouvent par l'expérience (ils ne se lisent pas sur l'équation équilibrée) et \\(k\\) est la constante de vitesse. Intègre-la et tu apprends comment les concentrations chutent avec le temps — le plus célèbre étant la loi du premier ordre \\(\\ln[A] = \\ln[A]_0 - kt\\), dont la demi-vie \\(t_{1/2} = \\ln 2/k\\) est glorieusement indépendante de la quantité de départ. Cette constance est ce qui fait de la décroissance du premier ordre une horloge : la demi-vie de 5 730 ans du carbone-14 est toute la base de la datation au radiocarbone.</p>
<p>L'emprise de la température est capturée par l'<strong>équation d'Arrhenius</strong> \\(k = A\\,e^{-E_a/RT}\\) : pousse \\(T\\) vers le haut et l'exponentielle laisse bien plus de molécules franchir la barrière d'activation. Prends les logarithmes, \\(\\ln k = \\ln A - E_a/RT\\), et un tracé de \\(\\ln k\\) contre \\(1/T\\) est une droite dont la pente te livre \\(E_a\\). La théorie de l'état de transition affine le tableau avec l'équation d'Eyring \\(k = \\dfrac{k_B T}{h}\\,e^{-\\Delta G^\\ddagger/RT}\\), scindant la barrière en enthalpie et entropie et révélant si une réaction paresseuse combat l'énergie ou le désordre.</p>
<p>Où une réaction <em>s'arrête</em> est une question distincte, fixée par la <strong>constante d'équilibre</strong> \\(K\\) et son ancre thermodynamique \\(\\Delta G^\\circ = -RT\\ln K\\). Le <strong>principe de Le Chatelier</strong> te dit comment déplacer les poteaux : perturbe un équilibre et il se décale pour émousser la perturbation — ajoute du réactif et il pousse à droite, comprime une réaction gazeuse et il glisse vers moins de molécules, chauffe-le et il penche vers l'endothermique. Le procédé Haber pour l'ammoniac est Le Chatelier tourné en stratégie industrielle : monte la pression pour favoriser le produit, puis fais un compromis sur la température et ajoute un catalyseur au fer pour garder la vitesse exploitable.</p>`,
          facts: [
            { e: '🧲', t: `Une enzyme peut accélérer une réaction d'un facteur 10¹⁷ — équivalent à transformer un processus qui prendrait 3 milliards d'années en un qui prend une seconde.` },
            { e: '⚗️', t: `Le procédé Haber-Bosch de fabrication de l'engrais ammoniac nourrit environ la moitié de l'humanité — et consomme environ 1,5 % de la production mondiale d'énergie.` },
            { e: '🔬', t: `La femtochimie (Nobel 1999) utilise des impulsions laser de 10⁻¹⁵ seconde pour photographier les molécules à l'état de transition — l'instant fugace où les liaisons sont à demi rompues.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Loi de vitesse`, e: 'r = k[A]^m[B]^n' },
            { n: `Arrhenius`, e: 'k = A\\,e^{-E_a/RT}' },
            { sep: 1 },
            { n: `Premier ordre`, e: '\\ln[A] = \\ln[A]_0 - kt,\\quad t_{1/2} = \\dfrac{\\ln 2}{k}' },
            { n: `Équation d'Eyring`, e: 'k = \\dfrac{k_B T}{h}\\,e^{-\\Delta G^{\\ddagger}/RT}' },
            { sep: 1 },
            { n: `Constante d'équilibre`, e: 'K_c = \\dfrac{\\prod[\\text{produits}]^{\\nu}}{\\prod[\\text{réactifs}]^{\\nu}}' },
            { n: `Lien thermodynamique`, e: '\\Delta G^\\circ = -RT\\ln K' },
          ] }, sim: 'kinetics',
        },
        scholar: {
          title: `Théorie de l'état de transition, mécanismes réactionnels et cinétique enzymatique`,
          body: `<h4><span class="hn">01</span>Le sommet comme quasi-équilibre</h4>
<p>La <strong>théorie de l'état de transition</strong> (Eyring, Evans et Polanyi, 1935) fit un audacieux coup simplificateur : traiter le fugace complexe activé \\([AB]^\\ddagger\\) au sommet même de la barrière d'énergie comme s'il était en équilibre avec les réactifs. De cette seule hypothèse tombe une expression universelle de la vitesse, \\(k = \\kappa\\dfrac{k_B T}{h}\\,e^{\\Delta S^\\ddagger/R}\\,e^{-\\Delta H^\\ddagger/RT}\\), le coefficient de transmission \\(\\kappa\\) épongeant les corrections quantiques comme l'effet tunnel. Les vitesses de la chimie, dit-elle, sont gouvernées par la géométrie d'un col de montagne que le système visite à peine.</p>
<h4><span class="hn">02</span>Énergie contre désordre à la barrière</h4>
<p>Scinder la barrière en \\(\\Delta H^\\ddagger\\) et \\(\\Delta S^\\ddagger\\) est plus que de la comptabilité. Une réaction peut être lente parce que son état de transition est haut en <em>énergie</em>, ou parce que l'atteindre exige un arrangement improbablement ordonné — un coût d'<em>entropie</em> raide, comme quand deux molécules doivent se rencontrer dans une géométrie précise. Arrhenius fond les deux en un seul \\(E_a\\) ; la forme d'Eyring les sépare, et le terme d'entropie est souvent ce qu'un catalyseur est réellement conçu pour corriger.</p>
<h4><span class="hn">03</span>Prédire les vitesses depuis la thermodynamique</h4>
<p>À travers une famille de réactions semblables, la barrière suit la thermodynamique d'une façon frappante de linéarité — la <strong>relation d'Evans–Polanyi</strong> \\(E_a = E_a^0 + \\alpha\\,\\Delta H_{\\text{rxn}}\\), une réaction plus favorable tendant à avoir une barrière plus basse. C'est la graine des <em>relations linéaires d'énergie libre</em> (Hammett, Marcus) qui laissent les chimistes prévoir la vitesse d'une réaction non mesurée à partir de seules données thermodynamiques bon marché — l'un des grands raccourcis économes du domaine.</p>
<h4><span class="hn">04</span>Mécanismes et l'astuce de l'état stationnaire</h4>
<p>Une réaction globale est en réalité une séquence d'étapes élémentaires, et la plus lente — l'<em>étape déterminante</em> — impose l'allure. Le cheval de trait pour les démêler est l'<strong>approximation de l'état stationnaire</strong> : suppose que tout intermédiaire réactif est consommé aussi vite qu'il se forme, \\(d[\\text{I}]/dt \\approx 0\\), et il peut être éliminé algébriquement pour livrer la loi de vitesse observée. Le bilan détaillé police alors le résultat — à l'équilibre chaque étape doit s'équilibrer individuellement, écartant des mécanismes autrement tentants.</p>
<h4><span class="hn">05</span>Enzymes : Michaelis–Menten</h4>
<p>Tourne la machinerie sur les catalyseurs de la biologie et la même hypothèse d'état stationnaire produit l'équation la plus célèbre de la biochimie. Pour \\(E + S \\rightleftharpoons ES \\to E + P\\), la vitesse est \\(v = \\dfrac{V_{\\max}[S]}{K_M + [S]}\\) — linéaire en substrat quand il est rare, saturant à \\(V_{\\max}\\) quand l'enzyme est submergée. \\(K_M\\) est le niveau de substrat à demi-vitesse maximale, une jauge pratique de la fermeté avec laquelle l'enzyme agrippe sa cible.</p>
<h4><span class="hn">06</span>Coopérativité et la limite ultime de vitesse</h4>
<p>Toutes les enzymes ne suivent pas cette courbe soignée. Les allostériques donnent une réponse sigmoïde, en interrupteur, ajustée par l'équation de Hill \\(v = \\dfrac{V_{\\max}[S]^n}{K_{0.5}^n + [S]^n}\\), où \\(n > 1\\) signale que fixer un substrat aide le suivant — la coopérativité qui laisse l'hémoglobine charger et larguer l'oxygène si nettement. Et il y a un plafond : les meilleures enzymes atteignent une efficacité catalytique \\(k_{\\text{cat}}/K_M \\sim 10^{8}\\text{–}10^{9}\\ \\text{M}^{-1}\\text{s}^{-1}\\), la vitesse à laquelle le substrat se contente de diffuser dans le site actif. Elles sont devenues si rapides que la chimie ne les limite plus — seule la vitesse de rencontre le fait.</p>`,
          facts: [
            { e: '⚡', t: `L'anhydrase carbonique catalyse CO₂ + H₂O ⇌ H₂CO₃ à 10⁶ réactions par seconde — l'une des enzymes les plus rapides connues, opérant à la limite de diffusion.` },
            { e: '🧬', t: `CRISPR-Cas9 est une enzyme — son mécanisme implique une cinétique précisément contrôlée : fixer l'ADN, dérouler l'hélice, vérifier la complémentarité, et ne cliver que lorsque tous les critères sont réunis.` },
            { e: '🔬', t: `La cinétique de molécule unique (par microscopie de fluorescence) peut désormais observer des molécules d'enzyme individuelles catalysant une réaction à la fois — révélant une hétérogénéité cachée invisible aux mesures d'ensemble.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Eyring (complète)`, e: 'k = \\kappa\\dfrac{k_B T}{h}\\,e^{\\Delta S^{\\ddagger}/R}\\,e^{-\\Delta H^{\\ddagger}/RT}' },
            { n: `Evans–Polanyi`, e: 'E_a = E_a^0 + \\alpha\\,\\Delta H_{\\text{rxn}}' },
            { sep: 1 },
            { n: `Michaelis–Menten`, e: 'v = \\dfrac{V_{\\max}[S]}{K_M + [S]}' },
            { n: `Efficacité catalytique`, e: '\\dfrac{k_{\\text{cat}}}{K_M} \\to 10^{8}\\text{–}10^{9}\\ \\text{M}^{-1}\\text{s}^{-1}', c: `limite de diffusion` },
            { sep: 1 },
            { n: `Équation de Hill`, e: 'v = \\dfrac{V_{\\max}[S]^n}{K_{0.5}^n + [S]^n}' },
            { n: `Équation de Hammett`, e: '\\log(k/k_0) = \\rho\\,\\sigma', c: `énergie libre linéaire` },
          ] }, sim: 'kinetics',
        },
      },
    },
    organic: {
      title: 'Chimie organique et molécules du vivant',
      teaser: `Le carbone est l'atome le plus polyvalent de l'univers. Avec un seul élément et quelques règles, la nature bâtit tout, de l'aspirine à l'ADN, de la soie au venin d'araignée.`,
      chips: ['Carbone', 'Biomolécules', 'Synthèse'],
      lvls: {
        junior: {
          title: `Le carbone — le maître bâtisseur du vivant !`,
          body: `<p>Des 118 éléments du tableau périodique, un est le maître bâtisseur incontesté : le <strong>carbone</strong>. Un seul atome de carbone peut tenir quatre liaisons fortes à la fois — à d'autres carbones, à l'hydrogène, l'oxygène, l'azote et plus — donc il s'enchaîne en chaînes, anneaux, ramifications et cages d'une complexité quasi sans bornes. Plus de dix millions de composés carbonés sont connus, plus que tous les autres éléments réunis, et leur étude est la <strong>chimie organique</strong>.</p>
<p>Le vivant a choisi le carbone pour exactement cette raison. Les protéines de tes muscles, l'ADN qui porte tes gènes, les sucres qui alimentent tes cellules, les graisses qui enveloppent tes nerfs — chacun est une molécule à base de carbone d'une intrication stupéfiante, bâtie en répétant des règles simples des millions de fois. Une seule protéine peut enfiler des milliers d'atomes de carbone en une forme tridimensionnelle précise, et cette forme est ce qui lui dit quoi faire.</p>
<p>La même chimie du carbone qui bourdonne dans tes cellules tourne aussi sur la paillasse d'un chimiste. L'aspirine fut d'abord fabriquée en 1897 à partir d'un composé de l'écorce de saule ; la structure de la pénicilline fut percée en 1945. Aujourd'hui les chimistes conçoivent et assemblent des molécules qui n'ont jamais existé dans la nature — médicaments, plastiques, teintures, parfums, matériaux aux étranges pouvoirs nouveaux. La chimie organique est l'art de bâtir avec l'atome le plus polyvalent de l'univers. Dans la simulation ci-dessous, regarde les atomes de carbone s'enchaîner en chaînes et anneaux.</p>`,
          facts: [
            { e: '💊', t: `Plus de 90 % de tous les médicaments pharmaceutiques contiennent du carbone — la chimie organique est littéralement la science qui te garde en bonne santé.` },
            { e: '🕷️', t: `La soie d'araignée est plus solide que l'acier à poids égal : son secret est une protéine à squelette carboné précisément replié qui s'étire avant de rompre, absorbant une énergie énorme.` },
            { e: '🌈', t: `Les couleurs des fleurs, des fruits et des feuilles d'automne sont toutes des molécules organiques — des structures en anneaux de carbone appelées pigments qui absorbent des longueurs d'onde précises de lumière.` },
          ],
          formula: null, sim: 'organic',
        },
        student: {
          title: `Groupes fonctionnels, mécanismes réactionnels et stéréochimie`,
          body: `<p>Les molécules organiques sont triées par leurs <strong>groupes fonctionnels</strong> — petits amas d'atomes récurrents qui dictent la réactivité : alcools (−OH), aldéhydes et cétones (C=O), acides carboxyliques (−COOH), amines (−NH₂), esters et alcènes (C=C). L'élégance est qu'un groupe fonctionnel se comporte à peu près pareil quelle que soit la molécule sur laquelle il est boulonné, ce qui laisse les chimistes planifier de longues synthèses comme des coups aux échecs. La vedette du spectacle est le <strong>carbonyle</strong> C=O : les électrons se pressent vers l'oxygène, laissant le carbone pauvre en électrons (\\(\\delta^+\\)) et l'oxygène riche en électrons (\\(\\delta^-\\)), donc les nucléophiles visent ce carbone — le cœur réactif de l'essentiel de la biochimie.</p>
<p>Les réactions se racontent comme des histoires d'électrons en mouvement, dessinées avec des flèches courbes, et une poignée d'archétypes couvre un terrain énorme. La <em>SN2</em> est une attaque par l'arrière en une étape qui retourne la molécule comme un gant et tourne à la vitesse \\(k[\\text{substrat}][\\text{Nu}]\\) ; la <em>SN1</em> fait une pause à un carbocation plat et brouille donc la géométrie, sa vitesse étant \\(k[\\text{substrat}]\\) seul ; l'élimination <em>E2</em> a besoin de son groupe partant et d'un hydrogène voisin alignés juste comme il faut avant de cracher un alcène ; et l'addition électrophile aux alcènes est guidée par la <em>règle de Markovnikov</em> vers l'intermédiaire le plus stable.</p>
<p>Puis vient la dimension à laquelle la biologie tient le plus : la <strong>stéréochimie</strong>, la chiralité tridimensionnelle d'une molécule. Un carbone lié à quatre groupes différents est <em>chiral</em>, existant en deux <em>énantiomères</em> images l'un de l'autre dans un miroir — identiques en toute propriété globale, et pourtant un récepteur vivant les distingue en un instant. La tragédie de la <strong>thalidomide</strong> enfonça le clou : une image miroir apaisait les nausées matinales tandis que sa jumelle causait de dévastatrices malformations congénitales. Depuis lors, bâtir un unique énantiomère pur — par catalyse asymétrique (Noyori, Sharpless ; Nobel 2001) — siège au centre de la conception des médicaments.</p>`,
          facts: [
            { e: '🔬', t: `La synthèse totale de la vitamine B₁₂ (Woodward et Eschenmoser, 1972) demanda 72 étapes et 11 ans — un jalon de l'accomplissement intellectuel humain.` },
            { e: '🧬', t: `Tous les acides aminés des protéines (sauf la glycine) sont chiraux, et le vivant n'utilise exclusivement que la forme L — un mélange 50/50 de formes L et D ne peut se replier en protéines fonctionnelles.` },
            { e: '💊', t: `L'ibuprofène est vendu en mélange 50/50 d'énantiomères — seule la forme S est active. Produire la forme S pure diviserait par deux la dose nécessaire mais est actuellement trop coûteux à grande échelle.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Polarité du carbonyle`, e: '\\text{C}\\!=\\!\\text{O}:\\;\\; \\delta^+\\text{ sur C},\\;\\; \\delta^-\\text{ sur O}' },
            { n: `Markovnikov`, e: '\\text{H} \\to \\text{C moins substitué}', c: `carbocation plus stable` },
            { sep: 1 },
            { n: `Vitesse SN2`, e: 'r = k[\\text{substrat}][\\text{Nu}]', c: `inversion` },
            { n: `Vitesse SN1`, e: 'r = k[\\text{substrat}]', c: `racémisation` },
            { sep: 1 },
            { n: `Géométrie E2`, e: '\\text{H, GP anti-périplanaires} \\to \\text{alcène trans}' },
            { n: `Centre chiral`, e: '\\text{C sp}^3\\text{, 4 groupes différents} \\to R/S' },
          ] }, sim: 'organic',
        },
        scholar: {
          title: `Réactions péricycliques, synthèse totale et chimie computationnelle`,
          body: `<h4><span class="hn">01</span>Des réactions chorégraphiées par la symétrie orbitale</h4>
<p>Les <strong>réactions péricycliques</strong> font et rompent plusieurs liaisons à la fois, en un unique tourbillon concerté à travers un état de transition cyclique — pas d'intermédiaires, pas de flèches à suivre une à une. Ce qui étonna les chimistes est que le fait qu'une telle réaction soit <em>permise</em> ou <em>interdite</em> tient purement à la symétrie des orbitales participantes, codifiée dans les règles de Woodward–Hoffmann (1965 ; Nobel 1981). Une réaction qui tourne sans heurt au chauffage peut être morte-née, sa cousine symétrique par miroir ne s'éveillant que sous la lumière. La géométrie, non l'énergie seule, décide.</p>
<h4><span class="hn">02</span>Le joyau de la couronne Diels–Alder</h4>
<p>La plus célèbre est la réaction de <strong>Diels–Alder</strong>, une cycloaddition \\([4+2]\\) où un diène et un diénophile s'enlacent en un anneau à six membres en une étape. Elle est thermiquement permise (sa sœur \\([2+2]\\) ne l'est pas), stéréospécifique, et peut forger jusqu'à quatre stéréocentres simultanément avec une sélectivité endo/exo prévisible — une efficacité qui en fait le coup de construction d'anneaux le plus puissant de l'arsenal synthétique. Une réaction, bien menée, peut assembler le squelette et fixer la forme 3-D en même temps.</p>
<h4><span class="hn">03</span>Penser à l'envers : la rétrosynthèse</h4>
<p>Bâtir une molécule complexe de zéro exige une stratégie, et l'<strong>analyse rétrosynthétique</strong> de Corey (Nobel 1990) fournit la logique : pars de la cible et <em>déconnecte</em>-la mentalement, liaison par liaison, en pièces toujours plus simples jusqu'à atteindre des choses achetables. L'art est de repérer les quelques liaisons stratégiques dont la déconnexion effondre le plus le problème. Cela transforma la synthèse totale d'une improvisation inspirée en quelque chose de plus proche d'une discipline formelle et enseignable.</p>
<h4><span class="hn">04</span>La synthèse totale comme grand art</h4>
<p>La récompense est stupéfiante. Les chimistes ont bâti des molécules comme la palytoxine — 64 stéréocentres, soit \\(2^{64}\\) stéréoisomères possibles, dont la synthèse ne doit atteindre qu'un seul — en orchestrant des douzaines de réactions chacune chimio-, régio- et stéréosélective de bout en bout, avec des groupes protecteurs blindant les mauvais groupes fonctionnels aux mauvais moments. Ces campagnes prennent des années et se lisent comme des exploits d'ingénierie, prouvant que pratiquement toute molécule que la nature peut faire, la chimie humaine le peut aussi.</p>
<h4><span class="hn">05</span>Calculer l'état de transition</h4>
<p>De plus en plus la planification se fait d'abord sur ordinateur. La <strong>chimie organique computationnelle</strong> utilise la théorie de la fonctionnelle de la densité pour cartographier les géométries d'états de transition et les barrières d'activation avant qu'un ballon ne soit touché. Le modèle <em>distorsion–interaction</em> de Houk scinde chaque barrière en l'énergie pour plier les réactifs jusqu'à la forme de l'état de transition plus le recouvrement stabilisant une fois là — une décomposition qui <em>explique</em> réellement pourquoi un produit l'emporte sur un autre, au lieu de simplement le reproduire.</p>
<h4><span class="hn">06</span>L'apprentissage automatique entre au laboratoire</h4>
<p>Le plus récent virage est vers l'IA. Les champs de force appris par machine font désormais tourner la dynamique moléculaire sur des molécules de taille médicament à une précision quasi quantique mais à une fraction du coût, et les modèles transformeurs — la même architecture derrière l'IA du langage — prédisent les produits de réaction et proposent des routes rétrosynthétiques avec plus de 90 % de précision sur des jeux de référence. Un logiciel qui autrefois se contentait de vérifier le plan d'un chimiste commence à écrire le sien, comprimant des semaines de raisonnement expert en secondes.</p>`,
          facts: [
            { e: '🔬', t: `La palytoxine — une toxine naturelle du corail — a une masse molaire de 2 680 g/mol, 64 stéréocentres (2⁶⁴ stéréoisomères possibles), et sa synthèse totale prit 20 ans et exigea un contrôle de sélectivité sans précédent.` },
            { e: '🤖', t: `Les outils de rétrosynthèse pilotés par IA (ASKCOS, IBM RXN) peuvent désormais proposer des routes de synthèse viables pour des molécules complexes en secondes — comprimant ce qui prenait autrefois des semaines à des chimistes experts.` },
            { e: '⚡', t: `La spectroscopie laser femtoseconde peut désormais observer directement la rupture de liaison dans les réactions organiques — regardant l'état de transition en temps réel pour la première fois de l'histoire de la chimie.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Diels–Alder`, e: '\\text{diène}\\,(4\\pi) + \\text{diénophile}\\,(2\\pi) \\to \\text{cyclohexène}', c: '[4+2]' },
            { n: `Woodward–Hoffmann`, e: '[4n+2]\\text{ thermique }\\checkmark,\\;\\; [4n]\\text{ thermique }\\times', c: `suprafacial` },
            { sep: 1 },
            { n: `Distorsion–interaction`, e: '\\Delta E^{\\ddagger} = \\Delta E_{\\text{dist}} + \\Delta E_{\\text{int}}' },
            { n: `Critère FMO`, e: '\\text{HOMO}_{\\text{diène}} \\leftrightarrow \\text{LUMO}_{\\text{diénophile}}' },
            { sep: 1 },
            { n: `Énergie DFT`, e: 'E[\\rho] = T_s[\\rho] + V_{ne}[\\rho] + J[\\rho] + E_{xc}[\\rho]' },
            { n: `Activation (Eyring)`, e: 'k = \\dfrac{k_B T}{h}\\,e^{-\\Delta G^{\\ddagger}/RT}' },
          ] }, sim: 'organic',
        },
      },
    },
    acids: {
      title: 'Acides, bases et pH',
      teaser: `Du jus de citron au déboucheur — une seule échelle de 0 à 14 les classe tous, et elle tourne sur un unique ion.`,
      chips: ['pH', 'Acides', 'Titrage'],
      lvls: {
        junior: {
          title: `Du jus de citron au savon : l'échelle de pH`,
          body: `<p>Certaines choses sont des <strong>acides</strong> — le jus de citron, le vinaigre, les bulles du cola, l'acide qui brasse dans ton estomac. Leurs opposés sont les <strong>bases</strong> (ou alcalis) — le savon, le bicarbonate, l'eau de Javel, le nettoyant pour four. L'<strong>échelle de pH</strong> n'est qu'une règle de 0 à 14 qui dit à quel point une chose est acide ou basique. Les nombres bas (0-6) sont des acides, 7 est neutre (l'eau pure), et les nombres hauts (8-14) sont des bases. L'acide de batterie siège près de 0, le déboucheur près de 14, et la plupart des choses de tous les jours tombent quelque part entre les deux.</p>
<p>La façon maligne de les distinguer est avec un <strong>indicateur</strong> — un colorant qui change de couleur avec le pH. L'indicateur universel parcourt tout un arc-en-ciel : rouge pour un acide fort, en passant par l'orange et le jaune, vert au neutre, puis bleu et violet pour les bases. Le papier de tournesol est la version simple — rouge en acide, bleu en base — et le jus de chou rouge réussit exactement le même tour dans ta cuisine.</p>
<p>Mélange un acide et une base et ils s'annulent l'un l'autre, une réaction appelée <strong>neutralisation</strong>. La base dompte l'acide et l'acide dompte la base, se rencontrant près du milieu au neutre et laissant d'ordinaire derrière eux de l'eau et un sel. C'est pourquoi un comprimé antiacide apaise un estomac aigre, pourquoi les jardiniers ajoutent de la chaux à un sol trop acide, et pourquoi une pincée de bicarbonate ôte la douleur d'une piqûre de guêpe acide.</p>`,
          facts: [
            { e: '🍋', t: `Le jus de citron a un pH d'environ 2 — à peu près le même que l'acide gastrique, assez fort pour dissoudre du métal.` },
            { e: '🧼', t: `Le savon est basique (pH ~9-10). Cette sensation glissante est la base réagissant avec les huiles naturelles de ta peau.` },
            { e: '🥬', t: `Le jus de chou rouge est un indicateur de pH naturel : rose en acide, vert-jaune en base — un classique de la chimie de cuisine.` },
          ],
          formula: null, sim: 'acids',
        },
        student: {
          title: `Le pH, le logarithme de l'acidité`,
          body: `<p>L'acidité se ramène à un unique ion : l'ion hydrogène \\(H^+\\) (en réalité l'hydronium \\(H_3O^+\\)). Plus il y a de \\(H^+\\) flottant dans une solution, plus elle est acide. Mais ces concentrations couvrent une plage énorme — d'environ \\(1\\) mol/L jusqu'à \\(10^{-14}\\) — donc on les comprime avec un logarithme : \\(\\text{pH} = -\\log_{10}[H^+]\\). Chaque pas entier est donc un changement d'un facteur dix en \\(H^+\\) : le pH 3 est dix fois plus acide que le pH 4 et cent fois plus que le pH 5.</p>
<p>L'eau elle-même se scinde discrètement en \\(H^+\\) et \\(OH^-\\), et leur produit est fixe : \\([H^+][OH^-] = 10^{-14}\\) à 25 °C. Dans l'eau pure les deux sont égaux à \\(10^{-7}\\), donnant un pH 7 — neutre. Ajoute de l'acide et \\(H^+\\) monte tandis que \\(OH^-\\) tombe pour garder le produit constant ; ajoute une base et l'inverse se produit. C'est pourquoi les échelles d'acide et de base sont deux moitiés d'une seule règle : \\(\\text{pH} + \\text{pOH} = 14\\).</p>
<p>Les acides forts (HCl, \\(H_2SO_4\\)) se dissocient complètement, donc leur pH découle directement de la concentration. Les acides faibles (acétique, carbonique) ne s'ionisent que partiellement, gouvernés par une constante d'équilibre \\(K_a\\), donc ils siègent à un pH plus haut qu'un acide fort de même concentration. La neutralisation, \\(H^+ + OH^- \\to H_2O\\), est la base du <strong>titrage</strong> : ajouter une base mesurée à un acide jusqu'au point d'équivalence, où le pH bondit à travers le neutre en un pas net.</p>`,
          facts: [
            { e: '📉', t: `L'échelle de pH est logarithmique : une unité signifie dix fois plus d'acide. L'acide gastrique (pH 1,5) est un million de fois plus acide que le sang (pH 7,4).` },
            { e: '🩸', t: `Ton sang est maintenu entre pH 7,35 et 7,45 par des tampons. Dérive hors de cette minuscule fenêtre et il devient mortel.` },
            { e: '🌊', t: `L'océan a absorbé tant de CO₂ que son pH a chuté d'environ 0,1 unité depuis 1850 — une hausse de 30 % d'acidité, dissolvant coquilles et récifs.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Définition du pH`, e: '\\text{pH} = -\\log_{10}[H^+]' },
            { n: `Définition du pOH`, e: '\\text{pOH} = -\\log_{10}[OH^-]' },
            { sep: 1 },
            { n: `Auto-ionisation de l'eau`, e: 'K_w = [H^+][OH^-] = 10^{-14}', c: 'à 25 °C' },
            { n: `Les deux échelles`, e: '\\text{pH} + \\text{pOH} = 14' },
            { n: `Neutralisation`, e: 'H^+ + OH^- \\to H_2O' },
          ] }, sim: 'acids',
        },
        scholar: {
          title: `Équilibres, tampons et courbes de titrage`,
          body: `<h4><span class="hn">01</span>Brønsted-Lowry et au-delà</h4>
<p>Un acide est un donneur de proton et une base un accepteur de proton, et chaque acide a une <em>base conjuguée</em> laissée derrière quand il cède son proton. L'image de Lewis généralise davantage, aux donneurs et accepteurs de paires d'électrons. La force est capturée par la constante de dissociation acide \\(K_a\\), et les chimistes classent les acides par \\(pK_a = -\\log_{10} K_a\\) : plus le \\(pK_a\\) est petit, plus l'acide est fort.</p>
<h4><span class="hn">02</span>L'équation de Henderson-Hasselbalch</h4>
<p>Pour un acide faible mélangé à sa base conjuguée, le pH est \\(\\text{pH} = pK_a + \\log_{10}\\dfrac{[A^-]}{[HA]}\\). Quand les deux sont égaux — le point de demi-neutralisation — le logarithme s'évanouit et \\(\\text{pH} = pK_a\\) exactement. C'est à la fois le milieu plat et bien tamponné d'une courbe de titrage et la façon standard de <em>mesurer</em> la force d'un acide faible.</p>
<h4><span class="hn">03</span>Tampons</h4>
<p>Un mélange d'un acide faible et de sa base conjuguée résiste aux changements de pH : tout \\(H^+\\) ou \\(OH^-\\) ajouté est épongé par la paire. Le tampon bicarbonate du sang, \\(H_2CO_3/HCO_3^-\\), est pourquoi le pH artériel bouge à peine malgré l'acide que ton métabolisme y déverse. Un tampon fonctionne le mieux près de \\(\\text{pH} = pK_a\\), où les deux partenaires sont en équilibre.</p>
<h4><span class="hn">04</span>Courbes de titrage</h4>
<p>Trace le pH contre le titrant ajouté et tu obtiens la courbe en S caractéristique : un doux tronçon tamponné, un bond quasi vertical au point d'équivalence, puis un plateau. Pour un acide fort avec une base forte le point d'équivalence atterrit à pH 7 ; pour un acide faible il se décale au-dessus de 7, car la base conjuguée du sel s'hydrolyse. La <em>raideur</em> de ce bond est exactement ce qui laisse un indicateur monochrome marquer le point final.</p>
<h4><span class="hn">05</span>Ce que « neutre » veut vraiment dire</h4>
<p>Neutre signifie \\([H^+] = [OH^-]\\), pas nécessairement pH 7. Comme \\(K_w\\) croît avec la température, l'eau s'auto-ionise davantage quand elle est chaude : l'eau neutre à 50 °C a un pH ≈ 6,6 — encore parfaitement neutre, car \\(OH^-\\) a monté pour égaler. Le pH 7 n'est le point neutre qu'à 25 °C.</p>`,
          facts: [
            { e: '🧪', t: `Au point de demi-équivalence d'un titrage, pH = pKₐ exactement — la façon la plus rapide de lire la force d'un acide faible.` },
            { e: '🩸', t: `Le tampon bicarbonate maintient le sang près de pH 7,4 ; les poumons et les reins l'ajustent finement en réglant le CO₂ et le HCO₃⁻.` },
            { e: '🌡️', t: `« Neutre » signifie [H⁺]=[OH⁻], pas pH 7. L'eau chaude est neutre en dessous de pH 7 parce qu'elle s'auto-ionise davantage en se réchauffant.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Constante d'acidité`, e: 'K_a = \\dfrac{[H^+][A^-]}{[HA]}, \\quad pK_a = -\\log_{10}K_a' },
            { n: `Henderson-Hasselbalch`, e: '\\text{pH} = pK_a + \\log_{10}\\dfrac{[A^-]}{[HA]}' },
            { sep: 1 },
            { n: `Demi-équivalence`, e: '[HA] = [A^-] \\;\\Rightarrow\\; \\text{pH} = pK_a' },
            { n: `Température`, e: 'K_w(T)\\ \\text{croît avec } T,\\ \\text{donc pH neutre} < 7\\ \\text{à chaud}' },
          ] }, sim: 'acids',
        },
      },
    },
    periodic: {
      title: 'Le tableau périodique',
      teaser: `Aligne chaque élément par un seul nombre et un motif caché de familles et de tendances surgit.`,
      chips: ['Éléments', 'Tendances', 'Atomes'],
      lvls: {
        junior: {
          title: `La liste d'ingrédients de l'univers, triée`,
          body: `<p>Tout autour de toi — ton corps, l'air, cet écran, les étoiles lointaines — est bâti à partir d'environ 90 ingrédients naturels appelés <strong>éléments</strong>. Le tableau périodique est simplement leur liste, mais arrangée si astucieusement que sa forme même te dit comment chacun se comporte. Chaque case est un élément : son symbole (O pour l'oxygène, Fe pour le fer) et son <strong>numéro atomique</strong>, le compte de protons qui en fait cet élément et rien d'autre.</p>
<p>Le génie, dû à Dmitri Mendeleïev en 1869, fut l'ordonnancement. Lis de gauche à droite et les éléments changent graduellement ; descends à la rangée suivante et le motif recommence — ce qui est exactement pourquoi on l'appelle « périodique ». Les éléments partageant une colonne (un <strong>groupe</strong>) sont des cousins chimiques qui se comportent pareil : les métaux mous et explosifs de la première colonne, les gaz colorés et fainéants de la dernière. Chaque famille a une personnalité que tu peux prédire rien qu'à sa place.</p>
<p>Cette prévisibilité est le super-pouvoir du tableau. Mendeleïev laissa même des vides pour des éléments non encore découverts et décrivit leurs propriétés à l'avance — et quand ils apparurent, il avait raison. Les métaux se pressent à gauche et au milieu, les non-métaux en haut à droite, et un escalier d'intermédiaires descend au centre. Apprends la carte et tu peux deviner comment une substance agira avant même de la toucher.</p>`,
          facts: [
            { e: '🧊', t: `Environ 90 éléments seulement existent à l'état naturel ; le reste est fabriqué en laboratoire et s'évanouit en fractions de seconde.` },
            { e: '💥', t: `Les métaux alcalins (colonne 1) sont si réactifs que le césium explose au contact de l'eau — on ne les trouve jamais purs dans la nature.` },
            { e: '🎈', t: `Les gaz nobles (dernière colonne) réagissent à peine avec quoi que ce soit, ce qui est pourquoi l'hélium est sûr dans les ballons et le néon brille tranquillement dans les enseignes.` },
          ],
          formula: null, sim: 'periodic',
        },
        student: {
          title: `Structure, groupes, périodes et tendances périodiques`,
          body: `<p>La disposition du tableau est une image de la structure atomique. Chaque rangée (une <strong>période</strong>) remplit une nouvelle couche électronique ; chaque colonne (un <strong>groupe</strong>) partage le même nombre d'électrons externes, ou de valence — et ce sont ces électrons externes qui font la chimie. C'est pourquoi le groupe 1 (un électron de valence, avide de le donner) et le groupe 17 (à un électron d'une couche pleine, désespéré d'en attraper un) sont les métaux et non-métaux les plus réactifs, tandis que le groupe 18 (couches pleines) ne réagit presque pas.</p>
<p>Parce que le comportement suit l'arrangement des électrons, les propriétés se décalent en douceur à travers le tableau — les <strong>tendances périodiques</strong>. Le rayon atomique rétrécit de gauche à droite (plus de protons tirent la même couche plus serrée) et grandit vers le bas d'un groupe (chaque période ajoute une couche). L'électronégativité, l'attraction d'un atome sur les électrons partagés, fait l'inverse : elle grimpe vers le haut à droite, culminant au fluor. L'énergie d'ionisation, le coût pour retirer un électron, suit de près l'électronégativité.</p>
<p>Le tableau se trie aussi en <strong>blocs</strong> selon l'orbitale qui se remplit : le bloc s (groupes 1-2), le bloc p (13-18), les métaux de transition du bloc d au milieu, et les lanthanides et actinides du bloc f tirés en dessous. Les métaux (gauche et centre) larguent des électrons et conduisent ; les non-métaux (haut à droite) les attrapent ou les partagent ; les métalloïdes tracent l'escalier entre les deux et agissent comme les deux — ce qui est précisément pourquoi le silicium et le germanium font des semi-conducteurs.</p>`,
          facts: [
            { e: '🔋', t: `Le numéro de groupe égale souvent le nombre d'électrons de valence, ce qui est pourquoi les éléments d'une colonne forment des composés semblables — p. ex. tous les métaux du groupe 1 font des sels X-chlorure.` },
            { e: '⚛️', t: `Le fluor (haut à droite) est l'élément le plus électronégatif ; le césium et le francium (bas à gauche) le sont le moins — les deux bouts de la tendance.` },
            { e: '💻', t: `Le silicium siège sur l'escalier des métalloïdes, se comportant ni comme un bon métal ni comme un bon isolant — la propriété qui rend possible toute l'industrie des semi-conducteurs.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Numéro atomique`, e: 'Z = \\#\\,\\text{protons}' },
            { sep: 1 },
            { n: `Rayon atomique`, e: 'r:\\ \\text{plus petit} \\rightarrow,\\ \\text{plus grand} \\downarrow' },
            { n: `Électronégativité`, e: '\\chi:\\ \\text{plus grand} \\rightarrow,\\ \\text{plus petit} \\downarrow' },
            { n: `Énergie d'ionisation`, e: '\\text{suit } \\chi:\\ \\text{plus grand} \\rightarrow,\\ \\text{plus petit} \\downarrow' },
          ] }, sim: 'periodic',
        },
        scholar: {
          title: `Origines quantiques : pourquoi le tableau a la forme qu'il a`,
          body: `<h4><span class="hn">01</span>Le tableau est la spectroscopie rendue visible</h4>
<p>Les périodes et les blocs sont une lecture directe de la mécanique quantique. Les électrons occupent des orbitales étiquetées par des nombres quantiques, se remplissant à peu près par ordre d'énergie (le principe d'Aufbau et la règle \\(n+\\ell\\) de Madelung), au plus deux par orbitale selon le principe d'exclusion de Pauli. La sous-couche s tient 2 électrons, p en tient 6, d en tient 10, f en tient 14 — ce qui est exactement pourquoi les blocs du tableau ont 2, 6, 10 et 14 colonnes de large.</p>
<h4><span class="hn">02</span>Charge nucléaire effective et écrantage</h4>
<p>Un électron externe ne ressent jamais la pleine charge nucléaire \\(Z\\) ; les électrons internes l'écrantent, laissant une charge <em>effective</em> \\(Z_{\\text{eff}} = Z - S\\). À travers une période \\(Z_{\\text{eff}}\\) grimpe — des protons sont ajoutés tandis que les électrons de même couche écrantent mal — donc l'atome se resserre et l'électronégativité monte. Vers le bas d'un groupe la couche fraîchement ajoutée l'emporte sur l'attraction supplémentaire, donc les atomes enflent. Presque chaque tendance est une ombre de \\(Z_{\\text{eff}}\\).</p>
<h4><span class="hn">03</span>L'énergie d'ionisation et son zigzag</h4>
<p>L'énergie pour arracher un électron suit \\(E \\sim 13.6\\,Z_{\\text{eff}}^2/n^2\\) eV, mais avec des creux révélateurs — le bore sous le béryllium, l'oxygène sous l'azote — où une sous-couche fraîchement commencée ou une première répulsion de paire d'électrons abaisse le coût. Ces plis sont le modèle orbital se confirmant lui-même dans les données.</p>
<h4><span class="hn">04</span>La relativité tout en bas</h4>
<p>Dans les atomes les plus lourds les électrons internes se déplacent à une sérieuse fraction de la vitesse de la lumière, et la contraction relativiste des orbitales s qui en résulte a des conséquences visibles : c'est pourquoi l'or est jaune plutôt qu'argenté, pourquoi le mercure est liquide, et pourquoi la batterie plomb-acide de ta voiture délivre la tension qu'elle délivre. Les tendances soignées se courbent précisément là où la relativité commence à mordre.</p>
<h4><span class="hn">05</span>Les bords inachevés</h4>
<p>Le tableau s'écrit encore : les éléments superlourds sont synthétisés un atome à la fois, désormais jusqu'à l'oganesson (118), et les physiciens poursuivent un « îlot de stabilité » prédit d'isotopes à plus longue vie au-delà. Que la périodicité elle-même survive dans la huitième période — où la relativité brouille l'ordre des orbitales — est une question authentiquement ouverte.</p>`,
          facts: [
            { e: '🥇', t: `L'or est jaune à cause de la relativité : ses électrons internes rapides contractent les orbitales, décalant vers le bleu la lumière qu'il absorbe.` },
            { e: '🌡️', t: `Le mercure est liquide à température ambiante pour la même raison relativiste — ses atomes se lient trop faiblement pour rester solides.` },
            { e: '🏝️', t: `Les physiciens chassent un « îlot de stabilité » : des éléments superlourds dont les comptes spéciaux de protons et de neutrons pourraient survivre bien plus longtemps que les isotopes à la milliseconde d'aujourd'hui.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Ordre de remplissage`, e: '\\text{Aufbau : plus bas } (n+\\ell) \\text{ d\'abord}' },
            { n: `Charge effective`, e: 'Z_{\\text{eff}} = Z - S' },
            { sep: 1 },
            { n: `Énergie d'ionisation`, e: 'E \\sim 13.6\\,\\dfrac{Z_{\\text{eff}}^2}{n^2}\\ \\text{eV}' },
            { n: `Largeurs de blocs`, e: 's,p,d,f = 2,\\,6,\\,10,\\,14', c: `capacités orbitales` },
          ] }, sim: 'periodic',
        },
      },
    },
    balancing: {
      title: 'Équilibrer les équations chimiques',
      teaser: `Les atomes ne sont jamais perdus, seulement réarrangés — donc les deux côtés de la flèche doivent concorder. Voici le casse-tête.`,
      chips: ['Réactions', 'Conservation', 'Moles'],
      lvls: {
        junior: {
          title: `Le casse-tête du décompte d'atomes de la chimie`,
          body: `<p>Dans une réaction chimique, les atomes ne sont jamais créés ni détruits — ils sont juste réarrangés en de nouvelles combinaisons. Brûle du méthane et ses atomes de carbone et d'hydrogène ne s'évanouissent pas ; ils se recombinent avec l'oxygène pour faire du dioxyde de carbone et de l'eau. Donc quels que soient les atomes de départ à gauche, tu dois finir avec exactement les mêmes atomes à droite. Une équation chimique n'est « correcte » — <strong>équilibrée</strong> — que lorsque les deux côtés portent le même compte de chaque sorte d'atome.</p>
<p>Le hic est que tu ne peux pas changer les molécules elles-mêmes (l'eau est toujours \\(H_2O\\), jamais \\(H_3O\\)), donc la seule chose que tu es autorisé à ajuster est <em>combien</em> il y a de chaque molécule — les grands nombres écrits devant, appelés <strong>coefficients</strong>. Équilibrer une équation est le casse-tête de trouver les coefficients qui font concorder chaque décompte d'atomes des deux côtés. C'est vraiment juste du comptage soigneux.</p>
<p>Cela compte bien au-delà de la salle de classe. Réussis l'équilibre et tu sais exactement de combien de chaque ingrédient une réaction a besoin et combien elle produit : combien d'oxygène pour brûler un carburant complètement, combien de produit une réaction rendra, combien de \\(CO_2\\) un procédé émet. L'équilibrage est la version chimique d'un comptable vérifiant les livres — rien n'apparaît de nulle part, rien ne disparaît.</p>`,
          facts: [
            { e: '⚖️', t: `Les atomes sont conservés : une équation équilibrée a le même nombre de chaque élément des deux côtés. C'est la loi de conservation de la masse.` },
            { e: '🚫', t: `Tu ne peux changer que les grands nombres devant (coefficients), jamais les petits indices à l'intérieur d'une formule — cela en ferait une substance différente.` },
            { e: '🔥', t: `L'équilibrage donne aux ingénieurs le rapport air-carburant exact pour une combustion complète — trop peu d'oxygène et tu obtiens du monoxyde de carbone toxique.` },
          ],
          formula: null, sim: 'balancing',
        },
        student: {
          title: `Coefficients, conservation de la masse et la mole`,
          body: `<p>Une équation équilibrée obéit à la <strong>loi de conservation de la masse</strong> (Lavoisier, 1789) : la matière n'est ni créée ni détruite, donc chaque atome du côté des réactifs doit réapparaître parmi les produits. Tu équilibres en plaçant des <strong>coefficients</strong> devant chaque formule, jamais en altérant les indices — les indices définissent la substance elle-même. La combustion du méthane s'équilibre en \\(CH_4 + 2O_2 \\to CO_2 + 2H_2O\\) : un carbone, quatre hydrogènes et quatre oxygènes de chaque côté.</p>
<p>Les coefficients ne sont pas que des décomptes d'atomes — ce sont des rapports de <em>quantités</em>, et c'est là qu'intervient la <strong>mole</strong>. Cette même équation se lit « 1 molécule de méthane réagit avec 2 d'oxygène », mais tout aussi bien « 1 mole réagit avec 2 moles ». Une mole est juste un nombre fixe et énorme de particules (le nombre d'Avogadro, \\(6.022\\times10^{23}\\)) — la « douzaine » du chimiste — qui nous laisse passer de molécules uniques à des grammes que tu peux peser.</p>
<p>L'équilibre en main, tu peux faire de la <strong>stœchiométrie</strong> : prédire les quantités. Les coefficients donnent les rapports de moles, et des moles tu obtiens les masses (via la masse molaire) ou les volumes de gaz. Cela révèle le <em>réactif limitant</em> — celui des ingrédients qui s'épuise le premier et plafonne le rendement — et le rendement théorique en produit. C'est l'arithmétique derrière chaque recette d'un laboratoire de chimie ou d'une usine.</p>`,
          facts: [
            { e: '⚗️', t: `Les coefficients sont aussi des rapports de moles : CH₄ + 2O₂ → CO₂ + 2H₂O signifie qu'une mole de méthane a besoin de deux moles d'oxygène.` },
            { e: '🧮', t: `Le réactif limitant est celui qui s'épuise le premier — il fixe le maximum de produit que tu peux faire, peu importe la quantité des autres dont tu disposes.` },
            { e: '📏', t: `Une mole (6,022×10²³) relie le monde invisible des atomes aux grammes que tu peux peser — le pont qui rend la chimie quantitative.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Conservation de la masse`, e: '\\text{atomes}_{\\text{gauche}} = \\text{atomes}_{\\text{droite}}' },
            { n: `Combustion du méthane`, e: 'CH_4 + 2O_2 \\to CO_2 + 2H_2O' },
            { sep: 1 },
            { n: `La mole`, e: '1\\ \\text{mol} = 6.022\\times10^{23}\\ \\text{particules}' },
            { n: `Rapport de moles`, e: '\\text{coefficients} = \\text{rapport de moles}' },
          ] }, sim: 'balancing',
        },
        scholar: {
          title: `Rédox, équilibrage algébrique et ce que l'équilibre ne peut pas dire`,
          body: `<h4><span class="hn">01</span>Au-delà de l'inspection : l'équilibrage algébrique</h4>
<p>Pour les équations récalcitrantes, donne à chaque coefficient une variable et résous le système linéaire bâti à partir de la conservation de chaque élément. Il y a toujours une solution à un facteur global près — tu prends le plus petit ensemble d'entiers. Les réactions simples ont un espace de solution unidimensionnel ; les vraiment emmêlées exigent cette méthode systématique plutôt que l'essai-erreur.</p>
<h4><span class="hn">02</span>Rédox et demi-réactions</h4>
<p>Les réactions qui transfèrent des électrons (oxydoréduction) s'équilibrent en les scindant en deux demi-réactions, en équilibrant les atomes puis la <em>charge</em> avec des électrons, et en les combinant de sorte que les électrons s'annulent. C'est la machinerie derrière les batteries, la corrosion et la respiration cellulaire — et ici la charge, pas seulement les atomes, doit s'équilibrer.</p>
<h4><span class="hn">03</span>Ce que l'équilibre ne dit pas</h4>
<p>Une équation équilibrée ne dit rien sur le fait qu'une réaction se produise réellement, à quelle vitesse, ni dans quel sens elle penche. C'est le domaine de la thermodynamique (le changement d'énergie libre \\(\\Delta G\\)) et de la cinétique (l'énergie d'activation). L'équilibrage est une comptabilité nécessaire — pas une prédiction de spontanéité.</p>
<h4><span class="hn">04</span>La stœchiométrie dans le monde réel</h4>
<p>Les vraies réactions atteignent rarement 100 % — le <em>rendement en pourcentage</em> compare ce que tu as réellement obtenu au maximum théorique. Les équations équilibrées sous-tendent l'ingénierie de la combustion, la synthèse pharmaceutique et la comptabilité carbone de la science climatique : chaque tonne de \\(CO_2\\) imputée à la combustion d'un carburant est une conséquence stœchiométrique d'une équation équilibrée.</p>`,
          facts: [
            { e: '🔋', t: `Les réactions rédox s'équilibrent avec des demi-réactions qui équilibrent aussi la charge à l'aide d'électrons — exactement le flux d'électrons qu'une batterie transforme en courant.` },
            { e: '⚖️', t: `Une équation équilibrée ne dit rien sur le fait qu'une réaction se produira réellement — c'est la thermodynamique (ΔG), une question entièrement distincte.` },
            { e: '🌍', t: `Chaque tonne de CO₂ attribuée à la combustion de carburant est un calcul stœchiométrique à partir d'une équation de combustion équilibrée.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Conservation (masse et charge)`, e: '\\text{atomes, charge : gauche} = \\text{droite}' },
            { n: `Combustion générale`, e: 'C_xH_y + \\left(x+\\tfrac{y}{4}\\right)O_2 \\to xCO_2 + \\tfrac{y}{2}H_2O' },
            { sep: 1 },
            { n: `Rendement en pourcentage`, e: '\\text{rendement} = \\dfrac{\\text{réel}}{\\text{théorique}}\\times100\\%' },
          ] }, sim: 'balancing',
        },
      },
    },
    astro: {
      title: `Les étoiles et l'univers`,
      teaser: `Une étoile est une fournaise nucléaire de 700 000 km de large. Comment naissent-elles, et que se passe-t-il quand elles meurent ?`,
      chips: ['Étoiles', 'Big Bang', 'Espace-temps'],
      lvls: {
        junior: {
          title: `Soleils, supernovas et l'histoire de tout !`,
          body: `<p>Lève les yeux vers le ciel nocturne : chaque étoile que tu peux voir est un soleil — une boule colossale de gaz incandescent, tenue ensemble par sa propre gravité et flamboyant de fusion nucléaire en son cœur. Notre Soleil est si vaste qu'un million de Terres tiendraient à l'intérieur, et malgré cela, c'est une étoile parfaitement ordinaire.</p>
<p>Les étoiles naissent à l'intérieur d'énormes nuages de gaz et de poussière appelés <strong>nébuleuses</strong>. La gravité comprime un tel nuage de plus en plus serré jusqu'à ce que son cœur devienne assez chaud pour que les atomes fusionnent — et l'étoile s'allume. C'est la même réaction qu'une bombe à hydrogène, sauf qu'elle tourne régulièrement pendant des milliards d'années au lieu d'un instant aveuglant.</p>
<p>Chaque étoile finit par épuiser son carburant. Une modeste comme notre Soleil enflera en <strong>géante rouge</strong>, puis soufflera doucement ses couches externes en une coquille incandescente, laissant derrière elle une minuscule et dense naine blanche. Les poids lourds s'éteignent de façon spectaculaire, en une <strong>supernova</strong> assez brillante pour éclipser une galaxie entière pendant des semaines. Et cette explosion est généreuse : elle projette les atomes forgés à l'intérieur de l'étoile — le fer de ton sang, le calcium de tes os — à travers l'espace pour bâtir de nouveaux mondes. Tu es, tout à fait littéralement, fait de poussière d'étoiles.</p>`,
          facts: [
            { e: '☀️', t: `Notre Soleil fusionne 620 millions de tonnes d'hydrogène chaque seconde — et a assez de carburant pour encore 5 milliards d'années.` },
            { e: '💥', t: `Une supernova libère plus d'énergie en quelques secondes que le Soleil n'en émettra durant toute sa vie de 10 milliards d'années.` },
            { e: '⭐', t: `L'étoile la plus proche (Proxima du Centaure) est à 4,24 années-lumière — à la vitesse de la lumière, tu y arriverais en 4,24 ans !` },
          ],
          formula: null, sim: 'astro',
        },
        student: {
          title: `Structure stellaire, le diagramme H-R et la nucléosynthèse`,
          body: `<p>Une étoile passe toute sa vie dans un bras de fer appelé <strong>équilibre hydrostatique</strong> : la poussée vers l'extérieur du gaz chaud et du rayonnement équilibrant exactement l'écrasement vers l'intérieur de sa propre gravité. Fais pencher cet équilibre et l'étoile enfle ou rétrécit jusqu'à tenir de nouveau. La masse est ici le destin — la luminosité grimpe abruptement comme \\(L \\propto M^4\\), donc une étoile de deux fois la masse du Soleil brille environ 16 fois plus fort et se consume huit fois plus vite. Notre Soleil obtient ~10 milliards d'années sur la séquence principale ; une géante de 10 masses solaires, à peine 30 millions.</p>
<p>Trace les étoiles par luminosité contre température de surface et elles refusent de se disperser au hasard — elles tombent sur le <strong>diagramme de Hertzsprung–Russell</strong>, la plupart s'alignant le long d'une « séquence principale » diagonale, des froides naines rouges aux flamboyantes géantes bleues. La couleur d'une étoile trahit sa température par la loi de Wien, \\(\\lambda_{\\max} = b/T\\) : plus elle brûle chaud, plus bleu elle rayonne. Géantes rouges, naines blanches et supergéantes siègent dans leurs propres quartiers distincts hors de la bande principale, chacune un chapitre différent de la vie stellaire.</p>
<p>Les étoiles sont aussi les forges de l'univers. Le Big Bang ne laissa derrière lui presque rien d'autre que de l'hydrogène et de l'hélium ; chaque atome plus lourd fut cuit à l'intérieur d'une étoile. Sur la séquence principale elles fusionnent l'hydrogène en hélium ; dans les cœurs vieillissants le processus triple-alpha fusionne \\(3\\,{}^4\\text{He} \\to {}^{12}\\text{C}\\), et les étoiles les plus massives grimpent le tableau périodique jusqu'au fer. Là l'échelle s'arrête — le noyau du fer est le plus fortement lié, donc le fusionner <em>coûte</em> de l'énergie, le cœur s'effondre sur lui-même, et l'étoile détonne en <strong>supernova</strong>. Tout ce qui est au-delà du fer — ton or, ton platine — est martelé ensemble dans ces déflagrations et dans les collisions d'étoiles à neutrons.</p>`,
          facts: [
            { e: '🪙', t: `L'or et le platine sur Terre furent faits dans des collisions d'étoiles à neutrons — confirmé par l'événement d'onde gravitationnelle GW170817 (2017).` },
            { e: '🔵', t: `L'étoile la plus massive connue, R136a1, fait ~300 masses solaires — si lumineuse qu'elle pousse contre la limite d'Eddington.` },
            { e: '🌀', t: `Les étoiles à neutrons font ~20 km de large mais 1,4 masse solaire — une cuillère à café de matière d'étoile à neutrons pèserait un milliard de tonnes.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Équilibre hydrostatique`, e: '\\dfrac{dP}{dr} = -\\dfrac{G M(r)\\,\\rho}{r^2}' },
            { n: `Masse–luminosité`, e: '\\dfrac{L}{L_\\odot} \\approx \\left(\\dfrac{M}{M_\\odot}\\right)^{4}' },
            { sep: 1 },
            { n: `Loi de Wien`, e: '\\lambda_{\\max} = \\dfrac{b}{T},\\quad b = 2.898\\times10^{-3}\\ \\text{m·K}' },
            { n: `Stefan–Boltzmann`, e: 'L = 4\\pi R^2 \\sigma T^4' },
            { sep: 1 },
            { n: `Triple-alpha`, e: '3\\,{}^4\\text{He} \\to {}^{12}\\text{C} + \\gamma' },
            { n: `Durée de vie séq. principale`, e: '\\tau \\approx M/L \\propto M^{-3}' },
          ] }, sim: 'astro',
        },
        scholar: {
          title: `Relativité générale, trous noirs et la structure à grande échelle de l'univers`,
          body: `<h4><span class="hn">01</span>Le point de non-retour</h4>
<p>Quand un cœur stellaire plus lourd qu'environ 3 masses solaires s'effondre, rien de connu ne peut l'arrêter. L'espace-temps s'enroule si serré qu'une surface de non-retour se forme — l'<strong>horizon des événements</strong> au rayon de Schwarzschild \\(r_S = 2GM/c^2\\). Franchis-le et la géométrie elle-même incline tout futur possible vers l'intérieur : s'échapper signifierait voyager plus vite que la lumière, ce qui n'est pas tant difficile qu'interdit par la causalité. Au centre, la relativité générale prédit sa propre rupture, une singularité de courbure infinie.</p>
<h4><span class="hn">02</span>Des trous noirs qui brillent</h4>
<p>Ils ne sont pourtant pas tout à fait noirs. Hawking montra en 1974 que les champs quantiques près de l'horizon forcent un trou noir à rayonner faiblement, comme un corps chaud, à la température \\(T_H = \\dfrac{\\hbar c^3}{8\\pi G M k_B}\\). Les trous plus petits sont <em>plus chauds</em>, donc un trou noir s'évapore lentement et — sur des âges inimaginables — disparaît. Cela pose l'énigme la plus profonde du sujet : s'il s'évapore en un rayonnement thermique sans traits, qu'est-il advenu de l'information sur tout ce qui est tombé dedans ? Le <em>paradoxe de l'information</em> reste non résolu.</p>
<h4><span class="hn">03</span>L'univers en expansion</h4>
<p>Prends du recul jusqu'au cosmos entier et la même théorie donne le <strong>modèle ΛCDM</strong> : un espace-temps plat et en expansion gouverné par l'équation de Friedmann \\(H^2 = \\dfrac{8\\pi G}{3}\\rho - \\dfrac{k}{a^2} + \\dfrac{\\Lambda}{3}\\). Chaque ingrédient se dilue différemment à mesure que l'espace s'étire — le rayonnement le plus vite, la matière plus lentement, l'énergie sombre pas du tout — donc l'histoire de l'univers est un relais entre ères, et son accélération présente est le moment où l'énergie sombre a pris le volant.</p>
<h4><span class="hn">04</span>Un univers surtout fait d'inconnu</h4>
<p>La comptabilité est humiliante. Les atomes ordinaires ne constituent que ~5 % du budget énergétique cosmique ; ~27 % est de la <em>matière sombre</em>, dont nous voyons clairement la gravité mais dont personne n'a jamais attrapé la particule, et ~68 % est de l'<em>énergie sombre</em>, un locataire plus étrange encore poussant l'expansion à s'écarter. Pleinement 95 % de l'univers est de la matière que nous ne pouvons identifier — une coda dégrisante à quatre siècles d'astronomie.</p>
<h4><span class="hn">05</span>Une fissure dans le modèle : la tension de Hubble</h4>
<p>Le ΛCDM colle à une énorme gamme de données, et pourtant un nombre refuse de se réconcilier. Le taux d'expansion \\(H_0\\) déduit du CMB de l'univers primitif sort près de 67 km/s/Mpc ; mesuré directement à partir d'étoiles et de supernovas proches, il est d'environ 73. L'écart est désormais trop grand et trop tenace pour l'imputer à une erreur — il pourrait être le premier indice solide d'une physique au-delà du modèle cosmologique standard.</p>
<h4><span class="hn">06</span>La lumière la plus ancienne qui soit</h4>
<p>Notre fenêtre la plus nette sur tout cela est le <strong>fond diffus cosmologique</strong>, la lumière libérée 380 000 ans après le Big Bang quand l'univers en refroidissement devint transparent pour la première fois. Sa température est uniforme à une part sur 100 000, et ces minuscules ondulations \\(\\delta T/T \\sim 10^{-5}\\) sont les graines de chaque galaxie, figées en place. Lire le motif des taches chaudes et froides — les pics acoustiques mesurés par Planck — épingle l'âge, la géométrie et le contenu de l'univers entier d'un coup.</p>`,
          facts: [
            { e: '🌑', t: `La première image d'un trou noir (M87*, 2019) correspondit précisément aux prédictions de la RG — confirmant l'anneau de photons et la taille de l'ombre.` },
            { e: '🔭', t: `Le JWST a observé des galaxies à z > 13, correspondant à de la lumière émise à peine 320 millions d'années après le Big Bang.` },
            { e: '🌌', t: `La matière sombre (27 % de l'énergie de l'univers) n'a jamais été directement détectée en tant que particule, malgré des preuves gravitationnelles écrasantes.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Rayon de Schwarzschild`, e: 'r_S = \\dfrac{2GM}{c^2}', c: `horizon des événements` },
            { n: `Température de Hawking`, e: 'T_H = \\dfrac{\\hbar c^3}{8\\pi G M k_B}' },
            { sep: 1 },
            { n: `Équation de Friedmann`, e: 'H^2 = \\dfrac{8\\pi G}{3}\\rho - \\dfrac{k}{a^2} + \\dfrac{\\Lambda}{3}' },
            { n: `Loi de Hubble`, e: 'v = H_0\\,d', c: 'H_0 ≈ 70 km/s/Mpc' },
            { sep: 1 },
            { n: `Température du CMB`, e: 'T_0 = 2.725\\ \\text{K}' },
            { n: `Dernière diffusion`, e: 'z_* \\approx 1100,\\;\\; t_* \\approx 380{,}000\\ \\text{ans}' },
          ] }, sim: 'astro',
        },
      },
    },
    cosmology: {
      title: 'Cosmologie et le Big Bang',
      teaser: `Il y a 13,8 milliards d'années, toute la matière, l'énergie, l'espace et le temps de l'univers ont jailli d'un point plus petit qu'un atome. Comment le savons-nous — et qu'y avait-il avant ?`,
      chips: ['Big Bang', 'Énergie sombre', 'CMB'],
      lvls: {
        junior: {
          title: `L'univers a eu un début — et nous pouvons encore voir sa lueur !`,
          body: `<p>Tout ce que tu as jamais vu — chaque étoile, galaxie, planète et atome — était autrefois tassé dans un espace inimaginablement plus petit que le point final qui termine cette phrase. Il y a environ <strong>13,8 milliards d'années</strong> ce point impossiblement chaud et dense se mit à s'étendre en un événement que nous appelons le <strong>Big Bang</strong>. Et voici la subtilité : ce n'était pas de la matière filant dans l'espace vide — <em>l'espace lui-même</em> s'étendait, et il n'a cessé depuis.</p>
<p>Pendant les premières minutes l'univers était assez chaud pour fusionner protons et neutrons en hydrogène et hélium, mais bien trop chaud pour que des atomes entiers tiennent ensemble — c'était un brouillard incandescent de plasma, aussi opaque que l'intérieur d'une étoile. Puis, 380 000 ans plus tard, il refroidit juste assez pour que les électrons se posent sur les noyaux, et le brouillard se leva. La lumière se déversa librement à travers le cosmos pour la toute première fois — et, chose remarquable, <strong>nous pouvons encore attraper cette lumière ancienne aujourd'hui</strong>. Elle baigne le ciel entier comme un faible sifflement de micro-ondes, le <strong>fond diffus cosmologique</strong>.</p>
<p>Le CMB n'est rien de moins qu'une photo de bébé de l'univers à 380 000 ans. Il est presque parfaitement lisse dans toutes les directions — mais pas tout à fait. De faibles ondulations de température, juste une part sur 100 000, sont les graines de tout : la gravité passa des milliards d'années à amplifier ces minuscules grumeaux en étoiles, galaxies et la vaste toile cosmique où nous vivons. Dans la simulation ci-dessous, regarde l'univers s'étendre du Big Bang à aujourd'hui.</p>`,
          facts: [
            { e: '📡', t: `Le CMB fut découvert par accident en 1964 par Penzias et Wilson, qui croyaient que le bruit mystérieux dans leur antenne radio venait de fientes de pigeon. Cela leur valut le prix Nobel en 1978.` },
            { e: '🌌', t: `L'univers observable fait 93 milliards d'années-lumière de large — alors même qu'il n'a que 13,8 milliards d'années. L'expansion de l'espace lui-même emporte les régions lointaines au-delà de ce que la lumière pourrait atteindre.` },
            { e: '🔭', t: `Le télescope spatial James Webb a observé des galaxies se formant à peine 320 millions d'années après le Big Bang — plus tôt que la plupart des modèles ne le prédisaient, défiant notre compréhension de la formation précoce des galaxies.` },
          ],
          formula: null, sim: 'cosmology',
        },
        student: {
          title: `Les équations de Friedmann, l'inflation et l'énergie sombre`,
          body: `<p>L'expansion de l'univers est inscrite dans les <strong>équations de Friedmann</strong>, qui tombent de la relativité générale dès que tu supposes que le cosmos a la même apparence partout et dans toutes les directions. La première d'entre elles, \\(H^2 = \\dfrac{8\\pi G}{3}\\rho - \\dfrac{kc^2}{a^2} + \\dfrac{\\Lambda c^2}{3}\\), lie le taux d'expansion \\(H\\) à ce que l'univers contient : matière et rayonnement \\(\\rho\\), sa courbure \\(k\\), et la constante cosmologique \\(\\Lambda\\). Lire le ciel renvoie un inventaire saisissant — l'espace est plat (\\(k \\approx 0\\)) et fait de seulement ~5 % de matière ordinaire, ~27 % de matière sombre et ~68 % d'énergie sombre.</p>
<p>L'<strong>inflation cosmique</strong> (Guth, 1981) propose que dans le premier éclat de seconde l'univers gonfla exponentiellement, \\(a \\propto e^{Ht}\\), enflant d'un facteur \\(10^{26}\\) en environ \\(10^{-32}\\) s. Cette seule poussée de croissance folle règle trois énigmes lancinantes d'un coup : pourquoi le CMB est uniforme à travers des régions qui n'auraient jamais pu échanger un signal (le problème de l'horizon), pourquoi l'espace est si exquisément plat (le problème de la platitude), et pourquoi nous ne voyons aucun relique exotique. Mieux encore, les tremblements quantiques étirés durant l'inflation devinrent les ondulations de densité du CMB — l'origine de toute structure cosmique, plantée par la mécanique quantique.</p>
<p>La découverte la plus troublante est que l'expansion <em>accélère</em>, mise au jour en 1998 à partir de la surprenante faiblesse de supernovas lointaines (Nobel 2011). Quelque chose à pression négative — l'<strong>énergie sombre</strong>, équation d'état \\(w = p/\\rho c^2 \\approx -1\\) — écarte l'univers de plus en plus vite. Et une véritable fissure est apparue : le taux d'expansion \\(H_0\\) mesuré à partir du CMB primitif (67 km/s/Mpc) refuse obstinément d'égaler la valeur lue sur les supernovas proches (73), une <strong>tension de Hubble</strong> à cinq sigmas qui pourrait être le premier signe d'une physique au-delà du modèle standard de la cosmologie.</p>`,
          facts: [
            { e: '🔭', t: `Les supernovas de type Ia sont des « chandelles standards » parce qu'elles explosent toutes avec une luminosité de pic presque identique — leur éclat apparent révèle leur distance, prouvant que l'univers accélère.` },
            { e: '🌡️', t: `La température du CMB aujourd'hui est de 2,7255 K — le spectre de corps noir le plus précisément mesuré de la nature, avec des écarts de moins d'une part sur 100 000.` },
            { e: '⚛️', t: `La nucléosynthèse du Big Bang dans les 3 premières minutes produisit 75 % d'hydrogène et 25 % d'hélium en masse — correspondant exactement aux abondances primordiales observées, une éclatante confirmation du modèle.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Équation de Friedmann`, e: 'H^2 = \\dfrac{8\\pi G}{3}\\rho - \\dfrac{kc^2}{a^2} + \\dfrac{\\Lambda c^2}{3}' },
            { n: `Paramètre de Hubble`, e: 'H(z) = H_0\\sqrt{\\Omega_m(1+z)^3 + \\Omega_r(1+z)^4 + \\Omega_\\Lambda}' },
            { sep: 1 },
            { n: `Croissance inflationnaire`, e: 'a(t) \\propto e^{Ht}', c: `accélérée` },
            { n: `Éq. d'état énergie sombre`, e: 'w = \\dfrac{p}{\\rho c^2} \\approx -1' },
            { sep: 1 },
            { n: `Température du CMB`, e: 'T_{\\text{CMB}} = 2.7255\\ \\text{K}' },
            { n: `e-folds d'inflation`, e: 'N = \\int H\\,dt \\gtrsim 60' },
          ] }, sim: 'cosmology',
        },
        scholar: {
          title: `Anisotropies du CMB, structure à grande échelle et gravité quantique`,
          body: `<h4><span class="hn">01</span>Lire la lumière la plus ancienne</h4>
<p>Les minuscules ondulations de température du CMB \\(\\delta T/T \\sim 10^{-5}\\) sont le jeu de données le plus riche de la cosmologie, et la façon de les exploiter est de développer le ciel entier en harmoniques sphériques, \\(\\delta T/T(\\hat{n}) = \\sum_{\\ell m} a_{\\ell m} Y_{\\ell m}(\\hat{n})\\). En moyennant on obtient le spectre de puissance angulaire \\(C_\\ell = \\langle |a_{\\ell m}|^2\\rangle\\) — un tracé de combien de structure existe à chaque échelle angulaire, et en effet une empreinte de tout l'univers primitif comprimée en une seule courbe.</p>
<h4><span class="hn">02</span>Les pics acoustiques</h4>
<p>Avant que le brouillard ne se dissipe, photons et baryons étaient un unique fluide résonnant d'ondes sonores, et ces oscillations sont figées dans le spectre de puissance en une série de <strong>pics acoustiques</strong>. Leurs positions et hauteurs sont de l'or pur : l'échelle angulaire du premier pic, près de \\(\\ell \\approx 220\\), épingle la géométrie de l'espace (confirmant la platitude), les hauteurs des pics pèsent la matière ordinaire, et leur espacement aide à fixer le taux d'expansion. Une poignée de bosses sur un seul graphe fixe presque chaque paramètre cosmologique d'un coup.</p>
<h4><span class="hn">03</span>Polarisation et l'écho de l'inflation</h4>
<p>Le CMB est aussi faiblement polarisé, et la polarisation se scinde en deux motifs. Les <em>modes E</em> viennent des ondes de densité ordinaires et sont fermement observés. Le prix, ce sont les <em>modes B</em> : un motif en boucle que seules des ondes gravitationnelles primordiales de l'inflation auraient pu faire, dont la force — le rapport tenseur-scalaire \\(r\\) — lirait l'échelle d'énergie de l'inflation elle-même. Les détecter serait un aperçu direct de la physique à \\(10^{16}\\) GeV, et la chasse est l'une des grandes courses de la cosmologie.</p>
<h4><span class="hn">04</span>La toile cosmique et sa règle étalon</h4>
<p>Les mêmes ondulations primordiales grandirent, sous la gravité, en la <strong>toile cosmique</strong> de galaxies, et sa statistique porte son propre fossile des anciennes ondes sonores : les <strong>oscillations acoustiques des baryons</strong>, une séparation privilégiée des galaxies d'environ 150 Mpc imprimée sur tout le ciel. Comme cette longueur est connue à partir de premiers principes, elle agit comme une <em>règle</em> cosmique — mesure sa taille apparente à différentes distances et tu cartographies l'expansion à travers des milliards d'années. Des relevés comme DESI font désormais exactement cela, traquant si l'énergie sombre est restée vraiment constante.</p>
<h4><span class="hn">05</span>La frontière de la gravité quantique</h4>
<p>Rembobine assez loin et la théorie elle-même échoue : à la singularité du Big Bang, la relativité générale prédit une densité infinie et passe le problème à une <strong>théorie quantique de la gravité</strong> que nous n'avons pas encore. Des idées candidates remplacent le bang par quelque chose de plus doux — la cosmologie quantique à boucles l'échange contre un <em>rebond</em> sur une densité maximale, tandis que la théorie des cordes imagine notre univers comme une bulle dans un multivers en inflation éternelle, ce qui pourrait faire de l'inquiétant réglage fin des constantes physiques un effet de sélection plutôt qu'un mystère.</p>
<h4><span class="hn">06</span>Un avertissement du marécage</h4>
<p>Tout univers apparemment raisonnable ne peut pas être bâti à partir d'une théorie de gravité quantique cohérente — ceux qui ne le peuvent pas sont dits se trouver dans le <em>marécage</em> (swampland). De façon provocatrice, certaines conjectures du marécage suggèrent qu'un univers stable et à accélération positive comme le nôtre pourrait être dur ou impossible à réaliser en théorie des cordes, mettant la théorie en tension directe avec l'énergie sombre que nous observons réellement. Que cette tension brise la théorie des cordes, notre compréhension de l'énergie sombre, ou les conjectures elles-mêmes est grand ouvert — et c'est là que la physique fondamentale et la cosmologie se rencontrent désormais de front.</p>`,
          facts: [
            { e: '🔬', t: `La mesure BAO 2024 de DESI à travers 6 millions de galaxies montre des indices que l'énergie sombre pourrait ne pas être constante — w pourrait évoluer avec le temps, renversant potentiellement l'interprétation de la constante cosmologique.` },
            { e: '🌌', t: `L'univers observable contient ~2 000 milliards de galaxies (revu à la hausse depuis 200 milliards en 2016), chacune contenant des centaines de milliards d'étoiles — et pourtant la matière ordinaire n'est que 5 % du budget énergétique total.` },
            { e: '⚡', t: `La longueur de Planck (10⁻³⁵ m) et le temps de Planck (10⁻⁴³ s) représentent l'échelle à laquelle les effets gravitationnels quantiques deviennent dominants — 20 ordres de grandeur au-delà de la portée de tout accélérateur de particules concevable.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Décomposition du CMB`, e: '\\dfrac{\\delta T}{T}(\\hat{n}) = \\sum_{\\ell m} a_{\\ell m} Y_{\\ell m}(\\hat{n})' },
            { n: `Spectre de puissance`, e: 'C_\\ell = \\langle |a_{\\ell m}|^2\\rangle', c: 'pics à ℓ~220, 540…' },
            { sep: 1 },
            { n: `Spectre primordial`, e: 'P(k) \\propto k^{n_s},\\quad n_s \\approx 0.965' },
            { n: `Échelle BAO`, e: 'r_s \\approx 147\\ \\text{Mpc}', c: `règle étalon` },
            { sep: 1 },
            { n: `Densité de Planck`, e: '\\rho_{\\text{Pl}} = \\dfrac{c^5}{\\hbar G^2} \\approx 5.2\\times10^{96}\\ \\text{kg/m}^3' },
            { n: `Tenseur-scalaire`, e: 'r = \\dfrac{P_t}{P_s}', c: `mesure l'échelle d'inflation` },
          ] }, sim: 'cosmology',
        },
      },
    },
    neuro: {
      title: 'Le cerveau et les neurones',
      teaser: `86 milliards de neurones, 100 000 milliards de connexions — comment un bruit électrochimique devient-il pensée, mémoire et conscience ?`,
      chips: ['Neurones', 'Synapses', 'Cognition'],
      lvls: {
        junior: {
          title: `Ton cerveau : l'ordinateur le plus étonnant de l'univers !`,
          body: `<p>À l'intérieur de ton crâne siège l'objet le plus complexe de l'univers connu : ton <strong>cerveau</strong>. Il pèse environ 1,4 kg, et pourtant il entasse quelque <em>86 milliards</em> de cellules nerveuses appelées <strong>neurones</strong>. Chacune peut se câbler à des milliers d'autres, totalisant environ 100 000 milliards de connexions — plus qu'il n'y a d'étoiles dans la Voie lactée.</p>
<p>Les neurones se parlent en tirant de minuscules impulsions électriques appelées <strong>potentiels d'action</strong>. Touche quelque chose de chaud et les neurones de ta main flashent la nouvelle à ton cerveau en millisecondes ; pense à un mot et des millions d'entre eux s'activent ensemble en un motif précis. Et voici la belle part : quand tu apprends quelque chose de nouveau — faire du vélo, disons — les connexions entre certains neurones se renforcent physiquement. Ce renforcement, tout à fait littéralement, <em>est</em> le souvenir.</p>
<p>Ton cerveau ne s'éteint jamais vraiment. Même pendant ton sommeil il rejoue la journée, cimente les souvenirs qui valent la peine d'être gardés, évacue les déchets et te prépare pour demain — les rêves font peut-être bien partie de ce ménage nocturne. Dans la simulation ci-dessous, regarde les neurones s'activer et passer des signaux le long d'un petit réseau, exactement comme la vraie chose.</p>`,
          facts: [
            { e: '⚡', t: `Un seul neurone peut s'activer jusqu'à 1 000 fois par seconde — envoyant des signaux électriques jusqu'à 120 mètres par seconde le long des fibres les plus rapides.` },
            { e: '💤', t: `Pendant le sommeil profond, le cerveau évacue les déchets toxiques par le système glymphatique — une sorte de lavage cérébral nocturne.` },
            { e: '🎸', t: `Jouer d'un instrument de musique sollicite plus de cerveau simultanément que presque toute autre activité — comme un entraînement complet pour les neurones.` },
          ],
          formula: null, sim: 'neuro',
        },
        student: {
          title: `Potentiels d'action, transmission synaptique et codage neuronal`,
          body: `<p>Un neurone au repos tient son intérieur à environ \\(-70\\) mV, une tension que la pompe Na⁺/K⁺ travaille constamment à maintenir. Pousse-le au-delà d'un seuil près de \\(-55\\) mV et un <strong>potentiel d'action</strong> se déclenche : les canaux sodium voltage-dépendants s'ouvrent d'un coup et l'intérieur bondit à \\(+40\\) mV, puis se referment sec quand les canaux potassium s'ouvrent pour réinitialiser la cellule. Fait crucial, c'est <em>tout-ou-rien</em> — chaque pic a la même taille — donc le cerveau ne peut rien coder dans la hauteur d'un pic. Il code plutôt l'information dans la <em>fréquence</em> et la <em>synchronisation</em> précise des décharges.</p>
<p>Là où un neurone rencontre le suivant, à la <strong>synapse</strong>, le pic arrivant ouvre des canaux calcium, et ce calcium déclenche les vésicules à déverser un neurotransmetteur — glutamate pour exciter, GABA pour inhiber — à travers un écart large de seulement 20 nanomètres. De l'autre côté, certains récepteurs sont de simples canaux ioniques qui s'ouvrent au contact, tandis que d'autres lancent de plus lentes cascades chimiques. L'un se distingue : le <strong>récepteur NMDA</strong> ne s'ouvre que lorsque la cellule reçoit <em>à la fois</em> du glutamate et est déjà dépolarisée, en faisant un détecteur de coïncidence intégré.</p>
<p>Cette détection de coïncidence est la racine physique de l'apprentissage. Quand deux neurones s'activent ensemble, le calcium afflue par les récepteurs NMDA et déclenche une cascade (via l'enzyme CaMKII) qui garnit la synapse de plus de récepteurs, la renforçant de façon permanente — la <strong>potentialisation à long terme</strong>. Le slogan de Hebb le résume : « les neurones qui s'activent ensemble se câblent ensemble. » Un souvenir n'est pas stocké à l'intérieur d'une cellule mais dans les forces ajustées des connexions entre elles.</p>`,
          facts: [
            { e: '🔵', t: `Le récepteur NMDA est appelé « détecteur de coïncidence » — il ne s'ouvre que lorsque la cellule présynaptique s'active ET que la cellule postsynaptique est déjà active.` },
            { e: '🌿', t: `La neurogenèse — la naissance de nouveaux neurones — se produit dans l'hippocampe adulte et est renforcée par l'exercice, le sommeil et la nouveauté.` },
            { e: '🎯', t: `La dopamine ne signale pas directement le « plaisir » — elle signale l'erreur de prédiction : la différence entre récompense attendue et réelle.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Potentiel de Nernst`, e: 'E_{\\text{ion}} = \\dfrac{RT}{zF}\\ln\\dfrac{[X]_{\\text{out}}}{[X]_{\\text{in}}}' },
            { n: `Potentiel de repos`, e: 'V_{\\text{rest}} \\approx -70\\ \\text{mV}' },
            { sep: 1 },
            { n: `Équation de Goldman`, e: 'V_m = \\dfrac{RT}{F}\\ln\\dfrac{P_K[K^+]_o + P_{Na}[Na^+]_o}{P_K[K^+]_i + P_{Na}[Na^+]_i}' },
            { n: `Seuil`, e: 'V_{\\text{thr}} \\approx -55\\ \\text{mV}' },
            { sep: 1 },
            { n: `Règle de Hebb`, e: "\\text{s'activent ensemble} \\to \\text{se câblent ensemble}" },
            { n: `Induction LTP`, e: '\\text{NMDA } \\text{Ca}^{2+} \\to \\text{CaMKII} \\to \\text{AMPA}' },
          ] }, sim: 'neuro',
        },
        scholar: {
          title: `Neurosciences computationnelles : Hodgkin-Huxley, théorie des champs neuronaux et le connectome`,
          body: `<h4><span class="hn">01</span>Les équations qui ont capturé un pic</h4>
<p>En 1952, à partir de mesures minutieuses sur l'axone géant d'un calmar, Hodgkin et Huxley écrivirent un ensemble d'équations différentielles non linéaires couplées qui reproduisent le potentiel d'action en détail quantitatif — sa forme, son seuil, sa pause réfractaire. La membrane est un condensateur chargé et déchargé par des conductances ioniques voltage-dépendantes, \\(C_m \\dfrac{dV}{dt} = -g_{Na}m^3h(V-E_{Na}) - g_K n^4(V-E_K) - g_L(V-E_L) + I\\), avec des variables de porte qui s'ouvrent et se ferment quand la tension oscille. Cela remporta le prix Nobel 1963 et reste le socle de tout modèle biophysique de neurone.</p>
<h4><span class="hn">02</span>Le réduire à l'essentiel</h4>
<p>Quatre équations couplées par neurone est peu maniable pour un réseau de milliards, donc les théoriciens ont bâti des réductions. Le modèle de FitzHugh–Nagumo ne garde que deux variables mais préserve la géométrie essentielle du plan de phase — le seuil excitable et la décharge en cycle limite — tandis que le neurone <em>intègre-et-tire</em>, encore plus simple, écarte entièrement la forme du pic et se contente de cumuler l'entrée jusqu'à franchir le seuil. Ces caricatures sacrifient le détail biophysique pour rendre possibles la simulation à grande échelle et l'analyse mathématique.</p>
<h4><span class="hn">03</span>Des cellules uniques aux champs de tissu</h4>
<p>Prends du recul des neurones individuels vers une nappe de cortex et tu peux traiter l'activité comme un champ continu. La <strong>théorie des champs neuronaux</strong> modélise l'activité moyenne \\(u(x,t)\\) par une équation intégro-différentielle, \\(\\tau\\,\\partial_t u = -u + \\int w(x-y)\\,F[u(y,t)]\\,dy + I\\), où le noyau de connexion \\(w\\) est typiquement un « chapeau mexicain » — les neurones proches excitent, les lointains inhibent. C'est une façon remarquablement compacte de décrire ondes, bosses et motifs roulant à travers la surface corticale.</p>
<h4><span class="hn">04</span>Le cerveau fait aussi des motifs de Turing</h4>
<p>Ce couplage en chapeau mexicain a une conséquence familière. Tout comme en chimie de réaction-diffusion, une excitation locale avec inhibition à longue portée peut spontanément briser l'uniformité en un motif périodique — une <em>instabilité de type Turing</em>, déclenchée quand le noyau favorise une longueur d'onde spatiale particulière. Les mêmes mathématiques qui tachètent un léopard sont invoquées pour expliquer les colonnes corticales, les « bosses » stables d'activité qui tiennent un élément en mémoire de travail, et l'étonnante grille hexagonale des cellules de navigation du cortex entorhinal.</p>
<h4><span class="hn">05</span>Cartographier chaque fil : le connectome</h4>
<p>Sous la dynamique se trouve le schéma de câblage — le <strong>connectome</strong> — et le cartographier est brutal. Le seul <em>complet</em> appartient au ver C. elegans : 302 neurones, ~7 000 synapses, achevé en 1986. Pour les humains l'échelle est vertigineuse ; trancher et imager un seul millimètre cube de cortex par microscopie électronique génère plus de 100 téraoctets de données (le jeu de données H01). Reconstruire un cerveau humain entier reste hors de portée, mais les fragments remodèlent déjà notre façon de penser l'organisation neuronale.</p>
<h4><span class="hn">06</span>La forme d'un réseau sain</h4>
<p>Là où des connectomes existent, la théorie des graphes révèle une architecture cohérente : une topologie <em>petit-monde</em>, avec un dense regroupement local et de courts chemins globaux, plus un « club des riches » de régions-carrefours fortement interconnectées et une hiérarchie de modules. C'est un câblage efficace sous de stricts budgets métaboliques et spatiaux — et, de façon révélatrice, ces signatures de réseau mêmes sont mesurablement perturbées dans la maladie d'Alzheimer, la schizophrénie et l'autisme, suggérant que certains troubles cérébraux sont, au fond, des maladies de la connectivité.</p>`,
          facts: [
            { e: '🔬', t: `Un cube de 1 mm³ de cortex humain contient ~57 000 cellules, ~230 mm de vaisseaux sanguins et ~1,5 km d'axones — le tout dans un volume plus petit qu'un grain de sable.` },
            { e: '🌐', t: `Le cerveau humain fonctionne à environ 20 W — l'équivalent d'une ampoule faible — et pourtant surpasse tout ordinateur existant sur les tâches de reconnaissance de motifs.` },
            { e: '💡', t: `La plasticité hebbienne, la plasticité dépendante du temps des pics (STDP) et l'algorithme de rétropropagation en apprentissage profond sont tous formellement équivalents sous certaines conditions.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Hodgkin–Huxley`, e: 'C_m \\dfrac{dV}{dt} = -g_{Na}m^3h(V\\!-\\!E_{Na}) - g_K n^4(V\\!-\\!E_K) - g_L(V\\!-\\!E_L) + I' },
            { n: `Variable de porte`, e: '\\dfrac{dm}{dt} = \\alpha_m(V)(1-m) - \\beta_m(V)\\,m' },
            { sep: 1 },
            { n: `Champ neuronal`, e: '\\tau\\,\\partial_t u = -u + \\int w(x-y)F[u(y)]\\,dy + I' },
            { n: `Instabilité de Turing`, e: '\\hat{w}(k^*) > 0 \\text{ pour un } k^* \\ne 0' },
            { sep: 1 },
            { n: `Intègre-et-tire`, e: 'C\\dfrac{dV}{dt} = -\\dfrac{V-V_{\\text{rest}}}{R} + I', c: 'décharge à V ≥ V_thr' },
          ] }, sim: 'neuro',
        },
      },
    },
    neuron: {
      title: 'Le cerveau électrique',
      teaser: `Comment une seule cellule cérébrale tire-t-elle 200 étincelles électriques par seconde — et câble-t-elle tes pensées ?`,
      chips: ['Neurones', 'Électricité', 'Synapses'],
      lvls: {
        junior: {
          title: `Ton cerveau tourne sur de minuscules étincelles !`,
          body: `<p>À l'intérieur de ton crâne, en ce moment même, quelque <strong>86 milliards de neurones</strong> flashent comme de minuscules éclairs, projetant des messages jusqu'à 120 mètres par seconde. Ces étincelles sont comment tu lis cette phrase, comment tu peux imaginer le visage d'un ami, et comment ta main se retire d'un objet brûlant avant même que tu aies décidé de bouger.</p>
<p>Un neurone est une cellule spécialisée en forme d'arbre, un peu. Ses <strong>dendrites</strong> ramifiées sont les racines, rassemblant les signaux entrants des voisins, et sa longue queue, l'<strong>axone</strong>, est le tronc qui porte le signal plus loin. Quand assez de signaux entrants s'accumulent, le neurone « tire », lançant une brève impulsion électrique filant le long de l'axone vers la cellule suivante en ligne.</p>
<p>Entre deux neurones se trouve un étroit écart, la <strong>synapse</strong>, et ici le signal change de forme. Plutôt que de sauter à travers en tant qu'électricité, l'impulsion arrivante libère de petits messagers chimiques — des <strong>neurotransmetteurs</strong> comme la dopamine et la sérotonine — qui dérivent au-dessus de l'écart et disent au neurone suivant de tirer ou de rester tranquille. Chaque pensée, sentiment, souvenir et mouvement que tu aies jamais eu fut porté par des chaînes de ces étincelles sautant à travers des milliards de synapses.</p>`,
          facts: [
            { e: '⚡', t: `Les neurones peuvent tirer jusqu'à 200 fois par seconde. C'est plus rapide que tout batteur professionnel — et tu en as 86 milliards !` },
            { e: '🔗', t: `Ton cerveau a environ 100 000 milliards de synapses — plus que toutes les étoiles de la Voie lactée et d'Andromède réunies.` },
            { e: '🐢', t: `Tous les signaux ne sont pas égaux : les fibres myélinisées rapides portent la douleur à 120 m/s, tandis que les fibres nues lentes portent un élancement à seulement 0,5 m/s.` },
          ],
          formula: null, sim: 'neuron',
        },
        student: {
          title: `Le potentiel d'action de Hodgkin-Huxley`,
          body: `<p>Un neurone au repos tient un <strong>potentiel de membrane</strong> d'environ \\(-70\\) mV — son intérieur gardé plus négatif que l'extérieur par la pompe Na⁺/K⁺, qui éjecte inlassablement trois ions sodium pour deux potassium qu'elle ramène. Dépolarise la membrane au-delà d'un seuil près de \\(-55\\) mV et les canaux sodium voltage-dépendants éclatent ouverts, laissant le sodium inonder et poussant la tension jusqu'à \\(+40\\) mV en moins d'une milliseconde.</p>
<p>Ce renversement fulgurant est le <strong>potentiel d'action</strong>, et il est strictement <em>tout-ou-rien</em> : une fois déclenché, il atteint toujours à peu près le même pic peu importe la force de la poussée. Donc un neurone signale l'intensité par la <em>fréquence</em> de ses décharges, non par la taille de chaque pic. En une milliseconde les canaux sodium s'inactivent et de plus lents canaux potassium ramènent la tension vers le bas, dépassant brièvement en une accalmie <em>réfractaire</em> où aucun pic frais ne peut se déclencher — un plafond dur sur la vitesse à laquelle un neurone peut parler.</p>
<p>Puis le pic voyage : chaque parcelle de membrane dépolarisée fait basculer sa voisine au-delà du seuil, et l'impulsion marche le long de l'axone sans s'estomper. La nature y a boulonné un turbocompresseur — l'isolation graisseuse de <strong>myéline</strong> force le signal à sauter entre des espaces nus appelés <em>nœuds de Ranvier</em> (conduction saltatoire), poussant la vitesse vers 120 m/s tout en réduisant drastiquement la facture d'énergie. Hodgkin et Huxley cartographièrent toute cette cascade en 1952, des courants ioniques au pic, et en prirent le prix Nobel 1963.</p>`,
          facts: [
            { e: '🏆', t: `Hodgkin et Huxley dérivèrent leurs équations du potentiel d'action en mesurant les courants dans les axones géants de calmar — larges de 1 mm, visibles à l'œil nu !` },
            { e: '💊', t: `Les anesthésiques locaux comme la lidocaïne bloquent les canaux Na⁺ voltage-dépendants, faisant taire les signaux de douleur avant même qu'ils n'atteignent le cerveau.` },
            { e: '🌊', t: `La sclérose en plaques détruit la gaine de myéline, ralentissant ou bloquant la conduction — causant faiblesse, engourdissement et troubles de la vision.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Potentiel de repos`, e: 'V_{\\text{rest}} \\approx -70\\ \\text{mV}', c: 'pompe Na⁺/K⁺' },
            { n: `Seuil`, e: 'V_{\\text{thr}} \\approx -55\\ \\text{mV}', c: `tout-ou-rien` },
            { sep: 1 },
            { n: `Potentiel de Nernst`, e: 'E_{\\text{ion}} = \\dfrac{RT}{zF}\\ln\\dfrac{[X]_{\\text{out}}}{[X]_{\\text{in}}}' },
            { n: `Équilibre Na⁺`, e: 'E_{Na} \\approx +60\\ \\text{mV}' },
            { n: `Équilibre K⁺`, e: 'E_K \\approx -88\\ \\text{mV}' },
            { sep: 1 },
            { n: `Équation de Goldman`, e: 'V_m = \\dfrac{RT}{F}\\ln\\dfrac{P_K[K^+]_o + P_{Na}[Na^+]_o}{P_K[K^+]_i + P_{Na}[Na^+]_i}' },
          ] }, sim: 'neuron',
        },
        scholar: {
          title: `Équations de Hodgkin-Huxley, modèles de conductance et codage neuronal`,
          body: `<h4><span class="hn">01</span>Le pic comme circuit</h4>
<p>Le génie de Hodgkin et Huxley fut de traiter la membrane comme un circuit électrique : un condensateur en parallèle avec des résistances contrôlées en tension pour chaque ion. La conservation du courant donne \\(C_m \\dfrac{dV}{dt} = -g_{Na}m^3h(V-E_{Na}) - g_K n^4(V-E_K) - g_L(V-E_L) + I\\). Chaque terme est une voie ionique, chaque pile \\(E\\) le potentiel de Nernst de l'ion. Résous-le et un potentiel d'action complet apparaît, sans qu'on l'appelle — preuve que le pic n'est pas une astuce biologique spéciale mais une conséquence d'une poignée de canaux voltage-dépendants obéissant à la loi d'Ohm.</p>
<h4><span class="hn">02</span>Des canaux qui s'ouvrent et se ferment dans le temps</h4>
<p>La non-linéarité vit dans les <em>variables de porte</em> \\(m, h, n\\), chacune la fraction de canaux en configuration ouverte et chacune relaxant vers une cible voltage-dépendante, \\(\\dfrac{dx}{dt} = \\alpha_x(V)(1-x) - \\beta_x(V)x\\). Le sodium s'active vite (\\(m\\)) mais s'inactive ensuite (\\(h\\)) ; le potassium s'active lentement (\\(n\\)). Cette synchronisation décalée — entrée rapide, sortie retardée — est ce qui fait dépasser et récupérer la tension plutôt que simplement relaxer, transformant un franchissement de seuil en une impulsion stéréotypée.</p>
<h4><span class="hn">03</span>Ramener quatre équations à deux</h4>
<p>Quatre variables couplées sont dures à imaginer, donc FitzHugh et Nagumo groupèrent la paire rapide et la paire lente en seulement deux, \\(\\dot v = v - v^3/3 - w + I\\) et \\(\\dot w = \\varepsilon(v + a - bw)\\). Maintenant toute l'histoire tient sur un <em>plan de phase</em> 2-D, où le potentiel d'action est simplement une grande boucle que fait l'état quand un stimulus le pousse à travers une courbe de seuil — sous la courbe il glisse tranquillement au bercail, au-dessus il prend la grande excursion.</p>
<h4><span class="hn">04</span>Deux saveurs d'excitabilité</h4>
<p>Cette vue géométrique classe les vrais neurones. Si la décharge s'enclenche par une bifurcation <em>nœud-col</em>, la cellule est de Type I — elle peut tirer arbitrairement lentement, montant son taux en douceur avec l'entrée. Si elle s'enclenche par une bifurcation de <em>Hopf</em>, elle est de Type II — la décharge apparaît abruptement à une fréquence finie. Ce n'est pas une taxonomie oisive : qu'un neurone intègre ses entrées ou résonne avec elles façonne la manière dont un circuit entier calcule.</p>
<h4><span class="hn">05</span>Comment les signaux se propagent : la théorie du câble</h4>
<p>Une dendrite est un câble électrique qui fuit, et jusqu'où un signal passif porte avant de s'amenuiser est fixé par la <em>constante d'espace</em> \\(\\lambda = \\sqrt{r_m/r_a}\\) — l'équilibre entre la fuite de membrane et la résistance axiale. C'est pourquoi les synapses lointaines ne sont entendues que faiblement au soma, pourquoi la myéline (élevant \\(r_m\\)) laisse les signaux voyager plus loin entre les nœuds, et pourquoi l'architecture ramifiée d'un neurone est elle-même une forme de calcul, non une simple plomberie.</p>
<h4><span class="hn">06</span>Ce que les pics veulent réellement dire</h4>
<p>Enfin, que <em>codent</em> ces impulsions ? La réponse par défaut est le <em>codage par fréquence</em> — l'information dans la fréquence de décharge — mais la synchronisation compte clairement aussi : le système auditif épingle la direction du son à partir de différences de pics de l'ordre de la microseconde, et les cellules de lieu de l'hippocampe signalent la position par la <em>phase</em> exacte à laquelle elles tirent. Le cortex s'appuie sur un codage <em>parcimonieux</em>, avec seulement ~1 % des neurones actifs à la fois, tirant un maximum de représentation d'une dépense métabolique minimale — la même logique d'efficacité qui pilote désormais les puces neuromorphiques « à pics » bâties pour calculer comme un cerveau.</p>`,
          facts: [
            { e: '🧮', t: `Le modèle HH utilise 4 EDO couplées. Les modèles compartimentaux modernes d'un seul neurone peuvent avoir des milliers de compartiments et des dizaines de milliers d'équations.` },
            { e: '🗺️', t: `Les cellules de lieu de l'hippocampe ne tirent que lorsqu'un animal est à un endroit précis — elles codent littéralement une « carte cognitive » de l'espace dans la synchronisation des pics.` },
            { e: '🤖', t: `Les réseaux de neurones à pics (SNN) imitent la dynamique HH dans le silicium ; la puce Loihi d'Intel a 128 cœurs neuromorphiques traitant l'information 1000× plus efficacement que les GPU.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Membrane HH`, e: 'C_m\\dfrac{dV}{dt} = -g_{Na}m^3h(V\\!-\\!E_{Na}) - g_K n^4(V\\!-\\!E_K) - g_L(V\\!-\\!E_L) + I' },
            { n: `Cinétique des portes`, e: '\\dfrac{dx}{dt} = \\alpha_x(V)(1-x) - \\beta_x(V)x', c: 'x ∈ {m,h,n}' },
            { sep: 1 },
            { n: `FitzHugh–Nagumo`, e: '\\dot v = v - \\tfrac{v^3}{3} - w + I,\\quad \\dot w = \\varepsilon(v + a - bw)' },
            { sep: 1 },
            { n: `Équation du câble`, e: '\\lambda^2\\dfrac{\\partial^2 V}{\\partial x^2} = \\tau\\dfrac{\\partial V}{\\partial t} + V' },
            { n: `Constante d'espace`, e: '\\lambda = \\sqrt{r_m/r_a}', c: 'r_m membrane, r_a axial' },
          ] }, sim: 'neuron',
        },
      },
    },
    memory: {
      title: 'Comment fonctionne la mémoire',
      teaser: `Comment ton cerveau stocke-t-il 2,5 pétaoctets de souvenirs — et pourquoi certains durent-ils à jamais tandis que d'autres s'évanouissent du jour au lendemain ?`,
      chips: ['Mémoire', 'LTP', 'Plasticité'],
      lvls: {
        junior: {
          title: `Ton cerveau se recâble lui-même quand tu apprends !`,
          body: `<p>Tu t'es déjà demandé comment tu as appris à faire du vélo ? Au début c'était dur — ton cerveau ne l'avait jamais fait. Mais avec la pratique quelque chose de remarquable arriva : ton cerveau se <em>recâbla littéralement lui-même</em>. Les neurones gérant l'équilibre et le pédalage se mirent à se parler plus efficacement, forgeant des connexions plus fortes, jusqu'à ce qu'un jour l'habileté se déroule d'elle-même et que tu puisses le faire sans y penser. Ce changement physique dans le cerveau est ce qu'un <strong>souvenir</strong> est réellement.</p>
<p>Les scientifiques le résument en une belle phrase : <em>« les neurones qui s'activent ensemble se câblent ensemble. »</em> Chaque fois que deux neurones s'allument au même instant, la synapse entre eux grandit d'un cran en force. Répète l'expérience assez — répète le piano, révise pour un examen, rejoue un après-midi heureux dans ta tête — et la connexion devient solide comme le roc. C'est la <strong>plasticité synaptique</strong>.</p>
<p>Toute mémoire n'est pas la même. La <strong>mémoire à court terme</strong> agrippe un bout d'information pendant des secondes ou des minutes, comme un numéro de téléphone que tu viens d'apercevoir. La <strong>mémoire à long terme</strong> peut durer toute une vie. Pour déplacer un souvenir de l'une à l'autre, ton cerveau le rejoue — surtout pendant le <strong>sommeil</strong>, quand l'hippocampe re-déroule les événements de la journée et les remet lentement au cortex pour une garde permanente.</p>`,
          facts: [
            { e: '💾', t: `Le cerveau humain peut stocker une estimation de 2,5 pétaoctets — l'équivalent d'environ 3 millions d'heures de télé. Tu ne manquerais jamais d'espace.` },
            { e: '😴', t: `Le sommeil est essentiel pour la mémoire. Les étudiants qui dorment après avoir étudié en retiennent jusqu'à 40 % de plus que ceux qui passent la nuit blanche à réviser.` },
            { e: '🏆', t: `Les champions de mémoire qui mémorisent des centaines de chiffres aléatoires utilisent la « méthode des lieux » — imaginer marcher à travers un endroit familier. Elle exploite les circuits de mémoire spatiale de l'hippocampe.` },
          ],
          formula: null, sim: 'memory',
        },
        student: {
          title: `La potentialisation à long terme et la synapse hebbienne`,
          body: `<p>La <strong>potentialisation à long terme</strong> — LTP — est l'acte cellulaire de se souvenir. Bliss et Lømo trouvèrent en 1973 qu'une bouffée de stimulation à haute fréquence laisse une synapse durablement plus forte, et la molécule au cœur de cela est le <strong>récepteur NMDA</strong>. Il agit comme un détecteur de coïncidence : il ne s'ouvre que lorsque deux choses arrivent ensemble — le neurone entrant libère du glutamate <em>et</em> le neurone récepteur est déjà assez dépolarisé pour déloger un ion magnésium bloquant de l'embouchure du canal.</p>
<p>Quand les deux conditions coïncident, le calcium se déverse dans la cellule réceptrice et met une cascade en marche. Des kinases — surtout CaMKII — dopent les récepteurs AMPA existants et en convoient de nouveaux à la synapse, boostant sa force en quelques minutes. Pousse la stimulation plus fort et le changement devient permanent : des gènes s'allument, de nouvelles protéines sont bâties, et l'épine dendritique enfle physiquement. Tout cela s'aligne proprement sur la règle de Hebb, \\(\\Delta w_{ij} = \\eta\\, x_i x_j\\) — l'activité conjointe renforce le lien.</p>
<p>Là où ces changements comptent le plus, c'est l'<strong>hippocampe</strong>, la porte du cerveau pour les faits et les événements. La preuve la plus crue vint du patient H.M., dont l'hippocampe fut chirurgicalement retiré en 1953 : il garda ses anciens souvenirs et ses habiletés, mais ne put plus jamais fixer un nouveau fait ni une nouvelle expérience. Pendant le sommeil l'hippocampe rejoue la journée en bouffées compressées appelées <em>ondulations à ondes aiguës</em>, expédiant graduellement chaque souvenir vers le cortex pour une garde à long terme — une lente migration connue sous le nom de consolidation systémique.</p>`,
          facts: [
            { e: '🧠', t: `Le patient H.M. (Henry Molaison) perdit son hippocampe en 1953. Il ne put former aucun nouveau souvenir déclaratif jusqu'à sa mort 55 ans plus tard, faisant avancer notre compréhension de la mémoire plus que tout autre cas.` },
            { e: '🌙', t: `Pendant le sommeil, les ondulations à ondes aiguës de l'hippocampe rejouent les événements de la journée jusqu'à 20× plus vite que le temps réel, consolidant les souvenirs dans le cortex.` },
            { e: '🎵', t: `Jouer d'un instrument de musique restructure les cortex moteur et auditif du cerveau — un pianiste de 10 ans a une matière grise mesurablement plus épaisse qu'un non-musicien.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Règle hebbienne`, e: '\\Delta w_{ij} = \\eta\\, x_i x_j', c: `la co-activation renforce` },
            { sep: 1 },
            { n: `Coïncidence NMDA`, e: '\\text{glutamate} \\;\\wedge\\; \\Delta V > 0 \\;\\Rightarrow\\; \\text{Ca}^{2+}\\ \\text{influx}' },
            { n: `Induction LTP`, e: '[\\text{Ca}^{2+}]_i \\uparrow \\;\\to\\; \\text{CaMKII} \\;\\to\\; \\text{insertion AMPA}' },
            { sep: 1 },
            { n: `STDP`, e: '\\Delta t < 0 \\Rightarrow \\text{LTP};\\quad \\Delta t > 0 \\Rightarrow \\text{LTD}', c: 'Δt = t_pre − t_post' },
          ] }, sim: 'memory',
        },
        scholar: {
          title: `Règles de plasticité synaptique, engrammes et consolidation systémique`,
          body: `<h4><span class="hn">01</span>La synchronisation est tout : STDP</h4>
<p>La règle de Hebb dit que les neurones co-actifs renforcent leur lien, mais les expériences révélèrent quelque chose de plus fin : l'<em>ordre</em> exact des décharges compte, à la milliseconde près. Dans la <strong>plasticité dépendante du temps des pics</strong>, une synapse est renforcée quand le pic présynaptique arrive juste <em>avant</em> le postsynaptique — plausiblement causal — et affaiblie quand il arrive juste après, dans une étroite fenêtre de \\(\\pm 40\\) ms, \\(\\Delta W = A^+ e^{\\Delta t/\\tau^+}\\) pour la potentialisation et \\(-A^- e^{-\\Delta t/\\tau^-}\\) pour la dépression. Le cerveau, en effet, récompense les synapses qui ont aidé à prédire le pic suivant.</p>
<h4><span class="hn">02</span>Garder la plasticité stable : le seuil glissant</h4>
<p>Le pur renforcement hebbien est instable — les synapses fortes ne feraient que grandir sans borne. La théorie BCM corrige cela avec un <em>seuil glissant</em> \\(\\theta_M\\) qui suit lui-même l'activité récente : un neurone qui s'est beaucoup activé relève sa barre pour la potentialisation, donc la plasticité s'autorégule. Le calcium est la lecture physique — un afflux important pilote la LTP, un modéré la LTD, et cette réponse graduée et auto-ajustée empêche une vie d'apprentissage de saturer le réseau.</p>
<h4><span class="hn">03</span>L'engramme : attraper un souvenir en flagrant délit</h4>
<p>La trace physique d'un souvenir spécifique — l'<strong>engramme</strong> — s'avère être un ensemble parcimonieux, seulement ~5–10 % des neurones d'une région, liés ensemble par des synapses potentialisées. Ce fut de la spéculation pendant un siècle jusqu'à ce que l'optogénétique laisse les chercheurs marquer les cellules exactes actives durant une expérience puis les rallumer avec de la lumière. Réactiver un engramme fait se comporter un animal comme s'il se rappelait l'événement ; le faire taire bloque le rappel. Le souvenir vit réellement dans cet ensemble identifiable de cellules.</p>
<h4><span class="hn">04</span>Écrire et effacer des souvenirs avec de la lumière</h4>
<p>Une fois que tu peux adresser un engramme, tu peux l'éditer. Dans une expérience marquante de 2013, des chercheurs implantèrent un <em>faux</em> souvenir chez une souris en co-activant artificiellement un engramme pour un lieu avec un choc aversif, de sorte que l'animal craignit plus tard un endroit où rien de mauvais n'était arrivé. Et chez des souris rendues amnésiques par le blocage de la synthèse des protéines, réactiver directement l'engramme restaura le souvenir « perdu » — montrant que la trace était stockée mais simplement inaccessible. La mémoire devint quelque chose que tu pouvais non seulement observer mais manipuler.</p>
<h4><span class="hn">05</span>Un stockage plus fin que la cellule</h4>
<p>Chose remarquable, l'unité de stockage est plus petite qu'un neurone. Une seule <em>épine dendritique</em> peut être potentialisée ou déprimée indépendamment de ses voisines à quelques microns sur la même branche, donc une cellule peut tenir des milliers d'éléments de mémoire quasi indépendants. Cela multiplie énormément la capacité du cerveau et explique comment ~86 milliards de neurones stockent une estimation de pétaoctets d'expérience — le vrai bit est la synapse, non la cellule.</p>
<h4><span class="hn">06</span>Le dialogue endormi qui fait durer les souvenirs</h4>
<p>La <strong>consolidation systémique</strong> est la lente remise d'un souvenir de l'hippocampe à apprentissage rapide vers le stockage néocortical durable, et elle se produit largement dans le sommeil par une conversation au timing exquis entre rythmes cérébraux. Les ondulations à ondes aiguës de l'hippocampe, les fuseaux de sommeil corticaux et les oscillations lentes s'emboîtent les uns dans les autres en une hiérarchie précise, et cette coordination est censée rejouer les traces de la journée vers le cortex juste quand il est prêt à les recevoir — incrustant graduellement une expérience fugace dans le tissu distribué de la mémoire à long terme.</p>`,
          facts: [
            { e: '💡', t: `L'optogénétique — contrôler les neurones avec de la lumière — permit aux chercheurs d'implanter un faux souvenir chez une souris en 2013 (Ramirez et al., Science), testant directement la théorie de l'engramme.` },
            { e: '🔬', t: `Une seule épine dendritique peut se potentialiser ou se déprimer indépendamment de ses voisines sur la même dendrite — l'unité de base du stockage est plus fine que le neurone lui-même.` },
            { e: '🧬', t: `Le BDNF Val66Met, une variante génétique courante (~30 % de la population), altère la sécrétion de BDNF dépendante de l'activité et est associé à une consolidation mémorielle hippocampique réduite.` },
          ],
          formula: { tex: 1, rows: [
            { n: `STDP (potentialisation)`, e: '\\Delta W = A^+ e^{\\Delta t/\\tau^+}', c: 'Δt < 0' },
            { n: `STDP (dépression)`, e: '\\Delta W = -A^- e^{-\\Delta t/\\tau^-}', c: 'Δt > 0' },
            { sep: 1 },
            { n: `Règle BCM`, e: '\\dfrac{dw}{dt} = \\phi(v_{\\text{post}}, \\theta_M)\\,v_{\\text{pre}}' },
            { n: `Seuil glissant`, e: '\\tau\\,\\dfrac{d\\theta_M}{dt} = v_{\\text{post}}^2 - \\theta_M' },
            { sep: 1 },
            { n: `Contrôle calcium`, e: '[\\text{Ca}^{2+}] > \\theta_{\\text{high}} \\Rightarrow \\text{LTP}' },
            { n: `Engramme`, e: 'S = \\{\\, n_i : w_{ij} \\gg \\text{base} \\,\\}', c: `ensemble parcimonieux` },
          ] }, sim: 'memory',
        },
      },
    },
    sleep: {
      title: 'Sommeil et conscience',
      teaser: `Pourquoi perdons-nous des heures de notre vie chaque nuit — et que se passe-t-il dans le cerveau pendant ce temps ?`,
      chips: ['Sommeil', 'Conscience', 'Oscillations'],
      lvls: {
        junior: {
          title: `Pourquoi ton cerveau doit se mettre hors ligne chaque nuit !`,
          body: `<p>Tu t'es déjà demandé ce que ton cerveau trafique réellement pendant que tu dors ? Il s'avère que dormir n'est pas du tout « ne rien faire » — ton cerveau est <em>débordé de travail</em>. Pendant que ton corps se repose, il se nettoie lui-même, rejoue des souvenirs, rééquilibre sa chimie et mène des réparations essentielles qui ne peuvent tout simplement pas se faire quand tu es éveillé.</p>
<p>Le sommeil se déroule en cycles d'environ 90 minutes. Chacun traverse le <strong>sommeil léger</strong>, puis le <strong>sommeil profond</strong> (où le cerveau déroule de grandes ondes lentes), et enfin le <strong>sommeil paradoxal</strong> — le stade du rêve. Pendant le paradoxal ton cerveau est presque aussi actif que lorsque tu es éveillé, et pourtant tes muscles deviennent flasques pour que tu ne puisses pas mimer tes rêves, tandis que tes yeux vont et viennent sous tes paupières (c'est le « mouvement oculaire rapide »).</p>
<p>Le sommeil profond est quand le ménage se fait. Un réseau de canaux s'ouvre et le liquide céphalorachidien lave le cerveau, évacuant les déchets toxiques — y compris l'amyloïde-bêta, la protéine même qui s'agglutine en plaques dans la maladie d'Alzheimer. Ce <strong>système glymphatique</strong> nettoyeur tourne surtout la nuit. Vois le sommeil comme le lave-vaisselle nocturne de ton cerveau : saute-le quelques nuits et la crasse commence à s'entasser.</p>`,
          facts: [
            { e: '🧽', t: `Pendant le sommeil, le système glymphatique du cerveau évacue ~60 % de déchets métaboliques en plus — y compris l'amyloïde-bêta, la protéine qui s'accumule dans la maladie d'Alzheimer.` },
            { e: '😴', t: `Après 17 à 19 heures sans sommeil, la performance cognitive chute à l'équivalent d'une alcoolémie de 0,05 % — légalement ivre dans la plupart des pays.` },
            { e: '🐬', t: `Les dauphins et les baleines dorment avec une seule moitié de leur cerveau à la fois (sommeil à ondes lentes unihémisphérique), gardant un œil ouvert pour guetter les prédateurs.` },
          ],
          formula: null, sim: 'sleep',
        },
        student: {
          title: `Architecture du sommeil, oscillations EEG et le système glymphatique`,
          body: `<p>Le sommeil n'est pas un état mais une visite structurée de plusieurs, chacun avec sa propre signature EEG. Le <strong>NREM</strong> descend du léger N1 vers N2 — moucheté de <em>fuseaux de sommeil</em> à 12–15 Hz — et jusqu'à N3, le profond sommeil à ondes lentes, où de grandes ondes delta sous 2 Hz balayent le cortex. Puis vient le <strong>paradoxal</strong> (REM), dont l'EEG presque semblable à l'éveil dément un corps tenu en quasi-paralysie totale. Une nuit déroule quatre à six de ces cycles de ~90 minutes, chargée à l'avant de sommeil profond et à l'arrière de paradoxal — ce qui est pourquoi tes rêves les plus longs et les plus vifs arrivent juste avant ton réveil.</p>
<p>Deux horloges décident quand tu dors. Une <strong>pression homéostatique</strong> (processus S) s'accumule plus tu restes éveillé à mesure que la molécule <em>adénosine</em> s'accumule dans le cerveau — la sensation physique de la fatigue. Par-dessus chevauche le <strong>rythme circadien</strong> (processus C), un cycle de ~24 heures tenu par une horloge maîtresse dans l'hypothalamus et réinitialisé chaque jour par la lumière frappant l'œil. Ta vigilance est à peu près le bras de fer entre eux, \\(W(t) = C(t) - S(t)\\). La caféine agit en imitant l'adénosine à son récepteur sans l'activer — elle n'abaisse pas ta pression de sommeil, elle masque simplement le signal, ce qui est pourquoi la fatigue revient en flot dès qu'elle se dissipe.</p>
<p>La découverte la plus saisissante est <em>pourquoi</em> le sommeil profond est non négociable. Le <strong>système glymphatique</strong> (Nedergaard, 2013) est un réseau de plomberie où le liquide céphalorachidien s'écoule le long des vaisseaux sanguins et rince le tissu cérébral, emportant les déchets métaboliques — y compris les protéines amyloïde-β et tau liées à la démence. Ce rinçage tourne environ 60 % plus fort en sommeil NREM qu'à l'éveil, entraîné par les lentes pulsations artérielles du sommeil profond. Une seule mauvaise nuit élève mesurablement l'amyloïde-β dans le cerveau humain — un indice dégrisant de pourquoi la perte chronique de sommeil et Alzheimer voyagent ensemble.</p>`,
          facts: [
            { e: '☕', t: `La caféine agit en bloquant les récepteurs de l'adénosine — elle ne réduit pas la pression de sommeil, elle cache juste le signal. Quand elle se dissipe, l'adénosine afflue et la fatigue revient soudainement.` },
            { e: '🧹', t: `Une nuit de privation de sommeil augmente les niveaux d'amyloïde-bêta dans le cerveau humain d'environ 5 %, mesuré par TEP (Shokri-Kojori et al., 2018).` },
            { e: '🌡️', t: `La température centrale du corps doit chuter d'environ 0,5 °C pour amorcer le sommeil — c'est pourquoi une chambre fraîche t'aide à t'endormir plus vite, et pourquoi un bain chaud marche paradoxalement aussi (il abaisse la température centrale en tirant la chaleur vers la peau).` },
          ],
          formula: { tex: 1, rows: [
            { n: `Pression homéostatique`, e: 'S(t) \\propto [\\text{adénosine}]', c: `monte éveillé, baisse endormi` },
            { n: `Processus circadien`, e: 'C(t):\\ \\sim\\!24\\text{-h oscillateur}' },
            { sep: 1 },
            { n: `Vigilance`, e: 'W(t) = C(t) - S(t)' },
            { n: `Caféine`, e: "\\text{bloque les récepteurs d'adénosine}", c: `cache la pression de sommeil` },
            { sep: 1 },
            { n: `Flux glymphatique`, e: 'J_{\\text{CSF}} \\propto \\text{AQP4} \\times \\text{amplitude du pouls}' },
            { n: `Nettoyage NREM`, e: '\\Delta[\\text{A}\\beta] \\approx -60\\%', c: 'vs éveil ; Xie et al. 2013' },
          ] }, sim: 'sleep',
        },
        scholar: {
          title: `Oscillations thalamocorticales, théorie de l'information intégrée et les corrélats neuronaux de la conscience`,
          body: `<h4><span class="hn">01</span>Où se font les rythmes du sommeil</h4>
<p>Les ondes signatures du sommeil sont engendrées par une boucle entre le cortex et le thalamus. En N2/N3 le noyau réticulaire thalamique cadence les <strong>fuseaux de sommeil</strong> — des bouffées à 12–15 Hz qui croissent et décroissent — par une inhibition alternée et des bouffées calciques de rebond dans les neurones relais. Sous eux court l'<strong>oscillation lente</strong> corticale sous 1 Hz, tout le cortex sonnant entre des <em>états haut</em> d'activité proche de l'éveil et des <em>états bas</em> de silence collectif. Le sommeil, loin d'être éteint, est le cerveau jouant un petit ensemble de rythmes exquisément coordonnés.</p>
<h4><span class="hn">02</span>Pourquoi nous dormons peut-être : l'homéostasie synaptique</h4>
<p>Ces oscillations lentes résolvent peut-être un problème que crée l'éveil. L'<em>hypothèse de l'homéostasie synaptique</em> (Tononi et Cirelli) soutient qu'apprendre toute la journée pilote un renforcement net des synapses qui ne peut continuer indéfiniment — cela coûte de l'énergie et de l'espace et sature le réseau. Le sommeil profond, dans cette vue, <em>déclasse</em> doucement les synapses sur toute la ligne, préservant le motif relatif appris tout en restaurant la capacité. De façon révélatrice, la quantité d'activité à ondes lentes une nuit donnée est proportionnelle à combien tu as appris ce jour-là.</p>
<h4><span class="hn">03</span>L'interrupteur du tronc cérébral derrière le rêve</h4>
<p>Le sommeil paradoxal est orchestré depuis le tronc cérébral. Des noyaux cholinergiques y allument le thalamus et le cortex, produisant un EEG presque impossible à distinguer de l'éveil, alors même que des circuits glutamatergiques pilotent une inhibition spinale qui laisse le corps atone — paralysé, pour que tu ne mimes pas tes rêves. Quand ce garde-fou échoue, dans le trouble du comportement en sommeil paradoxal, les gens miment physiquement leurs rêves, une démonstration vive de la finesse réelle de la ligne entre rêver et faire.</p>
<h4><span class="hn">04</span>L'assise du problème difficile : les corrélats neuronaux</h4>
<p>Le sommeil et l'anesthésie importent à la plus profonde question des neurosciences parce qu'ils basculent la conscience marche/arrêt, offrant une prise sur les <strong>corrélats neuronaux de la conscience</strong> — la machinerie minimale suffisante à l'expérience. Qu'y a-t-il dans un cortex actif à l'éveil ou en paradoxal qui donne une expérience ressentie, tandis que le même cortex en sommeil profond ne le fait pas, malgré une abondante décharge neuronale ? Isoler cette différence est la voie empirique vers un problème longtemps jugé purement philosophique.</p>
<h4><span class="hn">05</span>Deux théories en guerre</h4>
<p>Deux cadres dominent. La <em>théorie de l'espace de travail global</em> soutient qu'un stimulus devient conscient quand il est diffusé largement à travers les réseaux fronto-pariétaux — une « ignition » tout-ou-rien qui rend l'information globalement disponible. La <em>théorie de l'information intégrée</em> prend le parti inverse, définissant la conscience comme \\(\\Phi\\), la quantité d'information intégrée <em>irréductible</em> qu'un système engendre, et fait l'affirmation provocatrice que tout système avec \\(\\Phi > 0\\) a une lueur d'expérience — tandis qu'un réseau purement direct, si vaste soit-il, n'en a essentiellement aucune.</p>
<h4><span class="hn">06</span>Mettre un nombre sur la conscience</h4>
<p>De façon frappante, cela est devenu mesurable au chevet du patient. Zappe le cortex d'une impulsion magnétique et enregistre l'écho : un cerveau conscient répond par une réponse complexe et largement réverbérante, un inconscient par un simple blip local. Comprimer cet écho donne l'<em>indice de complexité perturbationnelle</em>, qui suit la conscience à travers le sommeil, l'anesthésie et les lésions cérébrales plus fiablement que tout comportement. Il peut désormais signaler la conscience chez des patients « végétatifs » non réactifs qui ne peuvent bouger ni parler — un rudimentaire conscience-mètre, né de l'étude du sommeil.</p>`,
          facts: [
            { e: '📡', t: `L'indice de complexité perturbationnelle (PCI) par TMS-EEG peut déterminer avec ~90 % de précision si un patient enfermé ou en état végétatif est consciemment conscient — sans aucune réponse comportementale.` },
            { e: '🔢', t: `La TII prédit qu'un réseau de neurones purement direct, si grand soit-il, a Φ ≈ 0 et n'est donc pas conscient — une affirmation qui défie directement les modèles d'apprentissage profond de l'esprit.` },
            { e: '🌊', t: `Homéostasie du sommeil à ondes lentes : l'activité EEG à ondes lentes (SWA) après une privation de sommeil est précisément proportionnelle à la quantité d'apprentissage fait pendant l'éveil — une signature du déclassement synaptique.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Information intégrée`, e: '\\Phi = \\min_{\\text{partition}} \\text{KL}\\!\\left(p \\,\\|\\, p_{\\text{part}}\\right)' },
            { n: `Conscient si`, e: '\\Phi > 0 \\text{ et irréductible}' },
            { sep: 1 },
            { n: `Ignition globale`, e: '\\text{activation fronto-pariétale tardive } (>300\\,\\text{ms})' },
            { n: `Indice de complexité`, e: '\\text{PCI} = \\dfrac{\\text{complexité LZ}(\\text{TMS-EEG})}{\\text{entropie du signal}}' },
            { sep: 1 },
            { n: `Fréquence des fuseaux`, e: 'f_{\\text{spindle}} \\approx 12\\text{–}15\\ \\text{Hz}' },
            { n: `Homéostasie synaptique`, e: '\\text{SWA} \\propto \\textstyle\\sum w_{ij}', c: 'Tononi et Cirelli' },
          ] }, sim: 'sleep',
        },
      },
    },
    ecosystem: {
      title: 'Écosystèmes et réseaux trophiques',
      teaser: 'Retire une espèce d\'une forêt et le système entier peut s\'effondrer. Chaque être vivant est connecté dans un réseau d\'énergie et de dépendance.',
      chips: ['Réseaux trophiques', 'Énergie', 'Biodiversité'],
      lvls: {
        junior: {
          title: `Le réseau de la nature — tout mange tout !`,
          body: `<p>Imagine une prairie d'été. L'herbe boit la lumière du soleil et pousse ; une sauterelle mange l'herbe ; une grenouille mange la sauterelle ; un serpent mange la grenouille ; un faucon mange le serpent. Chaque maillon s'appuie sur ceux d'en dessous pour la nourriture et l'énergie. Cette chaîne du manger et de l'être-mangé est une <strong>chaîne alimentaire</strong> — et un vrai écosystème en coud des centaines ensemble en un <strong>réseau trophique</strong> emmêlé.</p>
<p>Chaque miette de cette énergie remonte au Soleil. Plantes et algues captent la lumière solaire par la <strong>photosynthèse</strong> et la mettent en banque sous forme de sucre — les <strong>producteurs</strong>. Les animaux qui mangent des plantes sont des consommateurs primaires, ceux qui les mangent des consommateurs secondaires, et ainsi de suite le long de la chaîne. Mais voici la règle qui façonne tout : à chaque étape, environ <strong>90% de l'énergie s'échappe en chaleur</strong>. C'est pourquoi il y a toujours bien plus de plantes que d'herbivores, et bien plus d'herbivores que de chasseurs. On ne peut tout simplement pas avoir plus de lions que de gnous.</p>
<p>Retire une espèce et le réseau entier peut basculer de façons que personne ne voit venir. Quand les loups furent éradiqués de Yellowstone, les wapitis se multiplièrent et dénudèrent les berges ; les rivières s'érodèrent et changèrent de cours, et les poissons s'effondrèrent — tout un paysage se défaisant parce qu'un prédateur avait disparu. Ramène les loups, comme le firent les gardes en 1995, et le système se recoud lentement. Les écologistes appellent de tels animaux des <strong>espèces clés de voûte</strong> : leur emprise sur l'écosystème est follement disproportionnée à leur nombre.</p>`,
          facts: [
            { e: '🌳', t: `Un seul grand chêne peut abriter plus de 500 espèces d'insectes, d'oiseaux et de champignons — un écosystème-arbre au sein d'un écosystème.` },
            { e: '🐺', t: `Après le retour des loups à Yellowstone en 1995, ils déclenchèrent une « cascade trophique » qui changea le cours des rivières — leur effet se propagea dans tout le réseau trophique.` },
            { e: '🌊', t: `Le phytoplancton des océans produit environ 50% de tout l'oxygène de la Terre — plus que toutes les forêts pluviales du monde réunies.` },
          ],
          formula: null, sim: 'ecosystem',
        },
        student: {
          title: `Flux d'énergie, dynamique trophique et les équations de Lotka-Volterra`,
          body: `<p>Un écosystème est un système thermodynamique ouvert : l'énergie entre en flot comme lumière solaire, grimpe à travers les niveaux trophiques et s'échappe en chaleur. La <strong>règle des 10%</strong> de Lindeman (1942) nomme la fuite — seul environ un dixième de l'énergie à un niveau parvient à la biomasse du suivant, le reste dépensé en respiration, déchets et décomposition. Cette taxe brutale est pourquoi les chaînes alimentaires dépassent rarement quatre ou cinq maillons : il ne reste tout simplement rien pour nourrir un sixième. Tout repose sur la <strong>production primaire nette</strong>, les quelque 120 pétagrammes de carbone que les producteurs fixent dans le monde chaque année.</p>
<p>Réduis prédateur et proie à l'essentiel et tu obtiens les <strong>équations de Lotka-Volterra</strong> (1925-26) : les proies \\(N\\) se reproduisent au taux \\(r\\) mais sont mangées en proportion des rencontres \\(aNP\\), tandis que les prédateurs \\(P\\) croissent sur ce qu'ils attrapent et meurent de faim au taux \\(d\\) — \\(\\dfrac{dN}{dt} = rN - aNP\\) et \\(\\dfrac{dP}{dt} = eaNP - dP\\). Les deux tournent autour d'un équilibre partagé \\(N^{*} = d/ea\\), \\(P^{*} = r/a\\) en oscillation sans fin et déphasée — exactement le cycle lynx-lièvre d'environ 10 ans que les registres de fourrure de la Baie d'Hudson conservèrent pendant quatre-vingt-dix ans.</p>
<p>Élargis au réseau entier et les maths des réseaux prennent le relais. Sa <em>connectance</em> \\(C = L/S^2\\) — les liens réalisés sur tous ceux possibles — gouverne la stabilité, et le résultat de May en 1972 fut contre-intuitif : une communauté câblée au hasard tient seulement si \\(\\sqrt{SC}\\,\\sigma < 1\\), donc des réseaux plus grands et plus connectés sont <em>plus difficiles</em> à stabiliser, pas plus faciles. Les écosystèmes réels échappent à ce paradoxe diversité-stabilité par des interactions surtout <em>faibles</em> et une structure <em>modulaire</em> qui empêche un effondrement local de se propager en cascade. Les espèces clés de voûte sont l'exception criante — peu nombreuses mais fortes d'influence, ce qui est pourquoi en perdre une pèse si lourd.</p>`,
          facts: [
            { e: '🎣', t: `L'effondrement de la pêche à la morue des Grands Bancs en 1992 retira ~99% de la population de morue en quelques décennies — malgré l'histoire évolutive de 200 millions d'années du poisson dans ces eaux.` },
            { e: '🌺', t: `Les réseaux fongiques mycorhiziens relient les arbres d'une forêt, transférant carbone et nutriments entre individus — le « Wood Wide Web » permet aux arbres-mères de nourrir les jeunes pousses.` },
            { e: '🦈', t: `Retirer les requins d'un écosystème déclenche une cascade trophique : leurs proies (les raies) explosent en nombre et dévastent les populations de pétoncles — comme documenté au large de la côte est des USA.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Lotka-Volterra (proie)', e: '\\dfrac{dN}{dt} = rN - aNP' },
            { n: 'Lotka-Volterra (prédateur)', e: '\\dfrac{dP}{dt} = eaNP - dP' },
            { sep: 1 },
            { n: 'Équilibre', e: 'N^{*} = \\dfrac{d}{ea},\\quad P^{*} = \\dfrac{r}{a}' },
            { n: 'Règle des 10% (Lindeman)', e: '\\text{PPN}_{n+1} \\approx 0.1 \\times \\text{PPN}_n' },
            { sep: 1 },
            { n: 'Connectance', e: 'C = L/S^2' },
            { n: 'Critère de May', e: '\\sqrt{SC}\\,\\sigma < 1', c: 'pour la stabilité' },
          ] }, sim: 'ecosystem',
        },
        scholar: {
          title: `Théorie métabolique de l'écologie, biodiversité et points de bascule`,
          body: `<h4><span class="hn">01</span>L'écologie à partir du métabolisme</h4>
<p>La <strong>théorie métabolique de l'écologie</strong> (Brown et al., 2004) est un pari audacieux : qu'une grande part de l'écologie découle de la physique du métabolisme. Le taux métabolique d'un individu obéit à \\(B = b_0\\, M^{3/4}\\, e^{-E/kT}\\), le liant à la masse corporelle \\(M\\) et à la température \\(T\\), avec \\(E \\approx 0.65\\ \\text{eV}\\) l'énergie d'activation typique des réactions biochimiques. De cette seule expression la théorie prédit comment densité de population, longévité, taux de croissance et même taux de mutation se mettent à l'échelle avec la taille et la chaleur — et elle tient sur d'étonnants 27 ordres de grandeur de masse corporelle.</p>
<h4><span class="hn">02</span>La loi des trois quarts de Kleiber</h4>
<p>L'étrange exposant en son cœur est la loi de Kleiber, \\(B \\propto M^{3/4}\\) — pas le \\(2/3\\) que l'on attendrait naïvement d'un refroidissement par surface. West, Brown et Enquist (1997) le relièrent à la géométrie : la vie distribue les ressources par des réseaux ramifiés, remplissant l'espace, quasi fractals — vaisseaux sanguins, xylème des plantes, trachées — et optimiser le flux dans un tel réseau impose la puissance \\(3/4\\). C'est pourquoi le cœur d'une souris s'emballe et celui d'un éléphant se traîne, et pourquoi, gramme pour gramme, les grands animaux sont bien plus économes que les petits.</p>
<h4><span class="hn">03</span>Combien d'espèces une île peut accueillir</h4>
<p>La biodiversité a ses propres lois quantitatives. La <strong>relation espèce-aire</strong> \\(S = cA^z\\) (avec \\(z \\approx 0.25\\text{–}0.35\\)) dit que la richesse monte comme une puissance fixe de l'aire, et la <strong>biogéographie insulaire</strong> de MacArthur et Wilson (1967) explique pourquoi : le nombre d'espèces se cale sur un équilibre dynamique où le taux d'immigration (décroissant avec la distance au continent) croise le taux d'extinction (décroissant avec la taille de l'île). La richesse n'est pas un décompte statique mais un équilibre courant entre arrivée et perte.</p>
<h4><span class="hn">04</span>Fragmentation et conception des réserves</h4>
<p>Cette théorie porte un tranchant pratique dur. Découper un habitat continu en fragments transforme un continent en un archipel de petites « îles », chacune condamnée à perdre des espèces le long de sa propre courbe espèce-aire — ce qui est exactement pourquoi la fragmentation érode la biodiversité de façon si prévisible. Elle encadra aussi le long débat SLOSS — une réserve unique grande ou plusieurs petites ? — et donne à la planification de la conservation une colonne vertébrale quantitative plutôt qu'une intuition.</p>
<h4><span class="hn">05</span>États stables alternatifs et points de bascule</h4>
<p>Les écosystèmes ne changent pas toujours en douceur. Beaucoup ont des <em>états stables alternatifs</em>, et une lente poussée peut les faire franchir une bifurcation vers un régime brusquement différent qui résiste au retour. Un lac clair bascule en vert trouble à mesure que le phosphore monte ; un récif corallien bascule en algues ; l'Amazonie, au-delà d'un seuil de déforestation, pourrait cesser de faire sa propre pluie et glisser vers la savane. Ce sont de vrais <strong>points de bascule</strong> — bon marché à franchir, brutalement coûteux à inverser.</p>
<h4><span class="hn">06</span>Entendre l'alarme avant l'effondrement</h4>
<p>Le retournement porteur d'espoir est que les systèmes approchant d'un point de bascule peuvent diffuser un avertissement. À mesure qu'une bifurcation approche, un système se remet de plus en plus mollement des petits chocs — le <em>ralentissement critique</em> — se manifestant comme une variance et une autocorrélation croissantes dans ses fluctuations. En principe, surveiller ces statistiques permet de détecter un effondrement imminent avant qu'il ne survienne, une frontière de recherche en mouvement rapide aux enjeux urgents pour les lacs, la pêche, les récifs et le climat lui-même.</p>`,
          facts: [
            { e: '🐘', t: `Le taux métabolique se met à l'échelle comme M^{3/4} sur 27 ordres de grandeur de taille corporelle — des bactéries aux baleines bleues — l'une des lois les plus précises et universelles de l'écologie.` },
            { e: '🌳', t: `La déforestation de l'Amazonie au-delà de ~20-25% pourrait déclencher un dépérissement auto-entretenu — la forêt cesse de générer sa propre pluie et se convertit en savane. La déforestation actuelle est de ~17%.` },
            { e: '🐠', t: `Les récifs coralliens occupent <1% du fond océanique mais abritent ~25% de toutes les espèces marines — la plus haute densité de biodiversité de tout écosystème, maintenue par un réseau complexe de mutualismes.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Taux métabolique', e: 'B = b_0\\, M^{3/4}\\, e^{-E/kT}', c: 'E ≈ 0.65 eV' },
            { n: 'Loi de Kleiber', e: 'B \\propto M^{3/4}', c: 'à travers toute la vie' },
            { sep: 1 },
            { n: 'Espèce-aire', e: 'S = c\\,A^z,\\quad z \\approx 0.25\\text{–}0.35' },
            { n: 'Équilibre insulaire', e: '\\hat{S}:\\; \\text{immigration} = \\text{extinction}' },
            { sep: 1 },
            { n: 'Ralentissement critique', e: '\\text{temps de retour} \\sim 1/\\lambda_1 \\to \\infty', c: 'près de la bifurcation' },
            { n: 'Dynamique de communauté', e: '\\dfrac{dx_i}{dt} = x_i\\!\\left(r_i + \\sum_j \\alpha_{ij} x_j\\right)' },
          ] }, sim: 'ecosystem',
        },
      },
    },
    cell: {
      title: 'La cellule : osmose et diffusion',
      teaser: 'Une cellule est un sac à peau intelligente. Comment les choses entrent-elles et sortent-elles — et pourquoi le sel fait-il rétrécir une limace ?',
      chips: ['Membrane', 'Osmose', 'Diffusion'],
      lvls: {
        junior: {
          title: `Comment les choses entrent et sortent d'une cellule`,
          body: `<p>Chaque être vivant est bâti de <strong>cellules</strong>, et chaque cellule est enveloppée d'une fine peau — la <strong>membrane cellulaire</strong> — qui décide de ce qui entre et sort. Ce n'est pas un mur solide ; c'est plutôt une clôture de sécurité à portails. Les petites choses passent librement ; les grosses ou dangereuses sont bloquées ou escortées par des portes spéciales. Rate ce trafic et la cellule meurt, donc la membrane est littéralement la frontière entre une cellule et le reste du monde.</p>
<p>La façon la plus simple dont les choses se déplacent est la <strong>diffusion</strong> : les particules se répandent de là où elles sont serrées vers là où elles sont clairsemées, purement par bousculade aléatoire, jusqu'à être uniformément mélangées. Une goutte de colorant qui se déroule dans l'eau, ou l'odeur du café qui remplit une pièce, c'est de la diffusion. L'oxygène entre dans tes cellules et le dioxyde de carbone en sort de la même façon — chacun descendant son propre gradient d'encombrement, sans besoin d'aucune énergie.</p>
<p>L'eau a sa propre version, appelée <strong>osmose</strong> : l'eau se déplace à travers la membrane vers le côté le plus salé ou le plus sucré — le côté le plus encombré de matière — cherchant à égaliser les choses. C'est pourquoi une plante fanée se ravigote quand on l'arrose, pourquoi tes doigts se plissent dans un long bain, et pourquoi une limace rétrécit si on la saupoudre de sel (s'il te plaît ne le fais pas !). Une cellule gère éternellement ce flux pour éviter soit d'éclater, soit de rétrécir.</p>`,
          facts: [
            { e: '🥒', t: `Sale un concombre et il pleure de l'eau : l'osmose tire l'eau hors des cellules vers la surface salée, et les tranches deviennent molles.` },
            { e: '🫧', t: `La diffusion n'a besoin d'aucune énergie — c'est juste un mouvement aléatoire qui se moyenne. Tes poumons comptent dessus pour faire passer l'oxygène dans ton sang.` },
            { e: '🌱', t: `Une plante fanée se redresse après l'arrosage parce que l'osmose remplit à nouveau ses cellules, les raidissant comme des ballons qui se gonflent.` },
          ],
          formula: null, sim: 'cell',
        },
        student: {
          title: `Diffusion, osmose et tonicité`,
          body: `<p>Les molécules ne sont jamais immobiles ; elles s'agitent d'énergie thermique, et ce mouvement aléatoire a un effet net : la <strong>diffusion</strong>, le mouvement d'une substance de haute à basse concentration le long de son gradient, jusqu'à ce que les concentrations s'égalisent. Elle n'a besoin d'aucun apport d'énergie — elle est entraînée purement par la statistique (l'entropie). À travers une membrane, les petites molécules non polaires (\\(O_2\\), \\(CO_2\\)) diffusent droit à travers la bicouche lipidique, tandis que les ions et les plus grosses molécules polaires ont besoin de canaux protéiques — la diffusion facilitée.</p>
<p>L'<strong>osmose</strong> est la diffusion de l'eau spécifiquement, à travers une membrane semi-perméable qui laisse passer l'eau mais pas le soluté dissous. L'eau se déplace vers la concentration de soluté plus élevée (la concentration d'eau plus basse), car le soluté ne peut pas se déplacer pour équilibrer les choses lui-même. La pression que cela peut générer — la pression osmotique — est \\(\\Pi = iMRT\\) (van 't Hoff) : elle monte avec la concentration et la dissociation du soluté.</p>
<p>Pour une cellule, ce qui compte est la <strong>tonicité</strong> — la concentration de soluté à l'extérieur contre à l'intérieur. Dans une solution <em>isotonique</em> la cellule reste stable. Dans une <em>hypotonique</em> (diluée), l'eau déferle et une cellule animale peut gonfler et éclater — une cellule végétale est sauvée par sa paroi rigide. Dans une <em>hypertonique</em> (concentrée), l'eau jaillit dehors et la cellule rétrécit. C'est pourquoi une perfusion doit être soigneusement isotonique, et pourquoi les poissons d'eau douce et d'eau salée mènent des batailles exactement opposées.</p>`,
          facts: [
            { e: '💉', t: `Les perfusions doivent être isotoniques (~0,9% de solution salée). De l'eau pure dans une veine ferait gonfler et éclater les globules rouges par osmose.` },
            { e: '🐟', t: `Les poissons d'eau douce écopent constamment l'eau qui déferle par osmose ; ceux d'eau salée font l'inverse, buvant pour combattre la perte d'eau.` },
            { e: '🧅', t: `Les parois cellulaires laissent les cellules végétales reposer dans l'eau pure sans éclater : elles gonflent jusqu'à ce que la paroi repousse (turgescence), gardant les tiges droites.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Diffusion (loi de Fick)', e: 'J = -D\\,\\dfrac{dC}{dx}' },
            { n: 'Pression osmotique', e: '\\Pi = iMRT', c: "van 't Hoff" },
            { sep: 1 },
            { n: 'Hypotonique', e: 'C_{\\text{out}} < C_{\\text{in}} \\Rightarrow \\text{eau entre (gonfle)}' },
            { n: 'Hypertonique', e: 'C_{\\text{out}} > C_{\\text{in}} \\Rightarrow \\text{eau sort (rétrécit)}' },
          ] }, sim: 'cell',
        },
        scholar: {
          title: `Transport membranaire, des gradients passifs aux pompes actives`,
          body: `<h4><span class="hn">01</span>La membrane à mosaïque fluide</h4>
<p>La membrane est une bicouche phospholipidique — un cœur hydrophobe pris en sandwich entre des têtes hydrophiles — parsemée de protéines qui dérivent latéralement en son sein (le modèle de Singer-Nicolson, 1972). La bicouche elle-même est la barrière ; les protéines incrustées sont les portails, transporteurs et pompes qui la rendent sélective.</p>
<h4><span class="hn">02</span>Transport passif et loi de Fick</h4>
<p>La diffusion porte un flux \\(J = -D\\,dC/dx\\), proportionnel au gradient de concentration et au coefficient de diffusion \\(D\\). Aucun ATP n'est dépensé — le gradient est le carburant. La diffusion facilitée ajoute simplement des canaux ou transporteurs qui élèvent le \\(D\\) effectif pour des solutés spécifiques, mais le flux court toujours en descente.</p>
<h4><span class="hn">03</span>Osmose et potentiel hydrique</h4>
<p>La physiologie végétale encadre l'osmose via le potentiel hydrique \\(\\Psi = \\Psi_s + \\Psi_p\\) (un terme de soluté plus un terme de pression) ; l'eau coule de \\(\\Psi\\) élevé vers bas. Turgescence, flétrissement et ouverture des stomates sont tous \\(\\Psi\\) à l'œuvre, et la pression osmotique \\(\\Pi = iMRT\\) est précisément sa composante de soluté.</p>
<h4><span class="hn">04</span>Transport actif et gradients électrochimiques</h4>
<p>Des pompes comme la Na⁺/K⁺-ATPase brûlent de l'ATP pour pousser les ions <em>contre</em> leurs gradients, bâtissant les gradients électrochimiques qui alimentent les impulsions nerveuses et le transport secondaire — le cotransport du glucose, par exemple, chevauche le gradient du sodium à nouveau en descente. Environ un cinquième de ton budget énergétique au repos est dépensé à faire tourner ces pompes.</p>
<h4><span class="hn">05</span>Transport en masse</h4>
<p>Les molécules trop grosses pour tout canal entrent par endocytose, la membrane les englobant dans une vésicule, et sortent par exocytose. C'est ainsi que les cellules importent le cholestérol, que les cellules immunitaires avalent les pathogènes, et que les neurones libèrent leurs transmetteurs — le trafic membranaire comme logistique cellulaire.</p>`,
          facts: [
            { e: '🔋', t: `La pompe Na⁺/K⁺ utilise environ 20-25% de ton énergie au repos, déplaçant 3 Na⁺ dehors et 2 K⁺ dedans par ATP pour garder les cellules chargées.` },
            { e: '🧠', t: `Chaque impulsion nerveuse dépense le gradient électrochimique bâti par les pompes ioniques — penser est, au fond, de la diffusion ionique contrôlée.` },
            { e: '🍬', t: `Ton intestin absorbe le glucose par cotransport, l'accrochant au sodium qui coule le long du gradient que la pompe Na⁺/K⁺ maintient.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Flux de diffusion', e: 'J = -D\\,\\dfrac{dC}{dx}', c: 'première loi de Fick' },
            { n: 'Potentiel hydrique', e: '\\Psi = \\Psi_s + \\Psi_p' },
            { sep: 1 },
            { n: 'Pression osmotique', e: '\\Pi = iMRT' },
            { n: 'Pompe Na⁺/K⁺', e: '3\\,Na^+_{\\text{out}} + 2\\,K^+_{\\text{in}} \\ \\text{par ATP}' },
          ] }, sim: 'cell',
        },
      },
    },
    mitosis: {
      title: 'Mitose et méiose',
      teaser: 'Une cellule devient deux — ou quatre. Comment la vie se copie, répare un corps et brasse la génération suivante.',
      chips: ['Division cellulaire', 'Chromosomes', 'ADN'],
      lvls: {
        junior: {
          title: `Comment une cellule devient deux`,
          body: `<p>Tu as commencé comme une seule cellule. Maintenant tu es fait de dizaines de milliers de milliards — et chacune est venue de cette première cellule qui s'est divisée, encore et encore. Cette copie s'appelle la <strong>division cellulaire</strong>, et elle se produit en toi en ce moment même : guérissant une coupure, remplaçant la peau usée et la paroi intestinale, faisant pousser tes cheveux et tes ongles. La version de tous les jours, qui fait deux copies identiques, s'appelle la <strong>mitose</strong>.</p>
<p>Le plus dur, ce sont les instructions. Chaque cellule porte un jeu complet d'ADN, empaqueté en <strong>chromosomes</strong>, et avant de se diviser elle doit copier chacun parfaitement — puis répartir les copies pour que chaque nouvelle cellule finisse avec un jeu complet, ni plus ni moins. La mitose est la danse soigneusement chorégraphiée qui aligne les copies et les tire à part uniformément. Rate-la et les cellules finissent avec trop ou trop peu de chromosomes.</p>
<p>Il existe un second type de division, la <strong>méiose</strong>, réservé à faire des ovules et des spermatozoïdes. Au lieu de deux cellules identiques elle en fait quatre, chacune avec la moitié de l'ADN et brassée en combinaisons nouvelles — c'est pourquoi tu ressembles à tes parents mais n'es le clone d'aucun. La mitose bâtit et répare un corps ; la méiose fabrique les cellules qui transmettent la vie à la génération suivante.</p>`,
          facts: [
            { e: '✂️', t: `Tu perds et remplaces des dizaines de milliers de cellules de peau chaque minute — toutes faites par la mitose qui copie des cellules existantes.` },
            { e: '🧬', t: `Avant de se diviser, une cellule humaine copie les 2 mètres entiers d'ADN empaquetés dans ses 46 chromosomes — avec étonnamment peu d'erreurs.` },
            { e: '👶', t: `La méiose brasse les gènes de tes parents en nouvelles combinaisons, c'est pourquoi les frères et sœurs diffèrent — tu n'es la copie d'aucun parent.` },
          ],
          formula: null, sim: 'mitosis',
        },
        student: {
          title: `Les phases de la mitose, et en quoi la méiose diffère`,
          body: `<p>Une cellule qui se divise exécute un cycle : elle grandit et copie son ADN pendant l'<em>interphase</em>, puis se divise dans la phase mitotique. La mitose elle-même a quatre étapes chorégraphiées. <strong>Prophase</strong> : les chromosomes copiés se condensent en formes en X visibles — deux chromatides sœurs identiques jointes à un centromère — et un fuseau de microtubules s'assemble. <strong>Métaphase</strong> : les chromosomes s'alignent en file indienne le long de l'équateur de la cellule. <strong>Anaphase</strong> : le fuseau tire les chromatides sœurs à part vers des pôles opposés. <strong>Télophase</strong> : les noyaux se reforment autour de chaque jeu, et la cellule s'étrangle en deux (cytocinèse).</p>
<p>Le résultat est deux cellules filles diploïdes génétiquement identiques, chacune avec le compte complet de chromosomes (46 chez l'humain). Des points de contrôle surveillent tout le processus — la cellule ne procède pas à moins que son ADN soit intact et chaque chromosome correctement attaché. Quand ces freins lâchent, les cellules se divisent sans contrôle, ce qui est l'essence du cancer.</p>
<p>La <strong>méiose</strong>, qui fait les gamètes, exécute le machinage deux fois avec une torsion. Elle commence en appariant les chromosomes homologues (un de chaque parent) et en échangeant des segments entre eux — le <em>crossing-over</em> — puis sépare les homologues en méiose I et les chromatides sœurs en méiose II. Le résultat est quatre cellules haploïdes, chacune avec la moitié des chromosomes (23) et un brassage unique de gènes. Ce brassage, avec l'assortiment aléatoire des chromosomes, est le moteur de la variété génétique.</p>`,
          facts: [
            { e: '🔬', t: `La mitose produit deux cellules génétiquement identiques ; la méiose en produit quatre génétiquement uniques, chacune avec la moitié de l'ADN.` },
            { e: '🎗️', t: `Le cancer est une mitose incontrôlée : des cellules qui ignorent les points de contrôle censés arrêter une division endommagée ou indésirable.` },
            { e: '🔀', t: `Le crossing-over échange de l'ADN entre chromosomes appariés en méiose, mélangeant les gènes de tes parents en combinaisons toutes nouvelles.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Produit de la mitose', e: '2n \\to 2n + 2n', c: 'deux cellules diploïdes identiques' },
            { n: 'Produit de la méiose', e: '2n \\to n + n + n + n', c: 'quatre cellules haploïdes uniques' },
            { sep: 1 },
            { n: 'Chromosomes humains', e: '2n = 46,\\quad n = 23' },
          ] }, sim: 'mitosis',
        },
        scholar: {
          title: `Mécanique des chromosomes, cycle cellulaire, variation et cancer`,
          body: `<h4><span class="hn">01</span>Le cycle cellulaire et ses points de contrôle</h4>
<p>La division est une étape d'un cycle : \\(G_1 \\to S\\) (réplication de l'ADN) \\(\\to G_2 \\to M\\), entraîné par les cyclines et les kinases cyclines-dépendantes. Les points de contrôle (G1/S, G2/M, et le point de contrôle d'assemblage du fuseau) arrêtent le cycle jusqu'à ce que les conditions soient bonnes, et p53 — « le gardien du génome » — déclenche la réparation ou la mort programmée quand l'ADN est endommagé.</p>
<h4><span class="hn">02</span>Le fuseau et la ségrégation des chromosomes</h4>
<p>Un kinétochore sur chaque centromère capture les microtubules du fuseau, et le point de contrôle d'assemblage du fuseau bloque l'anaphase jusqu'à ce que chaque chromosome soit bi-orienté, attaché aux deux pôles. Seulement alors la cohésine qui tient les sœurs ensemble est clivée, et elles se séparent d'un coup. Les erreurs ici produisent l'<em>aneuploïdie</em> — le mauvais nombre de chromosomes.</p>
<h4><span class="hn">03</span>La méiose et les sources de variation</h4>
<p>La méiose I est <em>réductionnelle</em> — les homologues se séparent, divisant le compte par deux ; la méiose II est <em>équationnelle</em> — les sœurs se séparent, comme en mitose. Deux brasseurs indépendants créent la variété : le crossing-over recombine les homologues, et le seul assortiment indépendant des 23 paires donne \\(2^{23} \\approx 8.4\\) millions de combinaisons par gamète, avant même de compter la recombinaison.</p>
<h4><span class="hn">04</span>Quand la division tourne mal</h4>
<p>Le cancer est fondamentalement une maladie du cycle cellulaire : des mutations dans les oncogènes (les accélérateurs) et les suppresseurs de tumeurs (les freins, comme p53 et RB) laissent les cellules se diviser sans permission et ignorer leurs points de contrôle. L'aneuploïdie par mauvaise ségrégation — la trisomie 21, par exemple — montre le coût abrupt d'un seul chromosome en trop.</p>
<h4><span class="hn">05</span>Au-delà du manuel</h4>
<p>Les cellules peuvent aussi mourir exprès (apoptose), cesser de se diviser pour de bon (sénescence, liée au raccourcissement des télomères à chaque division), et réaffecter le même machinage à la régénération. L'équilibre entre se diviser et se retenir est exactement ce qui empêche un corps de mille milliards de cellules soit de dépérir, soit de s'emballer.</p>`,
          facts: [
            { e: '🧬', t: `Le seul assortiment indépendant donne 2²³ ≈ 8,4 millions de combinaisons de chromosomes par gamète humain — avant que le crossing-over n'en ajoute encore plus.` },
            { e: '🛡️', t: `p53, le « gardien du génome », arrête la division pour réparer l'ADN ou déclenche le suicide cellulaire. Il est muté dans environ la moitié de tous les cancers.` },
            { e: '⏳', t: `Chaque division raccourcit les coiffes télomériques de tes chromosomes ; quand elles s'épuisent la cellule cesse de se diviser — une limite intégrée liée au vieillissement.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Le cycle cellulaire', e: 'G_1 \\to S \\to G_2 \\to M' },
            { sep: 1 },
            { n: 'Mitose contre méiose', e: '2n \\to 2n\\ (\\times 2) \\quad\\text{vs}\\quad 2n \\to n\\ (\\times 4)' },
            { n: 'Assortiment indépendant', e: '2^{n} = 2^{23} \\approx 8.4\\times10^{6}', c: 'combinaisons par gamète' },
          ] }, sim: 'mitosis',
        },
      },
    },
    punnett: {
      title: 'Échiquiers de Punnett et génétique',
      teaser: 'Croise deux parents et prédis les enfants — la petite grille que Mendel construisit à partir d\'un jardin de pois.',
      chips: ['Génétique', 'Allèles', 'Hérédité'],
      lvls: {
        junior: {
          title: `Prédire à quoi ressemblera la descendance`,
          body: `<p>Pourquoi as-tu la couleur d'yeux que tu as ? Tu as hérité d'instructions — les <strong>gènes</strong> — de tes deux parents, une copie de chacun. Pour de nombreux traits, une version d'un gène est <strong>dominante</strong> (elle se manifeste si tu en as ne serait-ce qu'une copie) et l'autre est <strong>récessive</strong> (elle ne se manifeste que si tu en as deux). Un <strong>échiquier de Punnett</strong> est une simple grille qui prédit les probabilités de ce qu'un enfant héritera — et Gregor Mendel déduisit tout cela dans les années 1860 en élevant des milliers de plants de pois.</p>
<p>Disons qu'un gène vient en une version dominante « A » et une récessive « a ». Chaque parent porte deux copies et en passe une, au hasard, à l'enfant. L'échiquier de Punnett liste les deux options d'un parent en haut et celles de l'autre parent sur le côté, puis remplit chaque combinaison possible. Soudain tu peux voir tous les enfants possibles, et à quel point chacun est probable.</p>
<p>Le résultat classique : croise deux parents qui portent chacun un gène dominant et un récessif (Aa × Aa) et leurs enfants sortent, en moyenne, <strong>3 montrant le trait dominant pour 1 montrant le récessif</strong> — le fameux rapport 3:1. Il ne te dit pas exactement ce que sera un enfant en particulier (c'est la chance), mais sur de nombreux enfants le rapport tient, tout comme lancer des pièces.</p>`,
          facts: [
            { e: '🌱', t: `Gregor Mendel trouva les règles de l'hérédité dans les années 1860 en élevant ~28 000 plants de pois — des décennies avant que quiconque sache que l'ADN existait.` },
            { e: '🎲', t: `Un échiquier de Punnett donne des probabilités, pas des certitudes : un rapport 3:1 est la moyenne sur de nombreux descendants, comme des lancers de pièce, pas une promesse pour un enfant.` },
            { e: '👁️', t: `Un trait récessif peut sauter des générations, se cachant chez des porteurs avec une copie, pour réapparaître quand deux porteurs ont un enfant.` },
          ],
          formula: null, sim: 'punnett',
        },
        student: {
          title: `Allèles, génotype, phénotype et l'échiquier`,
          body: `<p>Le vocabulaire d'abord. Un gène peut exister en différentes versions appelées <strong>allèles</strong>, et tu en portes deux de chaque (un par parent). Ton <strong>génotype</strong> est la paire que tu as (AA, Aa ou aa) ; ton <strong>phénotype</strong> est le trait qui se manifeste réellement. Un allèle dominant (A) masque un récessif (a), donc AA et Aa montrent tous deux le phénotype dominant, tandis que seul aa montre le récessif. AA et aa sont <em>homozygotes</em> ; Aa est <em>hétérozygote</em> — un porteur.</p>
<p>La méiose divise la paire, donc chaque parent passe un seul allèle, choisi au hasard — la <strong>loi de ségrégation</strong> de Mendel. L'échiquier de Punnett est simplement un tableau de ce hasard : les deux allèles d'un parent en colonnes, ceux de l'autre en lignes, et chacune des quatre cases un génotype de descendant également probable. Compte-les pour les rapports prédits.</p>
<p>Les croisements emblématiques : Aa × Aa donne un rapport génotypique <strong>1:2:1</strong> (AA:Aa:aa) et un rapport phénotypique <strong>3:1</strong> (dominant:récessif). Un croisement-test contre un récessif (Aa × aa) donne 1:1 — c'est ainsi que l'on révèle si un individu d'apparence dominante est AA ou Aa. Les traits sur deux gènes différents s'assortissent indépendamment (deuxième loi de Mendel), donnant le fameux 9:3:3:1 d'un croisement dihybride.</p>`,
          facts: [
            { e: '🔬', t: `AA et Aa se ressemblent (tous deux montrent le trait dominant). Un croisement-test avec aa les distingue — un résultat 1:1 signifie que le parent était Aa.` },
            { e: '🧬', t: `Les deux lois de Mendel : les allèles se ségrègent (un par gamète), et différents gènes s'assortissent indépendamment — toutes deux expliquées plus tard par la méiose.` },
            { e: '🌸', t: `Le classique croisement Aa × Aa donne un rapport phénotypique 3:1 mais un rapport génotypique 1:2:1 — les mêmes quatre cases, comptées de deux façons.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Génotypes', e: 'AA,\\ Aa,\\ aa' },
            { n: 'Phénotype', e: 'A\\_ \\to \\text{dominant},\\quad aa \\to \\text{récessif}' },
            { sep: 1 },
            { n: 'Aa × Aa', e: '1\\,AA : 2\\,Aa : 1\\,aa \\;\\Rightarrow\\; 3:1' },
            { n: 'Croisement-test', e: 'Aa \\times aa \\to 1:1' },
          ] }, sim: 'punnett',
        },
        scholar: {
          title: `Au-delà de la dominance simple`,
          body: `<h4><span class="hn">01</span>Quand un gène n'est pas toute l'histoire</h4>
<p>La dominance incomplète (l'hétérozygote est un mélange, comme une fleur rose), la codominance (les deux allèles se manifestent d'un coup, comme le groupe sanguin AB) et les allèles multiples (le gène ABO en a trois dans la population) brisent tous le tableau net dominant/récessif — tout en obéissant à la même ségrégation des allèles dans les gamètes.</p>
<h4><span class="hn">02</span>Liaison et recombinaison</h4>
<p>Les gènes proches sur le même chromosome tendent à être hérités ensemble — <em>liés</em> — violant l'assortiment indépendant, à moins que le crossing-over ne les sépare. La fréquence de cette séparation mesure la distance entre les gènes, ce qui est exactement comment furent dessinées les premières cartes génétiques.</p>
<h4><span class="hn">03</span>Liaison au sexe et arbres généalogiques</h4>
<p>Les gènes sur le chromosome X (daltonisme, hémophilie) montrent des schémas différents chez les mâles et les femelles, car les mâles n'ont qu'un seul X. L'analyse d'arbres généalogiques applique la même logique de Punnett à travers un arbre familial pour tracer, et prédire, les affections héréditaires.</p>
<h4><span class="hn">04</span>Des rapports aux populations</h4>
<p>Le <strong>principe de Hardy-Weinberg</strong> met Mendel à l'échelle d'un croisement à une population entière, prédisant les fréquences alléliques et génotypiques via \\(p^2 + 2pq + q^2 = 1\\). C'est la ligne de base du « rien ne change » contre laquelle on détecte la vraie évolution — sélection, dérive, migration.</p>`,
          facts: [
            { e: '🩸', t: `Le groupe sanguin ABO montre codominance et allèles multiples : A et B sont tous deux exprimés dans le type AB, et trois allèles circulent dans la population.` },
            { e: '🗺️', t: `La fréquence de séparation de deux gènes par crossing-over mesure la distance entre eux — le principe derrière les premières cartes géniques.` },
            { e: '📊', t: `L'équation de Hardy-Weinberg prédit les fréquences génotypiques dans une population qui n'évolue pas — la ligne de base qui rend l'évolution mesurable.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Monohybride (Aa × Aa)', e: '3:1\\ \\text{phénotype},\\quad 1:2:1\\ \\text{génotype}' },
            { n: 'Croisement dihybride', e: '9:3:3:1' },
            { sep: 1 },
            { n: 'Hardy-Weinberg', e: 'p^2 + 2pq + q^2 = 1' },
          ] }, sim: 'punnett',
        },
      },
    },
    life: {
      title: 'Les règles de la vie',
      teaser: 'Comment 37 000 milliards de cellules se coordonnent-elles parfaitement — sans que personne ne donne d\'ordres ?',
      chips: ['Cellules', 'Émergence', 'Évolution'],
      lvls: {
        junior: {
          title: `De minuscules cellules qui bâtissent une grande vie !`,
          body: `<p>Chaque partie de toi — cerveau, mains, cœur — est bâtie de minuscules briques vivantes appelées <strong>cellules</strong>, bien trop petites pour être vues sans microscope. Aligne-les et un seul cheveu humain ne fait qu'environ dix cellules de large. En ce moment même, à peu près <em>37 000 milliards</em> d'entre elles travaillent ensemble, cette seconde précise, pour te maintenir à respirer, penser, ressentir et bouger.</p>
<p>Et voici ce qui laisse bouche bée : pas une de ces cellules n'est aux commandes. Chacune suit simplement quelques règles chimiques selon ce que font ses voisines immédiates — et pourtant, ensemble, elles bâtissent un cœur qui bat pendant un siècle, un cerveau qui rêve, un système immunitaire qui se souvient de chaque maladie que tu as jamais eue. Quand de simples règles locales s'accumulent en une stupéfiante complexité collective, on appelle cela l'<strong>émergence</strong>, et c'est l'une des énigmes les plus profondes de toute la science.</p>
<p>Dans la simulation ci-dessous, chaque carré coloré représente une simple cellule obéissant à seulement quatre règles sur ses voisines. Regarde des <em>planeurs</em> ramper sur la grille et des clignotants s'allumer et s'éteindre — rien de planifié, tout jaillissant de ces quatre règles seules. Puis imagine ce qui se passe avec des milliers de milliards de vrais types cellulaires, chacun jonglant avec des milliers de signaux chimiques à la fois.</p>`,
          facts: [
            { e: '🔴', t: `Ton corps fabrique 2 millions de nouveaux globules rouges par seconde pour remplacer les vieux — soit 170 milliards par jour !` },
            { e: '🧠', t: `Ton cerveau a 86 milliards de neurones et une estimation de 100 000 milliards de connexions — plus que toutes les étoiles de la Voie lactée.` },
            { e: '🦠', t: `Les bactéries de ton intestin dépassent en nombre tes cellules humaines d'environ 1,3 pour 1. Tu es littéralement plus microbe qu'humain, par le compte des cellules !` },
          ],
          formula: null, sim: 'life',
        },
        student: {
          title: `Le Jeu de la vie de Conway et la complexité émergente`,
          body: `<p>Un automate cellulaire est une grille de cellules qui se mettent toutes à jour d'un coup, pas à pas, chacune obéissant à la même règle locale. Le <strong>Jeu de la vie</strong> de John Conway (1970) est le plus célèbre, et tout son règlement tient en quatre lignes qui comptent simplement combien des huit voisines d'une cellule sont vivantes :</p>
<ul>
<li><strong>Sous-population :</strong> une cellule vivante avec moins de 2 voisines vivantes meurt</li>
<li><strong>Survie :</strong> une cellule vivante avec 2 ou 3 voisines vivantes continue de vivre</li>
<li><strong>Surpopulation :</strong> une cellule vivante avec plus de 3 voisines vivantes meurt</li>
<li><strong>Reproduction :</strong> une cellule morte avec exactement 3 voisines vivantes prend vie</li>
</ul>
<p>De ces quatre lignes surgit tout un bestiaire. Les <strong>planeurs</strong> se promènent en diagonale pour toujours, les <strong>oscillateurs</strong> pulsent sur place, les <strong>canons à planeurs</strong> en tirent un flux sans fin. La vraie bombe tomba en 2000, quand Paul Rendell construisit une machine de Turing universelle fonctionnelle <em>dans</em> la grille — ce qui signifie que tout ce que ton ordinateur portable peut calculer, un motif de carrés clignotants peut le calculer aussi. Un ordinateur complet, tournant dans un jouet fait de points.</p>
<p>Cela mérite une pause. Si le calcul universel peut bouillonner à partir de quatre règles triviales sur un damier, alors peut-être la vertigineuse complexité des êtres vivants — cellules, corps, écosystèmes entiers — n'a-t-elle besoin d'aucune étincelle secrète ni essence vitale. Ce pourrait n'être que le fruit quasi inévitable de simples règles locales, chimiques plutôt que numériques, se déployant à une échelle assez grande.</p>`,
          facts: [
            { e: '🐝', t: `Les essaims d'abeilles choisissent collectivement une nouvelle maison sans chef central — les éclaireuses dansent la « danse frétillante » pour vanter des sites, et un quorum émerge naturellement.` },
            { e: '🐚', t: `Les motifs sur les coquillages (rayures, taches, spirales) naissent d'une réaction-diffusion de type automate cellulaire 1D dans le tissu du manteau.` },
            { e: '⚗️', t: `La réaction de Belousov-Zhabotinsky produit des ondes chimiques en spirale dans une coupelle — un automate cellulaire continu du monde réel.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Survie', e: '2 \\text{ ou } 3 \\text{ voisines vivantes} \\to \\text{vit}', c: 'sinon meurt' },
            { n: 'Naissance', e: '\\text{exactement } 3 \\text{ voisines vivantes} \\to \\text{naît}', c: 'sinon reste morte' },
            { sep: 1 },
            { n: 'Complétude de Turing', e: '\\text{Jeu de la vie} \\equiv \\text{Machine de Turing universelle}', c: 'Rendell, 2000' },
            { n: 'Règle 110 (1D)', e: '\\text{Règle 110} \\equiv \\text{MTU}', c: 'la plus simple Turing-complète connue' },
          ] }, sim: 'life',
        },
        scholar: {
          title: `Motifs de Turing, systèmes de réaction-diffusion et morphogenèse`,
          body: `<h4><span class="hn">01</span>L'autre grande idée de Turing : comment le léopard obtient ses taches</h4>
<p>Le même Alan Turing qui fonda l'informatique passa ses dernières années sur la biologie, et en 1952 proposa quelque chose d'audacieux : que les motifs sur les animaux — rayures, taches, verticilles — n'ont besoin d'aucun plan, seulement de chimie. Son mécanisme utilise deux <em>morphogènes</em> qui diffusent, un <strong>activateur</strong> \\(u\\) qui alimente à la fois lui-même et un <strong>inhibiteur</strong> \\(v\\) qui à son tour supprime \\(u\\). Le tour crucial est un décalage de vitesse : l'inhibiteur doit diffuser bien plus vite que l'activateur, \\(D_v \\gg D_u\\). « Activation locale, inhibition à longue portée » est tout le secret.</p>
<h4><span class="hn">02</span>Les équations de réaction-diffusion</h4>
<p>Mis par écrit, c'est un couple d'équations aux dérivées partielles couplées : \\(\\partial_t u = D_u \\nabla^2 u + f(u,v)\\) et \\(\\partial_t v = D_v \\nabla^2 v + g(u,v)\\), où les termes \\(\\nabla^2\\) étalent chaque substance et \\(f, g\\) encodent comment elles réagissent. Rien d'exotique — diffusion plus une réaction chimique, les deux processus les plus ordinaires d'une cellule. La magie est entièrement dans la façon dont ils interagissent.</p>
<h4><span class="hn">03</span>Le paradoxe : une diffusion qui <em>crée</em> de la structure</h4>
<p>Voici ce qui le rend contre-intuitif. La diffusion efface normalement les différences — verse de l'encre dans l'eau et elle vire à un gris uniforme. Pourtant un état stationnaire uniforme \\((u_0, v_0)\\) parfaitement stable en soi peut être basculé en motifs en ajoutant la diffusion. C'est l'<strong>instabilité de Turing</strong>. Perturbe-le avec une onde \\(\\propto e^{\\sigma t + ikx}\\), linéarise, et certains nombres d'onde \\(k\\) acquièrent \\(\\mathrm{Re}(\\sigma) > 0\\) — ils croissent au lieu de s'estomper. La diffusion, la grande homogénéisatrice, devient le moteur de la structure.</p>
<h4><span class="hn">04</span>La longueur d'onde cuite dans la chimie</h4>
<p>Toutes les ondes ne croissent pas également ; un nombre d'onde dominant \\(k^*\\) devance les autres et imprime sa propre échelle sur le tissu, fixant une longueur d'onde caractéristique du motif \\(\\lambda^* = 2\\pi/k^*\\). Ce seul nombre est pourquoi taches et rayures viennent dans une taille préférée plutôt que n'importe laquelle, et pourquoi le rapport des vitesses de diffusion — non un plan directeur — dicte si un animal finit tacheté ou rayé.</p>
<h4><span class="hn">05</span>La nature prise sur le fait</h4>
<p>Pendant des décennies ce fut une élégante spéculation ; puis les preuves moléculaires affluèrent. On montra que les rayures du poisson-zèbre suivent un mécanisme de Turing (Nakamasu et al., 2009), l'espacement des doigts de la souris fut relié à un système de réaction-diffusion BMP–récepteur (Sheth et al., 2012), et des knock-in qui altèrent la diffusivité des morphogènes transforment taches en rayures exactement comme les maths le prédisent. Le mécanisme apparaît désormais dans l'espacement des follicules pileux, les crêtes du palais et la pigmentation des plumes. Turing décrivit la chimie dix-sept ans avant qu'on sache ce qu'était un morphogène.</p>
<h4><span class="hn">06</span>Discret et continu, tous deux au bord du chaos</h4>
<p>Le Jeu de Conway et la chimie de Turing sont la même idée en deux costumes : la Vie est faite de cellules discrètes en temps discret, les systèmes de Turing sont des concentrations lisses en espace continu, et tous deux sont des <em>milieux excitables</em> où des règles locales engendrent une forme globale. Les quatre classes d'automates cellulaires de Wolfram — se calant, cyclant, chaotiques et complexes — les placent sur une même carte, et l'on conjecture que les systèmes complexes de « classe IV » comme la Vie sont génériquement Turing-complets. L'indice récurrent est que le calcul riche et le motif riche vivent à la même adresse : le bord du chaos.</p>`,
          facts: [
            { e: '🐆', t: `La taille des taches du léopard est réglée par le rapport de diffusion de Turing — chez des souris knock-in à diffusivité des morphogènes altérée, les taches se changent en rayures de façon prévisible.` },
            { e: '🤖', t: `Un ordinateur Jeu-de-la-vie pleinement fonctionnel (capable d'exécuter tout programme) a été construit dans la simulation et est documenté sur le LifeWiki.` },
            { e: '🔬', t: `Le knockout CRISPR de récepteurs de morphogènes spécifiques produit les transitions rayures-taches exactes prédites par les modèles de Turing chez le poisson-zèbre.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'EDP de l\'activateur', e: '\\partial_t u = D_u \\nabla^2 u + f(u,v)' },
            { n: 'EDP de l\'inhibiteur', e: '\\partial_t v = D_v \\nabla^2 v + g(u,v)' },
            { sep: 1 },
            { n: 'Instabilité de Turing', e: '\\det(J - k^2 D) = 0 \\text{ pour un certain } k \\ne 0' },
            { n: 'Condition nécessaire', e: 'D_v / D_u \\gg 1', c: 'inhibiteur rapide' },
            { sep: 1 },
            { n: 'Longueur d\'onde du motif', e: '\\lambda^* = 2\\pi / k^*', c: 'k* = argmax σ(k)' },
            { n: 'Relation de dispersion', e: '\\sigma(k) = \\tfrac{1}{2}\\!\\left[\\mathrm{tr}(J) - (D_u+D_v)k^2 \\pm \\sqrt{\\Delta}\\right]' },
          ] }, sim: 'life',
        },
      },
    },
    dna: {
      title: 'ADN et génétique',
      teaser: 'Chaque cellule de ton corps porte un manuel d\'instructions long de 2 mètres, écrit dans un alphabet de 4 lettres, qui fait de toi uniquement toi.',
      chips: ['ADN', 'Gènes', 'Hérédité'],
      lvls: {
        junior: {
          title: `Le manuel d'instructions dans chaque cellule !`,
          body: `<p>Niché dans presque chacune de tes 37 000 milliards de cellules se trouve un jeu complet d'instructions pour construire et faire fonctionner un être humain entier. Elles sont écrites sur une molécule torsadée, en forme d'échelle, appelée <strong>ADN</strong>. Déroule l'ADN d'une seule cellule et il s'étend sur environ <strong>deux mètres</strong> — et pourtant il est si incroyablement fin qu'il se replie dans un espace plus petit que le point qui termine cette phrase.</p>
<p>Tout le manuel est écrit dans un alphabet de seulement <strong>quatre lettres</strong> — A, T, C et G — et le tien en compte environ 3,2 milliards. Des tronçons significatifs de ce texte s'appellent des <strong>gènes</strong>, et la plupart des gènes sont la recette d'une protéine. Les protéines sont la main-d'œuvre du corps : elles bâtissent tes muscles, transportent l'oxygène dans ton sang, digèrent ton déjeuner et combattent les maladies.</p>
<p>Le plus fou, c'est la copie. Chaque fois qu'une cellule se divise, les 3,2 milliards de lettres sont transcrits — avec précision — en quelques heures, avec seulement environ une erreur par milliard de lettres. C'est comme copier à la main trois mille livres en faisant un grand total de trois fautes de frappe. Dans la simulation ci-dessous, regarde la double hélice s'ouvrir comme une fermeture éclair et se répliquer en temps réel.</p>`,
          facts: [
            { e: '📏', t: `Tout l'ADN de ton corps, mis bout à bout, s'étendrait de la Terre à Pluton et retour — deux fois. Tu portes environ 70 milliards de kilomètres d'ADN.` },
            { e: '👯', t: `Tu partages 99,9% de ton ADN avec tout autre humain sur Terre. La différence de 0,1% — environ 3 millions de lettres — est ce qui te rend unique.` },
            { e: '🍌', t: `Tu partages 60% de ton ADN avec une banane. La vie sur Terre est étonnamment apparentée — tous les organismes utilisent le même code ADN à 4 lettres.` },
          ],
          formula: null, sim: 'dna',
        },
        student: {
          title: `Réplication, transcription, traduction de l'ADN et génétique mendélienne`,
          body: `<p>La <strong>double hélice</strong> de l'ADN (Watson et Crick, 1953) est faite de deux brins antiparallèles fermés comme une fermeture éclair par des bases complémentaires : A avec T (deux liaisons hydrogène), C avec G (trois). Chaque brin court \\(5'\\!\\to\\!3'\\), et cet appariement est tout le tour de la copie — chaque brin est un patron pour reconstruire l'autre. La <strong>réplication</strong> est semi-conservative : l'hélicase déroule l'échelle, la primase pose des amorces, et l'ADN polymérase construit le nouveau brin \\(5'\\!\\to\\!3'\\), donnant un brin directeur lisse et un brin retardé cousu par morceaux. La fidélité atteint \\(\\sim\\!10^{-9}\\) erreurs par base, car la polymérase relit son propre travail et la réparation des mésappariements ramasse le reste.</p>
<p>Le <strong>dogme central</strong> (Crick, 1958) fixe le flux d'information : \\(\\text{ADN} \\to \\text{ARN} \\to \\text{protéine}\\). Dans la <em>transcription</em>, l'ARN polymérase lit un gène en ARN messager, les introns sont épissés, et le message est coiffé et pourvu d'une queue. Dans la <em>traduction</em>, les ribosomes rampent le long de l'ARNm en lisant des <strong>codons</strong> de trois lettres, chacun appelant un acide aminé particulier via le code génétique — 64 codons couvrant 20 acides aminés plus trois signaux « stop » — tandis que les ARNt font la navette des briques.</p>
<p>Bien avant que ce machinage moléculaire ne soit connu, <strong>Mendel</strong> (1866) déduisit la logique des seuls plants de pois. Les gènes viennent en deux copies (<em>allèles</em>), une de chaque parent, et les allèles dominants cachent les récessifs. Croise deux porteurs, \\(Aa \\times Aa\\), et la descendance tombe en \\(1\\!:\\!2\\!:\\!1\\) par génotype et \\(3\\!:\\!1\\) par apparence — des rapports que tu peux vérifier contre des comptes réels avec une statistique du khi-deux \\(\\chi^2 = \\sum (O-E)^2/E\\). L'hérédité réelle empile ensuite les complications que les pois cachaient commodément : codominance, mélange, et traits poussés par des centaines de gènes à la fois.</p>`,
          facts: [
            { e: '✂️', t: `CRISPR-Cas9 peut modifier une séquence spécifique parmi 3,2 milliards de paires de bases avec la précision de trouver et changer un mot dans une bibliothèque de 1 000 livres.` },
            { e: '👴', t: `Les télomères — coiffes protectrices aux extrémités des chromosomes — raccourcissent à chaque division cellulaire. Leur longueur est une horloge moléculaire du vieillissement.` },
            { e: '🎨', t: `Couleur des yeux, taille et QI sont tous polygéniques — influencés par des centaines de gènes simultanément, non par une seule paire dominant/récessif.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Appariement des bases', e: 'A\\!=\\!T \\;(2\\text{ liaisons H}),\\quad G\\!\\equiv\\!C \\;(3\\text{ liaisons H})' },
            { n: 'Brins antiparallèles', e: "\\text{5'-ATCG-3'} \\;\\leftrightarrow\\; \\text{3'-TAGC-5'}" },
            { sep: 1 },
            { n: 'Fidélité de réplication', e: '\\sim 1 \\text{ erreur} / 10^{9} \\text{ bp}', c: 'avec relecture' },
            { n: 'Dogme central', e: '\\text{ADN} \\to \\text{ARNm} \\to \\text{protéine}' },
            { sep: 1 },
            { n: 'Code génétique', e: '64 \\text{ codons} \\to 20 \\text{ acides aminés} + 3 \\text{ stop}' },
            { n: 'Rapport F₂ de Mendel', e: 'Aa \\times Aa \\to 1\\,AA : 2\\,Aa : 1\\,aa', c: 'phénotype 3:1' },
          ] }, sim: 'dna',
        },
        scholar: {
          title: `Génétique des populations, équilibre de Hardy-Weinberg et évolution moléculaire`,
          body: `<h4><span class="hn">01</span>Hardy-Weinberg : l'hypothèse nulle de l'évolution</h4>
<p>La génétique des populations commence en demandant ce qui se passe quand <em>rien</em> ne se passe. Dans une population idéalisée — infinie, à accouplement aléatoire, sans sélection, mutation ni migration — les fréquences alléliques \\(p\\) et \\(q = 1-p\\) se calent sur des fréquences génotypiques \\(p^2 : 2pq : q^2\\) et restent fixes pour toujours. C'est l'équilibre de <strong>Hardy-Weinberg</strong>, et sa vraie valeur est comme ligne de base : toute population qui s'en <em>écarte</em> est poussée par une force évolutive, donc l'écart lui-même devient la mesure.</p>
<h4><span class="hn">02</span>Mesurer à quel point les populations ont divergé</h4>
<p>Divise une espèce en sous-populations et elles divergent. L'<strong>indice de fixation</strong> \\(F_{ST} = (H_T - H_S)/H_T\\) capture de combien, comparant la diversité génétique au sein des groupes à celle de l'ensemble : \\(F_{ST} = 0\\) signifie que tout le monde se croise librement, \\(F_{ST} = 1\\) signifie un isolement complet. C'est l'étalon standard pour des questions de l'ascendance humaine à la génétique de la conservation — et, notablement, le \\(F_{ST}\\) humain est étonnamment petit, un écho génétique de la récence et de l'ampleur du mélange de notre espèce.</p>
<h4><span class="hn">03</span>La théorie neutre : la plupart du changement n'est que du bruit</h4>
<p>La <strong>théorie neutre</strong> de Kimura (1968) fit une affirmation saisissante : au niveau moléculaire, la plupart des variants qui se répandent le font non parce qu'ils aident, mais parce qu'ils sont invisibles à la sélection et montent par pur hasard — la dérive génétique. Son résultat le plus propre est que le taux de fixation des mutations neutres égale le taux de mutation lui-même, \\(k = \\mu\\), indépendant de la taille de la population. L'adaptation est réelle, mais contre un vaste arrière-plan de brassage moléculaire ne signifiant rien, l'explication par défaut du changement devint « dérive », non « avantage ».</p>
<h4><span class="hn">04</span>Lire la sélection dans le code</h4>
<p>On peut prendre la sélection la main dans le sac en comparant deux types de changement de l'ADN : les substitutions <em>synonymes</em> qui laissent la protéine intacte, et les <em>non synonymes</em> qui l'altèrent. Leur rapport \\(\\omega = dN/dS\\) est un verdict : \\(\\omega < 1\\) signifie que la sélection purificatrice élimine les changements nuisibles, \\(\\omega > 1\\) signifie que la sélection positive les pousse activement, et \\(\\omega \\approx 1\\) signifie la dérive seule. Et comme les changements neutres avancent à un rythme à peu près constant, ils font aussi office d'<strong>horloge moléculaire</strong> pour dater quand deux lignées ont partagé un ancêtre pour la dernière fois.</p>
<h4><span class="hn">05</span>Décomposer un trait en ses causes</h4>
<p>Pour les traits façonnés par de nombreux gènes, la <strong>génétique quantitative</strong> partitionne la variation totale : \\(V_P = V_A + V_D + V_I + V_E\\), séparant les effets génétiques additifs de la dominance, de l'épistasie et de l'environnement. Le rapport qui compte pour l'évolution est l'<strong>héritabilité</strong> au sens étroit \\(h^2 = V_A/V_P\\) — seule la part additive \\(V_A\\) est ce sur quoi la sélection peut agir de façon fiable, ce qui est pourquoi \\(h^2\\), et non la notion plus vague de « génétique », prédit à quelle vitesse une population répond à la sélection ou à l'élevage.</p>
<h4><span class="hn">06</span>L'énigme de l'héritabilité manquante</h4>
<p>Les études d'association pangénomiques modernes scrutent des millions de marqueurs d'ADN sur d'énormes cohortes, et pour des traits complexes comme la taille elles trouvent des centaines de vrais résultats — qui ensemble n'expliquent qu'une fraction de l'héritabilité que les études de jumeaux disent présente. Cette <em>héritabilité manquante</em> est l'une des énigmes vivantes du domaine, imputée à des variants rares que les scans manquent, à des interactions gène-environnement enchevêtrées, et à une épistasie trop complexe pour que les modèles additifs la voient. Nous pouvons lire le génome entier maintenant ; nous ne pouvons toujours pas lire pleinement une personne à partir de lui.</p>`,
          facts: [
            { e: '🌍', t: `Le goulot d'étranglement de la sortie d'Afrique il y a ~70 000 ans réduisit la diversité génétique humaine si sévèrement que des chimpanzés d'une seule forêt montrent plus de variation génétique que les 8 milliards d'humains.` },
            { e: '🔬', t: `Le premier génome humain complet (HGP, 2003) coûta 2,7 milliards de dollars et prit 13 ans. Aujourd'hui un génome coûte ~200 dollars et prend un jour.` },
            { e: '⚡', t: `Les éléments transposables (« gènes sauteurs ») constituent ~45% du génome humain — plus que les gènes codant des protéines (seulement ~1,5%).` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Hardy-Weinberg', e: 'p^2 + 2pq + q^2 = 1,\\quad p + q = 1' },
            { n: 'Indice de fixation', e: 'F_{ST} = \\dfrac{H_T - H_S}{H_T}' },
            { sep: 1 },
            { n: 'Taux de fixation neutre', e: 'k = \\mu', c: 'Kimura, 1968' },
            { n: 'Test de sélection', e: '\\omega = dN/dS', c: '<1 purificatrice, >1 positive' },
            { sep: 1 },
            { n: 'Variance phénotypique', e: 'V_P = V_A + V_D + V_I + V_E' },
            { n: 'Héritabilité au sens étroit', e: 'h^2 = V_A / V_P' },
          ] }, sim: 'dna',
        },
      },
    },
    evolution: {
      title: 'Évolution et sélection naturelle',
      teaser: 'Chaque être vivant sur Terre partage un ancêtre commun. Quatre milliards d\'années d\'essais et d\'erreurs, guidés par une seule règle simple.',
      chips: ['Sélection', 'Adaptation', 'Spéciation'],
      lvls: {
        junior: {
          title: `Comment la vie change — une génération à la fois !`,
          body: `<p>Imagine une colonie de coléoptères vivant sur un sol brun. La plupart sont bruns, mais de temps en temps une mutation fait surgir un vert vif. Un oiseau affamé au-dessus repère les coléoptères verts d'un coup d'œil et rate les bruns — donc les coléoptères bruns vivent, se reproduisent et transmettent leur brunité. Génération après génération, le vert s'efface et la colonie devient presque entièrement brune. C'est la <strong>sélection naturelle</strong>, l'idée la plus puissante de toute la biologie.</p>
<p>Charles Darwin vit en 1859 que ce seul processus tout simple façonne tout ce qui vit : quiconque porte des traits qui l'aident à survivre et se reproduire laisse plus de descendants, qui héritent de ces traits. Empile cela sur des millions d'années et cela fleurit en une variété stupéfiante — des bactéries aux baleines bleues, des champignons aux érables. Chaque créature sur laquelle tu as jamais posé les yeux siège au bout d'une chaîne ininterrompue de survivants remontant à environ <strong>3,8 milliards d'années</strong>, jusqu'à la toute première cellule.</p>
<p>Les preuves affluent de toutes parts : les fossiles enregistrent le lent remodelage des corps au fil du temps, l'ADN révèle exactement à quel point deux espèces sont apparentées, et les bactéries résistantes aux antibiotiques et les insectes à l'épreuve des pesticides sont l'évolution qui se déploie en ce moment même, en temps réel. Dans la simulation ci-dessous, regarde une population se remodeler sous tes yeux tandis que la pression de sélection change.</p>`,
          facts: [
            { e: '🦠', t: `Les bactéries peuvent évoluer une résistance aux antibiotiques en aussi peu que 11 jours — l'évolution n'est pas un processus lent quand les générations sont courtes.` },
            { e: '🐋', t: `Les baleines ont évolué à partir de mammifères terrestres il y a environ 50 millions d'années. Leurs ancêtres étaient des créatures à quatre pattes, semblables à des cerfs, qui pataugeaient dans les rivières pour se nourrir.` },
            { e: '👁️', t: `L'œil a évolué indépendamment au moins 40 fois séparées dans différentes lignées animales — la même solution utile, découverte encore et encore par la sélection naturelle.` },
          ],
          formula: null, sim: 'evolution',
        },
        student: {
          title: `Génétique des populations de la sélection, de la dérive et de la spéciation`,
          body: `<p>Réduis l'évolution à sa définition et ce n'est que le <strong>changement des fréquences alléliques au fil du temps</strong>, entraîné par quatre forces : la <em>sélection naturelle</em>, la <em>dérive génétique</em> (échantillonnage aléatoire dans des populations finies), la <em>mutation</em> (variation nouvelle) et le <em>flux de gènes</em> (migration). La sélection à un locus de fréquences alléliques \\(p\\) et \\(q = 1-p\\) et de valeurs sélectives \\(w_{11}, w_{12}, w_{22}\\) déplace \\(p\\) à chaque génération de \\(\\Delta p = \\dfrac{pq\\,[\\,p(w_{11}-w_{12}) + q(w_{12}-w_{22})\\,]}{\\bar{w}}\\), à l'échelle de la valeur sélective moyenne \\(\\bar{w}\\). Le <strong>théorème fondamental</strong> de Fisher rend la direction inévitable : la valeur sélective moyenne grimpe à un taux égal à la variance génétique additive de la valeur sélective. L'évolution monte en meulant.</p>
<p>La montée n'est cependant pas toute l'histoire, car le hasard a voix au chapitre. La <strong>dérive génétique</strong> bouscule les fréquences alléliques purement par la chance de qui se reproduit, avec une variance \\(p(1-p)/2N\\) par génération. Dans une petite population ce bruit peut noyer le signal : dès que l'avantage d'un variant \\(s\\) tombe sous \\(1/2N\\), la dérive l'emporte sur la sélection, et même des mutations légèrement nuisibles peuvent dériver jusqu'à la fixation. Les petites populations, en effet, évoluent en partie au hasard.</p>
<p>Laisse deux populations cesser d'échanger des gènes et elles dérivent et s'adaptent en s'écartant jusqu'à ne plus pouvoir se croiser — la <strong>spéciation</strong>. La voie habituelle est <em>allopatrique</em> : une chaîne de montagnes s'élève ou une mer déferle, scinde une population, et l'isolement achève le travail. La spéciation <em>sympatrique</em>, qui se scinde sans aucune barrière physique, requiert une sélection disruptive inhabituellement féroce. Le <strong>concept biologique d'espèce</strong> de Mayr trace la ligne à l'isolement reproductif — bien qu'il peine sur les microbes asexués et sur les fossiles, ce qui est exactement pourquoi écologistes et phylogénéticiens gardent des définitions rivales dans leur poche.</p>`,
          facts: [
            { e: '🐟', t: `Les 500 espèces et plus de cichlidés du lac Victoria ont évolué d'un ancêtre commun en aussi peu que 15 000 ans — l'un des événements de spéciation les plus rapides jamais documentés.` },
            { e: '🌺', t: `Les pinsons de Darwin aux Galápagos montrent une évolution du bec mesurable à l'échelle d'une seule vie humaine — Peter et Rosemary Grant l'ont documentée sur 40 ans de terrain.` },
            { e: '🦠', t: `L'expérience de Lenski suit l'évolution d'E. coli en temps réel depuis 1988 — plus de 80 000 générations, observant des innovations clés dont la capacité de consommer du citrate en aérobie.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Sélection (Δp)', e: '\\Delta p = \\dfrac{pq\\,[\\,p(w_{11}-w_{12}) + q(w_{12}-w_{22})\\,]}{\\bar{w}}' },
            { n: 'Valeur sélective moyenne', e: '\\bar{w} = p^2 w_{11} + 2pq\\,w_{12} + q^2 w_{22}' },
            { sep: 1 },
            { n: 'Théorème de Fisher', e: '\\Delta\\bar{w} = V_A(w)/\\bar{w} \\ge 0' },
            { n: 'Variance de la dérive', e: '\\mathrm{Var}(\\Delta p) = \\dfrac{p(1-p)}{2N}' },
            { sep: 1 },
            { n: 'Temps de fixation neutre', e: '\\bar{t}_{\\text{fix}} = -4N[\\,p\\ln p + (1-p)\\ln(1-p)\\,]' },
            { n: 'Sélection contre dérive', e: 's \\gg 1/2N', c: 'la sélection domine' },
          ] }, sim: 'evolution',
        },
        scholar: {
          title: `Phylogénétique, la synthèse moderne et l'évo-dévo`,
          body: `<h4><span class="hn">01</span>La synthèse moderne</h4>
<p>Pendant des décennies la sélection de Darwin et la génétique de Mendel cohabitèrent mal à l'aise — l'une continue, l'autre discrète. La <strong>synthèse moderne</strong> (années 1930-50 ; Fisher, Wright, Haldane, Dobzhansky, Mayr) les souda ensemble, montrant que la variation lisse et continue est simplement ce qu'on obtient de nombreux gènes mendéliens poussant chacun un peu un trait. Elle transforma l'évolution d'un récit convaincant en une science quantitative, la génétique des populations fournissant les équations de la montée et de la chute des allèles.</p>
<h4><span class="hn">02</span>Le coalescent : passer le film à l'envers</h4>
<p>Un changement puissant fut de cesser de demander comment les gènes se répandent <em>en avant</em> et de tracer plutôt l'ascendance d'un échantillon <em>en arrière</em>. Le <strong>coalescent</strong> de Kingman (1982) fait exactement cela : suis un ensemble quelconque de copies de gènes en remontant le temps et elles fusionnent, paire par paire, jusqu'à ce que toutes atteignent un unique <em>ancêtre commun le plus récent</em>, sur une échelle de temps d'environ \\(4N_e\\) générations pour les diploïdes. Cette vue généalogique est le modèle nul de travail de la génétique des populations moderne, transformant des motifs dans l'ADN actuel en inférences sur la taille, la structure et l'histoire de la population.</p>
<h4><span class="hn">03</span>Reconstruire l'arbre de la vie</h4>
<p>Étant données des séquences de nombreuses espèces, la <strong>phylogénétique</strong> cherche l'arbre qui les explique le mieux. Les méthodes du maximum de vraisemblance choisissent la topologie et les longueurs de branches maximisant \\(P(\\text{data} \\mid T, \\text{modèle})\\), typiquement sous un modèle de substitution GTR à variation de taux entre sites distribuée selon une gamma. Les approches bayésiennes (MrBayes, BEAST) vont plus loin, échantillonnant toute la loi a posteriori \\(P(T \\mid \\text{data})\\) par MCMC et rendant une incertitude honnête tant sur l'ordre de branchement que sur les dates.</p>
<h4><span class="hn">04</span>L'horloge moléculaire et le temps profond</h4>
<p>Comme les substitutions neutres s'accumulent à un rythme à peu près constant, la distance génétique fait aussi office de temps écoulé — une <strong>horloge moléculaire</strong>. Les modèles à horloge relâchée qui laissent le taux varier entre lignées, calibrés contre les fossiles, poussent les dates bien au-delà de ce que les os seuls permettent : eucaryotes vers 2 milliards d'années, animaux près de 750 millions, tétrapodes environ 375 millions. L'ADN nous permet de lire un horodatage approximatif sur des événements qui n'ont laissé aucun fossile.</p>
<h4><span class="hn">05</span>Évo-dévo : c'est la régulation, pas les gènes</h4>
<p>La plus grande surprise de l'ère du génome fut de voir combien <em>peu</em> de gènes séparent une mouche d'un humain, et combien de la différence tient au <em>quand et où</em> les gènes s'allument. La <strong>biologie évolutive du développement</strong> montra que la diversité morphologique jaillit surtout de changements dans la régulation des gènes, non dans le contenu génique. Les <em>gènes Hox</em>, un groupe conservé qui imprime l'identité le long de l'axe du corps, sont partagés par tous les bilatériens ; décale les frontières de leur expression et un segment fait pousser une patte au lieu d'une antenne, sans toucher aux gènes eux-mêmes.</p>
<h4><span class="hn">06</span>Une seule boîte à outils, réutilisée à l'infini</h4>
<p>L'évolution se révèle une réutilisatrice implacable de pièces. Les mêmes interrupteurs maîtres reviennent dans des lignées follement séparées — <em>Pax6</em> orchestrant les yeux, <em>Dlx</em> les membres, <em>Nkx2.5</em> les cœurs — une <em>boîte à outils du développement</em> partagée, déployée encore et encore dans de nouveaux contextes. Cela explique pourquoi yeux, membres et cœurs ont évolué par convergence tant de fois : la nature ne les réinventait pas de zéro à chaque fois, mais recomposait un ancien jeu de commandes génétiques. L'unité de la vie est écrite non seulement dans les gènes partagés, mais dans les façons partagées de les utiliser.</p>`,
          facts: [
            { e: '🧬', t: `Les gènes Hox sont si conservés qu'un gène Hox de souris transplanté dans une mouche du vinaigre peut sauver le développement de la mouche — séparés par 600 millions d'années d'évolution.` },
            { e: '🌳', t: `Le dernier ancêtre commun universel (LUCA) de toute la vie vécut il y a ~3,8 milliards d'années. Il avait déjà des ribosomes, une réplication de l'ADN et un code génétique — impliquant une longue évolution antérieure que nous ne pouvons pas encore voir.` },
            { e: '🔬', t: `L'ADN ancien d'os de Néandertal séquencé en 2010 montre que tous les humains non africains portent 1 à 4% d'ADN néandertalien — preuve de croisements il y a ~50 000 ans.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Temps du coalescent', e: 'E[T_{\\text{MRCA}}] \\approx 4 N_e \\text{ générations}', c: 'diploïde' },
            { n: 'θ de Watterson', e: '\\theta_W = \\dfrac{S}{a_n},\\quad a_n = \\sum_{i=1}^{n-1}\\tfrac{1}{i}' },
            { sep: 1 },
            { n: 'Arbre ML', e: 'T^{*} = \\arg\\max_T\\, P(\\text{data} \\mid T, \\text{modèle})' },
            { n: 'Substitution GTR', e: 'Q_{ij} = \\pi_j\\, r_{ij}\\;(i \\ne j)' },
            { sep: 1 },
            { n: 'Rapport dN/dS', e: '\\omega < 1\\text{ purificatrice},\\; =1\\text{ neutre},\\; >1\\text{ positive}' },
            { n: 'D de Tajima', e: 'D = (\\pi - \\theta_W)/\\mathrm{SD}', c: 'teste la neutralité' },
          ] }, sim: 'evolution',
        },
      },
    },
    graphs: {
      title: 'Théorie des graphes et réseaux',
      teaser: 'Six poignées de main séparent deux personnes quelconques sur Terre. Internet, ton cerveau et une épidémie obéissent tous aux mêmes mathématiques cachées.',
      chips: ['Réseaux', 'Topologie', 'Connexions'],
      lvls: {
        junior: {
          title: `Tout est connecté — mais comment ?`,
          body: `<p>Suppose que tu veuilles faire parvenir un message à un inconnu célèbre que tu n'as jamais rencontré — un chef d'État, une vedette de cinéma. Tu le dis à un ami, qui le dit à l'un de ses amis, qui le dit à l'un des siens. Combien de sauts avant d'atteindre <em>n'importe qui</em> sur la planète ? En 1967 Stanley Milgram fit l'expérience avec des lettres postées et obtint une réponse saisissante : environ <strong>six</strong>. Six degrés de séparation, entre toi et tous les vivants.</p>
<p>C'est le pouvoir tranquille des <strong>réseaux</strong>. Un réseau — les mathématiciens l'appellent un <strong>graphe</strong> — n'est rien de plus qu'un ensemble de <em>nœuds</em> (les choses) reliés par des <em>arêtes</em> (les liens). Tes amitiés sont un graphe. Les villes câblées par des routes aussi, les pages web cousues par des hyperliens, les neurones entrelacés dans ton cerveau, les protéines qui réagissent dans une cellule. Même squelette, chair follement différente.</p>
<p>La grande surprise des cinquante dernières années est que ces réseaux totalement différents partagent la même architecture cachée. Perce cette architecture et tu peux prédire comment une épidémie se propage, comment une panne d'électricité se propage en cascade dans un réseau, comment un seul aéroport fermé embrouille les voyages mondiaux, comment une rumeur devient virale. Dans la simulation ci-dessous, regarde l'information se propager dans un réseau — et remarque comment un seul <strong>hub</strong> bien connecté peut tout changer.</p>`,
          facts: [
            { e: '🌐', t: `Le World Wide Web entier a une longueur de chemin moyenne d'à peine 19 clics entre deux pages quelconques — parmi des milliards de routes possibles.` },
            { e: '🦠', t: `Le COVID-19 s'est propagé si vite en partie parce que le transport aérien crée un réseau « petit monde » — un seul événement superpropagateur dans une ville atteint chaque continent en quelques jours.` },
            { e: '⚡', t: `La panne du Nord-Est de 2003 s'est propagée en cascade de la défaillance d'une seule ligne électrique de l'Ohio jusqu'à couper le courant à 55 millions de personnes dans 8 États — pure vulnérabilité de réseau.` },
          ],
          formula: null, sim: 'graphs',
        },
        student: {
          title: `Petits mondes, réseaux sans échelle et les ponts d'Euler`,
          body: `<p>La théorie des graphes naquit en 1736, quand Leonhard Euler s'attaqua aux <strong>ponts de Königsberg</strong> : pouvait-on flâner dans la ville en traversant chacun de ses sept ponts exactement une fois ? Euler prouva que non — et son argument jeta entièrement la carte, ne gardant que ce qui relie à quoi. Une telle marche existe précisément quand le graphe a 0 ou 2 sommets de degré impair, et rien d'autre ne compte. Rejeter la géométrie et garder la pure connectivité fonda toute une branche des mathématiques.</p>
<p>Un graphe \\(G = (V, E)\\) n'est qu'un ensemble de sommets \\(V\\) et d'arêtes \\(E\\). Le <strong>degré</strong> \\(d(v)\\) compte les voisins d'un sommet, et la <strong>distribution des degrés</strong> \\(P(k)\\) — la chance qu'un nœud au hasard ait \\(k\\) liens — se révèle être l'empreinte du réseau. Parsème des arêtes au hasard (le modèle d'Erdős-Rényi) et tu obtiens une nette loi de Poisson et une brusque <em>transition de phase</em> : franchis \\(p = 1/n\\) et une composante connexe géante surgit. Mais les réseaux réels ne ressemblent en rien aux aléatoires. Ce sont des <strong>petits mondes</strong> — fortement agrégés et pourtant à seulement quelques sauts (Watts-Strogatz, 1998) — et <strong>sans échelle</strong>, avec une \\(P(k) \\sim k^{-\\gamma}\\) à queue lourde (Barabási-Albert, 1999) qui émerge chaque fois que les nouveaux venus préfèrent se lier aux déjà populaires.</p>
<p>Cette forme sans échelle porte un étonnant double tranchant. Ces réseaux sont <strong>robustes à la défaillance aléatoire</strong> — presque chaque nœud est mineur, donc un knock-out aléatoire touche rarement un hub — et pourtant <strong>fragiles à une frappe ciblée</strong> : retire la poignée des plus gros hubs et l'ensemble se fracture. C'est pourquoi internet ignore les plantages de routeurs mais redoute une attaque coordonnée, et pourquoi vacciner les quelques super-connecteurs stoppe une épidémie bien plus efficacement que vacciner des gens au hasard.</p>`,
          facts: [
            { e: '🧬', t: `Le réseau d'interactions protéiques de la levure est sans échelle avec γ ≈ 2,4 — retirer le 1% supérieur de protéines-hubs tue la cellule ; en retirer 99% de non-hubs non.` },
            { e: '🔗', t: `Le réseau d'hyperliens de Wikipédia a une longueur de chemin moyenne ~3,5 — tu peux atteindre presque n'importe quel article depuis n'importe quel autre en 4 clics.` },
            { e: '📊', t: `Le modèle d'attachement préférentiel de Barabási-Albert génère des réseaux sans échelle avec γ = 3 — coïncidant avec l'exposant mesuré dans le World Wide Web.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Lemme des poignées de main', e: '\\sum_v d(v) = 2|E|' },
            { n: 'Chemin eulérien', e: '\\text{existe} \\iff 0 \\text{ ou } 2 \\text{ sommets de degré impair}' },
            { sep: 1 },
            { n: 'Coefficient de clustering', e: 'C(v) = \\dfrac{2\\,e_v}{d(v)\\,(d(v)-1)}', c: 'e_v = arêtes entre voisins' },
            { n: 'Longueur de chemin moyenne', e: 'L = \\dfrac{1}{n^2}\\sum_{u,v} d(u,v)' },
            { sep: 1 },
            { n: 'Degrés sans échelle', e: 'P(k) \\sim k^{-\\gamma},\\quad 2 < \\gamma < 3' },
            { n: 'Transition de phase ER', e: 'p_c = \\dfrac{1}{n}', c: 'la composante géante émerge' },
          ] }, sim: 'graphs',
        },
        scholar: {
          title: `Théorie spectrale des graphes, marches aléatoires et épidémies de réseau`,
          body: `<h4><span class="hn">01</span>Le laplacien : une matrice qui se souvient de la forme</h4>
<p>Réduis un réseau à des nombres et toute sa structure réside dans le <strong>laplacien du graphe</strong> \\(L = D - A\\), bâti à partir de la matrice des degrés \\(D\\) et de la matrice d'adjacence \\(A\\). Diagonalise-le et les valeurs propres \\(0 = \\lambda_1 \\le \\lambda_2 \\le \\dots \\le \\lambda_n\\) lisent la géométrie du réseau sans que tu le dessines jamais. Le nombre de valeurs propres nulles compte les morceaux connexes ; les écarts entre les autres codent goulots d'étranglement, symétries, et comment la chaleur ou une rumeur diffuserait dans le graphe. La théorie spectrale des graphes est l'affirmation surprenante que l'on peut vraiment entendre la forme d'un réseau.</p>
<h4><span class="hn">02</span>La valeur de Fiedler : à quel point connecté, vraiment ?</h4>
<p>La deuxième valeur propre \\(\\lambda_2\\) — la <em>connectivité algébrique</em> de Fiedler — est celle à surveiller. Elle se tient juste au-dessus de zéro quand un graphe tient à peine et grimpe à mesure que le graphe se tisse plus serré. L'inégalité de Cheeger rend cette intuition exacte, piégeant le vrai goulot \\(h(G)\\) (la coupe la moins chère relativement à sa taille) entre deux fonctions du spectre : \\(\\dfrac{\\lambda_2}{2} \\le h(G) \\le \\sqrt{2\\lambda_2}\\). Un \\(\\lambda_2\\) petit garantit qu'une coupe clairsemée existe ; un grand certifie que le réseau n'a pas de couture faible où se déchirer.</p>
<h4><span class="hn">03</span>Clustering spectral : trouver les communautés</h4>
<p>Ce même vecteur propre de Fiedler gagne son pain en pratique. Trie les nœuds par le signe de leur entrée dedans et le graphe tend à se scinder le long de sa couture la plus naturelle — le cœur du <strong>clustering spectral</strong>, l'algorithme derrière une grande part de la détection moderne de communautés, de la segmentation d'images et de la recommandation. Ce qui ressemble à un problème abstrait de valeurs propres se révèle la façon la plus propre connue de demander : « quelles parties de ce réseau vont vraiment ensemble ? »</p>
<h4><span class="hn">04</span>Marches aléatoires, mélange et PageRank</h4>
<p>Mets un jeton à errer dans le graphe, sautant à un voisin au hasard à chaque pas — une <strong>marche aléatoire</strong> de matrice de transition \\(P = D^{-1}A\\). Elle se cale sur une distribution stationnaire \\(\\pi(v) = d(v)/2|E|\\), purement proportionnelle au degré, et le temps qu'il lui faut pour oublier d'où elle est partie — le <em>temps de mélange</em> — se met à l'échelle comme \\(\\tau_{\\text{mix}} \\sim \\log n / \\lambda_2\\) : les graphes « expanseurs » bien tissés mélangent en un clin d'œil, ceux à goulots rampent. Ajoute une petite chance de te téléporter n'importe où et tu as <strong>PageRank</strong>, la marche aléatoire dont Google utilisa d'abord la distribution stationnaire pour classer le web.</p>
<h4><span class="hn">05</span>Épidémies sur les réseaux : le seuil qui s'évanouit</h4>
<p>Fais tourner une contagion <strong>SIR</strong> — susceptible, infecté, rétabli — sur un graphe et un seuil net apparaît : l'épidémie ne prend que quand \\(\\beta/\\mu > 1/\\lambda_{\\max}(A)\\), régie par la plus grande valeur propre de la matrice d'adjacence. Ici la topologie sans échelle sort son tour le plus vicieux. Pour \\(\\gamma \\le 3\\), \\(\\lambda_{\\max}\\) croît sans borne à mesure que le réseau grandit, donc le seuil glisse jusqu'à <em>zéro</em> : sur un grand réseau sans échelle une épidémie se propage quelle que soit la faiblesse de la transmission. C'est la raison profonde pour laquelle les virus informatiques et la désinformation en ligne sont si tenaces — les hubs leur offrent un point d'appui gratuit.</p>
<h4><span class="hn">06</span>Les problèmes difficiles cachés dans de simples graphes</h4>
<p>Malgré toute cette élégance, certaines des questions de graphes à l'air le plus simple comptent parmi les plus difficiles connues. Demander si un graphe a un <em>chemin hamiltonien</em> — un parcours visitant chaque nœud exactement une fois — est NP-complet, et un algorithme efficace pour cela renverserait des milliers d'autres problèmes d'un coup et résoudrait <strong>P contre NP</strong>, la question ouverte la plus profonde de l'informatique. Les graphes sont l'endroit où la connectivité abstraite percute le mur de la difficulté computationnelle — qui est la pièce d'à côté.</p>`,
          facts: [
            { e: '🔢', t: `L'écart spectral λ₂ du graphe de Petersen vaut 2 — c'est le plus petit expanseur 3-régulier, ce qui explique pourquoi il apparaît dans tant de résultats de théorie extrémale des graphes.` },
            { e: '🌍', t: `Le seuil épidémique sur internet (sans échelle, γ≈2,1) est effectivement nul — expliquant pourquoi les virus informatiques persistent indéfiniment à n'importe quel taux de transmission.` },
            { e: '🏆', t: `Le problème P contre NP équivaut à demander si le problème du chemin hamiltonien (un graphe a-t-il un chemin visitant chaque nœud une fois ?) peut être résolu efficacement — toujours non résolu.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Laplacien du graphe', e: 'L = D - A' },
            { n: 'Spectre', e: '0 = \\lambda_1 \\le \\lambda_2 \\le \\dots \\le \\lambda_n' },
            { sep: 1 },
            { n: 'Inégalité de Cheeger', e: '\\dfrac{\\lambda_2}{2} \\le h(G) \\le \\sqrt{2\\lambda_2}' },
            { n: 'Mélange de la marche', e: '\\tau_{\\text{mix}} \\sim \\dfrac{\\log n}{\\lambda_2}' },
            { sep: 1 },
            { n: 'Seuil épidémique SIR', e: '\\dfrac{\\beta}{\\mu} > \\dfrac{1}{\\lambda_{\\max}(A)}' },
            { n: 'Limite sans échelle', e: '\\lambda_{\\max}(A) \\to \\infty \\;(\\gamma \\le 3) \\;\\Rightarrow\\; \\text{seuil} \\to 0' },
          ] }, sim: 'graphs',
        },
      },
    },
    trig: {
      title: 'Trigonométrie et le cercle unité',
      teaser: 'Un point qui tourne sur un cercle dessine une onde — et cette onde fait tourner la musique, les marées et chaque écran que tu possèdes.',
      chips: ['Sinus', 'Cosinus', 'Angles'],
      lvls: {
        junior: {
          title: `Le cercle qui dessine une onde`,
          body: `<p>Dessine un cercle et marque un point sur son bord. Maintenant fais tourner lentement le point tout autour, et observe seulement sa <em>hauteur</em> — à quelle distance au-dessus ou en dessous du milieu il se trouve. Quelque chose de magique apparaît : tandis que le point tourne et retourne, sa hauteur trace une onde lisse qui se répète à l'infini. Cette onde a un nom, l'<strong>onde sinusoïdale</strong>, et elle se cachait dans l'humble cercle depuis toujours.</p>
<p>Les deux nombres qui fixent le point sont les briques de la <strong>trigonométrie</strong>. Sa hauteur est le <strong>sinus</strong> de l'angle ; sa position à gauche ou à droite est le <strong>cosinus</strong>. Tandis que l'angle croît de 0° jusqu'à 360° et recommence, sinus et cosinus glissent en douceur entre +1 et -1. C'est tout ce qu'ils sont vraiment : la position verticale et horizontale d'un point qui tourne autour d'un cercle de rayon 1 — le <strong>cercle unité</strong>.</p>
<p>Ce n'est pas qu'une anecdote de cours de maths. Ce même motif cercle-en-onde se cache derrière presque tout ce qui se répète : le son d'une note de musique, l'oscillation d'un pendule, les marées, le courant alternatif dans tes murs, le tangage d'un bateau. Tout ce qui cycle peut s'écrire avec des sinus et des cosinus — c'est pourquoi cette petite image surgit partout où tu regardes, en physique, en ingénierie, en musique et en infographie.</p>`,
          facts: [
            { e: '🎵', t: `Une note de musique pure est littéralement une onde sinusoïdale dans l'air — la note La est 440 de ces ondes par seconde.` },
            { e: '🎡', t: `Monte sur une grande roue et trace ta hauteur au fil du temps et tu dessines une onde sinusoïdale parfaite : haute en haut, basse en bas.` },
            { e: '🌊', t: `Sinus et cosinus sont la même onde, juste décalée — le cosinus est simplement le sinus commencé un quart de tour plus tôt.` },
          ],
          formula: null, sim: 'trig',
        },
        student: {
          title: `Le cercle unité, et sinus, cosinus et tangente`,
          body: `<p>Place un cercle de rayon 1 à l'origine et prends un point dessus à l'angle \\(\\theta\\) (mesuré dans le sens antihoraire depuis le demi-axe x positif). Par définition les coordonnées de ce point sont \\((\\cos\\theta,\\ \\sin\\theta)\\). Donc le cosinus est la coordonnée x et le sinus la coordonnée y — point. Tout le reste de la trigonométrie se déploie de là. Et comme le rayon est 1, Pythagore donne aussitôt l'identité \\(\\sin^2\\theta + \\cos^2\\theta = 1\\).</p>
<p>Dans un triangle rectangle les mêmes fonctions sont des rapports de côtés : sinus = opposé/hypoténuse, cosinus = adjacent/hypoténuse, tangente = opposé/adjacent = \\(\\sin\\theta/\\cos\\theta\\). Le cercle unité et le triangle sont la même idée — le triangle n'est que le petit triangle rectangle formé par le point, le centre et l'axe x. La tangente mesure la pente de la droite du rayon, et file vers l'infini à 90°, où cette droite est verticale.</p>
<p>Comme le point revient à son point de départ à chaque tour complet, les trois fonctions sont <strong>périodiques</strong>, se répétant tous les 360° (ou \\(2\\pi\\) radians). Les radians, où un cercle entier vaut \\(2\\pi\\), sont l'unité naturelle : l'angle en radians est littéralement la longueur d'arc autour d'un cercle unité. Accélère la rotation et tu changes la fréquence de l'onde ; mets le cercle à l'échelle et tu changes son amplitude — les deux boutons derrière chaque onde de la nature.</p>`,
          facts: [
            { e: '📐', t: `sin²θ + cos²θ = 1 pour tout angle — ce n'est que Pythagore appliqué au rayon de 1 du cercle unité.` },
            { e: '♾️', t: `tan 90° est indéfinie : la droite du rayon y est verticale, donc sa « pente » file vers l'infini.` },
            { e: '🔄', t: `Les radians mesurent l'angle comme longueur d'arc, donc un cercle entier vaut 2π radians — car sa circonférence est 2π × rayon.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Point sur le cercle', e: '(\\cos\\theta,\\ \\sin\\theta)' },
            { n: 'Identité de Pythagore', e: '\\sin^2\\theta + \\cos^2\\theta = 1' },
            { n: 'Tangente', e: '\\tan\\theta = \\dfrac{\\sin\\theta}{\\cos\\theta}' },
            { sep: 1 },
            { n: 'SOH-CAH-TOA', e: '\\sin=\\tfrac{opp}{hyp},\\ \\cos=\\tfrac{adj}{hyp},\\ \\tan=\\tfrac{opp}{adj}' },
            { n: 'Radians', e: '360° = 2\\pi\\ \\text{rad}' },
          ] }, sim: 'trig',
        },
        scholar: {
          title: `Des triangles aux séries de Taylor, aux ondes et aux rotations`,
          body: `<h4><span class="hn">01</span>Radians et calcul</h4>
<p>Sinus et cosinus ne deviennent propres qu'en radians : \\(\\tfrac{d}{dx}\\sin x = \\cos x\\) et \\(\\tfrac{d}{dx}\\cos x = -\\sin x\\). Chacun est la dérivée de l'autre (au signe près), donc ensemble ils satisfont \\(y'' = -y\\) — l'équation différentielle de toute oscillation, d'un ressort à un circuit LC.</p>
<h4><span class="hn">02</span>Séries de Taylor et formule d'Euler</h4>
<p>Tous deux ont des développements polynomiaux (de Taylor) infinis, et ceux-ci se tissent avec l'exponentielle via la <strong>formule d'Euler</strong> \\(e^{i\\theta} = \\cos\\theta + i\\sin\\theta\\). Pose \\(\\theta = \\pi\\) et tu obtiens \\(e^{i\\pi} + 1 = 0\\), cinq constantes fondamentales en une seule ligne. Les exponentielles complexes sont le déguisement préféré des physiciens pour les ondes.</p>
<h4><span class="hn">03</span>Fourier : tout est sinus</h4>
<p>Tout signal qui se répète, si dentelé soit-il, est une somme de sinus et de cosinus de fréquences différentes — une <em>série de Fourier</em>. C'est pourquoi le cercle unité sous-tend discrètement la compression audio, les formats d'image, le traitement du signal et les mathématiques de la mécanique quantique.</p>
<h4><span class="hn">04</span>Rotations et au-delà</h4>
<p>Sinus et cosinus sont les entrées de la matrice de rotation 2D, donc ils pilotent toute l'infographie, la robotique et la mécanique orbitale. Le même couple se généralise aux hyperboliques \\(\\sinh\\) et \\(\\cosh\\) — où le cercle devient une hyperbole — qui décrivent les câbles suspendus et la géométrie de la relativité restreinte.</p>`,
          facts: [
            { e: '🌀', t: `L'identité d'Euler e^{iπ}+1=0 relie cinq des nombres les plus importants des maths — souvent élue l'équation la plus belle des mathématiques.` },
            { e: '🎼', t: `Fourier prouva que tout signal qui se répète est une somme d'ondes sinusoïdales — les maths qui permettent à MP3 et JPEG de compresser sons et images.` },
            { e: '🤖', t: `Chaque rotation en infographie et en robotique est bâtie de sinus et de cosinus disposés en une matrice de rotation.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Dérivées', e: '\\tfrac{d}{dx}\\sin x = \\cos x,\\quad \\tfrac{d}{dx}\\cos x = -\\sin x' },
            { n: 'Formule d\'Euler', e: 'e^{i\\theta} = \\cos\\theta + i\\sin\\theta' },
            { n: 'Identité d\'Euler', e: 'e^{i\\pi} + 1 = 0' },
            { sep: 1 },
            { n: 'Matrice de rotation', e: '\\begin{pmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{pmatrix}' },
          ] }, sim: 'trig',
        },
      },
    },
    prob: {
      title: 'Probabilités et la courbe en cloche',
      teaser: 'Pourquoi tout se regroupe-t-il au milieu ? L\'univers a une forme préférée.',
      chips: ['Statistiques', 'Probabilités', 'Loi normale'],
      lvls: {
        junior: {
          title: `Pourquoi le milieu gagne toujours !`,
          body: `<p>Imagine une planche parsemée de rangées de clous en triangle. Lâche une bille en haut, et à chaque clou elle rebondit à gauche ou à droite au hasard — un lancer de pièce équitable, à chaque fois. Après avoir dégringolé tout en bas, où finit-elle ?</p>
<p>Presque toujours <strong>quelque part près du milieu</strong> — et il y a une jolie raison. Pour finir tout à droite, la bille devrait rebondir à droite à <em>chaque clou</em> d'affilée, comme obtenir dix piles de suite : possible, mais rare. Pour finir près du milieu il lui suffit d'à peu près autant de gauches que de droites, et il y a des milliers de combinaisons gauche-droite différentes qui l'y mènent. Le milieu gagne non parce que quelque chose guide la bille, mais simplement parce qu'il y a bien plus de façons de l'atteindre.</p>
<p>Lâche assez de billes et elles s'entassent en un doux monticule — haut au centre, redescendant uniformément des deux côtés. C'est la <strong>courbe en cloche</strong>, et une fois que tu l'as rencontrée tu la verras partout : les tailles des gens, les températures quotidiennes, les notes d'examen, les minuscules erreurs de toute mesure. La recette ne change jamais. Chaque fois qu'un résultat est la somme de nombreux petits coups de pouce indépendants, le milieu est là où ils s'annulent le plus souvent — et le milieu est là où tu atterris le plus souvent.</p>`,
          facts: [
            { e: '📏', t: `La plupart des adultes mesurent près de 170 cm. Très peu dépassent 2 m ou descendent sous 1,4 m — la courbe en cloche à l'œuvre dans la biologie humaine !` },
            { e: '🎯', t: `Lancer une pièce 100 fois donne presque toujours entre 40 et 60 piles. En obtenir moins de 30 ou plus de 70 serait extraordinaire.` },
            { e: '🌡️', t: `Les erreurs de température quotidiennes dans les prévisions météo suivent une courbe en cloche — les prévisionnistes s'en servent pour calculer les intervalles de confiance.` },
          ],
          formula: null, sim: 'prob',
        },
        student: {
          title: `La loi binomiale et la limite normale`,
          body: `<p>La machine à clous a un nom — la <strong>planche de Galton</strong>, construite par Francis Galton en 1887. Avec \\(n\\) rangées, une bille fait \\(n\\) choix gauche/droite indépendants, chacun un lancer de pièce équitable, et la case où elle finit compte simplement combien de fois elle est allée à droite, \\(k\\). Ces décomptes suivent la <strong>loi binomiale</strong> \\(P(k) = \\binom{n}{k}(0.5)^n\\).</p>
<p>Ce \\(\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}\\) n'est rien de plus qu'un décompte de combien de chemins distincts atteignent la case \\(k\\) — et c'est toute l'histoire. Avec 7 rangées il y a \\(2^7 = 128\\) chemins également probables en tout ; la case centrale est alimentée par \\(\\binom{7}{3} = 35\\) d'entre eux, tandis que chaque bord extrême en a exactement un. Plus de chemins, plus de probabilité. Maintenant fais monter \\(n\\) et la binomiale dentelée se lisse en la <strong>loi normale (gaussienne)</strong>, de moyenne \\(\\mu = np\\) et d'étalement \\(\\sigma = \\sqrt{np(1-p)}\\). Ce n'est pas un heureux hasard ; c'est imposé par le théorème central limite.</p>
<p>Une fois qu'une quantité est normale, la <strong>règle 68–95–99,7</strong> te dit presque tout d'un coup d'œil : environ 68% des valeurs tombent dans \\(1\\sigma\\) de la moyenne, 95% dans \\(2\\sigma\\), et 99,7% dans \\(3\\sigma\\). C'est pourquoi les physiciens exigent « 5 sigmas » avant de célébrer : une bosse à cinq sigmas a moins d'une chance sur 3,5 millions d'être un hasard, et c'est la barre qu'une vraie découverte de particule doit franchir.</p>`,
          facts: [
            { e: '📈', t: `Tailles, tension artérielle, scores de QI et la plupart des mesures biologiques sont distribués approximativement normalement, car ils résultent de nombreux facteurs génétiques et environnementaux indépendants.` },
            { e: '🎰', t: `Les casinos gagnent parce que l'avantage de la maison, appliqué sur des millions de paris, converge vers un profit moyen fiable par la loi des grands nombres.` },
            { e: '🏅', t: `Galton utilisa la planche pour démontrer la « régression vers la moyenne » : des parents grands tendent à avoir des enfants légèrement plus petits qu'eux — les valeurs extrêmes régressent vers la moyenne au fil des générations.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Probabilité binomiale', e: 'P(k;n,p) = \\binom{n}{k} p^k (1-p)^{n-k}' },
            { n: 'Moyenne', e: '\\mu = np' },
            { n: 'Écart-type', e: '\\sigma = \\sqrt{np(1-p)}' },
            { sep: 1 },
            { n: 'Densité gaussienne', e: 'f(x) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-(x-\\mu)^2/2\\sigma^2}' },
            { sep: 1 },
            { n: 'Règle 68–95–99,7', e: 'P(|X-\\mu| < \\sigma) \\approx 0.6827', c: '0.9545 à 2σ, 0.9973 à 3σ' },
          ] }, sim: 'prob',
        },
        scholar: {
          title: `Le théorème central limite, Berry-Esséen et l'universalité de la statistique gaussienne`,
          body: `<h4><span class="hn">01</span>Le théorème derrière la portée de la courbe en cloche</h4>
<p>Le <strong>théorème central limite</strong> est la raison pour laquelle une seule courbe hante toute la science. Prends des variables indépendantes et identiquement distribuées \\(X_1,\\dots,X_n\\) de moyenne \\(\\mu\\) et de variance finie \\(\\sigma^2\\) — et peu importe vraiment ce qu'elles sont, des dés ou des revenus ou des comptes de photons — puis standardise leur moyenne : \\(Z_n = \\dfrac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}}\\). Quand \\(n\\to\\infty\\), \\(Z_n\\) converge en loi vers la normale standard \\(N(0,1)\\). Les ingrédients sont oubliés ; seule la cloche survit. Cet effacement du détail est ce qu'il y a de plus profond en elle.</p>
<h4><span class="hn">02</span>Pourquoi c'est vrai : l'empreinte de Fourier</h4>
<p>La preuve la plus propre passe par les <strong>fonctions caractéristiques</strong> — les transformées de Fourier des lois, \\(\\varphi_X(t) = \\mathbb{E}[e^{itX}]\\) — qui changent la convolution malcommode de la somme de variables en une multiplication ordinaire. Prends les logarithmes, développe en Taylor autour de l'origine, et les deux premiers termes sont exactement la moyenne et la variance ; tout ce qui est plus élevé est étouffé par des puissances de \\(1/\\sqrt{n}\\). Ce qui reste est \\(\\log\\varphi_{Z_n}(t) \\to -t^2/2\\), et \\(e^{-t^2/2}\\) est la signature indubitable de la gaussienne. La courbe en cloche est simplement ce que tu obtiens quand seuls les deux premiers moments survivent.</p>
<h4><span class="hn">03</span>À quelle vitesse : la borne de Berry-Esséen</h4>
<p>La convergence est une chose ; une convergence que tu peux réellement <em>utiliser</em> en est une autre. Le <strong>théorème de Berry-Esséen</strong> cloue l'erreur. Avec \\(\\rho = \\mathbb{E}[|X-\\mu|^3]\\) le troisième moment absolu, l'écart dans le pire cas entre la loi de \\(Z_n\\) et la vraie normale obéit à \\(\\sup_x |F_n(x) - \\Phi(x)| \\le \\dfrac{C\\rho}{\\sigma^3\\sqrt{n}}\\), avec \\(C \\le 0.4748\\). Le taux \\(1/\\sqrt{n}\\) est optimal — quadruple l'échantillon pour diviser l'erreur par deux — et les lois asymétriques, portant un grand \\(\\rho\\), rampent vers la cloche plus lentement que les symétriques.</p>
<h4><span class="hn">04</span>Quand la cloche se brise : les queues lourdes</h4>
<p>Il y a un prix d'entrée : la variance finie. Brise cette condition et la gaussienne perd entièrement sa prise. La <strong>loi de Cauchy</strong> — le rapport de deux normales — a des queues si grasses que sa variance, et même sa moyenne, n'existent tout simplement pas ; moyenne un million de tirages de Cauchy et tu n'es pas mieux qu'avec un seul. De telles sommes convergent plutôt vers les <strong>lois stables de Lévy</strong>, une famille plus large à queues \\(P(X>x)\\sim x^{-\\alpha}\\) pour \\(0<\\alpha\\le 2\\), dont la gaussienne (\\(\\alpha=2\\)) n'est que le cas particulier docile. Marchés, tremblements de terre et avalanches vivent ici — c'est pourquoi les « événements centennaux » ne cessent d'arriver en avance.</p>
<h4><span class="hn">05</span>Au-delà de l'indépendance</h4>
<p>Les données réelles sont rarement si bien élevées, et le théorème s'étire pour les rejoindre. Il existe des versions pour variables faiblement dépendantes, pour tableaux triangulaires sous la condition de Lindeberg, et pour des sommes où aucun terme n'a le droit de dominer. Les dynamiques gaussiennes corrélées ont leurs propres chevaux de trait : le <strong>processus d'Ornstein-Uhlenbeck</strong> et son cousin discret le modèle AR(1) décrivent un bruit à retour vers la moyenne, affleurant partout, des taux d'intérêt aux tensions de membrane neuronale aux oscillations du climat.</p>
<h4><span class="hn">06</span>Pourquoi la nature revient toujours à la gaussienne</h4>
<p>Assemblé, le TCL explique pourquoi la cloche est le réglage par défaut de l'univers. Tout ce que tu peux mesurer qui est bâti d'une foule de petites contributions à peu près indépendantes — une taille de milliers de gènes et de repas, un bruit thermique d'innombrables électrons qui se bousculent, une erreur de nombreuses minuscules imperfections — dérive vers la même forme. Il sous-tend aussi discrètement la statistique classique : tests t, intervalles de confiance et barres d'erreur s'appuient tous sur la normalité pour de grands échantillons. La courbe en cloche n'est pas la forme préférée de la nature par goût. C'est la forme qui reste une fois qu'on laisse les détails s'annuler.</p>`,
          facts: [
            { e: '🔬', t: `La loi t de Student est correcte pour de petits échantillons (n < 30) et converge vers la normale quand n → ∞ — conséquence directe du TCL.` },
            { e: '💹', t: `La valorisation d'options Black-Scholes suppose des log-rendements distribués normalement — une approximation du TCL qui s'effondre lors des krachs de marché (queues grasses).` },
            { e: '🎲', t: `La loi de Cauchy (rapport de deux normales) a une moyenne indéfinie et une variance infinie — son TCL échoue, et la moyenne empirique NE converge PAS.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Théorème central limite', e: 'Z_n = \\dfrac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}} \\;\\xrightarrow{d}\\; N(0,1)' },
            { sep: 1 },
            { n: 'Fonction caractéristique', e: '\\varphi_X(t) = \\mathbb{E}\\!\\left[e^{itX}\\right]' },
            { n: 'Limite gaussienne', e: '\\log\\varphi_{Z_n}(t) \\to -\\dfrac{t^2}{2}' },
            { sep: 1 },
            { n: 'Berry-Esséen', e: '\\sup_x |F_n(x) - \\Phi(x)| \\le \\dfrac{C\\rho}{\\sigma^3\\sqrt{n}}', c: 'C ≤ 0.4748' },
            { n: 'Queue stable de Lévy', e: 'P(X > x) \\sim x^{-\\alpha},\\quad 0 < \\alpha \\le 2' },
          ] }, sim: 'prob',
        },
      },
    },
    fractal: {
      title: 'Fractales et infini',
      teaser: 'Une côte a une longueur infinie. Un flocon de neige se contient lui-même pour toujours. Comment est-ce possible ?',
      chips: ['Géométrie', 'Auto-similarité', 'Chaos'],
      lvls: {
        junior: {
          title: `Des formes qui se contiennent elles-mêmes !`,
          body: `<p>Regarde de près une fougère. Maintenant zoome sur l'une de ses petites branches latérales — c'est pour l'essentiel une minuscule fougère. Zoome encore sur une branche de <em>cette</em> branche, et voilà une autre minuscule fougère. Une forme qui continue de se ressembler quel que soit ton niveau de zoom a un nom : elle est <strong>auto-similaire</strong>, et les formes qui réussissent ce tour s'appellent des <strong>fractales</strong>.</p>
<p>La nature en est bourrée. Flocons de neige, côtes, crêtes de montagnes et éclairs sont tous fractals — et ton dîner aussi. Coupe une tête de brocoli romanesco et tu trouveras une spirale faite de spirales plus petites faites de spirales encore plus petites. Même tes propres poumons jouent le jeu : leurs branches qui se ramifient à l'infini entassent une surface de la taille d'un court de tennis dans ta poitrine, juste pour que tu puisses respirer.</p>
<p>La superstar de la famille est l'<strong>ensemble de Mandelbrot</strong>, une forme conjurée à partir d'une minuscule règle répétée encore et encore. De loin son contour paraît presque banal, mais plonge dans son bord et le détail ne s'épuise tout simplement jamais — spirales tourbillonnantes, queues d'hippocampe enroulées, copies miniatures de la forme entière, puis encore plus de détail caché à l'intérieur, sans fin. C'est peut-être l'objet le plus complexe de toutes les mathématiques, et il naît de l'une des règles les plus simples que tu puisses écrire.</p>`,
          facts: [
            { e: '🌿', t: `Le brocoli romanesco est une fractale naturelle quasi parfaite — chaque fleuron est une version miniature de la tête entière !` },
            { e: '🌊', t: `La côte de la Grande-Bretagne s'allonge à mesure qu'on la mesure plus précisément. Il n'y a pas d'unique réponse « correcte » — c'est fractal !` },
            { e: '🫁', t: `La ramification fractale de tes poumons crée ~70 m² de surface — de quoi couvrir un court de tennis, tassée dans ta poitrine !` },
          ],
          formula: null, sim: 'fractal',
        },
        student: {
          title: `Dimension fractale et l'ensemble de Mandelbrot`,
          body: `<p>La géométrie ordinaire traite de dimensions entières : un point est 0, une ligne 1, un carré 2, un cube 3. Les fractales enfreignent discrètement cette règle — elles vivent à des <strong>dimensions fractionnaires</strong>, la <em>dimension de Hausdorff</em>. L'idée est de demander comment le détail se multiplie quand on zoome. Mets une ligne à l'échelle 3 et tu obtiens 3 copies ; un carré à l'échelle 3 et tu obtiens \\(9 = 3^2\\) ; un cube, \\(27 = 3^3\\). Lis l'exposant et tu as la dimension. Pour une forme faite de \\(N\\) copies chacune rétrécie de \\(1/s\\), c'est \\(D = \\dfrac{\\log N}{\\log s}\\).</p>
<p>Donne le <strong>flocon de Koch</strong> à cette formule — chaque segment remplacé par une bosse de 4 morceaux, chacun d'un tiers de long, donc \\(N=4\\) et \\(s=3\\) — et il en sort \\(D = \\dfrac{\\log 4}{\\log 3} \\approx 1.26\\) : plus qu'une ligne, moins qu'un plan. Le troublant, c'est que son périmètre est <em>infini</em>, \\(L_n = (4/3)^n L_0 \\to \\infty\\), tandis que l'aire qu'il enclôt reste finie. C'est exactement pourquoi une côte n'a pas d'unique longueur — mesure-la avec une règle plus fine et tu ne cesses de découvrir plus d'ondulations.</p>
<p>L'<strong>ensemble de Mandelbrot</strong> naît d'une recette presque insultante de simplicité : itère \\(z_{n+1} = z_n^2 + c\\) en partant de \\(z_0 = 0\\). Un nombre complexe \\(c\\) appartient à l'ensemble si cette suite ne file jamais vers l'infini. Les points juste à l'extérieur s'échappent à des vitesses différentes, et les colorer selon leur rapidité de fuite peint ces fameux halos psychédéliques. Le bord lui-même est sans fond : zoome sur un point quelconque du bord et de nouvelles structures ne cessent de fleurir — spirales, vallées d'hippocampes, minuscules copies parfaites de l'ensemble entier — sans fin.</p>`,
          facts: [
            { e: '🌀', t: `Le bord de l'ensemble de Mandelbrot a une dimension de Hausdorff exactement 2 — infiniment plissé. Zoomer révèle toujours de nouveaux mini-ensembles de Mandelbrot !` },
            { e: '📡', t: `Les antennes fractales (utilisées dans les smartphones modernes) reçoivent plusieurs fréquences car leur structure auto-similaire résonne à plusieurs échelles simultanément.` },
            { e: '🩺', t: `Les tumeurs malignes ont une dimension fractale mesurablement plus élevée que le tissu sain — un outil diagnostique quantitatif du cancer.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Itération de Mandelbrot', e: 'z_{n+1} = z_n^2 + c,\\quad z_0 = 0' },
            { n: 'Ensemble de Mandelbrot', e: 'M = \\{\\, c \\in \\mathbb{C} : \\sup_n |z_n| < \\infty \\,\\}' },
            { sep: 1 },
            { n: 'Dimension de Hausdorff', e: 'D = \\dfrac{\\log N}{\\log s}' },
            { n: 'Flocon de Koch', e: 'D = \\dfrac{\\log 4}{\\log 3} \\approx 1.2619' },
            { sep: 1 },
            { n: 'Périmètre de Koch', e: 'L_n = \\left(\\tfrac{4}{3}\\right)^{n} L_0 \\to \\infty', c: 'aire finie, périmètre infini' },
          ] }, sim: 'fractal',
        },
        scholar: {
          title: `Dynamique complexe, ensembles de Julia et liens avec la théorie du chaos`,
          body: `<h4><span class="hn">01</span>Ensembles de Julia : la frontière chaotique</h4>
<p>Fixe un nombre complexe \\(c\\) et itère \\(f_c(z) = z^2 + c\\). Certains points de départ filent vers l'infini ; d'autres restent bornés pour toujours. L'<strong>ensemble de Julia</strong> \\(J_c\\) est le fil du rasoir entre les deux — le bord de la région qui s'échappe, et un lieu de chaos véritable, où deux voisins d'apparence identique peuvent finir dans des destins entièrement différents. L'ensemble de Julia <em>rempli</em> \\(K_c\\) rassemble tous les points qui ne s'échappent jamais. Déplace \\(c\\) et \\(J_c\\) se transforme follement : un cercle lisse à \\(c=0\\), une dendrite ramifiée un peu plus loin, une pulvérisation de poussière déconnectée au-delà.</p>
<h4><span class="hn">02</span>L'ensemble de Mandelbrot comme atlas des ensembles de Julia</h4>
<p>Voici le pont qui hisse l'ensemble de Mandelbrot au-dessus de la simple décoration. <strong>\\(c\\) est dans \\(M\\) précisément quand son ensemble de Julia \\(J_c\\) est connexe</strong> ; à l'instant où \\(c\\) quitte \\(M\\), \\(J_c\\) se brise en poussière de Cantor totalement déconnectée — et il n'y a rien entre les deux. Douady et Hubbard démontrèrent cette dichotomie nette en 1982, refondant \\(M\\) en un unique catalogue de tous les ensembles de Julia quadratiques à la fois. Chaque point de l'ensemble de Mandelbrot est, en effet, une carte postale d'un monde chaotique différent.</p>
<h4><span class="hn">03</span>Uniformisation et la grande question ouverte</h4>
<p>Ils allèrent plus loin, construisant une application conforme explicite de l'extérieur de \\(M\\) sur l'extérieur du disque unité via la <em>coordonnée de Böttcher</em> \\(\\varphi_c(z) = \\lim_{n\\to\\infty} [f_c^{\\,n}(z)]^{2^{-n}}\\). Un dividende : \\(M\\) est connexe — loin d'être évident sur les images, où des « îles » égarées se révèlent reliées au continent par des filaments trop fins pour être vus. Savoir si \\(M\\) est aussi <em>localement</em> connexe — la <strong>conjecture MLC</strong> — est le problème ouvert central du sujet. Une preuve fixerait toute la structure combinatoire de \\(M\\) d'un seul coup ; elle résiste depuis quarante ans.</p>
<h4><span class="hn">04</span>Où les fractales rencontrent le chaos</h4>
<p>Coupe l'ensemble de Mandelbrot le long de l'axe réel et tu tombes sur quelque chose venu d'un tout autre coin des mathématiques : la <strong>suite logistique</strong> \\(x_{n+1} = r\\,x_n(1-x_n)\\), le modèle scolaire du chaos. Pousse \\(r\\) de 1 vers 4 et une population stable d'abord se cale, puis se divise pour osciller entre deux valeurs, puis quatre, puis huit — une <em>cascade de doublement de période</em> — avant de sombrer dans le chaos plein. La vraie colonne vertébrale de l'ensemble de Mandelbrot est littéralement ce diagramme de bifurcation déguisé.</p>
<h4><span class="hn">05</span>L'étonnante constante de Feigenbaum</h4>
<p>Mesure à quelle vitesse ces divisions s'accumulent et les intervalles rétrécissent d'un rapport convergeant vers la <strong>constante de Feigenbaum</strong> \\(\\delta \\approx 4.6692\\). La merveille est son universalité : le même nombre exact rythme la route vers le chaos dans les robinets qui gouttent, les circuits oscillants et les fluides en convection — des systèmes qui ne partagent aucune physique, seulement la forme d'une unique bosse. Feigenbaum le perça dans les années 1970 avec des idées de groupe de renormalisation empruntées telles quelles à la physique statistique, exposant un ordre caché courant sous le chaos lui-même.</p>
<h4><span class="hn">06</span>Une courbe aussi rugueuse qu'un plan</h4>
<p>À quel point un bord peut-il se plisser ? Pour l'ensemble de Mandelbrot, la réponse est : au maximum. Shishikura démontra en 1998, par une délicate chirurgie quasi-conforme, que la dimension de Hausdorff de \\(\\partial M\\) est exactement <strong>2</strong> — le plus qu'une courbe plane puisse atteindre. Bien qu'elle trace un contour unidimensionnel, elle se froisse si violemment que, à la limite, elle se comporte comme quelque chose qui remplit de l'aire purement et simplement. Une rugosité infinie, extraite de \\(z^2 + c\\), la plus simple règle non linéaire qui soit.</p>`,
          facts: [
            { e: '🔢', t: `La conjecture MLC (Mandelbrot localement connexe ?) impliquerait que la description combinatoire de M est complète — elle résiste à la preuve depuis 40 ans.` },
            { e: '📐', t: `La constante de Feigenbaum δ ≈ 4,6692 apparaît dans les cascades de doublement de période des robinets qui gouttent, des circuits électroniques et de la convection de Rayleigh-Bénard — toujours le même nombre !` },
            { e: '🌊', t: `L'écoulement turbulent d'un fluide présente une structure multifractale — différentes régions de l'espace se mettent à l'échelle avec différents exposants de Hölder locaux, décrits par le spectre multifractal f(α).` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Application quadratique', e: 'f_c(z) = z^2 + c,\\quad z_0 = 0' },
            { n: 'Ensemble de Mandelbrot', e: 'M = \\{\\, c \\in \\mathbb{C} : \\sup_n |f_c^{\\,n}(0)| < \\infty \\,\\}' },
            { sep: 1 },
            { n: 'Ensemble de Julia', e: 'J_c = \\partial\\{\\, z : f_c^{\\,n}(z) \\to \\infty \\,\\}', c: 'connexe ⟺ c ∈ M' },
            { n: 'Coordonnée de Böttcher', e: '\\varphi_c(z) = \\lim_{n\\to\\infty} [f_c^{\\,n}(z)]^{2^{-n}}' },
            { sep: 1 },
            { n: 'Suite logistique', e: 'x_{n+1} = r\\,x_n(1 - x_n)' },
            { n: 'Constante de Feigenbaum', e: '\\delta \\approx 4.6692', c: 'dim_H(∂M) = 2 (Shishikura 1998)' },
          ] }, sim: 'fractal',
        },
      },
    },
    calculus: {
      title: 'Le calcul et le changement',
      teaser: 'Comment mesurer la vitesse de quelque chose qui ne bouge jamais à vitesse constante ? La réponse a changé la science pour toujours.',
      chips: ['Dérivées', 'Intégrales', 'Infini'],
      lvls: {
        junior: {
          title: `Mesurer le changement — les maths du mouvement !`,
          body: `<p>Lance une balle droit en l'air. Elle monte vite, puis plus lentement, reste suspendue le temps d'un battement de cœur tout en haut, puis retombe de plus en plus vite. Voici une question sournoise qui a déconcerté les gens pendant des siècles : à quelle vitesse va-t-elle à un instant <em>exact</em> — pas sur une seconde, pas même sur un millième de seconde, mais à un unique moment figé ? Fige complètement le temps et la balle n'a pas bougé du tout, donc l'habituel « distance divisée par temps » ne te livre qu'un déroutant zéro sur zéro.</p>
<p>Newton et Leibniz le percèrent au XVIIe siècle, en travaillant séparément, et leur idée est magnifiquement simple : zoome sur n'importe quelle courbe lisse d'assez près et elle commence à ressembler à une droite. La pente de cette droite est la vitesse à cet instant — et, plus généralement, la <strong>dérivée</strong>, le taux auquel quelque chose change en ce moment même. La raideur devient vitesse.</p>
<p>Fais tourner la même machine à l'envers — additionne une infinité de tranches infiniment minces — et tu obtiens l'<strong>intégrale</strong>, qui te livre aires, volumes, distances et grands totaux. Dérivées et intégrales sont deux faces d'une même pièce, et ensemble elles sont peut-être les outils les plus puissants que les mathématiques aient jamais produits, faisant tourner discrètement la physique, l'ingénierie, la médecine, l'économie et presque toutes les sciences qui existent.</p>`,
          facts: [
            { e: '🚀', t: `Les calculs de trajectoire de la NASA pour chaque mission spatiale utilisent le calcul — précisément des équations différentielles issues des lois de Newton.` },
            { e: '💊', t: `La pharmacocinétique (comment les médicaments se déplacent dans ton corps) est régie par des équations différentielles — le calcul dit aux médecins à quelle fréquence prescrire.` },
            { e: '📱', t: `Chaque animation sur ton téléphone utilise le calcul pour calculer des courbes lisses, des trajectoires de mouvement et des simulations physiques en temps réel.` },
          ],
          formula: null, sim: 'calculus',
        },
        student: {
          title: `Dérivées, intégrales et le théorème fondamental du calcul`,
          body: `<p>La <strong>dérivée</strong> est bâtie sur une limite qui fixe droit dans les yeux le problème du « zéro sur zéro » et le bat : \\(f'(x) = \\lim_{h\\to 0} \\dfrac{f(x+h) - f(x)}{h}\\). Géométriquement c'est la pente de la tangente ; physiquement, si \\(f(t)\\) est la position alors \\(f'(t)\\) est la vitesse et \\(f''(t)\\) l'accélération. Deux règles portent l'essentiel du travail : la règle de la puissance \\(\\dfrac{d}{dx}x^n = n x^{n-1}\\), et la règle de la chaîne \\(\\dfrac{d}{dx}f(g(x)) = f'(g(x))\\,g'(x)\\) pour éplucher les fonctions imbriquées.</p>
<p>L'<strong>intégrale définie</strong> \\(\\int_a^b f(x)\\,dx\\) est l'aire signée sous une courbe, définie comme la limite de rectangles toujours plus fins — une somme de Riemann \\(\\lim_{n\\to\\infty}\\sum_i f(x_i)\\,\\Delta x\\). Puis vient la chute qui lie tout le sujet, le <strong>théorème fondamental du calcul</strong> : si \\(F' = f\\), alors \\(\\int_a^b f(x)\\,dx = F(b) - F(a)\\). Dérivation et intégration ressemblent à des tâches totalement différentes — trouver des pentes contre trouver des aires — et pourtant elles sont des inverses exacts. Ce seul fait est le pivot sur lequel tourne le sujet entier.</p>
<p>Pointe le calcul sur le <em>temps</em> et tu obtiens les <strong>équations différentielles</strong>, le langage que la nature utilise pour énoncer ses lois. La plus simple, \\(\\dfrac{dy}{dt} = ky\\), capture tout ce dont la croissance suit le rythme de sa propre taille — populations, intérêts composés, désintégration radioactive — et se résout élégamment en \\(y(t) = y_0 e^{kt}\\). Ajoute un peu de complexité et le même mécanisme livre la deuxième loi de Newton, l'équation des ondes et l'équation de la chaleur, les équations différentielles qui font tourner l'essentiel de la physique et de l'ingénierie.</p>`,
          facts: [
            { e: '💹', t: `Les intérêts composés A = Pe^{rt} sont la solution de dA/dt = rA — la croissance exponentielle en finance est littéralement du calcul.` },
            { e: '⚡', t: `Les quatre équations aux dérivées partielles de Maxwell décrivent tout l'électromagnétisme — des ondes radio à la lumière — en notation du calcul vectoriel.` },
            { e: '🌡️', t: `L'équation de la chaleur ∂u/∂t = α∇²u fut résolue par Fourier à l'aide de la série qui porte désormais son nom.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Dérivée (définition)', e: 'f\'(x) = \\lim_{h\\to 0} \\dfrac{f(x+h) - f(x)}{h}' },
            { n: 'Règle de la puissance', e: '\\dfrac{d}{dx}x^n = n x^{n-1}' },
            { sep: 1 },
            { n: 'TFC, partie I', e: '\\dfrac{d}{dx}\\int_a^x f(t)\\,dt = f(x)' },
            { n: 'TFC, partie II', e: '\\int_a^b f(x)\\,dx = F(b) - F(a)' },
            { sep: 1 },
            { n: 'Croissance exponentielle', e: '\\dfrac{dy}{dt} = ky \\;\\Rightarrow\\; y(t) = y_0 e^{kt}' },
            { n: 'Série de Taylor', e: 'f(x) = \\sum_{n=0}^{\\infty} \\dfrac{f^{(n)}(a)}{n!}(x-a)^n' },
          ] }, sim: 'calculus',
        },
        scholar: {
          title: `Analyse réelle, théorie de la mesure et l'intégrale de Lebesgue`,
          body: `<h4><span class="hn">01</span>Là où Riemann s'épuise</h4>
<p>L'intégrale que tu rencontres d'abord — celle de Riemann — découpe l'axe horizontal en fines bandes et somme leurs aires. Elle marche magnifiquement pour les fonctions lisses de la physique, mais elle s'étrangle sur tout ce qui est trop dentelé. L'horreur classique est la fonction de Dirichlet, égale à 1 sur les rationnels et 0 sur les irrationnels : entre deux points quelconques elle saute une infinité de fois, aucune bande ne se cale, et l'intégrale de Riemann refuse catégoriquement d'exister. Pour faire de l'analyse honnêtement — échanger limites et intégrales sans croiser les doigts — il te faut une définition plus robuste.</p>
<h4><span class="hn">02</span>L'idée de Lebesgue : trancher l'image, pas le domaine</h4>
<p>Le geste de Lebesgue (1902) fut de basculer le tableau sur le côté. Au lieu de partitionner l'entrée, partitionne la <em>sortie</em> : demande quelle part du domaine tombe dans chaque fine bande horizontale de valeurs, et pondère par cette quantité — \\(\\int f\\,d\\mu = \\sup \\sum_i y_i\\,\\mu\\!\\left(f^{-1}[y_i, y_{i+1}]\\right)\\). La fonction de Dirichlet devient aussitôt triviale : les rationnels, où elle vaut 1, forment un ensemble de <em>mesure nulle</em>, donc ils ne contribuent rien et l'intégrale est simplement 0. L'espace \\(L^1(\\mu)\\) des fonctions intégrables devient un espace de Banach complet — un vrai foyer pour l'analyse.</p>
<h4><span class="hn">03</span>La mesure, et les choses qu'on ne peut mesurer</h4>
<p>Sous tout cela se tient la <strong>théorie de la mesure</strong>, l'art d'attribuer de façon cohérente une « taille » aux ensembles — longueur sur la droite, aire dans le plan, probabilité dans un espace d'épreuves — qui survit aux unions dénombrables. Elle est assez générale pour mesurer des bizarreries comme l'ensemble de Cantor, et pourtant elle a une limite dure : en concédant l'axiome du choix, tu peux construire des ensembles si pathologiques qu'aucune mesure cohérente n'existe pour eux. Le paradoxe de Banach-Tarski rôde ici, tranchant une sphère en quelques bouts non mesurables et les réassemblant en deux sphères identiques à la première. La théorie de la mesure est précisément le langage qui explique pourquoi cela devrait sembler impossible.</p>
<h4><span class="hn">04</span>Les théorèmes de convergence — le vrai prix</h4>
<p>Les analystes ne changèrent pas pour l'élégance ; ils changèrent pour la puissance. L'intégrale de Lebesgue arrive avec des théorèmes pour échanger une limite et une intégrale — le pas que les physiciens font constamment, d'ordinaire sans y penser à deux fois. Le <strong>théorème de convergence dominée</strong> est le cheval de trait : si \\(f_n \\to f\\) ponctuellement et sont toutes majorées par une seule \\(g\\) intégrable, avec \\(|f_n| \\le g\\), alors \\(\\lim \\int f_n\\,d\\mu = \\int f\\,d\\mu\\). Riemann n'offre aucune garantie aussi propre, et presque chaque échange de somme, limite et intégrale en physique moderne s'appuie discrètement sur ce résultat.</p>
<h4><span class="hn">05</span>L² et Fourier : les fonctions comme géométrie</h4>
<p>Les fonctions de carré intégrable \\(L^2\\) forment un <em>espace de Hilbert</em> — une géométrie de dimension infinie dotée de longueurs et d'angles, où les exponentielles complexes \\(\\{e^{inx}/\\sqrt{2\\pi}\\}\\) servent d'axes perpendiculaires. Développer une fonction en elles n'est que tracer des perpendiculaires, et l'identité de Parseval \\(\\|f\\|^2 = \\sum_n |\\hat{c}_n|^2\\) est Pythagore déguisé : l'énergie d'un signal égale l'énergie de son spectre. La version continue, la <strong>transformée de Fourier</strong> \\(\\hat{f}(\\xi) = \\int f(x)\\,e^{-2\\pi i \\xi x}\\,dx\\), porte la même géométrie sur toute la droite réelle.</p>
<h4><span class="hn">06</span>Où tout cela atterrit</h4>
<p>Rien de tout ceci n'est ornemental — c'est le plancher sur lequel se tient la science moderne. La mécanique quantique est l'étude des vecteurs d'état dans un espace de Hilbert, avec \\(|\\hat{\\psi}(p)|^2\\) la densité de probabilité de la quantité de mouvement et des opérateurs à la place des observables. La théorie des probabilités est la théorie de la mesure sous un autre nom, et le théorème central limite en découle proprement via les fonctions caractéristiques. Chaque MP3, JPEG et scanner IRM est de l'analyse de Fourier encaissée dans le silicium. Les « infinitésimaux » branlants de Newton et Leibniz mirent deux siècles à devenir rigoureux — et cette rigueur se révéla le socle de la physique du XXe siècle.</p>`,
          facts: [
            { e: '🎵', t: `La compression MP3 et JPEG repose toutes deux sur des transformées de Fourier / en cosinus — écartant les fréquences que les humains ne perçoivent pas pour compresser les fichiers.` },
            { e: '🔬', t: `Les machines IRM reconstruisent des images 3D du corps en transformant à l'inverse par Fourier les signaux de résonance magnétique nucléaire de millions de voxels.` },
            { e: '🌐', t: `Le paradoxe de Banach-Tarski : à l'aide de l'axiome du choix, une sphère peut être décomposée et réassemblée en deux sphères identiques — la théorie de la mesure est pourquoi c'est paradoxal.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Intégrale de Lebesgue', e: '\\int f\\,d\\mu = \\sup \\sum_i y_i\\,\\mu\\!\\left(f^{-1}[y_i, y_{i+1}]\\right)' },
            { n: 'Convergence dominée', e: '|f_n| \\le g \\in L^1 \\;\\Rightarrow\\; \\lim\\!\\int f_n = \\int \\lim f_n' },
            { sep: 1 },
            { n: 'Transformée de Fourier', e: '\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x)\\,e^{-2\\pi i \\xi x}\\,dx' },
            { n: 'Identité de Parseval', e: '\\|f\\|^2 = \\sum_n |\\hat{c}_n|^2' },
            { sep: 1 },
            { n: 'Norme de Sobolev', e: '\\|f\\|_{H^k}^2 = \\sum_{|\\alpha|\\le k} \\|\\partial^\\alpha f\\|_{L^2}^2' },
          ] }, sim: 'calculus',
        },
      },
    },
    circuits: {
      title: 'Loi d\'Ohm et circuits',
      teaser: 'La tension pousse, la résistance résiste, le courant circule — l\'unique équation derrière chaque gadget que tu possèdes.',
      chips: ['Courant', 'Tension', 'Loi d\'Ohm'],
      lvls: {
        junior: {
          title: `La tension pousse, la résistance résiste, le courant circule`,
          body: `<p>L'électricité dans un fil se comporte beaucoup comme l'eau dans un tuyau. La pile est une pompe : elle fournit la poussée — la <strong>tension</strong> — qui entraîne un <strong>courant</strong> de charge électrique autour de la boucle. Plus grande la poussée, plus grand le débit. Branche une ampoule et cette charge qui circule chauffe un fin filament jusqu'à l'incandescence. Coupe la boucle n'importe où et tout s'arrête à l'instant, car la charge n'a soudain plus où aller.</p>
<p>Mais le fil et l'ampoule combattent aussi un peu le débit, et cette opposition est la <strong>résistance</strong>. Un fil fin, long ou mauvais conducteur résiste davantage, tout comme un tuyau étroit étrangle l'eau. Plus de résistance signifie moins de courant pour la même poussée. Donc le courant est en réalité le résultat d'un bras de fer : la tension qui essaie d'entraîner la charge, la résistance qui essaie de la retenir.</p>
<p>Georg Ohm découvrit que la règle qui les relie est merveilleusement simple : <strong>courant = tension ÷ résistance</strong>. Double la tension de la pile et tu doubles le courant. Double la résistance et tu le réduis de moitié. Cette seule relation, apprenable en une après-midi, explique pourquoi un variateur baisse une lampe, pourquoi les câbles épais transportent plus de puissance, et pourquoi le chargeur de ton téléphone est si pointilleux sur la tension.</p>`,
          facts: [
            { e: '🔋', t: `Une pile ne stocke pas de l'électricité — elle stocke de l'énergie chimique et la dépense en poussant la charge autour d'un circuit. « À plat » veut dire que la chimie est épuisée.` },
            { e: '💡', t: `Une vieille ampoule à filament ne transforme qu'environ 5% de son énergie en lumière ; le reste devient de la chaleur. Les LED inversent ce rapport, ce qui est pourquoi elles restent froides.` },
            { e: '⚡', t: `Les électrons dérivent étonnamment lentement — des millimètres par seconde — et pourtant le signal électrique qui les met en mouvement file dans le fil à presque la vitesse de la lumière.` },
          ],
          formula: null, sim: 'circuits',
        },
        student: {
          title: `La loi d'Ohm, la puissance et ce qu'est vraiment le courant`,
          body: `<p>Un <strong>courant</strong> \\(I\\) est le débit auquel la charge passe devant un point, mesuré en ampères (coulombs par seconde). Pour l'entraîner il faut une différence de potentiel — une <strong>tension</strong> \\(V\\), en volts — ici fournie par la pile. Tout conducteur réel s'oppose au débit avec une <strong>résistance</strong> \\(R\\), en ohms. La loi d'Ohm relie les trois : \\(V = IR\\), ou de façon équivalente \\(I = V/R\\). C'est moins une loi de la nature qu'une propriété des matériaux « ohmiques », mais pour des métaux tenus à température fixe elle tient remarquablement bien.</p>
<p>Réarrangée en \\(I = V/R\\) elle raconte toute l'histoire d'un circuit simple : élève la tension de la pile et le courant grimpe en proportion ; ajoute de la résistance et le courant baisse. Branche des résistances en <em>série</em> et leurs résistances s'additionnent, \\(R = R_1 + R_2 + \\dots\\) ; branche-les en <em>parallèle</em> et ce sont les inverses qui s'additionnent, \\(\\tfrac{1}{R} = \\tfrac{1}{R_1} + \\tfrac{1}{R_2}\\), donc des chemins parallèles portent toujours plus de courant total qu'un seul.</p>
<p>Le courant fait aussi du travail, et le débit de ce travail est la <strong>puissance</strong> : \\(P = VI\\), qui par la loi d'Ohm vaut aussi \\(P = I^2R = V^2/R\\). Ce terme \\(I^2R\\) est pourquoi la résistance chauffe les choses — grille-pain, bouilloires, ampoules à filament et le bloc tiède du chargeur de ton portable encaissent tous l'énergie électrique en chaleur. C'est aussi pourquoi le réseau transporte l'électricité à d'énormes tensions : pour une puissance donnée, un \\(V\\) plus élevé signifie un \\(I\\) plus petit, et un \\(I\\) plus petit signifie bien moins d'énergie gaspillée à chauffer les lignes.</p>`,
          facts: [
            { e: '🔌', t: `La tension du secteur est élevée (≈120-230 V) mais les appareils tirent un courant modeste. Les centrales transmettent à des centaines de milliers de volts pour réduire drastiquement les pertes.` },
            { e: '🌡️', t: `La résistance d'une ampoule augmente quand elle chauffe, donc elle n'obéit pas à V=IR avec une valeur fixe — sa résistance dépend de la température.` },
            { e: '🔗', t: `Les guirlandes en série s'éteignent toutes quand une ampoule lâche, car couper l'unique boucle arrête le courant partout. Les guirlandes en parallèle restent allumées.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Loi d\'Ohm', e: 'V = IR' },
            { n: 'Courant', e: 'I = \\dfrac{V}{R}' },
            { sep: 1 },
            { n: 'Puissance', e: 'P = VI = I^2R = \\dfrac{V^2}{R}' },
            { n: 'Série', e: 'R = R_1 + R_2 + \\dots' },
            { n: 'Parallèle', e: '\\dfrac{1}{R} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\dots' },
          ] }, sim: 'circuits',
        },
        scholar: {
          title: `De la loi d'Ohm à la théorie des circuits et à son origine microscopique`,
          body: `<h4><span class="hn">01</span>Les lois de Kirchhoff ferment le système</h4>
<p>La loi d'Ohm seule ne peut résoudre un réseau — elle relie la tension et le courant d'un élément, mais ne dit rien sur la façon dont les éléments se connectent. Les deux règles de Kirchhoff fournissent le reste. La <strong>loi des courants</strong> (conservation de la charge à un nœud : \\(\\sum I_{\\text{in}} = \\sum I_{\\text{out}}\\)) et la <strong>loi des tensions</strong> (conservation de l'énergie autour de toute boucle : \\(\\sum V = 0\\)) transforment tout réseau de résistances en un ensemble résoluble d'équations linéaires.</p>
<h4><span class="hn">02</span>Le tableau microscopique</h4>
<p>Dans un métal, les électrons de conduction dérivent sous un champ appliqué \\(E\\), diffusant continuellement sur le réseau vibrant. Moyennée sur ce chaos, \\(\\mathbf{J} = \\sigma \\mathbf{E}\\) — la vraie forme locale de la loi d'Ohm, avec \\(\\sigma\\) la conductivité. Intègre-la le long d'un fil uniforme et tu récupères \\(V = IR\\) avec \\(R = \\rho L/A\\). La résistance est donc de la géométrie (\\(L/A\\)) multipliée par du matériau (la résistivité \\(\\rho\\)).</p>
<h4><span class="hn">03</span>Vitesse de dérive contre vitesse du signal</h4>
<p>La vitesse de dérive des électrons est minuscule — autour de 0,1 mm/s — et pourtant une lampe s'allume à l'instant où tu bascules l'interrupteur. La résolution : le champ électrique lui-même se propage dans le conducteur à une fraction notable de \\(c\\). Les électrons étaient déjà répartis dans tout le fil ; le champ leur dit simplement de commencer à se déplacer tous à la fois.</p>
<h4><span class="hn">04</span>Courant alternatif, impédance et le réseau</h4>
<p>Avec le courant alternatif, condensateurs et bobines ajoutent une opposition dépendant de la fréquence appelée réactance, et la résistance se généralise en une <em>impédance</em> complexe \\(Z\\). La perte \\(P = I^2R\\) est ce qui trancha la « guerre des courants » du XIXe siècle : l'alternatif l'emporta parce que les transformateurs peuvent échanger tension contre courant à volonté, et la transmission à haute tension réduit à une fraction la chaleur \\(I^2R\\) gaspillée sur de longues distances.</p>
<h4><span class="hn">05</span>Quand la loi d'Ohm échoue</h4>
<p>Diodes, transistors, ampoules à filament, électrolytes et plasmas sont tous <em>non ohmiques</em> : leurs courbes courant-tension se courbent au lieu de courir droit. La loi d'Ohm est l'approximation linéaire d'une relation en général non linéaire — la tangente qui se trouve être presque exacte pour un métal froid, et la raison pour laquelle c'est par là que commence tout cours d'électronique.</p>`,
          facts: [
            { e: '🔥', t: `Les lignes de transmission perdent de la puissance en chaleur I²R. Doubler la tension (et diviser le courant par deux) pour la même puissance réduit ces pertes au quart.` },
            { e: '🧲', t: `L'alternatif a battu le continu pour le réseau parce que les transformateurs élèvent la tension pour la transmission et l'abaissent pour l'usage — chose difficile à faire avec le continu.` },
            { e: '💎', t: `Les supraconducteurs ont une résistance exactement nulle sous une température critique : un courant lancé dans une boucle supraconductrice peut circuler pendant des années sans aucune pile.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Loi d\'Ohm locale', e: '\\mathbf{J} = \\sigma \\mathbf{E}' },
            { n: 'Résistance', e: 'R = \\rho \\dfrac{L}{A}' },
            { sep: 1 },
            { n: 'Courant de Kirchhoff', e: '\\sum I_{\\text{in}} = \\sum I_{\\text{out}}' },
            { n: 'Tension de Kirchhoff', e: '\\sum_{\\text{loop}} V = 0' },
            { n: 'Dissipation', e: 'P = I^2R' },
          ] }, sim: 'circuits',
        },
      },
    },
    states: {
      title: 'Les états de la matière',
      teaser: 'Glace, eau, vapeur — la même substance en trois déguisements, et la chaleur est la seule différence.',
      chips: ['Solide', 'Liquide', 'Gaz'],
      lvls: {
        junior: {
          title: `Solide, liquide, gaz — tout est question de vitesse des particules`,
          body: `<p>Glace, eau, vapeur — trois choses complètement différentes, et pourtant elles sont toutes exactement la même substance : \\(H_2O\\). La seule différence est la quantité d'énergie qu'ont les minuscules particules et à quel point elles se tiennent l'une à l'autre. Ajoute de la chaleur et tu ne changes pas <em>ce que</em> sont les particules, tu les fais juste s'agiter plus vite. C'est tout le secret des trois <strong>états de la matière</strong>.</p>
<p>Dans un <strong>solide</strong> les particules sont rangées en un motif net et fixe, vibrant seulement sur place — donc un solide garde sa forme. Ajoute de la chaleur et elles vibrent plus fort jusqu'à se libérer de leurs rangs et commencer à glisser les unes contre les autres : c'est maintenant un <strong>liquide</strong>, qui coule et prend la forme de son récipient mais garde le même volume. Chauffe-le davantage et les particules s'arrachent complètement les unes aux autres et volent librement, rebondissant sur les parois — un <strong>gaz</strong>, qui s'étend pour remplir tout espace qu'on lui donne.</p>
<p>Les sauts entre états ont des noms : fusion et solidification (solide ↔ liquide), ébullition et condensation (liquide ↔ gaz). Voici une surprise : pendant que quelque chose fond ou bout, sa température ne monte pas du tout, même si tu continues de chauffer. Toute cette énergie sert à briser les liaisons entre particules, pas à les accélérer. C'est pourquoi une casserole d'eau bouillante reste bloquée à 100 °C peu importe à quel point tu montes le feu.</p>`,
          facts: [
            { e: '🧊', t: `L'eau est inhabituelle : la glace flotte sur son propre liquide, car l'eau solide est moins dense que la liquide. Presque tout le reste coule dans sa propre fonte.` },
            { e: '🌡️', t: `Pendant que la glace fond ou que l'eau bout, la température reste stable — la chaleur sert à briser les liaisons, pas à élever la température.` },
            { e: '💨', t: `Il y a un quatrième état, le plasma — un gaz surchauffé privé d'électrons. Étoiles, éclairs et enseignes au néon sont du plasma, l'état le plus courant de l'univers.` },
          ],
          formula: null, sim: 'states',
        },
        student: {
          title: `Mouvement des particules, changements d'état et chaleur latente`,
          body: `<p>La <strong>théorie cinétique</strong> dit que la matière est faite de particules en mouvement constant, et que la température est simplement une mesure de leur <em>énergie cinétique moyenne</em>. L'état dépend d'un bras de fer entre ce mouvement (qui disperse les particules) et les forces attractives entre elles (qui les tiennent ensemble). Solide : les forces l'emportent, particules verrouillées dans un réseau, seulement vibrantes. Liquide : quasi-égalité, particules en contact mais mobiles. Gaz : le mouvement l'emporte, particules éloignées et indépendantes.</p>
<p>Chauffer un solide suit une <strong>courbe de chauffage</strong> : la température monte régulièrement, s'aplatit au point de fusion, monte à travers le liquide, s'aplatit au point d'ébullition, puis monte à travers le gaz. Les tronçons plats sont les changements d'état, et là l'énergie ajoutée — la <strong>chaleur latente</strong> — sert entièrement à vaincre les forces intermoléculaires, pas à élever la température. C'est pourquoi les brûlures de vapeur sont si graves : la vapeur qui se condense déverse une grande chaleur latente droit sur ta peau.</p>
<p>La pression compte aussi, pas seulement la température. Comprime un gaz assez fort et il se liquéfie ; baisse la pression et un liquide bout à une température plus basse (c'est pourquoi l'eau bout sous 100 °C en montagne). Un <strong>diagramme de phase</strong> cartographie quel état existe à chaque pression et température, y compris le point triple (les trois coexistent) et le point critique (au-delà duquel liquide et gaz deviennent un seul).</p>`,
          facts: [
            { e: '🔥', t: `La vapeur à 100 °C brûle bien pire que l'eau à 100 °C : en se condensant elle libère sa chaleur latente droit dans ta peau.` },
            { e: '🏔️', t: `L'eau bout sous 100 °C en montagne, où la pression de l'air est plus basse — c'est pourquoi cuisiner prend plus de temps en altitude.` },
            { e: '❄️', t: `La glace carbonique (CO₂ solide) saute entièrement l'état liquide : elle se sublime directement de solide à gaz à pression ordinaire.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Température', e: 'T \\propto \\overline{KE}', c: 'énergie cinétique moyenne' },
            { n: 'Chaleur latente', e: 'Q = mL', c: 'énergie pour un changement d\'état' },
            { sep: 1 },
            { n: 'Les transitions', e: '\\text{solide} \\xrightarrow{T_m} \\text{liquide} \\xrightarrow{T_b} \\text{gaz}' },
          ] }, sim: 'states',
        },
        scholar: {
          title: `Théorie cinétique, diagrammes de phase et les états au-delà des trois principaux`,
          body: `<h4><span class="hn">01</span>Théorie cinétique-moléculaire</h4>
<p>Les particules sont en mouvement incessant avec une distribution des vitesses de <em>Maxwell-Boltzmann</em> ; la température fixe la moyenne, mais il y a toujours un étalement. Cet étalement est pourquoi l'évaporation survient bien en dessous de l'ébullition : les molécules les plus rapides s'échappent de la surface, emportant de l'énergie et refroidissant ce qui reste — exactement comme la transpiration te refroidit.</p>
<h4><span class="hn">02</span>Les forces intermoléculaires fixent les transitions</h4>
<p>Les points de fusion et d'ébullition reflètent la force des liaisons entre particules — van der Waals < dipôle < liaison hydrogène < ionique ou métallique. Le point d'ébullition de l'eau est étonnamment élevé pour une si petite molécule à cause de la liaison hydrogène, la même liaison qui espace les molécules dans la glace et la fait flotter.</p>
<h4><span class="hn">03</span>Le diagramme de phase</h4>
<p>Une carte pression-température divise solide, liquide et gaz par des lignes de coexistence. Deux points sont spéciaux : le <strong>point triple</strong>, l'unique P et T où les trois coexistent, et le <strong>point critique</strong>, au-delà duquel la distinction liquide-gaz se dissout en un seul fluide supercritique. Les chaleurs latentes sont les énergies nécessaires pour traverser chaque ligne.</p>
<h4><span class="hn">04</span>Au-delà des trois principaux</h4>
<p>Il y a le plasma — un gaz ionisé, et l'état le plus courant de l'univers visible — et, près du zéro absolu, des états véritablement quantiques : les condensats de Bose-Einstein, où les atomes fusionnent en un seul état quantique partagé, et les superfluides et supraconducteurs qui coulent ou conduisent avec une résistance nulle. « État de la matière » est une idée bien plus riche que les trois que nous rencontrons d'abord.</p>`,
          facts: [
            { e: '🥶', t: `Près du zéro absolu, les atomes peuvent fusionner en un condensat de Bose-Einstein — tous partageant un seul état quantique et se comportant comme un unique « super-atome ».` },
            { e: '💧', t: `Le point triple de l'eau (0,01 °C, 611 Pa) est si reproductible qu'il a servi à aider à définir l'échelle de température kelvin.` },
            { e: '🌊', t: `Au-dessus de son point critique (374 °C, 218 atm) l'eau devient un fluide supercritique — ni liquide ni gaz, et un puissant solvant.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Énergie cinétique moyenne', e: '\\overline{KE} = \\tfrac{3}{2}k_BT' },
            { n: 'Chaleur latente', e: 'Q = mL' },
            { sep: 1 },
            { n: 'Clausius-Clapeyron', e: '\\dfrac{dP}{dT} = \\dfrac{L}{T\\,\\Delta V}', c: 'pente d\'une frontière de phase' },
          ] }, sim: 'states',
        },
      },
    },
    thermo: {
      title: 'Chaleur et thermodynamique',
      teaser: 'Pourquoi la glace fond-elle toujours et le café refroidit-il toujours ? L\'univers a une direction.',
      chips: ['Entropie', 'Énergie', 'Chaleur'],
      lvls: {
        junior: {
          title: `La chaleur va toujours du chaud vers le froid — jamais l'inverse`,
          body: `<p>Laisse un chocolat chaud sur la table et reviens plus tard : il a refroidi. Remarque maintenant ce qui n'arrive <em>jamais</em> — une boisson froide ne se réchauffe pas d'un coup toute seule en tirant de la chaleur de la pièce. La chaleur ne voyage jamais que dans un sens, du chaud vers le froid. Cette voie à sens unique paraît évidente, mais elle se révèle être l'une des règles les plus profondes de toute la physique.</p>
<p>Zoome assez et tout — l'air, ta main, cet écran — est un essaim d'atomes qui s'agitent. « Chaud » veut juste dire qu'ils s'agitent vite ; « froid » qu'ils s'agitent lentement. Quand ta tasse tiède rencontre l'air plus frais, les atomes rapides bousculent les lents et partagent leur mouvement, comme une foule qui se pousse jusqu'à ce que tout le monde avance au même rythme. La boisson refroidit, l'air se réchauffe un peu, et ils se calent au milieu. Cet état calé et partagé porte un nom : l'<strong>équilibre</strong>.</p>
<p>Derrière la voie à sens unique se cache une seule idée — l'<strong>entropie</strong>, grosso modo une mesure de à quel point les choses sont étalées et mélangées. Laissé seul, le monde dérive toujours vers <em>plus</em> de désordre, jamais moins. Ta chambre se met en désordre toute seule ; elle ne se range jamais d'elle-même. Une goutte d'encre se déroule dans l'eau et ne se rassemble jamais en une goutte. Cette dérive implacable est pourquoi un moteur parfait est impossible, pourquoi tu te souviens du passé mais pas du futur, et — poussée à la limite — comment l'univers entier va lentement s'éteindre. Une tasse de café qui refroidit, c'est l'univers qui te montre discrètement dans quel sens le temps s'écoule.</p>`,
          facts: [
            { e: '🧊', t: `La glace absorbe de la chaleur en fondant mais reste à 0°C tout du long — toute cette énergie brise des liaisons moléculaires, elle n'élève pas la température.` },
            { e: '🌡️', t: `La température la plus froide possible est −273,15°C (le zéro absolu, 0 K). À ce point les atomes ont le minimum de mouvement possible — la mécanique quantique les empêche de s'arrêter tout à fait.` },
            { e: '🚀', t: `Les fusées fonctionnent grâce à la thermodynamique : brûler le carburant crée un gaz extrêmement chaud, qui se détend rapidement et sort par l'arrière, générant une poussée par la 3e loi de Newton.` },
          ],
          formula: null, sim: 'thermo',
        },
        student: {
          title: `Les quatre principes de la thermodynamique`,
          body: `<p>Quatre principes soutiennent toute la thermodynamique, et ensemble ils expliquent pourquoi les moteurs gaspillent du carburant, pourquoi les machines à mouvement perpétuel sont une chimère, et pourquoi le temps ne va que dans une seule direction. Ils furent découverts dans le désordre — c'est pourquoi le premier s'appelle le <em>zéroième</em>.</p>
<p>Le <strong>principe zéro</strong> est celui que personne ne se donna la peine d'écrire jusqu'à ce qu'on réalise que tout le monde le supposait discrètement : si A est en équilibre thermique avec B, et B avec C, alors A et C s'accordent aussi. Cette transitivité d'apparence banale est ce qui permet à un thermomètre de signifier quoi que ce soit — c'est pourquoi un nombre sur un tube de verre peut tenir lieu de « à quel point c'est chaud ».</p>
<p>Le <strong>premier principe</strong> est de la comptabilité d'énergie, rien de plus : \\(\\Delta U = Q - W\\). Quelle que soit la chaleur \\(Q\\) que tu verses, moins le travail \\(W\\) que le système fait sur le monde extérieur, c'est ce qui reste comme énergie interne. Rien n'est créé ni détruit, seulement échangé — chimique en chaleur dans un moteur, chimique en électrique dans une pile, nucléaire en lumière solaire dans une étoile. Les comptes s'équilibrent toujours.</p>
<p>Le <strong>deuxième principe</strong> est celui qui a des dents : l'entropie d'un système isolé ne baisse jamais. Chaque changement spontané la pousse vers le haut, et cette dérive vers le haut <em>est</em> la flèche du temps — un verre se brise mais ne se rassemble jamais. Il plafonne aussi chaque moteur jamais construit. Carnot montra que même un moteur parfait, faisant la navette de chaleur entre un réservoir chaud à \\(T_h\\) et un froid à \\(T_c\\), ne peut faire mieux que \\(\\eta = 1 - T_c/T_h\\). Tant que \\(T_c > 0\\), le rendement parfait est simplement hors de portée — non par manque d'ingéniosité, mais parce que l'univers l'interdit.</p>
<p>Le <strong>troisième principe</strong> ferme le bas de l'échelle : quand \\(T \\to 0\\), l'entropie se cale sur un minimum constant (zéro pour un cristal parfait). Une curieuse conséquence est que le zéro absolu est inatteignable — tu peux t'en approcher toujours plus, mais chaque pas te rapporte moins, et tu n'arrives jamais tout à fait.</p>`,
          facts: [
            { e: '🏎️', t: `Un moteur de voiture n'a typiquement qu'un rendement de 25–35%. Le reste de l'énergie chimique du carburant est gaspillé en chaleur — conséquence directe du 2e principe.` },
            { e: '❄️', t: `Un réfrigérateur déplace la chaleur du froid (intérieur) vers le chaud (pièce) — cela requiert un travail extérieur (électricité), en accord avec le 2e principe.` },
            { e: '🔥', t: `Le Soleil convertit ~4 millions de tonnes de masse en énergie par seconde via E = mc². Il le fait depuis 4,6 milliards d'années et a du carburant pour ~5 milliards de plus.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Premier principe', e: '\\Delta U = Q - W', c: 'conservation de l\'énergie' },
            { n: 'Variation d\'entropie', e: '\\Delta S = \\dfrac{Q_{\\text{rev}}}{T}', c: 'processus réversible' },
            { sep: 1 },
            { n: 'Loi des gaz parfaits', e: 'PV = nRT', c: 'R = 8.314 J·mol⁻¹·K⁻¹' },
            { n: 'Rendement de Carnot', e: '\\eta_{\\max} = 1 - \\dfrac{T_c}{T_h}' },
            { sep: 1 },
            { n: 'Constante de Boltzmann', e: 'k_B = 1.381\\times10^{-23}\\ \\text{J·K}^{-1}' },
          ] }, sim: 'thermo',
        },
        scholar: {
          title: `Mécanique statistique : des micro-états à l'entropie des trous noirs`,
          body: `<h4><span class="hn">01</span>Micro-états, macro-états et le postulat statistique</h4>
<p>La thermodynamique ressemble à une science de machines à vapeur et de lois des gaz, mais dessous c'est en réalité de la probabilité appliquée. Tout découle d'une hypothèse trompeusement modeste — le <em>postulat fondamental</em> : un système isolé à l'équilibre a une chance égale de se trouver dans n'importe lequel de ses micro-états accessibles. Compte ces micro-états et tu as fait la physique. Si \\(\\Omega(E,V,N)\\) est le nombre d'arrangements microscopiques compatibles avec l'énergie, le volume et le nombre de particules macroscopiques, alors le \\(S = k_B \\ln \\Omega\\) de Boltzmann <em>est</em> l'entropie — pas un vague « désordre », mais le logarithme d'un décompte. Température, pression et potentiel chimique sont simplement comment ce décompte réagit quand tu pousses sur \\(E\\), \\(V\\) ou \\(N\\) : \\(\\tfrac{1}{T} = \\left(\\tfrac{\\partial S}{\\partial E}\\right)_{V,N}\\), et ainsi de suite. Pourquoi un gaz s'étend-il pour remplir sa boîte ? Non parce que quelque chose écarte les molécules, mais parce que les arrangements étalés dépassent en nombre les rangés si absurdement que tu attendrais environ \\(10^{10^{23}}\\) ans pour surprendre chaque molécule blottie dans un coin. L'équilibre n'est pas une loi de force. C'est le casino qui gagne toujours.</p>
<h4><span class="hn">02</span>L'ensemble canonique et la fonction de partition</h4>
<p>Les systèmes réels sont rarement isolés ; ils sont en contact avec un environnement à une certaine température \\(T\\). Confie la comptabilité de l'énergie à un bain thermique et maximise l'entropie \\(S = -k_B \\sum_i P_i \\ln P_i\\) à énergie <em>moyenne</em> fixe, et les probabilités tombent comme des poids de Boltzmann, \\(P_i = e^{-\\beta E_i}/Z\\) avec \\(\\beta = 1/k_B T\\). Le normalisateur \\(Z = \\sum_i e^{-\\beta E_i}\\) — la <strong>fonction de partition</strong> — ressemble à une humble somme, et pourtant elle contient discrètement toute la thermodynamique. Différencie son logarithme et le reste dégringole : \\(U = -\\partial_\\beta \\ln Z\\), l'énergie libre \\(F = -k_B T \\ln Z\\), l'entropie \\(S = -\\partial F/\\partial T\\), la pression, la capacité thermique. Laisse aussi les particules aller et venir et tu passes à l'ensemble grand-canonique, où une fugacité \\(z = e^{\\beta\\mu}\\) tient les comptes. Le rassurant : une fois \\(N\\) grand, le choix de l'ensemble cesse de compter — ils s'accordent tous — donc tu choisis celui qui rend l'algèbre la plus douce.</p>
<h4><span class="hn">03</span>Potentiels, transformées de Legendre et relations de Maxwell</h4>
<p>L'énergie interne est le potentiel naturel quand tu contrôles entropie et volume — mais qui contrôle l'entropie dans un laboratoire ? En pratique tu fixes la température, ou la pression, ou les deux, et chaque choix appelle son propre potentiel. Le pont entre eux est la <strong>transformée de Legendre</strong>, qui échange une variable contre sa pente conjuguée : Helmholtz \\(F = U - TS\\) à \\(T\\) fixe, enthalpie \\(H = U + PV\\) à \\(P\\) fixe, Gibbs \\(G = U - TS + PV\\) pour les deux, le grand potentiel \\(\\Omega = F - \\mu N\\) quand le nombre de particules flotte. Quel que soit ton choix, l'équilibre le <em>minimise</em>. Et comme ces potentiels sont des fonctions bien élevées, l'ordre des dérivées secondes croisées ne peut pas compter — ce seul fait te livre les <strong>relations de Maxwell</strong>, comme \\(\\left(\\tfrac{\\partial S}{\\partial V}\\right)_T = \\left(\\tfrac{\\partial P}{\\partial T}\\right)_V\\), échangeant quelque chose que tu ne peux mesurer contre quelque chose que tu peux. Exige que les potentiels se courbent dans le bon sens et la stabilité s'ensuit : capacités thermiques positives, compressibilités positives.</p>
<h4><span class="hn">04</span>Fluctuations et le théorème fluctuation-dissipation</h4>
<p>Les moyennes ne sont que la moitié de l'histoire ; la mécanique statistique te dit aussi de combien les choses tremblent. Un système dans un bain thermique ne tient pas une énergie fixe — il fluctue, et la taille de la fluctuation est arrimée à une quantité que tu connais déjà : \\(\\langle \\Delta E^2 \\rangle = k_B T^2 C_V\\). Observe l'échelle. L'oscillation <em>relative</em> rétrécit comme \\(1/\\sqrt{N}\\), et c'est pourquoi une tasse de café a une température parfaitement nette alors qu'une seule protéine non. Ce pont d'une fluctuation spontanée à une réponse mesurable est le premier indice du <strong>théorème fluctuation-dissipation</strong> : pique doucement un système et sa réaction est dictée par le bruit qu'il fait déjà au repos. Einstein trouva le cas le plus propre en 1905 — \\(D = \\mu\\, k_B T\\), liant diffusion et frottement — et Perrin en fit une balance, fixant le nombre d'Avogadro en observant des grains tituber dans l'eau.</p>
<h4><span class="hn">05</span>Irréversibilité : le théorème H et ses paradoxes</h4>
<p>Voici l'énigme qui faillit briser Boltzmann. Son <strong>théorème H</strong> montre une quantité \\(H = \\int f \\ln f \\, d^3v\\) glissant seulement vers le bas tandis qu'un gaz se relaxe — ce qui n'est que l'entropie qui grimpe, le deuxième principe extrait des collisions. Magnifique, sauf que ces collisions obéissent aux lois de Newton, et les lois de Newton marchent tout aussi bien à l'envers. Inverse chaque vitesse et l'entropie devrait <em>baisser</em> (objection de Loschmidt) ; attends assez longtemps et Poincaré garantit que le gaz revient presque exactement à son amas de départ (celle de Zermelo). Les deux objections sont correctes, et les deux manquent le point. La flèche du temps ne vit pas dans la dynamique ; elle vit dans la comptabilité. La dérivation de Boltzmann suppose discrètement que les molécules sont décorrélées <em>avant</em> une collision mais pas après — le <em>Stosszahlansatz</em> — et c'est là que l'asymétrie se faufile. Les récurrences sont réelles, mais elles prennent de l'ordre de \\(e^{N}\\) éternités, éclipsant la durée de vie de l'univers. Au bout du compte la flèche remonte à un fait brut : l'univers a commencé dans un état d'entropie stupéfiamment basse, et nous glissons vers le bas depuis.</p>
<h4><span class="hn">06</span>Statistiques quantiques et l'échec du tableau classique</h4>
<p>Le décompte classique s'effondre dès l'instant où les particules deviennent véritablement identiques, car « particule 1 ici, particule 2 là » ne se distingue plus de son propre échange. La mécanique quantique divise alors le monde en deux tribus. Les <strong>bosons</strong> sont grégaires : \\(\\langle n \\rangle = \\dfrac{1}{e^{\\beta(\\varepsilon-\\mu)} - 1}\\) laisse un nombre quelconque s'entasser dans un seul état, et quand ils le font tu obtiens superfluides, lasers et condensats de Bose-Einstein. Les <strong>fermions</strong> sont solitaires : \\(\\langle n \\rangle = \\dfrac{1}{e^{\\beta(\\varepsilon-\\mu)} + 1}\\) plafonne chaque état à un, et ce refus têtu d'être comprimés — la pression de dégénérescence — est ce qui soutient une naine blanche contre sa propre gravité. Les deux se fondent dans la familière courbe de Maxwell-Boltzmann quand le gaz est chaud et raréfié. Le même décompte quantique sauva la physique de la <strong>catastrophe ultraviolette</strong> : traite chaque mode de rayonnement classiquement et l'équipartition lui accorde \\(\\tfrac{1}{2}k_B T\\), sommant à un feu infiniment brillant. L'idée de Planck que l'énergie vient en grumeaux, \\(E = n\\hbar\\omega\\), affame les modes à haute fréquence, dompte le spectre, et — presque par accident — ouvrit le siècle quantique.</p>
<h4><span class="hn">07</span>Transitions de phase, criticité et le groupe de renormalisation</h4>
<p>Fais bouillir de l'eau et quelque chose de mathématiquement violent se produit : l'énergie libre développe un coude. Les transitions de phase nettes n'existent qu'à la limite d'une infinité de particules, où elles apparaissent comme des <em>non-analyticités</em>. Près d'une transition continue le système oublie sa propre taille, et des quantités divergent comme des lois de puissance fixées par quelques <strong>exposants critiques</strong>. Le choc, compris seulement dans les années 1960 et 70, est que ces exposants sont <em>universels</em> : un aimant mourant à son point de Curie, un fluide à son point critique, et un alliage qui se démixe partagent tous les mêmes nombres — sensibles à la dimensionnalité et à la symétrie, mais aveugles à chaque détail microscopique. Kadanoff et Wilson expliquèrent pourquoi avec le <strong>groupe de renormalisation</strong> : zoome en arrière, moyenne sur le petit, répète, et regarde le système s'écouler vers un point fixe qui balaie l'inutile et ne garde que ce qui compte. Cela valut à Wilson le Nobel 1982 et réorganisa discrètement la façon de penser des physiciens, des supraconducteurs à la théorie quantique des champs.</p>
<h4><span class="hn">08</span>Frontières : théorèmes de travail, information et gravité</h4>
<p>Pendant un siècle le deuxième principe ressembla à une voie à sens unique sans raccourcis ; puis vinrent les surprises. L'<strong>égalité de Jarzynski</strong> \\(\\langle e^{-\\beta W} \\rangle = e^{-\\beta \\Delta F}\\) et sa cousine plus fine, le théorème de Crooks, disent que si tu tires un système hors d'équilibre aussi brutalement que tu veux et moyennes de la bonne façon sur de nombreuses tentatives, tu récupères exactement la différence d'énergie libre <em>d'équilibre</em> — désormais un truc standard pour lire les énergies de repliement de molécules uniques étirées à la pince optique. Le <strong>principe de Landauer</strong> attrapa enfin le démon de Maxwell : le démon semble tricher le deuxième principe jusqu'à ce que tu te rappelles qu'il doit tôt ou tard effacer sa mémoire, et effacer un bit coûte au moins \\(k_B T \\ln 2\\) de chaleur. Thermodynamique et information se révèlent être le même sujet en habits différents. Le retournement le plus étrange est gravitationnel. Un trou noir porte une entropie \\(S = \\dfrac{k_B c^3 A}{4 G \\hbar}\\) fixée par l'<em>aire</em> de son horizon, pas le volume à l'intérieur, et rayonne à la température de Hawking \\(T = \\dfrac{\\hbar c^3}{8\\pi G k_B M}\\). Que cette entropie doive vivre sur une surface est la graine du principe holographique — et très probablement un indice vers la théorie qui mariera enfin la gravité au quantique.</p>`,
          facts: [
            { e: '🕳️', t: `Un trou noir est l'objet le plus entropique connu : un trou noir d'une masse solaire contient ~10⁷⁷ k_B d'entropie — environ 10²⁰ fois l'entropie thermodynamique du Soleil. Presque toute l'entropie de l'univers observable se cache derrière les horizons des événements.` },
            { e: '🧬', t: `Les théorèmes de Jarzynski et de Crooks furent vérifiés en dépliant mécaniquement des molécules uniques d'ARN/ADN à la pince optique (Collin et al., Nature 2005), récupérant des énergies libres d'équilibre à partir de tractions irréversibles.` },
            { e: '🌡️', t: `Les systèmes à spectre d'énergie borné (spins nucléaires, atomes froids en réseaux optiques) peuvent atteindre une température absolue négative — plus chaude que l'infini, puisque la chaleur va toujours d'eux vers tout système à T > 0 (Braun et al., Science 2013).` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Entropie de Boltzmann', e: 'S = k_B \\ln \\Omega' },
            { n: 'Température', e: '\\dfrac{1}{T} = \\left(\\dfrac{\\partial S}{\\partial E}\\right)_{V,N}' },
            { sep: 1 },
            { n: 'Poids de Boltzmann', e: 'P_i = \\dfrac{e^{-\\beta E_i}}{Z}, \\quad \\beta = \\dfrac{1}{k_B T}' },
            { n: 'Fonction de partition', e: 'Z = \\sum_i e^{-\\beta E_i}' },
            { n: 'Énergie libre', e: 'F = -k_B T \\ln Z = U - TS' },
            { n: 'Grande fonction de partition', e: '\\Xi = \\sum_N e^{\\beta \\mu N}\\, Z_N' },
            { sep: 1 },
            { n: 'Relation de Maxwell', e: '\\left(\\dfrac{\\partial S}{\\partial V}\\right)_T = \\left(\\dfrac{\\partial P}{\\partial T}\\right)_V' },
            { n: 'Fluctuations d\'énergie', e: '\\langle \\Delta E^2 \\rangle = k_B T^2 C_V' },
            { sep: 1 },
            { n: 'Bose-Einstein', e: '\\langle n \\rangle = \\dfrac{1}{e^{\\beta(\\varepsilon-\\mu)} - 1}' },
            { n: 'Fermi-Dirac', e: '\\langle n \\rangle = \\dfrac{1}{e^{\\beta(\\varepsilon-\\mu)} + 1}' },
            { sep: 1 },
            { n: 'Égalité de Jarzynski', e: '\\langle e^{-\\beta W} \\rangle = e^{-\\beta \\Delta F}' },
            { n: 'Bekenstein-Hawking', e: 'S_{BH} = \\dfrac{k_B c^3 A}{4 G \\hbar}' },
          ] }, sim: 'thermo',
        },
      },
    },
    particles: {
      title: 'Le Modèle standard',
      teaser: 'Tout ce que tu peux voir est fait de seulement 17 particules fondamentales. Lesquelles — et qu\'est-ce qui les tient ensemble ?',
      chips: ['Quarks', 'Forces', 'Higgs'],
      lvls: {
        junior: {
          title: `Les plus petites briques LEGO de l'univers !`,
          body: `<p>Tu sais déjà que tout est fait d'atomes. Le coup de théâtre, c'est que les atomes ne sont pas le bout de la ligne — ils sont bâtis à partir de choses encore plus petites. Chaque atome a un minuscule <strong>noyau</strong> dense de protons et de neutrons avec des électrons qui voltigent autour. Longtemps on supposa que protons et neutrons étaient les morceaux finaux et indivisibles. Ils ne l'étaient pas.</p>
<p>Dans les années 1960 et 70 les physiciens découvrirent que protons et neutrons sont eux-mêmes faits de grains encore plus minuscules appelés <strong>quarks</strong>, liés ensemble par la bien nommée <strong>force forte</strong>. Cette colle est si féroce que personne n'a jamais arraché un seul quark : essaie d'en séparer deux et tu injectes tant d'énergie que de tout nouveaux quarks surgissent pour combler le vide. Les quarks refusent tout simplement d'être seuls.</p>
<p>Fais le compte de tout et le <strong>Modèle standard</strong> est la liste de pièces de la nature — 6 sortes de quark, 6 sortes de lepton (l'électron est l'un d'eux), et une poignée de porteurs de force. Seulement 17 particules fondamentales, et à partir d'elles tout ce que tu as jamais vu est assemblé. La dernière pièce manquante, le <strong>boson de Higgs</strong>, fut enfin coincée au CERN en 2012, confirmant une intuition publiée pour la première fois 48 ans plus tôt — la fin de l'une des grandes chasses au trésor de la science.</p>`,
          facts: [
            { e: '🎯', t: `Le grand collisionneur de hadrons (LHC) accélère les protons à 99,9999991% de la vitesse de la lumière avant de les faire s'entrechoquer.` },
            { e: '🌌', t: `L'antimatière est réelle — chaque particule a un jumeau d'antimatière. Quand matière et antimatière se rencontrent, elles s'annihilent dans un éclair d'énergie pure.` },
            { e: '👻', t: `Les neutrinos sont si fantomatiques que des milliers de milliards traversent ton corps chaque seconde sans interagir avec un seul atome.` },
          ],
          formula: null, sim: 'particles',
        },
        student: {
          title: `Quarks, leptons, bosons de jauge et les quatre forces fondamentales`,
          body: `<p>Le Modèle standard trie chaque particule fondamentale par son spin. Les <strong>fermions</strong> (spin \\(\\tfrac{1}{2}\\)) sont la matière : six <em>quarks</em> (up, down, charm, strange, top, bottom — portant chacun l'une de trois « couleurs ») et six <em>leptons</em> (l'électron, le muon, le tau, et leurs trois neutrinos). Le <strong>principe d'exclusion de Pauli</strong> interdit à deux fermions identiques de partager un état quantique, et ce seul refus est pourquoi la matière est solide et les atomes ont une structure.</p>
<p>Les <strong>bosons</strong> (spin entier) sont les messagers qui portent les forces. Le <strong>photon</strong> porte l'électromagnétisme ; les massifs <strong>W\\(^{\\pm}\\)</strong> et <strong>Z\\(^0\\)</strong> portent la force faible derrière la désintégration radioactive ; huit <strong>gluons</strong> portent la force forte ; et un hypothétique <em>graviton</em> porterait la gravité, si seulement nous savions comment l'y faire entrer. Chaque force naît d'une symétrie locale — \\(U(1)\\) pour l'électromagnétisme, \\(SU(2)\\) pour la force faible, \\(SU(3)\\) pour la forte — réunies dans le groupe de jauge \\(U(1)\\times SU(2)\\times SU(3)\\).</p>
<p>Ce tableau soigné avait un défaut criant : la symétrie exige que les porteurs de force soient sans masse, or les W et Z sont des poids lourds. Le sauvetage est le <strong>mécanisme de Higgs</strong>. Un champ à potentiel en « chapeau mexicain » se cale sur une valeur non nulle partout — une valeur moyenne dans le vide \\(\\langle\\phi\\rangle \\approx 246\\ \\text{GeV}\\) — et les particules qui le traversent acquièrent une masse en proportion de la force de leur couplage. Son ondulation résiduelle, le <strong>boson de Higgs</strong> à \\(125\\ \\text{GeV}/c^2\\), fit surface au CERN en 2012, un demi-siècle après avoir été prédit.</p>`,
          facts: [
            { e: '🔴', t: `Les quarks sont confinés en permanence — l'énergie potentielle de la force forte V(r) ~ kr croît avec la distance, donc séparer les quarks crée de nouvelles paires quark-antiquark.` },
            { e: '⏱️', t: `Le quark top a une durée de vie de ~5×10⁻²⁵ s — il se désintègre avant de pouvoir s'hadroniser, ce qui en fait le seul quark dont on peut mesurer les propriétés nues.` },
            { e: '🌊', t: `Les oscillations de neutrinos (Nobel 1998, 2002) prouvent que les neutrinos ont une masse — la seule physique confirmée au-delà du Modèle standard.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Lagrangien de la QED', e: '\\mathcal{L} = \\bar{\\psi}(i\\gamma^\\mu D_\\mu - m)\\psi - \\tfrac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu}' },
            { n: 'Dérivée covariante', e: 'D_\\mu = \\partial_\\mu + ieA_\\mu', c: 'couplage minimal' },
            { sep: 1 },
            { n: 'Potentiel de Higgs', e: 'V(\\phi) = -\\mu^2|\\phi|^2 + \\lambda|\\phi|^4' },
            { n: 'Valeur moyenne dans le vide', e: '\\langle\\phi\\rangle = \\sqrt{\\dfrac{\\mu^2}{2\\lambda}} \\approx 246\\ \\text{GeV}' },
            { sep: 1 },
            { n: 'Groupe de jauge', e: 'U(1)_Y \\times SU(2)_L \\times SU(3)_c' },
            { n: 'Masse du boson de Higgs', e: 'm_H = 125.25 \\pm 0.17\\ \\text{GeV}/c^2' },
          ] }, sim: 'particles',
        },
        scholar: {
          title: `Théorie quantique des champs, renormalisation et physique au-delà du Modèle standard`,
          body: `<h4><span class="hn">01</span>Champs, intégrales de chemin et diagrammes de Feynman</h4>
<p>Le Modèle standard est une théorie quantique des champs : les vrais acteurs sont des champs remplissant tout l'espace, et les particules sont leurs ondulations quantifiées. Tout ce que tu pourrais jamais mesurer — chaque taux de diffusion, chaque désintégration — est replié dans un seul objet, l'intégrale de chemin \\(Z[J] = \\int \\mathcal{D}\\phi\\,\\exp\\!\\left(i\\!\\int (\\mathcal{L} + J\\phi)\\,d^4x\\right)\\), qui somme sur <em>chaque</em> histoire possible du champ, chacune pondérée par une phase. Différencie-la et les amplitudes tombent ; développe-la dans le petit couplage et chaque terme devient un diagramme de Feynman — un gribouillage qui est aussi une intégrale précise. Le moment magnétique de l'électron calculé ainsi coïncide avec l'expérience à douze chiffres, la prédiction la plus précise jamais faite.</p>
<h4><span class="hn">02</span>Renormalisation et l'art de dompter les infinis</h4>
<p>Ces diagrammes en boucle sont criblés d'infinis, et pendant un temps ils faillirent couler tout le projet. La <strong>renormalisation</strong> est le remède : absorbe les divergences dans une redéfinition de quelques paramètres physiques — charge, masse — et il reste des nombres finis et testables. Wilson transforma ensuite ce qui ressemblait à une astuce de comptable en quelque chose de profond. Le Modèle standard est une théorie <em>effective</em>, valable seulement en dessous d'une coupure \\(\\Lambda\\), et zoomer en arrière (le groupe de renormalisation) fait découpler la physique inconnue à haute énergie, ne laissant qu'une faible empreinte. C'est la vraie raison pour laquelle nous pouvons calculer quoi que ce soit sans d'abord connaître la théorie finale du tout.</p>
<h4><span class="hn">03</span>QCD : liberté asymptotique et confinement</h4>
<p>La force forte a une double personnalité. Son couplage <em>faiblit</em> à haute énergie — la <strong>liberté asymptotique</strong>, \\(\\alpha_s(\\mu) = \\dfrac{12\\pi}{(33 - 2n_f)\\ln(\\mu^2/\\Lambda_{\\text{QCD}}^2)}\\) — donc les quarks s'agitent presque librement dans une collision violente, ce qui est la seule raison pour laquelle les calculs à haute énergie marchent (et valut un Nobel en 2004). À basse énergie le couplage explose : essaie de séparer deux charges de couleur et le champ s'effondre en un tube de flux tendu dont l'énergie grimpe sans borne, donc les quarks sont <strong>confinés</strong>, scellés à jamais dans les hadrons. Là où papier et crayon renoncent, la QCD sur réseau simule la théorie sur une grille d'espace-temps et reproduit les masses des hadrons à environ un pour cent.</p>
<h4><span class="hn">04</span>Unification électrofaible et le Higgs</h4>
<p>Aux énergies de tous les jours électromagnétisme et force faible ne se ressemblent en rien — l'un porte à travers la pièce, l'autre à peine à travers un noyau. Glashow, Salam et Weinberg montrèrent qu'ils sont deux faces d'une seule force <em>électrofaible</em>, séparées par le champ de Higgs se figeant dans le vide. La séparation est fixée par l'angle de mélange faible, \\(\\sin^2\\theta_W = 1 - M_W^2/M_Z^2 \\approx 0.231\\), et la théorie cloua les masses des bosons W et Z avant que l'un ou l'autre soit vu. Le Higgs qui fait la séparation est la clé de voûte : retire-le et toute l'arche perd sa masse et sa cohérence mathématique d'un coup.</p>
<h4><span class="hn">05</span>Les fissures d'une théorie presque parfaite</h4>
<p>Malgré tous ses triomphes le Modèle standard est manifestement inachevé. Le <em>problème de hiérarchie</em> demande pourquoi des corrections quantiques d'ordre \\(\\delta m_H^2 \\sim g^2\\Lambda^2/16\\pi^2\\) ne tirent pas la masse du Higgs jusqu'à l'échelle de Planck — une annulation ajustée à une part sur \\(10^{34}\\) sans raison que quiconque puisse nommer. Il ne dit rien sur la <strong>matière noire</strong>, dont la gravité est indéniable mais dont la particule est simplement absente de la liste. Il donne aux neutrinos une masse nulle, or ils oscillent, donc ils doivent en avoir une. Et sa violation de CP est bien trop faible pour expliquer pourquoi le cosmos est fait de matière plutôt que de rien du tout.</p>
<h4><span class="hn">06</span>Au-delà du Modèle standard</h4>
<p>Les théoriciens ont affronté ces fissures avec des propositions audacieuses — la supersymétrie appariant chaque particule à un jumeau plus lourd, des dimensions spatiales supplémentaires, de nouvelles symétries, la sûreté asymptotique — chacune élégante, aucune encore confirmée. Le fait le plus dur à avaler est le quasi-silence du LHC : après avoir fait s'entrechoquer des protons des centaines de millions de fois par seconde pendant plus d'une décennie, il a livré le Higgs et, jusqu'ici, rien au-delà. La carte de la physique a un bord net marqué « ici sont les dragons », et la question ouverte est de savoir si le prochain indice attend dans un futur collisionneur, dans un détecteur de neutrinos, dans le ciel noir — ou seulement une fois théorie quantique et gravité enfin réconciliées.</p>`,
          facts: [
            { e: '🔬', t: `Le moment magnétique anomal de l'électron (g−2) est la prédiction la plus précisément testée de toute la science : théorie et expérience s'accordent à 12 chiffres significatifs.` },
            { e: '🌑', t: `La matière noire n'est pas dans le Modèle standard. Ses effets gravitationnels sont indiscutables, mais sa nature de particule reste entièrement inconnue après 50 ans de recherches.` },
            { e: '💥', t: `Le LHC génère 600 millions de collisions de protons par seconde ; seule ~1 sur 10¹² produit un boson de Higgs — nécessitant ~15 pétaoctets de données par an.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Intégrale de chemin', e: 'Z[J] = \\int \\mathcal{D}\\phi\\,\\exp\\!\\left(i\\!\\int [\\mathcal{L} + J\\phi]\\,d^4x\\right)' },
            { n: 'Couplage courant (QCD)', e: '\\alpha_s(\\mu) = \\dfrac{12\\pi}{(33 - 2n_f)\\ln(\\mu^2/\\Lambda^2)}' },
            { sep: 1 },
            { n: 'Mélange électrofaible', e: '\\sin^2\\theta_W = 1 - \\dfrac{M_W^2}{M_Z^2} \\approx 0.231' },
            { n: 'Valeur de vide du Higgs', e: '\\langle\\phi\\rangle = v \\approx 246\\ \\text{GeV}' },
            { sep: 1 },
            { n: 'Problème de hiérarchie', e: '\\delta m_H^2 \\sim \\dfrac{g^2\\Lambda^2}{16\\pi^2} \\gg m_H^2', c: 'pour Λ ~ échelle de Planck' },
          ] }, sim: 'particles',
        },
      },
    },
    newton: {
      title: 'Les lois du mouvement de Newton',
      teaser: 'Trois règles courtes qui expliquent chaque poussée, choc, fusée et pomme qui tombe dans l\'univers.',
      chips: ['Forces', 'F = ma', 'Inertie'],
      lvls: {
        junior: {
          title: `Rien ne bouge, ne s'arrête ou ne tourne sans une force`,
          body: `<p>Newton réduisit tout le mouvement à trois règles, et la première est la moins évidente : les choses continuent de faire ce qu'elles font déjà. Une balle sur un sol lisse roule jusqu'à ce que quelque chose — le frottement, un mur, ton pied — l'arrête. Un palet de hockey sur la glace glisse une éternité. Nous <em>pensons</em> seulement que les objets ralentissent naturellement parce que sur Terre il y a toujours le frottement qui repousse discrètement. Retire le frottement et le mouvement continue tout simplement. Cette réticence à changer s'appelle l'<strong>inertie</strong>.</p>
<p>La deuxième règle est celle que tu ressens chaque jour : pousse quelque chose et ça accélère ; pousse plus fort et ça accélère davantage ; pousse quelque chose de plus lourd et ça bouge à peine. C'est \\(F = ma\\) mis en mots — la force que tu appliques égale la masse multipliée par l'accélération que tu obtiens. Un caddie de supermarché le prouve parfaitement : vide, une douce poussée le fait rouler ; chargé de briques, la même poussée le bouge à peine.</p>
<p>La troisième règle est la surprenante : chaque poussée s'accompagne d'une poussée égale en retour. Appuie-toi sur un mur et le mur te pousse tout aussi fort, ce qui est exactement pourquoi tu ne bascules pas au travers. Une fusée projette du gaz chaud vers le bas et le gaz projette la fusée vers le haut. Un nageur pousse l'eau vers l'arrière et l'eau pousse le nageur vers l'avant. Les forces vont toujours par paires, pointant en sens opposés — tu ne peux jamais toucher sans être touché en retour.</p>`,
          facts: [
            { e: '🚀', t: `Une fusée ne pousse pas contre l'air — elle pousse contre le gaz qu'elle projette par l'arrière, ce qui est pourquoi les fusées fonctionnent dans le vide de l'espace.` },
            { e: '🧊', t: `Sur de la glace sans frottement une douce poussée te garderait à glisser pour toujours. C'est le frottement, pas la nature, qui arrête les choses.` },
            { e: '🎈', t: `Lâche un ballon non noué et il file dans la pièce : l'air jaillit d'un côté, le ballon est poussé de l'autre — la troisième loi de Newton dans ton salon.` },
          ],
          formula: null, sim: 'newton',
        },
        student: {
          title: `Les trois lois, rendues quantitatives`,
          body: `<p>Les trois lois de Newton, publiées dans les <em>Principia</em> en 1687, sont le fondement de toute la mécanique. <strong>Première :</strong> un objet reste au repos, ou en mouvement rectiligne à vitesse constante, à moins qu'une force extérieure nette n'agisse sur lui — le principe d'inertie. <strong>Deuxième,</strong> le cheval de trait : la force nette égale la masse multipliée par l'accélération, \\(\\mathbf{F}_{\\text{net}} = m\\mathbf{a}\\), une équation vectorielle que tu appliques un axe à la fois. <strong>Troisième :</strong> pour chaque force il en existe une égale et opposée, \\(\\mathbf{F}_{AB} = -\\mathbf{F}_{BA}\\), et surtout les deux agissent sur des corps <em>différents</em>.</p>
<p>L'astuce pour les utiliser est le <strong>diagramme de corps libre</strong> : dessine l'objet, marque chaque force sur lui — la gravité \\(mg\\) qui tire vers le bas, la force normale \\(N\\) d'une surface qui pousse vers le haut, toute poussée appliquée, et le frottement — puis additionne-les comme des vecteurs. Le frottement résiste au mouvement jusqu'à une limite \\(f \\le \\mu N\\) ; sous cette limite un objet immobile ne bouge simplement pas, car les forces s'équilibrent et \\(\\mathbf{a} = 0\\). Pousse au-delà de la limite et il accélère à \\(a = F_{\\text{net}}/m\\).</p>
<p>Deux conséquences valent d'être gravées en mémoire. L'accélération est <em>inversement</em> proportionnelle à la masse — double la masse et la même force délivre la moitié de l'accélération. Et le poids n'est pas la même chose que la masse : le poids est simplement la force de la gravité sur toi, \\(W = mg\\). Vole vers la Lune et ta masse est inchangée, or ton poids chute d'un facteur six, parce que \\(g\\) le fait.</p>`,
          facts: [
            { e: '⚖️', t: `Masse et poids diffèrent : la masse (kg) est la quantité de matière que tu es ; le poids (newtons) est la force que la gravité exerce dessus, W = mg.` },
            { e: '🚗', t: `Les ceintures de sécurité combattent l'inertie : dans un choc la voiture s'arrête mais ton corps continue à vitesse — la ceinture fournit la force qui t'arrête avec elle.` },
            { e: '🪶', t: `Dans le vide une plume et un marteau tombent ensemble : la gravité donne aux deux la même accélération, car a = F/m et F = mg annulent exactement la masse.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Première loi', e: '\\mathbf{F}_{\\text{net}} = 0 \\;\\Rightarrow\\; \\mathbf{a} = 0', c: 'inertie' },
            { n: 'Deuxième loi', e: '\\mathbf{F}_{\\text{net}} = m\\mathbf{a}' },
            { n: 'Troisième loi', e: '\\mathbf{F}_{AB} = -\\mathbf{F}_{BA}' },
            { sep: 1 },
            { n: 'Poids', e: 'W = mg' },
            { n: 'Limite de frottement', e: 'f \\le \\mu N' },
            { n: 'Accélération', e: 'a = \\dfrac{F_{\\text{net}}}{m}' },
          ] }, sim: 'newton',
        },
        scholar: {
          title: `Des trois lois à la quantité de mouvement, aux référentiels et à leurs limites`,
          body: `<h4><span class="hn">01</span>La deuxième loi concerne en réalité la quantité de mouvement</h4>
<p>Newton n'écrivit pas \\(F = ma\\) ; il écrivit \\(\\mathbf{F} = \\dfrac{d\\mathbf{p}}{dt}\\), le taux de variation de la quantité de mouvement \\(\\mathbf{p} = m\\mathbf{v}\\). Pour une masse constante cela se réduit à \\(m\\mathbf{a}\\), mais la forme avec la quantité de mouvement est l'honnête : elle gère les fusées et autres systèmes à masse variable, où de la masse est éjectée, et c'est la version qui survit — convenablement modifiée — dans la relativité.</p>
<h4><span class="hn">02</span>La troisième loi est la conservation de la quantité de mouvement</h4>
<p>Comme les forces internes s'annulent en paires égales et opposées, la quantité de mouvement totale d'un système isolé ne change jamais : \\(\\sum \\mathbf{p} = \\text{const}\\). C'est sans doute plus profond que l'énoncé sur les forces lui-même. Par le théorème de Noether elle découle de la <em>symétrie de translation de l'espace</em> — le fait que la physique soit la même ici et ailleurs — et elle tient même là où le tableau naïf action-réaction peine, comme quand des champs électromagnétiques portent discrètement une quantité de mouvement propre.</p>
<h4><span class="hn">03</span>Référentiels inertiels et relativité galiléenne</h4>
<p>Les lois ne tiennent que dans les référentiels <strong>inertiels</strong> (non accélérés). Entre dans un référentiel accéléré et tu dois inventer des forces <em>fictives</em> — centrifuge, Coriolis — pour garder la comptabilité de \\(F = ma\\) droite. Pourtant tous les référentiels inertiels sont équivalents : aucune expérience mécanique ne peut isoler un état de repos absolu. Ce principe de relativité, déjà présent chez Galilée et Newton, est la graine qu'Einstein fit croître en relativité restreinte.</p>
<h4><span class="hn">04</span>Où Newton s'effondre</h4>
<p>La mécanique newtonienne est une limite spectaculairement précise — basses vitesses, gravité faible, tailles macroscopiques — pas la loi finale. Approche la vitesse de la lumière et la quantité de mouvement devient \\(\\mathbf{p} = \\gamma m\\mathbf{v}\\), donc la force ne court plus parallèlement à l'accélération. Rétrécis aux échelles atomiques et la trajectoire nette se dissout en probabilité quantique. Monte la gravité et la « force » se révèle être la courbure de l'espace-temps. Les trois lois sont le premier chapitre, superbement utile, de la dynamique — et savoir exactement où elles échouent fait partie de comprendre pourquoi elles marchent si bien partout ailleurs.</p>`,
          facts: [
            { e: '🎯', t: `Newton énonça sa deuxième loi comme F = dp/dt (taux de variation de la quantité de mouvement). F = ma n'est que le cas particulier de la masse constante.` },
            { e: '🌀', t: `La « force » de Coriolis qui enroule les ouragans n'est pas une vraie force — c'est la correction que tu ajoutes pour faire marcher F = ma dans le référentiel tournant et non inertiel de la Terre.` },
            { e: '⚡', t: `La conservation de la quantité de mouvement est plus fondamentale que les lois de Newton : elle découle de la symétrie de l'espace lui-même et se transporte dans la physique quantique et relativiste.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Deuxième loi (générale)', e: '\\mathbf{F} = \\dfrac{d\\mathbf{p}}{dt}' },
            { n: 'Quantité de mouvement', e: '\\mathbf{p} = m\\mathbf{v}' },
            { sep: 1 },
            { n: 'Conservation', e: '\\sum \\mathbf{p} = \\text{const}', c: 'système isolé' },
            { n: 'Quantité de mouvement relativiste', e: '\\mathbf{p} = \\gamma m\\mathbf{v}', c: '\\gamma = 1/\\sqrt{1-v^2/c^2}' },
          ] }, sim: 'newton',
        },
      },
    },
    gravity: {
      title: 'Gravité et orbites',
      teaser: 'Pourquoi tout tombe — et pourquoi les planètes ne s\'écrasent-elles jamais sur le Soleil ?',
      chips: ['Gravité', 'Orbites', 'Espace'],
      lvls: {
        junior: {
          title: `La colle invisible de l'univers`,
          body: `<p>Tiens un stylo en l'air et lâche-le. Il tombe — à chaque fois, sans exception. Cette traction tenace et invisible, c'est la <strong>gravité</strong>, et ce n'est pas seulement une affaire terrestre. Tout objet doté d'une masse attire tout autre objet, partout, toujours : toi sur ta chaise, la Lune sur les océans, le Soleil sur les huit planètes à la fois. C'est l'une des quatre forces fondamentales qui régissent l'univers — et la plus douce d'entre elles — et pourtant elle façonne tout, d'un stylo qui tombe au ciel nocturne tout entier.</p>
<p>La règle qui se cache derrière est merveilleusement simple : plus un objet est massif, plus il attire fort. La Terre est si énorme que sa poigne retient les océans, l'air que tu respires et toi. Tiens-toi sur la Lune, bien moins massive, et ces mêmes jambes te propulseraient à trois mètres de haut. L'attraction ne s'éteint jamais — elle devient seulement plus douce à mesure que tu t'éloignes.</p>
<p>Voici l'énigme qui a déconcerté les gens pendant des siècles : si le Soleil ne cesse d'attirer la Terre, pourquoi la Terre ne tombe-t-elle pas simplement dedans ? Imagine faire tournoyer une balle au bout d'une ficelle. La ficelle tire la balle vers l'intérieur, mais la balle ne cesse de filer sur le côté, si bien qu'elle tourne autour de ta main au lieu de la heurter. Les planètes font exactement cela. La Terre tombe éternellement vers le Soleil — et le manque éternellement, parce qu'elle file aussi sur le côté à une vitesse fantastique. Ce « tomber sans jamais atteindre » sans fin, c'est ce que nous appelons une <strong>orbite</strong>.</p>
<p>Newton a trouvé une belle façon de l'imaginer. Pense à tirer un boulet de canon depuis le sommet d'une montagne incroyablement haute. Tire doucement et il retombe en arc peu loin. Tire plus fort et il atterrit plus loin. Tire assez fort — environ 28 000 km/h — et le sol se courbe sous lui exactement aussi vite que le boulet tombe. Maintenant il n'atterrit plus jamais : il est en orbite. C'est le même tour qu'utilise la Station spatiale internationale pour nous tourner autour toutes les quatre-vingt-dix minutes. Elle n'a pas échappé à la gravité — elle tombe simplement pour toujours, en manquant pour toujours la Terre.</p>`,
          facts: [
            { e: '🌙', t: `Sur la Lune tu pèses 6 fois moins et tu pourrais sauter à plus de 3 mètres de haut — les mêmes muscles, une gravité bien plus faible !` },
            { e: '🏋️', t: `Sur Jupiter tu pèserais 2,5 fois plus — sortir du lit reviendrait à porter une deuxième personne sur ton dos.` },
            { e: '🌍', t: `La gravité maintient notre atmosphère en place. Sans elle, tout notre air s'échapperait dans l'espace et la Terre ressemblerait à Mars.` },
          ],
          formula: null, sim: 'orbit',
        },
        student: {
          title: `La loi de la gravitation universelle de Newton`,
          body: `<p>Le coup de génie de Newton fut de voir que la pomme et la Lune obéissent à la <em>même</em> loi. Deux masses quelconques s'attirent avec une force \\(F = \\dfrac{GMm}{r^2}\\) — proportionnelle aux deux masses, et décroissant avec le carré de la distance qui les sépare. Il l'exposa dans les <em>Principia</em> en 1687, et elle resta incontestée pendant deux siècles.</p>
<p>Ce petit \\(r^2\\) au dénominateur fait un travail énorme. Double ta distance à une planète et la gravité chute au quart ; triple-la et te voilà au neuvième. L'attraction faiblit vite — mais elle n'atteint jamais tout à fait zéro, et c'est pourquoi le Soleil peut tenir Neptune en laisse sur 4,5 milliards de kilomètres, et pourquoi les galaxies tiennent ensemble à travers le noir.</p>
<p>Une orbite est en réalité un bras de fer. La gravité tire une planète vers l'intérieur tandis que son mouvement latéral ne cesse de l'emporter plus loin ; ajuste exactement la vitesse et les deux se calent dans une ellipse fermée. Trop lente et elle spirale vers l'intérieur, trop rapide et elle s'échappe pour de bon. La vitesse d'équilibre à une distance \\(r\\) d'une étoile de masse \\(M\\) est \\(v = \\sqrt{GM/r}\\), et elle porte une prédiction élégante : les planètes intérieures doivent aller plus vite que les extérieures. Mercure file vraiment tandis que Neptune se traîne.</p>
<p>Une demi-vie avant Newton, Kepler avait déjà extrait trois régularités de la montagne de mesures à l'œil nu de Tycho Brahe — la plus frappante étant \\(T^2 \\propto a^3\\), l'année d'une planète fixée par le cube de la taille de son orbite. Kepler trouva la régularité mais ne put dire <em>pourquoi</em> elle tenait. L'unique loi de Newton reproduisit d'un coup les trois règles de Kepler, prouvant que la pomme qui tombe et les planètes qui tournent obéissent à des mathématiques identiques. Ce fut la première fois que la physique se hissa au-delà du ciel.</p>`,
          facts: [
            { e: '🛰️', t: `L'ISS orbite à 7,66 km/s, effectuant un tour complet de la Terre toutes les 92 minutes — elle voit 16 levers de soleil par jour !` },
            { e: '⚖️', t: `Poids = mg. Sur Terre g ≈ 9,81 m/s². Sur Mars g ≈ 3,72 m/s², ce qui explique pourquoi les rovers peuvent faire de longs bonds.` },
            { e: '🌊', t: `Les marées naissent parce que la Lune attire le côté proche de la Terre plus fort que le côté éloigné, étirant l'océan en deux renflements.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Force gravitationnelle', e: 'F = \\dfrac{GMm}{r^2}', c: 'Newton, 1687' },
            { sep: 1 },
            { n: 'Constante gravitationnelle', e: 'G = 6.674\\times10^{-11}\\ \\text{N·m}^2\\text{kg}^{-2}' },
            { n: 'Vitesse orbitale', e: 'v = \\sqrt{\\dfrac{GM}{r}}' },
            { n: 'Troisième loi de Kepler', e: 'T^2 = \\dfrac{4\\pi^2}{GM}\\,a^3' },
          ] }, sim: 'orbit',
        },
        scholar: {
          title: `De Newton à Einstein : l'espace-temps courbe et la géométrie de la gravité`,
          body: `<h4><span class="hn">01</span>Le principe d'équivalence : la pensée la plus heureuse d'Einstein</h4>
<p>La loi de Newton est fabuleusement précise, et pourtant elle cache un embarras : elle fait traverser le cosmos à la gravité instantanément, sans mécanisme ni délai. L'échappatoire d'Einstein commença par une observation qu'il appela plus tard la pensée la plus heureuse de sa vie — une personne en chute libre ne ressent aucune gravité. Enjambe un rebord, ou mets-toi en orbite dans une station, et tu flottes ; l'attraction disparaît tout simplement. Le <strong>principe d'équivalence</strong> érige cela en loi : localement, gravité et accélération sont indiscernables. Et si la gravité peut être désactivée rien qu'en choisissant de tomber, alors elle ne peut pas vraiment être une force. Ce doit être quelque chose de la scène sur laquelle se joue le mouvement.</p>
<h4><span class="hn">02</span>Espace-temps, métrique et géodésiques</h4>
<p>Cette scène est l'<strong>espace-temps</strong> quadridimensionnel, et sa forme réside dans la <em>métrique</em> \\(g_{\\mu\\nu}\\), qui fixe l'intervalle — la distance ou le temps propre écoulé — entre événements voisins. Loin de toute masse la métrique est plate ; près d'une masse elle se gauchit. Une particule libre ne ressent aucune force ; elle glisse simplement le long du chemin le plus droit que la géométrie permet, une <strong>géodésique</strong>, obéissant à \\(\\ddot{x}^\\mu + \\Gamma^\\mu_{\\alpha\\beta}\\,\\dot{x}^\\alpha \\dot{x}^\\beta = 0\\). Les symboles de Christoffel \\(\\Gamma\\) font le travail que Newton confiait au champ gravitationnel. Wheeler comprima toute la théorie en une ligne : la matière dit à l'espace-temps comment se courber, et l'espace-temps courbe dit à la matière comment bouger.</p>
<h4><span class="hn">03</span>Les équations du champ d'Einstein</h4>
<p>Le pont entre ces deux propositions est \\(G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\dfrac{8\\pi G}{c^4} T_{\\mu\\nu}\\). Le côté gauche est de la pure géométrie — le tenseur d'Einstein \\(G_{\\mu\\nu}\\), distillé de la courbure de l'espace-temps — et le côté droit est tout ce qui porte énergie et quantité de mouvement, réuni dans le tenseur énergie-impulsion \\(T_{\\mu\\nu}\\). Ce sont dix équations aux dérivées partielles couplées et non linéaires, et cette non-linéarité est toute la personnalité de la théorie : la gravité elle-même porte de l'énergie, donc elle gravite, et les équations se replient sur elles-mêmes d'une manière que celles de Newton ne pouvaient pas. Le solitaire terme supplémentaire \\(\\Lambda\\) fut, de l'aveu même d'Einstein, sa « plus grande bévue » — et c'est aujourd'hui notre principale explication de l'<strong>énergie noire</strong> qui écarte l'univers.</p>
<h4><span class="hn">04</span>La solution de Schwarzschild et les trous noirs</h4>
<p>Quelques mois après les équations du champ — et depuis une tranchée de la Première Guerre mondiale — Schwarzschild en trouva la première solution exacte : la géométrie autour d'une masse sphérique. Elle dissimule une surface à sens unique au <strong>rayon de Schwarzschild</strong> \\(r_s = 2GM/c^2\\), l'horizon des événements, au-delà duquel même la lumière ne peut ressortir. Comprime le Soleil dans 3 km, ou la Terre dans 9 mm, et tu as un trou noir. Pendant des décennies ils ressemblèrent à des pathologies des maths ; nous savons maintenant qu'ils sont réels et partout, des étoiles effondrées aux monstres supermassifs qui ancrent des galaxies entières.</p>
<h4><span class="hn">05</span>Les tests classiques</h4>
<p>Une théorie ne vaut que par les risques auxquels elle survit, et la relativité générale en affronta plusieurs. L'orbite de Mercure tourne lentement sur elle-même — précessant de 43 secondes d'arc par siècle de plus que Newton ne l'autorise — et la relativité générale prédit ce chiffre exactement, sans rien à ajuster. La lumière des étoiles se courbe en frôlant le Soleil, ce qu'Eddington confirma lors de l'éclipse de 1919 et qui rendit Einstein célèbre du jour au lendemain. Les horloges plus profondes dans un puits gravitationnel ralentissent, de \\(d\\tau/dt = \\sqrt{1 - r_s/r}\\) ; ton téléphone le prouve chaque seconde, car les horloges des satellites GPS avancent d'environ \\(38\\ \\mu\\text{s}\\) par jour par rapport aux nôtres, et l'ignorer ferait dériver la navigation d'une dizaine de km en un jour.</p>
<h4><span class="hn">06</span>Des ondulations dans l'espace-temps</h4>
<p>Si l'espace-temps peut se courber, il peut aussi frémir. Des masses en accélération émettent des <strong>ondes gravitationnelles</strong> — des ondulations de la métrique filant vers l'extérieur à \\(c\\) — mais elles sont désespérément faibles. Il fallut un siècle et deux interféromètres laser de 4 km (LIGO) pour en ressentir une : le 14 septembre 2015 la fusion de deux trous noirs à 1,3 milliard d'années-lumière étira et comprima chaque bras de moins d'un millième de la largeur d'un proton. Du jour au lendemain nous avons gagné un sens nouveau, capable d'entendre des cataclysmes qui n'émettent aucune lumière.</p>
<h4><span class="hn">07</span>Rotation, cosmologie et la théorie inachevée</h4>
<p>Les vrais trous noirs tournent, et la solution de Kerr (1963) les décrit : un trou en rotation entraîne l'espace-temps avec lui et enveloppe une <em>ergosphère</em> hors de l'horizon, une région d'où l'on peut en principe extraire de l'énergie. Portées à l'échelle du ciel entier, les mêmes équations donnent à la cosmologie moderne son univers en expansion dominé par \\(\\Lambda\\), et l'Event Horizon Telescope a désormais photographié les ombres de M87* (2019) et de notre propre Sgr A* (2022), chacune exactement de la taille qu'exige la relativité générale. Et pourtant la théorie est incomplète : à une singularité elle prédit son propre effondrement, et marier sa géométrie lisse à la mécanique quantique reste le problème ouvert le plus profond de la physique.</p>`,
          facts: [
            { e: '⌛', t: `Les horloges GPS gagnent ~45μs/jour à cause de la gravité plus faible (relativité générale) et perdent ~7μs/jour à cause de la vitesse orbitale (relativité restreinte). Sans correction, le GPS dériverait de ~10 km par jour.` },
            { e: '🌀', t: `Les ondes gravitationnelles furent détectées pour la première fois par LIGO le 14 septembre 2015, provenant de deux trous noirs fusionnant à 1,3 milliard d'années-lumière.` },
            { e: '🔭', t: `L'Event Horizon Telescope a résolu une ombre de 40 μas autour de M87* — l'équivalent de lire un journal à New York depuis Paris.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Équations du champ d\'Einstein', e: 'G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\dfrac{8\\pi G}{c^4} T_{\\mu\\nu}' },
            { n: 'Équation géodésique', e: '\\ddot{x}^\\mu + \\Gamma^\\mu_{\\alpha\\beta}\\,\\dot{x}^\\alpha \\dot{x}^\\beta = 0' },
            { sep: 1 },
            { n: 'Rayon de Schwarzschild', e: 'r_s = \\dfrac{2GM}{c^2}' },
            { n: 'Précession du périhélie', e: '\\Delta\\varphi = \\dfrac{6\\pi GM}{c^2 a (1-e^2)}', c: 'par orbite' },
            { n: 'Dilatation gravitationnelle du temps', e: '\\dfrac{d\\tau}{dt} = \\sqrt{1 - \\dfrac{r_s}{r}}', c: 'métrique de Schwarzschild' },
          ] }, sim: 'orbit',
        },
      },
    },
    projectile: {
      title: 'Le mouvement des projectiles',
      teaser: 'Lance n\'importe quoi et la gravité dessine le même arc — et il y a un angle qui gagne toujours.',
      chips: ['Cinématique', 'Gravité', 'Trajectoire'],
      lvls: {
        junior: {
          title: `Chaque lancer trace le même arc gracieux`,
          body: `<p>Lance une balle à un ami et observe son trajet. Elle ne fonce pas tout droit puis ne chute pas d'un coup comme un personnage de dessin animé qui a couru par-delà une falaise — elle se courbe tout du long, traçant un arc lisse. Deux choses se passent en même temps, sans se gêner : la balle continue de dériver <em>vers l'avant</em> à un rythme constant, tandis que la gravité la tire <em>vers le bas</em>, doucement d'abord puis de plus en plus vite. Ajoute un glissement latéral constant à une chute toujours plus rapide et tu obtiens cette courbe — la même forme pour une clé lancée, une fontaine à boire, un sauteur en longueur ou un boulet de canon.</p>
<p>Voici ce qui piège tout le monde : l'avancée et la chute sont complètement séparées. Tire une balle parfaitement à l'horizontale et, au même instant, lâche-en simplement une autre de ta main — en négligeant l'air, elles touchent le sol <strong>ensemble</strong>. La balle tirée peut traverser tout un terrain pendant que la lâchée tombe d'un mètre, mais la gravité tire sur les deux exactement au même rythme. Plus de vitesse latérale t'achète de la distance, jamais un instant de plus en l'air.</p>
<p>Alors comment lancer quelque chose le plus loin possible ? Vise trop plat et ça s'écrase au sol avant d'avoir voyagé loin. Vise trop raide et ça s'élève de façon impressionnante mais atterrit presque à tes pieds. Le point idéal est pile au milieu — <strong>45°</strong> — qui partage ton effort à parts égales entre « vers l'extérieur » et « vers le haut ». Lance à 45° et tu obtiens le lancer le plus long possible. Les bâtisseurs de catapultes et les lanceurs de poids exploitent discrètement ce fait depuis des siècles, bien avant que quiconque puisse en écrire la raison.</p>`,
          facts: [
            { e: '🎯', t: `Tire une balle à l'horizontale et lâches-en une de la même hauteur au même moment — en négligeant l'air, elles atterrissent exactement en même temps.` },
            { e: '💧', t: `L'arc d'une fontaine à boire est une parabole. Le vol d'un ballon de basket aussi, comme le saut d'un skieur et l'eau d'un tuyau d'arrosage.` },
            { e: '🏰', t: `Les artilleurs de siège médiévaux visaient par angle, apprenant qu'autour de 45° la pierre était projetée le plus loin — des siècles avant que l'équation existe.` },
          ],
          formula: null, sim: 'projectile',
        },
        student: {
          title: `Deux mouvements à angle droit, et l'équation de la portée`,
          body: `<p>Le secret de tout projectile est de décomposer sa vitesse en deux morceaux qui s'ignorent. Lance à une vitesse \\(v_0\\) et un angle \\(\\theta\\) : la partie horizontale \\(v_0\\cos\\theta\\) ne change jamais, car rien ne pousse la balle sur le côté, tandis que la partie verticale part de \\(v_0\\sin\\theta\\) et est constamment rongée par la gravité à \\(g \\approx 9.8\\ \\text{m/s}^2\\). Donc horizontalement la balle ne fait que dériver, \\(x = v_0\\cos\\theta\\,t\\), et verticalement elle est en chute libre pure, \\(y = v_0\\sin\\theta\\,t - \\tfrac{1}{2}g t^2\\). Deux mouvements modestes, cousus en un arc.</p>
<p>Pose \\(y = 0\\) pour demander quand elle atterrit, et le vol dure \\(T = \\dfrac{2v_0\\sin\\theta}{g}\\). Multiplie cela par la vitesse horizontale et tu obtiens jusqu'où elle va — la <strong>portée</strong> \\(R = \\dfrac{v_0^2\\sin 2\\theta}{g}\\). Cette formule élégante cache deux cadeaux. D'abord, \\(\\sin 2\\theta\\) est maximal quand \\(2\\theta = 90°\\), c'est-à-dire \\(\\theta = 45°\\) : la preuve concrète que 45° lance le plus loin. Ensuite, \\(\\sin 2\\theta\\) est symétrique autour de 45°, donc des angles <em>complémentaires</em> — 30° et 60°, ou 20° et 70° — atterrissent exactement au même endroit, l'un sur un arc bas et rapide, l'autre haut et lent.</p>
<p>Le sommet du vol arrive à mi-parcours, où la vitesse ascendante s'est annulée ; sa hauteur est \\(H = \\dfrac{(v_0\\sin\\theta)^2}{2g}\\). Et remarque ce qui manque à chaque ligne de tout ceci : la <strong>masse</strong>. Un boulet de canon et une bille lancés de la même façon tracent le même chemin — la grande intuition de Galilée, que la gravité accélère tout de manière égale, désormais mise en scène en deux dimensions à la fois.</p>`,
          facts: [
            { e: '⚽', t: `Les angles complémentaires partagent une portée : une balle lancée à 30° et à 60° à la même vitesse atterrit au même endroit.` },
            { e: '🎾', t: `La portée croît avec le carré de la vitesse, donc doubler ta vitesse de lancer fait voler un projectile quatre fois plus loin.` },
            { e: '🌙', t: `Sur la Lune, où g est 6 fois plus faible, le même lancer porte 6 fois plus loin — un coup de golf a vraiment parcouru des kilomètres.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Vitesse horizontale', e: 'v_x = v_0\\cos\\theta', c: 'constante' },
            { n: 'Vitesse verticale', e: 'v_y = v_0\\sin\\theta - g t' },
            { sep: 1 },
            { n: 'Position', e: 'x = v_0\\cos\\theta\\,t,\\quad y = v_0\\sin\\theta\\,t - \\tfrac{1}{2}g t^2' },
            { n: 'Temps de vol', e: 'T = \\dfrac{2 v_0 \\sin\\theta}{g}' },
            { n: 'Portée', e: 'R = \\dfrac{v_0^2 \\sin 2\\theta}{g}' },
            { n: 'Hauteur maximale', e: 'H = \\dfrac{(v_0\\sin\\theta)^2}{2g}' },
            { n: 'Angle de portée maximale', e: '\\theta = 45°', c: 'terrain plat' },
          ] }, sim: 'projectile',
        },
        scholar: {
          title: `L'équation de la trajectoire, les angles optimaux et où la parabole se brise`,
          body: `<h4><span class="hn">01</span>Tout le trajet en une seule équation</h4>
<p>Élimine le temps et l'arc se révèle. De \\(x = v_0\\cos\\theta\\,t\\) on a \\(t = x/(v_0\\cos\\theta)\\) ; substitue dans l'équation verticale et \\[y = x\\tan\\theta - \\dfrac{g}{2 v_0^2 \\cos^2\\theta}\\,x^2.\\] C'est quadratique en \\(x\\) avec un coefficient dominant négatif — une <strong>parabole</strong> ouverte vers le bas. Toute trajectoire idéalisée, d'une miette projetée à un missile balistique, est une tranche de cette unique famille de courbes.</p>
<h4><span class="hn">02</span>Vecteurs et point de vue énergétique</h4>
<p>Réduit aux vecteurs le mouvement est trivial : l'accélération est une constante \\(\\mathbf{a} = -g\\,\\hat{\\jmath}\\), donc tu intègres deux fois et c'est fini. Comme la gravité est conservative et que la vitesse horizontale n'est jamais touchée, \\(\\tfrac{1}{2}mv^2 + mgy\\) reste fixe tout du long. Ce seul fait impose la symétrie miroir de la parabole : le projectile revient à la hauteur de lancer en portant exactement sa vitesse de lancer, et la descente est la montée jouée à l'envers.</p>
<h4><span class="hn">03</span>Quand le point de lancer est surélevé</h4>
<p>Les vrais lancers quittent la main au-dessus du sol, et cela déplace discrètement l'optimum. En résolvant pour la portée maximale depuis une hauteur initiale \\(h\\) on obtient \\[\\theta^\\ast = \\arctan\\!\\dfrac{v_0}{\\sqrt{v_0^2 + 2gh}},\\] qui vaut 45° seulement quand \\(h = 0\\) et glisse régulièrement en dessous à mesure que le lancer s'élève. Un lanceur de poids qui lâche depuis environ deux mètres de haut lance le plus loin vers 42° par la seule physique — et plus près de 37° une fois prise en compte la biomécanique de l'athlète, qui favorise des lâchers plus plats et plus rapides.</p>
<h4><span class="hn">04</span>La résistance de l'air, l'honnête rabat-joie</h4>
<p>La parabole propre est une fiction du vide. Une vraie force de traînée \\(F_d \\approx \\tfrac{1}{2}\\rho C_d A v^2\\) s'oppose à la vitesse et croît avec son carré, si bien que montée et descente cessent d'être des images miroir : le trajet penche vers l'avant, la descente se raidit, et la portée reste bien en deçà de la valeur du manuel. Il n'y a plus de portée en forme close — tu intègres numériquement les équations couplées. Pour une balle de baseball frappée l'optimum tombe à environ 30-35°, et une balle de golf frappée, soulevée par la force de Magnus du rétro-effet, échappe au problème simple pour entrer dans l'aérodynamique complète.</p>
<h4><span class="hn">05</span>Au-delà du sol plat et immobile</h4>
<p>Tirer en montée ou en descente d'une pente, la courbure de Magnus induite par la rotation, et — sur des dizaines de kilomètres — la déviation de Coriolis due à la rotation de la Terre éloignent tous la balistique réelle de la parabole soignée. Le modèle du vide n'est que le premier terme d'un développement bien plus riche. Mais c'est le <em>bon</em> premier terme : analytique, exact et indépendant de la masse, ce qui est précisément pourquoi 45° est la réponse par laquelle s'ouvre tout cours de mécanique.</p>`,
          facts: [
            { e: '🥎', t: `Avec la traînée de l'air l'angle de lancer idéal d'une balle de baseball tombe à environ 30-35°, et elle porte à peine la moitié de la distance que le vide prédirait.` },
            { e: '🏋️', t: `Les lanceurs de poids d'élite lâchent vers 37°, pas 45° — le poids quitte la main ~2 m au-dessus de son point de chute, et la biomécanique favorise un lancer plus plat.` },
            { e: '🌍', t: `Sur de longues portées, l'artillerie doit corriger l'effet Coriolis : la rotation de la Terre dévie un obus de façon mesurable sur le côté pendant son vol.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Trajectoire', e: 'y = x\\tan\\theta - \\dfrac{g}{2 v_0^2 \\cos^2\\theta}\\,x^2' },
            { sep: 1 },
            { n: 'Portée (plat)', e: 'R = \\dfrac{v_0^2 \\sin 2\\theta}{g}' },
            { n: 'Portée maximale', e: 'R_{\\max} = \\dfrac{v_0^2}{g}', c: 'à \\theta = 45°' },
            { n: 'Angle optimal depuis une hauteur h', e: '\\theta^\\ast = \\arctan\\dfrac{v_0}{\\sqrt{v_0^2 + 2gh}}' },
            { n: 'Traînée quadratique', e: 'F_d = \\tfrac{1}{2}\\rho C_d A v^2', c: 'pas de portée en forme close' },
          ] }, sim: 'projectile',
        },
      },
    },
    waves: {
      title: 'Ondes et interférences',
      teaser: 'Musique, Wi-Fi, arcs-en-ciel et rayons X — c\'est le même phénomène à des échelles différentes.',
      chips: ['Son', 'Lumière', 'Optique'],
      lvls: {
        junior: {
          title: `Les ondes sont de l'énergie en mouvement !`,
          body: `<p>Lâche une pierre dans un étang calme et regarde les anneaux filer vers l'extérieur. C'est une onde — une perturbation qui voyage tandis que la matière qu'elle traverse reste pour l'essentiel sur place. Voici la surprise : l'eau ne se déplace pas vraiment avec l'anneau. Fais flotter une feuille à la surface et elle se contente de monter et descendre sur place tandis que l'onde glisse dessous. Ce qui voyage n'est pas l'eau — c'est le <em>motif</em>, et avec lui, l'<strong>énergie</strong>.</p>
<p>Le son est exactement le même tour joué dans l'air. Tape des mains et tu comprimes l'air en une brève impulsion de pression qui se propage vers l'extérieur, atteint un tympan et le fait vibrer — et cette vibration est ce que quelqu'un entend. Pas d'air, pas d'ondulation, pas de son : c'est exactement pourquoi l'espace est totalement silencieux, et pourquoi chaque explosion tonitruante dans un film de science-fiction est, en vérité, un petit mensonge.</p>
<p>La vraie magie survient quand deux ondes se croisent. Elles ne rebondissent pas l'une sur l'autre — elles s'additionnent. Deux crêtes qui se rencontrent au même endroit s'empilent en une crête plus grande (<strong>interférence constructive</strong>) ; une crête qui rencontre un creux s'annule en un néant plat (<strong>interférence destructive</strong>). Cette annulation n'est pas qu'une curiosité — c'est ainsi que fonctionnent les casques à réduction de bruit. Ils écoutent le monde bruyant autour de toi, en construisent la copie exactement renversée, et laissent les deux ondes s'effacer avant même qu'elles n'atteignent ton oreille.</p>`,
          facts: [
            { e: '🎸', t: `Une corde de guitare vibrant à 440 Hz produit la note « La » — elle effectue 440 cycles complets d'aller-retour chaque seconde !` },
            { e: '🌈', t: `La lumière blanche du soleil contient toutes les couleurs. Une goutte de pluie courbe chaque couleur d'un angle légèrement différent, les étalant en un arc-en-ciel.` },
            { e: '🦇', t: `Les chauves-souris se repèrent dans le noir total en émettant des impulsions d'ultrasons et en écoutant les échos — leur cerveau construit une carte 3D à partir des délais.` },
          ],
          formula: null, sim: 'waves',
        },
        student: {
          title: `Superposition, ondes stationnaires et la double fente de Young`,
          body: `<p>Réduis une onde à ses maths et ce n'est qu'une sinusoïde voyageuse : \\(y(x,t) = A\\sin(kx - \\omega t + \\varphi)\\). L'amplitude \\(A\\) fixe sa hauteur, le nombre d'onde \\(k = 2\\pi/\\lambda\\) compte à quel point elle est resserrée dans l'espace, la fréquence angulaire \\(\\omega = 2\\pi f\\) sa vitesse de cycle dans le temps, et la phase \\(\\varphi\\) dit seulement où dans son oscillation elle commence. Tisse tout cela et une crête vogue à la vitesse \\(v = \\omega/k = f\\lambda\\).</p>
<p>Ce qui fait que les ondes se comportent comme des ondes, c'est le <strong>principe de superposition</strong> : partout où deux d'entre elles se chevauchent, tu additionnes simplement leurs déplacements. Les boules de billard se percutent ; les ondes se traversent l'une l'autre et ressortent inchangées. Additionne-les en phase — différence de phase \\(\\Delta\\varphi = 0, 2\\pi, 4\\pi,\\dots\\) — et elles se renforcent jusqu'à l'amplitude \\(2A\\) ; additionne-les exactement en opposition de phase — \\(\\Delta\\varphi = \\pi, 3\\pi,\\dots\\) — et elles s'effacent complètement.</p>
<p>Thomas Young transforma cela en l'expérience qui renversa discrètement Newton. En <strong>1801</strong> il fit passer la lumière par deux fentes étroites distantes de \\(d\\) et recueillit sur un écran des bandes claires et sombres — une intensité \\(I(\\theta) = 4I_0\\cos^2\\!\\left(\\dfrac{\\pi d \\sin\\theta}{\\lambda}\\right)\\) que seules les ondes savent peindre. La lumière semblait établie comme une onde. La suite troublante arriva un siècle plus tard : tire le même appareil un photon, ou un électron, à la fois, et les bandes s'assemblent quand même point par point. Chaque particule, impossiblement, interfère avec elle-même.</p>
<p>Envoie deux ondes identiques en sens opposés le long d'une corde et elles se verrouillent en une <strong>onde stationnaire</strong> — une forme qui ne voyage pas du tout, épinglée par des <em>nœuds</em> immobiles et des <em>ventres</em> qui oscillent follement. C'est la physique de chaque corde de guitare, tuyau d'orgue et four à micro-ondes, où seules les longueurs d'onde qui entrent exactement dans les bords ont le droit de résonner.</p>`,
          facts: [
            { e: '🎧', t: `Les casques à réduction de bruit échantillonnent le son ambiant 1000 fois par seconde et produisent la forme d'onde exactement inversée — l'interférence destructive en action.` },
            { e: '💡', t: `Ondes radio, micro-ondes, lumière visible, UV, rayons X et rayons gamma sont toutes des ondes électromagnétiques — même physique, fréquence différente.` },
            { e: '🌊', t: `Les tsunamis voyagent à 800 km/h en haute mer avec des longueurs d'onde de 500 km. En eau côtière peu profonde ils ralentissent et leur hauteur augmente de façon explosive.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Fonction d\'onde', e: 'y(x,t) = A\\sin(kx - \\omega t + \\varphi)' },
            { sep: 1 },
            { n: 'Nombre d\'onde', e: 'k = \\dfrac{2\\pi}{\\lambda}' },
            { n: 'Fréquence angulaire', e: '\\omega = 2\\pi f' },
            { n: 'Vitesse de l\'onde', e: 'v = f\\lambda = \\dfrac{\\omega}{k}' },
            { sep: 1 },
            { n: 'Superposition', e: 'y_{\\text{tot}} = y_1 + y_2' },
            { n: 'Constructive', e: '\\Delta\\varphi = 0,\\,2\\pi,\\,4\\pi,\\dots \\;\\Rightarrow\\; A_{\\text{tot}} = 2A' },
            { n: 'Destructive', e: '\\Delta\\varphi = \\pi,\\,3\\pi,\\,5\\pi,\\dots \\;\\Rightarrow\\; A_{\\text{tot}} = 0' },
            { n: 'Intensité double fente', e: 'I(\\theta) = 4I_0\\cos^2\\!\\left(\\dfrac{\\pi d \\sin\\theta}{\\lambda}\\right)' },
          ] }, sim: 'waves',
        },
        scholar: {
          title: `Analyse de Fourier, paquets d'ondes et dualité quantique`,
          body: `<h4><span class="hn">01</span>Fourier : chaque signal est un accord de tons purs</h4>
<p>Derrière toute la physique des ondes se tient un fait mathématique à la portée saisissante : tout signal, si dentelé soit-il, est une somme d'ondes sinusoïdales pures. La <strong>transformée de Fourier</strong> \\(\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x)\\,e^{-2\\pi i x\\xi}\\,dx\\) est la machine qui réécrit une forme dans l'espace ou le temps comme sa recette de fréquences — et l'inverse sans rien perdre. C'est sans doute l'outil le plus utile des mathématiques appliquées : elle compresse ta musique et tes photos, transporte chaque canal radio et reconstruit une coupe d'IRM. Sa version rapide, la FFT (Cooley–Tukey, 1965), tourne en \\(O(n\\log n)\\) et compte parmi les algorithmes les plus conséquents jamais écrits.</p>
<h4><span class="hn">02</span>Paquets d'ondes, vitesse de phase et de groupe</h4>
<p>Une seule sinusoïde pure s'étend à l'infini et ne localise rien. Pour construire une impulsion localisée — un <em>paquet d'ondes</em> — tu superposes une bande de fréquences, et Fourier te présente la facture d'avance : un paquet étroit dans l'espace exige un large étalement de nombres d'onde. Un tel paquet porte deux vitesses. Les ondulations à l'intérieur glissent à la <em>vitesse de phase</em> \\(v_p = \\omega/k\\), tandis que l'enveloppe — qui porte en réalité l'énergie et le message — voyage à la <em>vitesse de groupe</em> \\(v_g = d\\omega/dk\\). Quand le milieu est <em>dispersif</em> et que les deux divergent, le paquet s'étale en avançant, et c'est pourquoi une impulsion nette dans une longue fibre arrive floue.</p>
<h4><span class="hn">03</span>Superposition quantique et auto-interférence</h4>
<p>En mécanique quantique la superposition passe d'une propriété des ondes à la règle fondamentale. Une particule est portée par une fonction d'onde complexe \\(\\psi\\) ; les possibilités qui se chevauchent s'additionnent comme des amplitudes, \\(\\psi = \\psi_1 + \\psi_2\\), et l'observable est la densité de probabilité \\(|\\psi|^2 = |\\psi_1 + \\psi_2|^2\\). Développe ce carré et un terme croisé apparaît — l'interférence — sans cousin classique. Fais la double fente un électron à la fois et l'écran se remplit quand même, sur des milliers d'arrivées solitaires, de \\(I(\\theta) = 4I_0\\cos^2(\\pi d\\sin\\theta/\\lambda)\\). La seule lecture honnête est que chaque électron traverse les deux fentes comme une amplitude étalée et interfère avec lui-même.</p>
<h4><span class="hn">04</span>Le principe d'incertitude, tout droit de Fourier</h4>
<p>Le \\(\\Delta x\\,\\Delta p \\ge \\hbar/2\\) de Heisenberg est d'ordinaire raconté comme une histoire de mesure maladroite, mais c'est en réalité le compromis de Fourier déguisé en physique. Les fonctions d'onde de position et de quantité de mouvement sont des transformées de Fourier l'une de l'autre, et aucune fonction ne peut être nette dans les deux domaines à la fois. Localise une particule étroitement et sa quantité de mouvement doit s'étaler — la limite est inscrite dans tout ce qui est ondulatoire, pas un défaut de nos instruments. Les mêmes maths donnent la relation énergie-temps \\(\\Delta E\\,\\Delta t \\ge \\hbar/2\\), qui fixe la largeur naturelle de chaque raie spectrale et permet à des états fugaces d'« emprunter » brièvement de l'énergie.</p>
<h4><span class="hn">05</span>L'information sur le chemin et la gomme quantique</h4>
<p>L'interférence se révèle fragile d'une manière profondément révélatrice. Installe un détecteur qui enregistre par quelle fente est passé l'électron et les bandes s'évaporent — la particule agit en particule dès l'instant où son chemin devient connaissable, même en principe. Plus étrange encore est la <em>gomme quantique</em> : brouille à nouveau cette information sur le chemin, même après que l'électron a déjà frappé l'écran, et l'interférence réapparaît dans les corrélations. Ce qui compte n'est pas de savoir si quelqu'un a réellement regardé, mais si l'information survit quelque part. L'interférence est l'empreinte d'alternatives véritablement indiscernables.</p>
<h4><span class="hn">06</span>La théorie quantique des champs : la dualité se dissout</h4>
<p>La question lasse — onde ou particule ? — se dissout enfin dans la <strong>théorie quantique des champs</strong>. Il n'y a pas de petites billes ni d'ondes classiques, seulement des champs remplissant chaque point de l'espace, avec les particules comme leurs ondulations quantifiées. Un photon est un quantum du champ électromagnétique ; un électron, un quantum du champ électronique. L'amplitude du champ obéit à la superposition (donc elle interfère), les détections arrivent en grumeaux discrets (donc nous voyons des particules), et les chances d'un clic vont comme l'amplitude au carré. Couds tout cela avec la relativité restreinte et tu obtiens le Modèle standard — la théorie la plus précisément testée que les humains aient jamais bâtie.</p>`,
          facts: [
            { e: '💻', t: `Le JPEG utilise la transformée en cosinus discrète (étroitement liée à la transformée de Fourier) pour compresser les images en écartant le détail à haute fréquence que l'œil ne peut résoudre.` },
            { e: '⚛️', t: `Dans une expérience de gomme quantique, restaurer l'information sur le « chemin » détruit la figure d'interférence, même si cette information n'est disponible que rétroactivement.` },
            { e: '🔬', t: `L'IRM utilise des impulsions de radiofréquence pour exciter les noyaux d'hydrogène ; les signaux résultants sont décodés par une transformée de Fourier 3D pour produire des images anatomiques.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Transformée de Fourier', e: '\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x)\\,e^{-2\\pi i x\\xi}\\,dx' },
            { n: 'Vitesse de groupe', e: 'v_g = \\dfrac{d\\omega}{dk}' },
            { sep: 1 },
            { n: 'Probabilité en MQ', e: 'I \\propto |\\psi|^2 = |\\psi_1 + \\psi_2|^2' },
            { n: 'Double fente', e: 'I(\\theta) = 4I_0\\cos^2\\!\\left(\\dfrac{\\pi d \\sin\\theta}{\\lambda}\\right)' },
            { sep: 1 },
            { n: 'Heisenberg', e: '\\Delta x\\,\\Delta p \\ge \\dfrac{\\hbar}{2}' },
            { n: 'Énergie-temps', e: '\\Delta E\\,\\Delta t \\ge \\dfrac{\\hbar}{2}' },
            { n: 'de Broglie', e: '\\lambda = \\dfrac{h}{p} = \\dfrac{h}{mv}', c: 'dualité onde-particule' },
          ] }, sim: 'waves',
        },
      },
    },
    blackholes: {
      title: 'Trous noirs et relativité',
      teaser: `Une région de l'espace où la gravité est si extrême que même la lumière ne peut s'échapper. Einstein les a prédits en 1915. Nous en avons photographié un en 2019.`,
      chips: ['Relativité générale', 'Horizon des événements', 'Espace-temps'],
      lvls: {
        junior: {
          title: `Le piège ultime de l'univers - rien ne s'échappe !`,
          body: `<p>Imagine écraser le Soleil entier en une boule de six kilomètres à peine. Sa gravité deviendrait si écrasante, si absolue, que rien - ni une fusée, ni un laser, ni la lumière elle-même - ne pourrait jamais en ressortir. C'est un <strong>trou noir</strong> : pas un trou dans l'espace, mais un objet si incroyablement dense qu'il déforme le tissu même de l'espace et du temps autour de lui.</p>
<p>Les trous noirs naissent quand une étoile géante - au moins vingt fois la masse du Soleil - épuise son carburant nucléaire. Sans plus rien pour repousser vers l'extérieur, son cœur s'effondre en moins d'une seconde, projetant une supernova et écrasant ce qui reste en une <strong>singularité</strong>, un point où notre physique abandonne tout simplement. Autour se trouve l'<strong>horizon des événements</strong>, une ligne invisible de non-retour. Franchis-la et tu ne reviendras jamais - jamais.</p>
<p>Pendant presque un siècle, les trous noirs furent de la pure théorie. Puis, en avril 2019, l'Event Horizon Telescope - un réseau d'antennes radio réparties sur toute la planète, reliées en un seul œil de la taille de la Terre - captura la toute première image de l'ombre d'un trou noir. Sa cible, M87*, est un monstre de 6,5 milliards de fois la masse du Soleil, à 55 millions d'années-lumière, et l'image correspondait aux prédictions d'Einstein de 1915 avec une précision stupéfiante.</p>`,
          facts: [
            { e: '📸', t: `La première image d'un trou noir (M87*, 2019) a nécessité un télescope de la taille de la Terre - huit observatoires radio sur quatre continents reliés par des horloges atomiques.` },
            { e: '⏱️', t: `Le temps s'écoule plus lentement près d'un trou noir. À l'horizon des événements d'un trou noir de masse stellaire, une heure équivaudrait à des milliers d'années pour un observateur lointain.` },
            { e: '🌌', t: `La Voie lactée abrite un trou noir supermassif - Sagittarius A* - de 4 millions de masses solaires, à 26 000 années-lumière de la Terre. Son ombre a été photographiée en 2022.` },
          ],
          formula: null, sim: 'blackholes',
        },
        student: {
          title: `Relativité générale, métrique de Schwarzschild et ondes gravitationnelles`,
          body: `<p>La <strong>relativité générale</strong> d'Einstein (1915) a jeté la force de gravité de Newton et l'a remplacée par la géométrie : la masse et l'énergie courbent l'espace-temps, et les objets suivent les trajectoires les plus droites disponibles à travers les courbes. Toute la théorie tient dans les équations de champ d'Einstein \\(G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\dfrac{8\\pi G}{c^4}T_{\\mu\\nu}\\) - la géométrie à gauche, la matière à droite. Pour une masse isolée et non tournante, la solution exacte est la <strong>métrique de Schwarzschild</strong>, qui dissimule une surface critique à \\(r_S = 2GM/c^2\\), l'horizon des événements.</p>
<p>Les conséquences près de cette surface sont étranges et tout à fait réelles. Le temps lui-même ralentit pour qui se trouve au fond du puits - une horloge au rayon \\(r\\) bat à \\(d\\tau = \\sqrt{1 - r_S/r}\\,dt\\), s'arrêtant presque à l'horizon vu de loin - et la lumière qui lutte pour sortir est étirée vers le rouge, \\(z = (1 - r_S/r)^{-1/2} - 1\\). La matière ne peut pas non plus tomber tout droit : elle spirale dans un disque d'accrétion, chauffé par frottement à des millions de degrés jusqu'à briller en rayons X. C'est cette lueur qui nous fait trouver des trous noirs que nous ne verrons jamais directement.</p>
<p>La relativité générale a aussi prédit les <strong>ondes gravitationnelles</strong> - de véritables rides dans l'espace-temps - et en 2015 LIGO en a enfin attrapé une. Deux trous noirs de 36 et 29 masses solaires ont spiralé ensemble à 1,3 milliard d'années-lumière et, en deux dixièmes de seconde, ont converti trois Soleils entiers de masse en rayonnement gravitationnel, rayonnant un instant plus que toutes les étoiles de l'univers visible. Les ondes ont étiré les bras de 4 km de LIGO de \\(10^{-18}\\) m - un millième de la largeur d'un proton - et nous les avons entendues.</p>`,
          facts: [
            { e: '🔬', t: `La sensibilité de LIGO est si extrême que les fluctuations quantiques de photons individuels limitent sa précision - on utilise la lumière « comprimée » (une technique d'optique quantique) pour passer sous cette limite.` },
            { e: '🌊', t: `Le signal GW170817 (deux étoiles à neutrons fusionnant, 2017) a été détecté simultanément en ondes gravitationnelles, rayons gamma, rayons X, optique et radio - la naissance de l'astronomie multimessager.` },
            { e: '⚫', t: `Sagittarius A* a une masse de 4,15 millions de Soleils comprimée dans une région plus petite que notre Système solaire - pourtant il est étonnamment calme, accrétant à seulement 10⁻⁸ de son taux maximal théorique.` },
          ],
          formula: { tex: 1, rows: [
            { n: `Équations de champ d'Einstein`, e: 'G_{\\mu\\nu} + \\Lambda g_{\\mu\\nu} = \\dfrac{8\\pi G}{c^4}T_{\\mu\\nu}' },
            { n: 'Rayon de Schwarzschild', e: 'r_S = \\dfrac{2GM}{c^2}', c: 'horizon des événements' },
            { sep: 1 },
            { n: 'Métrique de Schwarzschild', e: 'ds^2 = -\\!\\left(1-\\tfrac{r_S}{r}\\right)\\!c^2dt^2 + \\left(1-\\tfrac{r_S}{r}\\right)^{-1}\\!dr^2 + r^2 d\\Omega^2' },
            { n: 'Dilatation du temps', e: 'd\\tau = \\sqrt{1 - r_S/r}\\;dt' },
            { sep: 1 },
            { n: 'Redshift gravitationnel', e: 'z = (1 - r_S/r)^{-1/2} - 1' },
            { n: 'ISCO', e: 'r_{\\text{ISCO}} = 3r_S = 6GM/c^2' },
          ] }, sim: 'blackholes',
        },
        scholar: {
          title: `Métrique de Kerr, rayonnement de Hawking et le paradoxe de l'information`,
          body: `<h4><span class="hn">01</span>Les vrais trous noirs tournent</h4>
<p>L'élégante solution de Schwarzschild est une idéalisation ; presque tout trou noir réel tourne, et la rotation change tout. La <strong>métrique de Kerr</strong> (Roy Kerr, 1963) décrit un trou tournant de masse \\(M\\) et de moment cinétique \\(J = aMc\\), avec le spin \\(a\\) plafonné à \\(GM/c^2\\) - au-delà, l'horizon disparaîtrait et exposerait une singularité « nue » que la nature semble interdire. La découverte de Kerr a mis près d'un demi-siècle à être trouvée dans le ciel, mais elle décrit désormais les moteurs au centre des galaxies.</p>
<h4><span class="hn">02</span>L'entraînement des référentiels et l'ergosphère</h4>
<p>Une masse en rotation ne courbe pas seulement l'espace-temps, elle l'<em>entraîne</em> avec elle comme l'eau qui tourbillonne dans un siphon. Assez près, cet entraînement devient si féroce que dans une région appelée <strong>ergosphère</strong> - hors de l'horizon, donc encore franchissable en retour - rien ne peut rester immobile par rapport aux étoiles lointaines. Tenir sa position n'est plus une option : tu es forcé de co-tourner avec le trou, que tu le veuilles ou non.</p>
<h4><span class="hn">03</span>Extraire de l'énergie d'un trou noir : le processus de Penrose</h4>
<p>Cet entraînement est exploitable. Dans le schéma de Penrose, un objet entrant dans l'ergosphère se scinde en deux ; un morceau est projeté sur une trajectoire d'énergie négative dans le trou tandis que l'autre s'échappe en emportant <em>plus</em> d'énergie que la paire n'en apportait - le surplus siphonné directement du spin du trou, jusqu'à environ 29 % de sa masse-énergie. La nature semble faire exactement cela à grande échelle, puisant dans la rotation des trous noirs pour lancer les jets relativistes longs d'années-lumière des galaxies actives.</p>
<h4><span class="hn">04</span>Les trous noirs ne sont pas noirs : le rayonnement de Hawking</h4>
<p>La bombe de Hawking en 1974 fut que la mécanique quantique fait briller un trou noir. Près de l'horizon, les fluctuations agitées du vide sont scindées, un partenaire tombant tandis que l'autre s'échappe en véritable rayonnement thermique à \\(T_H = \\dfrac{\\hbar c^3}{8\\pi G M k_B}\\). La température est minuscule pour un trou de masse stellaire, mais attention au signe : plus petit signifie plus <em>chaud</em>, si bien qu'en rayonnant un trou rétrécit, chauffe et rayonne plus vite, s'évaporant dans un emballement qui s'achève - après peut-être \\(10^{64}\\) ans - en un éclair final.</p>
<h4><span class="hn">05</span>Le paradoxe de l'information</h4>
<p>Cette évaporation ouvre la plaie la plus profonde de la physique théorique. Si le rayonnement sortant est vraiment thermique - du pur hasard - alors tout ce qui est jamais tombé dedans est effacé quand le trou disparaît, ce que la mécanique quantique interdit catégoriquement : l'information doit se conserver. Depuis cinquante ans, la douceur de la relativité et l'unitarité de la théorie quantique se font la guerre autour d'un trou noir qui s'évapore, et il n'y a toujours pas de paix pleinement admise.</p>
<h4><span class="hn">06</span>Holographie et la courbe de Page</h4>
<p>L'indice le plus troublant est que l'entropie d'un trou noir varie avec l'<em>aire</em> de son horizon, pas avec son volume - \\(S_{BH} = \\dfrac{k_B A}{4 l_P^2}\\) - laissant penser que tout ce qui est à l'intérieur est d'une certaine façon encodé sur la surface, la graine du <strong>principe holographique</strong>. Des calculs récents de la « courbe de Page », utilisant d'étranges configurations gravitationnelles appelées trous de ver de réplique, suggèrent que l'information s'échappe finalement et que l'unitarité survit. Comment exactement reste l'une des questions les plus vives dans la quête d'une gravité quantique.</p>`,
          facts: [
            { e: '🔬', t: `Le calcul de la courbe de Page (2019) a utilisé des trous de ver de réplique - des points-selles dans l'intégrale de chemin gravitationnelle reliant différentes répliques du système - pour montrer que l'unitarité est préservée, en sommant sur des géométries d'espace-temps topologiquement non triviales.` },
            { e: '🌌', t: `M87* tourne à ~90 % du spin maximal possible (a ≈ 0,9 GM/c²), déduit de l'asymétrie de son image de 2019 - un entraînement des référentiels quasi maximal, qui alimente un jet relativiste de 5 000 années-lumière.` },
            { e: '🎯', t: `L'Event Horizon Telescope atteint une résolution angulaire de 20 microsecondes d'arc - l'équivalent de lire un journal à New York depuis un café à Paris.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Température de Hawking', e: 'T_H = \\dfrac{\\hbar c^3}{8\\pi G M k_B}', c: '~10⁻⁸ K pour 1 M_☉' },
            { n: `Temps d'évaporation`, e: '\\tau = \\dfrac{5120\\pi G^2 M^3}{\\hbar c^4}', c: '~10⁶⁴ ans pour 1 M_☉' },
            { sep: 1 },
            { n: 'Bekenstein–Hawking', e: 'S_{BH} = \\dfrac{k_B A}{4 l_P^2}', c: 'l_P = √(ℏG/c³)' },
            { n: 'Processus de Penrose', e: '\\Delta E \\le \\left(1 - \\tfrac{1}{\\sqrt{2}}\\right)Mc^2 \\approx 29\\%' },
            { sep: 1 },
            { n: 'Borne de spin de Kerr', e: '0 \\le a \\le GM/c^2', c: 'extrémal à égalité' },
            { n: 'Ergosphère', e: 'r_{\\text{ergo}} = \\tfrac{r_S}{2} + \\sqrt{\\tfrac{r_S^2}{4} - a^2\\cos^2\\theta}' },
          ] }, sim: 'blackholes',
        },
      },
    },
    solarsystem: {
      title: 'Le Système solaire',
      teaser: `Huit planètes, plus de 200 lunes, des millions d'astéroïdes, et une étoile qui contient 99,86 % de toute la masse. Notre voisinage cosmique est bien plus étrange qu'il n'y paraît.`,
      chips: ['Planètes', 'Orbites', 'Lunes'],
      lvls: {
        junior: {
          title: `Notre voisinage cosmique - huit mondes et plus encore !`,
          body: `<p>Notre Système solaire est une famille de mondes tournant autour d'une seule étoile, notre Soleil. Il compte <strong>huit planètes</strong>, plus de 200 lunes, des millions d'astéroïdes, des milliards de comètes et un vaste nuage de débris glacés aux confins. Chaque parcelle s'est condensée à partir du même disque tourbillonnant de gaz et de poussière il y a environ 4,6 milliards d'années - une poussière qu'une étoile voisine, en explosant, avait enrichie des éléments lourds dont tu es toi-même fait.</p>
<p>Les quatre planètes internes - Mercure, Vénus, la Terre et Mars - sont de petits mondes rocheux. Les quatre externes - Jupiter, Saturne, Uranus et Neptune - sont de géantes boules de gaz et de glace. Jupiter à elle seule est si vaste que toutes les autres planètes y tiendraient avec de la place en rab. Et les célèbres anneaux de Saturne ? Des milliards de morceaux de glace et de roche, du grain de sable à la taille d'une maison, balayant un disque épais de quelques dizaines de mètres à peine.</p>
<p>Certains des endroits les plus palpitants là-haut ne sont pas les planètes du tout, mais leurs lunes. Sous la coquille glacée d'<strong>Europe</strong>, lune de Jupiter, s'étend un océan global d'eau liquide, empêché de geler par le chauffage de marée - l'un des meilleurs paris de tout le Système solaire pour trouver la vie. <strong>Titan</strong>, lune de Saturne, porte une épaisse atmosphère orange et a des lacs en surface, avec pluie, rivières et un cycle météo étrangement semblable à celui de la Terre - sauf qu'il fonctionne au méthane liquide au lieu de l'eau.</p>`,
          facts: [
            { e: '🪐', t: `Les anneaux de Saturne s'étendent sur 282 000 km - de quoi aligner 22 Terres - et pourtant ils n'ont qu'une dizaine de mètres d'épaisseur par endroits. Ramenés à une feuille de papier, ils seraient plus fins que le papier.` },
            { e: '🌋', t: `Io, une lune de Jupiter, est le corps le plus volcaniquement actif du Système solaire - avec des centaines de volcans actifs alimentés par le pétrissage de marée de l'immense gravité de Jupiter.` },
            { e: '🌊', t: `L'océan sous la surface d'Europe contient plus d'eau liquide que tous les océans de la Terre réunis - maintenu chaud par la flexion de marée, avec un fond rocheux qui pourrait abriter des sources hydrothermales.` },
          ],
          formula: null, sim: 'solarsystem',
        },
        student: {
          title: `Mécanique orbitale, lois de Kepler et formation planétaire`,
          body: `<p>Les <strong>trois lois de Kepler</strong>, tirées des données à l'œil nu de Tycho Brahe puis dérivées proprement par Newton, régissent encore toute orbite. Les planètes tracent des <em>ellipses</em> avec le Soleil en un foyer ; une ligne du Soleil à la planète balaie des aires égales en des temps égaux, si bien qu'un monde file au plus près et lambine au plus loin ; et les périodes obéissent à \\(T^2 = \\dfrac{4\\pi^2}{GM_\\odot}a^3\\), le carré de l'année fixé par le cube de la taille de l'orbite. Cette dernière relation est le mètre-ruban du Système solaire, transformant une période mesurée directement en distance.</p>
<p>Le système s'est bâti de bas en haut. Dans le jeune <em>disque protoplanétaire</em>, la poussière s'est agglomérée en planétésimaux kilométriques, qui se sont heurtés et fondus en protoplanètes sur des dizaines de millions d'années. Au-delà de la <em>ligne des glaces</em> - vers 2,7 UA, où l'eau gèle - les cœurs ont grossi assez pour capturer l'hydrogène et l'hélium en masse, gonflant en géantes gazeuses. Plus tard les géantes elles-mêmes ont réarrangé leurs orbites, et une telle migration (le modèle de Nice) aurait projeté vers l'intérieur une grêle de débris : le Grand Bombardement tardif qui a marqué la jeune Lune.</p>
<p>Comme la gravité faiblit avec la distance, un grand corps subit une attraction plus forte de son côté proche que de son côté lointain - une <strong>force de marée</strong> qui étire, \\(a_{\\text{tidal}} \\approx \\dfrac{2GMd}{r^3}\\). Avec le temps, les marées verrouillent la plupart des grandes lunes pour qu'une seule face pointe à jamais vers l'intérieur, et là où elles l'emportent sur la gravité propre d'un corps - à l'intérieur de la <strong>limite de Roche</strong> \\(d_{\\text{Roche}} = a\\left(\\dfrac{2M_{\\text{planet}}}{M_{\\text{sat}}}\\right)^{1/3}\\) - aucune lune ne peut tenir. C'est précisément pourquoi les planètes portent des anneaux plutôt qu'une lune de plus : les débris orbitent trop près pour jamais s'agglomérer.</p>`,
          facts: [
            { e: '🔭', t: `La sonde Voyager 1, lancée en 1977, est désormais à 23 milliards de km du Soleil - l'objet fabriqué par l'homme le plus lointain - et transmet encore des données avec une radio de 22 watts (comme l'ampoule d'un frigo).` },
            { e: '💥', t: `La Lune s'est formée quand un corps de la taille de Mars (Théia) a heurté la jeune Terre il y a ~4,5 milliards d'années, éjectant de la matière qui s'est agglomérée en Lune - confirmé par les rapports isotopiques des roches lunaires, identiques à ceux du manteau terrestre.` },
            { e: '🌀', t: `La Grande Tache rouge de Jupiter est une tempête plus large que la Terre qui fait rage sans interruption depuis au moins 350 ans - bien qu'elle rétrécisse et ne fasse plus que 1,3 fois le diamètre terrestre.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Troisième loi de Kepler', e: 'T^2 = \\dfrac{4\\pi^2}{GM_\\odot}\\,a^3' },
            { n: 'Vitesse orbitale', e: 'v_{\\text{orb}} = \\sqrt{\\dfrac{GM_\\odot}{r}}' },
            { sep: 1 },
            { n: 'Accélération de marée', e: 'a_{\\text{tidal}} \\approx \\dfrac{2GMd}{r^3}' },
            { n: 'Limite de Roche', e: 'd_{\\text{Roche}} = a\\left(\\dfrac{2M_{\\text{planet}}}{M_{\\text{sat}}}\\right)^{1/3}' },
            { sep: 1 },
            { n: 'Vitesse de libération', e: 'v_{\\text{esc}} = \\sqrt{\\dfrac{2GM}{r}}' },
            { n: 'Sphère de Hill', e: 'r_H = a(1-e)\\left(\\dfrac{m}{3M}\\right)^{1/3}' },
          ] }, sim: 'solarsystem',
        },
        scholar: {
          title: `Dynamique à N corps, résonances et habitabilité planétaire`,
          body: `<h4><span class="hn">01</span>Le problème sans formule</h4>
<p>Deux corps qui s'attirent orbitent en ellipses parfaites et résolubles. Ajoutes-en un troisième et les jolies maths s'effondrent : Poincaré a prouvé en 1890 que le <strong>problème à N corps</strong> général n'a pas de solution en forme close pour \\(N \\ge 3\\). Le mieux que nous puissions faire est de calculer l'avenir numériquement, par minuscules pas - ce qui signifie que la majestueuse horlogerie des cieux est, au fond, un problème que nous ne savons pas vraiment résoudre sur le papier.</p>
<h4><span class="hn">02</span>Un Système solaire discrètement chaotique</h4>
<p>Pire, le Système solaire est <em>chaotique</em>. Son temps de Lyapunov n'est que de ~5 millions d'années, si bien que toute incertitude sur les positions des planètes explose exponentiellement et leur configuration exacte devient réellement imprévisible au-delà de ~100 millions d'années. Mercure est l'électron libre : de longues simulations (Laskar & Gastineau, 2009) trouvent une probabilité d'environ 1 % que son orbite devienne assez excentrique, dans le temps qu'il reste au Soleil, pour heurter Vénus ou la Terre. Le théorème KAM sauve un peu d'ordre, garantissant des îlots d'orbites stables et quasi périodiques au milieu du chaos - c'est pourquoi le système a duré si longtemps.</p>
<h4><span class="hn">03</span>Des résonances qui bâtissent des mondes et attisent des volcans</h4>
<p>Quand les périodes orbitales se calent sur des rapports simples, on obtient une <strong>résonance de moyen mouvement</strong>, aux effets spectaculaires. Les lunes internes de Jupiter Io, Europe et Ganymède sont piégées dans une résonance de Laplace 1:2:4 qui maintient leurs orbites légèrement elliptiques, si bien que la gravité de Jupiter pétrit Io à chaque tour. Cette flexion de marée incessante déverse ~2 W/m² dans l'intérieur d'Io - trente fois le flux géothermique terrestre - en faisant le corps le plus violemment volcanique du Système solaire. C'est la résonance, pas la radioactivité, qui alimente ces éruptions.</p>
<h4><span class="hn">04</span>Des résonances qui creusent des vides</h4>
<p>Les résonances peuvent aussi détruire. Dans la ceinture d'astéroïdes, les <strong>lacunes de Kirkwood</strong> - des couloirs vides aux rapports de période 3:1, 5:2 et 2:1 avec Jupiter - marquent où des coups de pouce résonnants répétés pompent l'excentricité d'un astéroïde jusqu'à le projeter sur une orbite croisant les planètes. Ces résonances vidées agissent comme un lent goutte-à-goutte alimentant la population d'objets géocroiseurs, autrement dit la même physique qui sculpte la ceinture nous livre aussi nos impacteurs occasionnels.</p>
<h4><span class="hn">05</span>Ce qui rend une planète habitable</h4>
<p>La classique <strong>zone habitable</strong> - la coquille autour d'une étoile où l'eau liquide peut persister, environ 0,95–1,67 UA pour le Soleil - n'est que le ticket d'entrée. L'habitabilité réelle semble aussi exiger assez de masse pour retenir une atmosphère et entraîner la tectonique des plaques, un champ magnétique pour repousser le vent stellaire, un cycle carbonate–silicate qui thermostate le climat sur des ères, et peut-être une grande lune pour stabiliser l'inclinaison de la planète. La Terre les satisfait toutes en silence, toutes à la fois.</p>
<h4><span class="hn">06</span>Prendre du recul : le voisinage chanceux</h4>
<p>L'habitabilité passe aussi à l'échelle supérieure. Il existe sans doute une zone habitable <em>galactique</em> : trop près du centre galactique bondé, les radiations stérilisantes et les rencontres perturbatrices abondent ; trop loin, il n'y a pas assez d'éléments lourds pour bâtir des planètes rocheuses ou une chimie complexe. Et au sein de notre système, Jupiter semble faire office de bouclier gravitationnel, déviant ou éjectant des comètes qui, sinon, martèleraient bien plus souvent les planètes internes. Que nous existions seulement repose sur une chaîne de telles discrètes bonnes fortunes.</p>`,
          facts: [
            { e: '🔬', t: `Le télescope spatial James Webb a détecté du CO₂, du SO₂ et un possible sulfure de diméthyle (une biosignature potentielle) dans l'atmosphère de K2-18b - une sous-Neptune en zone habitable - même si l'interprétation reste débattue.` },
            { e: '💫', t: `Des simulations numériques montrent que sans Jupiter comme bouclier gravitationnel, la Terre subirait 1 000 fois plus d'impacts d'astéroïdes - Jupiter dévie ou éjecte la plupart des impacteurs potentiels avant qu'ils n'atteignent le Système solaire interne.` },
            { e: '🌍', t: `L'inclinaison axiale de la Terre (23,5°) est stabilisée par la Lune à ~±1,3° près sur des millions d'années. Sans la Lune, des variations chaotiques de l'obliquité de 0°–85° causeraient des sautes climatiques extrêmes, empêchant peut-être la vie complexe.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Temps de Lyapunov', e: '\\tau_L \\sim 5\\ \\text{Myr}', c: 'Mercure le plus instable' },
            { n: 'Dissipation de marée', e: 'P_{\\text{tidal}} = \\tfrac{21}{2}\\dfrac{k_2}{Q}\\dfrac{GM^2 R^5}{a^6}e^2' },
            { sep: 1 },
            { n: 'Zone habitable', e: 'r_{\\text{HZ}} = \\sqrt{L/L_\\odot}\\,\\times(0.95\\text{–}1.67)\\ \\text{UA}' },
            { n: 'Condition de résonance', e: '\\dfrac{n_1}{n_2} = \\dfrac{p}{p+q},\\quad p,q \\in \\mathbb{Z}' },
            { sep: 1 },
            { n: 'Vitesse de libération', e: 'v_{\\text{esc}} = \\sqrt{2GM/r}' },
            { n: 'Sphère de Hill', e: 'r_H = a\\left(\\dfrac{m}{3M}\\right)^{1/3}' },
          ] }, sim: 'solarsystem',
        },
      },
    },
    eclipse: {
      title: 'Éclipses',
      teaser: `Quand le Soleil s'assombrit en plein jour ou que la Lune devient rouge sang - et pourquoi ce n'est pas tous les mois.`,
      chips: ['Éclipse solaire', 'Éclipse lunaire', 'Ombres'],
      lvls: {
        junior: {
          title: `Quand le Soleil ou la Lune s'assombrit`,
          body: `<p>De temps en temps le ciel fait quelque chose de spectaculaire : le Soleil est effacé en plein jour, ou la pleine Lune devient d'un rouge cuivré profond. Ce sont les <strong>éclipses</strong>, et elles se produisent parce que trois boules dans l'espace - le Soleil, la Terre et la Lune - s'alignent un instant en file, de sorte que l'une projette son ombre sur une autre. Le <strong>12 août 2026</strong>, une éclipse solaire totale traversera l'Islande et le nord de l'Espagne, la première visible depuis l'Europe continentale depuis 1999.</p>
<p>Une <strong>éclipse solaire</strong> arrive à la nouvelle Lune, quand la Lune se glisse exactement entre nous et le Soleil et laisse tomber son ombre sur la Terre. Qui se trouve dans cette ombre voit la Lune couvrir entièrement le Soleil pendant quelques minutes - le jour devient crépuscule, les étoiles apparaissent, et l'atmosphère externe et spectrale du Soleil flamboie autour d'un disque noir. Une <strong>éclipse lunaire</strong> en est l'image miroir : à la pleine Lune, la Terre se place entre le Soleil et la Lune, et notre ombre tombe sur la Lune, la teintant de rouge.</p>
<p>Alors pourquoi n'y a-t-il pas d'éclipse chaque mois, à chaque nouvelle et pleine Lune ? Parce que l'orbite de la Lune est inclinée de quelques degrés, si bien que la plupart des mois son ombre passe juste au-dessus ou au-dessous de la Terre et la manque complètement. Ce n'est que lorsque l'alignement est presque parfait - quelques fois par an - qu'une ombre atteint vraiment sa cible. C'est ce quasi-échec le reste du temps qui rend une éclipse si spéciale.</p>`,
          facts: [
            { e: '🌘', t: `L'éclipse solaire totale du 12 août 2026 est la première visible depuis l'Europe continentale depuis 1999 ; elle traverse l'Islande et le nord de l'Espagne.` },
            { e: '🔴', t: `Une « lune de sang » n'est qu'une éclipse lunaire : la Lune brille en rouge car elle n'est éclairée que par la lumière solaire courbée par l'atmosphère terrestre - tous les levers et couchers de soleil à la fois.` },
            { e: '🎯', t: `Par pure coïncidence, le Soleil est ~400 fois plus large que la Lune et ~400 fois plus loin, si bien qu'ils paraissent de même taille dans notre ciel - et c'est pourquoi les éclipses totales sont possibles.` },
          ],
          formula: null, sim: 'eclipse',
        },
        student: {
          title: `La géométrie des éclipses, et pourquoi elles sont rares`,
          body: `<p>Les éclipses sont un jeu d'ombres à règles strictes. Une éclipse solaire exige une <em>nouvelle</em> Lune (Lune entre la Terre et le Soleil) ; une éclipse lunaire exige une <em>pleine</em> Lune (Terre entre le Soleil et la Lune). Les ombres ont deux parties : l'<strong>ombre</strong> centrale et sombre, où la source de lumière est entièrement bloquée, et la <strong>pénombre</strong> plus claire autour, où elle n'est que partiellement cachée. Dans l'ombre tu vois une éclipse solaire totale ; dans la pénombre, seulement partielle.</p>
<p>Si la Lune orbitait dans le même plan que celui où la Terre orbite autour du Soleil - l'écliptique - nous aurions une éclipse solaire et une lunaire chaque mois. Mais l'orbite de la Lune est inclinée d'environ 5°, si bien qu'elle passe d'ordinaire au-dessus ou au-dessous de la ligne Soleil-Terre. Les éclipses ne peuvent survenir que lorsque la Lune traverse cette ligne - à l'un de ses deux <strong>nœuds</strong> - au moment même de la nouvelle ou de la pleine Lune. Ces alignements se regroupent en deux « saisons d'éclipses » par an.</p>
<p>La coïncidence de taille entre le Soleil et la Lune rend la Terre singulièrement chanceuse. Comme la taille apparente de la Lune correspond presque à celle du Soleil, elle parvient tout juste à couvrir le disque et à révéler la couronne. Quand la Lune est un peu plus loin sur son orbite légèrement elliptique, elle reste trop petite et laisse un anneau brillant - une éclipse <strong>annulaire</strong>. La totalité est brève (quelques minutes) car la pointe de l'ombre est petite et file sur le sol à plus de 1 500 km/h.</p>`,
          facts: [
            { e: '🌗', t: `Dans l'ombre tu vois la totalité ; dans la pénombre, plus large, seulement une éclipse partielle. C'est pourquoi seule une étroite bande de la Terre voit une éclipse solaire totale.` },
            { e: '💍', t: `Quand la Lune est près du point le plus éloigné de son orbite, elle paraît trop petite pour couvrir le Soleil et laisse un « anneau de feu » - une éclipse annulaire.` },
            { e: '📅', t: `Les éclipses arrivent par « saisons », environ deux fois par an, quand l'orbite inclinée de la Lune croise le plan Terre-Soleil près d'une nouvelle ou pleine Lune.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Éclipse solaire', e: `\\text{nouvelle Lune} + \\text{près d'un nœud}` },
            { n: 'Éclipse lunaire', e: `\\text{pleine Lune} + \\text{près d'un nœud}` },
            { sep: 1 },
            { n: 'Inclinaison orbitale', e: 'i \\approx 5.14°', c: 'pourquoi pas tous les mois' },
            { n: 'Cycle de Saros', e: '\\approx 18\\text{ ans } 11\\text{ j}', c: 'les éclipses se répètent' },
          ] }, sim: 'eclipse',
        },
        scholar: {
          title: `Nœuds, cycle de Saros et prévision des éclipses`,
          body: `<h4><span class="hn">01</span>La ligne des nœuds</h4>
<p>L'orbite de la Lune coupe l'écliptique en deux points, les <strong>nœuds</strong>. Une éclipse exige la syzygie - Soleil, Terre et Lune alignés - à quelques degrés d'un nœud, les « limites écliptiques ». Comme la ligne des nœuds recule (précession) une fois tous les 18,6 ans, les saisons d'éclipses avancent d'environ 19 jours chaque année au lieu de rester fixes au calendrier.</p>
<h4><span class="hn">02</span>Ombre, pénombre et antumbra</h4>
<p>Le cône d'ombre de la Lune atteint à peine la Terre ; quand la Lune est près de l'apogée, la pointe reste trop courte, l'<em>antumbra</em> touche le sol à la place, et l'éclipse est annulaire. Le trajet de la totalité ne fait que ~100-270 km de large, et sa durée - plafonnée vers 7,5 minutes - dépend de la taille de l'ombre face au mouvement relatif de la Lune et de l'observateur.</p>
<h4><span class="hn">03</span>Le Saros</h4>
<p>Après 223 mois synodiques - 6 585,3 jours, soit 18 ans 11 jours et 8 heures - le Soleil, la Lune et les nœuds retrouvent presque la même géométrie, si bien qu'une éclipse quasi identique se répète. Les 8 heures en plus font tourner l'événement suivant d'environ 120° vers l'ouest en longitude ; les membres successifs du Saros glissent aussi en latitude, si bien qu'une série naît près d'un pôle, traverse le globe en ~1 200-1 500 ans et meurt à l'autre.</p>
<h4><span class="hn">04</span>Une coïncidence avec une date de péremption</h4>
<p>Les diamètres apparents du Soleil et de la Lune valent tous deux environ 0,5°, et c'est cela qui rend la totalité possible (plutôt qu'un anneau permanent). Mais la Lune s'éloigne de ~3,8 cm par an, si bien que dans environ 600 millions d'années son disque restera toujours trop petit et les éclipses solaires totales cesseront à jamais. Nous vivons justement à l'époque où elles se produisent.</p>
<h4><span class="hn">05</span>Les éclipses comme laboratoire</h4>
<p>La totalité a fait progresser la physique à plusieurs reprises : l'éclipse de 1919 a permis à Eddington de mesurer la déviation de la lumière des étoiles autour du Soleil et de confirmer la relativité générale ; l'hélium a d'abord été identifié dans le spectre du Soleil lors de l'éclipse de 1868 ; et la couronne et la chromosphère s'étudient encore mieux quand l'aveuglante photosphère est masquée. Les éclipses consignées ancrent même la chronologie du monde antique.</p>`,
          facts: [
            { e: '🔭', t: `L'éclipse totale de 1919 a permis à Eddington de mesurer la déviation de la lumière des étoiles autour du Soleil, confirmant la relativité générale d'Einstein.` },
            { e: '🌞', t: `L'hélium a été découvert dans le spectre du Soleil lors de l'éclipse de 1868 - 27 ans avant d'être trouvé sur Terre.` },
            { e: '📉', t: `La Lune s'éloigne de ~3,8 cm par an ; dans ~600 millions d'années elle sera trop petite pour causer une éclipse solaire totale.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Mois synodique', e: '29.531\\ \\text{jours}', c: 'de nouvelle Lune à nouvelle Lune' },
            { n: 'Mois draconitique', e: '27.212\\ \\text{jours}', c: 'de nœud à nœud' },
            { sep: 1 },
            { n: 'Période de Saros', e: '223\\ \\text{synodiques} \\approx 18\\text{a }11\\text{j}' },
            { n: 'Limite écliptique solaire', e: '|\\beta| \\lesssim 1.5°' },
          ] }, sim: 'eclipse',
        },
      },
    },
    meteors: {
      title: 'Étoiles filantes et pluies de météores',
      teaser: `Pourquoi les étoiles filantes arrivent selon un calendrier - et pourquoi les Perséides de 2026 s'annoncent spectaculaires.`,
      chips: ['Perséides', 'Comètes', 'Étoiles filantes'],
      lvls: {
        junior: {
          title: `Pourquoi les étoiles filantes arrivent par pluies`,
          body: `<p>Une « étoile filante » n'est pas du tout une étoile - c'est un grain de poussière spatiale, souvent pas plus gros qu'un grain de sable, qui percute le sommet de notre atmosphère à des dizaines de kilomètres par seconde. Il va si vite qu'il chauffe l'air autour de lui jusqu'au blanc incandescent, et cette traînée lumineuse est ce que tu vois. La poussière elle-même brûle en une seconde ou deux, très haut au-dessus du sol.</p>
<p>N'importe quelle nuit noire, tu peux en attraper quelques-unes au hasard. Mais quelques fois par an le ciel offre un vrai spectacle - une <strong>pluie de météores</strong> - avec des dizaines par heure, qui semblent toutes jaillir du même point. Cela arrive quand la Terre traverse une traînée de poussière laissée par une <strong>comète</strong>. La comète sème des miettes le long de son orbite, et une fois par an notre planète fonce droit dedans, comme une voiture dans un nuage de moucherons.</p>
<p>Les plus célèbres sont les <strong>Perséides</strong>, dont le pic revient chaque août - et 2026 est un excellent cru, sans Lune brillante pour les effacer, la même nuit remarquable (12 août) qu'une éclipse solaire totale sur l'Europe. Les météores semblent rayonner depuis la constellation de Persée, c'est donc le « radiant » - mais tu n'as pas à le fixer. Allonge-toi, laisse tes yeux s'habituer à l'obscurité et regarde tout le ciel.</p>`,
          facts: [
            { e: '☄️', t: `Les pluies de météores se produisent quand la Terre traverse la traînée de poussière laissée par une comète. Les Perséides viennent de la comète Swift-Tuttle.` },
            { e: '🔥', t: `La plupart des météores ne sont pas plus gros qu'un grain de sable - la traînée éclatante est de l'air surchauffé, pas le grain qui brûle.` },
            { e: '🌑', t: `Les Perséides culminent les 12-13 août 2026 sous une nouvelle Lune, si bien qu'un ciel noir pourrait révéler jusqu'à 100 météores par heure.` },
          ],
          formula: null, sim: 'meteors',
        },
        student: {
          title: `Débris de comète, radiants, et pourquoi les pluies sont annuelles`,
          body: `<p>Un <strong>météoroïde</strong> est un petit fragment de roche ou de poussière dans l'espace ; quand il frappe l'atmosphère (~100 km d'altitude) et s'embrase, c'est un <strong>météore</strong> ; ce qui survit jusqu'au sol est une <strong>météorite</strong>. Les météores des pluies sont des miettes de comète. Quand une comète passe près du Soleil, sa glace se sublime et libère de la poussière qui s'étale le long de l'orbite de la comète, formant un courant de débris. Chaque fois que l'orbite de la Terre croise ce courant - à la même date chaque année - nous avons une pluie.</p>
<p>Tous les météores d'une pluie voyagent sur des trajectoires parallèles (ils partagent l'orbite de la comète), si bien que la perspective les fait sembler diverger d'un seul point du ciel - le <strong>radiant</strong> - comme des rails parallèles semblent se rejoindre à l'horizon. Les pluies portent le nom de la constellation où se trouve le radiant : Perséides (Persée), Géminides (Gémeaux), Léonides (Lion). L'activité se mesure par le <em>Taux Horaire Zénithal</em>, le nombre que tu verrais sous un ciel parfaitement noir avec le radiant au zénith.</p>
<p>Le taux monte et descend sur plusieurs jours à mesure que la Terre entre et sort de la partie la plus dense du courant, avec un pic quand elle en traverse le cœur. Le trouble-fête est le clair de lune : une Lune brillante noie les plus faibles, et c'est pourquoi les prévisionnistes s'enthousiasment quand un pic tombe sur une nouvelle Lune - comme les Perséides en 2026. Les météores frappent l'air entre 11 et 72 km/s ; les Perséides sont rapides, environ 59 km/s.</p>`,
          facts: [
            { e: '🚆', t: `Les météores d'une pluie courent en parallèle mais semblent rayonner d'un point - le « radiant » - le même effet de perspective que des rails se rejoignant à l'horizon.` },
            { e: '🌠', t: `Les Perséides frappent l'air à ~59 km/s. Les douces Draconides rampent à ~20 km/s ; les Léonides filent à ~71 km/s.` },
            { e: '🌙', t: `Le vrai test d'une pluie, c'est la Lune : même une pluie forte déçoit sous une Lune brillante, d'où le prix d'un pic à nouvelle Lune comme celui des Perséides 2026.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Météoroïde → météore → météorite', e: `\\text{dans l'espace} \\to \\text{l'air brille} \\to \\text{au sol}` },
            { sep: 1 },
            { n: 'Taux Horaire Zénithal', e: '\\text{ZHR} = \\text{météores/h, ciel idéal}' },
            { n: 'Vitesse des Perséides', e: 'v \\approx 59\\ \\text{km/s}' },
          ] }, sim: 'meteors',
        },
        scholar: {
          title: `Courants, ZHR et la vie d'un météoroïde`,
          body: `<h4><span class="hn">01</span>Dynamique du courant</h4>
<p>La poussière semée par une comète s'étale le long de l'orbite et se disperse sur des siècles sous l'effet des forces de rayonnement (effet Poynting-Robertson) et des perturbations planétaires. Des filaments jeunes et denses produisent des sursauts et même des tempêtes - les Léonides ont livré des milliers de météores par heure en 1833 et 1966 - quand la Terre tranche de la matière fraîchement déposée plutôt que le courant de fond étalé.</p>
<h4><span class="hn">02</span>Le radiant et la géométrie</h4>
<p>Le radiant indique la direction de la vitesse de la Terre par rapport au courant ; sa position dans le ciel et la vitesse d'entrée découlent de la soustraction vectorielle de la vitesse orbitale terrestre à celle des météoroïdes. Les comptages observés dépendent fortement de la hauteur du radiant, d'où la correction au <strong>taux horaire zénithal</strong> - le comptage pour un radiant au zénith sous une magnitude limite de 6,5.</p>
<h4><span class="hn">03</span>Physique de l'ablation</h4>
<p>Un météoroïde entrant à des dizaines de km/s subit l'<em>ablation</em> : les chocs avec les molécules d'air le chauffent au-delà de la vaporisation, et la traînée visible est de l'air et des atomes métalliques excités et ionisés, pas une flamme. La luminosité croît fortement avec la masse et à peu près comme le cube de la vitesse, si bien que les pluies les plus rapides lancent des météores éblouissants à partir de grains étonnamment petits.</p>
<h4><span class="hn">04</span>De la poussière à la météorite</h4>
<p>Seuls des corps plus gros, plus lents et structurellement résistants survivent à l'ablation et atterrissent en météorites ; les météoroïdes des pluies sont bien trop petits et fragiles et n'atteignent jamais le sol. En fait, l'essentiel de la masse que la Terre ramasse - quelque 40 000 tonnes par an - arrive sous forme de poussière sporadique (hors pluie) plutôt que dans les pluies que nous guettons.</p>
<h4><span class="hn">05</span>Prévision et danger</h4>
<p>Les modèles modernes suivent chaque filament de poussière pour prévoir les sursauts à l'heure près - précieux car même un météoroïde de la taille d'un grain de sable est dangereux pour un engin spatial à vitesse orbitale. La comète mère des Perséides, la 109P/Swift-Tuttle, est un noyau de 26 km sur une orbite de 133 ans - le plus grand objet connu à faire des passages rapprochés répétés près de la Terre.</p>`,
          facts: [
            { e: '☄️', t: `La comète mère des Perséides, Swift-Tuttle (26 km), est le plus grand objet qui passe régulièrement près de la Terre - vue pour la dernière fois en 1992, de retour en 2126.` },
            { e: '🌍', t: `La Terre ramasse ~40 000 tonnes de matière météoritique par an, mais presque tout est de la poussière sporadique, pas des météores de pluie.` },
            { e: '⚡', t: `La luminosité croît à peu près comme le cube de la vitesse, si bien que les rapides Léonides (71 km/s) flamboient en bolides à partir de grains minuscules.` },
          ],
          formula: { tex: 1, rows: [
            { n: 'Énergie cinétique', e: 'E = \\tfrac{1}{2}mv^2', c: 'pourquoi les météores rapides brillent' },
            { n: 'Taux horaire zénithal', e: '\\text{ZHR} \\propto \\dfrac{N}{\\sin h_R}', c: 'corrigé au zénith' },
            { sep: 1 },
            { n: 'Comète mère des Perséides', e: '\\text{109P/Swift-Tuttle}', c: 'orbite de 133 ans' },
          ] }, sim: 'meteors',
        },
      },
    },
    photosynthesis: {
      title: 'Photosynthèse',
      teaser: 'Les plantes mangent la lumière du soleil - elles transforment air, eau et lumière en nourriture et en l\'oxygène de ta prochaine respiration.',
      chips: ['Chlorophylle', 'Lumière', 'Carbone'],
      lvls: {
        junior: {
          title: 'Comment les plantes mangent la lumière du soleil',
          body: `<p>Les plantes réussissent une chose qu'aucun animal ne sait faire : elles fabriquent leur propre nourriture à partir d'air et de lumière. Oriente une feuille vers le Soleil et, à l'intérieur, une chimie extraordinaire tourne toute la journée. La feuille absorbe le dioxyde de carbone de l'air et l'eau des racines, capte la lumière avec un pigment vert appelé <strong>chlorophylle</strong>, et reconstruit ces ingrédients simples en sucre - sa nourriture - en libérant de l'oxygène comme déchet. Ce déchet, c'est justement l'air que tu respires.</p>
<p>Le vert de presque toutes les plantes <em>est</em> la chlorophylle, la molécule qui capte la lumière. Elle absorbe les parties rouge et bleue de la lumière du soleil et renvoie le vert vers tes yeux - c'est exactement pour cela que les feuilles paraissent vertes. L'énergie qu'elle saisit alimente toute la reconstruction, transformant des ingrédients pauvres en énergie (dioxyde de carbone et eau) en un sucre riche en énergie que la plante peut brûler plus tard ou utiliser pour bâtir racines, tiges et fruits.</p>
<p>Cette seule réaction fait tourner en silence tout le monde vivant. Presque toute la nourriture sur Terre y remonte : l'herbe que mange une vache, le blé de ton pain, le plancton qui nourrit les océans. Et presque tout l'oxygène de l'atmosphère a été expiré par des plantes et des algues faisant la photosynthèse depuis des milliards d'années. Chaque respiration que tu prends est, très concrètement, empruntée à une feuille.</p>`,
          facts: [
            { e: '🌍', t: 'Presque tout l\'oxygène de l\'air a été produit par la photosynthèse. Pour ta prochaine respiration, remercie une plante - ou un peu d\'algues océaniques.' },
            { e: '🌿', t: 'Les feuilles paraissent vertes parce que la chlorophylle absorbe la lumière rouge et bleue pour l\'énergie et réfléchit le vert, qu\'elle ne peut pas utiliser.' },
            { e: '🌊', t: 'La plus grande partie de la photosynthèse se fait en mer : le phytoplancton microscopique produit environ la moitié de l\'oxygène du monde.' },
          ],
          formula: null, sim: 'photosynthesis',
        },
        student: {
          title: 'Les réactions à la lumière et à l\'obscurité, et les facteurs limitants',
          body: `<p>L'équation globale a l'air trompeusement simple : \\(6CO_2 + 6H_2O \\xrightarrow{\\text{lumière}} C_6H_{12}O_6 + 6O_2\\) - six dioxydes de carbone et six eaux deviennent un glucose et six oxygènes, alimentés par la lumière. Mais elle cache deux étapes liées, toutes deux dans le chloroplaste.</p>
<p>D'abord, les <strong>réactions dépendantes de la lumière</strong> dans les membranes des thylakoïdes : la chlorophylle absorbe des photons, qui excitent des électrons et scindent l'eau - d'où vient l'\\(O_2\\) - en stockant l'énergie sous forme d'ATP et de NADPH. Ensuite, le <strong>cycle de Calvin indépendant de la lumière</strong> dans le stroma dépense cet ATP et ce NADPH pour fixer le \\(CO_2\\) en sucre, cousant le carbone de l'air sur une molécule existante grâce à l'enzyme rubisco, la protéine la plus abondante sur Terre.</p>
<p>La vitesse globale est fixée par ce qui manque le plus - un <strong>facteur limitant</strong>. En faible lumière, ajouter de la lumière accélère tout ; en forte lumière la vitesse plafonne et autre chose devient le goulot d'étranglement (la concentration de CO₂ ou la température). Les cultivateurs l'exploitent avec précision : on injecte du CO₂ en plus dans une serre et, tant que lumière et chaleur le permettent, les plantes poussent plus vite. Pousse un seul facteur et la vitesse ne monte que jusqu'à ce que le suivant s'épuise.</p>`,
          facts: [
            { e: '🏭', t: 'Les serres commerciales injectent du CO₂ en plus (jusqu\'à ~1000 ppm) pour stimuler la croissance - preuve directe que le CO₂ est souvent le facteur limitant en forte lumière.' },
            { e: '🧬', t: 'Le rubisco, l\'enzyme qui saisit le CO₂, est la protéine la plus abondante sur Terre - et étonnamment lent, il ne fixe que quelques molécules par seconde.' },
            { e: '☀️', t: 'Photosynthèse et respiration sont presque des images miroir : l\'une stocke l\'énergie solaire dans le sucre, l\'autre la dépense. Les plantes font les deux.' },
          ],
          formula: { tex: 1, rows: [
            { n: 'Réaction globale', e: '6CO_2 + 6H_2O \\xrightarrow{\\text{lumière}} C_6H_{12}O_6 + 6O_2' },
            { sep: 1 },
            { n: 'Réactions à la lumière', e: '2H_2O \\to O_2 + 4H^+ + 4e^-', c: 'dans le thylakoïde ; produit ATP, NADPH' },
            { n: 'Cycle de Calvin', e: 'CO_2 + \\text{ATP} + \\text{NADPH} \\to \\text{sucre}', c: 'dans le stroma' },
            { n: 'Facteur limitant', e: '\\text{vitesse} = \\min(\\text{lumière},\\ CO_2,\\ \\text{temp})' },
          ] }, sim: 'photosynthesis',
        },
        scholar: {
          title: 'Des photons au sucre : la machinerie et ses limites',
          body: `<h4><span class="hn">01</span>Deux photosystèmes et le schéma en Z</h4>
<p>La lumière frappe en série le Photosystème II et le Photosystème I. Le PSII (son centre réactionnel, P680) devient un oxydant assez fort pour scinder l'eau, \\(2H_2O \\to O_2 + 4H^+ + 4e^-\\) ; les électrons descendent une chaîne de transport - le "schéma en Z" - en pompant des protons, puis sont ré-énergisés au PSI (P700) pour réduire le NADP⁺ en NADPH. L'eau est la source d'électrons et l'\\(O_2\\) son sous-produit.</p>
<h4><span class="hn">02</span>La chimiosmose fabrique l'ATP</h4>
<p>Le gradient de protons établi à travers la membrane du thylakoïde entraîne l'ATP synthase, exactement comme dans les mitochondries de la respiration - la même enzyme rotative, la même astuce, sur un type de membrane opposé. Ici c'est la lumière qui charge le gradient ; dans la respiration, c'est l'oxydation des aliments.</p>
<h4><span class="hn">03</span>Le cycle de Calvin et le défaut du rubisco</h4>
<p>Dans le stroma, le rubisco fixe le \\(CO_2\\) sur le ribulose-1,5-bisphosphate ; trois tours produisent un G3P et six tours (18 ATP, 12 NADPH) donnent un glucose. Mais le rubisco est imprécis : il saisit aussi l'\\(O_2\\), déclenchant la <em>photorespiration</em>, un gaspillage. Cette ambiguïté coûteuse - un vestige d'une évolution quand l'air était presque sans oxygène - plafonne l'efficacité de la plupart des plantes.</p>
<h4><span class="hn">04</span>C4 et CAM : contourner le défaut par l'ingénierie</h4>
<p>Les climats chauds et secs aggravent la photorespiration ; certaines plantes concentrent donc le \\(CO_2\\) autour du rubisco pour la supprimer. Les plantes C4 (maïs, canne à sucre) séparent la capture et la fixation du carbone dans des cellules différentes ; les plantes CAM (cactus, ananas) les séparent dans le temps, n'ouvrant leurs stomates que la nuit. Ce sont des solutions évolutives indépendantes au même problème.</p>
<h4><span class="hn">05</span>Efficacité et bilan planétaire</h4>
<p>La photosynthèse ne convertit qu'environ 1-2 % de la lumière qui atteint une feuille en biomasse, et pourtant à l'échelle planétaire elle fixe environ 120 gigatonnes de carbone par an et, en milliards d'années, a rempli le ciel d'oxygène - la Grande Oxydation d'il y a ~2,4 milliards d'années. Elle reste la source d'énergie ultime de presque toute la vie sur Terre.</p>`,
          facts: [
            { e: '🌬️', t: 'La Grande Oxydation (~2,4 milliards d\'années), quand les microbes photosynthétiques ont inondé l\'air d\'oxygène, fut l\'un des plus grands changements que la Terre ait connus.' },
            { e: '🌽', t: 'Les plantes C4 comme le maïs et la canne à sucre concentrent le CO₂ pour battre la photorespiration, d\'où leur succès dans les climats chauds et lumineux.' },
            { e: '⚡', t: 'La photosynthèse n\'est efficace qu\'à 1-2 % pour capter la lumière, et pourtant elle fixe environ 120 milliards de tonnes de carbone chaque année.' },
          ],
          formula: { tex: 1, rows: [
            { n: 'Réaction globale', e: '6CO_2 + 6H_2O \\to C_6H_{12}O_6 + 6O_2' },
            { n: 'Scission de l\'eau (PSII)', e: '2H_2O \\to O_2 + 4H^+ + 4e^-' },
            { sep: 1 },
            { n: 'Coût du cycle de Calvin', e: '6\\,CO_2 + 18\\,\\text{ATP} + 12\\,\\text{NADPH} \\to C_6H_{12}O_6' },
            { n: 'Efficacité', e: '\\eta \\approx 1\\text{-}2\\%', c: 'de la lumière à la biomasse' },
          ] }, sim: 'photosynthesis',
        },
      },
    },
  },
  guide: {
    seriesparallel: {
      junior: {
        legend: `À gauche il y a la <b>batterie</b> ; les deux cercles lumineux sont des <b>ampoules</b>. Les points jaunes sont le <b>courant électrique</b> qui coule dans les fils. Le bouton alterne le câblage entre <b>série</b> (une boucle) et <b>parallèle</b> (deux branches).`,
        try: `Pars en série et note la luminosité des ampoules. Appuie sur le bouton [[mode]] pour passer en parallèle. Les ampoules deviennent-elles plus lumineuses ou plus faibles ? Regarde [[cur]] changer aussi.`,
        notice: `<b>En parallèle les ampoules brillent ; en série elles sont faibles — même batterie, mêmes ampoules.</b> En série les deux ampoules se partagent la poussée d'une batterie, donc chacune n'en reçoit que la moitié. En parallèle chaque ampoule reçoit la poussée entière sur sa propre branche, donc elles brillent toutes deux et la batterie délivre bien plus de courant. C'est pourquoi ta maison est câblée en parallèle.`,
      },
      student: {
        legend: `Deux ampoules de \\(10\\,\\Omega\\) sur une batterie que tu règles avec [[volt]]. Le bouton [[mode]] alterne entre série (\\(R=R_1+R_2\\), courant partagé) et parallèle (\\(1/R=1/R_1+1/R_2\\), tension partagée). Les pastilles lisent résistance totale, courant total et puissance par ampoule.`,
        try: `Fixe [[volt]] et lis [[rtot]] et [[cur]] en série, puis passe en parallèle. De quel facteur [[cur]] saute-t-il, et comment [[bulb]] se compare-t-il ?`,
        notice: `<b>La série donne \\(20\\,\\Omega\\) ; le parallèle donne \\(5\\,\\Omega\\) — quatre fois le courant, et quatre fois la puissance par ampoule.</b> Les résistances s'additionnent en série mais se combinent en inverse en parallèle, descendant toujours sous la branche la plus petite. Comme \\(P=I^2R\\), les ampoules en parallèle dissipent \\(4\\times\\) la puissance et brillent bien plus — le gain visible du choix de câblage.`,
      },
      scholar: {
        legend: `Un réseau à deux résistances alterné entre série et parallèle par [[mode]], alimenté à tension [[volt]]. Les réductions \\(R_s=R_1+R_2\\) et \\(R_p^{-1}=R_1^{-1}+R_2^{-1}\\) sont des cas particuliers des lois de Kirchhoff ; la source ici est traitée comme idéale (aucune résistance interne).`,
        try: `Compare [[rtot]] et [[cur]] à travers l'alternance et confirme que le total en parallèle est sous les deux branches. Puis considère comment une résistance interne réelle \\(r\\) limiterait le courant en parallèle que le modèle laisse croître librement.`,
        notice: `<b>Série et parallèle ne sont que les lois des courants et des tensions de Kirchhoff appliquées à une boucle ou à un nœud.</b> Tout réseau de résistances se réduit ainsi — sauf les topologies en pont, qui exigent l'analyse complète aux nœuds/mailles. Cette source idéalisée n'a aucune résistance interne, donc le courant en parallèle monte sans limite ; une batterie réelle céderait comme \\(V=\\varepsilon-Ir\\), l'effet qui affaiblit les phares quand le démarreur tire des centaines d'ampères.`,
      },
    },
    respiration: {
      junior: {
        legend: `La grande forme est une <b>mitochondrie</b>, la centrale électrique de ta cellule. Le <b>glucose</b> rouge (sucre) entre à gauche et l'<b>oxygène</b> bleu par le haut ; sortent des jetons d'énergie <b>ATP</b> dorés et du <b>CO₂</b> gris. Fais glisser [[o2]] pour changer la quantité d'oxygène disponible.`,
        try: `Monte [[o2]] en haut et regarde l'ATP jaillir. Maintenant baisse-le complètement. Qu'arrive-t-il à [[atp]] et à la [[mode]] quand l'oxygène s'épuise ?`,
        notice: `<b>Avec beaucoup d'oxygène la cellule fait environ 15 fois plus d'énergie que sans.</b> L'oxygène permet à la mitochondrie de finir de brûler le sucre jusqu'au bout, libérant beaucoup d'ATP et expirant du CO₂. Prive-la d'oxygène et la cellule se rabat sur un remède rapide et faible qui fait à peine de l'ATP — le mode « anaérobie » que tes muscles atteignent dans un sprint intense.`,
      },
      student: {
        legend: `Une mitochondrie qui fait tourner \\(C_6H_{12}O_6 + 6O_2 \\to 6CO_2 + 6H_2O + \\text{ATP}\\). Glucose et O₂ (réglés par [[o2]]) entrent ; ATP et CO₂ sortent. Les pastilles lisent l'ATP par glucose, le CO₂ par glucose et si la voie est aérobie ou anaérobie.`,
        try: `Monte [[o2]] au maximum et lis [[atp]] et [[co2]] ; puis baisse-le près de zéro et regarde [[mode]] passer en anaérobie. Note comment le rendement d'ATP s'effondre.`,
        notice: `<b>La respiration aérobie rend ~30–32 ATP par glucose ; la fermentation anaérobie n'en récupère qu'à peine 2.</b> La glycolyse (2 ATP) n'a pas besoin d'oxygène, mais le grand gain vient du cycle de Krebs et de la chaîne de transport d'électrons, qui ont besoin d'O₂ comme accepteur final d'électrons. Retire-le et seule la glycolyse tourne — une perte de ~15 fois, et le pourquoi l'oxygène fut la clé de la vie complexe affamée d'énergie.`,
      },
      scholar: {
        legend: `Métabolisme oxydatif schématique : le flux de substrat (glucose) et la disponibilité d'O₂ ([[o2]]) fixent le rendement d'ATP et l'émission de CO₂. L'opération aérobie tient lieu de toute la chaîne — glycolyse, cycle de Krebs et la chaîne de transport d'électrons qui pompe des protons — condensée en entrées et sorties.`,
        try: `Balaie [[o2]] et note la chute brusque de [[atp]] quand la voie traverse en territoire anaérobie — un substitut du calage de la chaîne de transport d'électrons quand son accepteur terminal a disparu.`,
        notice: `<b>L'avantage aérobie de ~15× remonte à la chimiosmose : la chaîne pompe des protons pour bâtir un gradient, et l'ATP synthase l'encaisse.</b> Le rôle de l'oxygène n'est que celui d'accepteur final d'électrons, pourtant sans lui les transporteurs restent réduits, le pompage de protons s'arrête et la phosphorylation oxydative se bloque en quelques secondes. La force protonmotrice \\(\\Delta p\\) est le vrai dépôt d'énergie ; l'ATP synthase est un moteur rotatif qui tourne sur ce courant de protons.`,
      },
    },
    watercycle: {
      junior: {
        legend: `Le bleu en bas est l'<b>océan</b>, la boule jaune est le <b>Soleil</b>. L'eau chaude monte en gouttelettes (<b>évaporation</b>), se rassemble en un <b>nuage</b> en haut, et quand le nuage se remplit il <b>pleut</b> de nouveau vers la mer. Encore et encore.`,
        try: `Baisse [[temp]] au minimum et regarde à quelle vitesse le nuage se remplit. Maintenant monte-le au maximum. Le nuage se remplit-il et pleut-il plus tôt ?`,
        notice: `<b>Plus de Soleil signifie une évaporation plus rapide, donc le nuage se remplit et pleut plus tôt — tout le cycle accélère.</b> Le Soleil est le moteur du cycle de l'eau : sa chaleur soulève l'eau dans le ciel, et la gravité la ramène en bas sous forme de pluie. On ne fabrique jamais d'eau nouvelle — les mêmes gouttelettes tournent et retournent.`,
      },
      student: {
        legend: `Le Soleil pilote l'<b>évaporation</b> depuis l'océan ; la vapeur monte, se refroidit et <b>condense</b> dans le nuage ; une fois saturée elle tombe en <b>précipitation</b> et retourne à la mer. Les pastilles lisent le niveau d'évaporation, le remplissage du nuage et s'il pleut.`,
        try: `Mets [[temp]] bas et note le taux de remplissage de [[cloud]], puis mets-le haut. Regarde comment [[rain]] passe de « Building » à « Raining » plus vite avec plus de chaleur.`,
        notice: `<b>L'air plus chaud évapore l'eau plus vite et peut en contenir davantage — donc la chaleur accélère tout le cycle.</b> L'évaporation absorbe de la chaleur latente (2,26 MJ/kg) et la condensation la libère en altitude, déplaçant silencieusement d'énormes quantités d'énergie vers le haut. Globalement évaporation et précipitation doivent s'équilibrer, les rivières restituant le léger déficit de l'océan.`,
      },
      scholar: {
        legend: `Un modèle schématique à réservoirs et flux : le flux d'évaporation croît avec [[temp]], la vapeur condense au nuage, et la précipitation ferme la boucle. Le nuage est un tampon qui se vide au moment où sa capacité est atteinte.`,
        try: `Balaie [[temp]] et observe que le taux de remplissage du nuage et la fréquence de la pluie montent tous deux avec elle — un substitut de l'échelle de Clausius-Clapeyron de l'humidité avec la température.`,
        notice: `<b>La capacité de l'air à retenir l'eau monte exponentiellement avec la température (~7% par °C), et c'est pourquoi un climat plus chaud intensifie le cycle.</b> La chaleur latente fait de l'évaporation le principal oléoduc énergétique de l'atmosphère (elle alimente les ouragans), le temps de résidence \\(\\tau=V/F\\) fixe la vitesse de réponse de chaque réservoir, et le fractionnement isotopique à chaque changement d'état permet aux carottes de glace d'enregistrer les températures passées.`,
      },
    },
    energy: {
      junior: {
        legend: `La bille roule dans un <b>bol</b>. En haut sur le flanc elle a de l'<b>énergie de hauteur</b> stockée ; au fond elle est toute <b>énergie de mouvement</b>. Les deux barres à droite montrent chaque type — regarde-les s'échanger tandis que la bille roule.`,
        try: `Mets [[fric]] à 0 et laisse tomber la bille. Les barres continuent-elles de s'échanger pour toujours ? Maintenant ajoute un peu de [[fric]] et regarde ce qui arrive au <b>Total</b>.`,
        notice: `<b>Sans frottement le total ne change jamais — énergie de hauteur et énergie de mouvement s'échangent d'avant en arrière pour toujours.</b> C'est la conservation de l'énergie. Ajoute du frottement et un peu d'énergie s'échappe en chaleur à chaque oscillation, donc la bille remonte un peu moins haut à chaque fois jusqu'à s'arrêter. L'énergie n'est pas détruite — elle est devenue tiédeur.`,
      },
      student: {
        legend: `Une bille dans un bol parabolique. Énergie potentielle \\(PE=mgh\\) (barre bleue) et énergie cinétique \\(KE=\\tfrac{1}{2}mv^2\\) (barre rouge) s'échangent tandis qu'elle se déplace ; la pastille « Total » est leur somme. [[fric]] retire de l'énergie mécanique sous forme de chaleur.`,
        try: `Avec [[fric]] = 0, vérifie que \\(KE+PE\\) (le Total) reste constant tandis que KE et PE oscillent. Puis monte [[fric]] et regarde le Total décroître.`,
        notice: `<b>À frottement nul \\(\\tfrac{1}{2}mv^2 + mgh\\) est constant — chaque joule de hauteur devient un joule de mouvement et vice versa.</b> Cela donne la vitesse d'impact \\(v=\\sqrt{2gh}\\), indépendante de la masse. Le frottement fait un travail négatif, convertissant l'énergie mécanique en chaleur, donc le Total baisse et la bille se stabilise — énergie quand même conservée, seulement déplacée vers le registre thermique.`,
      },
      scholar: {
        legend: `Cuvette parabolique, donc le mouvement est harmonique simple et \\(E=KE+PE\\propto A^2\\) avec amplitude \\(A\\). [[drop]] fixe \\(A\\) ; [[fric]] applique une décroissance exponentielle de l'amplitude. Les barres montrent \\(KE\\) (rouge) et \\(PE\\) (bleu), la pastille leur somme.`,
        try: `Mets [[fric]]=0 et confirme que le Total est invariant tandis que \\(KE\\) et \\(PE\\) s'échangent. Puis ajoute du frottement et note la décroissance quasi-exponentielle du Total — la signature d'une force non conservative.`,
        notice: `<b>La conservation découle du théorème de l'énergie-travail plus une force conservative \\(\\vec F=-\\nabla U\\) ; le frottement ne passe pas ce test et dissipe.</b> Plus profondément, le théorème de Noether lie la conservation de l'énergie à la symétrie par translation temporelle. Élargis les comptes avec \\(\\Delta U=Q-W\\) et même l'énergie « perdue » est comptabilisée — conservée dans l'ensemble, mais dégradée vers le désordre.`,
      },
    },
    gaslaws: {
      junior: {
        legend: `Les points qui rebondissent dans la boîte sont des <b>particules de gaz</b>. La paroi droite est un <b>piston</b> que tu peux faire glisser pour changer la taille du contenant. Chaque fois qu'un point frappe une paroi il pousse — et toutes ces poussées ensemble sont la <b>pression</b> montrée dans la pastille.`,
        try: `Garde [[temp]] égale et fais glisser [[vol]] pour rapetisser la boîte. Regarde [[pres]]. Puis refais la boîte grande et monte plutôt [[temp]].`,
        notice: `<b>Comprime la boîte et la pression monte ; chauffe le gaz et elle monte aussi.</b> Moins d'espace signifie que les mêmes particules frappent les parois plus souvent ; une température plus haute signifie qu'elles volent plus vite et frappent plus fort. Note que « Pression × taille » reste à peu près constant quand tu ne changes que la taille — c'est la loi de Boyle.`,
      },
      student: {
        legend: `Particules en mouvement élastique aléatoire ; leur vitesse croît comme \\(\\sqrt{T}\\) et le piston droit fixe le volume \\(V\\). Les pastilles lisent la pression \\(P\\) et le produit \\(P\\times V\\). Le gaz obéit à \\(PV = nRT\\).`,
        try: `Garde [[temp]] fixe et divise [[vol]] par deux — [[pres]] double-t-il tandis que \\(P\\times V\\) reste immobile ? Puis garde [[vol]] et monte [[temp]], en regardant \\(P\\) monter de pair.`,
        notice: `<b>À \\(T\\) fixe, \\(P\\times V\\) est constant (Boyle) ; à \\(V\\) fixe, \\(P\\propto T\\) (Gay-Lussac).</b> Toutes deux sont des faces de \\(PV=nRT\\). La simulation calcule \\(P = nRT/V\\) directement, et les vitesses des particules suivent \\(\\sqrt{T}\\) — une visualisation de la théorie cinétique où la température <em>est</em> l'énergie cinétique moyenne.`,
      },
      scholar: {
        legend: `Un gaz idéal : \\(P = nRT/V\\), vitesse des particules \\(\\propto\\sqrt{T}\\) comme dans l'image de Maxwell-Boltzmann. Le piston fixe \\(V\\) ; les pastilles lisent \\(P\\) et \\(PV\\). Les déviations des gaz réels exigeraient la correction de van der Waals.`,
        try: `Trace une isotherme : fixe [[temp]] et échantillonne des couples \\((P,V)\\) sur tout l'intervalle, en vérifiant si \\(PV\\) reste constant. Puis trace une isochore : fixe [[vol]] et varie [[temp]].`,
        notice: `<b>L'isotherme donne \\(PV=\\text{cste}\\) ; l'isochore donne \\(P\\propto T\\) — la loi des gaz idéaux disséquée.</b> Cette idéalisation suppose des particules ponctuelles sans attractions. Les gaz réels dévient à mesure que la densité croît : la taille finie (le terme \\(b\\)) et l'attraction intermoléculaire (le terme \\(a\\)) courbent les isothermes et, sous un point critique, permettent la condensation que la loi idéale ne peut jamais montrer.`,
      },
    },
    moonphases: {
      junior: {
        legend: `Le disque lumineux à gauche est le <b>Soleil</b>, qui éclaire tout de ce côté. La boule bleue est la <b>Terre</b>, et la boule grise qui tourne autour d'elle est la <b>Lune</b> — toujours éclairée à moitié du côté du Soleil. Le petit disque à droite montre la <b>phase que tu verrais depuis la Terre</b>.`,
        try: `Fais glisser [[day]] lentement sur tout le mois. Regarde le disque « depuis la Terre » à droite, et lis [[phase]] et [[lit]].`,
        notice: `<b>La forme de la Lune ne change pas — tu vois seulement sa moitié éclairée sous différents angles.</b> Quand la Lune est entre la Terre et le Soleil son côté sombre est tourné vers nous (nouvelle lune) ; quand elle est du côté opposé nous voyons toute la face éclairée (pleine lune). Un tour complet dure environ 29,5 jours.`,
      },
      student: {
        legend: `Vue de dessus : direction éclairée par le Soleil depuis la gauche, Terre au centre, Lune sur son orbite. La moitié tournée vers le Soleil est toujours éclairée ; le disque inséré reconstruit la vue depuis la Terre. Les pastilles lisent le nom de la phase et la fraction éclairée \\(k=\\tfrac{1}{2}(1-\\cos\\theta)\\).`,
        try: `Porte [[day]] à 0, ~7, ~15 et ~22 et nomme chaque [[phase]]. Regarde comment [[lit]] suit l'angle de phase au lieu de sauter.`,
        notice: `<b>L'éclairement varie avec continuité comme \\(k=\\tfrac{1}{2}(1-\\cos\\theta)\\) : 0% nouvelle, 50% aux quartiers, 100% pleine.</b> La phase que nous suivons se répète chaque mois synodique (29,5 j), plus long que l'orbite de 27,3 jours parce qu'entretemps la Terre se déplace autour du Soleil. Et comme l'orbite est inclinée d'environ 5°, la plupart des mois la Lune manque la ligne Soleil-Terre, donc les éclipses sont rares.`,
      },
      scholar: {
        legend: `Direction du Soleil fixe à gauche ; Terre au centre ; Lune sur orbite circulaire avec l'hémisphère solaire éclairé. Insert = aspect géocentrique. Fraction éclairée \\(k=\\tfrac{1}{2}(1-\\cos\\theta)\\) avec \\(\\theta\\) l'angle de phase Soleil-Terre-Lune.`,
        try: `Balaie [[day]] et confirme la séquence des phases et la symétrie entre croissant et décroissant. Note que le modèle ne montre que la phase géométrique — non la poussée de luminosité en opposition ni la libration.`,
        notice: `<b>La géométrie est exacte, mais la luminosité lunaire réelle n'est pas linéaire en \\(k\\).</b> L'albédo de la Lune est ~0,12 et près de la pleine il augmente plus que la seule aire ne le prédit (l'effet d'opposition). Superpose la précession des nœuds de 18,6 ans et l'excentricité de l'orbite (libration) et tu as tout l'appareil derrière la prévision des éclipses et le cycle de Saros.`,
      },
    },
    protein: {
      junior: {
        legend: `La ligne de lettres est l'<b>ARNm</b> — la recette. La forme arrondie qui coule le long est le <b>ribosome</b>, qui lit trois lettres (un <b>codon</b>) à la fois. Chaque codon ajoute une perle colorée — un <b>acide aminé</b> — à la chaîne croissante en dessous. Cette chaîne est la protéine.`,
        try: `Appuie sur [[play]] et regarde le ribosome se déplacer. Lis chaque codon de trois lettres et la perle qu'il ajoute. Quel codon spécial le fait s'arrêter ?`,
        notice: `<b>Trois lettres nomment une perle, et la chaîne croît d'une perle par codon jusqu'à ce qu'un codon STOP la termine.</b> Seulement quatre lettres, lues trois par trois, épellent chaque protéine que ton corps construit — le même code simple dans chaque être vivant sur Terre.`,
      },
      student: {
        legend: `L'ARNm est lu 5'→3' en <em>codons</em> non chevauchants. Le ribosome (forme arrondie) traduit chaque codon en un acide aminé via un ARNt correspondant ; la chaîne en dessous est le polypeptide croissant. Les pastilles nomment le codon actuel → acide aminé et la longueur de la chaîne.`,
        try: `Appuie sur [[play]] et suis [[codon]] tandis que la traduction procède du départ AUG au codon d'arrêt. Compte comment [[len]] croît d'un résidu par codon.`,
        notice: `<b>Chaque codon correspond exactement à un acide aminé ; AUG commence, et UAA/UAG/UGA arrêtent.</b> Avec \\(4^3=64\\) codons pour 20 acides aminés le code est redondant, donc plusieurs codons partagent un acide aminé. C'est la traduction — la seconde moitié du dogme central, ADN → ARN → protéine.`,
      },
      scholar: {
        legend: `Traduction codon par codon d'un ARNm. Le décodage repose sur l'appariement codon-anticodon, avec le <em>flottement</em> (wobble) de la troisième base qui permet à un ARNt de lire des codons synonymes. Les pastilles montrent codon → acide aminé et la longueur de la chaîne ; l'élongation procède jusqu'à ce qu'un facteur de libération lise un codon d'arrêt.`,
        try: `Fais tourner [[play]] et note où des codons synonymes donneraient le même acide aminé, et comment le cadre de lecture est fixé par le départ AUG — un décalage d'une base brouillerait tout en aval.`,
        notice: `<b>Le cadre fixé à AUG est tout : la traduction est strictement à triplets et non chevauchante, donc une insertion ou délétion cause un décalage de cadre.</b> La fidélité (~1 erreur sur 10⁴) vient du proofreading cinétique, et la liaison peptidique est forgée par l'ARN ribosomal — le ribosome est un ribozyme, une relique du monde à ARN.`,
      },
    },
    pendulum: {
      junior: {
        legend: `Le point suspendu au fil est le <b>pendule</b>. Il oscille d'un côté à l'autre, et l'arc pâle montre le chemin qu'il balaie. La pastille compte le <b>temps d'une oscillation complète</b> — aller et retour.`,
        try: `Mets [[amp]] large et lis [[per]]. Maintenant fais glisser [[amp]] bien plus petite. Le temps par oscillation change-t-il beaucoup ? Puis double [[len]] et regarde [[per]].`,
        notice: `<b>Changer l'amplitude du balancement ne change presque pas le temps — mais allonger le fil le ralentit clairement.</b> C'est le secret du pendule : le rythme est fixé presque uniquement par la <em>longueur</em>, non par l'amplitude de l'oscillation ni par le poids du lest. Fil plus long, oscillation plus lente.`,
      },
      student: {
        legend: `Pendule de longueur \\(L\\) oscillant avec amplitude \\(\\theta_0\\). L'arc est son chemin ; les pastilles lisent la période \\(T\\) et la fréquence \\(f\\). Le mouvement est (quasi-)harmonique simple, \\(\\theta(t)=\\theta_0\\cos(\\omega t)\\).`,
        try: `Garde [[amp]] petite et quadruple [[len]] de 0,5 à 2,0 — [[per]] double-t-il exactement ? Puis garde [[len]] et pousse [[amp]] jusqu'à 70°, en regardant [[per]] monter.`,
        notice: `<b>Quadrupler \\(L\\) double \\(T\\), parce que \\(T = 2\\pi\\sqrt{L/g}\\) — la racine carrée.</b> Masse et amplitude sont absentes de cette formule, et c'est pourquoi les petites oscillations sont isochrones. Pousse cependant l'amplitude au grand et l'approximation des petits angles s'effiloche : \\(T\\) croît d'environ \\(\\theta_0^2/16\\), la correction que tu peux voir apparaître.`,
      },
      scholar: {
        legend: `Longueur \\(L\\), amplitude \\(\\theta_0\\). Le lest obéit à \\(\\ddot\\theta + (g/L)\\sin\\theta = 0\\) ; la simulation utilise la période corrigée pour l'amplitude \\(T = T_0(1+\\theta_0^2/16)\\) avec \\(T_0 = 2\\pi\\sqrt{L/g}\\). Les pastilles lisent \\(T\\) et \\(f = 1/T\\).`,
        try: `Enregistre [[per]] contre [[len]] à [[amp]] petite fixe et contrôle la pente de \\(\\log T\\) contre \\(\\log L\\). Puis fixe [[len]] et balaie [[amp]] de 10° à 80°, en suivant de combien \\(T\\) s'écarte de \\(T_0\\).`,
        notice: `<b>La pente log-log est \\(1/2\\) (donc \\(T\\propto\\sqrt L\\)), et \\(T\\) monte au-dessus de \\(T_0\\) à mesure que l'amplitude croît.</b> La période exacte est l'intégrale elliptique \\(T = 4\\sqrt{L/g}\\,K(\\sin\\tfrac{\\theta_0}{2})\\) ; le premier terme de son développement, \\(\\theta_0^2/16\\), est ce que la simulation applique — 1,7% à 30°, ~18% à 90°. L'isochronisme est rigoureusement une limite de petit angle.`,
      },
    },
    optics: {
      junior: {
        legend: `La flèche bleue à gauche est l'<b>objet</b>. La forme haute au centre est une <b>lentille</b>. Les lignes colorées sont des <b>rayons de lumière</b> qui sortent du sommet de l'objet ; là où ils se croisent de nouveau à droite, la lentille reconstruit l'image — c'est l'<b>image</b> (dessinée en orange).`,
        try: `Fais glisser [[obj]] pour que l'objet soit loin de la lentille et regarde l'image orange. Maintenant fais-le glisser lentement plus près. Qu'arrive-t-il à l'image à l'instant où l'objet s'approche beaucoup de la lentille ?`,
        notice: `<b>Loin, l'image est petite et renversée ; de près, elle se redresse et devient énorme.</b> Ce passage est exactement la différence entre un appareil photo (objet lointain, image petite et retournée) et une loupe (objet proche, image grande et droite). La lentille fait les deux — cela ne dépend que de la distance à laquelle tu la tiens.`,
      },
      student: {
        legend: `Flèche bleue = objet à distance \\(d_o\\). Lentille verticale avec les foyers marqués à \\(\\pm f\\). Trois rayons principaux partent de la pointe de l'objet : parallèle-puis-par-le-foyer, droit-par-le-centre, et par-le-foyer-proche-puis-parallèle. Ils se rencontrent à l'image, distance \\(d_i\\) ; les pastilles lisent \\(d_i\\), \\(m\\) et si l'image est réelle ou virtuelle.`,
        try: `Mets [[foc]] à environ 60 et balaie [[obj]] de 300 jusqu'à 40. Regarde [[img]] et [[mag]] tandis que l'objet traverse \\(d_o = f\\).`,
        notice: `<b>Quand \\(d_o \\to f\\), l'image gicle à l'infini et \\(m\\) explose.</b> L'équation des lentilles minces \\(1/f = 1/d_o + 1/d_i\\) fait diverger \\(d_i\\) quand \\(d_o = f\\), donc les rayons quittent la lentille parallèles et ne forment aucune image finie. Traverse à l'intérieur de \\(f\\) et \\(d_i\\) devient négatif : l'image devient <em>virtuelle</em>, droite et agrandie — le régime de la loupe.`,
      },
      scholar: {
        legend: `Objet à \\(d_o\\) ; lentille convergente mince de distance focale \\(f\\) avec foyers à \\(\\pm f\\). Les trois rayons principaux construisent l'image à \\(d_i\\) donnée par \\(1/f = 1/d_o + 1/d_i\\), avec grandissement transversal \\(m = -d_i/d_o\\). Les images réelles (\\(d_i>0\\)) apparaissent à droite de la lentille ; les virtuelles (\\(d_i<0\\)) à gauche, en pointillés.`,
        try: `Fixe [[foc]] et enregistre des couples \\((d_o, d_i)\\) sur tout l'intervalle, puis vérifie si \\(1/d_o + 1/d_i\\) reste constant. Note le signe de [[mag]] quand [[obj]] passe par \\(f\\) et par \\(2f\\).`,
        notice: `<b>\\(1/d_o + 1/d_i = 1/f\\) vaut exactement, et \\(m = -d_i/d_o\\) suit la géométrie.</b> À \\(d_o = 2f\\), \\(m=-1\\) (même taille, renversée) ; pour \\(f<d_o<2f\\) l'image réelle est agrandie (projecteur) ; pour \\(d_o<f\\), \\(d_i<0\\) donne une image virtuelle droite. La simulation résout \\(d_i = d_o f/(d_o-f)\\) à chaque frame — le pôle à \\(d_o=f\\) est l'image divergente que tu viens de voir.`,
      },
    },
    cell: {
      junior: {
        legend: `Deux chambres d'eau reliées par une membrane au milieu. Le côté droit a du <b>sel</b> (points orange) qui ne peut pas traverser ; l'eau, si. Regarde dans quelle direction le niveau d'eau se déplace.`,
        try: `Ajoute du [[salt]] au côté droit et regarde l'eau. Dans quelle direction se déplace-t-elle — et continue-t-elle pour toujours ?`,
        notice: `<b>L'eau se déplace vers le côté salé.</b> Elle essaie de diluer le sel qu'elle ne peut atteindre, donc elle coule à travers la membrane jusqu'à ce que le niveau qui monte repousse assez fort pour l'arrêter. Ce point d'équilibre est l'osmose en action — aucun pompage, juste l'eau qui égalise les choses.`,
      },
      student: {
        legend: `Une membrane semi-perméable qui sépare l'eau pure (gauche) d'une solution (droite). Le soluté (orange) ne peut traverser ; l'eau, si. Les niveaux se déplacent jusqu'à ce que l'attraction osmotique équilibre la différence de pression qui s'accumule.`,
        try: `Monte [[salt]] et regarde [[right]] monter tandis que [[left]] descend, puis se stabiliser. Pousse [[salt]] encore plus haut — la différence de niveau finale croît-elle ?`,
        notice: `<b>L'eau coule vers la concentration de soluté la plus élevée et s'arrête quand la pression équilibre l'attraction osmotique.</b> Une charge de soluté plus grande pousse plus d'eau à travers et construit une différence de niveau plus grande — une image directe de la pression osmotique, \\(\\Pi = iMRT\\). La membrane ne laisse jamais le soluté s'égaliser, donc c'est l'eau qui fait l'équilibrage.`,
      },
      scholar: {
        legend: `Un modèle d'osmose à deux compartiments : le flux net d'eau est proportionnel à \\((\\Delta\\text{concentration}) - k(\\Delta\\text{niveau})\\), donc le système se relaxe vers un état stationnaire où le gradient osmotique est équilibré par une hauteur hydrostatique.`,
        try: `Varie [[salt]] et enregistre l'écart de niveau à l'équilibre ; vérifie qu'il croît avec la charge de soluté, reflétant \\(\\Pi = iMRT\\).`,
        notice: `<b>L'équilibre ici n'est pas une concentration égale — c'est un potentiel hydrique équilibré.</b> Comme le soluté est piégé d'un côté, l'eau se déplace jusqu'à ce que le terme de pression (la différence de niveau) compense le terme de soluté. C'est le potentiel hydrique \\(\\Psi = \\Psi_s + \\Psi_p\\) qui atteint l'égalité, et l'écart de niveau résiduel est la pression osmotique rendue visible.`,
      },
    },
    mitosis: {
      junior: {
        legend: `Une cellule qui se divise. Fais glisser le curseur pour te déplacer entre les phases, ou appuie sur Play. Les formes en X colorées sont les <b>chromosomes</b> — la cellule les copie, les aligne, et les sépare en deux nouvelles cellules.`,
        try: `Fais glisser [[stage]] lentement du début à la fin, en regardant les chromosomes s'aligner au centre puis se diviser vers les extrémités. Avec combien de cellules finis-tu ?`,
        notice: `<b>Une cellule devient deux, chacune avec un jeu complet et identique de chromosomes.</b> Les copies s'alignent le long du centre, sont tirées vers des extrémités opposées, et la cellule s'étrangle en son milieu. Passe à Méiose et le même début finit en <i>quatre</i> cellules avec la moitié des chromosomes à la place.`,
      },
      student: {
        legend: `Les phases de la division. Fais glisser [[stage]] pour défiler entre prophase, métaphase, anaphase et télophase ; [[phase]] nomme où tu es et [[cells]] compte les cellules. Le bouton mode alterne entre mitose et méiose.`,
        try: `Défile jusqu'à la métaphase et note les chromosomes alignés sur l'équateur, puis à l'anaphase pour regarder les sœurs se séparer. Puis passe à Méiose et laisse-la faire deux divisions.`,
        notice: `<b>La mitose finit en 2 cellules diploïdes identiques ; la méiose finit en 4 cellules haploïdes uniques.</b> Métaphase (alignement) et anaphase (séparation) sont le nœud. La méiose ajoute une seconde division et apparie d'abord les chromosomes homologues, ce qui divise par deux le nombre de chromosomes et remélange les gènes.`,
      },
      scholar: {
        legend: `Un schéma de la ségrégation chromosomique. [[stage]] défile la ligne temporelle, [[phase]] étiquette la phase et [[cells]] le compte des produits. Le mode Méiose montre la division réductionnelle (I) suivie de la division équationnelle (II).`,
        try: `Compare les deux modes à leurs points médians : dans la mitose les chromatides sœurs se séparent une fois ; dans la méiose I les homologues se séparent d'abord, et seulement dans la méiose II les sœurs se divisent.`,
        notice: `<b>La différence distinctive est la méiose I : ce sont les homologues qui se séparent, non les chromatides sœurs — et c'est ce qui divise par deux le nombre de chromosomes.</b> La séparation des sœurs (mitose, et méiose II) préserve la ploïdie ; la séparation des homologues la réduit. Le schéma omet le crossing over, l'autre grande source de variation, qui recombine les homologues avant qu'ils ne se séparent.`,
      },
    },
    punnett: {
      junior: {
        legend: `Deux parents, chacun avec deux copies du gène. La grille montre chaque combinaison que leur enfant pourrait hériter ; les cellules colorées montrent à quoi l'enfant ressemblerait.`,
        try: `Règle les deux parents à Aa (un dominant, un récessif) avec les boutons, puis regarde les quatre cellules. Combien montrent la couleur dominante, et combien la récessive ?`,
        notice: `<b>Aa × Aa donne un rapport 3 pour 1.</b> Trois des quatre enfants possibles montrent le trait dominant, un montre le récessif. Ce sont des probabilités, non une certitude — comme des tirages à pile ou face — mais sur beaucoup d'enfants le 3:1 tient.`,
      },
      student: {
        legend: `Un carré de Punnett : les deux allèles de chaque parent en-têtent lignes et colonnes, et chaque cellule est un génotype de descendance également probable, coloré par phénotype. [[pheno]] et [[geno]] donnent les rapports.`,
        try: `Compare Aa × Aa (deux hétérozygotes) à un test-cross, Aa × aa. En quoi les rapports [[pheno]] et [[geno]] diffèrent-ils ?`,
        notice: `<b>Aa × Aa → phénotype 3:1 mais génotype 1:2:1 ; Aa × aa → 1:1.</b> Chaque parent passe un allèle au hasard (ségrégation), donc les quatre cellules sont également probables. Le test-cross contre un récessif est exactement la façon de distinguer un AA d'un Aa.`,
      },
      scholar: {
        legend: `Un carré de Punnett monohybride, avec les rapports génotypiques et phénotypiques calculés à partir des quatre combinaisons gamétiques également probables.`,
        try: `Travaille à travers chaque croisement (AA, Aa, aa chez chaque parent) et prédis les rapports avant de les révéler ; note quels croisements ne peuvent jamais produire un enfant récessif.`,
        notice: `<b>La grille est la loi de ségrégation de Mendel rendue visuelle.</b> Elle suppose une dominance complète simple ; l'hérédité réelle ajoute dominance incomplète, codominance, allèles multiples, liaison et liaison au sexe — et se met à l'échelle de populations entières via Hardy-Weinberg, la ligne de base \\(p^2 + 2pq + q^2\\) pour détecter l'évolution.`,
      },
    },
    prob: {
      junior: {
        legend: `Les billes tombent d'en haut dans un triangle de <b>clous</b>. À chaque clou une bille rebondit à gauche ou à droite par pur hasard — comme lancer une pièce. Elles s'accumulent dans les <b>cases</b> en bas. La ligne blanche pointillée et les barres pâles derrière montrent la forme que la mathématique dit que tu devrais obtenir.`,
        try: `Appuie sur [[drop]] et arrête-toi après environ 20 billes. La forme est-elle nette ? Maintenant appuie sur [[reset]], laisse-en tomber plus de 200, et compare les barres à la ligne pointillée.`,
        notice: `<b>Avec 20 billes le tas paraît irrégulier ; avec 200 il croît toujours dans la même bosse au centre — la courbe en cloche.</b> Personne ne peut dire où atterrira une <i>seule</i> bille, car chacune est pure chance. Pourtant des centaines ensemble sont remarquablement prévisibles. Regarde [[mean]] errer au début, puis se stabiliser près du centre et y rester.`,
      },
      student: {
        legend: `Chaque clou est un embranchement équitable 50/50, donc la case finale d'une bille compte combien de fois il lui est arrivé d'aller à droite — une issue <b>binomiale</b>. Barres lumineuses = les comptes que tu as réellement obtenus, barres pâles et la courbe pointillée = la forme en cloche attendue. [[mean]] est l'indice moyen courant de la case.`,
        try: `Fais-en tomber plus de 300 avec [[rows]] à 7 et regarde où se stabilise [[mean]]. Puis mets [[rows]] à 10 et relance — où est la moyenne maintenant, et qu'arrive-t-il à la largeur du tas ?`,
        notice: `<b>La moyenne se stabilise à \\(n/2\\) — 3,5 pour 7 rangées, 5 pour 10 — et le tas s'élargit comme \\(\\sqrt{n}\\).</b> Avec \\(n\\) rangées le résultat est \\(\\text{Binomiale}(n, \\tfrac12)\\), dont l'écart-type est \\(\\sqrt{n}/2\\), donc la dispersion croît tandis que le pic s'affine par rapport au total. Rien ici n'a été conçu pour faire une cloche : elle tombe d'elle-même de tirages à pile ou face répétés.`,
      },
      scholar: {
        legend: `Le plateau réalise une somme de \\(n\\) variables i.i.d. \\(\\text{Bernoulli}(\\tfrac12)\\) ; l'indice de la case est le compte des embranchements à droite. Barres lumineuses = la distribution empirique, courbe pointillée = l'approximation normale \\(\\mathcal{N}(n/2,\\, n/4)\\) superposée par la simulation. [[mean]] est la moyenne d'échantillon courante.`,
        try: `Compare la dispersion empirique à [[rows]] = 4 et [[rows]] = 10 et vérifie si la largeur croît comme \\(\\sqrt{n}\\). Puis regarde comment [[mean]] se stabilise à mesure que les billes s'accumulent — sa fluctuation devrait décroître comme \\(1/\\sqrt{N}\\) dans le nombre \\(N\\) lâché.`,
        notice: `<b>La dispersion croît comme \\(\\sqrt{n}\\) et la moyenne d'échantillon converge comme \\(1/\\sqrt{N}\\).</b> C'est le <b>théorème de de Moivre–Laplace</b> en miniature : \\(\\text{Binomiale}(n,\\tfrac12) \\to \\mathcal{N}(n/2,\\, n/4)\\) à mesure que \\(n\\) croît — historiquement le premier cas particulier du théorème central limite. La partie remarquable est l'universalité : la limite est normale presque indépendamment de la forme de la distribution de l'embranchement elle-même, pourvu que sa variance soit finie. Voilà pourquoi la même courbe gouverne l'erreur de mesure, le bruit thermique et la diffusion pareillement.`,
      },
    },
    fractal: {
      junior: {
        legend: `Ceci est l'<b>ensemble de Mandelbrot</b>. Le centre sombre est l'ensemble lui-même ; les couleurs vives autour du bord montrent la vitesse à laquelle les points voisins s'échappent vers l'infini. Chaque clic te zoome 2,2× plus profond dans l'image.`,
        try: `Clique sur la partie la plus déchiquetée du bord. Puis clique de nouveau. Et encore — cinq ou six fois, en regardant [[zoom]] monter. Finis-tu jamais le détail ?`,
        notice: `<b>Non — le détail ne finit jamais. Zoome autant que tu veux et de nouvelles formes continuent de se déployer pour toujours.</b> Plus étrange encore, tu continues de rencontrer de minuscules copies de la forme entière enfouies au fond de son propre bord. Tout cela vient d'une règle absurdement courte, appliquée encore et encore : élève le nombre au carré, ajoute le point de départ, répète. Une complexité sans fin à partir de presque aucune instruction — c'est ça un <b>fractal</b>.`,
      },
      student: {
        legend: `Pour chaque pixel \\(c\\), la suite \\(z_{n+1} = z_n^2 + c\\) est itérée depuis \\(z_0=0\\). Sombre = la suite reste bornée (\\(c\\) est dans l'ensemble) ; couleur = combien de pas il lui a fallu pour s'échapper, donc les bandes sont des courbes de niveau du temps de fuite. [[detail]] borne le nombre d'itérations et [[zoom]] suit l'agrandissement.`,
        try: `Zoome plusieurs fois dans le bord, puis fais glisser [[detail]] de 20 jusqu'à 240 et retour. Regarde ce qui arrive à la région noire à fort agrandissement.`,
        notice: `<b>Monter [[detail]] fait fleurir les aires noires en filigrane — la région « pleine » était un artefact d'un arrêt trop précoce.</b> Les points près du bord ne s'échappent qu'après de très nombreuses itérations, donc une borne basse les classe à tort comme intérieurs. Le bord lui-même a une <b>dimension de Hausdorff 2</b> (prouvé par Shishikura, 1998) tout en ayant une aire nulle : il est si froissé qu'il remplit de fait le plan. L'ensemble est aussi connexe — chacun de ces mini-Mandelbrot d'apparence isolée est relié au corps principal par des filaments trop fins à dessiner.`,
      },
      scholar: {
        legend: `Rendu par temps de fuite de \\(M = \\{c \\in \\mathbb{C} : (z_{n+1}=z_n^2+c,\\, z_0=0) \\not\\to \\infty\\}\\), avec coloration à itération lisse (continue) \\(\\nu = n + 1 - \\log_2\\log_2|z_n|\\) pour retirer le banding. [[detail]] fixe le seuil du temps de fuite.`,
        try: `Zoome sur le bord d'un mini-Mandelbrot et varie [[detail]]. Estime comment croît le nombre d'itérations requis avec l'agrandissement, et considère ce que cela implique sur le fait de décider l'appartenance à \\(M\\) algorithmiquement.`,
        notice: `<b>Le nombre d'itérations nécessaires croît sans limite à mesure que tu t'approches du bord — l'appartenance n'est pas décidable en temps fini avec cette méthode.</b> \\(M\\) est compact et connexe (Douady–Hubbard), pourtant son bord a une dimension de Hausdorff exactement 2 tout en portant une mesure de Lebesgue nulle. Si \\(M\\) est <em>localement connexe</em> — la conjecture MLC — reste ouvert, et cela impliquerait une classification combinatoire complète de l'ensemble. Sous le modèle de calcul réel de Blum–Shub–Smale \\(M\\) n'est pas décidable, faisant de cette image un objet authentiquement non calculable rendu par approximation.`,
      },
    },
    calculus: {
      junior: {
        legend: `La courbe est une fonction. La ligne pointillée orange la touche en un point et montre à quel point elle monte raide là — c'est [[deriv]]. Les rectangles ombrés sous la courbe somment l'aire, montrée comme [[integ]] ; le bleu compte comme positif, le rouge comme négatif.`,
        try: `Mets [[rects]] à 2 et note [[integ]]. Maintenant fais-le glisser jusqu'à 40 et regarde à la fois l'image et le nombre.`,
        notice: `<b>Les rectangles s'emboîtent serrés contre la courbe et [[integ]] cesse d'osciller — il se stabilise sur la vraie aire.</b> Une forme courbe n'a pas de formule d'aire facile, donc l'astuce est de la couvrir de rectangles que tu <em>peux</em> mesurer, puis d'en utiliser plus, de plus fins, jusqu'à ce que l'erreur s'évanouisse. Maintenant fais glisser [[x]] et regarde [[deriv]] : là où la courbe monte raide la pente est grande, et au sommet d'une bosse elle passe par zéro.`,
      },
      student: {
        legend: `\\(f(x) = \\sin x + 0.4x\\). La ligne pointillée orange est la tangente en [[x]], dont la pente est [[deriv]]. Les blocs ombrés sont une <b>somme de Riemann</b> par point médian de \\(-3\\) à [[x]], rapportée comme [[integ]] ; signée, donc les blocs sous l'axe soustraient.`,
        try: `Fixe [[x]] à 0 et porte [[rects]] à travers 2, 8 et 40, en enregistrant [[integ]] chaque fois. Puis garde [[rects]] à 40 et balaie [[x]], en comparant [[deriv]] à la vitesse à laquelle change [[integ]].`,
        notice: `<b>[[integ]] converge vers −3,790, et son taux de variation quand tu fais glisser [[x]] est exactement [[deriv]].</b> Cette seconde observation est le <b>théorème fondamental du calcul</b> : si \\(A(x) = \\int_{-3}^{x} f(t)\\,dt\\) alors \\(A'(x) = f(x)\\) — dérivation et intégration s'annulent mutuellement. La règle du point médian converge comme \\(O(h^2)\\), et c'est pourquoi le saut de 2 à 8 rectangles achète bien plus d'exactitude que de 8 à 40.`,
      },
      scholar: {
        legend: `\\(f(x)=\\sin x + 0.4x\\) avec tangente de pente \\(f'(x) = \\cos x + 0.4\\) en [[x]]. Les blocs montrent la quadrature du point médian \\(\\sum f(x_i + h/2)\\,h\\) qui approxime \\(\\int_{-3}^{x} f\\), signée.`,
        try: `Estime l'ordre de convergence empiriquement : enregistre [[integ]] à [[rects]] = 5, 10, 20 pour [[x]] fixe, et vérifie si l'erreur se divise par quatre chaque fois que tu doubles le compte. Puis vérifie \\(\\frac{d}{dx}\\!\\int_{-3}^{x} f = f(x)\\) en un point où \\(f\\) change de signe.`,
        notice: `<b>L'erreur baisse d'un facteur quatre par doublement — convergence du second ordre, \\(O(h^2)\\).</b> Le terme d'erreur de la règle du point médian est \\(\\frac{(b-a)h^2}{24}f''(\\xi)\\), donc elle est exacte pour des intégrandes linéaires et bat la règle des trapèzes d'un facteur deux tout en utilisant une évaluation par intervalle. Le lien tangente-aire est le premier théorème fondamental, \\(\\frac{d}{dx}\\int_a^x f = f(x)\\) pour \\(f\\) continue ; sa puissance est qu'il convertit un processus de limite infini en antidérivation, et c'est pourquoi le calcul devint calculable.`,
      },
    },
    graphs: {
      junior: {
        legend: `Chaque point est une <b>personne</b> et chaque ligne une connexion entre deux d'entre elles. Certains points ont bien plus de lignes que le reste — ce sont les <b>hubs</b>, comptés dans [[hubcount]]. Appuyer sur [[spread]] lance un signal depuis un hub et le laisse voyager le long des lignes.`,
        try: `Mets [[hubs]] à 1, appuie sur [[reset]], puis [[spread]] et note [[steps]]. Maintenant mets [[hubs]] à 6, appuie sur [[reset]] et propage de nouveau.`,
        notice: `<b>Avec plus de connexions de hub le signal atteint tout le monde en bien moins de pas — souvent seulement trois ou quatre.</b> Le réseau n'est pas tissé uniformément : la plupart des points ont un ou deux liens tandis qu'une poignée en a des douzaines, et ces quelques hubs font office de raccourcis à travers toute la population. C'est pourquoi deux personnes quelconques sur Terre sont à environ six poignées de main de distance, et pourquoi une rumeur — ou un virus — qui atteint une personne bien connectée se répand si alarmamment vite.`,
      },
      student: {
        legend: `Un <b>réseau sans échelle</b> cultivé par attachement préférentiel : chaque nouveau nœud préfère se relier à des nœuds déjà populaires. [[hubs]] fixe combien de liens fait chaque nouvel arrivant, [[hubcount]] compte les 15% les plus connectés, et [[spread]] fait tourner une cascade de style épidémie déclenchée par un hub. [[reached]] et [[steps]] suivent la cascade.`,
        try: `Compare [[steps]] pour atteindre tout le monde à [[hubs]] = 1 contre 6, en gardant [[nodes]] fixe. Puis monte [[nodes]] de 10 à 40 et vois de combien [[steps]] croît en réponse.`,
        notice: `<b>Quadrupler le nombre de nœuds change à peine le nombre de pas.</b> C'est la propriété <b>petit-monde</b> : la longueur des chemins croît comme \\(\\log N\\), non \\(N\\). L'attachement préférentiel produit une distribution des degrés \\(P(k) \\sim k^{-\\gamma}\\) avec \\(\\gamma \\approx 3\\) — une loi de puissance sans échelle typique, donc des hubs de degré énorme ne sont pas les anomalies qu'une cloche prédirait. De tels réseaux résistent très bien à la panne aléatoire mais s'effondrent si leurs hubs sont retirés délibérément.`,
      },
      scholar: {
        legend: `Croissance de Barabási–Albert : les nœuds arrivent en séquence et s'attachent avec une probabilité proportionnelle au degré existant, \\(\\Pi(k_i) = k_i/\\sum_j k_j\\), donnant \\(P(k)\\sim k^{-3}\\). [[spread]] déclenche une cascade de type SIR à un sommet de haut degré ; [[reached]] et [[steps]] en rapportent la progression.`,
        try: `Mesure comment [[steps]] croît tandis que [[nodes]] va 10 → 20 → 40 à [[hubs]] fixe, et compare à \\(\\log N\\) et \\(\\sqrt{N}\\). Puis considère ce que ferait à [[reached]] le retrait des quelques hubs principaux.`,
        notice: `<b>La longueur des chemins suit \\(\\log N\\) ; dans les réseaux sans échelle purs elle est même plus courte, \\(\\ell \\sim \\log\\log N\\) — « ultrapetite ».</b> La conséquence profonde est épidémiologique : pour \\(\\gamma \\le 3\\) le second moment \\(\\langle k^2\\rangle\\) diverge quand \\(N\\to\\infty\\), et comme le seuil épidémique croît comme \\(\\lambda_c = \\langle k\\rangle/\\langle k^2\\rangle\\), il s'évanouit. <b>Un réseau sans échelle n'a aucun seuil épidémique</b> : toute infection transmissible, si faible soit-elle, peut persister. C'est précisément pourquoi l'immunisation ciblée des hubs surpasse énormément la vaccination aléatoire.`,
      },
    },
    trig: {
      junior: {
        legend: `Un point tourne sur un cercle à gauche. Sa <b>hauteur</b> est dessinée comme une onde à droite — cette onde est le sinus.`,
        try: `Appuie sur [[play]] (ou fais glisser [[angle]]) et regarde le point tourner tandis que l'onde se dessine d'elle-même. Combien vaut [[sin]] quand le point est tout en haut ?`,
        notice: `<b>Le cercle dessine l'onde.</b> La hauteur du point est le sinus, et tandis qu'il tourne, cette hauteur trace une onde lisse et répétée — +1 en haut, −1 en bas, 0 sur les côtés. Tout ce qui se répète dans la nature, du son aux marées, est construit à partir de cela.`,
      },
      student: {
        legend: `Le cercle unité (rayon 1) : le point à l'angle θ est en (cos θ, sin θ). Le panneau droit trace sin θ et cos θ à mesure que θ avance ; [[sin]] et [[cos]] lisent les valeurs en temps réel.`,
        try: `Mets [[angle]] à 90° et lis [[sin]] et [[cos]] ; puis 0°, puis 45°. Confirme que sin² + cos² fait toujours 1.`,
        notice: `<b>Le cosinus est la coordonnée x, le sinus la coordonnée y d'un point sur le cercle unité.</b> Ils glissent entre +1 et −1 et se répètent tous les 360°. Comme le rayon est 1, Pythagore donne sin²θ + cos²θ = 1 à tout angle — l'identité que tu viens de vérifier.`,
      },
      scholar: {
        legend: `La définition du sinus et du cosinus via le cercle unité, avec leurs formes d'onde générées tandis que θ balaie. Le lien pointillé montre la projection qui devient la hauteur de l'onde.`,
        try: `Trace un tour complet et note le déphasage d'un quart de tour entre cosinus et sinus, et où tan = sin/cos explose (θ = 90°, 270°).`,
        notice: `<b>Sinus et cosinus sont la même onde à un quart de tour de distance, et chacun est la dérivée de l'autre.</b> Cette relation, \\(y'' = -y\\), est pourquoi ils décrivent toute oscillation, et à travers la formule d'Euler \\(e^{i\\theta} = \\cos\\theta + i\\sin\\theta\\) ils deviennent le langage naturel des ondes, des rotations et de l'analyse de Fourier.`,
      },
    },
    gravity: {
      junior: {
        legend: `La boule ambre au centre est l'<b>étoile</b>. La boule colorée est une <b>planète</b> qui tourne autour d'elle. Le cercle pâle est le chemin qu'elle suit, la traînée lumineuse est où elle vient de passer, et la courte ligne ambre est la <b>gravité</b> — elle pointe toujours droit vers l'étoile.`,
        try: `Fais glisser [[radius]] jusqu'à 40 et lis [[period]]. Maintenant porte-le à 80 — exactement le double. [[period]] double-t-il aussi ?`,
        notice: `<b>Non — doubler la distance ne double pas l'année. Elle la triple presque.</b> [[period]] passe d'environ 37s à environ 106s, et la planète voyage aussi plus lentement plus elle est loin. C'est pourquoi Neptune met 165 années terrestres pour un seul tour du Soleil, tandis que la Terre en met une.`,
      },
      student: {
        legend: `Sphère ambre = l'<b>étoile</b> (son rayon dessiné croît avec la masse que tu règles). Point coloré = une <b>planète</b> sur une orbite circulaire. Anneau pâle = le chemin orbital, traînée estompée = trajectoire récente, court vecteur ambre = la <b>force gravitationnelle</b>, toujours dirigée vers l'étoile.`,
        try: `Double [[radius]] de 40 à 80 et compare les deux lectures de [[period]]. Puis garde le rayon fixe et pousse [[mass]] de 0,5 à 5, en regardant [[speed]].`,
        notice: `<b>Doubler \\(r\\) ne double pas \\(T\\) — il le multiplie par environ 2,8.</b> C'est la troisième loi de Kepler, \\(T^2 \\propto r^3\\). La vitesse orbitale obéit à \\(v = \\sqrt{GM/r}\\), donc elle baisse à mesure que l'orbite s'élargit et monte avec la masse de l'étoile. Note aussi que la gravité pointe vers l'étoile tout le temps, pourtant la planète n'y tombe jamais — elle continue de se déplacer sur le côté assez vite pour toujours la manquer.`,
      },
      scholar: {
        legend: `Sphère ambre = masse centrale \\(M\\) (dessinée à l'échelle, non en taille). Point coloré = une particule test sur une orbite circulaire de rayon \\(r\\). Anneau pâle = l'orbite, traînée estompée = chemin récent, vecteur ambre = l'accélération gravitationnelle centripète \\(GM/r^2\\).`,
        try: `Échantillonne [[period]] à \\(r = 40, 80, 120\\) avec [[mass]] fixe, et estime la pente de \\(\\log T\\) contre \\(\\log r\\). Puis varie [[mass]] à rayon fixe et vérifie si \\(T \\propto M^{-1/2}\\).`,
        notice: `<b>La pente log-log est exactement \\(3/2\\), donc doubler \\(r\\) multiplie \\(T\\) par \\(2^{3/2} \\approx 2,83\\).</b> En égalant accélération gravitationnelle et centripète, \\(GM/r^2 = v^2/r\\), on obtient \\(v = \\sqrt{GM/r}\\) et donc \\[T = \\frac{2\\pi r}{v} = \\frac{2\\pi r^{3/2}}{\\sqrt{GM}},\\] si bien que \\(T^2 = (4\\pi^2/GM)\\,r^3\\) et \\(T \\propto M^{-1/2}\\), comme le confirme le second test. La simulation intègre cette relation directement, donc [[mass]] remet à l'échelle la constante keplérienne \\(4\\pi^2/GM\\).`,
      },
    },
    projectile: {
      junior: {
        legend: `La boule colorée est lancée depuis la gauche. La ligne pointillée montre le chemin qu'elle suivra, et le petit marqueur au sol est où elle atterrit. Elle monte tandis que la gravité ralentit sa montée, puis retombe — toujours un arc doux.`,
        try: `Garde [[speed]] égale et mets [[angle]] à 45. Note [[range]]. Maintenant essaie 20, puis 70. Quel angle la lance le plus loin ?`,
        notice: `<b>45° gagne à chaque fois.</b> Vise trop bas (20°) et elle touche le sol tôt ; vise trop raide (70°) et elle va haut mais pas loin. Exactement au milieu — 45° — divise le lancer équitablement entre « avant » et « haut », et cela atteint la distance maximale.`,
      },
      student: {
        legend: `La vitesse de lancer se divise en une partie horizontale constante \\(v_0\\cos\\theta\\) et une partie verticale \\(v_0\\sin\\theta\\) que la gravité érode à \\(g\\). Courbe pointillée = la parabole prédite, marqueur au sol = la portée \\(R\\). Les pastilles lisent \\(R\\), la hauteur au sommet \\(H\\) et le temps de vol \\(T\\).`,
        try: `Garde [[speed]] fixe et lance à [[angle]] = 30° ; lis [[range]]. Maintenant lance à 60° et compare les deux portées.`,
        notice: `<b>30° et 60° donnent la portée identique.</b> Comme \\(R = v_0^2\\sin 2\\theta/g\\) et \\(\\sin 2\\theta\\) est symétrique autour de \\(\\theta = 45°\\), toute paire d'angles complémentaires \\((\\theta,\\,90°-\\theta)\\) atterrit au même point — l'un sur un arc plat et rapide, l'autre haut et lent. \\(\\sin 2\\theta\\) culmine à \\(2\\theta = 90°\\), et c'est exactement pourquoi 45° est l'angle le plus lointain.`,
      },
      scholar: {
        legend: `Une accélération constante vers le bas \\(g\\) agissant sur la vitesse initiale \\((v_0\\cos\\theta,\\,v_0\\sin\\theta)\\). Éliminer le temps donne la parabole pointillée \\(y = x\\tan\\theta - gx^2/(2v_0^2\\cos^2\\theta)\\) ; le marqueur au sol est à la portée \\(R\\).`,
        try: `Confirme la symétrie des angles complémentaires en échantillonnant [[range]] à [[angle]] = 30° et 60° à [[speed]] fixe, puis balaie [[angle]] autour de 45° pour localiser où [[range]] culmine.`,
        notice: `<b>Le maximum est exactement à 45° — mais seulement parce qu'ici les altitudes de lancer et d'atterrissage sont égales.</b> La portée \\(R = (v_0^2/g)\\sin 2\\theta\\) est symétrique autour de 45° et maximale là. Élève le point de lancer et l'optimum glisse sous 45° à \\(\\arctan(v_0/\\sqrt{v_0^2+2gh})\\) ; ajoute une résistance de l'air quadratique et il descend encore — les vraies balles de baseball frappées vont plus loin près de 30–35°, et aucune portée en forme close ne survit.`,
      },
    },
    newton: {
      junior: {
        legend: `Un bloc est sur une piste. La flèche verte est la <b>poussée</b> que tu appliques ; la flèche rouge est le <b>frottement</b> qui repousse. Le bloc accélère tant que la poussée l'emporte, puis revient au début et repart.`,
        try: `Fais [[mass]] petite et [[force]] grande, et regarde [[accel]]. Maintenant double [[mass]] avec la même [[force]]. Qu'arrive-t-il à la vitesse d'accélération ?`,
        notice: `<b>Doubler la masse divise par deux l'accélération.</b> La même poussée déplace un bloc lourd plus lentement — c'est \\(F = ma\\). Et si tu montes [[fric]] assez, le bloc ne bouge pas du tout : le frottement annule ta poussée, les forces s'équilibrent, et la première loi de Newton le tient immobile.`,
      },
      student: {
        legend: `Un diagramme de corps libre sur une piste : vert = force appliquée, rouge = frottement cinétique \\(f = \\mu m g\\). La force nette \\(F_{\\text{net}} = F - f\\) donne l'accélération \\(a = F_{\\text{net}}/m\\) ; les pastilles lisent force nette, accélération et vitesse en temps réel.`,
        try: `Garde [[force]] fixe et porte [[mass]] de basse à haute, en lisant [[accel]] chaque fois. Puis monte [[fric]] jusqu'à ce que le bloc refuse de bouger.`,
        notice: `<b>L'accélération est proportionnelle à la force et inversement proportionnelle à la masse — exactement \\(a = F_{\\text{net}}/m\\).</b> Quand la force appliquée descend sous la limite de frottement \\(\\mu m g\\), la force nette est nulle et le bloc reste immobile : une démonstration de la première loi à forces équilibrées.`,
      },
      scholar: {
        legend: `Une piste qui montre le net entre la force appliquée et le frottement de Coulomb. L'accélération est intégrée par \\(a = F_{\\text{net}}/m\\) et la vitesse par \\(a\\) ; le bloc se réinitialise pour courir à accélération constante à chaque cycle.`,
        try: `Vérifie \\(a \\propto 1/m\\) en divisant par deux et en doublant [[mass]] à [[force]] fixe, puis localise le seuil de frottement où le mouvement cesse et compare-le à \\(\\mu m g\\).`,
        notice: `<b>Le mouvement commence exactement à \\(F = \\mu m g\\), et l'accélération croît comme \\(1/m\\).</b> C'est l'angle à force-constante, masse-constante de \\(\\mathbf{F} = d\\mathbf{p}/dt\\). La sim utilise un seul \\(\\mu\\) cinétique ; les surfaces réelles ont un coefficient <i>statique</i> plus grand, donc la vraie force de décollement est un peu plus haute que la valeur dessinée ici.`,
      },
    },
    circuits: {
      junior: {
        legend: `Une pile à gauche pousse un <b>courant</b> de charge le long de la boucle pour allumer l'ampoule à droite. Les points en mouvement sont la charge — plus ils courent vite, plus le courant est grand. Monte la pile et ils accélèrent ; ajoute de la résistance et ils ralentissent.`,
        try: `Monte [[volt]] et regarde les points et l'ampoule. Maintenant monte [[res]] à la place. Lequel rend le courant plus grand, et lequel plus petit ?`,
        notice: `<b>Plus de tension signifie plus de courant ; plus de résistance signifie moins.</b> C'est la loi d'Ohm, courant = tension ÷ résistance. La luminosité de l'ampoule suit la <i>puissance</i>, donc doubler la tension la rend bien plus que deux fois plus lumineuse.`,
      },
      student: {
        legend: `Une seule boucle : une source de f.é.m. (pile) et une ampoule résistive. Les points se déplacent à une vitesse fixée par le courant \\(I = V/R\\), et l'éclat de l'ampoule suit la puissance \\(P = VI\\). Les pastilles lisent courant et puissance.`,
        try: `Fixe [[res]] et double [[volt]] — vérifie que [[cur]] double. Puis garde [[volt]] et double [[res]] ; confirme que [[cur]] est divisé par deux.`,
        notice: `<b>Le courant est exactement \\(V/R\\) : linéaire dans la tension, inversement proportionnel à la résistance.</b> La puissance, cependant, va comme \\(P = VI = V^2/R\\), donc doubler la tension <i>quadruple</i> la puissance — et c'est pourquoi l'ampoule s'illumine si drastiquement.`,
      },
      scholar: {
        legend: `Un circuit ohmique à boucle unique idéalisé. La vitesse des porteurs de charge est dessinée proportionnelle à \\(I = V/R\\) et la luminance de l'ampoule à \\(P = V^2/R\\) ; le modèle suppose une résistance constante (aucun échauffement).`,
        try: `Trace la droite \\(I\\)–\\(V\\) en variant [[volt]] à [[res]] fixe, puis change [[res]] pour voir changer la pente \\(1/R\\). Regarde comment [[pow]] suit \\(V^2/R\\), non \\(V\\).`,
        notice: `<b>Le courant suit une droite par l'origine de pente \\(1/R\\) — la signature d'un élément ohmique.</b> Un filament réel se chauffe à mesure que \\(P\\) monte, sa résistance croît, et la droite se courbe. La sim montre le cas idéalisé à \\(R\\) constante : la tangente que seul un métal froid obéit exactement.`,
      },
    },
    states: {
      junior: {
        legend: `Une boîte de particules. Le curseur est la <b>température</b>. Froides et elles se figent en un solide ordonné ; plus chaudes et elles glissent comme un liquide ; brûlantes et elles s'envolent comme un gaz. La barre à droite marque les points de fusion et d'ébullition.`,
        try: `Pars froid et monte lentement [[temp]]. Regarde les particules passer de grille fixe, à fluides, à libres en vol. À quels points l'[[state]] change-t-il ?`,
        notice: `<b>Mêmes particules — juste plus d'énergie.</b> Rien n'est ajouté ni retiré ; chauffer ne fait que déplacer les particules plus vite jusqu'à ce qu'elles se libèrent les unes des autres. C'est là toute la différence entre glace, eau et vapeur : non de quoi elles sont faites, mais à quelle vitesse elles se déplacent.`,
      },
      student: {
        legend: `Théorie cinétique en action : la température fixe la vitesse moyenne des particules, et l'équilibre entre leur mouvement et leur attraction mutuelle fixe l'état. La barre latérale marque les points de fusion et d'ébullition.`,
        try: `Monte [[temp]] lentement à travers le point de fusion, puis celui d'ébullition, en regardant l'arrangement changer de réseau → fluide → libre.`,
        notice: `<b>La température est l'énergie cinétique moyenne, et l'état est un bras de fer.</b> Sous la fusion, l'attraction l'emporte (un réseau rigide) ; au-dessus de l'ébullition, le mouvement l'emporte (un gaz libre) ; entre les deux, un quasi-match nul (un liquide mobile). Les substances réelles font aussi une pause à chaque transition tandis que la chaleur latente rompt les liaisons.`,
      },
      scholar: {
        legend: `Un schéma cinétique-moléculaire : la vitesse des particules croît avec T, et l'arrangement reflète si les forces intermoléculaires ou le mouvement thermique dominent.`,
        try: `Balaie [[temp]] à travers les deux transitions et note que le changement qualitatif — réseau, liquide, gaz — est brusque, non graduel : la signature d'une transition de phase.`,
        notice: `<b>Les changements d'état sont des transitions collectives, quasi-discontinues.</b> À pression fixe l'état bascule à des points nets de fusion et d'ébullition, et les franchir coûte de la chaleur latente sans hausse de température. Change la pression et ces points se déplacent — le compte complet est le diagramme de phase, avec ses points triple et critique.`,
      },
    },
    waves: {
      junior: {
        legend: `Les deux ondes pâles — une bleue, une violette — sont deux <b>ondes</b> séparées qui voyagent. La ligne épaisse et lumineuse est ce que tu verrais et entendrais vraiment : les deux sommées, crête par crête.`,
        try: `Laisse [[freq]] à 1 pour que les deux ondes coïncident. Maintenant fais glisser [[phase]] lentement de 0 jusqu'à environ 3,14 et regarde la ligne épaisse.`,
        notice: `<b>L'onde épaisse se réduit à une ligne plate — deux ondes sommées donnent rien.</b> Quand tu décales une onde d'un demi-pas, ses crêtes tombent exactement sur les creux de l'autre et elles s'annulent. Somme son à son et tu obtiens le silence : c'est exactement comment fonctionnent les écouteurs à réduction de bruit. Pousse [[phase]] jusqu'à 6,28 (un pas entier) et l'onde revient rugissante.`,
      },
      student: {
        legend: `Bleu pâle et violet pâle = les deux <b>ondes sources</b>. La courbe épaisse et lumineuse est leur <b>superposition</b>, la somme point par point. [[type]] rapporte si le résultat renforce ou annule, et [[amp]] donne la hauteur de pic comme multiple de celle d'une seule onde.`,
        try: `Avec [[freq]] à 1, mets [[phase]] à 0 et lis [[amp]]. Puis porte [[phase]] à \\(\\pi \\approx 3.14\\) et relis-le. Enfin mets [[freq]] à 2 et regarde la forme changer de caractère.`,
        notice: `<b>[[amp]] va de 2,00× jusqu'à 0,00× — renforcement total à annulation totale — sans changer l'énergie que tu injectes.</b> Les ondes se superposent linéairement : \\(y = A\\sin(kx-\\omega t) + A\\sin(kx-\\omega t+\\phi)\\), qui somme à \\(2A\\cos(\\phi/2)\\sin(kx-\\omega t+\\phi/2)\\). Le facteur d'amplitude \\(2A\\cos(\\phi/2)\\) s'évanouit à \\(\\phi=\\pi\\). Avec des fréquences différentes tu n'obtiens plus une seule onde propre mais un motif de <em>battement</em> répété.`,
      },
      scholar: {
        legend: `Deux termes sources harmoniques d'amplitude égale \\(A\\), le second avec rapport de fréquence [[freq]] et phase relative [[phase]]. La courbe épaisse est leur superposition linéaire ; [[amp]] rapporte \\(\\max|y|/A\\).`,
        try: `Garde [[freq]] à 1 et balaie [[phase]] sur \\([0, 2\\pi]\\), en comparant [[amp]] à \\(2|\\cos(\\phi/2)|\\). Puis mets [[freq]] à une valeur non entière comme 1,5 et observe que l'enveloppe ne se referme plus en une seule période.`,
        notice: `<b>[[amp]] trace \\(2|\\cos(\\phi/2)|\\) exactement, et les rapports de fréquence irrationnels ne se répètent jamais.</b> La superposition découle de la linéarité de l'équation des ondes \\(\\partial_t^2 y = c^2 \\partial_x^2 y\\) : des sommes de solutions sont des solutions, et c'est ce qui rend l'analyse de Fourier possible. Pour \\(f_2/f_1 = p/q\\) rationnel le motif est périodique de période \\(q\\) cycles ; les rapports irrationnels sont quasi-périodiques et ne se répètent jamais exactement. Note que l'annulation redistribue l'énergie, ne la détruit pas — l'énergie supprimée ici réapparaît ailleurs dans le champ.`,
      },
    },
    thermo: {
      junior: {
        legend: `La boîte tient des <b>particules</b> de gaz qui rebondissent, colorées par leur vitesse — bleu est lent, rouge est rapide. Le thermomètre à droite montre la température. Le graphe en dessous compte combien de particules ont chaque vitesse.`,
        try: `Regarde le graphe à [[temp]] = 300. Maintenant fais glisser [[temp]] jusqu'à 1200 et compare : où la bosse s'est-elle déplacée, et qu'est-il arrivé à [[press]] ?`,
        notice: `<b>Chauffer ne donne pas à chaque particule la même vitesse — cela déplace toute la bosse vers la droite et l'étale plus large.</b> Même dans un gaz brûlant certaines particules rampent et certaines courent. La température n'est pas la vitesse d'une particule ; c'est la <em>moyenne</em> sur des milliards. Les particules plus rapides frappent aussi les parois plus fort et plus souvent, et c'est exactement ce que [[press]] mesure — la raison pour laquelle une canette scellée explose dans le feu.`,
      },
      student: {
        legend: `Un gaz idéal 2D à collisions élastiques. La couleur des particules encode la vitesse (bleu lent → rouge rapide), le thermomètre suit [[temp]], et le graphe en bas est la <b>distribution des vitesses</b> en temps réel avec son enveloppe. [[hits]], [[speed]] et [[press]] sont mesurés à partir des particules elles-mêmes, non supposés.`,
        try: `Enregistre [[speed]] et [[press]] à [[temp]] = 300, puis à 1200 — un facteur 4. La vitesse monte-t-elle aussi de 4 ? Puis reviens à 300 et double plutôt [[num]].`,
        notice: `<b>Quadrupler la température ne double que la vitesse moyenne, mais doubler le nombre de particules double la pression.</b> C'est \\(v_{\\text{rms}} \\propto \\sqrt{T}\\) — l'énergie cinétique, non la vitesse, est ce qui croît avec \\(T\\), via \\(\\tfrac12 m v^2 = \\tfrac{d}{2} k_B T\\). La pression suit cependant \\(PV = Nk_BT\\), linéaire en \\(N\\) comme en \\(T\\). La distribution que tu vois est la loi de <b>Maxwell–Boltzmann</b> : elle a un plancher rigide à vitesse nulle mais une queue illimitée, donc elle est fondamentalement asymétrique.`,
      },
      scholar: {
        legend: `Gaz de disques rigides à volume fixe avec collisions élastiques à deux corps ; les vitesses sont initialisées et remises à l'échelle comme \\(v \\propto \\sqrt{T}\\). L'histogramme est la densité empirique instantanée des vitesses, et [[press]] est accumulée à partir de l'impulsion mesurée sur les parois par unité de temps.`,
        try: `Vérifie l'échelle \\(v_{\\text{rms}} \\propto \\sqrt{T}\\) sur [[temp]] = 300, 600, 1200, puis garde \\(T\\) fixe et varie [[num]] pour confirmer \\(P \\propto N\\). Regarde à quelle vitesse l'histogramme se ré-équilibre dans son enveloppe après un saut soudain de température.`,
        notice: `<b>La distribution se reforme en quelques temps de collision, quelle que soit la façon dont tu la perturbes.</b> En 2D la loi d'équilibre est \\(f(v) \\propto v\\,e^{-mv^2/2k_BT}\\) (la Maxwell–Boltzmann 3D porte \\(v^2\\)), et l'équipartition donne \\(\\langle E\\rangle = \\tfrac{d}{2}k_BT\\) par particule. La partie remarquable est la vitesse de l'approche : le <b>théorème H de Boltzmann</b> montre que le chaos moléculaire pilote toute distribution initiale monotonement vers celle-ci. La dynamique microscopique est parfaitement réversible dans le temps, pourtant la relaxation macroscopique ne l'est pas — l'origine de la flèche du temps.`,
      },
    },
    particles: {
      junior: {
        legend: `Ceci est la vue de l'intérieur d'un détecteur de particules — les anneaux bleus sont ses couches. Appuie sur [[collide]] et deux protons courent des côtés et se percutent au centre. Les étincelles avec des lettres qui volent dehors sont les <b>nouvelles particules</b> créées par le choc ; le <b>H</b> rose est un boson de Higgs.`,
        try: `Mets [[energy]] au minimum, 0,5, et appuie sur [[collide]] quelques fois. Compte à peu près combien d'étincelles volent dehors. Maintenant mets [[energy]] à 14 et percute de nouveau.`,
        notice: `<b>Plus d'énergie fait plus de particules — le choc crée de la matière qui n'existait pas avant.</b> Les protons ne se fracassent pas en morceaux plus petits comme une assiette tombée ; leur énergie de mouvement se transforme en particules flambant neuves, parce que énergie et masse sont la même chose (\\(E = mc^2\\)). C'est pourquoi les physiciens construisent des accélérateurs de plus en plus grands : pour faire des particules plus lourdes, il faut plus d'énergie, et rien d'autre ne convient.`,
      },
      student: {
        legend: `Une coupe schématique du détecteur : les anneaux concentriques sont des couches de traçage, et chaque point étiqueté est un produit de désintégration — quarks (u, d, s), gluons (g), électrons, photons, neutrinos et le Higgs (H). [[count]] compte les collisions ; [[energy]] est l'énergie du faisceau par proton.`,
        try: `Compare le nombre et la variété des produits à [[energy]] = 0,5 contre 14. Regarde en particulier à quelle fréquence le <b>H</b> rose apparaît à chaque réglage.`,
        notice: `<b>La multiplicité des produits monte avec l'énergie du faisceau, et les particules lourdes n'apparaissent que quand il y a de l'énergie pour les payer.</b> Une collision convertit l'énergie cinétique en masse au repos via \\(E = mc^2\\), donc produire un Higgs (125 GeV/c²) exige une énergie de collision bien au-dessus de ce seuil. C'est pourquoi le LHC tourne à 13–14 TeV plutôt qu'à quelque chose de moins cher : le Higgs était simplement inaccessible à des énergies plus basses, et la particule ne fut trouvée qu'en 2012 quand la machine put l'atteindre.`,
      },
      scholar: {
        legend: `Schéma d'un événement de collisionneur de hadrons : couches de traçage concentriques, avec des produits dans l'état final tirés du spectre du Modèle Standard. La multiplicité croît avec \\(\\sqrt{s}\\) dans ce modèle ; le marqueur H dénote un candidat Higgs.`,
        try: `Porte [[energy]] sur tout son intervalle et note comment croît la multiplicité. Considère quelle fraction d'événements devrait contenir un H pour une revendication de découverte, étant donné que la vraie section efficace de production du Higgs est \\(\\sim\\!10^{-10}\\) du taux inélastique total.`,
        notice: `<b>Le taux ici est follement généreux — un Higgs réel apparaît dans environ une collision sur \\(10^{10}\\).</b> La découverte est donc un problème de statistique, non de détection : le LHC produit ~600 millions de collisions par seconde et les physiciens chassent une poignée d'événements contre un fond de QCD écrasant, exigeant \\(5\\sigma\\) (une probabilité de fausse alerte de \\(3\\times10^{-7}\\)) avant de revendiquer un signal. Les 17 champs du Modèle Standard rendent compte de chaque particule vue ici, et prédisent le moment magnétique de l'électron à 12 chiffres significatifs — pourtant ils ne contiennent aucun candidat pour la matière noire et aucune gravité.`,
      },
    },
    tectonics: {
      junior: {
        legend: `Deux plaques de la croûte terrestre se rencontrent au centre, et les points sont de la roche entraînée avec elles. La barre en haut à gauche est [[stress]] — la tension qui s'accumule là où elles sont coincées ensemble. Quand elle se remplit complètement, la roche se brise.`,
        try: `Mets [[speed]] à 1 et regarde combien de temps [[stress]] met à se remplir. Maintenant mets-la à 10 et regarde de nouveau.`,
        notice: `<b>Des plaques plus rapides remplissent la barre de tension bien plus vite, donc les séismes reviennent bien plus souvent — mais chacun attend quand même que la barre soit pleine.</b> Les plaques ne glissent jamais vraiment de façon lisse ; le frottement les coince, la tension s'accumule pendant des décennies ou des siècles, puis se libère en secondes. C'est pourquoi les séismes paraissent soudains même si la cause est angoissamment lente : tes ongles poussent à peu près à la vitesse à laquelle se déplacent les continents. Essaie [[quake]] pour libérer la tension en avance et regarde la barre descendre.`,
      },
      student: {
        legend: `Une limite de plaque en coupe. [[type]] alterne entre géométrie divergente, transformante et convergente ; [[speed]] fixe la vitesse relative des plaques. [[stress]] est la tension élastique accumulée, libérée comme événement quand elle sature, la magnitude étant rapportée dans [[event]].`,
        try: `Chronomètre combien de temps [[stress]] met à saturer à [[speed]] = 2 contre 8. Puis utilise [[quake]] pour libérer la tension en avance, à répétition, et compare les magnitudes dans [[event]] à celles de la saturation naturelle.`,
        notice: `<b>La tension s'accumule linéairement et se libère instantanément — le modèle de <b>rebond élastique</b> que Reid déduisit de la rupture de San Francisco de 1906.</b> L'intervalle de récurrence croît inversement avec la vitesse de la plaque, et c'est pourquoi la limite Nazca–Amérique du Sud (~7 cm/an) se rompt bien plus souvent que les contextes intraplaques. Libérer en avance donne des événements plus petits, et c'est le noyau de vérité derrière « les petits séismes déchargent la tension » — mais la vérité est subtile : la magnitude est logarithmique dans l'énergie, donc il faut environ 32 petits M5 pour libérer l'énergie d'un M6, et environ un million de M2 pour remplacer un M6.`,
      },
      scholar: {
        legend: `Limite stick-slip idéalisée avec accumulation linéaire de tension \\(\\dot\\sigma \\propto v_{\\text{plate}}\\) et chute complète de la contrainte à un seuil de rupture fixe — un modèle à séisme caractéristique. [[type]] sélectionne la cinématique de la limite ; [[event]] rapporte la magnitude de moment.`,
        try: `Examine les statistiques de récurrence que ce modèle produit à [[speed]] fixe. Compare sa distribution de magnitude à la loi de Gutenberg–Richter \\(\\log_{10}N = a - bM\\) avec \\(b \\approx 1\\), et identifie ce que le modèle ne peut reproduire.`,
        notice: `<b>Ce modèle est délibérément périodique ; la sismicité réelle ne l'est pas, et cet écart est pourquoi la prévision a échoué.</b> Des séismes parfaitement caractéristiques seraient prévisibles, pourtant les catalogues observés suivent Gutenberg–Richter avec \\(b\\approx1\\) — invariant d'échelle, sans dimension caractéristique — et les intervalles de récurrence sur des failles bien étudiées varient de facteurs de plusieurs unités (le cycle « de 22 ans » de Parkfield dura notoirement 38). Le frottement rate-and-state et la criticité auto-organisée impliquent tous deux la même conclusion : les petites ruptures cascadent en grandes sans aucun précurseur distinctif, donc la taille d'un événement pourrait être indéterminée à la nucléation. Le risque sismique est donc coté de façon probabiliste ; la prévision déterministe n'est pas actuellement considérée comme atteignable.`,
      },
    },
    ocean: {
      junior: {
        legend: `Ceci est l'Atlantique vu de côté, les tropiques à gauche et l'extrême nord à droite. Les points en mouvement sont de l'eau : l'eau chaude coule vers le nord le long du sommet, se refroidit, devient lourde et plonge, puis revient en rampant vers le sud le long du fond. [[amoc]] montre la force de ce tour.`,
        try: `Regarde la plongée à droite à [[warm]] = 0. Maintenant fais glisser [[warm]] jusqu'à 10 et continue de regarder à la fois la plongée et [[amoc]].`,
        notice: `<b>Réchauffer l'océan fait ralentir et s'arrêter le tapis roulant — [[amoc]] descend de 100% à 20%.</b> Le tour fonctionne parce que l'eau froide et salée est assez lourde pour plonger ; réchauffe-la et elle reste à flot, donc toute la courroie bégaie. Cette courroie est ce qui porte la chaleur tropicale à l'Europe, et c'est pourquoi la Grande-Bretagne est bien plus douce que le Canada à la même latitude. Réchauffer la planète pourrait, paradoxalement, rendre l'Europe du nord considérablement plus froide.`,
      },
      student: {
        legend: `Coupe méridienne de la circulation de retournement atlantique. Le flux de surface est piloté par [[wind]] ; la formation d'eau profonde au nord dépend de la densité, que [[warm]] réduit. [[flow]] rapporte le transport en sverdrups (1 Sv = 10⁶ m³/s) et [[amoc]] la force du retournement.`,
        try: `Garde [[wind]] fixe et porte [[warm]] de 0 à 10, en enregistrant [[amoc]] à chaque pas. La réponse est-elle linéaire ? Puis varie [[wind]] seul et vois s'il peut compenser un [[amoc]] affaibli.`,
        notice: `<b>[[amoc]] baisse linéairement ici (8% par unité de réchauffement) et le vent ne peut le sauver — les deux moteurs ne sont pas interchangeables.</b> Le retournement est piloté par la densité, donc tant l'adoucissement que le réchauffement le suppriment tandis que le vent ne mélange que la surface. L'AMOC transporte ~1,3 PW vers le nord, environ un quart du flux total de chaleur vers les pôles de la planète, et les observations depuis 2004 (réseau RAPID) suggèrent une tendance à l'affaiblissement contre une forte variabilité. Le danger du système réel est ce que ce modèle linéaire omet : une rétroaction d'advection du sel qui peut rendre l'effondrement auto-renforçant plutôt que graduel.`,
      },
      scholar: {
        legend: `AMOC schématique avec transport de surface piloté par le vent et formation d'eau profonde contrôlée par la flottabilité ; [[warm]] agit comme un forçage de flottabilité qui supprime la convection. [[amoc]] est un substitut linéaire de la force du retournement.`,
        try: `Note que [[amoc]] ici répond linéairement et réversiblement à [[warm]]. Considère quelle observable distinguerait ce comportement d'un système doté de bistabilité, et ce que cela implique pour l'alerte précoce.`,
        notice: `<b>La linéarité est la fausseté clé du modèle : l'analyse à deux boîtes de Stommel montre que l'AMOC est plausiblement <em>bistable</em>, avec une bifurcation nœud-col et de l'hystérésis.</b> Le mécanisme est la rétroaction d'advection du sel — un retournement plus faible importe moins de sel vers le nord, réduisant encore la densité et l'affaiblissant de nouveau — qui admet un état « éteint » persistant même si le forçage est retiré. Les preuves paléo (événements de Dansgaard–Oeschger, l'événement de 8,2 ka) montrent des réorganisations brusques sur des échelles de temps décennales. Comme la transition est une bifurcation plutôt qu'un seuil dans le forçage, l'espoir pratique repose sur les indicateurs de ralentissement critique : variance et autocorrélation croissantes dans les empreintes de SST, que diverses analyses affirment désormais détecter, même si le cas statistique reste contesté.`,
      },
    },
    volcano: {
      junior: {
        legend: `Sous la montagne il y a une chambre de roche fondue. Du magma frais continue d'arriver d'en bas, donc [[pres]] monte constamment ; quand la chambre n'en peut plus prendre, le volcan entre en éruption. [[phase]] te dit à quel stade il est, et [[vei]] évalue la violence de l'éruption.`,
        try: `Mets [[visc]] à 1 — fluide, comme à Hawaï — et appuie sur [[erupt]], en notant [[vei]]. Maintenant mets-la à 10, le type collant, et fais éruption de nouveau.`,
        notice: `<b>Le magma fluide donne une douce explosion d'environ 1 ; le magma collant donne un 7 — des centaines de fois plus violente, à partir de la même pression exacte.</b> La différence est si le gaz parvient à sortir. Dans le magma fluide les bulles s'échappent facilement et la lave se déverse simplement, donc tu peux marcher près d'une éruption hawaïenne. Dans le magma collant le gaz est piégé jusqu'à ce que le tout éclate d'un coup, comme secouer une boisson gazeuse et l'ouvrir brusquement. Même pression, journée toute différente.`,
      },
      student: {
        legend: `Une chambre magmatique et un conduit. [[recharge]] fixe le taux d'apport de magma, donc [[pres]] monte jusqu'à la rupture ; [[visc]] va de composition basaltique (1) à rhyolitique (10). [[vei]] est l'Indice d'Explosivité Volcanique de l'éruption résultante.`,
        try: `Fais éruption à [[visc]] = 1, 5 et 10 depuis pleine pression, en enregistrant [[vei]] chaque fois. Puis change [[recharge]] et vérifie si cela altère [[vei]] ou seulement le temps d'attente.`,
        notice: `<b>La viscosité fixe la violence, la recharge ne fixe que la fréquence — [[vei]] va de 1 à 7 sur l'intervalle de viscosité à pression identique.</b> La viscosité est gouvernée principalement par la teneur en silice : le basalte (~50% SiO₂) est assez fluide pour que les bulles s'échappent en continu, tandis que la rhyolite (~70%) polymérise en un fondu si rigide que les volatils restent dissous jusqu'à la fragmentation. Comme le VEI est logarithmique dans le volume émis, cet intervalle de 1 à 7 est environ un million de fois de différence en matière. C'est aussi pourquoi les volcans dangereux sont les tranquilles : les longs intervalles de repos laissent s'accumuler un magma évolué, riche en gaz et visqueux.`,
      },
      scholar: {
        legend: `Système chambre–conduit avec recharge volumétrique et un seuil de rupture. [[visc]] paramétrise la composition du fondu ; la fragmentation explosive est déclenchée au-dessus d'un seuil de viscosité. [[vei]] croît à la fois avec la surpression stockée et la viscosité.`,
        try: `Cartographie [[vei]] sur le plan ([[visc]], [[pres]]) en forçant des éruptions à différentes pressions. Considère quelle variable physique le modèle omet de façon flagrante, et si son absence rend le modèle optimiste ou pessimiste.`,
        notice: `<b>L'omission est la teneur en volatils dissous — le vrai moteur de l'explosivité, dont la viscosité n'est ici qu'un substitut.</b> La fragmentation se produit quand la surpression des bulles dépasse la résistance à la traction du fondu, gouvernée par le taux de décompression et la solubilité de \\(\\mathrm{H_2O}\\)/\\(\\mathrm{CO_2}\\) (loi de Henry : \\(\\sim\\)4–6 % en masse d'H₂O aux profondeurs rhyolitiques de chambre). Viscosité et teneur en volatils corrèlent via la silice, donc le substitut tient statistiquement tout en manquant le mécanisme. Deux conséquences que le modèle ne peut montrer : la transition plinienne–effusive peut basculer au sein d'une <em>seule</em> éruption à mesure que les conditions du conduit évoluent (Mount St. Helens 1980), et le VEI, fondé sur le volume, sous-estime systématiquement l'impact climatique d'éruptions riches en soufre mais petites — les 20 Mt de SO₂ du Pinatubo refroidirent la planète de 0,5°C malgré un VEI de seulement 6.`,
      },
    },
    seasons: {
      junior: {
        legend: `La Terre (avec son inclinaison) qui orbite le Soleil. Déplace-toi entre les mois et regarde quelle moitié de la Terre s'incline vers le Soleil — cette moitié a l'été.`,
        try: `Fais glisser [[month]] sur une année entière. Quand la moitié nord s'incline vers le Soleil, que dit [[nh]] — et que fait [[sh]] au même moment ?`,
        notice: `<b>C'est l'inclinaison, pas la distance.</b> La distance de la Terre au Soleil change à peine ; ce qui change est quelle moitié s'incline vers le Soleil. Cette moitié reçoit une lumière plus directe et des jours plus longs — l'été — tandis que l'autre a l'hiver. C'est pourquoi les deux hémisphères sont toujours en saisons opposées.`,
      },
      student: {
        legend: `La Terre qui orbite le Soleil avec une inclinaison axiale fixe de 23,5°. L'hémisphère éclairé et les étiquettes des saisons se mettent à jour avec le mois ; l'orbite est dessinée quasi circulaire à dessein.`,
        try: `Porte [[month]] aux solstices de juin et décembre (axe incliné au maximum vers ou loin du Soleil) et aux équinoxes au milieu, en regardant [[nh]] cycler été → automne → hiver → printemps.`,
        notice: `<b>L'inclinaison reste fixe dans l'espace, donc chaque hémisphère s'incline alternativement vers et loin du Soleil.</b> S'incliner vers donne un Soleil plus haut et des jours plus longs — plus de réchauffement — ce qui est l'été. L'orbite quasi circulaire est tout l'enjeu : la distance est quasi constante, donc elle ne peut pas être la cause.`,
      },
      scholar: {
        legend: `Un schéma de l'orbite terrestre à obliquité fixe. La saison suit l'hémisphère sous-solaire ; l'orbite est dessinée quasi circulaire pour refléter la minuscule excentricité.`,
        try: `Localise les solstices et les équinoxes, et note que la saison est fixée par la géométrie axe-Soleil, indépendante des petits changements de distance orbitale.`,
        notice: `<b>L'insolation va comme la constante solaire multipliée par le cosinus de l'angle zénithal du Soleil, multiplié par la durée du jour — et l'inclinaison pilote les deux.</b> L'excentricité (0,017) ne change la distance que de ~3%, une modulation mineure. Sur de longues durées la lente dérive de l'inclinaison, de l'excentricité et de la précession — les cycles de Milankovitch — remélange cette géométrie et rythme les ères glaciaires.`,
      },
    },
    sorting: {
      junior: {
        legend: `Chaque barre est un nombre en attente d'être mis en ordre — barres courtes petites, barres hautes grandes. Appuyer sur un bouton de tri fait réordonner l'ordinateur, pas à pas. [[comps]] compte combien de fois il a comparé deux barres, et [[swaps]] combien de fois il les a déplacées.`,
        try: `Fais glisser [[size]] à 80. Appuie sur [[bubble]] et laisse-le finir — note [[comps]]. Maintenant appuie sur [[merge]] à la même taille et compare.`,
        notice: `<b>Le tri à bulles a besoin d'environ 3 160 comparaisons ; le tri fusion d'environ 400 — près de huit fois moins, pour exactement le même résultat.</b> Le tri à bulles compare les voisins encore et encore, donc le travail croît avec le carré de la liste. Le tri fusion divise le tas en deux, trie chaque moitié, puis fusionne — et diviser à répétition est énormément moins cher. La stratégie que tu choisis compte plus que la vitesse de ton ordinateur : sur un million d'éléments cet écart devient des jours contre des secondes.`,
      },
      student: {
        legend: `Un visualiseur en direct de tris par comparaison. La hauteur de la barre est la valeur ; [[comps]] et [[swaps]] sont comptés pendant que l'algorithme tourne. [[algo]] nomme la méthode en exécution et sa classe asymptotique.`,
        try: `Fais tourner [[bubble]] à [[size]] = 20, 40 et 80, en notant [[comps]] chaque fois. Le compte double-t-il quand la taille double, ou fait-il quelque chose de plus dramatique ? Puis répète avec [[merge]].`,
        notice: `<b>Le compte du tri à bulles quadruple environ quand tu doubles la taille ; celui du tri fusion un peu plus que double.</b> C'est la différence entre \\(\\Theta(n^2)\\) — exactement \\(n(n-1)/2 = 3160\\) comparaisons à \\(n=80\\) — et \\(\\Theta(n\\log n)\\), environ \\(n\\log_2 n \\approx 506\\). L'écart s'élargit sans limite : à un million d'éléments c'est \\(5\\times10^{11}\\) contre \\(2\\times10^{7}\\), environ 25 000 fois. Voilà pourquoi la complexité algorithmique, non la vitesse d'horloge, fixe ce qui est calculatoirement possible.`,
      },
      scholar: {
        legend: `Tris par comparaison instrumentés sur une permutation aléatoire uniforme. [[comps]] est le compte exact des comparaisons, [[swaps]] le compte des écritures — des mesures de coût distinctes que différents matériels pondèrent différemment.`,
        try: `Ajuste la croissance de [[comps]] contre [[size]] pour les deux algorithmes. Puis considère : un algorithme fondé sur les comparaisons pourrait-il battre le taux de croissance du tri fusion, et qu'exigerait-il ?`,
        notice: `<b>Aucun tri par comparaison ne peut faire mieux — \\(\\Omega(n\\log n)\\) est une borne inférieure démontrée, et le tri fusion l'atteint.</b> L'argument est de théorie de l'information : une comparaison rend un bit, il y a \\(n!\\) ordonnancements possibles, donc tout arbre de décision a besoin d'une profondeur \\(\\ge \\log_2(n!) = \\Theta(n\\log n)\\) par Stirling. Trier plus vite exige donc d'abandonner les comparaisons entièrement — radix et counting sort atteignent \\(O(n)\\) en exploitant la structure des clés. Note aussi que [[comps]] et [[swaps]] divergent nettement : sur le matériel moderne, le comportement du cache et la prédiction des branchements comptent souvent plus que ces deux comptes.`,
      },
    },
    ml: {
      junior: {
        legend: `Les quatre groupes de points sont deux types de chose que l'ordinateur doit apprendre à distinguer — regarde bien, le même type est dans des coins <em>opposés</em>. Le fond coloré est l'hypothèse actuelle de l'ordinateur pour chaque point de la carte. À droite se trouve son petit cerveau : entrées, [[hid]] au milieu, une réponse. [[loss]] montre combien il se trompe encore.`,
        try: `Essaie de séparer les deux types avec une seule ligne droite — tu n'y arrives pas. Maintenant mets [[hid]] à 2, appuie sur [[reset]] et regarde [[acc]]. Puis mets [[hid]] à 10, appuie sur [[reset]] et regarde de nouveau.`,
        notice: `<b>Une seule ligne droite ne peut jamais marcher ici, mais avec assez d'unités cachées l'ordinateur plie la frontière dans la bonne forme et [[acc]] monte vers 100%.</b> Personne ne lui a dit quelle forme dessiner. Il est parti d'hypothèses aléatoires et les a simplement ajustées, encore et encore, dans toute direction qui rendait [[loss]] plus petit. Cet ajustement patient — des millions de petites corrections — est tout ce que « apprendre » signifie pour une machine.`,
      },
      student: {
        legend: `Un réseau feed-forward 2-[[hid]]-1 à activations sigmoïdes, entraîné par rétropropagation sur un jeu de données <b>de type XOR</b> : les deux classes occupent des coins diagonalement opposés. La heatmap est la surface de décision actuelle, [[loss]] est l'erreur RMS et [[acc]] le taux de classification.`,
        try: `Mets [[hid]] à 2 et appuie sur [[reset]] plusieurs fois, en notant où [[acc]] se stabilise à chaque tour. Puis mets [[hid]] à 10 et répète. La même architecture atteint-elle toujours la même réponse ?`,
        notice: `<b>Avec 2 unités cachées l'issue est incohérente — certains tours le résolvent, d'autres se bloquent près de 75% — tandis que 10 unités réussissent presque à chaque fois.</b> XOR est le problème canonique <em>non linéairement séparable</em> : aucun hyperplan seul ne divise ces classes, et c'est exactement la limite que Minsky et Papert utilisèrent en 1969 pour montrer que les perceptrons étaient fondamentalement restreints, gelant le domaine pendant plus d'une décennie. Deux unités cachées suffisent théoriquement mais laissent presque aucune marge d'erreur, donc la descente de gradient atterrit souvent dans un mauvais minimum local. Les unités supplémentaires n'ajoutent pas tant de puissance qu'elles n'ajoutent de <em>voies</em> vers la solution.`,
      },
      scholar: {
        legend: `MLP à deux couches, \\(2 \\to H \\to 1\\), sigmoïde partout, entraîné par descente de gradient full-batch avec taux d'apprentissage \\(\\propto\\) [[lr]]. Le jeu de données est quatre clusters gaussiens en configuration XOR ; la heatmap rend \\(\\sigma(W_2^\\top\\sigma(W_1x+b_1)+b_2)\\).`,
        try: `Garde [[hid]] à 2 et re-[[reset]] à répétition, en enregistrant la distribution de la [[acc]] finale. Puis augmente [[hid]] et observe comment cette distribution change. Considère ce que cela implique sur le paysage de la perte plus que sur la capacité représentative.`,
        notice: `<b>La capacité n'est pas la contrainte serrée — c'est l'optimisation. Deux unités cachées peuvent représenter XOR exactement, pourtant elles échouent souvent à le trouver.</b> Les échecs sont de mauvais minima locaux et des points de selle dans un paysage non convexe. Élargir le réseau n'augmente pas l'expressivité ici ; il rend le paysage plus bénin, et dans la limite sur-paramétrée presque tous les minima locaux s'approchent de la valeur globale. C'est pourquoi la pratique moderne favorise des réseaux bien plus grands que la tâche ne l'exige, et pourquoi ils généralisent malgré tout — une contradiction apparente du raisonnement classique biais–variance qui motiva la littérature sur la double descente.`,
      },
    },
    crypto: {
      junior: {
        legend: `Alice à gauche et Bob à droite veulent un nombre secret partagé. L'œil en haut est un <b>espion</b> qui voit absolument tout ce qu'ils envoient. Regarde les nombres voyager à travers, et garde l'œil sur [[key]] à la fin.`,
        try: `Appuie sur [[run]] et suis chaque nombre qui traverse le centre. Puis demande-toi : la [[key]] finale a-t-elle jamais traversé ?`,
        notice: `<b>Non — la clé partagée n'a jamais traversé le fil, pourtant Alice et Bob ont fini tous deux avec le même nombre.</b> Chacun a gardé pour soi un nombre secret et n'a envoyé qu'un mélange brassé. Par la façon dont le brassage fonctionne, combiner son propre secret avec le mélange de l'autre personne donne la même réponse dans les deux sens. L'espion a vu chaque message et ne peut toujours pas le reproduire — ce qui est à peu près ce qui protège les données de ta carte chaque fois que tu achètes quelque chose en ligne.`,
      },
      student: {
        legend: `<b>Échange de clés Diffie–Hellman</b> avec paramètres publics \\(p=23\\), \\(g=5\\). Alice et Bob choisissent chacun un exposant privé, publient \\(g^a \\bmod p\\) et \\(g^b \\bmod p\\), puis élèvent la valeur de l'autre à leur propre exposant. [[step]] parcourt le protocole ; [[key]] est le secret convenu.`,
        try: `Appuie sur [[run]] et note chaque valeur publique qui traverse. En n'utilisant que celles-là et les publics \\(p\\) et \\(g\\), essaie de retrouver l'un des deux exposants privés — puis vérifie ta réponse contre [[key]].`,
        notice: `<b>Les deux parties calculent \\((g^a)^b = (g^b)^a = g^{ab} \\bmod p\\), une valeur jamais transmise.</b> Récupérer \\(a\\) depuis \\(g^a \\bmod p\\) est le <b>problème du logarithme discret</b>. Avec \\(p=23\\) tu peux le résoudre par force brute en 23 essais ; avec un premier de 2048 bits la même recherche est calculatoirement sans espoir. L'asymétrie est tout : l'exponentiation est bon marché, l'inverser ne l'est pas. Note que cela établit un secret partagé entre étrangers mais ne les <em>authentifie</em> pas — le DH pur est entièrement ouvert à une attaque de l'homme du milieu.`,
      },
      scholar: {
        legend: `DH sur \\(\\mathbb{Z}_p^*\\) avec \\(p=23\\), \\(g=5\\) un générateur. La sécurité repose sur l'hypothèse <b>Diffie–Hellman calculatoire</b> ; l'adversaire passif observe \\((g, p, g^a, g^b)\\) et doit produire \\(g^{ab}\\).`,
        try: `Note que \\(p=23\\) rend le log discret trivialement cassable par recherche exhaustive. Estime la taille de groupe nécessaire pour résister à l'index calculus, et oppose-la à la taille de clé qu'un groupe à courbe elliptique exigerait pour une sécurité équivalente.`,
        notice: `<b>Le DH sur corps finis a besoin de ~2048–3072 bits pour ~112–128 bits de sécurité ; une courbe elliptique n'en exige que ~256.</b> L'écart existe parce que \\(\\mathbb{Z}_p^*\\) admet l'index calculus sous-exponentiel, \\(L_p[1/3, 1.923]\\), tandis que les courbes elliptiques générales n'admettent que des attaques génériques \\(O(\\sqrt{n})\\). La sécurité exige aussi un sous-groupe d'ordre premier — Logjam (2015) montra que des premiers partagés de 512 bits plus un downgrade au grade export cassaient le vrai TLS à grande échelle. Tout cela tombe face à un ordinateur quantique assez grand via l'algorithme de Shor, et c'est pourquoi l'accord de clés post-quantique est passé à des constructions sur réseaux comme ML-KEM.`,
      },
    },
    complexity: {
      junior: {
        legend: `Chaque courbe montre combien de <b>travail</b> il faut à un type d'algorithme différent à mesure que le problème grandit. Les plates le remarquent à peine ; la raide gicle hors du haut du graphe. [[ops]] est le travail nécessaire pour la taille actuelle, et [[cls]] nomme la méthode sélectionnée.`,
        try: `Mets [[algo]] à 5 — le type le plus raide. Maintenant fais glisser [[n]] lentement de 2 jusqu'à 22, en regardant [[ops]] tout du long.`,
        notice: `<b>Le travail explose de 4 à plus de quatre millions — pour un problème qui n'a grandi que de 2 éléments à 22.</b> Chaque élément supplémentaire <em>double</em> le travail, donc peu importe la vitesse de ton ordinateur : ajoute encore trente éléments et aucune machine qui existera jamais ne pourrait finir. Certains problèmes ne sont pas difficiles parce qu'on n'a pas encore trouvé l'astuce maligne ; ils sont difficiles par la façon dont le travail croît. Ramène [[algo]] à 1 et regarde le même problème devenir trivial.`,
      },
      student: {
        legend: `Courbes de croissance pour cinq classes de complexité, de \\(O(\\log n)\\) à \\(O(2^n)\\), tracées contre la taille d'entrée. [[n]] déplace le point d'évaluation, [[algo]] sélectionne une classe, et [[ops]] rapporte le compte d'opérations à l'\\(n\\) actuel.`,
        try: `À [[n]] = 22, porte [[algo]] de 1 à 5 et enregistre [[ops]] chaque fois. Puis calcule combien de temps de plus prendrait \\(O(2^n)\\) à \\(n = 60\\), en supposant un milliard d'opérations par seconde.`,
        notice: `<b>À \\(n=22\\) les classes vont de 5 opérations à 4 194 304 — et à \\(n=60\\), \\(2^n\\) est \\(1{,}15\\times10^{18}\\) opérations, environ 36 ans à un milliard par seconde.</b> C'est pourquoi les classes de complexité dominent le calcul pratique : les gains matériels multiplient ta vitesse par une constante, mais une exponentielle avale entière n'importe quelle constante. Doubler la vitesse du CPU achète exactement <em>un</em> élément d'entrée de plus sur un algorithme \\(O(2^n)\\). Note le revers — pour un \\(n\\) petit, un algorithme exponentiel à constante minuscule peut vraiment battre un « meilleur ».`,
      },
      scholar: {
        legend: `Croissance asymptotique de \\(\\log n\\), \\(n\\), \\(n\\log n\\), \\(n^2\\) et \\(2^n\\). [[ops]] évalue la classe sélectionnée à [[n]] ; les intersections illustrent que la dominance asymptotique ne dit rien du comportement à petit \\(n\\).`,
        try: `Identifie où les courbes \\(n^2\\) et \\(2^n\\) se croisent, et note laquelle est la moins chère sous ce point. Puis considère : un algorithme \\(O(n^{100})\\) appartient-il à la même catégorie pratique que \\(O(n\\log n)\\), puisque les deux sont polynomiaux ?`,
        notice: `<b>\\(n^2\\) bat \\(2^n\\) seulement jusqu'à \\(n \\approx 4\\) ; pourtant \\(O(n^{100})\\) est « efficace » selon la définition formelle et totalement inutile en pratique.</b> La ligne polynomial/exponentiel est la <b>thèse de Cobham–Edmonds</b> — une frontière théorique robuste (close par composition, indépendante du modèle de machine) qui est malgré tout un mauvais substitut de la faisabilité. Si \\(\\text{P} = \\text{NP}\\) demande si vérification et découverte sont également difficiles, et reste ouvert. En pratique les instances difficiles sont souvent rares : les solveurs SAT expédient couramment des problèmes industriels à des millions de variables, parce que la complexité du pire cas décrit un adversaire, non les entrées que tu rencontres réellement.`,
      },
    },
    life: {
      junior: {
        legend: `Chaque carré est une <b>cellule</b> vivante ou morte. À chaque génération, toutes les cellules regardent leurs huit voisins et suivent la même minuscule règle : trop peu de voisins et une cellule meurt de solitude, trop et elle meurt de surpeuplement, juste comme il faut et une nouvelle naît. [[gen]] compte les tours.`,
        try: `Appuie sur [[random]] pour éparpiller des cellules vivantes partout, puis regarde [[alive]] pendant une minute sans rien toucher.`,
        notice: `<b>Le chaos se range de lui-même en formes ordonnées et répétées — des blocs immobiles, de petits motifs qui clignotent pour toujours, et de petits planeurs qui marchent sur l'écran.</b> Personne n'a programmé un bloc ou un planeur ; ils tombent simplement de l'unique règle sur les voisins. Appuie sur [[clear]] puis sur [[glider]] pour en regarder un seul marcher tout seul. L'ordre qui émerge de règles très simples sans personne aux commandes s'appelle l'<b>émergence</b>, et c'est ainsi que des colonies de fourmis, des nuées et tes propres cellules s'organisent.`,
      },
      student: {
        legend: `Le <b>Jeu de la vie</b> de Conway sur une grille qui s'enroule (toroïdale). La règle est B3/S23 : une cellule morte avec exactement 3 voisins vivants naît, une vivante survit avec 2 ou 3, tout le reste meurt. [[gen]] est le compte des pas, [[alive]] la population de cellules vivantes. Clique un carré pour le commuter.`,
        try: `Appuie sur [[random]] et suis [[alive]] pendant quelques centaines de générations. Se range-t-il, et à peu près quelle fraction de la population initiale survit ? Puis [[clear]] et place un seul [[glider]].`,
        notice: `<b>Une soupe aléatoire s'effondre en une population basse et quasi constante de natures mortes et d'oscillateurs, typiquement seulement quelques pour cent de la grille.</b> Pourtant la même règle soutient un planeur qui voyage d'une cellule en diagonale toutes les quatre générations. Life est <b>Turing-complet</b> : les planeurs peuvent encoder des signaux, et les collisions entre eux construisent des portes logiques, donc tout calcul peut en principe tourner dans cette grille. Deux états et une règle sur les voisins suffisent pour le calcul universel.`,
      },
      scholar: {
        legend: `Automate cellulaire à deux états, externe-totalistique B3/S23 sur \\(\\mathbb{Z}^2\\) avec conditions aux bords périodiques et voisinage de Moore. [[gen]] indexe la mise à jour parallèle ; [[alive]] est la population.`,
        try: `Compare le comportement de stabilisation et la densité finale à partir de graines [[random]] répétées. Considère ce que tu devrais observer pour prévoir à l'avance si une configuration donnée s'éteint un jour.`,
        notice: `<b>Tu ne pourrais pas le prévoir — la question est formellement indécidable.</b> Life est Turing-complet (Berlekamp–Conway–Guy ; suivirent des constructeurs universels explicites), donc demander si une configuration arbitraire finit par se stabiliser équivaut au problème de l'arrêt. Les soupes aléatoires convergent de façon fiable vers une densité proche de 0,029 avec une cendre de natures mortes et de blinkers, pourtant aucun raccourci n'existe pour le cas général : l'automate est <em>calculatoirement irréductible</em>, et le simuler pas à pas est la façon la plus rapide de connaître son futur. Une règle énoncée en une phrase contient un comportement qu'aucune théorie ne peut comprimer.`,
      },
    },
    dna: {
      junior: {
        legend: `L'échelle torsadée est une <b>molécule d'ADN</b>. Ses barreaux sont des paires de lettres — A s'unit toujours à T, et C toujours à G. La fourche qui voyage le long du centre l'ouvre comme une fermeture éclair, et des lettres fraîches s'enclenchent sur chaque moitié pour construire deux copies complètes. Le violet marque une <b>erreur</b> de copie.`,
        try: `Appuie sur [[reset]] et regarde défiler une copie complète, en gardant l'œil sur les lettres qui apparaissent sur les nouveaux brins. Peux-tu prédire chaque nouvelle lettre avant qu'elle n'atterrisse ?`,
        notice: `<b>Oui — chaque nouvelle lettre est forcée. A ne peut s'apparier qu'avec T, C seulement avec G, donc chaque moitié de l'échelle tient des instructions complètes pour reconstruire l'autre.</b> C'est là tout le secret de l'hérédité : divise la molécule et tu as automatiquement deux copies. Regarde cependant [[errors]] — de temps en temps la mauvaise lettre se glisse. Ces rares erreurs sont des <b>mutations</b>, et sans elles l'évolution n'aurait rien sur quoi travailler.`,
      },
      student: {
        legend: `Une fourche de réplication qui ouvre une double hélice. Les bases s'apparient par complémentarité (A–T, C–G) donc chaque brin parental sert de matrice pour un nouveau — réplication <b>semi-conservative</b>. [[speed]] fixe la vitesse de la fourche, [[pairs]] compte les bases copiées et [[errors]] compte les erreurs d'incorporation, surlignées en violet.`,
        try: `Fais tourner une réplication complète et compare [[errors]] à [[pairs]] pour estimer le taux d'erreur de cette simulation. Puis change [[speed]] et répète — aller plus vite la rend-elle moins exacte ici ?`,
        notice: `<b>Le taux d'erreur reste autour de 4% quelle que soit la vitesse de la fourche — et 4% est environ cent millions de fois pire que la réalité.</b> L'exagération est délibérée, pour que les erreurs soient visibles. La vraie ADN polymérase incorpore mal environ 1 base sur \\(10^4\\)–\\(10^5\\), puis corrige avec une exonucléase 3′→5′ et passe les restes à la réparation des mésappariements, donnant un taux final proche de 1 sur \\(10^9\\). Copie 3,2 milliards de bases à 4% et tu détruirais le génome en une seule division ; c'est la fidélité, non la copie, le vrai problème d'ingénierie.`,
      },
      scholar: {
        legend: `Réplication semi-conservative schématique à une seule fourche. L'appariement de Watson–Crick (A–T deux liaisons hydrogène, G–C trois) fait de chaque brin une matrice ; [[pairs]] suit l'incorporation et [[errors]] signale les mésappariements. L'asymétrie brin directeur/retardé et les fragments d'Okazaki ne sont pas représentés.`,
        try: `Estime le taux d'erreur par base à partir de [[errors]]/[[pairs]], puis calcule le nombre attendu de mutations par duplication du génome humain à ce taux, et compare à l'observé ~1–2 par division.`,
        notice: `<b>Au taux de cette simulation tu accumulerais ~10⁸ erreurs par copie du génome ; la valeur réelle est une ou deux.</b> L'écart est comblé multiplicativement : la fidélité de sélection de la base (~10⁻⁵), le proofreading 3′→5′ (~10²×), et la réparation des mésappariements (~10²–10³×) se composent à ~10⁻⁹–10⁻¹⁰ par base. Pourtant le taux n'est pas minimisé — il est <em>accordé</em>. Zéro mutation signifie zéro adaptation, et les lignées à réparation des mésappariements désactivée (tumeurs déficientes en MMR, bactéries hypermutatrices) montrent que l'optimum se situe à une valeur non nulle fixée par l'équilibre entre charge délétère et apport adaptatif.`,
      },
    },
    evolution: {
      junior: {
        legend: `Chaque point est un <b>animal</b>, et sa couleur est le trait qu'il a hérité. Le fond est l'environnement où il doit se camoufler, et il dérive lentement vers une couleur différente avec le temps. Les animaux bien camouflés sont dessinés plus grands — ce sont ceux qui ont le plus de chances d'avoir des petits. [[fit]] montre à quel point le groupe s'adapte à l'environnement alentour.`,
        try: `Fais glisser [[mut]] jusqu'à 0 et laisse tourner pendant cent générations. Regarde [[div]], puis continue de regarder [[fit]] tandis que la couleur du fond continue de dériver.`,
        notice: `<b>Sans mutation la population devient toute d'une couleur — [[div]] descend à presque zéro — et puis, tandis que le fond s'éloigne, [[fit]] s'effondre et ne peut se reprendre.</b> La sélection seule ne peut que choisir dans la variété qui existe déjà ; une fois épuisée, il ne reste rien d'où choisir. C'est pourquoi la mutation compte : l'erreur aléatoire d'aujourd'hui est la seule chance de demain de survivre à un monde changé. Remonte [[mut]] et regarde la population remonter.`,
      },
      student: {
        legend: `60 individus portent un seul trait continu (teinte). La fitness baisse avec la distance à l'optimum de l'environnement, qui dérive avec le temps. La reproduction est un échantillonnage pondéré par la fitness mise à l'échelle par [[sel]], la descendance étant perturbée par [[mut]]. [[div]] est l'écart-type du trait dans la population.`,
        try: `Mets [[mut]] à 0 et fais tourner : regarde [[div]] s'effondrer puis [[fit]] décroître à mesure que l'optimum dérive. Puis mets [[sel]] à 0 avec [[mut]] élevée, et vois si [[fit]] monte jamais.`,
        notice: `<b>Aucune manette seule ne fonctionne : sans mutation la population épuise la variation, sans sélection elle ne se concentre jamais sur l'optimum.</b> L'évolution a besoin des deux — une source de variation et un filtre. C'est la substance du <b>théorème fondamental de Fisher</b> : le taux d'augmentation de la fitness moyenne égale la variance génétique additive en fitness, donc une population à variance nulle ne peut s'adapter à aucune vitesse. Note aussi que [[sel]] élevée n'est pas simplement mieux : elle dépouille la variation plus vite, laissant la population fragile quand l'environnement bouge.`,
      },
      scholar: {
        legend: `Reproduction proportionnelle à la fitness sur un trait continu unidimensionnel avec un optimum qui dérive. [[sel]] met à l'échelle l'intensité de la sélection, [[mut]] la variance mutationnelle par génération, et [[div]] rapporte l'écart-type du trait de la population — un substitut de la variance génétique additive.`,
        try: `Explore le plan \\(([[sel]], [[mut]])\\) et trouve où la [[fit]] soutenue est maximisée contre l'optimum qui dérive. Vérifie si le meilleur réglage est la sélection la plus haute disponible, et identifie où la population s'éteint en termes de fitness.`,
        notice: `<b>L'optimum est intermédiaire dans les deux paramètres — la sélection maximale est activement nuisible.</b> C'est l'équilibre classique mutation–sélection : la variance d'équilibre croît comme \\(\\sigma^2 \\approx V_m/s\\), donc la sélection dure érode la variance même que l'adaptation exige. Avec un optimum en mouvement la population reste en retard de \\(\\propto k/s\\) pour un taux de dérive \\(k\\), et le théorème de Fisher borne le taux de poursuite atteignable par la variance additive. Trop de mutation, cependant, franchit le <b>seuil d'erreur d'Eigen</b>, où la sélection ne peut plus maintenir l'information contre la charge mutationnelle et la population se dissout loin du pic entièrement.`,
      },
    },
    ecosystem: {
      junior: {
        legend: `Les points verts sont des <b>plantes</b>, les orange des <b>lapins</b> qui les mangent, et les rouges des <b>renards</b> qui mangent les lapins. Tout a besoin de nourriture pour rester vivant et se reproduire. Les trois compteurs suivent combien de chacun sont vivants en ce moment.`,
        try: `Regarde les trois nombres un moment — ils ne tiennent jamais en place. Maintenant fais glisser [[pred]] jusqu'à 10 et continue de regarder [[herb]] puis [[preds]].`,
        notice: `<b>Des renards super-efficaces mangent presque tous les lapins — et puis les renards aussi meurent de faim.</b> Les prédateurs se détruisent eux-mêmes en étant trop bons à la chasse. Note aussi que les nombres montent et descendent à <em>tour de rôle</em> : beaucoup de lapins, puis beaucoup de renards, puis peu de lapins, puis peu de renards, encore et encore. Rien ne coordonne cela — cela tombe de qui mange qui. Tire un fil dans un réseau alimentaire et tout le reste bouge.`,
      },
      student: {
        legend: `Une chaîne alimentaire fondée sur des agents : les plantes repoussent à un taux fixé par [[growth]], les herbivores fourragent et se reproduisent quand leur énergie est assez haute, les prédateurs chassent les herbivores avec un succès mis à l'échelle par [[pred]]. Chaque agent porte un budget énergétique et meurt de faim sans nourriture.`,
        try: `Laisse les valeurs par défaut et regarde les trois compteurs pendant quelques minutes, en notant lequel culmine en premier. Puis pousse [[pred]] à 10 et regarde ce qui arrive à [[herb]] et [[preds]] à tour de rôle.`,
        notice: `<b>Les populations oscillent avec les prédateurs qui culminent <em>après</em> les proies, et les prédateurs trop efficaces déclenchent un effondrement qui les emporte avec leur nourriture.</b> C'est la dynamique de <b>Lotka–Volterra</b> : les proies croissent, les prédateurs suivent, les proies s'effondrent, les prédateurs suivent de nouveau — le décalage est ce qui la fait cycler plutôt que se stabiliser. La leçon se généralise mal pour la conservation : un prédateur qui maximise le taux de capture à court terme peut piloter sa propre extinction, et c'est exactement pourquoi les couples prédateur–proie réels ne persistent qu'avec des refuges, et pourquoi retirer un prédateur apical peut déclencher une cascade le long de tout un réseau.`,
      },
      scholar: {
        legend: `Système tri-trophique fondé sur les individus avec budgets énergétiques explicites. L'apport de ressource est fixé par [[growth]], la réponse fonctionnelle par [[pred]] ; la démographie émerge de rencontres locales plutôt que d'une équation de champ moyen.`,
        try: `Cartographie l'issue à travers le plan \\(([[growth]], [[pred]])\\). Cherche en particulier si <em>augmenter</em> [[growth]] déstabilise jamais le système plutôt que de soutenir plus de vie, et note où les cycles se transforment en extinctions.`,
        notice: `<b>Enrichir le système peut le déstabiliser : plus de croissance des plantes pilote des oscillations plus sauvages dont les minima touchent zéro, balayant le niveau supérieur.</b> C'est le <b>paradoxe de l'enrichissement</b> (Rosenzweig, 1971) — ajouter des ressources élève l'équilibre mais le déstabilise, puisque l'amplitude du cycle limite croît jusqu'à ce qu'un minimum stochastique cause l'extinction. Fondé sur les individus, le modèle montre aussi ce que le Lotka–Volterra de champ moyen ne peut pas : la stochasticité démographique aux petites tailles de population signifie que l'extinction est un événement <em>probabiliste</em> bien avant que l'équilibre déterministe n'atteigne zéro.`,
      },
    },
    astro: {
      junior: {
        legend: `Une seule étoile qui vit sa vie entière, prodigieusement accélérée. [[age]] suit son avancement et [[stage]] nomme ce qu'elle est devenue. Sa couleur et sa taille changent à mesure qu'elle vieillit — et sa façon de finir ne dépend que d'une seule chose que tu contrôles.`,
        try: `Mets [[mass]] à 1 (une étoile comme notre Soleil) et appuie sur [[reset]], puis regarde jusqu'à la fin. Maintenant mets [[mass]] à 20 et regarde de nouveau.`,
        notice: `<b>L'étoile de taille solaire se gonfle, souffle ses couches externes et laisse une minuscule naine blanche. La lourde explose en supernova et laisse un trou noir.</b> Tout le destin d'une étoile est fixé à la naissance par sa masse — rien d'autre. Et les grosses meurent absurdement vite : les étoiles les plus lourdes brûlent leur carburant si effrénément qu'une étoile de 20 masses solaires vit quelques millions d'années tandis que le Soleil en fait dix milliards. Être plus grande te donne plus de carburant et une vie bien plus courte.`,
      },
      student: {
        legend: `Évolution stellaire pilotée par la seule [[mass]]. [[stage]] défile entre séquence principale, géante rouge, puis un point final dépendant de la masse : nébuleuse planétaire et naine blanche sous ~8 M☉, ou supergéante, supernova et une étoile à neutrons ou un trou noir au-dessus.`,
        try: `Compare les points finaux à [[mass]] = 1, 10 et 20, et note combien de temps chacune passe sur la séquence principale. Trouve la [[mass]] où l'issue passe de naine blanche à supernova.`,
        notice: `<b>La bifurcation se situe près de 8 M☉, et la durée de vie s'effondre comme environ \\(1/M^3\\) — dix milliards d'années pour le Soleil, dix millions pour une étoile de 10 M☉.</b> La luminosité croît fortement avec la masse (\\(L \\propto M^{3.5}\\)) tandis que la réserve de carburant ne croît que comme \\(M\\), donc la durée de vie \\(\\propto M/L \\sim M^{-2.5}\\). Sous la bifurcation, la pression de dégénérescence des électrons arrête l'effondrement à la <b>limite de Chandrasekhar</b> de 1,4 M☉ et une naine blanche survit ; au-dessus, le cœur dépasse ce que la dégénérescence peut soutenir et s'effondre catastrophiquement. Chaque élément plus lourd que le fer dans ton corps fut forgé dans le second type de mort.`,
      },
      scholar: {
        legend: `Évolution schématique d'étoile unique paramétrée par la [[mass]] initiale, avec une durée de vie sur la séquence principale qui croît comme \\(\\propto M^{-3}\\) dans ce modèle. Métallicité, perte de masse, rotation et binarité ne sont pas représentées.`,
        try: `Localise la frontière naine-blanche / supernova du modèle et sa frontière étoile-à-neutrons / trou noir. Considère de combien chacune des variables omises déplacerait ces seuils dans une population réelle.`,
        notice: `<b>Les seuils sont bien moins nets que ne l'implique tout modèle à paramètre unique — perte de masse et métallicité les déplacent de plusieurs masses solaires.</b> La relation observée est \\(L \\propto M^{3.5}\\) donnant \\(\\tau \\propto M^{-2.5}\\) ; l'effondrement du cœur exige de dépasser la masse de Chandrasekhar \\(M_{Ch} = 1.44\\,(\\mu_e/2)^{-2}\\) M☉, et la division étoile-à-neutrons/trou-noir dépend de l'équation d'état nucléaire mal contrainte (limite de Tolman–Oppenheimer–Volkoff, ~2,2–2,9 M☉). Les étoiles à faible métallicité retiennent bien plus de masse et s'effondrent directement sans supernova brillante, et comme la plupart des étoiles massives sont dans des binaires en interaction, les tracés d'étoile unique décrivent une minorité des cas réels. Les catalogues d'ondes gravitationnelles fournissent désormais les statistiques de population que les seuls modèles stellaires ne pouvaient pas.`,
      },
    },
    cosmology: {
      junior: {
        legend: `L'univers entier en expansion, avec les galaxies emportées à mesure que l'espace lui-même s'étire. [[age]] compte les milliards d'années depuis le Big Bang. Deux ingrédients rivalisent : la <b>matière</b>, dont la gravité rassemble tout, et l'<b>énergie noire</b>, qui l'écarte.`,
        try: `Fais glisser [[lam]] jusqu'à 0 pour que la gravité n'ait aucun adversaire, et regarde ce qui arrive à l'expansion. Puis remonte-la à 69 et regarde la différence.`,
        notice: `<b>Sans énergie noire l'expansion ralentit ; avec elle, l'expansion accélère — l'espace s'envole de plus en plus vite.</b> Les astronomes s'attendaient à la première et trouvèrent la seconde en 1998, en remarquant que les supernovae lointaines étaient plus faibles qu'elles n'auraient dû l'être. Environ 69% de tout est cette énergie noire, et personne ne sait ce que c'est. Le plus grand ingrédient de l'univers est un mystère complet, et il a été découvert par hasard.`,
      },
      student: {
        legend: `Un univers FLRW en expansion avec [[mat]] et [[lam]] comme paramètres de densité. [[h]] est le paramètre de Hubble au redshift actuel, qui suit \\(H(z) = H_0\\sqrt{\\Omega_m(1+z)^3 + \\Omega_\\Lambda}\\), et [[age]] le temps cosmique écoulé.`,
        try: `Mets [[lam]] = 0 avec [[mat]] = 100 et note le comportement de l'expansion et [[age]]. Puis utilise les valeurs standard (31 et 69). Quelle combinaison donne un univers plus vieux, et pourquoi cela compte-t-il observationnellement ?`,
        notice: `<b>Un univers de matière seule est plus jeune que les plus vieilles étoiles connues — la contradiction qui rendit l'énergie noire inévitable.</b> La densité de matière se dilue comme \\((1+z)^3\\) tandis que \\(\\Omega_\\Lambda\\) reste constante, donc la gravité domina tôt (décélérant) et l'énergie noire prit le dessus autour de \\(z \\approx 0.7\\), commutant l'expansion en accélération. Avec \\(H_0 = 70\\) et matière seule, l'âge est \\(\\tfrac{2}{3}H_0^{-1} \\approx 9.3\\) Gyr, plus jeune que les amas globulaires de 12 Gyr. Ajouter \\(\\Lambda\\) l'étire à 13,8 Gyr et résout le paradoxe — l'une de plusieurs lignes indépendantes convergeant vers la même conclusion.`,
      },
      scholar: {
        legend: `Cosmologie FLRW plate avec \\(H(z) = H_0\\sqrt{\\Omega_m(1+z)^3+\\Omega_\\Lambda}\\), \\(H_0 = 70\\) km/s/Mpc. [[mat]] et [[lam]] sont réglés indépendamment ici, donc le modèle n'impose pas \\(\\Omega_m + \\Omega_\\Lambda = 1\\).`,
        try: `Règle des combinaisons qui violent la planéité et note que le modèle calcule quand même une réponse. Puis considère ce que \\(\\Omega_{\\text{total}} \\ne 1\\) impliquerait physiquement, et pourquoi la planéité quasi parfaite observée est elle-même un problème qui exige explication.`,
        notice: `<b>La planéité est instable : tout écart à \\(\\Omega = 1\\) croît avec le temps, donc la planéité d'aujourd'hui à 0,4% près exige un réglage fin absurde à l'ère de Planck — environ 1 part sur \\(10^{60}\\).</b> C'est le problème de la planéité, et avec le problème de l'horizon il a motivé l'<b>inflation</b>, qui pousse \\(\\Omega \\to 1\\) exponentiellement et sème la structure à partir de fluctuations quantiques. Le point de tension actuel du cadre est la <b>tension de Hubble</b> : l'inférence depuis l'univers primitif via le CMB donne \\(H_0 \\approx 67.4\\), les mesures locales de l'échelle des distances donnent \\(\\approx 73\\), et l'écart à \\(\\sim5\\sigma\\) a résisté à toute systématique proposée. Pendant ce temps \\(\\Lambda\\) elle-même reste inexpliquée — l'énergie du vide de la QFT dépasse la valeur observée jusqu'à 120 ordres de grandeur.`,
      },
    },
    neuro: {
      junior: {
        legend: `Un petit réseau de <b>neurones</b> — des cellules cérébrales — reliés par leurs connexions. Quand l'un accumule assez de charge, il s'active, envoyant une impulsion courir vers ses voisins, qui peuvent alors s'activer à leur tour. [[rate]] compte les activations par seconde et [[pot]] montre la charge dans une cellule.`,
        try: `Mets [[stim]] à 0 et appuie sur [[fire]] une fois, en regardant jusqu'où l'impulsion voyage. Maintenant mets [[stim]] à 10 et regarde le réseau un moment.`,
        notice: `<b>Une pichenette envoie une seule impulsion qui s'évanouit ; une entrée forte et constante fait bavarder tout le réseau sans arrêt.</b> Aucun neurone seul ne décide de rien — chacun ne fait que sommer ce qu'il reçoit et s'active si le total est assez grand. Pensée, mémoire et mouvement sont tous bâtis à partir de cet unique tour répété sur 86 milliards de cellules. Ton cerveau fait tourner toute l'opération sur environ 20 watts, à peu près une ampoule faible.`,
      },
      student: {
        legend: `Un réseau à pics simplifié. Chaque nœud intègre l'entrée de ses voisins et s'active quand il franchit le seuil, propageant l'activité le long de ses connexions. [[stim]] est la poussée externe, [[rate]] le taux d'activation de la population et [[pot]] le potentiel de membrane d'une cellule.`,
        try: `Augmente [[stim]] graduellement depuis 0 et regarde [[rate]]. L'activité croît-elle de façon lisse en proportion, ou y a-t-il un point où le comportement du réseau change de caractère ?`,
        notice: `<b>L'activité reste près de zéro jusqu'à une poussée critique, puis le réseau bascule en une activation soutenue auto-propagée — un seuil, pas une pente.</b> C'est l'<em>excitation récurrente</em> : une fois qu'assez de neurones s'activent, leur entrée mutuelle soutient l'activité sans autre poussée externe, et c'est ainsi que la mémoire de travail retient l'information pendant des secondes. La même propriété est dangereuse, car l'excitation récurrente incontrôlée est précisément ce qu'est une crise d'épilepsie. Le cortex réel se tient tout juste sous ce point avec de puissants interneurones inhibiteurs — seulement ~20% des cellules, mais assez pour tenir l'équilibre.`,
      },
      scholar: {
        legend: `Unités intègre-et-tire sur un graphe récurrent creux, avec [[stim]] comme poussée externe tonique. [[rate]] rapporte l'activité de la population ; le modèle est purement excitateur, sans population inhibitrice.`,
        try: `Caractérise la transition dans [[rate]] à mesure que [[stim]] augmente. Considère ce qu'implique l'absence d'inhibition pour la stabilité de l'état de haute activité, et ce qui changerait avec une population inhibitrice équilibrée.`,
        notice: `<b>Un réseau récurrent purement excitateur n'a que deux états stables — silencieux ou saturé — et c'est l'omission centrale du modèle.</b> Le cortex réel opère dans l'<b>état équilibré</b>, où de grands courants excitateurs et inhibiteurs s'annulent presque, laissant une petite poussée nette fluctuante. Cela produit l'activation irrégulière, proche de Poisson, observée in vivo, donne une réactivité rapide (l'équilibre peut être rompu plus vite que toute constante de temps de membrane), et rend une courbe \\(f\\)–\\(I\\) approximativement linéaire au lieu d'un échelon. Le régime équilibré se tient aussi près de la criticité, où les avalanches neuronales suivent une loi de puissance d'exposant \\(-3/2\\) — une configuration qui maximise la gamme dynamique et la transmission de l'information, et que ce modèle ne peut atteindre.`,
      },
    },
    neuron: {
      junior: {
        legend: `Une cellule cérébrale, la trace montrant la tension en son intérieur instant par instant. La ligne pointillée est le <b>seuil</b>. [[v]] est la tension actuelle, [[state]] dit si elle est au repos ou en activation, et [[spikes]] compte les impulsions.`,
        try: `Monte [[cur]] très lentement depuis 0, un cran à la fois, en regardant [[v]] et [[state]]. Trouve le point exact où la cellule commence à s'activer — puis va un cran au-delà.`,
        notice: `<b>Sous le seuil, absolument rien ne se passe. Franchis-le et la cellule tire un pic à pleine grandeur — et pousser plus fort ne rend pas le pic plus grand.</b> C'est l'activation <b>tout-ou-rien</b> : un neurone n'a aucun moyen d'envoyer un « demi » signal. Comme chaque pic est identique, le message ne peut pas tenir dans leur taille — il doit tenir dans la <em>fréquence</em> à laquelle ils arrivent. Un toucher léger et une forte pression se ressentent différents par le taux de pics, non par la force du pic.`,
      },
      student: {
        legend: `Un neurone de FitzHugh–Nagumo : une variable rapide de tension et une lente de récupération, le système minimal reproduisant l'excitabilité. La trace est le potentiel de membrane en fonction du temps, avec le seuil d'activation marqué. [[cur]] injecte un courant constant ; [[spikes]] compte les événements.`,
        try: `Monte [[cur]] lentement et localise la valeur où l'activation commence. Puis compare l'<em>amplitude</em> du pic juste au-dessus du seuil avec l'amplitude à [[cur]] = 20, et compare la <em>fréquence</em> d'activation aux deux mêmes réglages.`,
        notice: `<b>L'amplitude est essentiellement identique aux deux courants ; seule la fréquence change — la cellule encode l'intensité dans le taux, non dans la taille.</b> L'apparition est une <b>bifurcation de Hopf</b> : le point fixe de repos perd sa stabilité et un cycle limite apparaît, donc l'oscillation commence à fréquence non nulle. La variable de récupération est ce qui rend le pic auto-terminant et impose la période réfractaire, qui limite l'activation près de 1 kHz et rend la propagation unidirectionnelle. Le modèle de 1952 de Hodgkin et Huxley dériva tout cela de conductances réelles de sodium et de potassium ; FitzHugh–Nagumo le dépouille à deux équations en gardant le comportement qualitatif intact.`,
      },
      scholar: {
        legend: `Dynamique de FitzHugh–Nagumo, \\(\\dot v = v - v^3/3 - w + I\\), \\(\\dot w = \\epsilon(v + a - bw)\\), une réduction planaire de Hodgkin–Huxley qui sépare la tension rapide de la récupération lente. [[cur]] est le courant injecté \\(I\\).`,
        try: `Localise l'\\(I\\) critique à laquelle l'activation répétitive commence et examine la fréquence juste au-dessus. Détermine si la fréquence d'apparition est nulle ou finie, et identifie quelle classe de bifurcation cela implique.`,
        notice: `<b>L'activation commence à une fréquence finie, identifiant une bifurcation de Hopf sous-critique — un neurone de Classe II dans la classification de Hodgkin.</b> Les cellules de Classe II ont une courbe \\(f\\)–\\(I\\) discontinue et agissent comme des résonateurs, répondant préférentiellement à une entrée proche de leur fréquence intrinsèque ; les cellules de Classe I naissent au contraire via un nœud-col sur un cercle invariant (SNIC), s'activent arbitrairement lentement à l'apparition, et se comportent comme des intégrateurs. La distinction n'est pas académique : elle détermine les courbes de réponse de phase, et donc si une population se synchronise ou se désynchronise sous entrée partagée — le substrat mathématique des oscillations corticales et de la synchronie pathologique dans la maladie de Parkinson et l'épilepsie.`,
      },
    },
    memory: {
      junior: {
        legend: `Deux neurones se rencontrant à une <b>synapse</b>, la jonction où l'un passe des signaux à l'autre. [[w]] est la force de cette jonction en ce moment — une forte passe les messages facilement, une faible à peine. [[last]] rapporte ce qui vient de lui arriver.`,
        try: `Appuie sur [[ltp]] plusieurs fois et regarde [[w]] monter. Maintenant appuie sur [[ltd]] plusieurs fois et regarde-la descendre. Les deux boutons activent les deux mêmes cellules — la seule différence est laquelle passe en premier.`,
        notice: `<b>Activer l'émetteur <em>juste avant</em> le récepteur renforce la connexion ; l'activer juste après l'affaiblit. Mêmes cellules, mêmes signaux — seul l'ordre a changé.</b> Cette minuscule asymétrie est la façon dont les cerveaux apprennent cause et effet : si A arrive régulièrement avant B, le lien A→B grandit, parce que A pourrait causer B. Inverse l'ordre et le cerveau conclut que A est sans rapport et élague le lien. L'apprentissage, au fond, est de la comptabilité à l'échelle du millimètre sur ce qui est venu avant.`,
      },
      student: {
        legend: `Une seule synapse sous <b>plasticité dépendante du temps des pics</b>. [[ltp]] active le présynaptique avant le postsynaptique (\\(\\Delta t < 0\\)) et [[ltd]] inverse l'ordre. [[w]] suit le poids synaptique et [[last]] rapporte le signe et la magnitude du dernier changement.`,
        try: `Monte [[w]] aussi haut que tu peux avec des [[ltp]] répétés, puis essaie de le pousser encore plus haut. Puis varie [[rate]] et vérifie si la taille de chaque changement dépend de la fréquence à laquelle tu stimules.`,
        notice: `<b>Le poids sature — il ne peut croître sans limite, et chaque couplage près du plafond achète moins que le précédent.</b> Sans une telle limite, l'apprentissage hebbien est instable : les synapses fortes pilotent plus d'activation, ce qui les renforce davantage, jusqu'à ce qu'une entrée domine tout. Les synapses réelles combinent la saturation avec des mécanismes <em>homéostatiques</em> comme le scaling synaptique, qui renormalise multiplicativement toutes les entrées d'un neurone en quelques heures, préservant les poids relatifs tout en gardant la poussée totale constante. L'asymétrie temporelle de la STDP découle des récepteurs NMDA, qui exigent à la fois la liaison du glutamate et la dépolarisation postsynaptique pour éjecter leur blocage Mg²⁺ — un détecteur de coïncidence moléculaire avec une fenêtre de ~20 ms.`,
      },
      scholar: {
        legend: `STDP basée sur les paires à une seule synapse : \\(\\Delta w = A_+e^{\\Delta t/\\tau_+}\\) pour \\(\\Delta t<0\\) et \\(-A_-e^{-\\Delta t/\\tau_-}\\) pour \\(\\Delta t>0\\), avec une limite de saturation sur [[w]]. [[rate]] fixe la fréquence de couplage.`,
        try: `Considère ce que cette règle basée sur les paires prédit pour le couplage à haute fréquence, et compare-le à la découverte expérimentale que la potentialisation à 50 Hz se produit indépendamment de l'ordre des pics. Demande-toi ce qui doit manquer à la règle.`,
        notice: `<b>La STDP basée sur les paires échoue au-dessus de ~30 Hz : expérimentalement, le couplage à haute fréquence potentialise quel que soit l'ordre, ce que la règle ne peut produire.</b> Les modèles à triplets et basés sur la tension (Pfister–Gerstner ; Clopath) corrigent cela et récupèrent en prime le seuil glissant de Bienenstock–Cooper–Munro, où la frontière LTP/LTD se déplace avec l'activité postsynaptique récente. La question plus profonde est que la STDP n'est pas un mécanisme unique : son signe, sa fenêtre et sa dépendance en fréquence varient selon le type de synapse, la position dendritique et l'état neuromodulateur, et la dopamine peut régler si une trace d'éligibilité est consolidée du tout — c'est ainsi qu'une règle biologiquement locale peut implémenter l'assignation de crédit dépendante de la récompense et temporellement distale.`,
      },
    },
    sleep: {
      junior: {
        legend: `Une nuit de sommeil en avance rapide. La trace ondulée est une vraie activité cérébrale mesurée par un EEG. [[stage]] nomme la phase où tu es, [[freq]] montre la vitesse des ondes, et [[ad]] est la substance chimique qui s'accumule pendant que tu es éveillé et te donne sommeil.`,
        try: `Appuie sur [[next]] pour défiler chaque phase à tour de rôle, d'Éveil à REM. Regarde la forme de l'onde en N3 (profond), puis en REM — et compare chacune à Éveil.`,
        notice: `<b>Le sommeil profond a d'énormes ondes lentes, mais le REM ressemble presque exactement à l'état de veille — rapide et petit — même si tu dors profondément et rêves.</b> C'est parce que le REM est appelé sommeil <em>paradoxal</em> : à partir de la seule activité électrique du cerveau, tu ne pourrais pas le distinguer de la veille. Ton corps est paralysé pendant celui-ci, ce qui est une bonne chose, car cela t'empêche de mimer tes rêves.`,
      },
      student: {
        legend: `Architecture du sommeil idéalisée qui cycle entre éveil, N1, N2, N3 et REM, avec des signatures EEG caractéristiques — [[freq]] montre la fréquence dominante de chacune. [[ad]] suit l'adénosine, le signal homéostatique de pression du sommeil.`,
        try: `Défile les phases avec [[next]] et enregistre [[freq]] pour chacune. Note que N3 a la fréquence la plus basse mais la plus grande amplitude, tandis que la fréquence du REM égale presque la veille. Puis regarde [[ad]] sur un cycle complet.`,
        notice: `<b>Fréquence et amplitude EEG évoluent en directions opposées — les ondes lentes sont grandes précisément <em>parce qu'</em>elles sont lentes.</b> Les rythmes rapides de la veille reflètent des neurones s'activant indépendamment, donc leurs contributions s'annulent en partie sur le cuir chevelu ; en N3 tout le cortex sonne ensemble entre états synchronisés haut et bas, et le signal sommé est énorme. Le sommeil est régulé par deux processus en interaction : la pression homéostatique de l'adénosine, que la caféine masque en bloquant ses récepteurs sans retirer la pression, et un oscillateur circadien indépendant de la durée de veille.`,
      },
      scholar: {
        legend: `Hypnogramme schématique avec signatures spectrales canoniques par phase. [[freq]] rapporte la bande EEG dominante ; [[ad]] représente le Processus S. Le modèle omet le décalage cycle-par-cycle de la proportion REM/NREM au long d'une vraie nuit.`,
        try: `Note que ce modèle cycle les phases avec des durées fixes. Considère comment une vraie nuit diffère dans la distribution de N3 et REM au long de cycles successifs, et quel compte fonctionnel explique cette asymétrie.`,
        notice: `<b>Les vraies nuits chargent N3 au début et le REM à la fin — les cycles initiaux sont dominés par les ondes lentes, les suivants par le REM — ce qu'aucun cycle à durée fixe ne peut capturer.</b> Cela découle du modèle à deux processus : le Processus S se dissipe exponentiellement au long de la nuit, donc l'activité à ondes lentes (son indice direct) est concentrée au début, tandis que la propension au REM chevauche le Processus C circadien et culmine près du minimum de température corporelle. Fonctionnellement l'asymétrie compte : l'hypothèse de l'homéostasie synaptique soutient que la SWA déclasse les synapses potentialisées durant la veille, et sa magnitude croît avec l'apprentissage de la veille. La clairance glymphatique de l'amyloïde-β monte aussi ~60% en NREM — et c'est pourquoi la privation de sommeil est désormais traitée comme un facteur causal candidat de la neurodégénérescence plutôt qu'un simple symptôme.`,
      },
    },
    chem: {
      junior: {
        legend: `Les billes colorées sont des <b>atomes</b> qui volent partout. Quand deux d'entre eux s'approchent assez, ils peuvent s'accrocher et former une <b>molécule</b>, dessinée avec une ligne qui les relie. [[mols]] compte combien se sont appariés.`,
        try: `Mets [[temp]] à 10 et regarde un moment — compte combien de molécules se forment. Maintenant fais glisser [[temp]] jusqu'à 1 et regarde de nouveau.`,
        notice: `<b>Les atomes chauds ne se lient presque jamais ; les froids s'apparient vite et [[mols]] monte.</b> La liaison exige que les deux atomes s'attardent assez près pour s'accrocher, et les atomes rapides rebondissent simplement avant que cela puisse arriver. C'est la même raison pour laquelle chauffer les choses les décompose — cuire, fondre, brûler — tandis que refroidir laisse les structures se former. Les flocons de neige existent parce que les molécules d'eau se déplacent assez lentement pour s'emboîter.`,
      },
      student: {
        legend: `Atomes dans une boîte 2D avec des vitesses fixées par [[temp]]. La formation des liaisons est probabiliste et permise seulement sous un seuil d'énergie cinétique ; [[mols]] compte les paires liées. Les atomes liés sont maintenus à une séparation d'équilibre, imitant une longueur de liaison covalente.`,
        try: `Garde [[temp]] à 10 et laisse tourner, puis abaisse-la à 1 sans réinitialiser. Regarde si les liaisons existantes survivent au changement, et à quelle vitesse [[mols]] répond dans chaque direction.`,
        notice: `<b>Les liaisons se forment volontiers à froid et cessent essentiellement de se former à chaud — le seuil est net, non graduel.</b> C'est la compétition centrale de la chimie : la liaison abaisse l'énergie potentielle du système, tandis que le mouvement thermique fournit l'énergie cinétique pour s'en libérer. Qu'une liaison persiste dépend du rapport entre énergie de liaison et \\(k_BT\\), et c'est pourquoi chaque substance a une température à laquelle elle se décompose, et pourquoi la même réaction peut aller en avant ou en arrière selon la seule chaleur que tu lui donnes.`,
      },
      scholar: {
        legend: `Modèle cinétique d'association en 2D : la formation de paires est régie par un seuil de vitesse relative avec un taux stochastique, et les paires liées sont contraintes à une séparation d'équilibre. [[temp]] met à l'échelle la distribution des vitesses ; [[mols]] est la fraction liée instantanée.`,
        try: `Établis une population liée à [[temp]] basse, puis monte-la et observe si le système revient à son état précédent quand tu la rabaisses. Considère ce que le modèle représente de \\(\\Delta G = \\Delta H - T\\Delta S\\), et ce qu'il omet.`,
        notice: `<b>Le modèle capte le terme d'enthalpie mais n'a aucun terme d'entropie — et c'est l'omission intéressante.</b> L'association est enthalpiquement favorable (\\(\\Delta H < 0\\)) mais coûteuse entropiquement, puisque deux particules libres devenant une paire liée réduisent les micro-états translationnels. L'équilibre réel est fixé par \\(\\Delta G = \\Delta H - T\\Delta S\\), donc monter \\(T\\) déplace l'équilibre vers la dissociation non seulement en fournissant de l'énergie cinétique mais en amplifiant la pénalité entropique — le contenu moléculaire du principe de Le Chatelier. La même compétition explique l'assemblage hydrophobe et le repliement des protéines, où l'entropie des molécules de <em>solvant</em>, non du soluté, domine le signe de \\(\\Delta G\\).`,
      },
    },
    electrochem: {
      junior: {
        legend: `Ceci est une batterie coupée en deux. Les points sont des particules chargées qui font la navette entre les deux extrémités à travers le liquide au milieu — ce flux est ce qui allume l'ampoule. [[soc]] est la plénitude de la batterie, et [[volts]] est la poussée qu'elle délivre.`,
        try: `Appuie sur [[discharge]] et regarde [[soc]] descendre de 100% jusqu'à 0. Garde l'œil sur [[volts]] tout du long — de combien baisse-t-il ?`,
        notice: `<b>La batterie se vide complètement mais la tension bouge à peine — d'environ 3,9 V jusqu'à seulement 3,6 V.</b> C'est pourquoi ton téléphone ne peut pas savoir sa plénitude en mesurant seulement la tension, et pourquoi le pourcentage de batterie ment parfois ou saute. Les téléphones comptent plutôt la charge qui entre et sort, comme un compteur d'eau. Une tension plate est en fait un atout : ton appareil reçoit la même puissance constante que la batterie soit pleine ou presque vide.`,
      },
      student: {
        legend: `Une cellule avec transport d'ions entre les électrodes. [[load]] fixe le courant de décharge, [[soc]] l'état de charge, et [[volts]] suit une relation de style Nernst \\(E = E^0 - \\frac{0.059}{n}\\log_{10}\\frac{1-\\text{soc}}{\\text{soc}}\\), bornée à une fenêtre Li-ion réaliste.`,
        try: `Décharge complètement et enregistre [[volts]] à [[soc]] = 100%, 50% et 10%. Puis recharge. La tension retrace-t-elle le même chemin, et pourrais-tu l'utiliser pour déduire [[soc]] de façon fiable ?`,
        notice: `<b>La tension ne parcourt qu'à peine 0,3 V sur toute la capacité — trop plate pour servir de jauge de carburant.</b> L'équation de Nernst est logarithmique dans le rapport entre espèces oxydées et réduites, donc elle n'est raide qu'aux extrêmes et quasi plate au milieu. Les vrais systèmes de gestion de batterie utilisent donc le comptage des coulombs (en intégrant le courant) avec recalibrage périodique de la tension aux extrêmes. Cette platitude est précisément ce qui rend la chimie du lithium si utile — un rail d'alimentation stable — et en même temps ce qui rend l'estimation de l'état de charge un problème d'ingénierie véritablement difficile.`,
      },
      scholar: {
        legend: `Cellule idéalisée avec un potentiel à circuit ouvert nernstien en [[soc]] ; [[load]] met à l'échelle le taux de décharge. Surtensions, limitation par diffusion et hystérésis ne sont pas modélisées.`,
        try: `Note que [[volts]] ici ne dépend que de [[soc]], jamais de [[load]]. Identifie quels effets physiques cette indépendance élimine, et comment chacun altérerait la courbe observée sous une charge lourde.`,
        notice: `<b>Faire de la tension une fonction de la seule charge retire tout mécanisme de perte qui compte en pratique.</b> La tension aux bornes est \\(E_{\\text{cell}} = E^0 - \\eta_{\\text{act}} - \\eta_{\\text{conc}} - IR_{\\Omega}\\) : la surtension d'activation suit la cinétique de Butler–Volmer, la surtension de concentration naît de couches de diffusion appauvries, et la chute ohmique croît avec le courant. Ensemble elles signifient que la capacité réelle <em>baisse</em> à mesure que le taux de décharge croît — l'effet Peukert — et elles produisent l'hystérésis charge/décharge qui déjoue le comptage naïf des coulombs. Ajoute la croissance de l'interphase électrolyte-solide et le placage du lithium et tu as toute la dégradation de la batterie, dont rien ne peut être exprimé par un modèle purement thermodynamique.`,
      },
    },
    kinetics: {
      junior: {
        legend: `La courbe du panneau inférieur est une colline que les molécules doivent gravir avant de pouvoir réagir — cette hauteur est l'<b>énergie d'activation</b>. Seules les molécules avec assez d'énergie la franchissent. [[react]] est la quantité de matière de départ restante, [[prod]] combien a été converti, et [[rate]] à quelle vitesse cela procède.`,
        try: `Mets [[temp]] à 400 et note [[rate]]. Maintenant monte-la à 500 — seulement 100 degrés de plus — et relis [[rate]].`,
        notice: `<b>Seulement 100 degrés de plus et la réaction va environ 20 fois plus vite.</b> La chaleur ne pousse pas les molécules par-dessus la colline ; elle élargit la petite fraction qui avait déjà assez d'énergie pour la gravir, et cette fraction croît explosivement avec la température. C'est pourquoi un frigo conserve la nourriture des semaines tandis que la même nourriture s'abîme en un jour sur le comptoir, et pourquoi la cuisson au four a des températures si précises. Maintenant appuie sur [[cat]] et regarde la colline elle-même rapetisser.`,
      },
      student: {
        legend: `Un diagramme de coordonnée de réaction avec la hauteur de barrière fixée par [[ea]]. Les molécules réagissent à la collision si elles franchissent la barrière ; la constante de vitesse suit Arrhenius, \\(k = A e^{-E_a/RT}\\). [[react]] et [[prod]] suivent les concentrations et [[rate]] la vitesse instantanée.`,
        try: `Enregistre [[rate]] à [[temp]] = 400 et 500 avec [[ea]] à 50. Puis reviens à 400 et abaisse plutôt [[ea]] à 25. Quel changement t'a acheté le plus de vitesse ?`,
        notice: `<b>+100 K multiplie la vitesse par environ 20, mais diviser la barrière par deux vaut bien plus — l'exponentielle est bien plus sensible à \\(E_a\\) qu'à \\(T\\).</b> Cette asymétrie est pourquoi la catalyse domine la chimie industrielle : tu ne peux pas toujours chauffer une réaction (les produits se décomposent, l'énergie coûte), mais abaisser \\(E_a\\) en offrant un chemin alternatif atteint le même but à température ambiante. Un catalyseur ne change ni \\(\\Delta G\\) ni la position d'équilibre — il accélère également les réactions directe et inverse, et se régénère inchangé.`,
      },
      scholar: {
        legend: `Cinétique d'Arrhenius avec \\(k = A\\exp(-E_a/RT)\\), \\(A = 10^6\\) ; le chemin du catalyseur réduit \\(E_a\\) de 55%. Note que la [[rate]] affichée est bornée à un maximum, donc les combinaisons les plus extrêmes de [[temp]] haute et [[ea]] basse sont tronquées au lieu d'être rapportées fidèlement.`,
        try: `Vérifie la forme d'Arrhenius en contrôlant que \\(\\ln k\\) est linéaire en \\(1/T\\), en échantillonnant [[temp]] là où la vitesse est bien sous son plafond. Puis estime \\(E_a\\) à partir de ta pente et compare au réglage [[ea]].`,
        notice: `<b>Un graphe d'Arrhenius de \\(\\ln k\\) contre \\(1/T\\) donne une droite de pente \\(-E_a/R\\) — c'est ainsi que les énergies d'activation sont réellement mesurées.</b> L'interprétation s'approfondit avec la théorie de l'état de transition : \\(k = \\frac{k_BT}{h}e^{-\\Delta G^\\ddagger/RT}\\) scinde la barrière en parties enthalpique et entropique, donc un « facteur pré-exponentiel » est en réalité \\(e^{\\Delta S^\\ddagger/R}\\) — une exigence d'orientation, non un comptage de collisions. C'est pourquoi les enzymes atteignent des accélérations de \\(10^{17}\\) : ils paient d'avance le coût entropique de l'alignement en liant le substrat, au lieu d'abaisser le seul \\(\\Delta H^\\ddagger\\).`,
      },
    },
    organic: {
      junior: {
        legend: `Une molécule dessinée en 3D qui tourne lentement. Les billes grises sont le <b>carbone</b>, les rouges l'<b>hydrogène</b>, les bleues l'<b>oxygène</b> et les violettes l'<b>azote</b> ; les bâtonnets sont les liaisons qui les tiennent ensemble. [[sel]] alterne entre six molécules réelles différentes.`,
        try: `Fais passer [[sel]] à travers les six, de 1 à 6, et regarde spécifiquement les atomes gris de carbone. Compte combien de bâtonnets sortent de chaque bille grise.`,
        notice: `<b>Chaque carbone a exactement quatre liaisons, dans les six molécules — gaz naturel, alcool, sucre, aspirine et caféine pareillement.</b> Ce seul fait est pourquoi la vie est bâtie à partir du carbone. Quatre liaisons laissent le carbone former des chaînes, des ramifications et des anneaux de n'importe quelle longueur tout en gardant de la place pour attacher d'autres atomes, donc une poignée d'éléments peut être arrangée en des millions de substances distinctes. Carburant, sucre et médicament ne diffèrent que par la façon dont les mêmes quelques types d'atome sont reliés.`,
      },
      student: {
        legend: `Modèles boules-et-bâtonnets avec ombrage de profondeur : carbone (gris), hydrogène (rouge), oxygène (bleu), azote (violet). [[sel]] sélectionne entre méthane, éthanol, benzène, glucose, aspirine et caféine ; [[atoms]] compte les atomes et [[type]] classe le composé.`,
        try: `Compare le benzène (3) au glucose (4) — tous deux des anneaux à six membres. Regarde comment les atomes se placent l'un par rapport à l'autre dans chacun, et compte les liaisons entre les carbones de l'anneau.`,
        notice: `<b>L'anneau du benzène est plat et ses carbones sont identiques ; l'anneau du glucose se gondole et chaque carbone diffère.</b> Les six électrons \\(\\pi\\) du benzène sont délocalisés autour de l'anneau, donnant des liaisons de longueur égale intermédiaire entre simple et double, plus la stabilité supplémentaire appelée <b>aromaticité</b> — et c'est pourquoi le benzène résiste aux réactions d'addition qu'un alcène ordinaire subit volontiers. Le glucose est complètement saturé, donc son anneau adopte une conformation en chaise gondolée pour soulager la tension, et ses quatre stéréocentres distincts font que les formes en miroir, ton corps ne peut pas les métaboliser de façon interchangeable.`,
      },
      scholar: {
        legend: `Géométries statiques boules-et-bâtonnets pour six organiques représentatifs. Note que longueurs et angles de liaison sont schématiques plutôt qu'optimisés, et les représentations sont figées conformationnellement.`,
        try: `Considère l'aspirine (5) et la caféine (6). Identifie les groupes fonctionnels dans chacune, et raisonne sur quelles caractéristiques structurales rendent l'aspirine un inhibiteur irréversible tandis que la caféine agit comme antagoniste compétitif.`,
        notice: `<b>La distinction est chimique, non fondée sur la forme : l'aspirine porte un groupe acétyle qui peut se <em>transférer</em>, la caféine n'en porte aucun.</b> L'aspirine acétyle de façon covalente la Ser530 de la COX-1, donc l'inhibition persiste pour la vie de l'enzyme — et c'est pourquoi une seule faible dose supprime le thromboxane plaquettaire pendant des jours, les plaquettes étant anucléées et incapables de resynthétiser l'enzyme. La caféine occupe simplement les récepteurs de l'adénosine de façon réversible, donc son effet suit la concentration et se dissipe avec une demi-vie de ~5 heures. Toutes deux illustrent pourquoi la conception de médicaments fondée sur la structure est si exigeante : la pharmacologie découle d'un seul substituant réactif, non de la forme moléculaire grossière, et aucune des deux n'est déductible de la seule image boules-et-bâtonnets.`,
      },
    },
    acids: {
      junior: {
        legend: `Le bécher à gauche montre ta solution, colorée par un indicateur universel — rouge et orange pour les acides, vert pour le neutre, bleu et violet pour les bases. La courbe trace le pH à mesure que tu ajoutes de la base, et le point marque où tu es maintenant.`,
        try: `Pars avec [[base]] à 0 et lis le [[ph]]. Maintenant fais glisser lentement [[base]] vers le haut pour ajouter de la base, et regarde la couleur et le pH monter. Que se passe-t-il juste autour de la moitié ?`,
        notice: `<b>Le pH bouge à peine au début, puis bondit d'un coup à travers le neutre.</b> Chaque peu de base est silencieusement absorbé jusqu'à ce que tu atteignes la quantité exactement correspondante — le point d'équivalence — où la goutte suivante envoie le pH gicler vers le haut d'un bond, de l'acide droit à la base.`,
      },
      student: {
        legend: `Un titrage : 25 mL d'acide 0,1 M, avec de la base 0,1 M ajoutée le long de l'axe x et le pH sur l'axe y. Les bandes de fond sont l'échelle de l'indicateur universel, et le bécher reflète le pH actuel. \\([H^+]\\) fixe \\(\\text{pH} = -\\log_{10}[H^+]\\).`,
        try: `Garde [[pka]] au minimum (un acide fort) et ajoute [[base]] jusqu'à 25 mL. Puis monte [[pka]] pour faire un acide faible et titre de nouveau — comment la forme de la courbe change-t-elle ?`,
        notice: `<b>Le point d'équivalence est à 25 mL, où les moles de base égalent les moles d'acide.</b> Pour un acide fort il atterrit à pH 7 ; pour un acide faible le bond est plus petit, part plus haut, et le point d'équivalence monte au-dessus de 7 parce que le sel formé est lui-même légèrement basique. Le tronçon plat avant le bond est la région tampon.`,
      },
      scholar: {
        legend: `Un titrage monoprotique fort/faible de 25 mL d'acide 0,1 M avec de la base 0,1 M. Le pH est calculé par morceaux — région tampon via Henderson–Hasselbalch, équivalence via hydrolyse du conjugué, au-delà via excès de base forte — et les bandes de l'indicateur pavent l'axe du pH.`,
        try: `Mets [[pka]] à une valeur faible et trouve le point de semi-équivalence à 12,5 mL : lis [[ph]] là et compare-le à [[pka]]. Puis confirme que le bond d'équivalence se rétrécit à mesure que l'acide s'affaiblit.`,
        notice: `<b>À la semi-équivalence, \\(\\text{pH} = pK_a\\) exactement.</b> Là \\([HA] = [A^-]\\), donc Henderson–Hasselbalch \\(\\text{pH} = pK_a + \\log_{10}([A^-]/[HA])\\) se réduit à \\(\\text{pH} = pK_a\\) — la façon standard de lire la force d'un acide faible depuis sa courbe. Le bond vertical se rétrécit à mesure que \\(pK_a\\) croît, parce que la base conjuguée tamponnante l'amortit.`,
      },
    },
    periodic: {
      junior: {
        legend: `Toute la table périodique, un carré par élément, colorée par famille chimique — rouges et oranges sont des métaux réactifs à gauche, bleus et violets sont des non-métaux et gaz nobles à droite. Clique un carré pour voir ce que c'est.`,
        try: `Clique quelques carrés le long de la même colonne, puis quelques-uns le long de la rangée du haut. Puis appuie sur « Rayon atomique » et « Électronégativité » et regarde les couleurs couler à travers la table.`,
        notice: `<b>Les éléments de la même colonne se comportent pareillement, et les propriétés changent avec continuité à travers la table.</b> La taille atomique croît vers la gauche et vers le bas ; l'attraction sur les électrons croît vers le haut à droite. La forme de la table n'est pas de la décoration — c'est une carte de comment se comporte chaque élément.`,
      },
      student: {
        legend: `Éléments disposés par numéro atomique en périodes (rangées = couches électroniques) et groupes (colonnes = électrons de valence), colorés par famille. Les boutons de tendance re-ombragent la table pour une propriété périodique ; clique une case pour l'inspecter.`,
        try: `Passe à « Rayon atomique », puis « Électronégativité », et regarde le gradient inverser sa direction. Puis clique le fluor (haut à droite) et le césium (bas à gauche) — les deux extrêmes.`,
        notice: `<b>Le rayon atomique augmente vers le bas et à gauche ; l'électronégativité augmente vers le haut et à droite.</b> Tous deux jaillissent d'une seule cause : à travers une période la charge nucléaire croissante tire les électrons plus serrés, tandis qu'en descendant un groupe chaque nouvelle couche pousse les électrons externes plus loin.`,
      },
      scholar: {
        legend: `La table à 118 éléments colorée par famille, avec des superpositions de propriétés. Les ombrages de rayon et d'électronégativité codent les tendances périodiques qualitatives qui découlent de la charge nucléaire effective ; l'inspection de la case rapporte \\(Z\\) et la catégorie.`,
        try: `Compare le gradient d'électronégativité à la structure en blocs : note comment les métaux de transition du bloc d varient bien moins que les blocs s et p, et comment le bloc f reste presque uniforme.`,
        notice: `<b>Les tendances sont une carte de la charge nucléaire effective \\(Z_{\\text{eff}}\\).</b> Les blocs sont larges de 2, 6, 10 et 14 parce que les orbitales s, p, d et f contiennent ce nombre d'électrons. La variation atténuée à travers les métaux de transition et de transition interne reflète les électrons remplissant les couches d et f internes, qui écrantent les électrons les plus externes et aplatissent les tendances.`,
      },
    },
    balancing: {
      junior: {
        legend: `Une réaction chimique dessinée comme des molécules. Les curseurs règlent combien il y en a de chaque molécule. Fais correspondre les comptes d'atomes à gauche avec ceux à droite pour l'équilibrer.`,
        try: `Utilise les curseurs pour changer les nombres devant chaque molécule jusqu'à ce que chaque compte d'atomes corresponde des deux côtés. [[bal]] passe-t-il à Oui ?`,
        notice: `<b>Les atomes ne sont jamais perdus — seulement réarrangés.</b> Tu ne peux pas changer les molécules, seulement combien il y en a, jusqu'à ce que les deux côtés portent le même compte de chaque atome. C'est une équation équilibrée, et c'est en réalité juste du comptage attentif.`,
      },
      student: {
        legend: `Réactifs → produits dessinés comme des molécules, avec un curseur de coefficient par espèce. [[check]] compte chaque élément des deux côtés, et [[bal]] confirme quand ils correspondent tous.`,
        try: `Équilibre la combustion du méthane : ajuste les coefficients jusqu'à ce que carbone, hydrogène et oxygène correspondent tous. Puis appuie sur [[next]] pour une réaction différente.`,
        notice: `<b>Seuls les coefficients peuvent changer, jamais les indices.</b> L'équilibrage impose la conservation de la masse — les mêmes atomes en sortie qu'en entrée. Les coefficients que tu trouves sont aussi les rapports molaires : CH₄ + 2O₂ → CO₂ + 2H₂O signifie qu'une mole de méthane a besoin de deux d'oxygène.`,
      },
      scholar: {
        legend: `Un équilibreur à conservation des atomes : chaque coefficient met à l'échelle une espèce, et les comptes d'éléments doivent s'égaler à travers la flèche. Plusieurs réactions sont disponibles.`,
        try: `Trouve les plus petits coefficients entiers pour chaque réaction, et note que l'ensemble équilibré est unique à un multiple commun près.`,
        notice: `<b>Équilibrer, c'est résoudre un système linéaire construit à partir de la conservation de chaque élément.</b> Il y a toujours une solution à un facteur commun près — le plus petit ensemble d'entiers. Les équations redox ajoutent une seconde contrainte, que la charge aussi doit s'équilibrer, gérée avec les demi-réactions électroniques.`,
      },
    },
    climate: {
      junior: {
        legend: `Les flèches jaunes sont la chaleur qui arrive du Soleil, et celles qui montent du sol sont la chaleur qui cherche à s'échapper de nouveau dans l'espace. La bande dégradée est le <b>gaz à effet de serre</b> dans l'air : plus il y en a, plus la chaleur en fuite est renvoyée vers le bas. Le ciel et le sol rougissent à mesure que la planète se réchauffe.`,
        try: `Appuie sur [[pre]] pour revenir à l'année 1750 et note [[dt]]. Maintenant appuie sur [[now]] pour l'air d'aujourd'hui. Puis fais glisser [[co2]] à 560 — le double de la quantité de 1750.`,
        notice: `<b>Doubler le CO₂ de 280 à 560 réchauffe la planète d'environ 3°C — et les 420 d'aujourd'hui nous ont déjà engagés à environ 1,7°C.</b> Trois degrés paraissent peu à côté du temps qui change de 10° entre le matin et l'après-midi. Mais c'est la <em>planète entière, chaque jour, en permanence</em> : la différence entre aujourd'hui et la dernière ère glaciaire, quand le Canada gisait sous un kilomètre de glace, n'était que d'environ 5°C. De petits nombres globaux déplacent de très grandes choses.`,
      },
      student: {
        legend: `Un dessin animé du bilan radiatif : ondes courtes solaires entrantes, infrarouge sortant, et une couche à effet de serre absorbante dont l'opacité croît avec [[co2]]. [[forcing]] est le forçage radiatif en W/m² et [[dt]] le réchauffement à l'équilibre qui en résulte.`,
        try: `Enregistre [[forcing]] à [[co2]] = 280, 560 puis 800. Le saut de 280→560 est-il de la même taille que 560→800 ? Calcule quel [[co2]] il faudrait pour doubler le forçage que tu obtiens à 560.`,
        notice: `<b>Chaque <em>doublement</em> ajoute les mêmes 3,7 W/m² — 280→560 et 400→800 donnent des incréments identiques.</b> Le forçage est logarithmique, \\(\\Delta F = 5.35\\ln(C/C_0)\\), parce que les bandes d'absorption les plus fortes sont déjà saturées et que seuls les bords des bandes continuent d'absorber. Cela coupe dans les deux sens : le dommage par ppm supplémentaire baisse, mais aussi le bénéfice de chaque ppm que tu évites, et la relation ne s'aplatit jamais à zéro. Multiplier par la sensibilité \\(\\lambda \\approx 0.8\\ \\text{K/(W/m²)}\\) donne ~3°C par doublement — le nombre autour duquel la politique climatique tourne depuis quarante ans.`,
      },
      scholar: {
        legend: `Représentation de bilan énergétique à zéro dimension. [[forcing]] implémente l'approximation de Myhre et al. (1998) \\(\\Delta F = 5.35\\ln(C/C_0)\\) avec \\(C_0 = 280\\) ppm ; [[dt]] applique un paramètre de sensibilité fixe \\(\\lambda = 0.8\\) K/(W/m²), c'est-à-dire réponse d'équilibre plutôt que transitoire.`,
        try: `Confirme la forme logarithmique en vérifiant que des rapports égaux de [[co2]] donnent des incréments égaux de [[forcing]]. Puis considère ce que ce modèle omet nécessairement, et dans quelle direction chaque omission distord [[dt]].`,
        notice: `<b>Le modèle donne \\(\\Delta T \\approx 3\\)°C par doublement — mais c'est seulement l'équilibre, et cela cache presque toute l'incertitude réelle.</b> \\(\\lambda\\) n'est pas une constante : elle agrège la réponse de Planck avec les rétroactions de vapeur d'eau, de gradient thermique vertical, d'albédo et de nuages, et les seuls nuages maintiennent l'intervalle probable du GIEC à 2,5–4°C. L'inertie thermique de l'océan signifie que la réponse <em>transitoire</em> n'est que 50–70% de l'équilibre, donc le réchauffement observé est en retard sur celui engagé. Et le cadre est linéaire dans le forçage, donc il ne peut représenter les points de bascule — effondrement des calottes, arrêt de l'AMOC, carbone du pergélisol — où la réponse est hystérétique et la notion d'un unique \\(\\lambda\\) s'effondre complètement.`,
      },
    },
    blackholes: {
      junior: {
        legend: `Le disque noir est l'<b>horizon des événements</b> — franchis-le et rien, pas même la lumière, ne peut ressortir. Le point en orbite est une horloge que nous observons de loin. [[dilat]] te dit à quelle vitesse elle bat comparée à la tienne, et [[z]] montre de combien sa lumière est étirée en sortant.`,
        try: `Mets [[dist]] à 20 (loin) et lis [[dilat]]. Descends-la maintenant à 2, tout contre l'horizon, et relis-la.`,
        notice: `<b>Loin, l'horloge bat presque à ta vitesse (0,975×) ; tout près, elle ralentit à 0,707× — elle perd près d'un tiers de chaque seconde.</b> Le temps lui-même s'écoule plus lentement près des choses lourdes. Ce n'est pas un tour de lumière ni une horloge cassée : quelqu'un qui tombe dedans vieillit réellement moins que toi. Rien dans la vie quotidienne ne t'y prépare, pourtant le GPS de ton téléphone corrige exactement cet effet chaque seconde, sinon il te placerait à des kilomètres.`,
      },
      student: {
        legend: `Un trou noir de Schwarzschild de masse [[mass]]. [[dist]] place une particule test en unités du rayon de Schwarzschild \\(r_S\\) ; [[dilat]] donne \\(\\sqrt{1-r_S/r}\\) et [[z]] le redshift gravitationnel \\((1-r_S/r)^{-1/2}-1\\).`,
        try: `Note [[dilat]] et [[z]] à [[dist]] = 20, 6 et 2. Raisonne ensuite sur ce que font les deux grandeurs quand [[dist]] approche 1, et vérifie si [[mass]] les change à [[dist]] fixé.`,
        notice: `<b>Toutes deux divergent à \\(r = r_S\\) : la dilatation du temps tend vers zéro et le redshift vers l'infini — pourtant aucune ne dépend de la masse du trou à \\(r/r_S\\) fixé.</b> L'horizon n'est pas un lieu où la physique se brise ; c'est là où la vitesse de libération atteint \\(c\\), et un observateur en chute libre ne remarque rien de spécial en le franchissant. La divergence est un artefact de coordonnées du référentiel de l'observateur lointain. Note que \\(r_S = 2GM/c^2\\) est <em>linéaire</em> en la masse, si bien qu'un trou supermassif a un horizon doux : les forces de marée à \\(r_S\\) varient comme \\(M^{-2}\\), et tu franchirais l'horizon de Sagittarius A* tout à fait intact.`,
      },
      scholar: {
        legend: `Géométrie de Schwarzschild, \\(ds^2 = -(1-r_S/r)c^2dt^2 + (1-r_S/r)^{-1}dr^2 + r^2d\\Omega^2\\). [[dilat]] est le rapport du temps propre au temps coordonnée pour un observateur statique ; [[z]] le redshift gravitationnel correspondant. L'ISCO à \\(3r_S\\) n'est pas marquée.`,
        try: `Examine le comportement quand [[dist]] approche 1 et demande-toi si la divergence est physique. Détermine ensuite où une orbite circulaire cesse d'être stable et compare ce rayon à l'horizon.`,
        notice: `<b>La divergence est purement une pathologie de coordonnées — les invariants de courbure restent finis à \\(r_S\\) et n'explosent qu'à \\(r=0\\).</b> Les coordonnées de Kruskal–Szekeres l'éliminent entièrement, et l'observateur en chute franchit en temps propre fini. Le rayon physiquement pertinent pour l'accrétion est l'<b>ISCO</b> à \\(3r_S\\) (Schwarzschild), en deçà duquel aucune orbite circulaire stable n'existe — cela fixe l'efficacité du disque d'accrétion à 5,7 %, montant à 42 % pour un trou de Kerr en rotation maximale, ce qui explique pourquoi les quasars surpassent leurs galaxies hôtes. Le vrai problème ouvert siège à l'horizon : le rayonnement de Hawking est thermique, \\(T_H = \\hbar c^3/8\\pi GMk_B\\), ce qui paraît détruire l'information, et le paradoxe qui en résulte reste irrésolu.`,
      },
    },
    solarsystem: {
      junior: {
        legend: `Notre Système solaire vu de dessus, le Soleil au centre et les huit planètes qui tournent. Clique une planète pour la sélectionner : [[sel]] la nomme, [[dist]] donne sa distance au Soleil et [[period]] la durée de son année. Les distances sont tassées pour que les planètes internes ne se chevauchent pas.`,
        try: `Clique Mercure et note [[dist]] et [[period]]. Clique ensuite Neptune et fais de même. Neptune est environ 77 fois plus loin — son année est-elle 77 fois plus longue ?`,
        notice: `<b>Non — elle est environ 690 fois plus longue. Mercure met 0,24 an, Neptune 165.</b> Les planètes lointaines ont plus de chemin à faire <em>et</em> se déplacent plus lentement, si bien que leurs années s'allongent bien plus vite que la seule distance ne le laisserait croire. La même règle régit tout ce qui orbite, de ces planètes aux lunes de Jupiter aux satellites au-dessus de nos têtes. Regarde les planètes bouger : les internes filent tandis que les externes rampent à peine.`,
      },
      student: {
        legend: `Les huit planètes sur une échelle radiale comprimée logarithmiquement (les tailles orbitales ne sont donc pas à l'échelle). [[dist]] est le demi-grand axe en UA et [[period]] la période orbitale en années ; [[speed]] contrôle la vitesse de l'animation.`,
        try: `Recueille [[dist]] et [[period]] pour quatre planètes, puis teste \\(T^2/a^3\\) pour chacune. Le rapport reste-t-il constant sur tout le système ?`,
        notice: `<b>\\(T^2/a^3 = 1\\) pour chaque planète, de Mercure à Neptune — une constante sur une plage de distances de 77 fois.</b> C'est la <b>troisième loi de Kepler</b>, et Newton a montré plus tard qu'elle découle directement d'une gravité en inverse du carré : \\(T^2 = \\frac{4\\pi^2}{GM_\\odot}a^3\\). Comme la constante ne dépend que de la masse du Soleil, mesurer l'orbite d'une planète quelconque pèse le Soleil. La même relation appliquée aux étoiles orbitant le centre galactique révèle Sagittarius A*, et appliquée aux galaxies a exposé la masse manquante que nous appelons matière noire.`,
      },
      scholar: {
        legend: `Des orbites képlériennes aux demi-grands axes et périodes observés, tracées sur une échelle radiale comprimée et en cercles coplanaires — l'excentricité et l'inclinaison sont supprimées.`,
        try: `Vérifie \\(T^2 \\propto a^3\\) parmi les planètes, puis considère avec quelle précision cela tient. Estime ce qui devrait être vrai pour que les résidus révèlent quelque chose que le modèle ne peut pas montrer.`,
        notice: `<b>La loi de Kepler n'est exacte que pour le problème à deux corps ; les résidus sont là où la physique vit vraiment.</b> Les perturbations planète–planète ont exigé des corrections newtoniennes qui ont mené directement à la prédiction de Neptune en 1846, et les 43″/siècle résiduels dans l'avance du périhélie de Mercure — inexplicables en gravité newtonienne — sont devenus la première confirmation de la relativité générale. Au-delà de trois corps il n'y a aucune solution en forme close, et les intégrations de Laskar montrent que le Système solaire interne est chaotique avec un temps de Lyapunov proche de 5 millions d'années : les positions deviennent imprévisibles au-delà de ~100 millions d'années, et il existe une probabilité faible mais non nulle que l'orbite de Mercure se déstabilise avant que le Soleil ne quitte la séquence principale.`,
      },
    },
    eclipse: {
      junior: {
        legend: `Vue de dessus du Soleil (à gauche), de la Terre et de la Lune sur son orbite. Les cônes gris sont les ombres. Déplace la Lune et aligne son orbite pour faire tomber une ombre là où elle provoque une éclipse.`,
        try: `Place [[moon]] au point de nouvelle Lune (entre la Terre et le Soleil). Change ensuite [[node]] jusqu'à ce que l'ombre atteigne la Terre. Que dit [[ecl]] ?`,
        notice: `<b>Tu n'obtiens une éclipse que lorsque l'alignement est presque parfait.</b> La plupart des réglages de [[node]] envoient l'ombre de la Lune au-dessus ou au-dessous de la Terre — un raté. Cette petite inclinaison est exactement pourquoi nous n'avons pas d'éclipse chaque mois, alors qu'il y a une nouvelle Lune chaque mois.`,
      },
      student: {
        legend: `Vue de côté le long de la ligne Soleil-Terre. Une éclipse solaire, c'est l'ombre de la Lune atteignant la Terre à la nouvelle Lune ; une éclipse lunaire, c'est la Lune entrant dans l'ombre de la Terre à la pleine Lune. [[node]] règle à quel point l'orbite inclinée de la Lune croise l'écliptique.`,
        try: `Mets [[moon]] à la nouvelle Lune et balaie [[node]] pour trouver l'étroite fenêtre où [[ecl]] bascule sur "Solar eclipse". Puis mets [[moon]] à la pleine Lune et fais de même pour une éclipse lunaire.`,
        notice: `<b>Une éclipse exige la syzygie ET le passage à un nœud en même temps.</b> L'inclinaison de ~5° de la Lune fait que, pour la plupart des positions du nœud, l'ombre manque complètement. Ce n'est que près d'un nœud — deux fois par an environ, les « saisons d'éclipses » — qu'une nouvelle Lune donne une éclipse solaire et une pleine Lune une lunaire.`,
      },
      scholar: {
        legend: `Un schéma de la géométrie Soleil-Terre-Lune avec les cônes d'ombre. La hauteur de la Lune au-dessus de l'écliptique suit son inclinaison de ~5° ; l'alignement n'est possible que dans les limites écliptiques d'un nœud.`,
        try: `Trace la condition d'éclipse : garde [[moon]] à la nouvelle Lune et fais varier [[node]] pour encadrer la limite écliptique où la totalité devient possible, puis répète à la pleine Lune pour la limite lunaire, plus large.`,
        notice: `<b>La fenêtre est la limite écliptique — quelques degrés de longitude du nœud seulement.</b> Comme la ligne des nœuds recule sur 18,6 ans, les saisons d'éclipses avancent de ~19 jours par an, et après un Saros (223 mois synodiques) toute la géométrie se répète. La correspondance des tailles angulaires du Soleil et de la Lune est ce qui permet la totalité plutôt qu'un anneau annulaire permanent.`,
      },
    },
    meteors: {
      junior: {
        legend: `Le ciel nocturne, avec les étoiles filantes qui jaillissent d'un point — le radiant. Le petit schéma montre la Terre traversant la traînée de poussière d'une comète : plus on s'enfonce dans la traînée, plus il y a de météores.`,
        try: `Fais glisser [[pos]] lentement sur l'année et regarde les traînées passer d'un filet à un déluge, puis revenir. Quand [[rate]] est-il le plus élevé ?`,
        notice: `<b>Le spectacle culmine quand la Terre est le plus profondément dans la traînée de poussière de la comète.</b> Hors de cette fenêtre le ciel est calme — seulement quelques météores au hasard. C'est pourquoi une pluie comme les Perséides revient aux mêmes dates chaque année : c'est quand notre orbite croise la traînée.`,
      },
      student: {
        legend: `Un ciel nocturne avec des météores rayonnant du radiant, plus un encart orbital montrant la Terre traverser le courant de débris d'une comète. [[rate]] est le nombre de météores par heure ; [[dens]] règle la richesse de la traînée.`,
        try: `Déplace [[pos]] à travers le pic et regarde [[rate]] monter et descendre en cloche. Monte ensuite [[dens]] pour voir comment une traînée plus riche — un filament frais — relève tout le pic.`,
        notice: `<b>Le taux monte et descend à mesure que la Terre entre et sort du cœur le plus dense du courant, avec un pic au centre.</b> Tous les météores partagent l'orbite de la comète, ils semblent donc s'ouvrir en éventail depuis un seul radiant. Une traînée plus dense, ou un filament jeune, produit les sursauts et les tempêtes qui rendent certaines années bien meilleures que d'autres.`,
      },
      scholar: {
        legend: `Un modèle de pluie de météores : l'activité suit la traversée par la Terre d'un courant de débris cométaires (un profil de densité en cloche), avec des traînées tracées depuis le radiant. [[dens]] met à l'échelle la densité spatiale du courant.`,
        try: `Cartographie le profil d'activité en déplaçant [[pos]] par paliers à travers le pic, puis monte [[dens]] pour simuler la Terre rencontrant une traînée de poussière jeune et compacte plutôt que le courant de fond dispersé.`,
        notice: `<b>Le profil en cloche, c'est la Terre qui tranche un courant dont la densité décroît depuis le cœur.</b> Les vrais courants ont une sous-structure — des filaments distincts semés à différents retours de la comète — et c'est pourquoi les modèles qui suivent chaque filament peuvent prévoir les sursauts à l'heure près. Les comptages observés doivent tout de même être corrigés au taux horaire zénithal selon la hauteur du radiant et l'obscurité du ciel.`,
      },
    },
    photosynthesis: {
      junior: {
        legend: `Une plante aquatique au soleil. La luminosité du Soleil est la lumière que tu règles, et les bulles qui montent de la plante sont l'<b>oxygène</b> qu'elle produit. Plus de photosynthèse, plus de bulles.`,
        try: `Monte la [[light]] à fond mais garde la [[co2]] basse. Beaucoup de bulles ? Monte maintenant aussi la [[co2]]. Que fait la [[rate]] ?`,
        notice: `<b>La lumière seule ne suffit pas - la plante a aussi besoin de dioxyde de carbone.</b> Monte l'un en gardant l'autre bas et la vitesse cale : c'est ce qui manque le plus qui commande. Cet ingrédient le plus rare est le facteur limitant, montré dans [[limit]].`,
      },
      student: {
        legend: `La vitesse de photosynthèse d'une élodée, montrée par les bulles d'oxygène qu'elle libère. [[rate]] est la vitesse modélisée ; [[limit]] indique quel ingrédient la plafonne (la vitesse suit le minimum des facteurs).`,
        try: `Garde la [[co2]] basse et monte la [[light]] de 0 à 100 - regarde la [[rate]] grimper puis s'aplatir. Monte ensuite la [[co2]] et vois le plafond se lever.`,
        notice: `<b>La vitesse monte avec un facteur jusqu'à ce qu'un autre devienne limitant, puis elle plafonne.</b> En faible lumière c'est la lumière qui limite ; en forte lumière le CO₂ (ou la température) prend le relais. C'est exactement pourquoi les serres injectent du CO₂ : il devient le facteur limitant quand la lumière est abondante.`,
      },
      scholar: {
        legend: `Un modèle à facteurs limitants de la vitesse photosynthétique, \\(\\text{vitesse} \\propto \\min(f_{\\text{lumière}}, f_{CO_2})\\) avec une réponse saturante à chaque entrée. Les bulles visualisent le dégagement d'\\(O_2\\) ; [[limit]] signale la contrainte dominante.`,
        try: `Trace la courbe de réponse à la lumière : garde la [[co2]] fixe et monte la [[light]] par paliers, en notant où la [[rate]] sature. Répète ensuite avec une [[co2]] plus élevée et compare les deux plateaux.`,
        notice: `<b>Chaque facteur donne une réponse saturante (type Michaelis) et la vitesse globale suit le plus petit.</b> Sous saturation, les réactions à la lumière limitent l'apport d'ATP/NADPH ; au-dessus, la fixation du CO₂ dans le cycle de Calvin (rubisco) plafonne le débit. Le modèle omet la température et la photorespiration, qui dans les vraies feuilles courbent et finissent par abaisser le plateau à forte lumière.`,
      },
    },
  },
  labels: {
    astro: {
      junior:  { mass: `Masse de l'étoile (masses solaires)`, reset: `Réinitialiser l'étoile`, age: `Âge`, stage: `Stade` },
      student: { mass: `Masse de l'étoile (masses solaires)`, reset: `Réinitialiser l'étoile`, age: `Âge`, stage: `Stade` },
      scholar: { mass: `Masse de l'étoile (masses solaires)`, reset: `Réinitialiser l'étoile`, age: `Âge`, stage: `Stade` },
    },
    cosmology: {
      junior:  { lam: `Énergie noire Ω_Λ`, mat: `Matière Ω_m (%)`, reset: `Réinit.`, age: `Âge (Gyr)`, h: `Taux d'expansion`, z: `Redshift z` },
      student: { lam: `Énergie noire Ω_Λ`, mat: `Matière Ω_m (%)`, reset: `Réinit.`, age: `Âge (Gyr)`, h: `H(z)`, z: `Redshift z` },
      scholar: { lam: `Énergie noire Ω_Λ`, mat: `Matière Ω_m (%)`, reset: `Réinit.`, age: `Âge (Gyr)`, h: `H(z)`, z: `Redshift z` },
    },
    neuro: {
      junior:  { stim: `Force du stimulus`, fire: `Activer le neurone`, rate: `Fréquence de décharge`, pot: `Potentiel` },
      student: { stim: `Force du stimulus`, fire: `Activer le neurone`, rate: `Fréquence de décharge`, pot: `Potentiel` },
      scholar: { stim: `Force du stimulus`, fire: `Activer le neurone`, rate: `Fréquence de décharge`, pot: `Potentiel` },
    },
    neuron: {
      junior:  { cur: `Force du stimulus`, pulse: `Impulsion unique`, reset: `Réinit.`, v: `Tension interne`, state: `État`, spikes: `Pics` },
      student: { cur: `Courant de stimulation (I)`, pulse: `Impulsion unique`, reset: `Réinit.`, v: `V de membrane`, state: `État`, spikes: `Pics` },
      scholar: { cur: `Courant de stimulation (I)`, pulse: `Impulsion unique`, reset: `Réinit.`, v: `V de membrane`, state: `État`, spikes: `Pics` },
    },
    memory: {
      junior:  { rate: `Fréquence de stimulation (Hz)`, ltp: `Renforcer (LTP)`, ltd: `Affaiblir (LTD)`, reset: `Réinit.`, w: `Force synaptique`, last: `Dernier événement`, events: `Événements` },
      student: { rate: `Fréquence de stimulation (Hz)`, ltp: `Coupler (LTP)`, ltd: `Inverser (LTD)`, reset: `Réinit.`, w: `Force synaptique`, last: `Dernier événement`, events: `Événements` },
      scholar: { rate: `Fréquence de stimulation (Hz)`, ltp: `Coupler (LTP)`, ltd: `Inverser (LTD)`, reset: `Réinit.`, w: `Force synaptique`, last: `Dernier événement`, events: `Événements` },
    },
    sleep: {
      junior:  { speed: `Vitesse du cycle de sommeil`, next: `Phase suivante`, wake: `Réveil`, stage: `Phase de sommeil`, freq: `Vitesse des ondes cérébrales`, ad: `Pression de sommeil` },
      student: { speed: `Vitesse du cycle de sommeil`, next: `Phase suivante`, wake: `Réveil`, stage: `Phase de sommeil`, freq: `Fréq. EEG`, ad: `Adénosine` },
      scholar: { speed: `Vitesse du cycle de sommeil`, next: `Phase suivante`, wake: `Réveil`, stage: `Phase de sommeil`, freq: `Fréq. EEG`, ad: `Adénosine` },
    },
    chem: {
      junior:  { temp: `Température`, reset: `Réinit.`, mols: `Molécules`, t: `Temp` },
      student: { temp: `Température`, reset: `Réinit.`, mols: `Molécules`, t: `Temp` },
      scholar: { temp: `Température`, reset: `Réinit.`, mols: `Molécules`, t: `Temp` },
    },
    electrochem: {
      junior:  { load: `Charge (vitesse de décharge)`, discharge: `Décharger`, charge: `Charger`, reset: `Réinit.`, volts: `Tension`, soc: `Niveau de batterie`, mode: `Mode` },
      student: { load: `Charge (vitesse de décharge)`, discharge: `Décharger`, charge: `Charger`, reset: `Réinit.`, volts: `Tension`, soc: `Niveau de charge`, mode: `Mode` },
      scholar: { load: `Charge (vitesse de décharge)`, discharge: `Décharger`, charge: `Charger`, reset: `Réinit.`, volts: `Tension`, soc: `État de charge`, mode: `Mode` },
    },
    kinetics: {
      junior:  { temp: `Température (K)`, ea: `Énergie d'activation (kJ/mol)`, cat: `Ajouter un catalyseur`, reset: `Réinit.`, react: `Réactif restant`, prod: `Produit formé`, rate: `Vitesse` },
      student: { temp: `Température (K)`, ea: `Énergie d'activation (kJ/mol)`, cat: `Ajouter un catalyseur`, reset: `Réinit.`, react: `[Réactif]`, prod: `[Produit]`, rate: `Vitesse` },
      scholar: { temp: `Température (K)`, ea: `Énergie d'activation (kJ/mol)`, cat: `Ajouter un catalyseur`, reset: `Réinit.`, react: `[Réactif]`, prod: `[Produit]`, rate: `Vitesse` },
    },
    organic: {
      junior:  { sel: `Sélecteur de molécule`, mol: `Molécule`, atoms: `Atomes`, type: `Type` },
      student: { sel: `Sélecteur de molécule`, mol: `Molécule`, atoms: `Atomes`, type: `Type` },
      scholar: { sel: `Sélecteur de molécule`, mol: `Molécule`, atoms: `Atomes`, type: `Type` },
    },
    acids: {
      junior:  { base: `Base ajoutée`, pka: `Force de l'acide`, ph: `pH`, state: `Acide ou base ?` },
      student: { base: `Base ajoutée (mL)`, pka: `pKₐ de l'acide`, ph: `pH`, state: `Nature` },
      scholar: { base: `Titrant ajouté (mL)`, pka: `pKₐ de l'acide`, ph: `pH`, state: `Région` },
    },
    periodic: {
      junior:  { el: `Élément`, trend: `Ce que tu regardes` },
      student: { el: `Élément`, trend: `Vue` },
      scholar: { el: `Élément`, trend: `Vue` },
    },
    balancing: {
      junior:  { next: `Réaction suivante`, bal: `Équilibrée ?`, check: `Compter les atomes` },
      student: { next: `Réaction suivante`, bal: `Équilibrée ?`, check: `Compter les atomes` },
      scholar: { next: `Réaction suivante`, bal: `Équilibrée ?`, check: `Compter les atomes` },
    },
    climate: {
      junior:  { co2: `Concentration de CO₂ (ppm)`, pre: `Préindustriel (280)`, now: `Régler à 2024 (420)`, c: `CO₂`, forcing: `Chaleur supplémentaire piégée`, dt: `Hausse de température` },
      student: { co2: `Concentration de CO₂ (ppm)`, pre: `Préindustriel (280)`, now: `Régler à 2024 (420)`, c: `CO₂`, forcing: `Forçage`, dt: `ΔT` },
      scholar: { co2: `Concentration de CO₂ (ppm)`, pre: `Préindustriel (280)`, now: `Régler à 2024 (420)`, c: `CO₂`, forcing: `Forçage`, dt: `ΔT` },
    },
    tectonics: {
      junior:  { speed: `Vitesse de la plaque`, type: `Type de limite (1=divergente 2=transformante 3=convergente)`, quake: `Déclencher un séisme`, stress: `Contrainte`, time: `Millions d'années`, event: `Dernier événement` },
      student: { speed: `Vitesse de la plaque`, type: `Type de limite (1=divergente 2=transformante 3=convergente)`, quake: `Déclencher un séisme`, stress: `Contrainte`, time: `Ma`, event: `Dernier événement` },
      scholar: { speed: `Vitesse de la plaque`, type: `Type de limite (1=divergente 2=transformante 3=convergente)`, quake: `Déclencher un séisme`, stress: `Contrainte`, time: `Ma`, event: `Dernier événement` },
    },
    ocean: {
      junior:  { wind: `Force du vent`, warm: `Réchauffement de l'océan`, flow: `Débit`, temp: `Temp. de surface`, amoc: `Tapis roulant océanique` },
      student: { wind: `Force du vent`, warm: `Réchauffement de l'océan`, flow: `Débit`, temp: `Temp. de surface`, amoc: `AMOC` },
      scholar: { wind: `Force du vent`, warm: `Réchauffement de l'océan`, flow: `Débit`, temp: `Temp. de surface`, amoc: `AMOC` },
    },
    volcano: {
      junior:  { visc: `Viscosité du magma (1=basalte 10=rhyolite)`, recharge: `Taux de recharge du magma`, erupt: `Force de l'éruption`, pres: `Pression de la chambre`, vei: `Taille de l'explosion`, phase: `Phase` },
      student: { visc: `Viscosité du magma (1=basalte 10=rhyolite)`, recharge: `Taux de recharge du magma`, erupt: `Force de l'éruption`, pres: `Pression de la chambre`, vei: `VEI`, phase: `Phase` },
      scholar: { visc: `Viscosité du magma (1=basalte 10=rhyolite)`, recharge: `Taux de recharge du magma`, erupt: `Force de l'éruption`, pres: `Pression de la chambre`, vei: `VEI`, phase: `Phase` },
    },
    seasons: {
      junior:  { month: `Mois`, nh: `Moitié nord`, sh: `Moitié sud` },
      student: { month: `Mois de l'année`, nh: `Hémisphère nord`, sh: `Hémisphère sud` },
      scholar: { month: `Mois de l'année`, nh: `Hémisphère nord`, sh: `Hémisphère sud` },
    },
    sorting: {
      junior:  { size: `Taille du tableau`, bubble: `Tri à bulles`, merge: `Tri fusion`, shuffle: `Mélanger`, algo: `Algorithme`, comps: `Comparaisons`, swaps: `Échanges` },
      student: { size: `Taille du tableau`, bubble: `Tri à bulles`, merge: `Tri fusion`, shuffle: `Mélanger`, algo: `Algorithme`, comps: `Comparaisons`, swaps: `Échanges` },
      scholar: { size: `Taille du tableau`, bubble: `Tri à bulles`, merge: `Tri fusion`, shuffle: `Mélanger`, algo: `Algorithme`, comps: `Comparaisons`, swaps: `Échanges` },
    },
    ml: {
      junior:  { lr: `Taux d'apprentissage`, hid: `Unités cachées`, reset: `Réinit.`, epoch: `Époque`, loss: `Erreur`, acc: `Précision` },
      student: { lr: `Taux d'apprentissage`, hid: `Unités cachées`, reset: `Réinit.`, epoch: `Époque`, loss: `Perte`, acc: `Précision` },
      scholar: { lr: `Taux d'apprentissage`, hid: `Unités cachées`, reset: `Réinit.`, epoch: `Époque`, loss: `Perte`, acc: `Précision` },
    },
    crypto: {
      junior:  { run: `Lancer l'échange`, reset: `Réinit.`, step: `Étape`, key: `Clé partagée` },
      student: { run: `Lancer l'échange DH`, reset: `Réinit.`, step: `Étape`, key: `Clé partagée` },
      scholar: { run: `Lancer l'échange DH`, reset: `Réinit.`, step: `Étape`, key: `Clé partagée` },
    },
    complexity: {
      junior:  { n: `Taille d'entrée n`, algo: `Algorithme (1=O(log n) … 5=O(2ⁿ))`, run: `Exécuter`, ops: `Opérations`, cls: `Classe`, nval: `n` },
      student: { n: `Taille d'entrée n`, algo: `Algorithme (1=O(log n) … 5=O(2ⁿ))`, run: `Exécuter`, ops: `Opérations`, cls: `Classe`, nval: `n` },
      scholar: { n: `Taille d'entrée n`, algo: `Algorithme (1=O(log n) … 5=O(2ⁿ))`, run: `Exécuter`, ops: `Opérations`, cls: `Classe`, nval: `n` },
    },
    life: {
      junior:  { pause: `Pause`, clear: `Effacer`, random: `Aléatoire`, glider: `Planeur`, gen: `Génération`, alive: `Cellules vivantes` },
      student: { pause: `Pause`, clear: `Effacer`, random: `Aléatoire`, glider: `Planeur`, gen: `Génération`, alive: `Cellules vivantes` },
      scholar: { pause: `Pause`, clear: `Effacer`, random: `Aléatoire`, glider: `Planeur`, gen: `Génération`, alive: `Cellules vivantes` },
    },
    dna: {
      junior:  { speed: `Vitesse de réplication`, reset: `Réinit.`, pairs: `Paires de bases copiées`, errors: `Mutations` },
      student: { speed: `Vitesse de réplication`, reset: `Réinit.`, pairs: `Paires de bases copiées`, errors: `Mutations` },
      scholar: { speed: `Vitesse de réplication`, reset: `Réinit.`, pairs: `Paires de bases copiées`, errors: `Mutations` },
    },
    evolution: {
      junior:  { sel: `Pression de sélection`, mut: `Taux de mutation`, reset: `Réinit.`, gen: `Génération`, fit: `Fitness moyenne`, div: `Diversité` },
      student: { sel: `Pression de sélection`, mut: `Taux de mutation`, reset: `Réinit.`, gen: `Génération`, fit: `Fitness moyenne`, div: `Diversité` },
      scholar: { sel: `Pression de sélection`, mut: `Taux de mutation`, reset: `Réinit.`, gen: `Génération`, fit: `Fitness moyenne`, div: `Diversité` },
    },
    ecosystem: {
      junior:  { growth: `Taux de croissance des plantes`, pred: `Efficacité des prédateurs`, reset: `Réinit.`, plants: `🌿 Plantes`, herb: `🐇 Herbivores`, preds: `🦊 Prédateurs` },
      student: { growth: `Taux de croissance des plantes`, pred: `Efficacité des prédateurs`, reset: `Réinit.`, plants: `🌿 Plantes`, herb: `🐇 Herbivores`, preds: `🦊 Prédateurs` },
      scholar: { growth: `Taux de croissance des plantes`, pred: `Efficacité des prédateurs`, reset: `Réinit.`, plants: `🌿 Plantes`, herb: `🐇 Herbivores`, preds: `🦊 Prédateurs` },
    },
    cell: {
      junior:  { salt: `Sel à droite`, reset: `Réinit.`, left: `Eau à gauche`, right: `Eau à droite` },
      student: { salt: `Soluté ajouté (droite)`, reset: `Réinit.`, left: `Eau (gauche)`, right: `Eau (droite)` },
      scholar: { salt: `Soluté ajouté (droite)`, reset: `Réinit.`, left: `Eau (gauche)`, right: `Eau (droite)` },
    },
    mitosis: {
      junior:  { stage: `Fais glisser entre les phases`, play: `Play`, phase: `Phase`, cells: `Cellules` },
      student: { stage: `Phase`, play: `Play`, phase: `Phase`, cells: `Cellules` },
      scholar: { stage: `Phase`, play: `Play`, phase: `Phase`, cells: `Cellules` },
    },
    punnett: {
      junior:  { p1: `Parent 1`, p2: `Parent 2`, pheno: `Apparence (phénotype)`, geno: `Gènes (génotype)` },
      student: { p1: `Génotype parent 1`, p2: `Génotype parent 2`, pheno: `Rapport phénotypique`, geno: `Rapport génotypique` },
      scholar: { p1: `Génotype parent 1`, p2: `Génotype parent 2`, pheno: `Rapport phénotypique`, geno: `Rapport génotypique` },
    },
    prob: {
      junior:  { drop: `Lâcher des billes`, reset: `Réinit.`, rows: `Rangées de clous`, total: `Billes tombées`, mean: `Case moyenne` },
      student: { drop: `Lâcher des billes`, reset: `Réinit.`, rows: `Rangées de clous`, total: `Taille d'échantillon (N)`, mean: `Indice de la case moyenne` },
      scholar: { drop: `Lâcher des billes`, reset: `Réinit.`, rows: `Rangées de clous`, total: `Taille d'échantillon (N)`, mean: `Indice de la case moyenne` },
    },
    fractal: {
      junior:  { detail: `Détail (itérations)`, zoom: `Niveau de zoom`, reset: `Réinitialiser la vue` },
      student: { detail: `Détail (itérations)`, zoom: `Niveau de zoom`, reset: `Réinitialiser la vue` },
      scholar: { detail: `Détail (itérations)`, zoom: `Niveau de zoom`, reset: `Réinitialiser la vue` },
    },
    calculus: {
      junior:  { x: `position x`, rects: `Rectangles de Riemann`, deriv: `Pente ici`, integ: `Aire jusqu'ici` },
      student: { x: `position x`, rects: `Rectangles de Riemann`, deriv: `f′(x)`, integ: `∫f dx (−3→x)` },
      scholar: { x: `position x`, rects: `Rectangles de Riemann`, deriv: `f′(x)`, integ: `∫ de −3 à x` },
    },
    graphs: {
      junior:  { nodes: `Nœuds`, hubs: `Connexions des hubs`, spread: `Propager le signal`, reset: `Nouveau graphe`, reached: `Atteints`, steps: `Étapes`, hubcount: `Hubs` },
      student: { nodes: `Nœuds`, hubs: `Connexions des hubs`, spread: `Propager le signal`, reset: `Nouveau graphe`, reached: `Atteints`, steps: `Étapes`, hubcount: `Hubs` },
      scholar: { nodes: `Nœuds`, hubs: `Connexions des hubs`, spread: `Propager le signal`, reset: `Nouveau graphe`, reached: `Atteints`, steps: `Étapes`, hubcount: `Hubs` },
    },
    trig: {
      junior:  { angle: `Angle`, play: `Play`, sin: `Hauteur (sin)`, cos: `Horizontale (cos)` },
      student: { angle: `Angle θ`, play: `Play`, sin: `sin θ`, cos: `cos θ` },
      scholar: { angle: `Angle θ`, play: `Play`, sin: `sin θ`, cos: `cos θ` },
    },
    gravity: {
      junior:  { radius: `Distance de l'étoile`, mass: `Masse de l'étoile`, period: `Durée de l'année`, speed: `Vitesse` },
      student: { radius: `Rayon de l'orbite`, mass: `Masse de l'étoile`, period: `Période (T)`, speed: `Vitesse orbitale (v)` },
      scholar: { radius: `Rayon de l'orbite (r)`, mass: `Masse de l'étoile (M)`, period: `Période (T)`, speed: `Vitesse orbitale (v)` },
    },
    projectile: {
      junior:  { angle: `Angle de lancer`, speed: `Vitesse de lancer`, launch: `Relancer`, range: `Point de chute`, peak: `Point le plus haut`, time: `Temps en l'air` },
      student: { angle: `Angle (θ)`, speed: `Vitesse (v₀)`, launch: `Lancer`, range: `Portée (R)`, peak: `Hauteur max (H)`, time: `Temps de vol (T)` },
      scholar: { angle: `Angle (θ)`, speed: `Vitesse initiale (v₀)`, launch: `Lancer`, range: `Portée (R)`, peak: `Hauteur au sommet (H)`, time: `Temps de vol (T)` },
    },
    newton: {
      junior:  { force: `Force de poussée`, mass: `Masse`, fric: `Frottement`, net: `Poussée totale`, accel: `Accélération`, vel: `Vitesse` },
      student: { force: `Force appliquée (N)`, mass: `Masse (kg)`, fric: `Frottement (μ)`, net: `Force nette`, accel: `Accélération (a)`, vel: `Vitesse (v)` },
      scholar: { force: `Force appliquée (N)`, mass: `Masse (kg)`, fric: `Frottement (μ)`, net: `Force nette (F net)`, accel: `Accélération (a)`, vel: `Vitesse (v)` },
    },
    circuits: {
      junior:  { volt: `Tension de la pile`, res: `Résistance`, cur: `Courant (flux)`, pow: `Luminosité (puissance)` },
      student: { volt: `Tension (V)`, res: `Résistance (R)`, cur: `Courant (I)`, pow: `Puissance (P)` },
      scholar: { volt: `Tension (V)`, res: `Résistance (R)`, cur: `Courant (I)`, pow: `Puissance (P)` },
    },
    states: {
      junior:  { temp: `Température`, state: `État de la matière`, tval: `Ressenti` },
      student: { temp: `Température`, state: `État`, tval: `Ressenti` },
      scholar: { temp: `Température`, state: `État`, tval: `Ressenti` },
    },
    waves: {
      junior:  { freq: `Fréquence 2`, phase: `Déphasage`, type: `Interférence`, amp: `Hauteur de l'onde` },
      student: { freq: `Fréquence 2`, phase: `Déphasage`, type: `Interférence`, amp: `Amplitude max` },
      scholar: { freq: `Fréquence 2`, phase: `Déphasage`, type: `Interférence`, amp: `Amplitude max` },
    },
    thermo: {
      junior:  { temp: `Température (K)`, num: `Particules`, hits: `Chocs/s sur les parois`, speed: `Vitesse moyenne`, press: `Pression` },
      student: { temp: `Température (K)`, num: `Particules`, hits: `Chocs/s sur les parois`, speed: `Vitesse moyenne`, press: `Pression` },
      scholar: { temp: `Température (K)`, num: `Particules`, hits: `Chocs/s sur les parois`, speed: `Vitesse moyenne`, press: `Pression` },
    },
    particles: {
      junior:  { energy: `Énergie du faisceau (TeV)`, collide: `Collision !`, count: `Collisions`, e: `Énergie` },
      student: { energy: `Énergie du faisceau (TeV)`, collide: `Collision !`, count: `Collisions`, e: `Énergie` },
      scholar: { energy: `Énergie du faisceau (TeV)`, collide: `Collision !`, count: `Collisions`, e: `Énergie` },
    },
    seriesparallel: {
      junior:  { mode: `Série / Parallèle`, volt: `Pile`, rtot: `Résistance totale`, cur: `Courant`, bulb: `Luminosité de l'ampoule` },
      student: { mode: `Série / Parallèle`, volt: `Tension (V)`, rtot: `Résistance totale`, cur: `Courant total`, bulb: `Puissance par ampoule` },
      scholar: { mode: `Série / Parallèle`, volt: `Tension (V)`, rtot: `Résistance totale`, cur: `Courant total`, bulb: `Puissance par ampoule` },
    },
    respiration: {
      junior:  { o2: `Oxygène`, atp: `Énergie (ATP)`, co2: `CO₂ rejeté`, mode: `Mode` },
      student: { o2: `Niveau d'oxygène`, atp: `ATP par glucose`, co2: `CO₂ par glucose`, mode: `Voie métabolique` },
      scholar: { o2: `Niveau d'oxygène`, atp: `ATP par glucose`, co2: `CO₂ par glucose`, mode: `Voie métabolique` },
    },
    watercycle: {
      junior:  { temp: `Chaleur du Soleil`, evap: `Évaporation`, cloud: `Nuage`, rain: `Pluie` },
      student: { temp: `Température`, evap: `Évaporation`, cloud: `Eau dans le nuage`, rain: `Précipitation` },
      scholar: { temp: `Température`, evap: `Évaporation`, cloud: `Eau dans le nuage`, rain: `Précipitation` },
    },
    energy: {
      junior:  { drop: `Hauteur de chute`, fric: `Frottement`, ke: `Énergie de mouvement`, pe: `Énergie de hauteur`, tot: `Total` },
      student: { drop: `Hauteur initiale (h)`, fric: `Frottement`, ke: `Cinétique (KE)`, pe: `Potentielle (PE)`, tot: `Énergie totale` },
      scholar: { drop: `Hauteur initiale (h)`, fric: `Frottement`, ke: `Cinétique (KE)`, pe: `Potentielle (PE)`, tot: `Énergie totale` },
    },
    gaslaws: {
      junior:  { temp: `Température`, vol: `Taille du contenant`, pres: `Pression`, pv: `Pression × taille` },
      student: { temp: `Température (T)`, vol: `Volume (V)`, pres: `Pression (P)`, pv: `P × V` },
      scholar: { temp: `Température (T)`, vol: `Volume (V)`, pres: `Pression (P)`, pv: `P × V` },
    },
    moonphases: {
      junior:  { day: `Jour du mois`, phase: `Phase`, lit: `Fraction éclairée` },
      student: { day: `Jour (sur 29,5)`, phase: `Phase`, lit: `Éclairée` },
      scholar: { day: `Jour (sur 29,5)`, phase: `Phase`, lit: `Éclairée` },
    },
    protein: {
      junior:  { play: `Construire`, codon: `Lecture`, len: `Perles jusqu'ici` },
      student: { play: `Traduire`, codon: `Codon → acide aminé`, len: `Longueur de la chaîne` },
      scholar: { play: `Traduire`, codon: `Codon → acide aminé`, len: `Longueur de la chaîne` },
    },
    pendulum: {
      junior:  { len: `Longueur`, amp: `Amplitude du balancement`, per: `Temps par oscillation`, freq: `Oscillations par seconde` },
      student: { len: `Longueur (L)`, amp: `Amplitude (θ₀)`, per: `Période (T)`, freq: `Fréquence (f)` },
      scholar: { len: `Longueur (L)`, amp: `Amplitude (θ₀)`, per: `Période (T)`, freq: `Fréquence (f)` },
    },
    optics: {
      junior:  { obj: `Distance de l'objet`, foc: `Force de la lentille`, img: `Position de l'image`, mag: `Taille`, type: `Image` },
      student: { obj: `Distance objet (dₒ)`, foc: `Distance focale (f)`, img: `Distance image (dᵢ)`, mag: `Grandissement (m)`, type: `Image` },
      scholar: { obj: `Distance objet (dₒ)`, foc: `Distance focale (f)`, img: `Distance image (dᵢ)`, mag: `Grandissement (m)`, type: `Image` },
    },
    blackholes: {
      junior:  { mass: 'Masse du trou noir (M☉)', dist: 'Distance du trou',            wave: 'Onde gravitationnelle', km: 'Distance', dilat: 'Dilatation du temps', z: 'Étirement de la lumière' },
      student: { mass: 'Masse du trou noir (M☉)', dist: 'Distance particule test (r_S)', wave: 'Onde gravitationnelle', km: 'Distance', dilat: 'Dilatation du temps', z: 'Redshift' },
      scholar: { mass: 'Masse du trou noir (M☉)', dist: 'Distance particule test (r_S)', wave: 'Onde gravitationnelle', km: 'Distance', dilat: 'Dilatation du temps', z: 'Redshift' },
    },
    solarsystem: {
      junior:  { speed: 'Vitesse du temps', zoom: 'Zoom', sel: 'Sélectionné', period: 'Période', dist: 'Distance' },
      student: { speed: 'Vitesse du temps', zoom: 'Zoom', sel: 'Sélectionné', period: 'Période', dist: 'Distance' },
      scholar: { speed: 'Vitesse du temps', zoom: 'Zoom', sel: 'Sélectionné', period: 'Période', dist: 'Distance' },
    },
    eclipse: {
      junior:  { moon: 'Déplace la Lune', node: 'Aligne l\'orbite',      phase: 'Phase lunaire', ecl: 'Éclipse ?' },
      student: { moon: 'Position Lune',    node: 'Alignement du nœud',   phase: 'Phase lunaire', ecl: 'Éclipse' },
      scholar: { moon: 'Position Lune',    node: 'Alignement du nœud',   phase: 'Phase lunaire', ecl: 'Éclipse' },
    },
    meteors: {
      junior:  { pos: 'Période de l\'année',    dens: 'Poussière dans la traînée', rate: 'Étoiles filantes/h', status: 'Le ciel maintenant' },
      student: { pos: 'Position de la Terre',   dens: 'Densité des débris',        rate: 'Météores/heure',     status: 'Activité' },
      scholar: { pos: 'Position de la Terre',   dens: 'Densité du courant',        rate: 'Météores/heure',     status: 'Activité' },
    },
    photosynthesis: {
      junior:  { light: 'Lumière du soleil',    co2: 'Dioxyde de carbone', rate: 'Oxygène produit',        limit: 'Qu\'est-ce qui limite ?' },
      student: { light: 'Intensité lumineuse',   co2: 'Niveau de CO₂',      rate: 'Vitesse de photosynthèse', limit: 'Facteur limitant' },
      scholar: { light: 'Intensité lumineuse',   co2: 'Niveau de CO₂',      rate: 'Vitesse de photosynthèse', limit: 'Facteur limitant' },
    },
  },
};
