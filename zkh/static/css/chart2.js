var ctx = document.getElementById('chart-line');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset
    data: {
        labels: [
            'Температура',
            'Мутность',
            'Цвет',
            'Запах',
            'Вкус',
        ],
        datasets: [
            {
                label: '2020 год',
                data: [30, 36, 34, 35, 45],
                backgroundColor: '#510FAD',
                borderColor: '#510FAD',
                fill: false

            },
            {
                label: '2021 год',
                data: [40, 50, 39, 45, 56],
                backgroundColor: '#8144D6',
                borderColor: '#8144D6',
                fill: false
            }
        ],
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'Состояние водных ресурсов в РФ по физическим показателям'
        },
        scales: {
            xAxes: [{
                ticks: {
                    min: 20 // Edit the value according to what you need
                }
            }]
        }
    }
});