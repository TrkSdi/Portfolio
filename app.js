/* CONTACT FORM */
const form = document.querySelector(".contact-form");
const contactButton = document.querySelector(".contact-btn");
const sentMsg = document.querySelector(".submit-button .sent-msg");
const check = document.querySelector("#robot-email");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sendMail() {
  (function () {
    emailjs.init("51SAG3020ioSOCES_");
  })();

  var params = {
    name: document.querySelector("#contact-name").value,
    email: document.querySelector("#contact-email").value,
    phone: document.querySelector("#contact-phone").value,
    message: document.querySelector("#contact-text").value,
    check: document.querySelector("#robot-email").value,
  };

  var isNameValid = params.name.trim() !== "";
  var isEmailValid = validateEmail(params.email);
  var isCheckValid = params.check === "15";
  var isMessageValid = params.message.trim() !== "";

  if (isNameValid && isEmailValid && isCheckValid && isMessageValid) {
    const serviceId = "service_i9e2dou";
    const templateId = "template_5vndsge";

    emailjs
      .send(serviceId, templateId, params)
      .then(function (res) {
        contactButton.style.opacity = 0;
        sentMsg.style.opacity = 1;

        setTimeout(() => {
          contactButton.style.opacity = 1;
          sentMsg.style.opacity = 0;
          form.reset();
        }, "3000");
      })
      .catch();
  } else {
    if (!isCheckValid) {
      document.querySelector("#robot-email").value = "";
      document.querySelector("#robot-email").placeholder = "Error";
      setTimeout(() => {
        document.querySelector("#robot-email").placeholder = "10 + 5?";
      }, "2000");
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

/******************************************************************************************************************************/
/*** SLIDER ***/
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    color: "red",
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

/******************************************************************************************************************************/
/* RESPONSIVE */
const midRow = document.querySelector(".home-mid-row");
const description = document.querySelector(".description");
const about = document.querySelector("#about");
const project = document.querySelector("#projects");
const skills = document.querySelector(".skills");
const links = document.querySelector(".links");
const contact = document.querySelector("#contact");
const burgerBtn = document.querySelector(".burger-button");
const burgerList = document.querySelector(".burger-list");
const bBtnTop = document.querySelector(".burger-button .top");
const bBtnMiddle = document.querySelector(".burger-button .middle");
const bBtnBottom = document.querySelector(".burger-button .bottom");
const swiperContainer = document.querySelector(".swiper");
const card = document.querySelector(".card");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerList.classList.toggle("active");
});

const screen = {
  small: 435,
  medium: 850,
};

if (window.innerWidth < screen.small) {
  midRow.innerHTML = `
        <div class="profile-pic">
            <img src="./image/tarik.png" alt="">
            <div class="description">
              <h1>Hello, je suis Tarik&#160;&#59;&#41;</h1>
              <h2>Développeur Full Stack, basé sur Montpellier, France.</h2>
            </div>
        </div>
        <div class="request">
          <h3>Je suis à la recherche d'un stage à partir de mars&#160;&#160;2024 !</h3>
        </div>
        
    `;
  /* *********** */
  /* NEW SECTION */
  let newsection = document.createElement("section");
  contact.parentNode.insertBefore(newsection, contact);
  newsection.setAttribute("id", "skills-link");
  newsection.innerHTML = `
  <div class="skills">
                    <h2>Compétences</h2>
                    <div class="stacks">
                        <div class="top-row">
                         <!-- TOP ROW -->
                          <div class="front">
                              <h3>Front End :</h3>
                              <ul>
                                  <div class="stack js">
                                      <iconify-icon icon="teenyicons:javascript-outline" width="20"></iconify-icon>
                                      <li>Javascript</li>
                                  </div>
                                  <div class="stack">
                                      <iconify-icon icon="teenyicons:angular-outline" width="20"></iconify-icon>
                                      <li>Angular</li>
                                  </div>
                              </ul>
                          </div>
                          <div class="back">
                              <h3>Back End :</h3>
                              <ul>
                                  <div class="stack">
                                      <iconify-icon icon="teenyicons:python-outline" width="20"></iconify-icon>
                                      <li>Python</li>
                                  </div>
                                  <div class="stack">
                                      <iconify-icon icon="akar-icons:django-fill" width="20"></iconify-icon>
                                      <li>Django</li>
                                  </div>
                              </ul>
                          </div>
                        </div>
                        <!-- END TOP ROW -->
                        <!-- LOW ROW -->
                        <div class="low-row">
                          <div class="api">
                              <h3>API :</h3>
                              <ul>
                                  <div class="stack">
                                      <iconify-icon icon="akar-icons:django-fill" width="20"></iconify-icon>
                                      <li>DRF</li>
                                  </div>
                              </ul>
                          </div>
                          <div class="in-progress">
                              <h3>En cours :</h3>
                              <ul>
                                  <div class="stack">
                                      <iconify-icon icon="akar-icons:react-fill" width="25"></iconify-icon>
                                      <li>React</li>
                                  </div>
                                  <div class="stack">
                                      <iconify-icon icon="fontisto:nodejs" width="20"></iconify-icon>
                                      <li>NodeJS</li>
                                  </div>
                              </ul>
                          </div>

                        </div>
                    </div>

                </div>
                <div class="links">
                    <h2>Liens</h2>
                    <iconify-icon icon="bi:linkedin" width="50"></iconify-icon>
                    <iconify-icon icon="fa:github-square" width="50"></iconify-icon>
                </div>
            </div>
  `;
  skills.innerHTML = "";
  links.innerHTML = "";

  /* *********** */
  /* SMALL SCREEN PROJECT */
  swiperContainer.style.width = window.innerWidth - 60 + "px";
  card.style.width = window.innerWidth - 60 + "px";
} else if (window.innerWidth < screen.medium) {
  midRow.innerHTML = `
        <div class="profile-pic">
            <img src="./image/tarik.png" alt="">
            <div class="description">
              <h1>Hello, je suis Tarik&#160;&#59;&#41;</h1>
              <h2>Développeur Full Stack, basé sur Montpellier, France.</h2>
              <h3>Je suis à la recherche d'un stage à partir de mars&#160;&#160;2024 !</h3>
            </div>
        </div>
    `;

  /* *********** */
  /* NEW SECTION */
  let newsection = document.createElement("section");
  contact.parentNode.insertBefore(newsection, contact);
  newsection.setAttribute("id", "skills-link");
  newsection.innerHTML = `
  <div class="skills">
                    <h2>Compétences</h2>
                    <div class="stacks">
                        <div class="top-row">
                         <!-- TOP ROW -->
                          <div class="front">
                              <h3>Front End :</h3>
                              <ul>
                                  <div class="stack js">
                                      <iconify-icon icon="teenyicons:javascript-outline" width="25"></iconify-icon>
                                      <li>Javascript</li>
                                  </div>
                                  <div class="stack">
                                      <iconify-icon icon="teenyicons:angular-outline" width="25"></iconify-icon>
                                      <li>Angular</li>
                                  </div>
                              </ul>
                          </div>
                          <div class="back">
                              <h3>Back End :</h3>
                              <ul>
                                  <div class="stack">
                                      <iconify-icon icon="teenyicons:python-outline" width="25"></iconify-icon>
                                      <li>Python</li>
                                  </div>
                                  <div class="stack">
                                      <iconify-icon icon="akar-icons:django-fill" width="25"></iconify-icon>
                                      <li>Django</li>
                                  </div>
                              </ul>
                          </div>
                          <div class="api">
                              <h3>API :</h3>
                              <ul>
                                  <div class="stack">
                                      <iconify-icon icon="akar-icons:django-fill" width="25"></iconify-icon>
                                      <li>DRF</li>
                                  </div>
                              </ul>
                          </div>
                        </div>
                        <!-- END TOP ROW -->
                        <!-- LOW ROW -->
                        <div class="low-row">
                          <div class="in-progress">
                              <h3>En cours :</h3>
                              <ul>
                                  <div class="stack">
                                      <iconify-icon icon="akar-icons:react-fill" width="30"></iconify-icon>
                                      <li>React</li>
                                  </div>
                                  <div class="stack">
                                      <iconify-icon icon="fontisto:nodejs" width="25"></iconify-icon>
                                      <li>NodeJS</li>
                                  </div>
                              </ul>
                          </div>
                        </div>
                    </div>

                </div>
                <div class="links">
                    <h2>Liens</h2>
                    <iconify-icon icon="bi:linkedin" width="50"></iconify-icon>
                    <iconify-icon icon="fa:github-square" width="50"></iconify-icon>
                </div>
            </div>
  
  `;
  skills.innerHTML = "";
  links.innerHTML = "";
}

/******************************************************************************************************************************/

/* MENU ANIMATION */
/* BROWSER */
var isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isFirefox = typeof InstallTrigger !== "undefined";
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

/* OBSERVER */
function handleIntersection(entries, observer) {
  const menu = document.querySelector(".menu");
  const dot = document.querySelector(".menu .dot");

  if (isFirefox) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const section = entry.target.getAttribute("id");
        if (section === "home") {
          dot.style.top = 0 + "px";
        } else if (section === "projects") {
          dot.style.top = 32 + "px";
        } else if (section === "about") {
          dot.style.top = 65 + "px";
        } else if (section === "contact") {
          dot.style.top = 97 + "px";
        }
      }
    });
  } else if (isChrome || isSafari) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const section = entry.target.getAttribute("id");
        if (section === "home") {
          dot.style.top = 0 + "px";
        } else if (section === "projects") {
          dot.style.top = 29 + "px";
        } else if (section === "about") {
          dot.style.top = 60 + "px";
        } else if (section === "contact") {
          dot.style.top = 90 + "px";
        }
      }
    });
  }
}
var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
var pages = document.querySelectorAll("section");
pages.forEach((page) => observer.observe(page));

/******************************************************************************************************************************/

/* DARK LIGHT SWITCH */
/* BUTTON */
const dark = document.querySelectorAll(".dark");
const light = document.querySelectorAll(".light");
const darkResponsive = document.querySelector(
  ".burger-mode .light iconify-icon"
);
const lightResponsive = document.querySelector(
  ".burger-mode .dark iconify-icon"
);

/* ELEMENTS */
const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const allLink = document.querySelectorAll("a");
const icons = document.querySelectorAll("iconify-icon");
const projectIcons = document.querySelectorAll(".card-icon li iconify-icon");
const separators = document.querySelectorAll(".separator");
const lines = document.querySelectorAll(".single-line");
const borderLight = document.querySelector(".light-border");
const borderDark = document.querySelector(".burger-mode .dark iconify-icon");
const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".button");
const sentBtn = document.querySelectorAll(".contact-btn");

darkResponsive.addEventListener("click", () => {
  darkResponsive.style.borderBottom = "1px solid #232526";
  lightResponsive.style.borderBottom = "0px";
});

lightResponsive.addEventListener("click", () => {
  lightResponsive.style.borderBottom = "1px solid #232526";
  darkResponsive.style.borderBottom = "0px";
});

dark.forEach((element) => {
  element.addEventListener("click", () => {
    sections.forEach((section) => {
      section.style.backgroundColor = "#232526";
    });
    body.style.color = "#f5f5f5";
    borderLight.style.borderColor = "#f5f5f5";
    borderDark.style.borderColor = "#f5f5f5";
    /* sentBtn.style.color = "#f5f5f5"; */
    sentBtn.forEach((element) => {
      element.style.color = "#f5f5f5";
    });
    allLink.forEach((element) => {
      element.style.color = "#f5f5f5";
    });
    icons.forEach((icon) => {
      icon.style.color = "#f5f5f5";
    });
    separators.forEach((separator) => {
      separator.style.backgroundColor = "#f5f5f5";
    });
    lines.forEach((line) => {
      line.style.backgroundColor = "#f5f5f5";
    });
    cards.forEach((card) => {
      card.style.border = "0.1px solid #f5f5f5";
    });
    buttons.forEach((button) => {
      button.style.color = "#232526";
    });
  });
});

light.forEach((element) => {
  element.addEventListener("click", () => {
    sections.forEach((section) => {
      section.style.backgroundColor = "#f5f5f5";
    });
    body.style.color = "#232526";
    borderLight.style.borderColor = "#232526";
    borderDark.style.borderColor = "#232526";
    /* sentBtn.style.color = "#232526"; */
    sentBtn.forEach((element) => {
      element.style.color = "#232526";
    });
    allLink.forEach((element) => {
      element.style.color = "#232526";
    });
    icons.forEach((icon) => {
      icon.style.color = "#232526";
    });
    projectIcons.forEach((el) => {
      el.style.color = "#f5f5f5";
    });
    separators.forEach((separator) => {
      separator.style.backgroundColor = "#232526";
    });
    lines.forEach((line) => {
      line.style.backgroundColor = "#232526";
    });
    cards.forEach((card) => {
      card.style.border = "0.1px solid #232526";
    });
    buttons.forEach((button) => {
      button.style.color = "#232526";
    });
  });
});

/*  ANIMATION  */

const darkDot = document.querySelector(".darklight .dot");

/* if (isFirefox) {
  darkDot.style.top = 3 + "px";
} */
if (isChrome || isSafari) {
  dark.forEach((element) => {
    element.addEventListener("click", () => {
      darkDot.style.top = 33 + "px";
    });
  });

  light.forEach((element) => {
    element.addEventListener("click", () => {
      darkDot.style.top = 2 + "px";
    });
  });
} else if (isFirefox) {
  dark.forEach((element) => {
    element.addEventListener("click", () => {
      darkDot.style.top = 36 + "px";
    });
  });

  light.forEach((element) => {
    element.addEventListener("click", () => {
      darkDot.style.top = 2 + "px";
    });
  });
}

/******************************************************************************************************************************/

/* TRANSLATION */

/* BUTTONS */
const frButtons = document.querySelectorAll(".btn-fr");
const enButtons = document.querySelectorAll(".btn-en");

const frBtnMain = document.querySelector(".fr-en .btn-fr a");
const enBtnMain = document.querySelector(".fr-en .btn-en a");
const frBtnResp = document.querySelector(".burger-langage .btn-fr a");
const enBtnResp = document.querySelector(".burger-langage .btn-en a");

/* ELEMENTS */
/* MENU */
const homeTxt = document.querySelector(".home-li a");
const projectTxt = document.querySelector(".project-li a");
const aboutTxt = document.querySelector(".about-li a");
/* DARK SWITCH */
const darkTxt = document.querySelector(".darklight-list .dark a");
const lightTxt = document.querySelector(".darklight-list .light a");
/* PROJECTS */
const project1Txt = document.querySelector(".card.project-1 p");
const project1Btn = document.querySelector(".card.project-1 a");
const project2Txt = document.querySelector(".card.project-2 p");
const project2Btn = document.querySelector(".card.project-2 a");
const project3Txt = document.querySelector(".card.project-3 p");
const project3Btn = document.querySelector(".card.project-3 a");
/* ABOUT */
const aboutTitleTxt = document.querySelector(".about-main h1");
const aboutMainTxt = document.querySelector(".about-main p");
const skillsTitleTxt = document.querySelector(".skills h2");
const inProgressTxt = document.querySelector(".in-progress h3");
const linksTxt = document.querySelector(".link-container h2");
/* CONTACT */
const nameTxt = document.querySelector(".name-container label");
const phoneTxt = document.querySelector(".phone-container label");
const sendTxt = document.querySelector(".submit-button button");
const sentTxt = document.querySelector(".sent-msg p");

/* INITIAL */
const descriptionInitial = description.innerHTML;
const midRowInitial = midRow;
const homeTxtInitial = homeTxt;
const projectTxtInitial = projectTxt;
const aboutTxtInitial = aboutTxt;
const darkTxtInitial = darkTxt;
const lightTxtInitial = lightTxt;
const project1TxtInitial = project1Txt;
const project1BtnInitial = project1Btn;
const project2TxtInitial = project2Txt;
const project2BtnInitial = project2Btn;
const project3TxtInitial = project3Txt;
const project3BtnInitial = project3Btn;
const aboutTitleTxtInitial = aboutTitleTxt;
const aboutMainTxtInitial = aboutMainTxt;
const skillsTitleTxtInitial = skillsTitleTxt;
const inProgressTxtInitial = inProgressTxt;
const linksTxtInitial = linksTxt;
const nameTxtInitial = nameTxt;
const phoneTxtInitial = phoneTxt;
const sendTxtInitial = sendTxt;
const sentTxtInitial = sentTxt;

enButtons.forEach((button) => {
  button.addEventListener("click", () => {
    frBtnMain.style.textDecoration = "none";
    enBtnMain.style.textDecoration = "underline";
    frBtnResp.style.textDecoration = "none";
    enBtnResp.style.textDecoration = "underline";

    description.innerHTML = `
    <h1>Hello,<br>I'm Tarik&#160;&#160;&#160;&#59;&#41;&#160;&#160;<br>Dev full stack,<br>based at Montpellier /<br>France.<br></h1>
    <h2>I'm looking for an internship<br>starting March&#160;&#160;2024 !<br></h2>
    `;
    if (window.innerWidth <= screen.small) {
      midRow.innerHTML = `
        <div class="profile-pic">
            <img src="./image/tarik.JPG" alt="">
            <h1>Hello,<br>I'm Tarik&#160;&#160;&#160;&#59;&#41;</h1>
        </div>
        <div class="description">
            <h1>Full stack dev,<br>based at Montpellier<br>France.<br></h1>
            <h2>I'm looking for an internship starting March&#160;&#160;2024 !</h2>
        </div>
    `;
    }
    homeTxt.textContent = "Home";
    projectTxt.textContent = "Projects";
    aboutTxt.textContent = "About";
    darkTxt.textContent = "Dark";
    lightTxt.textContent = "Light";
    project1Txt.innerHTML = `ENGLISH ipsum dolor sit amet consectetur adipisicing elit. Aliquam, esse?<br>Lorem ipsum dolor sit amet consectetur adipisicing elit`;
    project1Btn.textContent = "In Progress";
    project2Txt.innerHTML = `ENGLISH ipsum dolor sit amet consectetur adipisicing elit. Aliquam, esse?<br>Lorem ipsum dolor sit amet consectetur adipisicing elit`;
    project2Btn.textContent = "In Progress";
    project3Txt.innerHTML = `ENGLISH ipsum dolor sit amet consectetur adipisicing elit. Aliquam, esse?<br>Lorem ipsum dolor sit amet consectetur adipisicing elit`;
    project3Btn.textContent = "In Progress";
    aboutTitleTxt.textContent = "About";
    aboutMainTxt.innerHTML = `
    <p>ENGLISH ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur non urna sit amet placerat.<br>
    <br>
    Cras feugiat vehicula justo, euismod lobortis sem. Maecenas nibh elit, iaculis vitae eros id, molestie aliquam mi.<br>
    Maecenas feugiat, arcu nec euismod aliquet, dolor sem tempus<br>
    <br>
    ex, vitae sodales massa felis sed dolor. In faucibus risus ac neque mollis pellentesque.<br>
    Phasellus quis sem id sem porta suscipit. Donec a justo id lectus scelerisque iaculis entesque. 
    </p>
    `;

    if (window.innerWidth > screen.small) {
      skillsTitleTxt.textContent = "Skills";
      inProgressTxt.textContent = "Learning:";
      linksTxt.textContent = "Links";
    } else if (window.innerWidth <= screen.small) {
      const skillsTitleTxt = document.querySelector("#link-skill h1");
      const inProgressTxt = document.querySelector(
        "#link-skill .in-progress h3"
      );
      const linksTxt = document.querySelector("#link-skill .link-container h1");
      const projectTitleTxt = document.querySelector("#projects h1");
      skillsTitleTxt.textContent = "Skills";
      inProgressTxt.textContent = "Learning:";
      linksTxt.textContent = "Links";
      projectTitleTxt.textContent = "Projects";
    }
    nameTxt.textContent = "Name";
    phoneTxt.textContent = "Phone";
    sendTxt.textContent = "Send";
    sentTxt.textContent = "Sent";
  });
});

frButtons.forEach((button) => {
  button.addEventListener("click", () => {
    enBtnMain.style.textDecoration = "none";
    frBtnMain.style.textDecoration = "underline";
    enBtnResp.style.textDecoration = "none";
    frBtnResp.style.textDecoration = "underline";

    description.innerHTML = `
    <h1>Hello,<br>Je suis Tarik&#160;&#160;&#160;&#59;&#41;<br>Dev full stack,<br>basé sur Montpellier /<br>France.<br></h1>
    <h2>Je suis à la recherche d'un stage<br>à partir de mars&#160;&#160;2024 !<br></h2>
    `;
    if (window.innerWidth <= screen.small) {
      midRow.innerHTML = `
        <div class="profile-pic">
            <img src="./image/tarik.JPG" alt="">
            <h1>Hello,<br>Je suis Tarik&#160;&#160;&#160;&#59;&#41;</h1>
        </div>
        <div class="description">
            <h1>Dev full stack,<br>basé sur Montpellier<br>France.<br></h1>
            <h2>Je suis à la recherche d'un stage à partir de mars&#160;&#160;2024 !</h2>
        </div>
    `;
    }
    homeTxt.textContent = "Accueil";
    projectTxt.textContent = "Projets";
    aboutTxt.textContent = "A propos";
    darkTxt.textContent = "Sombre";
    lightTxt.textContent = "Clair";
    project1Txt.innerHTML = `FRENCH ipsum dolor sit amet consectetur adipisicing elit. Aliquam, esse?<br>Lorem ipsum dolor sit amet consectetur adipisicing elit`;
    project1Btn.textContent = "En cours";
    project2Txt.innerHTML = `FRENCH ipsum dolor sit amet consectetur adipisicing elit. Aliquam, esse?<br>Lorem ipsum dolor sit amet consectetur adipisicing elit`;
    project2Btn.textContent = "En cours";
    project3Txt.innerHTML = `FRENCH ipsum dolor sit amet consectetur adipisicing elit. Aliquam, esse?<br>Lorem ipsum dolor sit amet consectetur adipisicing elit`;
    project3Btn.textContent = "En cours";
    aboutTitleTxt.textContent = "A propos";
    aboutMainTxt.innerHTML = `
    <p>FRENCH ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur non urna sit amet placerat.<br>
    <br>
    Cras feugiat vehicula justo, euismod lobortis sem. Maecenas nibh elit, iaculis vitae eros id, molestie aliquam mi.<br>
    Maecenas feugiat, arcu nec euismod aliquet, dolor sem tempus<br>
    <br>
    ex, vitae sodales massa felis sed dolor. In faucibus risus ac neque mollis pellentesque.<br>
    Phasellus quis sem id sem porta suscipit. Donec a justo id lectus scelerisque iaculis entesque. 
    </p>
    `;

    if (window.innerWidth > screen.small) {
      skillsTitleTxt.textContent = "Compétences";
      inProgressTxt.textContent = "En cours:";
      linksTxt.textContent = "Liens";
    } else if (window.innerWidth <= screen.small) {
      const skillsTitleTxt = document.querySelector("#link-skill h1");
      const inProgressTxt = document.querySelector(
        "#link-skill .in-progress h3"
      );
      const linksTxt = document.querySelector("#link-skill .link-container h1");
      const projectTitleTxt = document.querySelector("#projects h1");
      skillsTitleTxt.textContent = "Compétences";
      inProgressTxt.textContent = "En cours:";
      linksTxt.textContent = "Liens";
      projectTitleTxt.textContent = "Projets";
    }
    nameTxt.textContent = "Nom";
    phoneTxt.textContent = "Téléphone";
    sendTxt.textContent = "Envoyer";
    sentTxt.textContent = "Envoyé";
  });
});

/******************************************************************************************************************************/

/* HOVER ON TOUCH */

cards.forEach((card) => {
  card.addEventListener("touchstart", function () {}, true);
});

/* Project Animation */

/* function detectProject() {
  const containerCard = document.querySelector(".card-list");
  const cards = document.querySelectorAll(".card");

  var scrollLeft = containerCard.scrollLeft;
  var cardWidth = cards[0].offsetWidth;

  var visibleCardIndex = Math.floor(scrollLeft / cardWidth);

  console.log("Carte visible:", visibleCardIndex + 1);
}

if (window.innerWidth <= screen.small) {
  const temp = document.querySelector(".card-list");
  temp.addEventListener("scroll", detectProject);
} */
