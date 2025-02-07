import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows you to specify the IP address
    //port: 5173, // You can change the port if needed
  }
});
