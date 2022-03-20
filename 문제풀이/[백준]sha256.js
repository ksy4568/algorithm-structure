// Hash를 구하는 내장모듈 crypto를 사용하여 sha-256 Hash를 구한다.

const crypto = require('crypto');
const shasum = crypto.createHash('sha256');

function question(input) {
  const output = shasum.update(input).digest("hex");
  
  return output
}

question('Baekjoon');