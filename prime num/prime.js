function primeNumber (n){

    for(i=2;i<n;i++){
        if(n%i===0){
            return (n,'is not prime')
        }

    }
    return (n,'is prime')

}
console.log(primeNumber(7));
