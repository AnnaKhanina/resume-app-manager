import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

function PersonalInfo() {
  return (
    <div>
      <p className="header-contact">
        <a
          href="tel:+380683803214"
          target="_blank"
          rel="noopener noreferrer"
          className="personal-info-link"
        >
          <FontAwesomeIcon icon={faPhone} /> 0683803214
        </a>
      </p>
      <p className="header-contact">
        <a
          href="https://t.me/KhaninaAnna"
          target="_blank"
          rel="noopener noreferrer"
          className="personal-info-link"
        >
          <FontAwesomeIcon icon={faTelegram} /> @KhaninaAnna
        </a>
      </p>
      <p className="header-contact">
        <a
          href="mailto:khanina.anna85@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="personal-info-link"
        >
          <FontAwesomeIcon icon={faEnvelope} /> khanina.anna85@gmail.com
        </a>
      </p>
      <p className="header-contact">
        <div className="personal-info-link">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> м.Хмельницький, Україна
        </div>
      </p>
    </div>
  );
}

export default PersonalInfo;
