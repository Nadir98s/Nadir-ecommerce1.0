import { useState } from 'react';
import './Login.css'

function LogIn() {
    console.log("LoginPage")

    const [errors, setErrors] = useState({});
    const [passwordShow, setPasswordShow] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // handleChange(e) {
    //     console.log(e);
    //     console.log(e.target.value);
    // }

    // Handle value changes in input fields
    const handleChange = (e) => {
        console.log(e);
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        console.log("onchange", formData)
    };

    // Comprehensive front-end validation
    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) newErrors.email = 'Enter a valid email address.';
        if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters.';
        // if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must accept the Terms of Service.';

        setErrors(newErrors);
        // console.log("errors", errors)
        return Object.keys(newErrors).length === 0;
    };


    async function handleSubmit(e) {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            console.log("Sending data to the backend", {
                name: formData.fname,
                email: formData.email,
                password: formData.password
            });
            await new Promise((resolve) => setTimeout(resolve, 2000));
            alert("Account created successfully");
        } catch (err) {
            setErrors({ server: "Something went wrong plz try again" })
            console.log("Something went wrong try,  servers")
        } finally {
            setIsSubmitting(false);
            console.log("finally")
        }

    }

    function handlePasswordShow() {
        setPasswordShow(!passwordShow);
        console.log("passwordShow", passwordShow);
    }
    console.log("formadata", formData);
    return (
        <>
            <div className='loginDiv'>
                <div className='loginHeading'>
                    <h1>Welcome Back</h1>
                    <p>Sign in to your Quickcart account</p>
                </div>
                <form id="register-form" onSubmit={handleSubmit}>
                    <div className='inputDiv'><label className='formLabel' htmlFor="email">Email Address</label>
                        <input type="text" required={true} id="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className='inputDiv'>
                        <div className='passwordLabel'>
                            <label className='formLabel' htmlFor="password">Password </label><a href=""> Forgot password?</a>
                        </div>
                        <div className='passwordInput'>
                            <input type={passwordShow ? "text" : "password"} required={true} id="password" name="password" placeholder="Create a strong password" value={formData.password} onChange={handleChange} />
                            <button type="button" className='PasswordShowBtn' onClick={handlePasswordShow}>
                                {passwordShow ?
                                    (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off w-4 h-4">
                                        <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
                                        <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                                        <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
                                        <path d="m2 2 20 20"></path>
                                    </svg>
                                    )
                                    :
                                    (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye w-4 h-4">
                                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>)}
                            </button>
                        </div>
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <button type="submit" className="submit-action-btn" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <span className="spinner-loader">Signing...</span>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>

                <button type='submit' className='createAccBtn' form="register-form">Login</button>

                <div className='orContWithP'>
                    <div className='orContWith'></div>
                    <span className='orContWithTxt'>or continue with</span>
                    <div className='orContWith'></div>
                </div>
                <div className="btn-secondary-p">
                    <button className="btn-secondary">🔵 Google</button>
                    <button className="btn-secondary">🍎 Apple</button>
                </div>

                <div className='haveAccount'>
                    <p>Don't have an account? <a href=""> Register</a></p>
                </div>
            </div>
        </>
    )
}

export default LogIn