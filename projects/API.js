// Solicitar datos de API
async function fetchProjects() {
    try {

        const response = await fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects');
        const data = await response.json();

        const project1 = data[data.length -1];

        if (project1.uuid === "1") {
           const project1Details = document.createElement('div');
           project1Details.innerHTML =`
           <h3>Name: ${project1.name}</h3>
           <p>Description: ${project1.description}</p>
           <p>Content: ${project1.content}</p>
           <img src="${project1.image}" alt="Imagen del proyecto" style="max-width: 100px">
           <p>Conpleted_on: ${project1.completed_on}</p>`;

           document.body.appendChild(project1Details); //añadimos los elementos a nuestro body.
           
            // imprime en inspecciona de elemento, navegador
            // console.log('Nombre:', project1.name);
            // console.log('Descripción:', project1.description);
            // console.log('Contenido:', project1.content);
            // console.log('Imagen:', project1.image);
            // console.log('Completado en:', project1.completed_on);
            
        } else {
            console.error("No se encontró un proyecto con uudi 1 en la API.");
        }


        const otherProjects = data.slice(0,3);
        otherProjects.forEach((projects) => {
            const projectElement = document.createElement("div");
            projectElement.innerHTML = `
            <h2>Otros proyectos: </h2>
            <h3> Name: ${projects.name}</h3>
            <p>Description: ${projects.description}</p>
            <p>Content: ${projects.content}</p>
            <img src=${projects.image}" alt = "Imagen del proyecto" style="max-width: 100px">
            <p>Conpleted_on: ${projects.completed_on}</p>`;

            document.body.appendChild(projectElement);

           // imprime en inspecciona de elemento, navegador.
            // console.log('Nombre:', projects.name);
            // console.log('Descripción:', projects.description);
            // console.log('Contenido:', projects.content);
            // console.log('Imagen:', projects.image);
            // console.log('Completado en:', projects.completed_on);
        })

    } catch (error) {
        console.Error("Error al obtener los proyectos desde la API.", error);
    }
}

fetchProjects();