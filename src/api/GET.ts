interface IGet {
  url: string;
}

export const GET = async <T>(obj: IGet): Promise<T> => {
  const { url } = obj;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
