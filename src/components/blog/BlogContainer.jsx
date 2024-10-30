import React, { useEffect, useState } from 'react'
import './style.scss'
import {Row, Col} from 'react-bootstrap';
import heroImage from '../../assets/img/header.jpg';
import BlogItem from './BlogItem';
import axios from 'axios';
import { longueurTexte } from '../../utils';

const BlogClassic = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios.get('https://api.comtheplug.com/api/posts')
        .then(res => setPosts(res.data))
    }, [])

    return (
        <section className='dsn-blog'>
            <Row>
                {posts.map(
                    (item, index) => {
                        return (
                            <Col xs={6} key={index}>
                                <BlogItem
                                    id={item.id}
                                    image={item.image}
                                    title={item.title} 
                                    category={item.category}
                                    author={item.author} 
                                    href={`/blog/${item.slug}`}
                                />
                            </Col>
                        );
                    }
                )}
            </Row>
        </section>
    );
}


export default BlogClassic