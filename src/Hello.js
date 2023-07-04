export default function Hello({ name, age, changeName }) {

    return (<div>
        <h1>Hello, my name is {name} and I'm {age} years old</h1>
        <button onClick={()=>changeName("Rob")}>Change name</button>
    </div>)
}