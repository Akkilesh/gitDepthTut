window.onscroll = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add("active");
    }
    else{
        document.querySelector('.header .header2').classList.remove("active");
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add("active");
    }
    else{
        document.querySelector('.header .header2').classList.remove("active");
    }
}

searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}