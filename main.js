const url="https://raw.githubusercontent.com/ZGGhoul/portfoliojson/refs/heads/main/portfolio.json"

getData(url,renderPortfolio)

function renderPortfolio(data){
    console.log(data)
    
    data.forEach(({id, title, photo_url, repo_link, topics, site_link})=>{
        document.getElementById("work").innerHTML +=`
        <div id="portfolio">
                <div id="kepdiv">
                <img src="${photo_url}" alt="" id="munkakep">
                </div>
                
                <div id="infodiv">
                <h1>${title}</h1>
                <h3>Topics</h3>
                <ul>${topics}</ul>
                <a href="${site_link}">Site Link</a>
                <a href="${repo_link}">Repo Link</a>
                </div>
            </div>
        `
    })
}