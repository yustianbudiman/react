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
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
// const numberFormat = lazy(() => import('../numberFormat.js'))
import { numberFormat } from '../numberFormat';
import { freeSet } from '@coreui/icons'
import withUnmounted from '@ishawnwang/withunmounted'


const toKebabCase = (str) => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export const getIconsView = iconset => {
  return Object.entries(iconset).map(([name, value]) => (
    <CCol className="mb-5" xs="6" sm="4" md="3" xl="2" key={name}>
      <CIcon content={value} size="2xl"/>
      <div>{toKebabCase(name)}</div>
    </CCol>
  ))
}



class Widgets extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {hf_username: '',hf_password:''};
    // this.handleChange = this.handleChange.bind(this);
    this.addRequest = this.addRequest.bind(this);
    this.acceptReq = this.acceptReq.bind(this);
    this.state = {
        error: null,
        isLoaded: false,
        items: [],
        BtnCondition:null
      };
   }

   hasUnmounted = false;
   componentDidMount() {
    fetch("http://mj-infomatika.my.id/users/userAll/"+ localStorage.getItem('userReact'))
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

   componentDidMount() {
    fetch("http://mj-infomatika.my.id/users/userAll/"+ localStorage.getItem('userReact'))
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

  
   

    addRequest(e) {
      e.preventDefault();
      const requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/x-www-form-urlencoded" },
        body: 'id='+e.currentTarget.getAttribute('data-id')+'&posisi=2'
      };

      fetch('http://mj-infomatika.my.id/transaksi/updateTransaksiByUser', requestOptions)
      .then(
        (result) => {
          this.reloadPage();
        },
        (error) => {
        
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
    }

    acceptReq (e) {
      e.preventDefault();
    if(e.currentTarget.getAttribute('data-value')=='2'){
    const requestOptions = {
          method: 'POST',
          headers: {"Content-Type": "application/x-www-form-urlencoded" },
          body: 'id='+e.currentTarget.getAttribute('data-id')+'&posisi=3'
      };

    fetch('http://mj-infomatika.my.id/transaksi/updateTransaksiByUser', requestOptions)
    .then(
      (result) => {
        this.reloadPage();
      },
      (error) => {
       
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
    
    }
    }
    
    reloadPage(e) {
      fetch("http://mj-infomatika.my.id/users/userAll/"+ localStorage.getItem('userReact'))
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
   
    const getBadge = (posisi,id) => {
      if(localStorage.getItem('userReact')==1){
        return null;
      }else{
        if(posisi===null){
          return <CButton type="submit" size="sm" color="primary" data-id={id} onClick={this.addRequest}><CIcon content={freeSet.cilWallet}/> Claim</CButton>;
        }else{
          return <CButton type="submit" size="sm" color="primary" disabled><CIcon content={freeSet.cilWallet}/> Claim</CButton>;
        }
      }
    }
    
   const content = items.map((post) =>
    <CCol xs="12" sm="6" lg="3" key={post.id}>
      <CWidgetIcon text={post.username} header={numberFormat(post.jml)}  color={post.posisi==2?"warning":"success"}>
        <CIcon width={20} name="cil-user" data-id={post.id} data-value={post.posisi} onClick={this.acceptReq}/> 
      </CWidgetIcon>
        {getBadge(post.posisi,post.id)}
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

export default withUnmounted(Widgets)
