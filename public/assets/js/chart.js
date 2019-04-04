$(document).ready(function () {
  $.ajax({
    url: "/api/user/getjobs",
    method: "GET",
    success: function (data) {
      console.log(data);

      var applied = [];
      var heardBack = [];
      var offer = [];

      for (var i in data) {
        applied.push(data[i].applied.length);
        heardBack.push(data[i].heardback.length);
        offer.push(data[i].offer.length);
      }

      var chartdata = {
        labels: ["Applied", "Heard Back", "Offered"],
        datasets: [{
          label: [applied, heardBack, offer],
          fill: false,
          lineTension: 0.1,
          backgroundColor: ["#0074D9", "#FF4136", "#2ECC40"],
          borderColor: "rgba(15, 52, 89, 0.75)",
          pointHoverBackgroundColor: "rgba(15, 52, 89, 0.75)",
          pointHoverBorderColor: "rgba(15, 52, 89, 0.75)",
          data: [applied, heardBack, offer]
        }]
      }
      var ctx = $("#myChart");

      var barGraph = new Chart(ctx, {
        type: 'pie',
        data: chartdata,
      });
    }
  })

  // SALARY CHART 
  $.ajax({
    url: "/api/user/getjobs",
    method: "GET",
    success: function (data) {

      var ajobs = [];
      var hjobs = [];
      var ojobs = [];
      var asal = [];
      var hsal = [];
      var osal = [];
      var ajobs1 = [];
      var hjobs1 = [];
      var ojobs1 = [];
      var asal1 = [];
      var hsal1 = [];
      var osal1 = [];

      // APPLIED JOBS LOOP
      for (var i in data) {
        ajobs.push(data[i].applied);
        for (var x in data[i].applied) {
          ajobs1[x] = data[i].applied[x].company;
        }
      }
      console.log("AJOBS: ", ajobs1);

      // HEARDBACK JOBS LOOP
      for (var i in data) {
        hjobs.push(data[i].heardback);
        for (var x in data[i].heardback) {
          hjobs1[x] = data[i].heardback[x].company;
        }
      }
      console.log("HJOBS: ", hjobs1);

      // OFFERED JOBS LOOP
      for (var i in data) {
        ojobs.push(data[i].offer);
        for (var x in data[i].offer) {
          ojobs1[x] = data[i].offer[x].company;
        }
      }
      console.log("OJOBS: ", ojobs1);

      // APPLIED SALARY LOOP
      for (var i in data) {
        asal.push(data[i].applied);
        for (var x in data[i].applied) {
          asal1[x] = data[i].applied[x].salary;
        }
      }
      console.log("ASALARY: ", asal1);

      // HEARDBACK SALARY LOOP
      for (var i in data) {
        hsal.push(data[i].heardback);
        for (var x in data[i].heardback) {
          hsal1[x] = data[i].heardback[x].salary;
        }
      }
      console.log("HSALARY: ", hsal1)

      // OFFERED SALARY LOOP
      for (var i in data) {
        osal.push(data[i].offer);
        for (var x in data[i].offer) {
          osal1[x] = data[i].offer[x].salary;
        }
      }
      console.log("OSAL: ", osal1);

      var chartdata = {
        labels: [ajobs1, hjobs1, ojobs1],
        datasets: [{
          label: [ajobs1, hjobs1, ojobs1],
          fill: false,
          lineTension: 0.1,
          backgroundColor: ["#0074D9", "#FF4136", "#2ECC40"],
          borderColor: "rgba(15, 52, 89, 0.75)",
          pointHoverBackgroundColor: "rgba(15, 52, 89, 0.75)",
          pointHoverBorderColor: "rgba(15, 52, 89, 0.75)",
          data: [asal1, hsal1, osal1]
        }]
      }
      var ctx = $("#myChart2");

      var barGraph = new Chart(ctx, {
        type: 'bar',
        data: chartdata,
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }

      });

    }
  })

})
