

const MergeSort = (arr) => {
    const len = arr.length;
    if (len < 2) return arr;
    const middle = Math.floor(len / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(MergeSort(left), MergeSort(right));
}
const merge = (left, right) => {
    const res = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    while (left.length) {
        res.push(left.shift());
    }
    while (right.length) {
        res.push(right.shift());
    }
    return res;
}