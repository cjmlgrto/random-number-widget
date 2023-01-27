const generate = () => {
    const result = document.getElementById('result')
    result.innerText = generate_random_number(1,16)
}

const generate_random_number = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}