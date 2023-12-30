---
title: About
---

<div text-center>
  <h2>About</h2>
</div>

My website. Blogs and others. Use vitesse template and naive ui.

Source code: https://github.com/Discreater/discreater.github.io

Build timestamp: <NTime :time="date" />.

Build Hash: {{ buildInfo.buildCommitHash }}

<script setup>
import { NTime } from 'naive-ui';
import { buildInfo } from '~/logic';
const date = new Date(buildInfo.buildTime);
</script>