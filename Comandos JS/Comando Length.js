var numbers = [1, 2, -1, 4, 5];

for (var i = 0; i < numbers.length; i++){
    if (numbers[i] < 0){
        console.log('Possui um numero negativo:', numbers[i], '| no indice:', i)
        break;
    }
    console.log(numbers[i]);
}

