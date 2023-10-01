const data = async() =>{
    try{
        const response = await fetch("https://picsum.photos/v2/list");
        const data = await response.json();



        for(let i of data){
            const div = document.getElementById("bottom")
            let author = document.createElement("h2");
            let img = document.createElement("img");
            img.classList.add("img")
    
    
            author.textContent = i.author;
            img.setAttribute("src", i.download_url)
    
    
            let container = document.createElement("div")
            container.classList.add("noname")
            container.appendChild(author);
            container.appendChild(img);
    
            div.appendChild(container)
        }

       
    }
    catch(error){
    }
}
data()