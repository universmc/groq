const slides = [
	{"image":"framAscii_01.png","tagLine":"."},
	{"image":"framAscii_02.png","tagLine":"."},
	{"image":"framAscii_03.png","tagLine":"."},
	{"image":"framAscii_04.png","tagLine":"."},
	{"image":"framAscii_05.png","tagLine":"."},
	{"image":"framAscii_06.png","tagLine":"."},
	{"image":"framAscii_07.png","tagLine":"."},
	{"image":"framAscii_08.png","tagLine":"."},
	{"image":"framAscii_09.png","tagLine":"."},
	{"image":"framAscii_10.png","tagLine":"."},
	{"image":"framAscii_11.png","tagLine":"."},
];

/* ADD eventListener */

 let bouton1 = document.getElementById("bouton1");
 bouton1.addEventListener("click", () => {
 	console.log("click OK button slide gauche")
 });

 let bouton2 = document.getElementById("bouton2");
 bouton2.addEventListener("click", () => {
	console.log("click OK button slide droit")
 });



// Créez les bullet points (dots) en fonction du nombre de slides
let numberOfFrams = slides.length;
const dotsContainer = document.querySelector('.dots');
for (let i = 0; i < numberOfFrams; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dotsContainer.appendChild(dot);
}

// Marquez le premier bullet point comme actif
dotsContainer.firstChild.classList.add('dot_selected');




/*  STEP 3 click SLIDERS UPDATE  */ 

let currentIndex = 0; // Index de l'image actuelle

// Fonction pour aller à la slide suivante
function goToNextFram() {
    if (currentIndex === numberOfFrams - 1) {
        currentIndex = 0; // Revenir au début si c'est la dernière slide
    } else {
        currentIndex++;
    }
    updateConstructor();
}


// Fonction pour aller à la slide précédente
function goToPrevFram() {
    if (currentIndex === 0) {
        currentIndex = numberOfFrams - 1; // Passer à la dernière slide si c'est la première
    } else {
        currentIndex--;
    }
    updateConstructor();
}
// Fonction pour mettre à jour les bullet points
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.classList.remove('dot_selected');
    });
    dots[currentIndex].classList.add('dot_selected');
}

 

// Fonction pour mettre à jour le constructor
function updateConstructor() {
    const bannerImg = document.querySelector('.banner-img');
    bannerImg.src = 'img/' + slides[currentIndex].image;
    const taglineDiv = document.querySelector('.arrow-content p');
    taglineDiv.innerHTML = slides[currentIndex].tagLine;

    updateDots(); // Mettre à jour les bullet points
}

bouton1.addEventListener("click", goToPrevFram);
bouton2.addEventListener("click", goToNextFram);


// condition de bord

function goToNextFram() {
    if (currentIndex === numberOfFrams - 1) {
        currentIndex = 0; // Revenir au début si c'est la dernière slide
    } else {
        currentIndex++;
    }
    updateConstructor();
}


// Fonction pour aller à la slide précédente
function goToPrevFram() {
    if (currentIndex === 0) {
        currentIndex = numberOfFrams - 1; // Passer à la dernière slide si c'est la première
    } else {
        currentIndex--;
    }
    updateConstructor()};