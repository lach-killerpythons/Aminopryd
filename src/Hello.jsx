import GroceryItem from "./GroceryItem"

export default function Hello() {
    return (
        <>
        <h1>Hello Aminopryd!🐔</h1>
        <GroceryItem text="4-Aminopyridine is used under the trade name Avitrol as 0.5% or 1% in bird control bait"/>
        <br />
        <GroceryItem text="It's also used clinically as Fampridine as a treatment for Multiple sclerosis "/>
        <p> JSON file is locally hosted on json-server to allow GET and POST </p>
        <p> Person name add submits POST request</p>
        <p> ChatGPT made the CSS for the profile cards </p>
        </>
    )
}