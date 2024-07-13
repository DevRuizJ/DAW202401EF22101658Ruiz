<template>
  <div class="program-page">
    <div class="program-filter q-ml-md q-mr-xl">
      <ProgramFilter />
    </div>
    <div class="program-list q-mr-md">
      <ProgramList />
    </div>
  </div>
</template>
<style>
.program-page {
  display: flex;
  justify-content: space-between;
}

.program-filter {
  width: 25%;
}

.program-list {
  width: 75%;
}
</style>
<script>

import ProgramFilter from 'src/components/program/ProgramFilter.vue'
import ProgramList from 'src/components/program/ProgramList.vue';

export default {
  name: "ProgramPage",
  components: {
    ProgramFilter,
    ProgramList
  }
}

</script>
