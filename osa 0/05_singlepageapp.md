```mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->browser: HTML-tiedosto

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->browser: CSS


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->browser: JavaScript

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->browser: JSON muistiinpanot

```