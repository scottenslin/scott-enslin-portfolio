import Mock from "../mock";

const database = {
  information: {
    name: 'Scott Enslin',
    aboutContent: "I am a passionate web developer looking for my next opportunity to bring UX/UI design to life with clean, scalable code.",
    age: 32,
    phone: '610-295-3062',
    nationality: 'American',
    language: 'English',
    email: 'Enslin21@yahoo.com',
    hobbies: ": Traditional Martial Arts, Meditation, Philadelphia Sports, Reading",
    favoriteQuote: ": A calm sea doesn't make a great sailor",
    address: '',
    freelanceStatus: 'n/a',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/scott-enslin/',
      dribbble: '',
      github: 'https://github.com/scottenslin'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/ScottEnslinResume23.pdf'
  },
  recommendations: [
    {
      id: 1,
      content: "During my time as Scott’s co-worker and direct manager he has displayed several great talents such as his ability to decipher and think through problems, pickup new skillsets quickly, and be adaptable to what they team needs from him at the time. I was impressed with Scott the first week we started working together at DICK’S, he impressed me with his ability to learn quickly and become a valuable team member. After becoming Scott’s direct manager, I got to have a closer look at what drives him and got to see his passion for code development flourish. Over our time at DICK’S I have seen Scott take on a number of new challenges, and even though he might have been lacking the skills at the start, where he quickly would become a subject matter expert. It isn’t only Scott’s technical skills that impress me, however. Scott was a joy to work with because he always had a positive attitude and would go out of his way to help a team member out. Many times, he would sit in software pairing sessions just helping someone think through a problem they were stuck on. Scott was a highly regarded member of the team and respected by all his peers; engineers, designers, and product managers alike.",
      author: {
        name: 'Michael Ouellette',
        designation: "Engineering Manager, Dick's Sporting Goods"
      }
    },
    {
      id: 2,
      content: "It was an honor working on the same team with Scott. He is very knowledgeable and a quick study. Scott is the type of team member who would figure out how to accomplish something and in his excitement would show how he was able to accomplish it. He would share some of the wealth of his knowledge. In this day and age that is a rare quality. Scott is an excellent Software Engineer",
      author: {
        name: 'Jonathon Ireland',
        designation: 'Software Engineer'
      }
    },
    {
      id: 3,
      content: "I've worked with a lot of great web designers and marketing professionals. Scott stands out among them as a gifted young man. He has a keen ability to connect with the people he works with and quickly understand goals and preferences. He knows what it takes to make a website successful, marrying beautiful design with flawless back-end code. If you want a website that attracts your ideal clients and customers, and a web designer/developer that is as skillful as he is a pleasure to work with, Scott’s your guy. ",
      author: {
        name: 'Mary Parcell',
        designation: 'Previous Manager'
      }
    },
    {
      id: 4,
      content: "Scott is an individual of high character who I am proud to be associated with. He demonstrates commitment, attention to detail, and integrity. I am confident in his ability to add value to any project or endeavor.",
      author: {
        name: 'James J. Stamatelos',
        designation: 'Professional Coach and Author'
      }
    }
  ],
  skills: [
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Angular",
      value: 80
    },
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3 / SCSS",
      value: 90
    },
    {
      title: "Javascript",
      value: 85
    },
    {
      title: "TypeScript",
      value: 85
    },
    {
      title: "Redux / NGRX",
      value: 80
    },
    {
      title: "RXJS",
      value: 80
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Public Lands Header",
      subtitle: "React, Redux, Typescript, SCSS, HTML5",
      text: "Completely responsive header, styled with internally built design system. This header is used on the Dick's Sporting Goods and Golf Galaxy sites as well.",
      imageUrl: "/images/pl-header-thumb.png",
      largeImageUrl: ["/images/HeaderPL.png"],
      url: 'https://www.publiclands.com/'
    },
    {
      id: 2,
      title: "Alternative In Stock",
      subtitle: "Angular, Typescript, RXJS, SCSS, HTML5",
      text: "If a customer clicks on a size that is not available, this displays alternative shoes in their size.",
      imageUrl: "/images/AltInStockDSG.png",
      largeImageUrl: [ "/images/AltInStockDSG.png"],
      url: 'https://www.dickssportinggoods.com/p/nike-mens-air-force-1-07-shoes-16nikmrfrc1grywhtlfs/16nikmrfrc1grywhtlfs'
    },
    {
      id: 3,
      title: "Public Lands Footer",
      subtitle: "React, Redux, SCSS, Typscript, HTML5",
      text: "Custom built, fully responsive footer using a internal design system.",
      imageUrl: "/images/FooterPL.png",
      largeImageUrl: [ "/images/FooterPL.png"],
      url: 'https://www.publiclands.com/'
    },
    {
      id: 4,
      title: "Sports Matter (Mentoring and Leading)",
      subtitle: "React, Angular, RXJS, SCSS, Typscript, HTML5",
      text: "this was a summer intern project where I helped guide and mentor and teach front end to two amazing interns.",
      imageUrl: "/images/SportsMatter.png",
      largeImageUrl: ["/images/SportsMatter.png"],
      url: 'https://www.sportsmatter.org/'
    },
    {
      id: 12,
      title: "Core Building Of New Product List Page (Training, Guiding)",
      subtitle: "Angular, NGRX, SCSS, Typescript, HTML5",
      text: "Built in a custom and new global state store with NRGX. I set the foundation for developers to come in and build on top of.",
      imageUrl: "/images/newPLP.png",
      url: 'https://www.vrst.com/f/vrst-commute-collection?pageNumber=0'
    },
    {
      id: 6,
      title: "Internal Product Collection Building App ",
      subtitle: "React, Redux, RTKQuery, MaterialUI, Typescript, SCSS, HTML5",
      text: "Completely custom built app that helps stakeholders build custom product listing pages, example shown in above image.",
      imageUrl: "/images/PLP.png",
      largeImageUrl: ["/images/PLP.png"]
    },
    {
      id: 7,
      title: "Dynamic Content Rendering Section",
      subtitle: "Angular, Typescript, RXJS, SCSS, HTML5, Jest",
      text: "completely dynamic code that renders marketing content set by a internal CMS. can render 1-4 spots with the same code.",
      imageUrl: "/images/story1-thumb.png",
      largeImageUrl: ["/images/Story1.png", "/images/Story2.png"],
      url: 'https://www.calia.com/'
    },
    {
      id: 8,
      title: "Internal Design System (Core Contributor)",
      subtitle: "React, NRWL, Angular, SCSS, HTML5, Typescript, Storybook",
      text: "Completely custom internal design system that was built to handle spacing, palette colors, typography, icons, and components.",
      imageUrl: "/images/dsImg.jpeg"
    },
    {
      id: 9,
      title: "Search As You Type Display Panel",
      subtitle: "React, Redux, Typescript, HTML5, SCSS",
      text: "When a user lands on the site and types in to the search bar, it renders out this custom display panel.",
      imageUrl: "/images/sayt-thumb.png",
      largeImageUrl: ["/images/saytD.png", "/images/saytM.png"]
    },
    {
      id: 10,
      title: "Custom Icon Library Builder",
      subtitle: "Angular, Typescript, SCSS, HTML5",
      text: "Utilizing a npm package, I was able to render and build out a custom icon library for all our ecomm. apps. Allowing us to no longer need Material UI.",
      imageUrl: "/images/iconLIb.jpeg"
    },
    {
      id: 11,
      title: "VRST Header",
      subtitle: "React, Redux, SCSS, Typescript, HTML5",
      imageUrl: "/images/vrst.png",
      largeImageUrl: ["/images/vrst.png"],
      url: 'https://www.vrst.com/'
    },
    {
      id: 12,
      title: "Pre Search As You Type",
      subtitle: "React, Redux, SCSS, Typescript, HTML5",
      text: "Before users type anything in the search bar, this panel drops displaying top searches, recommendations, and recently searched.",
      imageUrl: "/images/preSaytD.png",
      largeImageUrl: ["/images/preSaytD.png", "/images/preSaytM.png"]
    },
    {
      id: 13,
      title: "Top Recommendations",
      subtitle: "Angular, Typescript, RXJS, SCSS, HTML5",
      text:"dynamic, responsive, scrollable section to display custom recommendations to customers.",
      imageUrl: "/images/TopRecs.png",
      largeImageUrl: ["/images/TopRecs.png"],
      url: 'https://www.golfgalaxy.com/'
    },
    {
      id: 14,
      title: "Attribution Logic Rewrite",
      subtitle: "Angular, NGRX, Typescript, RXJS, SCSS, HTML5",
      text: "complete rewrite of very complex logic to make code easier to read, work with and more performant.",
      imageUrl: "/images/attrRewrite.png",
      largeImageUrl: ["/images/attrRewrite.png"],
      url: "https://www.vrst.com/p/vrst-mens-limitless-4-way-stretch-5-pocket-skinny-fit-pant-21krmmcmmtr5pcktsmpd/21krmmcmmtr5pcktsmpd?color=Darker%20Ardosia%20Slate"
    },
    {
      id: 15,
      title: "Cypress E2E Testing (Training, Leading)",
      subtitle: "React, Javascript, Cypress",
      text: "set the foundation and trained other engineers to have comprehensive end to end testing on our header and footer application.",
      imageUrl: "/images/cypress.png"
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Frontend Web Developer",
        company: "Abc Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Frontend Web Developer",
        company: "CBA Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2014 - 1016",
        position: "UI/UX Designer",
        company: "Example Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2018 - 2019",
        graduation: "Master of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        graduation: "Bachelor of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2015 - 2016",
        graduation: "Higher Schoold Graduation",
        university: "Abc College",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ]
  },
  contactInfo: {
    phoneNumbers: ['610-295-3062'],
    emailAddress: ['Enslin21@yahoo.com'],
    address: "Pittsburgh, PA"
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
  const response = database.recommendations;
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

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});