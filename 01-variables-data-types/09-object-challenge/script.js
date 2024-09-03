

const library = [
    {
        title: "FirstBook",
        author: "Gigi Becali",
        status:{
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "SecondBook",
        author: "Sadoveanu",
        status:{
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "FirstBook",
        author: "Johannis",
        status:{
            own: true,
            reading: false,
            read: false
        }
    }
]



const {title: Prima_Carte, author, status: {own, reading, read}} = library[0];

console.log(library[0])

const firstBookJSON = JSON.stringify(library[0]);

console.log(firstBookJSON)