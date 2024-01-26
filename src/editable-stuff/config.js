// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#2e1a3a, #751937, #3d3c4d, #273e3e, #3d3c4d, #751937, #2e1a3a"


  ,

  firstName: "Tashbee",
  middleName: "",
  lastName: "Hassan",
  message: "Turning concepts into reality with a smooth mobile app experience",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/tashbee56",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/tashbee.hassan?mibextid=ZbWKwL",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/tash.hassan.56?igsh=MXBwbTYzNzFnaXZndA== ",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/tashbee-hassan-9a2481247/",
    },

  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/p1.jpg"),
  imageSize: 375,
  message:
    "Passionate about crafting innovative solutions with a focus on Flutter, Node.js, MongoDB, and Firebase. Formerly a key contributor at PTCL, where I played a pivotal role in optimizing software solutions for enhanced user experience. Computer Science graduate from COMSATS University Islamabad, adept in a wide range of technologies. Eager to explore new challenges and contribute to cutting-edge techniques. Let's connect and shape the future of software development! 🌐",

  resume: "https://drive.google.com/file/d/1b-ij0XeYBrch5n6Rp81W7hoP3o1I6mEn/view?usp=drivesdk",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "tashbee56", //i.e."johnDoe12Gh"
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/pic.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/pic.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Flutter/Dart", value: 90 },
    { name: "Nodejs", value: 60 },
    { name: "Data Structures", value: 60 },
    { name: "C/C++", value: 50 },
    { name: "JavaScript", value: 50 },
    { name: "Java", value: 50 },
    { name: "HTML/CSS", value: 40 },
    { name: "FIREBASE", value: 40 }
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering/Backend Developer  or Flutter developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "tashbeehassan92@gmail.com",
};
const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Flutter App Developer',
      companylogo: require('../assets/img/fi.png'),
      date: '2021 – Present',
    },
    {
      role: 'Backend Developer Intern',
      companylogo: require('../assets/img/pp.png'), // Add the path to the logo for the second company
      date: 'Aug 2023 – Nov 2023',
    }

  ]
};


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
