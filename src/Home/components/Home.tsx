import React, { useState } from "react";
import home from "../../assets/home.svg";
import Modal from "../../modal/components/Modal";

const Home = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleOpenModal = () => {
        setIsOpenModal(true);
    }

    const handleCloseModal = () => {
        setIsOpenModal(false);
    }


    return (
        <div className="w-full flex items-center mt-12">
            <main className="w-full h-full p-24">
                <section className="w-full">
                    <article className="flex">
                        <div className="w-1/2 h-96">
                            <img src={home} alt="#" className="w-full h-full p-8"/>
                        </div>
                        <div className="w-1/2 p-12 flex flex-col justify-center gap-8">
                            <div className="w-full">
                                <h1 className="text-black text-center text-3xl font-ubuntu">
                                    Titulo de la landing
                                </h1>
                            </div>
                            <div>
                                <p className="text-black font-ubuntu text-justify">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint voluptas possimus nemo ipsam consequatur neque fuga ut distinctio enim dolores ratione nostrum, quia beatae quod architecto nobis, pariatur magni corporis?
                                    Cum, eaque saepe? Omnis voluptatibus, pariatur non ut nisi, voluptatum animi delectus expedita et molestias harum reiciendis explicabo quam nostrum voluptates laboriosam similique aliquid sequi qui tenetur magnam? Asperiores, debitis.
                                </p>
                            </div>
                            <div>

                                <button onClick={handleOpenModal} className="w-full bg-blue-300 p-2 text-black font-bold rounded-xl hover:bg-blue-500 transition-all duration-100">
                                    Abrir modal
                                </button>

                                <Modal isOpen={isOpenModal} inClose={handleCloseModal}>
                                    <div className="w-full max-w-96 h-full text-center">
                                        <div className="flex flex-col gap-2">
                                            <h1 className="font-bold text-black text-xl">
                                                Titulo del modal
                                            </h1>
                                            <p className="text-black text-sm">
                                                Este es un pequeño cambio en el modal
                                                Este es otro cambio individual
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est excepturi minima maiores, autem numquam unde!
                                            </p>
                                            <button onClick={handleCloseModal} className="w-full p-2 bg-red-600 hover:bg-red-800 text-black font-bold rounded-xl transition-all duration-100">
                                                Cerrar
                                            </button>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default Home;