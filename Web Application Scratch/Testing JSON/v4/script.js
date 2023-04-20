let data = null;

let hashTable = {
    45.0: "Bar",
    50.0: "Bar + 2.5",
    55.0: "Bar + 5",
    60.0: "Bar + 5 + 2.5",
    65.0: "Bar + 10",
    70.0: "Bar + 10 + 2.5",
    75.0: "Bar + 15",
    80.0: "Bar + 15 + 2.5",
    85.0: "Bar + 15 + 5",
    90.0: "Bar + 15 + 5 + 2.5",
    95.0: "Bar + 25",
    100.0: "Bar + 25 + 2.5",
    105.0: "Bar + 25 + 5",
    110.0: "Bar + 25 + 5 + 2.5",
    115.0: "Bar + 35",
    120.0: "Bar + 35 + 2.5",
    125.0: "Bar + 35 + 5",
    130.0: "Bar + 35 + 5 + 2.5",
    135.0: "Bar + 45",
    140.0: "Bar + 45 + 2.5",
    145.0: "Bar + 45 + 5",
    150.0: "Bar + 45 + 5 + 2.5",
    155.0: "Bar + 45 + 10",
    160.0: "Bar + 45 + 10 + 2.5",
    165.0: "Bar + 45 + 15",
    170.0: "Bar + 45 + 15 + 2.5",
    175.0: "Bar + 45 + 15 + 5",
    180.0: "Bar + 45 + 15 + 5 + 2.5",
    185.0: "Bar + 45 + 25",
    190.0: "Bar + 45 + 25 + 2.5",
    195.0: "Bar + 45 + 25 + 5",
    200.0: "Bar + 45 + 25 + 5 + 2.5",
    205.0: "Bar + 45 + 35",
    210.0: "Bar + 45 + 35 + 2.5",
    215.0: "Bar + 45 + 35 + 5",
    220.0: "Bar + 45 + 35 + 5 + 2.5",
    225.0: "Bar + 45 + 45",
    230.0: "Bar + 45 + 45 + 2.5",
    235.0: "Bar + 45 + 45 + 5",
    240.0: "Bar + 45 + 45 + 5 + 2.5",
    245.0: "Bar + 45 + 45 + 10",
    250.0: "Bar + 45 + 45 + 10 + 2.5",
    255.0: "Bar + 45 + 45 + 15",
    260.0: "Bar + 45 + 45 + 15 + 2.5",
    265.0: "Bar + 45 + 45 + 15 + 5",
    270.0: "Bar + 45 + 45 + 15 + 5 + 2.5",
    275.0: "Bar + 45 + 45 + 25",
    280.0: "Bar + 45 + 45 + 25 + 2.5",
    285.0: "Bar + 45 + 45 + 25 + 5",
    290.0: "Bar + 45 + 45 + 25 + 5 + 2.5",
    295.0: "Bar + 45 + 45 + 35",
    300.0: "Bar + 45 + 45 + 35 + 2.5",
    305.0: "Bar + 45 + 45 + 35 + 5",
    310.0: "Bar + 45 + 45 + 35 + 5 + 2.5",
    315.0: "Bar + 45 + 45 + 35 + 10",
    320.0: "Bar + 45 + 45 + 35 + 10 + 2.5",
    325.0: "Bar + 45 + 45 + 35 + 15",
    330.0: "Bar + 45 + 45 + 35 + 15 + 2.5",
    335.0: "Bar + 45 + 45 + 35 + 15 + 5",
    340.0: "Bar + 45 + 45 + 35 + 15 + 5 + 2.5",
    345.0: "Bar + 45 + 45 + 35 + 25",
    350.0: "Bar + 45 + 45 + 35 + 25 + 2.5",
    355.0: "Bar + 45 + 45 + 35 + 25 + 5",
    360.0: "Bar + 45 + 45 + 35 + 25 + 5 + 2.5",
    365.0: "Bar + 45 + 45 + 35 + 25 + 10",
    370.0: "Bar + 45 + 45 + 35 + 25 + 10 + 2.5",
    375.0: "Bar + 45 + 45 + 35 + 25 + 15",
    380.0: "Bar + 45 + 45 + 35 + 25 + 15 + 2.5",
    385.0: "Bar + 45 + 45 + 35 + 25 + 15 + 5",
    390.0: "Bar + 45 + 45 + 35 + 25 + 15 + 5 + 2.5",
    395.0: "Bar + 45 + 45 + 35 + 25 + 15 + 10",
    400.0: "Bar + 45 + 45 + 35 + 25 + 15 + 10 + 2.5",
    405.0: "Bar + 45 + 45 + 35 + 25 + 15 + 10 + 5",
    410.0: "Bar + 45 + 45 + 35 + 25 + 15 + 10 + 5 + 2.5"

 };

function loadFile(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event) {
        data = JSON.parse(event.target.result);
        updateTables(0);
    };
    reader.readAsText(file);
}

function updateTables(startPercentage) {
    if (data === null) {
        return;
    }
    populateTable("benchPressTable", data.benchPress, startPercentage);
    populateTable("squatTable", data.squat, startPercentage);
    populateTable("deadliftTable", data.deadlift, startPercentage);
    populateTable("overheadPressTable", data.overheadPress, startPercentage);
}

function populateTable(tableId, max, startPercentage) {
    let table = document.getElementById(tableId);
    // Clear existing rows
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    for (let percentage = startPercentage; percentage <= startPercentage + 25; percentage += 5) {
        let row = table.insertRow(-1);
        let percentageCell = row.insertCell(0);
        let weightCell = row.insertCell(1);
        let stringCell = row.insertCell(2);
        percentageCell.innerHTML = percentage + "%";
        let weight = roundToNearest5(Math.round(max * (percentage / 100)));
        weightCell.innerHTML = weight;
        stringCell.innerHTML = hashTable[weight];
    }
}

function roundToNearest5(x) {
   return Math.round(x/5)*5;
}