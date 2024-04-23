window.addEventListener("scroll", function(){
    let nav = document.querySelector('#navbar')
    nav.classList.toggle('rolagem',window.scrollY > 0)
});
window.addEventListener("scroll", function(){
    let nav = document.querySelector('#home')
    nav.classList.toggle('rollheader',window.scrollY > 0)
});


function showSlidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
























