import { Link } from "react-router-dom";
import MyNavbar from "../Components/MyNavbar";
import cardImg from "../images/cardImg.jpg";
import business from "../images/business.png";
import market from "../images/marcket.png";
import feed from "../images/feed.png";
import web from "../images/web.png";
import uiux from "../images/uiux.png";
import seo from "../images/SEO-pana.png";
import persona from "../images/psersona.png";
import mobile from "../images/mobile.png";
import montag from "../images/montag.png";
import fesability from "../images/feasiabilty.png";
import businessPlan from "../images/Business-Plan-bro.png";
import analysis from "../images/analysis.png"
import Footer from "../Components/Footer";
export default function OurServices() {
    // array for cards data contain h1 content and img link
    const cardsData = [
        {
            h1: "UI/UX تصميم تجربة المستخدم ",
            img: uiux
        },{
            h1: "IOS تصميم تطبيقات الاندرويد وال ",
            img: mobile
        },{
            h1: "تصميم المواقع الالكترونيه ",
            img: web
        },{
            h1: "تصميم هويه كامله",
            img: persona
        },{
            h1: "SEO تحسين محركات البحث",   
            img: seo
        },{
            h1:"تسويق وادارة المنصات",
            img:businessPlan
        },{
            h1:"دراسة جدوي",
            img:fesability
        },{
            h1:"الاستشارات",
            img:feed
        },{
            h1:"مونتاج وموشن جرافيك ",
            img:montag
        },{
            h1:"تطوير الاعمال",
            img:business
        },{
            h1:"دراسة السوق",
            img:market
        },{
            h1:"تحليل البيانات",
            img:analysis
        }
    ]
  return (
    <div className="services-page">
      <MyNavbar />
      <div className="our-services my-5">
        <div className="text">
          <h1 className="title">الخدمات</h1>
          <div className="container d-flex justify-content-center align-items-center flex-column">
            <p>
              ,خلال سنوات خبرتنا التي تزيد عن عشر سنوات في تقديم الخدمات
              الالكترونيه والرقميه تعلمنا انع علي الرغم من ان لكل قناه تسويقيه
              مجموعه من المزايا الخاصه بها, الا انها تعمل بشكل افضل عندما تقترن
              استراتيجيا بقنوات اخري
            </p>
            <p>
              ولهذا السبب نقدم استراتيجيات الخدمه المتكامله لكل عميل من عملائنا
              ونستخدم مجموعه من القنوات التسويقيه ,الاكترونيه كما اننا نواكب
              التطور في عالم التسويق الالكتروني لوضع عملينا في مكانه ملحوظه
              ومستحقه بين منافسيه
            </p>
          </div>
        </div>
      </div>
      <div className="mb-5 d-flex justify-content-center flex-wrap align-items-center">
        <Link to="#" className="contact">
          تواصل معنا
        </Link>
        <Link target="_blank" to="https://drive.google.com/file/d/1yRmwQ5N3wPS2ZvNT5NyGSGg25NRQSOrb/view?usp=sharing" className="our-work">
          سابقة اعمالنا
        </Link>
      </div>
      <div className="cards d-flex justify-content-center align-items-center flex-column container ">
        <h1 className="title">خدمات النورس</h1>
        <p>نقدم استراتيجيات الخدمة المتكامله لكل عميل من عملائنا</p>
        <div className="row justify-content-evenly">
          {cardsData.map((card, index) => (   
            <div className="card-item  col-lg-3 col-md-6 col-sm-12">
                <img src={card.img} className="w-100" alt="cardImg" />
                <div className="card-content">
                    <h1 className="title">{card.h1}</h1>
                    <p>مهمتنا هي توفير حلول تكنولوجيه متقدمه ومبتكره تلبي احتياجات عملائنا وتسهم في تحقيق اهدافهم</p>
                    <Link to={"/serviceDetail"} className="styledLink">عرض الخدمه</Link>
                </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
