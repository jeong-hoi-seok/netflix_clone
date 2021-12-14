import React from 'react';
import styled from 'styled-components';

const CardBlock = styled.div`
    position: relative;
    padding: 70px 45px;
    border-bottom: 8px solid #222;
    color: #fff;
    .cardWrap {
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-direction: ${props => props.pos === 'right' ? 'reverse' : 'row-reverse'};
        .cardText {
            width: 50%;
            h2 {
                font-size: 3.125rem;
                line-height: 1.3em;
                margin-bottom: 8px;
            }
            & > p {
                font-size: 1.625rem;
                line-height: 1.4em;
                margin: 0.75em 0 0.25em;
            }
        }
    }
`

const MainListCard = ({obj}) => {

    const flexRow = obj.imgPos;

    return (
        <CardBlock pos={flexRow}>
            <div className='cardWrap' >
                <div className='cardText'>
                    <h2>{obj.title}</h2>
                    <p>{obj.desc}</p>
                </div>
                <div className='cardImg'>
                    <div className='imgBox'>
                        <img src={`/images/main/${obj.img}`} alt="card Image" />
                    </div>
                </div>
            </div>
        </CardBlock>
    );
};

export default MainListCard;