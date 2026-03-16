import React from 'react';

interface ContractProps {
  companyName: string;
  address: string;
  taxnumber: string;
  contact: string;
}

export default function ContractContent({ companyName, address, taxnumber, contact }: ContractProps) {
  return (
    <article className="bg-[#1e293b] rounded-[2rem] p-8 md:p-16 lg:p-24 shadow-[0_0.5rem_0_0_#ea580c] prose prose-invert max-w-none prose-headings:font-heading prose-p:font-body prose-a:font-body prose-li:font-body prose-headings:text-[#ea580c] prose-h1:text-4xl md:prose-h1:text-5xl prose-h2:text-3xl md:prose-h2:text-4xl prose-p:text-[#e5dce6] prose-p:text-lg md:prose-p:text-xl prose-li:text-[#e5dce6] prose-li:text-lg md:prose-li:text-xl prose-strong:text-white prose-strong:font-extrabold prose-a:text-[#ea580c] prose-a:no-underline hover:prose-a:underline">
      
      <h1 className="text-center font-extrabold leading-tight mb-4">VÁLLALKOZÁSI ÉS SZOLGÁLTATÁSI SZERZŐDÉS</h1>
      <p className="text-center font-bold mb-12">Konverzióoptimalizált (CRO) landing oldal tervezésére és kivitelezésére, amely létrejött</p>

      <div className="overflow-x-auto mb-12">
        <table className="w-full text-left border-collapse border border-slate-700">
          <tbody>
            <tr>
              <td className="p-4 border border-slate-700 w-1/2 align-top"><p className="m-0">egyrészről:</p></td>
              <td className="p-4 border border-slate-700 w-1/2 align-top"><p className="m-0">és másrészről</p></td>
            </tr>
            <tr>
              <td className="p-4 border border-slate-700 align-top"><p className="m-0">Név/Cégnév: {companyName}</p></td>
              <td className="p-4 border border-slate-700 align-top"><p className="m-0">Bogdán Norbert János (EV.)</p></td>
            </tr>
            <tr>
              <td className="p-4 border border-slate-700 align-top"><p className="m-0">székhelye: {address}</p></td>
              <td className="p-4 border border-slate-700 align-top"><p className="m-0">6722 Szeged, Bokor utca 9. 1. ép. A lph. 4 em. 12 a.</p></td>
            </tr>
            <tr>
              <td className="p-4 border border-slate-700 align-top"><p className="m-0">adószáma: {taxnumber}</p></td>
              <td className="p-4 border border-slate-700 align-top"><p className="m-0">nyilvántartási száma: 61222120</p></td>
            </tr>
            <tr>
              <td className="p-4 border border-slate-700 align-top"><p className="m-0">képviseletében (Kapcsolattartó neve): {contact}</p></td>
              <td className="p-4 border border-slate-700 align-top"><p className="m-0">adószáma: 91475046-1-40</p></td>
            </tr>
            <tr>
              <td className="p-4 border border-slate-700 align-top"><p className="m-0">(továbbiakban: Megrendelő),</p></td>
              <td className="p-4 border border-slate-700 align-top"><p className="m-0">(továbbiakban: Szolgáltató),</p></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>a továbbiakban együttesen: <strong>Felek</strong>, külön-külön: <strong>Fél</strong> között az alábbi feltételekkel.</p>

      <h2 className="font-extrabold mt-16 mb-8">Szerződési összefoglaló – A közös munka keretei</h2>
      <p className="font-bold">Ez az áttekintés a felek közötti együttműködés legfontosabb jogi és szakmai mérföldköveit rögzíti, a szerződés részletes rendelkezéseivel összhangban:</p>

      <ul className="list-disc list-outside pl-6 space-y-4">
        <li><strong>A közös cél:</strong> Egy darab konverzióoptimalizált (CRO) landing oldal és igény szerint egy köszönőoldal teljes körű megtervezése és kivitelezése, beleértve a stratégiai tervezést, a szövegírást, a designt és a mérések pontos beállítását.</li>
        <li><strong>Adatvezérelt finomhangolás:</strong> Az élesítést követő 90 napban melletted állok: ezalatt összesen <strong>3 db havi teljesítményriportot</strong> készítek, és az adatok alapján közösen meghatározott javításokat elvégzem.</li>
        <li><strong>Ütemezés és rugalmasság:</strong> A közös munka az előleg és a hozzáférések beérkezésekor indul. A célom, hogy maximum <strong>7 munkanapon</strong> belül élesítsük az oldalt. A 90 napos időszak alatt <strong>korlátlan módosítási kérés</strong> adható le. Egyszerre <strong>egy aktív kérés</strong> lehet folyamatban.</li>
        <li><strong>Díjazás:</strong> A szolgáltatás teljes díja <strong>317.000 Ft (AAM)</strong>. A kifizetés két egyenlő részletben történik: 50% kezdéskor, a fennmaradó 50% pedig az élesítést követően esedékes.</li>
        <li><strong>Hosting és üzemeltetés:</strong> A díj tartalmaz <strong>12 hónap hostingot</strong> <strong>és teljes kezelést</strong>. A domain és az esetleges külső fizetős szoftverek költségei téged terhelnek.</li>
        <li><strong>Szakmai elköteleződés és biztonság:</strong> Mindent megteszek a legjobb eredményért, de mivel a végső konverziót piaci tényezők és a hirdetéseid is befolyásolják, konkrét számokat (garantált eredményt) jogilag nem ígérhetek.</li>
        <li><strong>Tulajdonjog és szabadság:</strong> A díj kifizetése után az oldal <strong>kizárólagos felhasználási joga</strong> a tiéd lesz. A forráskódot bármikor kikérheted, és ha később elköltöztetnéd az oldalt, egy jelképes díj ellenében ebben is segítek.</li>
        <li><strong>Bizalom és adatvédelem:</strong> Minden üzleti titkodat 3 évig megőrzöm. A landing oldalon keletkező adatoknál te vagy az adatkezelő, én pedig a technikai segítőd (adatfeldolgozó).</li>
      </ul>

      <blockquote>
        <p><strong>A részletes feltételeket és a pontos jogi megfogalmazásokat a következő oldalakon találod.</strong></p>
      </blockquote>

      <div className="not-prose bg-[#AEE4BD] rounded-xl p-8 flex items-start gap-4 shadow-sm my-12 text-[#064e3b]">
        <span className="text-2xl leading-none mt-1">💡</span>
        <p className="m-0 font-bold text-[17px]">
          Amennyiben a szerződés teljes tartalmával egyetértesz, az alábbi linkre kattintva tudod rendezni az előleget, amivel a közös munkánk azonnal kezdetét veszi.
        </p>
      </div>

      <div className="text-left mb-16">
        <a href="https://buy.stripe.com/aFa7sK2AzenY3hBcbA6J200" className="inline-block bg-[#ea580c] hover:bg-[#d03e00] !text-white font-semibold py-4 px-10 rounded-md transition-colors text-xl !no-underline">
          Elfogadom a szerződést és kifizetem az előleget
        </a>
      </div>

      <h2 className="font-extrabold mt-16">1. A szerződés tárgya</h2>
      <p><strong>1.1.</strong> Megrendelő megbízza Szolgáltatót, Szolgáltató pedig elvállalja <strong>1 db konverzióoptimalizált (CRO) landing oldal és igény esetén 1 db köszönőoldal</strong> megtervezését és kivitelezését, továbbá a landing oldalhoz kapcsolódó <strong>mérési rendszer beállítását</strong>, és az élesítést követő <strong>90 napos adatvezérelt finomhangolást</strong> a jelen szerződés feltételei szerint.</p>
      <p>
        <strong>1.2.</strong> A teljesítés részét képezi különösen:<br/>
        a) stratégiai tervezés (pozicionálás, fő üzenet, ajánlat és oldalstruktúra),<br/>
        b) szövegírás, design és fejlesztés (custom kód),<br/>
        c) telepítés és hosting (GitHub + Vercel),<br/>
        d) analitikai és mérőkód beállítások (pl. GA/Clarity/Pixel a Megrendelő igénye szerint),<br/>
        e) jelentkezési folyamat optimalizálása (űrlap/foglalási logika, köszönőoldal, visszaigazolás),<br/>
        f) havi riport és módosítások a 90 napos időszakban.
      </p>
      <p><strong>1.3.</strong> A szolgáltatás célja a Megrendelő B2B/B2C ajánlatának konverzió-orientált bemutatása és a jelentkezések mérhetővé tétele. Szolgáltató <strong>nem vállal</strong> hirdetéskezelést, médiavásárlást, kampánymenedzsmentet, CRM- vagy e-mail marketing rendszer teljes körű bevezetését, illetve értékesítési tevékenységet, kivéve, ha erről a Felek külön írásban megállapodnak.</p>
      <p>
        <strong>1.4. A szerződés vegyes jellege</strong><br/><br/>
        Felek rögzítik, hogy a <strong>landing oldal és köszönőoldal megtervezése és kivitelezése vállalkozási jellegű</strong> (eredménykötelem), míg az élesítést követő <strong>90 napos finomhangolás</strong>, valamint a <strong>12 hónapos hosting/üzemeltetés szolgáltatási jellegű</strong> kötelem.
      </p>
      <p>
        <strong>1.5. B2B nyilatkozat</strong><br/><br/>
        Megrendelő a szerződés elfogadásával nyilatkozik, hogy a jelen szerződést üzletszerű gazdasági tevékenysége körében köti, és nem fogyasztóként jár el.
      </p>

      <h2 className="font-extrabold mt-16">2. A szolgáltatás tartalma</h2>
      <p>A Szolgáltató az alábbi elemeket teljesíti:</p>
      <p><strong>2.1. Stratégiai tervezés</strong></p>
      <ul className="list-disc list-outside pl-6 space-y-2">
        <li>célcsoport és szolgáltatás pozicionálásának áttekintése,</li>
        <li>fő üzenet és ajánlat (offer) kialakítása,</li>
        <li>konverziós struktúra (oldal felépítése) megtervezése.</li>
      </ul>

      <p><strong>2.2. Teljes landing kivitelezés</strong> <em>(1 db landing + 1 db köszönőoldal)</em></p>
      <ul className="list-disc list-outside pl-6 space-y-2">
        <li>design + fejlesztés egyedi kódbázissal,</li>
        <li>professzionális szövegírás (landing copy),</li>
        <li>gyors, mobilra optimalizált működésre törekvés.</li>
      </ul>

      <p><strong>2.3. Mérhető jelentkezési rendszer kiépítése</strong></p>
      <ul className="list-disc list-outside pl-6 space-y-2">
        <li>Google Analytics / Clarity / Pixel(ek) beállítása (a Megrendelő által kért platformok szerint),</li>
        <li>konverziók és jelentkezések mérése (pl. űrlapküldés, foglalás, köszönőoldal),</li>
        <li>forrás alapú teljesítménykövetés (UTM-ekkel), amennyiben technikailag és jogilag (cookie/consent) lehetséges és szükséges.</li>
      </ul>

      <p><strong>2.4. Jelentkezési folyamat optimalizálása</strong></p>
      <ul className="list-disc list-outside pl-6 space-y-2">
        <li>űrlap vagy foglalórendszer egyszerűsítése (a választott megoldástól függően),</li>
        <li>köszönőoldal és visszaigazolási logika kialakítása,</li>
        <li>follow-up javaslat a jelentkezések maximalizálására (külső rendszer beállítása külön megállapodás tárgya lehet).</li>
      </ul>

      <p><strong>2.5. 90 nap adatvezérelt finomhangolás</strong></p>
      <ul className="list-disc list-outside pl-6 space-y-2">
        <li>havi teljesítmény riport (összesen 3 db),</li>
        <li>a Megrendelő által leadott módosítási kérések teljesítése a 6. pont szerinti keretek között,</li>
        <li>konverziós arány javítását célzó iterációk.<br/>A finomhangolás nem foglal magában teljes újratervezést vagy új funkció fejlesztést, kivéve külön megállapodás esetén.</li>
      </ul>

      <p><strong>2.6. Technikai háttér</strong></p>
      <ul className="list-disc list-outside pl-6 space-y-2">
        <li>a kód verziókezelése GitHub-on,</li>
        <li>telepítés és üzemeltetés Vercel-en,</li>
        <li>12 hónap hosting biztosítása Vercel környezetben (lásd 8. pont),</li>
        <li>90 napig a Megrendelő által leadott korlátlan módosítási kérések kezelése <strong>(lásd 6. pont).</strong></li>
      </ul>

      <h2 className="font-extrabold mt-16">3. Teljesítési folyamat, mérföldkövek és jóváhagyás</h2>
      <p><strong>3.1.</strong> A Felek a munkát az alábbi szakaszok szerint végzik (a konkrét határidők a 4. pontban):</p>
      <p>
        <strong>(1) Onboarding és hozzáférések</strong><br/><br/>
        <strong>3.1.1.</strong> Megrendelő biztosítja a szükséges hozzáféréseket és/vagy létrehozza a szükséges fiókokat (különösen: analitika/pixel fiókok, domain/DNS hozzáférés, foglaló/űrlap rendszer, amennyiben releváns).<br/><br/>
        <strong>3.1.2.</strong> Hozzáférések hiányában a teljesítés korlátozott lehet, és a határidők a késedelem idejével hosszabbodnak.
      </p>
      <p>
        <strong>(2) Igényfelmérés (Form) és egyeztetés</strong><br/><br/>
        <strong>3.1.3.</strong> Szolgáltató igényfelmérő kérdőívet („Form”) küld. Megrendelő köteles azt <strong>3 naptári napon</strong> belül kitölteni.<br/><br/>
        <strong>3.1.4.</strong> A Form alapján a Felek szükség szerint online egyeztetést tartanak.
      </p>
      <p>
        <strong>(3) Előzetes elemzés</strong><br/><br/>
        <strong>3.1.5.</strong> Szolgáltató elemzi a rendelkezésre álló adatokat (ha van), és publikus adatok alapján áttekinti a célközönséget/piaci környezetet.<br/><br/>
        <strong>3.1.6.</strong> Az elemzés mélysége függ a Megrendelő által biztosított adatoktól és hozzáférésektől.
      </p>
      <p>
        <strong>(4) Koncepció átadás és jóváhagyás</strong><br/><br/>
        <strong>3.1.7.</strong> Szolgáltató elkészíti és bemutatja a szöveg- és design koncepciót, valamint a struktúrát.<br/><br/>
        <strong>3.1.8.</strong> Megrendelő <strong>5 munkanapon</strong> belül írásban jóváhagyja vagy észrevételezi.<br/><br/>
        <strong>3.1.9.</strong> Ha Megrendelő nem nyilatkozik határidőben, a koncepció elfogadottnak minősül.
      </p>
      <p>
        <strong>(5) Fejlesztés és mérés beállítása</strong><br/><br/>
        <strong>3.1.10.</strong> Szolgáltató elvégzi a fejlesztést és a tracking beállítást.
      </p>
      <p>
        <strong>(6) Élesítés</strong><br/><br/>
        <strong>3.1.11.</strong> Szolgáltató élesíti az oldalt Vercel-en és elvégzi az alap ellenőrzéseket.
      </p>
      <p>
        <strong>(7) 90 napos finomhangolás</strong><br/><br/>
        <strong>3.1.12.</strong> Az élesítést követően indul a 90 napos finomhangolás (havi riport + javasolt módosítások + a Megrendelő által leadott módosítási kérések teljesítése).
      </p>
      <p><strong>3.2.</strong> Megrendelő jóváhagyásai írásban történnek (e-mail is elfogadott).</p>

      <h2 className="font-extrabold mt-16">4. Határidők, együttműködés</h2>
      <p>
        <strong>4.1. Projektindítás és ütemezés</strong><br/><br/>
        <strong>4.1.1.</strong> A projekt indulása az a nap, amikor (i) az előleg jóváírásra kerül, és (ii) a szükséges alap hozzáférések biztosítása megkezdődik – amelyek közül a későbbi időpont a projektindítás.<br/><br/>
        <strong>4.1.2.</strong> A Felek a teljesítés tervezett ütemezését az alábbiak szerint rögzítik:
      </p>
      <p>a) <strong>Tervezett élesítés:</strong> a Projektindítástól számított <strong>7 munkanapon</strong> belül.</p>
      <p>b) A <strong>90 napos</strong> adatvezérelt finomhangolás az élesítést követő napon indul.</p>
      <p><strong>4.1.3.</strong> A tervezett élesítés tájékoztató jellegű; az ütemezés függ a Megrendelő anyagaitól, hozzáféréseitől és jóváhagyásaitól.</p>
      <p>
        <strong>4.2. Megrendelő együttműködése</strong><br/><br/>
        Megrendelő időben biztosítja a szükséges anyagokat (ajánlat részletei, referenciák, brand elemek, képek/logók, jogi tájékoztatók, hozzáférések), és ésszerű időn belül válaszol a kérdésekre.
      </p>
      <p>
        <strong>4.3. Késedelem</strong><br/><br/>
        a) Megrendelő késedelme esetén a Szolgáltató határidői a késedelem időtartamával automatikusan meghosszabbodnak.<br/><br/>
        b) Ha a késedelem meghaladja a <strong>15 napot</strong>, Szolgáltató jogosult a projektet átütemezni a következő elérhető kapacitására.
      </p>

      <h2 className="font-extrabold mt-16">5. Díjazás és fizetési feltételek</h2>
      <p><strong>5.1.</strong> Díj: <strong>317.000 Ft</strong> (AAM).</p>
      <p><strong>5.2.</strong> A díj tartalmazza a 2. pont szerinti szolgáltatást, a 90 nap finomhangolást, a 12 hónap hostingot (8. pont), és a korlátlan módosítási kérések kezelését a 3 hónapos időszak alatt. (6. pont).</p>
      <p><strong>5.3.</strong> Harmadik fél fizetős szolgáltatásai (pl. fizetős foglalórendszer, domain, consent platform) a Megrendelőt terhelik, eltérő írásbeli megállapodás hiányában.</p>
      <p><strong>5.4. Fizetési ütemezés (50–50%)</strong></p>
      <ul className="list-disc list-outside pl-6 space-y-2">
        <li><strong>Előleg:</strong> 158.500 Ft, fizetési határidő: 3 munkanap</li>
        <li><strong>Végszámla:</strong> 158.500 Ft, az élesítést követően, fizetési határidő: 3 munkanap</li>
      </ul>
      <p>
        <strong>5.5. Késedelem</strong><br/><br/>
        Késedelmes fizetés esetén Szolgáltató jogosult a teljesítést felfüggeszteni, valamint a jogszabály szerinti késedelmi kamatot és behajtási költségátalányt érvényesíteni.
      </p>
      <p><strong>5.6. Többletmunka</strong></p>
      <p>A szerződés keretein túli feladatok külön díjajánlat alapján teljesülnek.</p>

      <h2 className="font-extrabold mt-16">6. Módosítások kerete</h2>
      <p><strong>6.1.</strong> Az élesítést követő <strong>90 napos időszak alatt Megrendelő korlátlan számú módosítási kérést adhat le</strong>.</p>
      <p><strong>6.2.</strong> A módosítások kezelése <strong>egyszerre egy aktív kérés</strong> rendszerben történik. Új kérés akkor kerül feldolgozásra, amikor az előző lezárult.</p>
      <p><strong>6.3.</strong> Egy módosítási kérés jellemzően az alábbiakat tartalmazhatja:</p>
      <ul className="list-disc list-outside pl-6 space-y-2">
        <li>szöveg módosítása,</li>
        <li>kép csere,</li>
        <li>design elem módosítása,</li>
        <li>szekció hozzáadása vagy eltávolítása,</li>
        <li>kisebb UX vagy struktúra módosítás.</li>
      </ul>
      <p>
        <strong>6.4.</strong> A módosítási kérések teljesítési célideje jellemzően <strong>legfeljebb 3 munkanapon belül</strong>, a kérés komplexitásától függően.
      </p>
      <p><strong>6.5.</strong> Nem tartozik bele:</p>
      <ul className="list-disc list-outside pl-6 space-y-2">
        <li>teljes újratervezés,</li>
        <li>új landing oldal fejlesztése,</li>
        <li>új funkció vagy komplex integráció,</li>
        <li>új A/B teszt variánsok,</li>
        <li>CRM vagy marketing automatizmusok teljes kiépítése.</li>
      </ul>
      <p>6.6. Az ilyen jellegű kérések külön díjajánlat alapján valósulhatnak meg.</p>

      <h2 className="font-extrabold mt-16">7. Teljesítés, átadás-átvétel, elfogadás</h2>
      <p>
        <strong>7.1. Teljesítés</strong><br/>
        Szolgáltató teljesítettnek tekinti, ha:<br/>
        a) az oldal éles környezetben elérhető,<br/>
        b) a mérési alapbeállítások elvégzésre kerültek, és<br/>
        c) Megrendelő megkapja az éles URL(ek)et és a mérés ellenőrzéséhez szükséges alap információkat.
      </p>
      <p>A Felek rögzítik, hogy a hostingot Szolgáltató biztosítja; Megrendelő részére GitHub/Vercel hozzáférés átadása nem része a szolgáltatásnak (kivéve 9.6 szerint).</p>
      <p>
        <strong>7.2. Hiba vs. módosítás</strong><br/>
        Hiba: működési/megjelentetési probléma a jóváhagyott koncepcióhoz képest.<br/>
        Nem hiba: utólagos tartalmi/ízlésbeli változtatási igény → módosítás (6. pont).
      </p>
      <p>
        <strong>7.3. Elfogadás</strong><br/>
        Megrendelő az átadástól számított <strong>5 munkanapon</strong> belül jelez hibát/észrevételt. Ennek hiányában a teljesítés elfogadottnak minősül.
      </p>
      <p>
        <strong>7.4. Hibajavítás</strong><br/><br/>
        <strong>7.4.1.</strong> A Megrendelő által határidőben jelzett, 7.2 szerinti hibákat Szolgáltató a <strong>90 napos finomhangolási időszak alatt</strong> 3 munkanapon belül kijavítja.<br/><br/>
        <strong>7.4.2.</strong> A javítás nem terjed ki harmadik fél szolgáltatás hibáira/kiesésére, illetve Megrendelő által biztosított tartalmakból beállításokból eredő problémákra.<br/><br/>
        <strong>7.4.3.</strong> A hibajavítás (bugfix) nem azonos a változtatási igénnyel (change request); utóbbi a 6. pont szerint kezelendő.
      </p>
      <p>
        <strong>7.5. Használat mint elfogadás</strong><br/>
        Ha Megrendelő az oldalt élesben használja (forgalmat terel, hirdetést futtat), az a teljesítés elfogadásának minősül.
      </p>

      <h2 className="font-extrabold mt-16">8. Hosting és technikai üzemeltetés</h2>
      <p><strong>8.1.</strong> Szolgáltató a landinget GitHub + Vercel környezetben hostolja és az éles URL-en elérhetővé teszi.</p>
      <p><strong>8.2.</strong> Hosting időtartama: <strong>12 hónap</strong> az élesítéstől.</p>
      <p><strong>8.3.</strong> A szolgáltatás nem tartalmaz automatikus GitHub/Vercel hozzáférés átadást.</p>
      <p><strong>8.4.</strong> A hosting nem tartalmaz harmadik fél kiesés miatti kompenzációt, illetve külső rendszerek teljes körű üzemeltetését.</p>
      <p><strong>8.5.</strong> Domain/DNS: Megrendelő biztosítja; Szolgáltató technikai információt ad és közreműködik.</p>
      <p><strong>8.6.</strong> Nemfizetés esetén Szolgáltató jogosult a szolgáltatást felfüggeszteni; tartós késedelem esetén az elérhetőség korlátozható.</p>
      <p><strong>8.7.</strong> 12 hónap után: hosszabbítás külön díjért, vagy átadás/átköltöztetés 9.6 szerint.</p>

      <h2 className="font-extrabold mt-16">9. Szerzői jog és felhasználási jog</h2>
      <p>
        <strong>9.1. Fogalmak</strong><br/><br/>
        „Landing anyagok”: a Megrendelőre szabott szöveg, design, struktúra, egyedi összhatás.<br/><br/>
        „Szolgáltatói elemek”: módszertan, sablon jellegű komponensek, generikus kódrészek, know-how.
      </p>
      <p>
        <strong>9.2. Kizárólagos felhasználási jog</strong><br/>
        A teljes díj megfizetésével Megrendelő a Landing anyagokra <strong>kizárólagos, időben és területben korlátlan felhasználási jogot</strong> szerez.
      </p>
      <p>
        <strong>9.3. Hosting és hozzáférések</strong><br/>
        A felhasználási jog fennállása nem függ attól, hogy Megrendelő kap-e GitHub/Vercel hozzáférést; a hostingot Szolgáltató nyújtja a 8. pont szerint.
      </p>
      <p>
        <strong>9.4. Szolgáltatói elemek</strong><br/>
        A Szolgáltatói elemek jogai Szolgáltatót illetik; Szolgáltató azokat más projektekben is használhatja, üzleti titok és egyedi Megrendelői tartalom kiadása nélkül.
      </p>
      <p>
        <strong>9.5. Harmadik fél licencek</strong><br/>
        Harmadik fél elemekre (pl. open source, font, stock) a licencfeltételek irányadók.
      </p>
      <p>
        <strong>9.6. Exit – forráskód átadás és költöztetés</strong><br/><br/>
        <strong>9.6.1. Forráskód átadás:</strong> Megrendelő kérésére Szolgáltató <strong>bármikor</strong> biztosítja a landing oldal forráskódját (GitHub repository átadás vagy export formájában), feltéve, hogy Megrendelőnek nincs lejárt fizetési tartozása.<br/><br/>
        <strong>9.6.2. Költöztetés:</strong> Megrendelő kérésére Szolgáltató vállalja a landing oldal Megrendelő saját GitHub/Vercel (vagy más) környezetébe történő átköltöztetését <strong>50.000 Ft</strong> díj ellenében. A költöztetés feltétele minden díj maradéktalan rendezése.<br/><br/>
        <strong>9.6.3. Határidő:</strong> a forráskód átadása és/vagy költöztetés megkezdése a díj rendezésétől számított ésszerű időn belül történik, a szükséges hozzáférések biztosításától függően.
      </p>
      <p>
        <strong>9.7. Referencia:</strong> Szolgáltató jogosult a munkát referenciaként feltüntetni (URL, képernyőkép, rövid esettanulmány), kivéve, ha Megrendelő ezt írásban kifejezetten megtiltja legkésőbb az élesítéstől számított 5 (öt) munkanapon belül. Tiltakozás esetén Szolgáltató a referenciahasználattól tartózkodik.
      </p>

      <h2 className="font-extrabold mt-16">10. Titoktartás és üzleti titok</h2>
      <p>
        <strong>10.1.</strong> Felek bizalmasan kezelik a teljesítés során tudomásukra jutott információkat (különösen: ajánlat, árazás, konverziós adatok, hirdetési/mérési eredmények, üzleti folyamatok, know-how).<br/><br/>
        <strong>10.2.</strong> Bizalmas információ harmadik személynek csak előzetes írásbeli engedéllyel adható át, kivéve jogszabályi kötelezés esetén.<br/><br/>
        <strong>10.3.</strong> A titoktartás a szerződés megszűnését követően <strong>3 évig</strong> fennmarad.
      </p>

      <h2 className="font-extrabold mt-16">11. Adatkezelés és GDPR</h2>
      <p>
        <strong>11.1.</strong> A landing oldalon keletkező személyes adatok tekintetében Megrendelő az adatkezelő.<br/><br/>
        <strong>11.2.</strong> Cookie/consent, adatkezelési tájékoztatók és a mérőkódok jogszerű használata Megrendelő felelőssége (kivéve külön megállapodás).<br/><br/>
        <strong>11.3.</strong> Szolgáltató csak a teljesítéshez szükséges mértékben fér hozzá adatokhoz.<br/><br/>
        <strong>11.4.</strong> Adatbiztonság: Szolgáltató ésszerű intézkedéseket alkalmaz.<br/><br/>
        <strong>11.5.</strong> Megrendelő biztosítja a szükséges tájékoztatások megjelenítését.<br/><br/>
        <strong>11.6. Adatfeldolgozói megállapodás (DPA)</strong><br/>
        Amennyiben a teljesítés során Szolgáltató adatfeldolgozónak minősül, a szerződés elválaszthatatlan részét képezi az <strong>1. számú melléklet (DPA)</strong>.
      </p>

      <h2 className="font-extrabold mt-16">12. Felelősség, eredménykizárás és harmadik felek</h2>
      <p>
        <strong>12.1.</strong> Szolgáltató konkrét eredményt nem garantál (CRO jelleg).<br/><br/>
        <strong>12.2.</strong> Megrendelő felel az általa adott tartalmak jogszerűségéért és valóságtartalmáért.<br/><br/>
        <strong>12.3.</strong> Szolgáltató nem felel harmadik fél szolgáltatások kieséséért/változásaiért.<br/><br/>
        <strong>12.4.</strong> Mérési korlátok (adblock, consent, platform-korlátok) tudomásul véve.<br/><br/>
        <strong>12.5. Felelősségkorlát</strong><br/>
        Szolgáltató az igazolt, közvetlen károkért felel; nem felel elmaradt haszonért és közvetett/következményi károkért. Szolgáltató összesített felelőssége – jogszabály által megengedett mértékig – nem haladhatja meg a Megrendelő által ténylegesen megfizetett díjat.<br/><br/>
        A korlátozás nem terjed ki a szándékos vagy súlyosan gondatlan károkozásra, illetve arra, amit jogszabály szerint nem lehet kizárni.
      </p>

      <h2 className="font-extrabold mt-16">13. A szerződés időtartama, megszűnése és felmondás</h2>
      <p>
        <strong>13.1.</strong> Hatály: aláírás napjától.<br/><br/>
        <strong>13.2.</strong> Projektidőszak: élesítés + 90 nap finomhangolás. Hosting: élesítéstől 12 hónap.<br/><br/>
        <strong>13.3.</strong> Súlyos szerződésszegés esetén felmondás írásban, felszólítással (legalább 5 munkanap).<br/><br/>
        <strong>13.4.</strong> Megrendelő együttműködésének tartós hiánya (30 napot meghaladó késedelem) esetén Szolgáltató felmondhat; előleg nem jár vissza.<br/><br/>
        <strong>13.5.</strong> Megszűnéskor elszámolás: az elvégzett munka díja jár, előleg kapacitáslekötés miatt nem visszatérítendő (eltérő megállapodás hiányában).<br/><br/>
        <strong>13.6.</strong> Hosting megszűnése/felfüggesztése: 8. pont szerint.
      </p>

      <h2 className="font-extrabold mt-16">14. Vegyes és záró rendelkezések</h2>
      <p>
        <strong>14.1.</strong> E-mailes nyilatkozatok írásbelinek minősülnek.<br/><br/>
        <strong>14.2.</strong> Módosítás csak írásban érvényes.<br/><br/>
        <strong>14.3.</strong> Részleges érvénytelenség nem érinti a többi pontot.<br/><br/>
        <strong>14.4.</strong> Irányadó jog: magyar jog (Ptk.).<br/><br/>
        <strong>14.5. Jogvita</strong>: A Felek a vitáikat elsősorban egyeztetéssel rendezik. Ennek eredménytelensége esetén – hatáskörtől függően – a <strong>Szolgáltató székhelye szerint hatáskörrel és illetékességgel rendelkező magyar bíróság</strong> jár el.<br/><br/>
        <strong>14.6.</strong> Teljességi záradék.
      </p>

      <h1 className="font-extrabold mt-16 mb-8 text-center md:text-left">Záró nyilatkozat és projektindítás</h1>
      <p className="mb-8">Amennyiben a fenti szerződés minden pontját megismerted, és azokat magadra nézve kötelezőnek fogadod el, kérlek, kattints az alábbi linkre a díjelőleg rendezéséhez:</p>
      
      <div className="not-prose text-left mb-8">
        <a href="https://buy.stripe.com/aFa7sK2AzenY3hBcbA6J200" className="inline-block w-full md:w-auto text-center bg-[#ea580c] hover:bg-[#d03e00] !text-white font-semibold py-4 px-10 rounded-md transition-colors text-xl !no-underline">
          Elfogadom a szerződést és kifizetem az előleget
        </a>
      </div>

      <p className="mb-4">Várom a közös munkát!</p>
      <p><strong>Bogdán Norbert János | DesignTér</strong></p>

    </article>
  );
}
