import React from 'react'
import "./shadpage.css"
import { Button } from '../../components/ui/button'
import Open from './Open'
function ShadNav() {
  return (
    <div>
        <div className='Nav'>
                <h1 className='headnav'>Taxonami</h1>
           <p>Feature</p>
           <p>Pricing</p>
           <p>Blog</p>
           <p>Docs</p>
          
           <div className='Nav2'>
            <Button>Login</Button>
            <Open/>
           
           </div>
        </div>
    </div>
  )
}

export default ShadNav