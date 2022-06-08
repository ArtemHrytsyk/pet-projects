import queryString from 'query-string';

export default function getQueryParams(string) {
    return queryString.parse(string); //в string приходить this.props.location.search
}