let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)

    for (const Item of listOfItems) {
        document.write(`<li>${Item}</li>`)
    }

document.write(`</ul>`)


