import gql from 'graphql-tag';

export default gql`
    fragment districtInfo on District {
        id
        name
        code
        division_type
    }
`;
