import React from 'react'

const cards = [
  {title:'FOR BRANDS',bg:'var(--p)',desc:"Whether you are a startup launching your first product or an established brand scaling creator marketing — we build campaigns that convert.",items:['Performance-driven influencer campaigns','Niche creator matching and vetting','End-to-end campaign management','Custom CRM for your marketing team','Detailed ROI and reach analytics'],label:'BRAND'},
  {title:'FOR CREATORS',bg:'var(--c)',desc:"We protect your creative integrity while connecting you to brands worth your audience's trust. Fair deals, zero exploitation.",items:['Brand partnerships that match your niche','Fair and transparent deal negotiation','Creative brief support and feedback','Long-term brand relationships','Growth strategy and content consulting'],label:'CREATOR'},
]

export default function ForBoth() {
  return (
    <section id="about" style={{background:'var(--black)'}}>
      <div className="sec-tag reveal">— Who We Serve</div>
      <h2 className="sec-h reveal" style={{transitionDelay:'.1s'}}>BUILT FOR<br/>BOTH SIDES.</h2>
      <div className="both-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
        {cards.map((c,i)=>(
          <div key={i} className="reveal both-card" data-hover
            style={{background:c.bg,borderRadius:16,padding:'56px 48px',position:'relative',overflow:'hidden',transition:'transform .3s',transitionDelay:`${i*.1+.15}s`}}
            onMouseEnter={e=>e.currentTarget.style.transform='translateY(-4px)'}
            onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
            <h3 style={{fontFamily:'Bebas Neue',fontSize:'2.5rem',letterSpacing:'.04em',marginBottom:16,color:'var(--black)'}}>{c.title}</h3>
            <p style={{fontSize:'.96rem',lineHeight:1.85,maxWidth:380,marginBottom:32,color:'rgba(0,0,0,.68)'}}>{c.desc}</p>
            <ul>{c.items.map(it=>(
              <li key={it} style={{display:'flex',gap:10,alignItems:'flex-start',fontSize:'.9rem',fontWeight:500,color:'var(--black)',marginBottom:14}}>
                <span style={{fontWeight:700,flexShrink:0}}>—</span>{it}
              </li>
            ))}</ul>
            <div style={{position:'absolute',bottom:-20,right:-8,fontFamily:'Bebas Neue',fontSize:'clamp(60px,9vw,100px)',opacity:.08,pointerEvents:'none',color:'var(--black)',userSelect:'none'}}>{c.label}</div>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:768px){.both-grid{grid-template-columns:1fr!important}}
        @media(max-width:480px){.both-card{padding:40px 28px!important}}
      `}</style>
    </section>
  )
}
