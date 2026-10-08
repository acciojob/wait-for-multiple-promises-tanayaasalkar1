let output = document.getElementById('output');

// Generate random delay between 1 and 3 seconds
function createPromise() {
    return new Promise((resolve) => {
        let startTime = Date.now();

        let delay = Math.floor(Math.random() * 3) + 1;

        setTimeout(() => {
            let endTime = Date.now();

            let timeTaken = (endTime - startTime) / 1000;

            resolve(timeTaken);
        }, delay * 1000);
    });
}

let promise1 = createPromise();
let promise2 = createPromise();
let promise3 = createPromise();

Promise.all([promise1, promise2, promise3])
    .then((res) => {

        // Remove Loading row
        output.innerHTML = "";

        // Create rows for each promise
        res.forEach((time, index) => {

            let row = output.insertRow();

            let cell1 = row.insertCell();
            let cell2 = row.insertCell();

            cell1.textContent = "Promise " + (index + 1);
            cell2.textContent = time.toFixed(3);
        });

        // Find longest time
        let totalTime = Math.max(...res);

        // Create Total row
        let totalRow = output.insertRow();

        let totalCell1 = totalRow.insertCell();
        let totalCell2 = totalRow.insertCell();

        totalCell1.textContent = "Total";
        totalCell2.textContent = totalTime.toFixed(3);
    });