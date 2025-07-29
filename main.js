// For some reason, some browser doesnt allow autoplay
// So I must make it when they click, then the audio plays :e_shrug:
// And according to some online sources like StackOverFlow, Quackit and even ChatGPT said
// Some website only allows autoplay after muting it.
document.addEventListener("click", function() 
{
    isClicked = true;
    let bgm = document.getElementById('bgm');
    bgm.play();
    bgm.muted = false;
}, {once: true});

document.addEventListener("DOMContentLoaded", function(){
    const allButtons = document.querySelectorAll("#menu button[data-id]");
    const startPage = document.querySelector("#startPage");
    const pages = document.querySelectorAll("main .page");
    const mutebtn = document.querySelector("#mute");
    var isClicked = false;

    
    pages.forEach(section => {
        section.style.display="none"
    });
    startPage.style.display="flex";

    allButtons.forEach(button => {
        button.style.backgroundColor = "white";
        button.addEventListener("click", function(){
            button.style.backgroundColor = "white"; 
            const selectedBtn = button.dataset.id;

            allButtons.forEach(colorBtn => colorBtn.style.backgroundColor = "white");

            if (button.dataset.id == selectedBtn)
            {
                button.style.backgroundColor = "darkgray";
            }

            pages.forEach(section => section.style.display="none");

            const selectedPage = document.getElementById(selectedBtn);
            selectedPage.style.display="flex";
    })
    })
});