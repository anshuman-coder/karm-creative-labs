import React from 'react'

const Header = () => {
    return (
        <header className="bg-black text-white p-6 md:p-8 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-wider">karm / कर्म</h1>
                <nav>
                    {/* Navigation links can be added here */}
                </nav>
            </div>
        </header>
    )
}

export default Header