function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open"); 

}

// document.addEventListener('DOMContentLoaded', function () {
//     const filterButtons = document.querySelectorAll('.filter-btn');
//     const projectContainers = document.querySelectorAll('.article-container');

//     filterButtons.forEach(btn => {
//         btn.addEventListener('click', function () {
//             const category = this.getAttribute('data-category');
//             filterProjects(category);
//         });
//     });

//     function filterProjects(category) {
//         projectContainers.forEach(container => {
//             const containerCategory = container.getAttribute('data-category');
//             if (category === 'all' || category === containerCategory) {
//                 container.style.display = 'block';
//             } else {
//                 container.style.display = 'none';
//             }
//         });
//     }
// });