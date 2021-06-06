import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Validation from "./Validation";
import { contactSchema } from "./Shema";

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(contactSchema),
    });
  
    function onSubmit(data) {
      console.log(data);
      alert("Success! Your message has been sent");
      setSubmitted(true);
    }
    const intialValues = {
      firstName: "Your First Name",
      lastName: "Your Last Name",
      email: "Your Email",
      message: "Your Message",
    };
  
    return (
      <>
        <div className="backdrop-contact"></div>
        <div className="contact">
          <form onSubmit={handleSubmit(onSubmit)} className="contact-page">
            <div className="login-form">
              <div className="group">
                <label htmlFor="firstName" className="contact-label">
                  First Name *
                </label>
                <input
                  name="firstName"
                  placeholder={intialValues.firstName}
                  type="text"
                  id="firstName"
                  ref={register}
                />
                {errors.firstName && (
                  <Validation>{errors.firstName.message}</Validation>
                )}
              </div>
              <div className="group">
                <label htmlFor="firstName" className="contact-label">
                  Last Name *
                </label>
                <input
                  name="lastName"
                  placeholder={intialValues.lastName}
                  type="text"
                  id="lastName"
                  ref={register}
                />
                {errors.lastName && (
                  <Validation>{errors.lastName.message}</Validation>
                )}
              </div>
              <div className="group">
                <label htmlFor="email" className="contact-label">
                  Email *
                </label>
  
                <input
                  name="email"
                  type="text"
                  id="email"
                  ref={register}
                  placeholder={intialValues.email}
                />
  
                {errors.email && (
                  <Validation>{errors.email.message}</Validation>
                )}
              </div>
              <div className="group">
                <label htmlFor="message" className="contact-label">
                  Message *
                </label>
                <textarea
                  name="message"
                  ref={register}
                  type="text"
                  id="email"
                  placeholder={intialValues.message}
                ></textarea>
  
                {errors.message && (
                  <Validation>{errors.message.message}</Validation>
                )}
              </div>
              <div className="hr"></div>
              <div className="group">
                <input disabled={submitted} type="submit" className="button" />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  };
  
  export default Form;