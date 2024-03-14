import React from "react";
import './AppCard.scss';
interface AppCardProps {
    title : string;
    children : React.ReactNode;
    style? : React.CSSProperties;
    className?: string;
}

const AppCard: React.FC<AppCardProps> = ({title, children, style, className}) => {
    return (
        <div className={`app-card ${className}`} style={style}>
            <h2>{title}</h2>
            {children}
        </div>
    )
};

export default AppCard;