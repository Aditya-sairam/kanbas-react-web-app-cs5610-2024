const add = (a:number,b:number) => {
    alert(`${a} + ${b} = ${a+b}`);
};

export default function PassingDataOnEvent() {
    return(
        <div id="wd-passing-data-on-event">
            <h2> Passing data on Event</h2>
            <button onClick={() => add(2,3)} className="btn btn-primary">
                Passing 2 and 3 to add()
            </button>
            <hr />
        </div>
    )
}