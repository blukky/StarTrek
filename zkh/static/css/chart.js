var ctx = document.getElementById('chimick');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset
    data: {
        labels: [
            'Минерализация',
            'Щелочность',
            'рН',
            'Хлориды',
            'Сульфаты',
            'Окисляемость',
            'Железо',
            'Марганец',
            'Азотосодержащие вещества',
            'Содержание газов',
            'Фтор',
            'Кремний',
        ],
        datasets: [
            {
                label: '2020 год',
                data: [45, 23, 45, 34, 45, 45, 34, 25,30,37,35,29],
                backgroundColor: '#510FAD',
                borderColor: '#510FAD',
                fill: false

            },
            {
                label: '2021 год',
                data: [56, 36, 50, 40, 49, 48, 37, 40,37,39,45,35],
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
            text: 'Состояние водных ресурсов в РФ по химичским показателям'
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




