<template>
  <div class="max-w-[1366px] mx-auto bg-orange-700">
    <header class="flex w-full justify-between h-16 border-b hover:border-orange-200 hover:shadow-sm border-orange-500 fixed bg-white">
      <nuxt-link
        to="/"
        class="flex items-center w-32 h-16 overflow-hidden"
        title="Home"
      >
        <img
          src="https://storage.googleapis.com/pai-images/23caabdc1a7f4771be3288330727c535.jpeg"
          class=""
          alt="Logo"
        >
      </nuxt-link>
      <nav class="relative">
        <ul class="flex w-full items-center">
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            :title="`Ir para ${menuItem.title}`"
            class="p-4 border-b-4 border-transparent hover:border-orange-500 hover:text-orange-500 transition-all ease-in-out duration-300"
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
    <main class="px-2">
      <section class="grid min-h-screen max-h-[600px] sm:grid-cols-2 bg-orange-50 px-1">
        <div class="my-auto grid gap-4 backdrop-blur bg-white/50 p-5 rounded-xl max-w-[29rem] md:ml-2">
          <h1 class="text-4xl font-bold text-left max-w-[30rem]">
            Welcome to Landing Training with <a href="https://nuxtjs.org">Nuxt.js!</a>
          </h1>
          <p class="text-left max-w-[30rem]">
            A simple landing page to know how to configure / customize this project, using <a href="">Nuxt.js</a>.
          </p>
          <div class="flex items-start justify-start mt-8">
            <nuxt-link
              to="https://github.com/ricardo564?tab=projects"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
              title="See my projects on GitHub"
            >
              Other Projects
            </nuxt-link>
            <nuxt-link
              href="#section-2"
              rel="noopener noreferrer"
              class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded ml-4"
            >
              Show more
            </nuxt-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
