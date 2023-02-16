// const wrapper = document.createElement("div");
// wrapper.id="wrapper";
// console.log(wrapper);
// wrapper.append(herosection);
const herosection = document.querySelector(".hero");
herosection.innerHTML = `<h1>Eazy Camper</h1>`;
document.querySelector("h1").style =
  "font-family: 'Merriweather', serif; font-size:16px; color: rgb(189, 189, 189); ";
herosection.innerHTML += `<img class="heroImg" src="${hero.image}" alt="Hero Image" />`;
const heroHeadline = document.createElement("div");
heroHeadline.classList.add("heroHeadline");
heroHeadline.innerHTML += `<h2>${hero.headline}</h2>`;
heroHeadline.innerHTML += `<p>${hero.copy}</p>`;
const icon = document.createElement("div");
icon.classList.add("icon");
icon.innerHTML += `<img class="iconImg" src="${hero.icon}" alt="Hero Icon" />`;
icon.innerHTML += `<p>Explore</p>`;

herosection.appendChild(heroHeadline);
heroHeadline.appendChild(icon);

//services section
const servicesSection = document.querySelector(".services");

services.forEach((service) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const image = document.createElement("img");
  image.src = service.illustration;
  const headline = document.createElement("h2");
  headline.textContent = service.headline;
  const text = document.createElement("p");
  text.textContent = service.text;
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = service.linktext;

  card.appendChild(image);
  card.appendChild(headline);
  card.appendChild(text);
  card.appendChild(link);

  servicesSection.appendChild(card);
});

//facilities section

const facilitiesSection = document.querySelector(".facilities");

facilitiesSection.innerHTML = `<h3>${facilities.headline}</h3>`;
const facilitiesDiv = document.createElement("div");
facilitiesDiv.classList.add("facilitiesDiv");

facilities.options.forEach((option) => {
  let li = document.createElement("li");
  const iconImg = document.createElement("img");
  iconImg.src = option.icon;
  iconImg.alt = "";
  const headlineEl = document.createElement("h2");
  headlineEl.textContent = option.headline;

  const textEl = document.createElement("p");
  textEl.textContent = option.text;
  const textel = document.createElement("p");
  textel.innerText = "show me more";

  li.appendChild(iconImg);
  li.appendChild(headlineEl);
  li.appendChild(textEl);
  li.appendChild(textel);
  facilitiesSection.appendChild(facilitiesDiv);
  facilitiesDiv.appendChild(li);
});

//ssites section
const sitessection = document.querySelector(".sites");
const sitesFirstDiv = document.createElement("div");
sitesFirstDiv.classList.add("sitesFirstDiv");
sitessection.appendChild(sitesFirstDiv);
const headline = document.createElement("h2");
headline.textContent = sites.headline;
sitesFirstDiv.appendChild(headline);
const text = document.createElement("p");
text.textContent = sites.text;
sitesFirstDiv.appendChild(text);
const btniconDiv = document.createElement("div");
btniconDiv.classList.add("button-icon");
sitesFirstDiv.appendChild(btniconDiv);
const btnicon = document.createElement("img");
btnicon.src = sites.btnicon;
btniconDiv.appendChild(btnicon);
btniconDiv.innerHTML += `<p>Start</p>`;
const sitesSecondDiv = document.createElement("div");
sitesSecondDiv.classList.add("sitesSecondDiv");
sitessection.appendChild(sitesSecondDiv);
sites.places.forEach((place) => {
  const placeCard = document.createElement("div");
  placeCard.classList.add = "placecard";
  const placeImage = document.createElement("img");
  placeImage.src = place.img;
  placeImage.alt = "";
  const placeName = document.createElement("h3");
  placeName.textContent = place.name;
  const placeCity = document.createElement("p");
  placeCity.textContent = place.city;
  const placelink = document.createElement("a");
  placelink.innerHTML += "<a>View the Site</a>";

  placeCard.appendChild(placeImage);
  placeCard.appendChild(placeName);
  placeCard.appendChild(placeCity);
  placeCard.appendChild(placelink);
  sitesSecondDiv.appendChild(placeCard);
});

// advantages section
const advantagesSection = document.querySelector(".advantages");
const title = document.createElement("h2");
title.innerHTML = "<h2>Our Advantages</h2>";
advantagesSection.append(title);

const advantagesDiv = document.createElement("div");
advantagesDiv.classList.add("advantagesDiv");
advantagesSection.append(advantagesDiv);

advantages.forEach((advantag) => {
  const advantagDiv = document.createElement("article");
  const icon = document.createElement("img");
  icon.src = advantag.icon;
  const headline = document.createElement("h3");
  headline.textContent = advantag.headline;
  const text = document.createElement("p");
  text.textContent = advantag.text;

  advantagDiv.appendChild(icon);
  advantagDiv.appendChild(headline);
  advantagDiv.appendChild(text);
  advantagesDiv.appendChild(advantagDiv);
});

//fotter section
const body = document.querySelector("body");
const footer = document.createElement("section");
footer.classList.add("footersection");
body.append(footer);
console.log(footer);
const map = document.createElement("article");
map.classList.add("map");
footer.appendChild(map);

const footerFirstDiv = document.createElement("div");
footerFirstDiv.classList.add("footerFirstDiv");
map.appendChild(footerFirstDiv);
footerFirstDiv.innerHTML = `<h1>${footere.headline}</h1>`;
footerFirstDiv.innerHTML += `<p>${footere.text}</p>`;

const footerSecondDiv = document.createElement("div");
footerSecondDiv.classList.add("footerSecondDiv");
map.appendChild(footerSecondDiv);

footere.siteMap.forEach((e) => {
  const footerSecondDiv_div = document.createElement("div");
  footerSecondDiv_div.classList.add("footerSecondDiv_div");

  const title = document.createElement("h2");
  title.textContent = e.title;
  const p1 = document.createElement("p");
  p1.textContent = e.p1;
  const p2 = document.createElement("p");
  p2.textContent = e.p2;
  const p3 = document.createElement("p");
  p3.textContent = e.p3;
  const p4 = document.createElement("p");
  p4.textContent = e.p4;
  footerSecondDiv_div.appendChild(title);
  footerSecondDiv_div.appendChild(p1);
  footerSecondDiv_div.appendChild(p2);
  footerSecondDiv_div.appendChild(p3);
  footerSecondDiv_div.appendChild(p4);
  footerSecondDiv.appendChild(footerSecondDiv_div);
});

const navigatorsection = document.createElement("article");
navigatorsection.classList.add("navigatorsection");
const hr = document.createElement("hr");
hr.classList.add("hr");
navigatorsection.appendChild(hr);
footer.appendChild(navigatorsection);
console.log(hr);



const navigation = document.createElement("div");
navigation.classList.add("navigation");
navigatorsection.appendChild(navigation);

const pDiv = document.createElement("div");
pDiv.classList.add("pDiv");
const ptag = document.createElement("p");
ptag.textContent = navigator.title;
navigation.appendChild(ptag);
navigation.appendChild(pDiv);

navigator.links.forEach((link) => {
  const linkDiv = document.createElement("div");
  linkDiv.classList.add("linkDiv");
  const atag = document.createElement("a");
  atag.textContent = link;
  linkDiv.appendChild(atag);
  navigation.appendChild(linkDiv);
});
