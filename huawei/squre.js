
const len = 3
const square = [];
arr = [
    '8 1 6',
    '3 5 7',
    '4 99 2'
]
for (const item of arr) {
    let lineArr = item.split(' ');
    for (let i = 0; i < len; i++) {
        lineArr[i] = parseInt(lineArr[i]);
    }
    square.push(lineArr);
}

const lineCount = [];
const colCount = [];
let lineError;
let colError;
let rightCount;

for (let i = 0; i < len; i++) {
    let lcount = 0;
    let ccount = 0;
    for (let j = 0; j < len; j++) {
        lcount += square[i][j];
        ccount += square[j][i];
    }
    lineCount.push(lcount);
    colCount.push(ccount);
}

const lineCopy = [...lineCount];
const colCopy = [...colCount];

lineCopy.sort();
if (lineCopy[0] !== lineCopy[1] && lineCopy[1] === lineCopy[2]) {
    lineError = lineCopy[0];
    rightCount = lineCopy[1];
} else {
    lineError = lineCopy[len - 1];
    rightCount = lineCopy[0];
}
colCopy.sort();
if (colCopy[0] !== colCopy[1] && colCopy[1] === colCopy[2]) {
    colError = colCopy[0];
} else {
    colError = colCopy[len - 1];
}
const lineIndex = lineCount.indexOf(lineError);
const colIndex = colCount.indexOf(colError);
const rightNum = rightCount - lineError + square[lineIndex][colIndex];

console.log(`${lineIndex + 1} ${colIndex + 1} ${rightNum}`);

