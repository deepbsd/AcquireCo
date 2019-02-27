// Get the Balance Sheet Info

const balanceSheet = {
    assets: {
       cashAndEquivalents: 553,
       accountsReceivable: 456,
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


// Contains recent share related information
const shareRelated = {
    sharePrice: 45.23,
    earningsPerShare: 3.38,
    debtPerShare: 38.92,
    bookValuePerShare: 31.82,
    fiveYrEarningsGrowthPerShare: 0.64
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


module.exports = {
      balanceSheet, shareRelated,
      incomeStatement, cashFlowStatement
}


