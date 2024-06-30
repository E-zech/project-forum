import { useContext, useState } from 'react';
import { GeneralContext } from '../App';
import { loginStructure, loginSchema } from "../utils";
import { useNavigate } from 'react-router-dom';
import { handleChange } from '../validation/formValidation';
import './Login.css';

export default function Login() {
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { user, setUser, userRoleType, setUserRoleType } = useContext(GeneralContext);

    const handleLoginChange = (ev) => {
        handleChange(ev, formData, setFormData, errors, setErrors, loginSchema, setIsFormValid)
    };

    return (
        <>
            <header className='mainHeader'>
                <h1>Login</h1>
            </header>
            <section className="login-container">
                <form className="login-form">
                    {loginStructure.map((field) => (
                        <label key={field.name} className="login-label">
                            {field.label}
                            <input
                                className="login-input"
                                type={field.type}
                                name={field.name}
                                placeholder={field.required ? `Please Enter ${field.label}` : 'Optional'}
                                required={field.required}
                                onChange={handleLoginChange}
                                value={formData[field.name]}
                            />
                            {errors[field.name] && (
                                <span className="login-error">{errors[field.name]}</span>
                            )}
                        </label>
                    ))}
                    <button className="login-button" disabled={!isFormValid}>
                        Login
                    </button>
                </form>

                <button className="login-signup" onClick={() => navigate('/signup')}>
                    Not Signed up yet? Signup
                </button>
            </section>

        </>

    );
}
