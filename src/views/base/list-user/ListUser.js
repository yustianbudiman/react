import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CListGroup,
  CListGroupItem,
  CDataTable,
  CBadge,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
class ListUser extends React.Component {
 constructor(props) {
  super(props);
  this.state = {hf_email: '',hf_password:''};
  this.handleClose = this.handleClose.bind(this);
  this.handleShow = this.handleShow.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleSave = this.handleSave.bind(this);
  this.state = {
      error: null,
      isLoaded: false,
      items: [],
      modal:false,
      id_users:'',
      posts: []
    };
 }
 // const [data, setData] = useState([]);
 handleChange(e) {
  this.setState({id_users: ''});
  // this.setState({hf_password: e.target.value});
  this.setState({
        [e.target.name]: e.target.value
    });
 }

 handleClose(e){
   this.setState({
     modal: false,
     id_users:''
   });
 }

 handleShow(e){
   this.setState({
     modal: true,
     id_users:e.target.getAttribute('attr')
   });
  }

  renderModal(e){
    if (this.state.id_users !== '') {
    const post = this.state.id_users;
    return (
         <div>
           <CInput type="hidden" id="id_user" name="id_user" value={post} onChange={this.handleChange}/>
         </div>
       );
     }
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
  fetch('http://localhost:8000/users/'+e.target.id_user.value, {
      method: 'DELETE'
    }).then(
      (result) => {
        this.getdata();
        this.handleClose();
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
}
handleSave(e) {
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
   const {items } = this.state;
   const {modal} = this.state;
   const getBadge = token => {
     switch (token) {
       case 'Active': return 'success'
       case 'Inactive': return 'secondary'
       case 'Pending': return 'warning'
       case 'Banned': return 'danger'
       default: return 'primary'
     }
   }

   const fields = ['user','password', 'token','aksi']
  return(
    <CRow>
      <CCol xs="12" md="12">
        <CCard>
          <CCardHeader>
            Horizontal
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
          
          <CDataTable
            items={items}
            fields={fields}
            itemsPerPage={5}
            pagination
            scopedSlots = {{
              'token':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.token)}>
                      {item.token}
                    </CBadge>
                  </td>
                ),
              'aksi':
            (item)=>(<td><CButton onClick={this.handleShow} size="sm" attr={item.id} className="btn-facebook btn-brand mr-1 mb-1" >Delete</CButton></td>)
            }}
          />

          <CModal
            color="warning"
            show={modal}
            onClose={this.handleClose}
            size="sm"
          >
            <CModalHeader closeButton>
              <CModalTitle>Delete</CModalTitle>
            </CModalHeader>
            <CForm onSubmit={this.handleSubmit}>
            <CModalBody>
              Apakah Anda Yakin?
              {this.renderModal()}
            </CModalBody>

            <CModalFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton
                color="secondary"
                onClick={this.handleClose}
              >Cancel</CButton>
            </CModalFooter>
            </CForm>
          </CModal>

          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Horizontal
            <small> Form</small>
          </CCardHeader>
          <CForm onSubmit={this.handleSave}>
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
export default ListUser;
