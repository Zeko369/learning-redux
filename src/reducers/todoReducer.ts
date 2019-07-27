import { GET_TODOS, NEW_TODO, REMOVE_TODO, EDIT_TODO } from "../actions/types";

interface initState {
  items: string[];
}

interface action {
  type: string;
  payload?: any;
}

const initState: initState = {
  items: []
};

const reducer = (state = initState, action: action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_TODO:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_TODO:
      const new_items = [...state.items];
      new_items.splice(action.payload.id, 1);

      return {
        ...state,
        items: new_items
      };
    case EDIT_TODO:
      const { id, title } = action.payload;
      return {
        ...state,
        items: state.items.map((item: any, index: number) =>
          index === id ? title : item
        )
      };
    default:
      return state;
  }
};

export default reducer;
