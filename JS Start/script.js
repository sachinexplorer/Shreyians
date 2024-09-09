// alert("Hey");                  /* show a popup of alert on the screen */

// prompt("Or kaise ho ?");          /* asking something prompt on screen */

var ans = prompt("or kaise ho");      /* prompt ki value store hogi variable ans me or console me print ho jaygi */
console.log(ans);

console.log("hey");                 /* print hey normal in console section after inspect */
console.warn("hey");                /* show warning in console section */
console.error("hey");               /* show error in console section */

// variables constants types
// program ki lifestyle me jo data hum store karna chahte h use hum rkh skte h inside a variable 

var score = 0;
var character = "Mario";
var lives = 3;

// var ek "keyword" h jiske through hum computer ko btate h ki hum log ek value store karna chahte h
var amt = 3200;
/* var name = val; */
//keyword ek already reserved word hota h programming lang me jiska koi arth h 

var a = 12;              // compiler ke ander phle se hi number defined h so inko double quotes "" ke ander dalne ki jrurat nhi h 
var b = "apple";         // jo bhi chiz aap chahte ho ki ye compiler me na dhunde wo double quotes me daldo 
// var :- var jb use krenge jb uski value ko changeble bnana ho means wo change ho skti h
// const :- const jb use krenge jb uski value ko fix rkhna ho means wo phir change nhi ho skti

// var dulha = "Lab";
// var dulhan = "Laby";
// console.log(dulha + " weds " + dulhan); /* now you can change dulha in console section */

const a = "Lab";
const b = "Laby";
console.log(dulha + " weds " + dulhan); /* now you can't change dulha in console section */

// types - primitive reference
// primitive values - esi values jinko copy krne pr real value copy hogi like 12 is a primitive in var aa because it's changeble
// reference - esi values jinko copy krne pr parent ka reference copy hoga 

var aa = 12;
var bb = aa;
bb=bb+2;

// primitives - int, float, double, null, char, string, undefine, boolean, number, NaN, symbol these all are primitives
// reference - () {} []  these bracets values are reference
// reference ka mtlb jb copy hoga tb real copy na krke aap sirf original value ka reference save kriye jiske vjh se jb bhi change hota h, to wo sirf main wale me hota h
// var a = [1,2,3,4];
// var b = a       a alg rhega or b alg agar b me change krte ho to sirf b me hoga na ki a me or a me kroge to a me hoga

var arr = [1,2,3,4];
var  b = arr;
b.pop();              /* pop means one value remove from an array from last */

//Declaration & Initialization
var sys = 12 // var sys is a declaration & sys=12 is an initialization ya variable bnana pr value na dena is declaration or pehli baar value dena is init

var a = 12.1 //primitive value
var a = {}   //reference 

var a = { name: "Harsh" };
var b = a;

b.name = "Harshita";
// the name will be changed in a also that means its a reference we can't copy it's original, reference means address

var a = [1,2,3,4,5,6,7,8];
var b = [...a];                   // now possible to copy this same bracket [...a] it's a separate operator

b.pop();      // now ab copy ho chuki h value ab b me change kroge to b me hi dikhega na ki a me 

var a = { name: "Harsh" };
var b = { ...a };

// conditionals 
// truthy falsy values
//NaN, undefined, null, 0, "", false - these are falsy values
// positive or negative numbers are truthy & 1, "apple", 2.3, true, [], {}

// if(){
// }
// else{
// }

// loops - repeatation
//  loops - for, foreach, forin, while

// for (start; end; change) {
// }
for (var i = 1; i<6; i++){
    console.log("Hello");
}

// for (var i = 0; i<10; i++){
//     console.log("Hello");
// }

// print 0 1 1 2 3 5 8 13 21 - it's a fibonacci series [ 2 no. ka addition then add]
var prev = 0;
var curr = 1;
console.log(prev);
console.log(curr);

for(var i = 1; i<8; i++){
    var next = prev+curr;
    console.log(next);
    prev = curr;
    curr = next;
}

// functions - es5 es6(ecmascript) ecmascript is a group/community who maintains the js new version old version etc
// es5 is a old js and es6 is a new js
// 6 types of functions
// function hota kya h ?
// block of code which we can name anything and can run many times

function chacha(){
}

chacha();
chacha();
chacha();          // create function once and we can call it many times 

function abcd(){
    // function statement   - ye function statement h
}

var a = function(){
    // function expression   - ye function expression h jo var me store ho rha h
}

function(){
    // anonymous function it can call automatic by system i.e callbacks
}

// fat arrow function
var a = (val)=>{      // or val ke ander 12 value aaygi isko bolte h parameter

}  

a(12);     //ye 12 value jo bhej rhe ho isko bolte h argument real value jo h // ye 12 value func ke pass chli jaygi val ke ander
// fat arrow fnc with one param
var a = (val)=>{      // same as fat arrow fnc but you can remove fat with one parameter only if parameter more than 2 then fat mandatory like var a = (val1, val2)=>{}

}  

a(12); 
// fat arrow fnc with implicit return
var a = ()=>12; //yha pe 12 diya means jha pe fnc call kroge vha 12 show ho jayga 12 val return krega

a(); 

// array :- ek se jyada elements ko ek sath rkhna jb bhot sare bnde ki baat kre to array
// ateli ke sare ped 
// ateli ke sare sachin
// india ke pm jo ki modi h - object (kyuki ye ek hi h)
// [] = blank array
var a = [1,2,3,"sachin"]; // js me type alg bhi likh skte h string bhi add ho skti h pr jaya,c,c++ inme ese nhi hota string allowed nhi h
var a = [1,2,3,4,5,6,7,8,9];
// array kese use hota h ?
a[0]      //print the value 1 a[0]=1, a[4]=5
// array me ek value htate kese h last se ?
a.pop();
// value add kese krte h last me ?
a.push("anything we want");
// array se ek value kese htayenge bich se ?
// a.splice(konse index se htana history, kitne bnde htane h);
a.splice(4,1);
a.splice(3,2); // 3 index pe yani 4 ht jayga or 4 se next 5 wo bhi kyuki 2 htane h

// object :- object bnate h jb ek element ki sari details ho mtlb ek hi bnde ki kai info ho
var colin = {
    name: "colin",                       // key value pairs
    material: "plastic",
    price: 70,
    mehngahaikya: false,
    khamiltahai: "dukan pe"
}

var user = {
    name: "Sachin Sharma",
    age: 24,
    email: "sachinjangir687@gmail.com",
    username: "sachuu"
}

user.age();               // . se phle koi bhi chiz object hoti h jese isme user h console.log isme console arr.push() isme array bhi ek special type object h a.b.c.d abc are objects but d is not
/*example*/ var a = {
    b: {
        c: {
            d: 12
        }
    }
}
a.b.c.d // a se b ki value ko access kr skte h b se c or c se d but d is not an object

// Function & Event Listner :->
// Selection - document.querySelector
// html text chgange - .textContent
// html change - element.InnerHTML
// css change - element.style.jo bhi prop. change krni h

var btn = document.querySelector("button");

btn.addEventListener("dblclick", function(){
    var h1 = document.querySelector("h1");        // button pe jb bhi click ho fnc chla dena usme select krna h1 ko or uska color red kr dena
    h1.style.color = "red";
})

var btn = document.querySelector("button");

btn.addEventListener("mouseover", function(){
    var h1 = document.querySelector("h1");        // button pe jb bhi mouse jaye to fnc chla dena h1 ko select krna or uska color red kr dena
    h1.style.color = "red";
})

