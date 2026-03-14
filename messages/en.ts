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
    home: {
      meta: {
        title: "Home | Bimaris",
        description:
          "Bimaris helps individuals and families navigate the Ukrainian immigration process with clarity, confidence, and expert legal support.",
      },
    },
    contact: {
      meta: {
        title: "Contact form | Bimaris",
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
      topline: {},
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
        main: {
          tag: "Main office",
          items: {
            address1: "Ukraine, 01033, Kyiv",
            address2: "Zhylianska 68, office 167",
          },
        },
        back: {
          tag: "Back office",
          items: {
            address1: "Estonia, 10149, Tallinn ",
            address2: "4 Saani tn 2/2-26, Põhja-Tallinna",
          },
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
  },
};

export default message;

export type Messages = typeof message;
