// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var nextPermutation = function(nums) {
//     const length = nums.length;
//     if (!length) return;

//     let index = length - 2;
//     let flag = false; //用来判断是否成功交换
//     while (index >= 0) {
//         if (nums[index] < nums[index + 1]) {
//             let tempIndex = index + 1;
//             for (let i = index + 1; i < length; i++) {
//                 if (nums[i] > nums[index] && nums[i] < nums[index + 1]) {
//                     // 将满足条件的较小的值和对应的索引存储
//                     const temp = nums[index];
//                     nums[index] = nums[i];
//                     nums[i] = temp;
//                     const nums1 = nums.splice(index + 1, length - index);
//                     nums1.sort((a, b) => a - b);
//                     nums.push(...nums1);
//                     // 将状态改为true
//                     flag = true;
//                     break;
//                 }
//             }
//             if(!flag){
//                 // 将满足条件的较小的值和对应的索引存储
//                 const temp = nums[index];
//                 nums[index] = nums[index + 1];
//                 nums[index + 1] = temp;
//                 const nums1 = nums.splice(index + 1, length - index);
//                 nums1.sort((a, b) => a - b);
//                 nums.push(...nums1);
//                 // 将状态改为true
//                 flag = true;
//                 break;
//             }
//             // for (let i = index - 1; i >= 0; i--) {
//             //     if (nums[i] < nums[index]) {
//             //         // 将满足条件的较小的值和对应的索引存储
//             //         const temp = nums[i];
//             //         nums[i] = nums[index];
//             //         nums[index] = temp;
//             //         const nums1 = nums.splice(i + 1, length - i);
//             //         nums1.sort((a, b) => a - b);
//             //         nums.push(...nums1);
//             //         // 将状态改为true
//             //         flag = true;
//             //         break;
//             //     }
//             // }
//         }
//         index--;
//     }

//     if (!flag) nums.sort((a, b) => a - b)
// };

// const arr = [1, 3, 2]
// nextPermutation(arr)
// console.log(arr);

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        let n = nums[i];
        // 找到第一个比后面的数小的数
        if (n < nums[i + 1]) {
            let idx = i + 1;
            // 找出后面比n大的数当中的最小值，因为后面是降序排列所以一直判断是否比n大即可
            while (nums[idx + 1] > n) {
                idx++;
            }
            // 替换i与idx位置的数
            nums[i] = nums[idx];
            nums[idx] = n;
            // 此时i后面的是一个降序排列，将这个排列转为升序排列（后面所有数对称调换）
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right--;
            }
            break;
        } else if (i === 0) {
            nums.reverse()
        }
    }
};