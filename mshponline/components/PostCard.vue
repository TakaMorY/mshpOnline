<template>
    <div class="bg-white shadow-md rounded-lg p-4 mb-4">
        <div class="flex items-center mb-2">
            <img src="https://via.placeholder.com/40" alt="User Avatar" class="w-8 h-8 rounded-full mr-2" />
            <span class="font-semibold">{{ post.userId }}</span>
        </div>
        <p class="text-gray-800 mb-2">{{ post.title }}</p>
        <p class="text-gray-600 mb-4">{{ post.body }}</p>
        <div class="flex justify-between items-center">
            <button class="text-gray-500 hover:text-gray-700 flex items-center gap-1"
                @click="$router.push(`/post/${post.id}`)">
                <i class="fas fa-comment"></i> Подробнее
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
defineProps<{ post: Post }>()
</script>