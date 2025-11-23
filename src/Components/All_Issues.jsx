import React from 'react';
import { useLoaderData } from 'react-router';

const All_Issues = () => {
    const issues = useLoaderData()
    return (
        <div>
            {issues.length}
        </div>
    );
};

export default All_Issues;