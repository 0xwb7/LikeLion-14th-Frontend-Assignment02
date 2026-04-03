const users = [
    { name: "Tom", age: 20 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 30 }
];

let max = 0;
for (let i = 0; i < users.length; i++) {
    if (users[i].age > max) {
        max = users[i].age;
    }
}

console.log(max);