"use strict";


// PART 1: SHOW A FORTUNE
function fortuneSuccess(fortune) {
  //console.log("fortune: " + fortune);
  $('#fortune-text').html(fortune);
}

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
   // evt.preventDefault();
    //console.log("Requestion from server.");
    $.get("/fortune", fortuneSuccess);
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER
function weatherSuccess(results) {
  $('#weather-info').html(results['forecast']); 
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    $.get(url, formData, weatherSuccess);

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderSuccess(results) {

  $('#order-status').html(results['code'] );
}


function orderMelons(evt) {

    evt.preventDefault();

    let url = "/order-melons.json";
    let formData = {'qty': $("#qty-field").val(),
    'melon_type': $('melon-type-field').val()};
    

    $.post(url,formData,orderSuccess);


    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


