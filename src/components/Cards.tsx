import { Stack } from "@mui/material";
import { FC } from "react";
import { PricingCard, type PricingCardProps } from "./PricingCard";

interface CardsProps {
  pricingData: Array<PricingCardProps>;
}

export const Cards: FC<CardsProps> = ({ pricingData }) => {
  return (
    <Stack sx={{flexDirection: {xs: "column", md: "row"}}} gap={5}>
      {pricingData.map((data) => (
        <PricingCard key={data.info} {...data} />
      ))}
    </Stack>
  );
};
