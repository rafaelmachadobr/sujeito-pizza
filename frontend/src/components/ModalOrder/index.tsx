import Modal from "react-modal";
import styles from "./styles.module.scss";

import { FiX } from "react-icons/fi";

import { OrdeItemProps } from "../../pages/dashboard";

import { useState, useEffect } from "react";

interface ModalOrderProps {
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrdeItemProps[];
  handleFinishOrder: (id: string) => void;
}

export function ModalOrder({
  isOpen,
  onRequestClose,
  order,
  handleFinishOrder,
}: ModalOrderProps) {
  const customStyles = {
    content: {
      top: "50%",
      bottom: "auto",
      left: "50%",
      right: "auto",
      padding: "30px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1d1d2e",
    },
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      order.reduce(
        (acc, item) => acc + Number(item.product.price) * item.amount,
        0
      )
    );
  }, [order]);

  const totalFormatted = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
        style={{ background: "transparent", border: 0 }}
      >
        <FiX size={45} color="#f34748" />
      </button>

      <div className={styles.container}>
        <h2>Detalhes do pedido</h2>
        <span className={styles.table}>
          Mesa: <strong>{order[0].order.table}</strong>
        </span>

        {order.map((item) => (
          <section key={item.id} className={styles.containerItem}>
            <span>
              {item.amount} - <strong>{item.product.name}</strong>
            </span>
            <span className={styles.description}>
              {item.product.description}
            </span>
          </section>
        ))}

        <div className={styles.total}>
          <span className={styles.text}>Total</span>
          <span className={styles.value}><strong>{totalFormatted}</strong></span>
        </div>

        <button
          className={styles.buttonOrder}
          onClick={() => handleFinishOrder(order[0].order_id)}
        >
          Concluir pedido
        </button>
      </div>
    </Modal>
  );
}
