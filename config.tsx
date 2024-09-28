import test from "node:test";

export const config = {
  about: {
    intro:
      "Hi, Abhay I am a Computer Science Engineer and a Full stack developer.",
    summary:
      "As a full stack developer and software enthusiast, I am passionate about using my skills to build technology that is intuitive and scalable. With a background in engineering in Computer Science and having worked on several products with different startups, I have a strong foundation of understanding the development cycle of softwares, and solving several problems in the way. In addition to my technical skills, I am also interested in the business side of things, which helps me bring a holistic perspective to my work. I am always looking for new challenges and oppurtunities to learn and grow in the field of software.",
    bullets: [],
    outro: "",
  },
  projects: [
    {
      name: "Full Stack Learning Platform",
      description:
        "A simple Full stack application that allows users to create, read, update and delete educational resources. Users can access content on android, moderators can use react admin panel to manage content and upload lessons and courses on the app.",
      techStack: ["ReactJS", "MongoJS", "ExpressJS", "MongoDB", "Android"],
      github: "https://github.com/humaneBicycle/admin-edtech",
      image_url:
        "https://raw.githubusercontent.com/humaneBicycle/admin-edtech/refs/heads/master/image.png",
      url: "",
      bullets: [
        "An e-commerce website, escents.in, a freelance project, built using Tailwind, JavaScript, and Liquid templating with a clean, intuitive design.",
        "Achieved monthly sales exceeding 60K INR through a user-friendly and elegant interface.",
      ],
      testimonials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/posts/soham-bhalekar-8358b625a_uxdesign-webdesign-webdesigner-activity-7175966394268729344-IvaQ/?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      name: "Escents.in",
      description:
        "An e-commerce website, escents.in, a freelance project, built using Tailwind, JavaScript, and Liquid templating with a clean, intuitive design.",
      techStack: [
        "TailwindCSS",
        "Liquid Templating",
        "HTML",
        "CSS",
        "Javascript",
      ],
      github: "https://github.com/Pranjal7852/escents-shopify",
      url: "https://escents.in",
      image_url: "/images/escents.png",
      bullets: [
        "An e-commerce website, escents.in, a freelance project, built using Tailwind, JavaScript, and Liquid templating with a clean, intuitive design.",
        "Achieved monthly sales exceeding 60K INR through a user-friendly and elegant interface.",
      ],
      testimonials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/posts/soham-bhalekar-8358b625a_uxdesign-webdesign-webdesigner-activity-7175966394268729344-IvaQ/?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
    {
      name: "Distributed Triple Store",
      description:
        "A distributed triple store is a distributed systems project that manages and queries data structured as subject-predicate-object triples across multiple servers, ensuring scalability and efficient retrieval of linked data in a decentralized environment.",
      techStack: ["React", "Material UI", "Chart.js", "Leaflet"],
      github: "https://github.com/humaneBicycle/distributed-nosql-store/",
      url: "https://github.com/humaneBicycle/distributed-nosql-store/",
      image_url:
        "https://raw.githubusercontent.com/humaneBicycle/distributed-nosql-store/refs/heads/master/image.png",
      bullets: [
        "Designed and implemented a distributed NoSQL Database prototype integrating 3 database systems (PostgreSQL, MongoDB, Neo4j), using Python and state-based objects, for efficient storage and querying",
        "Developed a log-based merging mechanism for maintaining data consistency across 3 servers",
        "Used Yago dataset with more than 13 million data points for testing",
      ],
      testimonials: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/posts/soham-bhalekar-8358b625a_uxdesign-webdesign-webdesigner-activity-7175966394268729344-IvaQ/?utm_source=share&utm_medium=member_desktop",
        },
      ],
    },
  ],
  blogs: [
    {
      name: "How to build a Covid-19 Tracker",
      description:
        "A Covid-19 tracker that tracks the number of cases, recoveries and deaths in real time.",
      date: "2021-12-12",
      url: "https://www.google.com",
    },
    {
      name: "How to build a Covid-19 Tracker",
      description:
        "A Covid-19 tracker that tracks the number of cases, recoveries and deaths in real time.",
      date: "2021-12-12",
      url: "https://www.google.com",
    },
  ],
};