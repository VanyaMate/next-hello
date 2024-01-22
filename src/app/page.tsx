import React from 'react';
import PostItem from '@/app/components/post/PostItem/PostItem';


export type PageProps = {};

const Page = async (props: PageProps) => {
    const {} = props;
    const posts: {
        title: string
    }[]      = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'get' }).then((response) => response.json());

    return (
        <div>
            {
                posts.map((post) => <PostItem key={ post.title } title={ post.title }/>)
            }
        </div>
    );
};

export default Page;