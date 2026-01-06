import {QuestionDto} from "@/models/dto/question.dto";

const questions: any[] = [
    {
        id: "0",
        question: "Was war dein letzter Fehlkauf?",
        episode: "4",
        year: "2017",
        author: "Felix",
        count: 0,
        timestamp: "07:37",
        link: "https://open.spotify.com/episode/6sZoQS2B7wRxSErtbyoAaA?go=1&t=457"
    },
    {
        id: "1",
        question: "Welche Frage würde dir dein fünfzehnjähriges ich stellen?",
        episode: "4",
        year: "2017",
        author: "Felix",
        count: 0,
        timestamp: "14:50",
        link: "https://open.spotify.com/episode/6sZoQS2B7wRxSErtbyoAaA?go=1&t=890"
    },
    {
        id: "2",
        question: "Was ist das in deinem Leben, worauf du am stolzesten bist?",
        episode: "4",
        year: "2017",
        author: "Felix",
        count: 0,
        timestamp: "16:32",
        link: "https://open.spotify.com/episode/6sZoQS2B7wRxSErtbyoAaA?go=1&t=992"
    },
    {
        id: "3",
        question: "Was ist das Langweiligste an dir?",
        episode: "4",
        year: "2017",
        author: "Felix",
        count: 0,
        timestamp: "19:57",
        link: "https://open.spotify.com/episode/6sZoQS2B7wRxSErtbyoAaA?go=1&t=1197"
    },
    {
        id: "4",
        question: "Warum sind auf öffentlichen Toiletten immer Schamhaare?",
        episode: "4",
        year: "2017",
        author: "Felix",
        count: 0,
        timestamp: "23:12",
        link: "https://open.spotify.com/episode/6sZoQS2B7wRxSErtbyoAaA?go=1&t=1392"
    },
    {
        id: "5",
        question: "Was sind deine Stärken?",
        episode: "5",
        year: "2017",
        author: "Tommi",
        count: 0,
        timestamp: "11:13",
        link: "https://open.spotify.com/episode/3gjrzvNUwT2NaG10lxetUG?go=1&t=673"
    }, {
        id: "6",
        question: "Macht Geld glücklich?",
        episode: "5",
        year: "2017",
        author: "Tommi",
        count: 0,
        timestamp: "16:55",
        link: "https://open.spotify.com/episode/3gjrzvNUwT2NaG10lxetUG?go=1&t=1015"
    }, {
        id: "7",
        question: "Wie sieht deine Morgenroutine aus?",
        episode: "5",
        year: "2017",
        author: "Tommi",
        count: 0,
        timestamp: "25:03",
        link: "https://open.spotify.com/episode/3gjrzvNUwT2NaG10lxetUG?go=1&t=1503"
    }, {
        id: "8",
        question: "Was war dein persönliches Highlight dieses Jahr?",
        episode: "13",
        year: "2017",
        author: "Felix",
        count: 0,
        timestamp: "12:40",
        link: "https://open.spotify.com/episode/3pjGPt5rcEes55EFrQRQwE?go=1&t=760"
    }, {
        id: "9",
        question: "Wie würdest du deinen Job einem Fünfjährigen - der Leon heißt - erklären?",
        episode: "23",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "15:13",
        link: "https://open.spotify.com/episode/3YgzS0n54rfaCB9tyHdCxP?go=1&t=913"
    }, {
        id: "10",
        question: "Wie sieht ein durchschnittlicher Arbeitstag von dir aus?",
        episode: "23",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "17:20",
        link: "https://open.spotify.com/episode/3YgzS0n54rfaCB9tyHdCxP?go=1&t=1040"
    }, {
        id: "11",
        question: "Verdienst du gut in deinem Job?",
        episode: "23",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "25:54",
        link: "https://open.spotify.com/episode/3YgzS0n54rfaCB9tyHdCxP?go=1&t=1554"
    }, {
        id: "12",
        question: "Was magst du bei Frauen mehr: Manikürte Nägel oder natürliche?",
        episode: "32",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "16:06",
        link: "https://open.spotify.com/episode/6UfCoWZH2xSBCiNm8mEAYD?go=1&t=966"
    }, {
        id: "13",
        question: "Worauf hättest du mehr Bock: Ein dolles Erdbeben oder einen ausgewachsenen Wirbelsturm?",
        episode: "33",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "01:48",
        link: "https://open.spotify.com/episode/6Rt5tlQzAyXUnm19Y6mx9B?go=1&t=108"
    }, {
        id: "14",
        question: "Lieber 4 Stunden lang mit 3 dreadbelockten Hippies oder 3 stumpfen Nazis über Politik unterhalten?",
        episode: "33",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "07:03",
        link: "https://open.spotify.com/episode/6Rt5tlQzAyXUnm19Y6mx9B?go=1&t=423"
    }, {
        id: "15",
        question: "Lieber Aida-Kreuzfahrt übers Mittelmeer oder all-inclusive Lanzarote?",
        episode: "33",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "12:05",
        link: "https://open.spotify.com/episode/6Rt5tlQzAyXUnm19Y6mx9B?go=1&t=725"
    }, {
        id: "16",
        question: "Döner oder Dürüm?",
        episode: "36",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "02:40",
        link: "https://open.spotify.com/episode/3OC5xy5BWUI6HdsvWe9JtM?go=1&t=160"
    }, {
        id: "17",
        question: "Küche sauber machen oder Bad putzen?",
        episode: "36",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "12:51",
        link: "https://open.spotify.com/episode/3OC5xy5BWUI6HdsvWe9JtM?go=1&t=771"
    }, {
        id: "18",
        question: "Kicker oder Billard?",
        episode: "36",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "21:21",
        link: "https://open.spotify.com/episode/3OC5xy5BWUI6HdsvWe9JtM?go=1&t=1281"
    }, {
        id: "19",
        question: "Glaubst du, Samuel Koch wäre Wettkönig geworden, wenn er nicht gestürzt wäre?",
        episode: "38",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "22:00",
        link: "https://open.spotify.com/episode/3nUkY2rVcTRlRnv05A67Gz?go=1&t=1320"
    }, {
        id: "20",
        question: "Wärest du gerne mit dir befreundet?",
        episode: "38",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "26:10",
        link: "https://open.spotify.com/episode/3nUkY2rVcTRlRnv05A67Gz?go=1&t=1570"
    }, {
        id: "21",
        question: "Was ist schlimmer: Ein Auktionator mit Tourette oder ein hauptberuflicher Rasseldieb mit Parkinson?",
        episode: "38",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "28:16",
        link: "https://open.spotify.com/episode/3nUkY2rVcTRlRnv05A67Gz?go=1&t=1696"
    }, {
        id: "22",
        question: "Sammelst du etwas?",
        episode: "38",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "29:20",
        link: "https://open.spotify.com/episode/3nUkY2rVcTRlRnv05A67Gz?go=1&t=1760"
    }, {
        id: "23",
        question: "Was genau soll das mit Zartbitterschokolade?",
        episode: "38",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "41:51",
        link: "https://open.spotify.com/episode/3nUkY2rVcTRlRnv05A67Gz?go=1&t=2511"
    }, {
        id: "24",
        question: "Nie wieder Instagram oder nie wieder Spotify?",
        episode: "39",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "09:04",
        link: "https://open.spotify.com/episode/2m7HviLaWe2isM3l15Gz80?go=1&t=544"
    }, {
        id: "25",
        question: "Was war deine letzte gute Tat?",
        episode: "39",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "12:46",
        link: "https://open.spotify.com/episode/2m7HviLaWe2isM3l15Gz80?go=1&t=766"
    }, {
        id: "26",
        question: "Darf man gleich starke Frauen schlagen?",
        episode: "39",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "17:28",
        link: "https://open.spotify.com/episode/2m7HviLaWe2isM3l15Gz80?go=1&t=1048"
    }, {
        id: "27",
        question: "Pizzabaguette oder Rostbratwurst, woran hast du dir öfter den Mund verbrannt?",
        episode: "39",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "22:00",
        link: "https://open.spotify.com/episode/2m7HviLaWe2isM3l15Gz80?go=1&t=1320"
    }, {
        id: "28",
        question: "Glaubst du, irgendwann wird alles wieder gut?",
        episode: "40",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "35:14",
        link: "https://open.spotify.com/episode/7aBJOKRo2N2mGwbThl9TAw?go=1&t=2114"
    }, {
        id: "29",
        question: "Welche Supermarktkette ist deine Liebste?",
        episode: "40",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "41:27",
        link: "https://open.spotify.com/episode/7aBJOKRo2N2mGwbThl9TAw?go=1&t=2487"
    }, {
        id: "30",
        question: "Welche Küchennationalität ist deine Liebste?",
        episode: "40",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "46:18",
        link: "https://open.spotify.com/episode/7aBJOKRo2N2mGwbThl9TAw?go=1&t=2778"
    }, {
        id: "31",
        question: "Welche Gerüche hast du in der Nase, wenn du an deine Kindheit/Schulzeit denkst?",
        episode: "40",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "51:42",
        link: "https://open.spotify.com/episode/7aBJOKRo2N2mGwbThl9TAw?go=1&t=3102"
    }, {
        id: "32",
        question: "Glaubst du, es würde was bringen, Tiere auf Flüchtlingsboote mitzunehmen?",
        episode: "40",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "55:00",
        link: "https://open.spotify.com/episode/7aBJOKRo2N2mGwbThl9TAw?go=1&t=3300"
    }, {
        id: "33",
        question: "Würdest du lieber 2 Wochen lang auf einen ausgewachsenen Tiger aufpassen oder 10 Jahre lang auf ein Huhn?",
        episode: "41",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "17:48",
        link: "https://open.spotify.com/episode/6GV8g9pBCDuU3MJ4kazbmd?go=1&t=1068"
    }, {
        id: "34",
        question: "Was ist die Mindest-Akkuprozentzahl, mit der du noch entspannt aus dem Haus gehen kannst?",
        episode: "41",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "25:31",
        link: "https://open.spotify.com/episode/6GV8g9pBCDuU3MJ4kazbmd?go=1&t=1531"
    }, {
        id: "35",
        question: "Bist du beim BH-Öffnen jemals so sehr gescheitert, dass danach kein Sex mehr stattgefunden hat?",
        episode: "41",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "30:01",
        link: "https://open.spotify.com/episode/6GV8g9pBCDuU3MJ4kazbmd?go=1&t=1801"
    }, {
        id: "36",
        question: "Glaubst du Spatzen heißen Spatzen, weil man sie meistens beim Spazierengehen trifft?",
        episode: "41",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "33:07",
        link: "https://open.spotify.com/episode/6GV8g9pBCDuU3MJ4kazbmd?go=1&t=1987"
    }, {
        id: "37",
        question: "Wenn du eine von beiden wählen müsstest: FDP oder CDU?",
        episode: "41",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "35:29",
        link: "https://open.spotify.com/episode/6GV8g9pBCDuU3MJ4kazbmd?go=1&t=2129"
    }, {
        id: "38",
        question: "Was ist deine Lieblingsart, sich auf öffentlichen Toiletten die Hände abzutrocknen?",
        episode: "42",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "26:19",
        link: "https://open.spotify.com/episode/1zc3bn8eFwXCfaMtRnspcf?go=1&t=1579"
    }, {
        id: "39",
        question: "Findest du Hallenbäder auch so scheiße wie Tommi?",
        episode: "42",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "29:14",
        link: "https://open.spotify.com/episode/1zc3bn8eFwXCfaMtRnspcf?go=1&t=1754"
    }, {
        id: "40",
        question: "Welches ist dein Lieblingstier?",
        episode: "42",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "37:27",
        link: "https://open.spotify.com/episode/1zc3bn8eFwXCfaMtRnspcf?go=1&t=2247"
    }, {
        id: "41",
        question: "Wie viel Geld ziehst du immer am Automaten?",
        episode: "42",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "47:26",
        link: "https://open.spotify.com/episode/1zc3bn8eFwXCfaMtRnspcf?go=1&t=2846"
    }, {
        id: "42",
        question: "Zerstört uns die Ironie?",
        episode: "42",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "50:35",
        link: "https://open.spotify.com/episode/1zc3bn8eFwXCfaMtRnspcf?go=1&t=3035"
    }, {
        id: "43",
        question: "Was war die letzte Entscheidung, die du so richtig bereut hast?",
        episode: "43",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "27:43",
        link: "https://open.spotify.com/episode/5LhAru2YPzlLHtPW1rpbJr?go=1&t=1663"
    }, {
        id: "44",
        question: "Hast du mittlerweile schon dann, wenn du anfängst zu trinken Angst vor dem nächsten Tag?",
        episode: "43",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "32:04",
        link: "https://open.spotify.com/episode/5LhAru2YPzlLHtPW1rpbJr?go=1&t=1924"
    }, {
        id: "45",
        question: "Bist du im Winter eher der Typ eine dicke Decke oder zwei Schnuffeldecken?",
        episode: "43",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "38:43",
        link: "https://open.spotify.com/episode/5LhAru2YPzlLHtPW1rpbJr?go=1&t=2323"
    }, {
        id: "46",
        question: "Wie trinkst du deinen Kaffee?",
        episode: "44",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "16:44",
        link: "https://open.spotify.com/episode/3l0uIPrCbPCcfVP2DDHePv?go=1&t=1004"
    }, {
        id: "47",
        question: "Schon mal im Puff gewesen?",
        episode: "44",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "27:38",
        link: "https://open.spotify.com/episode/3l0uIPrCbPCcfVP2DDHePv?go=1&t=1658"
    }, {
        id: "48",
        question: "Für wie viel Geld wäre deine politische Stimme käuflich?",
        episode: "44",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "37:56",
        link: "https://open.spotify.com/episode/3l0uIPrCbPCcfVP2DDHePv?go=1&t=2276"
    }, {
        id: "49",
        question: "Klopfen oder Klatschen beim Zustimmen?",
        episode: "44",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "38:52",
        link: "https://open.spotify.com/episode/3l0uIPrCbPCcfVP2DDHePv?go=1&t=2332"
    }, {
        id: "50",
        question: "Thema Weihnachtsmärkte: Geil oder überbewertet?",
        episode: "44",
        year: "2018",
        author: "Tommi",
        count: 0,
        timestamp: "40:13",
        link: "https://open.spotify.com/episode/3l0uIPrCbPCcfVP2DDHePv?go=1&t=2413"
    }, {
        id: "51",
        question: "Thema Klopapier : Wickeln, falten oder knüllen? ",
        episode: "45",
        year: "2018",
        author: "Hackis",
        count: 0,
        timestamp: "35:19",
        link: "https://open.spotify.com/episode/6rI6hV0aMu0SKgnduSZzft?go=1&t=2119"
    }, {
        id: "52",
        question: "Wenn du ein Bier wärst, welches wärest du und warum?",
        episode: "45",
        year: "2018",
        author: "Hackis",
        count: 0,
        timestamp: "36:43",
        link: "https://open.spotify.com/episode/6rI6hV0aMu0SKgnduSZzft?go=1&t=2203"
    }, {
        id: "53",
        question: "Wie würdest du dein Erstgeborenes nennen?",
        episode: "45",
        year: "2018",
        author: "Hackis",
        count: 0,
        timestamp: "39:32",
        link: "https://open.spotify.com/episode/6rI6hV0aMu0SKgnduSZzft?go=1&t=2372"
    }, {
        id: "54",
        question: "Wärst du lieber die schönste Person der Welt, aber gänzlich humorlos oder die lustigste Person der Welt, aber gänzlich unschön?",
        episode: "46",
        year: "2018",
        author: "Felix",
        count: 0,
        timestamp: "14:49",
        link: "https://open.spotify.com/episode/5c09kILyfpnVGp4F9SiTkI?go=1&t=889"
    },
];