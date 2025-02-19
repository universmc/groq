// models.js - Utilisé comme base pour générer des tips

const models = [
    {
      "name": "Mixtral",
      "model": "mixtral-8x7b-32768",
      "purpose": "Génération de texte descriptif"
    },
    {
        "name": "GroK",
        "model": "llama3-8b-8192",
        "purpose": "Génération embedding"
      },
    {
      "name": "Gemini",
      "model": "gemma2-9b-it",
      "purpose": "Génération de code fullStack --devOps"
    },
    {
      "name": "GPT",
      "model": "gpt-4o",
      "purpose": "Génération de titres et d'idées"
    },
    {
      "name": "DALL-E",
      "model": "dall-e-3",
      "purpose": "Génération et manipulation d'images"
    }
  ];
  
  // Tips.js
  
  function generateTips() {
    const tips = [];
  
    models.forEach(model => {
      let tip = {
        model: model.name,
        content: ""
      };
  
      switch(model.name) {
        case "Mixtral":
          tip.content = "Utilisez " + model.name + " pour générer des descriptions engageantes pour vos produits ou services. Exemple : 'Découvrez comment notre application transforme votre quotidien : `<button onclick='subscribe()'> Generate !</button>`'.";
          break;
        case "GroK":
          tip.content = "Utilisez " + model.name + " pour générer des conversation engageantes pour vos produits ou services. Exemple :  `<button onclick='subscribe()'> Abonnez-vous à GROK !</button>`'.";
          break;
        case "Gemini":
          tip.content = "Avec " + model.name + ", créez dynamiquement des pages web adaptées à vos campagnes sur X. Voici un exemple de code pour un bouton d'abonnement : `<button onclick='subscribe()'> Gemini!</button>`.";
          break;
        case "GPT":
          tip.content = model.name + " peut vous aider à trouver des titres accrocheurs pour vos tweets. Essayez : 'Top 5 des astuces pour doubler votre audience sur X' : : `<button onclick='subscribe()'>GPT</button>`.";
          break;
        case "DALL-E":
          tip.content = "Pour vos visuels, " + model.name + " est parfait pour créer des images uniques basées sur des descriptions. Par exemple, 'image d'un ordinateur portable dans un environnement futuriste': : `<button onclick='subscribe()'>Imagine Plus (+)</button>`";
          break;
      }
      
      tips.push(tip);
    });
  
    return tips;
  }
  
  // Générer et afficher les tips
  const allTips = generateTips();
  console.log(allTips);
  
  // Exemple d'utilisation dans une interface web
  document.getElementById('tipsContainer').innerHTML = allTips.map(tip => 
    `<p><strong>${tip.model}:</strong> ${tip.content}</p>`
  ).join('');