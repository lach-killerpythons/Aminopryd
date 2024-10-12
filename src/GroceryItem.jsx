export default function GroceryItem(props) {
    return (
    <button>{props.text}</button>
    );
}


// default props example
GroceryItem.defaultProps = {
    text:'placeholder text',
  }; 
  