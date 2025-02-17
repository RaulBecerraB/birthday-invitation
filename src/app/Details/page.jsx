import React from 'react'
import Image from 'next/image'
import './Details.css'

export default function page() {
    return (
        <div className='details-container'>
            <h1>Detalles</h1>
            <div className='details-layout'>
                <div className="details-section">
                    <h2>¿Qué es lo que vamos a comer? 🍖</h2>
                    <ul className="details-list">
                        <li>Un ribeye por persona</li>
                        <li>Frituras varias</li>
                        <li>Quesadillas</li>
                        <li>Arrachera</li>
                    </ul>

                    <h2>¿Qué es lo que vamos a beber? 🥤</h2>
                    <ul className="details-list">
                        <li>Refrescos</li>
                        <li>Agua</li>
                        <li>Cerveza</li>
                        <li>Vino</li>
                    </ul>
                    <p className="note">* Puedes traer lo que quieras</p>

                    <h2>¿Cuántas personas puedo traer? 👥</h2>
                    <p className="limit">Máximo 20 personas</p>
                </div>
                <div className='image-container'>
                    <Image
                        src="https://media.tenor.com/VDgMW2S9i1gAAAAM/feliz-navidad-tiktok-meme.gif"
                        alt="nerd"
                        width={400}
                        height={100}
                        className='gif-image'
                    />
                </div>
            </div>
        </div>
    )
}
