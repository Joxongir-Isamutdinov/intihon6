document.body.style.margin = "0";
document.body.style.backgroundColor = "#014E56";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.color = "white";

let nav = document.createElement("nav");
nav.style.width = "1200px";
nav.style.height = "80px";
nav.style.margin = "0 auto";
nav.style.display = "flex";
nav.style.alignItems = "center";
nav.style.justifyContent = "space-between";
document.body.append(nav);

let logo = document.createElement("h2");
logo.innerText = "myteam";
logo.style.fontSize = "28px";
logo.style.marginLeft = "165px";
nav.appendChild(logo);

let right = document.createElement("div");
right.style.display = "flex";
right.style.alignItems = "center";
right.style.gap = "30px";
nav.appendChild(right);

let home = document.createElement("p");
home.innerText = "home";
home.style.cursor = "pointer";

let about = document.createElement("p");
about.innerText = "about";
about.style.cursor = "pointer";

right.append(home, about);

let btn = document.createElement("button");
btn.innerText = "contact us";
btn.style.padding = "8px 25px";
btn.style.border = "2px solid white";
btn.style.background = "transparent";
btn.style.color = "white";
btn.style.borderRadius = "30px";
btn.style.cursor = "pointer";
btn.style.marginRight = "165px";
right.appendChild(btn);

let hero = document.createElement("div");
hero.style.width = "1200px";
hero.style.margin = "80px auto";
hero.style.display = "flex";
hero.style.alignItems = "flex-start";
hero.style.gap = "60px";
document.body.append(hero);

let left = document.createElement("h1");
left.innerText = "About";
left.style.fontSize = "52px";
left.style.marginLeft = "165px";
hero.appendChild(left);

let rightText = document.createElement("p");
rightText.style.width = "730px";
rightText.style.height = "112px";
rightText.style.lineHeight = "1.7";
rightText.style.fontSize = "18px";
rightText.style.fontWeight = "600";
rightText.style.marginRight = "165px";

rightText.innerText =
  "We help companies build dynamic teams made up of top global talent. " +
  "Using our network of passionate professionals we drive innovation and deliver incredible outcomes. " +
  "Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.";

hero.appendChild(rightText);


let section = document.createElement("div");
section.style.width = "1200px";
section.style.margin = "80px auto";
section.style.textAlign = "center";
document.body.append(section);

let titleDirectors = document.createElement("h1");
titleDirectors.innerText = "Meet the directors";
titleDirectors.style.fontSize = "38px";
titleDirectors.style.marginBottom = "50px";
section.appendChild(titleDirectors);

let cards = document.createElement("div");
cards.style.display = "flex";
cards.style.justifyContent = "center";
cards.style.gap = "30px";
section.appendChild(cards);

let directors = [
  {
    name: "Nikita Marks",
    job: "Founder & CEO",
    img: "./img/Oval1.png"
  },
  {
    name: "Cristian Duncan",
    job: "Co-founder & COO",
    img: "./img/Oval2.png"
  },
  {
    name: "Cruz Hamer",
    job: "Co-founder & CTO",
    img: "./img/Oval3.png"
  }
];

directors.forEach(d => {
  let card = document.createElement("div");
  card.style.width = "300px";
  card.style.height = "250px";
  card.style.background = "#012F34";
  card.style.borderRadius = "10px";
  card.style.paddingTop = "30px";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";
  card.style.position = "relative";

  let photo = document.createElement("img");
  photo.src = d.img;
  photo.style.width = "100px";
  photo.style.height = "100px";
  photo.style.borderRadius = "50%";
  photo.style.objectFit = "cover";
  card.appendChild(photo);

  let name = document.createElement("h3");
  name.innerText = d.name;
  name.style.margin = "20px 0 5px 0";
  name.style.fontSize = "22px";
  name.style.color = "white";
  card.appendChild(name);

  let job = document.createElement("p");
  job.innerText = d.job;
  job.style.color = "#79C8C7";
  job.style.margin = "0 0 25px 0";
  card.appendChild(job);

  let plus = document.createElement("div");
  plus.innerText = "+";
  plus.style.width = "50px";
  plus.style.height = "50px";
  plus.style.background = "#F67E7E";
  plus.style.borderRadius = "50%";
  plus.style.display = "flex";
  plus.style.alignItems = "center";
  plus.style.justifyContent = "center";
  plus.style.fontSize = "26px";
  plus.style.fontWeight = "bold";
  plus.style.color = "#012F34";
  plus.style.position = "absolute";
  plus.style.bottom = "-25px";
  card.appendChild(plus);

  cards.appendChild(card);
});

let wrapper = document.createElement("div");
wrapper.style.width = "100%";
wrapper.style.textAlign = "center";
wrapper.style.paddingTop = "60px";
document.body.append(wrapper);

let clientsTitle = document.createElement("h1");
clientsTitle.innerText = "Some of our clients";
clientsTitle.style.fontSize = "36px";
clientsTitle.style.marginBottom = "50px";
wrapper.appendChild(clientsTitle);

let row = document.createElement("div");
row.style.display = "flex";
row.style.justifyContent = "center";
row.style.gap = "60px";
row.style.flexWrap = "wrap";
row.style.marginBottom = "80px";
wrapper.appendChild(row);

let logos = [
  "./img/1.png",
  "./img/2.png",
  "./img/3.png",
  "./img/4.png",
  "./img/5.png"
];

logos.forEach(src => {
  let logo = document.createElement("img");
  logo.src = src;
  logo.style.width = "150px";
  logo.style.objectFit = "contain";
  
  row.appendChild(logo);
});


let pink = document.createElement("div");
pink.style.backgroundColor = "#F67E7E";
pink.style.textAlign = "center";
pink.style.padding = "60px 20px";
pink.style.display = "flex";
pink.style.justifyContent = "center";
pink.style.alignItems = "center";
pink.style.gap = "260px";
document.body.appendChild(pink);

let pText = document.createElement("h2");
pText.innerText = "Ready to get started?";
pText.style.color = "#012F34";
pText.style.fontSize = "32px";
pink.appendChild(pText);

let pinkBtn = document.createElement("button");
pinkBtn.innerText = "contact us";
pinkBtn.style.padding = "10px 25px";
pinkBtn.style.borderRadius = "25px";
pinkBtn.style.border = "2px solid #012F34";
pinkBtn.style.background = "transparent";
pinkBtn.style.color = "#012F34";
pinkBtn.style.cursor = "pointer";
pink.appendChild(pinkBtn);

let footer = document.createElement("div");

footer.style.padding = "40px 20px";
footer.style.backgroundColor = "#002529";
footer.style.display = "flex";
footer.style.justifyContent = "space-between";
footer.style.alignItems = "center";
footer.style.paddingRight = "165px";
footer.style.paddingLeft = "165px";
document.body.append(footer);

let fLeft = document.createElement("h2");
fLeft.innerText = "myteam";
fLeft.style.fontSize = "28px";
fLeft.style.marginLeft = "165px";
footer.appendChild(fLeft);

let icons = document.createElement("div");
icons.style.display = "flex";
icons.style.gap = "20px";
footer.appendChild(icons);

let iconsList = [
  "./img/facebook-logo.png",
  "./img/pinterest-logo.png",
  "./img/twitter-logo.png"
];

iconsList.forEach(src => {
  let icon = document.createElement("img");
  icon.src = src;
  icon.style.width = "25px";
  icon.style.height = "25px";
  icon.style.objectFit = "contain";
  icon.style.marginRight = "12px";

  icons.appendChild(icon);
});
