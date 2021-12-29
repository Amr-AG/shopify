let ara = document.querySelector(".ara");
let eng = document.querySelector(".eng");
let fquestion = document.querySelector(".first h1");
let fanswer = document.querySelector(".first p");
let squestion = document.querySelector(".sec h1");
let sanswer = document.querySelector(".sec p");
let tquestion = document.querySelector(".third h1");
let tanswer = document.querySelector(".third p");
let fourquestion = document.querySelector(".four h1");
let fouranswer = document.querySelector(".four p");
let fivequestion = document.querySelector(".five h1");
let fiveanswer = document.querySelector(".five p");

ara.addEventListener("click", () => {
  ara.style.cssText = "  background-color: white;color: black;";
  eng.style.cssText = " background-color:black;color:white;";
  fquestion.innerHTML = "؟ shopifyماهو";
  fanswer.innerHTML =
    "أحد الأنظمة الأساسية العديدة التي تنشئ موقع ويب وتديره وتقوم بالتعديل عليه ";
  squestion.innerHTML = "ما هي أكثر استخداماته؟";
  sanswer.innerHTML =
    " متاجر التسويق الاكترونى ويتم استخدامه في دروبشيبينغ وإعادة بيع المنتجات عبر الإنترنت";
  tquestion.innerHTML = "؟ Shopify ماذا يمكنني أن أفعل مع ";
  tanswer.innerHTML =
    "يمكنني إنشاء موقع الويب الخاص بي ويمكنني تحميل المنتجات التي أرغب في بيعها عليها وتخصيص جميع البيانات وأسعارها ، يوفر قوالب جاهزة للاستخدام للتعديل";
  fourquestion.innerHTML = "ماهى المزايا التى يقدمها لى ؟";
  fouranswer.innerHTML =
    "يقوم بتزويدى بإحصائيات كاملة عن المنتجات المطلوبة وعن العملاء الأكثر شراءًا والتعامل مع موقعي وإحصائيات كاملة عن عدد الزيارات للمنتجات";
  fivequestion.innerHTML = "كيف يمكنني اضافة منتج الى الموقع؟";
  fiveanswer.innerHTML =
    "اولا ارفع صورة للمنتج ثم اضع له اسما ووصف مختصر لما يقدمه المنتج ثم احدد السعر وطريقة الدفع";
});

eng.addEventListener("click", () => {
  eng.style.cssText = "  background-color: white;color: black;";
  ara.style.cssText = " background-color:black;color:white;";
  fquestion.innerHTML = "What Is The Shopify ?";
  fanswer.innerHTML =
    "One of the many platforms that create, manage and modify a website";
  squestion.innerHTML = "What are its most uses ?";
  sanswer.innerHTML =
    "It is used in dropshipping and reselling products online";
  tquestion.innerHTML = "What can I do with shopify ?";
  tanswer.innerHTML =
    "i can creat my website and I can upload the products I want to sell on it And sizing up all the data and their prices,It provides ready-to-use templates for modification";
  fourquestion.innerHTML = "what advantages does it give me ?";
  fouranswer.innerHTML =
    " It also provides me with complete statistics about the products that are on demand and about the customers also the most buying and dealing with my site and complete statistics on the number of visits to the products";
  fivequestion.innerHTML = "How can I add a product to the site ?";
  fiveanswer.innerHTML =
    "First I upload a picture of the product, then I put a name for it and a small description of what the product offers, then I set the price and method of payment";
});
