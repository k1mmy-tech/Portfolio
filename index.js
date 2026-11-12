// Hobbies slider
const hobbiesTrack = document.getElementById("hobbies-track");
const hobbiesNext  = document.getElementById("hobbies-next");
let hobbiesSliding = false;

hobbiesNext.addEventListener("click", () => {
    if (hobbiesSliding || hobbiesTrack.children.length < 2) return;
    hobbiesSliding = true;

    const first = hobbiesTrack.firstElementChild;
    const gap = parseFloat(getComputedStyle(hobbiesTrack).columnGap) || 0;
    const distance = first.getBoundingClientRect().width + gap;

    hobbiesTrack.appendChild(first.cloneNode(true));   // copy of the first photo goes to the back
    void hobbiesTrack.offsetWidth;                     // make sure the browser sees the new photo

    const finish = () => {
        hobbiesTrack.classList.remove("sliding");
        hobbiesTrack.style.transform = "";
        first.remove();                                // remove the original, the copy stays
        hobbiesSliding = false;
    };

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { finish(); return; }

    hobbiesTrack.classList.add("sliding");
    hobbiesTrack.style.transform = `translateX(-${distance}px)`;
    setTimeout(finish, 460);
});
