cities = [{ name: "Los Angeles", area: 435 }, { name: "Denver", area: 43455 }, { name: "Singapore", area: 3500 }]
/* convert cities
into 

{
    los-angles: { area: 435 }, 
    denver: { area: 43455 },
    singapore: { area: 3500 }
}

using reduce.
*/

const obj = cities.reduce((acc, currentVal) => {

    acc[currentVal["name"]] = { "area": currentVal["area"] }

    return acc

}, {})

console.log(obj)