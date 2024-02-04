const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];

const anagrams = [];

let continueLoop = false;
for (const word of words) {
  const currentAnagrams = [];
  for (let i = 0; i < anagrams.length; i++) {
    if (anagrams[i].includes(word)) {
      continueLoop = true;
      break;
    }
  }

  if (continueLoop) {
    continueLoop = false;
    continue;
  }

  for (const word1 of words) {
    if (isAnagram(word, word1)) {
      currentAnagrams.push(word1);
    }
  }
  anagrams.push(currentAnagrams);
}

console.log(anagrams);

function isAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  for (let i = 0; i < word1.length; i++) {
    if (!word1.includes(word2[i]) || !word2.includes(word1[i])) {
      return false;
    }
  }
  return true;
}
