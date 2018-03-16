import React from "react";


class HomePage extends React.Component {

    gotoLogin = (e) => {

        e.preventDefault();
        this.props.history.push(`/login`);

    };

    gotoRegister = (e) => {

        e.preventDefault();
        this.props.history.push(`/register`);

    };

	render() {

		return (

                
                <div className="fr-widget">
                         
                          <div className="title">
                              <h3>Welcome</h3>
                          </div>

                          <div className="fr-widget-body">
                              
                              <form action="">
                                    <button onClick={this.gotoLogin} className="btn">Login</button> &nbsp;&nbsp;&nbsp;
                                    <button onClick={this.gotoRegister} className="btn">Register</button>
                              </form>

                          </div>

                     </div>

		);

	}

}

export default HomePage;

