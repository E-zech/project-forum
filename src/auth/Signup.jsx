import { useContext, useState } from 'react';
import { GeneralContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { signupStructure, signupSchema } from "../utils";
import { handleChange } from "../validation/formValidation";
import './Signup.css';

export default function Signup() {
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        imgSrc: '',
        imgAlt: ''
    });

    const { user, setUser } = useContext(GeneralContext);

    const handleSignupChange = (ev) => {
        handleChange(ev, formData, setFormData, errors, setErrors, signupSchema, setIsFormValid);
    };



    return (

        <>
            <header className='mainHeader'>
                <h1>Signup</h1>
            </header>

            <section className="signup-container">
                <form className="signup-form">
                    {signupStructure.map((field) => (
                        <label key={field.name} className="signup-label">
                            {field.label}
                            <input
                                className="signup-input"
                                type={field.type}
                                name={field.name}
                                placeholder={field.required ? `Please Enter ${field.label}` : 'Optional'}
                                required={field.required}
                                onChange={handleSignupChange}
                                value={formData[field.name]}
                            />
                            {errors[field.name] && (
                                <span className="signup-error">{errors[field.name]}</span>
                            )}
                        </label>
                    ))}
                    <button className="signup-button" disabled={!isFormValid}>
                        Signup
                    </button>
                </form>

                <button className="signup-login" onClick={() => navigate('/login')}>
                    Already have an account? Login
                </button>
            </section>
        </>

    );
}