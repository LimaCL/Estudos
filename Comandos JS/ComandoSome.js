let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate" }, 
    { name: "Strawberry", type: "fruit"}, 
    { name: "Vanilla", type: "Vanilla"}, 
    { name: "Pistachio", type: "Nuts"}, 
    { name: "Neapolitan", type: "Chocolate"}, 
    { name: "Mint Chip", type: "Chocolate"}
  ];

  console.log(iceCreamFlavors.some(flavor => flavor.type === "Nuts"))
 //Este comando possui um retorno de Verdadeiro ou Falso, em caso de saber qual o sorvete usar o Comando Filter 