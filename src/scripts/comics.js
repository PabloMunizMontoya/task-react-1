let card = (unManga) => {
    return `
        <div class="card">
            <img class="card-img" src="${unManga.photo}">
            <a class="card-anchor center" href="/comic-detail.html?id=${unManga.id}">${unManga.title}</a>
        </div>
    `
}

let printCards = (arrayDeMangas) => arrayDeMangas.map(card).join("<br>")

document.querySelector('#cards').innerHTML = printCards(mangas)