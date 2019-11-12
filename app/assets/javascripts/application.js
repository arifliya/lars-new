/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
});

$('#backLink').on('click', function(e){
  e.preventDefault();
  window.history.back();
});


// autocomlete option select function //
$(".autocomplete__menu").click(function() {
  $("#searchProviders").trigger("click");
  $('#changeUrl').attr('action', "qualification").submit();

  if ($('.autocomplete__input').val() === 'maths') {
    $('#changeUrl').attr('action', "all-results").submit();
  }
  
  if ($('.autocomplete__input').val() === 'science') {
    $('#changeUrl').attr('action', "all-results").submit();
  }
  
  if ($('.autocomplete__input').val() === 'AQA (Assessment and Qualifications Alliance)') {
    $('#changeUrl').attr('action', "all-results").submit();
  }
  
  if ($('.autocomplete__input').val() === 'Edexcel') {
    $('#changeUrl').attr('action', "all-results").submit();
  }

  // else {
  //   $('#changeUrl').attr('action', "all-results").submit();
  // }

});
