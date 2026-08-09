// Asynchronous opetation--------------------------------

// console.log("start");
// setTimeout(() => {
//   console.log("hello");
// }, 3000);
// console.log("end");



// promises---------------------------------------------------------

// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Success");
//   } else {
//     reject("Something went wrong");
//   }
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


                    // let promises = new Promise((resolve,reject)=>{
                    //     setTimeout(() => {
                    //         resolve("data recieved")
                    //     }, 3000);
                    // });

                    // promises.then((data)=>{
                    //     console.log(data);
                        
                    // }).catch((error)=>{
                    //     console.log(error);
                        
                    // })



                    // async function getData(){
                    //    try{
                    //     let data = await promise;
                    //     console.log(data);
                        
                    //    }catch(error){console.log(error);
                    //    }
                    // }


    // fetch api-------------------------------------------------------------
    
    
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((response)=>{
    //     return response.json();
        
    // }).then((data)=>{
    //     console.log(data);
        
    // }).catch((err)=>{
    //     console.log(err);
        
    // })



    async function getUsers() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

getUsers();