import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};


class SignUp extends Component {

  onSubmit(props) {
      console.log(props);
      // this.props.createPost(props)
      //   .then(() => {
      //     //blog post has been created, navigate the user to the index
      //     //We navigate by calling this.context.router.push with the new path to navigate to.
      //     this.context.router.push('/');
    }


  render() {
    // handleSubmit(e) {
      //do stuff here
    // }
    const {handleSubmit, pristine, reset, submitting} = this.props;

    return (

      <div className="container">
        {/* <div>
            <h2 className="text-center">Sign Up</h2>
          </div> */}
        <div className="col-md-9 centered well well-lg">

          <button type="button" class="close " data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div>
            <button className="btn btn-info">
              Sign Up with Google
            </button>
          </div>

          <div className="col-md-9">
            <h4 className="text-center">
              or
            </h4>
          </div>
          <div className="col-md-12 well well-lg">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div className="row">
                <div className="col-md-4">
                  <h5>First Name</h5>
                </div>
                <div className="col-md-8">
                  <input name="firstName" type="text" className="form-control"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h5>Last Name</h5>
                </div>
                <div className="col-md-8">
                  <input name="lastName" type="text" className="form-control"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h5>Email</h5>
                </div>
                <div className="col-md-8">
                  <input name="email" type="text" className="form-control"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <h5>Password</h5>
                </div>
                <div className="col-md-8">
                  <input name="password" type="text" className="form-control"/>
                </div>
              </div>
              <div className="row">
                <button type="submit" className="btn btn-default">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }

}
SignUp = reduxForm({form: 'Signup'})(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
