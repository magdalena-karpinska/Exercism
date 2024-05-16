/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime >= 0) {
    switch (remainingTime) {
      case 0:
        return 'Lasagna is done.';
        break;
      default:
        return 'Not done, please wait.';
        break;
    };
  } else if (!remainingTime) {
    return 'You forgot to set the timer.';
  };
}

export function preparationTime(layers, time) {
  let totalTime = 0;
  
  if (time >= 0) {
    totalTime = layers.length * time;
    
  } else if (!time) {
    totalTime = layers.length * 2;
  };
  
  return totalTime;  
}

export function quantities(layers) {
  const obj = {
    noodles: 0,
    sauce: 0,
  }
  for (let layer of layers) {
    if  (layer === 'noodles') {
      obj.noodles += 50;
    } else if (layer === 'sauce') {
      obj.sauce += 0.2;
    };
  };
  return obj;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length -1]);
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  if (portions >= 1) {
    for (let ingredient in recipe) {
      const scaledAmount = recipe[ingredient] * (portions / 2);
      scaledRecipe[ingredient] = scaledAmount;
    }
  } else if (!portions) {
    return recipe;
  }
  return scaledRecipe; 
}