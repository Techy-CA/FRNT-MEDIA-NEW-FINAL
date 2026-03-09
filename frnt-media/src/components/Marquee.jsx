import React from 'react'

const items = [
  'INFLUENCER MARKETING','CRM DEVELOPMENT','CUSTOM SOFTWARE','BRAND CAMPAIGNS',
  'CREATOR ECONOMY','DIGITAL GROWTH','SOCIAL MEDIA','CONTENT STRATEGY',
  'ROI TRACKING','TEAM MANAGEMENT','CREATOR MATCHING','BRAND IDENTITY',
]

const rep = [...items, ...items, ...items, ...items]

export default function Marquee() {
  return (
    <div style={{overflow:'hidden',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>

      {/* Pink row — left */}
      <div style={{background:'var(--p)',padding:'14px 0',overflow:'hidden'}}>
        <div className="mq-left" style={{
          display:'flex',whiteSpace:'nowrap',
          animation:'mql 18s linear infinite',
          willChange:'transform'
        }}>
          {rep.map((t,i)=>(
            <span key={i} style={{
              fontFamily:'Bebas Neue',fontSize:'1.15rem',
              letterSpacing:'.1em',padding:'0 36px',
              color:'var(--black)',display:'inline-flex',
              alignItems:'center',gap:16,flexShrink:0
            }}>
              {t}
              <span style={{fontSize:'.45rem',opacity:.5,flexShrink:0}}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Dark row — right */}
      <div style={{background:'var(--black)',padding:'12px 0',overflow:'hidden',borderTop:'1px solid rgba(255,255,255,.04)'}}>
        <div className="mq-right" style={{
          display:'flex',whiteSpace:'nowrap',
          animation:'mqr 14s linear infinite',
          willChange:'transform'
        }}>
          {rep.map((t,i)=>(
            <span key={i} style={{
              fontFamily:'Bebas Neue',fontSize:'1rem',
              letterSpacing:'.1em',padding:'0 32px',
              color:'rgba(255,255,255,.08)',flexShrink:0
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes mql {
          from { transform: translateX(0) }
          to   { transform: translateX(-25%) }
        }
        @keyframes mqr {
          from { transform: translateX(-25%) }
          to   { transform: translateX(0) }
        }

        /* ✅ Fixed: was 4s/3s (too fast) → now 22s/17s (comfortable on mobile) */
        @media(max-width:768px){
          .mq-left { animation-duration: 22s !important }
          .mq-right { animation-duration: 17s !important }
        }

        /* Accessibility: reduce motion */
        @media(prefers-reduced-motion:reduce){
          .mq-left,.mq-right{ animation-play-state:paused }
        }
      `}</style>
    </div>
  )
}
