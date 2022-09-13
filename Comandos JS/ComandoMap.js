let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate" }, 
    { name: "Strawberry", type: "fruit"}, 
    { name: "Vanilla", type: "Vanilla"}, 
    { name: "Pistachio", type: "Nuts"}, 
    { name: "Neapolitan", type: "Chocolate"}, 
    { name: "Mint Chip", type: "Chocolate"}
  ];
  iceCreamFlavors.map(flavor => {
    flavor.price = 1;
    return flavor;
  })
// UTILIZADO PARA ADICIONAR UM ATRIBUTO PARA TODOS OS INDICE , COMO NO EXEMPLO O PREÇO DE 1 REAL CADA BOLA
  for(let i = 0; i < iceCreamFlavors.length; i++){
    console.log(iceCreamFlavors[i]);
  }