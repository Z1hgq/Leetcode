/*
 * @Description: 选择排序
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-15 17:12:55
 */

const SelectSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        const temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}
const a = [10, 1, 2, 4, 5, 1, 2, 7, 6, 4, 7, 8];
SelectSort(a);
console.log(a);

