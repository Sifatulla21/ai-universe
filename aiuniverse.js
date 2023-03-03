// Load API
const loadAi = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => showData(data));
}
// Show All Data on UI
const showData = showAiData => {
    // console.log(showAiData);
    showAiData.data.tools.forEach(tool =>{
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
            <button class="arrowButton"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="showModal('${tool.id}')"><i class="fa-solid fa-arrow-right"></i></button>
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
        const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => loadModalData(data.data));
}

// Show All data on modal
const loadModalData = modalData =>{
    // Modal Heading
    const modalHead = document.getElementById("modalHead");
    modalHead.innerText = modalData.tool_name;

    // Modal Subscription Part Start
    if(modalData.pricing === null){
        const modalSubscription = document.getElementById("subscription");
        modalSubscription.innerHTML = " ";
        const modalSubscriptionDiv = document.createElement('div');
        modalSubscriptionDiv.innerHTML=`
        <div class="subscription">
        <h5>Free Of Cost</h5>
        <h5>All Plans</h5>
        </div>
    `;
    modalSubscription.appendChild(modalSubscriptionDiv);
    }
    else{
        const modalSubscription = document.getElementById("subscription");
        modalSubscription.innerHTML = " ";
        modalData.pricing.forEach(values => {
            const modalSubscriptionDiv = document.createElement('div');
            modalSubscriptionDiv.innerHTML=`
            <div class="subscription">
            <h5>${values.price}</h5>
            <h5>${values.plan}</h5>
            </div>
            `;
            modalSubscription.appendChild(modalSubscriptionDiv);
    });
    }
    // Modal Subscription Part End

    // Modal Features Part Start
        const modalFeatures = document.getElementById("modalFeaturesLi");
        modalFeatures.innerHTML = " ";
        Object.entries(modalData.features).forEach(feature =>{
            console.log(feature[1]);
            const modalFeaturesLi = document.createElement('li');
            modalFeaturesLi.innerHTML=`
            <li>${feature[1].feature_name}</li>
            `;
            modalFeatures.appendChild(modalFeaturesLi);
    });
    }
    // Modal Features Part End
loadAi();