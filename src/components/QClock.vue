<script setup lang="ts">
import { onMounted, ref } from 'vue';

const clockRef = ref<HTMLElement | null>(null);
const hourHand = ref<HTMLDivElement | null>(null);
const minuteHand = ref<HTMLDivElement | null>(null);
const secondHand = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6;
  const hourAngle = (hours * 30) + (minutes / 2);

  hourHand.value!.style.transform = `rotateZ(${hourAngle - secondAngle}deg)`;
  minuteHand.value!.style.transform = `rotateZ(${minuteAngle - secondAngle}deg)`;
  clockRef.value!.style.transform = `rotateZ(${-secondAngle}deg)`;
});
</script>

<template>
  <article class="clock-container">
    <div ref="clockRef" class="clock" />
    <div class="hours-container">
      <div ref="hourHand" class="hours" />
    </div>
    <div class="minutes-container">
      <div ref="minuteHand" class="minutes" />
    </div>
    <div class="seconds-container">
      <div ref="secondHand" class="seconds" />
    </div>
  </article>
</template>

<style>
.clock-container {
  border-radius: 50%;
  padding: 0.25rem;
  background: linear-gradient(to top,#b65eba,#2e8de1);
  border-image-slice: 10;
  height: 6rem;
  width: 6rem;
  position: relative;
  animation: reverse rotate 60s infinite linear;
}

.clock {
  border-radius: 50%;
  background: #fff url(~/assets/images/ios_clock.svg) no-repeat center;
  background-size: 88%;
  width: 100%;
  height: 100%;
}

.minutes-container, .hours-container, .seconds-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hours {
  background: #000;
  height: 20%;
  left: 48.75%;
  position: absolute;
  top: 30%;
  transform-origin: 50% 100%;
  width: 2.5%;
}

.minutes {
  background: #000;
  height: 40%;
  left: 49%;
  position: absolute;
  top: 10%;
  transform-origin: 50% 100%;
  width: 2%;
}

.seconds {
  background: rgb(255, 0, 0);
  height: 45%;
  left: 49.5%;
  position: absolute;
  top: 14%;
  transform-origin: 50% 80%;
  width: 1%;
  z-index: 8;
}

@keyframes rotate {
  100% {
    transform: rotateZ(360deg);
  }
}

.hours-container {
  animation: rotate 43200s infinite linear;
}

.minutes-container {
  animation: rotate 3600s infinite linear;
}
.seconds-container {
  animation: rotate 60s infinite linear;
}
</style>
