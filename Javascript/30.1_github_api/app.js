const search = document.getElementById("search");
const searchBtn = document.getElementById("btn");
const cards = document.getElementById("cards-container");
const error = document.getElementById("error");
const currentUserNames = [];

search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let username = e.target.value;
    e.target.value = "";
    searchHandler(username);
  }
});
searchBtn.addEventListener("click", function (e) {
  searchHandler(search.value);
});

async function searchHandler(username) {
  if (isExsist(username)) {
    return;
  }
  try {
    const url = "https://api.github.com/users/" + username;
    const fetchData = await fetch(url);
    if (!fetchData.ok) {
      throw new Error("User is not existed.");
    }
    const data = await fetchData.json();
    drawCard(data);
  } catch (err) {
    if (err.message === "Failed to fetch") {
      error.innerText = "URL is not working. try again later.";
    } else {
      error.innerText = err;
    }
  }
}

function isExsist(username) {
  if (currentUserNames.includes(username.toLowerCase())) {
    error.innerText = `User is already shown. Pick another one`;
    return true;
  } else {
    currentUserNames.push(username.toLowerCase());
    error.innerText = "";
    return false;
  }
}

function drawCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");
  const avatarCont = document.createElement("div");
  avatarCont.classList.add("avatar-container");
  const img = document.createElement("img");
  img.src = data.avatar_url;
  img.classList.add("avatar");
  avatarCont.append(img);
  const cardTextCont = document.createElement("div");
  cardTextCont.classList.add("card-text-container");
  const name = document.createElement("p");
  name.innerText = `Name: ${data.name}`;
  const followers = document.createElement("p");
  followers.innerText = `Followers: ${data.followers}`;
  const repos = document.createElement("p");
  repos.innerText = `Repos: ${data.public_repos}`;
  name.classList.add("card-text");
  followers.classList.add("card-text");
  repos.classList.add("card-text");
  cardTextCont.append(name, followers, repos);
  card.append(avatarCont, cardTextCont);
  cards.append(card);
  const linkCard = document.createElement("a");
  linkCard.href = data.html_url;
  linkCard.target = "_blank";
  linkCard.style.textDecoration = "none";
  linkCard.append(card);
  cards.append(linkCard);
}
