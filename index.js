let app_id = "ba447f6b";
let app_key = "752deff0b60d81e17ea3cb0437dc02bf";
let base ;
let form_input = document.querySelector('form');
let food_search = '';

form_input.addEventListener('submit', (e)=>{
  e.preventDefault();
  food_search = e.target.querySelector('input').value;
   fetchApi();
  console.log(food_search)
})

async function fetchApi(){
  base = `https://api.edamam.com/api/recipes/v2?type=public&q=${food_search}&app_id=${app_id}&app_key=${app_key}`;
  const respons = await fetch(base);
  const data = await respons.json();
  generate(data.hits);
  console.log(data);
 }

 function  generate(result){
   let gen = '';
   result.map(result =>{
     gen += `  <div class="gallery">
      <img src="${result.recipe.image}" alt="img" class="img-recipe"/>
      <h4 class="recipeName">IngredientLines: ${result.recipe.label}  </h4>
      <ul>
        <li><a href="${result.recipe.url}" class=
          "link" target="_blank">View Recipe</a></li>
          <li>Calories : ${result.recipe.calories.toFixed(2)}</li>
          <li>DietLabels : ${result.recipe.dietLabels}</li>
          <li>cautions : ${result.recipe.cautions}</li>
          <li>mealType : ${result.recipe.mealType}</li>
          </ul>
          </div>`
          ;
        })
        document.getElementById("main").innerHTML = gen
      }
    
      
      
      