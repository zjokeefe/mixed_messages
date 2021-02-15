// Create object to hold array of message options
const options = {
    _subject: ['You', 'I', 'We'],
    _verb: ['gave', 'have', 'made', 'took'],
    _poss: ['a', 'the'],
    _noun: ['book', 'food', 'ball', 'movie', 'puzzle'],
}

// Function for random number
const random = num => {
    return Math.floor(Math.random() * num);
}

// Loop through object to make message
const randomMessage = () => { 
    let message = [];
    for (const property in options) {
        let index = random(options[property].length);
        message.push(options[property][index]);
    }
    // Format the output
    console.log(message.join(' ') + '.');
}

// Run program to get random message
randomMessage();