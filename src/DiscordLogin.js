import React from 'react'

export default function DiscordLogin(props) {
  const discordUrl = 'https://discordapp.com/oauth2/authorize?client_id=696959916103041035&response_type=code&scope=identify&redirect_uri=https%3A%2F%2Fus-central1-oniknights-com.cloudfunctions.net%2FdiscordCallback'

  return (
    <a className='discord link' href={discordUrl}>
      {props.children}
    </a>
  )
}
