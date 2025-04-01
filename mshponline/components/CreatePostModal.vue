<template>
    <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75">
        <div class="flex items-center justify-center min-h-screen px-4 text-center">
            <div class="bg-white rounded-lg p-6 shadow-xl w-full max-w-md">
                <h2 class="text-xl font-semibold mb-4">Создание поста</h2>
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Заголовок
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                    v-model="title" />
                <label class="block text-gray-700 text-sm font-bold mb-2">
                    Текст поста
                </label>
                <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                    v-model="body"></textarea>
                <div class="flex justify-end mt-4">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                        @click="closeModal">Отмена</button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        @click="createPost">Создать пост</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useToast } from 'vue-toastification'
const toast = useToast()
const isOpen = ref(false)
const title = ref("")
const body = ref("")

const openModal = () => {
    isOpen.value = true
}
const closeModal = () => {
    isOpen.value = false
    title.value = ""
    body.value = ""
}
const emit = defineEmits<{
    (e: 'add-post', post: Post): void
}>()
const createPost = async () => {
    if (title.value && body.value) {
        const post = {
            userId: 1,
            title: title.value,
            body: body.value
        }
        emit('add-post', post)
        closeModal()
        toast.success('Пост успешно создан!')
    } else {
        toast.error('Заполните все поля!')
    }
}
defineExpose({
    openModal
})
</script>