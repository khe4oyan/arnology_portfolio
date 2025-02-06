// libs
import { useState } from 'react';

// components
import Modal from '../../components/Modal/Modal';

// styles
import classes from './styles.module.css';

export default function ContactPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [message, setMessage] = useState("");

  const submitButton = () => {
    // check name
    const trimmedName = name.trim();
    if (trimmedName.length < 3) {
      console.log("invalid Name");
      return;
    }

    // check gmail
    const trimmedGmail = gmail.trim();
    if (!/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(trimmedGmail)) {
      console.log("invalid gmail");
      return;
    }

    // check message
    const trimmedMsg = message.trim();
    if (trimmedMsg === "") {
      console.log("invalid message");
      return;
    }

    // server response simulation
    setName("");
    setGmail("");
    setMessage("");
    setIsOpenModal(true);
  };

  return (
    <div className={classes.root}>
      <div className={`container ${classes.container}`}>
        <h2 className={classes.headerText}>Contact me</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your name' />
        <input value={gmail} onChange={(e) => setGmail(e.target.value)} type="text" placeholder='Your gmail' />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Your message' rows={7}/>

        <button className={classes.sendButton} onClick={submitButton}>Send</button>
      </div>

      {
        isOpenModal &&
        <Modal closeHandle={() => {setIsOpenModal(false)}}>
          <h2>Thanks for message</h2>
          <p>Your message is send</p>
        </Modal>
      }
    </div>
  )
}