import Mock from "../mock";

const database = {
  information: {
    name: 'Igor Dos Santos',
    aboutContent: "Welcome to my portfolio website, where I showcase my prowess in software development across various domains. With a strong command of Python, React JS, Ruby on Rails, and a host of web development languages, I am well-versed in crafting elegant and efficient solutions. My expertise extends beyond code; I excel in leveraging Bootstrap for responsive design, implementing DevOps practices for seamless project workflows, and harnessing the power of Cloud Computing for scalable applications. Object-Oriented Programming (OOP) and Java are fundamental tools in my kit, allowing me to architect robust and maintainable systems. As a full-stack developer, I am committed to not only delivering aesthetically pleasing websites but also ensuring they offer flawless functionality and intuitive user experiences. From pixel-perfect layouts to captivating animations, I specialize in creating websites that captivate and engage users. Join me on a journey to enhance your online presence and elevate your brand to new heights through visually stunning web development. Let's turn your ideas into digital reality.",
    age: 28,
    phone: '',
    nationality: 'Brazilian & Italian',
    language: 'English, Portuguese, Spanish, Italian',
    email: 'a2sigor@gmail.com',
    address: 'Dublin, Ireland',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/igor.alvesdossantos',
      instagram: 'https://instagram.com/igor_adsantos',
      linkedin: 'https://www.linkedin.com/in/igor-dos-santos/',
      github: 'https://github.com/Igor-dos-santos'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/Igor-Dos-Santos-CV.pdf'
  },
  services: [
    {
      title: "Software Development",
      icon: 'code',
      details: "I'm a dynamic software developer with expertise in a wide array of technologies, including Python, React JS, Java, Ruby on Rails, and cloud computing on AWS. My proficiency in these languages and frameworks allows me to craft user-centric applications that seamlessly blend aesthetics with functionality. Driven by a passion for elegant solutions, I excel in simplifying intricate problems into intuitive, user-friendly experiences."
    },
    {
      title: "Web Development",
      icon: 'laptop',
      details: "Web Developer specializing in both front-end and back-end technologies. Proficient in crafting engaging user interfaces using HTML, CSS, and JavaScript frameworks such as React. Skilled in Java, Node.js, Python, Ruby, and SQL for building robust and scalable back-end systems. Experienced in designing RESTful APIs for seamless communication between front-end and back-end components."
    },
    {
      title: "DevOps Engineer",
      icon: 'cogs',
      details: "I'm a DevOps Engineer specializing in streamlining software delivery through automation and collaboration. With expertise in scalable infrastructure, Docker, Kubernetes, and CI/CD pipelines, I optimize workflows, enhance efficiency, and elevate release quality. My focus is on fostering a culture of continuous improvement and delivering innovative solutions that enable agile and precise product development."
    },
    {
      title: "Video Editor",
      icon: 'youtube',
      details: "As a Video Editor, I bring your visual narratives to life. With a keen eye for detail and a creative touch, I transform raw footage into captivating stories. Proficient in industry-standard editing software, I craft seamless transitions, enhance visuals, and synchronize audio to create compelling videos. Whether it's for promotional content, documentaries, or personal projects, I ensure your vision shines through every frame. "
    },
    {
      title: "Music Producer & Musician",
      icon: 'music',
      details: "As a Music Producer and versatile musician, I blend creativity and technical expertise to craft exceptional musical experiences. With proficiency in multiple software such as GarageBand, LogicPro and Ableton Live. I also play various instruments, including Guitar, Ukulele, Percussion, Harmonica, and vocals as a Singer and Songwriter, I create original compositions that resonate with emotion. From producing tracks to composing melodies and arranging harmonies, I'm here to infuse your projects with captivating soundscapes and soulful melodies."
    },
    {
      title: "Drone Operator",
      icon: 'camera',
      details: "I'm a skilled Drone Operator ready to elevate your visual projects. From breathtaking aerial photography to precise mapping and filmography, I harness the power of drones to capture stunning visuals from unique perspectives. With experience in diverse environments, I bring a new dimension to your content. Whether it's for cinematography, land surveying, or creating immersive visual experiences, I'm equipped to soar to new heights."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "It wass a pleasure to work alongside Igor, he is a true asset to any team. His exceptional work ethic, unwavering dedication, and ability to work collaboratively make him a top performer.",
      author: {
        name: 'Bo Chu',
        designation: 'TikTok - Team Lead'
      }
    },
    {
      id: 2,
      content: "Igor is an exceptional worker - dedicated, hardworking, and a true team player. With his professionalism, positive attitude and contagious enthusiasm, I'm confident he'll go far in his career.",
      author: {
        name: 'Marcus Dawson',
        designation: 'Button Factory - General Manager'
      }
    },
    {
      id: 3,
      content: "I've had the pleasure of working with Igor and can confidently say that he is an exceptional employee. His work ethic, team spirit, and steadfast commitment to excellence are great assets to any team.",
      author: {
        name: 'Raphael Pagliuca',
        designation: 'Covalen - Team Leader'
      }
    },
        {
          id: 4,
          content: "Igor is very easy to deal with, he is very proactive and enjoys helping others. He is reliable and manages to deliver impeccable work no mater the work conditions and stress levels present behind the projects.",
          author: {
            name: 'Giuliana Tricoli',
            designation: 'Frances King School - Director'
          }
        },
        {
          id: 5,
          content: "Igor demonstrated a strong work ethic and dedication to our academic pursuits. His commitment to excellence was evident in his high-quality work and relentless pursuit of knowledge. He excelled in managing tasks, meeting deadlines, and contributing to our team.",
          author: {
            name: 'Fernando Sequineli',
            designation: 'Technical Support Specialist - WP Engine'
          }
        },
        {
          id: 6,
          content: "Igor's unwavering commitment to excellence, strong work ethic, and valuable contributions to our team were truly impressive. His high-quality work and efficient task management set a remarkable example for us all.",
          author: {
            name: 'Vinicius Russo',
            designation: 'Operations Analyst - Covalen'
          }
        }
  ],
  skills: [
    {
      title: "Javascript, HTML5, CSS3 & Bootstrap",
      value: 90
    },
    {
      title: "Backend (Python, Java, Ruby)",
      value: 85
    },
    {
      title: "Git",
      value: 95
    },
    {
      title: "Cloud Deployment",
      value: 85
    },
    {
      title: "Web Security",
      value: 75
    },
    {
      title: "Testing",
      value: 75
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Shop Cart - An Ecommerce web app",
      subtitle: "An awesome ecommerce app for a clothes store. This app was developed using Python and Django Framework. Deployed on Amazon AWS and has security features necessary",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: [
      "/images/portfolio-image-1-lg.jpg",
      "/images/portfolio-image-1-lg2.jpg",
      "/images/portfolio-image-2-sc.jpg",
      "/images/portfolio-image-3-sc.jpg",
      "/images/portfolio-image-4-sc.jpg",
      "/images/portfolio-image-5-sc.jpg",
      "/images/portfolio-image-6-sc.jpg",
      "/images/rainbowCover.png"
      ],
      url: 'https://github.com/Igor-dos-santos/ShopCart'
    },
    {
      id: 2,
      title: "Want A Byte - OWASP App",
      subtitle: "A restaurant app to exercise OWASP principles. Control user authentication and safeguard routes with Passport.js and Auth0. Pug templates are used on the front end to render views, while CSS is used to maintain style sheets.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/wantabyte2.png"
      ],
      url: 'https://github.com/Igor-dos-santos/WantAByte'
    },
    {
      id: 3,
      title: "My Recipe App - Recipes Web App",
      subtitle: "This is a recipes app that generates recipes based on saved ingredients. It also provides you a shopping list for your saved recipes. Users can log in to have access to these features.",
      imageUrl: "/images/recipeapp.png",
      largeImageUrl: [
      "/images/recipeapp.png",
      "/images/sign-up-lg.png",
      "/images/food-page copy-lg.png",
      "/images/recipeapp-lg.jpg"
      ],
      url: 'https://github.com/Igor-dos-santos/OWASP_APP'
    },
    {
      id: 4,
      title: "Calculator App",
      subtitle: "A simple Calculator app with a beautiful modern design similar to Apple Calculator. Developed on React JS",
      imageUrl: "/images/calculator.png",
      largeImageUrl: ["/images/calculator.png"],
      url: 'https://github.com/Igor-dos-santos/calculator-app'
    },
    {
      id: 5,
      title: "Chess AI Game",
      subtitle: "A chess game equipped with AI to be played either alone against the AI or with a friend. Beautifully designed in Python.",
      imageUrl: "/images/chessAI.png",
      largeImageUrl: ["/images/chessAI.png"],
      url: '/portfolios'
    },
    {
      id: 6,
      title: "Upcoming projects",
      subtitle: "New Updates soon",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
      url: '/portfolios'
    },
    {
      id: 7,
      title: "Upcoming projects",
      subtitle: "New Updates soon",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: '/portfolios'
    },
    {
      id: 8,
      title: "Upcoming projects",
      subtitle: "New Updates soon",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Upcoming projects",
      subtitle: "New Updates soon",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
      url: '/portfolios'
    },
    {
      id: 10,
      title: "Upcoming projects",
      subtitle: "New Updates soon",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '/portfolios'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "06/2023 - Present",
        position: "Generative AI Annotator",
        company: "Covalen - Ireland",
        details: "In my role as a Generative AI Annotator, I have actively contributed to the refinement of AI chat bot capabilities by analyzing and providing insightful observations on annotated data. I have undertaken comprehensive research to identify emerging entity categories and organized them effectively, contributing to the creation of guidelines. Through deep data analysis, I've generated annotations, reports, and actionable suggestions that have facilitated the development of enhanced data organization and representation. This experience has not only honed my English language proficiency but also allowed me to contribute significantly to the advancement of AI technology within the company."
      },
      {
        id: 2,
        year: "09/2021 - Present",
        position: "Senior Legal Operations Analyst",
        company: "Covalen - Ireland",
        details: "As a senior Legal Operations Analyst at BCL Project in Dublin, I perform and provide troubleshooting solutions to complex issues in social media platforms with urgent cases based on court orders, short deadlines, and substantial fines. My speed, agility, and problem-solving skills have helped my company avoid potential legal consequences many times over. Adapting to new policies, political transitions, and law enforcement has expanded my skill set and improved my tolerance to stress and pressure. As an IT professional, I ensure meticulous attention to detail and data analysis to apply company rules and standards to influential social media accounts. I have experience translating complex technological terms into simplified language and exceptional professionalism working remotely."
      },
      {
        id: 3,
        year: "11/2020 - 09/2021",
        position: "Operations Analyst",
        company: "Covalen - Ireland",
        details: "As an Operations Analyst at Covalen, I excelled in validating, investigating, and responding to cyber inquiries within established guidelines and policies. My ability to ramp up quickly and achieve trainer status in multiple areas of the job highlights my quick mastery of the tools and software necessary for the job. I am proficient in data analysis, report creation, and project governance using Tableau and Trello, with exceptional attention to Microsoft Office tools, particularly MS Excel. I work responsibly with deadlines and can manage a busy agenda filled with meetings and reports with ease."
      },
      {
        id: 4,
        year: "11/2018 - 11/2020",
        position: "Bar Manager",
        company: "Button Factory, Temple Bar - Ireland",
        details: "As a skilled Bar Manager at the Button Factory in Dublin, I leveraged my expertise in budget control and data analysis using Microsoft Excel Functions, Graphs, and Pivot Tables to present data in an efficient way. I developed successful strategies to maintain high standards and trained staff to increase sales. My exceptional time and supplies management skills helped reduce waste and provided cost-cutting solutions. Additionally, I planned and managed cultural events for hundreds of people. Through this experience, I gained a thorough understanding of business logistics and learned to provide creative solutions to help businesses grow. I am adept at reporting technical data in simpler terms to all staff, making me an invaluable asset to any team."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - 2023",
        graduation: "BSc (Honours) in Computing",
        university: "National College of Ireland - NCI / Dublin - Ireland",
        details: "I am proud to be completing this year a BSc (Honours) in Computing, which has equipped me with a diverse range of technical and problem-solving skills. Throughout my degree, I gained proficiency in programming languages such as Java, Python, and Ruby on Rails, as well as a deep understanding of software development, algorithms, and data structures. In addition, I had the opportunity to work on several real-world projects, where I collaborated with my peers to develop innovative solutions to complex problems. Thanks to my degree, I am confident in my ability to design, implement, and maintain software systems that meet business requirements, and I look forward to applying my skills in a challenging and dynamic work environment."
      },
      {
        id: 2,
        year: "2022 - 2023",
        graduation: "Ecommerce App - Full Course",
        university: "Udemy",
        details: "Through the comprehensive Udemy course E-commerce App - Full Course, I gained invaluable insights into developing a dynamic e-commerce web application using the robust Python Django Framework. This course guided me from the basics to advanced stages, allowing me to create a fully functional and secure online shopping platform. I learned to implement key features like user authentication, cart management, smart search, and secure payment processing. The course also covered Amazon AWS deployment, ensuring a seamless user experience on a global scale. This project enabled me to grasp the intricacies of e-commerce development while emphasizing security measures like secure password storage and PCI-compliant payment processing. Overall, the course provided me with a comprehensive skill set to create modern, user-friendly, and secure e-commerce applications."
      },
      {
        id: 3,
        year: "2021 - 2022",
        graduation: "Wed Development Course",
        university: "Udemy",
        details: "During my web development course, I acquired a broad range of skills that enabled me to develop dynamic and interactive web pages. I gained expertise in HTML, CSS, Bootstrap, JavaScript, and various front-end frameworks such as React, Angular, and Vue.js. Additionally, I developed my back-end development skills using Node.js and PHP, enabling me to develop full-stack web applications with databases like MongoDB and MySQL. My understanding of web development best practices, as well as testing and debugging techniques, is a valuable asset that ensures the quality of my work. Through the course, I also acquired excellent problem-solving skills, the ability to work in a team and manage my time efficiently. I am confident that my web development skills and knowledge will enable me to make a valuable contribution to any project or organization."
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'AI: The Future is Here, But Are We Ready?',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/1_AI.md',
      createDay: "10",
      createMonth: 'August',
      createYear: "2023"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "05",
      createMonth: 'August',
      createYear: "2023"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "15",
      createMonth: 'July',
      createYear: "2023"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: './images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "05",
      createMonth: 'July',
      createYear: "2023"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'June',
      createYear: "2023"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "01",
      createMonth: 'June',
      createYear: "2023"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'May',
      createYear: "2023"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "15",
      createMonth: 'April',
      createYear: "2023"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: './images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "03",
      createMonth: 'April',
      createYear: "2023"
    },
    {
      id: 10,
      title: 'Trending designs in 2023.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2023.md',
      createDay: "22",
      createMonth: 'March',
      createYear: "2023"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "01",
      createMonth: 'March',
      createYear: "2023"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: './images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "24",
      createMonth: 'February',
      createYear: "2023"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "12",
      createMonth: 'February',
      createYear: "2023"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2023.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2023.md',
      createDay: "08",
      createMonth: 'February',
      createYear: "2023"
    },
    {
      id: 15,
      title: 'Programmers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "25",
      createMonth: 'January',
      createYear: "2023"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+353 83 846 8058', 'Whatsapp Available'],
    emailAddress: ['a2sigor@gmail.com'],
    address: "Dublin - Ireland"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});