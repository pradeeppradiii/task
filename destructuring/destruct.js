const person ={
    firstName:"pradeep",
    lastName:"N",
    age:24,
     address:{
        state:'karnataka',
        pin:571401,
        city:'Mandya'
    }
}

const {firstName,lastName}=person
const { address:{state,pin,city}}=person

console.log('firstName :',firstName);
console.log('lastName :',lastName);
console.log('state :',state);
console.log('pin :',pin);




//======================  array ============================================





console.log('ARRAY DESTRUCTURING');

const fruits=['apple','greenapple','mango','banana']
const [fruit1,fruit2]=fruits    
console.log('fruit1 :',fruit1);
console.log('fruit2 :',fruit2);

const [fruits4,fruits5, ,fruits6]=fruits

console.log('fruits1 :',fruits4); 
console.log('fruits2 :',fruits5); 
console.log('fruits3 :',fruits6);