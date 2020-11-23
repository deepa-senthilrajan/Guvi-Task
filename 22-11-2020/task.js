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

//Print the following details name, capital, flag using forEach function

countries.forEach((item)=>{
    console.log(item.name,item.capital,item.flag)
})

// Print the total population of countries using reduce function

const total = countries.reduce((currenttotal, item)=>{
    return item.population+currenttotal
})
console.log(total)

// Print the total population of countries in Asia continent using reduce and filter function


const filtereditems1 = countries.filter((item)=>{
    return item.region = 'asia'
})

const total1 = filtereditems1.reduce((currenttotal, item)=>{
    return item.population+currenttotal
})
console.log(total1)

// Print the country which use US Dollars as currency. 



