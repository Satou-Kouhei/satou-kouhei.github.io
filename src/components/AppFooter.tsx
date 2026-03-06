function AppFooter () {
    return (
        <>
            <footer className='mt-4 w-full'>
                <nav className='footer-nav flex flex-row justify-between container mx-auto'>
                    <ul className='flex flex-col pl-[20%]'>
                        <li><a className='hover:text-blue-500 hover:border-b' href="#top">挨拶</a></li>
                        <li><a className='hover:text-blue-500 hover:border-b' href="#about">自己紹介</a></li>
                        <li><a className='hover:text-blue-500 hover:border-b' href="#contents">制作物</a></li>
                    </ul>
                    <aside className='sns-link pr-[20%]'>
                        <p>X：<a className='sns-link hover:text-blue-500 hover:border-b' href="https://x.com/kou_forpost">https://x.com/kou_forpost</a></p>
                        <p>Git Hub：<a className='sns-link hover:text-blue-500 hover:border-b' href="https://github.com/Satou-Kouhei">https://github.com/Satou-Kouhei</a></p>
                    </aside>
                </nav>
                <p className='copyright'>© 2026 さとうこうへい</p>
            </footer>
        </>
    )
}

export default AppFooter;