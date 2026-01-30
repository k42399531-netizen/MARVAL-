// data
const films = [
    {title: "كابتن أمريكا: المنتقم الأول", link: "https://w.cimalight.co/watch.php?vid=7eab34ac5", categry: "ك"},
    {title: "كابتن مارفل (2019)", link: "https://w7.my-cima.net/watch.php?vid=97b98ecdd", categry: ""},
    {title: "آيرون مان / الرجل الحديدي (2008)", link: "https://w.cimalight.co/watch.php?vid=89366c255", categry: "ك"},
    {title: "آيرون مان 2 (2010)", link: "https://q.larozavideo.net/video.php?vid=dfdaebfbe", categry: "ا"},
    {title: "هالك الخارق (2008)", link: "https://w10.mycima.cc/watch.php?vid=f9937c550", categry: "ا"},
    {title: "ثور (2011)", link: "https://w.cimalight.co/watch.php?vid=c002431d2", categry: "ه"},
    {title: "المنتقمون (2012)", link: "https://v5.shahidmosalsalat.business/play.php?vid=6Db5fab7d", categry: "ث"},
    {title: "ثور: العالم المظلم (2013)", link: "https://w10.mycima.cc/watch.php?vid=ff25d246e", categry: "ه"},
    {title: "كابتن أمريكا: جندي الشتاء (2014)", link: "https://topcinema.rip/%D9%81%D9%8A%D9%84%D9%85-captain-america-the-winter-soldier-2014-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%88%D9%86-%D9%84%D8%A7%D9%8A%D9%86/", categry: "ك"},
    {title: "حراس المجرة (2014)", link: "https://w.cimalight.co/watch.php?vid=bc0d4f47f"},
    {title: "المنتقمون: عصر ألترون (2015)", link: "https://x7k9f.sbs/%D8%B4%D8%A7%D9%87%D8%AF-%D9%81%D9%8A%D9%84%D9%85-avengers-age-of-ultron-2015-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "ث"},
    {title: "الرجل النملة (2015)", link: "https://w.cimalight.co/watch.php?vid=25fe8ff14"},
    {title: "كابتن أمريكا: الحرب الأهلية (2016)", link: "https://topcinema.rip/%D9%81%D9%8A%D9%84%D9%85-captain-america-civil-war-2016-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%88%D9%86-%D9%84%D8%A7%D9%8A%D9%86/"},
    {title: "دكتور سترينج (2016)", link: "https://w.cimalight.co/watch.php?vid=fac203e01", categry: "د"},
    {title: "حراس المجرة 2 (2017)", link: "https://w.cimalight.co/watch.php?vid=f49bef55c"},
    {title: "سبايدرمان: العودة للوطن (2017)", link: "https://w.cimalight.co/watch.php?vid=8a1c0da49"},
    {title: "ثور: راجناروك (2017)", link: "https://w10.mycima.cc/watch.php?vid=9bd3f263f"},
    {title: "النمر الأسود (2018)", link: "https://w10.mycima.cc/watch.php?vid=dbd05215d", categry: "ن"},
    {title: "المنتقمون: الحرب اللانهائية (2018)", link: "https://topcinema.rip/%D9%81%D9%8A%D9%84%D9%85-avengers-infinity-war-2018-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%88%D9%86-%D9%84%D8%A7%D9%8A%D9%86/", categry: "ث"},
    {title: "الرجل النملة والدبورة (2018)", link: "https://w.cimalight.co/watch.php?vid=9d5f8a71b", categry: "ال"},
    {title: "المنتقمون: نهاية اللعبة (2019)", link: "https://topcinema.rip/%d9%81%d9%8a%d9%84%d9%85-avengers-endgame-2019-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", categry: "ث"},
    {title: "سبايدرمان: بعيدًا عن الوطن (2019)", link: "https://w10.mycima.cc/watch.php?vid=577e152b3", categry: "س"},
    {title: "الأرملة السوداء (2021)", link: "https://tupcinema.media/watch/%D9%81%D9%8A%D9%84%D9%85-black-widow-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%88%D9%86-%D9%84%D8%A7%D9%8A%D9%86", categry: "أ"},
    {title: "شي شينج شي واسطورة الحاقات العشر", link: "https://topcinema.rip/%d9%81%d9%8a%d9%84%d9%85-shang-chi-and-the-legend-of-the-ten-rings-2021-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", categry: "ش"},
    {title: "الأبديون (2021)", link: "https://w7.shahidwbas.tv/watch.php?vid=d41e5fe90", categry: "ا"},
    {title: "سبايدرمان: لا عودة للديار (2021)", link: "https://topcinema.rip/%d9%81%d9%8a%d9%84%d9%85-spider-man-no-way-home-2021-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d8%a7%d9%88%d9%86-%d9%84%d8%a7%d9%8a%d9%86/watch/", categry: "س"},
    {title: "دكتور سترينج في عوالم الجنون (2022)", link: "https://w7.my-cima.net/watch.php?vid=da1f7ea14", categry: "د"},
    {title: "ثور: الحب والرعد (2022)", link: "https://w10.mycima.cc/watch.php?vid=bef30395d", categry: "ه"},
    {title: "النمر الأسود: واكاندا للأبد (2022)", link: "https://w.cimalight.co/watch.php?vid=964f2a122", categry: "ن"},
    {title: "الرجل النملة والدبورة: كوانتمانيا (2023)", link: "https://w.cimalight.co/watch.php?vid=6a3199812", categry: "ال"},
    {title: "حراس المجرة 3 (2023)", link: "https://w.cimalight.co/watch.php?vid=d2819438c", categry: "ح"},
    {title: "ذا مارفلز (2023)", link: "https://w10.mycima.cc/watch.php?vid=1942e8363", categry: "ا"},
    {title: "ديدبول ووولفرين (2024)", link: "https://w7.my-cima.net/watch.php?vid=e921c1c83", categry: "د"},
    {title: "كابتن أمريكا: عالم جديد شجاع (2025)", link: "https://w.cimalight.co/watch.php?vid=59781d8e8", categry: "ك"},
    {title: "ثاندر بولتز (2025)", link: "https://my-cima.club/watch.php?vid=82c366e1a", categry: "ث"},
    {title: "الرائعون الأربعة (2025)", link: "https://topcinema.rip/%D9%81%D9%8A%D9%84%D9%85-the-fantastic-four-first-steps-2025-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%88%D9%86-%D9%84%D8%A7%D9%8A%D9%86/", categry: "ا"},
    {title: "المنتقمون: يوم القيامة (2026)", link: "#", categry: "ث"},
    {title: "المنتقمون: الحروب السرية (2027)", link: "#", categry: "ث"},
    {title: "رجال-إكس الأصول: وولفرين", link: "https://x7k9f.sbs/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-x-men-origins-wolverine-2009-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "ا"},
    {title: "رجال-إكس 2", link: "https://x7k9f.sbs/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-x-men-2-2003-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "ا"},
    {title: "رجال-إكس: الموقف الأخير", link: "https://x7k9f.sbs/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-x-men-2-2003-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "ا"},
    {title: "وولفرين", link: "https://elcinema.com/work/1999288/", categry: "ا"},
    {title: "رجال-إكس: الفئة الأولى", link: "https://x7k9f.sbs/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-x-men-first-class-2011-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "ا"},
    {title: "رجال-إكس: أيام المستقبل الماضي", link: "https://x7k9f.sbs/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-x-men-days-future-past-2014-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "ا"},
    {title: "رجال-إكس: نهاية العالم (أبوكليبس)", link: "https://x7k9f.sbs/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-x-men-apocalypse-2016-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "ا"},
    {title: "لوجان", link: "https://x7k9f.sbs/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-logan-2017-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "ا"},
    {title: "عنقاء الظلام", link: "https://x7k9f.sbs/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-dark-phoenix-2019-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "ا"},
    {title: "ديرديفيل", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-daredevil-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "د"},
    {title: "جيسيكا جونز", link: "https://moviz-time.live/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-jessica-jones-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A3%D9%88%D9%84/", categry: "ج"},
    {title: "لوك كيج", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-luke-cage-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "ل"},
    {title: "القبضة الحديدية", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-iron-fist-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "أ"},
    {title: "المدافعون", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-the-defenders-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/", categry: "ا"},
    {title: "واندا فيجن", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-wandavision-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "الفالكون وجندي الشتاء", link: "https://x7k9f.sbs/season/%D9%85%D8%B3%D9%84%D8%B3%D9%84-the-falcon-and-the-winter-soldier-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D9%83%D8%A7%D9%85%D9%84/"},
    {title: "لوكي", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-loki-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "هوك آي", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-hawkeye-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "فارس القمر", link: "https://elcinema.com/work/2065666/"},
    {title: "ميس مارفل", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-ms-marvel-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "شي هالك", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-she-hulk-attorney-at-law-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "الغزو السري", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-secret-invasion-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "إيكو", link: "https://x7k9f.sbs/season/%D9%85%D8%B3%D9%84%D8%B3%D9%84-l-echo-2024-%D9%83%D8%A7%D9%85%D9%84-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "أجاثا على طول", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-agatha-all-along-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "عملاء شيلد", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-agatha-all-along-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "العميلة كارتر", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-agent-carter-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"},
    {title: "الهاربون", link: "https://topcinema.rip/series/%D9%85%D8%B3%D9%84%D8%B3%D9%84-runaways-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/"}
];
const financial_filmes = [
    {name:"المنتقمون: لعبة النهاية (Endgame)",link:"https://w7.my-cima.net/watch.php?vid=c7da7ef21",text:"2.799 مليار $"},
    {name:"المنتقمون: الحرب اللانهائية (Infinity War)",link:"https://w.cimalight.co/watch.php?vid=79e328ab3",text:"2.048 مليار $"},
    {name:"المنتقمون (The Avengers)",link:"https://w.cimalight.co/watch.php?vid=096049a2b",text:"1.518 مليار $"},
    {name:"المنتقمون: عصر ألترون (Age of Ultron)",link:"https://w.cimalight.co/watch.php?vid=994746ae0",text:"1.405 مليار $"},
    {name:"النمر الأسود (Black Panther)",link:"https://w10.mycima.cc/watch.php?vid=963d8676c",text:"1.347 مليار $"},
    {name:"آيرون مان 3 (Iron Man 3)",link:"https://w.cimalight.co/watch.php?vid=601c2f159",text:"1.214 مليار $"},
    {name:"كابتن أمريكا: الحرب الأهلية (Civil War)",link:"https://topcinema.rip/%D9%81%D9%8A%D9%84%D9%85-captain-america-civil-war-2016-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%88%D9%86-%D9%84%D8%A7%D9%8A%D9%86/",text:"1.153 مليار $"}
]

const top_filmes = [
    {title:"المنتقمون: الحرب اللانهائية (Infinity War)",link:"https://w.cimalight.co/watch.php?vid=79e328ab3",text:"8.4"},
    {title:"المنتقمون: لعبة النهاية (Endgame)",link:"https://w7.my-cima.net/watch.php?vid=c7da7ef21",text:"8.4"},
    {title:"سبايدرمان: لا عودة للديار (No Way Home)",link:"https://w.cimalight.co/watch.php?vid=5aa20c278",text:"8.2"},
    {title:"حراس المجرة (Guardians of the Galaxy)",link:"https://topcinema.rip/assemblies/%D8%B3%D9%84%D8%B3%D9%84%D8%A9-%D8%A7%D9%81%D9%84%D8%A7%D9%85-%D8%AD%D8%B1%D8%A7%D8%B3-%D8%A7%D9%84%D9%85%D8%AC%D8%B1%D8%A9-guardians-of-the-galaxy-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9/",text:"8.0"},
    {title:"آيرون مان (Iron Man)",link:"https://w.cimalight.co/watch.php?vid=20553c1e2",text:"7.9"},
    {title:"ثور: راجناروك (Thor: Ragnarok)",link:"https://w10.mycima.cc/watch.php?vid=9bd3f263f",text:"7.9"},
    {title:"لوجان (Logan)",link:"https://x7k9f.sbs/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-logan-2017-%D9%85%D8%AA%D8%B1%D8%AC%D9%85/",text:"8.1"}
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