let count = 50; // Starting count
    let interval = setInterval(() => {
        if(count > 3) {
            count--;
            document.getElementById('counter').innerText = `Only ${count} left!`;
        } 
        if(count === 3) {
            document.getElementById('counter').innerText = `Only 3 left! Hurry up!`;
            document.getElementById('message').innerText = `Don't miss out! This offer is almost gone.`;
            clearInterval(interval);
        }
    }, 60000); 
  
  