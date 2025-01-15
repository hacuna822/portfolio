// Some cool features for interaction with user 
const image = document.getElementById('aboutImage');

image.addEventListener('mouseover', ()=> {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.4s';
});

image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
});

// Scale factor for when user hovers

const image2 = document.getElementById('aboutImage2');

image2.addEventListener('mouseover', ()=> {
    image2.style.transform = 'scale(1.1)';
    image2.style.transition = 'transform 0.4s';
});

image2.addEventListener('mouseout', () => {
    image2.style.transform = 'scale(1)';
});










