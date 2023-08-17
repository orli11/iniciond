const {frutas, money} = require('./frutas');

frutas.forEach(fruta => {
    console.log('La fruta es: ', fruta)
})
console.log(`Dinero: ${money}`)