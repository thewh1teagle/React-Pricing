import type { FC } from "react";
import CheckIcon from "@mui/icons-material/Check";
import {
  Box,
  Button,
  Stack,
  Typography,
  createTheme,
  Theme,
  styled,
} from "@mui/material";

export const createCardTheme = (color: string) => {
  return createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          textPrimary: {
            color: color,
          },
        },
      },
    },
    palette: {
      primary: {
        main: color,
      },
    },
  });
};

export interface PricingCardProps {
  title: string;
  yearPrice: number;
  monthPrice: number;
  info: string;
  priceSymbol: string;
  buyBtn: string;
  features: string[];
  theme: Theme;
}

const CardContainer = styled(Box)(({ theme }) => ({
  width: "250px",
  border: `1.3px solid ${theme.palette.primary.main}`,
  borderRadius: "10px",
  padding: "42px",
  boxShadow: `0 0 1000px 0${theme.palette.primary.main}`,
  background: "#fff",
  color: "#000",
  display: "flex",
  flexDirection: "column",
}));

export const PricingCard: FC<PricingCardProps> = ({
  title,
  yearPrice,
  monthPrice,
  info,
  priceSymbol,
  buyBtn,
  features,
  theme,
}) => {
  return (
    <CardContainer>
      <Typography
        variant="h4"
        textAlign="center"
        color={theme.palette.primary.main}
        fontWeight="500"
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight="200"
        textAlign="center"
        marginTop={2}
        height="90px"
      >
        {info}
      </Typography>
      <Typography variant="h3">
        <Stack direction="row" alignItems="end" justifyContent="center">
          <Typography
            variant="h4"
            fontWeight="200"
            alignSelf="center"
            fontFamily="Open Sans"
            children={priceSymbol}
            marginLeft="11%"
          />
          <Typography variant="h2" fontWeight="400">
            {yearPrice}
          </Typography>
          <Typography variant="subtitle1" fontWeight="200" paddingLeft={1}>
            Yearly
          </Typography>
        </Stack>
      </Typography>
      <Button
        variant="contained"
        sx={{
          alignSelf: "center",
          width: "60%",
          height: "41px",
          background: `${theme.palette.primary.main}`,
          borderRadius: "15px",
          ":hover": {
            bgcolor: `${theme.palette.primary.main}`,
          },
          marginTop: "20px",
        }}
      >
        {buyBtn}
      </Button>
      <Stack>
        {features.map((feature) => {
          return (
            <Stack key={feature} direction="column" paddingTop={2}>
              <Stack
                direction="row"
                justifyContent="left"
                alignItems="center"
                width="100%"
                sx={{ transform: "translateX(-12%)" }}
              >
                <CheckIcon sx={{ padding: "7px", color: "#38AF48" }} />
                <Typography fontWeight="200">{feature}</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </CardContainer>
  );
};
