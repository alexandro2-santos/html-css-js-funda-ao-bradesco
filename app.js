
const switcher = document.querySelector('.btn')
   switcher.addEventListener ('click', function(){
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className. includes ("light-theme")) {
        this. textContent ="light";
    }
    else{
        this.textContent ="dark";
    }
   });