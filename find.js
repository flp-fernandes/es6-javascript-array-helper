const users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];
const admin = users.find(user => user.admin === true);
console.log(admin);



const accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];
const account = accounts.find(acc => acc.balance === 12);
console.log(account);

//Challenge
const ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
]

const findWhere = (array, criteria) => {
    //importante ressaltar: eh dado um objeto para fazer a pesquisa e deve-se usar sua propriedade para buscar dentro do objeto que eh dado
    let getProperty = Object.keys(criteria)[0];
    return array.find(arr => {
        return arr[getProperty] === criteria[getProperty];
    })
}

console.log('Challenge response :', findWhere(ladders, { height: 25 }));