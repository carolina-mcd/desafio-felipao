const nome = 'Batman'
const xp = 10000
let categoria = ''

if (xp <= 1000) {
    categoria = 'Ferro'

} else if (xp >= 1001 && xp <= 2000 ) {
    categoria = 'Bronze'

} else if (xp >= 2001 && xp <= 6000 ) {
    categoria = 'Prata'

} else if (xp >= 6001 && xp <= 7000 ) {
    categoria = 'Ouro'

} else if (xp >= 7001 && xp <= 8000) {
    categoria = 'Platina'

} else if (xp >= 8001 && xp <= 9000 ) {
    categoria = 'Ascendente'

} else if (xp >= 9001 && xp <= 10000 ) {
    categoria = 'Imortal'

} else {
    categoria = 'Radiante'

} 


console.log(`O Heroi de nome **${nome}** esta no nivel de **${categoria}**`)