// BUBBLE SORT 

// Bubble Sort  is an algorithm which sorts an array by comparing adjacent elements  and swapping them and by pushing the largest to the end and sorts it in the intended ondragover.apply

//TIME COMPLEXITY : o(nsquare)


// function BubbleSort(arr){
//     for(let i=arr.length;i>0;i--){
//         for(let j=0;j<=i-1;j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }


// Time complexity : o(n)
function BubbleSort(arr){
    let didSwap = 0;
    for(let i=arr.length;i>0;i--){
        for(let j=0;j<=i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
        if(didSwap === 0){
            break;
        }
    }
    return arr;
}

console.log(BubbleSort([1,2,3,4,5]));