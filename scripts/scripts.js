let data = null;     
let timeLeft = 0;
let timer;

function startTimer(duration) {
    clearInterval(timer);
    timeLeft = duration;
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timeLeft = 0;
    document.getElementById("timer").innerHTML = "0:00";
    document.getElementById("alarm").pause();
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("timer").innerHTML = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    } else {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Time's up!";
        document.getElementById("alarm").play();
    }
}

function loadFile(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
        try {
            data = JSON.parse(event.target.result);
            updateTables();
        } catch (e) {
            alert("Error: Invalid file format. Please choose a valid JSON file.");
        }
    };
    reader.onerror = function () {
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
    let trainingMax = max * 0.9; 
    let table = document.getElementById(tableId);
    
    // Clear existing rows
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    for (let week = 1; week <= 4; week++) {
        let row = table.insertRow(-1);
        let weekCell = row.insertCell(0);
        weekCell.innerHTML = "Week " + week;

        if (week == 1) {
            addSet(row, trainingMax, 0.35, 5);
            addSet(row, trainingMax, 0.45, 5);
            addSet(row, trainingMax, 0.55, 3);
            addSet(row, trainingMax, 0.65, 5);
            addSet(row, trainingMax, 0.75, 5);
            addSet(row, trainingMax, 0.85, 5);
            addSet(row, trainingMax, 0.55, 10);
        } else if (week == 2) {
            addSet(row, trainingMax, 0.35, 5);
            addSet(row, trainingMax, 0.45, 5);
            addSet(row, trainingMax, 0.55, 3);
            addSet(row, trainingMax, 0.7, 3);
            addSet(row, trainingMax, 0.8, 3);
            addSet(row, trainingMax, 0.9, 3);
            addSet(row, trainingMax, 0.55, 10);
        } else if (week == 3) {
            addSet(row, trainingMax, 0.35, 5);
            addSet(row, trainingMax, 0.45, 5);
            addSet(row, trainingMax, 0.55, 3);
            addSet(row, trainingMax, 0.75, 5);
            addSet(row, trainingMax, 0.85, 3);
            addSet(row, trainingMax, 0.95, 1);
            addSet(row, trainingMax, 0.55, 10);
        } else if (week == 4) {
            addSet(row, trainingMax, 0.4, 10);
            addSet(row, trainingMax, 0.5, 10);
            addSet(row, trainingMax, 0.6, 10);
        }
    }
}

function addSet(row, trainingMax, percentageOfTrainingMax, reps) {
    // Generate the cell's text...
    let setCell = row.insertCell(-1);
    setCell.classList.add("cell-tooltip"); // Add a unique class to the setCell element...
    let weight = roundToNearest5(trainingMax * percentageOfTrainingMax);
    setCell.innerHTML = `(${Math.trunc(percentageOfTrainingMax * 100)}%) ${weight} x ${reps}`;

    // Build the tooltip text that appears when the cursor is
    // hovered above a table's cell.
    let barWeight = 45;
    let plates = calculatePlates((weight - barWeight) / 2);
    let tooltipText = plates.map(p => p + " lbs").join(" + ");
    setCell.setAttribute("data-title", tooltipText);
}

function roundToNearest5(x) {
    return Math.round(x / 5) * 5;
}

// To be used if an unlimited amount of 45lb plates is available...
/*
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
*/

// To be used if a limited amount of plates is available...
/*
function calculatePlates(weight) {
    let plates = [45, 35, 25, 10, 5, 2.5];
    let result = [];
    let count45 = 0;
    for (let i = 0; i < plates.length; i++) {
        while (weight >= plates[i]) {
            if (plates[i] === 45 && count45 === 2) {
                break;
            }
            result.push(plates[i]);
            weight -= plates[i];
            if (plates[i] === 45) {
                count45++;
            }
        }
    }
    return result;
}
*/

// To be used in our current gym setup... yikes
function calculatePlates(weight) {
    let plates = [45, 35, 25, 15, 10, 5, 2.5];
    let result = [];
    let count45 = 0;
    let count35 = 0;
    let count25 = 0;
    let count15 = 0;
    let count10 = 0;
    let count5 = 0;
    let count2_5 = 0;
    for (let i = 0; i < plates.length; i++) {
        while (weight >= plates[i]) {
            if (plates[i] === 45 && count45 === 2) {
                break;
            }
            if (plates[i] === 35 && count35 === 1) {
                break;
            }
            if (plates[i] === 25 && count25 === 1) {
                break;
            }
            if (plates[i] === 15 && count15 === 1) {
                break;
            }
            if (plates[i] === 10 && count10 === 1) {
                break;
            }
            if (plates[i] === 5 && count5 === 1) {
                break;
            }
            if (plates[i] === 2.5 && count2_5 === 1) {
                break;
            }
            result.push(plates[i]);
            weight -= plates[i];
            if (plates[i] === 45) {
                count45++;
            }
            if (plates[i] === 35) {
                count35++;
            }
            if (plates[i] === 25) {
                count25++;
            }
            if (plates[i] === 15) {
                count15++;
            }
            if (plates[i] === 10) {
                count10++;
            }
            if (plates[i] === 5) {
                count5++;
            }
            if (plates[i] === 2.5) {
                count2_5++;
            }
        }
    }
    return result;
}

// Function to calculate one rep max
function calculateOneRepMax(weight, reps) {
    const oneRepMax = weight / (1.0278 - 0.0278 * reps);

    // Remove any decimal points
    return Math.trunc((oneRepMax / 5) * 5);
}

// Function to handle "Calculate One Rep Max" button click
function onCalculateButtonClick() {
    // Get user input for weight lifted and reps performed
    const weight = parseInt(document.querySelector('#weight').value);
    const reps = parseInt(document.querySelector('#reps').value);

    // Calculate one rep max
    const oneRepMax = calculateOneRepMax(weight, reps);

    // Display result in text field
    document.querySelector('#oneRepMaxFinal').textContent = oneRepMax;
}


// Add event listener to calculate button
// document.querySelector('#oneRepMaxButton').addEventListener('click', onCalculateButtonClick);
