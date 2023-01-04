import { useRouter } from "next/router";

export default function SpaceshipPage() {
  const { query } = useRouter();

  return <div>{query.id}</div>;
}
