var week_value = [0, 10, 20, 30, 40, 50, 60, 70];

var chart = new Chartist.Line('.ct-chart', {
  labels: ['7日前', '6日前', '5日前', '4日前', '3日前', '2日前', '1日前', '今日'],
  series: [
    week_value
  ]
}, {
  low: 0,
  showArea: true,
  showPoint: false,
  width: 700,
  height:200,
});
chart.on('draw', function(data) {
  if(data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 2000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});

function Debug() {
  var today_value = document.getElementById("test").value;
  week_value.push(Number(today_value));
  week_value.shift();
}
