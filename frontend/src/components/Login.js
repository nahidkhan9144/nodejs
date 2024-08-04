import React from 'react';

export default function Login() {
  const style = {
    background: 'linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))',
    height: '100vh',
    color: 'white',
    overflow:'hidden'
  };

  const cardStyle = {
    borderRadius: '1rem',
  };

  return (
    <section className="vh-50 gradient-custom" style={style}>
      <div className="container py-5 h-50">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={cardStyle}>
              <div className="card-body p-3 text-center">
                <div className="mb-md-5 mt-md-4 pb-2">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>

                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                  </div>

                  <div data-mdb-input-init className="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                  </div>

                  <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
