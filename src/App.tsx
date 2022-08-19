import jsonFile from "./data.json";
import "./global.css";
import { Cards } from "./components/Cards";
import {
  type PricingCardProps,
  createCardTheme,
} from "./components/PricingCard";
import { Box, Fade, styled, Typography } from "@mui/material";

const monthPayPricingData: Array<PricingCardProps> = jsonFile.map((obj) => ({
  ...obj,
  theme: createCardTheme(obj.theme),
}));

const MainContainer = styled(Box)(({ theme }) => ({
  background: "#161B22",
  color: "#fff",
  width: "100vw",
  minHeight: "100vh",
  paddingBottom: "40px",
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  opacity: "0.85",
  textAlign: "center",
  fontWeight: "bold",
  paddingTop: "40px",
  paddingBottom: "20px",
}));

const CardsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "20px",
}));

function App() {
  return (
    <MainContainer>
      <Fade in={true} timeout={1500}>
        <Box>
          <MainTitle variant="h2">Gusto Pricing</MainTitle>
          <CardsContainer>
            <Cards pricingData={monthPayPricingData} />
          </CardsContainer>
        </Box>
      </Fade>
    </MainContainer>
  );
}

export default App;
