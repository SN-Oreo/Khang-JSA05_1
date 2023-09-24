
// const fecthData = async() =>{
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data = await response.json();


//         const div = document.getElementById("data")
//         let userId = document.createElement("h3");
//         let title = document.createElement("h3");
//         let completeTask = document.createElement("h3");


//         userId.textContent ="UserId: " + data.userId;
//         title.textContent ="Title: " + data.title;
//         completeTask.textContent ="Completed: " + (data.completed ? "Yes" : "No")


//         let container = document.createElement("div")
//         container.appendChild(userId);
//         container.appendChild(title);
//         container.appendChild(completeTask);

//         div.appendChild(container)
//     }
//     catch(error){
//         console.error("Error:", error)
//     }
// }
// fecthData()



// BT1

// async function noName(){
//     try {
//         const dataResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         const data = await dataResponse.json();

//         const divUserId = document.getElementById("user")
//         const divTitle = document.getElementById("titlehere")
//         const divBody = document.getElementById("bodyhere")

//         let userId = document.createElement("h1")
//         let title = document.createElement("h1")
//         let body = document.createElement("h2")

//         userId.textContent ="ID: " + data.userId
//         title.textContent = data.title
//         body.textContent = data.body

//         divUserId.appendChild(userId)
//         divTitle.appendChild(title)
//         divBody.appendChild(body)

        
//     } catch (error) {
        
//     }
// }
// noName()





// BT 2

