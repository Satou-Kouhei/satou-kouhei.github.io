function Contents () {
    return (
        <>
            <main>
                <section id='top' className='top'>
                    <article className='greeting'>
                        <h2>挨拶</h2>
                        {/* あいさつなど */}
                    </article>

                </section>

                <section id='about' className='about'>
                    <article className='about-me'>
                        <h2>自己紹介</h2>
                        {/* 自己紹介など */}
                    </article>
                </section>

                <section id='contents' className='contents'>
                    <article className='projects'>
                        <h2>制作物</h2>
                        {/* 作成した制作物が増えたら、項目を増やす */}
                    </article>
                </section>
            </main>
        </>
    )
}

export default Contents;