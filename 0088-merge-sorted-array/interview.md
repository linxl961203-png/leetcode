一、中文（面试简洁版）
双指针法核心是利用两个指针分别指向两个有序数组的有效元素末尾，从后向前比较元素大小，
将更大的元素放入 nums1 的末尾空闲位置，逐步向前移动指针。这样能避免覆盖 nums1 的有效元素，
且无需额外空间，最后若 nums2 还有剩余元素，直接填充到 nums1 剩余位置即可，时间复杂度是 O (m+n)，空间复杂度 O (1)。
二、英文（面试简洁版）
The core idea of the two-pointer method is to use two pointers pointing to the end of the valid elements of the two sorted arrays respectively.
We compare the elements from the back to the front, put the larger element into the free position at the end of nums1, and move the pointers forward step by step.
This avoids overwriting the valid elements of nums1 and requires no extra space. Finally, if there are remaining elements in nums2, 
we directly fill them into the remaining positions of nums1. The time complexity is O(m+n) and the space complexity is O(1).
