// jQuery nastiness.
$(document).ready(function() {

  $("a[href^='#']").click(function(e) {
    // Smooth scroll to ID.
    // Author: Tania Rascia
    // Source: https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/
    // Stop the default behaviour.
    e.preventDefault();
    // Calculate the position.
    var position = $($(this).attr("href")).offset().top;
    // Scroll to the target.
    $("body, html").animate({
      scrollTop: position
    }, 750);
  });

  function calcLengthOfServiceInMonths(dateFrom, dateTo) {
    // Calculate the difference in Months as a decimal.
    // Then truncate to two decimal placed.
    // Then round up to nearest whole integer.
    return Math.ceil(dateTo.diff(dateFrom, 'months', true).toFixed(2));
  }

  function lengthOfServiceOneYear(lengthOfServiceInMonths) {
    // Calculate difference in Months.
    var diffInYears = lengthOfServiceInMonths;
    // Cast suffix for Year unit.
    var yearSuffix  = 'yr';
    // Cast length of service.
    var humanizedLenghtOfService = diffInYears + ' ' + yearSuffix;
    return humanizedLenghtOfService;
  }

  function lengthOfServiceLessThanOneYear(lengthOfServiceInMonths) {
    // Calculate difference in Months.
    var diffInMonths = lengthOfServiceInMonths;
    // Cast suffix for Month unit.
    var monthSuffix  = (diffInMonths > 1) ? 'mths' : 'mth'
    // Cast length of service.
    var humanizedLenghtOfService = diffInMonths + ' ' + monthSuffix;
    return humanizedLenghtOfService;
  }

  function lengthOfServiceGreaterThanOneYear(lengthOfServiceInMonths) {
    // Calculate difference in Years.
    var diffInYears  = Math.floor(lengthOfServiceInMonths / 12);
    // Calculate difference in Months.
    var diffInMonths = lengthOfServiceInMonths - (diffInYears * 12);
    // Cast suffix for Month unit.
    var monthSuffix  = (diffInMonths > 1) ? 'mths' : 'mth'
    // Cast suffix for Year unit.
    var yearSuffix   = (diffInYears > 1) ? 'yrs' : 'yr'
    // Return length of service.
    return diffInYears + ' ' + yearSuffix + ' ' + diffInMonths + ' ' + monthSuffix;
  }

  function calcInProductSinceInYears(dateFrom, dateTo) {
    // Calculate the difference in Years as a decimal.
    // Then truncate to two decimal placed.
    // Then round up to nearest whole integer.
    return dateTo.diff(dateFrom, 'years');
  }

  // Add a nice human readable length of service to the page.
  $('.length-of-service span').each(function(index) {
    // Get the Date From.
    var dateFrom = moment($(this).data('date-from'));
    // Get the Date To, or set as now.
    var dateTo   = $(this).data('date-to') ? moment($(this).data('date-to')) : moment()
    // Calculate the Length of Service.
    var lengthOfServiceInMonths = calcLengthOfServiceInMonths(dateFrom, dateTo);

    if (lengthOfServiceInMonths < 12) {
      $(this).text(lengthOfServiceLessThanOneYear(lengthOfServiceInMonths));
    } else if (lengthOfServiceInMonths < 13) {
      $(this).text(lengthOfServiceOneYear(lengthOfServiceInMonths));
    } else {
      $(this).text(lengthOfServiceGreaterThanOneYear(lengthOfServiceInMonths));
    }
  });

  // Add a nice human readable length of service to the page.
  $('time#in-product-since').each(function(index) {
    // Get the Date From.
    var dateFrom = moment($(this).attr('datetime'));
    // Get the Date To, or set as now.
    var dateTo   = moment($(this).data('date-to'));
    // Calculate the Length of Service.
    var inProductSinceInYears = calcInProductSinceInYears(dateFrom, dateTo);
    // Replace the placeholder text.
    $(this).text(inProductSinceInYears);
  });

});
