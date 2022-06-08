function Filter(props) {
    return (
        <div>
            <h4>Find contacts by name</h4>
            <input type='text' onChange={props.filterHandler} value={props.filterValue} />
        </div>
    );
}

export default Filter;