 function play(){
    //home screen section
   //  const homeSection = document.getElementById('home_screen')
   //  homeSection.classList.add('hidden')
    AddElementById('home_screen')
    AddElementById('final_score')
    //play ground
   //  const playGroundSection = document.getElementById('play_ground');
   //  playGroundSection.classList.remove('hidden');
   removeElementById('play_ground')
   setTextElementValueById('Current_Life',5)
   setTextElementValueById('Current_Score',0)

   //Create alphabets string
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabets.split("");
   //  console.log(alphabet);

    //get a random number

    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber);
    console.log(index);

    const randomIndex = alphabet[index];
    console.log(randomIndex);

    const replaceAlphabet = document.getElementById("current_alphabet");
    replaceAlphabet.innerText = randomIndex;
    replaceAlphabet.innerText = randomIndex.toUpperCase();

    const addBackgroundColor = document.getElementById(randomIndex);
    addBackgroundColor.classList.add('bg-orange-400');

   
 }

 function handleKeyboardButtonPress(){
   console.log("button Press")
      
 }
function handleKeyboardButtonPress(event){
   // console.log(event.key);
   const playerPressed = event.key;
   console.log('Player Pressed',playerPressed);

   const currentAlphabetsElement = document.getElementById
   ('current_alphabet')
   const Current_alphabet = currentAlphabetsElement.innerText;
   console.log(Current_alphabet)
   const expectedAlphabet = Current_alphabet.toLowerCase();
   console.log(playerPressed,expectedAlphabet);
   if(playerPressed=== expectedAlphabet){
      console.log('You will win the Game')

      const currentLife = getTextElementValueById('Current_Score');
      const updateLife = currentLife+1;
      setTextElementValueById('Current_Score',updateLife);


   //Update Score :
   //1 : Get the current score
   // const currentScoreElement = document.getElementById('Current_Score');
   // const currentScoreText = currentScoreElement.innerText;
   // const currentScore=parseInt(currentScoreText);
   // console.log("my game score",typeof(currentScore));
   //2: increase score by 1
   // const UpdateScore = currentScore + 1;
   //3: Show the update score
   // currentScoreElement.innerText = UpdateScore;

   const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabets.split("");
    console.log(alphabet);

    //get a random number

    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber);
    console.log(index);

    const randomIndex = alphabet[index];
    console.log(randomIndex);

    const replaceAlphabet = document.getElementById("current_alphabet");
    replaceAlphabet.innerText = randomIndex;
    replaceAlphabet.innerText = randomIndex.toUpperCase();

    const addBackgroundColor = document.getElementById(randomIndex);
    addBackgroundColor.classList.add('bg-orange-400');

    const removeBackgroundColor= document.getElementById(expectedAlphabet);
   removeBackgroundColor.classList.remove('bg-orange-400');
   


   }
   else{
      console.log('you will not win the Game')

      const currentLife = getTextElementValueById('Current_Life');
      const updateLife = currentLife -1;
      setTextElementValueById('Current_Life',updateLife);

      //step 1:get the current life
      // const currentLifeElement = document.getElementById
      // ('Current_Life');
      // const currentLifeText  = currentLifeElement.innerText;
      // const currentLife = parseInt(currentLifeText);
      // console.log("My Life score",typeof(currentLife));
      // console.log(currentLife);

      //step 2: reduce the life count
      // const updateLife = currentLife -1;
      //step 3: display the update life;
      // currentLifeElement.innerText =updateLife;

      if(updateLife===0){
         console.log("Game over");
         // const playGroundSection = document.getElementById('play_ground');
         // playGroundSection.classList.add('hidden');
         AddElementById('play_ground')

         // const FinalSection = document.getElementById('final_score');
         // FinalSection.classList.remove('hidden');
         removeElementById('final_score')
         const lastScore = getTextElementValueById('Current_Score');
         console.log('Last score', lastScore);
         setTextElementValueById('last_score',lastScore);
         //clear the last selected alphabet highlight
         // const currentAlphabet = getElementTextById('current_alphabet');
         const removeBackgroundColor= document.getElementById(expectedAlphabet);
         removeBackgroundColor.classList.remove('bg-orange-400');

      } 
   }
}
 document.addEventListener('keyup',handleKeyboardButtonPress)



// const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

// function updateAlphabet() {
//     // Get a random index
//     const randomIndex = Math.floor(Math.random() * 26); // Use Math.floor for a range of 0-25
//     const randomAlphabet = alphabets[randomIndex].toUpperCase(); // Get the uppercase alphabet
//     console.log('Random Alphabet:', randomAlphabet);

//     // Update the current alphabet display
//     const replaceAlphabet = document.getElementById("current_alphabet");
//     replaceAlphabet.innerText = randomAlphabet;

//     // Update the background color
//     const addBackgroundColor = document.getElementById(randomAlphabet.toLowerCase());
//     if (addBackgroundColor) {
//         addBackgroundColor.classList.add('bg-orange-400');
//     }

//     return randomAlphabet.toLowerCase(); // Return lowercase for comparison
// }

// function play() {
//     // Home screen section
//     const homeSection = document.getElementById('home_screen');
//     homeSection.classList.add('hidden');

//     // Playground
//     const playGroundSection = document.getElementById('play_ground');
//     playGroundSection.classList.remove('hidden');

//     // Call the function to update the alphabet
//     updateAlphabet();
// }

// function handleKeyboardButtonPress(event) {
//     const playerPressed = event.key.toLowerCase();
//     console.log('Player Pressed:', playerPressed);

//     const currentAlphabetsElement = document.getElementById('current_alphabet');
//     const expectedAlphabet = currentAlphabetsElement.innerText.toLowerCase();
//     console.log('Expected Alphabet:', expectedAlphabet);

//     if (playerPressed === expectedAlphabet) {
//         console.log('You will win the Game');
        
//         // Call the function to update the alphabet again
//         updateAlphabet();

//         // Remove the previous background color
//         const removeBackgroundColor = document.getElementById(expectedAlphabet);
//         if (removeBackgroundColor) {
//             removeBackgroundColor.classList.remove('bg-orange-400');
//         }
//     } else {
//         console.log('You will not win the Game');
//     }
// }

// document.addEventListener('keyup', handleKeyboardButtonPress);




