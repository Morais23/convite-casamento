import { 
  getFirestore, 
  doc, 
  getDoc, 
  collection, 
  getDocs, 
  runTransaction,
  setDoc,
  updateDoc
} from "firebase/firestore";
import { app } from "./config";

export const db = getFirestore(app);

// Reservar Presente do ChÃ¡ de Panela usando Transaction
export const reserveBridalGift = async (giftId, guestId, guestName) => {
  const giftRef = doc(db, "bridal_shower_gifts", giftId);
  
  return await runTransaction(db, async (transaction) => {
    const giftDoc = await transaction.get(giftRef);
    if (!giftDoc.exists()) {
      throw new Error("Item nÃ£o encontrado!");
    }
    
    const data = giftDoc.data();
    if (data.status === "reserved") {
      throw new Error("Este item jÃ¡ foi reservado por outra pessoa!");
    }

    transaction.update(giftRef, {
      status: "reserved",
      reserved_by_guest_id: guestId,
      reserved_by_guest_name: guestName,
      reserved_at: new Date().toISOString()
    });
  });
};

// Confirmar Entrega do Convite (QR Code)
export const markInvitationDelivered = async (guestId) => {
  const guestRef = doc(db, "guests", guestId);
  await updateDoc(guestRef, {
    invitation_delivered: true,
    delivered_at: new Date().toISOString()
  });
};