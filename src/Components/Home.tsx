import { Component } from "react";
import { connect } from "react-redux";
import { dispatchFunctionName } from "../Libraries/redux/reducers/Module/reducer";
import logo from '../logo.svg';

interface IProps {
    dispatchFunctionName: any;
}

interface IState {

}

class Home extends Component<IProps, IState>{
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </>
        );
    }
}

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
  dispatchFunctionName: (payload: any) =>
    dispatch(dispatchFunctionName(payload)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);