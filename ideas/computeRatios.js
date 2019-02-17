// Get the Balance Sheet Info

const balanceSheet = {
    assets: {
       cashAndEquivalents: 158553,
       accountsReceivable: 300456,
        currentAssets: function(){
            return this.cashAndEquivalents+this.accountsReceivable
        },
       inventory: null,
       total: null
    },
    liabilities: {
        debt: 400,
        longTermDebt: 800,
        rent: 100,
        tax: 200,
        utilities: 50,
        dividendsPayable: 8,
        currentLiabilities: function(){
            let currLiab = this.debt+this.rent+this.tax+this.utilities+this.dividendsPayable
             return currLiab
        },
        total: null
    },
    equity: {
        commonStock: null,
        earningsReinvested: null,
        accumulatedOtherIncome: null,
        otherCommonStock: null,
        total: null
    },
    total: {
        totalEquity: null,
        totalLibilitiesAndEquity: null
    }
}

// Income Statement
const incomeStatement = {
    revenuesAndOtherIncome: {
        salesAndOperatingRevenue: null,
        otherIncome: null,
        totalRevenuesAndOtherIncome: null
    },

    costsAndOtherDeductions: {
        productPurchases: null,
        productionAndManufacturingExpenses: null,
        sellingGeneralAdminExpenses: null,
        depreciationAndDepletion: null,
        otherExpenses: null,
        pensionRetirementExpenses: null,
        interestExpense: null,
        otherTaxesAndDuties: null,
        total: null
    },

    IncomeBeforeIncomeTaxes: null,
    IncomeTaxes: null,
    netIncomeIncludingNoncontrollingInterests: null,
    netIncomeAttributableToNoncontrollingInterests: null,

    NetIncomeForCompany: null
}

// Cash Flow Statement
const cashFlowStatement = {
    operatingActivies: {
        netIncome: null,
        depreciationAndDepletion: null,
        otherItems: null,
        
        netCashFromOperations: null
    },
    investingActivites: {
        additionsPropertyPlantEquipment: null,
        proceedsFromSales: null,
        additionalInvestmentAdvances: null,

        netCashUsedInInvestingActivities: null
    },
    financingActivities: {
        additionsToLongTermDebt: null,
        additionsToShortTermDebt: null,
        reductionsToShortTermDebt: null,
        cashDividendsToShareholders: null,
        cashDividendsTootherInterests: null,
        commonStockAcquired: null
    },
    total: null
}


function DtoCA(){

    let debt = this.balanceSheet.liabilities.debt+this.balanceSheet.liabilities.longTermDebt
    let currAsst = this.balanceSheet.assets.currentAssets()
              
    return debt + currAsst
}


function currentRatio(){
    let currAsst = this.balanceSheet.assets.currentAssets();
    console.log("currentassts: ", currAsst)
    let currLiab = this.balanceSheet.liabilities.currentLiabilities();
    console.log("currentliab: ",currLiab)
    return currAsst/currLiab
}

function fiveYrEPSGrowth() {
    return "whoa"
}

function peRatio() {
    return "wha?"
}

module.exports = { cashFlowStatement, incomeStatement, 
                    balanceSheet, peRatio, DtoCA,
                    fiveYrEPSGrowth, currentRatio }
