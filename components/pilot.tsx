import { FC } from "react";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import ListItemText from "@mui/material/ListItemText";
import { Alert } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import NextLink from "next/link";
import { getIdByUrl } from "../lib/get-id-by-url";

type PilotProps = { pilotURL: string };

export const Pilot: FC<PilotProps> = ({ pilotURL }) => {
  const { data, error, isLoading } = useSWR(pilotURL, fetcher);

  if (error) return <Alert severity="error">Error loading data</Alert>;
  if (isLoading) return <CircularProgress />;

  return (
    <NextLink href={`/people/${getIdByUrl(data.url)}`}>
      <ListItemText primary={data.name} secondary={data.gender} />
    </NextLink>
  );
};
