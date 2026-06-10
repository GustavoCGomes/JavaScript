function parimpar (n) {
  if (n % 2 == 0) {
    return 'Par!'
  } else {
     return 'Ímpar!'
  }
}

let res = parimpar(23)
console.log(`O numero é ${res}`)

//console.log(parimpar(24))
