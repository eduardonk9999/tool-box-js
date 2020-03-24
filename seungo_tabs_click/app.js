









//Para uso normal e rapido:
let acc = document.querySelectorAll('.accordion');

for(var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(){
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    
    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      
    }
  })
}


///---////----////

//Com conceito de prototype ficaria:
function Acc() {
  this.acc = document.querySelectorAll('.accordion');
  
}

Acc.prototype.clicktab = function() {
  let current = this;
  
  for(var i = 0; i < current.acc.length; i++) {
    current.acc[i].addEventListener("click", function(){
      this.classList.toggle('active');
      panel = this.nextElementSibling;
      
      if(panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        
      };
    });
  };
  
}

let performs = new Acc();
performs.clicktab();
