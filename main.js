const url="https://raw.githubusercontent.com/ZGGhoul/portfoliojson/refs/heads/main/portfolio.json"

getData(url,renderPortfolio)

function renderPortfolio(data){
    console.log(data)
    
    data.forEach(({id, title, photo_url, repo_link, topics, site_link})=>{
        document.getElementById("work").innerHTML +=`
        <div id="portfolio">
                <h1>${title}</h1>
                <img src="${photo_url}" alt="">
                <h3>${topics}</h3>
                <a href="${site_link}"></a>
                <a href="${repo_link}"></a>

            </div>
        `
    })
}