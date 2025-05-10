// INSERTION SORT

// Insertion Sort : It is a sorting technique ,  which is based on iterating  the array and  finding the best position to  for each and every Element.

function InsertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let j = i;
        while(j > 0 && arr[j-1] > arr[j]){
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
}

console.log(InsertionSort([10,5,3,1,2]));