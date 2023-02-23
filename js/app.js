function userTest() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(v => console.log(v))
}