// singleton
// Object.create

// object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "khushal",
//     "full name": "khushal trivedi",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "trivedi@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "khushal@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "khushal@ispark.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
//     console.log(`hello user welcome back, ${this.email}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());
// console.log(Object.keys(name));

const value = {
    a: 1,
    b: 2,
    c: "hello"
}

// value.a = 1
// const {a} = value
// const {b} = value
// const {c} = value

const {a,b,c} = value;
const d = [a,b,c];

console.log(a);
console.log(b);
console.log(c);
console.log(d);


