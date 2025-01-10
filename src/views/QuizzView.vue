<script setup>
import { ref, computed } from 'vue'
const questions = ['How much is 2+2', 'How much is 3*5+1', 'What is the rest from 3/1']
const answers = ['4', '16', '1']
const score = ref(0)
const current = ref(0)
const answer = ref(null)
const question = computed(() => questions[current.value])
const rightAnswer = computed(() => answers[current.value])
const areWeDone = computed(() => questions.length === current.value)
const check = () => {
    if (answer.value === rightAnswer.value) {
        score.value++
    }
    answer.value = null
    current.value++
    if (areWeDone.value) {
        clearInterval(interval)
    }
}
const interval = setInterval(check, 5000)
</script>

<template>
    <div class="container mx-auto">
        <div>
            <div class="text-2xl font-semibold">
                {{ areWeDone ? 'Your Score ' + score : 'Next question' }}
            </div>
        </div>
        <div class="text-xl">
            {{ question }}
        </div>
        <div class="mt-3">
            <input v-model="answer" class="bg-transparent outline-gray-400 outline rounded-md " />
        </div>
    </div>
</template>
