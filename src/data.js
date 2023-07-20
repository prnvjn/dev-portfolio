const data = {
    header: {
        name: "John Doe",
        title: "Software Engineer",
        email: "john.doe@example.com",
        phone: "+1 123-456-7890",
        website: "https://www.johndoe.com",
        linkedin: "https://www.linkedin.com/in/johndoe",
        github: "https://github.com/johndoe"
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
        image: "https://pranavdev.s3.amazonaws.com/creatorverse.webp",
        preview: "https://dummyimage.com/1280x800/1bf2c3/050505.webp",
        sourceCode:""

      },
      {
        title: "Portfolio Tracker",
        description: "The \"Portfolio Tracker\" is a user-friendly web application that enables users to input historical asset portfolio data and visualize its current worth based on the specified start date, initial balance, and allocation.",
        technologies: ["React", "Vite","Tailwind"],
        image: "https://pranavdev.s3.amazonaws.com/assetTracker.webp",
        preview: "https://dummyimage.com/1280x800/1bf2c3/050505.webp",
        sourceCode:""
      },
      {
        title: "Food Truck Locator",
        description: "A service that tells the user what types of food trucks might be found near a specific location on a map. Based on data provided by San Francisco Government",
        technologies: ["React", "Vite","Tailwind"],
        image: "https://pranavdev.s3.amazonaws.com/FoodTruckInSF.webp",
        preview: "https://dummyimage.com/1280x800/1bf2c3/050505.png",
        sourceCode:""
      }
    ]}
  };
  
  export default data;
  