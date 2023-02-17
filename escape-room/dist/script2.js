

var m = document.getElementById("modal");
var c = document.getElementById('modal-content2');
var globalVariable={
    flag_plant : 0,
    flag_desk : 0,
    flag_servers : 0,
    flag_fishbooks : 0,
    flag_phone : 0,
    flag_hard_drive : 0
 };
function clickop(id){
    m.style.display = "grid";
    c.style.visibility="visible";
    // m.addEventListener("click", ()=>{
    //     m.style.display="none";
    // });
    c.innerHTML="<div class='mod'><div id='cont1' class='cont'><div id= 'mm' class='x'><button onclick='btnclose()' id='btncls'>X</button></div></div></div>"
    var aa = document.getElementById('cont1');
    var main = document.getElementById('mm');
    if(id == "plant"){
        aa.style.backgroundColor="rgba(0, 155, 34, 0.674)";
        aa.style.boxShadow="0px 0px 61px 3px rgba(0, 155, 34, 0.56)";
        if (globalVariable.flag_plant == 1){
            main.innerHTML += '<h1 id="title-mod1">You Solved!</h1><ul class="checkbox-out"> <li> <input type="checkbox" id="myCheckbox1" /> <label class="checkbox" for="myCheckbox1"><img id="img1" src="../dist/assets/sun.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox2" /> <label class="checkbox" for="myCheckbox2"><img id="img2" src="../dist/assets/earth.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox3" /> <label class="checkbox" for="myCheckbox3"><img id="img3" src="../dist/assets/can.svg" /></label> </li> <li> <input type="checkbox" id="myCheckbox4" /> <label class="checkbox" for="myCheckbox4"><img id="img4" src="../dist/assets/car.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox5" /> <label class="checkbox" for="myCheckbox5"><img id="img5" src="../dist/assets/human.png" /></label> </li> </ul> <ul class="checkbox-out"> <input type="checkbox" id="myCheckbox6" /><li> <label class="checkbox" for="myCheckbox6"><img id="img6" src="../dist/assets/bag.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox7" /> <label class="checkbox" for="myCheckbox7"><img id="img7" src="../dist/assets/moon.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox8" /> <label class="checkbox" for="myCheckbox8"><img id="img8" src="../dist/assets/co2.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox9" /> <label class="checkbox" for="myCheckbox9"><img id="img9" src="../dist/assets/rain.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox10" /> <label class="checkbox" for="myCheckbox10"><img id="img10" src="../dist/assets/building.png" /></label> </li> </ul> <Button class="btn-fin" onclick="checkboxcheck()" type="submit">Check</Button>'
        }
        else{
            main.innerHTML += '<h1 id="title-mod1">Make the plant live!</h1><ul class="checkbox-out"> <li> <input type="checkbox" id="myCheckbox1" /> <label class="checkbox" for="myCheckbox1"><img id="img1" src="../dist/assets/sun.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox2" /> <label class="checkbox" for="myCheckbox2"><img id="img2" src="../dist/assets/earth.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox3" /> <label class="checkbox" for="myCheckbox3"><img id="img3" src="../dist/assets/can.svg" /></label> </li> <li> <input type="checkbox" id="myCheckbox4" /> <label class="checkbox" for="myCheckbox4"><img id="img4" src="../dist/assets/car.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox5" /> <label class="checkbox" for="myCheckbox5"><img id="img5" src="../dist/assets/human.png" /></label> </li> </ul> <ul class="checkbox-out"> <input type="checkbox" id="myCheckbox6" /><li> <label class="checkbox" for="myCheckbox6"><img id="img6" src="../dist/assets/bag.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox7" /> <label class="checkbox" for="myCheckbox7"><img id="img7" src="../dist/assets/moon.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox8" /> <label class="checkbox" for="myCheckbox8"><img id="img8" src="../dist/assets/co2.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox9" /> <label class="checkbox" for="myCheckbox9"><img id="img9" src="../dist/assets/rain.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox10" /> <label class="checkbox" for="myCheckbox10"><img id="img10" src="../dist/assets/building.png" /></label> </li> </ul> <Button class="btn-fin" onclick="checkboxcheck()" type="submit">Check</Button>'
        }
    }
    if(id == "desk"){
        aa.style.backgroundColor="rgba(255, 204, 0, 0.674)";
        aa.style.boxShadow="0px 0px 61px 3px rgba(255, 204, 0, 0.56)";   
        if (globalVariable.flag_desk == 1){
            main.innerHTML += '<h1 id="title-mod2">You Solved!</h1><iframe src="./tt.html"></iframe><Button class="btn-fin" onclick="checkboxcheck1()" type="submit">Check</Button>'
        }
        else{
            main.innerHTML += '<h1 id="title-mod2">Find the Image...</h1><iframe id="frame" src="./tt.html"></iframe><input type="text" name="puzz" id="puzimgcheck" /><Button class="btn-fin" onclick="checkboxcheck1()" type="submit">Check</Button>'
        }
    }
    if(id == "servers"){
        aa.style.backgroundColor="rgba(255, 0, 183, 0.674)";
        aa.style.boxShadow="0px 0px 61px 3px rgba(255, 0, 183, 0.56)"; 
        if (globalVariable.flag_servers == 1){
            main.innerHTML += '<h1 id="title-mod3">Solved!</h1><iframe src="./index 2.html"></iframe><div class="keys-among">Blue:<input type="text" name="puzz" id="in1server" />&nbsp Red:<input type="text" name="puzz" id="in2server" />&nbsp Yellow:<input type="text" name="puzz" id="in3server" />&nbsp Pink:<input type="text" name="puzz" id="in4server" /></div><Button class="btn-fin" onclick="checkboxcheck2()" type="submit">Check</Button>'
        }
        else{
            main.innerHTML += '<h1 id="title-mod3">Get the correct order.</h1><iframe src="./index 2.html"></iframe><div class="keys-among">Blue:<input type="text" name="puzz" id="in1server" />&nbsp Red:<input type="text" name="puzz" id="in2server" />&nbsp Yellow:<input type="text" name="puzz" id="in3server" />&nbsp Pink:<input type="text" name="puzz" id="in4server" /></div><Button class="btn-fin" onclick="checkboxcheck2()" type="submit">Check</Button>'
        }
    }
    if(id == "fishbooks"){
        aa.style.backgroundColor="rgba(255, 89, 0, 0.674)";
        aa.style.boxShadow="0px 0px 61px 3px rgba(255, 89, 0, 0.56)";  
        if (globalVariable.flag_fishbooks == 1){
            main.innerHTML += '<h1 id="title-mod4">Solved!</h1><div class="dd-body"> <div class="statistics"> <div class="score"> Score：<span class="score-number">0</span> </div> <div class="time-left"> Time：<span class="time-left-number">0</span> </div> </div> <div class="game"> <div class="target-blocks"> <div class="block target" data-id="1"></div> <div class="block target" data-id="2"></div> <div class="block target" data-id="3"></div> <div class="block target" data-id="4"></div> <div class="block target" data-id="5"></div> <div class="block target" data-id="6"></div> <div class="block target" data-id="7"></div> <div class="block target" data-id="8"></div> <div class="block target" data-id="9"></div> <div class="block target" data-id="10"></div> </div> <div class="draggable-blocks"> <div class="block draggable" data-id="1"></div> <div class="block draggable" data-id="2"></div> <div class="block draggable" data-id="3"></div> <div class="block draggable" data-id="4"></div> <div class="block draggable" data-id="5"></div> <div class="block draggable" data-id="6"></div> <div class="block draggable" data-id="7"></div> <div class="block draggable" data-id="8"></div> <div class="block draggable" data-id="9"></div> <div class="block draggable" data-id="10"></div> </div> </div> <button class="btn btn-primary" onclick="gggame()" id="start11111">Load Game</button> <div class="dialog text-center" id="final-score-dialog" hidden> <div class="dialog-content"> <div class="dialog-header"> <div class="dialog-title">You Scored <span class="final-score">0</span></div> </div> <div class="dialog-body"> <p><span class="you-win" hidden>Congratulations! You win!🎉</span></p> <p><span class="you-lose" hidden>You lose! Have another try?😂</span></p> </div> <div class="dialog-footer"> <button class="btn btn-primary" onclick="closeFinalScore()"> OK </button> </div> </div> </div> </div>'
        }
        else{
            main.innerHTML += '<h1 id="title-mod4">Get 100 points!</h1><div class="dd-body"> <div class="statistics"> <div class="score"> Score：<span class="score-number">0</span> </div> <div class="time-left"> Time：<span class="time-left-number">0</span> </div> </div> <div class="game"> <div class="target-blocks"> <div class="block target" data-id="1"></div> <div class="block target" data-id="2"></div> <div class="block target" data-id="3"></div> <div class="block target" data-id="4"></div> <div class="block target" data-id="5"></div> <div class="block target" data-id="6"></div> <div class="block target" data-id="7"></div> <div class="block target" data-id="8"></div> <div class="block target" data-id="9"></div> <div class="block target" data-id="10"></div> </div> <div class="draggable-blocks"> <div class="block draggable" data-id="1"></div> <div class="block draggable" data-id="2"></div> <div class="block draggable" data-id="3"></div> <div class="block draggable" data-id="4"></div> <div class="block draggable" data-id="5"></div> <div class="block draggable" data-id="6"></div> <div class="block draggable" data-id="7"></div> <div class="block draggable" data-id="8"></div> <div class="block draggable" data-id="9"></div> <div class="block draggable" data-id="10"></div> </div> </div> <button class="btn btn-primary" onclick="gggame()" id="start11111">Load Game</button> <div class="dialog text-center" id="final-score-dialog" hidden> <div class="dialog-content"> <div class="dialog-header"> <div class="dialog-title">You Scored <span class="final-score">0</span></div> </div> <div class="dialog-body"> <p><span class="you-win" hidden>Congratulations! You win!🎉</span></p> <p><span class="you-lose" hidden>You lose! Have another try?😂</span></p> </div> <div class="dialog-footer"> <button class="btn btn-primary" onclick="closeFinalScore()"> OK </button> </div> </div> </div> </div>'
        }
    }
    if(id == "hard-drive"){
        aa.style.backgroundColor="rgba(0, 255, 162, 0.674)";
        aa.style.boxShadow="0px 0px 61px 3px rgba(0, 255, 162, 0.56)";
        if (globalVariable.flag_hard_drive == 1){
            main.innerHTML += '<h1 id="title-mod6">Solved!</h1><div class="hangman"><div class="hangman-results"><div class="hangman-hangman"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="hangman-svg" version="1.1" x="0px" y="0px" viewBox="0 0 400 500" stroke="#000000" fill="none"><polyline stroke-width="10" stroke-miterlimit="10" points="253.996,142.899 253.996,59.666 115.663,59.666 115.663,434.999 "/><line stroke-width="10" stroke-miterlimit="10" x1="392.33" y1="434.999" x2="8.33" y2="434.999"/><g id="added-parts"></g></svg></div><div class="game-over" style="display: none;"><p class="game-over-won">You won! :)</p><p class="game-over-lost">You lost :(</p><button id="game-over-replay">Start Over</button></div></div><div class="hangman-puzzle"></div><div class="hangman-letters"></div></div>'
            hangmanscriptstart();
        }
        else{
            main.innerHTML += '<h1 id="title-mod6">Guess the computer component!</h1><div class="hangman"><div class="hangman-results"><div class="hangman-hangman"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="hangman-svg" version="1.1" x="0px" y="0px" viewBox="0 0 400 500" stroke="#000000" fill="none"><polyline stroke-width="10" stroke-miterlimit="10" points="253.996,142.899 253.996,59.666 115.663,59.666 115.663,434.999 "/><line stroke-width="10" stroke-miterlimit="10" x1="392.33" y1="434.999" x2="8.33" y2="434.999"/><g id="added-parts"></g></svg></div><div class="game-over" style="display: none;"><p class="game-over-won">You won! :)</p><p class="game-over-lost">You lost :(</p><button id="game-over-replay">Start Over</button></div></div><div class="hangman-puzzle"></div><div class="hangman-letters"></div></div>'
            hangmanscriptstart();
        }
    }
    if(id == "phone"){
        aa.style.backgroundColor="rgba(72, 0, 255, 0.674)";
        aa.style.boxShadow="0px 0px 61px 3px rgba(72, 0, 255, 0.56)"; 
        if (globalVariable.flag_phone == 1){
            main.innerHTML += '<h1 id="title-mod5">Solved!</h1><span>Hint: Check the manufactured date and year</span><div class="lock-body"> <svg id="svg" viewBox="0"> <defs> <g class="combination-input-template"> <rect x=-25 y=-40 width=50 height=80 fill="none" stroke="white" stroke-width=2 rx="3"/> <text class="text-value" x=0 y=13 font-size="36" fill="white" text-anchor="middle"> 0 </text> <path d="M0 -32 l5 10 l-10 0 z" fill="white"/> <path d="M0 32 l5 -10 l-10 0 z" fill="white"/> <rect class="up-button" x=-25 y=-40 width=50 height=40 fill="transparent"/> <rect class="down-button" x=-25 y=0 width=50 height=40 fill="transparent"/> </g> </defs> <g id="padlock-body" transform="translate(250,220)"> <rect id="box-lock" x=-60 y=-45 width=120 height=90 rx=5 fill="hsl(120,50%,100%)"/> <path id="bar-lock" d="M-35 -45 v-40 c 0 -40, 70 -40, 70,0 v80" stroke-width=15 stroke-linecap="round" fill="none" stroke="hsl(120,50%,100%)"/> </g> <g id="unlock-button" transform="translate(250,450)"> <text x=0 y=6 font-size="16" fill="white" text-anchor="middle"> unlock </text> <rect x=-50 y=-20 width=100 height=40 fill="transparent" stroke="white" stroke-width=2 rx="3"/> </g> <text id="response-text" x=50% y=360 font-size="50" fill="white" text-anchor="middle" opacity=0> correct </text> <g id="combination-input-container" transform="translate(250,365)"> </g> </svg> </div>'
            clicklock();
        }
        else{
            main.innerHTML += '<h1 id="title-mod5">Unlock</h1><span>Hint: Check the manufactured date and year</span><div class="lock-body"> <svg id="svg" viewBox="0"> <defs> <g class="combination-input-template"> <rect x=-25 y=-40 width=50 height=80 fill="none" stroke="white" stroke-width=2 rx="3"/> <text class="text-value" x=0 y=13 font-size="36" fill="white" text-anchor="middle"> 0 </text> <path d="M0 -32 l5 10 l-10 0 z" fill="white"/> <path d="M0 32 l5 -10 l-10 0 z" fill="white"/> <rect class="up-button" x=-25 y=-40 width=50 height=40 fill="transparent"/> <rect class="down-button" x=-25 y=0 width=50 height=40 fill="transparent"/> </g> </defs> <g id="padlock-body" transform="translate(250,220)"> <rect id="box-lock" x=-60 y=-45 width=120 height=90 rx=5 fill="hsl(120,50%,100%)"/> <path id="bar-lock" d="M-35 -45 v-40 c 0 -40, 70 -40, 70,0 v80" stroke-width=15 stroke-linecap="round" fill="none" stroke="hsl(120,50%,100%)"/> </g> <g id="unlock-button" transform="translate(250,450)"> <text x=0 y=6 font-size="16" fill="white" text-anchor="middle"> unlock </text> <rect x=-50 y=-20 width=100 height=40 fill="transparent" stroke="white" stroke-width=2 rx="3"/> </g> <text id="response-text" x=50% y=360 font-size="50" fill="white" text-anchor="middle" opacity=0> correct </text> <g id="combination-input-container" transform="translate(250,365)"> </g> </svg> </div>'
            clicklock();
        }
    }
    // aa.style.backgroundColor="rgba(255, 0, 0, 0.674)";
    // aa.style.boxShadow="0px 0px 61px 3px rgba(255, 0, 0, 0.56)";
}

var aa = document.getElementById('cont1');

m.addEventListener("click", ()=>{
    m.style.display = "none";
    c.style.visibility="hidden";
    c.innerHTML=" ";
})

btn2 = document.getElementById('btncls');

function btnclose(){
    m.style.display = "none";
    c.style.visibility="hidden";
    c.innerHTML=" ";
}

function checkboxcheck(){
    console.log(document.getElementById("myCheckbox1").src);
    var count = 0;
    for(var i = 1; i <= 10; i++){
        var checking = document.getElementById("myCheckbox"+i);
        var la = document.getElementById("img"+i);
        if(checking.checked == true){
            if(la.src.includes("co2.png") || la.src.includes("sun.png") || la.src.includes("can.svg")  || la.src.includes("rain.png") ){
                count += 1;
            }
            else{
                count = 0;
            }
    }
    }
    if (count == 4){
        document.getElementById("title-mod1").innerHTML = "You Solved!";
        globalVariable.flag_plant = 1;
        document.querySelector("#padlock6 .locked").style.opacity = "0";
        document.querySelector("#padlock6 .unlocked").style.opacity = "1";
        document.querySelector("#padlock6 .unlocked").style.fill = "rgb(0, 155, 34)";
        PlantPuzzleSolved = true;
        verificationlevel();
    }
}

function checkboxcheck1(){
    if (document.getElementById('puzimgcheck').value == "GGWP_Evogen_23"){
        globalVariable.flag_desk = 1;
        document.getElementById("title-mod2").innerHTML = "You Solved!";
        document.querySelector("#padlock7 .locked").style.opacity = "0";
        document.querySelector("#padlock7 .unlocked").style.opacity = "1";
        document.querySelector("#padlock7 .unlocked").style.fill = "rgb(255, 204, 0)";
        deskPuzzleSolved = true;
        verificationlevel();
    }
    else{
        alert("Sorry Try again!");
    }
}

function checkboxcheck2(){
    if (document.getElementById('in1server').value == "2" && document.getElementById('in2server').value == "4" && document.getElementById('in3server').value == "1" && document.getElementById('in4server').value == "3"){
        globalVariable.flag_servers = 1;
        document.getElementById("title-mod3").innerHTML = "You Solved!";
        document.querySelector("#padlock8 .locked").style.opacity = "0";
        document.querySelector("#padlock8 .unlocked").style.opacity = "1";
        document.querySelector("#padlock8 .unlocked").style.fill = "rgb(255, 0, 183)";
        serverPuzzleSolved = true;
        verificationlevel();
    }
}

function closeFinalScore(){
    if (document.querySelector(".score-number").innerHTML == 100){
        globalVariable.flag_fishbooks = 1;
        document.getElementById("title-mod4").innerHTML = "You Solved!";
        document.querySelector("#padlock9 .locked").style.opacity = "0";
        document.querySelector("#padlock9 .unlocked").style.opacity = "1";
        document.querySelector("#padlock9 .unlocked").style.fill = "rgb(255, 89, 0)";
        fishPuzzleSolved = true;
        verificationlevel();
    }
    else{
        m.style.display = "none";
        c.style.visibility="hidden";
        c.innerHTML=" ";
    }
}

function lockopenfun(){
    globalVariable.flag_phone = 1;
    document.getElementById("title-mod5").innerHTML = "You Solved!";
    document.querySelector("#padlock10 .locked").style.opacity = "0";
    document.querySelector("#padlock10 .unlocked").style.opacity = "1";
    document.querySelector("#padlock10 .unlocked").style.fill = "rgb(72, 0, 255)";
    phonePuzzleSolved = true;
    verificationlevel();
}

function cpugameover(){
    globalVariable.flag_hard_drive = 1;
    document.getElementById("title-mod6").innerHTML = "You Solved!";
    document.querySelector("#padlock11 .locked").style.opacity = "0";
    document.querySelector("#padlock11 .unlocked").style.opacity = "1";
    document.querySelector("#padlock11 .unlocked").style.fill = "rgb(0, 255, 162)";
    cpuPuzzleSolved = true;
    verificationlevel();
}


function verificationlevel(){
    m.style.display = "none";
    c.style.visibility="hidden";
    c.innerHTML=" ";
    verify();
}