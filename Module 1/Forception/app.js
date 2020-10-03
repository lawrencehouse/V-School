var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
alphabet = alphabet.split('')

function forception(people, alphabet){
    const newarray = []
    for (i = 0; i < people.length; i++) {
        newarray.push(people[i] + ':')
        for (j = 0; j < alphabet.length; j++) {
          newarray.push(alphabet[j].toUpperCase())
        }
    }
    return newarray
}
console.log(forception(people, alphabet))