import { MainLayout } from "@/components/layouts/main";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Restaraunts() {
    const router = useRouter();
    return <MainLayout>
        <section className={`section ${styles.restarauntsMain}`}>
            <div className={styles.restarauntsMainWrapper}>
                <h1>Restaraunts in {router.query.country ? router.query.country : 'Kazakhstan' }</h1>
                <div className={styles.restarauntsContainer}>
                    <div>
                        <img src="/cities/almaty.jpeg" style={{width:'230px',height:'210px',backgroundColor:'red'}} />
                        <div>
                            <Link href="/restaraunts/almaty">1 Almaty Restaraunts</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </MainLayout>
}
