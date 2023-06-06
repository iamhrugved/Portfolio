import React from "react";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';

interface Technology {
    name: string;
    icon: string;
}

interface CardProps {
    technology: Technology;
}

const Card: React.FC<CardProps> = ({ technology }) => {
    return (
        <Tilt 
        glareEnable={true} 
        glareMaxOpacity={0.8} 
        glareColor="var(--theme-color)" 
        glarePosition="all"
        scale={1.3}
        >
            <div className="card">
                <div className="card-content">
                    <Image src={technology.icon} alt={technology.name} className="card-icon" fill={true} />
                </div>
            </div>
        </Tilt>
    );
};

export default Card;
