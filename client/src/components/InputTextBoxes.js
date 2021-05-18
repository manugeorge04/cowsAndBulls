import { makeStyles, TextField } from '@material-ui/core'
import React, { forwardRef, Fragment, useImperativeHandle, useRef } from 'react'

const useStyles = makeStyles((theme) => ({
  textbox:{
    margin: theme.spacing(1),    
    width: '5.7rem',
    height:'5rem' ,
    [theme.breakpoints.down('sm')]: {
      width: '12rem',
      height:'4rem' ,
    },                
    textAlign: 'center',
    '& .MuiInputBase-input':{
      fontSize: '3rem',     
      paddingLeft: '1.5rem', 
      [theme.breakpoints.down('sm')]: {        
        fontSize: '1.5rem',         
      },          
    },
    '& .MuiOutlinedInput-input':{
      [theme.breakpoints.down('sm')]: {                
        paddingLeft: '1rem',
        paddingRight: '0.7rem',
      },                
    },
    '& .MuiInputBase-root':{
      height:'5rem',      
      [theme.breakpoints.down('sm')]: {        
        height:'4rem',              
      },          
    }     
    },
}))

const InputTextBoxes = forwardRef(({handleOnChange, variant, guessWord, handleOnKeyDown, id, disabled}, ref) => {

  const letter1Ref = useRef(null)
  const letter2Ref = useRef(null)
  const letter3Ref = useRef(null)
  const letter4Ref = useRef(null)

  useImperativeHandle(ref, () => ({
    focusBox1: () => letter1Ref.current.focus(),
    focusBox2: () => letter2Ref.current.focus(),
    focusBox3: () => letter3Ref.current.focus(),
    focusBox4: () => letter4Ref.current.focus(),
    scrollToEnd : () => letter4Ref.current.scrollIntoView({ behavior: 'smooth' }),
  }))

  const classes= useStyles()

  return(
    <Fragment>    
      <TextField   className={classes.textbox}
        id = {`${id}_letter1`}
        value = {guessWord.letter1}
        onChange = {handleOnChange}
        inputRef	= {letter1Ref}
        variant = {variant}      
        disabled={disabled}  
      />
      <TextField   className={classes.textbox}
        id = {`${id}_letter2`}
        value = {guessWord.letter2}
        onChange = {handleOnChange}
        inputRef	= {letter2Ref}
        variant = {variant}        
        disabled={disabled}  
      />
      <TextField   className={classes.textbox}
        id = {`${id}_letter3`}
        value = {guessWord.letter3}
        onChange = {handleOnChange}
        inputRef	= {letter3Ref}
        variant = {variant}      
        disabled={disabled}    
      />
      <TextField   className={classes.textbox}
        id = {`${id}_letter4`}
        value = {guessWord.letter4}
        onChange = {handleOnChange}
        inputRef	= {letter4Ref}
        variant = {variant} 
        disabled={disabled}  
        onKeyDown= {handleOnKeyDown}
      />                
    </Fragment>
  )    
})

export default InputTextBoxes