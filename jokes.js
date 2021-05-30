fetch('https://official-joke-api.appspot.com/jokes/general/ten') //fetching the api
.then(
   res=>{
       return res.json()    //getting in the json format
       
   } 
).then(
   jason_data=>{
       
       document.getElementsByClassName('right')[0].innerHTML=`
        <p>${jason_data[0].setup}
        <br>
        <br>
        ${jason_data[0].punchline}
        </p>
        `
       var i=1
        function myloop(){
            setTimeout(() => {
                
                document.getElementsByClassName('right')[0].innerHTML=`
        <p>${jason_data[i].setup}
        <br>
        <br>
        ${jason_data[i].punchline}
        </p>
        `
                i++;
                if(i<10){
                    myloop();
                }
            },6000);

        }
        myloop();


}
)
function jokeloop(){
    setTimeout(() => {
        fetch('https://official-joke-api.appspot.com/jokes/general/ten') //fetching the api
.then(
   res=>{
       return res.json()    //getting in the json format
       
   } 
).then(
   jason_data=>{
       
       document.getElementsByClassName('right')[0].innerHTML=`
        <p>${jason_data[0].setup}
        <br>
        <br>
        ${jason_data[0].punchline}
        </p>
        `
       var i=1
        function myloop(){
            setTimeout(() => {
                
                document.getElementsByClassName('right')[0].innerHTML=`
        <p>${jason_data[i].setup}
        <br>
        <br>
        ${jason_data[i].punchline}
        </p>
        `
                i++;
                if(i<10){
                    myloop();
                }
            },6000);

        }
        myloop();


}
)
            jokeloop();
       
    }, 60000);

}
jokeloop();
