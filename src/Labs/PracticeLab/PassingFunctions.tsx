export default function PassingFunctions ({theFunction}:{theFunction:() => void}){
    return(
        <div>
            <h2>Passing functions</h2>
            <button onClick={theFunction} className="btn btn-primary">
                Invoke the function
            </button>
            <hr />
        </div>
    )
}