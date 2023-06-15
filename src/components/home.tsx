import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-4 text-primary">Profile Portfolio</h1>
      <div className="card bg-light">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img
                src="profile-picture.jpg"
                alt="Profile Picture"
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-md-8">
              <h3 className="h2 text-info">John Doe</h3>
              <p className="lead">Front-end Developer</p>
              <ul className="list-unstyled">
                <li className="text-muted">Location: New York, USA</li>
                <li className="text-muted">Email: johndoe@example.com</li>
                <li className="text-muted">Phone: +1 123-456-7890</li>
                <li className="text-muted">Website: www.johndoe.com</li>
              </ul>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum tortor eget efficitur pharetra. Donec
                mollis diam at malesuada eleifend.
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <h4 className="text-success">Skills</h4>
          <ul className="list-inline">
            <li className="list-inline-item text-primary">HTML</li>
            <li className="list-inline-item text-primary">CSS</li>
            <li className="list-inline-item text-primary">JavaScript</li>
            <li className="list-inline-item text-primary">React</li>
            <li className="list-inline-item text-primary">Bootstrap</li>
          </ul>
          <hr className="my-4" />
          <h4 className="text-warning">Experience</h4>
          <ul className="list-unstyled">
            <li>
              <strong>Company A</strong> - Front-end Developer (2018 - Present)
            </li>
            <li>
              <strong>Company B</strong> - Web Designer (2015 - 2018)
            </li>
          </ul>
          <hr className="my-4" />
          <h4 className="text-danger">Projects</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img
                  src="project1.jpg"
                  alt="Project 1"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Project 1</h5>
                  <p className="card-text text-muted">Description of project 1</p>
                  <input type="file" className="form-control-file mt-3" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img
                  src="project2.jpg"
                  alt="Project 2"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Project 2</h5>
                  <p className="card-text text-muted">Description of project 2</p>
                  <input type="file" className="form-control-file mt-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
