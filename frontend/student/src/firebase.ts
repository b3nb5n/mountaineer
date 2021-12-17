import { initializeApp } from 'firebase/app';

// Student app configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCSdyjkhhNONAmg-8k_HF3NbKfd9-YpBus',
	authDomain: 'mountaineer-154c6.firebaseapp.com',
	projectId: 'mountaineer-154c6',
	storageBucket: 'mountaineer-154c6.appspot.com',
	messagingSenderId: '862585206112',
	appId: '1:862585206112:web:9d7537432893d925bf1a05',
	measurementId: 'G-FBN2M2PHEW',
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
export default app;
