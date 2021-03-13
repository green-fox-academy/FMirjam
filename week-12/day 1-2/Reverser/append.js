export function append(partA, partB) {
  let lengthOfTwoParts = Math.max(partA.length, partB.length);
  let appendText = [];

  for (let i = 0; i < lengthOfTwoParts; i++) {
    appendText.push(partA[i]);
    appendText.push(partB[i]);
  }
  return appendText;
}
