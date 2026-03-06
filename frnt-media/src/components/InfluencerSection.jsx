import React from 'react'

const cards = [
  {n:'01',bg:'rgba(255,95,163,.12)',title:'Creator Discovery',sub:'We find creators who genuinely match your brand — by niche, audience, and values'},
  {n:'02',bg:'rgba(255,228,77,.1)',title:'Campaign Strategy',sub:'Briefs, timelines, deliverables — we handle everything from day one to delivery'},
  {n:'03',bg:'rgba(184,127,255,.12)',title:'Negotiation & Contracts',sub:'Fair deals for both sides — brands get value, creators get respect'},
  {n:'04',bg:'rgba(92,244,228,.08)',title:'Performance Reporting',sub:'Clear post-campaign reports — reach, engagement, conversions, what worked'},
]

export default function InfluencerSection() {
  return (
    <section id="creators" style={{background:'#090909'}}>
      <div className="sec-tag c reveal">— Creator Economy</div>
      <h2 className="sec-h reveal" style={{transitionDelay:'.1s'}}>BRANDS MEET<br/>CREATORS.</h2>
      <div className="inf-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}}>
        <div className="reveal" style={{transitionDelay:'.15s'}}>
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            {cards.map((c,i)=>(
              <div key={i} data-hover
                style={{background:'var(--dim)',borderRadius:12,padding:'18px 22px',display:'flex',alignItems:'center',gap:14,border:'1px solid rgba(255,255,255,.05)',transition:'all .3s'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--c)';e.currentTarget.style.transform='translateX(8px)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,.05)';e.currentTarget.style.transform='translateX(0)'}}>
                <div style={{width:44,height:44,borderRadius:10,background:c.bg,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Bebas Neue',fontSize:'1rem',color:'var(--white)',flexShrink:0}}>{c.n}</div>
                <div>
                  <div style={{fontSize:'.92rem',fontWeight:700,marginBottom:4,color:'var(--white)'}}>{c.title}</div>
                  <div style={{fontSize:'.72rem',color:'rgba(255,255,255,.45)',lineHeight:1.5}}>{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal" style={{transitionDelay:'.25s'}}>
          <p style={{fontSize:'1rem',lineHeight:1.9,color:'rgba(242,237,230,.6)',fontWeight:300,marginBottom:22}}>
            We sit at the center of <strong style={{color:'var(--white)',fontWeight:500}}>brands and creators</strong> — making sure both win. Brands get targeted reach and measurable ROI. Creators get <strong style={{color:'var(--c)'}}>fair deals</strong> and <strong style={{color:'var(--p)'}}>creative freedom</strong>.
          </p>
          <p style={{fontSize:'1rem',lineHeight:1.9,color:'rgba(242,237,230,.6)',fontWeight:300}}>
            Whether you are a <strong style={{color:'var(--white)'}}>D2C brand</strong> trying to break through or a creator with 10K loyal followers looking for your first deal — frnt media is your growth partner.
          </p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:36}}>
            {[{l:'For Brands',c:'var(--p)'},{l:'For Creators',c:'var(--c)'},{l:'For Agencies',c:'var(--v)'}].map(p=>(
              <div key={p.l} data-hover
                style={{display:'flex',alignItems:'center',gap:9,border:'1px solid rgba(255,255,255,.1)',borderRadius:100,padding:'11px 20px',fontSize:'.8rem',fontWeight:500,transition:'all .25s'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=p.c;e.currentTarget.style.color=p.c}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,.1)';e.currentTarget.style.color='var(--white)'}}>
                <div style={{width:7,height:7,borderRadius:'50%',background:p.c,flexShrink:0}}/>{p.l}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.inf-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  )
}
