const stock = ['Toyota', 'Chevrolet', 'Ford', 'Renault', 'Chery', 'Fiat', 'Peugeot', 'Jeep', 'Seat', 'Hyundai', 'Kia', 'Mazda'];
const models = ["Sedan", "SUV", "Hatchback", "Crossover", "Pickup", "Compacto"];
const colors = ["Rojo", "Azul", "Negro", "Blanco", "Gris", "Verde"];
const transmisions = ["Automática", "Manual"];
const Sellers = ["Carlos", "Betania", "Juan", "Hisiu", "Jeremy"];


const generateCard = () => {

    const offert = Math.floor(Math.random() * 10) in [6, 7, 8, 9, 10] ? true : false;
    let myOffert = {};
    if ( offert ) {
        let porcentual = Math.floor(Math.random() * 10);
        porcentual = porcentual > 0 ? porcentual : 9;
        myOffert = {
            porcentual: porcentual,
            offert: true
        }
    }

    return {
        stock: stock[Math.floor(Math.random() * stock.length)],
        model: models[Math.floor(Math.random() * models.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        transmision: transmisions[Math.floor(Math.random() * transmisions.length)],
        price: Math.floor(Math.random() * 100000),
        offert: (offert && (myOffert)),
        seller: Sellers[Math.floor(Math.random() * Sellers.length)]
    }
}

const generateManyCards = (limit: number) => {
    const carsList = [];
    for (let i = 0; i < limit; i++) {
        carsList.push(generateCard());
    }
    return carsList;

};

export { generateManyCards }