import { useEffect, useState } from 'react';

function AppHeader () {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") return true;
        if (saved === "light") return false;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    },[isDark])

    return (
        <>
            <header className='border-b bg-white sticky top-0 z-10 flex justify-around items-center gap-4 pb-2'>
                <hgroup className='title-group'>
                    <h1 className='page-title justify-self-start text text-4xl'>Kou's Portfolio</h1>
                    <aside className='title-description text-sm text-left'>＜さとうこうへいのポートフォリオサイト＞</aside>
                </hgroup>
                <nav className='header-nav justify-self-center'>
                    <ul className='flex flex-row gap-2.5'>
                        <li><a className='hover:text-blue-500 hover:border-b' href="#top">挨拶</a></li>
                        <li><a className='hover:text-blue-500 hover:border-b' href="#about">自己紹介</a></li>
                        <li><a className='hover:text-blue-500 hover:border-b' href="#contents">制作物</a></li>
                    </ul>
                </nav>
                <aside className='change-theme'>
                    <button 
                        className='border p-1 border-black rounded-full hover:bg-gray-200'
                        onClick={() => setIsDark(prev => !prev)} >
                            {isDark ? "ライトモード" : "ダークモード"}
                    </button>
                </aside>
            </header>
        </>
    );
}

export default AppHeader;