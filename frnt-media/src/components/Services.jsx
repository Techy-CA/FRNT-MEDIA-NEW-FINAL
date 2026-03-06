import React from 'react'

const svcs = [
  {n:'01',c:'var(--c)',title:'INFLUENCER\nMARKETING',desc:'We match brands with the right creators — not by follower count, but by audience alignment. Every campaign is strategy-first, results-driven.',tags:['Brand Campaigns','Creator Matching','ROI Tracking','Niche Targeting']},
  {n:'02',c:'var(--y)',title:'CRM &\nCUSTOM SOFTWARE',desc:'Your business does not fit a template — neither should your software. We build custom CRMs, team management tools and platforms built around how you actually work.',tags:['Custom CRM','Team Management','Task & Projects','Automations']},
  {n:'03',c:'var(--v)',title:'DIGITAL\nSTRATEGY',desc:'From zero to viral. We map your digital growth journey, find the right channels, and build systems that compound your presence over time.',tags:['Content Strategy','Growth Systems','Social Media','Analytics']},
]

export default function Services() {
  return (
    <section id="services" style={{background:'var(--black)'}}>
      <div className="sec-tag reveal">— What We Do</div>
      <h2 className="sec-h reveal" style={{transitionDelay:'.1s'}}>OUR<br/>EXPERTISE.</h2>
      <div className="svc-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:2}}>
        {svcs.map((s,i)=>(
          <div key={i} className="reveal svc-card"
            style={{background:'var(--dim)',padding:'52px 44px',position:'relative',overflow:'hidden',transition:'background .3s',transitionDelay:`${i*.1}s`}}
            onMouseEnter={e=>{e.currentTarget.style.background='#181818';e.currentTarget.querySelector('.svc-bar').style.width='54px'}}
            onMouseLeave={e=>{e.currentTarget.style.background='var(--dim)';e.currentTarget.querySelector('.svc-bar').style.width='36px'}}>
            <div style={{fontFamily:'Bebas Neue',fontSize:'.85rem',letterSpacing:'.2em',color:'rgba(255,255,255,.15)',marginBottom:36}}>{s.n}</div>
            <div className="svc-bar" style={{height:3,borderRadius:2,width:36,background:s.c,marginBottom:28,transition:'width .3s'}}/>
            <h3 style={{fontFamily:'Bebas Neue',fontSize:'1.95rem',lineHeight:1.05,letterSpacing:'.03em',marginBottom:20,whiteSpace:'pre-line'}}>{s.title}</h3>
            <p style={{fontSize:'.95rem',lineHeight:1.9,color:'rgba(255,255,255,.55)',fontWeight:300}}>{s.desc}</p>
            <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:30}}>
              {s.tags.map(t=><span key={t} style={{border:'1px solid rgba(255,255,255,.08)',padding:'5px 14px',borderRadius:100,fontSize:'.68rem',letterSpacing:'.07em',textTransform:'uppercase',color:'rgba(255,255,255,.28)'}}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @media(max-width:900px){.svc-grid{grid-template-columns:1fr!important}}
        @media(max-width:768px){.svc-card{padding:36px 24px}}
      `}</style>
    </section>
  )
}
