document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', function(e) {
    // console.log(123); e stands for event 
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    // console.log(pounds);
    document.getElementById('gramsOutput').innerHTML = lbs / 0.022046;
    document.getElementById('kgOutput').innerHTML = lbs / 2.2046;
    document.getElementById('ozOutput').innerHTML = lbs * 16;
});


// document.getElementById('weight-select').addEventListener('change', function(e) {
//     var x = document.getElementById("weight-select");
//     var i = x.selectedIndex;
//     console.log(x.options[i].value);
// })