"use client";
import React from 'react'

export default function page() {
  return (
    <div className="container">
      <h1>Ubicación</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.8724292201099!2d-89.55576650637653!3d21.053094243638906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567833085b282d%3A0x4e5a9a3ae9a97bf1!2sSan%20Javier%20Tulipanes%2C%20Privada%20Residencial!5e0!3m2!1ses!2smx!4v1739801106706!5m2!1ses!2smx"
        width="500"
        height="350"
        allowFullScreen={true}
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        className='rounded-3xl border-2 border-primary border-solid w-[300px] sm:w-[500px]'
      />
      <h1 className='mt-4'>Casa #5</h1>
    </div>
  )
}
