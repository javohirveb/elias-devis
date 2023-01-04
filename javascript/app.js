const showBtn = document.getElementById('nav-bars')
const closeBtn = document.getElementById('close-btn')
const navList = document.getElementById('nav-list')

showBtn.addEventListener('click', () => {
    navList.classList.remove('hidden')
})


closeBtn.addEventListener('click', () => {
    navList.classList.add('hidden')
})