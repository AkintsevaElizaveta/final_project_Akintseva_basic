let isNavListVisible = false

function clickHandle(evt, itemExperience) {
    let i, content, tab_btn;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    tab_btn = document.getElementsByClassName("tab_btn");
    for (i = 0; i < tab_btn.length; i++) {
        tab_btn[i].className = tab_btn[i].className.replace(" active", "");
    }
    document.getElementById(itemExperience).style.display = "block";
    evt.currentTarget.className += " active";
}

function changeLanguage(index){
    //selected_lng
    let langBtn = document.getElementsByClassName("lng");
    for (i = 0; i < langBtn.length; i++){
        langBtn[i].className = 'lng';
    }
    langBtn[index].className += ' selected_lng';
}

function toggleList(){
    isNavListVisible = !isNavListVisible
    let navList = document.getElementById('navMenu')
    if (isNavListVisible) {
        navList.style.display = 'flex'
    }else {
        navList.style.display = 'none'
    }
}

// function menuItemSelected(text) {
//    hideList()
//     let selectedItemBox = document.getElementById('selectedItemNav');
//     selectedItemBox.innerText = text;
// }

function hideList(){
    if (document.body.clientWidth < 768){
        isNavListVisible = false
        let navList = document.getElementById('navMenu')
        navList.style.display = 'none'
    }
}

let selectedSlide = 0

startChanging();

function showSlide(n) {
    let slides = document.getElementsByClassName("slider_item");

    if (n > slides.length - 1) {
        n = 0;
    }

    selectedSlide = n

    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = i === selectedSlide ? "grid" : "none";
    }

    let dots = document.getElementsByClassName("slider_dots_item");

    for (let i = 0; i < slides.length; i++){
        if (i === selectedSlide) {
            dots[i].className = "slider_dots_item slider_dots_item_active"
        } else {
            dots[i].className = "slider_dots_item"
        }
    }
}

function startChanging() {
    let time = 3000 // 3s

    showSlide(selectedSlide)

    setInterval(nextSlide, time)
}

function nextSlide() {
    selectedSlide++;
    showSlide(selectedSlide)
}
