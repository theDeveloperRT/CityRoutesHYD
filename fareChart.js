// let rows = total_Stops;
// let cols = total_Stops;

// for (let i = 0; i < rows; i++) {
//     let row = [];
//     for (let j = 0; j < cols; j++) {
//         if (i==j) {
//             row.push(0);
//         }else{
//             row.push(-1);
//         }
//     }
//     arrayfaresCO.push(row);
// }

// for (let i = 0; i < rows; i++) {
//     let row = [];
//     for (let j = 0; j < cols; j++) {
//         if (i==j) {
//             row.push(0);
//         }else{
//             row.push(-1);
//         }
//     }
//     arrayfaresME.push(row);
// }

// console.log(SHD.indexOf('SECUNDERABAD'), SHD.indexOf('LALAPET'))

// arrayfaresCO[993][543] = 10;
// arrayfaresME[993][543] = 10;
// arrayfaresCO[898][543] = 20;
// arrayfaresME[898][543] = 25;

function faresSetter(m, s, d, fCO, fME) {
    let sRef;
    let dRef;
    if (m == 1) {
        sRef = SHD.indexOf(s);
        dRef = SHD.indexOf(d);
        arrayfaresCO[sRef][dRef] = fCO;
        arrayfaresME[sRef][dRef] = fME;

    } else if (m == 2) {
        dRef = SHD.indexOf(d);
        for (let i = 0; i < s.length; i++) {
            sRef = SHD.indexOf(s[i]);
            arrayfaresCO[sRef][dRef] = fCO;
            arrayfaresME[sRef][dRef] = fME;
        }
    } else if (m == 3) {
        for (let i = 0; i < d.length; i++) {
            arrayfaresCO[sRef][SHD.indexOf(d[i])] = fCO;
            arrayfaresME[sRef][SHD.indexOf(d[i])] = fME;

            arrayfaresCO[SHD.indexOf(d[i])][sRef] = fCO;
            arrayfaresME[SHD.indexOf(d[i])][sRef] = fME;
        }
    }

    console.log(sRef, dRef)
}

// arrayfaresME[898][620] = 25;

// faresSetter(1, 'SECUNDERABAD', 'MEHDIPATNAM', 30, 35);
// faresSetter(1, 'LALAPET', 'TARNAKA', 10, 10);

// faresSetter(2, 'SECUNDERABAD', ['AMEERPET', 'POLICE LINES', 'KUKATPALLY'], [20, 15, 30], [25, 20, 35]);

// faresSetter(3, 'SECUNDERABAD', ['CHILKALGUDA X ROADS', 'SITAFALMANDI X ROADS', 'NAMALAGUNDU', 'SITAFALMANDI', 'ALUGADDA BHAVI'], 10, 10);

// ENTRY STARTS FROM HERE


function resolveFare(fare, from) {

    if (typeof fare === "string" && fare.startsWith("@")) {
        let referenceKey = fare.substring(1);

        if (typeof fareData[from] === "string") {
            let fareRef = fareData[from];
            return fareData[fareRef][referenceKey];
        } else {
            return fareData[from][referenceKey];
        }


    } else {
        return fare;
    }
}

function getFare(from, to) {
    let fromData = fareData[from];

    if (typeof fromData === "string") {
        fromData = fareData[fromData];
    }

    let fare = fromData?.[to];

    return resolveFare(fare, from) || "0";
}

const fareData = {
    "LALAPET (RAM TH.)": {
        "TARNAKA": "10-10",
        "LALAPET": "@TARNAKA",
        "WHITE HOUSE": "@TARNAKA",
        "LALAPET (RAM TH.)": "@TARNAKA",
        "LADIES HOSTEL": "0-20",
        "VIDYA NAGAR": "20-25",
        "SHANKARMUTT": "20-25",
        "NALLAKUNTA": "20-25",
        "FIVER HOSPITAL": "20-0",
        "BARKATPURA": "20-30",
        "KACHEGUDA TOURIST": "20-0",
        "KACHEGUDA STATION": "20-0",
        "CITY BUS STATION": "30-30",
        "AFZALGUNJ": "30-30",

        "ALUGADDA BHAVI": "15-0",
        "SANGEETH": "20-0",
        "SECUNDERABAD": "20-0",
        "SHANTHI NAGAR": "10-0",

        "BANDLAGUDA (NGRM)": "30-0",


    },

    "LALAPET": "LALAPET (RAM TH.)",

    "WHITE HOUSE": {
        "TARNAKA": "10-10",
        "LALAPET": "@TARNAKA",
        "LALAPET (RAM TH.)": "@TARNAKA",
        "LADIES HOSTEL": "0-20",
        "VIDYA NAGAR": "20-25",
        "SHANKARMUTT": "20-25",
        "NALLAKUNTA": "20-25",
        "FIVER HOSPITAL": "20-0",
        "BARKATPURA": "20-30",
        "KACHEGUDA TOURIST": "20-0",
        "KACHEGUDA STATION": "20-0",
        "CITY BUS STATION": "30-30",
        "AFZALGUNJ": "30-30",

        "ALUGADDA BHAVI": "15-0",
        "SANGEETH": "@SECUNDERABAD",
        "SECUNDERABAD": "20-0",

        "BANDLAGUDA (NGRM)": "30-0",

        "SP NAGAR": "@KUSHAIGUDA",
        "ECIL DAE COLONY": "@KUSHAIGUDA",
        "ECIL X ROADS": "@KUSHAIGUDA",
        "KUSHAIGUDA": "25-30",
    },

    "SECUNDERABAD": {
        "INDUSTRIAL ESTATE": "20-30",
        "LALAPET": "20-25",
        "LALAPET (RAM TH.)": "@LALAPET",
        "WHITE HOUSE": "@LALAPET",
        "TARNAKA": "15-20",

        "HB COLONY": "25-30",
        "ZTS X ROADS": "@HB COLONY",
        "CARBON": "@HB COLONY",

        "KUSHAIGUDA": "30-30", // RECHECK - METRO EXPRESS FARE ONLY KG
        "ECIL X ROADS": "@KUSHAIGUDA",
        "ECIL DAE COLONY": "@KUSHAIGUDA",
        "SP NAGAR": "@KUSHAIGUDA",

        "ALUGADDA BHAVI": "10-10",
        "SANGEETH": "10-10",
        "NEW BRIDGE": "15-0",

        "KEESARA X ROADS": "35-0",
        "KEESARA PS": "@KEESARA X ROADS",
        "KEESARA ORR": "@KEESARA X ROADS",
        "KUNDANPALLY ORR": "@KEESARA X ROADS",
        "KUNDANPALLY X ROADS": "@KEESARA X ROADS",
        "CHERIYAL X ROADS": "@KEESARA X ROADS",
        "BANDLAGUDA (NGRM)": "@KEESARA X ROADS",
        "ICOM TELE LIMITED": "@KEESARA X ROADS",

        "RAMPALLY X ROADS": "30-0",
        "NAGARAM X ROADS": "@RAMPALLY X ROADS",
        "NAGARAM": "@RAMPALLY X ROADS",
        "VIJAYA HOSPITALS": "@RAMPALLY X ROADS",
        "SV NAGAR": "@RAMPALLY X ROADS",
        "CHAKRIPURAM": "@RAMPALLY X ROADS",
        "NAGARJUNA COLONY": "@RAMPALLY X ROADS",



        // AS PER FARE SAMPLE SHEET
        "POLICE LINES": "15-20",
        "BEGUMPET": "20-25",
        "MIYAPUR X ROADS": "35-35",
        "BALANAGAR": "25-30",
        "MEHDIPATNAM": "30-30",
        "RTC X ROADS": "15-20",
        "LAKDI KA PUL": "20-30",
    }



};


