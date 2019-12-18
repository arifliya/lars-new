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
    $('#changeUrl').attr('action', "all-results-maths");
  }
  if ($('.autocomplete__input').val() === 'maths') {
    $('#changeUrl').attr('action', "all-results-maths");
  }
  
  if ($('.autocomplete__input').val() === 'Access to HE Diploma - Science and Maths, 40010740') {
    $('#changeUrl').attr('action', "qualification");
  }
});


// expand filters //
$('.filter-box-button').click(function(e){
  $(this).toggleClass('rotate');
  $(this).next().next('.filter-box').toggleClass('hidden');
  e.preventDefault();
});


// if ($('.filter-feedback-container .results-elements').is(' ')) {
//   alert('yo');
//   $(this).hide();
// }

// $('.filter-feedback-container .results-elements').each(function(){
//   if (!$(this).text().trim().length) {
//       $(this).hide();
//       $('.filter-feedback-container').hide();
//   } else {
//     $('#allFilters input[value='+values+'').attr('checked', true);
//   }
// });
$( document ).ready(function() {
var filterValue2 = $('.visually-hidden').text();
var filterValue3 = $('.visually-hidden2').text();

if ($('.visually-hidden').is(':empty')) {
  $('#allFilters :checkbox').trigger('click');
}

if ($('.visually-hidden2').is(':empty')) {
  $('#allFilters :checkbox').trigger('click');
}

if ($('#allFilters :checkbox').has('label:contains("'+filterValue2+'")')) {
  $('label:contains("'+filterValue2+'")').trigger('click');
  $('label:contains("'+filterValue2+'")').prop("checked", true);
} 

if ($('#allFilters :checkbox').has('label:contains("'+filterValue3+'")')) {
  $('label:contains("'+filterValue3+'")').trigger('click');
  $('label:contains("'+filterValue3+'")').prop("checked", true);
} 

if (!$('.results-elements').text().trim().length) {
  $('.results-number-container').hide();
  $(this).hide();
}




});




// ****************************************


// filter functionality for all filters //

var $filterCheckboxes = $('#allFilters input[type="checkbox"]');

$filterCheckboxes.on('change', function() {

  if($(this).prop('checked') == false){
    $('#resultList li').hide();
    $('.loading-spinner').show();
    $('#resultList').hide();
  } else {
    $('#resultList li').hide();
    $('.loading-spinner').show();
    $('#resultList').hide();
  }
  

setTimeout(
  function() { 

    $('.loading-spinner').hide();
    $('#resultList').show();

  var selectedFilters = {};

  $filterCheckboxes.filter(':checked').each(function() {

    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }

    selectedFilters[this.name].push(this.value);

  });

  // create a collection containing all of the filterable elements
  var $filteredResults = $('#resultList li');

  // loop over the selected filter name -> (array) values pairs
  $.each(selectedFilters, function(name, filterValues) {

    // filter each .flower element
    $filteredResults = $filteredResults.filter(function() {

      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');

      // loop over each category value in the current .flower's data-category
      $.each(currentFilterValues, function(_, currentFilterValue) {

        // if the current category exists in the selected filters array
        // set matched to true, and stop looping. as we're ORing in each
        // set of filters, we only need to match once

        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });

      // if matched is true the current .flower element is returned
      return matched;

    });
  });


  $('#resultList li').hide().filter($filteredResults).show();

  var listCount = $("#resultList li:visible").length;
  $("#listCount").text('');
  $("#listCount").append(listCount);

}, 200);

  if ($(this).is(':checked')) {
    var checkboxValue = $(this).val();
    $('.filter-feedback-container').show();
    $('.filter-feedback').show();
    $('<a href="#" class="filter-feedback new"> <span class="filter-name"> <span class="close"></span>'+ checkboxValue +'</span>  </a>').appendTo('#firstFilter');
  }
  else {
    var value = $(this).val();
    if ($('#firstFilter').has('.filter-name:contains("'+value+'")')) {
      $('.filter-name:contains("'+value+'")').parent().remove();
    }
  }
 

    
  $('.filter-name').on('click', function(e) {
    var filterValue = $(this).text();
    $(this).parent().remove(); // remove the button
    if ($('#allFilters :checkbox').has('label:contains("'+filterValue+'")')) {
      $('label:contains("'+filterValue+'")').trigger('click');
    }

    e.preventDefault()
  });



  if (!$('#allFilters :checkbox').is(':checked')) {

    $('.filter-feedback-container').hide();
    $('#resultList li').show();

    var listCount = $("#resultList li:visible").length;
    $("#listCount").text('');
    $("#listCount").append(listCount);
  }


  if ($('#awardingBody :checkbox').is(':checked')) {
    
    $('#awardingBody .selected-text').show();

    var count = $("#awardingBody :checkbox:checked").length;
    $('#awardingBody .counter').text('');
    $('#awardingBody .counter').append(count);

  } else {
    $('#awardingBody .selected-text').hide();
  }


  if ($('#level :checkbox').is(':checked')) {

    $('#level .selected-text').show();

    var count2 = $("#level :checkbox:checked").length;
    $('#level .counter').text('');
    $('#level .counter').append(count2);

  } else {
    $('#level .selected-text').hide();
  }


  if ($('#teachingYear :checkbox').is(':checked')) {

    $('#teachingYear .selected-text').show();

    var count3 = $("#teachingYear :checkbox:checked").length;
    $('#teachingYear .counter').text('');
    $('#teachingYear .counter').append(count3);

  } else {
    $('#teachingYear .selected-text').hide();
  }


  if ($('#fundingStream :checkbox').is(':checked')) {

    $('#fundingStream .selected-text').show();

    var count3 = $("#fundingStream :checkbox:checked").length;
    $('#fundingStream .counter').text('');
    $('#fundingStream .counter').append(count3);

  } else {
    $('#fundingStream .selected-text').hide();
  }

});




// ***************************************************


$('#updateResults').click(function(e){

  var $filterCheckboxes = $('#allFilters-2 input[type="checkbox"]');

  if ($filterCheckboxes.is(':checked')) {
  
    var selectedFilters = {};
  
    $filterCheckboxes.filter(':checked').each(function() {
  
      if (!selectedFilters.hasOwnProperty(this.name)) {
        selectedFilters[this.name] = [];
      }
  
      selectedFilters[this.name].push(this.value);
  
    });
  
    // create a collection containing all of the filterable elements
    var $filteredResults = $('#resultList li');
  
    // loop over the selected filter name -> (array) values pairs
    $.each(selectedFilters, function(name, filterValues) {
  
      // filter each .flower element
      $filteredResults = $filteredResults.filter(function() {
  
        var matched = false,
          currentFilterValues = $(this).data('category').split(' ');
  
        // loop over each category value in the current .flower's data-category
        $.each(currentFilterValues, function(_, currentFilterValue) {
  
          // if the current category exists in the selected filters array
          // set matched to true, and stop looping. as we're ORing in each
          // set of filters, we only need to match once
  
          if ($.inArray(currentFilterValue, filterValues) != -1) {
            matched = true;
            return false;
          }
        });
  
        // if matched is true the current .flower element is returned
        return matched;
  
      });
    });
  
    $('#resultList li').hide().filter($filteredResults).show();

    var listCount = $("#resultList li:visible").length;
    $("#listCount").text('');
    $("#listCount").append(listCount);

    // var val = [];
    // $(':checkbox:checked').each(function(i){
    //   val[i] = $(this).val();
    // });

    // $('.filter-feedback-container').show();
    // $('.filter-feedback').show();
    // $('<a href="#" class="filter-feedback new"> <span class="filter-name"> <span class="close"></span>'+ val +'</span>  </a>').appendTo('#firstFilter');
    
  
  
  if ($('#awardingBody :checkbox').is(':checked')) {
    
    $('#awardingBody .selected-text').show();

    var count = $("#awardingBody :checkbox:checked").length;
    $('#awardingBody .counter').text('');
    $('#awardingBody .counter').append(count);

  } else {
    $('#awardingBody .selected-text').hide();
  }


  if ($('#level :checkbox').is(':checked')) {

    $('#level .selected-text').show();

    var count2 = $("#level :checkbox:checked").length;
    $('#level .counter').text('');
    $('#level .counter').append(count2);

  } else {
    $('#level .selected-text').hide();
  }
  
  
  if ($('#teachingYear :checkbox').is(':checked')) {

    $('#teachingYear .selected-text').show();

    var count3 = $("#teachingYear :checkbox:checked").length;
    $('#teachingYear .counter').text('');
    $('#teachingYear .counter').append(count3);

  } else {
    $('#teachingYear .selected-text').hide();
  }

  if ($('#fundingStream :checkbox').is(':checked')) {

    $('#fundingStream .selected-text').show();

    var count3 = $("#fundingStream :checkbox:checked").length;
    $('#fundingStream .counter').text('');
    $('#fundingStream .counter').append(count3);

  } else {
    $('#fundingStream .selected-text').hide();
  }

  e.preventDefault();

  }  
});


// $('#clearFilters').click(function() {
//   location.reload();

// });




$(".results-elements").click(function(){
  $(this).hide();
  $(".results-number-container").hide();
  
});



