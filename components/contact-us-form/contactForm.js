import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { FaLongArrowAltRight, FaMinus, FaPlus } from "react-icons/fa";

export default function ContactForm() {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.offer}>
      <div className={styles.offer__horizontal}>
        <div />
        <p onClick={() => setVisible(!visible)}>
          <span>Join our newsletter</span>
          <span>
            {visible ? (
              <motion.button whileTap={{ rotate: 360 }}>
                <FaMinus />
              </motion.button>
            ) : (
              <motion.button whileTap={{ rotate: 360 }}>
                <FaPlus />
              </motion.button>
            )}
          </span>
        </p>
        <div />
      </div>
      {visible && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className={styles.offer__subscribe}
        >
          <div>
            <input type="tel" placeholder="Phone" name="phone" />
            <button>
              <FaLongArrowAltRight />
            </button>
          </div>
          <div>
            <input type="email" placeholder="Email" name="email" />
            <button>
              <FaLongArrowAltRight />
            </button>
          </div>
          <p>
            By subscribing to Green Thumb, you are consenting to receive a
            varying number of marketing messages via email and SMS. Consent is
            not a condition of any purchase. Message and data rates may apply.
            Reply HELP for help or unsubscribe to opt-out. View{" "}
            <a href="/terms-of-use">Terms of Use </a>
            and <a href="/privacy-policy">Privacy Policy</a>.
          </p>
        </motion.div>
      )}
    </div>
  );
}
