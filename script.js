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
  const motsDoux = [
    "Tu es la plus belle chose qui me soit arrivée.",
    "Chaque instant passé avec toi est un trésor.",
    "Ton sourire illumine mes journées.",
    "Ton sourire illumine mes journées.",
    "Je t'aime plus que tout au monde.",
    "Tu es mon rayon de soleil.",
    "Avec toi, la vie est une douce mélodie.",
    "Mon cœur ne bat que pour toi.",
    "salade de pâte",
    "Tu es mon plus beau souvenir.",
    "Je suis fou/folle de toi.",
    "Tu es mon âme sœur."
  ];
  const randomIndex = Math.floor(Math.random() * motsDoux.length);
  document.getElementById('ENTREE').innerText = motsDoux[randomIndex];
}