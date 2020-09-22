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
class ListProduk extends React.Component {
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
 fetch("http://localhost:8000/produk")
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
   const getBadge = gambar => {
     switch (gambar) {
       case 'Active': return 'success'
       case 'Inactive': return 'secondary'
       case 'Pending': return 'warning'
       case 'Banned': return 'danger'
       default: return 'primary'
     }
   }
   const fields = ['nama_produk','jumlah', 'harga','gambar','aksi']

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
        this.props.history.push('cards/add')
   }}>Add</CButton>
          <CDataTable
            items={items}
            fields={fields}
            itemsPerPage={6}
            pagination
            scopedSlots = {{
              'token':
                (item)=>(
                  <td className="text-center">
                    <div className="c-avatar">
                      <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                      <span className="c-avatar-status bg-success"></span>
                    </div>
                  </td>
                ),
              'aksi':
            (item)=>(<td className="text-center">
              <div className="c-avatar">
                <img src={'http://mj-infomatika.my.id/img/test3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                <span className="c-avatar-status bg-success"></span>
              </div>
            </td>)
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
export default ListProduk;
