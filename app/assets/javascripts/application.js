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

// Search filters for awarding body //
$("#awarding-body-input").on("keyup", function() {
  var value = this.value.toLowerCase().trim();
  $("#ab-list .govuk-checkboxes__item").show().filter(function() {
    return $(this).text().toLowerCase().trim().indexOf(value) == -1;
  }).hide();
});




// Search page to go to different pages //
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
 
  if ($('#learning').val() === 'frameworks') {
    $('#changeUrl').attr('action', "all-results-frameworks");
    
  }

});


// expand filters //
$('.filter-box-button').click(function(e){
  $(this).toggleClass('rotate');
  $(this).next().next('.filter-box').toggleClass('hidden');
  e.preventDefault();
});


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

if (window.location.href.indexOf('&awarding-body-input=') > 0) {
  // do nothing
} else {
  $('.filter-name').trigger('click');
  
}

if (window.location.href.indexOf('&level-input=') > 0) {
  // do nothing
} else {
  $('.filter-name').trigger('click');
}



});


$('#learning').on('change', function() {
  if($(this).val() == 'frameworks') {
    $('#homePageFilters').hide();
  } else {
    $('#homePageFilters').css("display", "flex" );
  }
  
});


// ****************************************


// filter functionality for all filters //

var $filterCheckboxes = $('#allFilters input[type="checkbox"]');

$filterCheckboxes.on('change', function() {

  if($(this).prop('checked') == false){
    // $('#resultList li').hide();
    $('.loading-spinner').show();
    $('#resultList li').hide();
  } else {
    // $('#resultList li').hide();
    $('.loading-spinner').show();
    $('#resultList li').hide();
  }

  
  

setTimeout(
  function() { 

    $('.loading-spinner').hide();
    $('#resultList li').show();

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

  if ($(listCount).text('0')) {
    $("#listCount").text('There are no ');
  }

}, 1000);

  if ($(this).is(':checked')) {
    var checkboxValue = $(this).val();
    $('.filter-feedback-container').show();
    $('.filter-feedback').show();
    $('<a href="#" class="filter-feedback"> <span class="filter-name"> <span class="close"></span>'+ checkboxValue +'</span>  </a>').appendTo('#firstFilter');
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

  var $filterCheckboxes2 = $('#allFilters-2 input[type="checkbox"]');

  if ($filterCheckboxes2.is(':checked')) {
  
    var selectedFilters = {};
  
    $filterCheckboxes2.filter(':checked').each(function() {
  
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

    var val = [];
    $(':checkbox:checked').each(function(i){
      val[i] = $(this).val();
    });

    $('.filter-feedback-container').show();
    $('.filter-feedback').show();
    $('<a href="#" class="filter-feedback new"> <span class="filter-name"> <span class="close"></span>'+ val +'</span>  </a>').appendTo('#firstFilter');
    
    
    $('.filter-name').on('click', function(e) {
      var filterValue = $(this).text();
      $(this).parent().remove(); // remove the button
      if ($('#allFilters :checkbox').has('label:contains("'+filterValue+'")')) {
        $('label:contains("'+filterValue+'")').trigger('click');
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

      e.preventDefault()
    });

  
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

  

  // if ($('#allFilters-2 :checkbox').is(':checked')) {
  //   alert('checked');
  // } else {
  //   alert('not checked');
  // }

  e.preventDefault();

  }  
  
  else {
    if($($filterCheckboxes2).is('checked') == false){
      $('#clearFilters').trigger('click');
    }
  }
});


$('#clearFilters').click(function() {
  location.reload();
});

$('#clearFilters2').click(function() {
  location.reload();
});


// $('#updateResults').click(function(){
  
// });

$(".results-elements").click(function(){
  $(this).hide();
  $(".results-number-container").hide();
  
});



$('#datesBefore').click(function(){
    
  var day = $('#date-before-day').val();
  var month = $('#date-before-month').val();
  var year = $('#date-before-year').val();
  var date = year + "-" + month + "-" + day;
     
  
    
  

});


// $('#date-before-day').keyup(function(){
//   var valThis = $(this).val();
//    $('#resultList li').each(function(){
//     var text = $(this).text();
//        (text.indexOf(valThis) == 0) ? $(this).show() : $(this).hide();         
//   });
// });

$('#date-before-day').keyup(function(){

  $('.loading-spinner').show();
  // $('#resultList li').hide();

  setTimeout(
    function() { 
  
      $('.loading-spinner').hide();
  
  }, 500);

  var value = this.value.trim();
  $("#resultList li").show().filter(function() {
    return $(this).text().trim().indexOf(value) == -1;
  }).hide();


  var listCountNew = $("#resultList li:visible").length;
  $("#listCount").text('');
  $("#listCount").append(listCountNew);

  if ($(listCountNew).text('0')) {
    $("#listCount").text('There are no ');
  }
  
});


$('#date-before-month').keyup(function(){

  $('.loading-spinner').show();
  // $('#resultList li').hide();

  setTimeout(
    function() { 
  
      $('.loading-spinner').hide();
  
  }, 500);

  var value = this.value.trim();
  $("#resultList li").show().filter(function() {
    return $(this).text().trim().indexOf(value) == -1;
  }).hide();

  var listCount = $("#resultList li:visible").length;
  $("#listCount").text('');
  $("#listCount").append(listCount);

  if ($(listCount).text('0')) {
    $("#listCount").text('There are no ');
  }
});


$('#date-before-year').keyup(function(){

  $('.loading-spinner').show();
  // $('#resultList li').hide();

  setTimeout(
    function() { 
  
      $('.loading-spinner').hide();
  
  }, 500);

  var value = this.value.trim();
  $("#resultList li").show().filter(function() {
    return $(this).text().trim().indexOf(value) == -1;
  }).hide();

  var listCount = $("#resultList li:visible").length;
  $("#listCount").text('');
  $("#listCount").append(listCount);

  if ($(listCount).text('0')) {
    $("#listCount").text('There are no ');
  }
});


$('#date-after-day').keyup(function(){

  $('.loading-spinner').show();
  // $('#resultList li').hide();

  setTimeout(
    function() { 
  
      $('.loading-spinner').hide();
  
  }, 500);

var value = this.value.trim();
  $("#resultList li").show().filter(function() {
    return $(this).text().trim().indexOf(value) == -1;
  }).hide();

  var listCount = $("#resultList li:visible").length;
  $("#listCount").text('');
  $("#listCount").append(listCount);

  if ($(listCount).text('0')) {
    $("#listCount").text('There are no ');
  }
});


$('#date-after-month').keyup(function(){

  $('.loading-spinner').show();
  // $('#resultList li').hide();

  setTimeout(
    function() { 
  
      $('.loading-spinner').hide();
  
  }, 500);

  var value = this.value.trim();
  $("#resultList li").show().filter(function() {
    return $(this).text().trim().indexOf(value) == -1;
  }).hide();

  var listCount = $("#resultList li:visible").length;
  $("#listCount").text('');
  $("#listCount").append(listCount);

  if ($(listCount).text('0')) {
    $("#listCount").text('There are no ');
  }
});


$('#date-after-year').keyup(function(){

  $('.loading-spinner').show();
  // $('#resultList li').hide();

  setTimeout(
    function() { 
  
      $('.loading-spinner').hide();
  
  }, 500);

  var value = this.value.trim();
  $("#resultList li").show().filter(function() {
    return $(this).text().trim().indexOf(value) == -1;
  }).hide();

  var listCount = $("#resultList li:visible").length;
  $("#listCount").text('');
  $("#listCount").append(listCount);

  if ($(listCount).text('0')) {
    $("#listCount").text('There are no ');
  }
});