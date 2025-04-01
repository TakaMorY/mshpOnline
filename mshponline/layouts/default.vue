<template>
    <div>
        <header>
            <div class="flex justify-between items-center container mx-auto py-4">
                <NuxtLink to="/" class="font-bold text-xl">ConnectVerse</NuxtLink>
                <nav>
                    <ul class="flex gap-4 items-center">
                        <li>
                            <NuxtLink to="/profile/1" class="font-medium">Профиль</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/search" class="font-medium">Поиск</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/settings" class="font-medium">Настройки</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <div class="container mx-auto">
            <slot />
        </div>
        <footer class="bg-gray-100 py-4 text-center mt-8">
            &copy; {{ new Date().getFullYear() }} ConnectVerse
        </footer>
    </div>
</template>