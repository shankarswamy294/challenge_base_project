import React from "react";
import range from 'lodash/range'
import ReactPaginationComponent from "../ReactPaginationComponent";
class BankData extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            bankData: this.props.data,
            presentData: this.props.data,
            limit: 10,
            offset: 0,
            transaction_with: "",
            balance_amt_with: null,
            date_with: null,
        }
    }

    handlePaginationClick = (val) =>{
        this.setState({offset: val.selected})
    };

    transChangeHandler(e){
        const {bankData, balance_amt_with, date_with} = this.state;
        let data = [];
        if(e.target.value) {
            bankData.map(d => {
                if(balance_amt_with && date_with){
                    if (d["Transaction Details"].toLowerCase().includes(e.target.value.toLowerCase()) && d["Balance AMT"].toLowerCase().includes(e.target.value) && d["Date"].toLowerCase().includes(e.target.value.toLowerCase())) {
                        data.push(d);
                    }
                }else if(balance_amt_with){
                    if (d["Transaction Details"].toLowerCase().includes(e.target.value.toLowerCase()) && d["Balance AMT"].toLowerCase().includes(e.target.value)) {
                        data.push(d);
                    }
                }else if(date_with){
                    if (d["Date"].toLowerCase().includes(e.target.value.toLowerCase()) && d["Transaction Details"].toLowerCase().includes(e.target.value.toLowerCase())) {
                        data.push(d);
                    }
                }else {
                    if (d["Transaction Details"].toLowerCase().includes(e.target.value.toLowerCase())) {
                        data.push(d);
                    }
                }
            });
        }else{
            data = this.props.data;
        }
        this.setState({presentData: data, transaction_with: e.target.value})
    }

    balChangeHandler(e){
        const {bankData, transaction_with, date_with} = this.state;
        let data = [];
        if(e.target.value) {
            bankData.map(d => {
                if(transaction_with && date_with){
                    if (d["Transaction Details"].toLowerCase().includes(transaction_with.toLowerCase()) && d["Balance AMT"].toLowerCase().includes(e.target.value) && d["Date"].toLowerCase().includes(e.target.value.toLowerCase())) {
                        data.push(d);
                    }
                }else if(transaction_with){
                    if (d["Transaction Details"].toLowerCase().includes(transaction_with.toLowerCase()) && d["Balance AMT"].toLowerCase().includes(e.target.value)) {
                        data.push(d);
                    }
                }else if(date_with){
                    if (d["Date"].toLowerCase().includes(e.target.value.toLowerCase()) && d["Balance AMT"].toLowerCase().includes(e.target.value)) {
                        data.push(d);
                    }
                }else {
                    if (d["Balance AMT"].toLowerCase().includes(e.target.value)) {
                        data.push(d);
                    }
                }
            });
        }else{
            data = this.props.data;
        }
        this.setState({presentData: data, balance_amt_with: e.target.value})
    }

    dateChangeHandler(e){
        const {bankData, transaction_with, balance_amt_with} = this.state;
        let data = [];
        if(e.target.value) {
            bankData.map(d => {
                if(transaction_with && balance_amt_with){
                    if (d["Transaction Details"].toLowerCase().includes(transaction_with.toLowerCase()) && d["Balance AMT"].toLowerCase().includes(balance_amt_with.toLowerCase()) && d["Date"].toLowerCase().includes(e.target.value.toLowerCase())) {
                        data.push(d);
                    }
                }else if(balance_amt_with){
                    if (d["Balance AMT"].toLowerCase().includes(balance_amt_with.toLowerCase()) && d["Date"].toLowerCase().includes(e.target.value.toLowerCase())) {
                        data.push(d);
                    }
                }else if(transaction_with){
                    if (d["Transaction Details"].toLowerCase().includes(transaction_with.toLowerCase()) && d["Date"].toLowerCase().includes(e.target.value.toLowerCase())) {
                        data.push(d);
                    }
                }else {
                    if (d["Date"].toLowerCase().includes(e.target.value.toLowerCase())) {
                        data.push(d);
                    }
                }
            });
        }else{
            data = this.props.data;
        }
        this.setState({presentData: data, date_with: e.target.value})
    }

    render() {
        const {bankData, offset, limit, presentData} = this.state;
        let data = range(offset*limit, offset*limit+10);
        return(
            <>
                <div className={"row mx-3 mt-3"}>
                    <div className={"col-12"}>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">S.No <br/><input type="text" className={"form-control w-75 mx-5 invisible"} /></th>
                                    <th scope="col">Account No <br/><input type="text" className={"form-control w-75 mx-5 invisible"} /></th>
                                    <th scope="col">Date <br/><input type="text" className={"form-control w-75 mx-5"} onChange={(e)=>{this.dateChangeHandler(e)}}></input></th>
                                    <th scope="col">Transaction Details <br/><input type="text" className={"form-control w-75 mx-5"} onChange={(e)=>{this.transChangeHandler(e)}}></input></th>
                                    <th scope="col">Value Date <br/><input type="text" className={"form-control w-75 mx-5 invisible"} /></th>
                                    <th scope="col">Withdrawal AMT <br/><input type="text" className={"form-control w-75 mx-5 invisible"} /></th>
                                    <th scope="col">Deposit AMT <br/><input type="text" className={"form-control w-75 mx-5 invisible"} /></th>
                                    <th scope="col">Balance AMT <br/><input type="text" className={"form-control w-75 mx-5"} onChange={(e)=>{this.balChangeHandler(e)}}></input></th>
                                </tr>
                                </thead>
                                <tbody>
                                {data && data.map((d, key)=> {
                                            let elem = presentData[d];
                                            if(elem) {
                                                return (<tr onClick={() => this.setState({selectedRow: elem})} data-toggle="modal"
                                                            data-target="#exampleModalScrollable">
                                                    <th scope="row">{d + 1}</th>
                                                    <td>{elem["Account No"]}</td>
                                                    <td>{elem["Date"]}</td>
                                                    <td>{elem["Transaction Details"]}</td>
                                                    <td>{elem["Value Date"]}</td>
                                                    <td>{elem["Withdrawal AMT"]}</td>
                                                    <td>{elem["Deposit AMT"]}</td>
                                                    <td>{elem["Balance AMT"]}</td>
                                                </tr>)
                                            }else{
                                                return
                                            }
                                        })
                                }
                                </tbody>
                            </table><br/>
                        </div>
                </div>
                <div className={"admin-pagination"}>
                    <ReactPaginationComponent
                        totalCount={presentData.length}
                        rowsPerPage={this.state.limit}
                        handlePaginationClick={this.handlePaginationClick.bind(this)}/>
                </div>
            </>
        )
    }

}

export default BankData;