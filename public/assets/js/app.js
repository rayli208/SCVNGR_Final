//DISPLAY EITHER MOBILE OR DESKTOP DEPENDING ON SCREEN SIZE
function checkSize() {
  if ($(window).width() >= 920) {
    $("#desktop-container").show();
    $("#mobile-container").hide();
  } else {
    $("#desktop-container").hide();
    $("#mobile-container").show();
  }
}
checkSize();

$(document).ready(function() {
  //ON SCREEN SIZE CHECK TO SEE IF MOBILE OR DESKTOP
  $(window).resize(function() {
    checkSize();
  });

  //LOADING UP ALL JOBS
  const loadAllJobs = () => {
    $.get(`/api/applied/`, function(data) {
      if (data.length !== 0) {
        var applied = document.getElementById("applied");
        for (var i = data.length - 1; i + 1 > data.length - data.length; i--) {
          var card_id = data[i]._id;
          var company = data[i].company;
          var job_title = data[i].job_title;
          var phone_number = data[i].phone_number;
          var email = data[i].email;
          var link = data[i].link;
          var salary = data[i].salary;
          var location = data[i].location;
          var info = data[i].info;
          var date_created = data[i].date_created;
          var stamp = moment(date_created).format("lll");

          var card = `
        <div id="${card_id}" class="shadow-lg card mx-auto mb-3 mt-2" style="width: 18rem;">
    <div class="card-top">
      <button class="btn card-header bg-purple" type="button" data-toggle="collapse" data-target="#cardCollapse${card_id}"
        aria-expanded="false" aria-controls="cardCollapse${card_id}">
        <h5 class="card-title">${company}</h5>
        <h6 class="card-subtitle mb-2 text-dimmed">${job_title}</h6>
      </button>
    </div>
    <div class="card-body collapse text-center" id="cardCollapse${card_id}">
      <h6 class="pb-1">Contact Info:</h6>
      <div class="btn-group pb-2" role="group" aria-label="Basic example">
        <a class="btn btn-pink side-borders" href="tel:${phone_number}"> <i class="fas fa-phone"></i></a>
        <a class="btn btn-pink side-borders" href="mailto:${email}""> <i class="fas fa-envelope"></i></a> 
        <a class="btn btn-pink side-borders" target="_blank" href="https://${link}"> <i class="fas fa-link"></i></a>
      </div>
      <ul class="list-group">
        <li class="list-group-item">
          <i class="fas fa-map-pin"></i> ${location}
        </li>
        <li class="list-group-item">
          <i class="fas fa-dollar-sign"></i> <span class="salary">${salary}</span>
        </li>
        <li class="list-group-item">
          <i class="fas fa-info-circle"></i><span class="info">${info}</span>
        </li>
      </ul>
    </div>
    <div class="card-footer">
    <span class="text-muted"> Applied:  ${stamp} </span>
      <i class="fas fa-trash-alt trash"></i>
      <i class="fas fa-edit edit"></i>
    </div>
  </div>
          `;

          applied.innerHTML = applied.innerHTML += card;
        }
      }
    });

    $.get(`/api/heardback/`, function(data) {
      if (data.length !== 0) {
        var heardBack = document.getElementById("heardBack");
        for (var i = data.length - 1; i + 1 > data.length - data.length; i--) {
          var card_id = data[i]._id;
          var company = data[i].company;
          var job_title = data[i].job_title;
          var phone_number = data[i].phone_number;
          var email = data[i].email;
          var link = data[i].link;
          var salary = data[i].salary;
          var location = data[i].location;
          var info = data[i].info;
          var date_created = data[i].date_created;
          var stamp = moment(date_created).format("lll");

          var card = `
        <div id="${card_id}" class="shadow-lg card mx-auto mb-3 mt-2" style="width: 18rem;">
    <div class="card-top">
      <button class="btn card-header bg-purple" type="button" data-toggle="collapse" data-target="#cardCollapse${card_id}"
        aria-expanded="false" aria-controls="cardCollapse${card_id}">
        <h5 class="card-title">${company}</h5>
        <h6 class="card-subtitle mb-2 text-dimmed">${job_title}</h6>
      </button>
    </div>
    <div class="card-body collapse text-center" id="cardCollapse${card_id}">
      <h6 class="pb-1">Contact Info:</h6>
      <div class="btn-group pb-2" role="group" aria-label="Basic example">
        <a class="btn btn-pink side-borders" href="tel:${phone_number}"> <i class="fas fa-phone"></i></a>
        <a class="btn btn-pink side-borders" href="mailto:${email}""> <i class="fas fa-envelope"></i></a> 
        <a class="btn btn-pink side-borders" target="_blank" href="https://${link}"> <i class="fas fa-link"></i></a>
      </div>
      <ul class="list-group">
        <li class="list-group-item">
          <i class="fas fa-map-pin"></i> ${location}
        </li>
        <li class="list-group-item">
          <i class="fas fa-dollar-sign"></i> <span class="salary">${salary}</span>
        </li>
        <li class="list-group-item">
          <i class="fas fa-info-circle"></i><span class="info">${info}</span>
        </li>
      </ul>
    </div>
    <div class="card-footer">
    <span class="text-muted"> Applied:  ${stamp} </span>
      <i class="fas fa-trash-alt trash"></i>
      <i class="fas fa-edit edit"></i>
    </div>
  </div>
          `;

          heardBack.innerHTML = heardBack.innerHTML += card;
        }
      }
    });

    $.get(`/api/offer/`, function(data) {
      if (data.length !== 0) {
        var offer = document.getElementById("offer");
        for (var i = data.length - 1; i + 1 > data.length - data.length; i--) {
          var card_id = data[i]._id;
          var company = data[i].company;
          var job_title = data[i].job_title;
          var phone_number = data[i].phone_number;
          var email = data[i].email;
          var link = data[i].link;
          var salary = data[i].salary;
          var location = data[i].location;
          var info = data[i].info;
          var date_created = data[i].date_created;
          var stamp = moment(date_created).format("lll");

          var card = `
        <div id="${card_id}" class="shadow-lg card mx-auto mb-3 mt-2" style="width: 18rem;">
    <div class="card-top">
      <button class="btn card-header bg-purple" type="button" data-toggle="collapse" data-target="#cardCollapse${card_id}"
        aria-expanded="false" aria-controls="cardCollapse${card_id}">
        <h5 class="card-title">${company}</h5>
        <h6 class="card-subtitle mb-2 text-dimmed">${job_title}</h6>
      </button>
    </div>
    <div class="card-body collapse text-center" id="cardCollapse${card_id}">
      <h6 class="pb-1">Contact Info:</h6>
      <div class="btn-group pb-2" role="group" aria-label="Basic example">
        <a class="btn btn-pink side-borders" href="tel:${phone_number}"> <i class="fas fa-phone"></i></a>
        <a class="btn btn-pink side-borders" href="mailto:${email}""> <i class="fas fa-envelope"></i></a> 
        <a class="btn btn-pink side-borders" target="_blank" href="https://${link}"> <i class="fas fa-link"></i></a>
      </div>
      <ul class="list-group">
        <li class="list-group-item">
          <i class="fas fa-map-pin"></i> ${location}
        </li>
        <li class="list-group-item">
          <i class="fas fa-dollar-sign"></i> <span class="salary">${salary}</span>
        </li>
        <li class="list-group-item">
          <i class="fas fa-info-circle"></i><span class="info">${info}</span>
        </li>
      </ul>
    </div>
    <div class="card-footer">
    <span class="text-muted"> Applied:  ${stamp} </span>
      <i class="fas fa-trash-alt trash"></i>
      <i class="fas fa-edit edit"></i>
    </div>
  </div>
          `;

          offer.innerHTML = offer.innerHTML += card;
        }
      }
    });
  };

  loadAllJobs();

  //CREATING A NEW JOB BY SUBMITTING IT
  $("#submit").on("click", function() {
    const newJob = {
      company: $("#company").val(),
      job_title: $("#title").val(),
      phone_number: $("#phone").val(),
      email: $("#email").val(),
      link: $("#totalSlept").val(),
      location: $("#location").val(),
      salary: $("#salary").val(),
      info: JSON.stringify($("#info").html())
    };
    submitJob(newJob);
  });

  const submitJob = job => {
    console.log(job);
    $.ajax({
      method: "POST",
      url: "/api/applied",
      data: job
    }).then(function() {
      Swal.fire({
        type: "success",
        title: "Your Job Has Been Saved!",
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(function() {
        location.reload();
      }, 1500);
    });
  };

  const appliedHeardBack = id => {
    $.get(`/api/applied/${id}`, function(data) {
      console.log(data[0]);
      var card_id = data[0]._id;
      var company = data[0].company;
      var job_title = data[0].job_title;
      var phone_number = data[0].phone_number;
      var email = data[0].email;
      var link = data[0].link;
      var salary = data[0].salary;
      var location = data[0].location;
      var info = data[0].info;
      var date_created = data[0].date_created;
      var stamp = moment(date_created).format("lll");
      var card = {
        card_id: card_id,
        company: company,
        job_title: job_title,
        phone_number: phone_number,
        email: email,
        link: link,
        salary: salary,
        location: location,
        info: info,
        date_created: stamp
      };
      $.ajax({
        method: "POST",
        url: "/api/heardback",
        data: card
      });
    });
    $.ajax({
      method: "Delete",
      url: `/api/applied/${id}`
    });
  };

  const appliedOffer = id => {
    $.get(`/api/applied/${id}`, function(data) {
      console.log(data[0]);
      var card_id = data[0]._id;
      var company = data[0].company;
      var job_title = data[0].job_title;
      var phone_number = data[0].phone_number;
      var email = data[0].email;
      var link = data[0].link;
      var salary = data[0].salary;
      var location = data[0].location;
      var info = data[0].info;
      var date_created = data[0].date_created;
      var stamp = moment(date_created).format("lll");
      var card = {
        card_id: card_id,
        company: company,
        job_title: job_title,
        phone_number: phone_number,
        email: email,
        link: link,
        salary: salary,
        location: location,
        info: info,
        date_created: stamp
      };
      $.ajax({
        method: "POST",
        url: "/api/offer",
        data: card
      });
    });
    $.ajax({
      method: "Delete",
      url: `/api/applied/${id}`
    });
  };

  const heardBackApplied = id => {
    $.get(`/api/heardback/${id}`, function(data) {
      console.log(data[0]);
      var card_id = data[0]._id;
      var company = data[0].company;
      var job_title = data[0].job_title;
      var phone_number = data[0].phone_number;
      var email = data[0].email;
      var link = data[0].link;
      var salary = data[0].salary;
      var location = data[0].location;
      var info = data[0].info;
      var date_created = data[0].date_created;
      var stamp = moment(date_created).format("lll");
      var card = {
        card_id: card_id,
        company: company,
        job_title: job_title,
        phone_number: phone_number,
        email: email,
        link: link,
        salary: salary,
        location: location,
        info: info,
        date_created: stamp
      };
      $.ajax({
        method: "POST",
        url: "/api/applied",
        data: card
      });
    });
    $.ajax({
      method: "Delete",
      url: `/api/heardback/${id}`
    });
  };

  const heardBackOffer = id => {
    $.get(`/api/heardback/${id}`, function(data) {
      console.log(data[0]);
      var card_id = data[0]._id;
      var company = data[0].company;
      var job_title = data[0].job_title;
      var phone_number = data[0].phone_number;
      var email = data[0].email;
      var link = data[0].link;
      var salary = data[0].salary;
      var location = data[0].location;
      var info = data[0].info;
      var date_created = data[0].date_created;
      var stamp = moment(date_created).format("lll");
      var card = {
        card_id: card_id,
        company: company,
        job_title: job_title,
        phone_number: phone_number,
        email: email,
        link: link,
        salary: salary,
        location: location,
        info: info,
        date_created: stamp
      };
      $.ajax({
        method: "POST",
        url: "/api/offer",
        data: card
      });
    });
    $.ajax({
      method: "Delete",
      url: `/api/heardback/${id}`
    });
  };

  const offerApplied = id => {
    $.get(`/api/offer/${id}`, function(data) {
      console.log(data[0]);
      var card_id = data[0]._id;
      var company = data[0].company;
      var job_title = data[0].job_title;
      var phone_number = data[0].phone_number;
      var email = data[0].email;
      var link = data[0].link;
      var salary = data[0].salary;
      var location = data[0].location;
      var info = data[0].info;
      var date_created = data[0].date_created;
      var stamp = moment(date_created).format("lll");
      var card = {
        card_id: card_id,
        company: company,
        job_title: job_title,
        phone_number: phone_number,
        email: email,
        link: link,
        salary: salary,
        location: location,
        info: info,
        date_created: stamp
      };
      $.ajax({
        method: "POST",
        url: "/api/applied",
        data: card
      });
    });
    $.ajax({
      method: "Delete",
      url: `/api/offer/${id}`
    });
  };


  const offerHeardBack = id => {
    $.get(`/api/offer/${id}`, function(data) {
      console.log(data[0]);
      var card_id = data[0]._id;
      var company = data[0].company;
      var job_title = data[0].job_title;
      var phone_number = data[0].phone_number;
      var email = data[0].email;
      var link = data[0].link;
      var salary = data[0].salary;
      var location = data[0].location;
      var info = data[0].info;
      var date_created = data[0].date_created;
      var stamp = moment(date_created).format("lll");
      var card = {
        card_id: card_id,
        company: company,
        job_title: job_title,
        phone_number: phone_number,
        email: email,
        link: link,
        salary: salary,
        location: location,
        info: info,
        date_created: stamp
      };
      $.ajax({
        method: "POST",
        url: "/api/heardback",
        data: card
      });
    });
    $.ajax({
      method: "Delete",
      url: `/api/offer/${id}`
    });
  };

  //DRAG EVEN SECTION
  var drake = dragula([
    document.getElementById("applied"),
    document.getElementById("heardBack"),
    document.getElementById("offer")
  ]);

  drake.on("drop", function(el, target, source, sibling) {
    if (source.id === "applied" && target.id === "heardBack") {
      appliedHeardBack(el.id);
    } else if (source.id === "applied" && target.id === "offer") {
      appliedOffer(el.id);
    } else if (source.id === "offer" && target.id === "applied") {
      offerApplied(el.id);
    } else if (source.id === "offer" && target.id === "heardBack") {
      offerHeardBack(el.id);
    } else if (source.id === "heardBack" && target.id === "applied") {
      heardBackApplied(el.id);
    } else if (source.id === "heardBack" && target.id === "offer") {
      heardBackOffer(el.id);
    } else {
      console.log("Stayed in the same group!");
    }
  });
});
