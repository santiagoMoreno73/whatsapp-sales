import React from "react";

// history
import { useNavigate } from "react-router-dom";

// styled
import { SCard } from "./CardLogin.style";

const CardLogin = () => {
  const navigate = useNavigate();

  const handleChangeRouteTo = () => {
    navigate(`/dashboard`);
  };

  return (
    <SCard className="card">
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-center">
          Sign in your account
        </h5>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="d-flex justify-content-between my-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <a href="/">Forgot Password ?</a>
        </div>
        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleChangeRouteTo}
          >
            Sign in
          </button>
        </div>
        <div className="mt-3">
          <p>
            Don't have an account? <a href="/">Sign up</a>
          </p>
        </div>
      </div>
    </SCard>
  );
};

export default CardLogin;
