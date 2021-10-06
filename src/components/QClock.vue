<script setup lang="ts">
import { ref, onMounted } from 'vue'

const clockRef = ref<HTMLElement|null>(null)
const hourHand = ref<HTMLDivElement|null>(null)
const minuteHand = ref<HTMLDivElement|null>(null)
const secondHand = ref<HTMLDivElement|null>(null)

onMounted(() => {
  const date = new Date()
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  const secondAngle = seconds * 6
  const minuteAngle = minutes * 6
  const hourAngle = (hours * 30) + (minutes / 2)

  hourHand.value!.style.transform = `rotateZ(${hourAngle}deg)`
  minuteHand.value!.style.transform = `rotateZ(${minuteAngle}deg)`
  secondHand.value!.style.transform = `rotateZ(${secondAngle}deg)`
})

</script>

<template>
  <article ref="clockRef" class="clock simple show">
    <div class="hours-container">
      <div ref="hourHand" class="hours"></div>
    </div>
    <div class="minutes-container">
      <div ref="minuteHand" class="minutes"></div>
    </div>
    <div class="seconds-container">
      <div ref="secondHand" class="seconds"></div>
    </div>
  </article>
</template>

<style>
.clock {
  border-radius: 50%;
  background: #fff url(~/assets/images/ios_clock.svg) no-repeat center;
  background-size: 88%;
  height: 6em;
  width: 6em;
  padding-bottom: 31%;
  position: relative;
  animation: reverse rotate 60s infinite steps(60);
}

.clock.simple:after {
  background: #000;
  border-radius: 50%;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5%;
  height: 5%;
  z-index: 10;
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
  background: #000;
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
  animation: rotate 3600s infinite steps(60);
}
.seconds-container {
  animation: rotate 60s infinite steps(60);
}
</style>
