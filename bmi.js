function bmi(){
    let weight=document.getElementById('weight').value
    let height=document.getElementById('height').value
    height=height/3.281
    var bmi=weight/(height*height)

    if(bmi<18.5){
        var category='underweight'
        var image='img/1.png'
    }else if(bmi>=18.5 && bmi<=24.9){
        var category='Normal weight'
        var image='img/2.png'
    }else if(bmi>=25 && bmi<=29.9){
        var category='Overweight'
        var image='img/3.jpg'

    }else if(bmi>=30){
        var category='Obese'
        var image='img/4.jpg'

    }
    
    document.getElementsByClassName('bmi_result')[0].innerHTML=`
    <div class="result">
            <h2>Your BMI is ${bmi} kg/m2 </h2>
            <h2>
                so you are ${category}

            </h2>
        </div>
        <div class="shape">
            <img src="${image}">
        </div>
    `
   category=''
   image=''

}
let bt=document.getElementById('btn')
bt.onclick=()=>{

    bmi();
}
let heightfield=document.getElementById('height')
heightfield.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn").click();
        }
    });
   