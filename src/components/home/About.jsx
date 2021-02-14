import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

const About = () => {
    return (
        <ScrollableAnchor id={'section2'}>
            <div className="About">
                <h1>Коротко обо мне</h1>
                <p>Простой парень, который родился на Камчатке, семь лет жил в Финляндии, проходя обучение в универстете XAMK по специальности Environmental Engineering. После этого переехал в Санкт-Петербург, чтобы заниматься front end разработкой и развиваться в этом
                    направлении.</p>
                <p>Люблю решать сложные технические задачи, используя актуальные технологии. <br/> Регулярно читаю английскую техническую литературу, документацию и постоянно развиваю свои навыки.</p>
            </div>
        </ScrollableAnchor>
    );
};

export default About;