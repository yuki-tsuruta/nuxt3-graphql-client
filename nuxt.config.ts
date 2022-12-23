// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-graphql-client'],

  runtimeConfig: {
    public: {
      GQL_HOST: 'http://localhost:3300/graphql' // overwritten by process.env.GQL_HOST
    }
  }
})
