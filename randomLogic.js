let pplrSearch_FT = ["SECUNDERABAD - CYBER TOWERS", "SECUNDERABAD - NACHARAM", "SECUNDERABAD - MEDCHAL", "SECUNDERABAD - LINGAMPALLY", "SECUNDERABAD - PATANCHERUVU", "AMEERPET - JEEDIMETLA", "AMEERPET - SECUNDERABAD", "AMEERPET - AFZALGUNJ", "AMEERPET - MEHDIPATNAM", "AMEERPET - KONDAPUR", "TARNAKA - CHERLAPALLY", "TARNAKA - FIVER HOSPITAL", "TARNAKA - LB NAGAR", "TARNAKA - HEMA NAGAR", "TARNAKA - ZTS X ROADS", "DILSHUKNAGAR - LB NAGAR", "DILSHUKNAGAR - IBRAHIMPATNAM", "DILSHUKNAGAR - SECUNDERABAD", "DILSHUKNAGAR - UPPAL RING ROAD", "DILSHUKNAGAR - VIDYA NAGAR", "ECIL X ROADS - GHATKESAR", "ECIL X ROADS - KEESARA", "ECIL X ROADS - BALAJI NAGAR", "ECIL X ROADS - ALWAL", "ECIL X ROADS - LALAPET", "CHERLAPALLY - SECUNDERABAD", "CHERLAPALLY - NACHARAM", "CHERLAPALLY - ECIL X ROADS", "CHERLAPALLY - MEHDIPATNAM", "CHERLAPALLY - PANJAGUTTA", "SUCHITRA - SHAHPUR NAGAR", "SUCHITRA - MEDCHAL", "SUCHITRA - ALWAL", "SUCHITRA - SECUNDERABAD", "SUCHITRA - BOWENPALLY X ROADS", "GANDIMAISAMMA - MIYAPUR", "GANDIMAISAMMA - JEEDIMETLA", "GANDIMAISAMMA - SECUNDERABAD", "GANDIMAISAMMA - AMEERPET", "GANDIMAISAMMA - BALANAGAR", "PATANCHERUVU - MEHDIPATNAM", "PATANCHERUVU - MIYAPUR X ROADS", "PATANCHERUVU - BALANAGAR", "PATANCHERUVU - KONDAPUR", "PATANCHERUVU - AMEERPET", "KACHEGUDA - JEEDIMETLA", "KACHEGUDA - ECIL X ROADS", "KACHEGUDA - AFZALGUNJ", "KACHEGUDA - SECUNDERABAD", "KACHEGUDA - LAKDI KA PUL", "AFZALGUNJ - ARAMGHAR", "AFZALGUNJ - SECUNDERABAD", "AFZALGUNJ - ECIL X ROADS", "AFZALGUNJ - TARNAKA", "AFZALGUNJ - DILSHUKNAGAR", "UPPAL - GHATKESAR", "UPPAL - LB NAGAR", "UPPAL - IBRAHIMPATNAM", "UPPAL - AFZALGUNJ", "UPPAL - LAKDI KA PUL", "MEHDIPATNAM - LINGAMPALLY", "MEHDIPATNAM - AMEERPET", "MEHDIPATNAM - SECUNDERABAD", "MEHDIPATNAM - KALI MANDIR", "MEHDIPATNAM - BALAJI TEMPLE", "MIYAPUR - BACHUPALLY", "MIYAPUR - AMEERPET", "MIYAPUR - SECUNDERABAD", "MIYAPUR - BOWENPALLY", "MIYAPUR - MEDCHAL", "BORABANDA - AMEERPET", "BORABANDA - SECUNDERABAD", "BORABANDA - AFZALGUNJ", "BORABANDA - LAKDI KA PUL", "BORABANDA - ERRAGADDA"]

let pplrSearch_ALT = ["LALAPET - MEDCHAL", "LALAPET - BALAJI TEMPLE", "LALAPET - NACHARAM", "LALAPET - DILSHUKNAGAR", "LALAPET - AMEERPET", "AMEERPET - JIYAGUDA", "AMEERPET - ARAMGHAR", "AMEERPET - KISMATPUR", "AMEERPET - ATTAPUR", "AMEERPET - MOINABAD", "NACHARAM - MEDCHAL", "NACHARAM - JIYAGUDA", "NACHARAM - CHINTALMET", "NACHARAM - LB NAGAR", "NACHARAM - IBRAHIMPATNAM", "CHERLAPALLY - NGRI", "CHERLAPALLY - VIDYA NAGAR", "CHERLAPALLY - AFZALGUNJ", "CHERLAPALLY - LAL BAZAR", "CHERLAPALLY - KEESARA", "HAYATHNAGAR - SANATH NAGAR ", "HAYATHNAGAR - TKR KAMAN", "HAYATHNAGAR - ARAMGHAR", "HAYATHNAGAR - KATEDAN", "HAYATHNAGAR - MALKAJGIRI", "IBRAHIMPATNAM - LALAPET", "IBRAHIMPATNAM - ECIL X ROADS", "IBRAHIMPATNAM - MALKAJGIRI", "IBRAHIMPATNAM - AMEERPET", "IBRAHIMPATNAM - ALWAL", "SECUNDERABAD - BALAJI TEMPLE", "SECUNDERABAD - MOINABAD", "SECUNDERABAD - KISMATPUR", "SECUNDERABAD - RN REDDY", "SECUNDERABAD - HEMA NAGAR", "PATANCHERUVU - MANIKONDA", "PATANCHERUVU - FILM NAGAR", "PATANCHERUVU - WAVEROCK", "PATANCHERUVU - ALWAL", "PATANCHERUVU - HAKIMPET"]

let listLEN3 = getId('listLEN3');
let listLEN4 = getId('listLEN4');
let pplrSearch_FT_List = getId('pplrSearch_FT_List');

let routesArrayLEN3 = []
let routesArrayLEN4 = []
let newRoutesSHRT = ['24E', '217D', '231KN', '282K', '6IW/252', '16/10YF', '224/47D']

routesArray.forEach(element => {
    if (element.length <= 3 && !(newRoutesSHRT.includes(element))) {
        routesArrayLEN3.push(element);
    } else if (element.length == 4 && !(newRoutesSHRT.includes(element))) {
        routesArrayLEN4.push(element);
    }
});

function getRandomRoutes(array, count) {
    return array
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
}

let randomRoutes3 = getRandomRoutes(routesArrayLEN3, 5);
let randomRoutes4 = getRandomRoutes(routesArrayLEN4, 4);

listLEN3.innerHTML = "";
listLEN4.innerHTML = "";

createHomeRoutes(randomRoutes3, listLEN3, 1);
createHomeRoutes(randomRoutes4, listLEN4, 1);


function createHomeRoutes(array, list, mode) {
    array.forEach(element => {
        let li = document.createElement("li");
        if (mode == 1) {
            li.setAttribute('onclick', 'viewRoute(this)');
        } else if (mode == 2) {
            li.setAttribute('onclick', 'viewFromTo(this)');
        }
        li.textContent = element;
        list.appendChild(li);
    });
}



// Find Highest length Stop Name
// let leng = 0;
// for (let i = 0; i < SHD.length; i++) {
//     if (leng < SHD[i].length) {
//         leng = SHD[i].length;
//     }
// }
// console.log(leng);

