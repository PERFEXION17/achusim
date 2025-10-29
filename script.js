const vid1 = document.getElementById("vid1");
const vid2 = document.getElementById("vid2");
const vid3 = document.getElementById("vid3");
const vid4 = document.getElementById("vid4");

const vidList = [vid1, vid2, vid3, vid4];

vidList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
  });

  video.addEventListener("mouseout", function () {
    video.pause();
  });
});

//LIGHT MODE

let lightMode = localStorage.getItem("lightmode");
const toggleMode = document.getElementById("toggle-lightmode");

const enableLightMode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "active");
};

const disableLightMode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", "null");
};

if (lightMode === "active") {
  enableLightMode();
}

toggleMode.addEventListener("click", () => {
    lightMode = localStorage.getItem("lightmode");
    if (lightMode !== 'active') {
        return enableLightMode();
    } else {
        return disableLightMode();
    }
});

//SKILLS SECTION


//MENU TOGGLE

const menuBtn = document.getElementById('menu-toggle')
const nav = document.getElementById('drop-menu')

let isOpen = false

const dropMenu = () => {
  nav.classList.add('drop')
}

const upMenu = () => {
  nav.classList.remove('drop')
}

menuBtn.addEventListener('click', () => {
  if (!isOpen) {
    dropMenu();
    menuBtn.innerHTML = `<i class='ri-close-large-line'></i><i class='ri-menu-4-line'></i>`;
  } else {
    upMenu();
    menuBtn.innerHTML = `<i class='ri-menu-4-line'></i>`;
  }

  isOpen = !isOpen
})

