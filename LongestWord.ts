function findLongestWord(sentence: string): string {
    const words = sentence.split(' ');
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
const sentence = "This is a sample sentence for testing.";
const longestWord = findLongestWord(sentence);
console.log(`Longest word in the sentence: ${longestWord}`);
