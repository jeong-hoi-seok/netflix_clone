import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const MainBlack = styled.div`
    width: 100%;
    .mainHead {
        .mainHeadBg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 768px;
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
        .mainTitleBox {
            max-width: 760px;
            margin: 0 auto;
            word-break: keep-all;
            h1 {
                font-size: 4rem;
                line-height: 5rem;
                color: #fff;
                text-align: center;
            }
            h2 {
                margin: 20px 0;
                font-size: 1.625rem;
                color: #fff;
                text-align: center;
            }
            & > p{
                font-size: 1rem;
                color: #fff;
                text-align: center;
            }
            .emailBox {
                display: flex;
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
                        box-sizing: border-box;
                    }
                }
                .emailSendBtn {
                    position: relative;
                    background-color: red;
                }
            }
        }
    }
    
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

    return (
        <MainBlack>
            <div className='mainHead'>
                <div className='mainHeadBg'>
                    <img src="/images/main/mainBg.jpg" alt="mainBg" />
                </div>
                <div className='mainTitleBox'>
                    <h1>영화와 시리즈를 무제한으로.</h1>
                    <h2>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h2>
                    <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
                    <div className='emailBox'>
                        <div className='emailSend'>
                            <label htmlFor='emailAddress' className={emailLabel ? 'active' : ''}>이메일 주소</label>
                            <input type="email" defaultValue='' name="emailAddress" id="emailAddress" onFocus={(e) => emailActive('focus',e)} onBlur={(e) => emailActive('blur',e)}/>
                        </div>
                        <button type='button' className='emailSendBtn'>
                            <span>시작하기</span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </MainBlack>
    );
};

export default Main;