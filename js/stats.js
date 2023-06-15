const graphChart = document.getElementById('selected-graph');
const detailTable = document.getElementById('detail-body');
const countryName = document.getElementById('country-name');
const numberOfCases = document.getElementById('number-of-cases');
const percentage = document.getElementById('percentage');
var root = document.querySelector(':root');
    function start(){
        root.style.setProperty('--y', 0);
        root.style.setProperty('--footer-x',1);
        root.style.setProperty('--opacity', 1);
        root.style.setProperty('--left', 0);
        root.style.setProperty('--right', 0);
        root.style.setProperty('--top', 0);
        root.style.setProperty('--bottom', 0);
    }
    window.addEventListener('load', start, false);

    function unitedStates(x){
        graphChart.classList.remove('hide');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "United States";
        numberOfCases.innerHTML = "80,686,464";
        percentage.innerHTML = "16%";
        x.style.background = "#f94144";
    }

    function india(x){
        graphChart.classList.remove('united-states');
        graphChart.classList.remove('hide');
        graphChart.classList.add('india');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "India";
        numberOfCases.innerHTML = "43,045,527";
        percentage.innerHTML = "8.5%";
        x.style.background = "#f3722c";
    }

    function brazil(x){
        graphChart.classList.remove('united-states');
        graphChart.classList.remove('hide');
        graphChart.classList.add('brazil');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "Brazil";
        numberOfCases.innerHTML = "30,261,088";
        percentage.innerHTML = "6%";
        x.style.background = "#f8961e";
    }

    function france(x){
        graphChart.classList.remove('united-states');
        graphChart.classList.remove('hide');
        graphChart.classList.add('france');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "France";
        numberOfCases.innerHTML = "27,980,729";
        percentage.innerHTML = "5.5%";
        x.style.background = "#f9844a";
    }

    function germany(x){
        graphChart.classList.remove('united-states');
        graphChart.classList.remove('hide');
        graphChart.classList.add('germany');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "Germany";
        numberOfCases.innerHTML = "23,459,628";
        percentage.innerHTML = "4.6%";
        x.style.background = "#f9c74f";
    }

    function unitedKingdom(x){
        graphChart.classList.remove('united-states');
        graphChart.classList.remove('hide');
        graphChart.classList.add('united-kingdom');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "United Kingdom";
        numberOfCases.innerHTML = "21,916,961";
        percentage.innerHTML = "4.3%";
        x.style.background = "#90be6d";
    }

    function russia(x){
        graphChart.classList.remove('united-states');
        graphChart.classList.remove('hide');
        graphChart.classList.add('russia');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "Russia";
        numberOfCases.innerHTML = "17,829,009";
        percentage.innerHTML = "3.5%";
        x.style.background = "#43aa8b";
    }

    function korea(x){
        graphChart.classList.remove('united-states');
        graphChart.classList.remove('hide');
        graphChart.classList.add('korea');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "Korea";
        numberOfCases.innerHTML = "16,471,940";
        percentage.innerHTML = "3.3%";
        x.style.background = "#4d908e";
    }

    function italy(x){
        graphChart.classList.remove('united-states');
        graphChart.classList.remove('hide');
        graphChart.classList.add('italy');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "Italy";
        numberOfCases.innerHTML = "15,730,676";
        percentage.innerHTML = "3.1%";
        x.style.background = "#577590";
    }

    function turkey(x){
        graphChart.classList.remove('united-states');
        graphChart.classList.remove('hide');
        graphChart.classList.add('turkey');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "Turkey";
        numberOfCases.innerHTML = "14,999,479";
        percentage.innerHTML = "3%";
        x.style.background = "#277da1";
    }

    function spain(x){
        graphChart.classList.remove('united-states');
        graphChart.classList.remove('hide');
        graphChart.classList.add('spain');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "Spain";
        numberOfCases.innerHTML = "11,627,487";
        percentage.innerHTML = "2.3%";
        x.style.background = "#0a9396";
    }

    function vietnam(x){
        graphChart.classList.remove('united-states');
        graphChart.classList.remove('hide');
        graphChart.classList.add('vietnam');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "Vietnam";
        numberOfCases.innerHTML = "10,475,819";
        percentage.innerHTML = "2.1%";
        x.style.background = "#94d2bd";
    }

    function other(x){
        graphChart.classList.remove('united-states');
        graphChart.classList.remove('hide');
        graphChart.classList.add('other');
        detailTable.classList.remove('dont-show');
        countryName.innerHTML = "Others";
        numberOfCases.innerHTML = "190,604,218";
        percentage.innerHTML = "37.7%";
        x.style.background = "#2cd189";
    }

    function hideGraph(x){
        graphChart.classList.remove('russia');
        graphChart.classList.remove('other');
        graphChart.classList.remove('vietnam');
        graphChart.classList.remove('spain');
        graphChart.classList.remove('turkey');
        graphChart.classList.remove('italy');
        graphChart.classList.remove('korea');
        graphChart.classList.remove('united-kingdom');
        graphChart.classList.remove('india');
        graphChart.classList.remove('germany');
        graphChart.classList.remove('brazil');
        graphChart.classList.remove('france');
        detailTable.classList.add('dont-show');
        graphChart.classList.add('united-states');
        graphChart.classList.add('hide');
        x.style.background = "#292c33";
    }

   


    
    