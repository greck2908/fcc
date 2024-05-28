//Building Gradebook App on JS
// Les 1 Complete getAverage function

function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

// Les 2