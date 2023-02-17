var m = document.getElementById("modal");
var c = document.getElementById('modal-content2');
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
        main.innerHTML += '<ul class="checkbox-out"> <li> <input type="checkbox" id="myCheckbox1" /> <label class="checkbox" for="myCheckbox1"><img src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-shuffle-icon-png-image_4162945.jpg" /></label> </li> <li> <input type="checkbox" id="myCheckbox2" /> <label class="checkbox" for="myCheckbox2"><img src="https://www.iconpacks.net/icons/2/free-random-icon-3814-thumb.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox3" /> <label class="checkbox" for="myCheckbox3"><img src="http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox4" /> <label class="checkbox" for="myCheckbox4"><img src="http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox5" /> <label class="checkbox" for="myCheckbox5"><img src="http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png" /></label> </li> </ul> <ul class="checkbox-out"> <input type="checkbox" id="myCheckbox6" /> <label class="checkbox" for="myCheckbox6"><img src="http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox7" /> <label class="checkbox" for="myCheckbox7"><img src="http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox8" /> <label class="checkbox" for="myCheckbox8"><img src="http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox9" /> <label class="checkbox" for="myCheckbox9"><img src="http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png" /></label> </li> <li> <input type="checkbox" id="myCheckbox10" /> <label class="checkbox" for="myCheckbox10"><img src="http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png" /></label> </li> </ul> <Button class="btn-fin" onclick="checkboxcheck()" type="submit">Check</Button>'
    }
    if(id == "hard-drive"){
        aa.style.backgroundColor="rgba(0, 255, 162, 0.674)";
        aa.style.boxShadow="0px 0px 61px 3px rgba(0, 255, 162, 0.56)";    
    }
    if(id == "phone"){
        aa.style.backgroundColor="rgba(153, 0, 255, 0.674)";
        aa.style.boxShadow="0px 0px 61px 3px rgba(153, 0, 255, 0.56)";    
    }
    if(id == "servers"){
        aa.style.backgroundColor="rgba(255, 0, 183, 0.674)";
        aa.style.boxShadow="0px 0px 61px 3px rgba(255, 0, 183, 0.56)";    
    }
    if(id == "fishbooks"){
        aa.style.backgroundColor="rgba(255, 89, 0, 0.674)";
        aa.style.boxShadow="0px 0px 61px 3px rgba(255, 89, 0, 0.56)";    
    }
    if(id == "desk"){
        aa.style.backgroundColor="rgba(255, 204, 0, 0.674)";
        aa.style.boxShadow="0px 0px 61px 3px rgba(255, 204, 0, 0.56)";    
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
