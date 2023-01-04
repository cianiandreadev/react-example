import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import { getIdByUrl } from "../lib/get-id-by-url";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import NextLink from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { PeopleListAPI } from "../types/api";

import ListItemText from "@mui/material/ListItemText";

export default function Home() {
  const { data, error, isLoading } = useSWR<PeopleListAPI>(
    "https://swapi.dev/api/people",
    fetcher
  );

  if (error) return <div>failed to load</div>;

  return (
    <Container>
      <Grid mt={6} container justifyContent={"center"} spacing={2}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Grid xs={6} md={8}>
            <List>
              {data &&
                data.results.map((person, index) => (
                  <ListItem key={index}>
                    <NextLink href={`/people/${getIdByUrl(person.url)}`}>
                      <ListItemText
                        primary={person.name}
                        secondary={person.gender}
                      />
                    </NextLink>
                  </ListItem>
                ))}
            </List>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
