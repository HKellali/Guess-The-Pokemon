const GraphQLRequest = async (query: string, variables = {}) => {
  const response = await fetch("https://graphql-pokeapi.graphcdn.app/", {
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
    method: "POST",
  });

  return response.json();
};
export default GraphQLRequest;
