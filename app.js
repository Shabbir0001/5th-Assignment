function showMeals(){
    let mealName = document.getElementById("mealName").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealName}`)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    // .catch(error = displayErrorMsg("Something went wrong..! Please refresh the page and search again."))
}

//  const displayErrorMsg = error =>{
//     const errorMessage = document.getElementById("errorMsg");
//     errorMessage.innerText = error;
//  }



const displayMeals = meals => {
        meals.forEach(meal => {
        // console.log(meal);
        const mealsDiv = document.getElementById("listMeals");
        const mealDiv = document.createElement("div");
        const mealImgUrl =`${meal.strMealThumb}`
        // console.log(mealImgUrl);
        mealDiv.className = "meals";
        const mealId = meal.idMeal;
        const mealInfo = `
        <div onClick="displayMealDetail('${meal.idMeal}')">
        <img src="${mealImgUrl}">
        <h3 class="meal-name">${meal.strMeal}</h3>
        </div>
        `
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    })
    
}

const displayMealDetail = mealId =>{
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
     fetch(url)
    .then(res => res.json())
    .then(data => renderMealInfo(data.meals[0]))
}


const renderMealInfo = singleMeal =>{
    // console.log(singleMeal);
    const mealDiv = document.getElementById("mealInfo");
    mealDiv.innerHTML = `
    <img src="${singleMeal.strMealThumb}">
    <h2>${singleMeal.strMeal}</h2>
    <ul>
    <li>${singleMeal.strMeasure1} ${singleMeal.strIngredient1}</li>
    <li>${singleMeal.strMeasure2} ${singleMeal.strIngredient2}</li>
    <li>${singleMeal.strMeasure3} ${singleMeal.strIngredient3}</li>
    <li>${singleMeal.strMeasure4} ${singleMeal.strIngredient4}</li>
    <li>${singleMeal.strMeasure5} ${singleMeal.strIngredient5}</li>
    <li>${singleMeal.strMeasure6} ${singleMeal.strIngredient6}</li>
    <li>${singleMeal.strMeasure7} ${singleMeal.strIngredient7}</li>
    </ul>
    `
}




