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
      title: "Neofone",
      description:
        "Neofone is Albania's VoIP provider, delivering seamless, high-quality communication solutions that keep you in touch with the loved ones, anywhere in the world.",
    },
    routes: {
      home: pages.home.title,
      about: pages.about.title,
      contact: pages.contact.title,
      insights: pages.insights.title,
      "privacy-policy": pages["privacy-policy"].title,
      "terms-of-use": pages["terms-of-use"].title,
      "cookies-policy": pages["cookies-policy"].title,
    },
    // filters: {
    //   checkbox: {
    //     search: "Name…",
    //     empty: "Nothing found",
    //   },
    // },
    // form: {
    //   select: {
    //     placeholder: "Select",
    //   },
    // },
  },
  pages: {
    home: {},
    contact: {
      meta: {
        title: "Contact form | Neofone",
        description:
          "Reach out to our communications experts for personalized support or inquiries. We’re ready to help you stay connected across the Balkans and beyond.",
      },
      title: "Contact form",
      description:
        "Reach out to our communications experts for personalized support or inquiries. We’re ready to help you stay connected across the Balkans and beyond.",
      form: {
        title: "Fill in the form",
        name: {
          label: "Name",
          placeholder: "Enter your name",
        },
        surname: {
          label: "Surname",
          placeholder: "Enter your surname",
        },
        сountry: {
          label: "Country",
          placeholder: "Enter country",
        },
        phone: {
          label: "Phone",
          placeholder: "Enter phone number",
        },
        email: {
          label: "Email",
        },
        solution: {
          label: "Related solution",
          placeholder: "Select solution (optional)",
        },
        message: {
          label: "Message",
          placeholder: "Write your message",
        },
        footer: {
          description: {
            text: "By submitting this form, you are agreeing to let us keep in touch regarding our satellite services. We respect your data privacy and will only use your information as outlined in our",
            link: pages["privacy-policy"].title,
          },
          button: "Submit the form",
        },
        congratulation: {
          title: "The form was submitted!",
          description:
            "The form has been successfully sent to Neofone,<br />and our team will contact you within <span>1 business day</span>.",
          button: "Go to main page",
        },
        toast: {
          success:
            "You have successfully <span>subscribed</span> to newsletter",
        },
      },
      banner: {
        title: "Unlimited. Connection.",
      },
      faq: {
        title: "FAQs",
      },
      sales: {
        title: "International carrier\n**via TDM and IP Voice**",
        description:
          "Have questions? Our support team is here to help with any issues. Get in touch with us anytime and experience seamless communication with the Neofone Support team.",
        actions: {
          call: "Call Sales",
        },
        tags: ["IP Voice"],
      },
    },
    insights: {
      meta: {
        title: "Publications | Neofone",
        description:
          "Stay up to date with the latest news, announcements, and insights from Neofone. Explore our recent publications to learn more about our innovations, solitions, and industry developments.",
      },
      publications: {
        title: "Publications",
        description:
          "Stay up to date with the latest news, announcements, and insights from Neofone. Explore our recent publications to learn more about our **innovations, solitions**, and **industry developments**.",
        grid: {
          empty: {
            title: "Nothing found",
            description:
              "No results were found for your search parameters. Adjust your search criteria or browse all publications.",
            action: "All publications",
          },
        },
        filters: {
          type: "Type",
          date: "Publication Date",
          solution: "Solution",
          "date-options": {
            today: "Today",
            week: "This week",
            month: "This month",
            year: "This year",
          },
        },
        featured: {
          tag: "Featured",
          action: "Read more",
          footer: [
            "Stay connected",
            "To get in touch with the firm, please fill in this",
            "form",
          ],
        },
      },
    },
  },
  layouts: {
    root: {
      feedback: {
        title: "Feedback",
      },
      topline: {
        promotion: {
          title:
            "High-quality communication solutions to keep you in touch, anywhere in Albania.",
          action: "Discover solutions",
        },
        personal: "Personal",
        commercial: "Commercial",
        talk: "Talk to sales",
        meeting: "Book a meeting",
      },
      header: {
        about: pages.about.title,
        insights: pages.insights.title,
        contact: pages.contact.title,
        support: "Support",
      },
      footer: {
        promo: {
          title: "Connectivity without borders - with Neofone",
          description:
            "Neofone is Albania’s VoIP provider, delivering seamless, high-quality communication solutions that keep you in touch with the loved ones, anywhere in the world.",
        },
        menu: {
          about: {
            title: "About us",
            items: {
              about: pages.about.title,
              contact: pages.contact.title,
              insights: pages.insights.title,
            },
          },
          industries: {
            title: "Industries",
          },
          practices: {
            title: "Practices",
          },
        },
        "bottom-line": {
          copyright: "Neofone Albania, All rights reserved",
          "privacy-policy": pages["privacy-policy"].title,
          "cookies-policy": pages["cookies-policy"].title,
          "terms-of-use": pages["terms-of-use"].title,
          "exclusively-designed": "Exclusively designed by",
        },
      },
    },
    overfay: {
      footer: {
        "get-touch": "Get in touch",
        "customer-support": "Customer Support",
      },
    },
    single: {
      actions: {
        share: "Share",
        print: "Print",
        contact: "Contact sales",
      },
      aside: {
        contents: "Contents",
        posted: "Posted on",
        in: "in",
      },
    },
  },
  overlays: {
    about: {
      tag: "About us",
      title: "Telecom and VoIP solutions\n**in Albania**",
      items: [
        "Modern VoIP solutions",
        "Professional support team",
        "Clear, competitive pricing",
      ],
      action: "About us",
    },
    solutions: {
      tag: "Card",
      title: "Unlimited\nphone calls with\n**Neofone Card**",
      items: [
        "No hidden fees",
        "Vodafone and AMC customers",
        "Can be used only in Albania",
      ],
      action: "Get Néofone Card",
    },
  },
  banners: {
    mission: {
      title: "Hello, we are\n**Neofone Albania**",
      description:
        "We are committed to pioneering the fusion of advanced technology with unwavering customer support and seamless and reliable communication",
      actions: ["Our Mission", "About Us"],
      tag: "Our mission",
    },
    support: {
      title: "Seamless support -\n**whenever you need it**",
      description:
        "Have questions? Our support team is here to help you with any issues. Get in touch with us anytime and experience seamless communication with the Neofone Support team.",
      actions: ["Contact Customer Support", "Help Center"],
      tag: "Support",
    },
  },
  sections: {
    purchasing: {
      tag: "Purchasing",
      description: [
        "Let us help you",
        "choose a solution that meets your needs",
      ],
      action: "Call Sales",
    },
    help: {
      questions: {
        title: "Have questions? Contact support",
        description:
          "Whether you have technical questions or require guidance on services, we’re just a call away. Get in touch with us for fast and reliable support.",
        action: "Contact Néofone",
      },
      contact: pages["contact"].title,
    },
  },
};

export default message;

export type Messages = typeof message;
