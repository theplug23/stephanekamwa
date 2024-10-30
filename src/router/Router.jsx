import React, {useState, Suspense} from "react";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import useEffectLocation from "../hooks/useEffectLocation";

import './style.scss';
import NotFound from "../views/404";
import { ProductionVideo } from "../components/portfolio/ProductionVideo";
import ProtectionData from "../views/ProtectionData";
import PortfolioWebDesign from "../components/portfolio/PortfolioWebDesign";

const Scrollbar = React.lazy(() => import("smooth-scrollbar"));

const MainDemo = React.lazy(() => import("../views/home/MainDemo"));
const Demo2 = React.lazy(() => import("../views/home/Demo2"));
const Demo3 = React.lazy(() => import("../views/home/Demo3"));

const SliderOne = React.lazy(() => import("../views/slider/SliderOne"));
const SliderTow = React.lazy(() => import("../views/slider/SliderTow"));
const SliderThree = React.lazy(() => import("../views/slider/SliderThree"));

const Work = React.lazy(() => import("../views/Work"));
const WorkTow = React.lazy(() => import("../views/WorkTow"));
const ProjectDetails = React.lazy(() => import("../views/portfolio/ProjectDetails"));

const About = React.lazy(() => import("../views/About"));
const MeetTeam = React.lazy(() => import("../views/MeetTeam"));
const Services = React.lazy(() => import("../views/Services"));
const Contact = React.lazy(() => import("../views/Contact"));
const BlogDetails = React.lazy(() => import("../views/blog/BlogDetails"));
const Blogs = React.lazy(() => import("../views/Blog"));
const Impressum = React.lazy(() => import("../views/Impressum"));


const Router = () => {

    const [transPage, setTransPage] = useState("in");
    const scrollbar: React.MutableRefObject<null | Scrollbar> = useSelector(state => state.scrollbar);

    const location = useEffectLocation((l) => {
        setTransPage("out");
    })

    const onAnimateEnd = () => {
        if (transPage !== "out") return;
        scrollbar.current?.scrollTo(0, 0, 0);
        window.scrollTo({left: 0, top: 0});
        setTransPage("in");
    }


    return (

        <div id="dsn-content" className={`dsn-transition-page dsn-animate-${transPage}`}
            onAnimationEnd={onAnimateEnd}
        >
            <Suspense fallback={<div className="background-main h-100-v" />}>
                <Routes location={location}>

                    <Route path="/" element={<MainDemo/>}/>
                    {/* <Route path="/demo-2" element={<Demo2/>}/>
                    <Route path="/demo-3" element={<Demo3/>}/>

                    <Route path="/slider" element={<SliderOne/>}/>
                    <Route path="/slider-2" element={<SliderTow/>}/>
                    <Route path="/slider-3" element={<SliderThree/>}/> */}

                    <Route exact path="/portfolio" element={<WorkTow/>}/>
                    {/* <Route exact path="/portfolio-2" element={<Work/>}/> */}
                    <Route exact path="/portfolio/:slug" element={<ProjectDetails/>}/>

                    <Route exact path="/about" element={<About/>}/>
                    {/* <Route exact path="/meet-the-team" element={<MeetTeam/>}/> */}
                    <Route exact path="/services" element={<Services/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                    <Route exact path="/blog" element={<Blogs />}></Route>
                    <Route exact path="/blog/:title" element={<BlogDetails/>}/>
                    <Route exact path="/video-production" element={<ProductionVideo />} />
                    <Route exact path="/webdesign-production" element={<PortfolioWebDesign />} />
                    <Route exact path="/impressum" element={<Impressum />} />
                    <Route exact path="/protection-data" element={<ProtectionData />} />
                    <Route exact path="*" element={<NotFound />}/>
                </Routes>
            </Suspense>
        </div>
    );
}

export default React.memo(Router);