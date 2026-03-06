import React from 'react'

export default function CTA({ onTalk }) {
  return (
    <section id="cta" style={{background:'var(--black)',textAlign:'center',position:'relative',overflow:'hidden',padding:'140px 40px'}}>
      
      {/* Glow */}
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(255,95,163,.07) 0%,transparent 70%)',pointerEvents:'none'}}/>

      <div className="reveal" style={{fontSize:'.72rem',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.25)',marginBottom:24}}>
        Ready to move forward?
      </div>

      <h2 className="reveal" style={{fontFamily:'Bebas Neue',fontSize:'clamp(3.2rem,9.5vw,9rem)',lineHeight:.95,marginBottom:32,transitionDelay:'.1s'}}>
        <span style={{color:'var(--white)'}}>LET&apos;S BUILD</span><br/>
        <span style={{color:'var(--p)'}}>SOMETHING</span><br/>
        <span style={{color:'var(--y)'}}>REAL.</span>
      </h2>

      <p className="reveal" style={{fontSize:'1rem',color:'rgba(255,255,255,.5)',maxWidth:420,margin:'0 auto 48px',lineHeight:1.8,fontWeight:300,transitionDelay:'.2s'}}>
        Whether it is a campaign, a CRM, or your entire digital strategy — frnt media is ready when you are.
      </p>

      <div className="reveal cta-btns" style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap',transitionDelay:'.3s'}}>
        <button data-hover onClick={onTalk} className="btn-main cta-btn-main">Start a Project</button>
        <a href="#services" className="btn-ghost cta-btn-ghost">Explore Services</a>
      </div>

      <style>{`
        @media(max-width:768px){
          #cta{padding:90px 24px !important}
          .cta-btns{flex-direction:column;align-items:center;gap:10px !important}
          .cta-btn-main,.cta-btn-ghost{
            width:auto !important;
            padding:11px 28px !important;
            font-size:.72rem !important;
            display:inline-block !important;
          }
        }
        @media(max-width:480px){
          #cta{padding:72px 16px !important}
          .cta-btn-main,.cta-btn-ghost{
            width:100% !important;
            text-align:center;
            max-width:260px;
          }
        }
      `}</style>
    </section>
  )
}
