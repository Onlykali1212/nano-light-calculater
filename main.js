let text = document.querySelector(".text")



let calu = document.querySelectorAll(".clu");
let clearAll = document.querySelector(".clearAll");
let equle = document.querySelector(".equle");
let thems = document.querySelector("#thems");
let alldes = document.querySelector(".calculater-container")
 let collect = "";

function all(){
   

    calu.forEach((value) => {
        value.addEventListener("click", (e) => {
            collect += e.target.textContent;
            text.value = collect;
            console.log(collect)
        })
        
    });

}
all()

function clear(){
    clearAll.addEventListener("click", () => {
        collect = "";
        text.value = collect;
        console.log("hi")
    })
}

clear()

function equletime(){
    equle.addEventListener("click", () => {
        collect = eval(text.value);
        text.value = collect;
    })
}


function themsChange(){
    thems.addEventListener("change", () => {

        if(thems.value == "Dark"){
            alldes.classList.add("dark-mode")
        }else{
            alldes.classList.remove("dark-mode")
        }
       
    })
}

themsChange()
equletime()