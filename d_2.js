      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Возраст', 'Мужчины', 'Женщины'],
          ['2',1323022,1252824],
          ['7',1269862,1207408],
          ['12',1106605,1055625],
          ['17',964073,902121],
          ['22',1055540,925492],
          ['27',1425577,1191029],
          ['32',1471851,1314667],
          ['37',1297025,1240011],
          ['42',1235914,1242920],
          ['47',1191824,1212787],
          ['52',1339644,1402543],
          ['57',1496065,1628295],
          ['62',1155755,1420110],
          ['67',791372,1103859],
          ['72',295709,518658],
          ['77',426763,962777],
          ['82',208999,544253],
          ['90',  129702, 461328],
        ]);

        var options = {
          title:'Средняя численность и состав населения',
          hAxis: {title: 'Возраст',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
