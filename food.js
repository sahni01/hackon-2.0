function recipe(){
    var keyword=document.getElementById('dish').value
    const btn=document.getElementById('btn')
     fetch(`https://api.edamam.com/search?q=${keyword}&app_id=a0843b12&app_key=ceff1e797d462b7de5536e79cd04be67&from=0&to=3&calories=591-722&health=alcohol-free`)
     .then(response=>{
         return response.json()
     })
     .then(json_file=>{
         console.log(json_file)
         
         var dish=json_file.hits[0]
         var total_len_nutri = dish.recipe.digest.length
         var total_len_ingre = dish.recipe.ingredientLines.length
         document.getElementsByClassName('label')[0].innerHTML=`<div> <h2>${dish.recipe.label}</h2></div>
         <div> <img src="${dish.recipe.image}" id="food_image"></div>`
         document.getElementsByClassName('nutri-head')[0].innerHTML=`<h2>Nutrition values</h2>`
         for (var n=0;n<total_len_nutri;n++){
             
             document.getElementById('nutri-list').innerHTML+=`<li>${dish.recipe.digest[n].label} : ${dish.recipe.digest[n].total}${dish.recipe.digest[n].unit}</li>`
             
            
         }
         document.getElementsByClassName('ingre-head')[0].innerHTML=`<h2>Ingredients</h2>`
         for (var i=0;i<total_len_ingre;i++){
             document.getElementById('ingre-list').innerHTML+=`<li>${dish.recipe.ingredientLines[i]}</li>`
            
         }
         document.getElementsByClassName('get_recipe')[0].innerHTML=`<a href="${dish.recipe.url}" target="_blank" >Get Recipe</a>`
     })
 }
//  btn.addEventListener('click',recipe())
let dish=document.getElementById('dish')
dish.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search").click();
        }
    });
 