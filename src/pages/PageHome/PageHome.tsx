import React from 'react'
import AppAvatar from '../../components/AppAvatar/AppAvatar';



const PageHome = () => {
  return (
    <div style={
        {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            color: 'white',
        }
    }>
      <AppAvatar imgSrc="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" />
    </div>
  )
}

export default PageHome; 