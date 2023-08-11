// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: "firebase"
  },
  app: {
    baseURL: "/"
  },
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.NUXT_FIREBASE_APIKEY,
      firebaseAuthDomain: process.env.NUXT_FIREBASE_AUTHDOMAIN,
      firebaseProjectId: process.env.NUXT_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.NUXT_FIREBASE_MEASUREMENTID,
    }
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
  ],
  css: [
    "~/assets/styles/common.css",
    "~/assets/styles/layout.css",
    "~/assets/styles/index.css",
    "~/assets/styles/blog.css",
    "~/assets/styles/contact.css",
    "~/assets/styles/singleblog.css",
  ]
})
