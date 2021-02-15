// Create object to hold array of message options
const message = {
    _subject: ['You', 'I', 'We', 'He', 'She'],
    _verb: ['gave', 'have', 'made', 'took'],
    _poss: ['a', 'the'],
    _noun: ['book', 'food', 'ball', 'movie'],
    get subject() {
        return this._subject;
    },
    get verb() {
        return this._verb;
    },
    get poss() {
        return this._poss;
    },
    get noun() {
        return this._noun;
    },
}