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

 let data = null;

 function loadFile(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event) {
        try {
            data = JSON.parse(event.target.result);
            updateTables();
        } catch (e) {
            alert("Error: Invalid file format. Please choose a valid JSON file.");
        }
    };
    reader.onerror = function() {
        alert("Error: Unable to read file. Please try again.");
    };
    reader.readAsText(file);
}
 
 function updateTables() {
     if (data === null) {
         return;
     }
     populateTable("benchPressTable", data.benchPress);
     populateTable("squatTable", data.squat);
     populateTable("deadliftTable", data.deadlift);
     populateTable("overheadPressTable", data.overheadPress);
 }
 
 function populateTable(tableId, max) {
     let table = document.getElementById(tableId);
     // Clear existing rows
     while (table.rows.length > 1) {
         table.deleteRow(1);
     }
     let trainingMax = max * 0.9;
     for (let week = 1; week <= 4; week++) {
         let row = table.insertRow(-1);
         let weekCell = row.insertCell(0);
         weekCell.innerHTML = "Week " + week;
 
         if (week == 1) {
             addSet(row, trainingMax, 0.65, 5);
             addSet(row, trainingMax, 0.75, 5);
             addSet(row, trainingMax, 0.85, 5);
         } else if (week == 2) {
             addSet(row, trainingMax, 0.7, 3);
             addSet(row, trainingMax, 0.8, 3);
             addSet(row, trainingMax, 0.9, 3);
         } else if (week == 3) {
             addSet(row, trainingMax, 0.75, 5);
             addSet(row, trainingMax, 0.85, 3);
             addSet(row, trainingMax, 0.95, 1);
         } else if (week == 4) {
             addSet(row, trainingMax, 0.4, 5);
             addSet(row, trainingMax, 0.5, 5);
             addSet(row, trainingMax, 0.6, 5);
         }
     }
 }
 
 function addSet(row, trainingMax, percentageOfTrainingMax , reps) {
    let setCell = row.insertCell(-1);
    let weight = roundToNearest5(trainingMax * percentageOfTrainingMax);
    setCell.innerHTML = `(${percentageOfTrainingMax * 100}%) ${weight} x ${reps}`;
    let barWeight = 45;
    let plates = calculatePlates((weight - barWeight) / 2);
    let tooltipText = plates.map(p => p + " lbs").join(" + ");
    setCell.title = tooltipText;
}

function calculatePlates(weight) {
    let plates = [45, 35, 25, 10, 5, 2.5];
    let result = [];
    for (let i = 0; i < plates.length; i++) {
        while (weight >= plates[i]) {
            result.push(plates[i]);
            weight -= plates[i];
        }
    }
    return result;
}
 
 function roundToNearest5(x) {
    return Math.round(x/5)*5;
 }

// Function to calculate one rep max
function calculateOneRepMax(weight, reps) {
    const oneRepMax = weight * (1 + reps / 30);
    
    // Remove any decimal points
    return Math.floor(oneRepMax / 5) * 5;
  }
  
  // Function to handle button click
  function onButtonClick() {
    // Show the pop-up window
    document.querySelector('#popup').style.display = 'block';
  }
  
  // Function to handle calculate button click
  function onCalculateButtonClick() {
    // Get user input for weight lifted and reps performed
    const weight = parseInt(document.querySelector('#weight').value);
    const reps = parseInt(document.querySelector('#reps').value);
  
    // Calculate one rep max
    const oneRepMax = calculateOneRepMax(weight, reps);
  
    // Display result in text field
    document.querySelector('#oneRepMax').textContent = oneRepMax;
  }
  
  // Function to handle close button click
  function onCloseButtonClick() {
    // Hide the pop-up window
    document.querySelector('#popup').style.display = 'none';
  }
  
  // Add event listener to button
  document.querySelector('#oneRepButton').addEventListener('click', onButtonClick);
  
  // Add event listener to calculate button
  document.querySelector('#calculateButton').addEventListener('click', onCalculateButtonClick);
  
  // Add event listener to close button
  document.querySelector('#closeButton').addEventListener('click', onCloseButtonClick);