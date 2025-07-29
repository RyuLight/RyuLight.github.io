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

document.addEventListener("DOMContentLoaded", function(){
    const allButtons = document.querySelectorAll("#menu button[data-id]");
    const pages = document.querySelectorAll("main .page");

    const startPage = document.querySelector("#startPage");
    const mutebtn = document.querySelector("#mute");
    const closebtn = document.querySelector("#closeMenu");
    const menu = document.querySelector("#menu");
    const funnybtn = document.querySelector("#funnybtn");

    var isOpen = true;


    // TESTING SHIT BELOW
    const textHover = document.querySelector("#tips1");
    const test = document.querySelector("#test");
    textHover.onmouseover = function ()
    {
        test.style.display = "inline";
    };

    textHover.onmouseout = function ()
    {
        test.style.display = "none";
    };

    function onHover(){
        try{
            document.createEvent("HoverEvent");
            return true;
        }
        catch(e){
            alert(e);
            return false;
        }
    }

    const move = (e) =>{
        try{
            var x = !onHover() ? e.pageX : e.touches[0].pageX;
            var y = !onHover() ? e.pageY : e.touches[0].pageY;
        }
        catch(e)
        {
            alert(e);
        }
        test.style.left = x + "px";
        test.style.top = y + "px";
    };

    document.addEventListener("mousemove", (e)=> {
        move(e);
    });





    // TESTING SHIT ABOVE

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

            pages.forEach(section => section.style.display="none");

            const selectedPage = document.getElementById(selectedBtn);
            selectedPage.style.display="flex";
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
                console.log("Menu is closed");
                isOpen = false;
                closebtn.textContent = "<";
            }
            else
            {
                console.log("Menu is opened");
                isOpen = true;
                closebtn.textContent = ">";
            }
            menu.classList.toggle("panelAnim");
    }
});