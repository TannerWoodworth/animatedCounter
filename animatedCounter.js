// =============================================================================
// Animated Counter
// 
// TODO: 
//       - Add ability to count down
//       - Make arguments more semantic
//       - Add Boolean for uncluding decimal in countup
//       - Add arguments for prefix / suffix 
//       - Add argument for easing
//       - Write Readme 
//       - Add minified version
// =============================================================================

jQuery.fn.animatedCounter = function(targetClass, duration, startingNumber) {
  $(targetClass).each(function () {
      $(this).prop('Counter',startingNumber).animate({
          Counter: $(this).text()
      }, {
          duration: duration,
          easing: 'swing',
          step: function (now) {
            now += '';
            var x = now.split('.');
                num = x[0];
                dec = x.length > 1 ? '.' + x[1] : ''; // decimal 
                rgx = /(\d+)(\d{3})/;
            while (rgx.test(num)) {
                num = num.replace(rgx, '$1' + ',' + '$2');
            } 
            $(this).text(num);
          }
      });
  });
};