import React from 'react';
import blogContentData from '../../data/BlogContentData';
import BlogPartCard from './blogpart/BlogPartCard';

export default function BlogPart() {
    
    const cards = blogContentData.map(
        (data) => <BlogPartCard
            key={data.id}
            name={data.name}
            author={data.author}
            tag={data.tag}
            date={data.date}
            url={data.url}
            img={data.img}
        />
    )

    return (
        <div className='container'>
            <section className='blogpart'>
                <div className='blogpart__header'>
                    <h1 className='blogpart__header_title'>Read our Blog posts</h1>
                    <a href='#'><button className='blogpart__header_btn btn-read'>Go to Blog</button></a>
                </div>
                <div className='blogpart__content'>
                    <div className="blogpart__main" style={{backgroundImage: `url(${blogContentData[0].img})`}}>
                        <div className='blogpart__main_tag blogpart__tag'>{blogContentData[0].tag}</div>
                        <div className='blogpart__card'>
                            <h1 className='blogpart__card_title'>{blogContentData[0].name}</h1>
                            <div>
                                <img src={blogContentData[0].author} alt="" className="blogpart__card_atimg"/>
                                <span>{blogContentData[0].author}</span>
                                <span>{blogContentData[0].date}</span>
                            </div>
                        </div>
                    </div>
                    <div className="blogpart__middle">
                        <img className="blogpart__middle_img" src={blogContentData[1].img} alt=''/>
                        <div className='blogpart__middle_content mobile' style={{backgroundImage: `url(${blogContentData[1].img})`}}>
                            <div className='blogpart__main_tag blogpart__tag'>{blogContentData[1].tag}</div>
                            <div className='blogpart__card'>
                                <h1 className='blogpart__card_title'>{blogContentData[1].name}</h1>
                                <div>
                                    <img src={blogContentData[1].author} alt="" className="blogpart__card_atimg"/>
                                    <span>{blogContentData[1].author}</span>
                                    <span>{blogContentData[1].date}</span>
                                </div>
                            </div>
                        </div>
                        <div className='blogpart__middle_content'>
                            <div className='blogpart__middle_tag blogpart__tag'>{blogContentData[1].tag}</div>
                            <h1 className='blogpart__card_title'>{blogContentData[1].name}</h1>
                            <div>
                                <span>{blogContentData[1].author}</span>
                                <span>{blogContentData[1].date}</span>
                            </div>
                        </div>
                    </div>
                    <div className="blogpart__list">
                        {cards}
                    </div>
                </div>
            </section>
        </div>
    )
}