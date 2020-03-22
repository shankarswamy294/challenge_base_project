import React from 'react';
import RouterComponent from "../Router/router";
import { connect } from 'react-redux'
import { showLoader, getBankData } from '../../store/actions';
import BankData from "../BankData/BankData";

// const Counter = ...

const mapStateToProps = (state , ownProps) => {
  return {
    should_show_loader: state.Common && state.Common.should_show_loader,
    bankData: state.Common && state.Common.bankData
  }
};

const mapDispatchToProps = { showLoader, getBankData };

class ApplicationContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            test: null
        }
    }

    componentDidMount() {
        this.props.getBankData({});
    }

    render(){
        const {showLoader, should_show_loader, bankData} = this.props;
        return(
            <>
            {/* header */}
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand text-white"><b>Vimeo Challenge</b></a>
                </nav>
            </header>
            {/* sidebar */}
            {/* router */}
            <RouterComponent />
                {bankData ? <BankData data={bankData}/> :  <h1>Loading...</h1>}
                {/*<button className={"btn btn-success"} onClick={()=>showLoader(true)}> showLoader </button>*/}
                {/*<button className={"btn btn-danger"} onClick={()=>showLoader(false)}> hideLoader </button>*/}
                {/*{should_show_loader && <h1>Loading...</h1>}*/}
            </>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer);