<template>
    <div>
        <div v-if="user">
            <h1 class="text-2xl font-bold mb-4">Профиль пользователя</h1>
            <UserProfileCard :user="user" />
            <h2 class="text-xl font-bold mb-4 mt-4">Посты пользователя</h2>
            <PostCard v-for="post in posts" :key="post.id" :post="post" />
        </div>
        <p v-else>Пользователь не найден</p>
    </div>
</template>

<script setup lang="ts">
import { Post, User } from '~~/types';
const route = useRoute();
const userId = route.params.id;
const config = useRuntimeConfig();
const { data: user } = await useAsyncData(`user${userId}`, () => $fetch<User>(config.public.apiBaseUrl + `users/${userId}`));
const { data: posts } = await useAsyncData(`userPosts${userId}`, () => $fetch<Post[]>(config.public.apiBaseUrl + `posts?userId=${userId}`));
</script>