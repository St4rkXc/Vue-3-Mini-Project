<script setup>
import { ref } from 'vue'
const photos = ref([
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1712939706943-b6b3b4549937?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
        isFavorite: false,
    },
    {
        id: 2,
        url: 'https://plus.unsplash.com/premium_photo-1712933121311-dcdc41d9fb17?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8',
        isFavorite: false,
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1713105227378-91e790dfe4f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8',
        isFavorite: false,
    },
])
const newPhotoUrl = ref('')
const addPhoto = () => {
    console.log('Add photo')
    const Photo = {
        id: photos.value.length + 1,
        url: newPhotoUrl.value,
        isFavorite: false,
    }
    if (newPhotoUrl.value !== '') {
        photos.value.push(Photo)
        newPhotoUrl.value = ''
    }
}
const clearPhotos = () => {
    photos.value = []
}
const toggleFavorite = (photo) => {
    console.log('Toggle favorite')
    photo.isFavorite = !photo.isFavorite
    console.log(photo)
}
const removePhoto = (index) => {
    console.log('Remove photo')
    photos.value.splice(index, 1)
}
</script>
<template>
    <div class="container mx-auto mt-12">
        <form class="mb-5 gap-x-2" @submit.prevent="addPhoto">
            <input
                v-model="newPhotoUrl"
                placeholder="Enter image URL"
                class="border border-gray-300 rounded py-2 px-4 bg-transparent mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 i"
            />
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Photo</button>
            <button type="button" @click="clearPhotos" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Clear Photos</button>
        </form>

        <p v-if="photos.length === 0" class="text-center text-gray-500">No photos added yet. Add some!</p>

        <div class="grid grid-cols-4 gap-2" v-else>
            <div v-for="(photo, index) in photos" :key="photo.id" class="photo">
                <img :src="photo.url" alt="" @click="removePhoto(index)"/>
                <button class="favorite-button" :class="{ active: photo.isFavorite }" @click="toggleFavorite(photo)">★</button>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.photo {
    position: relative;
    border: 1px solid #ccc;
}
.photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
.favorite-button {
    background: none;
    border: none;
    color: #ccc;
    font-size: 24px;
    position: absolute;
    bottom: 5px;
    right: 5px;
    cursor: pointer;
}
.favorite-button.active {
    color: gold;
}
</style>
