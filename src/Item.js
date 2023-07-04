export function Item(props){
    return (<li>{props.item.name}, status: {props.item.status}</li>)
  }