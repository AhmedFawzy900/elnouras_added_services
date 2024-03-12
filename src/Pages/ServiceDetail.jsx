import Footer from "../Components/Footer";
import MyNavbar from "../Components/MyNavbar";
import webImg from "../images/web.png";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";
import img6 from "../images/6.jpeg";
import img7 from "../images/7.jpeg";
import img8 from "../images/8.jpeg";
import img9 from "../images/9.jpeg";
import { Link } from "react-router-dom";
const ServiceDetail = () => {
  const DataArray = [
    {
      img: img1,
      h5: "برمجة احترافية",
      p: "البرمجة وفقاً لأفضل لغات البرمجة تحت أيدي فريق خبير",
    },
    {
      img: img2,
      h5: "سهوله وصول العملاء",
      p: "طريقة سهلة تساعد عملاءك ليصلوا إليك بكل سهولة",
    },
    {
      img: img3,
      h5: "توجيه وإبداع",
      p: "نفهم مرادك وما تريده لتنفيذه باحترافية تساعدك في النجاح ",
    },
    {
      img: img4,
      h5: "نحن عمادك ",
      p: "نسعى دائما إلى أن نكون القوه التي يحتاجها عملاؤنا",
    },
  ];
  return (
    <div className="service-detail">
      <MyNavbar />
      <div className="header-text">
        <div className="container text-center">
          <h1>خدمات تصميم مواقع إلكترونية احترافية للشركات</h1>
          <h2>الرئيسية/ خدمات تصميم مواقع إلكترونية احترافية للشركات</h2>
        </div>
      </div>
      <div className="container">
        <div className="video-section row justify-content-between align-items-center ">
          <div className="cards col-md-5 col-sm-12">
            <div className="card-item">
              <img src={webImg} alt="" className="w-100" />
            </div>
          </div>
          <div className="info col-md-7 col-sm-12">
            <h3 className="title  text-md-right">لازم موقعك </h3>
            <h3 className="title  mb-3 text-md-right">يكون في ابهي حلة</h3>
            <p className=" mb-1 text-md-right">خطوة واحدة تفصلك عن امتلاك</p>
            <p className=" mb-4 text-md-right">موقع الكتروني احترافي ومميز</p>
            <div className=" text-md-right num_of_projects d-flex justify-content-end align-items-center">
              <div className="mx-3">
                <h3 className="title text-center">+320</h3>
                <p>مواقع تم تنفذيها</p>
              </div>
              <div className="">
                <h3 className="title text-center">+120</h3>
                <p>تصاميم مواقع</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5 advantages ">
        <h1 className="title text-center">ما يميزنا بالخدمة</h1>
        <h3 className="text-center mb-5">
          ما يجعل خدمة تصميم مواقع إلكترونية للشركات مميزة
        </h3>
        <div className="cards row">
          {DataArray.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column justify-content-center align-items-center my-3">
              <img src={item.img} className="mb-2 w-90" alt="" />
              <h4 className="title">{item.h5}</h4>
              <p className="text-center">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container adv-info my-5">
        <div className="row justify-content-between align-items-center my-5">
          <div className="col-md-4">
            <img src={img5} className="w-100 my-3" alt="" />
          </div>
          <div className="col-md-7 d-flex justify-content-center align-items-center flex-column">
            <div className="w-100">
              <h1 className="title text-right">شركة تصميم مواقع إلكترونية</h1>
            </div>
            <p className="text-right">
              إن شركة النورس رائدة في مجال التسويق الإلكتروني لذا كان من أهم
              الخدمات التي تقدمها الشركة هي خدمة تصميم مواقع إلكترونية ، لما من
              أهمية تصميم المواقع الإلكترونية من مزايا كثيرة تفيد في عملية
              التسويق وزيادة الوعي بالعلامة التجارية، ونقدم خدمة تصميم المواقع
              الإلكترونية باحترافية شديدة لأننا نعلم كم من المهم امتلاك أصحاب
              الأعمال والشركات إلى مواقع إلكترونية لعرض أنفسهم وعرض خدماتهم
              ومنتجاتهم عليها والتسويق من خلالها.
              <br />
              كما نساعدك في أمور كثيرة داخل الموقع، كي تضيف لمستك الخاصة وسحرك
              الخاص فنستقبل منك أفكارك ونعمل على تحسينها وتحويلها إلى واقع من
              خلال إنشاء موقعك، كي تبدأ في استراتيجيتك التسويقية المميزة، كما
              نقدم في : شركة النورس خدمات تسويقيه متنوعه اخري مثل
              <br />
              <li> التسويق الإلكتروني -</li>
              <li>إنشاء المتاجر الإلكترونية -</li>
              <li> تصميم المواقع الإلكترونية -</li>
              <li>خدمة كتابة المحتوى التسويقي -</li>
              هذا كله يساعدك في تسويقك لموقعك، وخصوصًا آخر خدمة لأن موقعك يجب أن
              يضم محتوى مميزًا كي يتفوق به على المنافسين وينجح في حملاته
              التسويقية كلها
            </p>
            <Link to={"#"} className="styledLink">
              {" "}
              تواصل معنا
            </Link>
          </div>
        </div>
        <div className="row justify-content-between align-items-center my-5">
          <div className="col-md-4">
            <img src={img6} className="w-100 my-3" alt="" />
          </div>
          <div className="col-md-7 d-flex justify-content-center align-items-center flex-column">
            <div className="w-100">
              <h1 className="title text-right ">
                ما هي أهمية تصميم مواقع إلكترونية
              </h1>
            </div>
            <p className="text-right">
              أول شيء يبحث عنه كل صاحب عمل هو الربح، لذا فمن أهمية امتلاك موقع
              إلكتروني هو زيادة الربح وذلك عبر استخدام الموقع كأداة ترويجية
              مميزة لخدماتك ولمنتجاتك، حيث يكون سهلًا على العملاء رؤية منتجاتك
              وخدماتك من خلال الموقع. ثم بعد ذلك تسعى لتقليل المجهود على العملاء
              .بحيث تسهل عليهم البحث عما يريدون داخل الموقع.
              <br />
              <strong>: ومن المميزات التي نقدمها أيضًا</strong>
              <br />
              قالب متوافق مع جميع الأجهزة بداية من الهاتف إلى الآي باد -
              <br />
              تصفح سريع داخل الموقع لما في ذلك من تجربة مستخدم فريدة من نوعها -
              <br />
              تصميم مُبتكر لجذب العملاء -
            </p>
            <Link to={"#"} className="styledLink">
              {" "}
              تواصل معنا
            </Link>
          </div>
        </div>
        <div className="row justify-content-between align-items-center my-5">
          <div className="col-md-4">
            <img src={img7} className="w-100 my-3" alt="" />
          </div>
          <div className="col-md-7 d-flex justify-content-center align-items-center flex-column">
            <div className="w-100">
              <h1 className="title text-right ">
                ما هي خدمة تصميم مواقع إلكترونية؟
              </h1>
            </div>
            <p className="text-right">
              لأن تصميم الموقع هي خطوة مهمة جدًا في بداية أي شركة ولديها الكثير
              من المميزات ومن الفوائد التي تتيحها للشركة وتعطي العملاء الكثير من
              الثقة للعلامة التجارية الخاصة بالشركة ولكل خدمات الشركة، فحين تنشئ
              موقعًا تضع فيه كل شيء تريده يساعد العملاء وتدخل السوق وتستطيع
              حينها المنافسة مع الخدمات المشابهة، ويمكنك عرض خدماتك عليه وشرحها
              وتوضيحها للعملاء بشكل أفضل، لذا فإنشاء موقع إلكتروني خطوة مهمة
              عليك القيام بها ونحن في النورس نساعدك في أخذها بكل سهولة كل ما
              عليك فعله هو اختيار باقتك وتواصل معنا على الفور.
              <br />
            </p>
            <Link to={"#"} className="styledLink">
              {" "}
              تواصل معنا
            </Link>
          </div>
        </div>
        <div className="row justify-content-between align-items-center my-5">
          <div className="col-md-4">
            <img src={img8} className="w-100 my-3" alt="" />
          </div>
          <div className="col-md-7 d-flex justify-content-center align-items-center flex-column">
            <div className="w-100 mb-2">
              <h1 className="title text-right ">
                ما هي مراحل تسليم تصميم الموقع الإلكتروني؟
              </h1>
            </div>
            <p className="text-right w-100 ">
              : أما عن مراحل تسليم تصميم الموقع الإلكتروني فهي تكون عبر خطوات
              بسيطة وهي
              <br />
              مراجعة الموقع ووضع القالب به واختباره -
              <br />
              متابعة دورية للموقع -
              <br />
              تقديم استشارات بخصوص الموقع في أي وقت -
              <br />
              عمل تعديلا على الموقع -
            </p>
            <Link to={"#"} className="styledLink">
              {" "}
              تواصل معنا
            </Link>
          </div>
        </div>
        <div className="row justify-content-between align-items-center my-5">
          <div className="col-md-4">
            <img src={img9} className="my-3" alt="" />
          </div>
          <div className="col-md-7 d-flex justify-content-center align-items-center flex-column">
            <div className="w-100 mb-2">
              <h1 className="title text-right ">لماذا نحن؟</h1>
            </div>
            <p className="text-right w-100 ">
              بصفتنا دارسين جيدًا للسوق السعودي واحتياجات أصحاب الأعمال باستمرار
              إلى مواقع مميزة تخدم منتجاتهم وتساعدهم في إشهار خدماتهم في السوق
              الإلكتروني فلنا خبرة كبيرة في هذا المجال، وفي مجال التسويق
              الإلكتروني ككل بخبرة تمتد أكثر من خمسة أعوام.
            </p>
            <Link to={"#"} className="styledLink">
              {" "}
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
