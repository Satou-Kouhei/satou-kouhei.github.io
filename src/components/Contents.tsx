function Contents () {
    return (
        <>
            <main>
                <section id='top' className='top'>
                    <h2>挨拶</h2>
                    <article className='greeting'>
                        <p>はじめまして。さとうこうへいです。</p>
                        <p>現在、Web・フロントエンド系の職種に転職するために活動を始めました。</p>
                        <p>使用言語はJavaScript、フレームワークはReact、Next.js、SvelteKitを学習中です。</p>
                    </article>
                </section>

                <section id='about' className='about'>
                    <h2>自己紹介</h2>
                    <article className='about-me flex flex-row'>
                        <ul>
                            <li>専門学校を卒業後、就労継続支援A型事業所にて、支援スタッフとして2年半勤務。</li>
                            <li>その後、対面式のスクールにてJavaを習うが、就職支援サービスにてインフラエンジニアを勧められる。</li>
                            <li>流されるままに約1か月のCCNA講座を受講し、CCNAを取得後に派遣会社に就職。</li>
                            <li>2ヶ月ほどのコールセンター案件のあと、入場できる案件が見つからず、半年ほどで退職。</li>
                            <li>オンラインスクールにてJavaScrilitを学習し、派遣会社に就職。</li>
                            <li>富山県の現場で2年間勤め、期間満了にて退職。</li>
                        </ul>
                        <dl className='grid grid-cols-2'>
                            <dt className='border-b border-black'>年齢</dt>
                            <dd className='border-b border-black'>35</dd>
                            <dt className='border-b border-black'>出身</dt>
                            <dd className='border-b border-black'>神奈川県</dd>
                            <dt className='border-b border-black'>学歴</dt>
                            <dd className='border-b border-black'>専門学校卒（福祉）</dd>
                            <dt className='border-b border-black'>資格</dt>
                            <dd className='border-b border-black'>なし</dd>
                            <dt className='border-b border-black'>学習経験</dt>
                            <dd className='border-b border-black'>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Java</li>
                                    <li>Spring</li>
                                    <li>Android Studio</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>Vue.js</li>
                                    <li>Nuxt.js</li>
                                    <li>SvelteKit</li>
                                </ul>
                            </dd>
                            <dt className='border-b border-black'>実務経験</dt>
                            <dd className='border-b border-black'>
                                <ul>
                                    <li>Google App Script(GAS)にて、メール下書きツールを作成。（実用には至らず）</li>
                                    <li>VBAにて、複数ファイルを横断する集計作業の一部を自動化。</li>
                                </ul>
                            </dd>
                        </dl>
                    </article>
                </section>

                <section id='contents' className='contents'>
                    <h2>制作物</h2>
                    <article className='projects flex flex-col gap-3 container border box-border p-1 bg-linear-to-l from-sky-300 to-violet-300'>
                        {/* ロゴを作成したら bg-linear をはずす */}
                        <img src="" alt="ロゴ未作成" className='site-logo box size-20' />
                        <p className='project-name'>ポートフォリオサイト</p>
                        <ul className='use-stack flex flex-row gap-2'>
                            <li>HTML</li>
                            <li>CSS（Tailwindcss）</li>
                            <li>JavaScript / TypeScript</li>
                            <li>Node.js</li>
                        </ul>
                        <aside>
                            <h3>こだわりポイント</h3>
                            <p>スクレイピングに興味があり、眺めていたサイトのソースを開いたところ、
                                7重くらいのdivタグのネストの中に内容がたったの1行というのを見たことがあります。</p>
                            <p>そこで、divタグの多用に疑問を持ったことから、このページではツールが自動で生成するもの以外のdivタグを使用していません。</p>
                        </aside>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Contents;