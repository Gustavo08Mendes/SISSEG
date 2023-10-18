import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import LabelLogin from '../input/Login/page';
import LabelSenha from '../input/senha/page';
import Botao from '../Botoes/BotaoDefault/page';
import Image from 'next/image';
import logo from '@/assets/sisseg.png';




export default function CardDireito() {
    return (
        <>
            <Sheet
                sx={{
                    width: '500px',
                    height: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    borderRadius: '10px', 
                    textAlign: 'center',
                    justifyContent: 'center',
                    px: '70px',
                    boxShadow: 'md',
                    backgroundColor: 'neutral.plainHoverBg',
                }}
            >
                
                <Sheet
                    sx={{
                        backgroundColor: 'transparent',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Image src={logo} alt='' />
                </Sheet>
                
                <LabelLogin />
                <LabelSenha />
                <Botao
                    textButton='Entrar'
                    margin='20px 0 0 0'
                />
            </Sheet>
        </>
    );
}