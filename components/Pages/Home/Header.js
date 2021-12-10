import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <Box>
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
                <Image src='/images/main/mainBg.jpg' alt='Netflix Background' layout='fill' objectFit='cover' />
                <Container maxWidth="md" sx={{position: 'relative',zIndex:10,}}>
                    <Typography variant="h2" component="h1" color="white" fontWeight="600" textAlign="center" sx={{my: 1}}>영화와 시리즈를<br/> 무제한으로.</Typography>
                    <Typography variant="h5" component="p" color="white" textAlign="center" gutterBottom>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</Typography>
                    <Typography variant="h6" component="p" color="white" textAlign="center" sx={{my: 3}}>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</Typography>
                    <Typography>
                        <Grid container>
                            <Grid item xs>
                                <TextField variant="filled" label="이메일 주소" fullWidth sx={{bgcolor: 'white'}}/>
                            </Grid>
                            <Grid item xs="auto" >
                                <Button variant="contained" size="large" color="primary" sx={{height: '100%',borderRadius: '0'}}>시작하기</Button>
                            </Grid>
                        </Grid>
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Header;