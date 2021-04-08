// function hello(title, content, createElementFn) {
//     return /*#__PURE__*/createElementFn("div", null, "Hello world!");
//   }

  function hello(title, content, createElementFn) {
    return /*#__PURE__*/ createElementFn(
      "body",
      null,
      /*#__PURE__*/ createElementFn(
        "header",
        {
          class: "header"
        },
        /*#__PURE__*/ createElementFn(
          "div",
          {
            class: "topheader"
          },
          /*#__PURE__*/ createElementFn(
            "div",
            {
              class: "logo"
            },
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href: "http://tsk-dev-sw-mpilnan.tachyum.sk/"
              },
              /*#__PURE__*/ createElementFn("img", {
                src: "/assets/img/logo.svg",
                alt: "Tachyum"
              })
            )
          ),
          /*#__PURE__*/ createElementFn(
            "div",
            {
              class: "lang"
            },
            /*#__PURE__*/ createElementFn(
              "ul",
              null,
              /*#__PURE__*/ createElementFn(
                "li",
                {
                  class: "active"
                },
                /*#__PURE__*/ createElementFn(
                  "a",
                  {
                    href: ""
                  },
                  "USA"
                )
              ),
              /*#__PURE__*/ createElementFn(
                "li",
                null,
                /*#__PURE__*/ createElementFn(
                  "a",
                  {
                    href: "https://www.tachyum.us/",
                    target: "_blank"
                  },
                  "GOV"
                )
              ),
              /*#__PURE__*/ createElementFn(
                "li",
                null,
                /*#__PURE__*/ createElementFn(
                  "a",
                  {
                    href:
                      "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/eu/index"
                  },
                  "EU"
                )
              ),
              /*#__PURE__*/ createElementFn(
                "li",
                null,
                /*#__PURE__*/ createElementFn(
                  "a",
                  {
                    href:
                      "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/sk/index"
                  },
                  "SK"
                )
              ),
              /*#__PURE__*/ createElementFn(
                "li",
                null,
                /*#__PURE__*/ createElementFn(
                  "a",
                  {
                    href:
                      "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/cn/index"
                  },
                  "CN"
                )
              )
            )
          ),
          /*#__PURE__*/ createElementFn(
            "div",
            {
              class: "globe",
              onclick: "langExpand(this)"
            },
            /*#__PURE__*/ createElementFn("img", {
              src: "/assets/img/earth.png",
              alt: ""
            })
          ),
          /*#__PURE__*/ createElementFn(
            "div",
            {
              id: "hamburger",
              class: "hamburger",
              onclick: "menuExpand(this)"
            },
            /*#__PURE__*/ createElementFn("div", {
              class: "bar1"
            }),
            /*#__PURE__*/ createElementFn("div", {
              class: "bar2"
            }),
            /*#__PURE__*/ createElementFn("div", {
              class: "bar3"
            })
          )
        ),
        /*#__PURE__*/ createElementFn(
          "nav",
          {
            id: "sticker",
            class: "nav"
          },
          /*#__PURE__*/ createElementFn(
            "div",
            {
              class: "menu-container"
            },
            /*#__PURE__*/ createElementFn(
              "div",
              {
                class: "sticky_logo"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                null,
                /*#__PURE__*/ createElementFn(
                  "a",
                  {
                    href:
                      "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/index.shtml"
                  },
                  /*#__PURE__*/ createElementFn("img", {
                    onclick: "langExpand(this)",
                    src: "/assets/img/logo-black.svg",
                    alt: "Tachyum"
                  })
                )
              )
            ),
            /*#__PURE__*/ createElementFn(
              "ul",
              {
                class: "menu"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "border"
                },
                /*#__PURE__*/ createElementFn(
                  "li",
                  {
                    class: "first notlast"
                  },
                  /*#__PURE__*/ createElementFn(
                    "a",
                    {
                      id: "why-tachyum_menu",
                      href:
                        "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/why-tachyum"
                    },
                    /*#__PURE__*/ createElementFn(
                      "span",
                      null,
                      "Why Tachyum",
                      /*#__PURE__*/ createElementFn("span", null)
                    )
                  )
                )
              ),
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "border"
                },
                /*#__PURE__*/ createElementFn(
                  "li",
                  {
                    class: "notlast"
                  },
                  /*#__PURE__*/ createElementFn(
                    "a",
                    {
                      id: "company_menu",
                      class: "notlast",
                      href:
                        "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/company"
                    },
                    /*#__PURE__*/ createElementFn("span", null, "Company")
                  )
                )
              ),
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "border"
                },
                /*#__PURE__*/ createElementFn(
                  "li",
                  {
                    id: "products_menu",
                    class: "notlast"
                  },
                  /*#__PURE__*/ createElementFn(
                    "a",
                    {
                      href:
                        "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/products"
                    },
                    /*#__PURE__*/ createElementFn("span", null, "Products")
                  )
                )
              ),
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "border dropdown-resources"
                },
                /*#__PURE__*/ createElementFn(
                  "li",
                  {
                    class: "notlast"
                  },
                  /*#__PURE__*/ createElementFn(
                    "a",
                    {
                      id: "resources_menu",
                      href: "javascript:void(0);"
                    },
                    /*#__PURE__*/ createElementFn("span", null, "Resources")
                  )
                )
              ),
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "border dropdown"
                },
                /*#__PURE__*/ createElementFn(
                  "li",
                  {
                    class: "notlast"
                  },
                  /*#__PURE__*/ createElementFn(
                    "a",
                    {
                      id: "solutions_menu",
                      class: "dropbtn",
                      href:
                        "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/solutions"
                    },
                    /*#__PURE__*/ createElementFn("span", null, "Solutions")
                  )
                )
              ),
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "border"
                },
                /*#__PURE__*/ createElementFn(
                  "li",
                  {
                    class: "notlast"
                  },
                  /*#__PURE__*/ createElementFn(
                    "a",
                    {
                      id: "jobs_menu",
                      href:
                        "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/jobs"
                    },
                    /*#__PURE__*/ createElementFn("span", null, "Jobs")
                  )
                )
              ),
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "border dropdown1"
                },
                /*#__PURE__*/ createElementFn(
                  "li",
                  {
                    class: "notlast"
                  },
                  /*#__PURE__*/ createElementFn(
                    "a",
                    {
                      id: "media_menu",
                      href: "javascript:void(0);"
                    },
                    /*#__PURE__*/ createElementFn("span", null, "News")
                  )
                )
              ),
              /*#__PURE__*/ createElementFn(
                "span",
                null,
                /*#__PURE__*/ createElementFn(
                  "li",
                  null,
                  /*#__PURE__*/ createElementFn(
                    "a",
                    {
                      id: "contact_menu",
                      href:
                        "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/contact.php"
                    },
                    /*#__PURE__*/ createElementFn("span", null, "Contact")
                  )
                )
              )
            )
          )
        )
      ),
      /*#__PURE__*/ createElementFn(
        "div",
        {
          class: "dropdown dropdown-content"
        },
        /*#__PURE__*/ createElementFn(
          "a",
          {
            href:
              "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/solutions.shtml#hsd"
          },
          "Hyperscale Datacenters"
        ),
        /*#__PURE__*/ createElementFn(
          "a",
          {
            href:
              "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/solutions.shtml#hpc"
          },
          "High-Performance Computing"
        ),
        /*#__PURE__*/ createElementFn(
          "a",
          {
            href:
              "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/solutions.shtml#ai"
          },
          "Artificial Intelligence"
        ),
        /*#__PURE__*/ createElementFn(
          "a",
          {
            href:
              "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/solutions.shtml#pc"
          },
          "Private Cloud"
        ),
        /*#__PURE__*/ createElementFn(
          "a",
          {
            href:
              "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/solutions.shtml#tc"
          },
          "Telecommunications"
        ),
        /*#__PURE__*/ createElementFn(
          "a",
          {
            href:
              "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/solutions.shtml#mi"
          },
          "Military and Intelligence"
        )
      ),
      /*#__PURE__*/ createElementFn(
        "div",
        {
          class: "dropdown-resources dropdown-resources-content",
          style: {display: 'none', left: '756.042px'}
        },
        /*#__PURE__*/ createElementFn(
          "a",
          {
            href:
              "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/presentations"
          },
          "Presentations"
        ),
        /*#__PURE__*/ createElementFn(
          "a",
          {
            href:
              "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/partners"
          },
          "Partners & Associations"
        ),
        /*#__PURE__*/ createElementFn(
          "a",
          {
            href:
              "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/software"
          },
          "Software"
        )
      ),
      /*#__PURE__*/ createElementFn(
        "div",
        {
          class: "dropdown1 dropdown-content1"
        },
        /*#__PURE__*/ createElementFn(
          "a",
          {
            href: "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/events"
          },
          "Events"
        ),
        /*#__PURE__*/ createElementFn(
          "a",
          {
            href:
              "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/tachyum_in_news"
          },
          "Tachyum in the News"
        ),
        /*#__PURE__*/ createElementFn(
          "a",
          {
            href:
              "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/press_room"
          },
          "Press Room"
        )
      ),
      /*#__PURE__*/ createElementFn(
        "div",
        {
          id: "mobile-menu",
          class: "mobile-nav"
        },
        /*#__PURE__*/ createElementFn(
          "ul",
          null,
          /*#__PURE__*/ createElementFn(
            "li",
            null,
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href:
                  "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/why-tachyum"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "mobile-nav-text"
                },
                "Why Tachyum"
              )
            )
          ),
          /*#__PURE__*/ createElementFn(
            "li",
            null,
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href:
                  "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/company"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "mobile-nav-text"
                },
                "Company"
              )
            )
          ),
          /*#__PURE__*/ createElementFn(
            "li",
            null,
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href:
                  "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/products"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "mobile-nav-text"
                },
                "Products"
              )
            )
          ),
          /*#__PURE__*/ createElementFn(
            "li",
            null,
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href: "javascript:void(0);"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "mobile-nav-text"
                },
                "Resources"
              )
            ),
            /*#__PURE__*/ createElementFn("i", {
              class: "fa fa-caret-down fa-caret-down-resources"
            }),
            /*#__PURE__*/ createElementFn(
              "ul",
              {
                id: "mobile-resources"
              },
              /*#__PURE__*/ createElementFn(
                "li",
                null,
                /*#__PURE__*/ createElementFn(
                  "a",
                  {
                    href:
                      "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/presentations"
                  },
                  "Presentations"
                )
              ),
              /*#__PURE__*/ createElementFn(
                "li",
                null,
                /*#__PURE__*/ createElementFn(
                  "a",
                  {
                    href:
                      "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/partners"
                  },
                  "Partners & Associations"
                )
              ),
              /*#__PURE__*/ createElementFn(
                "li",
                null,
                /*#__PURE__*/ createElementFn(
                  "a",
                  {
                    href:
                      "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/software"
                  },
                  "Software"
                )
              )
            )
          ),
          /*#__PURE__*/ createElementFn(
            "li",
            null,
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href:
                  "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/solutions"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "mobile-nav-text"
                },
                "Solutions"
              )
            )
          ),
          /*#__PURE__*/ createElementFn(
            "li",
            null,
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href:
                  "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/jobs"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "mobile-nav-text"
                },
                "Jobs"
              )
            )
          ),
          /*#__PURE__*/ createElementFn(
            "li",
            null,
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href: "javascript:void(0);"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "mobile-nav-text"
                },
                "News"
              )
            ),
            /*#__PURE__*/ createElementFn("i", {
              class: "fa fa-caret-down fa-caret-down2"
            }),
            /*#__PURE__*/ createElementFn(
              "ul",
              {
                id: "mobile2"
              },
              /*#__PURE__*/ createElementFn(
                "li",
                null,
                /*#__PURE__*/ createElementFn(
                  "a",
                  {
                    href:
                      "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/events"
                  },
                  "Events"
                )
              ),
              /*#__PURE__*/ createElementFn(
                "li",
                null,
                /*#__PURE__*/ createElementFn(
                  "a",
                  {
                    href:
                      "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/tachyum_in_news"
                  },
                  "Tachyum in the News"
                )
              ),
              /*#__PURE__*/ createElementFn(
                "li",
                null,
                /*#__PURE__*/ createElementFn(
                  "a",
                  {
                    href:
                      "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/press_room"
                  },
                  "Press Room"
                )
              )
            )
          ),
          /*#__PURE__*/ createElementFn(
            "li",
            null,
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href:
                  "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/contact"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "mobile-nav-text"
                },
                "Contact"
              )
            )
          )
        )
      ),
      /*#__PURE__*/ createElementFn(
        "div",
        {
          id: "mobile-lang",
          class: "mobile-nav"
        },
        /*#__PURE__*/ createElementFn(
          "ul",
          null,
          /*#__PURE__*/ createElementFn(
            "li",
            null,
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href:
                  "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/eu/index"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "mobile-nav-text"
                },
                "European Union"
              )
            )
          ),
          /*#__PURE__*/ createElementFn(
            "li",
            null,
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href:
                  "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/sk/index"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "mobile-nav-text"
                },
                "Slovakia"
              )
            )
          ),
          /*#__PURE__*/ createElementFn(
            "li",
            null,
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href:
                  "http://tsk-dev-sw-mpilnan.tachyum.sk/corporate-website/cn/index"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "mobile-nav-text"
                },
                "China"
              )
            )
          ),
          /*#__PURE__*/ createElementFn(
            "li",
            null,
            /*#__PURE__*/ createElementFn(
              "a",
              {
                href: "https://tachyum.us/",
                target: "_blank"
              },
              /*#__PURE__*/ createElementFn(
                "span",
                {
                  class: "mobile-nav-text"
                },
                "GOV"
              )
            )
          )
        )
      ),
      /*#__PURE__*/ createElementFn(
        "section",
        {
          id: "main-message"
        },
        /*#__PURE__*/ createElementFn(
          "div",
          {
            class: "row"
          },
          /*#__PURE__*/ createElementFn(
            "div",
            {
              style: {marginTop: "10px"}
            },
            " \xA0 "
          ),
          /*#__PURE__*/ createElementFn(
            "div",
            {
              class: "description"
            },
            /*#__PURE__*/ createElementFn(
              "div",
              {
                style: {width:"68%",display:"inline-block"}
              },
              /*#__PURE__*/ createElementFn(
                "h4",
                {
                  style: {marginLeft:'0', marginBlockEnd:'0', textAlign:'left'}
                },
                /*#__PURE__*/ createElementFn(
                  "i",
                  {
                    style: {color:'gray'}
                  },
                  "News Release"
                )
              ),
              /*#__PURE__*/ createElementFn(
                "p",
                {
                //   style: "margin-top:0;padding-top:0;"
                },
                /*#__PURE__*/ createElementFn(
                  "b",
                  {
                    style: {color:'gray'}
                  },
                  "For immediate release"
                ),
                /*#__PURE__*/ createElementFn("br", null),
                "Contact:",
                /*#__PURE__*/ createElementFn("br", null),
                "Mark Smith",
                /*#__PURE__*/ createElementFn("br", null),
                "JPR Communications",
                /*#__PURE__*/ createElementFn("br", null),
                "818-798-1472",
                /*#__PURE__*/ createElementFn("br", null),
                /*#__PURE__*/ createElementFn("a", {
                  href: "#",
                  class: "cryptedmail",
                  style: {color: '#0066CC'},
                  "data-name": "marks",
                  "data-domain": "jprcom",
                  "data-tld": "com",
                  onclick:
                    "window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return false;"
                })
              )
            ),
            /*#__PURE__*/ createElementFn(
              "div",
              {
                style:
                  {width:'25%', height:'auto', display:'inline-block', verticalAlign:'top'}
              },
              /*#__PURE__*/ createElementFn("img", {
                style: {top:'-100px'},
                src: "/assets/img/Tachyum_logo%2520blue.jpg"
              })
            ),
            /*#__PURE__*/ createElementFn(
              "h4",
              {
                style: {marginTop: '50px', marginBottom: '0px'}
              },
              title
            ), content
          )
        )
      ),
      /*#__PURE__*/ createElementFn(
        "footer",
        {
          class: "tach-footer"
        },
        /*#__PURE__*/ createElementFn(
          "div",
          {
            class: "page-footer"
          },
          /*#__PURE__*/ createElementFn(
            "div",
            {
              class: "row"
            },
            /*#__PURE__*/ createElementFn(
              "div",
              {
                class: "twelve columns",
                // style: "width: 100% !important;"
              },
              /*#__PURE__*/ createElementFn(
                "div",
                {
                  class: "copyright"
                },
                "\xA9 2021 Tachyum"
              ),
              /*#__PURE__*/ createElementFn(
                "ul",
                {
                  class: "social-links"
                },
                /*#__PURE__*/ createElementFn(
                  "li",
                  null,
                  /*#__PURE__*/ createElementFn(
                    "a",
                    {
                      href: "#",
                      class: "cryptedmail2",
                      "data-name": "contactus",
                      "data-domain": "tachyum",
                      "data-tld": "com",
                      onclick:
                        "window.location.href = 'mailto:' + this.dataset.name + '@' + this.dataset.domain + '.' + this.dataset.tld; return true;"
                    },
                    /*#__PURE__*/ createElementFn("i", {
                      class: "fa fa-envelope"
                    })
                  )
                ),
                /*#__PURE__*/ createElementFn(
                  "li",
                  null,
                  /*#__PURE__*/ createElementFn(
                    "a",
                    {
                      href: "https://www.facebook.com/Tachyum/"
                    },
                    /*#__PURE__*/ createElementFn("i", {
                      class: "fa fa-facebook"
                    })
                  )
                ),
                /*#__PURE__*/ createElementFn(
                  "li",
                  null,
                  /*#__PURE__*/ createElementFn(
                    "a",
                    {
                      href: "https://twitter.com/tachyum"
                    },
                    /*#__PURE__*/ createElementFn("i", {
                      class: "fa fa-twitter"
                    })
                  )
                ),
                /*#__PURE__*/ createElementFn(
                  "li",
                  null,
                  /*#__PURE__*/ createElementFn(
                    "a",
                    {
                      href: "https://www.linkedin.com/company/tachyum"
                    },
                    /*#__PURE__*/ createElementFn("i", {
                      class: "fa fa-linkedin"
                    })
                  )
                )
              )
            )
          ),
          /*#__PURE__*/ createElementFn(
            "div",
            {
              class: "row"
            },
            /*#__PURE__*/ createElementFn(
              "div",
              {
                class: "trademarks"
              },
              /*#__PURE__*/ createElementFn(
                "button",
                {
                  id: "trademarksButton"
                },
                "Trademark Information"
              )
            )
          )
        )
      )
    );
  }
  