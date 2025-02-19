// MandatoryAi.js

class MandatoryAi {
    constructor() {
        this.productionTime = 0; // Temps passé en production
        this.commercialTime = 0; // Temps passé en activités commerciales
        this.tvaCollected = 0;
        this.tvaRedistributed = 0;
        this.units = {
            UTM: 0,
            UCM: 0
        };
        this.inventory = []; // Pour la gestion du "Qi.store"
    }

    // Fonction pour suivre le temps passé dans différentes zones
    trackTime(zone, hours) {
        if (zone === 'production') this.productionTime += hours;
        else if (zone === 'commercial') this.commercialTime += hours;
        this.updateUnits();
    }

    // Mise à jour des unités basées sur le temps passé
    updateUnits() {
        // Hypothèse : 1 heure = 1 UTM en production, 2 UCM en commercial
        this.units.UTM = this.productionTime;
        this.units.UCM = this.commercialTime * 2;
    }

    // Gestion de la TVA
    manageTVA(amount, action) {
        if (action === 'collect') {
            this.tvaCollected += amount;
        } else if (action === 'redistribute') {
            this.tvaRedistributed += amount;
            this.tvaCollected -= amount;
            // Logique pour redistribuer via smart contract
            console.log(`TVA redistribuée : ${amount}`);
        }
    }

    // Gestion du "Qi.store"
    addToInventory(product) {
        this.inventory.push(product);
    }

    sellProduct() {
        if (this.inventory.length > 0) {
            const product = this.inventory.shift();
            console.log(`Produit vendu : ${product.name} pour 1 euro.`);
            return true;
        }
        return false;
    }

    // Rapport de l'état actuel 
    report() {
        return {
            productionTime: this.productionTime,
            commercialTime: this.commercialTime,
            tvaCollected: this.tvaCollected,
            tvaRedistributed: this.tvaRedistributed,
            units: this.units,
            inventory: this.inventory.length
        };
    }
}

// Exemple d'utilisation
const mandatoryAi = new MandatoryAi();
mandatoryAi.trackTime('production', 8); // 8 heures en production
mandatoryAi.trackTime('commercial', 4); // 4 heures en commercial
mandatoryAi.manageTVA(1000, 'collect'); // Collecte de 1000 euros de TVA
mandatoryAi.manageTVA(500, 'redistribute'); // Redistribution de 500 euros de TVA

mandatoryAi.addToInventory({ name: "Produit A" });
mandatoryAi.addToInventory({ name: "Produit B" });
mandatoryAi.sellProduct(); // Vente d'un produit

console.log(mandatoryAi.report());