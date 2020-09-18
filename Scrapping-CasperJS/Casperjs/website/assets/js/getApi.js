// ============================================================ //

const url = 'https://kitsu.io/api/edge/anime/41410/relationships/episodes'

// ============================================================ //

// // Récupération des ID pour y metre le résultat
const episodes = document.getElementById('articleMedia')

// ============================================================ //

// Get data API
function getAnime() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const anime = data
            console.log(data)
            //getPrice(currency)
            //getConverter(currency)
        })
        .catch(err => console.log(err))
}



//var arrayEpisodes = [],
    //articles = document.querySelectorAll("episodes");
var arrayAnime = []
articles = document.querySelectorAll('episodes')

const
imageEpisode = new Image()
imageEpisode.src = "https://media.kitsu.io/anime/poster_images/41410/medium.jpg?1597699259";
    
console.log(imageEpisode);


for (let i = 0; i < episodes.length; i++) {
    const articles = articles[i];





}








// Run Gget Data
getAnime()