import { makeStyles, TextField } from '@material-ui/core'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const useStyles = makeStyles((theme) => ({
  textbox:{
    margin: theme.spacing(1),    
    width: '5rem',
    [theme.breakpoints.down('sm')]: {
      width: '10rem',
    },          
    height:'5rem' ,   
    textAlign: 'center',
    '& .MuiInputBase-input':{
      fontSize: '2rem', 
      paddingLeft: '1.5rem' ,
      [theme.breakpoints.up('sm')]: {        
        fontSize: '3rem', 
      },          
    },
    '& .MuiInputBase-root':{
      height:'5rem'      
    }     
    },
}))



const InputTextBoxes = forwardRef(({handleOnChange, variant, guessWord}, ref) => {

  const letter2Ref = useRef(null)
  const letter3Ref = useRef(null)
  const letter4Ref = useRef(null)

  useImperativeHandle(ref, () => ({
    focusBox2: () => letter2Ref.current.focus(),
    focusBox3: () => letter3Ref.current.focus(),
    focusBox4: () => letter4Ref.current.focus(),
  }))

  const classes= useStyles()

  return(
    <div className="gameHeader__guess">        
      <TextField   className={classes.textbox}
        id = "letter1"
        value = {guessWord.letter1}
        onChange = {handleOnChange}  
        variant = {variant}        
      />
      <TextField   className={classes.textbox}
        id = "letter2"
        value = {guessWord.letter2}
        onChange = {handleOnChange}
        inputRef	= {letter2Ref}
        variant = {variant}        
      />
      <TextField   className={classes.textbox}
        id = "letter3"
        value = {guessWord.letter3}
        onChange = {handleOnChange}
        inputRef	= {letter3Ref}
        variant = {variant}        
      />
      <TextField   className={classes.textbox}
        id = "letter4"
        value = {guessWord.letter4}
        onChange = {handleOnChange}
        inputRef	= {letter4Ref}
        variant = {variant}        
      />                
    </div>
  )    
})

export default InputTextBoxes