const voteSets = [
    ["Yes", "No", "Yes", "Abstain", "Yes"],
    ["No", "No", "Yes"],
    ["Yes", "No"],
    ["Abstain"],
    ["No", "No", "Abstain", "Abstain", "Yes", "Yes"],
    ["No", "Abstain", "Abstain"]
];

for (const votes of voteSets) {
    console.log(">Input");
    console.log(JSON.stringify(votes));

    const count = { Yes: 0, No: 0, Abstain: 0 };
    votes.forEach(v => count[v]++);
    const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    const result = sorted[0][1] === sorted[1]?.[1] ? "Tie" : sorted[0][0];

    console.log("Output");
    console.log(result);
}