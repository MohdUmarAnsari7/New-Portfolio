// Projects Section Introduction
const projectSectionIntro = `
  <div class="project-intro" style="text-align:center; margin-bottom: 30px;">
    <h3>My Projects</h3>
    <p>Here are some of the projects I have worked on, ranging from web development to algorithmic challenges. Each project reflects my passion for problem-solving, coding, and building useful applications. Explore the cards below to learn more about my work!</p>
  </div>
`;

AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Insert the intro above the cards
if (projectcards) {
  projectcards.insertAdjacentHTML('beforebegin', projectSectionIntro);
}

// Array of object for projects
const projects = [
  
  {
    title: "Tic Tac Toe Game",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:"Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Hotel Management Website",
    cardImage: "assets/images/project-page/Hotel.png",
    description: "A modern hotel management website offering booking, services, and contact features. Built to provide a seamless experience for hotel guests and administrators.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/html5-40-1175193.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Sign Language Converter",
    cardImage: "assets/images/project-page/Sign.png",
    description: "A machine learning-based application that converts sign language gestures into text or speech, enabling better communication for the hearing and speech impaired. Utilizes computer vision and deep learning techniques.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "DevTool Extension",
    cardImage: "assets/images/project-page/DevTool.jpeg",
    description: "A custom browser developer tool extension designed to enhance debugging and productivity for web developers. Features include advanced inspection, real-time editing, and performance monitoring.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/javascript-1-225993.png",
    Previewlink: "",
    Githublink: "",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title">${Previewlink ? `<a href="${Previewlink}" target="_blank" rel="noopener">${title}</a>` : title}</h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
