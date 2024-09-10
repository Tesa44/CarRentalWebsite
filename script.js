cars_data = [
  {
    make: "Porsche",
    model: "911 GT3",
    hp: 510,
    nm: 470,
    engine: "4.0L flat-six",
    gearbox: "automatic",
    fuel: "benzine",
    rpm_redline: 9000,
    accTo100: 3.4,
    topSpeed: 319,
    drive: "rear wheels",
    priceEur: 1000,
    imgFolderName: "porsche-911",
  },
  {
    make: "Lamborghini",
    model: "Huracan",
    hp: 640,
    nm: 600,
    engine: "5.2L N/A V10",
    gearbox: "automatic",
    fuel: "benzine",
    rpm_redline: 8500,
    accTo100: 2.9,
    topSpeed: 325,
    drive: "4x4 (permanent)",
    priceEur: 900,
    imgFolderName: "lamborghini-perf",
  },
  {
    make: "McLaren",
    model: "Artura",
    hp: 680,
    nm: 720,
    engine: "3.0L TT V6",
    gearbox: "automatic",
    fuel: "benzine",
    rpm_redline: 8500,
    accTo100: 3.0,
    topSpeed: 328,
    drive: "rear wheels",
    priceEur: 1100,
    imgFolderName: "mclaren-artura",
  },
];

const containerFeatures = document.querySelector(".container-features");

const displayFeatures = function (features) {
  containerFeatures.innerHTML = "";

  features.forEach((feature) => {
    const html = `
          <div class="car-box">
            <img
              src="img/cars/${feature.imgFolderName}/main.webp"
              class="car-img"
              alt="${feature.make + " " + feature.model}"
            />
            <div class="car-content">
              <h4 class="heading-quaternary">${
                feature.make + " " + feature.model
              }</h4>
              <ul class="features-list margin--bottom-sm">
                <li class="features-item">
                  <i class="feature-icon ph ph-lightning"></i>
                  <p>${feature.hp} HP / ${feature.nm} NM</p>
                </li>
                <li class="features-item">
                  <i class="feature-icon ph ph-engine"></i>
                  <p>${feature.engine}</p>
                </li>
                <li class="features-item">
                  <i class="feature-icon ph ph-gear"></i>
                  <p>${feature.gearbox}</p>
                </li>

                <li class="features-item">
                  <i class="feature-icon ph ph-speedometer"></i>
                  <p>${feature.accTo100}s to 100km/h</p>
                </li>
              </ul>
              <!-- <div class="grid grid--2-cols"> -->
              <p class="car-price">starting at <span> ${
                feature.priceEur
              }</span> €</p>
              <button class="btn btn--features">Details</button>
              <!-- </div> -->
            </div>
          </div>`;

    containerFeatures.insertAdjacentHTML("beforeend", html);
  });
};

displayFeatures(cars_data);
