var dec=document.getElementById('dec');
var inc=document.getElementById('inc');
var res=document.getElementById('res');
var text=document.getElementById('text')
dec.addEventListener("click",()=>{
    const value = Number(text.innerText);
    text.innerText = value - 1;
});
inc.addEventListener("click",()=>{
    const value = Number(text.innerText);
    text.innerText = value + 1;
});
res.addEventListener("click",()=>{
    const value = Number(text.innerText);
    text.innerText = 0;
});