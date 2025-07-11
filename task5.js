const sequences = [
    "/\\/\\//\\/\\\\",
    "//!!\\//<!!>\\\\\\",
    "///\\\\",
    "<!>!",
    "/</!!>\\"
];

for (const seq of sequences) {
    console.log(">Input");
    console.log(seq);

    const stack = [];
    const pair = { '/': '\\', '<': '>', '!': '!' };
    let isEpic = true;

    for (let char of seq) {
        if (['/', '<', '!'].includes(char)) {
            stack.push(char);
        } else if (['\\', '>', '!'].includes(char)) {
            if (!stack.length || pair[stack.pop()] !== char) {
                isEpic = false;
                break;
            }
        }
    }

    console.log("Output");
    console.log(isEpic && stack.length === 0 ? "Epic" : "Not Epic");
}