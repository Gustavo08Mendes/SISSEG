import Button from '@mui/joy/Button';


export default function Botao(props: { textButton: string, margin: string}){
    return(

        <Button
        sx={{
            padding: '15px',
            fontSize: '20px',
            margin: props.margin,
        }}
        >
            {props.textButton}
        </Button>
    )
}