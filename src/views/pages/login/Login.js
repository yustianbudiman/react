import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hf_username: '',hf_password:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
        error: null,
        isLoaded: false,
        showStore:'1',
      };
   }

   componentDidMount() {
     
    }

   handleChange(e) {
    this.setState({id_users: ''});
    // this.setState({hf_password: e.target.value});
    this.setState({
          [e.target.name]: e.target.value
      });
   }

   handleSave(e) {
    e.preventDefault();
  const requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/x-www-form-urlencoded" },
        body: 'username='+e.target.hf_username.value+'&password='+e.target.hf_password.value
    };
  
      fetch('http://mj-infomatika.my.id/users/login', requestOptions)
        .then(function(response) {
          return response.json();
        }).then(function(data) {
          if(data.data!=null){
            localStorage.setItem('userReact', data.data.id);
            this.props.history.push("/widgets");
            this.setState({showStore:'1'});
          }else{
            this.setState({showStore:'0'});
          }
        }.bind(this));
       
        
   }


  render() {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={this.handleSave}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CAlert color="info" closeButton style={{display: this.state.showStore==0 ? 'block' : 'none' }}>Wrong user ? password!</CAlert>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" id="hf-username" name="hf_username" autoComplete="username" value={this.state.username} onChange={this.handleChange}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" id="hf-password" name="hf_password" autoComplete="current-password" value={this.state.password} onChange={this.handleChange} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
}

export default Login
