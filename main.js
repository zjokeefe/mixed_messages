// Create object to hold array of message options
const options = {
    _subject: ['You', 'I', 'We', 'He', 'She'],
    _verb: ['gave', 'have', 'made', 'took'],
    _poss: ['a', 'the'],
    _noun: ['book', 'food', 'ball', 'movie'],
}

// Function for random number
const random = num => {
    return Math.floor(Math.random() * num);
}

// Loop through object to make message
let message = [];

for (const property in options) {
    let index = random(options[property].length);
    message.push(options[property][index]);
}
