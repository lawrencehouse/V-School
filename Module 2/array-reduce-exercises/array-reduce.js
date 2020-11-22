// 1. Turn an array of numbers into a total of all the numbers

function total(arr) {
    result = arr.reduce((final,current) => final += current)
    return result
 }
 
 console.log(total([1,2,3])); // 6
 
 // 2. Turn an array of numbers into a long string of all those numbers.

 function stringConcat(arr) {
    result = arr.reduce((final,number) => final.toString() + number.toString())
    return result
 }
 
 console.log(stringConcat([1,2,3])); // "123"
 
 // 3. Turn an array of voter objects into a count of how many people voted

 function totalVotes(arr) {
    result = arr.reduce((final,voter) => {
        if (voter.voted){
            final++
        } 
        return final
    },0)
    return result
 }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7

 // 4. 