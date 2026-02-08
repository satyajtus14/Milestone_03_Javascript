function analyzeText(str) {

    if (typeof str !== 'string'|| str.trim() === '') {
        return "Invalid";
    }

    let words = str.split(' ');
    let longwords = '';

    for (let word of words) {
        if (word.length > longwords.length) {
            longwords = word;
        }
    }

    let token = str.replace(/\s+/g, "").length;

    return {
        longwords: longwords,
        token: token
    };
}

console.log(analyzeText("Keep coding keep shining"));
