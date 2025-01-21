
<!-- eslint-disable vue/no-unused-vars -->
<script setup>
import { computed } from 'vue'
import { watch } from 'vue'
import { onMounted, ref, watchEffect } from 'vue'
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

const addTask = (e) => {
    e.preventDefault()
    if (newTask.value !== '' && newPriority.value !== '') {
        const task = {
            id: tasks.value.length + 1,
            description: newTask.value,
            priority: newPriority.value,
            isDone: false,
        }
        tasks.value.unshift(task)
        newTask.value = ''
        newPriority.value = ''
        newTaskInput.value.focus()
    } else if (newTask.value === '' || newPriority.value === '') {
        alert('Please fill in the task and priority fields')
    }
}

const deleteAllTask = () => {
    tasks.value = []
}



const deleteTask = (index) => {
    tasks.value.splice(index, 1)
}

const newTaskInput = ref(null)
const newTask = ref('')
const newPriority = ref('')
const filter = ref('')
// Search task
const filteredTask = computed(() => tasks.value.filter((task) => task.description.toLowerCase().includes(filter.value.toLowerCase())))

// Wacthing the changes of Add New Task Input
watch(
    newTask,
    (newValue, oldValue) => {
        console.log('New value:', newValue)
        console.log('Old value:', oldValue)
    },
    { immediate: true },
)
// Watching the changes of Add New Task Filter
watch(filter, (oldValue, newValue) => {
    console.log('Old value:', oldValue)
    console.log('New value:', newValue)
})

watchEffect(() => {
    console.log('Task:', newTask.value)
})

watch(
    tasks,
    () => {
        console.log('task has changed')
    },
    { deep: true },
)

console.log(filter.value)
</script>
<template>
    <div class="p-4 container mx-auto">
        <form class="mb-4 flex space-x-2" @submit="addTask">
            <!-- Adding tasks form -->
            <input v-model="newTask" ref="newTaskInput" class="border-b border-gray-400 p-2 flex-grow bg-transparent" placeholder="Add new task" />
            <select class="border rounded p-2 bg-transparent" v-model="newPriority">
                <option disabled value="">Select priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <button type="submit" class="bg-blue-500 text-white rounded p-3">Add Task</button>
            <button type="submit" class="bg-red-500 text-white rounded p-3" @click="deleteAllTask">Delete Task</button>
        </form>

        <!-- Task filtering -->
        <input v-model="filter" class="border-b border-gray-400 bg-transparent p-2 mb-4 w-full" placeholder="Filter tasks..." />

        <!-- If there no tasks -->
        <div v-if="tasks.length === 0" class="text-center text-gray-500 mb-4">
            <p>No tasks found. Try changing the filter or add some tasks!</p>
        </div>

        <div v-else>
            <h3 class="text-xl font-bold mb-2">Your Tasks</h3>
            <!-- This is a list of tasks -->
            <div
                v-for="(task, index) in filteredTask"
                :key="task.id"
                class="flex items-center justify-between p-2 border rounded mt-4 border-l-4"
                :class="{
                    'line-through text-gray-400 border-l-gray-200': task.isDone,
                    'border-l-red-500': task.priority === 'High',
                    'border-l-yellow-500': task.priority === 'Medium',
                    'border-l-green-500': task.priority === 'Low',
                }"
            >
                <div class="">
                    <input type="checkbox" class="mr-2 bg-white" v-model="task.isDone" />
                    <!-- Task description -->
                    <span class="flex-grow">
                        {{ task.description }}
                    </span>
                    <!-- Removing a task -->
                </div>
                <button class="text-red-500 font-bold decoration-none" @click="deleteTask(index)">X</button>
            </div>
        </div>
    </div>
</template>
