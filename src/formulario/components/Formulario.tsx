import React, { useState } from "react";
import FormDataProps from "../interface/FormDataProps";
import Modal from "../../modal/components/Modal";

const Formulario = () => {

    // Manejo del estado para mostrar u ocultar el modal
    const [isOpenModal, setIsOpenModal] = useState(false);

    // Manejo para abrir el modal
    const handleOpenModal = () => {
        setIsOpenModal(true);
    }
    // Manejo para cerrar el modal
    const handleCloseModal = () => {
        setIsOpenModal(false);
    }

    // Manejo de los campos del formulario
    const [formData, setFormData] = useState<FormDataProps>({
        name: '',
        email: '',
        telefono: '',
        edad: '',
    })

    // Manejo para el cambio del value de los campos del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    // Evento para subir los datos del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Enviando los datos", formData);
    }

    return (
        <div className="w-full flex flex-col items-center justify-center p-24 gap-4">
            <h1 className="font-bold font-ubuntu texty-black text-2xl">
                Formulario de contacto
            </h1>
            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-4 bg-blue-100 rounded-lg shadow-xl p-8 font-bold font-ubuntu">
                <div className="w-full flex gap-2 flex-col">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="input input-sm input-bordered"/>
                </div>
                <div className="w-full flex gap-2 flex-col">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input input-sm input-bordered"/>
                </div>
                <div className="w-full flex gap-2 flex-col">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} className="input input-sm input-bordered"/>
                </div>
                <div className="w-full flex gap-2 flex-col">
                    <label htmlFor="edad">Edad:</label>
                    <input type="number" id="edad" name="edad" value={formData.edad} onChange={handleChange} className="input input-sm input-bordered"/>
                </div>
                <div>
                    <button type="submit" onClick={handleOpenModal} className="w-full bg-blue-200 hover:bg-blue-500 p-1 duration-100 transition-all rounded-xl">
                        Enviar datos
                    </button>
                    <Modal isOpen={isOpenModal} inClose={handleCloseModal}>
                        <div className="w-full max-w-96 h-full text-center">
                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold text-black text-xl">
                                    Envio de datos
                                </h1>
                                <p className="text-black text-sm">
                                    Los datos se han enviado correctamente a la API
                                </p>
                                <button onClick={handleCloseModal} className="w-full p-2 bg-red-600 hover:bg-red-800 text-black font-bold rounded-xl transition-all duration-100">
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </form>
        </div>
    )
}

export default Formulario;