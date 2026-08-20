const namn = "Sara";
let antalProjekt = 3;

if (antalProjekt >= 3) {
    console.log(`${namn} har en välfylld portfolio.`);
} else {
    console.log(`${namn} behöver lägga till fler projekt.`);
}

const tekniker = ["HTML", "CSS", "JavaScript", "Git"];
tekniker.forEach((teknik) => {
    console.log(teknik);
});

const projekt = {
    titel: "Min portfolio",
    teknik: "JavaScript",
    publicerad: true
};

function visaProjekt(projektData) {
    console.log(`${projektData.titel} använder ${projektData.teknik}.`);
}

visaProjekt(projekt);
