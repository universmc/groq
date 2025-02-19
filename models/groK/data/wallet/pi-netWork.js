const { create } = require('child_process');
const { writeFileSync } = require('fs');

// Function to execute the completion
async function runCompletion() {
  // Complétion de chat avec Groq pour générer les objectifs SMART pour le Smart Contract
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: 'assistant',
        content: `
          Vous êtes une IA spécialisée dans la gestion des objectifs SMART pour les cycles de mise à jour du CVNU.

          INSTRUCTION : Programme un Smart Contract appelé 'cvun.sol' qui certifie les compétences professionnelles validées par des organismes autorisés, et assure la transparence des compétences acquises sur la blockchain.

          Développez les objectifs SMART pour le cycle de mise à jour :

          - S pour spécifique : Le contrat doit permettre l'enregistrement et la certification des compétences professionnelles tous les 28 jours.
          - M pour mesurable : Le nombre de compétences certifiées et mises à jour doit être suivi.
          - A pour atteignable : Utiliser la blockchain Ethereum pour assurer que les transactions de mise à jour sont immuables.
          - R pour réaliste : Le projet doit être réalisable avec les ressources disponibles, y compris les outils de développement blockchain.
          - T pour temporel : Le cycle de mise à jour doit être respecté tous les 28 jours (2 419 200 secondes).
        `
      },
      {
        role: "system",
        content: `
          Bienvenue partenaire de développement backend SMART.JS. Vous êtes chargé de gérer le cycle de mise à jour de 28 jours pour le Smart Contract 'cvun.sol'. Voici vos instructions :

          - Gérer les transactions et les certifications de compétences de manière efficace.
          - S'assurer que le Smart Contract est prêt pour les audits de sécurité.
          - Configurer les transactions pour minimiser les coûts de gas sur Ethereum.
        `
      },
      {
        role: "user",
        content: `"${tasks}.date"`
      }
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
  });

  // Générer la documentation pour le Smart Contract
  const mdContent = chatCompletion.choices[0]?.message?.content;
  const outputFilePath = "data/cvun_update_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
  writeFileSync(outputFilePath, mdContent);
  console.log("Documentation générée et enregistrée dans " + outputFilePath);
}