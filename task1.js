const inputs = [
    [5, 2, 3],
    [7, 1, 2],
    [10, -1, 1],
    [8, -2, 3]
];

for (let [n, m, h] of inputs) {
    console.log(">Input");
    console.log(`${n}, ${m}, ${h}`);

    let total = 0;
    for (let i = 0; i < h; i++) {
        total += n + i * m;
    }

    console.log("Output");
    console.log(total);
}