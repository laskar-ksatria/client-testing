import React from 'react'
import { DropdownBankAccount, DropdownCreditCard, DropdownCryptoDigitalAsset } from './financialBankComponent/DropdownContent'

function FinancialBankDetail() {
    return (
        <div className="tab-pane fade" id="financial_detail">
            <div className="row">
                <div className="col-lg-12">
                    
                    <CardFinancialBank />
                    
                </div>{/*end col*/}
            </div>{/*end row*/}
        </div>
    )
}

const CardFinancialBank = () => {
    return(
        <div className="card">
            <div className="card-body">
                <h4 className="header-title mt-0 mb-3">Financial &amp; Bank</h4>

                <DropdownFinancialBank />

            </div>
        </div>
    )
}

const DropdownFinancialBank = (props) => {
    return(
        <div className="card">
            <div className="card-body">
                <div className="accordion" id="accordionExample">

                    <DropdownBankAccount />
                    <DropdownCreditCard />
                    <DropdownCryptoDigitalAsset />

                </div>
            </div>
        </div>
    )
}

export default  FinancialBankDetail;