/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const n = nums.length;
    if (n === 1) return 0; // 只有一个元素，无需跳跃
    
    let jumps = 0; // 记录跳跃次数
    let currentEnd = 0; // 当前跳跃的边界（到达该位置需要跳一次）
    let maxReach = 0; // 当前能到达的最远位置
    
    // 遍历到倒数第二个元素即可（最后一个元素是终点，无需处理）
    for (let i = 0; i < n - 1; i++) {
        // 更新当前能到达的最远位置
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // 当遍历到当前跳跃的边界时，需要进行一次跳跃
        if (i === currentEnd) {
            jumps++;
            currentEnd = maxReach; // 更新下一次跳跃的边界
            
            // 提前终止：如果新边界已覆盖终点，无需继续遍历
            if (currentEnd >= n - 1) break;
        }
    }
    
    return jumps;
};