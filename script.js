const menu =document.querySelector(".menu")
const icon=document.querySelector('.menu-bar')

menu.addEventListener('click', function(){
   icon.classList.toggle('hidden')
    
})

window.addEventListener('resize',function(){
   const width=window.innerWidth
   if (width>800){
      icon.classList.add('hidden')
   }
})