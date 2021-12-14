import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsChevronCompactRight } from "react-icons/bs";
import MainListCard from '../components/main/MainListCard';


const MainBlack = styled.div`
    width: 100%;
    .mainHead {
        position: relative;
        padding: 100px 50px;
    }
`
const MainHeadBgWrap = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .mainHeadBg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 868px;
        z-index: -1;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .mainHeadBg:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.8));
    }
`
const MainTitleBox = styled.div`
    padding: 75px 0;
    max-width: 760px;
    margin: 0 auto;
    h1 {
        font-size: 4rem;
        line-height: 5rem;
        color: #fff;
        text-align: center;
    }
    h2 {
        margin: 1rem 0;
        font-size: 1.625rem;
        color: #fff;
        text-align: center;
    }
    & > p{
        padding-top: 1rem;
        font-size: 1rem;
        color: #fff;
        text-align: center;
    }
    .emailBox {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        .emailSend {
            position: relative;
            label {
                position: absolute;
                top: 50%;
                left: 10px;
                font-size: 1rem;
                transform: translateY(-50%);
                transition-duration: 0.25s;
                transition-property: font-size,top,transform;
                color: gray;
            }
            label.active {
                top: 6px;
                font-size: 0.75rem;
                transform: translateY(0);
            }
            #emailAddress {
                display: block;
                height: 70px;
                width: 100%;
                min-width: 500px;
                padding: 6px 10px 0;
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
                box-sizing: border-box;
            }
        }
        .emailSendBtn {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            background-color: red;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            padding: 0 1em;
            font-size: 1.875rem;
            .btnText {
                color: #fff;
            }
            .btnIcon {
                position: relative;
                width: 0.35em;
                height: 0.75em;
                color: #fff;
                svg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    transform: scale(1);
                    height: 100%;
                }
            }
        }
    }
`
const MainCont = styled.div`
    background-color: black;
`

const Main = () => {
    const [emailLabel, setEmailLabel] = useState(false);

    const emailActive = (e,event) => {
        const targetvalue = event.target.value;
        if(e === 'focus')
        {
            setEmailLabel(true)
        }
        else if (e === 'blur')
        {
            if(targetvalue === '')
            {
                setEmailLabel(false)
            }
        }
        
    }
    const dataMap = [
        {
            imgPos:'right',
            title:'TV로 즐기세요.',
            desc:'스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.',
            img: 'tv.png',
            video: ''
        },
        {
            imgPos:'left',
            title:'즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.',
            desc:'간편하게 저장하고 빈틈없이 즐겨보세요.',
            img: 'mobile.jpg',
            video: ''
        },
        {
            imgPos:'right',
            title:'다양한 디바이스에서 시청하세요.',
            desc:'각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.',
            img: 'device-pile.png',
            video: ''
        },
        {
            imgPos:'left',
            title:'어린이 전용 프로필을 만들어 보세요.',
            desc:'자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.',
            img: 'kid.png',
            video: ''
        },
    ]
    
    const dataMapComponents = dataMap.map((list,i)=>(
        <MainListCard key={i} obj={list}/>
    ))

    return (
        <MainBlack>
            <div className='mainHead'>
                <MainHeadBgWrap>
                    <div className='mainHeadBg'>
                        <img src="/images/main/mainBg.jpg" alt="mainBg" />
                    </div>
                </MainHeadBgWrap>
                <MainTitleBox>
                    <h1>영화와 시리즈를 무제한으로.</h1>
                    <h2>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h2>
                    <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
                    <div className='emailBox'>
                        <div className='emailSend'>
                            <label htmlFor='emailAddress' className={emailLabel ? 'active' : ''}>이메일 주소</label>
                            <input type="email" defaultValue='' name="emailAddress" id="emailAddress" onFocus={(e) => emailActive('focus',e)} onBlur={(e) => emailActive('blur',e)}/>
                        </div>
                        <button type='button' className='emailSendBtn'>
                            <span className='btnText'>시작하기</span>
                            <span className='btnIcon'>
                                <BsChevronCompactRight/>
                            </span>
                        </button>
                    </div>
                </MainTitleBox>
            </div>
            <MainCont>
                {dataMapComponents}
            </MainCont>
        </MainBlack>
    );
};

export default Main;