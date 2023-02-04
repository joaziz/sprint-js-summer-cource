function getUsers() {
    return [
        {name: "ahmed", age: 22},
        {name: "adel", age: 22},
        {name: "sameh", age: 22}
    ]
}


let names = getUsers().map(user => {
    return user.nama
})