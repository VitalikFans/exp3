import {
  Client,
  DaoListItem,
  DaoSortBy,
  DaoQueryParams,
  SortDirection,Context, ContextPlugin, TokenVotingClient
} from "@aragon/sdk-client";
import { minimalContext } from "./index";

// Instantiate the general purpose client from the Aragon OSx SDK context.
const client: Client = new Client(minimalContext);

const queryParams: DaoQueryParams = {
  skip: 0, // optional
  limit: 10, // optional,
  direction: SortDirection.ASC, // optional
  sortBy: DaoSortBy.CREATED_AT, //optional, alternatively "SUBDOMAIN" (and "POPULARITY" coming soon)
};

// Get a list of DAOs from the Aragon DAO registry.
const main = async () => {
  
  console.log("enter");
  const contextPlugin: ContextPlugin = ContextPlugin.fromContext(minimalContext);

  const tokenVotingClient: TokenVotingClient = new TokenVotingClient(contextPlugin);

  console.log(await tokenVotingClient.methods.getProposals({ daoAddressOrEns: '0x1bd3f1cfe573f42458312f3a96a5665242c54293' }));

  const daos: DaoListItem[] = await client.methods.getDaos(queryParams);
  console.log(daos);
}
main();