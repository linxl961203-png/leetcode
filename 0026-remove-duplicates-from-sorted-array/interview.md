### 中文解释
我们可以把“有序数组去重”的问题类比成**整理图书馆按编号排序的书架**，结合快慢指针法的核心逻辑来理解：

有序数组就像摆满书籍的货架（如 `[0,0,1,1,1,2,2,3]`），书籍按编号非递减排列，重复编号的书是“冗余藏书”；我们用两个指针完成原地整理，无需额外空间：
1. **慢指针（整理员）**：站在“已整理唯一书区”的末尾（初始在第二个格子），第一个格子的书天然唯一，无需处理；整理员的核心任务是把新的唯一书放到自己脚下的格子，放完就往后挪一格，扩大已整理区。
3. **快指针（巡检员）**：从第二个格子开始逐个检查书籍，只找“和已整理区最后一本书编号不同的新书”；遇到重复书直接跳过，找到新书就告知整理员。
4. **核心操作**：巡检员找到新书时，整理员把这本新书放到自己脚下（覆盖冗余书），然后往后挪；重复书则巡检员直接略过，整理员不动。
5. **最终结果**：巡检员走完所有格子后，整理员所在的位置就是“唯一书籍的数量”；此时货架前该数量的格子里，都是有序且唯一的书，后面的冗余书无需清理（图书馆只关注前半部分）。

### 英文解释
We can analogize the "deduplication of sorted array" problem to **organizing a library shelf with books sorted by serial numbers**, and understand it with the core logic of the two-pointer method:

A sorted array is like a shelf full of books (e.g., `[0,0,1,1,1,2,2,3]`), where books are arranged in non-decreasing order of serial numbers, and books with duplicate serial numbers are "redundant books". We use two pointers to organize the shelf in-place without extra space:
1. **Slow pointer (organizer)**：Stands at the end of the "sorted unique book region" (initially at the second slot) — the book in the first slot is naturally unique and requires no processing. The organizer’s core task is to place new unique books at their feet, then move one slot right to expand the sorted region.
2. **Fast pointer (inspector)**：Checks each book one by one starting from the second slot, only looking for "new books with serial numbers different from the last book in the sorted region"; skips duplicate books directly and notifies the organizer when a new book is found.
3. **Core operation**：When the inspector finds a new book, the organizer places it at their feet (overwriting redundant books) and moves right; for duplicates, the inspector skips them and the organizer stays put.
4. **Final result**：After the inspector finishes checking all slots, the organizer’s position is "the number of unique books". At this point, the first N slots (N = organizer’s position) on the shelf contain sorted and unique books, and redundant books in the subsequent slots need not be cleared (the library only cares about the first part).
