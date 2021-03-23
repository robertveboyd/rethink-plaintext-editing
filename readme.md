# Rethink Plaintext Editing

Frontend coding challenge forked from [https://github.com/rethinksoftware/rethink-plaintext-editing/](https://github.com/rethinksoftware/rethink-plaintext-editing/)

#### To Run

From the command line

`npm install && npm run dev`

Then navigate to [localhost:3000](http://localhost:3000)

#### Usage

Clicking on a file from the left hand panel will show a preview on the right hand side.  Clicking 'Edit' will transform the right hand side into a text editor.

![Plaintext Preview](https://raw.githubusercontent.com/robertveboyd/rethink-plaintext-editing/master/images/usage-1.png)

![Plaintext Editor](https://raw.githubusercontent.com/robertveboyd/rethink-plaintext-editing/master/images/usage-2.png)

The text of the file can then be edited.  Once a file has been edited, the user can click 'Preview' to preview their changes or 'Save' to save the file in memory.

![Edited Text](https://raw.githubusercontent.com/robertveboyd/rethink-plaintext-editing/master/images/usage-3.png)

![Edited Preview](https://raw.githubusercontent.com/robertveboyd/rethink-plaintext-editing/master/images/usage-4.png)

Markdown files can be previewed with their markdown rendered.

![Markdown Preview](https://raw.githubusercontent.com/robertveboyd/rethink-plaintext-editing/master/images/usage-5.png)

Javascript and JSON files previews display code highlighting.

![Javascript Preview](https://raw.githubusercontent.com/robertveboyd/rethink-plaintext-editing/master/images/usage-6.png)

![JSON Preview](https://raw.githubusercontent.com/robertveboyd/rethink-plaintext-editing/master/images/usage-7.png)

While editing a markdown file there are buttons to add common markdown syntax.

![Markdown Editor](https://raw.githubusercontent.com/robertveboyd/rethink-plaintext-editing/master/images/usage-8.png)

![Markdown Preview](https://raw.githubusercontent.com/robertveboyd/rethink-plaintext-editing/master/images/usage-9.png)

#### Resources

- [Heroicons](https://heroicons.com/) and [Flaticon](https://www.flaticon.com/) for svg icons
- [markedjs](https://github.com/markedjs/marked) for markdown rendering
- [highlight.js](https://highlightjs.org/) for code highlighting