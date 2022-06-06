let defaultState = {
  selectedItems: { items: [], resturantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let newState = { ...state };
      if (action.payload.checkBoxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          resturantName: action.payload.resturantName,
        };
      } else {
        console.log("REMOVE FROM CART");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.menuname != action.payload.menuname
            ),
          ],
          resturantName: action.payload.resturantName,
        };
      }
      console.log(newState.selectedItems.items.length);
      return newState;

    default:
      return state;
  }
};

export default cartReducer;
