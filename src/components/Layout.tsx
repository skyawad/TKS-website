import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";
import { LangFallbackBanner } from "./LangFallbackBanner";
import { ScrollProgress } from "./ScrollProgress";
import { WhatsAppFAB } from "./WhatsAppFAB";
import { PageTransition } from "./PageTransition";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles.shell}>
      <ScrollProgress />
      <NavBar />
      <LangFallbackBanner />
      <Breadcrumbs />
      <main className={styles.main} id="main-content">
        <PageTransition />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
