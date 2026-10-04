# QuickNotes

QuickNotes is a small note-taking web app built with plain HTML, CSS and JavaScript. You can write short notes, file them under Personal, Work or Study, search through them and delete the ones you no longer need. Notes are saved in the browser, so they are still there after a page refresh.

## Features

- Add notes of up to 200 characters, each with a category (Personal, Work or Study)
- Each note is shown as a card with its text, category label, date and time, and a Delete button
- Colour-coded category styles using a different left border for each category
- Validation with clear error messages for empty notes and notes over 200 characters
- Live search that filters notes as you type, ignoring upper and lower case
- A "No notes match your search." message when a search finds nothing
- A note count that reads correctly for zero, one and many notes
- Notes saved to and loaded from localStorage
- A "Clear all" button that asks for confirmation before deleting everything
- A responsive layout that stacks the form on screens 600px wide or narrower

## How to run locally

1. Clone the repository: `git clone https://github.com/A1-lex/quicknotes-app.git`
2. Open the `quicknotes-app` folder.
3. Open `index.html` in your web browser (double-click it, or run `start index.html` in Git Bash).

No build step or installation is needed.

## What I learned

- How to build a page from semantic HTML (header, main, sections, footer) and link every label to its input with matching `for` and `id` values.
- How to lay out a form with Flexbox and use a media query to stack it on small screens.
- How to build the page from an array of objects with `createElement` and `textContent`, which keeps user text from being treated as HTML.
- How to save data with `JSON.stringify` and load it back with `JSON.parse`, and why loading needs a fallback in case the stored data is missing or broken.
- How to split a project into small tasks and commit after each one, so the Git history tells the story of the build.
