
function BubbleSort(arr){
    for(let i=0;i<=arr.length;i++){
        for(let j=i;j<=arr.length;j++){
        if(arr[i]>=arr[j]){
            const temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr);

}

BubbleSort([2,4,6,8,1])
