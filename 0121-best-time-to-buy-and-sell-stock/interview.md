### 中文解题思路
1. **边界条件处理**：若股价数组长度小于2（空数组或仅1天股价），无法完成“买入+卖出”的交易操作，直接返回0。
2. **初始化核心变量**：
   - `minPrice`：初始化为数组第一个元素，用于记录遍历过程中遇到的**最低买入价**（确保买入成本尽可能低）；
   - `maxProfit`：初始化为0，用于记录遍历过程中能获得的**最大利润**（无盈利时保持0）。
3. **遍历计算利润**：从数组第二个元素（第二天股价）开始遍历：
   - 计算当天卖出的利润（当前股价 - 已记录的最低买入价），若该利润大于当前`maxProfit`，则更新`maxProfit`；
   - 若当天股价低于`minPrice`，则更新`minPrice`（保证后续计算利润时，买入价始终是遍历到当前为止的最优值）。
4. **返回结果**：遍历结束后，`maxProfit`即为一次交易能获得的最大利润，若全程无盈利则返回初始值0。

核心逻辑：**动态维护“最低买入价”，实时计算“当天卖出利润”，最终锁定最大利润**。因为利润=卖出价-买入价，且卖出必须在买入之后，所以只需在遍历中记录到当前天的最低买入价，无需回溯，确保时间效率最优。

### English Problem-Solving Idea
1. **Boundary Condition Handling**：If the length of the stock price array is less than 2 (empty array or only one day's price), it is impossible to complete the "buy + sell" transaction, so return 0 directly.
2. **Initialize Core Variables**：
   - `minPrice`: Initialized to the first element of the array, used to record the **lowest purchase price** encountered during traversal (to ensure the lowest possible buying cost);
   - `maxProfit`: Initialized to 0, used to record the **maximum profit** achievable during traversal (remains 0 if no profit is made).
3. **Traverse to Calculate Profit**：Start traversing from the second element of the array (the stock price on the second day):
   - Calculate the profit of selling on the current day (current price - the recorded lowest purchase price). If this profit is greater than the current `maxProfit`, update `maxProfit`;
   - If the current price is lower than `minPrice`, update `minPrice` (ensure that the purchase price is always the optimal value up to the current day for subsequent profit calculations).
4. **Return Result**：After traversal, `maxProfit` is the maximum profit obtainable from one transaction. If no profit is made throughout the process, return the initial value 0.

Core Logic: **Dynamically maintain the "lowest purchase price", calculate the "profit of selling on the current day" in real time, and finally lock in the maximum profit**. Since profit = selling price - purchase price and selling must occur after buying, we only need to record the lowest purchase price up to the current day during traversal without backtracking, ensuring optimal time efficiency.
