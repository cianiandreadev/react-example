import React, { FC } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Pilot } from "./pilot";

type PilotListProps = { pilotURLs: string[] };

export const PilotList: FC<PilotListProps> = ({ pilotURLs }) => {
  return (
    <List>
      {pilotURLs.map((pilotURL, index) => (
        <ListItem key={index}>
          <Pilot pilotURL={pilotURL} />
        </ListItem>
      ))}
    </List>
  );
};
