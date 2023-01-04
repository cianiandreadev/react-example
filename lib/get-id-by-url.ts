// Since the API does not return the ID I try to get it from the object URL
export const getIdByUrl = (url: string) => url.split("/").at(-2);
