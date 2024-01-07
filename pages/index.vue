<template>
  <div class="max-w-[1366px] mx-auto">
    <header class="flex w-full justify-between">
      <nuxt-link
        to="/"
        class="flex items-center w-32 h-32 rounded-full overflow-hidden"
        title="Home"
      >
        <img
          src="https://media.discordapp.net/attachments/899855418065567746/1162464082096566283/image.png?ex=65aac60a&is=6598510a&hm=de64d8005bb0a81eed5b604e888ac9d4c0c16f4461f82352e7bc46f76defa2fd&=&format=webp&quality=lossless"
          alt="Logo"
        >
      </nuxt-link>
      <nav>
        <ul class="flex w-full items-center h-32">
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            class="p-4 hover:border-b-4 hover:border-green-500 hover:text-green-500 transition-all ease-in-out duration-300"
          >
            <nuxt-link
              :to="menuItem.link"
            >
              {{ menuItem.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
