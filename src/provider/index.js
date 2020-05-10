import { ApolloProvider, Query } from 'react-apollo';
import { client } from '../config/apollo'; // la configuración de apollo
import ApolloClient, { gql } from "apollo-boost";
import App from '../App'; 

export const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/' 
});

export default () => (
	<ApolloProvider client={client}> 
		<App />
	</ApolloProvider>
);

const WeatherQuery = () => {
    return (
      <Query
        query={gql`
          {
            weather {
              results {
                city
                temperature
                humidity
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
  
          return data.weather.results.map(weather => (
            <p>{weather.temperature}</p>
          ));
        }}
      </Query>
    );
  };