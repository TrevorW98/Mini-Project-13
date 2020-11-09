let upvote = document.getElementById("upvote");
let numberOfVotes = document.getElementById("votes");
let hide = document.getElementById("hide");
let comments = document.getElementById("comments");
let nVotes = 18;


upvote.addEventListener("click", function(){
    nVotes++;
    numberOfVotes.innerText = nVotes;
})

hide.addEventListener("click",function(){
   showHideComments();
})

//Function to hide/show the comments
function showHideComments(){
    if(comments.classList.contains("d-none")){
        comments.classList.remove("d-none");
        hide.innerText = "Hide 2 Comments"
    } else{
        comments.classList.add("d-none")
        hide.innerText = "Show Comments"
    }
}