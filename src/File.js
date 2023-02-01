import React , {useState,useEffect} from 'react'

import Button from '@mui/material/Button'
import { TextField, Typography,AppBar, Container,Toolbar } from '@mui/material';
import SearchAppBar from './SearchAppBar';

const File = () => {
  //.......styling component.........
  const [s,setS]=useState(false)
  const [value,setValue]=useState()
  //..................
  //for searching..............
  const [d,setD]=useState([])

  //.........................................
    const [text,setText]=useState("");
    const [a,setA]=useState([])
    const [show,setShow]=useState(false)
    const [updatingvalue,setUpdatingvalue]=useState("");
    console.log(s,"out")
  useEffect(()=>{
    console.log(s,"in")
    setS(true)
    const newData=a.filter(items=>items.toLowerCase().includes(value.toLowerCase())
    );
    setD([...newData])
  },[value])
  //.........operations..............
    function TextHandler(event){
        setText(event.target.value);
        
    }
    function ButtonHandler(event){
        event.preventDefault();
            setA(b=>[...b,text])
            setText("")
            setS(false)
    }
  
   function DeleteHandler(i){
    a.splice(i,1);
    setA([...a])
   }
   function EditHandler(i){
    setText(a[i])
    setShow(true)
    setUpdatingvalue(i)
   }
   function Update(event){
    event.preventDefault()
    a.splice(updatingvalue,1,text)
    setA([...a])
    setShow(false)
   }
  
  return (
    <div  >
      <SearchAppBar func={(e)=>setValue(e.target.value)}/>
      <Typography varient="h1">hgxj</Typography>
   
      <Container style={{"marginTop":"70px",}} maxWidth="sm">
      <form>
        <TextField label="Search/add for the items" value={text} onChange={TextHandler} ></TextField>
        {!show?<Button onClick={ButtonHandler} variant="contained" style={{"marginTop":"10px","marginLeft":"5px","width":"100px"}}>ADD</Button>:
        <Button onClick={Update} variant="contained" style={{"marginTop":"10px","marginLeft":"5px","width":"100px"}}>Update</Button>}
      </form>
    
     { s? d.map((ele,index)=>
        <div>
             <Typography key={index}>{ele}</Typography>
             <Button onClick={()=>EditHandler(index)} variant="contained" style={{"margin":"5px"}}>Edit</Button>
             <Button onClick={()=>DeleteHandler(index)} variant="contained">Delete</Button>
        </div>) :
       a.map((ele,index)=> 
       <div>
             <Typography key={index}>{ele}</Typography>
             <Button onClick={()=>EditHandler(index)} variant="contained" style={{"margin":"5px"}}>Edit</Button>
             <Button onClick={()=>DeleteHandler(index)} variant="contained">Delete</Button>
        </div>
            )}
            
      </Container>
      <h1>Your search results</h1>
    </div>
    
  )
}
export default File
