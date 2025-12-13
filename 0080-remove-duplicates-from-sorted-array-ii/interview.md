### 中文思路描述
这道题的核心解法是**快慢指针法**，利用有序数组“重复元素连续”的特性，在原地完成数组修改，满足“重复元素最多保留两次”的要求，具体思路如下：
1. **边界处理**：若数组长度≤2，本身天然满足“最多两次重复”，直接返回数组长度即可；
2. **指针初始化**：慢指针（slow）和快指针（fast）均从索引2开始——前两个元素无需判断，必然符合“最多两次”规则，慢指针标记「有效区间的下一个空位」（有效区间为`[0, slow-1]`），快指针负责遍历整个数组；
3. **遍历判断**：快指针逐个扫描元素，若当前快指针元素与慢指针前两位元素（`nums[slow-2]`）不相等，说明该元素可加入有效区间（未超过两次重复）；
4. **原地更新**：将快指针指向的符合条件的元素赋值到慢指针的空位，慢指针后移扩大有效区间；无论是否符合条件，快指针始终后移继续扫描；
5. **返回结果**：遍历结束后，慢指针的位置即为修改后数组的新长度（有效区间的长度）。

### English Description of the Solution
This problem aims to remove duplicates from a **sorted array** (retaining at most two occurrences of each element), with the core approach of the "slow-fast pointer method" to achieve in-place modification and meet the O(1) extra space requirement. The detailed logic is as follows:
1. **Boundary Handling**: If the length of the array is ≤ 2, it naturally satisfies the "at most two duplicates" rule, so we directly return the length of the array;
2. **Pointer Initialization**: Both the slow pointer and the fast pointer start from index 2 — the first two elements do not need verification and definitely comply with the rule. The slow pointer marks the "next empty position of the valid interval" (the valid interval is `[0, slow-1]`), and the fast pointer is responsible for traversing the entire array;
3. **Core Judgment Logic**: Leveraging the characteristic of sorted arrays (duplicate elements are consecutive), when the fast pointer traverses each element, it only needs to compare the element two positions before the slow pointer (`nums[slow-2]`) with the current element pointed to by the fast pointer (`nums[fast]`):
   - If they are not equal: It means the current element does not exceed two duplicates and can be included in the valid interval;
   - If they are equal: It means the current element is a duplicate for the third time or more and needs to be skipped;
4. **In-place Array Update**: If the element is eligible, assign the element pointed to by the fast pointer to the empty position of the slow pointer, and move the slow pointer backward (expand the valid interval); regardless of whether the element is eligible, the fast pointer always moves backward to continue traversal;
5. **Return Result**: After the traversal ends, the position of the slow pointer is the valid length of the modified array (the length of the valid interval `[0, slow-1]`).
