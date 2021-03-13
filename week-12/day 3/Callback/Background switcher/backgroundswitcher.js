// Create a function that updates the background-image of the <body> element
// The image value should be https://loremflickr.com/g/1280/800/hungary/
// Make sure every time you refresh the image, you add a cachebuster. WTF is a cachebuster?
// Create a timer function that refreshes the background every 5 seconds

let image = 'https://loremflickr.com/g/1280/800/hungary/'

function changeBackground(img){
    document.body.style.backgroundImage = `url(${img})`;
    setTimeout(() => {
        location.reload();
    }, 5000) 
}

changeBackground(image)