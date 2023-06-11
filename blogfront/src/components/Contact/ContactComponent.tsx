import React, {useState} from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  z-index: 100;
  display: flex;
  background: linear-gradient(0deg, #000000, #2f122e);
  flex-direction: column;
  padding: 0 20%;
  position: relative;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  margin-bottom: 1rem;
  background-color: transparent;
    text-transform: uppercase;
    font-size: 1.5rem;
    border: 3px solid #fcf7f0;
    border-radius: 5px;
    background-color: transparent;
    padding: 20px 40px;
    color: #fcf7f0;
    letter-spacing: 5px;
    width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20%;
  width: 100%;
`;


const StyledButton = styled.button`
align-self: flex-end;
    text-transform: uppercase;
    font-size: 1.5rem;
    border: 3px solid #fcf7f0;
    border-radius: 5px;
    background-color: transparent;
    padding: 20px 40px;
    color: #fcf7f0;
    transition: color 0.5s, background-color 0.5s;
    
    &:hover {
        color: #321c44;
        background-color: #fcf7f0;
        }
`;

interface FormData {
    nom: string;
    email: string;
    message: string;
}

const Titre = styled.h1`
    font-family: 'Space Mono',sans-serif;
    font-size: 3rem;
    color: #fff;
    margin-top: 0;
    margin-bottom: 5rem;
    padding: 15% 0% 3% 0%;
`;

const ContactForm: React.FC = () => {
    const [form, setForm] = useState<FormData>({nom: '', email: '', message: ''});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <FormContainer>
            <Titre>Contact</Titre>
            <StyledForm onSubmit={handleSubmit}>
                <StyledDiv>
                    <StyledInput style={{marginRight: '0.5rem'}}
                        type="text"
                        name="nom"
                        placeholder="Nom"
                        value={form.nom}
                        onChange={handleInputChange}
                    />
                    <StyledInput style={{marginLeft: '0.5rem'}}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleInputChange}
                    />
                </StyledDiv>
                <StyledDiv>
                    <StyledInput style={{height: '200px'}}
                                 as="textarea"
                                 name="message"
                                 placeholder="Message"
                                 value={form.message}
                                 onChange={handleInputChange}
                    />
                </StyledDiv>
                <StyledButton type="submit">Envoyer</StyledButton>
            </StyledForm>
        </FormContainer>
    );
};

export default ContactForm;