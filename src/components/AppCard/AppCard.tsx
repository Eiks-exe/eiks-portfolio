import React from "react";
import './AppCard.scss';
interface AppCardProps {
    title : string;
    children : React.ReactNode;
    style? : React.CSSProperties;
}

const AppCard: React.FC<AppCardProps> = ({title, children, style}) => {
    return (
        <div className="app-card" style={style}>
            <h2>{title}</h2>
            {children}
        </div>
    )
};

export default AppCard;