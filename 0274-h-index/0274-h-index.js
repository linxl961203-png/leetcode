/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    // 降序排序
    citations.sort((a, b) => b - a);
    let h = 0;
    const n = citations.length;
    // 遍历找最大h：第h+1篇论文（索引h）的引用数 ≥ h+1 → h++
    for (let i = 0; i < n; i++) {
        if (citations[i] >= i + 1) {
            h = i + 1;
        } else {
            // 降序排列，后续值更小，无需继续遍历
            break;
        }
    }
    return h;
};