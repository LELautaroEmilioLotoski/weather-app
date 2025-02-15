import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Bienvenido a la app del Clima</h1>
        <Link href="/weatherActually">Ver Clima</Link>
    </div>
  )
}

export default Home