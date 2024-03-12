import React from "react";
import './AppAvatar.scss';


interface AppAvatarProps {
    imgSrc?: string;
    alt?: string;

}   

const AppAvatar: React.FC<AppAvatarProps> = ({imgSrc, alt}) => {
    return (
        <div className="avatar-container">
            
        </div>
    )
};

export default AppAvatar;