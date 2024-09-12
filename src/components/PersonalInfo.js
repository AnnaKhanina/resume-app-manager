import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function PersonalInfo() {
  return (
    <section>
      <h3 className="title">Зв'язок</h3>
      <p>
        <a
          href="tel:+380683803214"
          target="_blank"
          rel="noopener noreferrer"
          className="personal-info-link"
        >
          <FontAwesomeIcon icon={faPhone} /> 0683803214
        </a>
      </p>
      <p>
        <a
          href="https://t.me/KhaninaAnna"
          target="_blank"
          rel="noopener noreferrer"
          className="personal-info-link"
        >
          <FontAwesomeIcon icon={faTelegram} /> @KhaninaAnna
        </a>
      </p>
      <p>
        <a
          href="mailto:khanina.anna85@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="personal-info-link"
        >
          <FontAwesomeIcon icon={faEnvelope} /> khanina.anna85@gmail.com
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/anna-khanina-906649204/"
          target="_blank"
          rel="noopener noreferrer"
          className="personal-info-link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          linkedin.com/in/annakhanina-906649204
        </a>
      </p>
      <p className="personal-info-link">
        <FontAwesomeIcon icon={faMapMarkerAlt} /> м.Хмельницький, Україна
      </p>
    </section>
  );
}

export default PersonalInfo;
