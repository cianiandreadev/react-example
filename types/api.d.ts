export type PeopleListAPI = {
  results: { name: string; gender: string; url: string }[];
};

export type PeopleAPI = {
  name: string;
  starships: string[];
};

export type SpaceshipAPI = {
  name: string;
  pilots: string[];
};
