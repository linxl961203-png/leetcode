/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 数组长度为0时直接返回0
    if (nums.length === 0) return 0;
    // 慢指针初始指向第一个元素（第一个元素必然唯一）
    let slow = 1;
    // 快指针从第二个元素开始遍历
    for (let fast = 1; fast < nums.length; fast++) {
        // 找到与前一个唯一元素不同的新元素
        if (nums[fast] !== nums[slow - 1]) {
            // 将新元素放到慢指针位置
            nums[slow] = nums[fast];
            // 慢指针右移，准备存放下一个唯一元素
            slow++;
        }
    }
    // 慢指针的位置即为唯一元素的个数
    return slow;
};