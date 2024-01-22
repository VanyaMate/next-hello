'use client';

import React from 'react';


export type PostItemProps = {
    title: string;
};

const PostItem: React.FC<PostItemProps> = (props) => {
    const { title } = props;

    return (
        <div>
            Post: { title }
        </div>
    );
};

export default React.memo(PostItem);