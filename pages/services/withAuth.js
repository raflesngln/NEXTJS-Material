// withAuth.js
import React from "react";

export function withAuth(Component) {
    return class AuthenticatedComponent extends React.Component {
        state={
            isLogin:false //get status login from redux
        }
        isAuthenticated() {
            // return this.props.isAuthenticated;
            return this.state.isLogin;
        }

        render() {
            const loginErrorMessage = (<div> Please <a href="/login">login</a> in order to view this part of the application.</div>);

            return (
                <div>
                    { this.isAuthenticated === true ? <Component {...this.props} /> : loginErrorMessage }
                </div>
            );
        }
    };
}
export default withAuth;


// PENGGUNAAN
// MyProtectedComponent.js
import React from "react";
import {withAuth} from "./withAuth.js";

export class MyProectedComponent extends React.Component {
    render() {
        return (
            <div>
                This is only viewable  by authenticated users.
            </div>
        );
    }
}
export default withAuth(MyProectedComponent);