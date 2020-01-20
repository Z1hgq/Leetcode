/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if ((typeof x) !== "number") {
        return 0;
    }
    let str = String(x);
    let arr;
    if (str.startsWith("-")) {
        str = str.replace("-", "");
    }
    arr = str.split("");
    arr.reverse();
    str = arr.join("");
    str = Number(str);
    if (str > 2147483648) {
        return 0;
    }
    if (String(x).startsWith("-")) {
        return 0 - str;
    }
    return str;
};