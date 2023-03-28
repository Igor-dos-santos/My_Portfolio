import Mock from "../mock";

const database = {
  information: {
    name: 'Igor Dos Santos',
    aboutContent: "As a frontend web developer, I specialize in crafting code that is both clean and visually precise. In addition to designing for pixel-perfect layouts, I create web animations that enhance interactivity and elevate user experience.",
    age: 28,
    phone: '',
    nationality: 'Brazilian and Italian',
    language: 'English, Portuguese, Spanish',
    email: '',
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
      title: "Web Design",
      icon: 'brush-alt',
      details: "Innovative, user-centric, and responsive web design with a creative touch."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Front-end: HTML, CSS, JavaScript, React, Vue. Back-end: Java, Node.js, Python, Ruby, SQL, RESTful APIs"
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Proficient in building responsive and interactive mobile applications using top-notch frameworks that ensure cross-device compatibility."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "It's a pleasure to work alongside Igor, he is a true asset to any team. His exceptional work ethic, unwavering dedication, and ability to work collaboratively make him a top performer.",
      author: {
        name: 'Raphael Pagliuca',
        designation: 'Team Lead'
      }
    },
    {
      id: 2,
      content: "Igor is an exceptional worker - dedicated, hardworking, and a true team player. With his professionalism, positive attitude and contagious enthusiasm, I'm confident he'll go far in his career.",
      author: {
        name: 'Marcus Dawson',
        designation: 'Button Factory Manager'
      }
    },
    {
      id: 3,
      content: "I have had the pleasure of working with Igor and can confidently say that he is an exceptional employee. His work ethic, team spirit, and steadfast commitment to excellence are truly impressive.",
      author: {
        name: 'Moises Dall’Agnol',
        designation: 'Team Lead'
      }
    }
  ],
  skills: [
    {
      title: "Javascript, HTML5, CSS3 & Bootstrap",
      value: 90
    },
    {
      title: "Backend (Java, Python, Ruby)",
      value: 80
    },
    {
      title: "Git & GitHub",
      value: 95
    },
    {
      title: "Cloud Deployment",
      value: 85
    },
    {
      title: "Web Security",
      value: 70
    },
    {
      title: "Testing",
      value: 75
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://github.com/Igor-dos-santos?tab=repositories'
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://github.com/Igor-dos-santos?tab=repositories'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: '#'
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: '#'
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: '#'
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: '#'
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: '#'
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: '#'
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: '#'
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "09/2021 - Present",
        position: "Senior Legal Operations Analyst",
        company: "Covalen - Ireland",
        details: "As a senior Legal Operations Analyst at BCL Project in Dublin, I perform and provide troubleshooting solutions to complex issues in social media platforms with urgent cases based on court orders, short deadlines, and substantial fines. My speed, agility, and problem-solving skills have helped my company avoid potential legal consequences many times over. Adapting to new policies, political transitions, and law enforcement has expanded my skill set and improved my tolerance to stress and pressure. As an IT professional, I ensure meticulous attention to detail and data analysis to apply company rules and standards to influential social media accounts. I have experience translating complex technological terms into simplified language and exceptional professionalism working remotely."
      },
      {
        id: 2,
        year: "11/2020 - 09/2021",
        position: "Operations Analyst",
        company: "Covalen - Ireland",
        details: "As an Operations Analyst at Covalen, I excelled in validating, investigating, and responding to cyber inquiries within established guidelines and policies. My ability to ramp up quickly and achieve trainer status in multiple areas of the job highlights my quick mastery of the tools and software necessary for the job. I am proficient in data analysis, report creation, and project governance using Tableau and Trello, with exceptional attention to Microsoft Office tools, particularly MS Excel. I work responsibly with deadlines and can manage a busy agenda filled with meetings and reports with ease."
      },
      {
        id: 3,
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
        year: "2021 - 2022",
        graduation: "Wed Development Course",
        university: "Udemy",
        details: "During my web development course, I acquired a broad range of skills that enable me to develop dynamic and interactive web pages. I gained expertise in HTML, CSS, JavaScript, and various front-end frameworks such as React, Angular, and Vue.js. Additionally, I developed my back-end development skills using Node.js and PHP, enabling me to develop full-stack web applications with databases like MongoDB and MySQL. My understanding of web development best practices, as well as testing and debugging techniques, is a valuable asset that ensures the quality of my work. Through the course, I also acquired excellent problem-solving skills, the ability to work in a team and manage my time efficiently. I am confident that my web development skills and knowledge will enable me to make a valuable contribution to any project or organization."
      },
      {
        id: 3,
        year: "2022 - 2023",
        graduation: "AWS - Web Hosting and Cloud Computing",
        university: "Udemy",
        details: "Throughout my Amazon Web Services (AWS) training course, I gained a comprehensive understanding of the wide range of Cloud Computing services that Amazon provides. I learned how to effectively utilize these services to create scalable, manageable Web Application Services. The course began by teaching me the basics of Cloud Computing and how to set up my AWS account. I then went on to learn about the various services available to me, including EC2 instances, Elastic Load Balancers, CloudWatch, CloudFormation, S3, RDS, and Dynamo. I also learned about CloudFront services, ElastiCache, VPC, SNS, SES, SQS, and Route 53. The course culminated in a hands-on project where I created a 3 tier scalable Web Application using the AWS tools I had learned. By the end of the course, I had gained the skills necessary to build, configure, and administer web and cloud services using AWS. With this training, I am fully capable of creating and deploying my own Web Applications using the services provided by AWS."
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: "121 King Street, Melbourne, Victoria 3000, Australia"
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