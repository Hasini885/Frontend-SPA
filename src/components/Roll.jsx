function Roll(props){
    return(
        <> 
            <h1> Student Name: {props.name} </h1>
            <h2> Student Roll: {props.roll} </h2>
            <h2> Department: {props.dept} </h2>
            <h2> Blood Group: {props.bloodGroup} </h2>
            <h2> Address: {props.address} </h2>
            <hr />
        </> 
    );
}

export default Roll;