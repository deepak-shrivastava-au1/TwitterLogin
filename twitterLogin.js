import React from 'react';
import ReactDOM from 'react-dom';
import TwitterLogin from 'react-twitter-auth';


class Login extends React.Component {
    constructor(props){
        super(props);

        this.googleCallBack = this.googleCallBack.bind(this);
    }

    googleCallBack(response){
        if(!response || !response.accessToken) {
            alert("Sorry, Google Sign in Failed ! Please try again !");
            return;
        }
        let user = {
            token: response.accessToken,
            name: response.profileObj.name
        };

        localStorage.setItem("user", JSON.stringify(user));

        this.props.history.push("/app");
    }

    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-4 offset-md-4">
                        <h2 className = "text-success">Login Using Tw</h2>
                        <hr className = "text-dark" />
                        <TwitterLogin
                        loginUrl="http://localhost:4000/api/v1/auth/twitter"
                        onFailure={this.onFailed}
                        onSuccess={this.onSuccess}
                        requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
                        showIcon={true}
                        customHeaders={customHeader}
                        >
                        <b>Custom</b> Twitter <i>Login</i> content
                        </TwitterLogin>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
