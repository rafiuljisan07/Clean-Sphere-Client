import React from 'react';
import { useLoaderData } from 'react-router';
import IssueCard from './IssueCard';
import Container from '../container/Container';

const All_Issues = () => {
    const issues = useLoaderData()
    return (
        <div>
            <Container className='flex flex-col'>
                <h1 className='text-2xl font-semibold mb-4'>All Issues</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        issues.map(issue => <IssueCard issue={issue} key={issue._id} />)
                    }
                </div>
            </Container>
        </div>

    );
};

export default All_Issues;