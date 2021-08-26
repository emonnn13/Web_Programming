// Get the name of those whose age is over 23

let people = [
    {name: "Mr. A", age: 20}, 
    {name: "Mr. B", age: 25}, 
    {name: "Mr. C", age: 23}
    ];

 
// this shows "Uncaught TypeError: Cannot read property 'name' of undefined"    
let name = people.filter((arr => arr.age >23)[0].name)
console.log(name);


// this works perfectly. Returns "Mr. B"
let name1 = (people.filter(arg => arg.age > 23)[0].name)
console.log(name1);