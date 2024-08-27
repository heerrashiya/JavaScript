let like = localStorage.getItem("like") || 0 ;
document.getElementById("like-count").innerHTML = like;

const HandleInstalike  = () => {
    like++;
    document.getElementById("like-count").innerHTML = like;
    document.getElementById("like").style.color = 'red';
    localStorage.setItem("like", like);
}   

document.getElementById("like").addEventListener("click", HandleInstalike);


let comment = localStorage.getItem("comment") || 0 ;
document.getElementById("comment-count").innerHTML = comment;

const HandleInstacomment  = () => {
    comment++;
    document.getElementById("comment-count").innerHTML = comment;
    localStorage.setItem("comment", comment);
}
document.getElementById("comment").addEventListener("click", HandleInstacomment);


let share = sessionStorage.getItem("share") || 0 ;
document.getElementById("share-count").innerHTML = share;

const HandleInstashare  = () => {
    share++;
    document.getElementById("share-count").innerHTML = share;
    sessionStorage.setItem("share", share);
}
document.getElementById("share").addEventListener("click", HandleInstashare);


let follow = sessionStorage.getItem("follow") || 0 ;
document.getElementById("follow-count").innerHTML = follow;

const HandleInstafollow = () => {
    follow++;
    document.getElementById("follow-count").innerHTML = follow;
    sessionStorage.setItem("follow", follow);
}
document.getElementById("follow").addEventListener("click", HandleInstafollow);