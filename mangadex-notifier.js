const api = require("mangadex-full-api");

var manga = new api.Manga(22723)
manga.fill().then(()=>{
    console.log(`${manga.title} by ${manga.authors.join(", ")}`); //This is just code copied from the api's github page, currently not working since mangadex is in DDOS mitigation mode
});
