import React from 'react';
import HistoryTable from './historyComponents/HistoryTable';

class History extends React.Component {

    state = {

    };

    componentDidMount() {

    };

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <h4 className="header-title mt-0 mb-3">Transaction History</h4>
                        <div className="table-responsive dash-social">
                            <table id="datatable" className="table table-bordered">
                                <thead className="thead-light">
                                    <tr>
                                        <th>No</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Transaction ID</th>
                                        <th>Type</th>
                                        <th>Value</th>
                                    </tr>
                                    {/*end tr*/}
                                </thead>
                                <tbody>
                                    <HistoryTable />
                                    <HistoryTable />
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/*end card-body*/}
            </div>
            </>
        )
    }

};

export default History;