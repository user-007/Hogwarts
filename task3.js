const messages = [
    ['Uifsf!jt!b!tfdsfu"', 1],
    ['vvhhdkdvkkdvvhh$', 3],
    ['Ibssz!Qpuufs', 1]
];

for (const [s, n] of messages) {
    console.log(">Input");
    console.log(`'${s}', ${n}`);

    const decrypted = s.split('').map(char => {
        const code = char.charCodeAt(0);
        if (/[A-Za-z]/.test(char)) {
            const base = code >= 97 ? 97 : 65;
            return String.fromCharCode((code - base - n + 26) % 26 + base);
        }
        return char;
    }).join('');

    console.log("Output");
    console.log(decrypted);
}