Highcharts.chart('container', {

    chart: {
        height: 600,
        inverted: true
    },

    title: {
        text: 'Highcharts Org Chart'
    },

    series: [{
        type: 'organization',
        name: 'Highsoft',
        keys: ['from', 'to'],
        linkLineWidth: 3,
        linkColor: '#ddd',
        /*events: {
        	click: function(event) {
          	alert(event);
          }
        },*/
        allowPointSelect: true,
        cursor: 'pointer',
        states: {          
          select: {
            color: '#EFFFEF',
            borderColor: 'black',
            dashStyle: 'dot'
          }
        },
        data: [
            ['Shareholders', 'Board'],
            ['Board', 'CEO'],
            ['CEO', 'CTO'],
            ['CEO', 'CPO'],
            ['CEO', 'CSO'],
            ['CEO', 'CMO'],
            ['CEO', 'HR'],
            ['CTO', 'Product'],
            ['CTO', 'Web'],
            ['CSO', 'Sales'],
            ['CMO', 'Market']
        ],
        levels: [{
            level: 0,
            color: 'silver',
            dataLabels: {
                color: 'black'
            },
            height: 25
        }, {
            level: 1,
            color: 'silver',
            dataLabels: {
                color: 'black'
            },
            height: 25
        }, {
            level: 2,
            color: '#980104'
        }, {
            level: 4,
            color: '#359154'
        }],
        nodes: [{
            id: 'Shareholders'
        }, {
            id: 'Board'
        }, {
            id: 'CEO',
            title: 'CEO',
            name: 'Grethe Hjetland',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132317/Grethe.jpg'
        }, {
            id: 'HR',
            title: 'HR/CFO',
            name: 'Anne Jorunn Fjærestad',
            color: '#007ad0',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132314/AnneJorunn.jpg',
            layout: 'hanging'
        }, {
            id: 'CTO',
            title: 'CTO',
            name: 'Christer Vasseng',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg',
            layout: 'hanging'
        }, {
            id: 'CPO',
            title: 'CPO',
            name: 'Torstein Hønsi',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12131849/Torstein1.jpg'
        }, {
            id: 'CSO',
            title: 'CSO',
            name: 'Anita Nesse',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132313/Anita.jpg',
            layout: 'hanging'
        }, {
            id: 'CMO',
            title: 'CMO',
            name: 'Vidar Brekke',
            image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
            layout: 'hanging'
        }, {
            id: 'Product',
            name: 'Product developers'
        }, {
            id: 'Web',
            name: 'General tech',
            description: 'Web developers, sys admin'
        }, {
            id: 'Sales',
            name: 'Sales team'
        }, {
            id: 'Market',
            name: 'Marketing team'
        }],
        colorByPoint: false,
        color: '#007ad0',
        dataLabels: {
            color: 'white'
        },
        borderColor: 'white',
        nodeWidth: 65
    }],
    tooltip: {
    		followPointer: false,
        outside: false
    }
});