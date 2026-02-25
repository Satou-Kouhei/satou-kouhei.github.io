function AppFooter () {
    return (
        <>
            <footer className=''>
                <nav className='footer-nav flex flex-row'>
                    <ul className='flex flex-col'>
                        <li><a href="#top">TOP</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#contents">CONTENTS</a></li>
                    </ul>
                    <aside className='sns-link'>
                        <p>X：<a className='sns-link' href="https://x.com/kou_forpost">https://x.com/kou_forpost</a></p>
                        <p>Git Hub：<a className='sns-link' href="https://github.com/Satou-Kouhei">https://github.com/Satou-Kouhei</a></p>
                    </aside>
                </nav>
                <p className='copyright'>© 2026 さとうこうへい</p>
            </footer>
        </>
    )
}

export default AppFooter;