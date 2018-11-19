/**
 *   @author Murdock, Matthew (mudcodkm@student.ncmich.edu)
 *   @version 0.0.3
 */

//
// HappyTunes is a progressive web application for downloading music files. Each time a file is purchased,
// a transaction record is created that includes the music genre and price paid. The available genres are Classical,
// Easy Listening, Jazz, Pop, Rock, and Other. Develop an application that accepts input data for each transaction
// and displays a report that lists each of the music genres, along with a count of the number of downloads in each
// of the following price categories:
//
// Over $10.00
// $6.00 through $9.99
// $3.00 through $5.99
// Under $3.00
//
// It should have the ability to sort by most downloaded genre.

/*
Labels:
printUnderThree = "A" at end of statement
printLowBetween = "B" at end of statement
printHighBetween = "C" at end of statement
printAboveTen = "D" at end of statement
*/


"use strict";
const PROMPT = require(`readline-sync`);

let continueResponse;
let downloadType, classicalTotal, easyListeningTotal, jazzTotal, popTotal, rockTotal, otherTotal;
let classical, easyListening, jazz, pop, rock, other;

function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
        setClassicalTotal();
        setEasyListeningTotal();
        setJazzTotal();
        setPopTotal();
        setRockTotal();
        setOtherTotal();
    }
    while (continueResponse === 1) {
        setDownloadType();
        setContinueResponse();
    }
    printUnderThree();
    setOneA();
    setTwoA();
    setThreeA();
    setFourA();
    setFiveA();
    setSixA();
    printLowBetween();
    setOneB();
    setTwoB();
    setThreeB();
    setFourB();
    setFiveB();
    setSixB();
    printHighBetween();
    setOneC();
    setTwoC();
    setThreeC();
    setFourC();
    setFiveC();
    setSixC();
    printAboveTen();
    setOneD();
    setTwoD();
    setThreeD();
    setFourD();
    setFiveD();
    setSixD();
    printBye();
}

main();

function setClassicalTotal() {
    classicalTotal = 0
}

function setEasyListeningTotal() {
    easyListeningTotal = 0
}

function setJazzTotal() {
    jazzTotal = 0
}

function setPopTotal() {
    popTotal = 0
}

function setRockTotal() {
    rockTotal = 0
}

function setOtherTotal() {
    otherTotal = 0
}
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nWould you like to download another genre? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nWould you like to download another genre? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setDownloadType() {
    downloadType = Number(PROMPT.question(`\nWhich music genre would you like to download?
    1 = Classical,
    2 = Easy Listening,
    3 = Jazz,
    4 = Pop,
    5 = Rock,
    6 = Other,
    7 = View downloaded genres,
    If your title of choice is not listed please select other. `));
    switch (downloadType) {
        case 1: classical = Number(PROMPT.question(`Would you like to download a classical genre? 
        [0=no, 1=yes] `));
            console.log("Done, you are now ready to start listening to your classical music! ");
        classicalTotal = (classical + classicalTotal);
            break;
        case 2: easyListening = Number(PROMPT.question(`Would you like to download an easy listening genre? 
        [0=no, 1=yes] `));
            console.log("Done, you are now ready to start listening to your easy to listen to music! ");
            easyListeningTotal = (easyListening + easyListeningTotal);
            break;
        case 3: jazz = Number(PROMPT.question(`Would you like to download a jazz genre? 
        [0=no, 1=yes] `));
            console.log("Done, you are now ready to start listening to your jazz music! ");
            jazzTotal = (jazz + jazzTotal);
            break;
        case 4: pop = Number(PROMPT.question(`Would you like to download a pop genre? 
        [0=no, 1=yes] `));
            console.log("Done, you are now ready to start listening to your pop music! ");
            popTotal = (pop + popTotal);
            break;
        case 5: rock = Number(PROMPT.question(`Would you like to download a rock genre? 
        [0=no, 1=yes] `));
                console.log("Done, you are now ready to start listening to your rock music! ");
            rockTotal = (rock + rockTotal);
            break;
        case 6: other = Number(PROMPT.question(`Would you like to download from a different genre? 
        [0=no, 1=yes] `));
            console.log("Done, you are now ready to start listening to your multitude of playlist(s)! ");
            otherTotal = (other + otherTotal);
            break;
        case 7: console.log(`\nGenres downloaded today include: Classical ${classicalTotal}, Easy Listening ${easyListeningTotal},
     jazz ${jazzTotal}, Pop ${popTotal}, Rock ${rockTotal}, and different genres ${otherTotal}`)
            }

}

function printUnderThree() {
    console.log("\nThe following genres have made three dollars or less: ")
}

function setOneA() {
    if (classicalTotal <= 3) {
        console.log("Classical")
    }
}

function setTwoA() {
    if (easyListeningTotal <= 3) {
        console.log("Easy Listening")
    }
}

function setThreeA() {
    if (jazzTotal <= 3) {
        console.log("Jazz")
    }
}

function setFourA() {
    if (popTotal <= 3) {
        console.log("Pop")
    }
}

function setFiveA() {
    if (rockTotal <= 3) {
        console.log("Rock")
    }
}

function setSixA() {
    if (otherTotal <= 3) {
        console.log("Multi-Genre")
    }
}


function printLowBetween() {
    console.log("\nThe following genres have made between three to six dollars: ")
}

function setOneB() {
    if (classicalTotal > 3 && classicalTotal <=6) {
        console.log("Classical")
    }
}

function setTwoB() {
    if (easyListeningTotal > 3 && easyListeningTotal <= 6 ) {
        console.log("Easy Listening")
    }
}

function setThreeB() {
    if (jazzTotal > 3 && jazzTotal <= 6) {
        console.log("Jazz")
    }
}

function setFourB() {
    if (popTotal > 3 && popTotal <= 6) {
        console.log("Pop")
    }
}

function setFiveB() {
    if (rockTotal > 3 && rockTotal <= 6) {
        console.log("Rock")
    }
}

function setSixB() {
    if (otherTotal > 3 && otherTotal <= 6) {
        console.log("Multi-Genre")
    }
}

function printHighBetween() {
    console.log("\nThe following genres have made between six to ten dollars: ")
}

function setOneC() {
    if (classicalTotal > 6 && classicalTotal <=10) {
        console.log("Classical")
    }
}

function setTwoC() {
    if (easyListeningTotal > 6 && easyListeningTotal <= 10 ) {
        console.log("Easy Listening")
    }
}

function setThreeC() {
    if (jazzTotal > 6 && jazzTotal <= 10) {
        console.log("Jazz")
    }
}

function setFourC() {
    if (popTotal > 6 && popTotal <= 10) {
        console.log("Pop")
    }
}

function setFiveC() {
    if (rockTotal > 6 && rockTotal <= 10) {
        console.log("Rock")
    }
}

function setSixC() {
    if (otherTotal > 6 && otherTotal <= 10) {
        console.log("Multi-Genre")
    }
}

function printAboveTen() {
    console.log("\nThe following genres have made above ten dollars: ")
}

function setOneD() {
    if (classicalTotal > 10) {
        console.log("Classical")
    }
}

function setTwoD() {
    if (easyListeningTotal > 10) {
        console.log("Easy Listening")
    }
}

function setThreeD() {
    if (jazzTotal > 10) {
        console.log("Jazz")
    }
}

function setFourD() {
    if (popTotal > 10) {
        console.log("Pop")
    }
}

function setFiveD() {
    if (rockTotal > 10) {
        console.log("Rock")
    }
}

function setSixD() {
    if (otherTotal > 10) {
        console.log("Multi-Genre")
    }
}


function printBye() {
    console.log(`\nHave a nice day!`)
}
