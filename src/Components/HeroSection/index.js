import React, { useState } from 'react';
import Video from '../../Videos/video.mp4';
import { Button } from '../ButtonElements';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroTitleH1,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
  } from './HeroElements';




const HeroSection = () => {
    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroTitleH1>
                    LEELA Land of Sublime Tranquility
                </HeroTitleH1>
                <br/>
                <HeroH1>
                    Rooms Available at Reasonable Prices
                </HeroH1>
                <HeroP>
                    Signup and get online confirmation through email.
                    <p>Easy bookings now.</p>
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    exact='true'
                    offset={-80}  >
                        Signup Here {hover ? <ArrowForward /> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>        
        </HeroContainer>
    )
}

export default HeroSection;
