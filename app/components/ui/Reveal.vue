<script setup lang="ts">
const props = withDefaults(
defineProps<{

delay?:number

}>(),
{

delay:0

})
</script>

<template>

<div

class="opacity-0"

>

<slot/>

</div>

</template>