
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/2.JPG') {
      myImage.setAttribute('src','images/tanyawedding.JPG');
    } else {
      myImage.setAttribute('src','images/2.JPG');
    };
    alert('Ouch! Stop poking me!'); 
}

