import React from 'react'
import axios from 'axios'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function() {
    return {email: '', password: ''};
  },
  handleEmailChange: function(e) {
    console.log('entra al handleEmailChange');
    this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
    console.log('entra al handlePasswordChange');
    this.setState({password: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    console.log('entra al handleSubmit');
    const email = this.state.email.trim();
    const password = this.state.password.trim();

    if (!email || !password) {
      return;
    }

    axios.post('http://dev.updatedcar.com/api/v1/admins/authenticate', {
      email: email,
      password: password
    })
    .then(function (data) {
      console.log('success: ', data);
      // this.setState({data: data.data});
      // this.context.router.push('/venues');
    })
    .catch(function (error) {
      console.log(error);
      // this.context.router.push('/');
    });

  },
  render() {
    return (
      <form className="adminLoginForm" onSubmit={this.handleSubmit}>
        <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
        <input type="password" placeholder="Contraseña" value={this.state.password} onChange={this.handlePasswordChange} />
        <input type="submit" value="Iniciar Sesión" />
      </form>
    )
  }
})