const loadAi = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => showData(data));
}
const showData = showAiData => {
    // console.log(tool.id);
    showAiData.data.tools.map(tool =>{
    const getCard = document.getElementById("aiCard");
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
        <div class="card h-100">
        <img src="${tool.image}" class="card-img-top h-100" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <p class="card-text">
          <ul>
            <li>
            ${tool.features[0]}
            </li>
            <li>
            ${tool.features[1]}
            </li>
            <li>
            ${tool.features[2]}
            </li>
          </ul>
          </p>
        </div>
        <div class="card-footer">
        <div class="d-flex justify-content-between">
        <div>
            <h3>${tool.name}</h3>
            <p><i class="fa-solid fa-calendar-days"></i> ${tool.published_in
            }</p>
        </div>
        <div>
            <button class="arrowButton"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="showModal(${tool.id})"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
        </div>
      </div>
        `;
        getCard.appendChild(div);

    });   
}

loadAi();