/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    //索引大-索引小的最大差值
    // 边界处理：空数组/只有1天股价，无法交易
    if (prices.length < 2) return 0;

    let minPrice = prices[0]; // 记录遍历到当前的最低买入价
    let maxProfit = 0;        // 记录最大利润

    // 从第2天开始遍历（索引1）
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        // 计算当天卖出的利润，更新最大利润
        const currentProfit = currentPrice - minPrice;
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
        // 更新最低买入价（如果当天价格更低）
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
    }

    return maxProfit;
};