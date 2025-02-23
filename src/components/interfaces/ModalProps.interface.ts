export interface ModalProps {
    data: {
      type: 'create' | 'edit'; // Tipo de operación
      date?: string; // Fecha para crear o editar
      event?: {
        id: number;
        title: string;
        start: string; // Puede ser un string o Date dependiendo de cómo lo manejes
      };
    };
    onClose: () => void; // Función para cerrar el modal
    onSave: (eventData: { id: number; title: string; date: string }) => void; // Función para guardar o actualizar
    onDelete?: (id: number) => void; // Función para eliminar (opcional)
  }
  