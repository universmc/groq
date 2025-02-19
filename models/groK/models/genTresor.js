// generousTresor.js

let tresor = {
    total: 314.000000000, // Supposons que c'est la valeur du "trésor" en euros
    allocated: 0,
    allocations: []
};

const generosityCriteria = {
    minimumContribution: 313, // Exemple : un minimum de contribution pour être éligible
    maximumPerEntity: 50000, // Un maximum par entité par an
    totalPerYear: tresor.total * 0.2 // Par exemple, 20% du trésor chaque année
};

function calculateGenerosity(entity) {
    let generosityAmount = 0;
    
    if (entity.contribution >= generosityCriteria.minimumContribution) {
        // Calcul basique: un pourcentage de la contribution de l'entité
        generosityAmount = Math.min(entity.contribution * 0.5, generosityCriteria.maximumPerEntity);
        
        // Assurez-vous que nous n'allouons pas plus que ce qui est disponible pour l'année
        if (tresor.allocated + generosityAmount > generosityCriteria.totalPerYear) {
            generosityAmount = generosityCriteria.totalPerYear - tresor.allocated;
        }
    }

    return generosityAmount;
}