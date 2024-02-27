import "./Styles/Reviews.scss"
import starFilled from "../assets/star-filled.png"
import star from "../assets/star.png"

  export default function Reviews (){

const reviews = [
        {pfp:"src/Pages/Home/assets/pfp1.jpg",name:"Robert Froast",rating:5,text:"Bhusrat Hussain Advertising unquestionably upholds its status as the premier signage company in the UAE! Their competitive pricing and outstanding services set them apart.",},
        {pfp:"src/Pages/Home/assets/pfp2.jpg",name:"Dean Patrick",rating:5,text:"Bhusrat Hussain Advertising is undeniably the go-to signage company in the UAE, thanks to their unbeatable prices and exceptional service standards.",},
        {pfp:"src/Pages/Home/assets/pfp3.jpg",name:"Ada Kanacki",rating:5,text:"In the realm of UAE signage, Bhusrat Hussain Advertising shines bright, offering both affordability and top-notch service excellence.",},
    ]

    return <div className="bg-wrapper bg-grayscales-fixed" >
        <section id="reviews">
            <h1>{"YOUR TRUST IN US"}</h1>
            {reviews.map((review)=><Review key={review.name} {...review}/>)}
        </section>
    </div>
}

function Review({pfp,name,rating,text}) {
    let filledStars = rating
    const stars = []
    for (let index = 1; index <= 5; index++) {
        if(filledStars){
            stars.push(<Star key={index} filled={true}/>)
            filledStars--
            continue
        }
        stars.push(<Star key={index} filled={false}/>)
    }

    return (
        <article className="review">
            <img className="pfp" src={pfp} alt={`Review author: ${name}`}/>
            <div role="p" className="name">{name}</div>
            <q className="comment">{text}</q>
            <span className="rating">{stars}</span>
        </article>
    )
}

function Star({filled}){
return <img className="rating-star" src={filled?starFilled:star} alt={filled?"full star":"no star"} />
}