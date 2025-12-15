### 一、、中文解题思路
1. **核心原理**：多数元素的出现次数超过数组长度的一半，因此在遍历数组时，将“候选元素”与其他元素两两抵消，最终剩下的候选元素必然是多数元素。
2. **具体步骤**：
   - 初始化：定义两个变量——`candidate`（存储当前候选元素）、`count`（候选元素的投票计数，初始为0）；
   - 遍历数组：
     - 若 `count = 0`，将当前元素设为新的 `candidate`，并将 `count` 置为1；
     - 若当前元素等于 `candidate`，`count += 1`（投票支持）；
     - 若当前元素不等于 `candidate`，`count -= 1`（投票抵消）；
   - 结果返回：遍历结束后，`candidate` 即为多数元素（题目保证存在，无需额外验证）。
3. **逻辑本质**：非多数元素的所有投票都会被多数元素的投票“抵消”，而多数元素剩余的票数足以保证其最终成为候选。

### 二、English Solution Analysis
1. **Core Principle**：The majority element appears more than half the length of the array. Thus, when traversing the array, we offset the "candidate element" with other elements pairwise, and the remaining candidate element after traversal must be the majority element.
2. **Specific Steps**：
   - Initialization: Define two variables — `candidate` (stores the current candidate element) and `count` (voting count for the candidate, initialized to 0);
   - Traverse the array:
     - If `count = 0`, set the current element as the new `candidate` and set `count` to 1;
     - If the current element equals `candidate`, `count += 1` (vote for the candidate);
     - If the current element is not equal to `candidate`, `count -= 1` (offset the vote);
   - Return the result: After traversal, `candidate` is the majority element (the problem guarantees its existence, no additional verification is needed).
3. **Logical Essence**：All votes for non-majority elements will be offset by votes for the majority element, and the remaining votes of the majority element are sufficient to ensure it becomes the final candidate.
