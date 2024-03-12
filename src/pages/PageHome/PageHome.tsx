import React from 'react'
import AppAvatar from '../../components/AppAvatar/AppAvatar';
import AppNavbar from '../../components/AppNavbar/AppNavbar';


const PageHome = () => {
  const imgSrc ="https://media.discordapp.net/attachments/1076929619204259955/1196604095230914692/31k5_1970s_dark_fantasy_book_cover_paper_art_dungeon_and_dragon_29d0026a-c66e-45fa-b46c-fb743b73a8ff.png?ex=66020f68&is=65ef9a68&hm=4dae4a40e2ba5825f3777710a668fee2a632d07029db99abc38f58d903a184ed&=&format=webp&quality=lossless&width=350&height=350"
  return (
    <div style={
        {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            color: 'white',
        }
    }>
      <AppNavbar/>
      
    </div>
  )
}

export default PageHome; 