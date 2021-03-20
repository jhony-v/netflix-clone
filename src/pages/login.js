import NetflixNameLogo from 'components/Application/NetflixNameLogo'
import BaseActionButton from 'components/Common/Buttons/BaseActionButton'
import FooterNavigation from 'components/Layouts/FooterNavigation'
import React from 'react'

export default function Login() {
    return (
        <div className="block" style={{
            background:`linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)), url("https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/77d70960-6c26-4f4f-9c1e-d3286e097100/PE-en-20210315-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,
            backgroundAttachment : "fixed"
        }}>
            <div className="px-10 pb-20" 
                >
                <header className="flex py-10">
                    <NetflixNameLogo/>
                </header>
                <form className="bg-black m-auto w-2/6 px-10 py-10  bg-opacity-40">
                    <h1 className="text-white text-3xl mb-7 font-bold">Sign In</h1>
                    <input placeholder="Email or phone number" className="bg-gray-800 rounded-lg p-4 mb-10 w-full" />
                    <input placeholder="Password" type="password" className="bg-gray-800 rounded-lg p-4 mb-10 w-full" />
                    <div className="flex my-5 w-full">
                        <BaseActionButton full>Sign in</BaseActionButton>
                    </div>
                    <span className="text-gray-500 mt-10 text-sm">This page is protected by Google reCAPTCHA to ensure you're not a bot</span>
                </form>
            </div>
            <div className="bg-black bg-opacity-60 pt-5">
                <FooterNavigation/>
            </div>
        </div>
    )
}
