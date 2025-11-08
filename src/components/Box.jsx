import React from 'react'
import Arrow from './Arrow';
import Birthday from './Birthday';
import './box.css'
import GiftBoxAnimation from './GiftBoxAnimation';

const Box = () => {
    const [card, setCard] = React.useState(false);

    return (
        !card ? (
            <>
                <h1 className='clickhere'>Click Here!!</h1>
                <Arrow />
                <GiftBoxAnimation setCard={setCard} />
            </>
        ) : (<Birthday />)
    )
}

export default Box