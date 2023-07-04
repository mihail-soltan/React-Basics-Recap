import { Item } from "./Item";

export function Lista() {
    let lista = [{ name: "adelina", status: "To do", deadline: new Date()  }, { name: "paulus", status: "To do", deadline: new Date()  }, { name: "Mihai", status: "To do", deadline: new Date()  }];

    return (<ul>{lista.map((item) => <Item item={item} />)}</ul>);
}