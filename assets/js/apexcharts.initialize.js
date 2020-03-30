$.exists = function(selector) {
  return $(selector).length > 0;
};
// Color Variables
var blueColor = '#2196f3';
var grayColor = '#9e9e9e';
var blueGrayColor = '#607d8b';
var greenColor = '#4caf50';
var redColor = '#f44336';
var orangeColor = '#ff9800';
var indigoColor = '#3f51ae';
var purpleColor = '#673ab6';
var pinkColor = '#e91e63';
var lightGrayColor = '#e5e5e5';

// Labels Style Variable
var labelsStyle = {
  colors: 'rgba(0, 0, 0, 0.4)',
  fontSize: '13px'
}

// Font Family Variable
var InterFont = 'Roboto, sans-serif';

/* ========= Chart Style 1 ========= */
if ($.exists("#yooChart1")) {
  var options = {
    chart: {
      height: 345,
      type: 'line',
      stacked: false,
      stackType: '100%',
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'TEAM A',
      type: 'column',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }, {
      name: 'TEAM B',
      type: 'line',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }],
    stroke: {
      width: [0, 3],
      curve: 'straight'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    labels: ['01/01/2018', '02/01/2018', '03/01/2018', '04/01/2018', '05/01/2018', '06/01/2018', '07/01/2018',
      '08/01/2018', '09/01/2018', '10/01/2018', '11/01/2018'
    ],
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: labelsStyle
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: labelsStyle
      },
    },
    colors: [indigoColor, greenColor],
    legend: {
      show: false,
    },
    fill: {
      opacity: 1
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart1"), options);
  chart.render();
}

/* ========= Chart Style 2 ========= */
if ($.exists("#yooChart2")) {
  var options = {
    chart: {
      height: 345,
      type: 'area',
      stacked: false,
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'TEAM A',
      type: 'area',
      data: [65, 45, 35, 67, 60, 70, 55]
    }, {
      name: 'TEAM B',
      type: 'line',
      data: [55, 40, 35, 67, 45, 90, 40]
    }],
    stroke: {
      width: [2, 1],
      curve: 'straight',
      dashArray: [0, 4]
    },
    fill: {
      type: ['gradient', 'solid'],
      opacity: [1, 1],
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.04
      },
    },
    labels: ['02/01/2019', '03/01/2019', '04/01/2019', '05/01/2019', '06/01/2019', '07/01/2019', '08/01/2019'],
    colors: [indigoColor, indigoColor],
    xaxis: {
      type: "datetime",
      labels: {
        style: labelsStyle
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        style: labelsStyle
      },
    },
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: [indigoColor, indigoColor],
      strokeWidth: 3,
      hover: {
        size: 6,
      }
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
  };

  var chart = new ApexCharts(document.querySelector("#yooChart2"), options);
  chart.render();
}

/* ========= Chart Style 3 ========= */
if ($.exists("#yooChart3")) {
  var options = {
    chart: {
      height: 412,
      type: 'radar',
      fontFamily: InterFont,
      toolbar: {
        show: false
      }
    },
    colors: [greenColor, indigoColor],
    series: [{
      name: 'Industry Average',
      data: [80, 90, 70, 90, 110, 100],
    }, {
      name: 'Our Company',
      data: [50, 60, 50, 80, 90, 80],
    }],
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May']
    },
    markers: {
      size: 0
    },
    legend: {
      show: true,
      offsetX: 0,
      offsetY: -20
    }
  };

  var chart = new ApexCharts(document.querySelector("#yooChart3"), options);
  chart.render();
}

