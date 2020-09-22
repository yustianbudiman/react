import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
class FormUser extends React.Component {
 constructor(props) {
  super(props);
  this.state = {hf_email: '',hf_password:''};
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.state = {
      error: null,
      isLoaded: false,
    };
 }
 // const [data, setData] = useState([]);
 handleChange(e) {
  // this.setState({id_users: ''});
  // this.setState({hf_password: e.target.value});
  this.setState({
        [e.target.name]: e.target.value
    });
 }

 componentDidMount() {
 fetch("http://localhost:8000/users")
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             items: result.data
           });
         },
         (error) => {
           this.setState({
             isLoaded: true,
             error
           });
         }
       )
     }

getdata(){
  fetch("http://localhost:8000/users")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.data
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
}


handleSubmit(e) {
 e.preventDefault();
fetch('http://localhost:8000/users', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: e.target.hf_email.value,
    password: e.target.hf_password.value,
    token: 'Active'
  })
}).then(
  (result) => {
    this.getdata();
  },
  (error) => {
    this.setState({
      isLoaded: true,
      error
    });
  }
);
}
 render() {
  return(
    <CRow>
      <CCol xs="12" md="12">
        <CCard>
          <CCardHeader>
            Form
            <small> Input User</small>
          </CCardHeader>
          <CForm onSubmit={this.handleSubmit}>
          <CCardBody>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="hf-email">Email</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput type="email" id="hf-email" name="hf_email" placeholder="Enter Email..." autoComplete="email" value={this.state.email} onChange={this.handleChange}/>
              <CFormText className="help-block">Please enter your email</CFormText>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="hf-password">Password</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput type="password" id="hf-password" name="hf_password" placeholder="Enter Password..." autoComplete="current-password" value={this.state.password} onChange={this.handleChange}/>
              <CFormText className="help-block">Please enter your password</CFormText>
            </CCol>
          </CFormGroup>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
          </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  );
 }
}
export default FormUser;
