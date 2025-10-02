import fs from 'fs/promises'
const writeFile = async ()=>{
    try{
        await fs.writeFile('./one.txt','I am coming from ammanichathiram');
        console.log("written")
    }catch(error){
        console.log(error)
    }
};
const readFile = async ()=>{
    try{
        const data = await fs.readFile('./one.txt', 'utf8');
        console.log(data);
        console.log("read")
    }catch(error){
        console.log(error)
    }
}
const appendFile = async ()=>{
    try {
        await fs.appendFile('./one.txt', '\n this is appended text');
        console.log("appended");        
    } catch (error) {
        console.log(error);        
    }
}

readFile()