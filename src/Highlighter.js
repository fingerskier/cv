import React, {useEffect, useRef, useState} from 'react'

export default function Highlighter({title}) {
  const thing = useRef()

  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)


  useEffect(() => {
    const positionHandler = event=>{
      const parentHeight = event.target.parentElement.offsetHeight
      const parentLeft = event.target.parentElement.offsetLeft
      const parentTop = event.target.parentElement.offsetTop
      const parentWidth = event.target.parentElement.offsetWidth

      const parentRight = parentLeft + parentWidth
      const parentBottom = parentTop + parentHeight

      console.log(parentLeft, parentTop, parentHeight, parentWidth)

      if ((X < parentRight) && (X > parentLeft)) setX(event.x)

      if ((Y < parentBottom) && (Y > parentTop)) setY(event.y)
    }


    window.addEventListener('mousemove', positionHandler)

    
    return () => {
      window.removeEventListener('mousemove', positionHandler)
    }
  }, [thing])
  

  return (
    <div
      className="highlighter"
      ref={thing}
      style={{
        left: X,
        top: Y,
      }}
    >{title}</div>
  )
}
