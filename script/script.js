var dataInput = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('menu-list');
var spans = document.getElementsByTagName('span');
var lies = document.getElementsByTagName('li');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
//addEventListener - обработчик события с вызовом возвращающей функции



function deleteTodo(){
    for( let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation(); //перехват события

        })
    }
}



function loadTodo(){
    if(localStorage.getItem('TodoApp')){
        ulSpisok.innerHTML = localStorage.getItem('TodoApp');
    }
    deleteTodo();
    liThrough()
}
function liThrough(){
    for( let li of lies){
        li.addEventListener('click', function (){
            if (li.style.textDecoration == "line-through") {
                li.style.textDecoration = "none";
            }
            else {
                li.style.textDecoration = "line-through";
            }
            event.stopPropagation();
        })
    }
}  

dataInput.addEventListener('keypress', function(keyPressed){    //keypress - нажатие на клавишу
    
    if(keyPressed.which === 13){                                //.which - позволяет обращаться к коду символа на клавиатуре в данном случае 13 - Enter
        let check = dataInput.value.trim();
        if (check == ""){
            alert("Введите задачу!!!!!!!!!!!!");
        } else if(check !== ""){
            var newLi = document.createElement('li');
            var newSpan = document.createElement('span');
            newSpan.id = "span1";
            var currentDate = new Date();
            var currYear = currentDate.getFullYear();
            var currMonth = currentDate.getMonth()+1;
            var currDay = currentDate.getDate();
            var currHours = currentDate.getHours();
            var currMin = currentDate.getMinutes();
            var currSec = currentDate.getSeconds();
            
        
        switch (currMonth) {
            case 0: fMonth="января"; break;
            case 1: fMonth="февраля"; break;
            case 2: fMonth="марта"; break;
            case 3: fMonth="апреля"; break;
            case 4: fMonth="мая"; break;
            case 5: fMonth="июня"; break;
            case 6: fMonth="июля"; break;
            case 7: fMonth="августа"; break;
            case 8: fMonth="сентября"; break;
            case 9: fMonth="октября"; break;
            case 10: fMonth="ноября"; break;
            case 11: fMonth="декабря"; break;
        }
        
        newSpan.innerHTML = "Delete";                           // добавляет текст в span
        var newDate = " " + "Дата добавления: " + currDay + "-" + fMonth + "-" + currYear + "," + " " + currHours + ":" + currMin + ":" + currSec;
        var newItem = this.value;                                 // получение данных из поля input
        this.value = " ";                                         // обнуляем(удаляем) текущий контекст в value
        var otstup = document.createElement('br');
        

            ulSpisok.appendChild(newLi).append(newItem, otstup, newSpan, newDate);                  // добавляем в ul новую Li параллельно добавл спан
        }
    }  
    liThrough();
    deleteTodo();                               
})   

saveBtn.addEventListener('click', function(){
    localStorage.setItem('TodoApp', ulSpisok.innerHTML);
   
})

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = ' ';
    localStorage.setItem('TodoApp', ulSpisok.innerHTML);
})
liThrough();
deleteTodo();
loadTodo();

document.getElementById('button3').onclick = function (){
    alert('Разработал: Дударчик Антон Сергеевич');
}