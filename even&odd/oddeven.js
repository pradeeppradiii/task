
function splitNumbers(numbers){
    let odd=numbers.filter((number)=>{
        if(number%2!==0){
            return true
        }
    })
    let even=numbers.filter((number)=>{
        if(number%2==0){
            return true
        }
    })
    console.log(odd);
    console.log(even);
}
splitNumbers([1,2,3,4,5,6,7])