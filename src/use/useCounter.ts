import { computed, reactive, watch, onMounted, onBeforeMount, ref } from "vue";

export function useNormalCounter() {
  const normalCounter = reactive({
    count: 0,
    title: "Counter(Without Piania)",
  });
  const header = ref(null);
  onMounted(() => {
    alert("Welcomeeee 😘");
    console.log(`${header.value}`);
  });
  const normalInc = (_payload: MouseEvent): void => {
    normalCounter.count++;
  };
  watch(
    () => normalCounter.count,
    (newVal, oldVal) => {
      if (newVal === 10) {
        alert(`you're on number ${oldVal} -> ${newVal} 🧚🏾‍♂️`);
      }
    }
  );
  const normalDec = (_payload: MouseEvent): void => {
    normalCounter.count === 0 ? 0 : normalCounter.count--;
  };
  const numCheck = computed<string>(() => {
    if (normalCounter.count % 2 === 0) return "even";
    return "odd";
  });
  return {
    header,
    numCheck,
    normalCounter,
    normalDec,
    normalInc
  }
}
