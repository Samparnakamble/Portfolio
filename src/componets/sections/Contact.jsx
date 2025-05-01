// import React, { useRef } from "react";
// import styled from "styled-components";
// import emailjs from "@emailjs/browser";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-contnet: center;
//   position: rlative;
//   z-index: 1;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;
// const Title = styled.div`
//   font-size: 52px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;
// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const ContactForm = styled.div`
//   width: 95%;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   background-color: rgba(17, 25, 40, 0.83);
//   border: 1px solid rgba(255, 255, 255, 0.125);
//   padding: 32px;
//   border-radius: 12px;
//   box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
//   margin-top: 28px;
//   gap: 12px;
// `;
// const ContactTitle = styled.div`
//   font-size: 28px;
//   margin-bottom: 6px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
// `;
// const ContactInput = styled.input`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary + 50};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `;
// const ContactInputMessage = styled.textarea`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary + 50};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `;
// const ContactButton = styled.input`
//   width: 100%;
//   text-decoration: none;
//   text-align: center;
//   background: hsla(271, 100%, 50%, 1);
//   padding: 13px 16px;
//   margin-top: 2px;
//   border-radius: 12px;
//   border: none;
//   color: ${({ theme }) => theme.text_primary};
//   font-size: 18px;
//   font-weight: 600;
// `;

// const Contact = () => {
//   const form = useRef();
//   const handelSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_tox7kqs",
//         "template_s2qo3st",
//         form.current,
//         "ZJtReMPvMoXlaSiIr"
//       )
//       .then(
//         (result) => {
//           alert("Message Sent");
//           form.current.result();
//         },
//         (error) => {
//           alert(error);
//         }
//       );
//     e.preventDefault();
//     // these IDs from the previous steps
//     emailjs.sendForm("service_tox7kqs", "contact_form", this).then(
//       () => {
//         console.log("SUCCESS!");
//       },
//       (error) => {
//         console.log("FAILED...", error);
//       }
//     );
//   };
//   return (
//     <Container id="Education">
//       <Wrapper>
//         <Title>Contact</Title>
//         <Desc
//           style={{
//             marginBottom: "40px",
//           }}
//         >
//           Feel free to reach out to me for any questions or opportunities!
//         </Desc>
//         <ContactForm onSubmit={handelSubmit}>
//           <ContactTitle>Email Me 🚀</ContactTitle>
//           <ContactInput placeholder="Your Email" name="from_email" />
//           <ContactInput placeholder="Your Name" name="from_name" />
//           <ContactInput placeholder="Subject" name="subject" />
//           <ContactInputMessage placeholder="Message" name="message" rows={4} />
//           <ContactButton type="submit" value="Send" />
//         </ContactForm>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 14px;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Popup = styled.div`
  position: fixed;
  background: white;
  color: black;
  padding: 20px;
  border-radius: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  text-align: center;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.from_name.trim()) newErrors.from_name = "Name is required";
    if (!formData.from_email) {
      newErrors.from_email = "Email is required";
    } else if (!emailRegex.test(formData.from_email)) {
      newErrors.from_email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (formData.message.length < 5)
      newErrors.message = "Message must be at least 5 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const payload = new FormData();
    payload.append("access_key", "382fe6ca-287b-4120-b94d-57d9eb723b13");
    payload.append("name", formData.from_name);
    payload.append("email", formData.from_email);
    payload.append("subject", formData.subject);
    payload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      setIsSubmitting(false);
      if (data.success) {
        setResult("Form submitted successfully!");
        setIsPopupVisible(true);
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setResult(""), 1000);
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setResult("Error sending message.");
      setIsSubmitting(false);
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            placeholder="Your Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
          />
          {errors.from_name && <ErrorText>{errors.from_name}</ErrorText>}
          <ContactInput
            placeholder="Your Email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
          />
          {errors.from_email && <ErrorText>{errors.from_email}</ErrorText>}
          <ContactInput
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <ErrorText>{errors.message}</ErrorText>}
          <ContactButton type="submit">
            {isSubmitting ? "Sending..." : "Send"}
          </ContactButton>
          {result && <p style={{ color: "white" }}>{result}</p>}
        </ContactForm>

        {isPopupVisible && (
          <>
            <PopupOverlay onClick={() => setIsPopupVisible(false)} />
            <Popup>
              <h3>Thank You!</h3>
              <p>Thank you for your message! I'll get back to you shortly..</p>
              <button onClick={() => setIsPopupVisible(false)}>Close</button>
            </Popup>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Contact;
