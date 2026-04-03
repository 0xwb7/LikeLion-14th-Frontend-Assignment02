function solution(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "*".repeat(i * 2 - 1));
      }
}

solution(3);
solution(5);