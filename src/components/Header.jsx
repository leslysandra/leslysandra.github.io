import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.css";

class Header extends React.Component {
  state = {
    active: false,
  };
  constructor(props) {
    super(props);
    this.burger = React.createRef();
    this.nav = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <header>
        <Link className="go-home" to="/">
          <h1>Lesly Zerna 🤖</h1>
        </Link>
        <ul
          ref={this.nav}
          className={`navigator ${this.state.active ? "navigator-active" : ""}`}
        >
          <Link className="hack" to="/me">
            About
          </Link>
          <Link className="hack" to="/talks">
            Talks
          </Link>
          <Link className="hack" to="/courses">
            Courses
          </Link>
        </ul>
        <div ref={this.burger} onClick={this.handleClick} className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
    );
  }
}

export default Header;
