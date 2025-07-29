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

// TESTING SHIT BELOW
    const textHover = document.querySelector("#tips1");
    const test = document.querySelector("#test");
    textHover.onmouseover = function ()
    {
        test.style.display = "block";
    };

    textHover.onmouseout = function ()
    {
        test.style.display = "none";
    };

    document.addEventListener("mousemove", function(e){
        test.style.top = (e.pageY - 300)+ "px";
        test.style.left = (e.pageX - 175) + "px";
    });



    // TESTING SHIT ABOVE

document.addEventListener("DOMContentLoaded", function(){
    const allButtons = document.querySelectorAll("#menu button[data-id]");
    const pages = document.querySelectorAll("main .page");

    const startPage = document.querySelector("#startPage");
    const mutebtn = document.querySelector("#mute");
    const closebtn = document.querySelector("#closeMenu");
    const menu = document.querySelector("#menu");
    const funnybtn = document.querySelector("#funnybtn");

    var isOpen = true;


    

    mutebtn.style.backgroundColor = "white";
    closebtn.style.backgroundColor = "white";
    
    funnybtn.addEventListener("click", function(){
        MuteMusic();
    });

    mutebtn.addEventListener("click", function(){
        let bgm = document.getElementById('bgm');
        if (bgm.muted == true)
        {
            bgm.muted = false;
            mutebtn.textContent = "Unmuted, click to mute";
        }
        else if (bgm.muted == false)
        {
            bgm.muted = true;
            mutebtn.textContent = "Muted, click to mute";
        }
    });

    closebtn.addEventListener("click", function(){
        MenuAnim();
    });

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

            pages.forEach(section => {
                section.style.display="none";
            });

            const selectedPage = document.getElementById(selectedBtn);
            selectedPage.style.display="flex";

            requestAnimationFrame(() => {
                selectedPage.classList.toggle("moveAnim");
            });
            MenuAnim();
    })
    });

    function MuteMusic(){
    let bgm = document.getElementById('bgm');
    bgm.muted = true;
    }   

    function MenuAnim(){
        if (isOpen)
            {
                isOpen = false;
                closebtn.textContent = "<";
            }
            else
            {
                isOpen = true;
                closebtn.textContent = ">";
            }
            menu.classList.toggle("panelAnim");
    }
});