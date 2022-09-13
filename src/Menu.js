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
      <ul>
        {links.map((X,I)=><li key={I}>
          <a href={X.url}>{X.name}</a>
        </li>)}
      </ul>
    </nav>
  </>)
}