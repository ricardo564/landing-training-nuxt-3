<template>
  <div class="max-w-[1366px] mx-auto bg-orange-700">
    <header class="flex w-full justify-between h-16 border-b hover:border-orange-200 hover:shadow-sm border-orange-500 fixed bg-white z-[60]">
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
        <ul class="flex items-center w-full">
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            :title="`Ir para ${menuItem.title}`"
            class="p-4 transition-all duration-300 ease-in-out border-b-4 border-transparent hover:border-orange-500 hover:text-orange-500"
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
    <main class="pl-2">
      <section class=" grid min-h-screen max-h-[600px] sm:grid-cols-2 bg-orange-50 px-1 z-[1] bg-[url('https://miro.medium.com/v2/resize:fit:640/format:webp/0*W7He2n-vUYR4Riin')] bg-fixed bg-contain bg-no-repeat">
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
              class="px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-600"
              title="See my projects on GitHub"
            >
              Other Projects
            </nuxt-link>
            <nuxt-link
              href="#section-2"
              rel="noopener noreferrer"
              class="px-4 py-2 ml-4 font-bold text-white bg-orange-500 rounded hover:bg-orange-600"
            >
              Show more
            </nuxt-link>
          </div>
        </div>
        <div class="flex items-center justify-center w-full h-full min-h-screen">
          <div class="max-w-[30rem] w-full h-full max-h-[30rem] rounded-full overflow-hidden border-8 border-orange-600">
            <img
              src="https://cdn.discordapp.com/attachments/899855418065567746/1193614252859215983/image.png?ex=65ad5ae6&is=659ae5e6&hm=b160fdba75485f3bf045a42b13748adb35ab089e302851ec174a5143cf985285&"
              class="object-cover object-bottom mx-auto my-auto w-42 h-42"
              alt="Logo"
            >
          </div>
        </div>
      </section>
      <section
        class="flex flex-col min-h-screen max-h-[600px] bg-white gap-16 px-1 bg-[url('https://cdn.discordapp.com/attachments/1162465536077205535/1163838239749193818/image.png?ex=65a68b53&is=65941653&hm=9bf5c783080fe32bf13c6941efcf3e6f40436001d6537f78dfc23e837046cede&')] bg-fixed bg-contain bg-no-repeat z-[10]"
        id="section-2"
      >
        <h2 class="pt-16 mx-auto text-4xl font-bold text-left">
          My Skills
        </h2>
        <div class="flex flex-wrap w-full gap-4">
          <div
            v-for="skill in skills"
            :key="skill.id"
            class="flex h-44 w-[17rem] relative border py-5"
          >
            <div class="flex flex-col h-full">
              <div class="absolute flex flex-col gap-4 p-2 bottom-2">
                <h3 class="text-2xl font-bold text-center">
                  {{ skill.name }}
                </h3>
                <p class="mt-auto bg-red-500">
                  {{ skill.level }}
                </p>
              </div>
              <img
                :src="skill.image"
                class="absolute object-cover object-bottom w-24 h-24 mx-auto my-auto ml-auto right-2 top-2"
                alt="Logo"
              >
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
