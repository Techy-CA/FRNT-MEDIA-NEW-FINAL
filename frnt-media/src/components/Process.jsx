import React from 'react'

const steps = [
  {n:'01',c:'var(--c)',t:'Discover & Define',d:'We deep-dive into your goals, audience and competition. No templates — just raw insight about what will work for you.'},
  {n:'02',c:'var(--y)',t:'Strategy & Match',d:'For influencer campaigns we match by audience alignment. For software we design architecture around your exact workflow.'},
  {n:'03',c:'var(--p)',t:'Execute & Build',d:'Campaigns go live. Code gets shipped. Every detail handled — from creator briefs to deployment and testing.'},
  {n:'04',c:'var(--v)',t:'Track & Grow',d:'Real-time reporting, optimization loops and growth reviews. Results compound over time — we make sure of it.'},
]

export default function Process() {
  return (
    <section id="process" style={{background:'#070707'}}>
      <div className="sec-tag y reveal">— How We Work</div>
      <h2 className="sec-h reveal" style={{transitionDelay:'.1s'}}>THE FRNT<br/>PROCESS.</h2>
      <div className="proc-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
        {steps.map((s,i)=>(
          <div key={i} className={`reveal proc-step proc-step-${i}`}
            style={{padding:'52px 40px',borderRight:i<3?'1px solid var(--border)':'none',transition:'background .3s',transitionDelay:`${i*.1}s`}}
            onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.025)';e.currentTarget.querySelector('.pbar').style.width='60px'}}
            onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.querySelector('.pbar').style.width='40px'}}>
            <div className="pbar" style={{height:3,borderRadius:2,width:40,background:s.c,marginBottom:28,transition:'width .3s'}}/>
            <div style={{fontFamily:'Bebas Neue',fontSize:'4.5rem',lineHeight:1,color:'rgba(255,255,255,.07)',marginBottom:20}}>{s.n}</div>
            <div style={{fontSize:'1.1rem',fontWeight:700,marginBottom:12,color:'var(--white)'}}>{s.t}</div>
            <p style={{fontSize:'.9rem',lineHeight:1.85,color:'rgba(255,255,255,.52)'}}>{s.d}</p>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:900px){
          .proc-grid{grid-template-columns:1fr 1fr!important}
          .proc-step{border-right:none!important;border-bottom:1px solid var(--border)!important}
          .proc-step-0,.proc-step-2{border-right:1px solid var(--border)!important}
          .proc-step-2,.proc-step-3{border-bottom:none!important}
        }
        @media(max-width:520px){
          .proc-grid{grid-template-columns:1fr!important}
          .proc-step,.proc-step-0,.proc-step-2{border-right:none!important}
          .proc-step-2{border-bottom:1px solid var(--border)!important}
          .proc-step-3{border-bottom:none!important}
          .proc-step{padding:36px 20px!important}
        }
      `}</style>
    </section>
  )
}
