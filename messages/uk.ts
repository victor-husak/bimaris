const pages = {
  home: {
    title: "Головна",
  },
  about: {
    title: "Про нас",
  },
  contact: {
    title: "Зв’язатися з нами",
  },
  insights: {
    title: "Інсайти",
  },
  "baltics-desk": {
    title: "Балтійський напрямок",
  },
  "privacy-policy": {
    title: "Політика конфіденційності",
  },
  "cookies-policy": {
    title: "Політика файлів cookie",
  },
  "terms-of-use": {
    title: "Умови використання",
  },
};

const message = {
  common: {
    meta: {
      title: "Bimaris",
      description:
        "Bimaris допомагає людям та сім’ям проходити імміграційний процес в Україні з ясністю, впевненістю та професійною юридичною підтримкою.",
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
        title: "Головна | Bimaris",
        description:
          "Bimaris допомагає людям та сім’ям проходити імміграційний процес в Україні з ясністю, впевненістю та професійною юридичною підтримкою.",
      },
    },
    contact: {
      meta: {
        title: "Контактна форма | Bimaris",
        description:
          "Зверніться до наших експертів з комунікацій для отримання персоналізованої підтримки або консультацій. Ми готові допомогти вам залишатися на зв’язку на Балканах та за їх межами.",
      },
      offices: {
        title: "Знайдіть наші офіси",
        description:
          "Наші офіси в Україні та Естонії забезпечують доступну юридичну поддержку на місці для людей та бізнесу.",
      },
      header: {
        title: "Зв’яжіться з",
        description:
          "Поділіться кількома деталями про вашу ситуацію, і наша команда зв’яжеться з вами з чіткими подальшими кроками.",
        subtitle: "Досліджуйте",
        tag: "Зв’язок",
        actions: "Забронювати зустріч у Calendly",
        items: {
          map: "Показати на мапі",
        },
        footer: {
          description:
            "Персоналізована юридична підтримка з імміграційних питань для людей та компаній.",
          action: "Детальніше",
        },
      },
    },
  },
  layouts: {
    root: {
      topline: {},
      header: {
        businesses: "Бізнесу",
        "private-clients": "Приватним клієнтам",
        investors: "Інвесторам",
        about: pages.about.title,
        "case-studies": "Кейси",
        insights: pages.insights.title,
        contact: pages.contact.title,
        "log-in": "Увійти",
        trigger: {
          menu: "Меню",
        },
      },
      footer: {
        title: "Імміграція — з ясністю",
        description:
          "Персоналізована юридична підтримка з імміграції для приватних осіб — з ясністю, турботою та точністю.",
        action: pages.contact.title,
        menu: {
          company: {
            title: "Компанія",
            items: {
              about: pages.about.title,
              newsroom: "Новини",
              capabilities: "Можливості",
              contact: pages.contact.title,
              people: "Команда",
            },
          },
          businesses: {
            title: "Бізнесу",
            items: {
              companyFormation: "Реєстрація компанії в Україні",
              businessImmigration: "Бізнес-імміграція до України",
              corporateImmigration: "Корпоративна імміграція до України",
              representativeOffice: "Реєстрація представництва",
            },
          },
          individuals: {
            title: "Приватним особам",
            items: {
              crypto: "Крипто",
              marketing: "Маркетинг та реклама",
              consumerGoods: "Споживчі товари",
              talentSolutions: "Рішення для талантів",
              healthcare: "Охорона здоров’я",
              finance: "Фінанси",
              legal: "Юридичні послуги",
            },
          },
          investors: {
            title: "Інвесторам",
            items: {
              talentSolutions: "Рішення для талантів",
              healthcare: "Охорона здоров’я",
              finance: "Фінанси",
              legal: "Юридичні послуги",
            },
          },
        },
        info: {
          address: "Україна, 01033, Київ, вул. Жилянська 68, офіс 167",
          subscribe: "Підписатися",
        },
        "bottom-line": {
          copyright: "© 2026 Bimaris Legal. Усі права захищені",
          "privacy-policy": pages["privacy-policy"].title,
          "cookies-policy": pages["cookies-policy"].title,
          "exclusively-designed": "Дизайн розроблено",
        },
      },
    },
  },
  overlays: {},
  sections: {
    experts: {
      header: {
        title: "Наші експерти",
        description:
          "Ознайомтеся з прикладами імміграційних справ, які ми супроводжували для приватних осіб та бізнесу, демонструючи наш структурований підхід і довгострокову юридичну підтримку.",
      },
    },
    contact: {
      header: {
        title: "Зв’яжіться з нами",
        description:
          "Зверніться до наших експертів з комунікацій для отримання персоналізованої підтримки або консультацій. Ми готові допомогти вам залишатися на зв’язку на Балканах та за їх межами.",
      },
      banner: {
        title: "Почнімо розмову",
        description:
          "Поділіться кількома деталями про вашу ситуацію, і наша команда розгляне ваш запит та надасть чіткі наступні кроки.",
        list: {
          map: "Показати на карті",
        },
        action: "Запланувати зустріч",
      },
      offices: {
        tag: {
          main: "Головний офіс",
          back: "Бек-офіс",
        },
        action: "Показати на карті",
      },
      form: {
        tag: "Заповніть форму",
        name: {
          label: "Ім’я",
        },
        surname: {
          label: "Прізвище",
        },
        company: {
          label: "Компанія",
        },
        country: {
          label: "Країна походження",
        },
        email: {
          label: "Корпоративний email",
        },
        phone: {
          label: "Номер телефону",
        },
        message: {
          label: "Повідомлення",
          placeholder: "Будь ласка, додайте більше деталей...",
        },
        consent:
          "Я погоджуюся отримувати періодичні оновлення, аналітику та релевантну інформацію від Bimaris.",
        action: "Надіслати",
        footer: {
          description: {
            part1:
              "Натискаючи «Надіслати», ви підтверджуєте, що ознайомилися з",
            part2:
              "та погоджуєтесь на обробку ваших персональних даних для цілей, описаних у цій заяві.",
          },
          link: pages["privacy-policy"].title,
        },
      },
    },
    updates: {
      header: {
        title: "Юридичні оновлення та повідомлення",
        description:
          "Будьте в курсі ключових змін імміграційного законодавства, оновлень політик та регуляторних змін, що впливають на людей, які переїжджають до України.",
        action: "Новини",
      },
    },
    "case-studies": {
      header: {
        title: "Кейси",
        description:
          "Ознайомтеся з прикладами імміграційних справ, які ми супроводжували для приватних осіб та бізнесу, демонструючи наш структурований підхід і довгострокову юридичну підтримку.",
        action: "Дізнатися більше",
      },
    },
  },
  ui: {
    rating: {
      action: "Переглянути всі відгуки",
      on: "на",
    },
  },
  cards: {
    office: {
      action: "Показати на карті",
      tag: {
        main: "Головний офіс",
        back: "Бек-офіс",
      },
    },
  },
};

export default message;

export type Messages = typeof message;
