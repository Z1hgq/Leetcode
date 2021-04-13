Object.prototype.map = function(callbackfn) {
    Object.keys(this).map((value, index, array) => {
        callbackfn(this[value], value, this);
    });
}
const obj = new Object({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
});
obj.map((value, index, array) => {
    console.log(value, index, array);
})