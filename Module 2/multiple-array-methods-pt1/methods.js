var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function sortedOfAge(arr) {
    last = arr.filter(person => person.age > 18)
    final_sort = last.sort((a, b) => {
        nameA = a.lastName
        nameB = b.lastName
        if (nameA < nameB) {
            return -1
        }
        if (nameA > nameB) {
            return 1
        }
    })
    final_info = final_sort.reduce((older_18, person) => {
        older_18.push(`<li>${person.firstName} ${person.lastName} is ${person.age}</li>`)
        return older_18
    }, [])
    return final_info
}

console.log(sortedOfAge(peopleArray));

/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/