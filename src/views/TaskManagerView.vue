<script setup>
import { onMounted, onBeforeMount, ref } from 'vue'
const tasks = ref([
    {
        id: 1,
        description: 'Learn Vue 3',
        priority: 'High',
        isDone: true,
    },
    {
        id: 2,
        description: 'Learn Vue Router',
        priority: 'Medium',
        isDone: false,
    },
    {
        id: 3,
        description: 'Learn Vuex',
        priority: 'Low',
        isDone: false,
    },
])

onMounted(() => {
    newTaskInput.value.focus()
})
onBeforeMount(() => {
    // console.log('Component will mount')
})
const newTaskInput = ref(null)
</script>
<template>
    <div class="p-4">
        <form class="mb-4 flex space-x-2">
            <!-- Adding tasks form -->
            <input ref="newTaskInput" class="border rounded p-2 flex-grow" placeholder="Add new task" />
            <select class="border rounded p-2">
                <option disabled value="">Select priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <button type="submit" class="bg-blue-500 text-white rounded p-2">Add Task</button>
        </form>

        <!-- Task filtering -->
        <input class="border rounded p-2 mb-4 w-full" placeholder="Filter tasks..." />

        <!-- If there no tasks -->
        <div v-if="tasks.length === 0" class="text-center text-gray-500 mb-4">
            <p>No tasks found. Try changing the filter or add some tasks!</p>
        </div>

        <div v-else>
            <h3 class="text-xl font-bold mb-2">Your Tasks</h3>
            <!-- This is a list of tasks -->
            <div v-for="(task, index) in tasks" :key="task.id" class="space-y-4">
                <div class="flex items-center justify-between p-2 border rounded mt-4">
                    <input type="checkbox" class="mr-2" v-model="task.isDone" />
                    <!-- Task description -->
                    <span class="flex-grow">
                        {{ task.description }}
                    </span>
                    <!-- Removing a task -->
                    <button class="remove-button text-red-500">✖</button>
                </div>
            </div>
        </div>
    </div>
</template>
