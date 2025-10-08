const button = document.querySelector("#get-posts-btn");
const output = document.querySelector("#show-posts");
const showPosts = async ()=>{
    try{
        const data =await  fetch('http://localhost:8000/api/posts');
    if(!data.ok){
        console.log("failed to fetch posts");
    }
    const posts = await data.json();
    output.innerHTML = "";
    posts.forEach((post) =>{
        const postEl = document.createElement('div');
        postEl.textContent = post.content;
        output.appendChild(postEl);
    })
    }catch(error){
        console.log('error : ' + error);
    }    
}
button.addEventListener('click', showPosts);