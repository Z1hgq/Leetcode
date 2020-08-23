function majorityElement(nums: number[]): number {
    nums.sort();
    let mid = Math.floor(nums.length / 2);
    return nums[mid];
};

const arr = [1, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 5, 4, 2];
console.log(majorityElement(arr));