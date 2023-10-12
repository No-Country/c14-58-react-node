import styled from '@emotion/styled'
import React from 'react'
import imgUrl from "../../assets/images/perritos.png"
import Button from '../../ui/Button'

const Container = styled.div`
  padding: 96px 16px;
  @media(max-width:1000px){
    padding: 64px 16px;
}
`
const HeroContainer = styled.div`

  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
const LeftContainer = styled.div`
max-width: 500px;
@media(max-width:1000px){

    h1{
      text-align: center;
      font-size: 48px
    }
  }
img {
  display: none;
  @media(max-width:1000px){
    display: block;
  }
}
`
const RightContainer = styled.div`
img {
  display: block;
  @media(max-width:1000px){
    display: none;
  }
}
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px
`

const Title = styled.h1`
font-size: 80px
`

const BlackBar = styled.div`
  height: 4px;
  background: black;
  flex-grow: 1;
  margin-left: 16px; /* Espacio entre el título y la barra */
`

function HeroSection() {
  return (
    <Container>
      <HeroContainer>
        <LeftContainer>
          <TitleContainer>
            <Title>Find your best friend</Title>
            <BlackBar></BlackBar>
          </TitleContainer>
          <img src={imgUrl} alt="animalitos" />
          <p>Sabemos lo difícil que es perder a tu mascota, ¡por eso queremos ayudarte!</p>
          <Button type="primary" size="small">Create Post</Button>
        </LeftContainer>
        <RightContainer>
          <img src={imgUrl} alt="animalitos" />
        </RightContainer>
      </HeroContainer>
    </Container>
  )
}

export default HeroSection
