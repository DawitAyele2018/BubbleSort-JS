function bubbleSort(arr){
    let noSwap = false;
    let count = 0;
    for(let i = arr.length-1; i>=0; i--){ 
        noSwap = true;
        for(let j = 0; j<=i ; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]= [arr[j+1],arr[j]];
                noSwap  = false;
                count++;
            }
             if(noSwap){
            return [arr,count];
            }
        }
       
    }
    return [arr,count]
}
console.log(bubbleSort([12,1,13,4,2,67,31,5,45]));/*  */
console.log(bubbleSort([1,2,3,4,5,6,9,8]));
