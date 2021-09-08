import gql from 'graphql-tag';

export default gql`
    fragment provinceInfo on Province {
        id
        name
        code
        division_type
    }
`;
