let num = [5,8,4,2,3] /*Variavel Composta*/
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(7)
if(pos == -1){
    console.log('O valor não foi emcontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
