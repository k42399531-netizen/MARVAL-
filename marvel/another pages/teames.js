// database for pages content
const pagesInfo = {
    "Avengers": {
        title: "المنتقمون",
        description: `بدأت الرحلة بتجمع ستة أبطال خارقين بمبادرة من منظمة "شيلد" لصد غزو الفضائيين بقيادة "لوكي" لمدينة نيويورك.

تطور الفريق لمواجهة تهديدات أكثر تعقيداً، أبرزها الذكاء الاصطناعي "ألترون" الذي كاد أن ينهي الوجود البشري.

واجه الفريق اختباراً قاسياً أدى لانقسامه داخلياً في "الحرب الأهلية"، مما تسبب في ضعف دفاعات الأرض لاحقاً.

بلغت الملحمة ذروتها عند مواجهة "ثانوس" الذي نجح في محو نصف الكون، مما فرض على الأبطال هزيمة تاريخية.

انتهت القصة بتضحية "طوني ستارك" الأسطورية لاستعادة الجميع، مما أكد أن قوة المنتقمين الحقيقية تكمن في اتحادهم وتضحياتهم.`,
        image: "images/avenger.jfif",
        list: [
            {name:"آيرون مان", text:"هو العقل المدبر والممول المالي للفريق.", img:"images/iron man.jpg", link:"https://w.cimalight.co/watch.php?vid=89366c255"},
            {name:"كابتن أمريكا", text:"قوة بدنية معززة بسيروم، ودرع لا ينكسر من الفايبرانيوم.", img:"images/captain amerca.jfif", link:"https://w.cimalight.co/watch.php?vid=010bd002c"},
            {name:"ثور", text:"التحكم في الرعد والبرق، وقوة إلهية جبارة (بالمطرقة ميولنير).", img:"images/thor.jpg", link:"https://w.cimalight.co/watch.php?vid=ffbc8610f"},
            {name:"هالك", text:"قوة عضلية غير محدودة تزداد مع الغضب، وتحمل لا نهائي.", img:"images/halk.jfif", link:"https://www.youtube.com/watch?v=JxHKbhc6x-Y"},
            {name:"الأرملة السوداء", text:"خبيرة في فنون القتال، التجسس، والأسلحة المتطورة.", img:"images/natasha.jfif", link:"https://tye.ahwaktv.net/watch.php?vid=03a70c048"},
            {name:"هوك آي", text:"دقة تصويب خرافية بالقوس والسهم، وخبير تكتيكي.", img:"images/Hakeye.webp", link:"https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-hawkeye-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"}
        ]
    },
    "Fantastic Four": {
        title: "الاربعة المذهلون",
        description: `الفريق وأصله: هم مجموعة من العلماء اكتسبوا قوى خارقة فريدة بعد تعرضهم لأشعة كونية غامضة أثناء مهمة استكشافية في الفضاء.

القائد والقدرات: يتكون الفريق من "ريد ريتشاردز" العبقري ذو الجسد المرن، و"سوزان ستورم" التي تمتلك القدرة على الاختفاء وإنشاء حقول الطاقة.

بقية الأعضاء: يضم الفريق أيضاً "جوني ستورم" الذي يتحكم في النيران والطيران، و"بين جريم" الملقب بـ "الشيء" ذو الجسد الصخري والقوة البدنية الهائلة.

المهمة والهدف: يكرس الفريق حياته لحماية كوكب الأرض من التهديدات الكونية المحدقة والمخاطر العلمية المتقدمة التي تواجه البشرية.

التاريخ السينمائي: بدأت رحلتهم السينمائية بفيلم عام 2005، ومرت بعدة إصدارات حتى انضمامهم الرسمي القادم لعالم مارفل السينمائي في عام 2025.`,
        image: "images/fantastic four.jpg",
        list: [
            {name:"ريد ريتشاردز (Mr. Fantastic)",text:"يمتلك جسداً مرناً للغاية قابلاً للتمدد والتشكيل بأي صورة.",img:"images/MR.fantastic.jfif",link:"https://v5.shahidmosalsalat.business/play.php?vid=9Ebd78392"},
            {name:"سوزان ستورم (Invisible Woman):",text:"متلك القدرة على الاختفاء تماماً وإنشاء حقول طاقة دفاعية قوية لحماية الفريق.",img:"images/(Invisible Woman).jfif",link:"https://v5.shahidmosalsalat.business/play.php?vid=40E3d9cef"},
            {name:"جوني ستورم (Human Torch):",text:"يمكنه تحويل جسده بالكامل إلى نيران مشتعلة، كما يمتلك قدرة فائقة على الطيران.",img:"images/Human Torch.jpg",link:"https://v5.shahidmosalsalat.business/play.php?vid=40E3d9cef"},
            {name:"بين جريم (The Thing):",text:"هو الرجل الذي يمتلك القدرة على التحكم في الحياة الأخرى، وهو أيضاً قوة عضلية كبيرة.",img:"images/the thing.jpg",link:"https://v5.shahidmosalsalat.business/watch.php?vid=146Faef60"}
        ]
    },
    "Defernce": {
        title: "المدافعون",
        description: `مفهوم الفريق: هم "أبطال الشوارع" في نيويورك، اجتمعوا كفريق غير رسمي لحماية أحيائهم من التهديدات التي لا يراها "المنتقمون" (Avengers).

الأعضاء والقوة: يتكون الفريق من ديرديفيل، جيسيكا جونز، لوك كيج، وآيرون فيست، حيث يمزجون بين القوة البدنية الخارقة والذكاء التحقيقي والفنون القتالية.

العدو المشترك: توحد الأبطال الأربعة لمواجهة منظمة "اليد" (The Hand) الإجرامية التي كانت تهدف لتدمير مدينة نيويورك من أجل الحصول على سر الخلود.

الطابع الدرامي: يتميز المسلسل بنبرة واقعية وأكثر سوداوية من أفلام مارفل السينمائية، حيث يسلط الضوء على الصراعات النفسية والماضي المؤلم لكل بطل.`,
        image: "images/defernce.jfif",
        list: [
            {name:"ديرديفيل (Daredevil) - مات ميردوك",text:"محامٍ ضرير في النهار ومحارب للجريمة في الليل بفضل حواسه الخارقة التي تعوض فقدان بصره. يُلقب برجل بلا خوف، ويحمي منطقة  في نيويورك.",img:"images/Daredevil.webp",link:"https://w10.mycima.cc/watch.php?vid=25a893336"},
            {name:"جيسيكا جونز (Jessica Jones):",text:"محققة خاصة تمتلك قوة جسدية هائلة وقدرة محدودة على الطيران. تحاول دائماً الهروب من ماضيها المظلم وتعتمد على ذكائها في حل القضايا المعقدة.",img:"images/Jessica Jones.jfif",link:"https://dramacafe-tv.website/watch.php?vid=7b8d9b5e8"},
            {name:"لوك كيج (Luke Cage)",text:"برلموالمدافهع عن حقوق الضعفاء فيه.",img:"images/like.jfif",link:"https://w.cimalight.co/watch.php?vid=010bd002c"},
            {name:"آيرون فيست (Iron Fist) - داني راند",text:"ملياردير وخبير في الفنون القتالية، يمتلك قوة  الأسطورية التي تسمح له بتركيز طاقته في يده. كلف نفسه بمهمة محاربة منظمة   الإجرامية.",img:"images/ironfast.jpg",link:"https://w.cimalight.co/watch.php?vid=010bd002c"},
            {name:"المعاقب",text:"هو فرانك كاسل، جندي سابق في قوات النخبة بالبحرية الأمريكية (Marine). بدأت قصته عندما شهد مقتل عائلته (زوجته وأطفاله) في تبادل إطلاق نار بين عصابات في نيويورك. هذه المأساة حولته من جندي نظامي إلى .",img:"images/puncher.jfif",link:"https://topcinema.rip/%D9%85%D8%B3%D9%84%D8%B3%D9%84-the-punisher-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9/"}
        ]
    },
    "X_man": {
        title: "رجال اكس",
        description: `مفهوم الفريق: هم مجموعة من "المتحولين" (Mutants) الذين ولدوا بقدرات جينية خارقة، ويسعون للتعايش السلمي بين البشر والمتحولين تحت قيادة البروفيسور "إكس".

الصراع الأساسي: تدور قصتهم حول محاربة التمييز وحماية العالم الذي يخافهم، مع مواجهة جماعات متحولة متطرفة بقيادة "ماجنيتو" الذي يرى البشر كأعداء.

أبرز الأعضاء: يضم الفريق شخصيات أيقونية مثل "وولفرين" بقدرات الشفاء المخيفة، و"ستورم" المتحكمة في الطقس، و"سايكلوبس" الذي يطلق أشعة الليزر من عينيه.

التسلسل الزمني: تتميز أفلامهم بتعقيد "التسلسل المنطقي" حيث تشمل خطوطاً زمنية مختلفة (ماضٍ وحاضر)، وهو ما جسدته أنت في قاعدة بياناتك بوضع أفلام مثل "First Class" و"Days of Future Past".`,
        image: "images/X_man.jfif",
        list: [
            {name:"وولفرين",text:"لشخصية الأشهر في السلسلة. يمتلك مخالب حادة من معدن  وقدرة شفاء خارقة تجعله لا يشيخ ومقاوماً للإصابات. هو محارب وحيد بطبعه لكنه القلب النابض للفريق.",img:"images/walvren.jfif",link:"https://v5.shahidmosalsalat.business/watch.php?vid=7Af88d68d"},
            {name:"البروفيسور إكس",text:"شارلز زافيير، عبقري مشلول الحركة يمتلك أقوى قدرات تخاطر ذهني على الأرض. هو مؤسس المدرسة ومنظم الفريق، ويحلم بعالم يعيش فيه البشر والمتحولون بسلام.",img:"images/prof X.jfif",link:"https://w7.my-cima.net/watch.php?vid=b36f86aca"},
            {name:"ماجنيتو (Magneto)",text:"إريك لينشير، الناجي من الهولوكوست والقادر على التحكم في المعادن. هو الصديق اللدود لتشارلز، لكنه يرى أن البشر سيضطهدون المتحولين دائماً، لذا يفضل المواجهة والقوة.",img:"images/Magneto.jfif",link:"https://w7.my-cima.net/watch.php?vid=b36f86aca"},
            {name:"جين جراي",text:"تُصنف كواحدة من أقوى المتحولين من  (Omega Level Mutant).",img:"images/jray.jfif",link:"https://w7.my-cima.net/watch.php?vid=b36f86aca"},
            {name:"ستورم (Storm):",text:"أورورو منرو، تمتلك القدرة على التحكم في الطقس بالكامل (البرق، العواصف، والرياح). تُعتبر من أقوى قادة الفريق الميدانيين.",img:"images/storm.webp",link:"https://w7.my-cima.net/watch.php?vid=b36f86aca"}
        ]
    }
};

function renderPage() {
    const pageTitle = document.title;
    const data = pagesInfo[pageTitle];

    if (!data) return; // Exit if no data for current page

    // Select or create the main container
    // We will assume the body contains a script tag and we want to prepend the content or use a root div if it exists
    let root = document.getElementById('root');
    if (!root) {
        // If no root, creating one to ensure full control
        root = document.createElement('div');
        root.id = 'root';
        document.body.prepend(root);
    }

    // Build the HTML
    const htmlContent = `
        <div class="main">
            <h2>${data.title}</h2>
            <p>${data.description.replace(/\n/g, '<br>')}</p>
            <img src="${data.image}" alt="${data.title}">
        </div>
        <div id="show">
            ${data.list.map(film => `
                <div class="hero-card">
                    <div class="img-container">
                        <img src="${film.img}" alt="${film.name}">
                        <div class="hero-info">
                            <h3>${film.name}</h3>
                            <p>${film.text}</p>
                            <a href="${film.link}" class="watch-btn" target="_blank">شاهد الآن</a>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    root.innerHTML = htmlContent;
}

// Run the render function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderPage);
