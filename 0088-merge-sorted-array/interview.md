# 一、解题思路

双指针法核心是利用两个指针分别指向两个有序数组的有效元素末尾，从后向前比较元素大小，
将更大的元素放入 nums1 的末尾空闲位置，逐步向前移动指针。这样能避免覆盖 nums1 的有效元素，
且无需额外空间，最后若 nums2 还有剩余元素，直接填充到 nums1 剩余位置即可，时间复杂度是 O (m+n)，空间复杂度 O (1)。

# 二、solution idea

The core idea of the two-pointer method is to use two pointers pointing to the end of the valid elements of the two sorted arrays respectively.
We compare the elements from the back to the front, put the larger element into the free position at the end of nums1, and move the pointers forward step by step.
This avoids overwriting the valid elements of nums1 and requires no extra space. Finally, if there are remaining elements in nums2, 
we directly fill them into the remaining positions of nums1. The time complexity is O(m+n) and the space complexity is O(1).

# 三、时间复杂度和空间复杂度

1. 时间复杂度
看算法要处理多少个元素，若总共处理 m+n 个元素（每个元素只处理 1 次），时间复杂度就是 O (m+n)；核心是「处理元素的总数量」决定时间复杂度。
2. 空间复杂度
看算法额外用了多少空间：只用到几个固定的变量（如指针），没新建数组 / 对象，空间复杂度就是 O (1)；核心是「额外空间是否随数据量增加而变多」，不变就是 O (1)。
# 四、 Time Complexity and Space Complexity

1. Time Complexity
It depends on how many elements the algorithm processes. If it processes m+n elements in total (each element is processed once), the time complexity is O(m+n); the core is that the "total number of elements processed" determines time complexity.

3. Space Complexity
It depends on how much extra space the algorithm uses: if only a few fixed variables (e.g., pointers) are used, with no new arrays/objects created, the space complexity is O(1); the core is whether "extra space increases with data size" — if not, it’s O(1).
