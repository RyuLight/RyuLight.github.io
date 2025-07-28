const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");

const mutebtn = document.querySelector("#mute");

const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
const page4 = document.querySelector("#page4");
const page5 = document.querySelector("#page5");
const page6 = document.querySelector("#page6");

// For some reason, some browser doesnt allow autoplay
// So I must make it when they click, then the audio plays :e_shrug:
// And according to some online sources like StackOverFlow, Quackit and even ChatGPT said
// Some website only allows autoplay after muting it.
document.addEventListener("click", function() 
{
    let bgm = document.getElementById('bgm');
    bgm.play();
    bgm.muted = false;
}, {once: true}); 

function hideall(){ //function to hide all pages
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="none";
    page4.style.display="none";
    page5.style.display="none";
    page6.style.display="none";
    btn1.style.backgroundColor = "white";
    btn2.style.backgroundColor = "white";
    btn3.style.backgroundColor = "white";
    btn4.style.backgroundColor = "white";
    btn5.style.backgroundColor = "white";
    btn6.style.backgroundColor = "white";
    mute.style.backgroundColor = "white";
}

mutebtn.addEventListener("click", function()
{
    let bgm = document.getElementById('bgm');
    if (bgm.muted == true)
    {
        bgm.muted = false;
        mutebtn.textContent = "Muted, Click to unmute";
    }
    else
    {
        bgm.muted = true;
        mutebtn.textContent = "Unmuted, Click to mute";
    }
});

btn1.addEventListener("click", function () {
    hideall();
    page1.style.display="flex";
    btn1.style.backgroundColor = "darkgray";
});

btn2.addEventListener("click", function () {
    hideall();
    page2.style.display="flex";
    btn2.style.backgroundColor = "darkgray";
});

btn3.addEventListener("click", function () {
    hideall();
    page3.style.display="flex";
    btn3.style.backgroundColor = "darkgray";
});

btn4.addEventListener("click", function () {
    hideall();
    page4.style.display="flex";
    btn4.style.backgroundColor = "darkgray";
});

btn5.addEventListener("click", function () {
    hideall();
    page5.style.display="flex";
    btn5.style.backgroundColor = "darkgray";
});

btn6.addEventListener("click", function () {
    hideall();
    page6.style.display="flex";
    btn6.style.backgroundColor = "darkgray";
});

hideall();
