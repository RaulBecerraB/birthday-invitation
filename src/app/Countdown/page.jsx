"use client"
import React, { useState, useEffect } from 'react'

export default function Page() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2025-02-22T18:00:00-06:00');

        const updateCountdown = () => {
            const currentDate = new Date();
            const difference = targetDate.getTime() - currentDate.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        };

        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold text-center mb-8'>Cuenta regresiva</h1>
            <div className='flex justify-center items-center space-x-8'>
                <div className='text-center'>
                    <span className='text-4xl font-bold'>{timeLeft.days}</span>
                    <p className='text-gray-600 mt-2'>Días</p>
                </div>
                <div className='text-center'>
                    <span className='text-4xl font-bold'>{timeLeft.hours}</span>
                    <p className='text-gray-600 mt-2'>Horas</p>
                </div>
                <div className='text-center'>
                    <span className='text-4xl font-bold'>{timeLeft.minutes}</span>
                    <p className='text-gray-600 mt-2'>Minutos</p>
                </div>
                <div className='text-center'>
                    <span className='text-4xl font-bold'>{timeLeft.seconds}</span>
                    <p className='text-gray-600 mt-2'>Segundos</p>
                </div>
            </div>
        </div>
    )
}
