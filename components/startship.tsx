import { FC } from "react";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

type StarshipProps = { starshipURL: string };

export const Starship: FC<StarshipProps> = ({ starshipURL }) => {
  const { data, error, isLoading } = useSWR(starshipURL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <div>hello {data.name}!</div>;
};
