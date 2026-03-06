import React, { useEffect, useState } from 'react'

export default function ContactModal({ open, onClose }) {
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const h = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', h)
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = '' }
  }, [onClose, open])

  const submit = e => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('done')
      setTimeout(() => { onClose(); setStatus('idle') }, 1800)
    }, 1200)
  }

  const inp = {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,.12)',
    borderRadius: 0,
    padding: '10px 2px',
    fontSize: '.88rem',
    color: 'var(--white)',
    fontFamily: 'Space Grotesk',
    outline: 'none',
    width: '100%',
    transition: 'border-color .2s',
    boxSizing: 'border-box'
  }
  const fi = e => e.target.style.borderBottomColor = 'var(--p)'
  const fo = e => e.target.style.borderBottomColor = 'rgba(255,255,255,.12)'
  const lbl = {
    fontSize: '.6rem',
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,.25)',
    display: 'block',
    marginBottom: 4
  }

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 9000,
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        transition: 'opacity .3s'
      }} />

      {/* Scroll wrapper */}
      <div style={{
        position: 'fixed', inset: 0,
        zIndex: 9001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        pointerEvents: open ? 'all' : 'none',
        overflowY: 'auto'
      }}>
        {/* Modal card */}
        <div style={{
          background: '#0f0f0f',
          border: '1px solid rgba(255,255,255,.07)',
          borderRadius: 12,
          width: '100%',
          maxWidth: 480,
          margin: 'auto',
          position: 'relative',
          transform: open ? 'translateY(0) scale(1)' : 'translateY(20px) scale(.97)',
          opacity: open ? 1 : 0,
          transition: 'all .35s cubic-bezier(.16,1,.3,1)',
          overflow: 'hidden'
        }}>

          {/* Top accent */}
          <div style={{ height: 2, background: 'linear-gradient(90deg,var(--p),var(--v))' }} />

          <div style={{ padding: '28px 32px 32px' }}>

            {/* Close */}
            <button onClick={onClose} style={{
              position: 'absolute', top: 14, right: 16,
              background: 'none', border: 'none',
              color: 'rgba(255,255,255,.2)', fontSize: '1.1rem',
              cursor: 'pointer', lineHeight: 1, transition: 'color .2s',
              fontFamily: 'Space Grotesk'
            }}
              onMouseEnter={e => e.target.style.color = 'var(--white)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.2)'}>✕</button>

            {/* Header */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--p)', marginBottom: 8, fontWeight: 500 }}>— Get in touch</div>
              <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', lineHeight: 1, color: 'var(--white)', marginBottom: 4 }}>
                Let&apos;s work <span style={{ color: 'var(--p)' }}>together.</span>
              </h2>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.28)', lineHeight: 1.6 }}>
                Fill this out and we&apos;ll get back to you within the day.
              </p>
            </div>

            {/* Contact row */}
            <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
              {[
                { href: 'tel:+919244012840', icon: '↗', label: 'WhatsApp', val: '+91 92440 12840', c: 'var(--c)' },
                { href: 'mailto:hello@frntmedia.in', icon: '↗', label: 'Email', val: 'hello@frntmedia.in', c: 'var(--p)' }
              ].map(o => (
                <a key={o.val} href={o.href} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  flex: 1, minWidth: 140,
                  padding: '8px 12px',
                  background: 'rgba(255,255,255,.03)',
                  border: '1px solid rgba(255,255,255,.06)',
                  borderRadius: 6,
                  textDecoration: 'none',
                  transition: 'border-color .2s'
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = o.c}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,.06)'}>
                  <div>
                    <div style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 1 }}>{o.label}</div>
                    <div style={{ fontSize: '.78rem', fontWeight: 600, color: 'rgba(255,255,255,.7)' }}>{o.val}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(255,255,255,.05)', marginBottom: 22 }} />

            {/* Form */}
            <form onSubmit={submit}>
              {/* Row 1 */}
              <div className="mrow" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px', marginBottom: 18 }}>
                <div>
                  <label style={lbl}>Name</label>
                  <input required style={inp} placeholder="Your name" onFocus={fi} onBlur={fo} />
                </div>
                <div>
                  <label style={lbl}>Phone</label>
                  <input type="tel" style={inp} placeholder="Your number" onFocus={fi} onBlur={fo} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="mrow" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 24px', marginBottom: 18 }}>
                <div>
                  <label style={lbl}>Email</label>
                  <input required type="email" style={inp} placeholder="your@email.com" onFocus={fi} onBlur={fo} />
                </div>
                <div>
                  <label style={lbl}>Service</label>
                  <select required style={{ ...inp, cursor: 'pointer', appearance: 'none' }} onFocus={fi} onBlur={fo}>
                    <option value="" disabled defaultValue="">Select one</option>
                    <option>Influencer Marketing</option>
                    <option>Custom CRM</option>
                    <option>Team Management Software</option>
                    <option>Digital Strategy</option>
                    <option>Something Else</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 24 }}>
                <label style={lbl}>Message</label>
                <textarea rows={3} style={{ ...inp, resize: 'none', lineHeight: 1.65 }}
                  placeholder="Brief about your project..."
                  onFocus={fi} onBlur={fo} />
              </div>

              {/* Submit row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ fontSize: '.68rem', color: 'rgba(255,255,255,.18)', letterSpacing: '.04em' }}>
                  We reply same day. No spam.
                </span>
                <button type="submit" disabled={status !== 'idle'} style={{
                  background: status === 'done' ? 'var(--c)' : 'var(--p)',
                  color: 'var(--black)',
                  border: 'none',
                  padding: '11px 28px',
                  borderRadius: 2,
                  fontFamily: 'Space Grotesk',
                  fontSize: '.75rem',
                  fontWeight: 700,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all .25s',
                  opacity: status === 'sending' ? .6 : 1
                }}>
                  {status === 'idle' ? 'Send Message' : status === 'sending' ? 'Sending...' : 'Sent 🤙'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:560px){
          .mrow{grid-template-columns:1fr !important}
          .mrow > div{margin-bottom:16px}
        }
        @media(max-width:400px){
          .mrow > div:last-child{margin-bottom:0}
        }
      `}</style>
    </>
  )
}
