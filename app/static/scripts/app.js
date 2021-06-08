let subjects = document.querySelectorAll("#subjects");

let assignBtn = document.getElementById("assignBtn");
var checkedSubs = [];

assignBtn.addEventListener("click", (e) => {
  for (var i = 0; i < subjects.length; i++) {
    if (subjects[i].checked) {
      checkedSubs.push(subjects[i].value);
    }
  }

  const xhr2 = new XMLHttpRequest();
  xhr2.open("post", "/insert-task");
  xhr2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr2.onload = () => {
    console.log(xhr2.responseText);
  };
  xhr2.send(
    `date=${document.getElementById("date").value}&targetTime=${
      document.getElementById("target-time").value
    }&achievedTime=${
      document.getElementById("achieved-time").value
    }&subjects=${checkedSubs.join()}`
  );
});

const xhr = new XMLHttpRequest();

xhr.open("get", "/getLocal");
xhr.onload = function () {
  document.getElementById("date").value = xhr.responseText;
};
xhr.send();

//Fetching JSON file and displaying in the HTML

function loadData() {
  window.onload = () => {
    const xhrReq = new XMLHttpRequest();
    xhrReq.open("get", "/fetchList");
    xhrReq.onload = () => {
      let rawDataSet = xhrReq.responseText;
      let parsedData = JSON.parse(rawDataSet);

      let htmlContent = "";
      parsedData.forEach((element) => {
        let subs = element.subjects.split(",");
        let subsView = "";
        subs.forEach((item) => {
          subsView += `<span class="sub-list">${item}</span>`;
        });
        let calculatePersentage =
          (parseInt(element.achievedTime) / parseInt(element.targetTime)) * 100;
        htmlContent += `
        <tr>
          <td><span class="sl">${element.id}</span></td>
          <td>${element.date}</td>
          <td>${element.targetTime} hr</td>
          <td>${element.achievedTime} hr</td>
          <td>${subsView}</td>
          <td> <div class="progress" style="min-width: 200px">
          <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${calculatePersentage}%"></div>
        </div></td>
        `;
      });

      document.getElementById("dataTableBody").innerHTML = htmlContent;
    };

    xhrReq.send();
  };
}
loadData();

document.getElementById("assignBtn").addEventListener("click", function () {
  location.reload();
});
