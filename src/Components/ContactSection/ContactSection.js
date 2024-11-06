import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2'

function ContactSection() {

   const [loading, setLoading] = useState(false)


    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('A name is required.'),
        email: Yup.string().email('Email is not valid.').required('An email is required.'),
        message: Yup.string().required('A message is required.'),
    })

    const handleSubmit = async (values) => {
        setLoading(true)
        values["access_key"] = "26cb8c16-33d0-472b-abf9-fabf5c9617e9"
        console.log(values)
        const json = JSON.stringify(values);
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());
        if (res.success) {
           setLoading(false)
           Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            color: '#16A085',
            confirmButtonColor: '#16A085'
          });

        }
        else{
            setLoading(false)
        }
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
                            initialValues={{ fullName: '', email: '', message: '' }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => handleSubmit(values)}
                        >
                            <Form>
                                <div class="form-floating mb-3">
                                    <Field class="form-control" name="fullName" type="text" />
                                    <label for="name">Full name</label>
                                    <ErrorMessage name="fullName" component="div" className='error-message' ></ErrorMessage>
                                </div>
                                <div class="form-floating mb-3">
                                    <Field class="form-control" name="email" type="email" />
                                    <label for="email">Email address</label>
                                    <ErrorMessage name="email" component="div" className='error-message' />
                                </div>
                                <div class="form-floating mb-3">
                                    <Field class="form-control" as="textarea" name="message" />
                                    <label for="message">Message</label>
                                    <ErrorMessage name="message" component="div" className='error-message' />
                                </div>

                                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                                <button class="btn btn-primary btn-xl" type="submit">Send</button>
                            </Form>

                        </Formik>
                    </div>
                </div>
                {loading && <Loading />}
            </div>
        </section>
    )
}
export default ContactSection