import React, { useState, useEffect, Fragment } from 'react'
import Modal from '@material-ui/core/Modal'
import RulesCarouselCard from './RulesCarouselCard';

const RulesModal = (props) => {    
  const [btnId, setBtnId] = useState(0)
  const [prev_btnId, setPrevBtnId] = useState(0)
  const [direction, setDirection] = useState('up')
  const [incoming, toggleIncoming] = useState(true)

  useEffect(() => {    
    setBtnId(props.Open_BtnId.btnId)
  },[props.Open_BtnId.btnId])  

  const handleOnBackClick= () => { 
    setPrevBtnId(btnId)   
    setBtnId(btnId-1===0?3:btnId-1)
    setDirection('left')
    toggleIncoming(!incoming)    
  }

  const handleOnForwardClick = () => {
    setPrevBtnId(btnId)
    setBtnId(btnId+1===4?1:btnId+1)
    setDirection('right')
    toggleIncoming(!incoming)
  }

  return(
    <Modal
      open={props.Open_BtnId.open}
      onClose={()=>{ 
          setDirection('up')
          props.handleOnClose()
        }}      
    >
      <Fragment>    { //gives a warning if RulesCarousel isn;t wrapped with Fragment; need to figure out why!
                    }
        <RulesCarouselCard 
          direction={incoming==false?direction==='left'? 'right': 'left':direction}
          in={incoming}
          btnId={incoming===false?prev_btnId:btnId}
          handleOnForwardClick={handleOnForwardClick}
          handleOnBackClick={handleOnBackClick}
          handleOnClose={props.handleOnClose}
        />       
        <RulesCarouselCard 
          direction={incoming==false?direction:direction==='left'? 'right': 'left'}
          in={!incoming}
          btnId={!incoming===false?prev_btnId:btnId}
          handleOnForwardClick={handleOnForwardClick}
          handleOnBackClick={handleOnBackClick}
          handleOnClose={props.handleOnClose}
        />  
      </Fragment>
    </Modal>
  )
}

export default RulesModal