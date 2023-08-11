import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey as string,
    authDomain: config.public.firebaseAuthDomain as string,
    projectId: config.public.firebaseProjectId as string,
    storageBucket: config.public.firebaseStorageBucket as string,
    messagingSenderId: config.public.firebaseMessagingSenderId as string,
    appId: config.public.firebaseAppId as string,
    measurementId: config.public.firebaseMeasurementId as string,
  };

  const apps = getApps();
  let firebaseApp: FirebaseApp;

  if (!apps.length) {
    firebaseApp = initializeApp(firebaseConfig, {});
  } else {
    firebaseApp = apps[0];
  }

  // Emulator
  const isEmulating = window.location.hostname === "localhost";
  if (isEmulating) {
    const db = getFirestore();
    connectFirestoreEmulator(db, "localhost", 8080);
  }

  // Firestoreに接続するための情報をアプリケーション全体に提供
  return {
    provide: {
      firebaseDB: firebaseApp,
    }
  }
})
