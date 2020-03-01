import React from 'react';



export default function History(props) {


    return (
        <div className="card">
            <div className="card-body">
                <h4 className="header-title mt-0 mb-3">Transaction History</h4>
                <div className="table-responsive dash-social">
                    <table id="datatable" className="table table-bordered">
                        <thead className="thead-light">
                            
                            <TableHeader />

                            {/*end tr*/}
                        </thead>
                        <tbody>
                            <HistoryTable />
                            <HistoryTable />
                            <HistoryTable />
                            <HistoryTable />
                            <HistoryTable />
                        </tbody>
                    </table>
                </div>
            </div>
        {/*end card-body*/}
        </div>
    )

};

const TableHeader = () => {
    return (
        <tr>
            <th>No</th>
            <th>Date</th>
            <th>Time</th>
            <th>Transaction ID</th>
            <th>Type</th>
            <th>Value</th>
        </tr>
    )
};

const HistoryTable = (props) => {
    return (
        <tr>
            <td>01</td>
            <td>14 Jan 2019</td>
            <td>12:05PM</td>
            <td>0001245368452136</td>
            <td><span className="badge badge-soft-success">Sent</span></td>
            <td>$521.36</td>
        </tr>
    )
};