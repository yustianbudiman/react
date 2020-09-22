import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CInput,
  CRow,
  CDataTable,
  CBadge,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
class ListUsers extends React.Component {
 constructor(props) {
  super(props);
  this.handleClose = this.handleClose.bind(this);
  this.handleShow = this.handleShow.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
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
  // this.setState({
  //       [e.target.name]: e.target.value
  //   });
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
            List
            <small> Users</small>
          </CCardHeader>
          <CCardBody>
          <CButton className="btn-facebook btn-brand mr-1 mb-1" onClick={() => {
        this.props.history.push('list/add')
   }}>Add</CButton>
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
    </CRow>
  );
 }
}
export default ListUsers;
