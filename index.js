const planetas = require('./planetas');

planetas.forEach(planeta => {
    console.log(`¡Planeta ${planeta.nombre} descubierto!`);
    console.log(`Descripción: ${planeta.descripcion}`);
    console.log(`Descubierto en: ${planeta.descubiertoEn}`);
    console.log('---');
});



const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

// or cowsay.think()



function get_cows(error, cow_names) {
    if (error) {
        console.log(error)
    }
    else if (cow_names) {
        console.log(`Number of cows available: ${cow_names.length}`);
    }
}

cowsay.list(get_cows);