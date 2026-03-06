import React from 'react'

export default function Footer() {
  return (
    <footer style={{padding:'44px 40px 32px',borderTop:'1px solid var(--border)',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:20}}>
      
      {/* Logo */}
      <div style={{fontFamily:'Bebas Neue',fontSize:'1.8rem',letterSpacing:'.08em',display:'flex',alignItems:'center'}}>
        <span style={{color:'var(--c)'}}>f</span><span style={{color:'var(--y)'}}>r</span>
        <span style={{color:'var(--p)'}}>n</span><span style={{color:'var(--v)'}}>t</span>
        <span style={{width:1,height:18,background:'rgba(255,255,255,.15)',margin:'0 10px'}}/>
        <span style={{color:'rgba(255,255,255,.3)',fontSize:'.72rem',fontFamily:'Space Grotesk',fontWeight:400,letterSpacing:'.38em',textTransform:'uppercase'}}>MEDIA</span>
      </div>

      {/* Links */}
      <div style={{display:'flex',gap:28,flexWrap:'wrap'}}>
        {['Services','Creators','Software','About'].map(l=>(
          <a key={l} href={`#${l.toLowerCase()}`}
            style={{fontSize:'.75rem',letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.28)',fontWeight:500,transition:'color .2s'}}
            onMouseEnter={e=>e.target.style.color='var(--white)'}
            onMouseLeave={e=>e.target.style.color='rgba(255,255,255,.28)'}>{l}</a>
        ))}
      </div>

      {/* Copyright */}
      <div style={{fontSize:'.72rem',color:'rgba(255,255,255,.2)'}}>
        © 2026 frnt media. All rights reserved.
      </div>

      <style>{`
        @media(max-width:768px){
          footer{
            flex-direction:column !important;
            align-items:center !important;
            text-align:center !important;
            padding:36px 20px 28px !important;
            gap:24px !important;
          }
          footer > div:nth-child(2){
            justify-content:center !important;
          }
        }
      `}</style>
    </footer>
  )
}
