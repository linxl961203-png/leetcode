# 解题思路

左右指针法解决“移除指定元素”问题，可类比超市整理货架的场景：
我们用两个指针分别指向货架（数组）的左侧起点（左指针）和右侧终点的后一位（右指针）。
左指针负责从左到右检查每一个“商品”（数组元素），一旦发现是需要移除的“临期牛奶”（目标值val），
就从右指针前一位取一个“正常商品”（非val元素）填补到左指针位置，同时右指针左移（表示右侧可调用的商品少了一个）；
若左指针检查到的是正常商品，则直接右移继续检查。重复此过程，直到左指针超过右指针，此时左指针的位置就是货架上正常商品的数量。
核心逻辑：仅在遇到需移除的元素时，用右侧有效元素替换，减少无意义的赋值操作，实现原地高效整理。

# The problem-solving approach 

The two-pointer (left-right) method for solving the "remove specified element" problem can be understood by analogy with sorting shelves in a supermarket:
We use two pointers pointing to the left start (left pointer) and the position after the right end (right pointer) of the shelf (array) respectively.
The left pointer checks each "product" (array element) from left to right: if it finds an "expired milk" (target value val) that needs to be removed, 
it takes a "normal product" (element not equal to val) from the position before the right pointer to fill the left pointer's position, 
and moves the right pointer left (indicating one fewer available product on the right);
if the left pointer checks a normal product, it moves right directly to continue checking. 
This process repeats until the left pointer exceeds the right pointer, 
at which point the position of the left pointer is the number of normal products on the shelf.
Core logic: Only when encountering the element to be removed, replace it with a valid element from the right side, 
reducing meaningless assignment operations and achieving efficient in-place sorting.
