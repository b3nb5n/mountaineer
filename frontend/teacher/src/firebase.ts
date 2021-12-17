import { initializeApp } from 'firebase/app';

// Teacher app configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCSdyjkhhNONAmg-8k_HF3NbKfd9-YpBus',
	authDomain: 'mountaineer-154c6.firebaseapp.com',
	projectId: 'mountaineer-154c6',
	storageBucket: 'mountaineer-154c6.appspot.com',
	messagingSenderId: '862585206112',
	appId: '1:862585206112:web:a3fdf59d53c0d288bf1a05',
	measurementId: 'G-62BPKQ1DGR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
