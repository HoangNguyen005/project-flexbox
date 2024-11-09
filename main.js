document.querySelector('.nav-toggle').onclick = ()=> {
    document.querySelector('.navbar__list-link').classList.toggle('show-link')
}

document.querySelectorAll('.navbar-link').forEach(link => {
   link.onclick = function() {
    document.querySelector('.navbar__list-link').classList.toggle('show-link')
    
   }
})