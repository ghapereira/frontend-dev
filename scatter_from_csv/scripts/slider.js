/** Leave values between 0 and 1 dividing by MAX_VAL,
 *  considering that MIN_VAL is 0.
 *  MAX_VAL is, initially, a high value to allow for smooth scrolling
 */
const MIN_VAL = 0;
const MAX_VAL = 1000;        

// Slider
$(function() {
    $("#lineCutSlider").slider({
        min: MIN_VAL,
        max: MAX_VAL,
        range: "min",
        slide: function(event, ui){
            $("#lineCutThreshold").text(ui.value / MAX_VAL);
        }
    });
 });
 