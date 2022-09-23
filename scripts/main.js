import { fetchPortrait } from "./data.js";

const displayPortrait = async () => {
    const data = await fetchPortrait();
    renderPortraitToDOM(data);
};

const renderPortraitToDOM = (data) => {

    let filmHtml = `<ul>`; {
        filmHtml += `
        <article>
          <section class="card">
          <p> Name: ${data.artistDisplayName}</p>
            <img src=" ${data.primaryImageSmall}" alt="portrait">
          </section>
          </article>
          `;
        }
        filmHtml += `</ul>`;
    document.getElementById("app").innerHTML = filmHtml;
};

displayPortrait();

