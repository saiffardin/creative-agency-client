interface IPatch<T> {
  url: string;
  body: T;
}

export const PATCH = async <ResType, ReqBodyType>(
  obj: IPatch<ReqBodyType>
): Promise<ResType> => {
  const { url, body } = obj;

  const patchFetch = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  } as RequestInit;

  const response = await fetch(url, patchFetch);

  const data = await response.json();

  return data;
};
