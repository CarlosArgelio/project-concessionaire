const stock = ['Toyota', 'Chevrolet', 'Ford', 'Renault', 'Chery', 'Fiat', 
                'Peugeot', 'Jeep', 'Seat', 'Hyundai', 'Kia', 'Mazda'];

const models = ["Sedan", "SUV", "Hatchback", "Crossover", "Pickup", "Compacto"];

const colors = ["Rojo", "Azul", "Negro", "Blanco", "Gris", "Verde"];

const transmisions = ["Automática", "Manual"];


const generateCard = () => ({
        stock: stock[Math.floor(Math.random() * stock.length)],
        model: models[Math.floor(Math.random() * models.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        transmision: transmisions[Math.floor(Math.random() * transmisions.length)],
        price: Math.floor(Math.random() * 100000),
        offer: Math.floor(Math.random() * 10) == 0 ? true : false,
    })

const generateManyCards = () => {
    const carsList = [];
    for (let i = 0; i < 100; i++) {
        carsList.push(generateCard());
    }
    return carsList;

};

export { generateManyCards }