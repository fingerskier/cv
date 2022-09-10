import React, {useState} from 'react'


export default function() {
  const [links, setLinks] = useState([{
    name: 'fingerskier',
    url: "/",
  },{
    name: 'Personal',
    url: "/personal",
  },{
    name: 'Qualifications',
    url: "/qualifications",
  },{
    name: 'References',
    url: "/references",
  },{
    name: 'Employment',
    url: "/employment",
  }])

  function goto(event) {
    event.preventDefault()

    window.location = event.target.getAttribute('url')

    let position = { x: 0, y: 0 }

    return false
  }


  return (<>
    <nav>
      <svg viewBox="0 0 640 100">
        {links.map((X,I)=><text
          key={I}
          url={X.url}
          x={20}
          y={16*I+20}
        >{X.name}</text>)}
      </svg>
    </nav>
  </>)
}
