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
      about:'47 simulations scientifiques pratiques dans neuf domaines, chacune écrite pour trois niveaux — d\'un enfant curieux de dix ans à un étudiant diplômé. Gratuit, sans compte, sans suivi.',
      exploreBySubject:'Explorer par matière',
      allExperiments:'Toutes les expériences',
      madeFor:'fait pour les esprits curieux',
      contact:'Contact',
      attrib:'Concepts issus de Wikipédia et de ressources éducatives ouvertes'
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
  slugs: { photosynthesis: 'photosynthese', eclipse: 'eclipses', meteors: 'etoiles-filantes', blackholes: 'trous-noirs', solarsystem: 'systeme-solaire' },
  t: {
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
