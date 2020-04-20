var r1="0"
var r=0;
var n=" "
var n1
symbol='!'
var a=document.getElementById("size")
var b1=document.getElementById("button1")
var b2=document.getElementById("button2")
var b3=document.getElementById("button3")
var bplus=document.getElementById("button+")
var b4=document.getElementById("button4")
var b5=document.getElementById("button5")
var b6=document.getElementById("button6")
var bsub=document.getElementById("button-")
var b7=document.getElementById("button7")
var b8=document.getElementById("button8")
var b9=document.getElementById("button9")
var bmul=document.getElementById("buttonx")
var bdot=document.getElementById("buttondot")
var b0=document.getElementById("button0")
var bclear=document.getElementById("buttonclear")
var bdiv=document.getElementById("button/")
var bok=document.getElementById("OK")
b1.addEventListener("click",function(){
 n=n.concat("1")
 a.value=n
 r1=r1.concat("1")
 r=parseFloat(r1)
})
b2.addEventListener("click",function(){
  n=n.concat("2")
  a.value=n
  r1=r1.concat("2")
  r=parseFloat(r1)
})
b3.addEventListener("click",function(){
  n=n.concat("3")
  a.value=n
  r1=r1.concat("3")
  r=parseFloat(r1)
})
b4.addEventListener("click",function(){
  n=n.concat("4")
  a.value=n
  r1=r1.concat("4")
  r=parseFloat (r1)
})
b5.addEventListener("click",function(){
  n=n.concat("5")
  a.value=n
  r1=r1.concat("5")
  r=parseFloat (r1)
})
b6.addEventListener("click",function(){
  n=n.concat("6")
  a.value=n
  r1=r1.concat("6")
  r=parseFloat (r1)
})
b7.addEventListener("click",function(){
  n=n.concat("7")
  a.value=n
  r1=r1.concat("7")
  r=parseFloat (r1)
})
b8.addEventListener("click",function(){
  n=n.concat("8")
  a.value=n
  r1=r1.concat("8")
  r=parseFloat (r1)
})
b9.addEventListener("click",function(){
  n=n.concat("9")
  a.value=n
  r1=r1.concat("9")
  r=parseFloat (r1)
})
b0.addEventListener("click",function(){
  n=n.concat("0")
  a.value=n
  r1=r1.concat("0")
  r=parseFloat(r1)
})
bdot.addEventListener("click",function(){
  n=n.concat(".")
  a.value=n
  r1=r1.concat(".")
})
bclear.addEventListener("click",function(){
  a.value=null
  n=" "
  symbol='!'
  r=0
  n1=0
  r1="0"
})
bok.addEventListener("click",function(){
  if(symbol=='+')
  {
  n1=n1+r
  r=0}
  else if(symbol=='-'){
  n1=n1-r
  r=0}
  else if(symbol=='*'){
  n1=n1*r
  r=0}
  else if(symbol=='/'){
  n1=n1/r
  r=0}
  a.value=n1
  symbol ='!'
  n1=0
  n=" "
  r=0
  r1="0"
})
bplus.addEventListener("click",function(){
  n=n.concat("+")
  a.value=n
  if(symbol=='+'){
  n1=n1+r
  symbol='+'
  r=0}
  else if(symbol=='-'){
  n1=n1-r
  symbol='+'
  r=0}
  else if(symbol=='*'){
  n1=n1*r
  symbol='+'
  r=0}
  else if(symbol=='/'){
  n1=n1/r
  symbol='+'
  r=0}
  else if(symbol=='!')
  {
    symbol='+'
    n1=r
    r=0
  }
  r=0
  r1="0"
})
bsub.addEventListener("click",function(){
  n=n.concat("-")
  a.value=n
  if(symbol=='+'){
  n1=n1+r
  symbol='-'
  r=0}
  else if(symbol=='-'){
  n1=n1-r
  symbol='-'
  r=0}
  else if(symbol=='*'){
  n1=n1*r
  symbol='-'
  r=0}
  else if(symbol=='/'){
  n1=n1/r
  symbol='-'
  r=0}
  else if(symbol=='!')
  {
    symbol='-'
    n1=r
    r=0
  }
  r=0
  r1="0"
})
bmul.addEventListener("click",function(){
  n=n.concat("×")
  a.value=n
  if(symbol=='+'){
  n1=n1+r
  symbol='*'
  r=0}
  else if(symbol=='-'){
  n1=n1-r
  symbol='*'
  r=0}
  else if(symbol=='*'){
  n1=n1*r
  symbol='*'
  r=0}
  else if(symbol=='/'){
  n1=n1/r
  symbol='*'
  r=0}
  else if(symbol=='!')
  {
    symbol='*'
    n1=r
    r=0
  }
  r=0
  r1="0"
})
bdiv.addEventListener("click",function(){
  n=n.concat("/")
  a.value=n
  if(symbol=='+'){
  n1=n1+r
  symbol='/'
  r=0}
  else if(symbol=='-'){
  n1=n1-r
  symbol='/'
  r=0}
  else if(symbol=='*'){
  n1=n1*r
  symbol='/'
  r=0}
  else if(symbol=='/'){
  n1=n1/r
  symbol='/'
  r=0}
  else if(symbol=='!')
  {
    symbol='/'
    n1=r
    r=0
  }
  r=0
  r1="0"
})
