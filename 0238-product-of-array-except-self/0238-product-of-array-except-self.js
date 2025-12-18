/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1); // 结果数组
    
    // 第一步：计算前缀乘积（不包含当前元素）
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix; // 先赋值（当前前缀乘积是前i个元素的乘积，不包含nums[i]）
        prefix *= nums[i];  // 更新前缀乘积，包含当前元素
    }
    
    // 第二步：计算后缀乘积，并与前缀乘积相乘
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix; // 前缀乘积 * 后缀乘积 = 除自身外的乘积
        suffix *= nums[i];   // 更新后缀乘积，包含当前元素
    }
    
    return answer;
};