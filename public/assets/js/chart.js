$(document).ready(function () {
  $.ajax({
    url: "/api/applied",
    method: "GET",
    success: function (data) {
      console.log(data);

      var salary = [];
      var company = [];

      for (var i in data) {
        salary.push(data[i].salary);
        company.push(data[i].company);
      }

      var chartdata = {
        labels: company,
        datasets: [{
          label: "Price per Job",
          fill: false,
          lineTension: 0.1,
          backgroundColor: ["#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"],
          borderColor: "rgba(15, 52, 89, 0.75)",
          pointHoverBackgroundColor: "rgba(15, 52, 89, 0.75)",
          pointHoverBorderColor: "rgba(15, 52, 89, 0.75)",
          data: salary
        }]
      }
      var ctx = $("#myChart");

      var barGraph = new Chart(ctx, {
        type: 'doughnut',
        data: chartdata
      });
    }
  })
})
