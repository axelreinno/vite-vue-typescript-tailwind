<template>
	<div class="bg-indigo-700">
		<div class="flex h-[100vh] flex-col items-center justify-center">
			<div class="text-center">
				<h2 class="text-3xl font-extrabold text-white sm:text-4xl">
					<span class="block">HOME PAGE.</span>
				</h2>

				<router-link class="text-white underline" to="/about"> Go To About page </router-link>
			</div>
			<div class="mt-4 flex items-center justify-center">
				<v-counter />
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
name: home
</route>
