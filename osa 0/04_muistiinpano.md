sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

    server-->browser: Status code: 302 Found

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->browser: HTML-tiedosto

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->browser: CSS-tiedosto

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->browser: JavaScrpt tiedosto

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->browser: JSON muistiinpanot

