import axios from "axios";
import { reactive, toRefs } from "vue";
import { useQuery } from "vue-query";

type State = {
  selectedTodo: any;
};

export const state = reactive<State>({
  selectedTodo: undefined,
});

export const useTodo = () => {
  const { data: todos, ...rest } = useQuery("todos", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data)
  );

  const handleSelectedTodo = (todo: any) => {
    console.log(`selectedTodo`, todo);
    state.selectedTodo = todo;
  };

  return {
    todos,
    ...toRefs(state),
    ...rest,
    handleSelectedTodo,
  };
};
