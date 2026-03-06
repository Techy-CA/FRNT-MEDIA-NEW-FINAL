import React, { useEffect, useRef } from 'react'
const COLORS = ['var(--c)','var(--y)','var(--p)','var(--v)']
export default function Cursor() {
  const dot = useRef(null); const ring = useRef(null); let ci = 0
  useEffect(() => {
    let mx=0,my=0,rx=0,ry=0,raf
    const move = e => { mx=e.clientX; my=e.clientY; dot.current.style.left=mx+'px'; dot.current.style.top=my+'px' }
    const loop = () => { rx+=(mx-rx)*.1; ry+=(my-ry)*.1; ring.current.style.left=rx+'px'; ring.current.style.top=ry+'px'; raf=requestAnimationFrame(loop) }
    document.addEventListener('mousemove', move)
    raf = requestAnimationFrame(loop)
    const enter = () => { ci=(ci+1)%COLORS.length; dot.current.style.transform='translate(-50%,-50%) scale(2.8)'; dot.current.style.background=COLORS[ci]; ring.current.style.borderColor=COLORS[ci] }
    const leave = () => { dot.current.style.transform='translate(-50%,-50%) scale(1)'; ring.current.style.borderColor='rgba(255,228,77,.4)' }
    const bind = () => document.querySelectorAll('a,button,[data-hover]').forEach(el => { el.addEventListener('mouseenter',enter); el.addEventListener('mouseleave',leave) })
    bind(); const to = setInterval(bind, 1000)
    return () => { document.removeEventListener('mousemove',move); cancelAnimationFrame(raf); clearInterval(to) }
  }, [])
  const base = { position:'fixed',top:0,left:0,borderRadius:'50%',pointerEvents:'none',transform:'translate(-50%,-50%)' }
  return (<>
    <div ref={dot} style={{...base,width:10,height:10,background:'var(--y)',zIndex:9999,transition:'transform .2s,background .25s'}} />
    <div ref={ring} style={{...base,width:40,height:40,border:'1.5px solid rgba(255,228,77,.4)',zIndex:9998,transition:'border-color .3s'}} />
  </>)
}
