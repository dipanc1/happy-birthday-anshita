import React from 'react'
import './birthday.css'
import Slide from './Slide';

const Birthday = () => {
    const [slide, setSlide] = React.useState(false);

    const handleClick = () => {
        setSlide(true);
    }

    return (
        <>
            {!slide ? (
                <>
                    <h1 className="clickhere2">Click on Card After Reading!! </h1>
                    <div className="birthdayContainer" onClick={handleClick}>
                        <div className="birthdayCard">
                            <div className="cardFront"><h3 className="happy">Happy Birthday My Dear Anshita!!
                            </h3>
                                <div className="balloons">
                                    <div className="balloonOne"></div>
                                    <div className="balloonTwo"></div>
                                    <div className="balloonThree"></div>
                                    <div className="balloonFour"></div>
                                </div>
                            </div>
                            <div className="cardInside">
                                <h3 className="back">Wishing You a Very Happy Birthday!!</h3>
                                <br />
                                <p>Dear Sohni,</p>
                                <p>Happy Birthday! May this special day bring you joy, happiness, and all the wonderful things you deserve. Wishing you a year filled with love, laughter, and amazing memories.</p>
                                <p>May all your dreams come true and may you always be blessed with good health and success.
                                    <br />
                                    <br />
                                    With warm wishes,
                                    <br />
                                    Dipan</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (<Slide />)}
        </>
    )
}

export default Birthday