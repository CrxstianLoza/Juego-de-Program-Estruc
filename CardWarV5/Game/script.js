card_array = [
     '2C.png', '2D.png', '2H.png', '2S.png', '3C.png', '3D.png',
     '3H.png', '3S.png', '4C.png', '4D.png', '4H.png', '4S.png', 
     '5C.png', '5D.png', '5H.png', '5S.png', '6C.png', '6D.png',
     '6H.png', '6S.png', '7C.png', '7D.png', '7H.png', '7S.png', 
     '8C.png', '8D.png', '8H.png', '8S.png', '9C.png', '9D.png',
     '9H.png', '9S.png', '10C.png', '10D.png', '10H.png', '10S.png',
     'AC.png', 'AD.png', 'AH.png', 'AS.png', 'JC.png', 'JD.png',
     'JH.png', 'JS.png', 'KC.png', 'KD.png', 'KH.png', 'KS.png',
     'QC.png', 'QD.png', 'QH.png', 'QS.png'
   ]
   
   function ejectedFunctions(){
      get_random_card()
      flipCard()
   }

   function get_random_card(){

     random_index = Math.floor(Math.random() * card_array.length);
     random_index2 = Math.floor(Math.random() * card_array.length);

     selected_card = card_array[random_index]
     selected_card2 = card_array[random_index2]
   
     document.getElementById('card_shower').src = `./img/${selected_card}`

     document.getElementById('card_shower2').src = `./img/${selected_card2}`

     let audio = new Audio('./audio/picking a card.mp3');
     audio.play()
   }
   document.getElementById('Button').addEventListener('click', get_random_card);

    //Funcion para que la carta de vuelta
   function flipCard() {
    let cardContainer = document.getElementById('card-container');
    cardContainer.classList.toggle('flipped');
}


   
