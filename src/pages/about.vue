<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<div class="bg-gray-700">
		<div class="flex h-[100vh] items-center justify-center">
			<div class="text-center">
				<h2 class="text-3xl font-extrabold text-white sm:text-4xl">
					<span class="block">{{ t('common.about') }}</span>
				</h2>

				<router-link class="text-white underline" to="/"> Go To Home page </router-link>
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
name: about
</route>
