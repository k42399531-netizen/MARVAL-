// data
const films = [
    {title: "كابتن أمريكا: المنتقم الأول", link: "https://w.cimalight.co/watch.php?vid=7eab34ac5", categry: "ك"},
    {title: "كابتن مارفل (2019)", link: "https://w7.my-cima.net/watch.php?vid=97b98ecdd", categry: ""},
    {title: "آيرون مان / الرجل الحديدي (2008)", link: "https://w.cimalight.co/watch.php?vid=89366c255", categry: "ك"},
    {title: "آيرون مان 2 (2010)", link: "https://q.larozavideo.net/video.php?vid=dfdaebfbe", categry: "ا"},
    {title: "هالك الخارق (2008)", link: "https://w10.mycima.cc/watch.php?vid=f9937c550", categry: "ا"},
    {title: "ثور (2011)", link: "https://w.cimalight.co/watch.php?vid=c002431d2", categry: "ه"},
    {title: "المنتقمون (2012)", link: "https://v5.shahidmosalsalat.business/play.php?vid=6Db5fab7d", categry: "ث"},
    {title: "ثور: العالم المظلم (2013)", link: "https://w7.my-cima.net/watch.php?vid=446227653", categry: "ه"},
    {title: "كابتن أمريكا: جندي الشتاء (2014)", link: "https://w7.my-cima.net/watch.php?vid=010bd002c", categry: "ك"},
    {title: "حراس المجرة (2014)", link: "https://w7.my-cima.net/watch.php?vid=195679f22", categry: "ح"},
    {title: "المنتقمون: عصر ألترون (2015)", link: "https://w7.my-cima.net/watch.php?vid=282069c9b", categry: "ث"},
    {title: "الرجل النملة (2015)", link: "https://w7.my-cima.net/watch.php?vid=52706859e", categry: "ال"},
    {title: "كابتن أمريكا: الحرب الأهلية (2016)", link: "https://w7.my-cima.net/watch.php?vid=00366c255", categry: "ك"},
    {title: "دكتور سترينج (2016)", link: "https://w7.my-cima.net/watch.php?vid=8128331d2", categry: "د"},
    {title: "حراس المجرة 2 (2017)", link: "https://w7.my-cima.net/watch.php?vid=e54f7a550", categry: "ح"},
    {title: "سبايدرمان: العودة للوطن (2017)", link: "https://w7.my-cima.net/watch.php?vid=69366c255", categry: "س"},
    {title: "ثور: راجناروك (2017)", link: "https://w7.my-cima.net/watch.php?vid=77366c255", categry: "ه"},
    {title: "النمر الأسود (2018)", link: "https://w7.my-cima.net/watch.php?vid=11366c255", categry: "ن"},
    {title: "المنتقمون: الحرب اللانهائية (2018)", link: "https://w7.my-cima.net/watch.php?vid=22366c255", categry: "ث"},
    {title: "الرجل النملة والدبورة (2018)", link: "https://w7.my-cima.net/watch.php?vid=33366c255", categry: "ال"},
    {title: "المنتقمون: نهاية اللعبة (2019)", link: "https://w7.my-cima.net/watch.php?vid=44366c255", categry: "ث"},
    {title: "سبايدرمان: بعيدًا عن الوطن (2019)", link: "https://w7.my-cima.net/watch.php?vid=55366c255", categry: "س"},
    {title: "الأرملة السوداء (2021)", link: "https://w7.my-cima.net/watch.php?vid=66366c255", categry: "أ"},
    {title: "شانج شي وأسطورة الحلقات العشر (2021)", link: "https://w7.my-cima.net/watch.php?vid=77366c255", categry: "ش"},
    {title: "الأبديون (2021)", link: "https://w7.my-cima.net/watch.php?vid=88366c255", categry: "ا"},
    {title: "سبايدرمان: لا عودة للديار (2021)", link: "https://w7.my-cima.net/watch.php?vid=99366c255", categry: "س"},
    {title: "دكتور سترينج في عوالم الجنون (2022)", link: "https://w7.my-cima.net/watch.php?vid=10366c255", categry: "د"},
    {title: "ثور: الحب والرعد (2022)", link: "https://w7.my-cima.net/watch.php?vid=11466c255", categry: "ه"},
    {title: "النمر الأسود: واكاندا للأبد (2022)", link: "https://w7.my-cima.net/watch.php?vid=11566c255", categry: "ن"},
    {title: "الرجل النملة والدبورة: كوانتمانيا (2023)", link: "https://w7.my-cima.net/watch.php?vid=11666c255", categry: "ال"},
    {title: "حراس المجرة 3 (2023)", link: "https://w7.my-cima.net/watch.php?vid=11766c255", categry: "ح"},
    {title: "ذا مارفلز (2023)", link: "#", categry: "ا"},
    {title: "ديدبول ووولفرين (2024)", link: "https://w7.my-cima.net/watch.php?vid=99c759495", categry: "د"},
    {title: "كابتن أمريكا: عالم جديد شجاع (2025)", link: "#", categry: "ك"},
    {title: "ثاندر بولتز (2025)", link: "#", categry: "ث"},
    {title: "الرائعون الأربعة (2025)", link: "#", categry: "ا"},
    {title: "بليد (2025)", link: "#", categry: "ب"},
    {title: "المنتقمون: يوم القيامة (2026)", link: "#", categry: "ث"},
    {title: "المنتقمون: الحروب السرية (2027)", link: "#", categry: "ث"},
    {title: "رجال-إكس الأصول: وولفرين", link: "https://w.cimalight.co/watch.php?vid=62066c255", categry: "ا"},
    {title: "رجال-إكس", link: "https://w.cimalight.co/watch.php?vid=77366c255", categry: "ا"},
    {title: "رجال-إكس 2", link: "https://w.cimalight.co/watch.php?vid=11366c255", categry: "ا"},
    {title: "رجال-إكس: الموقف الأخير", link: "https://w.cimalight.co/watch.php?vid=11366c255", categry: "ا"},
    {title: "وولفرين", link: "https://w.cimalight.co/watch.php?vid=11366c255", categry: "ا"},
    {title: "رجال-إكس: الفئة الأولى", link: "https://w.cimalight.co/watch.php?vid=11366c255", categry: "ا"},
    {title: "رجال-إكس: أيام المستقبل الماضي", link: "https://w.cimalight.co/watch.php?vid=11366c255", categry: "ا"},
    {title: "رجال-إكس: نهاية العالم (أبوكليبس)", link: "https://w.cimalight.co/watch.php?vid=11366c255", categry: "ا"},
    {title: "لوجان", link: "https://w.cimalight.co/watch.php?vid=11366c255", categry: "ا"},
    {title: "عنقاء الظلام", link: "https://w.cimalight.co/watch.php?vid=11366c255", categry: "ا"},
    {title: "ديرديفيل", link: "https://w7.my-cima.net/watch.php?vid=66699c255", categry: "د"},
    {title: "جيسيكا جونز", link: "https://w7.my-cima.net/watch.php?vid=77799c255", categry: "ج"},
    {title: "لوك كيج", link: "https://w7.my-cima.net/watch.php?vid=88899c255", categry: "ل"},
    {title: "القبضة الحديدية", link: "https://w7.my-cima.net/watch.php?vid=99999c255", categry: "أ"},
    {title: "المدافعون", link: "https://w7.my-cima.net/watch.php?vid=00099c255", categry: "ا"},
    {title: "واندا فيجن", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-wandavision-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "الفالكون وجندي الشتاء", link: "https://x7k9f.sbs/season/%D9%85%D8%B3%D9%84%D8%B3%D9%84-the-falcon-and-the-winter-soldier-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D9%83%D8%A7%D9%85%D9%84/"},
    {title: "لوكي", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-loki-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "هوك آي", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-hawkeye-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "فارس القمر", link: "https://elcinema.com/work/2065666/"},
    {title: "ميس مارفل", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-ms-marvel-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "شي هالك", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-she-hulk-attorney-at-law-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "الغزو السري", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-secret-invasion-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "إيكو", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-echo-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%88%D9%86-%D9%84%D8%A7%D9%8اي%D9%86/"},
    {title: "أجاثا على طول", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-agatha-all-along-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "عملاء شيلد", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-agatha-all-along-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "العميلة كارتر", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-agent-carter-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "الهاربون", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-runaways-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"}
];
const financial_filmes = [
    {name:"المنتقمون: لعبة النهاية (Endgame)",link:"#",text:"2.799 مليار $"},
    {name:"المنتقمون: الحرب اللانهائية (Infinity War)",link:"#",text:"2.048 مليار $"},
    {name:"المنتقمون (The Avengers)",link:"#",text:"1.518 مليار $"},
    {name:"المنتقمون: عصر ألترون (Age of Ultron)",link:"#",text:"1.405 مليار $"},
    {name:"النمر الأسود (Black Panther)",link:"#",text:"1.347 مليار $"},
    {name:"آيرون مان 3 (Iron Man 3)",link:"#",text:"1.214 مليار $"},
    {name:"كابتن أمريكا: الحرب الأهلية (Civil War)",link:"#",text:"1.153 مليار $"}
]

const top_filmes = [
    {title:"المنتقمون: الحرب اللانهائية (Infinity War)",link:"#",text:"8.4"},
    {title:"المنتقمون: لعبة النهاية (Endgame)",link:"#",text:"8.4"},
    {title:"سبايدرمان: لا عودة للديار (No Way Home)",link:"#",text:"8.2"},
    {title:"حراس المجرة (Guardians of the Galaxy)",link:"#",text:"8.0"},
    {title:"آيرون مان (Iron Man)",link:"#",text:"7.9"},
    {title:"ثور: راجناروك (Thor: Ragnarok)",link:"#",text:"7.9"},
    {title:"لوجان (Logan)",link:"#",text:"8.1"}
]

// dom
let main = document.getElementById("index")
let financial_main = document.getElementById("financial_filmes")
let top_main = document.getElementById("top_filmes")

// print movies
for (let film of films) {
 let title = film.title
 let link = film.link
 let printer = `<div class="movie-card"><a href="${link}" target="_blank">${title}</a></div>`
 if (main) main.innerHTML += printer
}

for (let film of financial_filmes) {
 let name1 = film.name
 let link = film.link
 let text = film.text
 let printer = `<div class="movie-card financial"><a href="${link}" target="_blank">${name1}</a><p class="revenue">${text}</p></div>`
 if (financial_main) financial_main.innerHTML += printer
}

// السطر 85: تم إصلاح الخطأ بإضافة شرط (if (film)) للتأكد من وجود البيانات
for (let film of top_filmes) {
 if (film && film.title) { 
    let title = film.title
    let link = film.link
    let text = film.text
    let printer = `<div class="movie-card top-rated"><a href="${link}" target="_blank">${title}</a><p class="revenue"><i class="fa-solid fa-star" style="color: gold; margin-left: 5px;"></i>${text}</p></div>`
    if (top_main) top_main.innerHTML += printer
 }
}

// welcome message
let welcome_message = document.getElementById("welcome_message")
let button = document.getElementById("start_button")
if (button) {
    button.addEventListener("click",function(){
        if(welcome_message.className == "welcome_mode"){
            welcome_message.className = "welcome_hidden"
        }else{
            welcome_message.className = "welcome_mode"
        }
    })
}

//search
let search = document.getElementById("search_input")
let button_search = document.getElementById("button")
let place_show = document.getElementById("show")

if (button_search) {
    button_search.addEventListener("click",function(){
        let value = search.value.trim()
        let filters = films.filter((film) => {
            return film.title.includes(value); 
        });
        
        place_show.innerHTML = ""; 

        for (let filteredFilm of filters) {
            let title = filteredFilm.title;
            let link = filteredFilm.link;
            place_show.innerHTML += `<a href="${link}" target="_blank">${title}</a><br>`;
        }
    });
}