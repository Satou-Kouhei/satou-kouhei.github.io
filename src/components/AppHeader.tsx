function AppHeader () {
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
                    <button className='darkmode border rounded-l-sm bg-gray-500 hover:bg-gray-300'>ダークモード</button>
                    <button className='lightmode border rounded-r-sm bg-gray-300 hover:bg-white'>ライトモード</button>
                </aside>
            </header>
        </>
    );
}

export default AppHeader;