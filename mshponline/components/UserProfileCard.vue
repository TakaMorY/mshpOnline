<template>
    <div class="bg-white shadow-md rounded-lg p-4 mb-4">
        <div class="flex items-center mb-2">
            <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full mr-2" />
            <span class="font-semibold">{{ user.username }}</span>
        </div>
        <p class="text-gray-800">{{ user.name }}</p>
        <p class="text-gray-600">{{ user.email }}</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
            @click="$router.push(`/profile/${user.id}`)">
            Смотреть профиль
        </button>
    </div>
</template>
<script setup lang="ts">
interface User {
    id: number
    name: string
    username: string
    email: string
}
defineProps<{ user: User }>()
</script>