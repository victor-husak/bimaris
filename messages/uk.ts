const pages = {
  home: {
    title: "Kryefaqja",
  },
  about: {
    title: "Rreth nesh",
  },
  contact: {
    title: "Na kontaktoni",
  },
  insights: {
    title: "Njohuri",
  },
  "privacy-policy": {
    title: "Politika e privatësisë",
  },
  "cookies-policy": {
    title: "Politika e cookies",
  },
  "terms-of-use": {
    title: "Kushtet e përdorimit",
  },
};

const message = {
  common: {
    meta: {
      title: "Neofone",
      description:
        "Neofone është ofruesi i shërbimeve VoIP në Shqipëri, duke ofruar zgjidhje komunikimi pa ndërprerje dhe me cilësi të lartë që ju mbajnë në kontakt me të dashurit, kudo në botë.",
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
    filters: {
      checkbox: {
        search: "Emri…",
        empty: "Asgjë nuk u gjet",
      },
    },
    form: {
      select: {
        placeholder: "Zgjidh",
      },
    },
  },

  pages: {
    home: {},
    contact: {
      meta: {
        title: "Forma e Kontaktit | Neofone",
        description:
          "Krejoni kontakt me ekspertët tanë të komunikimeve për mbështetje të personalizuar ose pyetje. Ne jemi gati t'ju ndihmojmë të qëndroni të lidhur nëpër Ballkan dhe më gjerë.",
      },
      title: "Forma e Kontaktit",
      description:
        "Krejoni kontakt me ekspertët tanë të komunikimeve për mbështetje të personalizuar ose pyetje. Ne jemi gati t'ju ndihmojmë të qëndroni të lidhur nëpër Ballkan dhe më gjerë.",
      form: {
        title: "Plotësoni formularin",
        name: {
          label: "Emri",
          placeholder: "Shkruani emrin tuaj",
        },
        surname: {
          label: "Mbiemri",
          placeholder: "Shkruani mbiemrin tuaj",
        },
        сountry: {
          label: "Vendi",
          placeholder: "Shkruani vendin",
        },
        phone: {
          label: "Telefon",
          placeholder: "Shkruani numrin e telefonit",
        },
        email: {
          label: "Email",
        },
        solution: {
          label: "Zgjidhja e lidhur",
          placeholder: "Zgjidhni zgjidhjen (opsionale)",
        },
        message: {
          label: "Mesazhi",
          placeholder: "Shkruani mesazhin tuaj",
        },
        footer: {
          description: {
            text: "Duke dërguar këtë formular, po pajtoheni që ne të mbetemi në kontakt në lidhje me shërbimet tona satelitore. Ne respektojmë privatësinë tuaj të të dhënave dhe do ta përdorim informacionin tuaj vetëm siç është përshkruar në",
            link: pages["privacy-policy"].title,
          },
          button: "Dërgo formularin",
        },
        congratulation: {
          title: "Formulari u dorëzua!",
          description:
            "Formulari është dërguar me sukses në Neofone,<br />dhe ekipi ynë do të kontaktojë me ju brenda <span>1 dite pune</span>.",
          button: "Kthehu në faqen kryesore",
        },
        toast: {
          success: "Ju keni abonuar me sukses në <span>newsletter</span>",
        },
      },
      banner: {
        title: "I pafund. Lidhje.",
      },
      faq: {
        title: "Pyetje të Shpeshta",
      },
      sales: {
        title:
          "Kompania ndërkombëtare e transportit **përmes TDM dhe IP Voice**",
        description:
          "Keni pyetje? Ekipa jonë e mbështetjes është këtu për t'ju ndihmuar me çdo problem. Krijoni kontakt me ne në çdo kohë dhe përjetoni komunikim pa ndërprerje me ekipin e Mbështetjes së Neofone.",
        actions: {
          call: "Thirrni Shitjet",
        },
        tags: ["IP Voice"],
      },
    },
    insights: {
      meta: {
        title: "Publikime | Neofone",
        description:
          "Qëndroni të informuar me lajmet, njoftimet dhe njohuritë më të fundit nga Neofone. Eksploroni publikimet tona të fundit për të mësuar më shumë rreth risive, zgjidhjeve dhe zhvillimeve në industri.",
      },
      publications: {
        title: "Botime",
        description:
          "Qëndroni të përditësuar me lajmet më të fundit, njoftimet dhe njohuritë nga Neofone. Eksploroni botimet tona të fundit për të mësuar më shumë rreth **inovacioneve, zgjidhjeve**, dhe **zhvillimeve në industrinë**.",
        grid: {
          empty: {
            title: "Nuk u gjet asgjë",
            description:
              "Nuk u gjetën rezultate për parametrat tuaj të kërkimit. Rregulloni kriteret e kërkimit ose shfletoni të gjitha botimet.",
            action: "Të gjitha botimet",
          },
        },
        filters: {
          type: "Lloji",
          date: "Data e Botimit",
          solution: "Zgjidhja",
        },
        featured: {
          tag: "I veçuar",
          action: "Lexoni më shumë",
          footer: [
            "Qëndroni të lidhur",
            "Për t'u lidhur me firmën, ju lutemi plotësoni këtë",
            "formular",
          ],
        },
      },
    },
  },
  layouts: {
    root: {
      feedback: {
        title: "Përgjigje",
      },
      topline: {
        promotion: {
          title:
            "Zgjidhje komunikimi me cilësi të lartë për t’ju mbajtur në kontakt, kudo në Shqipëri.",
          action: "Zbuloni zgjidhjet",
        },
        personal: "Personal",
        commercial: "Komercial",
        talk: "Flisni me shitjet",
        meeting: "Rezervoni një takim",
      },
      header: {
        about: pages.about.title,
        insights: pages.insights.title,
        contact: pages.contact.title,
        support: "Mbështetje",
      },
      footer: {
        promo: {
          title: "Lidhje pa kufij - me Neofone",
          description:
            "Neofone është ofruesi i VoIP në Shqipëri, duke ofruar zgjidhje të përshtatshme dhe të cilësisë së lartë që ju mbajnë të lidhur me të dashurit tuaj, kudo në botë.",
        },
        menu: {
          about: {
            title: "Për ne",
            items: {
              about: pages.about.title,
              contact: pages.contact.title,
              insights: pages.insights.title,
            },
          },
          industries: {
            title: "Industria",
          },
          practices: {
            title: "Praktika",
          },
        },
        "bottom-line": {
          copyright: "Neofone Albania, Të drejtat e rezervuara",
          "privacy-policy": pages["privacy-policy"].title,
          "cookies-policy": pages["cookies-policy"].title,
          "terms-of-use": pages["terms-of-use"].title,
          "exclusively-designed": "Projektuar ekskluzivisht nga",
        },
      },
    },
    overfay: {
      footer: {
        "get-touch": "Kontakto me ne",
        "customer-support": "Mbështetje për klientët",
      },
    },
    single: {
      actions: {
        share: "Ndaje",
        print: "Printo",
        contact: "Kontakto shitjet",
      },
      aside: {
        contents: "Përmbajtja",
        posted: "Publikuar më",
        in: "në",
      },
    },
  },
  overlays: {
    about: {
      tag: "Për ne",
      title: "Zgjidhje Telekomunikacioni dhe VoIP **në Shqipëri**",
      items: [
        "Zgjidhje moderne VoIP",
        "Ekip mbështetje profesionist",
        "Çmime të qarta dhe konkurruese",
      ],
      action: "Për ne",
    },
    solutions: {
      tag: "Kartë",
      title: "Telefonata të pakufizuara me **Neofone Card**",
      items: [
        "Nuk ka komisione të fshehura",
        "Për klientët Vodafone dhe AMC",
        "Përdoret vetëm në Shqipëri",
      ],
      action: "Merr Néofone Card",
    },
  },
  banners: {
    mission: {
      title: "Përshëndetje, ne jemi\n**Neofone Albania**",
      description:
        "Ne jemi të angazhuar për të pionieruar bashkimin e teknologjisë së avancuar me mbështetje të palëkundur për klientët dhe komunikim pa ndërprerje dhe të besueshëm.",
      actions: ["Misioni ynë", "Rreth Nesh"],
      tag: "Misioni ynë",
    },
    support: {
      title: "Mbështetje pa ndërprerje **kurdo që ta keni nevojë**",
      description:
        "Keni pyetje? Ekipa jonë e mbështetjes është këtu për t'ju ndihmuar me çdo problem. Krijoni kontakt me ne në çdo kohë dhe përjetoni komunikim pa ndërprerje me ekipin e Mbështetjes së Neofone.",
      actions: ["Kontaktoni Mbështetje për Klientët", "Qendra e Ndihmës"],
      tag: "Mbështetje",
    },
  },
  sections: {
    purchasing: {
      tag: "Blerja",
      description: [
        "Lejoni që të ndihmojmë",
        "të zgjidhni një zgjidhje që plotëson nevojat tuaja",
      ],
      action: "Thirrni Shitjet",
    },
    help: {
      questions: {
        title: "Keni pyetje? Kontaktoni mbështetjen",
        description:
          "Qoftë se keni pyetje teknike apo keni nevojë për udhëzime mbi shërbimet tona, jemi vetëm një telefonatë larg. Na kontaktoni për ndihmë të shpejtë dhe të besueshme.",
        action: "Kontakto Néofone",
      },
      contact: pages["contact"].title,
    },
  },
};

export default message;

export type Messages = typeof message;
