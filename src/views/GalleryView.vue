<script setup>
const addPhoto = () => {
    console.log('Add photo')
}
</script>
<template>
    <div class="container mx-auto mt-12">
        <form class="mb-5 gap-x-2" @submit.prevent="addPhoto">
            <input placeholder="Enter image URL" class="border border-gray-300 rounded py-2 px-4 bg-transparent mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 i" />
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Photo</button>
        </form>

        <p class="text-center text-gray-500">No photos added yet. Add some!</p>

        <div class="grid grid-cols-4 gap-2">
            <div class="photo">
                <button class="favorite-button">★</button>
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
