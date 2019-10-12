const computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

// const computers = [
//     { name: 'Apple', ram: 8 },
//     { name: 'Compaq', ram: 4 },
//     { name: 'Acer', ram: 16 }
// ];

let allComputersCanRunProgram = true;
let onlySomeComputersCanRunProgram = false;

//usa &&
//se todos elementos do array encaixarem nos criterios, o resultado eh true, senão é false

allComputersCanRunProgram = computers.every(pc => pc.ram > 16);
console.log('All computers can run program: ', allComputersCanRunProgram);

//usa ||
//se algum elemento do array encaixa no criterio, o resultado eh true, senão é false

onlySomeComputersCanRunProgram = computers.some(pc => pc.ram > 16);
console.log('Only some computers can run program: ', onlySomeComputersCanRunProgram);


//Outro exemplo
const names = [
    "Alexandria",
    "Matthew",
    "Joe"
];

console.log('Metodo every: ', names.every(name => name.length > 4));

console.log('Metodo some: ', names.some(name => name.length > 4));