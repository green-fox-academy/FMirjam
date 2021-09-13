function repetition(text: string) {
  let textArray: string[] = text.split('');
  let object: { [key: string]: number } = {};
  let resultArray = [];
  let emptyString = '';

  if (textArray.length === 0) {
    return (resultArray = [emptyString, textArray.length]);
  }

  for (let rep of textArray) {
    if (object[rep]) {
      object[rep]++;
    } else {
      object[rep] = 1;
    }
  }
  const valueArray: number[] = Object.values(object).sort();
  const lastValue: number = valueArray[valueArray.length - 1];
  const key: string = Object.keys(object).find((k) => object[k] === lastValue);

  return (resultArray = [key, lastValue]);
}

const text1: string = '';
console.log(repetition(text1));
