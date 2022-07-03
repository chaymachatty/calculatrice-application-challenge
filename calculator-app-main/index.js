
let btn1=document.getElementById('theme1')
let btn2=document.getElementById('theme2')
let btn3=document.getElementById('theme3')
let del=document.getElementById('del');
let resetEL=document.getElementById('reset')
let equalEl=document.getElementById('equal')
let boardEl=document.getElementById('board')
let totalEl=document.getElementById('total')
let themesEl=document.getElementById('themes')
let resetEqual=document.getElementById('resetequal')
let numberEl=document.getElementById('number')
let menuEl=document.getElementById('menu')



btn1.addEventListener('click',()=>{
  btn3.style.backgroundColor="hsl(224, 36%, 15%)"
  btn2.style.backgroundColor= "hsl(224, 36%, 15%)"
  btn1.style.backgroundColor="hsl(6, 70%, 34%)"
  document.body.style.backgroundColor="hsl(222, 26%, 31%)"                    
  resetEL.style.backgroundColor=" hsl(225, 21%, 49%)"
  del.style.backgroundColor="hsl(225, 21%, 49%)"
  equalEl.style.backgroundColor="hsl(6, 63%, 50%)"
  boardEl.style.backgroundColor="hsl(223, 31%, 20%)"
  totalEl.style.backgroundColor="hsl(224, 36%, 15%)"
  themesEl.style.backgroundColor="hsl(224, 36%, 15%)"
  resetEqual.style.backgroundColor="hsl(223, 31%, 20%)"
  numberEl.style.color=" hsl(52, 100%, 62%)"
  menuEl.style.color=" hsl(52, 100%, 62%)"
})



btn2.addEventListener('click',()=>{
  btn2.style.backgroundColor="hsl(25, 98%, 40%)"
  btn1.style.backgroundColor= "hsl(0, 5%, 81%)"
  btn3.style.backgroundColor="hsl(0, 5%, 81%)"
  document.body.style.backgroundColor=" hsl(0, 0%, 90%)"
  resetEL.style.backgroundColor=" hsl(185, 42%, 37%)"
  del.style.backgroundColor=" hsl(185, 58%, 25%)"
  equalEl.style.backgroundColor=" hsl(25, 99%, 27%)"
  boardEl.style.backgroundColor=" hsl(0, 5%, 81%)"
  totalEl.style.backgroundColor="hsl(0, 5%, 81%)"
  themesEl.style.backgroundColor="hsl(0, 5%, 81%)"
  resetEqual.style.backgroundColor="hsl(0, 5%, 81%)"
  numberEl.style.color="black"
  menuEl.style.color="black"

})
btn3.addEventListener('click',()=>{
  btn3.style.backgroundColor="hsl(176, 100%, 44%)"
  btn2.style.backgroundColor= "hsl(268, 75%, 9%)"
  btn1.style.backgroundColor="hsl(268, 75%, 9%)"
  document.body.style.backgroundColor="hsl(268, 75%, 11%)"                    
  resetEL.style.backgroundColor=" hsl(290, 70%, 36%)"
  del.style.backgroundColor="hsl(290, 70%, 36%)"
  equalEl.style.backgroundColor="hsl(177, 92%, 70%)"
  boardEl.style.backgroundColor="hsl(268, 75%, 9%)"
 
  totalEl.style.backgroundColor="hsl(268, 80%, 9%)"
  themesEl.style.backgroundColor="hsl(268, 75%, 9%)"
  resetEqual.style.backgroundColor="hsl(268, 80%, 9%)"
  numberEl.style.color=" hsl(52, 100%, 62%)"
  menuEl.style.color=" hsl(52, 100%, 62%)"

})
