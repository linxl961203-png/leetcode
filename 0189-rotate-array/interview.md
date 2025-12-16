### 一、问题背景
给定整数数组 `nums` 和非负整数 `k`，要求将数组元素**向右轮转 k 个位置**（如 `nums = [1,2,3,4,5,6,7], k=3` → 轮转后 `[5,6,7,1,2,3,4]`）。需提供至少3种解法，且包含**空间复杂度 O(1) 的原地算法**。

### 二、三种核心解法（按优劣势排序，含原地解法）
#### 方法1：数组反转法（最优，原地 O(1) 空间 + O(n) 时间）
##### 中文解题思路
1. **核心原理**：利用“反转数组”的特性，通过三次反转实现轮转，无需额外空间；
2. **关键步骤**：
   - 预处理 `k`：因轮转 `n` 次等价于未轮转，故 `k = k % nums.length`（`n` 为数组长度）；
   - 反转整个数组（如 `[1,2,3,4,5,6,7]` → `[7,6,5,4,3,2,1]`）；
   - 反转前 `k` 个元素（`[7,6,5]` → `[5,6,7]`，数组变为 `[5,6,7,4,3,2,1]`）；
   - 反转剩余 `n-k` 个元素（`[4,3,2,1]` → `[1,2,3,4]`，最终得到 `[5,6,7,1,2,3,4]`）；
3. **优势**：原地操作、时间效率最高，无额外空间开销。

##### English Solution Analysis
1. **Core Principle**：Leverage the feature of "array reversal" to achieve rotation through three reversals, with no extra space required;
2. **Key Steps**：
   - Preprocess `k`: Since rotating `n` times is equivalent to no rotation, set `k = k % nums.length` (`n` is the array length);
   - Reverse the entire array (e.g., `[1,2,3,4,5,6,7]` → `[7,6,5,4,3,2,1]`);
   - Reverse the first `k` elements (`[7,6,5]` → `[5,6,7]`, array becomes `[5,6,7,4,3,2,1]`);
   - Reverse the remaining `n-k` elements (`[4,3,2,1]` → `[1,2,3,4]`, finally get `[5,6,7,1,2,3,4]`);
3. **Advantage**：In-place operation, highest time efficiency, no extra space overhead.

##### 代码示例（JavaScript）
```javascript
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; // 预处理k
    // 反转函数
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };
    reverse(nums, 0, n-1); // 反转整个数组
    reverse(nums, 0, k-1); // 反转前k个
    reverse(nums, k, n-1); // 反转剩余部分
};
```

#### 方法2：额外数组法（易理解，O(n) 空间 + O(n) 时间）
##### 中文解题思路
1. **核心原理**：利用额外数组存储轮转后的元素，再复制回原数组；
2. **关键步骤**：
   - 计算数组长度 `n`，预处理 `k = k % n`；
   - 创建新数组 `res`，遍历原数组：
     - 原数组索引 `i` 的元素，轮转后应位于 `(i + k) % n` 的位置；
   - 将新数组的值覆盖回原数组；
3. **优势**：逻辑简单、易实现；劣势：需额外 O(n) 空间，不满足原地要求。

##### English Solution Analysis
1. **Core Principle**：Use an additional array to store elements after rotation, then copy them back to the original array;
2. **Key Steps**：
   - Calculate the array length `n` and preprocess `k = k % n`;
   - Create a new array `res`, traverse the original array:
     - The element at index `i` of the original array should be placed at position `(i + k) % n` after rotation;
   - Overwrite the original array with values from the new array;
3. **Advantage**：Simple logic and easy to implement; Disadvantage: Requires O(n) extra space, does not meet the in-place requirement.

##### 代码示例（JavaScript）
```javascript
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    const res = new Array(n);
    for (let i = 0; i < n; i++) {
        res[(i + k) % n] = nums[i];
    }
    // 覆盖原数组
    for (let i = 0; i < n; i++) {
        nums[i] = res[i];
    }
};
```

#### 方法3：逐个右移法（暴力，O(1) 空间 + O(n*k) 时间）
##### 中文解题思路
1. **核心原理**：模拟“每次右移1位，重复k次”的过程，纯原地操作；
2. **关键步骤**：
   - 预处理 `k = k % n`（减少无效轮转）；
   - 循环 `k` 次，每次执行：
     - 保存数组最后一个元素；
     - 将数组所有元素向右移动1位（从后往前遍历，避免覆盖）；
     - 将保存的最后一个元素放到数组首位；
3. **优势**：纯原地、逻辑直观；劣势：时间复杂度高（k 较大时效率极低），仅适合理解原理。

##### English Solution Analysis
1. **Core Principle**：Simulate the process of "shifting right by 1 position each time, repeating k times", with pure in-place operation;
2. **Key Steps**：
   - Preprocess `k = k % n` (reduce invalid rotations);
   - Loop `k` times, execute the following each time:
     - Save the last element of the array;
     - Shift all elements of the array to the right by 1 position (traverse from back to front to avoid overwriting);
     - Place the saved last element at the first position of the array;
3. **Advantage**：Pure in-place, intuitive logic; Disadvantage: High time complexity (extremely low efficiency when k is large), only suitable for understanding the principle.

##### 代码示例（JavaScript）
```javascript
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    for (let i = 0; i < k; i++) {
        const last = nums[n - 1]; // 保存最后一个元素
        // 从后往前右移
        for (let j = n - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = last; // 放到首位
    }
};
```

### 三、解法对比总结
| 方法         | 时间复杂度 | 空间复杂度 | 核心优势               | 适用场景               |
|--------------|------------|------------|------------------------|------------------------|
| 数组反转法   | O(n)       | O(1)       | 最优效率、原地操作     | 生产环境、追求性能     |
| 额外数组法   | O(n)       | O(n)       | 逻辑简单、易调试       | 小规模数据、快速实现   |
| 逐个右移法   | O(n*k)     | O(1)       | 纯原地、原理直观       | 理解轮转逻辑、k 极小   |

其中，**数组反转法**是最优解，满足“原地 O(1) 空间 + O(n) 时间”的要求，也是面试中最推荐的解法。
