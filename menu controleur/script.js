// Listes pour le menu
const entrees = [
    "Velouté de potimarron et ses éclats de châtaignes",
    "Salade de chèvre chaud sur toast de pain d'épices",
    "Tartare de saumon à l'aneth et citron vert",
    "Œuf cocotte aux champignons des bois",
    "Bruschetta à la tomate, basilic et mozzarella fondue",
    "toi😏","Carpaccio de betteraves à la feta et noisettes d’amour",
    "Velouté de potiron au lait de coco et soupçon de cannelle",
    "Tartare de saumon à l’avocat et citron vert 💚",
    "Cœur de mozzarella et tomates cerises en habit de basilic",
    "Crumble salé aux poireaux et tendresse de parmesan",
    "Rillettes de thon au fromage frais et câlins de ciboulette",
    "Salade de roquette, figues fraîches et éclats de chèvre",
    "Bruschettas d’amour à la tomate confite et pesto maison",
    "Duo de mini quiches aux légumes du soleil",
    "Mille-feuille de légumes grillés et mousse de chèvre",
    "Verrine de crevettes et mangue au gingembre",
    "Soupe froide de concombre et yaourt à la menthe douce",
    "Cœurs d’artichauts marinés au citron et thym",
    "Tatin de tomates cerises au caramel balsamique",
    "Œuf cocotte au cœur coulant et crème de champignons",
    "Roses de jambon cru et melon sucré",
    "Cassolette d’escargots à la crème d’ail doux",
    "Samossas aux légumes croquants et sauce miel-gingembre",
    "Tzatziki d’amour et pain pita tiède",
    "Petits feuilletés cœur d’épinards et ricotta 🌿"
];

const plats = [
    "Magret de canard, sauce au miel et purée de patates douces",
    "Risotto crémeux aux cèpes et parmesan",
    "Filet de bar poêlé, tombée d'épinards frais",
    "Parmentier de confit de canard maison",
    "Lasagnes végétariennes aux légumes du soleil",
    "toi😏",
    "Filet de bœuf sauce au vin rouge et éclats de chocolat noir 🍷🍫",
    "Cœur de risotto aux champignons et parmesan fondant",
    "Saumon en croûte d’amandes, purée douce à la patate rose",
    "Poulet aux épices douces et lait de coco, riz à la mangue",
    "Pavé de cabillaud sur lit d’amour de légumes croquants",
    "Lasagnes rosées à la ricotta et au basilic du cœur 🌿",
    "Duo de gnocchis à la crème de truffe et noisettes grillées",
    "Magret de canard au miel et gingembre, gratin tendresse",
    "Linguine aux fruits de mer, parfum d’embruns et d’amour",
    "Tajine d’agneau aux abricots, comme un câlin chaud",
    "Gratin de courge au fromage de chèvre et éclats de noix",
    "Raviolis maison farcis à la passion (tomates, ricotta, basilic)",
    "Sushis en duo : cœur de saumon, câlin de thon",
    "Filet mignon en croûte d’amour et champignons sauvages",
    "Boulettes végétariennes tendresse et sauce tomate basilic",
    "Tournedos Rossini aux notes envoûtantes de truffe noire",
    "Curry doux de crevettes et lait d’amande",
    "Tagliatelles aux cèpes, larmes de parmesan 💧🧀",
    "Quiche au cœur fondant de légumes d’été",
    "Gratin dauphinois au romarin et à la crème du bonheur"
];

const desserts = [
    "Fondant au chocolat cœur coulant et sa boule de glace vanille",
    "Tiramisu classique au café",
    "Crème brûlée à la vanille de Madagascar",
    "Panna cotta aux fruits rouges",
    "Tarte Tatin aux pommes caramélisées",
    "Pavlova au chocolat et aux fruits de mer",
    "Croquembouche au citron vert et au caramel",
    "Crème brûlée aux fruits rouges",
    "tarte au fraise",
    "Crème brûlée au chocolat et aux fruits de mer",
    "toi😏",
    "Tarte Tatin",
    "Fondant au chocolat cœur coulant 💘",
    "Tiramisu à la fraise et au champagne 🍓🍾",
    "Crème brûlée à la vanille et éclats de rose 🌹",
    "Mille-feuille à la framboise et chantilly d'amour",
    "Mousse au chocolat noir et piment doux 🔥",
    "Macarons parfum passion-framboise",
    "Panna cotta au coulis de fruits rouges 💋",
    "Sorbet mangue-litchi façon baiser tropical 💛",
    "Tartelette cœur de citron meringuée",
    "Gâteau aux trois chocolats et son nappage câlin 🍫",
    "Île flottante aux nuages de tendresse",
    "Coupe glacée “Amour éternel” (vanille, cerise, amour)",
    "Cheesecake aux fruits rouges et coulis sucré",
    "Moelleux au caramel beurre salé, touche de fleur de sel",
    "Profiteroles à la vanille et chocolat chaud",
    "Cœur sablé à la confiture de framboise ❤️",
    "Poires pochées au vin rouge et épices d’amour",
    "Beignets sucrés en forme de cœur",
    "Tarte tatin revisitée à deux 🍎",
    "Crêpes suzette flambées pour deux 🔥🥞"
];

// Liste de mots doux
const motsDoux = [
    "Tu es mon soleil.​❤️​",
    "Chaque moment avec toi est un trésor.",
    "Je t'aime plus que les mots ne peuvent le dire.",
    "Tu rends ma vie plus belle.",
    "Mon amour pour toi est infini.🥰",
    "Dans tes bras, je suis à la maison.",
    "Tu es la plus belle chose qui me soit arrivée.",
    "je serai tj la pour toi ❤️‍🔥",
    "Mon amour pour toi grandit à chaque battement de mon cœur 💓",
    "Quand je te regarde, le monde s’arrête un instant...",
    "Tu es mon miracle quotidien, ma raison de sourire",
    "Chaque moment avec toi est un chapitre de bonheur",
    "Je t’aime plus que les mots ne peuvent le dire, et encore plus que ça",
    "Mon cœur s’éclaire à ton sourire comme une bougie au vent",
    "Tu es la plus belle pensée de toutes mes journées",
    "À tes côtés, même le silence est doux",
    "Mon âme a trouvé sa maison en toi",
    "Tu es mon toujours et pour toujours 💍",
    "Aimer c’est toi, c’est simple comme bonjour",
    "Si l’amour était une chanson, tu serais la plus belle mélodie",
    "Mon cœur ne bat plus... il danse quand tu es là",
    "À chaque regard, tu me rends amoureux encore plus fort",
    "Tu es mon havre de paix, mon feu de joie, mon monde",
    "Tu es la plus belle chose qui me soit arrivée",
    "Je ne veux rien de plus que ton rire chaque matin",
    "Si j’avais une seule minute à vivre, je la passerais à t’embrasser",
    "Ton amour est la lumière qui guide mon âme",
    "Avec toi, je n’ai plus besoin de rêver... je vis mon rêve ✨"
];

// Fonction pour générer le menu
function genererMenu() {
    const entreeAleatoire = entrees[Math.floor(Math.random() * entrees.length)];
    const platAleatoire = plats[Math.floor(Math.random() * plats.length)];
    const dessertAleatoire = desserts[Math.floor(Math.random() * desserts.length)];

    document.getElementById('entree').textContent = entreeAleatoire;
    document.getElementById('plat').textContent = platAleatoire;
    document.getElementById('dessert').textContent = dessertAleatoire;
}

// Fonction pour générer un mot doux
function genererMotDoux() {
    const motDouxAleatoire = motsDoux[Math.floor(Math.random() * motsDoux.length)];
    document.getElementById('mot-doux').textContent = motDouxAleatoire;
}
