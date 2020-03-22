import React from 'react';
import RouterComponent from "../Router/router";
import { connect } from 'react-redux'
import { showLoader } from '../../store/actions';

// const Counter = ...

const mapStateToProps = (state , ownProps) => {
  return {
    should_show_loader: state.Common && state.Common.should_show_loader
  }
};

const mapDispatchToProps = { showLoader };

class ApplicationContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            test: null
        }
    }

    componentDidMount() {
    }


    render(){
        const {showLoader, should_show_loader} = this.props;
        return(
            <>
            {/* header */}
            {/* sidebar */}
            {/* router */}
            <RouterComponent />
                <button className={"btn btn-success"} onClick={()=>showLoader(true)}> showLoader </button>
                <button className={"btn btn-danger"} onClick={()=>showLoader(false)}> hideLoader </button>
                {should_show_loader && <h1>Loading...</h1>}
            </>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer);