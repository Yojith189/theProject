function UserCreate(){
    user_name =document.getElementById("user_name").value ;
    localStorage.setItem ("user_name", user_name);
    window.location="Megacast_room.html";
}