import { FC } from "react";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import ListItemText from "@mui/material/ListItemText";
import { Alert } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import NextLink from "next/link";

type StarshipProps = { starshipURL: string };

export const Starship: FC<StarshipProps> = ({ starshipURL }) => {
  const { data, error, isLoading } = useSWR(starshipURL, fetcher);

  if (error) return <Alert severity="error">Error loading data</Alert>;
  if (isLoading) return <CircularProgress />;

  return (
    <NextLink href={`/spaceship/${data.name}`}>
      <ListItemText primary={data.name} secondary={data.model} />
    </NextLink>
  );
};
