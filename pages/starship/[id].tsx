import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PilotList } from "../../components/pilot-list";

export default function SpaceshipPage() {
  const { query } = useRouter();
  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/starships/${query.id}`,
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
                <PilotList pilotURLs={data.pilots} />
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
