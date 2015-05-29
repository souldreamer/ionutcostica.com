$(function() {
$('.chart').easyPieChart({
    scaleColor: false,
    size: 75,
    easing: 'easeOutBounce',
    onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
    }
});
var chart = window.chart = $('.chart').data('easyPieChart');
});
