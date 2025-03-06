import { useEffect, useState } from "react";

function TodoItem(props) {
    return (
        <div>
            <p>{props.state}</p>
            {props.comment}
        </div>
    )
}

export default TodoItem;