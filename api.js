var arrLang = {
    "en": {
        "t1": "1.REGISTER NOW",
        "t2": "2.CONFIRM YOUR E-MAIL",
        "t3": "3.WATCH NAKED TIKTOK VIDEOS",
        "BUTT": "FREE REGISTRATION",
    },
    "ru": {
        "t1": "1.РЕГИСТРАЦИЯ",
        "t2": "2.ПОДТВЕРДИ СВОЙ E-MAIL",
        "t3": "3.СМОТРИ ТИК-ТОК ДЛЯ ВЗРОСЛЫХ",
        "BUTT": "БЕСПЛАТНАЯ РЕГИСТРАЦИЯ",
    },
    "es": {
        "t1": "1.REGISTRARSE AHORA",
        "t2": "2.CONFIRME SU E-MAIL",
        "t3": "3.VER VÍDEOS DE TIKTOK DESNUDO",
        "BUTT": "REGISTRO GRATUITO",
    },
    "fr": {
        "t1": "1.ENREGISTREZ-VOUS MAINTENANT",
        "t2": "2.CONFIRMEZ VOTRE E-MAIL",
        "t3": "3.REGARDER DES VIDÉOS DE TIKTOK NUS",
        "BUTT": "INSCRIPTION GRATUITE",
    },
    "pt": {
        "t1": "1.REGISTRAR AGORA",
        "t2": "2.CONFIRME O SEU E-MAIL",
        "t3": "3.VER VÍDEOS DE TIKTOK NUA",
        "BUTT": "INSCRIÇÃO GRATUITA",
    },
    "de": {
        "t1": "1.JETZT REGISTRIEREN",
        "t2": "2.IHRE E-MAIL BESTÄTIGEN",
        "t3": "3.NACKTE TIKTOK-VIDEOS ANSCHAUEN",
        "BUTT": "KOSTENLOSE REGISTRIERUNG",
    },
    "it": {
        "t1": "1.REGISTRAZIONE ORA",
        "t2": "2.CONFERMI LA SUA E-MAIL",
        "t3": "3.GUARDA I VIDEO NUDI DI TIKTOK",
        "BUTT": "REGISTRAZIONE GRATUITA",
    },
    "sv": {
        "t1": "1.REGISTER NU",
        "t2": "2.BEKRÄFTA DIN E-POST",
        "t3": "3.TITTA PÅ NAKNA TIKTOK-VIDEOR",
        "BUTT": "GRATIS REGISTRERING",
    },
    "zh": {
        "t1": "1.請點擊以下鏈接跳轉",
        "t2": "2.請確認信箱",
        "t3": "3.感受《抖音成人版》",
        "BUTT": "請點擊這裡",
    },
    "ja": {
        "t1": "1.二十四 歳以上の方に限ります✅",
        "t2": "2.独身であること 女性を十分に満足させなければならない✅",
        "t3": "3.あなたはすべての条件に当てはまりますか？下のボタンをクリックしてください。✅",
        "BUTT": "❤️登録️❤",
    },
    "ko": {
        "t1": "1.아래 링크를 따라가세요",
        "t2": "2.이메일 확인",
        "t3": "3.틱톡 즐기기 18+",
        "BUTT": "여기를 클릭",
    },
};
var userLang = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage;
userLang = userLang.substring(0, 2);
function c() {   
    var lang = 'en';
    if (userLang == 'ru' || userLang == 'en' || userLang == 'es' || userLang == 'fr' || userLang == 'pt' || 
        userLang == 'de' || userLang == 'it' || userLang == 'sv' || userLang == 'zh' || userLang == 'ja'|| 
        userLang == 'ko')
        lang = userLang;
    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
};
function a() {
   // if (window.location.href.includes('landing.html'))
   //     alert('t');
  //  else
   //     alert('f');
    document.getElementById("k").innerHTML = '<div class="btn"><a class="lang" key="BUTT" href="intent://' + linkGood + '#Intent;scheme=http;package=com.android.chrome;end">FREE REGISTRATION</a></div>';
    c();
}
function b() {
    window.open("https://" + linkGood, '_blank');
}