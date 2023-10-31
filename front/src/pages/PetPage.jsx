import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/ImageSlider'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import usePets from '../hooks/usePets';
import { Link, useParams } from 'react-router-dom';
import Button from '../ui/Button';
import WhatsAppModal from '../components/WhatsAppModal';


function PetPage() {
  const { id } = useParams();
  const { pets, loading } = usePets();
  const [pet, setPet] = useState({})
  useEffect(() => {
    const petFiltered = pets.find(pet => pet.id === id);
    setPet(petFiltered);
    console.log(petFiltered)
    // console.log(petFiltered)
  }, [pets, id]);
  return (
    <>
      <Header/>
      <div className='mx-auto max-w-7xl px-8'>

      <Link to={'/pets'}>
        <Button>Atrás</Button>
      </Link>
      <h1 className='text-6xl'>{pet?.title}</h1>
      {loading ? <h1>Loading...</h1>: (<img style={{width:"20%", margin: "0 auto"}} src={pet?.image} alt="" />)}
      
      <p>Fecha: {pet?.post_date}</p>
      <p>Status: {pet?.status}</p>

      <br />
      <h3  className='text-4xl'>Descripción de la mascota</h3>
      <p>{pet?.description}</p>

      <br/>
      <h3  className='text-2xl'>Contacto</h3>
      <p>Nombre: {pet?.User?.first_name} {pet?.User?.surname}</p>
      <p>Correo: {pet?.User?.email} {pet?.User?.surname}</p>

      
      <br/>
      
      </div>
      <br/>
      <WhatsAppModal number={pet?.User?.tel}/>
      <Footer/>

    </>

  )
}

export default PetPage