import styled from "@emotion/styled";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../assets/images/family.png";
import lost1 from "../assets/images/lost1.jpg"
import lost2 from "../assets/images/lost2.jpg"
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

const HeroSection = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 600px; 
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
 
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
   font-size: 64px;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const AboutUsContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const AboutUsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  h3{
    font-size: 24px;
    font-weight:600;
  }
`;

const RecommendationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  @media (max-width: 800px){
    flex-direction: column;
    gap: 8px;
  }
`;

const RecommendationImage = styled.img`
  max-width: 250px;
  aspect-ratio: 1;
  margin-bottom: 10px;
`;
const Div = styled.div`
  width: 70%;
  margin: 0 auto;
`
export default function AboutUs() {
  return (
    <div>
      <Header/>
      <HeroSection>
        <HeroContent>
          <Title style={{fontWeight: "500"}}>Find Your Best Friend</Title>
          <Subtitle>Saving Lives, One Pet at a Time</Subtitle>
        </HeroContent>
      </HeroSection>
      <AboutUsContainer>
      <AboutUsContent>
        <Title  style={{fontWeight: "700"}}>Our Story</Title>
        <Description>
        At Mascotopia, our journey is built on love, compassion, and the simple belief that every pet deserves to find their way back home. We're more than just a platform; we're a community of pet lovers dedicated to reuniting lost pets with their families.
          
        </Description>
       
        <Carousel autoPlay interval={5000} infiniteLoop={true}>
          <Div>
            <RecommendationContainer>
              <RecommendationImage src={lost1} alt="User 1" />
              <div>
              <p>John Doe</p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>"Thanks to Find Your Best Friend, I found my lost dog in just a few days. It's a lifesaver!"</p>
              </div>
            </RecommendationContainer>
          </Div>
          <Div>
            <RecommendationContainer>
              <RecommendationImage src={lost2} alt="User 2" />
              <div>
              <p>Jane Smith</p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>"The support from the community here is incredible. A place of hope and comfort for pet owners."</p>

              </div>
            </RecommendationContainer>
          </Div>
        </Carousel>
      
        <Description>
        <h3>Our Mission</h3>
        Mascotopia's mission is to provide a safe and user-friendly space for pet owners and caring finders to connect. We believe that every pet has a unique story, and our platform ensures that these stories have happy endings.
        </Description>
        <Description>
        <h3>Join Our Community</h3>
        Become a part of the Mascotopia community and help us make a difference, one paw at a time. Share your pet's story or lend a helping hand to reunite lost pets with their families. Together, we create heartwarming reunions.
        </Description>
      </AboutUsContent>
    </AboutUsContainer>
    <Footer/>
    </div>
  );
}
