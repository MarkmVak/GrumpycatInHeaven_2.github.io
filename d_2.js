      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Male', 'Female'],
          ['1995',1000,400],
          ['1996',1000,400],
          ['1997',1000,400],
          ['1998',1000,400],
          ['1999',1000,400],
          ['2000',1000,400],
          ['2001',1000,400],
          ['2002',1000,400],
          ['2003',1000,400],
          ['2004',1000,400],
          ['2005',1000,400],
          ['2006',1000,400],
          ['2007',1000,400],
          ['2008',1000,400],
          ['2009',1000,400],
          ['2010',1000,400],
          ['2011',1000,400],
          ['2012',1000,400],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540],
          ['2017',1000,400],
          ['2018',1000,400],
          ['2019',1000,400],
        ]);

        var options = {
          title: 'Deaths in Russia',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
