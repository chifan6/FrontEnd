import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;
    console.log();
    return (
      <div className="row">
        {isFirst ? (
          <h2 style={{ margin: "0 515px" }}>welcome!</h2>
        ) : isLoading ? (
          <h2 style={{ margin: "0 515px" }}>Loading...</h2>
        ) : err ? (
          <div style={{ margin: "0 441px", color: "red" }}>{err.message}</div>
        ) : (
          users.map((user) => {
            return (
              <div key={user.id} className="card">
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img
                    alt="head_portrait"
                    src={user.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
