let num = (val) => {
    if (val % 2 == 0) {
        return "짝수";
    } else {
        return "홀수";
    }
}

console.log(num(4));
console.log(num(7));