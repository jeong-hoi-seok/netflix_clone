import React from 'react';
import Image from 'next/image';
import Appbar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Select from '@mui/material/Select';
import Menuitem from '@mui/material/MenuItem';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { padding } from '@mui/system';
import { grey } from '@mui/material/colors'

const Header = () => {

    const languageArr = [
        {
            id: 'ko',
            lang: '한국어'
        },
        {
            id: 'en',
            lang: 'English'
        }
    ];


    return (
        <Box sx={{borderBottom: `8px solid ${grey[900]}`}}>
            <Appbar position="absolute" sx={{backgroundColor: 'transparent',padding: '25px 20px',maxWidth:'1920px',left:'50%',transform: 'translateX(-50%)'}} elevation={0}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Image priority src="/images/main/netflix_logo.svg" alt='Netflix Logo' height="45px" width="167px" layout="intrinsic" />
                        </Grid>
                        <Grid item xs="auto">
                            <Select name='lang' variant='outlined' size="small" defaultValue='ko' sx={{border: '2px solid #fff',color:'#fff','& .MuiSelect-icon': {color: '#fff'}}}>
                                {
                                    languageArr.map((data,index) => {
                                        return (
                                            <Menuitem key={index} value={data.id}>{data.lang}</Menuitem>
                                        )
                                    })
                                }
                            </Select>
                        </Grid>
                        <Grid item xs="auto">
                            <Button color="primary" variant='contained'>
                                로그인
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Appbar>

            <Box sx={{
                position: 'relative',
                height: '785px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&::after': {
                    content:'""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top:0,
                    left:0,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.8) 100%)`
                }
                }}>
                <Image priority src='/images/main/mainBg.jpg' alt='Netflix Background' layout='fill' objectFit='cover' />
                <Container maxWidth="md" sx={{position: 'relative',zIndex:10,}}>
                    <Typography variant="h2" component="h1" color="white" fontWeight="600" textAlign="center" sx={{my: 1}}>영화와 시리즈를<br/> 무제한으로.</Typography>
                    <Typography variant="h5" component="p" color="white" textAlign="center" gutterBottom>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</Typography>
                    <Typography variant="h6" component="p" color="white" textAlign="center" sx={{my: 3}}>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</Typography>
                    <Grid container>
                        <Grid item xs>
                            <TextField variant="filled" label="이메일 주소" fullWidth sx={{bgcolor: 'white'}}/>
                        </Grid>
                        <Grid item xs="auto" >
                            <Button variant="contained" size="large" color="primary" sx={{height: '100%',borderRadius: '0'}}>시작하기</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Header;