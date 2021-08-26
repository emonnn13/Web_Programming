
        function vowelCount(str) {
            let x = prompt("Enter a string")
            let y = x.split(" ")
            let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
            for(let i of y) {
                if(vowels.includes(i)){
                    console.log(i + ",")
                }
            }
        }
        document.querySelector("#btn").addEventListener("click", vowelCount);
        let arr1= [1,2,3,4,5,6,7,8,9,10]
        let arr2 = [11,12,13,14,15,16,17,18,19,20]
        concatanate array in js

        let arr3 = []
        for( let item of arr1){
            arr3.push(item)
        
        }

        for ( let item of arr2){
            arr3.push(item)
        }

        // spread operator for concatanate array
        let arr4 = [...arr1, ...arr2]
        console.log(arr4)

        let arr1= [1,2,3,4,5]

        function modify_array(arr){
            return arr*10
        }
        let new_add_arr = []
        for( let item of arr1){
            new_add_arr.push(modify_array(item))
        }
        console.log(new_add_arr)
        
        // map function
        new_add_arr = arr1.map(function modify_array(arr){
            return arr*10
        })

        // map function but anonymus function
        new_add_arr = arr1.map(function (arr){
            return arr*10
        })

        //map with arrow key function
        new_add_arr = arr1.map((arr) =>{
            return arr*10
        })

        let arr4 = arr1.map((arr) => {
            return arr*100
        })

        let arr4 = arr1.map((arr)=> arr*100)
        console.log(arr4)
        
        let arr5 = arr1.map( (arr) =>{
            arr = arr*2
            // console.log(arr)
            return arr-5
        })
       
        //filter function
        let arr6 = arr1.filter((arr) =>{
            if(arr > 3){
                return arr }
                })

        // filter function filter outs the values.
        // 
        
        //some function
        let arr6 = arr2.some((arr) => {
            return arr >3
        }

        //every function   
        let arr6 = arr1.every((arr) => (arr <= 5) )
        console.log(arr6)

        // <!-- GOOGLE ARROW FUNCTION -->
         // let arrow_var = (arr) =>   {
            //     return arr*10 
            // }
            // arrow_var(5) -->