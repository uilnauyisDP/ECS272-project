/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import { SORTED_ARTICLES_BY_DATE } from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";

const Home = () => {
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <section className='w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200'
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "50vh",
          backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/e/ed/Earth-EpicDay260-20150917.gif")`, 
          display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>
        <div
          style={{
            color: "white",
            alignItems: "center"
          }}
        className="container text-center px-3">
          <Text title className='text-10xl'>
          Beyond GDP: Factors Behind Success of Developed Countries 
          </Text>

          <Text p className="mt-3 text-xl">
            Siyuan Liu, Xiang Hao
          </Text>

        </div>
      </section>
      <div className="container mx-auto lg:px-[15px] px-0">
        <div className={'flex flex-wrap'}>
          <FeaturedArticleSection />
          <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>Checkout the below articles on how to use different layouts and components</h1>
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
          <HomeNonFeatureArticles />
        </div>
      </div>
    </PageLayout>
  )
}

export default Home