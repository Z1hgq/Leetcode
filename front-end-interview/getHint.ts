/**
 * https://leetcode-cn.com/problems/bulls-and-cows/
 * @param {*} secret
 * @param {*} guess
 */
function getHint(secret: string, guess: string): string {
    function replace(str: string, index: number, char: string): string {
        let arr = str.split("");
        arr[index] = char;
        return arr.join("");
    }
    let A = 0,
        B = 0,
        counted: Array<number> = [];
    for (let index = 0; index < guess.length; index++) {
        if (guess[index] === secret[index]) {
            secret = replace(secret, index, "a");
            A++;
            counted.push(index);
        }
    }
    for (let index = 0; index < guess.length; index++) {
        if (counted.indexOf(index) !== -1) continue;
        const i = secret.indexOf(guess[index]);
        if (i !== -1) {
            secret = replace(secret, i, "a");
            B++;
        }
    }
    return `${A}A${B}B`;
}
console.log(getHint("1807", "7810"));
console.log(getHint("1123", "0111"));
console.log(getHint("2211", "1122"));
console.log(getHint("011", "110"));
console.log(getHint("11", "10"));
console.log(getHint("01", "11"));
