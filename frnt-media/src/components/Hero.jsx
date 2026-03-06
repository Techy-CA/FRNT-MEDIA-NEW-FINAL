import React, { useEffect, useState } from 'react'

export default function Hero({ onTalk }) {
  const [go, setGo] = useState(false)
  useEffect(() => { const t = setTimeout(() => setGo(true), 120); return () => clearTimeout(t) }, [])

  const line = (show, delay, style, text) => (
    <span style={{overflow:'hidden',display:'block'}}>
      <span style={{display:'block',transform:show?'translateY(0)':'translateY(110%)',opacity:show?1:0,
        transition:`transform .9s cubic-bezier(.16,1,.3,1) ${delay}ms,opacity .5s ${delay}ms`,...style}}>{text}</span>
    </span>
  )

  return (
    <section id="hero" style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',padding:'130px 56px 80px',position:'relative',overflow:'hidden'}}>

      {/* Grid bg */}
      <div style={{position:'absolute',inset:0,pointerEvents:'none',
        backgroundImage:'linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px)',
        backgroundSize:'72px 72px',
        maskImage:'radial-gradient(ellipse 90% 90% at 50% 50%,black 30%,transparent 100%)'}}/>

      {/* Tag */}
      <div className="hero-tag" style={{display:'inline-flex',alignItems:'center',gap:10,fontSize:'.7rem',letterSpacing:'.2em',textTransform:'uppercase',color:'rgba(255,255,255,.3)',marginBottom:52,
        opacity:go?1:0,transform:go?'none':'translateY(14px)',transition:'all .6s ease .1s'}}>
        <span style={{width:28,height:1,background:'var(--p)',display:'inline-block'}}/>
        Influencer Marketing &amp; Custom Software
        <span style={{width:28,height:1,background:'var(--p)',display:'inline-block'}}/>
      </div>

      {/* Headline */}
      <div className="hero-headline" style={{fontFamily:'Bebas Neue',fontSize:'clamp(4rem,12vw,10.5rem)',lineHeight:.9,letterSpacing:'-.01em',marginBottom:60}}>
        {line(go,100,{color:'var(--white)'},'We Build')}
        {line(go,220,{color:'transparent',WebkitTextStroke:'2px rgba(255,255,255,.55)'},'Brands &')}
        {line(go,340,{color:'var(--p)'},'Creators.')}
      </div>

      {/* Bottom row */}
      <div className="hero-bottom" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:40,
        opacity:go?1:0,transform:go?'none':'translateY(18px)',transition:'all .7s ease .9s'}}>
        <div className="hero-desc" style={{maxWidth:440}}>
          <p style={{fontSize:'1.05rem',lineHeight:1.9,color:'rgba(242,237,230,.6)',fontWeight:300,marginBottom:36}}>
            <strong style={{color:'var(--white)',fontWeight:500}}>frnt media</strong> connects brands with the right creators and builds{' '}
            <strong style={{color:'var(--white)',fontWeight:500}}>custom software</strong> that actually fits your business — CRM, team tools, and everything in between.
          </p>
          <div className="hero-btns" style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <button data-hover onClick={onTalk} className="btn-main">Start a Project</button>
            <a href="#services" className="btn-ghost">Our Services</a>
          </div>
        </div>

        <div className="hero-stats" style={{display:'flex',borderLeft:'1px solid var(--border)'}}>
          {[
            {n:'END-TO-END',l:'Campaign Delivery',c:'var(--c)'},
            {n:'DEDICATED',l:'Account Manager',c:'var(--y)'},
            {n:'48 HR',l:'Campaign Kickoff',c:'var(--p)'}
          ].map(s=>(
            <div key={s.l} style={{padding:'0 28px',borderRight:'1px solid var(--border)'}}>
              <div style={{fontFamily:'Bebas Neue',fontSize:'1.4rem',letterSpacing:'.04em',color:s.c}}>{s.n}</div>
              <div style={{fontSize:'.62rem',letterSpacing:'.1em',textTransform:'uppercase',color:'rgba(255,255,255,.28)',marginTop:4}}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" style={{position:'absolute',bottom:36,left:56,display:'flex',alignItems:'center',gap:12,fontSize:'.68rem',letterSpacing:'.15em',textTransform:'uppercase',color:'rgba(255,255,255,.2)',
        opacity:go?1:0,transition:'opacity .6s ease 1.6s'}}>
        <div style={{width:44,height:1,background:'rgba(255,255,255,.12)',position:'relative',overflow:'hidden'}}>
          <div style={{position:'absolute',inset:0,background:'var(--p)',animation:'sl 2.2s ease-in-out infinite'}}/>
        </div>
        Scroll
      </div>

      {/* Watermark */}
      <div style={{position:'absolute',right:-20,top:'50%',transform:'translateY(-50%)',fontFamily:'Bebas Neue',writingMode:'vertical-rl',
        fontSize:'clamp(80px,14vw,160px)',color:'transparent',WebkitTextStroke:'1px rgba(255,255,255,.03)',
        pointerEvents:'none',userSelect:'none',letterSpacing:'.06em'}}>FRNT MEDIA</div>

      <style>{`
        @keyframes sl{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}

        @media(max-width:900px){
          #hero{
            padding:110px 28px 80px !important;
            align-items:center;
            text-align:center;
          }
          .hero-tag{justify-content:center}
          .hero-headline{width:100%}
          .hero-bottom{
            flex-direction:column !important;
            align-items:center !important;
            gap:40px !important;
            width:100%;
          }
          .hero-desc{
            max-width:100% !important;
            display:flex;
            flex-direction:column;
            align-items:center;
          }
          .hero-btns{justify-content:center}
          .hero-stats{
            border-left:none !important;
            border-top:1px solid var(--border);
            padding-top:28px;
            width:100%;
            justify-content:center;
          }
          .hero-stats > div:last-child{border-right:none !important}
          .scroll-hint{
            left:50% !important;
            transform:translateX(-50%);
          }
        }

        @media(max-width:480px){
          #hero{padding:90px 16px 72px !important}
          .hero-stats > div{padding:0 16px !important}
          .hero-stats > div:first-child{padding-left:0 !important}
        }
      `}</style>
    </section>
  )
}
