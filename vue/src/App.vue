<script setup lang="ts">
import { ref, nextTick } from "vue";

const count = ref(0);

function clock() {
  let time = 0;
  rec();
  function rec() {
    console.log(time);
    Promise.resolve().then(() => {
      time++;
      if (time <= 5) rec();
    });
  }
}

function increment() {
  console.log("increment start");
  clock();
  count.value++;

  setTimeout(() => {
    console.log("setTimeout");
  }, 0);

  nextTick(() => {
    console.log("nextTick:", document.querySelector("button")?.innerHTML);
  });

  Promise.resolve().then(() => {
    console.log(
      "Promise.resolve:",
      document.querySelector("button")?.innerHTML
    );
  });

  console.log("increment end");
}

function showCount(count: number) {
  console.log("showCount:", document.querySelector("button")?.innerHTML);

  return count;
}
</script>

<template>
  <button @click="increment">count is {{ showCount(count) }}</button>
</template>
