import styled from "@emotion/styled";

const RecommendationCard = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 32px;
 height: 83vh;
 padding: 50px 20px 0;
 margin-top: 20px;
 margin-bottom: 20px;
 border-radius: 5px;
 border: 1px solid #ccc;
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 transition: 0.3s;
 &:hover {
   box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
 }
`;

const RecommendationCardContent = styled.div`
 background: white;
 width: 100%;
 max-width: 1024px;
 padding: 10px;
 height: auto;
 border-radius: 5px;
 border: none;
 resize: none;
 overflow: hidden;
`;

// eslint-disable-next-line react/prop-types
export default function Recommendations({ recommendation }) {
  return (
    <RecommendationCard>
      <RecommendationCardContent>{recommendation}</RecommendationCardContent>
    </RecommendationCard>
  );
}
