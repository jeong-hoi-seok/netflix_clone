import React from 'react';
import Image from 'next/image'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BorderedBottom from '../../Wrapper/BorderedBottom';
import styles from "../../../styles/App.module.css";

const Title = ({text}) => (
    <Typography variant='h3' component='h2' gutterBottom fontWeight="600" sx={{textAlign: {xs:'center', md: 'left'},wordBreak:'keep-all'}}>
        {text}
    </Typography>
)

const Desc = ({text}) => (
    <Typography variant='h5' component='p' gutterBottom sx={{textAlign: {xs: 'center',md: 'left'},wordBreak:'keep-all'}}>
        {text}
    </Typography>
)

const Features = () => {
    return (
        <Box sx={{bgcolor: 'black',color:'white'}}> 
            <BorderedBottom>
                <Container maxWidth="lg" sx={{py: 6}}>
                    <Grid container alignItems='center' columnSpacing={6}>
                        <Grid item xs={12} md={6}>
                            <Title text="TV로 즐기세요."/>
                            <Desc text="스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요."/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box position='relative'>
                                <Image src="/images/main/tv.png" width="640px" height="480px" layout='responsive' alt="tv"/>
                                <Box position='absolute' sx={{top:'48%',left:'49.5%',transform: 'translate(-50%,-50%)',width: '100%',height:'100%',maxWidth:'73%',maxHeight:'54%'}}>
                                    <video src="/video/main01.m4v" muted autoPlay loop style={{width:'100%',height:'100%'}}></video>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </BorderedBottom>

            <BorderedBottom>
                <Container maxWidth="lg" sx={{py: 6}}>
                    <Grid container alignItems='center' columnSpacing={6}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Image src="/images/main/mobile.jpg" width="640px" height="480px" layout='responsive' alt="tv" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Title text="즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요."/>
                            <Desc text="간편하게 저장하고 빈틈없이 즐겨보세요."/>
                        </Grid>
                    </Grid>
                </Container>
            </BorderedBottom>

            <BorderedBottom>
                <Container maxWidth="lg" sx={{py: 6}}>
                    <Grid container alignItems='center' columnSpacing={6}>
                        <Grid item xs={12} md={6}>
                            <Title text="다양한 디바이스에서 시청하세요."/>
                            <Desc text="각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다."/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box position='relative'>
                                <Image src="/images/main/device-pile.png" width="640px" height="480px" layout='responsive' alt="tv" className={styles.imgZindex}/>
                                <Box position='absolute' sx={{top:'34%',left:'49.5%',transform: 'translate(-50%,-50%)',width: '100%',height:'100%',maxWidth:'63%',maxHeight:'47%'}}>
                                    <video src="/video/main02.m4v" muted autoPlay loop style={{width:'100%',height:'100%'}}></video>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </BorderedBottom>

            <BorderedBottom>
                <Container maxWidth="lg" sx={{py: 6}}>
                    <Grid container alignItems='center' columnSpacing={6}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Image src="/images/main/kid.png" width="640px" height="480px" layout='responsive' alt="tv" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Title text="어린이 전용 프로필을 만들어 보세요."/>
                            <Desc text="자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다."/>
                        </Grid>
                    </Grid>
                </Container>
            </BorderedBottom>
        </Box>
    );
};



export default Features;