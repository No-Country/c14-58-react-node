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
  font-weight: 600px;
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
          <Title>Find Your Best Friend</Title>
          <Subtitle>Saving Lives, One Pet at a Time</Subtitle>
        </HeroContent>
      </HeroSection>
      <AboutUsContainer>
      <AboutUsContent>
        <Title>About Us</Title>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro voluptate veniam tempora reiciendis pariatur dicta. Provident ratione alias adipisci, eius deleniti commodi, nisi nostrum molestias vel impedit facilis ipsa sint!
          
        </Description>
        <Description>
        Debitis neque sapiente molestias pariatur illum dolores libero sed mollitia officia repudiandae architecto earum voluptatem, impedit unde quaerat voluptate recusandae voluptatum nam harum autem. Consectetur, fugiat. Dolorem neque architecto magni.
        </Description>
        <Carousel>
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
          What sets us apart:
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            <li>Iure consequuntur dignissimos rem esse iste? </li>
            <li>Omo inventore vitae cum, quibusdam nobis tempora accusantium?</li>
          </ul>
        </Description>
        <Description>

          Ab architecto aliquid consequuntur molestiae delectus possimus voluptatibus ducimus distinctio tempore eius ad ex reprehenderit fugit perspiciatis neque recusandae, velit tenetur officia dicta cupiditate accusamus. Iure doloremque pariatur rerum dicta?
        </Description>
      </AboutUsContent>
    </AboutUsContainer>
    <Footer/>
    </div>
  );
}
