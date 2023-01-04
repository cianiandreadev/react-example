import { FC } from "react";
import { Starship } from "./starship";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

type StarshipListProps = { starshipURLs: string[] };

export const StarshipList: FC<StarshipListProps> = ({ starshipURLs }) => {
  return (
    <List>
      {starshipURLs.map((starshipURL, index) => (
        <ListItem key={index}>
          <Starship starshipURL={starshipURL} />
        </ListItem>
      ))}
    </List>
  );
};
