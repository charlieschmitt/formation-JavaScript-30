const inventors = [
    {first: 'Albert', last: 'Einstein', year : 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year : 1643, passed: 1727},
    {first: 'Marie', last: 'Curie', year : 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year : 1571, passed: 1630},
    {first: 'Nicolauus', last: 'Copernicus', year : 1473, passed: 1543},
]

const people = ['Charlie Schmitt', 'Dylan Boursier', 'Amaury Mesnil']

// 1- Filter the list of inventirs for those who were born in the 1500'
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
console.table(fifteen)

// 2- Give us an array of the inventory first and last names
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(fullName)

// 3- Sort the inventors by birth date, oldest to youngest
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
console.table(ordered)

// 4- How many years did all the inventors live ? 
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0)
console.log(totalYears)

// 5- Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year
    const nextGuy = b.passed - b.year
    return lastGuy > nextGuy ? -1 : 1
})
console.table(oldest)

// 6- create a list of Boulevards in Paris that contain 'de' anywhere in the name

// 7- Sort the people alphabetically by last name
const orderedPeople = people.sort((lastOne, nextOne) =>{
    const [aLast, aFirst] = lastOne.split(', ')
    const [bLast, bFirst] = nextOne.split(', ')
    return aLast > bLast ? 1 : -1
})

console.log(orderedPeople)

// 8- Sum up the instances of each of these