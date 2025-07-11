const formations = [
    {
        formation: [1, 2, 3, 4, 5],
        commands: ["destroy 3", "swap 0 1", "add 6", "center"]
    },
    {
        formation: [1, 2, 3, 4, 5],
        commands: [
            "add 6",
            "swap 0 5",
            "swap 1 4",
            "swap 2 3",
            "swap 2 100",
            "swap 2 2",
            "center"
        ]
    },
    {
        formation: [1, 2],
        commands: ["insert 3 2", "center", "destroy 1", "destroy 2", "center"]
    }
];

for (const { formation, commands } of formations) {
    console.log(">Input");
    console.log(JSON.stringify(formation));
    console.log(JSON.stringify(commands));
    let aurors = [...formation];

    console.log("Output");
    for (const cmd of commands) {
        const parts = cmd.split(" ");
        switch (parts[0]) {
            case "destroy":
                const d = +parts[1];
                if (d >= 0 && d < aurors.length) aurors.splice(d, 1);
                break;
            case "swap":
                const i1 = +parts[1], i2 = +parts[2];
                if (
                    i1 >= 0 &&
                    i2 >= 0 &&
                    i1 < aurors.length &&
                    i2 < aurors.length &&
                    i1 !== i2
                ) {
                    [aurors[i1], aurors[i2]] = [aurors[i2], aurors[i1]];
                }
                break;
            case "add":
                aurors.push(+parts[1]);
                break;
            case "insert":
                const id = +parts[1], index = +parts[2];
                if (index >= 0 && index <= aurors.length) aurors.splice(index, 0, id);
                break;
            case "center":
                const mid = Math.floor((aurors.length - 1) / 2);
                console.log(
                    aurors.length % 2 === 0
                        ? `${aurors[mid]} ${aurors[mid + 1]}`
                        : `${aurors[mid]}`
                );
                continue;
        }
        console.log(aurors.join(" "));
    }
}