function countBs(string) {
    return string.split("").reduce((totalBs, currentChar) => {
        if (currentChar === "B") {
            totalBs++
        }
        return totalBs;
    }, 0);
}


function countChar(string, targetChar) {
    return string.split("").reduce((totalChars, currentChar) => {
        if (currentChar === targetChar) {
            totalChars++
        }
        return totalChars;
    }, 0);
}

console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));