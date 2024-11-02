import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ContactSection() {

    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [message, setMessage] = useState()


    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('El nombre es obligatorio'),
        email: Yup.string().email('El correo electrónico no es válido').required('El correo electrónico es obligatorio'),
        phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'El número de teléfono debe tener 10 dígitos')
        .required('El número de teléfono es obligatorio'),
        message: Yup.string().required('El mensaje es obligatorio'),
    })

    const handleSubmit = async (values) => {
        console.log(values)
    }


    return (
        <section class="page-section" id="contact">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <Formik
                            initialValues={{ fullName: '', email: '', phoneNumber:'', message:'' }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log('Formulario enviado', values);
                              }}
                        >
                            
                            <Form>
                                <div class="form-floating mb-3">
                                    <Field class="form-control" name="fullName" type="text" />
                                    <label for="name">Full name</label>
                                    <ErrorMessage className="invalid-feedback" name="fullName"  />
                                </div>
                                <div class="form-floating mb-3">
                                    <Field class="form-control" name="email" type="email" />
                                    <label for="email">Email address</label>
                                    <ErrorMessage class="invalid-feedback" name="email"  />
                                </div>
                                <div class="form-floating mb-3">
                                    <Field class="form-control" name="phoneNumber" type="tel" />
                                    <label for="phone">Phone number</label>
                                    <ErrorMessage class="invalid-feedback" name="phoneNumber"  />
                                </div>
                                <div class="form-floating mb-3">
                                    <Field class="form-control" as="textarea" name="message" />
                                    <label for="message">Message</label>
                                    <ErrorMessage class="invalid-feedback" name="message"  />
                                </div>
                                
                                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                                <button class="btn btn-primary btn-xl" type="submit">Send</button>
                            </Form>
                           
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactSection