import { FC } from "react";
import { Starship } from "./startship";

type StarshipListProps = { starshipURLs: string[] };

export const StarshipList: FC<StarshipListProps> = ({ starshipURLs }) => {
  return (
    <>
      {starshipURLs.map((starshipURL, index) => (
        <Starship key={index} starshipURL={starshipURL} />
      ))}
    </>
  );
};
