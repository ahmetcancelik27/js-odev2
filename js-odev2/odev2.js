const task = document.querySelector("#task");
const liveToastBtn = document.querySelector("#liveToastBtn");
const ulDOM = document.querySelector("#list");
const liveToast = document.querySelector("#liveToast");

//Listeye eleman ekleme..
    
liveToastBtn.addEventListener("click", function(){
    var li = document.createElement("li");
    li.textContent = task.value
    ulDOM.appendChild(li);
    task.value = "";

   
// Listeden eleman çıkarmak için eklenen çarpı
    
    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7');
    span.classList.add('close');
    span.appendChild(text);
    li.appendChild(span);


/// Listeden eleman çıkarma
//zaten bir spanımız var onun üzerinde devam ediyorum 

        span.onclick = function(item){
        var li = this.parentElement;
        li.style.display = "none";
        // Kaldırmak isteğine emin misin? (alert)
        let answer = window.confirm("kaldırmak istediğinizden emin misiniz?");
        if (answer) {
                 e.remove();
        }
    }
})

//Listeden tamamlanmış li görev elemanlarının üstünü çizme
ulDOM.addEventListener("click", function(item){
    if(item.target.tagName= "li"){
        item.target.classList.toggle("checked");
    }
})

function newElement() {
        if (task.value == "" || !task.value.trim() ) {
             $(`.error`).toast("show")
        }else {
            var span = document.createElement('span');
            var text = document.createTextNode('\u00D7');
            $(`.success`).toast("show")
            span.classList.add('close');
            span.appendChild(text);
            li.appendChild(span);
            localStorage.setItem("görev", click);
        }

 }












