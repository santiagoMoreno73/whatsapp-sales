import React from "react";

const Login = () => {
  return (
    <React.Fragment>
      <div class="card" style={{ width: 800 }}>
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-center">
            Sign in your account
          </h5>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="d-flex justify-content-between my-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <a href="/">Forgot Password ?</a>
          </div>
          <div class="d-grid gap-2">
            <button type="button" class="btn btn-primary">
              Sign in
            </button>
          </div>
          <div class="mt-3">
            <p>
              Don't have an account? <a href="/">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
