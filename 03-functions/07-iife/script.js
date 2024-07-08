

let name1 = () => 'Jimmy'

(function(name1) {
    const user = 'John'
    console.log(user)
    const hello = () => console.log(name1)
    hello()
})(name1)