let part1 = ["Really",
             "Galumphingly",
             "Totally",
             "Undoubtedly",
             "Radically",
             "Absolutely",
             "Utterly",
             "Stupendously",
             "Extremely",
             "Uncomfortably",
             "Awfully",
             "Insanely",
             "Incredibly",
             "Ridiculously",
             "Like, Totally",
             "Like, Really",
             "Like, Utterly",
            ];
let part2 = ["Awesome",
             "Gyrating",
             "Tubular",
             "Rad",
             "Remorseful",
             "Litty",
             "Interesting",
             "Funky",
             "Wild",
             "Organic",
             "Poppin",
             "Ridiculous",
             "Insane",
             "Extreme",
             "Saucy",
             "Juicy",
             "Radical",
             "Gnarly",
             "Grody",
             "Trippin'",
             "Mental",
             "Bodacious",
            ];
let part3 = ["bud",
             "buddy",
             "bro",
             "lil yeetus",
             "broski",
             "fam",
             "boi",
             "squadfam",
             "brother",
             "litfam",
             "budboy",
             "amigo",
             "dude",
             "dude bro",
             "chum",
             "friendo",
             "buddy boy",
            ];

function removeBackgroundText(parentNode) {
    parentNode.setAttribute("class", "My rq");
}

function insertMessage() {
    let inputDiv = this.parentNode.childNodes[2].childNodes[2].childNodes[0].childNodes[1];
    inputDiv.innerHTML = getResponse();
    removeBackgroundText(this.parentNode);
}

function random(max) {
    return Math.floor(Math.random()*max);
}

function get(list) {
    return list[random(list.length)];
}

function getResponse() {
    return (get(part1) + " " + get(part2) + ", " + get(part3));
}
