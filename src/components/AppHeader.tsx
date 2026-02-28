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
            <header className='border-black sticky top-0 z-10 flex gap-4'>
                <hgroup className='title-group'>
                    <h1 className='page-title text text-3xl'>さとうこうへいのポートフォリオサイト（仮）</h1>
                    <h2 className='intoroduce'>さとう　こうへい</h2>
                    <p className='purpose'>ポートフォリオサイトです。</p>
                </hgroup>
                <nav className='header-nav'>
                    <ul className='flex flex-row gap-2.5'>
                        <li><a href="#top">TOP</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#contents">CONTENTS</a></li>
                    </ul>
                </nav>
                <aside className='change-theme'>
                    <button 
                        className='border border-black rounded-full hover:bg-gray-200'
                        onClick={() => setIsDark(prev => !prev)} >
                            {isDark ? "ライトモード" : "ダークモード"}
                    </button>
                </aside>
            </header>
        </>
    );
}

export default AppHeader;