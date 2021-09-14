import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

class About extends Component {
  componentDidMount() {
    var elem = document.querySelectorAll(".modal");
    var instance = M.Modal.init(elem, {
      opacity: 0.8,
    });
  }
  render() {
    return (
      <div>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <div className=" right-align">
              <button className="btn modal-close">&times;</button>
            </div>
            <p className="modal-title">About me</p>
            <img
              src={require("../images/profile-img.jpg")}
              alt="profile"
              class="profile-img"
            />
            <p>
              Front End Developer with a concentration in Javascript frameworks
              and libraries such as React JS. Most recently worked at a global
              digital solutions enterprise writing front end code, and improving
              website performance. Interested in opportunities to deliver
              solutions that combine clean code with well thought-out
              user-experience.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
