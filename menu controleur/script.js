function generateMotDoux() {
  const motsDoux = [
    "Tu es la plus belle chose qui me soit arrivée.",
    "Chaque instant passé avec toi est un trésor.",
    "Ton sourire illumine mes journées.",
    "Ton sourire illumine mes journées.",
    "Je t'aime plus que tout au monde.",
    "Tu es mon rayon de soleil.",
    "Avec toi, la vie est une douce mélodie.",
    "Mon cœur ne bat que pour toi.",
    "Tu es ma plus belle pensée.",
    "Je suis fou/folle de toi.",
    "Tu es mon âme sœur."
  ];
  const randomIndex = Math.floor(Math.random() * motsDoux.length);
  document.getElementById('mot-doux').innerText = motsDoux[randomIndex];
}


function generateENTREE() {
  const entree = [
    "Salade de chèvre chaud et ses lardons",
    "Verrine d'avocat, crevette et pamplemousse",
    "Tartare de saumon à l'aneth",
    "Velouté de potiron et ses éclats de noisettes",
    "Bruschetta à la tomate, mozzarella et basilic frais",
    "toi😏",
    "salade de pâte",

  ];
  const randomIndex = Math.floor(Math.random() * entree.length);
  document.getElementById('ENTREE').innerText = entree[randomIndex];
}

function generatePlat() {
  const plats = [
    "Filet de boeuf au curry",
    "Filet de boeuf au curry",
    "Filet de boeuf au curry",
    "Filet de boeuf au curry",
    "Filet de boeuf au curry",
    "Filet de boeuf au curry",
    "Filet de boeuf au curry",
    "Filet de boeuf au curry",
    "Filet de boeuf au curry",
    "Filet de boeuf au curry",
    "Filet de boeuf au curry",
    "
}


function generateDessert() {
  const desserts = [
    "Fondant au chocolat et sa boule de glace vanille",
    "Tiramisu classique au café",
    "Crème brûlée à la vanille de Madagascar",
    "Tarte Tatin aux pommes et sa crème fraîche",
    "Panna cotta aux fruits rouges",
    "brownie",
    "chocolat chaud",
    "chocolat",
    "glace"
  ];
  const randomIndex = Math.floor(Math.random() * desserts.length);
  document.getElementById('Dessert').innerText = desserts[randomIndex];
}

function generateBoisson() {
  const boissons = [
    "Coupe de Champagne",
    "Verre de vin rouge (Saint-Émilion)",
    "Verre de vin blanc (Sancerre)",
    "Cocktail (Mojito Royal)",
    "Eau pétillante avec une tranche de citron",
    "Coca-Cola",
    "fanta",
    "Pepsi",
    "Sprite",
    ""
  ];
  const randomIndex = Math.floor(Math.random() * boissons.length);
  document.getElementById('Boisson').innerText = boissons[randomIndex];
}

