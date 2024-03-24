import Image from 'next/image'

export default function ImageLogo(){
    return (
        <Image 
            alt="Logo" 
            src='/images/acrux/logo_sin_name.png'
            sizes='100vw'
            width= '120'
            height= '120'
            justify-content= 'center'
            style={{
                margin: "auto",
                width:120,
                height:120
            }}
        />
    )
}