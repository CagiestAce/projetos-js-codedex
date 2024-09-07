let ano = 2000;
let anoFinal = 3000;

for (let i = ano; i <= anoFinal; i++) {
    if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) {
        console.log(i);
    }
}