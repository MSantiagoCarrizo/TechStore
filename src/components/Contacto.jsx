import { FaInstagram, FaFacebook, FaWhatsapp, FaTruck, FaShieldAlt, FaHeadset } from 'react-icons/fa'

export const Contacto = () => {

    return (

        <div className="container py-5">
            <h1 className="text-center"> Contacto </h1>

            <div className="row g-4">
                <div className="col-lg-6">
                    <div className="card p-4 h-100 shadow-sm" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.01)', backdropFilter: 'blur(10px)', color: '#f8fafc', borderRadius: '20px' }}>
                        <h3>Sobre TechStore</h3>

                        <p> En TechStore ofrecemos productos tecnológicos seleccionados para brindar la mejor relación entre calidad, rendimiento y precio. </p>

                        <hr />

                        <h4>Información de envíos</h4>

                        <div className="d-flex align-items-center gap-3 mb-3">
                            <FaTruck size={24} color="#00d4ff" />
                            <span> Envíos a todo el país entre 24 y 72 horas hábiles. </span>
                        </div>

                        <div className="d-flex align-items-center gap-3 mb-3">
                            <FaShieldAlt size={24} color="#00d4ff" />
                            <span>Todos nuestros productos cuentan con garantía oficial. </span>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <FaHeadset size={24} color="#00d4ff" />
                            <span> Soporte técnico y atención personalizada. </span>
                        </div>

                        <hr />

                        <h4>Datos de contacto</h4>

                        <p><strong>📍 Dirección:</strong> Buenos Aires, Argentina</p>
                        <p><strong>📞 Teléfono:</strong> +54 11 5555-5555</p>
                        <p><strong>✉ Email:</strong> contacto@techstore.com</p>

                        <hr />

                        <h4>Redes Sociales</h4>

                        <div className="d-flex justify-content-center gap-4 fs-3">
                            <a href="#">
                                <FaInstagram color="#ffffff" />
                            </a>

                            <a href="#">
                                <FaFacebook color="#ffffff" />
                            </a>

                            <a href="#">
                                <FaWhatsapp color="#ffffff" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card shadow-sm overflow-hidden h-100" style={{ borderRadius: '20px' }}>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105088.53483672434!2d-58.38157037553769!3d-34.603738871083266!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1780094350288!5m2!1ses-419!2sar"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '500px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa TechStore"
                        ></iframe>

                    </div>

                </div>

            </div>

        </div>
    )
}
