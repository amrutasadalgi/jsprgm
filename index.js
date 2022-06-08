// 1
// let randomValue={name:"lydia"}
// randomValue=23
// if(!typeof(randomValue)==="string"){
//     console.log("its not a string")
// } 
// else
// {
//     console.log("its a string ")
// }

//output : its a string




// 2
// const createMember = ({email, address={}})=>{
//     const validEmail=/.+\@.+\..+/.test(email)
//     if(!validEmail) throw new Error("valid email pls")
//     return{
//         email,
//         address:address?address:null
//     }
// }
// const member= createMember({email:"my@email.com"})
// console.log(member)

// { email: 'my@email.com', address: {} }




// 3
// const keys=["name","age"];
// const value=["lydia",22];
// let data=Object.fromEntries(keys.map((_,i)=>{
//     return [keys[i],value[i]]
// }))
// console.log(data)

// output : entries




// 4
// const promise1= Promise.resolve("first")
// const promise2 = Promise.resolve("second");
// const promise3 = Promise.resolve("third");
// const promise4 = Promise.resolve("fourth");
// const runpromise = async()=>{
//     const res1 = await Promise.all([promise1,promise2])
//     const res2 = await Promise.all([promise3,promise4])
//     return [res1,res2]
// }
// runpromise().then(res=>console.log(res)).catch(err=>console.log(err))

// output : [ [ 'first', 'second' ], [ 'third', 'fourth' ] ]



// 5
// const user = {
//     email:"my@email.com",
//     updateEmail:email=>{
//         this.email=email
//     }
// }
// user.updateEmail("new@email.com")
// console.log(user.email)

// output: my@email.com



// 6
// const fruit=["banana","orange","apple"]
// fruit.slice(0,1)
// fruit.splice(0,1)
// fruit.unshift("graps")
// console.log(fruit)

// output : [ 'graps', 'orange', 'apple' ]



// 7
// const user={
//     email:"e@mail.com",
//     password:"12345"
// }
// const updateuser=({email,password})=>{
//     if(email){
//         Object.assign(user,{email})
//     }
//     if(password){
//         user.password=password
//     }
//     return user
// }
// const updateduser = updateuser({email:"new@email.com"})
// console.log(updateduser===user)

// output : true



// 8
// class Calc{
//     constructor(){
//         this.count=0
//     }
//     inc(){
//         this.count++
//     }
// }
// const calc = new Calc()
// new Calc().inc()
// console.log(calc.count)

// output : 0



// 9a
// let count = 0;
// const nums = [0,1,2,3]
// nums.forEach(num=>{
//     if(num) count+=1
// })
// console.log(count)

// output : 3




// 9b
// class bird{
//     constructor(){
//         console.log("im a bird")
//     }
// }
// class flamingo extends bird{
//     constructor(){
//         console.log("im pink")
//         super()
//     }
// }
// const pet = new flamingo()

// output : im pink
//          im a bird




// 10
// const person = {
//     name:"lydia hallie",
//     hobbies:["coding"]
// }
// function addhobby(hobby,hobbies=person.hobbies){
//     hobbies.push(hobby)
//     return hobbies
// }
// addhobby("running,[]")
// addhobby("dancing")
// addhobby("baking")
// addhobby("baking",person.hobbies)
// console.log(person.hobbies)

// output : [ 'coding', 'running,[]', 'dancing', 'baking', 'baking' ]




//! question 12
// class Counter {
//     #number = 10

//     increment() {
//         this.#number++
//     }

//     getNum() {
//         return this.#number
//     }
// }

// const counter = new Counter()
// counter.increment()
// console.log(counter.#number);

// cant acess #number outside the class


//!question11

const teams = [
    { name: 'Team 1', members: ['Paul', 'Lisa'] },
    { name: 'Team 2', members: ['Laura', 'Tim'] },
];
function* getMembers(members) {
    for (let i = 0; i < members.length; i++){
        yield members[i];
    }
}
function* getTeams(teams) {
    for (let i = 0; i < teams.length; i++){
        yield* getMembers(teams[i].members)
    }
}
const obj = getTeams(teams);
console.log(obj);
// obj.next();
// obj.next();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());

//output :{ value: 'Laura', done: false }
//        { value: 'Tim', done: false }




//! question13

// const myPromise = Promise.resolve(Promise.resolve("promise"));

// function funcOne() {
//     setTimeout(() => console.log('Timeout 1 !'), 0);
//     myPromise.then(res=>res).then(res=>console.log(`${res} 1!`))
// }

// async function funcTwo() {
//     const res = await myPromise;
//     console.log(`${res} 2!`);
//     setTimeout(() => console.log('Timeout 2!'), 0);
//     console.log('Last line 2!');
// }

// funcOne();
// funcTwo();
//output
//promise 2!
// Last line 2!
// promise 1!
// Timeout 1 !
// Timeout 2!


//! question14

// const name = 'Lydia Hallie';
// console.log(!typeof name === "object");
// console.log(!typeof name==="string");


// false false



//! question 15

//! 15 a)

// const myMap = new Map();
// const myFunc = () => 'greeting';
// myMap.set(myFunc, 'hello world !');

// //1
// myMap.get("greeting");
// //2
// myMap.get(myFunc);
// //3
// myMap.get(() => 'greeting');


//! 15b)
// const emojis = ['star', 'avacado', 'smiley'];
// console.log(emojis.map(x => x + "star"));
// console.log(emojis.splice(1, 2, "star"));
// console.log(emojis.filter(x => x !== "avacado"));
// console.log(emojis.splice(1, 2, "star"));
// console.log(emojis.find(x => x !== "avacado"));
// console.log(emojis.splice(1, 2, "star"));
// console.log(emojis.reduce((acc, cur) => acc + 'star'));
// console.log(emojis.splice(1, 2, "star"));
// console.log(emojis.slice(1, 2, 'star'));
// console.log(emojis.splice(1, 2, "star"));
// console.log(emojis.splice(1, 2, 'star'));


//! 16 
// const set = new Set();

// set.add(1);
// set.add('Lydia');
// set.add({ name: 'Lydia' });
// for (let item of set) {
//         console.log(item+2);
// }
// output 3 Lydia2

//! 17


// function getItems(fruitList, ...args, favouriteFruit) {
//         return[...fruitList,...args, favouriteFruit]
// }

// getItems(["banana", 'Apple'], 'pear', 'orange')

// output error


//! 19
// fetch("https://www.website.com/api/user/1")
//         .then(res => res.json())
//         .then(res => console.log(res));

//an object

//!  20

// const box = { x: 10, y: 20 };
// Object.freeze(box);
// const shape = box;
// shape.x = 100;
// console.log(shape);
// {x:10 ,y:20}





