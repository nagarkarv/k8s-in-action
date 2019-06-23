function logEvery2Seconds(i) {
    setTimeout(() => {
        logEvery2Seconds(++i);
    }, 2000)
}

logEvery2Seconds(0);

let i = 0;
setInterval(() => {
    	console.log('Monitoring = OK');
    }, 2000);
