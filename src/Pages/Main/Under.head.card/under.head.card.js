import './under.head.card.css'

function UnderHeadCard() {
    return (
        <div>


            <main id="main">
                <h1>Card Split Hovers</h1>
                <div className="card"><img
                    src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                    alt="A City skyline at sunset"/>
                    <div className="text">
                        <h2 data-splitting="">The City</h2>
                        <p data-splitting="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                            excepturi nostrum necessitatibus doloremque? Quasi non molestias odio. Quasi non molestias
                            odio.</p>
                    </div>
                </div>
                <div className="card"><img
                    src="https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                    alt="A City skyline at sunset"/>
                    <div className="text">
                        <h2 data-splitting="">The Beach</h2>
                        <p data-splitting=""> Quasi non molestias odio. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Dignissimos excepturi nostrum necessitatibus doloremque? Quasi non
                            molestias odio.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

