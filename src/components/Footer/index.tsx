import { WEBSITE_NAME } from "../../../BLOG_CONSTANTS/_BLOG_SETUP"
import LinkTo from "../LinkTo"

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className={"dark:bg-slate-900 dark:text-white bg-slate-100 text-black"}>
            <div className="md:container flex items-center md:justify-center justify-around flex-wrap md:text-[14px] text-[12px] py-5">

                <LinkTo href="/privacy-policy" passHref={true} className="pr-[10px] md:pr-3">
                    
                </LinkTo>
                <LinkTo href="/terms-and-condition" passHref={true}>
                    
                </LinkTo>
            </div>
        </div>
    )
}

export default Footer