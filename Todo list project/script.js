    let txt = document.getElementById("todo-text");
    let all_task = document.getElementById("todo-list");
    let btn = document.getElementById("add-task");
    let check = document.querySelector("ul");
    let check_list = document.getElementsByTagName("li");
    let rem = document.getElementsByClassName("close");

for(let i =0;i<check_list.length;i++){
    let span = document.createElement("span");
    span.className = "close";
    span.appendChild(document.createTextNode("X"));
    check_list[i].appendChild(span);
}
function add_task(){
    let task = document.createElement("li");
    if(txt.value!=''){
        let span = document.createElement("span");
        span.className = "close";
        span.appendChild(document.createTextNode("X"));
        task.appendChild(span);
        task.appendChild(document.createTextNode(txt.value));
        all_task.appendChild(task);
        txt.value = '';
    }
    else{
        alert("please enter the the task first");
    }
    for(let i=0;i<rem.length;i++){
        rem[i].addEventListener("click",function(){
            this.parentNode.remove();
    
        });
    }
}
function done_task(){
    
}

for(let i=0;i<check_list.length;i++){
    
}
btn.addEventListener("click",add_task);
txt.addEventListener("keyup",function(event){
    event.preventDefault();
    if(event.code === "Enter"){
        add_task();
    }
});
check.addEventListener("click",function(event){
    event.target.classList.toggle("checked");
});


for(let i=0;i<rem.length;i++){
    rem[i].addEventListener("click",function(){
        this.parentNode.remove();

    });
}