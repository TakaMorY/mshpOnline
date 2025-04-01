<template>
    <div class="bg-gray-100 p-3 rounded-md my-2">
        <div class="flex items-center mb-1">
            <img src="https://via.placeholder.com/30" alt="User Avatar" class="w-6 h-6 rounded-full mr-2" />
            <span class="font-semibold">{{ comment.name }}</span>
        </div>
        <p class="text-gray-700">
            {{ comment.body }}
        </p>
    </div>
</template>
<script setup lang="ts">
interface Comment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}
defineProps<{ comment: Comment }>()
</script>