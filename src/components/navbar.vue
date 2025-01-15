<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
</script>

<template>
    <div>
        <nav>
            <div class="container mx-auto flex justify-between items-center p-4">
                <div>
                    <router-link to="/" class="text-xl font-semibold">Mini Project</router-link>
                </div>
                <div class="space-x-6">
                    <router-link to="/quizz" class="text-base font-semibold">Quizz</router-link>
                    <router-link to="/task-manager" class="text-base font-semibold">Task Manager</router-link>
                    <router-link to="/gallery" class="text-base font-semibold">Gallery</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>