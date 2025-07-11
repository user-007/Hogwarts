const archiveTests = [
    [["Harry", "Hermione", "Harry", "Ron"], "Harry"],
    [["Ginny", "Luna", "Neville", "Ginny"], "Ginny"],
    [["Ron", "Hermione", "Luna"], "Dumbledore"],
    [["Dobby", "Ron", "Hermione", "Harry"], "Harry"]
];

for (const [records, term] of archiveTests) {
    console.log(">Input");
    console.log(JSON.stringify(records) + `, "${term}"`);

    const first = records.indexOf(term);
    const last = records.lastIndexOf(term);

    console.log("Output");
    if (first === -1) {
        console.log("Record not found");
    } else {
        console.log(`First Occurrence: ${first}`);
        console.log(`Last Occurrence: ${last}`);
    }
}