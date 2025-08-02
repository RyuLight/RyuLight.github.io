// For some reason, some browser doesnt allow autoplay
// So I must make it when they click, then the audio plays :e_shrug:
// And according to some online sources like StackOverFlow, Quackit and even ChatGPT said
// Some website only allows autoplay after muting it.
document.addEventListener("click", function() 
{
    let bgm = document.getElementById('bgm');
    bgm.volume = 0.2;
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
    // Don't bother with this, just for fun
    {
    funnybtn.style.display = "none";
    setTimeout(function(){
        funnybtn.style.display = "inline";
    }, 20000);
    }

    var isOpen = true;

    const allTips = document.querySelectorAll("span[data-tips-id]");

    allTips.forEach(tips => {
        const tooltip = document.getElementById(tips.getAttribute("data-tips-id"));

        tips.onmouseover = function() {
            tooltip.style.display = "block";
        };

        tips.onmouseout = function() {
            tooltip.style.display = "none";
        };

        document.addEventListener("mousemove", function(e){
            tooltip.style.top = (e.pageY - tooltip.style.height)+ "px";
            tooltip.style.left = (e.pageX - (tooltip.style.width - 20)) + "px";
        });
    });


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
            mutebtn.textContent = "Muted, click to unmute";
        }
    });

    closebtn.addEventListener("click", function(){
        MenuAnim();
    });

    pages.forEach(section => {
        section.style.display="none";
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
                if (section.classList.contains("moveAnim"))
                {
                    section.classList.toggle("moveAnim");
                }
            });

            const selectedPage = document.getElementById(selectedBtn);
            selectedPage.style.display="flex";

            requestAnimationFrame(() => {
                selectedPage.classList.toggle("moveAnim");
            });
            MenuAnim();
    });
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

// Sheep Game
const sheep1 = document.querySelector("#sheep1");
const sheep2 = document.querySelector("#sheep2");
const sheep3 = document.querySelector("#sheep3");

const sheeps = [sheep1, sheep2, sheep3];

sheeps.forEach(sheep => {
    sheep.style.display = "none";
});

const startGame = document.querySelector("#startGame");
var gameStart = false;
var gameEnd = false;
var sheepCount = 0;
var maxSheep = 0;

// Quiz Related
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answers = [answer1, answer2, answer3, answer4];
const restart = document.querySelector("#restart");
const quiz = document.querySelector("#quiz");

restart.addEventListener("click", function(){
    resetSheepGame();
});

function resetSheepGame() {
    restart.style.display = "none";
    answers.forEach(answer => {
        answer.style.display = "inline";
    });
    quiz.style.display = "none";
    // maxSheep = Math.floor(Math.random() * (51 - 10) + 10);
    maxSheep = 1;
    sheepCount = maxSheep;

    sheep1.style.transform = 'translate(1500px, 100px)';
    sheep2.style.transform = 'translate(1500px, 150px)';
    sheep3.style.transform = 'translate(1500px, 200px)';

    sheeps.forEach(sheep => {
    sheep.style.display = "inline";
    });

    for (let i = 1; i < 4; i++)
    {
        resetPosAndRand(i);
    }
    RandomizeAnswer();
    if (gameStart)
    {
        let tutorial = document.querySelector("#tutorial");
        tutorial.style.display = "block";
    }
    gameStart = false;
    gameEnd = false;
}

startGame.addEventListener("click", function(){
    let tutorial = document.querySelector("#tutorial");
    tutorial.style.display = "none";
    resetSheepGame();
    gameStart = true;
});

var newX1 = 0;
var newX2 = 0;
var newX3 = 0;
var moveSpeed1 = Math.random() * (30 - 5) + 5;
var moveSpeed2 = Math.random() * (30 - 5) + 5;
var moveSpeed3 = Math.random() * (30 - 5) + 5;


function resetPosAndRand(number){
    
    switch (number)
    {
        case 1:
            newX1 = 0;
            if (sheepCount <= 3)
            {
                sheep1.style.left = 0;
                moveSpeed1 = 0;
                sheep1.style.display = "none";
            }
            else
            {
                sheep1.style.left = 0;
                moveSpeed1 = Math.random() * (30 - 5) + 5;
            }
            break;
        case 2:
            newX2 = 0;
            if (sheepCount <= 3)
            {
                sheep2.style.left = 0;
                moveSpeed2 = 0;
                sheep2.style.display = "none";
            }
            else
            {
                sheep2.style.left = 0;
                moveSpeed2 = Math.random() * (30 - 5) + 5;
            }
            break;
        case 3:
            newX3 = 0;
            if (sheepCount <= 3)
            {
                sheep3.style.left = 0;
                moveSpeed3 = 0;
                sheep3.style.display = "none";
            }
            else
            {
                sheep3.style.left = 0;
                moveSpeed3 = Math.random() * (30 - 5) + 5;
            }
            break;
    }
}

setInterval(function(){
    if (gameStart && !gameEnd)
    {
        newX1 -= moveSpeed1;
        newX2 -= moveSpeed2;
        newX3 -= moveSpeed3;

        sheep1.style.left = newX1 + "px";
        sheep2.style.left = newX2 + "px";
        sheep3.style.left = newX3 + "px";

        if (sheepCount <= 1)
        {
            gameEnd = true;
        }

        if (newX1 <= -1700)
        {
            resetPosAndRand(1);
            sheepCount--;
        }
        if (newX2 <= -1700)
        {
            resetPosAndRand(2);
            sheepCount--;
        }
        if (newX3 <= -1700)
        {
            resetPosAndRand(3);
            sheepCount--;
        }
    }
    else if (gameStart && gameEnd)
    {
        quiz.style.display = "block";

        answers.forEach(answer => {
            answer.addEventListener("click", function(){
                if (answer.textContent == maxSheep)
                {
                    let words = document.querySelector("#topText");
                    words.textContent = "Correct! You counted and remembered well, remember to take care of yourself and have a good sleep!";
                    answers.forEach(allAnswer => {
                        allAnswer.style.display = "none";
                    });
                    restart.style.display = "inline";
                }
                else
                {
                    let words = document.querySelector("#topText");
                    words.textContent = "Wrong! The correct answer was " + maxSheep + " Try again by pressing the button below!";
                    answers.forEach(allAnswer => {
                        allAnswer.style.display = "none";
                    });
                    restart.style.display = "inline";
                }
            });
        });
    }
}, 25);

function RandomizeAnswer(){
    answer1.textContent = Math.floor((Math.random() * maxSheep) + 5);
    answer2.textContent = Math.floor((Math.random() * maxSheep) + 5);
    answer3.textContent = Math.floor((Math.random() * maxSheep) + 5);
    answer4.textContent = Math.floor((Math.random() * maxSheep) + 5);

    answers.forEach(answer => {
        // ENSURE THE ANSWER WILL NEVER BE THE SAME
        // OR I HOPE IT DOES ATLEAST
        if (answer.textContent == maxSheep)
        {
            answer.textContent = Math.floor((Math.random() * maxSheep) + 5);
        }
    });


    var rightAnswer = Math.floor((Math.random() * 4) + 1);

    let chosenButton = document.getElementById(`answer${rightAnswer}`);
    chosenButton.textContent = maxSheep;
}