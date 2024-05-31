// Chọn phương thức tạo kpi
const newBtn = document.querySelector('#new-kpi-btn');
const expBtn = document.querySelector('#example-kpi-btn');
const ulBtn = document.querySelector('#upload-kpi-label');
const newContent = document.querySelector('#new-kpi-content');
const expContent = document.querySelector('#example-kpi-content');
const ulContent = document.querySelector('#upload-kpi-content');
const ulInput = document.querySelector('#upload-kpi-btn');

function newKpi() {
    if (!newBtn.classList.contains("active")) {
        expBtn.classList.remove("active");
        ulBtn.classList.remove("active");
        newBtn.classList.add("active");

        expContent.classList.remove("active");
        ulContent.classList.remove("active");
        newContent.classList.add("active");
    }
}

function exampleKpi() {
    if (!expBtn.classList.contains("active")) {
        expBtn.classList.add("active");
        ulBtn.classList.remove("active");
        newBtn.classList.remove("active");

        expContent.classList.add("active");
        ulContent.classList.remove("active");
        newContent.classList.remove("active");
    }
}

function uploadKpi() {
    if (!ulBtn.classList.contains("active")) {
        expBtn.classList.remove("active");
        ulBtn.classList.add("active");
        newBtn.classList.remove("active");

        expContent.classList.remove("active");
        newContent.classList.remove("active");
        ulInput.addEventListener('change', function () {
            if (ulInput.files.length > 0) {
                ulContent.classList.add("active");
            }
        });
    }
}

// Chọn phương thức tính KPI
const unitKpiElement = document.querySelector("#unit-kpi");
const taskKpiElement = document.querySelector("#task-kpi");

function selectKpiMethod() {
    var select = document.getElementById("kpi-method");
    var selectedValue = select.options[select.selectedIndex].value;

    if (selectedValue === "unit") {
        showUnitKpi();
    } else if (selectedValue === "task") {
        showTaskKpi();
    }
}

function showUnitKpi() {
    unitKpiElement.style.display = "block";
    taskKpiElement.style.display = "none";
}

function showTaskKpi() {
    taskKpiElement.style.display = "block";
    unitKpiElement.style.display = "none";
}

// Unit
// Lặp hay không lặp
const loopOption = document.querySelector('#kpi-type-option');
const loopType = document.querySelector('#loop-type');
const selectedLoop = document.querySelector('#kpi-loop-type');
const dayOption = document.querySelector('#day-option');
const weekOption = document.querySelector('#week-option');
const monthOption = document.querySelector('#month-option');

function loop() {
    var selectedValue = loopOption.options[loopOption.selectedIndex].value;
    if (selectedValue === "loop") {
        loopType.style.display = "block";
        dayOption.style.display = "none";
        weekOption.style.display = "none";
        monthOption.style.display = "none";
    } else if (selectedValue === "one-time") {
        loopType.style.display = "none";
        dayOption.style.display = "flex";
        weekOption.style.display = "none";
        monthOption.style.display = "none";
    }
}

function loopDate() {
    var selectedValue = selectedLoop.options[selectedLoop.selectedIndex].value;
    if (selectedValue === "every-day") {
        dayOption.style.display = "flex";
        weekOption.style.display = "none";
        monthOption.style.display = "none";
    } else if (selectedValue === "every-week") {
        dayOption.style.display = "none";
        weekOption.style.display = "flex";
        monthOption.style.display = "none";
    } else if (selectedValue === "every-month") {
        dayOption.style.display = "none";
        weekOption.style.display = "none";
        monthOption.style.display = "flex";
    }
}

// Thêm ngày vào week
const weekContainer = document.getElementById("week-item-list");
const addWeekBtn = document.getElementById("add-more-day-in-week");

function addDayToWeek() {
    const weekOptionTemplate = document.querySelector(".week-item");
    const weekOptionClone = weekOptionTemplate.cloneNode(true);
    weekContainer.appendChild(weekOptionClone);

    const removeWeekBtn = weekOptionClone.querySelector('.remove-day-in-week-btn');
    removeWeekBtn.addEventListener("click", removeDayFromWeek);
}

function removeDayFromWeek(event) {
    if (weekContainer.childElementCount > 1) {
        const weekItemToRemove = event.target.closest(".week-item");
        weekContainer.removeChild(weekItemToRemove);
    }
}

addWeekBtn.addEventListener("click", addDayToWeek);

// Thêm ngày vào month
const monthContainer = document.getElementById("month-item-list");
const addMonthBtn = document.getElementById("add-more-day-in-month");

function addDayToMonth() {
    const monthOptionTemplate = document.querySelector(".month-item");
    const monthOptionClone = monthOptionTemplate.cloneNode(true);
    monthContainer.appendChild(monthOptionClone);

    const removeMonthBtn = monthOptionClone.querySelector('.remove-month-item-btn');
    removeMonthBtn.addEventListener("click", removeDayFromMonth);
}

function removeDayFromMonth(event) {
    if(monthContainer.childElementCount > 1) {
        const monthItemToRemove = event.target.closest(".month-item");
        monthContainer.removeChild(monthItemToRemove);
    }
}

addMonthBtn.addEventListener("click", addDayToMonth);

// Task kpi

// Chon loai task
const taskSelect = document.querySelector("#task-kpi-type-option");
const sameTask = document.querySelector("#same-task");
const levelTask = document.querySelector("#level-task");

function taskWeight() {
    var selectedValue = taskSelect.options[taskSelect.selectedIndex].value;

    if (selectedValue === "same") {
        sameTask.style.display = "block";
        levelTask.style.display = "none";
    } else if (selectedValue === "level") {
        sameTask.style.display = "none";
        levelTask.style.display = "block";    
    }
}

// Same task
const sameContainer = document.getElementById("same-task-list");
const addSameBtn = document.getElementById("add-task-in-same");

function addTaskToSame() {
    const optionTemplate = document.querySelector(".same-task-item");
    const optionClone = optionTemplate.cloneNode(true);
    sameContainer.appendChild(optionClone);

    const removeBtn = optionClone.querySelector('.remove-task-in-same-btn');
    removeBtn.addEventListener("click", removeTaskFromSame);
}

function removeTaskFromSame(event) {
    if (sameContainer.childElementCount > 1) {
        const itemToRemove = event.target.closest(".same-task-item");
        sameContainer.removeChild(itemToRemove);
    }
}

addSameBtn.addEventListener("click", addTaskToSame);

// Level task
const levelContainer = document.getElementById("level-task-list");
const addLevelBtn = document.getElementById("add-task-in-level");

function addTaskToLevel() {
    const optionTemplate = document.querySelector(".level-task-item");
    const optionClone = optionTemplate.cloneNode(true);
    levelContainer.appendChild(optionClone);

    const removeBtn = optionClone.querySelector('.remove-task-in-level-btn');
    removeBtn.addEventListener("click", removeTaskFromLevel);
}

function removeTaskFromLevel(event) {
    if (levelContainer.childElementCount > 1) {
        const itemToRemove = event.target.closest(".level-task-item");
        levelContainer.removeChild(itemToRemove);
    }
}

addLevelBtn.addEventListener("click", addTaskToLevel);


const examples = document.querySelectorAll(".example");

examples.forEach(e => {
    e.addEventListener("click", function() {
        expContent.classList.remove("active");
        ulContent.classList.add("active");
        newContent.classList.remove("active");
    })
})


// Lấy tham chiếu đến form và thông báo
const myForm = document.getElementById("new-kpi-content");
const myForm2 = document.getElementById("upload-kpi-content");
const successKPI = document.getElementById("success-kpi");

// Thêm sự kiện submit cho form
myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    successKPI.style.display = "flex";
    setTimeout(function() {
        successKPI.style.display = "none";
        window.location.href = "/src/view/makekpi.html"; 
    }, 2000);
});

myForm2.addEventListener("submit", function(event) {
    event.preventDefault();
    successKPI.style.display = "flex";
    setTimeout(function() {
        successKPI.style.display = "none";
        window.location.href = "/src/view/makekpi.html"; 
    }, 2000);
});



