const generate = () => {
    const result = document.getElementById('result')
    const params = new URLSearchParams(window.location.search)

    var min = 0
    var max = 16

    if (params.has('min')) {
        min = Number(params.get('min'))
    }

    if (params.has('max')) {
        max = Number(params.get('max'))
    }

    result.innerText = generate_random_number(min,max)
}

const generate_random_number = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}