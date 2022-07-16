let valores = [4, 9, 3, 5, 6]
/*
for (let pos= 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} do vetor possui o valor ${valores[pos]} `)
} */

for (let pos in valores) {
    console.log(`A posção ${pos} possui o valor ${valores[pos]}`)
}