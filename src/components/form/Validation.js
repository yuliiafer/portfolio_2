import React  from "react";

const defaultForm = {
  name: "",
  email: "",
  message: "",
  nameError: "",
  emailError: "",
  messageError: ""
};

export class Validation extends React.Component {
  state = defaultForm;

  handleChange = (event) => {
    let checkBox = event.target.type === "checkBox";
    this.setState ({
      [event.target.name]: checkBox ? event.target.checked : event.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (this.state.name < 2) {
      nameError = "enter your name please";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (!this.state.message) {
      nameError = "No message";
    }

    if (emailError || nameError || messageError) {
      this.setState({
        emailError: emailError,
        nameError: nameError,
        messageError: messageError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const valid = this.validate();
    if (valid) {
      console.log(this.state);
      this.setState(defaultForm);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Your Name</label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div style={{color: 'red', fontSize: 12}}>{this.state.nameError}</div>
        </div>
        <div>
          <label htmlFor="email">Your Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{color: 'red', fontSize: 12 }}>{this.state.emailError}</div>
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <input
            className="message"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
          />
          <div style={{color: 'red', fontSize: 12 }}>{this.state.messageError}</div>
        </div>
        <button className="submit" type="submit">
          Send a message
        </button>
      </form>
    );
  }
}
