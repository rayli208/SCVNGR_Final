//DISPLAY EITHER MOBILE OR DESKTOP DEPENDING ON SCREEN SIZE
function checkSize() {
  if ($(window).width() > 920) {
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
  var width = $(window).width();
  $(window).resize(function() {
    checkSize();
    if (width > 920 && $(window).width() < 920) {
      location.reload();
    } else if (width < 920 && $(window).width() > 920) {
      location.reload();
    }
  });

  //LOADING UP ALL JOBS
  const loadAllJobs = () => {
    $.get(`/api/applied/`, function(data) {
      if (data.length !== 0) {
        var applied = document.getElementById("applied");
        var appliedMobile = document.getElementById("collapseOne");
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

          var mini_card = `
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
        <i class="fas fa-arrow-right"></i>
        <i class="fas fa-edit edit"></i>
      </div>
    </div>
            `;

          applied.innerHTML = applied.innerHTML += card;
          appliedMobile.innerHTML = appliedMobile.innerHTML += mini_card;
        }
      }
    });

    $.get(`/api/heardback/`, function(data) {
      if (data.length !== 0) {
        var heardBack = document.getElementById("heardBack");
        var heardMobile = document.getElementById("collapseTwo");
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

          var mini_card = `
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
        <i class="fas fa-arrow-right"></i>
        <i class="fas fa-edit edit"></i>
      </div>
    </div>
            `;

          heardBack.innerHTML = heardBack.innerHTML += card;
          heardMobile.innerHTML = heardMobile.innerHTML += mini_card;
        }
      }
    });

    $.get(`/api/offer/`, function(data) {
      if (data.length !== 0) {
        var offer = document.getElementById("offer");
        var offerMobile = document.getElementById("collapseThree");

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

          var mini_card = `
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
          offerMobile.innerHTML = offerMobile.innerHTML += mini_card;
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
      link: $("#link").val(),
      location: $("#location").val(),
      salary: $("#salary").val(),
      info: $("#text-area").val()
    };
    submitJob(newJob);
  });

  const submitJob = job => {
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

  $(document).on("click", ".fa-arrow-right", function() {
    const arrow = $(this)[0];
    const containerID = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .children()
      .eq(1)[0].id;
    const card = $(this)
      .parent()
      .parent()[0];
    const jobID = $(this)
      .parent()
      .parent()[0].id;

    if (containerID === "collapseOne") {
      Swal.fire({
        title: "Are you wanna move this to the next stage?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2e003e",
        cancelButtonColor: "#c49991",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          appliedHeardBack(jobID);
          $("#collapseTwo").append(card);
          $("#collapseOne").remove(card);
          Swal.fire({
            title: "Congratulations",
            text: "Keep on hustling!",
            type: "success",
            confirmButtonColor: "#2e003e"
          });
        }
      });
    } else if (containerID === "collapseTwo") {
      Swal.fire({
        title: "Are you wanna move this to the next stage?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2e003e",
        cancelButtonColor: "#c49991",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          arrow.remove();
          heardBackOffer(jobID);
          $("#collapseThree").append(card);
          $("#collapseTwo").remove(card);
          Swal.fire({
            title: "Congratulations",
            text: "Keep on hustling!",
            type: "success",
            confirmButtonColor: "#2e003e"
          });
        }
      });
    } else {
      console.log("There has been an error..");
    }
  });
});
