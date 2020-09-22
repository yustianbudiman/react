import React from 'react'
import { CFooter,CCol,CButton,CWidgetBrand,CWidgetIcon,CButtonGroup } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'


const TheFooter = () => {
  return (
    <CFooter fixed={false} style={{padding:0}}>
  
      <CButtonGroup style={{display:"contents"}}>
        <CButton  className="m-2" style={{shape: "square",variant: 'outline',borderTopLeftRadius:0,borderBottomLeftRadius:0}} ><CIcon name={'cilSettings'} size={'sm'}/></CButton>
        <CButton  className="m-2" style={{shape: "square",variant: 'outline'}} ><CIcon content={freeSet.cilAlarm} size={'sm'}/></CButton>
        <CButton  className="m-2" style={{shape: "square",variant: 'outline',borderTopRightRadius:0,borderBottomRightRadius:0}} ><CIcon name={'cil-user'} size={'sm'}/></CButton>
      </CButtonGroup>
        </CFooter>
      
  )
}

export default React.memo(TheFooter)
