import React from "react";
import './AppNavbar.scss';
import AppAvatar from "../AppAvatar/AppAvatar";

const AppNavbar = () => {
    return (
        <div className="navbar-container">
            <AppAvatar imgSrc={"https://media.discordapp.net/attachments/1076929619204259955/1195163367581696110/anonymous_game_card_symmetrical_pattern_neon_pink_style_dark_fa_bebea03c-507a-4cc9-a3ac-0161f1aafa12.png?ex=65fcd19f&is=65ea5c9f&hm=43fe5733172807b36900fe6d4d5b62628b83a48e9bebd2b13fc94a4a34ac196f&=&format=webp&quality=lossless&width=358&height=571"} alt="avatar" />
        </div>
    )
}

export default AppNavbar;