import { GraphQLClient } from "graphql-request";

type requestProps = {
  query: string;
  variables?: object;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
};

type headersProps = {
  authorization: string;
  "X-Include-Drafts"?: string;
  "X-Exclude-Invalid"?: string;
};

const request = ({ query, variables, includeDrafts = false, excludeInvalid = true }: requestProps) => {
  const headers: headersProps = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  const client = new GraphQLClient("https://graphql.datocms.com", { headers });
  return client.request(query, variables);
};

export default request;
