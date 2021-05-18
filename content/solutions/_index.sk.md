---
_build:
  render: always
  
menu:
  main:
    identifier: solutions
    name: Riešenia
    url: /solutions/
    weight: -20
  footer:
    identifier: solutions
    name: Riešenia
    url: /solutions/
    weight: -20

cascade:
  _build:
    render: always
    list: always
  menu:
    main:
      parent: solutions
    footer:
      parent: solutions

homepage: true
title: Solutions
---

