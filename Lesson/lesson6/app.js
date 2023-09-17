function fiveSecond(){
    return new Promise(resolve =>{
        setTimeout(() => {
            console.log("xong r")
        }, 10000);
    })
}
async function test(){
    console.log("start")
    const s5s = await fiveSecond()
    console.log(s5s)
}
test();

const response = fetch('http://jsonplaceholder.typicode.com/todos/1');
const dât = response.json();