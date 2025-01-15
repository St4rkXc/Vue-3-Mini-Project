<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="container mx-auto mt-16">
        <div class="flex justify-center items-center gap-x-4">
            <div class="w-24 h-[1px] bg-gray-600"></div>
            <p class="text-xs text-gray-600 font-semibold">Welcome To</p>
            <div class="w-24 h-[1px] bg-gray-600"></div>
        </div>
        <h1 class="text-center text-2xl font-semibold text-gray-800">
            Welcome to My Mini Project
        </h1>
        <div class="flex justify-center items-center mt-6 space-x-6">
            <RouterLink to="/quizz" class="text-base font-medium text-gray-800">
                Quizz
            </RouterLink>
            <RouterLink to="/task-manager" class="text-base font-medium text-gray-800">
                Task Manager
            </RouterLink>
            <RouterLink to="/gallery" class="text-base font-medium text-gray-800">
                Gallery
            </RouterLink>
        </div>
    </div>
</template>
