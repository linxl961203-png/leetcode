/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; // 预处理k
    // 反转函数
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };
    reverse(nums, 0, n-1); // 反转整个数组
    reverse(nums, 0, k-1); // 反转前k个
    reverse(nums, k, n-1); // 反转剩余部分
};