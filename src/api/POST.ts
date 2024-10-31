interface IPost<T> {
  url: string;
  body: T;
  isFormData?: boolean;
}

export const POST = async <ResType, ReqBodyType>(
  obj: IPost<ReqBodyType>
): Promise<ResType> => {
  const { url, body, isFormData = false } = obj;

  const postFetch = isFormData
    ? ({
        method: "POST",
        body,
      } as RequestInit)
    : ({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      } as RequestInit);

  const response = await fetch(url, postFetch);

  const data = await response.json();

  return data;
};
