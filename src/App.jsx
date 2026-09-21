import React, { useState, useEffect } from 'react';
import { getGuestIdFromUrl } from './utils/urlParams';
import { saveGuestId, getGuestId } from './utils/storage';
import { HomeView } from './views/guest/HomeView';
import { InfoView } from './views/guest/InfoView';
import { ImportantView } from './views/guest/ImportantView';
import { GiftsView } from './views/guest/GiftsView';
import { BridalShowerView } from './views/guest/BridalShowerView';
import { FloatingTabBar } from './components/common/FloatingTabBar';
import { BackButton } from './components/common/BackButton';

export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [guestId, setGuestId] = useState(null);

  // Exemplo de estado condicional
  const [showBridalShower] = useState(true);

  useEffect(() => {
    let id = getGuestIdFromUrl();
    if (id) {
      saveGuestId(id);
    } else {
      id = getGuestId();
    }
    setGuestId(id);
  }, []);

  return (
    <div className="min-h-screen pb-24 bg-[#0a192f] text-white">
      {activeTab === 'home' && <HomeView guestName={guestId} />}
      {activeTab === 'info' && <InfoView />}
      {activeTab === 'important' && <ImportantView />}
      {activeTab === 'gifts' && <GiftsView />}
      {activeTab === 'bridal' && <BridalShowerView gifts={[]} onReserveGift={() => {}} />}

      {activeTab === 'home' ? (
        <FloatingTabBar 
          activeTab={activeTab} 
          onSelectTab={(tab) => setActiveTab(tab)} 
          showBridalShower={showBridalShower} 
        />
      ) : (
        <BackButton onClick={() => setActiveTab('home')} />
      )}
    </div>
  );
}

export default App;