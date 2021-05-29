import React from 'react';
import Icon1 from '../Services/images/svg-3.svg';
import Icon2 from '../Services/images/svg-5.svg';
import Icon3 from '../Services/images/svg-6.svg';
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
  } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help to reduse your fees and increas your over all revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>We help to reduse your fees and increas your over all revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Premium benefits</ServicesH2>
                    <ServicesP>We help to reduse your fees and increas your over all revenue</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
