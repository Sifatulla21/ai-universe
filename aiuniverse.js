// Load API
const loadAi = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => showData(data));
}
// Show All Data on UI
const showData = showAiData => {
    // console.log(showAiData);
    showAiData.data.tools.map(tool =>{
        // console.log(parseint(tool.id));
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
// Function For Modal
const showModal = (id) => {
    if(id<=9){
        const url = `https://openapi.programming-hero.com/api/ai/tool/0${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => loadModalData(data));
    }
    else{
        const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => loadModalData(data));
    }


}

// Show All data on modal
const loadModalData = modalData =>{
    console.log(modalData.data.features[2]);
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = " ";
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML= `
        <div class="d-flex row row-cols-1 row-cols-md-3 g-4">
            <div class="col modalDescription w-50">
                <h1>${modalData.data.description}</h1>
                <div class="d-flex justify-content-around">
                    <div class="subscription">
                        <h5>${modalData.data.pricing[0].price}</h5>
                        <h5>${modalData.data.pricing[0].plan}</h5>
                    </div>
                    <div class="subscription">
                        <h5>${modalData.data.pricing[1].price}</h5>
                        <h5>${modalData.data.pricing[1].plan}</h5>
                    </div>
                    <div class="subscription">
                        <h5>${modalData.data.pricing[2].price}</h5>
                        <h5>${modalData.data.pricing[2].plan}</h5>
                    </div>
                </div>
                <div class="d-flex justify-content-around mt-5">
                    <div>
                        <h1>Features</h1>
                        <ul>
                        <li>${modalData.data.features[2].feature_name}</li>
                        <li>${modalData.data.features[2].feature_name}</li>
                        <li>${modalData.data.features[3].feature_name}</li>
                        </ul>
                    </div>

                    <div>
                        <h1>Integrations</h1>
                        <ul>
                        <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col w-50">
            <img src="${modalData.data.image_link[0]}" class="card-img-top h-100 w-100" alt="...">
            </div>
        </div>
        `;
        modalBody.appendChild(modalDiv);
}
loadAi();