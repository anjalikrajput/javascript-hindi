// primitive (call by value)

// 7 types : string,number,boolean,null,undefined,symbol BigInt

const num =100
const no =10.90
let useremail
const outsidetemp =null
const isLoggedIn =false
const id =Symbol('1234')
const anotherid =Symbol('1234')

console.log(id==anotherid)

const bignumber=12345567543
// non primitive (refrence types)

// arrays,objects,functions

const heros =["shaktiman","ironman","doga"]
let myobj = {
    name:"anjali",
    age : 20
}
const myFunction = function(){

       console.log("hello world")
}

console.log(typeof  bignumber )



// ****************************************

// stack(primitive),Heap(non primitive)

let youtubename ="anjalidotcom"
let anothername = "youtubename"

anothername = "chaiorcode"

console.log(youtubename)
console.log(anothername)

let user1 = {
    email:"user@gmail.com"
    
}

let user2 =user1

user2.email ="anjali@gmail.com"

console.log(user1.email)
console.log(user2.email)
