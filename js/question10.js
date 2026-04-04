const users = [
    { name: "Tom", age: 20 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 30 }
];

let maxIdx = 0;
for (let i = 1; i < users.length; i++) {
    if (users[i].age > users[maxIdx].age) {
        maxIdx = i;
    }
}

console.log(users[maxIdx].name)