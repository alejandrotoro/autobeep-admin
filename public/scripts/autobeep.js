var AdminLoginContainer = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  handleAdminLoginSubmit: function(admin) {
    var cars = this.state.data;
    $.ajax({
      url: this.props.adminLoginUrl,
      dataType: 'json',
      type: 'POST',
      data: admin,
      success: function(data) {
        console.log('data: ', data);
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.log('status: ', status);
        this.setState({data: []});
        console.error(this.props.adminLoginUrl, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="adminLoginContainer">
        <h1>Admins</h1>
        <AdminLoginForm onCarSubmit={this.handleAdminLoginSubmit} />
        <AdminRegister />
      </div>
    );
  }
});

var AdminLoginForm = React.createClass({
  getInitialState: function() {
    return {email: '', password: ''};
  },
  handleEmailChange: function(e) {
    this.setState({email: e.target.value});
  },
  handlePasswordChange: function(e) {
    this.setState({password: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var email = this.state.email.trim();
    var password = this.state.password.trim();
    if (!email || !password) {
      return;
    }
    this.props.onCarSubmit({email: email, password: password});
    this.setState({password: '', email: ''});
  },
  render: function() {
    return (
      <form className="adminLoginForm" onSubmit={this.handleSubmit}>
        <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
        <input type="password" placeholder="Contraseña" value={this.state.password} onChange={this.handlePasswordChange} />
        <input type="submit" value="Iniciar Sesión" />
      </form>
    );
  }
});

var AdminRegister = React.createClass({
  render: function() {
    return (
      <div className="adminRegisterLink">
        <a>Registrarse</a>
      </div>
    );
  }
});

ReactDOM.render(
  <AdminLoginContainer adminLoginUrl='http://dev.updatedcar.com/api/v1/admins/authenticate' />,
  document.getElementById('content')
);