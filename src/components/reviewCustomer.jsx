import "../styles/reviews.css";
import cst from "../assets/images/cst.jpg";
import cst1 from "../assets/images/cst 1.jpg";
import cst2 from "../assets/images/cst 2.jpg";
import cst3 from "../assets/images/cst 3.jpg";
import cst4 from "../assets/images/cst 4.jpg";
import cst5 from "../assets/images/cst 5.jpg";
import Review from "./reviewContainer";

//customer avatars and their reviews
const avatars = [cst, cst1, cst2, cst3, cst4, cst5];
const review = [
  {
    id: 1,
    name: "Stephen",
    country: "India",
    review:
      "I recently had the pleasure of using this service and I must say, it exceeded my expectations. The customer support team was responsive and friendly. The overall experience felt smooth and professional. I especially liked the clean and intuitive design. I would definitely recommend it to others without hesitation.",
  },
  {
    id: 2,
    name: "John",
    country: "USA",
    review:
      "This platform helped me organize my tasks more efficiently. I used to struggle with staying on top of everything. The features offered are practical and well thought-out. The interface is user-friendly, even for beginners. Kudos to the team for building something so helpful!",
  },
  {
    id: 3,
    name: "Doe",
    country: "UK",
    review:
      "At first, I was skeptical about trying a new system, but I'm glad I gave it a shot. Everything from sign-up to execution was seamless. The performance is top-notch and never laggy. Their frequent updates show real dedication. It's a reliable tool for daily use.",
  },
  {
    id: 4,
    name: "Jennifer",
    country: "Canada",
    review:
      "I've been using this app for several weeks and it has improved my workflow greatly. I love how it syncs perfectly across all my devices. The layout is both modern and easy to navigate. I've also noticed a significant boost in my productivity. It’s become an essential part of my routine.",
  },
  {
    id: 5,
    name: "Advani",
    country: "Japan",
    review:
      "Finding tools that are efficient and aesthetically pleasing is rare, but this app nailed it. It combines functionality with a clean design perfectly. Support was very helpful when I had queries. Their tutorials made onboarding very easy. It's definitely worth every minute spent on it.",
  },
  {
    id: 6,
    name: "Adani",
    country: "India",
    review:
      "I was recommended this platform by a colleague and I’m really impressed. It has simplified a lot of my daily tasks. The interface is intuitive and fast, which saves me a lot of time. I appreciate the attention to detail in the UX. Great job to the developers behind this.",
  },
];

const ReviewCustomer = () => {
  return (
    // section for customer review
    <section className="customer-section">
      {/* Subtitle */}
      <div className="subtitle-line-wrapper">
        <p className="cust-subtitle">
          Customer Review Are a valuable source
          <br />
          of information for both customer and businesses
        </p>
        <div className="horizontal-line"></div>
      </div>
      {/* heading */}
      <div className="cust-container">
        <div className="cust-left">
          <div className="cust-titles">
            <h1>
              <span className="gray">Customer</span> Voices
            </h1>
            <h1>
              <span className="white">Hear What </span> They Say
              <span className="dot">.</span>
            </h1>
          </div>
        </div>
      </div>
      {/* reviews Components */}
      <Review avatars={avatars} review={review} />
    </section>
  );
};

export default ReviewCustomer;
