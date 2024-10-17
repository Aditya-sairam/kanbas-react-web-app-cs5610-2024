import React from "react";
import Math, { add, subtract, multiply, divide } from "./math";
import * as mathematica from "./math"

export default function DestructingImports() {
    return (
        <div id="wd-destructing-imports">
            <h2>Destructing Imports</h2>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Math</th>
                        <th>Mathematica</th>
                        <th>Functions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Math.add(2,3) = {Math.add(2, 3)}
                        </td>
                        <td>
                            Mathematica = {mathematica.add(2, 3)}
                        </td>
                        <td>
                            add(2,3) = {add(2, 3)}
                        </td>
                    </tr>
                    <tr>
                        <td>Math.subtract(5, 1) = {Math.subtract(5, 1)}</td>
                        <td>Matematica.subtract(5, 1) =
                            {mathematica.subtract(5, 1)}</td>
                        <td>subtract(5, 1) = {subtract(5, 1)}</td>
                    </tr>


                </tbody>
            </table>
            <hr />
        </div>
    )
}