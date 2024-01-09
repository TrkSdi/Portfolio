/* CONTACT FORM */
const form = document.querySelector(".contact-form");
const contactButton = document.querySelector(".contact-btn");
const sentMsg = document.querySelector(".submit-button .sent-msg");
const check = document.querySelector("#robot-email");
const sentIcons = document.querySelectorAll(".input-form .sent");
const invalidName = document.querySelector(".name .invalid p");
const invalidEmail = document.querySelector(".email .invalid p");
const invalidMessage = document.querySelector(".text .invalid p");
const invalidCheck = document.querySelector(".robot .invalid p");

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
        sentIcons.forEach((icon) => {
          icon.style.opacity = 1;
        });

        setTimeout(() => {
          contactButton.style.opacity = 1;
          sentMsg.style.opacity = 0;
          sentIcons.forEach((icon) => {
            icon.style.opacity = 0;
          });
          form.reset();
        }, "3000");
      })
      .catch();
  } else {
    if (!isCheckValid) {
      invalidCheck.style.opacity = 1;
      setTimeout(() => {
        document.querySelector("#robot-email").placeholder = "10 + 5?";
        invalidCheck.style.opacity = 0;
      }, "2000");
    } else if (!isEmailValid) {
      invalidEmail.style.opacity = 1;
      setTimeout(() => {
        document.querySelector("#contact-email").value = "";
        invalidEmail.style.opacity = 0;
      }, "2000");
    } else if (!isNameValid) {
      invalidName.style.opacity = 1;
      setTimeout(() => {
        document.querySelector("#contact-name").value = "";
        invalidName.style.opacity = 0;
      }, "2000");
    } else if (!isMessageValid) {
      invalidMessage.style.opacity = 1;
      setTimeout(() => {
        document.querySelector("#contact-text").value = "";
        invalidMessage.style.opacity = 0;
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
const cards = document.querySelectorAll(".card");

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
              <h2>Développeur Full Stack,<br><span>JS & Python</span>,<br>basé sur Montpellier, France.</h2>
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
  cards.forEach((card) => {
    card.style.width = window.innerWidth - 150 + "px";
  });
} else if (window.innerWidth < screen.medium) {
  midRow.innerHTML = `
        <div class="profile-pic">
            <img src="./image/tarik.png" alt="">
            <div class="description">
              <h1>Hello, je suis Tarik&#160;&#59;&#41;</h1>
              <h2>Développeur Full Stack,<br><span>Javascript & Python</span>,<br> basé sur Montpellier, France.</h2>
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
const hamburger = document.querySelector(".burger-container .burger-button");
const sliderPrev = document.querySelector(".swiper-button-prev");
const sliderNext = document.querySelector(".swiper-button-next");
const bulletActive = document.querySelector(".swiper-pagination-bullet-active");
const bulletPag = document.querySelector(".swiper-pagination-bullet");

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
    burgerList.style.color = "#f5f5f5";
    burgerList.style.backgroundColor = "#232526";
    hamburger.style.fill = "#f5f5f5";
    sliderPrev.style.cssText = "color: #f5f5f5 !important;";
    sliderNext.style.cssText = "color: #f5f5f5 !important;";
    bulletActive.style.cssText = "background-color : #f5f5f5 !important;";
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
    burgerList.style.color = "#232526";
    burgerList.style.backgroundColor = "#f5f5f5";
    hamburger.style.fill = "#232526";
    sliderPrev.style.cssText = "color: #232526 !important;";
    sliderNext.style.cssText = "color: #232526 !important;";
    bulletActive.style.cssText = "background-color : #232526 !important;";
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

const frLink = document.querySelectorAll(".btn-fr a");
const enLink = document.querySelectorAll(".btn-en a");

/* ELEMENTS */
/* MENU */
const homeTxt = document.querySelectorAll(".home-li a");
const projectTxt = document.querySelectorAll(".project-li a");
const aboutTxt = document.querySelectorAll(".about-li a");
const skillBrg = document.querySelector(".skills-li a");

/* DARK SWITCH */
const darkTxt = document.querySelector(".darklight-list .dark a");
const lightTxt = document.querySelector(".darklight-list .light a");

/* DESCRIPTION */
const descriptionContent = document.querySelector(".description");

/* PROJECTS */
const descriptionProject1 = document.querySelector(".project-1 p");
const linkProject1 = document.querySelector(".project-1 a");
const descriptionProject2 = document.querySelector(".project-2 p");
const linkProject2 = document.querySelector(".project-2 a");
const descriptionProject3 = document.querySelector(".project-3 p");
const linkProject3 = document.querySelector(".project-3 a");

/* ABOUT SKILLS */
const aboutMain = document.querySelector(".about-main");
const skillsTitle = document.querySelector(".skills h2");
const linksTitle = document.querySelector(".links h2");

/* CONTACT */
const nameTxt = document.querySelector(".name label");
const phoneTxt = document.querySelector(".phone label");
const requiredTxt = document.querySelector(".required");
const sendTxt = document.querySelector(".contact-btn");
const sentTxt = document.querySelector(".sent-msg p");
const invalidTxt = document.querySelectorAll(".invalid p");

enButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (window.innerWidth < screen.small) {
      midRow.innerHTML = `
      <div class="profile-pic">
            <img src="./image/tarik.png" alt="">
            <div class="description">
              <h1>Hello, I'm Tarik&#160;&#59;&#41;</h1>
              <h2>Full Stack Developper,<br><span>JS & Python</span>,<br>based at Montpellier, France.</h2>
            </div>
        </div>
        <div class="request">
          <h3>I'm looking for an internship starting in March&#160;&#160;2024 !</h3>
        </div>
      `;
    } else if (window.innerWidth < screen.medium) {
      midRow.innerHTML = `
        <div class="profile-pic">
            <img src="./image/tarik.png" alt="">
            <div class="description">
              <h1>Hello, I'm Tarik&#160;&#59;&#41;</h1>
              <h2>Full Stack Developper,<br><span>Javascript & Python</span>,<br>based at Montpellier, France.</h2>
              <h3>I'm looking for an internship starting in March&#160;&#160;2024 !</h3>
            </div>
        </div>
    `;
    } else {
      descriptionContent.innerHTML = `
    <h1>Hello, I'm Tarik&#160;&#160;&#160;&#59;&#41;</h1>
    <h2>Full Stack Developper,<br><span>Javascript & Python</span>,<br>based at Montpellier, France.</h2>
    <h3>I'm looking for an internship starting in March&#160;&#160;2024 !<br></h3>
    `;
    }
    /* MENU */
    homeTxt.forEach((element) => {
      element.textContent = "Home";
    });
    projectTxt.forEach((element) => {
      element.textContent = "Projects";
    });
    aboutTxt.forEach((element) => {
      element.textContent = "About";
    });
    skillBrg.textContent = "Skills";
    /* DARK LIGHT */
    darkTxt.textContent = "Dark";
    lightTxt.textContent = "Light";
    /* PROJECTS */
    descriptionProject1.innerHTML = `
    Welcome to my portfolio page, 100% HTML, CSS and Javascript.<br>
    I learned a lot from designing and implementing it.
    `;
    linkProject1.textContent = "You're already there";
    descriptionProject2.innerHTML = `
    As a collector of vintage toys, I loved having a Vinted clone site dedicated to collectors<br>
    Personal project in progress.
    `;
    linkProject2.textContent = "In Progress";
    descriptionProject3.innerHTML = `
    Group project based on data science, an interface that identifies establishments based on their geographical location and performance.
    `;
    linkProject3.textContent = "In Progress";
    /* ABOUT SKILLS */
    aboutMain.innerHTML = `
    <h1>About me</h1>
    <p>After 12 years' working experience at Apple Retail, I'm currently in the process of a professional reconversion, of which I've taken the first step by becoming a Back End application and website developer in Python.<br><br>
    I'm currently studying to become a Full Stack developer, and I'm open to proposals for collaboration in Montpellier and the surrounding area.</p>
    `;
    skillsTitle.textContent = "Skills";
    linksTitle.textContent = "Links";
    /* CONTACT */
    invalidTxt.forEach((element) => {
      element.textContent = "Invalid input";
    });
    nameTxt.textContent = "Name*";
    phoneTxt.textContent = "Phone";
    requiredTxt.textContent = "* Required";
    sendTxt.textContent = "Send";
    sentTxt.textContent = "Sent";
    /* BUTTON UNDERLINE */
    enLink.forEach((element) => {
      element.style.textDecoration = "underline";
    });
    frLink.forEach((element) => {
      element.style.textDecoration = "none";
    });
  });
});

frButtons.forEach((button) => {
  button.addEventListener("click", () => {
    /* DESCRIPTION */
    if (window.innerWidth < screen.small) {
      midRow.innerHTML = `
      <div class="profile-pic">
            <img src="./image/tarik.png" alt="">
            <div class="description">
              <h1>Hello, je suis Tarik&#160;&#59;&#41;</h1>
              <h2>Développeur Full Stack,<br><span>JS & Python</span>,<br>basé sur Montpellier, France.</h2>
            </div>
        </div>
        <div class="request">
          <h3>Je suis à la recherche d'un stage à partir de mars&#160;&#160;2024 !</h3>
        </div>
      `;
    } else if (window.innerWidth < screen.medium) {
      midRow.innerHTML = `
        <div class="profile-pic">
            <img src="./image/tarik.png" alt="">
            <div class="description">
              <h1>Hello, je suis Tarik&#160;&#59;&#41;</h1>
              <h2>Développeur Full Stack,<br><span>Javascript & Python</span>,<br> basé sur Montpellier, France.</h2>
              <h3>Je suis à la recherche d'un stage à partir de mars&#160;&#160;2024 !</h3>
            </div>
        </div>
    `;
    } else {
      descriptionContent.innerHTML = `
    <h1>Hello, je suis Tarik&#160;&#160;&#160;&#59;&#41;</h1>
    <h2>Développeur Full Stack, <br><span>Javascript & Python</span>,<br> basé sur Montpellier, France.</h2>
    <h3>Je suis à la recherche d'un stage à partir de mars&#160;&#160;2024 !<br></h3>
    `;
    }
    /* MENU */
    homeTxt.forEach((element) => {
      element.textContent = "Accueil";
    });
    projectTxt.forEach((element) => {
      element.textContent = "Projets";
    });
    aboutTxt.forEach((element) => {
      element.textContent = "A propos";
    });
    skillBrg.textContent = "Compétences";
    /* DARK LIGHT */
    darkTxt.textContent = "Sombre";
    lightTxt.textContent = "Clair";
    /* PROJECTS */
    descriptionProject1.innerHTML = `
    Bienvenue sur ma page professionnelle, 100% HTML, CSS et Javascript.<br>
    J'ai beaucoup appris lors de sa conception et implémentation.
    `;
    linkProject1.textContent = "Vous y êtes";
    descriptionProject2.innerHTML = `
    Collectionneur de jouets vintage, j'adorais avoir un site clone de Vinted, dédié aux collectionneurs<br>
    Projet personnel en cours de création.
    `;
    linkProject2.textContent = "En développement";
    descriptionProject3.innerHTML = `
    Projet de fin d'études en groupe, axé sur de la data science, interface qui permet d'identifier un établissement en fonction de leur situation géographique et performances.
    `;
    linkProject3.textContent = "En développement";
    /* ABOUT SKILLS */
    aboutMain.innerHTML = `
    <h1>A propos de moi</h1>
    <p>Riche de 12 ans d'expérience au sein d'Apple Retail, j'entame actuellement une reconversion professionnelle, dont j'ai franchi une première étape en devenant développeur d'applications et site web Back End en Python.<br><br>
    Actuellement en formation en tant que développeur Full Stack, je reste ouvert aux propositions de collaborations sur Montpellier et ses alentours.</p>
    `;
    skillsTitle.textContent = "Compétences";
    linksTitle.textContent = "Liens";
    /* CONTACT */
    invalidTxt.forEach((element) => {
      element.textContent = "Saisie invalide";
    });
    nameTxt.textContent = "Nom*";
    phoneTxt.textContent = "Téléphone";
    requiredTxt.textContent = "* Requis";
    sendTxt.textContent = "Envoyer";
    sentTxt.textContent = "Envoyé";
    /* BUTTON UNDERLINE */
    enLink.forEach((element) => {
      element.style.textDecoration = "none";
    });
    frLink.forEach((element) => {
      element.style.textDecoration = "underline";
    });
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
