function userTest() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(v => display(v))
};

function display(data) {
    const ol = document.getElementById('users');
    for(const user of data){
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ol.appendChild(li);
    }
};

