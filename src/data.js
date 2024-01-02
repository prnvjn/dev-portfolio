const data = {
    header: {
        name: "Pranav",
        title: "I'm Pranav",
        email: "prnvjn@icloud.com",
        
        resume: "https://drive.google.com/file/d/1Xwf0WihaUkvpsV5izjoDMDwbQCZhTgJa/view?usp=sharing",
        linkedin: " https://www.linkedin.com/in/pranavvj/",
        github: "https://github.com/prnvjn"
      },

    about: {

      heading: "About",
      subheading: "Gain deeper understanding of my work, capabilities, and current focus within the realm of programming and technology.",
description:["Allow me to introduce myself— I&apos;m <strong>Pranav Jain </strong>, an ambitious and driven student currently pursuing my Master&apos;s degree in <strong>Information Systems</strong> at the esteemed <strong>University of Texas at Arlington</strong>."," My passion lies in <strong>software engineering</strong>, and I have a particular affinity for building captivating frontend and full-stack applications.  Feel free to <strong>contact</strong> me here "],


skills: [
    "JavaScript","Python","CSS","HTML5","PHP","TypeScript","SQL","NoSQL","XML","React" , "Tailwind", "Next.JS", "SASS", "Bootstrap", "Git", "Firebase", "Node" , "Express", "Selenium", "MySQL", "Amazon Web Services (AWS)", "JSON", "RESTful API", "MongoDB", "Linux", "Vite"
  ],

    },
  
   projects:
   { 
    heading:"Projects",
    subheading:"Here you will find a list of my personal projects",

    projectsList : [
       

      {
        title: "Creator Verse",
        description: "Creator Verse is a React app that lets users discover, follow, and manage their favorite content creators effortlessly. It supports CRUD operations, allowing users to add, edit, and delete creators. The app provides key information, such as names, URLs, descriptions, and image links, to keep users connected with their digital idols.",
        technologies: ["React", "Vite", "JavaScript","Supa Base","SQL"],
        image: "https://raw.githubusercontent.com/prnvjn/dev-portfolio/main/src/images/creatorverse.webp",
        preview: "https://creatorverse.netlify.app/",
        sourceCode:"https://github.com/prnvjn/codepath-web103-prework"

      },
      {
        title: "Portfolio Tracker",
        description: "The \"Portfolio Tracker\" is a user-friendly web application that enables users to input historical asset portfolio data and visualize its current worth based on the specified start date, initial balance, and allocation.",
        technologies: ["React", "Vite","Tailwind"],
        image: "https://raw.githubusercontent.com/prnvjn/dev-portfolio/main/src/images/assetTracker.webp",
        preview: "https://snazzy-mermaid-ca10eb.netlify.app",
        sourceCode:"https://github.com/prnvjn/asset-calculator"
      },
      {
        title: "Food Truck Locator",
        description: "A service that tells the user what types of food trucks might be found near a specific location on a map. Based on data provided by San Francisco Government",
        technologies: ["React", "Vite","Tailwind"],
        image: "https://raw.githubusercontent.com/prnvjn/dev-portfolio/main/src/images/FoodTruckInSF.webp",
        preview: "https://foodtruckinsf.netlify.app",
        sourceCode:"https://github.com/prnvjn/food-truck-app"
      }
    ]}
  };
  
  export default data;
  