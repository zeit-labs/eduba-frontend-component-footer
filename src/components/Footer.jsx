import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform';
import { AppContext } from '@edx/frontend-platform/react';

import messages from './Footer.messages';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_WHITE_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.externalLinkClickHandler = this.externalLinkClickHandler.bind(this);
  }

  externalLinkClickHandler(event) {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    sendTrackEvent(eventName, properties);
  }

  render() {
    const {
      logo,
      intl,
    } = this.props;
    const { config } = this.context;

    return (
      <footer
        role="contentinfo"
        className="footer"
      >
        <div className="container container-footer">
          <div className="container-col">
            <div className="footer-logo">
              <a
                href={config.LMS_BASE_URL}
                aria-label={intl.formatMessage(messages['footer.logo.ariaLabel'])}
              >
                <img
                  style={{ maxHeight: 45 }}
                  src={logo || config.LOGO_WHITE_URL}
                  alt={intl.formatMessage(messages['footer.logo.altText'])}
                />
              </a>
            </div>
          </div>
          <div className="container-col">
            <h4 className="footer-title">معلومات الاتصال</h4>
            <ul className="footer-list">
              <li>
                شارع صلاح الدين الأيوبي
                بغداد
              </li>
              <li>
                +1125156363
              </li>
            </ul>
          </div>
          <div className="container-col">
            <h4 className="footer-title">عن eduba</h4>
            <ul className="footer-list">
              <li className="hidden">الفريق المنفذ</li>
              <li className="hidden">الكادر التعليمي</li>
              <li><a href="https://eduba.mohesr.gov.iq/privacy">سياسة الخصوصية</a></li>
            </ul>

          </div>
          <div className="container-col">
            <h4 className="footer-title">روابط مهمة</h4>
            <ul className="footer-list">
              <li><a href="https://apps.eduba.mohesr.gov.iq/learner-dashboard/">الصفحة الرئيسية</a></li>
              <li><a href="https://eduba.mohesr.gov.iq/faq">الأسئلة أكثر شيوعا</a></li>
              <li><a href="https://www.eduba.mohesr.gov.iq/ar/all-courses">قائمة البرامج</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-divider-wrapper">
          <div className="footer-divider" />
        </div>
        <div className="footer-copyright">
          Copyright 2025. Eduba For Learning and Development
        </div>

      </footer>
    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: [],
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
