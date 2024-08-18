const hourel=document.getElementById("hour");
const minel=document.getElementById("minute");
const secondel=document.getElementById("second");
const amel=document.getElementById("AM");
function updateclock()
{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";
    if(h>12)
    {
        h=h-12;
        ampm="PM";
    }
  h=h<10?"0"+h:h;
  m=m<10?"0"+m:m;
  s=s<10?"0"+s:s;
    hourel.innerText=h;
    minel.innerText=m;
    secondel.innerText=s;
    amel.innerText=ampm;
    setTimeout(()=>{
     updateclock();
    },1000
    )
}
updateclock();
