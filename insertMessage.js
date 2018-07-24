function random(max) {
    return Math.floor(Math.random()*(max+1));
}

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
        "Gyrations",
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
        "Thicc",
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
         "thiccy",
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

function insertMessage() {
    this.parentNode.childNodes[2].childNodes[2].childNodes[0].childNodes[1].innerHTML = getResponse();
}

function get(list) {
    return list[random(list.length-1)];
}

function getResponse() {
    return (get(part1) + " " + get(part2) + " " + get(part3));
}
