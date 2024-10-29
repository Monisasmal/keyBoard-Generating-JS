document.addEventListener('DOMContentLoaded',(event) =>{
    let keyDisplay = document.querySelector('.key');
    let keyCodeDisplay = document.querySelector('.keycode');
    let keyHistory = document.querySelector('#history-list');

    // for sound Effect
    const playSound = () =>{
      const audio = new Audio("onClick.mp3");
      audio.play();
    }

    // for click a button on keyboard
    document.addEventListener('keydown', (event) =>{
        event.preventDefault();

        // to get the key which one pressed
        let keyName = event.key;
        let keyCode = event.keyCode|| event.which;
        

        // to display the pressed key's code
         keyDisplay.textContent = `Key ${keyName}`;
         keyCodeDisplay.textContent = `keyCode ${keyCode}`;

        //  call the sound
        playSound();

        // add the pressed key history
        let historyItem = document.createElement('li');
        historyItem.textContent = `Key:${keyName}, keyCode:${keyCode}`;
        keyHistory.prepend(historyItem);

        if(keyHistory.childNodes.length>5){
            keyHistory.removeChild(keyHistory.lastChild);
        }
        
    });
});

