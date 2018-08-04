let celebrities = [
    {
        name: "Rashid Minhas Shaheed",
        imgURL: "rashid-minhas.jpg",
        title: "Pilot Officer",
        quote: "We are soldiers prepared to lay down our lives for the nation",
        wikiLink: "en.wikipedia.org/wiki/Rashid_Minhas"
    },

    {
        name: "Muhammad Akram",
        imgURL: "muhammad-akram.jpg",
        title: "Frontier Force Regiment",
        quote: "Pakistan's highest military honour, is to effort",
        wikiLink: "en.wikipedia.org/wiki/Muhammad_Akram"
    },

    {
        name: "Muhammad Hussain Janjua",
        imgURL: "muhammad-hussain-janjua.jpg",
        title: "Soldier",
        quote: "Never scare.. just be brave, and face the problems",
        wikiLink: "en.wikipedia.org/wiki/Muhammad_Hussain_Janjua"
    },

    {
        name: "Raja Aziz Bhatti",
        imgURL: "raja-aziz-bhatti.jpg",
        title: " Nuclear Physicist and a Metallurgical Engineer,",
        quote: "Some people are ok with doing nothing all day after they retire, but then some people if they had nothing to do would go mad and start banging their heads against a wall.",
        wikiLink: "en.wikipedia.org/wiki/Raja_Aziz_Bhatti"
    },

    {
        name: "Raja Muhammad Sarwar",
        imgURL: "raja-muhammad-sarwar.jpg",
        title: "Staff Officer in Pakistan Army",
        quote: "Proud to be a Pakistani Soldier",
        wikiLink: "https://en.wikipedia.org/wiki/Arfa_Karim"
    },

    {
        name: "Shabbir Sharif",
        imgURL: "shabbir-sharif.jpg",
        title: "Comission",
        quote: "Democracy is necessary to peace and to undermining the forces of terrorism.",
        wikiLink: "raja-muhammad-sarwar"
    },

    {
        name: "Tufail Muhammad",
        imgURL: "tufail-muhammad.jpg",
        title: "Major",
        quote: "Never Defeat.",
        wikiLink: "en.wikipedia.org/wiki/Tufail_Mohammad"
    }
]

function initialize() {
    let divEl = document.querySelector(".celebrities-list");

    for (let i = 0; i < celebrities.length; i++) {
        divEl.innerHTML += `<div class='celebrity-img-div' 
        style="background-image: url(${celebrities[i].imgURL});" onclick="changeDetails(${i})">
        <p class="celebrity-name"> ${celebrities[i].name}</p>
        </div>`;
    }
}

function changeDetails(indexNum) {
    document.querySelector(".celebrity").innerHTML = celebrities[indexNum].name;
    document.querySelector(".celebrity-title").innerHTML = celebrities[indexNum].title;    
    document.querySelector(".celebrity-img").style = `background-image: url(${celebrities[indexNum].imgURL});`
    document.querySelector(".celebrity-quote").innerHTML = celebrities[indexNum].quote;
    document.querySelector(".read-more-link").href = celebrities[indexNum].wikiLink;        

}
