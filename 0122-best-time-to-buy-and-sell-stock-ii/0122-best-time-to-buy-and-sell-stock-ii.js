// 最大利润：股票买卖Ⅱ（贪心最优解）
function maxProfit(prices) {
    let profit = 0;
    for(let i = 1; i < prices.length; i++) {
        // 只加正差价，等价于每天买卖（当天卖可当天买）
        profit += Math.max(0, prices[i] - prices[i-1]);
    }
    return profit;
}