// getting the data
let apikey = 'd24bb444f5a144d08e6a67fb3362d7f7';
let source = "bbc-news";
// making an XMLHttpRequest
let xhr = new XMLHttpRequest();
// xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`,true);
xhr.open('GET', `news.json`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let news = JSON.parse(this.responseText);
        let articles = news.articles;
        let str = "";
        for (i in articles) {
            str += `<div class="accordion-item my-2 col-lg-8 mx-auto">
                        <h2 class="accordion-header" id="heading${i + 1}">
                            <button id="title" class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${i + 1}" aria-expanded="true" aria-controls="collapse${i + 1}">
                                ${articles[i].title}
                            </button>
                        </h2>
                        <div id="collapse${i + 1}" class="accordion-collapse collapse hide" aria-labelledby="heading${i + 1}"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>${articles[i].description}</strong> ${articles[i].content} <a href="${articles[i].url}" target=_blank>Read More</a>
                            </div>
                        </div>
                    </div>`;
        }
        headlines = document.getElementById('headlines');
        headlines.innerHTML = str;
        let search = document.getElementById('search');
        search.addEventListener('input', function () {
            let input = search.value.toLowerCase();
            let newsblock = document.getElementsByClassName('accordion-item');
            Array.from(newsblock).forEach(element=>{
                console.log(newsblock)
                // let query = document.getElementById('title').value;
                // console.log(query);
                // if(query.includes(input)){
                //     element.style.display="block";
                // }
                // else{
                //     element.style.display="none";
                // }
            });
        });
    }
    else {
        console.log('err');
    }
}
xhr.send();
