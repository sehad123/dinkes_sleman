import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    comment: "",
    author: "",
    email: "",
    url: "",
    consent: false,
  });

  const [showModal, setShowModal] = useState(false); // State untuk mengontrol tampilan modal

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi input
    if (formData.comment.trim() === "" || formData.author.trim() === "" || formData.email.trim() === "") {
      toast.warning("Mohon isi formulirnya dengan lengkap");
      return;
    }

    // Tampilkan modal konfirmasi sebelum submit
    setShowModal(true);
  };

  const handleConfirmSubmit = () => {
    // Lakukan sesuatu dengan data form jika validasi berhasil
    // Misalnya, kirim data ke server

    // Tampilkan toast sukses
    toast.success("Komentar berhasil diposting");

    // Reset form setelah submit
    setFormData({
      comment: "",
      author: "",
      email: "",
      url: "",
      consent: false,
    });

    // Sembunyikan modal setelah submit
    setShowModal(false);
  };

  return (
    <div className="dark:pb-10 mb-10 mx-5">
      {/* Modal Konfirmasi */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Konfirmasi
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Apakah Anda yakin ingin mengirim komentar?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleConfirmSubmit}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Ya
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <div data-aos="zoom-in" id="respond" className="container">
        <h3 id="reply-title" className="mb-4 font-bold">
          Komentar{" "}
          <small>
            <a rel="nofollow" id="cancel-comment-reply-link" href="/slhs-tpp/#respond" style={{ display: "none" }}>
              Cancel reply
            </a>
          </small>
        </h3>
        <form onSubmit={handleSubmit} id="commentform" className="comment-form" noValidate>
          <p className="mb-4">
            <span id="email-notes">Berikan Komentar anda untuk website ini.</span>{" "}
            <span className="required-field-message">
              <span className="required text-red-800">*</span>
            </span>
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-3  gap-4">
            <div className="col-span-3 comment-form-comment">
              <label htmlFor="comment">
                Comment <span className="required">*</span>
              </label>{" "}
              <textarea id="comment" name="comment" cols="45" rows="8" maxLength="65525" value={formData.comment} onChange={handleChange} required className="w-full border rounded-lg border-black p-2"></textarea>
            </div>
            <div className="">
              <label htmlFor="author">
                Name <span className="required">*</span>
              </label>{" "}
              <input id="author" name="author" type="text" value={formData.author} onChange={handleChange} size="30" maxLength="245" autoComplete="name" required className="w-full border-black  border rounded-md p-2" />
            </div>
            <div className="comment-form-email">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                size="30"
                maxLength="100"
                aria-describedby="email-notes"
                autoComplete="email"
                required
                className="w-full border rounded-md p-2 border-black "
              />
            </div>
            <div className="comment-form-url">
              <label htmlFor="url">Website</label> <input id="url" name="url" type="url" value={formData.url} onChange={handleChange} size="30" maxLength="200" autoComplete="url" className="w-full border rounded-md p-2 border-black " />
            </div>
          </div>
          <div className="my-4">
            <input id="wp-comment-cookies-consent" name="consent" type="checkbox" checked={formData.consent} onChange={handleChange} className="mr-2" />{" "}
            <label>Save my name, email, and website in this browser for the next time I comment.</label>
          </div>
          <p className="form-submit">
            <button type="submit" id="submit" className="submit bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600">
              Kirim Komentar
            </button>
            <input type="hidden" name="comment_post_ID" value="2190" id="comment_post_ID" />
            <input type="hidden" name="comment_parent" id="comment_parent" value="0" />
          </p>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Form;
