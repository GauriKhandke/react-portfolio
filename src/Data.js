// App Images
import oasis from './assets/images/appImages/OasisJournal.png';
import jobfinder from './assets/images/appImages/JobFinder.png';
import burgerlogger from './assets/images/appImages/BurgerLogger.png';
import googlebooks from './assets/images/appImages/GoogleBooksReact.png';
import employeedirectory from './assets/images/appImages/EmployeeDirectory.png';
import notetaker from './assets/images/appImages/NoteTaker.png';
import weatherdashboard from './assets/images/appImages/WeatherDashboard.png';
import dayplanner from './assets/images/appImages/DayPlanner.png';
import codequiz from './assets/images/appImages/CodeQuiz.png';

// Demo Gifs
import oasisGif from './assets/images/gifs/OasisJournal.gif';
import googleBooksGif from './assets/images/gifs/GoogleBooksSearch.gif';
import employeeDirectoryGif from './assets/images/gifs/EmployeeDirectory.gif';
import jobFinderGif from './assets/images/gifs/JobFinder.gif';
import burgerLoggerGif from './assets/images/gifs/BurgerLogger.gif';
import noteTakerGif from './assets/images/gifs/NoteTaker.gif';
import weatherDashboardGif from './assets/images/gifs/WeatherDashboard.gif';
import codeQuizGif from './assets/images/gifs/CodeQuiz.gif';
import dayPlannerGif from './assets/images/gifs/DayPlanner.gif';

export const projects = [
  {
    id: "GauriKhandke/oasis",
    title: "Oasis Journal (MERN)",
    description:
      "Online journal Application that allows both young and young at heart to write their thoughts, feelings and emotions into a safe, secure and fun journal app. ",
    imageUrl: oasis,
    appUrl: "https://oasis-diary.herokuapp.com",
    gif: oasisGif,
    technology: "MERN Stack, Draft.js Rich TextEditor, JSON Web Token, Bcyptjs",
    details: "Online journal Application that allows both young and young at heart to write their thoughts, feelings and emotions into a safe, secure and fun journal app. Application is built using MERN Stack and Draft js Rich TextEditor where user can pick a calendar date and write a journal entry with all text editor formatting. Also user can search entries for particular month and view, edit or delete individual entry.",
  },
  {
    id: "GauriKhandke/google-books-search-react",
    title: "Google Books Search (React)",
    description:
      "Google Books Search MERN app allow users to search for books via Google Books API and view/save books they wish to read. Also User can view/delete saved books.",
    imageUrl: googlebooks,
    appUrl: "https://google-books-search-app-mern.herokuapp.com/",
    gif: googleBooksGif,
    technology: "MERN Stack, Google Books API, Axios, Bootstrap, Heroku",
    details: "The Google Books Search MERN app allows users to search for books of interest via the Google Books API and view, save books they wish to read. Users can get all saved books and they can view or delete those saved books.",
  },
  {
    id: "GauriKhandke/JobFinder",
    title: "Job Finder (Full Stack)",
    description:
      "This is a simple Job Finder application where the user can search for the Jobs with keywords like location,role etc.And also the user can Post a Job ",
    imageUrl: jobfinder,
    appUrl: "https://uw-jobfinder.herokuapp.com/",
    gif: jobFinderGif,
    technology: "MySQL, Sequelize, Express.js, Node.js, Handlebars.js, Passport, Bcyptjs, Javascript, CSS", 
    details: "This is a Full Stack Job Finder application, where the user can first login or sign up (if a user does not have an account). After login, User can search jobs by role, technologies, location or comapny. Also user can get all jobs, post a new job and view the jobs that are posted by logged in user.",
  },
  {
    id: "GauriKhandke/employee-directory",
    title: "Employee Directory (React)",
    description:
      "Employee directory application created using react where user can view all employee data, search employee as well as sort employee by name.",
    imageUrl: employeedirectory,
    appUrl: "https://gaurikhandke.github.io/employee-directory/",
    gif: employeeDirectoryGif,
    technology: "React, Bootstrap, Axios",
    details: "Employee directory application created using react where user can view employee data, search employee or sort employee by name. This project was bootstrapped with Create React App."
  },
  {
    id: "GauriKhandke/Burger-Logger",
    title: "Burger Logger (Full Stack)",
    description:
      "This is a restaurant app where the users input the names of burgers and has Devour button. When the user clicks it, the burger will be 'Devoured'.",
    imageUrl: burgerlogger,
    appUrl: "https://eat-da-burger-restaurant.herokuapp.com",
    gif: burgerLoggerGif,
    technology: "MySQL, Express.js, Node.js, Handlebars.js, CSS",
    details: "This is a restaurant app where the users input the names of burgers and has Devour button. When the user clicks it, the burger will be 'Devoured'."
  },
  {
    id: "GauriKhandke/Note-Taker",
    title: "Note Taker (Full Stack)",
    description:
      "This is a simple Note Taker application that allows users to add ,view saved notes and also delete the notes if the user don't need that note anymore.",
    imageUrl: notetaker,
    appUrl: "https://gauri-express-notetaker.herokuapp.com/",
    gif: noteTakerGif,
    technology: "Express.js, Node.js, UUID, Javascript, HTML, CSS",
    details: "This is a simple Note Taker application that allows users to add ,view saved notes and also delete the notes if the user don't need that note anymore. This application uses an express backend and save and retrieve note data from a JSON file."
  },
  {
    id: "GauriKhandke/Gauri-weather-dashboard",
    title: "Weather Dashboard (FrontEnd)",
    description:
      "A weather dashboard application to get current weather conditions of city and 5 day forecast of that city.",
    imageUrl: weatherdashboard,
    appUrl: "https://gaurikhandke.github.io/Gauri-weather-dashboard/",
    gif: weatherDashboardGif,
    technology: "Javascript, JQuery, Bootstrap, HTML, CSS",
    details: "A weather dashboard application to get current weather conditions of city and 5 day forecast of that city. This application is built using OpenWeather API to fetch weather data of searched city."
  },
  {
    id: "GauriKhandke/Gauri-code-quiz",
    title: "Code Quiz (Front End)",
    description:
      "A timer-based quiz application that stores high scores of multiple users. Answering incorrectly results in penality of time.",
    imageUrl: codequiz,
    appUrl: "https://gaurikhandke.github.io/Gauri-code-quiz/",
    gif: codeQuizGif,
    technology: "Javascript, Bootstrap, Browser LocalStorage, HTML, CSS",
    details: "A timer-based quiz application having multiple choice questions that stores high scores of multiple users. Answering incorrectly results in penality of time."
  },
  {
    id: "GauriKhandke/Gauri-day-planner",
    title: "Day Planner (Front End)",
    description:
      "Simple calendar application that allows the user to save events for each hour of the day from 9AM to 5 PM. ",
    imageUrl: dayplanner,
    appUrl: "https://gaurikhandke.github.io/Gauri-day-planner/",
    gif: dayPlannerGif,
    technology: "JQuery, Javascript, Moment.js, Bootstrap, HTML, CSS",
    details: "Simple calendar application that allows the user to save events for each hour of the day from 9AM to 5 PM. "
  },  
];