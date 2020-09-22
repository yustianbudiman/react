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
  CInputFile
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
class FormUser extends React.Component {
 constructor(props) {
  super(props);
  this.state = {hf_nama_produk: '',hf_jumlah:'',hf_harga:'',file_input:''};
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.state = {
      error: null,
      isLoaded: false,
    };
 }
 // const [data, setData] = useState([]);
 handleChange(e) {
  this.setState({hf_jumlah: e.target.value});
  this.setState({hf_nama_produk: e.target.value});
  this.setState({hf_harga: e.target.value});
  // this.setState({
  //       [e.target.name]: e.target.value
  //   });
  // this.setState({file_input: e.target.file_input.files[0]});
 }
selectedFile(e){
  console.log(e.target.file_input.files[0]);

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
 console.log(e.target.file_input.files[0]);
 const fd=new FormData();
 let reader=new FileReader();
 reader.readAsDataURL(e.target.file_input.files[0])
 fd.append('file_input',e.target.file_input.files[0],e.target.file_input.files[0].name);
 // console.log(e.target.file_input.files[0]);
 reader.onload=(e)=>{
   console.log('image data',e.target.result);
   fetch('http://localhost:8000/produk', {
     method: 'POST',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       nama_produk: 'tas',
       jumlah: 1,
       harga: 100,
       gambar: e.target.result
     })
   }).then(
     (result) => {
       console.log('berhasil');
     },
     (error) => {
        console.log('error');
     }
   );

 }
 // jumlah: e.target.hf_jumlah.value,
 // harga: e.target.hf_harga.value
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
          <CForm onSubmit={this.handleSubmit} encType="multipart/form-data" className="form-horizontal">
          <CCardBody>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="hf-nama_produk">Nama Produk</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput type="text" id="hf-nama_produk" name="hf_nama_produk" placeholder="Enter Nama Produk..." autoComplete="nama_produk" value={this.state.nama_produk} onChange={this.handleChange}/>
              <CFormText className="help-block">Please enter your nama produk</CFormText>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="hf-jumlah">Jumlah</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput type="text" id="hf-jumlah" name="hf_jumlah" placeholder="Enter Jumlah..." autoComplete="current-jumlah" value={this.state.jumlah} onChange={this.handleChange}/>
              <CFormText className="help-block">Please enter your jumlah</CFormText>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="hf-harga">Harga</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput type="text" id="hf-harga" name="hf_harga" placeholder="Enter Harga..." autoComplete="current-harga" value={this.state.harga} onChange={this.handleChange}/>
              <CFormText className="help-block">Please enter your Harga</CFormText>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CLabel col md="3" htmlFor="file-input">Foto</CLabel>
            <CCol xs="12" md="9">
              <CInputFile id="file_input" name="file_input" />
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
