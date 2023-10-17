import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
Image
function PetPage() {
  return (
    <div>
      <Header/>
      <h1 className='text-6xl'>PetPage</h1>
      <ImageSlider/>
      <h3  className='text-4xl'>Descripción de la mascota</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, animi exercitationem. Inventore aspernatur itaque ex perspiciatis deleniti distinctio incidunt totam soluta placeat magnam dicta non odio tempora, ratione nihil autem!</p>
      <br/>
      <h3  className='text-2xl'>Contacto</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, animi exercitationem. Inventore aspernatur itaque ex perspiciatis deleniti distinctio incidunt totam soluta placeat magnam dicta non odio tempora, ratione nihil autem!</p>
      <h3>Descripción de la mascota</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, animi exercitationem. Inventore aspernatur itaque ex perspiciatis deleniti distinctio incidunt totam soluta placeat magnam dicta non odio tempora, ratione nihil autem!</p>
      <br/>
      <h3>Descripción de la mascota</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, animi exercitationem. Inventore aspernatur itaque ex perspiciatis deleniti distinctio incidunt totam soluta placeat magnam dicta non odio tempora, ratione nihil autem!</p>
      <br/>
      <Footer/>
    </div>
  )
}

export default PetPage