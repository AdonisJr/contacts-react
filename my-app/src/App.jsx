import "./App.css";
import { useState } from "react";
import ContactModal from "./components/ContactModal";
import ContactList from "./components/ContactList";

function App() {
  const [selectedContact, setSelectedContact] = useState();
  const [isModalOpen, setModal] = useState(false);

  const handleModal = (id) => {
    setSelectedContact(id);
    setModal(!isModalOpen);
  };

  return (
    <div className="flex flex-col gap-3 px-2 py-10">
      {isModalOpen ? (
        <ContactModal handleModal={handleModal} selectedContact={selectedContact} />
      ) : (
        ""
      )}
      <div className="bg-slate-100 w-full">
        <p className="text-xl font-bold">Contacts</p>
      </div>
      <div className="">
        <button
          className="bg-teal-700 text-white py-1 px-5 rounded-md
           hover:bg-teal-800 duration-200 font-semibold"
          onClick={() => handleModal(null)}
        >
          Add
        </button>
      </div>
      <div>
        < ContactList handleModal={handleModal} />
      </div>
    </div>
  );
}

export default App;
