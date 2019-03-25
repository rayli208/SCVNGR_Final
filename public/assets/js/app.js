//DISPLAY EITHER MOBILE OR DESKTOP DEPENDING ON SCREEN SIZE
function checkSize(){
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
    checkSize()
  });

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
    info: $("#text-area").val()
  };
  submitJob(newJob);
});

const submitJob = (job) => {
  console.log(job);
  $.ajax({
    method: "POST",
    url: "/api/applied",
    data: job
  })
    .then(function() {
      Swal.fire({
        type: 'success',
        title: 'Your Job Has Been Saved!',
        showConfirmButton: false,
        timer: 1500
      })
      setTimeout(function(){
        location.reload();
      }, 1500);
    });
}


















//DRAG EVEN SECTION
  var drake = dragula([
    document.getElementById("applied"),
    document.getElementById("heardBack"),
    document.getElementById("offer")
  ]);

  drake.on("drop", function(el, target, source, sibling) {
    console.log(
      "Started at: " +
        source.id +
        " Landed at:" +
        target.id +
        " Sibling " +
        el.previousSibling.id
    );
  });
});
