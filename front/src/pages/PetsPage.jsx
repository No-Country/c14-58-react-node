import styled from "@emotion/styled";
import { useState } from "react";
import { BsCaretLeftSquareFill, BsCaretRightSquareFill } from "react-icons/bs";
import { Card } from "../components/AnimalsSection/Card/Card";
import { pets } from "../data/pets";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Filters from "../components/Filters";

const Container = styled.div`
  /* width: 100vw; */
  height: auto;
  padding-bottom: 32px;
`;

const MainWrapper = styled.div`
  /* width: 1190px; */
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-top: 32px;
  .disable-button {
    pointer-events: none;
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
const PetsWrapper = styled.div`
  /* display: flex; */
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */

  display: grid;
  grid-template-columns: repeat(3, minmax(320px, 1fr));
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(320px, 1fr));
  }
  place-items: center;
  /* flex-direction: row; */
  gap: 16px;
  /* flex-wrap: wrap; */
`;

function PetsPage() {
  const petsData = pets();
  const [page, setPage] = useState(1);
  const max = 6;
  const pages = 1 + parseInt(petsData.length / 6);
  const numbers = Array.from({ length: pages }, (_, index) => index + 1);

  return (
    <>
      <Header />
      <Container>
        <Filters />
        <MainWrapper>
          <PetsWrapper>
            {petsData.slice((page - 1) * max, page * max).map((data) => {
              return <Card key={data.id} data={data} />;
            })}
          </PetsWrapper>

          <div style={{ display: "flex", alignItems: "center" }}>
            <BsCaretLeftSquareFill
              onClick={() => {
                setPage((val) => Math.max(val - 1, 1));
              }}
              className={page === 1 ? "disable-button" : ""}
              style={{ width: "24px", height: "24px", cursor: "pointer" }}
            />
            <div>
              {numbers.map((number) => (
                <button
                  key={number}
                  style={{
                    backgroundColor: number === page ? "#aaa" : "",
                    width: "30px",
                    height: "30px",
                  }}
                  onClick={() => setPage(number)}
                >
                  {number}
                </button>
              ))}
            </div>
            <BsCaretRightSquareFill
              onClick={() => {
                setPage((val) => Math.min(val + 1, pages));
              }}
              className={page === pages ? "disable-button" : ""}
              style={{ width: "24px", height: "24px", cursor: "pointer" }}
            />
          </div>
        </MainWrapper>
      </Container>
      <Footer />
    </>
  );
}

export default PetsPage;
