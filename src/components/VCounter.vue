<script setup lang="ts">
import { useCounter } from '@vueuse/core';

const {
	count: counter,
	inc: increment,
	dec: decrement,
} = useCounter(0, {
	min: 0,
});
</script>

<template>
	<div class="h-10 w-32 text-center">
		<span class="w-full text-sm font-semibold text-white"> Counter Input </span>
		<div class="relative mt-1 flex h-10 w-full flex-row rounded-lg bg-transparent">
			<button class="h-full w-20 cursor-pointer rounded-l bg-white text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700" @click="decrement()">
				<span class="m-auto text-2xl font-thin">−</span>
			</button>
			<label for="counter">
				<input
					id="counter"
					v-model="counter"
					type="number"
					class="text-md md:text-basecursor-default flex w-full items-center bg-white text-center font-semibold text-gray-700 outline-none hover:text-black focus:text-black focus:outline-none"
					name="custom-input-number" />
			</label>
			<button class="h-full w-20 cursor-pointer rounded-r bg-white text-gray-600 hover:bg-gray-400 hover:text-gray-700" @click="increment()">
				<span class="m-auto text-2xl font-thin">+</span>
			</button>
		</div>
	</div>
</template>

<style>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
</style>
