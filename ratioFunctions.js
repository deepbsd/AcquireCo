
import {shareRelated, balanceSheet} from 



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

