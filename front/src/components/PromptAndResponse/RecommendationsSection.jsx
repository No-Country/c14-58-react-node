import styled from "@emotion/styled";

const RecommendationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const RecommendationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  height: 200px;
  padding-top: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: #f48fb1;
  }
`;

const RecommendationCardContent = styled.div`
  background: white;
  width: 80%;
  max-width: 1024px;
  padding: 10px;
  height: 60px;
  border-radius: 5px;
  border: none;
  resize: none;
  overflow: hidden;
  text-align: center;
`;

let items = [
  { title: "Balanced Diet", description: "Essential for your pet's health" },
  {
    title: "Vet Visits",
    description: "For regular check-ups and vaccinations",
  },
  { title: "Daily Exercise", description: "Keeps your pet active and healthy" },
  { title: "Dental Hygiene", description: "Prevents oral diseases" },
  { title: "Early Socialization", description: "Aids in their behavior" },
  {
    title: "Suitable Toys",
    description: "Stimulates their mind and prevents boredom",
  },
  {
    title: "Regular Brushing",
    description: "Keeps their coat healthy and shiny",
  },
  { title: "Parasite Control", description: "Prevents fleas and ticks" },
  { title: "Positive Training", description: "Reinforces good behavior" },
  { title: "Quality Time", description: "Strengthens your bond with your pet" },
  {
    title: "Regular Grooming",
    description: "Keeps your pet clean and comfortable",
  },
  {
    title: "Provide Fresh Water",
    description: "Hydration is key for pet health",
  },
  {
    title: "Monitor Weight",
    description: "Prevents obesity-related health issues",
  },
  { title: "Safe Environment", description: "Pet-proof your home for safety" },
  { title: "Microchipping", description: "Helps locate your pet if lost" },
  { title: "Avoid Human Food", description: "Some can be toxic to pets" },
  {
    title: "Regular Playtime",
    description: "Good for physical and mental health",
  },
  {
    title: "Provide Shelter",
    description: "Pets need a safe, comfortable space",
  },
  {
    title: "Avoid Direct Sunlight",
    description: "Prevents overheating and sunburn",
  },
  {
    title: "Regular Vaccinations",
    description: "Protects against common diseases",
  },
  {
    title: "Spay/Neuter Pets",
    description: "Prevents overpopulation and health issues",
  },
  {
    title: "Check for Ticks/Fleas",
    description: "Prevents infestations and diseases",
  },
];

export default function RecommendationsSection() {
  return (
    <RecommendationGrid>
      {items.map((recommendation, index) => (
        <RecommendationCard key={index}>
          <h4>{recommendation.title}</h4>
          <RecommendationCardContent>
            {recommendation.description}
          </RecommendationCardContent>
        </RecommendationCard>
      ))}
    </RecommendationGrid>
  );
}
