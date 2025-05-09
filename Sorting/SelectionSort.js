// SELECTION SORT

// Selection Sort  is a  simple and efficient  algorithm  that works on selecting either the smallest or largest element of a list or an array and moving it to the correct position.
// Time Complexity - o(n square)

function SelectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let mini = i;
        for(let j=i;j<arr.length;j++){
            if(arr[j] < arr[mini]){
                mini=j;
            }
        }
        let temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(SelectionSort([13,46,24,52,20,9]));