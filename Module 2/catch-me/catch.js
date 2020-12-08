// 1a

function sum(x, y) {
    try {
        if ((!isNaN(x)) || (!isNaN(y))) {
            throw new TypeError('Both inputs must be numbers')
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
    
}

// 2a

var user = {username: "sam", password: "123abc"};
function login(username, password){
    try {
        if ((username != user.username) || (password != user.password)) {
            throw new SyntaxError('Username or Password does not match!')
        } else {
            console.log('login successful!')
        }
    } catch(err) {
        console.log(err)
    }
}

// 2b

try {
    login('saam','124abc')
} catch {

}

try {
    login('sam','123abc')
} catch {
    
}