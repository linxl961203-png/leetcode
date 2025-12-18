/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;
    let totalGas = 0; // 总油量
    let totalCost = 0; // 总消耗
    let currentTank = 0; // 当前油箱油量
    let start = 0; // 候选起点
    
    for (let i = 0; i < n; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        // 计算从i站出发到i+1站后，油箱剩余油量
        currentTank += gas[i] - cost[i];
        
        // 若当前油箱油量为负，说明从start到i的所有站都不能作为起点
        if (currentTank < 0) {
            start = i + 1; // 更换起点为i+1
            currentTank = 0; // 重置当前油箱
        }
    }
    
    // 总油量 < 总消耗，必然无解；否则返回唯一起点
    return totalGas >= totalCost ? start : -1;
};