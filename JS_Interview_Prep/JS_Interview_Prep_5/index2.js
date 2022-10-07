let newText=()=>{
let newHead = document.createElement("h1");
newHead.innerText="MERN stack";
document.querySelector("body").appendChild(newHead);
}

//________________________________________________________________________________________________________________________

let element=document.getElementsByTagName("h1")
console.log(element[0].innerText);
//________________________________________________________________________________________________________________________
let liveClock=()=>{
    let dateTime= new Date();
    let hour= dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();

    document.getElementsByClassName("hour")[0].innerText=(hour);
    document.getElementsByClassName("min")[0].innerText=(min);
    document.getElementsByClassName("sec")[0].innerText=(sec);
}

setInterval(liveClock, 10);
//________________________________________________________________________________________________________________________

// let hide=()=>{
//     document.querySelector("body").removeChild(element);
// }

//________________________________________________________________________________________________________________________
let array=[0,1,1,0,0,1,0,1];
let count=0;
for(i=0; i<=array.length; i++){
    
    if(array[i]==0){
        count++
    }
}
console.log(count);

//________________________________________________________________________________________________________________________

let array2=[1,2,2,3,4,3,5,6,4,7,7,8,9];
let countArray2=0;
let count2Array2=0;

for(i=0; i<=array2.length; i++){
    if(array2[i]%2==0)
    countArray2++;

else{
    count2Array2++;
}
}
console.log(`Total Even No. ${countArray2}`)
console.log(`Total Even No. ${count2Array2}`)

//________________________________________________________________________________________________________________________

let str1="Neelesh Ranjan";
let vowels="aeiouAEIOU";
let vowelsCount=0;
for(i=0; i<str1.length; i++){
    for(j=0; j<vowels.length; j++){
        if(vowels[j]===str1[i]){;
        vowelsCount++;
        }
    }
}
console.log(`No. of Vowels ${vowelsCount}`);












