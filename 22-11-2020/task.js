#filter countries coming under region asia

const filtereditems = countries.filter((item)=>{
    return item.region = 'asia'
})

#display country names from filtereditems array
const names = filtereditems.map((item) => {
    return item.name;
})
console.log(names)
