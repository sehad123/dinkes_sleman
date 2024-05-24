import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

const Galeri = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const modalTimeout = setTimeout(() => {
      setShowModal(true); // Setelah 3 detik, tampilkan modal
    }, 500);

    const redirectTimeout = setTimeout(() => {
      window.location.href = "/"; // Setelah 6 detik, kembali ke halaman route "/"
    }, 2000);

    // Membersihkan timeout saat komponen di-unmount
    return () => {
      clearTimeout(modalTimeout);
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div>
      {showModal && (
        <Modal isOpen={true} style={customStyles}>
          <p className="text-center text-red-500 text-xl">Maaf, halaman galeri tidak tersedia</p>
        </Modal>
      )}
    </div>
  );
};

export default Galeri;
