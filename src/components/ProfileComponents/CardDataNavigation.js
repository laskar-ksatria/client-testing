import React from 'react'

function CardDataNavigation() {
    return (
        <div className="card-body">
            <ul className="nav nav-pills mb-0" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="summary_detail_tab" data-toggle="pill" href="#summary_detail">Summary</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="general_detail_tab" data-toggle="pill" href="#general_detail">KYC Document</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="financial_detail_tab" data-toggle="pill" href="#financial_detail">Financial &amp; Bank</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="fa_detail_tab" data-toggle="pill" href="#fa_detail">2 FA</a>
                </li>
            </ul>
        </div>//end card-data-navigation
    )
}
