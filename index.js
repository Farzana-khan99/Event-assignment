let content = document.getElementById("para").innerText;
let btn = document.getElementById("btn")
let conut = 0;

if (content.length > 100) {
  textFun()

}

function textFun() {
 
    let lessContent = content.slice(0, 100);
    let show = (document.getElementById("para").innerText = lessContent);
    let btn = (document.getElementById("btn").style.display = "block");
    btn.innerHTML ="show more"
  } 

function showMore(){
    let contentFull = document.getElementById("para").innerText =content
    console.log(contentFull.length, "show mpre fun")
   let textBtn = document.getElementById("btn").innerText ="show less"  
   console.log(textBtn , "button") 
}

function mainFun(){
    if(conut){
      btn.innerHTML ="show more"
      textFun()
      conut++
    }
    else{
      btn.innerHTML ="show less"
        showMore()
        conut--
    }
}
