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
    
            if (category === 'all' || category === containerCategory) {
                container.style.display = 'flex';
            } else {
                container.style.display = 'none';
            }
        });
    }
});

// XMLDocument

document.addEventListener('DOMContentLoaded', function () {
    // Fetch the XML file
    fetch('projectData.xml')
        .then(response => response.text())
        .then(xmlString => {
            // Parse the XML
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xmlString, 'application/xml');

            // Call the function to process the XML
            projectDetails(xmlDoc);
        })
        .catch(error => console.error('Error fetching XML:', error));
});

function projectDetails(xml) {
    let i;
    let table =
        `<table>
            <tr>
                <th>Title</th><th>Description</th>
                
            </tr>`;
    let projects = xml.getElementsByTagName("project");

    // Loop through each project
    for (i = 0; i < projects.length; i++) {
        let title = projects[i].getElementsByTagName("title")[0].textContent;
        let description = projects[i].getElementsByTagName("description")[0].textContent;
        

        // Append a new row to the table for each project
        table += `<tr>
                    <td>${title}</td> 
                    <td>${description}</td>
                    
                  </tr>`;
    }

    table += `</table>`;

    // Print the xml data in table form
    document.getElementById("cont").innerHTML = table;
}

