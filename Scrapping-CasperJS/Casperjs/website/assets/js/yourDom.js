const
  articleMedia = document.getElementById('articleMedia')
myJson = function () {
  const
    urlJSON = '/assets/js/json/jojo.json',
    req = new XMLHttpRequest()
  req.open('GET', urlJSON)
  req.responseType = 'json'
  req.send()
  req.onload = function () {
    const
      arrayMedia = req.response
    showArticle(arrayMedia)
  }
}

function showArticle(jsonObj) {
  const article = jsonObj;
  console.log(article.length);
  // Boucle de récupération du Json pour l'affichage dans le html
  for (let i = 0; i < article.length; i++) {

    // Création de nouvelle élément
    const
      myArticle = document.createElement('article'),
      //myStyle = document.createElement('style'),
      myTitle = document.createElement('h3'),
      myLink = document.createElement('a'),
      myContent = document.createElement('div')

      //console.log(article[i].title)

      // Attribution de class
      // const

      classArticle = document.createAttribute("class")
      styleArticle = document.createAttribute("style")
      contentArticle = document.createAttribute("div")


    // Définition du contenu des éléments Valeur | (key / value)
    myStyle.img = article[i].style
    myTitle.textContent = article[i].title
    myLink.href = article[i].link
    myContent.textContent = article[i].content

    // Définition des class à utiliser
    classArticle.value = "card col-md-4"
    styleArticle.value = article[i].style + "min-height: 200px"
    contentArticle.value = article[i].content 

    console.log(article[i].style);
    /*
     * Affichage des Elements avec leur variable (Parent => Enfant)
     ***************************************************************/

    // articleMedia créé un enfant (=>) qui est myArticle
    articleMedia.appendChild(myArticle)
    articleMedia.appendChild(myTitle)
    articleMedia.appendChild(myContent)

    // myArticle définit (=) ses class 
    myArticle.setAttributeNode(classArticle)
    myArticle.setAttributeNode(styleArticle)
  

    // myArticle => myCardBody
    // myCardBody.appendChild(myContent)
    // myCardBody.appendChild(myTitle)

    // myCard => myLink
    //myArticle.setAttributeNode(myLink)

    // myLink => myContent
    //myContent = (classContent)
    // myContent.setAttributeNode(classContent)

    // myCard => (myCardBody)
    // myArticle.appendChild(myCardBody)

    // myCardBody => myTitle
    // myCardBody.appendChild(myTitle)

  }
}
/*
 * 
 * Execution des Functions
 * 
 */

myJson()
showArticle()