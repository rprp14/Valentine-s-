const chatArea = document.getElementById("chatArea");
const replyBox = document.getElementById("replyBox");
const popup = document.getElementById("popup");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicStarted = false;

document.body.addEventListener("click", ()=>{
    if(!musicStarted){
        music.play().catch(()=>{});
        musicStarted = true;
    }
},{once:true});

musicBtn.onclick = ()=>{
    if(music.paused){
        music.play();
        musicBtn.textContent="🔊";
    }else{
        music.pause();
        musicBtn.textContent="🔈";
    }
};

const messages = [
    {type:"me", text:"Hey 👋"},
    {type:"me", text:"I was thinking about you..."},
    {type:"me", text:"So I made something special for you 💝"},
    {type:"you", text:"Really? 😳"},
    {type:"me", text:"Yes... because you mean a lot to me 🫶"},
    {type:"me", text:"Tap to see our memory 📸", photo:true},
    {type:"me", text:"You make my days beautiful ✨"},
    {type:"me", text:"I love you ❤️"}
];

let i = 0;

function showMessage(){

    if(i >= messages.length){
        replyBox.style.display = "block";
        return;
    }

    const msg = messages[i];
    const div = document.createElement("div");

    div.classList.add("msg", msg.type);
    div.textContent = msg.text;

    if(msg.photo){
        div.style.cursor="pointer";
        div.onclick = ()=> popup.style.display="flex";
    }

    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight;

    i++;

    setTimeout(showMessage, 900);
}

showMessage();

function goReply(){
    window.location.href="reply.html";
}

function closePopup(){
    popup.style.display="none";
}
