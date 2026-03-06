import React, { useEffect, useState } from 'react'

export default function Navbar({ onTalk }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = ['Services','Creators','Software','About']

  return (
    <>
      <nav style={{
        position:'fixed',top:0,width:'100%',zIndex:200,
        display:'flex',justifyContent:'space-between',alignItems:'center',
        transition:'all .4s',
        padding: scrolled ? '14px 40px' : '20px 40px',
        background: scrolled || open ? 'rgba(8,8,8,.96)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none'
      }}>
        {/* Logo */}
        <div style={{fontFamily:'Bebas Neue',fontSize:'1.85rem',letterSpacing:'.08em',display:'flex',alignItems:'center',lineHeight:1,zIndex:201}}>
          <span style={{color:'var(--c)'}}>f</span><span style={{color:'var(--y)'}}>r</span>
          <span style={{color:'var(--p)'}}>n</span><span style={{color:'var(--v)'}}>t</span>
          <span style={{width:1,height:20,background:'rgba(255,255,255,.15)',margin:'0 10px',display:'inline-block'}}/>
          <span style={{color:'rgba(255,255,255,.3)',fontSize:'.72rem',fontFamily:'Space Grotesk',fontWeight:400,letterSpacing:'.38em',textTransform:'uppercase'}}>MEDIA</span>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links" style={{display:'flex',gap:40}}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                style={{fontSize:'.75rem',letterSpacing:'.14em',textTransform:'uppercase',color:'var(--muted)',fontWeight:500,transition:'color .2s'}}
                onMouseEnter={e=>e.target.style.color='var(--white)'}
                onMouseLeave={e=>e.target.style.color='var(--muted)'}>{l}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="nav-cta" data-hover onClick={onTalk}
          style={{background:'var(--p)',color:'var(--black)',padding:'10px 24px',border:'none',borderRadius:2,fontSize:'.75rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',transition:'all .25s',cursor:'none'}}
          onMouseEnter={e=>{e.target.style.background='var(--y)';e.target.style.transform='translateY(-2px)'}}
          onMouseLeave={e=>{e.target.style.background='var(--p)';e.target.style.transform='translateY(0)'}}>
          Let&apos;s Talk
        </button>

        {/* Hamburger */}
        <button className="hamburger" onClick={()=>setOpen(o=>!o)}
          style={{display:'none',flexDirection:'column',gap:5,background:'none',border:'none',cursor:'pointer',zIndex:201,padding:4}}>
          <span style={{width:22,height:2,background:open?'var(--p)':'var(--white)',borderRadius:2,transition:'all .3s',transform:open?'rotate(45deg) translate(5px,5px)':'none'}}/>
          <span style={{width:22,height:2,background:open?'var(--p)':'var(--white)',borderRadius:2,transition:'all .3s',opacity:open?0:1}}/>
          <span style={{width:22,height:2,background:open?'var(--p)':'var(--white)',borderRadius:2,transition:'all .3s',transform:open?'rotate(-45deg) translate(5px,-5px)':'none'}}/>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div style={{
        position:'fixed',top:0,left:0,right:0,bottom:0,
        background:'rgba(8,8,8,.98)',backdropFilter:'blur(20px)',
        zIndex:190,display:'flex',flexDirection:'column',
        alignItems:'center',justifyContent:'center',gap:36,
        opacity:open?1:0,pointerEvents:open?'all':'none',transition:'opacity .3s'
      }}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setOpen(false)}
            style={{fontFamily:'Bebas Neue',fontSize:'3rem',letterSpacing:'.1em',color:'rgba(255,255,255,.5)',transition:'color .2s'}}
            onMouseEnter={e=>e.target.style.color='var(--white)'}
            onMouseLeave={e=>e.target.style.color='rgba(255,255,255,.5)'}>{l}</a>
        ))}
        <button onClick={()=>{onTalk();setOpen(false)}}
          style={{marginTop:8,background:'var(--p)',color:'var(--black)',padding:'14px 40px',border:'none',borderRadius:2,fontSize:'.85rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',cursor:'pointer'}}>
          Let&apos;s Talk
        </button>
      </div>

      <style>{`
        @media(max-width:768px){
          .nav-links,.nav-cta{display:none!important}
          .hamburger{display:flex!important}
          nav{padding:16px 20px!important}
        }
      `}</style>
    </>
  )
}
