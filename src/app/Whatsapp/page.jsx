import React from 'react'
import Image from 'next/image'
export default function page() {
    return (
        <div className='container'>
            <h1>Grupo de whats</h1>
            <h2>Escanea el QR</h2>
            <Image src="/qr.jpg" alt="QR" width={300} height={300} className='mt-10' />
        </div>
    )
}
