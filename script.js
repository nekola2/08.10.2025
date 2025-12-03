function lupa() {
    //mainigo definesana
    let roomWidth = parseFloat(document.getElementById("roomWidth").value);
    let roomLength = parseFloat(document.getElementById("roomLength").value);
    let linoliumPrice = parseFloat(document.getElementById("linoliumPrice").value);
    let linoliumWidth = parseFloat(document.getElementById("linoliumWidth").value);

    //datu ievade
    //rekinasana skersam
    let stripsNeededCross = Math.ceil(roomLength / linoliumWidth);
    let linoliumLegthCross = stripsNeededCross * roomWidth;
    let linoliumAreaCross = linoliumLegthCross * linoliumWidth;
    let costCross = linoliumAreaCross * linoliumPrice;
    let wasteCross = linoliumAreaCross - (roomLength * roomWidth);
    let wasteCostCross = wasteCross * linoliumPrice;

    //rekinasana garaniski
    //izvade
    document.getElementById("lengthCross").value = linoliumLegthCross.toFixed(2) + " m";

}