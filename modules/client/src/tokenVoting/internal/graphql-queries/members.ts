import { gql } from "graphql-request";

export const QueryTokenVotingMembers = gql`
query TokenVotingMembers($address: ID!) {
    tokenVotingPlugin(id: $address){
        members {
            address
            balance
            votingPower
            delegatee {
                address
            }
            delegators {
                address
                balance
            }
        }
    }
}
`;
