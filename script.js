let btnEl=document.getElementById("btn");
btnEl.onmouseover=function(){submitButton()};



let btnPos=document.getElementById("btn-pos");

function submitButton(){
    console.log(document.getElementById('name').value)
    // console.log(btnPos.style.textAlign)
    if((document.getElementById('name').value).length>0&&(document.getElementById('pass').value).length>0){
        btnPos.style.textAlign="center"
        btnEl.textContent="Ab thik hai 😄 "
    }else{
        if(btnPos.style.textAlign=="right"){
            btnPos.style.textAlign="left"
            btnEl.textContent="Pehel data dal !!  "
        }else{
            btnPos.style.textAlign="right"
            btnEl.textContent="Pehel data dal !!"
        }
    }
}