const path_img = '../images/';

const porjects_link = 'https://mohammaddebsawi.github.io/';

const repositories_link = 'https://github.com/MohammadDebsawi/'

async function showRepositories() {
  const json_file = await fetch('../js/projects.json');
  const projects = await json_file.json();
  const container = document.querySelector('.container');
  container.innerHTML = '';
  projects.forEach(project => {
    container.innerHTML += `
        <div class="porject-card">
          <div class="img">
            <img src="${path_img+project.img}" alt="" />
          </div>
          <div class="content">
            <h1>${project.name}</h1>
            <p>
            ${project.description}
            </p>
          </div>
          <div class="buttons">
            <button>
              <a target="_blank" href="${repositories_link + project.name}" class="btn">زيارة المستودع</a>
            </button>
            <button><a target="_blank" href="${porjects_link + project.name + project.main}" class="btn">تجربة</a></button>
          </div>
        </div>
    `
  })
}

showRepositories();
