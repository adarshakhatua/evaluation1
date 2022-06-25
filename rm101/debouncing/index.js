//4c534241
// https://www.omdbapi.com/?i=tt3896198&apikey=4c534241&s=avengers

const fetchData = () => {
    let param = document.getElementById('serachInput').value;
    let url = `https://www.omdbapi.com/?i=tt3896198&apikey=4c534241&s=${param}`;
    fetch(url).then((res) => res.json()).then((res) => { appendData(res.Search); console.log(res.Search)}).catch((err)=>err.message);
}

const appendData = (movies) => {
    document.getElementById("content").innerHTML=null;  
    movies.map((item) => {
        let card = document.createElement("div");
        card.className = "card";
        let imgDiv = document.createElement('div');
        imgDiv.className = "imgDiv";
        let img = document.createElement('img');
        img.src = item.Poster;
        let contentDiv = document.createElement('div');
        contentDiv.className = "contentDiv";
        let name = document.createElement('p');
        name.innerText = item.Title
        let year = document.createElement('p');
        year.innerText=item.Year

        card.append(imgDiv, contentDiv);
        imgDiv.append(img);
        contentDiv.append(name, year);
        document.getElementById("content").append(card);
    } );
    
}
let id;
const deBouncing = (func, delay) => {
    if (id) {
        clearInterval(id);
    }
    id = setTimeout(() => {
        func();
    },delay)
}
