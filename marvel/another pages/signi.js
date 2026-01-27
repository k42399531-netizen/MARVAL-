// dom
let user_name = document.getElementById("user_name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let button = document.getElementById("togglePassword")
let sigin = document.getElementById("signi")
let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
// button
button.addEventListener("click",function(){
   if ( password.type == "password"){
         password.type = "text"
   }
   else{
         password.type = "password"
   }
})
// function
// ... الكود السابق كما هو ...

function security(e) {
         e.preventDefault();
         
         const nameValue = user_name.value.trim();
         const email_Value = email.value.trim();
         const password_value = password.value.trim();
         
         // مسح الرسائل السابقة
         div1.textContent = "";
         div2.textContent = "";
         div3.textContent = "";
         
         let isValid = true; // نفترض أن البيانات صحيحة في البداية
     
         // 1. التحقق من الاسم
         if (nameValue === "" || nameValue.length > 20) {
             div1.textContent = "من فضلك ادخل اسمك بشكل صحيح (أقل من 20 حرف)";
             isValid = false; // هنا التعديل المهم: نغير الحالة لـ false
         }
     
         // 2. التحقق من الإيميل
         if (!email_Value.includes("@") || email_Value === "") {
             div2.textContent = "من فضلك ادخل ايميلك بشكل صحيح";
             isValid = false; // نغير الحالة لـ false
         }
     
         // 3. التحقق من كلمة السر
         if (password_value.length <= 7) {
             div3.textContent = "يجب أن تكون كلمة السر أكثر من 7 أحرف";
             isValid = false; // نغير الحالة لـ false
         }
     
         // الانتقال فقط إذا ظلت القيمة true (أي لم يحدث أي خطأ أعلاه)
         if (isValid) {
             alert("تم تسجيل الدخول بنجاح! جاري الانتقال...");
             window.location.href = "index2.html"; 
         }
     }
// event
sigin.addEventListener("click",security)