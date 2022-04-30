/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 自己明确写好sort排序的回调函数，确保负数也能正确排序
    // const nums = [...nums1, ...nums2].sort((a, b) => a - b)

    // 冒泡排序（及不推荐，时间复杂度为O(n^2)，适用于无需数组合并）
    // const nums = [...nums1, ...nums2]
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 1; j < nums.length; j++) {
    //         if (nums[j] < nums[j - 1]) {
    //             let temp = nums[j]
    //             nums[j] = nums[j - 1]
    //             nums[j - 1] = temp
    //         }
    //     }
    // }
    let nums = []
    let m = nums1.length;
    let n = nums2.length;

    // i为nums1的遍历索引，j为nums2的遍历索引
    let i = 0,
        j = 0;
    let count = 0;
    while (count != (m + n)) {
        // 如果i的索引先达到了m，则表示nums1已经遍历完成
        if (i === m) {
            while (j !== n) {
                nums[count] = nums2[j];
                j++;
                count++
            }
            break;
        }

        // 如果j的索引先达到了n，则表示nums2已经遍历完成
        if (j === n) {
            while (i !== m) {
                nums[count] = nums1[i];
                i++;
                count++
            }
            break;
        }

        // 两个都未到遍历完成，则逐层比较
        if (nums1[i] < nums2[j]) {
            nums[count] = nums1[i];
            count++;
            i++;
        } else {
            nums[count] = nums2[j]
            count++;
            j++;
        }
    }

    let result = 0;
    // 如果是偶数个
    if (!(nums.length % 2)) {
        // 索引比位数要减一
        const index = Math.floor(nums.length / 2) - 1

        result = (nums[index] + nums[index + 1]) / 2
    } else {
        const index = Math.floor(nums.length / 2)
        result = nums[index]
    }

    return result
};

console.log(findMedianSortedArrays([1, 3, 5], [2, 3, 4, 5]));