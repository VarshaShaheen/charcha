import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../../api/firebase'; // Adjust the path as needed
import { signInWithPopup} from "firebase/auth";

const LoginPage = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(({ user }) => {
                console.log(user);
                // Redirect to /chat after successful sign-in
                navigate('/chat');
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error during sign-in with Google:', errorCode, errorMessage);
        });
    };
    return (
        <section className="h-screen"
                 style={{
                     backgroundImage: `url(${process.env.PUBLIC_URL}/chat/bg.webp)`,
                     backgroundRepeat: 'repeat',
                     backgroundSize: '110px 60px',
                 }}>
            <div className="flex items-center justify-center bg-white dark:bg-gray-800 py-2">
                <img
                    src={`${process.env.PUBLIC_URL}/chat/logo.png`}
                    alt="Logo"
                    style={{filter: 'brightness(0) invert(1)'}}
                    className="h-5vh w-32"
                />
            </div>
            <div className="flex flex-col items-center justify-center px-6 h-[93vh] mx-auto lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Click the button below to sign in with your Google account. We won't take any of your
                                personal information.
                            </p>
                            <button
                                type="button"
                                onClick={signInWithGoogle}
                                className="flex items-center justify-center w-full text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                                <img src={`${process.env.PUBLIC_URL}/login/google.png`} alt="Google logo"
                                     className="w-6 h-6 mr-3"/>
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
