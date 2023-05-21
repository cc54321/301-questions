// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function SumAndX(num1, num2) {
  const sum = num1 + num2;
  let x = "Yes";

 

  return {
    sum: sum,
    x: x
  };
}
const res = SumAndX(3, 4);
console.log(res.sum); // Output: 7
console.log(res.x);   // Output: Yes


// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const calculateSumAndX = (num1, num2) => {
  const sum = num1 + num2;
  let x = "Yes Again";

  

  return {
    sum: sum,
    x: x
  };
};
const result = calculateSumAndX(6, 8);
console.log(result.sum); // Output: 14
console.log(result.x);   // Output: yes again



// 3. Write a function that returns another function. (use arrow functions please)
const greatGameFunctiom = () => {
  return () => {
    console.log("What a Game!");
  };
};
const game = greatGameFunctiom();
game();  // Output: What a Game!



// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.
const getFunction = () => {
    const y = 5;
  
    const insideFunc = (a) => y + a;
  
    return insideFunc;
  };
  
  console.log(getFunction()(2))
  //answer: Even though y is not a global variable, the insideFunc still has access to it. So when you call getFunction it returns the insideFunc and pass in 2 it adds y = 5 for a sum of 7
  
  
  // 5. write a function that takes "couldThrowError()" as a callback argument.
  // within that function call "couldThrowError" and and log the result to the console. myFunction(couldThrowError);
  // Make sure to handle errors that could be thrown by "couldThrowError()"
  // If there is an error log "sorry, there was an error" to the console.
  
   const couldThrowError = () => {
    
     if(Math.ceil(Math.random() * 2) < 2){
      throw new Error("Error was thrown");
   }
    
    return 'success'
  }
  
  try {
    const result = couldThrowError();
    console.log(result);
  } catch (error) {
    console.log('Sorry, there was an error');
  }
  
  
  
  ////////////////////////////////////////////////////////////
  //// Handling data:
  ////////////////////////////////////////////////////////////
  
  
  const userData = [
    {
      id: '111',
      name: 'Peter',
      favorites: {
        food: ['burgers', 'pizza'],
        activites: ['basketball', "baseball"]
      },
    },
    {
      id: '222',
      name: 'John',
      favorites: {
        food: ['burgers', 'tacos'],
        activites: ['football', "golf"]
      },
    },
    {
      id: '333',
      name: 'Mary',
      favorites: {
        food: ['pizza', 'tacos', 'fried chicken'],
        activites: ['volleyball', "softball"]
      },
    }
  ];
  
  // 5. Given the data above, use ".map" to make an array of objects.
  // Each object should have the id of the user and the amount of favorite foods they have.
  // example: [{id: '111', favoriteFoods: 2}]
  const favoriteFoodCount = userData.map((user) => {
    return {
      id: user.id,
      favoriteFoodCount: user.favorites.food.length
    };
  });
  
  console.log(favoriteFoodCount);
  
  
  // 6. Given the data above, use ".reduce" to make an array of all the names
  const allNames = userData.reduce((names, user) => {
    return names.concat(user.name);
  }, []);
  
  console.log(allNames);
  // of the people who have pizza as one of their favorite foods.

  const pizzaLovers = userData.filter((user) => user.favorites.food.includes('pizza'));

console.log(pizzaLovers);


  // example: ['Peter', 'Mary']
  
  
  // 7. Show an an example of a switch statement being used: YOU CAN SWITCH THE CONST DAY AND GET NEW RESULT
  const day = 'Friday';

switch (day) {
  case 'Monday':
    console.log('It is Monday. Time to start the week!');
    break;
  case 'Tuesday':
    console.log('It is Tuesday. Work, work, work!');
    break;
  case 'Wednesday':
    console.log('It is Wednesday. Halfway through the week!');
    break;
  case 'Thursday':
    console.log('It is Thursday. Keep pushing!');
    break;
  case 'Friday':
    console.log('It is Friday. Weekend is just around the corner!');
    break;
  default:
    console.log('It is a weekend day. Enjoy your rest!');
    break;
}


  
  ////////////////////////////////////////////////////////////
  //// OBJECT AND ARRAY DESTRUCTURING
  ////////////////////////////////////////////////////////////
  
  
  const userPersonalData = {
    name: 'peter',
    age: '56',
    birthday: 'jan 1st',
   };
   const userGameData = {
    score: 4546,
    accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
   };
    

  
  
  // 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
  // const user = {
  //  name: 'peter',
  //  age: '56',
  //  birthday: 'jan 1st',
  //  score: 4546,
  //  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
  // }
  
  user = {
    ...userPersonalData,
    ...userGameData
  };
  
  console.log(user);
  
  
  
  
  
  // 9. Make a copy of your new user object but override the birthday to december 31st
  const userCopy = {
    ...user,
    birthday: 'December 31st'
  };
  
  console.log(userCopy);
  
  // 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable
  const accomplishmentsCopy = [...user.accomplishments];

console.log(accomplishmentsCopy);

  
  
  
  //  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
  //  and store it in a variable name food
  
  var user = {
    name: 'pete',
    age: '32',
    favoriteThings: {
      food: ['pizza', 'tacos', 'burgers', 'italian'],
      movies: [],
    },
   };
  
   const { favoriteThings: { food } } = user;

console.log(food);

  // 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //
  
  const { favoriteThings: { food: [firstFood, secondFood] } } = user;

console.log(firstFood);
console.log(secondFood);

  // 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
  //    the food variable should have all the array items starting from the third one.
  const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];
  const [name, age, ...foods] = data;

console.log(name);
console.log(age);
console.log(foods[2]);
  
  
  // 14. use object destructuring to grab the following from the userInfo object: 
  // - The user's name and in a constant named userName.
  // - The user's favorite food array and name it favoriteFood.
  // - The users first favorite thing (cars) and name it favoriteThing
  // - The users second favorite thing (jewelry) and name it secondfavoriteThing
  
  const userInfo = {
    name: 'Peter',
    favorites: {
      needs: {
        food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
      },
      wants: {
        things: ['cars', 'jewelry'],
      },
    },
  };

  const {
    name: userName,
    favorites: {
      needs: { food: favoriteFood },
      wants: { things: [favoriteThing, secondFavoriteThing] }
    }
  } = userInfo;
  
  console.log(userName);
  console.log(favoriteFood);
  console.log(favoriteThing);
  console.log(secondFavoriteThing);
  
  var fetchData = () => new Promise((resolve, reject) => {
    console.log('fetchingData from imaginary database')
    setTimeout(() => {
         try {
           // fetchingData from imaginary database
           if((Math.ceil(Math.random() * 2)) < 2){
             throw new Error('Error!')
           }
           resolve({name: 'john', age:42})
          } catch(error) {
            reject(error);
          }
    }, 5000);
  });
  
  
  module.exports =  fetchData;
  
  
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Promises:
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Function that returns a promise.
  var fetchData = () => new Promise((resolve, reject) => {
    console.log('fetchingData from imaginary database')
    setTimeout(() => {
         try {
           // fetchingData from imaginary database
           if((Math.ceil(Math.random() * 2)) < 2){
             throw new Error('Error!')
           }
           resolve({name: 'john', age:42})
          } catch(error) {
            reject(error);
          }
    }, 5000);
  });
  fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
  
  
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  async function fetchAndLogData() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  fetchAndLogData();
  