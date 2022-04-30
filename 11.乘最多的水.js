/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    const length = height.length;
    if (length <= 1) return 0;
    let maxArea = 0;
    // 利用双指针，对比两端的指针对应板高，板短的一侧向内收缩
    let i = 0;
    let j = length - i - 1;

    while (j > i) {
        const heightI = height[i];
        const heightJ = height[j];
        const s = j - i;
        if (heightI > heightJ) {
            area = heightJ * s;
            j--;
        } else {
            area = heightI * s;
            i++;
        }
        if (area > maxArea) {
            maxArea = area
        }
    }

    return maxArea;

    /* 时间复杂度太大 */
    // const length = height.length
    // if (length <= 1) return 0;
    // const db = []
    // for (let i = 0; i < length; i++) {
    //     db[i] = 0
    //     for (let j = i + 1; j < length; j++) {
    //         const s = (j - i) * Math.min(height[i], height[j])
    //         if (s > db[i]) {
    //             db[i] = s
    //         }
    //     }
    // }

    // return Math.max(...db)
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));