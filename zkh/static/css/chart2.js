var ctx2 = document.getElementById('myChart2').getContext('2d');
var ctx = document.getElementById('myChart').getContext('2d');
var ctx3 = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Потраченные деньги', 'Выделенные леньги'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: [
                "#455C73",
                "#9B59B6"
            ],
            data: [55, 45]
        }],
    },

    // Configuration options go here
    options: {}
});
var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Потраченные деньги', 'Выделенные деньги'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: [
                "#BDC3C7",
                "#26B99A"
            ],
            data: [50, 50]
        }],
    },

    // Configuration options go here
    options: {}
})
var chart3 = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Потраченные деньги', 'Выделенные деньги'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: [
                "#BDC3C7",
                "#26B99A"
            ],
            data: [30, 70]
        }],
    },

    // Configuration options go here
    options: {}
});