// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"

// Project Images
import employeemanage from "./images/employeemanage.png"
import restaurantapp from "./images/ar5.jpeg"
import chattinglounge from "./images/chattinglounge.png"
import geeazy from "./images/geeazy.png";
import projectimg from "./images/projectplan.png"
import minutesomeeting from "./images/minutesomeeting.png";
import statusreported from "./images/statusreported.png";
import projectcharter from "./images/projectcharter.png"
import machine from "./images/machine_learning.jpg"
import reactnative from "./images/reactnative.png"
// Capstone project files
import projectplan from '../public/assets/docs/projectplan.pdf';
import statusreport from '../public/assets/docs/statusreport.pdf';
import minutesmeeting from '../public/assets/docs/minutesmeeting.pdf'
import teamcharter from '../public/assets/docs/teamcharter.pdf';

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Abdurahman",
  headerTagline: [
    //Line 1 For Header
    "A Canadian college student",
    //Line 2 For Header
    "that is looking for a job",
    //Line 3 For Header
    "in the industry",
  ],
  //   Header Paragraph
  headerParagraph:
    "",

  //Contact Email
  contactEmail: "abdurahman.ahmed18@outlook.com",

  // End Header Details -----------------------

  // Personal Info Section ---------------------

  infoParaOne: "My past experience with programming started in high school when I learned the Visual Basic language. After doing that program for all 4 years of my student life in high school, I realized that I enjoyed learning and understanding how programming languages worked and how I can build programs out of them and because of this interest, I have decided to join George Brown College and their program in Computer Programming and Analysis to further my understanding and my studies in this career path.",

  infoParaTwo: "Along the way, I have struggled in terms of learning new concepts and understanding how to implement them in my day to day work but with the help of friends and the Internet, I was able to overcome these situations time and time again. Another struggle I had during my college life is the lack of motivation to continue in my studies for the final two semesters. The pandemic in general took a toll on me and so I did not feel motivated to learn anything and I felt burnt out. To overcome this, I made sure I talked to friends and family about my daily life as well as exercised whether it be at home with weights or outside doing a simple thing like walking.",

  infoParaThree: "For the future, I hope to be in a job working as a software developer either in a well known company or in a start up company building programs and also working on side projects within my professional career.  To achieve this, I will work on many skills such as learn new programming languages as well as people skills like communication and teamwork in order to be able to talk to colleagues in the workspace.",

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Employee Management Application", //Project Title - Add Your Project Title Here
      para:
        "This application demonstrates how employees can be added, removed, viewed and updated using React JS, Spring Boot and MySQL.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        employeemanage,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/abdurahman/101207567_lab_assignment_2",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Geeazy Mobile Application", //Project Title - Add Your Project Title Here
      para:
        "Geeazy is a mobile application created from React Native and provides users with local handymen and contractor services.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        geeazy,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/farhan982/Geeazy",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Restaurant Mobile Application", //Project Title - Add Your Project Title Here
      para:
        "An Android application built on Java that allows a user to see information about a list of restaurants and rate them from 1 - 5 stars.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        restaurantapp,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/BenJenkynStudent/MobileAppsProject",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "ChattingLounge Application", //Project Title - Add Your Project Title Here
      para:
        "A Discord like clone that allows users to join a set of channels with a username and communicate with one another in real time using Express JS, Socket.io and Node JS.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        chattinglounge,
      //Project URL - Add Your Project Url Here
      url: 'https://github.com/abdurahman/ChattingLounge',
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Machine Learning Assignment 2", //Project Title - Add Your Project Title Here
      para:
        "Using Python, Keras, Pandas and Tensorflow to implement a multiclass classification using Iris classical dataset", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        machine,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/abdurahman/101207567_python_assignment2",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "React Native Appliation", //Project Title - Add Your Project Title Here
      para:
        "Basic React Native Application with the functionality of showing two screens which are the Main Screen and an About Screen", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        reactnative,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/abdurahman/SecondAssignment",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // Start capstone project section

  credentials: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Project Plan", //Project Title - Add Your Project Title Here
      para:
        "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        projectimg,
      //Project URL - Add Your Project Url Here
      url: projectplan,
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Minutes of Meeting", //Project Title - Add Your Project Title Here
      para:
        "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        minutesomeeting,
      //Project URL - Add Your Project Url Here
      url: minutesmeeting,
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Status Report", //Project Title - Add Your Project Title Here
      para:
        "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        statusreported,
      //Project URL - Add Your Project Url Here
      url: statusreport,
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Team Charter", //Project Title - Add Your Project Title Here
      para:
       "", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        projectcharter,
      //Project URL - Add Your Project Url Here
      url: teamcharter,
    },
  ],


  // About/Bio Section --------------
  aboutParaOne:
    "I am currently a software development student at George Brown College currently in the Computer Programming and Analysis program. I am in my final semester. I hope to gain a job in the industry after graduation and I feel confident enough to go into the industry and start applying for jobs.",
  aboutParaTwo:
    "I have learned many of the current programming languages such as Python, C#, Java, JavaScript, HTML, CSS, PHP, MySQL, ASP.NET and Swift. With these technologies, I have designed and developed software applications that met the technical requirements and functionality of the clients. Some examples of projects I have created are that I have made a client notification program using Bootstrap, MySQL, HTML5, CSS and PHP using the MVC model and a flight manager application in C#. I have also created a employee management application using React JS, Spring Boot and MySQL.",
  aboutParaThree:
    "With all of these things in mind, I can also state that I possess good writing as well as verbal skills which helps me state information in an effective manner and also helps me understand and handle complex situations in a orderly fashion. I can also write in detail the documentation of the program that I create so that other developers who look at my program can understand the logic behind the program and to help the user understand the application better with the documentation in hand. Two other skills that I am currently working on are my critical thinking skills and my problem solving skills as this will be necessary for my day to day life as a software engineer with problems that will arise in the workplace that I will need to solve for and to effectively write the code in a clean manner as well. I can also provide key suggestions that will help improve functionality of the application being created. I work well in a team oriented setting and strongly believe in working together to meet client obligations and company goals. I have the ability to work under pressure and meet tight deadlines while maintaining a friendly and positive attitude. ",
  aboutImage:
    "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1010&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "Proficient knowledge and understanding of websites using HTML5 and Bootstrap",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "Designed and edited websites with CSS3 techniques",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "Developed responsive websites and web applications using JavaScript and TypeScript",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "Have designed and implemented websites as well as applications running React and React Native",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "5 years and counting of experience with programming multiple applications across different languages and platforms",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

 // promotionHeading: "Heading",
  promotionPara:
    "",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/abdurahman" },
  ],

  // End Contact Section ---------------
}

