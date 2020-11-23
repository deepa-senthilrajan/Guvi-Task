//Get all the countries from Asia continent using Filter function

const filtereditems = countries.filter((item)=>{
    return item.region = 'asia'
})


const names = filtereditems.map((item) => {
    return item.name;
})
console.log(names)

//Get all the countries with population of less than 2 lacs using Filter function 

const popitems = countries.filter((item) =>{
    return item.population <200000
})
const popnames = popitems.map((item)=>{
    return item.name;
})

console.log(popnames)
