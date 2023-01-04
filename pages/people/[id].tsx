import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import { StarshipList } from "../../components/starship-list";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";

export default function PeoplePage() {
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${query.id}`,
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
            <Card>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {data.name}
                </Typography>
                <StarshipList starshipURLs={data.starships} />
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
