let num = [5,8,9,2,3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi emcontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
