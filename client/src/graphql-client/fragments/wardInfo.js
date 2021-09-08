import gql from 'graphql-tag';

export default gql`
    fragment wardInfo on Ward {
        id
        name
        code
        division_type
    }
`;
