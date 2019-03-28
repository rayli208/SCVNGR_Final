const appliedHeardBack = id => {
  $.get(`/api/applied/${id}`, function(data) {
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
