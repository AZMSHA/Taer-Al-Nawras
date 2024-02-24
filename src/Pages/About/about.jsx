import "./about.scss"
import img1 from "./assets/imageStrip1.jpg"

export default function About () {

    return <section id="about">
        <h1>ABOUT US</h1>
        <div id="about-grid">
            <section>
                <div className="aboutImages">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                </div>
                <article>
                    <h2>Heading 1 depicting motivations of the company</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ratione ducimus fugit dolor, nemo excepturi nobis unde debitis nihil nesciunt minus doloremque! Repellendus, ab. Magni necessitatibus animi est dolorem assumenda delectus facilis pariatur, corrupti expedita ex minima, blanditiis, aspernatur sunt neque! Blanditiis facilis rerum veniam? Nemo corrupti sit possimus, deserunt, quidem veniam corporis enim totam obcaecati, fuga modi et quaerat exercitationem nihil maiores debitis quae. Similique doloremque, nobis, odit laboriosam sit, nam nostrum exercitationem eaque laudantium libero recusandae alias at facilis veniam sint assumenda. Quae quia consectetur labore pariatur ratione, doloremque, recusandae iure voluptas possimus nemo accusantium modi dolorem repellat? corrupti!</p>
                </article>
            </section>
            <section>
                <article>
                    <h2>Header 2 to show your professionalism and sell yours skills/product</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sit excepturi quaerat rem aut, expedita obcaecati iste deleniti quas sequi doloremque asperiores ipsa quibusdam minus odio ullam corrupti consectetur nostrum? Veritatis facere at officiis dolores, enim cupiditate voluptatibus ipsum iusto nobis quidem optio atque repellendus odit, tempora, expedita laudantium fuga modi maiores. Incidunt officiis voluptatum nobis voluptatibus assumenda rerum explicabo officia animi aliquam, quis, minima labore sequi quo. Ipsa porro omnis earum reiciendis, corrupti maiores inventore, quam deserunt cumque sequi ipsum. Dolorem numquam autem at dignissimos ad minus inventore unde vitae rerum quam, animi nihil placeat iure sit debitis! Suscipit!</p>
                </article>
                <div className="aboutImages">
                    <img src={img1} alt="" />
                    <img src={img1} alt="" />
                </div>
            </section>
        </div>
    </section>
}