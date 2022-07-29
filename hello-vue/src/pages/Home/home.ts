import { defineComponent } from "vue";
import { useTodo } from "@/stores";

export default defineComponent({
  name: "page-home",
  data() {
    return {
      counter: 0,
    };
  },
  setup() {
    const { todos, isLoading } = useTodo();

    return {
      todos,
      isLoading,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
});
