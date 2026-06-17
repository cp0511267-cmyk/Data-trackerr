// LOGIN SYSTEM

function login() {

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    if (
        username === "admin" &&
        password === "admin123"
    ) {

        document.getElementById(
            "loginPage"
        ).style.display = "none";

        document.getElementById(
            "dashboardPage"
        ).style.display = "block";

        alert(
            "Login Successful!"
        );

    }

    else {

        alert(
            "Invalid Username or Password"
        );

    }

}

// DATA STORAGE

let totalWorkers = 0;
let totalTasks = 0;
let presentWorkers = 0;

// ADD WORKER

function addWorker() {

    let name =
        document.getElementById(
            "workerName"
        ).value;

    let id =
        document.getElementById(
            "workerId"
        ).value;

    let mobile =
        document.getElementById(
            "workerMobile"
        ).value;

    let dept =
        document.getElementById(
            "workerDept"
        ).value;

    if (
        name === "" ||
        id === "" ||
        mobile === "" ||
        dept === ""
    ) {

        alert(
            "Please fill all fields"
        );

        return;

    }

    let table =
        document.getElementById(
            "workerTable"
        );

    let row =
        table.insertRow();

    row.insertCell(0).innerHTML = id;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = mobile;
    row.insertCell(3).innerHTML = dept;

    totalWorkers++;

    updateDashboard();

    document.getElementById(
        "workerName"
    ).value = "";

    document.getElementById(
        "workerId"
    ).value = "";

    document.getElementById(
        "workerMobile"
    ).value = "";

    document.getElementById(
        "workerDept"
    ).value = "";

}

// CHECK IN

function checkIn() {

    let table =
        document.getElementById(
            "attendanceTable"
        );

    let row =
        table.insertRow();

    row.insertCell(0).innerHTML =
        new Date().toLocaleTimeString();

    row.insertCell(1).innerHTML =
        "Checked In";

    presentWorkers++;

    updateDashboard();

}

// CHECK OUT

function checkOut() {

    let table =
        document.getElementById(
            "attendanceTable"
        );

    let row =
        table.insertRow();

    row.insertCell(0).innerHTML =
        new Date().toLocaleTimeString();

    row.insertCell(1).innerHTML =
        "Checked Out";

}

// ASSIGN TASK

function assignTask() {

    let worker =
        document.getElementById(
            "taskWorker"
        ).value;

    let task =
        document.getElementById(
            "taskName"
        ).value;

    if (
        worker === "" ||
        task === ""
    ) {

        alert(
            "Enter worker and task"
        );

        return;

    }

    let table =
        document.getElementById(
            "taskTable"
        );

    let row =
        table.insertRow();

    row.insertCell(0).innerHTML =
        worker;

    row.insertCell(1).innerHTML =
        task;

    row.insertCell(2).innerHTML =
        "Assigned";

    totalTasks++;

    updateDashboard();

    document.getElementById(
        "taskWorker"
    ).value = "";

    document.getElementById(
        "taskName"
    ).value = "";

}

// UPDATE DASHBOARD

function updateDashboard() {

    document.getElementById(
        "workerCount"
    ).innerHTML =
        totalWorkers;

    document.getElementById(
        "presentCount"
    ).innerHTML =
        presentWorkers;

    document.getElementById(
        "taskCount"
    ).innerHTML =
        totalTasks;

    document.getElementById(
        "reportWorkers"
    ).innerHTML =
        totalWorkers;

    document.getElementById(
        "reportTasks"
    ).innerHTML =
        totalTasks;

    let efficiency = 100;

    if (
        totalTasks > 0
    ) {

        efficiency =
            Math.min(
                100,
                70 + totalTasks
            );

    }

    document.getElementById(
        "efficiency"
    ).innerHTML =
        efficiency + "%";

}

// STARTUP MESSAGE

window.onload = function() {

    console.log(
        "AgriTrack Pro Loaded Successfully"
    );

};
