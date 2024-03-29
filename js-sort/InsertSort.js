/*
 * @Description: 插入排序
 * @Autor: gqzhang
 * @LastEditors: gqzhang
 * @LastEditTime: 2021-03-15 17:16:34
 */

/*
 * 1. 从第一个元素开始，该元素可以认为已经被排序；
 * 2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；
 * 3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；
 * 4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 * 5. 将新元素插入到该位置后；
 * 6. 重复步骤2~5。
*/
const InsertSort = (arr = []) => {
    let cur, index;
    for (let i = 1; i < arr.length; i++) {
        cur = arr[i];
        index = i - 1;
        while (index > 0 && cur < arr[index]) {
            arr[index + 1] = arr[index];
            index--;
        }
        arr[index + 1] = cur;
    }
    return arr;
}

const a = [1, 2, 4, 5, 1, 2, 7, 6, 4, 7, 8];
InsertSort(a);
console.log(a);