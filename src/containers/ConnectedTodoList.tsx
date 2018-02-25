import { connect } from 'react-redux';
import { State, Item } from '../reducers/State';
import { newItem, newItemInputUpdated, AppActions, itemUpdated } from '../actions/AppActions';
import { TodoList } from '../components/TodoList';

const mapStateToProps = (state: State) => {
    return {
        newItemText: state.newItemInput.text,
        items: state.items
    };
};

const mapDispatchToProps = (dispatch: (action: AppActions) => void) => {
    return {
        onTextChanged: (text: string) => dispatch(newItemInputUpdated({ text })),
        onAddPressed: (text: string) => dispatch(newItem({text})),
        onItemUpdated: (item: Item) => dispatch(itemUpdated(item))
    };
};

export const ConnectedTodoList =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(TodoList);