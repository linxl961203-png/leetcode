class RandomizedSet {
    constructor() {
        // 存储元素的数组：保证getRandom O(1)
        this.nums = [];
        // 哈希表：key=元素值，value=元素在nums中的下标 → 保证查找/插入/删除 O(1)
        this.valToIndex = new Map();
    }

    /**
     * 插入元素
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        // 元素已存在，返回false
        if (this.valToIndex.has(val)) {
            return false;
        }
        // 元素不存在：添加到数组末尾，哈希表记录下标
        this.valToIndex.set(val, this.nums.length);
        this.nums.push(val);
        return true;
    }

    /**
     * 删除元素
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        // 元素不存在，返回false
        if (!this.valToIndex.has(val)) {
            return false;
        }
        // 1. 获取待删除元素的下标
        const deleteIndex = this.valToIndex.get(val);
        // 2. 获取数组最后一个元素（用于交换）
        const lastVal = this.nums[this.nums.length - 1];
        
        // 3. 交换待删除元素和最后一个元素（避免数组移位）
        this.nums[deleteIndex] = lastVal;
        // 4. 更新最后一个元素在哈希表中的下标
        this.valToIndex.set(lastVal, deleteIndex);
        
        // 5. 删除数组最后一个元素（O(1)）
        this.nums.pop();
        // 6. 删除哈希表中待删除元素的映射
        this.valToIndex.delete(val);
        
        return true;
    }

    /**
     * 随机获取元素
     * @return {number}
     */
    getRandom() {
        // 生成0 ~ 数组长度-1的随机下标，返回对应元素（等概率）
        const randomIndex = Math.floor(Math.random() * this.nums.length);
        return this.nums[randomIndex];
    }
}

/**
 * 用法示例：
 * const randomizedSet = new RandomizedSet();
 * randomizedSet.insert(1); // 返回 true
 * randomizedSet.remove(2); // 返回 false
 * randomizedSet.insert(2); // 返回 true
 * randomizedSet.getRandom(); // 随机返回 1 或 2
 * randomizedSet.remove(1); // 返回 true
 * randomizedSet.insert(2); // 返回 false
 * randomizedSet.getRandom(); // 始终返回 2
 */