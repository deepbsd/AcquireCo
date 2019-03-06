// import the JSON
let cf = require('./computeRatios');

let balanceSheet = cf.balanceSheet;
let shareRelated = cf.shareRelated;


function DtoCA(){

    let debt = balanceSheet.liabilities.debt + balanceSheet.liabilities.longTermDebt;
    let currAsst = balanceSheet.assets.currentAssets();
              
    return currAsst / debt;
}


function currentRatio(){
    let currAsst = balanceSheet.assets.currentAssets();
    //console.log("currentassts: ", currAsst)
    let currLiab = balanceSheet.liabilities.currentLiabilities();
    //console.log("currentliab: ",currLiab)
    return currAsst/currLiab  ;
}

function fiveYrEPSGrowth() {
    return shareRelated.fiveYrEarningsGrowthPerShare;
}

function peRatio() {
    return shareRelated.sharePrice/shareRelated.earningsPerShare;
}

// ***********  Log the functions ******************* //

console.log("Debt to Current Assets: ",DtoCA().toFixed(2));
console.log("Current Ratio",currentRatio().toFixed(2));
console.log("PE Ratio",peRatio().toFixed(2));
console.log("5 Yr EPS Growth: ",fiveYrEPSGrowth());
