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


//************** */ autocomlete option select function for version 1-0-0 *****************//
// $(".autocomplete__menu").click(function() {
//   $("#searchProviders").trigger("click");
//   $('#changeUrl').attr('action', "qualification").submit();

//   if ($('.autocomplete__input').val() === 'maths') {
//     $('#changeUrl').attr('action', "all-results").submit();
//   }
  
//   if ($('.autocomplete__input').val() === 'science') {
//     $('#changeUrl').attr('action', "all-results").submit();
//   }
  
//   if ($('.autocomplete__input').val() === 'AQA (Assessment and Qualifications Alliance)') {
//     $('#changeUrl').attr('action', "all-results").submit();
//   }
  
//   if ($('.autocomplete__input').val() === 'Edexcel') {
//     $('#changeUrl').attr('action', "all-results").submit();
//   }
  
//   if ($('.autocomplete__input').val() === 'engineering') {
//     $('#changeUrl').attr('action', "all-results").submit();
//   }

//   if ($('.autocomplete__input').val() === 'Functional Skills qualification in Mathematics') {
//     $('#changeUrl').attr('action', "all-results").submit();
//   }

//   // else {
//   //   $('#changeUrl').attr('action', "all-results").submit();
//   // }

// });

$("#searchProviders").click(function() {
  if ($('.autocomplete__input').val() === 'certificate in engineering') {
    $('#changeUrl').attr('action', "all-results-engineering");
  }
  if ($('.autocomplete__input').val() === 'engineering') {
    $('#changeUrl').attr('action', "all-results-engineering");
  }
  if ($('.autocomplete__input').val() === 'psychology') {
    $('#changeUrl').attr('action', "all-results-psy");
  }
  if ($('.autocomplete__input').val() === 'functional skills qualification in mathematics') {
    $('#changeUrl').attr('action', "all-results-func");
  }
  if ($('.autocomplete__input').val() === 'maths') {
    $('#changeUrl').attr('action', "all-results-func");
  }
});


// expand filters //
$('.filter-box-button').click(function(e){
  $(this).toggleClass('rotate');
  $(this).next('.filter-box').toggleClass('hidden');
  e.preventDefault();
});

// // filter functionality for awarding body //
// $('#awardingBody :checkbox').click(function () {
//   $('#resultList li').hide();
//   $('#awardingBody :checkbox:checked').each(function () {
//     $('.' + $(this).val()).show();
//   })

//   if (!$('#awardingBody :checkbox').is(':checked')) {
//     $('#resultList li').show();
//   }
// });


// // filter functionality for level //
// $('#level :checkbox').click(function () {
//   $('#resultList li').hide();
//   $('#level :checkbox:checked').each(function () {
//     $('.' + $(this).val()).show();
//   });

//   if (!$('#level :checkbox').is(':checked')) {
//     $('#resultList li').show();
//   }
// });