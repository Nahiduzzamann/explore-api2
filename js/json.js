const user = {
    id: 1,
    name: 'nahid',
    job: 'developer',
}
const stringified = JSON.stringify(user);
// console.log(stringified)

const shop ={
    owner :'alia',
    address:{
        street:'1234',
        city:'dhaka',
        country:'bd'
    },
    product :['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}
console.log(shop)