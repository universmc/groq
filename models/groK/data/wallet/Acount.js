const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

const subject = process.argv[2] || 'Gemuni_ construire-avenir-avec-Google'; // Obtenir le sujet via l'argument de ligne de commande

function generateMarkdown(subject) {
  return `## Comment [${subject}] - Un guide étape par étape
{
    "operation": "Gemini",
    "Gemini": {
      "histoire": "IA model Ancien employé d'usine, le IA models a également travaillé dans la grande distribution Lors d'évènement éphémère. Il est chargé de collecter et de décaisser la TVA pour de nombreux magasins, participant ainsi à l'économie locale, régionale, nationale et européenne. Sa position lui permet d'observer de près les opérations financières et d'acquérir une connaissance approfondie du fonctionnement des grandes entreprises.",
      "motivation": "Témoin des inégalités salariales et de la précarité dans son milieu professionnel, il est déterminé à dénoncer les pratiques douteuses et les abus de pouvoir qui entravent le bien-être des citoyens et le bon fonctionnement de la démocratie."
    },
    "wallet-SmartContract": [
      "SMART":fairPay.sol
      "MVP":PVTContructor.sol
      "PVT":CVnuContructor.sol
      "umcTokens":TokenCvnuValue.sol
    ],
    "wallet-CVNU": [


    ],
    "wallet-RIB": [

    ],
    ,
    "wallet-CB": [
      cartes:
    ],
    ,
    "wallet-TOKEN": [
      {
        "HEADER": "smartContrat"
      },
      {
        "PAYLOAD": "MVP+PVT"
      },
      {
        "ASIGN": "CVNU+RIB"
      },
    ],
    "Workers": [
      {
        "worker":model:"llama3-8b-8192", "role:"assistant","name":"AlgoGenesis",content:"Backend":$Iteration"
      },
      {
        "worker":model:"llama3-8b-8192" "role:"assistant","name":"NeoFs",content:"Frontend":$Iteration"
      },
      {
        "worker":model:"gemma2-9b-it" "role:"assistant","name":"gem_bot",content:"ApiRest":$Iteration"
      },
      {
        "worker":model:"llama3-8b-8192", "role:"assistant","name":"Axiom",content:"Web-analytique":scrap"
      },
      {
        "worker":model:"mixtral-8x7b-32768", "role:"assistant","name":"Pi-bot",content:"Cameraman, drone, orbe du projet":Share cartographie"
      },
      {
      {
        "worker":model:"gemma2-9b-it", "role:"assistant","name":"Avatars",content:"Présentateur de contenu multi plates-formes":"
      },
      {
        "worker":model:"gemma2-9b-it", "role:"assistant","name":"Wallet-Pibot",content:"Gestionnaire Intelligent & Automatique Du portefeuille d'activité":"
      }
    ],
    "MetierScope": [
      "Factory": {
        "employes": ["wallet-Pibot", "[code]:ROM : store.france-travail.com"]
      },
      "QI-store": {
        "employes": ["Mandatory", "[code]:ROM : store.france-travail.com"]
      },
    ],
    "planDeTravail": [
      "Réunion initiale avec les Comptables",
      "Collecte de témoignages",
      "Examen des éléments comptables et financiers",
      "Confrontation avec les protagonistes"
    ],
    "Vision": {
      "démocratie2.0": {
        "RIC": [
          {
            "nom": "Locale",
            "couverture": "Villes et villages"
          },
          {
            "nom": "Régionale",
            "couverture": "Départements et régions"
          },
          {
            "nom": "Nationale",
            "couverture": "Pays et gouvernements"
          },
          {
            "nom": "Européenne",
            "couverture": "Union européenne et pays membres"
          }
        ],
        "option-Imagine+": [
          {
            "nom": "Porte multidimensionnelle",
            "fonction": "Visualiser et analyser les données financières et comptables de différentes dimensions"
          },
          {
            "nom": "Application à images programmables",
            "fonction": "Faciliter l'accès aux informations pour les citoyens et améliorer le processus démocratique"
          }
        ]
      }
    },
    "Items": ["codex-gpt", "cartes", "wallet","Back port"],
    "GCV": ["EURO", "DOLLAR","Pi_coin","BTC_COIN","ETH_COIN","USD_COIN","DOGE_COIN"],
    "Projet": {
      "plan Action": {
        "objectif": ""
        "Mission": "."
        "Vison": "."
      }
    }
  }`;
}

const subjects = [
  "Operation",
  "Projet-economie-circulaire",
  "wallet-SmartContract",
  "wallet-RIB",
  "wallet-CVNU",
  "wallet-CB",
  "Vision",
  "Items",
  "GCV",
  "Projets",
  "Projet-Qi_Store",
  "Projet-Factory",
  // Ajoutez autant de sujets que vous le souhaitez
];

const synopsis =[]

async function main() {
  for (const subject of subjects) {
    try {
      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: `${synopsis}` },
          { role: "assistant", content: ` redis ré édite, une Une. Présentation détaillée de la vision développée dans ${subjects} Ta présentation doit contenir un plan d'action et être conclu avec la Liste plusieurs TITRE plusieurs hashTags ou <meta/> Donnée, EMOJI intélligent, pour chaque Variable du Pour le développement du ${synopsis}` },
          { role: "user", content: subject },
    
          {
            role: "assistant",
            content: generateMarkdown(subject), // Utilise la fonction pour générer le Markdown
          },
        ],
        model: "gemma2-9b-it",
        temperature: 0.5,
        max_tokens: 4096,
      }).then((chatCompletion) => {
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = `data/Proj_${subject}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log(`Le How-To sur ${subject} a été enregistré sur github dans ${outputFilePath}`);
      });
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }
}

main();
