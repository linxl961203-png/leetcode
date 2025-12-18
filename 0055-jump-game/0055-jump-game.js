/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 特殊情况：数组长度为1，本身就在最后一个下标，直接返回true
    if (nums.length === 1) return true;
    
    let maxReach = 0; // 记录当前能到达的最远下标
    const len = nums.length;
    
    for (let i = 0; i < len; i++) {
        // 如果当前下标超出了最远可达范围，说明无法继续前进，返回false
        if (i > maxReach) return false;
        
        // 更新最远可达位置：当前位置能跳的最远位置 vs 已记录的最远位置
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // 提前终止：如果最远可达位置已经覆盖最后一个下标，直接返回true
        if (maxReach >= len - 1) return true;
    }
    
    // 理论上不会走到这里，因为循环中已提前判断
    return false;
};