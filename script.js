let nav2 = document.querySelector(".nav2").style;
let menuebtn = document.querySelector(".menue").style;

function nav2fxn() {
    if (nav2.display == "none") {
        nav2.display = "block"
        menuebtn.display = ""
    }
    else {
        nav2.display = "none";
    }
}

function filterCreativeWork(){

}

console.log(document.querySelector(".prd").getAttribute);
document.getElementsByClassName('prd').style.display="none";