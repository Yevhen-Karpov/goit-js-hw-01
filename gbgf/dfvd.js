import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [text, setText] = useState("");

  const handleFormSubmit = (text) => {
    setText(text);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery text={text} />
      <ToastContainer />
    </div>
  );
}

// ==============Gallery================

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import api from '../../services/apiService';
import s from './ImageGallery.module.css';

export default function ImageGallery({ text }) {
  const [cards, setCards] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!text) {
      return;
    }
    setPage(1);
    setCards([]);
    setStatus('pending');
    handleRenderPage();
    scroll.scrollToBottom();
  }, [text]);

  const handleRenderPage = async () => {
    try {
      const { hits } = await api.fetchApi(text);
      setCards([...hits]);
      setStatus('resolved');
      setPage(prevState => prevState + 1);
    } catch (e) {
      setStatus('rejected');
    }
  };

  const handleAddPage = async () => {
    try {
      const { hits } = await api.fetchApi(text, page);
      setCards([...cards, ...hits]);
      setStatus('resolved');
      setPage(prevState => prevState + 1);
    } catch (e) {
      setStatus('rejected');
    }
  };

  return (
    <>
      {status === 'idle' && (
        <p className={s.text}>Введите слово, чтобы начать поиск.</p>
      )}

      {status === 'pending' && <Loader />}

      {!cards.length && status === 'resolved' && (
        <p className={s.text}>Нет результатов поиска по данному запросу.</p>
      )}

      {cards.length !== 0 && status === 'resolved' && (
        <>
          <ul className={s.gallery}>
            {cards.map(card => (
              <ImageGalleryItem card={card} key={card.id} />
            ))}
          </ul>
          <Button onClick={handleAddPage} />
        </>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  text: PropTypes.string.isRequired,
};

// ============================== Modal   ===============================

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ src, tags, onClose }) {
  useEffect(() => {
    console.log('mount');
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      console.log('unmount');
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <img src={src} alt={tags} width={960} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};


// ====================================search========

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [text, setText] = useState('');

  const handleInputChange = e => {
    setText(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (text.trim() === '') {
      return toast.error('Поле не должно быть пустым');
    }

    onSubmit(text);
    setText('');
  };

  return (
    <header className={s.searchbar}>
      <form onSubmit={handleSubmit} className={s.form}>
        <button type="submit" className={s.button}>
          <ImSearch />
        </button>
        <input
          className={s.input}
          type="text"
          name="text"
          value={text}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
