
function dropdown(){
    var x=document.getElementById("drop");
    if(x.className === "top-nav")
    {
        x.className += " responsive ";
        console.log("navbar open");
    }
    else{
        x.className  = "top-nav"
        console.log("navbar closed")
    }


    var n=document.getElementById("type");
    if(n.className === "option")
    {
        n.className += " responsive2 ";
        console.log("animation closed");
    }
    else{
        n.className  = "option"
        console.log("animation opened")
    }

    var w=document.getElementById("CV");
    if(w.className === "dropdown")
    {
        w.className += " responsive3 ";
        console.log("animation closed");
    }
    else{
        w.className  = "dropdown"
        console.log("animation opened")
    }

    var w=document.getElementById("hidebtn");
    if(w.className === "btn")
    {
        w.className += " responsive3 ";
        console.log("animation closed");
    }
    else{
        w.className  = "btn btn-show-all"
        console.log("animation opened")
    }



}

function flowdown(){
   
    var y=document.getElementById("hidebtn");
    
    var x=document.getElementById("more");
    if(x.className === "more")
    {
        x.className += "skill";
        console.log("open");
        y.innerHTML="See few ^";
       
    }
    else{
        x.className  = "more"
        console.log("closed");
        y.innerHTML="See all->";
    }
}
function clicked()
{
    alert("Submitted successfully");
}




