export const fetcher = (...args: unknown[]) =>
  /* @ts-ignore-next-line */
  fetch(...args).then((res) => res.json());
