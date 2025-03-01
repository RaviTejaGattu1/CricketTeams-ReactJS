import React from 'react';
import Team from './Team';

const Teams = () => {
    return (
        <div className="teams"> {/* Changed from "Teams" to "teams" */}
         <Team 
                logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XkbOu6dmBFKP4fuYcbTrMnNTvXPEtsF8Wg&s"
                name="India"
                players="View Players"
                url="https://www.bcci.tv/international/men/players"
            />

         <Team 
                logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9xSz74Bh5TpWeLqyVogXPc98ZtcneVH8Sg&s"
                name="Australia"
                players="View Players"
                url="https://www.cricket.com.au/players"
            />

         <Team 
                logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15D5DI5Ex_0vYvN5NBMpjcbJPhrvhPZosOQ&s"
                name="West Indies"
                players="View Players"
                url="https://www.windiescricket.com/players/"
            />

         <Team 
                logo="https://www.zapcricket.com/cdn/shop/articles/WhatsApp_Image_2024-03-17_at_02.55.53.webp?v=1710625018s"
                name="United States of America"
                players="View Players"
                url="https://usacricket.org/team-usa/"
            />
         
         <Team 
                logo="https://s.wsj.net/public/resources/images/BN-GD497_CRICLO_M_20141223113600.jpg"
                name="New Zealand"
                players="View Players"
                url="https://www.nzc.nz/international/blackcaps/"
            />

    <Team 
        logo="https://dims.apnews.com/dims4/default/19f5035/2147483647/strip/true/crop/3494x2330+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa1%2F1b%2Fc949eff49d9ed37842ddb83efea4%2F7418194e09f4414f8d9ab103fd7467a6"
        name="England"
        players="View Players"
        url="https://www.ecb.co.uk/england/men/players"
    />

    <Team 
        logo="https://crictoday.com/wp-content/uploads/2023/01/South-Africa-1024x576.jpg"
        name="South Africa"
        players="View Players"
        url="https://www.cricket.com.au/players/south-africa"
    />

    <Team 
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRX2I-AonYbmEyQTrYRyxGBZ7T_GU5JYIOYQ&s"
        name="Sri Lanka"
        players="View Players"
        url="https://www.srilankacricket.lk/players"
    />

    <Team 
        logo="https://i.dawn.com/primary/2022/08/281913374339597.jpg"
        name="Pakistan"
        players="View Players"
        url="https://www.pcb.com.pk/national-teams/pakistan-men-s-team"
    />

    <Team 
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLLUbRQSzI_xSV7Xg71-1AT4YA4nP1PNa8Q&s"
        name="Bangladesh"
        players="View Players"
        url="https://www.tigercricket.com.bd/players/"
    />

      
        </div>
    )
}

export default Teams;
