const data = [
    {
        name: 'John',
        age: 20
    },
    {
        name: 'Jane',
        age: 31
    },
    {
        name: 'Jim',
        age: 13
    }
]

// returna namnet i samtliga objekt i arrayen
const getName = (person) => {
    return person.name
}

// lämna denna orörd
export const getAllNames = () => {
    let names = []
    data.forEach((person) => {
        names.push(getName(person))
    })
    return names
}
