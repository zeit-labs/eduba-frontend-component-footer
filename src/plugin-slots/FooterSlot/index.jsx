import React from 'react';
import { Helmet } from 'react-helmet';
import { PluginSlot } from '@openedx/frontend-plugin-framework';
import Footer from '../../components/Footer';

const FooterSlot = () => (
  <PluginSlot id="org.openedx.frontend.layout.footer.v1" idAliases={['footer_slot']}>
    <Footer />
    <Helmet>
    <script
        defer
        src="https://app.fastbots.ai/embed.js"
        data-bot-id="cme10ffk609i9pa1nax0rlq7l"
        data-language="ar"
    ></script>
    </Helmet>

  </PluginSlot>
);

export default FooterSlot;
