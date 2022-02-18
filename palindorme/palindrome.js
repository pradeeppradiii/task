
function pali(a)
{
let i=0;
let j=a.length-1;
while(i<j)
{
if(a[i]==a[j])
{
    i++;
    j--;
}
else{
    return 'not a palindrome'
}
}
return 'palindrome'
}
console.log(pali('kiran'))