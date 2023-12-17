<template>
  <div class="spotlight-wrapper">
    <div class="fixed left-0 right-0 spotlight" />
  </div>
</template>

<style>
.spotlight-wrapper {
  opacity: .5;
  transition: opacity .4s ease-in;
}

.spotlight {
  background: linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);
  bottom: -40vh;
  filter: blur(20vh);
  height: 50vh;
}
</style>
