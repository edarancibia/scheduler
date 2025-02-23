import { useState } from "react";
import { ModalProps } from "./interfaces/ModalProps.interface";

const Modal: React.FC<ModalProps> = ({ data, onClose, onSave, onDelete }) => {
    const [formData, setFormData] = useState({
      title: data.event?.title || '',
      date: data.date || data.event?.start,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (data.type === 'create') {
        onSave({ id: Date.now(), ...formData });
      } else if (data.type === 'edit') {
        onSave({ ...data.event, ...formData });
      }
      onClose();
    };
  
    return (
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <h2>{data.type === 'create' ? 'Create Appointment' : 'Edit Appointment'}</h2>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <button type="submit">{data.type === 'create' ? 'Save' : 'Update'}</button>
          {data.type === 'edit' && (
            <button type="button" onClick={() => onDelete(data.event.id)}>
              Delete
            </button>
          )}
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    );
  };

  export default Modal;
  