import { useState } from "react";
import { Modal } from "./components/Modal/Modal";
import { UncontrolledForm } from "./forms/UncontrolledForm";
import { useFormStore } from './store/useFormStore';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const submissions = useFormStore((s) => s.submissions)
  
  
  return (
    <div className="max-w-2xl mx-auto p-6 min-h-screen flex flex-col gap-6 bg-gray-50">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Form Submissions</h1> 
      <button onClick={() => setModalOpen(true)}
        className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow transition"
        >Open Form</button>
        </header>
        
      {submissions.length === 0 ? (
        <p className="text-gray-500 text-center mt-12">No submissions yet. Click the button to add one.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {submissions.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <p><span className="font-semibold">Name:</span> {item.name}</p>
              <p><span className="font-semibold">Age:</span> {item.age}</p>
              <p><span className="font-semibold">Email:</span> {item.email}</p>
              <p><span className="font-semibold">Gender:</span> {item.gender}</p>
              <p className="text-green-600 text-sm mt-1">Terms accepted</p>
            </div>
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <UncontrolledForm onClose={() => setModalOpen(false)} />
      </Modal>
    </div>
  )
}

export default App;
