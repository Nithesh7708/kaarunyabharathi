const left_btn = document.getElementById("slide_left");
const right_btn = document.getElementById("slide_right");
const sliderContainer = document.getElementById("sliderContainer");
const slider_path=document.querySelector('.slider_container .sliders');

let current_index = 0;
const sliderWidth = 100;
const total_sliders = 5;

left_btn.addEventListener('click', () => {
    slider_value(-1);
    resetInterval();
});
right_btn.addEventListener('click', () => {
    slider_value(1);
    resetInterval();
});


function slider_value(direction) {
    current_index = (current_index + direction + total_sliders) % total_sliders;
    const offset = -current_index * sliderWidth;
    slider_path.style.transform = `translateX(${offset}vw)`;
    console.log(offset);
}

// Function to reset the interval timer
function resetInterval() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => { slider_value(1) }, 6000);
}

// Start the interval timer when the script runs
resetInterval();