import React from 'react'
import {Navbar,Header,Footer}  from './func-components'
import Calendar from './class-component'
import MsgBox from './func-props'
import { MyAbout,Mylmage,MyData } from './func-mydata'

function App() {

  //return [<MyAbout />,<Mylmage />,<MyData />]

  return [<Navbar />, <p><Calendar /></p>, <Header />,<Footer />]
  //return[<Calendar />]
  /*return(
      <MsgBox 
        text="Useing props in function component"
        color="red"
        bgColor="#ccc"
        fontSize="16pt"
        border="dotted 1px black "
      />
  )*/
}

export default App;
