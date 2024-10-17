const multiply = (a: number, b: number) => a * b;
const fourTimesFive = multiply(4, 5);

export default function ImpliedReturns() {
    return (
        <div id="wd-implied-return">
            <h4> Implied Returns</h4>
            fourTimesFive = {fourTimesFive} <br />
            multiply(4,5) = {multiply(4, 5)} <hr />
        </div>
    )

}