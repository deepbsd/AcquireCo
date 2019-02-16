// Get the Balance Sheet Info

balanceSheet = {
    assets: {
       cashAndEquivalents: null,
       accountsReceivable: null,
       currentAssets: this.assets.cashAndEquivalents + this.assets.accountsReceivable,
       inventory: null,
       total: null
    },
    liabilities: {
        debt: null,
        longTermDebt: null,
        rent: null,
        tax: null,
        utilities: null,
        dividendsPayable: null,
        currentLiabilities: this.liabilities.debt 
                           + this.liabilities.rent 
                           + this.liabilities.tax 
                           + this.liabilities.utilites 
                           + this.liabilities.dividentsPayable,
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
incomeStatement = {
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
    }

    IncomeBeforeIncomeTaxes: null,
    IncomeTaxes: null,
    netIncomeIncludingNoncontrollingInterests: null,
    netIncomeAttributableToNoncontrollingInterests: null,

    NetIncomeForCompany: null
}

// Cash Flow Statement
cashFlowStatement = {
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
    }
    total: null
}


const totalDebtToCurrentAssets = () => {

    return (balanceSheet.liabilities.debt +
           balanceSheet.liabilities.longTermDebt)  
           / balanceSheet.assets.currentAssets
}


const currentRatio = () => {
    return balanceSheet.assets.currentAssets / balanceSheet.liabilities.currentLiabilities
}

const fiveYrEPSGrowth = () => {
    return "whoa"
}

const peRatio = () => {

}
