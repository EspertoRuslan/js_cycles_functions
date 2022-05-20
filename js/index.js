//1
let a;
let b;
let javaScript;
let d;
a=11;
b=true;
javaScript="java script";
d="100";
console.log(a);
console.log(b);
console.log(javaScript);
console.log(d);
//2
let userName=prompt('Введите Ваше имя');
console.log('Hello', userName);
//3
let x=prompt('Введите количество минут');
if(x<=15){
    console.log("первая четверть часа");
}
else if(x<=30){
    console.log("вторая четверть часа");
}
else if(x<=45){
    console.log("третья четверть часа");
}
else if(x<=60){
    console.log("четвертая четверть часа");
}
//4
let start=10, end=50, res=0;
for(start=10; start<=end; res=start%5==0){
    console.log(res);
}
