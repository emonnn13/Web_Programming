   //creating a object
   let p = {name: "Mr. A", phone: 1234, address: "Dhaka"}

   // loop thourgh objects
   for (let key in person1) { 
       console.log(key + ": " + person1[key]);
   }
   console.log(person1['address'])
   console.log(person1)
   
   for( let i in p ) {
       console.log(i+ "---> " + p[i]);
   }
       let people = [
       {name: "Mr. A", age: 20}, 
       {name: "Mr. B", age: 25}, 
       {name: "Mr. C", age: 23}
       ];
   
       for (let i of people){
           for (let j in i){
               console.log(`Name = ${j.name} , Age = ${j.age} `);
               console.log(`Name=${i.name}, Age=${i.age}`)
           }
       }
   
       console.log(people.filter(arg => arg.name == "Mr. A")[0].age);
       console.log(people.filter(arg => arg.age > 23)[0].name);
      
   let arr=  ["aa" , "aaa" , "bbb" , "erere"] 
   console.log(arr)
   let name = people.filter((arr => arr.age >23)[0].name)
   let name = (people.filter(arg => arg.age > 23)[0].name)
           //  return arr['name'] 
       
   
   
   for(let i in arr){
       console.log(arr[i]) }
    
    let arr1 = [10,20,30,40,50]
    for (let i in arr1){
        console.log(arr[i]) }