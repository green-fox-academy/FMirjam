function repeatedString(s: string, n: number): number {
  let repeat: number = Math.round(n / s.length);
  let remainder: number = n % s.length;
  let answer: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    if (s.charAt(i) === 'a') {
      answer += repeat;
      if (i < remainder) answer++;
    }
  }
  return answer;
}

console.log(repeatedString('aba', 10));
