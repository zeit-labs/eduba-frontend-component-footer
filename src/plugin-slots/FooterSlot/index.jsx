import React from 'react';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import Footer from '../../components/Footer';

const FooterSlot = () => {
  useEffect(() => {
    if (document.querySelector('script[src*="app.fastbots.ai"]')) return;
  
    const script = document.createElement('script');
    script.src = 'https://app.fastbots.ai/embed.js';
    script.setAttribute('data-bot-id', 'cme10ffk609i9pa1nax0rlq7l');
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <PluginSlot id="org.openedx.frontend.layout.footer.v1" idAliases={['footer_slot']}>
      <Footer />
    </PluginSlot>
  );
};

export default FooterSlot;
