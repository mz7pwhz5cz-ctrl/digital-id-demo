// DEMO ONLY. The access code below is intentionally not a real security mechanism.
// For real private hosting, use a provider with server-side authentication.
const DEMO_CODE="zaproszenie-2026";

const $=id=>document.getElementById(id);
const placeholder=()=>{const s=`<svg xmlns="http://www.w3.org/2000/svg" width="500" height="700"><rect width="500" height="700" fill="#dfe2e6"/><circle cx="250" cy="240" r="90" fill="#aeb4bb"/><path d="M100 590c25-120 90-175 150-175s125 55 150 175" fill="#aeb4bb"/><text x="250" y="660" text-anchor="middle" font-family="Arial" font-size="22" font-weight="700" fill="#777d84">ZDJĘCIE DEMO</text></svg>`;return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(s)};

function formatDate(v){if(!v)return"—";const[a,b,c]=v.split("-");return`${c}.${b}.${a}`}
function apply(){
 $("fullName").textContent=(( $("firstName").value.trim()+" "+$("lastName").value.trim()).trim()||"—");
 $("outBirth").textContent=formatDate($("birthDate").value);
 $("outCitizenship").textContent=$("citizenship").value.trim()||"—";
 $("outBirthPlace").textContent=$("birthPlace").value.trim()||"—";
 $("outCity").textContent=$("city").value.trim()||"—";
}
function showApp(){ $("login").hidden=true;$("app").hidden=false; }
$("loginBtn").onclick=()=>{if($("accessCode").value===DEMO_CODE){sessionStorage.setItem("demo_access","1");showApp()}else $("loginError").textContent="Nieprawidłowy kod zaproszenia."};
$("accessCode").onkeydown=e=>{if(e.key==="Enter")$("loginBtn").click()};
$("logout").onclick=()=>{sessionStorage.removeItem("demo_access");location.reload()};
$("apply").onclick=apply;
$("reset").onclick=()=>{location.reload()};
$("photoInput").onchange=e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>$("photo").src=r.result;r.readAsDataURL(f)};
$("photo").src=placeholder();apply();
if(sessionStorage.getItem("demo_access")==="1")showApp();
