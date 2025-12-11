# 解题思路

左右指针法解决 “移除指定元素” 问题，
可类比超市整理货架的场景：数组就是货架，左右指针就是货架的左右起点，目标值是临期牛奶。
我们用两个指针分别指向货架的左侧起点和右侧终点的后一位。
左指针负责从左到右检查每一个 “商品”，一旦发现是需要移除的 “临期牛奶”，就从右指针前一位取一个 “正常商品”填补到左指针位置，同时右指针左移，
也就是说右侧可调用的商品少了一个；
如果左指针检查到的是正常商品，则直接右移继续检查。
重复此过程，直到左指针超过右指针，此时左指针的位置就是货架上正常商品的数量。
核心逻辑：仅在遇到需移除的元素时，用右侧有效元素替换，减少无意义的赋值操作，实现原地高效整理。

# The problem-solving approach 

The left-right pointer method solves the problem of "removing specified elements",
and can be analogized to the scenario of sorting shelves in a supermarket: the array is the shelf, the left and right pointers are the left and right starting positions of the shelf, and the target value is expired milk.

We use two pointers to point respectively to the left starting position of the shelf and the position just after the right end of the shelf.

The left pointer is responsible for checking each "product" from left to right. Once it finds an "expired milk" that needs to be removed, it takes a "normal product" from the position just before the right pointer to fill the position of the left pointer, and at the same time moves the right pointer to the left—
which means the number of available products on the right side is reduced by one.

If the left pointer checks a normal product, it simply moves to the right to continue checking.

This process is repeated until the left pointer passes the right pointer. At this point, the position of the left pointer is the number of normal products on the shelf.

Core logic: Only when encountering an element to be removed, replace it with a valid element from the right side, reducing meaningless assignment operations and achieving efficient in-place sorting.
