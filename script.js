function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open"); 

}

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillContainers = document.querySelectorAll('.details-container');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            console.log('Clicked on:', category);
            filterSkills(category);
        });
    });

    function filterSkills(category) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
    
        // 'this' inside the event listener doesn't refer to the button, so use event.target
        event.target.classList.add('active');
    
        skillContainers.forEach(container => {
            const containerCategory = container.getAttribute('data-category');

            if (category === 'all' || category === 'frontend' || category === 'backend') {
                document.getElementById('projects').classList.remove('hide-projects');
            } else {
                document.getElementById('projects').classList.add('hide-projects');
            }
    
            if (category === 'all' || category === containerCategory) {
                container.style.display = 'flex';
            } else {
                container.style.display = 'none';
            }
            
        });
    }
});