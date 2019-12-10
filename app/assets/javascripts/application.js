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


// // filter functionality for teaching year //
// $('#teachingYear :checkbox').click(function () {
//   $('#resultList li').hide();
//   $('#teachingYear :checkbox:checked').each(function () {
//     $('.' + $(this).val()).show();
//   });

//   if (!$('#teachingYear :checkbox').is(':checked')) {
//     $('#resultList li').show();
//   }
// });


// // filter functionality for funding stream //
// $('#fundingStream :checkbox').click(function () {
//   $('#resultList li').hide();
//   $('#fundingStream :checkbox:checked').each(function () {
//     $('.' + $(this).val()).show();
//   });

//   if (!$('#fundingStream :checkbox').is(':checked')) {
//     $('#resultList li').show();
//   }
// });


// ****************************************


// filter functionality for all filters //

$('#allFilters :checkbox').change(function () {



  if ($(this).is(':checked')) {
    // var checkboxValue = $(this).next().text();
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

    // $('.close').on('click', function() {
    //   var filterValue = $(this).text();
    //   $(this).parent().remove(); // remove the button
    //   if ($('#allFilters :checkbox').has('label:contains("'+filterValue+'")')) {
    //     $('label:contains("'+filterValue+'")').trigger('click');
    //   }
    // });


  $('#resultList li').hide();
  $('#allFilters :checkbox:checked').each(function () {
    $('.' + $(this).val()).show();
    // $("#allFilters :checkbox").val($(this).val().toLowerCase().replace(/\s+/g, "-"));

    var listCount = $("#resultList li:visible").length;
    $("#listCount").text('');
    $("#listCount").append(listCount);
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
  
  $('#resultList li').hide();
  $('#allFilters-2 :checkbox:checked').each(function () {
    $('.' + $(this).val()).show();

    var listCount = $("#resultList li:visible").length;
    $("#listCount").text('');
    $("#listCount").append(listCount);
  });

  if (!$('#allFilters-2 :checkbox').is(':checked')) {
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

  e.preventDefault();
});


// $('#allFilters :checkbox').click(function() {

//   // Get all checked filters...
//   var $allCheckedFilters = $('input:checked');
//   var checkedValues = [];

//   // Iterate and build array containing all checked values...
//   $allCheckedFilters.each(function(index, element){
//     checkedValues.push($(this).val());
//   })

//   // Build string to use as selector...
//   var classNameStr = checkedValues.join('.');    

//   // Hide all listings...
//   $('#resultList li').hide();

//   // Get items with all classnames and show them...
//   $('li.' + classNameStr).show();

// });

// $("#allFilters :checkbox").change(function(){
//   if (!$('#allFilters :checkbox').is(':checked')) {
//       $('#resultList li').show();
//     }
// });


// var url = window.location.href;

// var vars = [], hash;
// var q = document.URL.split('?')[1];
// if(q != undefined){
//   q = q.split('+');
//   for(var i = 0; i < q.length; i++){
//     hash = q[i].split('=');
//     vars.push(hash[1]);
//     vars[hash[0]] = hash[1];
//   }  
// }


// $( "#containing" ).after( "<span class='results-elements govuk-body govuk-!-font-size-16'><span class='close'></span>" + vars + "</span>" );



$(".results-elements").click(function(){
  $(this).hide();
  $(".results-number-container").hide();
  
});

// $(".filter-feedback").click(function(){
//   $(this).hide();
//   // $(".filter-feedback-container").hide();
  
// });

