/* -------------------- */
/* Basic way of "FETCH" */
/* -------------------- */

/* Read the URL */
/* 【case1】If you wanna use your original API ▶︎ input ".json" file */
fetch('test.json')

/* 【case2】If you wanna use existing API ▶︎ input the URL */
// ・"?zipcode=1000005" → fetch the data of the postal code of 1000005(it's Tokyo's)
fetch('https://zipcloud.ibsnet.co.jp/api/search?zipcode=1000005')


/* If it succeeded in reading the URL, change its shape of data, */
/* and pass "response.json()" to the "data" inside the second "then". */
// ・ "json" → change into OBJECT
// ・ "text" → change into TEXT
// ・ "fetch" method includes "Promiss", so "then" is needed.
.then(response => {
    return response.json(); 
})
.then(data => {
    console.log(data);

    /* 【case1】test.json API */
    const a = document.createElement('a');
    a.textContent = data.name;
    a.href = data.url;
    document.getElementById('test').appendChild(a);

    /* 【case2】postal code API */
    console.log(data.results[0].address1);
    console.log(data.results[0].address2);
    console.log(data.results[0].address3);
})

/* If it couldn't read the URL */
.catch(error => {
    console.log(error);
})