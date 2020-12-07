dog = 'dog'

// 1a

function sum(x, y) {
    try {
        if ((typeof x != 'number') || (typeof y != 'number')) {
            throw 'Both inputs must be numbers'
        } else {
            console.log('Your code works fine!')
        }
    } catch (err) {
        console.log(err)
    }
    return x + y
}

// 1b

try {
    sum('1','2')
} catch(err) {
    console.log('test')
}

