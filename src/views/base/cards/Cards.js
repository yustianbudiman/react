import React,{ lazy } from 'react'
import {
  CRow,
  CCol,
  CWidgetIcon,
  CButton,
  CForm,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CContainer,
  CImg,
  CPopover,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { numberFormat } from '../../numberFormat';
import { freeSet } from '@coreui/icons'

class Cards extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {hf_username: '',hf_password:''};
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
        error: null,
        isLoaded: false,
        items: [],
      };
   }

   componentDidMount() {
    fetch("http://mj-infomatika.my.id/barang/barangAll")
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
   

    
  render() {
    const {items,isLoaded } = this.state;

    const content = items.map((post) =>
    <CCol xs="6"  key={post.id}>
      <CCard color="info" className="text-white text-center">
      
        <CImg
            src={"http://mj-infomatika.my.id/img_api/"+post.kode_barang+".jpg"}
            fluid
            className="img-thumbnail"
            width="auto"
            height="100"
            alt="Responsive image"
            />
          <CCardFooter style={{fontSize:10}} color="info" className="text-white" data-id={post.id} data-value={post.keterangan} data-value={post.harga} onClick={this.acceptReq}>
            <CIcon style={{ marginRight: 10 }} width={16} content={freeSet.cilCart} />
            <CPopover className="align-bottom" style={{fontSize:8}} header="Detail Produk" content={"Detail: "+post.keterangan+"Ukuran: Semua ukurna ada"}>
              <CIcon style={{ marginRight: 10 }} width={16} content={freeSet.cilSettings} /> 
            </CPopover> 
            <CPopover className="align-bottom" style={{fontSize:8}} header="Info" content="Click on cart icon if you want bid this product">
              <CIcon width={16} content={freeSet.cilInfo}  />
            </CPopover>
            {numberFormat(post.harga)}
          </CCardFooter>
      </CCard>
    </CCol>
  );


  return (
    <CContainer fluid>
      <CRow>
          {isLoaded==false?<CSpinner style={{ position: "fixed", top: "50%", left: "50%" }} color="info" />:null}
          {content}
      </CRow>
      </CContainer>
        
      
    
  )
}
}

export default Cards
