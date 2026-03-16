const pages = {
  home: {
    title: "Home",
  },
  about: {
    title: "About us",
  },
  contact: {
    title: "Contact us",
  },
  insights: {
    title: "Insights",
  },
  "baltics-desk": {
    title: "Baltics desk",
  },
  "privacy-policy": {
    title: "Privacy policy",
  },
  "cookies-policy": {
    title: "Cookies policy",
  },
  "terms-of-use": {
    title: "Terms of use",
  },
};

const message = {
  common: {
    meta: {
      title: "Bimaris",
      description:
        "Bimaris helps individuals and families navigate the Ukrainian immigration process with clarity, confidence, and expert legal support.",
    },
    routes: {
      home: pages.home.title,
      about: pages.about.title,
      contact: pages.contact.title,
      insights: pages.insights.title,
      "privacy-policy": pages["privacy-policy"].title,
      "terms-of-use": pages["terms-of-use"].title,
      "cookies-policy": pages["cookies-policy"].title,
      "baltics-desk": pages["baltics-desk"].title,
    },
  },
  pages: {
    home: {
      meta: {
        title: "Home | Bimaris",
        description:
          "Bimaris helps individuals and families navigate the Ukrainian immigration process with clarity, confidence, and expert legal support.",
      },
      role: {
        title: "Choose your role",
        description:
          "Founded by professional lawyers and immigration experts, Bimaris provides structured, reliable immigration legal support for individuals and businesses.",
        action: "All services",
      },
    },
    contact: {
      meta: {
        title: "Contact form | Bimaris",
        description:
          "Reach out to our communications experts for personalized support or inquiries. We’re ready to help you stay connected across the Balkans and beyond.",
      },
      offices: {
        title: "Find our office",
        description:
          "Our offices in Ukraine and Estonia ensure accessible, on-the-ground legal support for individuals and businesses.",
      },
      header: {
        title: "Connect with",
        description:
          "Share a few details about your situation, and our team will get back to you with clear next steps.",
        subtitle: "Explore",
        tag: "Connect",
        actions: "Book a meeting in Calendly",
        items: {
          map: "Show on the map",
        },
        footer: {
          description:
            "Personalized immigration legal support for people and companies.",
          action: "Read more",
        },
      },
    },
  },
  layouts: {
    root: {
      topline: {
        description: "Innovative immigration legal consultancy.",
        action: "Explore company",
        menu: {
          "baltics-desk": pages["baltics-desk"].title,
          schedule: "Schedule a meeting",
          offices: "Offices",
        },
      },
      header: {
        businesses: "Businesses",
        "private-clients": "Private clients",
        investors: "Investors",
        about: pages.about.title,
        "case-studies": "Case studies",
        insights: pages.insights.title,
        contact: pages.contact.title,
        "log-in": "Log in",
        trigger: {
          menu: "Menu",
        },
      },
      footer: {
        title: "Immigration, with clarity",
        description:
          "Personalized immigration legal support for individuals - handled with clarity, care, and precision.",
        action: pages.contact.title,
        menu: {
          company: {
            title: "Company",
            items: {
              about: pages.about.title,
              newsroom: "Newsroom",
              capabilities: "Capabilities",
              contact: pages.contact.title,
              people: "People",
            },
          },
          businesses: {
            title: "Businesses",
            items: {
              companyFormation: "Company formation in Ukraine",
              businessImmigration: "Business immigration to Ukraine",
              corporateImmigration: "Corporate immigration to Ukraine",
              representativeOffice: "Registration representative office",
            },
          },
          individuals: {
            title: "Individuals",
            items: {
              crypto: "Crypto",
              marketing: "Marketing and advertising",
              consumerGoods: "Consumer goods",
              talentSolutions: "Talent solutions",
              healthcare: "Healthcare",
              finance: "Finance",
              legal: "Legal",
            },
          },
          investors: {
            title: "Investors",
            items: {
              talentSolutions: "Talent solutions",
              healthcare: "Healthcare",
              finance: "Finance",
              legal: "Legal",
            },
          },
        },
        info: {
          address: "Ukraine, 01033, Kyiv Zhylianska 68, office 167",
          subscribe: "Subscribe",
        },
        "bottom-line": {
          copyright: "© 2026 Bimaris Legal. All Rights Reserved",
          "privacy-policy": pages["privacy-policy"].title,
          "cookies-policy": pages["cookies-policy"].title,
          "exclusively-designed": "Exclusively designed by",
        },
      },
    },
    page: {
      solutions: {
        individuals: {
          title: "Solutions for individuals",
          description:
            "Personalized immigration support for individual needs, long-term goals, and personal circumstances.",
          action: "Explore solutions",
        },
        businesses: {
          title: "Solutions for businesses",
          description:
            "Strategic immigration support for business needs, long-term goals, and corporate circumstances.",
          action: "Explore solutions",
        },
        investors: {
          title: "Solutions for investors",
          description:
            "We support investors entering the Ukrainian market with structured legal guidance.",
          action: "Explore solutions",
        },
      },
    },
  },
  overlays: {},
  sections: {
    experts: {
      header: {
        title: "Our experts",
        description:
          "Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach andlong-term legal support.",
      },
    },
    contact: {
      header: {
        title: "Contact us",
        description:
          "Reach out to our communications experts for personalized support or inquiries. We’re ready to help you stay connected across the Balkans and beyond.",
      },
      banner: {
        title: "Start the conversation",
        description:
          "Share a few details about your situation, and our team will review your request and get back to you with clear next steps.",
        list: {
          map: "Show on the map",
        },
        action: "Schedule a meeting",
      },
      offices: {
        tag: {
          main: "Main office",
          back: "Back office",
        },
        action: "Show on map",
      },
      form: {
        tag: "Fill in the form",
        name: {
          label: "Name",
        },
        surname: {
          label: "Surname",
        },
        company: {
          label: "Company",
        },
        country: {
          label: "Country of origin",
        },
        email: {
          label: "Business email",
        },
        phone: {
          label: "Phone number",
        },
        message: {
          label: "Message",
          placeholder: "Please, add more details...",
        },
        consent:
          "I agree to receive occasional updates, insights, and relevant information from Bimaris.",
        action: "Send",
        footer: {
          description: {
            part1: "By clicking send, you confirm that you’ve read the",
            part2:
              "and consent to the processing of your personal data for the purposes described in the statement.",
          },
          link: pages["privacy-policy"].title,
        },
      },
    },
    updates: {
      header: {
        title: "Legal alerts and updates",
        description:
          "Stay informed about key immigration law changes, policy updates, and regulatory developments affecting individuals moving in Ukraine.",
        action: "Newsroom",
      },
    },
    "case-studies": {
      header: {
        title: "Case studies",
        description:
          "Explore our selected examples of immigration cases handled for individuals and businesses, demonstrating our structured approach and long-term legal support.",
        action: "View all",
      },
    },
    roles: {
      individuals: {
        title: "Individuals",
        description:
          "We help individuals navigate the Ukrainian immigration process with confidence, clarity, and professional legal support.",
        list: {
          item1: "Personalized support",
          item2: "Attorney-led solutions",
          item3: "Automated workflow",
        },
      },
      businesses: {
        title: "Businesses",
        description:
          "We empower businesses to build borderless teams, access the worlds talent, and create an employee experience that redefines global work.",
        list: {
          item1: "Personalized support",
          item2: "Attorney-led solutions",
          item3: "Best for IT professionals",
        },
      },
      investors: {
        title: "Investors and market entry",
        description:
          "We support international investors entering the Ukrainian market with structured legal guidance, regulatory clarity, and risk-aware immigration solutions. From initial market entry planning to long-term presence, our team helps navigate legal frameworks and compliance requirements.",
        list: {
          item1: "Strategic market entry support",
          item2: "Regulatory and compliance guidance",
          item3: "Long-term presence and operational continuity",
        },
      },
      action: "Open services",
    },
  },
  ui: {
    rating: {
      action: "Explore all reviews",
      on: "on",
    },
    support: {
      description:
        "Personalized immigration legal support for people and companies.",
      action: "Read more",
      contact: "Contact us",
      haveQuestions: "Have questions. ",
    },
  },
  cards: {
    office: {
      action: "Show on map",
      tag: {
        main: "Main office",
        back: "Back office",
      },
    },
    people: {
      action: "Read more",
    },
    publication: {
      caseStudy: "Case study",
      action: "Read more",
    },
    case: {
      action: "Explore",
    },
  },
};

export default message;

export type Messages = typeof message;
