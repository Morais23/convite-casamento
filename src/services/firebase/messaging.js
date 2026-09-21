import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "./config";

export const messaging = typeof window !== 'undefined' ? getMessaging(app) : null;

export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted' && messaging) {
      const token = await getToken(messaging, { 
        vapidKey: 'YOUR_PUBLIC_VAPID_KEY' 
      });
      return token;
    }
  } catch (error) {
    console.error("Erro ao solicitar permissÃ£o de notificaÃ§Ã£o:", error);
  }
  return null;
};