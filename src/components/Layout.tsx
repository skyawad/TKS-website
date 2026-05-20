import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { LangFallbackBanner } from "./LangFallbackBanner";
import { WhatsAppFAB } from "./WhatsAppFAB";
import { PageTransition } from "./PageTransition";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles.shell}>
      <NavBar />
      <LangFallbackBanner />
      <main className={styles.main} id="main-content">
        <PageTransition />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
