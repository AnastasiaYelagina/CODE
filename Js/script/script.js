const compliments =["smart","adorable","clever","genius"];
const animals=["dog", "cat"];
function moodIncreaser(){
for(let i=0;i<=10;i++){
    let rand1= Math.floor(Math.random()*compliments.length);
    let rand2= Math.floor(Math.random()*animals.length);
    document.write("you are "+compliments[rand1]+" as "+animals[rand2]+"!"|+"<br>");
}}