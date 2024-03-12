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
      <AppAvatar imgSrc="https://media.discordapp.net/attachments/1194440994016473189/1215829775650914324/azreal.asitgets_A_self-composed_man_wearing_a_black_suit_with_t_d3ad6153-97f6-4c20-855a-bc20cc293a4e.png?ex=65fe2cb7&is=65ebb7b7&hm=8c44892a6275f49969a0cd922b26c3c35090d155e860b329b09955ad32c518ec&=&format=webp&quality=lossless&width=350&height=350" alt="avatar" />
    </div>
  )
}

export default PageHome; 