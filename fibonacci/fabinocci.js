fabinocci
function fabi(num) {
    let sum = 0;
    let a = 0;
    let b = 1;
    while (sum < num) {
        sum = a + b;
        a = b;
        b = sum
        console.log(sum);
    }
}
fabi(55)