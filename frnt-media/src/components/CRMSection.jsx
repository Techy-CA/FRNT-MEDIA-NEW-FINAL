import React from 'react'

const feats = [
  {i:'#',t:'Custom CRM',d:'Lead tracking, pipeline management and client communication — built exactly around your sales process.'},
  {i:'T',t:'Team Management Software',d:'Task assignment, project timelines, attendance, roles and real-time collaboration — one platform for your whole team.'},
  {i:'~',t:'Smart Integrations',d:'Connect with WhatsApp, Instagram, payment gateways, HR tools and everything your business already uses.'},
  {i:'>',t:'Real-time Dashboards',d:'Live analytics that actually make sense — track what is working, spot issues early, act fast.'},
]

const rows = [
  {av:'A',bg:'rgba(255,95,163,.12)',n:'Website Redesign',s:'Aryan — Due: 12 Mar',st:'IN PROGRESS',sc:'var(--c)',sb:'rgba(92,244,228,.08)'},
  {av:'P',bg:'rgba(255,228,77,.1)',n:'Q1 Campaign Report',s:'Priya — Due: 15 Mar',st:'REVIEW',sc:'var(--y)',sb:'rgba(255,228,77,.08)'},
  {av:'R',bg:'rgba(184,127,255,.12)',n:'CRM Data Migration',s:'Rahul — Due: 10 Mar',st:'DONE',sc:'var(--v)',sb:'rgba(184,127,255,.08)'},
  {av:'S',bg:'rgba(92,244,228,.06)',n:'Creator Outreach',s:'Sara — Due: 20 Mar',st:'IN PROGRESS',sc:'var(--c)',sb:'rgba(92,244,228,.08)'},
]

export default function CRMSection() {
  return (
    <section id="software" style={{background:'var(--black)'}}>
      <div className="crm-inner" style={{
        background:'var(--dim)',borderRadius:20,
        padding:'80px 64px',
        display:'grid',gridTemplateColumns:'1fr 1fr',
        gap:72,alignItems:'center',
        position:'relative',overflow:'hidden'
      }}>
        <div style={{position:'absolute',top:-100,right:-100,width:400,height:400,borderRadius:'50%',
          background:'radial-gradient(circle,rgba(184,127,255,.1) 0%,transparent 70%)',pointerEvents:'none'}}/>

        {/* Left — Features */}
        <div className="reveal">
          <div className="sec-tag v">— Technology</div>
          <h2 style={{fontFamily:'Bebas Neue',fontSize:'clamp(2.5rem,4.5vw,4rem)',lineHeight:.95,marginBottom:28}}>
            SOFTWARE<br/>THAT FITS<br/>YOU.
          </h2>
          <p style={{fontSize:'.98rem',lineHeight:1.85,color:'rgba(242,237,230,.45)',fontWeight:300,marginBottom:8}}>
            Off-the-shelf software makes your team adapt to the tool. We flip that —{' '}
            <strong style={{color:'var(--white)',fontWeight:600}}>the tool adapts to your team.</strong>
          </p>
          <div style={{display:'flex',flexDirection:'column',gap:22,marginTop:36}}>
            {feats.map((f,i)=>(
              <div key={i} style={{display:'flex',gap:16,alignItems:'flex-start'}}>
                <div style={{width:42,height:42,borderRadius:8,background:'rgba(184,127,255,.1)',
                  border:'1px solid rgba(184,127,255,.2)',display:'flex',alignItems:'center',
                  justifyContent:'center',fontFamily:'Bebas Neue',fontSize:'1.2rem',
                  color:'var(--v)',flexShrink:0}}>{f.i}</div>
                <div>
                  <div style={{fontSize:'.95rem',fontWeight:700,marginBottom:6,color:'var(--white)'}}>{f.t}</div>
                  <div style={{fontSize:'.88rem',color:'rgba(255,255,255,.55)',lineHeight:1.75}}>{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Mockup */}
        <div className="reveal crm-mockup" style={{transitionDelay:'.15s',minWidth:0}}>
          <div style={{background:'#0e0e0e',borderRadius:14,padding:20,
            border:'1px solid rgba(255,255,255,.07)',overflow:'hidden'}}>
            {/* Mac dots */}
            <div style={{display:'flex',gap:6,marginBottom:18,alignItems:'center'}}>
              {['#FF5F56','#FFBD2E','#27C93F'].map(c=>(
                <div key={c} style={{width:10,height:10,borderRadius:'50%',background:c,flexShrink:0}}/>
              ))}
              <span style={{marginLeft:8,fontSize:'.6rem',letterSpacing:'.1em',
                textTransform:'uppercase',color:'rgba(255,255,255,.15)',
                whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                FRNT Platform — Team Overview
              </span>
            </div>
            {/* Rows */}
            {rows.map((r,i)=>(
              <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',
                padding:'11px 0',
                borderBottom:i<rows.length-1?'1px solid rgba(255,255,255,.04)':'none',
                gap:8,minWidth:0}}>
                <div style={{display:'flex',alignItems:'center',gap:10,minWidth:0,flex:1}}>
                  <div style={{width:32,height:32,borderRadius:7,background:r.bg,
                    display:'flex',alignItems:'center',justifyContent:'center',
                    fontFamily:'Bebas Neue',fontSize:'.95rem',flexShrink:0}}>{r.av}</div>
                  <div style={{minWidth:0}}>
                    <div style={{fontSize:'.82rem',fontWeight:600,
                      whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{r.n}</div>
                    <div style={{fontSize:'.68rem',color:'rgba(255,255,255,.38)',marginTop:2,
                      whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{r.s}</div>
                  </div>
                </div>
                <div style={{fontSize:'.58rem',fontWeight:700,padding:'3px 8px',
                  borderRadius:100,background:r.sb,color:r.sc,
                  letterSpacing:'.04em',whiteSpace:'nowrap',flexShrink:0}}>{r.st}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .crm-inner{
            grid-template-columns:1fr !important;
            padding:48px 28px !important;
            gap:48px !important;
          }
          .crm-mockup{width:100%}
        }
        @media(max-width:480px){
          .crm-inner{padding:36px 16px !important;border-radius:14px !important}
        }
      `}</style>
    </section>
  )
}
