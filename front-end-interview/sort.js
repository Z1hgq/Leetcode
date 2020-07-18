/********************
 * 常用排序算法实现
 * 参考链接：https://www.cnblogs.com/onepixel/articles/7674659.html
 ********************/
/**
 * 交换两个数在数组中的位置
 * @param {array} arr 
 * @param {number} i 
 * @param {number} j 
 */
function swap (arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
/**
 * 交换类：冒泡排序
 * @param {array} arr 
 * @returns {array}
 */
function bubbleSort (arr = []) {
    const len = arr.length;
    if (len < 2) {
        return arr;
    }
    for (let i = 0; i < len - 1; i++) {
        // 每次把当前循环中最大的一个数移动到最后面去
        for (j = 0; j < len - 1 - i; j++) {
            if (arr[j] >= arr[j+1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

/**
 * 交换类：快速排序
 * @param {array} arr
 * @param {number} left
 * @param {number} right
 * @returns {array}
 */
function quickSort(arr, left, right) {
    const len = arr.length;
    let partitionIndex;
    const checkedLeft = typeof left === 'number' ? left : 0;
    const checkedRight = typeof right === 'number' ? right : len - 1;
    if (checkedLeft < checkedRight) {
        partitionIndex = partition(arr, checkedLeft, checkedRight);
        quickSort(arr, checkedLeft, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, checkedRight);
    }
    return arr;
}
/**
 * 分区
 * @param {array}} arr 
 * @param {number} left 
 * @param {number} right 
 */
function partition(arr, left, right) {
    let pivot = left, index = pivot + 1;
    // 以left下标的数为基数，往后遍历到right，中间若遇到比基数小的数那么从left+1的位置开始依次+1往后交换
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    // 最后将基数与比他小的最后一个数交换位置，那么最后的数组比基数小的都在它左边，比基数大的都在它右边
    swap(arr, pivot, index - 1);
    return index - 1;
}

const arr = [1,2,1,1,3,1,3,4,5,6,3,7,8,3,4,6,7,8,3,7,3,2,7,9];
console.log(bubbleSort(arr));