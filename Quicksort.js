
/* -------------------------------------------------------------------------------------------*/

const arr = [6, 23, 9, 45, 2, 16, 5, 37, 3, 54, 22, 7]; 
console.log("Original unsorted array: " +arr);
const swap = (arr, leftIndex, rightIndex) => {
let temp = arr[leftIndex];
arr[leftIndex] = arr[rightIndex];
arr[rightIndex] = temp;
};
const partition = (arr, left, right) => {
let pivot = arr[Math.floor((right + left) / 2)];
let i = left;
let j = right;
while (i <= j) {
    while (arr[i] < pivot) {
        i++;
    };
    while (arr[j] > pivot) {
        j--;
    };
    if (i <= j) {
         swap(arr, i, j); //sawpping two elements
        i++;
        j--;
    };
};
return i;
}
const quickSort = (arr, left = 0, right = arr.length - 1) => {
let index;
if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
        quickSort(arr, left, index - 1);
};
    if (index < right) {
        quickSort(arr, index, right);
    };
}
return arr;
}
let sortedArray = quickSort(arr);
console.log("Sorted array: " +sortedArray);
