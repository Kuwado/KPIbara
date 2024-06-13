const currentDate = document.querySelector("#home-calendar-current-date"),
daysTag = document.querySelector("#home-calendar-days"),
prevNextIcon = document.querySelectorAll("#home-calendar-btns");
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
const renderCalender = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<div class = "inactive home-calendar-day"><div>${lastDateofLastMonth - i + 1}</div></div>`;
        
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let today = new Date(); // Ngày hiện tại
        let currentDate = new Date(currYear, currMonth, i); // Ngày hiện tại trong vòng lặp
        if (i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()) {
            liTag += `<div class="today active home-calendar-day" onclick="presentDay(this)"><div>${i}</div></div>`;
        } else if (currentDate > today) {
            liTag += `<div class="home-calendar-day" onclick="futureDay(this)"><div>${i}</div></div>`;
        } else {
            liTag += `<div class="home-calendar-day" onclick="pastDay(this)"><div>${i}</div></div>`;

        }
    }
    
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<div class = "inactive home-calendar-day"><div>${i - lastDayofMonth + 1}</div></div>`;
        
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalender();

function homeCalendarPrev() {
    currMonth--;
    if(currMonth < 0){
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date .getMonth();
    }else{
        date = new Date();
    }
    renderCalender();
}

function homeCalendarNext() {
    currMonth++;
    if(currMonth > 11){
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date .getMonth();
    }else{
        date = new Date();
    }
    renderCalender();
}
// ----------------------------------------------------- Chart ------------------------------------------------------------*/
const ctx = document.getElementById('overerview-bar-chart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
    datasets: [{
      label: 'Nhiệm vụ đạt chỉ tiêu: ',
      data: [5, 4, 3, 10, 2, 3, 1],
      backgroundColor: '#EA4C89',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx2 = document.getElementById('overerview-circle-chart').getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['KPI đạt chỉ tiêu', 'KPI chưa đạt chỉ tiêu'],
        datasets: [{
            label: 'Số lượng KPI: ',
            data: [75, 25], // Thay thế bằng dữ liệu thực tế
            backgroundColor: ['#EA4C89', '#f2f2f2'],
            borderColor: ['#EA4C89', '#f2f2f2'],
            borderWidth: 1,
            width: 30
        }]
    },
    options: {
        cutoutPercentage: 50,  // Giảm giá trị này để tăng độ rộng của phần biểu đồ
        responsive: true,
        // maintainAspectRatio: false,
        legend: {
            display: true,
            position: 'bottom',
        }
    }
});

/* ------------------------------------------------- slide -------------------------------------------------------------*/
const bestList = document.querySelector('#best-kpi-list');
const bestKpis = document.querySelectorAll('.best-kpi-item');
const bestKpiNumber = bestKpis.length - 2;
let currentIndex = 0;


function setUp() {
    bestKpis.forEach((kpi, index) => {
        kpi.style.left = `calc(((100% - 40px) / 3 + 20px) * ${index})`;
    })
}

setUp();

function bestKpiNext() {
    if (currentIndex < bestKpiNumber - 1) {
        currentIndex++;
        const conWidth = bestList.offsetWidth;
        const itemWidth = (conWidth - 40) / 3;
        bestList.style.left = -(itemWidth + 20) * currentIndex + "px";
    } else {
        bestList.style.left = "0";
        currentIndex = 0;
    }
}

function bestKpiPrev() {
    const conWidth = bestList.offsetWidth;
    const itemWidth = (conWidth - 40) / 3;
    if (currentIndex > 0) {
        currentIndex--;
        bestList.style.left = -(itemWidth + 20) * currentIndex + "px";
    } else {
        bestList.style.left = -(itemWidth + 20) * (bestKpiNumber - 1) + "px";
        currentIndex = bestKpiNumber - 1;
    }
}

setInterval(bestKpiNext, 5000);

/* ----------------------------------------------------- Mission ----------------------------------------------------*/
const inputNumber = document.querySelector('#input-number-today');

function homeConfirmMission() {
    const input = inputNumber.value;
    const mission = document.querySelector('.home-calendar-mission.now')
    if (input !== "") {
        mission.classList.remove("now");
        mission.classList.add("done");
        mission.querySelector('.home-calendar-done-btn').textContent = "Đã hoàn thành";
        // Đóng modal
        const modalElement = document.querySelector('#today-input');
        const modalInstance = bootstrap.Modal.getInstance(modalElement); // Lấy thể hiện của modal
        modalInstance.hide(); // Đóng modal
    } else {
        alert("Vui lòng nhập");
    }
}

/* ----------------------------------------------- Change Day -------------------------------------------------*/
const missions = document.querySelectorAll('.home-calendar-mission-list');
const soonMissions = document.querySelectorAll('.home-calendar-mission-list.soon');
const doneMissions = document.querySelectorAll('.home-calendar-mission-list.done');
const presentMission = document.querySelector('.home-calendar-mission-list.now');

function removeActiveFromDays() {
    const missionDays = document.querySelectorAll('.home-calendar-day');
    missionDays.forEach(mission => {
        mission.classList.remove('active');
    })
}

function removeActiveFromMissionList() {
    missions.forEach(mission => {
        mission.classList.remove('active');
    })
}

function futureDay(element) {
    const dayCon = element.closest('.home-calendar-day');
    removeActiveFromDays();
    dayCon.classList.add('active');
    const day = parseInt(dayCon.querySelector('div').textContent);
    removeActiveFromMissionList();
    let missionList;
    if (day%2 == 0) {
        missionList = document.querySelector('#home-calendar-mission-list-soon-2');
    } else {
        missionList = document.querySelector('#home-calendar-mission-list-soon-1');
    }
    missionList.classList.add('active');
}

function pastDay(element) {
    const dayCon = element.closest('.home-calendar-day');
    removeActiveFromDays();
    dayCon.classList.add('active');
    const day = parseInt(dayCon.querySelector('div').textContent);
    removeActiveFromMissionList();
    let missionList;
    if (day%2 == 0) {
        missionList = document.querySelector('#home-calendar-mission-list-done-2');
    } else {
        missionList = document.querySelector('#home-calendar-mission-list-done-1');
    }
    missionList.classList.add('active');
}

function presentDay(element) {
    const dayCon = element.closest('.home-calendar-day');
    removeActiveFromDays();
    dayCon.classList.add('active');
    removeActiveFromMissionList();
    let missionList = document.querySelector('#home-calendar-mission-list-now');
    missionList.classList.add('active');
}