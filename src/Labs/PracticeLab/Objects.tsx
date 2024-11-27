export default function Objects(){
    const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
return(
    <div>
        <h2>This link will take you to the object from server!</h2>
        <a href={`${REMOTE_SERVER}/practicelab/objects`}>This is the link!</a> 
    </div>
)
}