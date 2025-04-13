// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {

    title: {
        text: '台灣各主要城市平均氣溫',
        align: 'left'
    },

    subtitle: {
        text: '資料來源:中央氣象局 ' ,
        align:    'left'
    },
    xAxis: {
        title: {
            text: '月份(資料範圍 : 30年平均值)',
        }
    },
    yAxis: {
        title: {
            text: '城市'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        series: {
            label: {
                connectorALLowed : false
            },
            pointStart : 1
        }
    },
    series: 
    [
        {
        name: '台北',
        data: [16.4,16.9,18.8,22.3,25.6,28.2,29.9,29.5,27.7,24.6,21.9,18.2]

        }, 
        {
        name: '台中',
        data: [17.0,17.7,20.1,23.5,26.4,28.1,28.9,28.4,27.8,25.5,22.6,18.7]
        },
        {
        name: '恆春',
        data: [21.1,21.7,23.3,25.4,27.3,28.4,28.7,28.3,27.8,26.5,24.7,22.2]
        }

    ]
});