// get repositories
async function getRepositories() {
  const repositories = await fetch(
    "https://github.com/MohammadDebsawi?tab=repositories"
  );
  let data = await repositories.text();
  data = data.substring(data.indexOf("<body"), data.indexOf("</body>") + 6);
  const ifr = document.createElement("iframe");
  document.body.appendChild(ifr);
  ifr.contentDocument.body.innerHTML = data;
  ifr.style.display = "none";
  return [...ifr.contentDocument.querySelectorAll("a")].filter((i) =>
    i.href.startsWith("https://github.com/MohammadDebsawi/")
  );
}

// show repositories

async function showRepositories() {
  const repo = await getRepositories();
  const container = document.querySelector('.container');
  container.innerHTML = '';
  repo.forEach(i => {
    container.innerHTML += `
        <div class="porject-card">
          <div class="img">
            <img src="../images/project1.jpg" alt="" />
          </div>
          <div class="content">
            <h1>مشروع 1</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat quibusdam quo, quasi, quia, quas quia.
            </p>
          </div>
          <div class="buttons">
            <button>
              <a href="https://github.com/MohammadDebsawi/${i}" class="btn">زيارة المستودع</a>
            </button>
            <button><a href="" class="btn">تجربة</a></button>
          </div>
        </div>
    `
  })
}

showRepositories();
