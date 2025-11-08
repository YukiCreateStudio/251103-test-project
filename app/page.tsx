import styles from "./page.module.css";
import ButtonLink from "./_components/ButtonLink";
import NewsList from "./_components/NewsList";
import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "./constants";
import Hero from "@/app/_components/Hero";


export default async function Home() {
  const data =await getNewsList({
    limit:NEWS_LIST_LIMIT,
  })

  return (
    <>
      <Hero
        title="テクノロジーの力で世界を変える"
        sub="私たちは市場をリードしているグローバルテックカンパニーです。"
      />
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={ data.contents } />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
