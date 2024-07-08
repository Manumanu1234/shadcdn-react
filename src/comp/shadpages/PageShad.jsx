import React from 'react'
import { Button } from '../../components/ui/button'

function PageShad() {
  return (
    <div  className='pageshad'>
       <div className='Pageheading'>
        <div className='Twitter'>
          <Button size='lg'>Follow along on Twitter</Button>
        </div>
        <h1 className='DetailHeading'>An example app built using Next.js 13 server components.</h1>
        <p className='DetailPara'>I'm building a web app with Next.js 13 and open sourcing everything. Follow along as we figure this out together.</p>
       <div className='ButnGit'>
        <Button className='dark' size='xg'>Get Started</Button>
        <Button size='mg'>Git hub</Button>
       </div>
       
       </div>
    </div>
  )
}

export default PageShad