let dictionary = {
    "apple": "A round fruit with red or green skin and a whitish interior",
    "book": "A set of written or printed pages, usually bound with a protective cover",
    "car": "A road vehicle, typically with four wheels, powered by an internal combustion engine",
    "dog": "A domesticated carnivorous mammal with a barking sound",
    "elephant": "A large mammal with a trunk, native to Africa and Asia"
};

while (true) {
    let word = prompt("Enter a word: ");
    if (word === "exit") {
        break;
    }
    if (dictionary[word]) {
        alert(`The meaning of the word '${word}' is: ${dictionary[word]}`);
    } else {
        alert(`The word '${word}' is not in the dictionary.`);
    }
}