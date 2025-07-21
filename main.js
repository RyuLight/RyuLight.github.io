const btnSubmit=document.querySelector("#btnSubmit");
const scoreBox=document.querySelector("#scorebox");

var q1,q2,score=0;
function CheckAns(){
    q1=document.querySelector("input[name='q1']:checked").value;
    console.log(q1);

    q2=document.querySelector("input[name='q2']:checked").value;
    console.log(q2);

    score=0;
    if (q1=="Tokyo")score++;
    if (q2=="Red")score++;
    scoreBox.innerHTML="Score:"+score;
}
btnSubmit.addEventListener("click", CheckAns);