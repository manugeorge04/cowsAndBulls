import React, { useState, useEffect, Fragment } from 'react'
import Modal from '@material-ui/core/Modal'
import RulesCarouselCard from './RulesCarouselCard';

const RulesModal = (props) => {    
  const [btnId, setBtnId] = useState(0)
  const [direction, setDirection] = useState('up')
  const [incoming, toggleIncoming] = useState(true)

  useEffect(() => {    
    setBtnId(props.Open_BtnId.btnId)
  },[props.Open_BtnId.btnId])  

  const handleOnBackClick= () => {    
    setBtnId(btnId-1===0?3:btnId-1)
    setDirection('left')
    toggleIncoming(!incoming)
    
  }

  const handleOnForwardClick = () => {
    setBtnId(btnId+1===4?1:btnId+1)
    setDirection('right')
    toggleIncoming(!incoming)
  }

  return(
    <Modal
      open={props.Open_BtnId.open}
      onClose={props.handleOnClose}      
    >
      <Fragment>    { //gives a warning if RulesCarousel isn;t wrapped with Fragment; need to figure out why!
                    }
        <RulesCarouselCard 
          direction={incoming==false?direction==='left'? 'right': 'left':direction}
          in={incoming}
          btnId={btnId}
          handleOnForwardClick={handleOnForwardClick}
          handleOnBackClick={handleOnBackClick}
        />       
        <RulesCarouselCard 
          direction={incoming==false?direction:direction==='left'? 'right': 'left'}
          in={!incoming}
          btnId={btnId}
          handleOnForwardClick={handleOnForwardClick}
          handleOnBackClick={handleOnBackClick}
        />  
      </Fragment>
    </Modal>
  )
}

export default RulesModal