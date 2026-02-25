const items = [
{
old:1540,
new:1060,
extra:1
},
{
old:19950,
new:13150,
extra:350
}
];

let selected=[true,true];

function format(n){
return n.toLocaleString('uk-UA')+" грн";
}

function toggleItem(i){
selected[i]=!selected[i];
recalc();
}

function recalc(){

let sumOld=0;
let sumNew=0;

items.forEach((item,i)=>{
if(selected[i]){
sumOld+=item.old;
sumNew+=item.new+item.extra;
}
});

let discount=sumOld-sumNew;
let delivery=sumNew>0?80:0;
let total=sumNew+delivery;

document.getElementById("sumOld").innerText=format(sumOld);
document.getElementById("discount").innerText=format(discount);
document.getElementById("delivery").innerText=format(delivery);
document.getElementById("total").innerText=format(total);

document.getElementById("bottomOld").innerText=format(sumOld);
document.getElementById("bottomTotal").innerText=format(total);
}

recalc();
