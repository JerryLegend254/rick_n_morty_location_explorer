# Rick & Morty Location Explorer Documentation

## Overview
The Rick & Morty Location Explorer is a web application built using [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and [Apollo GraphQL](https://www.apollographql.com/). It allows users to explore locations from the Rick & Morty universe, view the residents of each location along with their status, and add persistent notes about each character.

## Features
* Retrieve a list of locations, along with their residents and status.
* Filter locations by location name, character name, or episode name.
* View location details, including residents and their images with names and status representations.
* Navigate to a screen with details about each resident and add persistent notes.

## Technologies Used
* [Next.js](https://nextjs.org/): Next.js is a React framework for building server-side rendered and statically generated web applications. It provides features such as routing, server-side rendering, and API routes.
* [TypeScript](https://www.typescriptlang.org/): TypeScript is a superset of JavaScript that adds static types to the language, providing better developer tooling and catching errors early in development.
* [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs quickly and efficiently.
* [Apollo GraphQL](https://www.apollographql.com/): Apollo GraphQL is a comprehensive state management library for managing GraphQL data in React applications.
* [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage): LocalStorage is a web API provided by modern browsers that allows web applications to store key-value pairs locally in the user's browser.
Design and Implementation Process

## Choosing the Stack
### Next.js
Next.js was chosen for its built-in support for server-side rendering, routing, and API routes, making it ideal for building dynamic web applications.

### TypeScript
TypeScript was chosen to leverage its static typing features for better code quality and developer experience.

### Tailwind CSS
Tailwind CSS was chosen for its utility-first approach, allowing for rapid prototyping and easy customization of styles without writing custom CSS.

### Apollo GraphQL
Apollo GraphQL was chosen for its seamless integration with Next.js and efficient data fetching capabilities for working with GraphQL APIs. As opposed to REST architecture, using GraphQL was in my opinion convenient in this case to reduce response loads by quering for exact-match data required.

### LocalStorage
LocalStorage was chosen for storing persistent notes about characters as it provides a simple and lightweight solution without the need for setting up a backend database.

## Retrieving Data from the Rick & Morty API
* GraphQL Endpoint: The Rick & Morty GraphQL API was chosen for its flexibility and efficiency in fetching data. GraphQL allows us to retrieve specific fields and nested data structures in a single query, reducing over-fetching and improving performance.

* Queries: Queries were written to retrieve locations, characters, and episodes along with their respective details such as name, type, status, and images.

## Implementing Filtering and Searching
* Filtering: Filtering functionality was implemented to filter locations by location name, character name, or episode name. This was achieved by writing filter logic based on user input and GraphQL query parameters.
* Searching: Search functionality was implemented to search for locations by name. As the user types in the search input, the list of locations is dynamically filtered based on the search term.

## Displaying Data and Navigation
* Location Cards: Locations are displayed as cards, showing their name, type, and a list of residents once the card is clicked. Each resident is represented with their image, name, and status.
* Resident Details: Tapping on a resident navigates to a screen displaying details about the resident, including their name, status, and image. A form is provided to add persistent notes about the character.

## Persisting Notes Using LocalStorage
* Notes: LocalStorage was used to store persistent notes about characters. When a user adds a note about a character, it is stored locally in the user's browser. Notes are retrieved and displayed when the user revisits the application.
